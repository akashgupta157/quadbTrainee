import App from "./App";
import { describe, test, expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";

describe("App Component", () => {
  test("renders initial tasks", () => {
    render(<App />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a project")).toBeInTheDocument();
    expect(screen.getByText("Deploy to production")).toBeInTheDocument();
  });

  test("adds a new task", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Add new task...");
    const addButton = screen.getByText("Add Task");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(await screen.findByText("New Task")).toBeInTheDocument();
  });

  test("toggles task completion", () => {
    render(<App />);
    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes[0]).toBeChecked();
    expect(checkboxes[1]).not.toBeChecked();
    fireEvent.click(checkboxes[0]);
    expect(checkboxes[0]).not.toBeChecked();
    fireEvent.click(checkboxes[1]);
    expect(checkboxes[1]).toBeChecked();
  });

  test("deletes a task", () => {
    render(<App />);
    const deleteButtons = screen.getAllByText("Delete");
    const initialTasks = screen.getAllByRole("checkbox").length;

    fireEvent.click(deleteButtons[0]);

    expect(screen.getAllByRole("checkbox").length).toBe(initialTasks - 1);
  });
});

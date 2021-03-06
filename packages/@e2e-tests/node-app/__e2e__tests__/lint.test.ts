import { runCliCommand } from "@helpers/test-utils";

describe("lint", () => {
  it("exits successfully on well formatted code base", async () => {
    const runner = runCliCommand("yarn run ts-engine lint");

    // Wait for tool to complete
    const statusCode = await runner.waitForStatusCode();

    // Should exit successfully
    expect(statusCode).toBe(0);

    // Printed help to stdout
    expect(runner.stdoutLines).toContainInOrder(["✓ No issues found"]);
  });
});

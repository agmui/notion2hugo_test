---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 143
toc: false
icon: ""
---

Publishers and Subscribers are good but what if you want a two-way style of communication between nodes?

Server and Clients are similar to Publisher and Subscribers where they have a `Service` and Nodes can communicate through those services.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVSNGDC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIGi5JpU%2Bsvsh4ntBe1UYeCgNwYEd4PLXn2aEfUHEPal5AiEAjhnjrrmFI61PBOSw9ezhuYpOnz1q%2B6mMD2EuZ2QlvOsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNbWZ3j9a%2BfGv821RircA93BcSgZC2Y5MunsGSoDGo4bn%2FNPbm16CDl1jmYqHiVhc37c6nbOgoCLOzcunPbNpOi01mgiCh7VBnnjfl%2BN6vcJXnPiFRX7abFU4aeQnxyaW0mnxfcXaVc2akXP%2FMCJ2Xw3sVoYOwEzlY%2BOjq8GLNVP6uyAhxruzunHns5VpUe1gC%2FU4BToLPtlXlkw%2FpmkBD1nIo4ZmZVhi9LicWIRHVHAyLhPD7FzgmsGCmHSlDd5eVmBkyaP9RjMW5c3gIItllbCEKZDLFVRCImup94t%2FSDTRGI8rnnzCtmnG0O4HOrAg%2FPVRDeykW7YpUWvm%2BLH3BAogcRMRgaEIcwsr7VDzCTEg%2BVJ6zGCe0FzWruraoHGWYt%2F3E4TP9JR0yAbanjoFxuzCqXmt4V5%2BqCVTcLzbZ1%2FW8GOPilcRJgnV80NjTjlNqFEWz%2FY1%2BqLshv1fER3NS6LXxEmhWiQIAWIMqSHVroI7dpRcINw8iXOukGCLrQ%2BBwKT9pxX%2BobPhlm4aXvpGgNtqU39mf4zOr2%2BzQ4A6rEFf9GayE1SaIGOA9ZKOVYpEuTPkZUIs%2BPr8ODQMs8SHRcD9Fg%2BSCAyxMqCegROpcA50d%2BuoovdI9mrGttppUsXz8a8PWOLZaWT2hEYMMHj%2F8QGOqUBvDuCniivMAhCYcJ83L1IWw5RiXpJEpr3Iv5mVXd4NQ%2FeRiAW9sECkWLgrbjg54F%2FjicZ%2BPDLES%2FUTH5IB8F2xMhRPPPUte5kGTPWG06sdBMAAFCkUWJYEIGmdV6v99zMyc%2FPNcgxzIgBkUUnT5oPfBbEuoX6asIjZTczVTbJjXxO1RvmPzA8ZffV7WOv1LB8HYM1mIcrpI02iMoUKilZfsy4R%2Fl9&X-Amz-Signature=92c454186bde85547ed38154bee0a9b09c37922933a6dc7e341ddd9242040811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![Service-MultipleServiceClient.gif](https://docs.ros.org/en/humble/_images/Service-MultipleServiceClient.gif)

Let's make a basic service where it just adds 2 numbers

# Server

create a file called `server.py` and import the `ROS` libraries:

```python
from example_interfaces.srv import AddTwoInts

import rclpy
from rclpy.node import Node
```

Then create a class `MinimalService` that implements `Node`

```python
class MinimalService(Node):
```

in the constructor run the parent constructor and create a service object:

```python
    def __init__(self):
        super().__init__("minimal_service")
        self.srv = self.create_service(AddTwoInts, "add_two_ints", self.add_two_ints_callback)
```

The service object takes the type it expects, the name, and the function to handle the request.

Next, create the function to handle the request and have it return the result of the sum.

```python
    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info("Incoming request\na: "+ str(request.a) +" b: " + str(request.b))
        return response
```

Then outside of the class, we want to start the node:

```python
def main():
    rclpy.init()                        # initializes the ROS library

    minimal_service = MinimalService()  # creates our MinimalService obj

    rclpy.spin(minimal_service)         # causes minimal_service to loop

    rclpy.shutdown()                    # deinits the ROS library


if __name__ == '__main__':
    main()
```

## Solution

```python
from example_interfaces.srv import AddTwoInts

import rclpy
from rclpy.node import Node


class MinimalService(Node):
    def __init__(self):
        super().__init__("minimal_service")
        self.srv = self.create_service(AddTwoInts, "add_two_ints", self.add_two_ints_callback)

    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info("Incoming request\na: "+ str(request.a) +" b: " + str(request.b))
        return response


def main():
    rclpy.init()                        # initializes the ROS library

    minimal_service = MinimalService()  # creates our MinimalService obj

    rclpy.spin(minimal_service)         # causes minimal_service to loop

    rclpy.shutdown()                    # deinits the ROS library


if __name__ == '__main__':
    main()
```

# Client

For the client lets have it where it takes in the two numbers as input arguments before we run it: `python3 client.py 2 3`

create a file called client`.py` and import the `ROS` libraries:

```python
import sys

from example_interfaces.srv import AddTwoInts
import rclpy
from rclpy.node import Node
```

create a class called `MinimalClientAsync` and extend the `Node` class

```python
class MinimalClientAsync(Node):
```

in the constructor run the parent class’s constructor and create a client object and a request object.

Then we try to connect the client with the service by using `while`. This will search for 1 second for the service `"add_two_ints"` before it gives up. 

```python
    def __init__(self):
        super().__init__("minimal_client_async")
        self.cli = self.create_client(AddTwoInts, "add_two_ints")
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info("service not available, waiting again...")
        self.req = AddTwoInts.Request()

```

Next lets create a function, `send_request()` to take in two numbers and call the service:

```python
	def send_request(self, a, b):
		self.req.a = a
		self.req.b = b
		return self.cli.call_async(self.req) # uses client object to call the service
```

Then outside of the class we want to run our new Node so first init the `ROS` library with:

```python
rclpy.init()
```

Then create a `MinimalClientAsync()` object.

We are then going to take the two input arguments with `sys.argv[1]` and `sys.argv[2]` 

plug them into `send_request` and wait for the result

To wait for a response from the service we use `rclpy.spin_until_future_complete()`

It takes in 2 arguments, the Client Node and the variable that holds the result.

finally, we get our results with `future.result()` and print it out.

```python

minimal_client = MinimalClientAsync()
future = minimal_client.send_request(int(sys.argv[1]), int(sys.argv[2]))
rclpy.spin_until_future_complete(minimal_client, future)
response = future.result()
minimal_client.get_logger().info("Result of add_two_ints: for "+ sys.argv[1] + " + " + sys.argv[2] + " = " + str(response.sum))
```

Then we shut everything down:

```python
minimal_client.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import sys

from example_interfaces.srv import AddTwoInts
import rclpy
from rclpy.node import Node


class MinimalClientAsync(Node):
    def __init__(self):
        super().__init__("minimal_client_async")
        self.cli = self.create_client(AddTwoInts, "add_two_ints")
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info("service not available, waiting again...")
        self.req = AddTwoInts.Request()

    def send_request(self, a, b):
        self.req.a = a
        self.req.b = b
        return self.cli.call_async(self.req)


def main():
    rclpy.init()

    minimal_client = MinimalClientAsync()
    future = minimal_client.send_request(int(sys.argv[1]), int(sys.argv[2]))
    rclpy.spin_until_future_complete(minimal_client, future)
    response = future.result()
    minimal_client.get_logger().info("Result of add_two_ints: for "+ sys.argv[1] + " + " + sys.argv[2] + " = " + str(response.sum))

    minimal_client.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Now that we have created a Server and Client we can run them both to see them in action

In two different terminals run the Server first then the client

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVSNGDC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIGi5JpU%2Bsvsh4ntBe1UYeCgNwYEd4PLXn2aEfUHEPal5AiEAjhnjrrmFI61PBOSw9ezhuYpOnz1q%2B6mMD2EuZ2QlvOsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNbWZ3j9a%2BfGv821RircA93BcSgZC2Y5MunsGSoDGo4bn%2FNPbm16CDl1jmYqHiVhc37c6nbOgoCLOzcunPbNpOi01mgiCh7VBnnjfl%2BN6vcJXnPiFRX7abFU4aeQnxyaW0mnxfcXaVc2akXP%2FMCJ2Xw3sVoYOwEzlY%2BOjq8GLNVP6uyAhxruzunHns5VpUe1gC%2FU4BToLPtlXlkw%2FpmkBD1nIo4ZmZVhi9LicWIRHVHAyLhPD7FzgmsGCmHSlDd5eVmBkyaP9RjMW5c3gIItllbCEKZDLFVRCImup94t%2FSDTRGI8rnnzCtmnG0O4HOrAg%2FPVRDeykW7YpUWvm%2BLH3BAogcRMRgaEIcwsr7VDzCTEg%2BVJ6zGCe0FzWruraoHGWYt%2F3E4TP9JR0yAbanjoFxuzCqXmt4V5%2BqCVTcLzbZ1%2FW8GOPilcRJgnV80NjTjlNqFEWz%2FY1%2BqLshv1fER3NS6LXxEmhWiQIAWIMqSHVroI7dpRcINw8iXOukGCLrQ%2BBwKT9pxX%2BobPhlm4aXvpGgNtqU39mf4zOr2%2BzQ4A6rEFf9GayE1SaIGOA9ZKOVYpEuTPkZUIs%2BPr8ODQMs8SHRcD9Fg%2BSCAyxMqCegROpcA50d%2BuoovdI9mrGttppUsXz8a8PWOLZaWT2hEYMMHj%2F8QGOqUBvDuCniivMAhCYcJ83L1IWw5RiXpJEpr3Iv5mVXd4NQ%2FeRiAW9sECkWLgrbjg54F%2FjicZ%2BPDLES%2FUTH5IB8F2xMhRPPPUte5kGTPWG06sdBMAAFCkUWJYEIGmdV6v99zMyc%2FPNcgxzIgBkUUnT5oPfBbEuoX6asIjZTczVTbJjXxO1RvmPzA8ZffV7WOv1LB8HYM1mIcrpI02iMoUKilZfsy4R%2Fl9&X-Amz-Signature=8edec38e07c58bbdaaa1a075a9d979ac7a22e023d87b99108c3c600975701778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVSNGDC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIGi5JpU%2Bsvsh4ntBe1UYeCgNwYEd4PLXn2aEfUHEPal5AiEAjhnjrrmFI61PBOSw9ezhuYpOnz1q%2B6mMD2EuZ2QlvOsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNbWZ3j9a%2BfGv821RircA93BcSgZC2Y5MunsGSoDGo4bn%2FNPbm16CDl1jmYqHiVhc37c6nbOgoCLOzcunPbNpOi01mgiCh7VBnnjfl%2BN6vcJXnPiFRX7abFU4aeQnxyaW0mnxfcXaVc2akXP%2FMCJ2Xw3sVoYOwEzlY%2BOjq8GLNVP6uyAhxruzunHns5VpUe1gC%2FU4BToLPtlXlkw%2FpmkBD1nIo4ZmZVhi9LicWIRHVHAyLhPD7FzgmsGCmHSlDd5eVmBkyaP9RjMW5c3gIItllbCEKZDLFVRCImup94t%2FSDTRGI8rnnzCtmnG0O4HOrAg%2FPVRDeykW7YpUWvm%2BLH3BAogcRMRgaEIcwsr7VDzCTEg%2BVJ6zGCe0FzWruraoHGWYt%2F3E4TP9JR0yAbanjoFxuzCqXmt4V5%2BqCVTcLzbZ1%2FW8GOPilcRJgnV80NjTjlNqFEWz%2FY1%2BqLshv1fER3NS6LXxEmhWiQIAWIMqSHVroI7dpRcINw8iXOukGCLrQ%2BBwKT9pxX%2BobPhlm4aXvpGgNtqU39mf4zOr2%2BzQ4A6rEFf9GayE1SaIGOA9ZKOVYpEuTPkZUIs%2BPr8ODQMs8SHRcD9Fg%2BSCAyxMqCegROpcA50d%2BuoovdI9mrGttppUsXz8a8PWOLZaWT2hEYMMHj%2F8QGOqUBvDuCniivMAhCYcJ83L1IWw5RiXpJEpr3Iv5mVXd4NQ%2FeRiAW9sECkWLgrbjg54F%2FjicZ%2BPDLES%2FUTH5IB8F2xMhRPPPUte5kGTPWG06sdBMAAFCkUWJYEIGmdV6v99zMyc%2FPNcgxzIgBkUUnT5oPfBbEuoX6asIjZTczVTbJjXxO1RvmPzA8ZffV7WOv1LB8HYM1mIcrpI02iMoUKilZfsy4R%2Fl9&X-Amz-Signature=d1d6c6ae178be012b7a6bda9b5756936fea2abf7537d0783943772efb15e3b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVSNGDC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIGi5JpU%2Bsvsh4ntBe1UYeCgNwYEd4PLXn2aEfUHEPal5AiEAjhnjrrmFI61PBOSw9ezhuYpOnz1q%2B6mMD2EuZ2QlvOsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNbWZ3j9a%2BfGv821RircA93BcSgZC2Y5MunsGSoDGo4bn%2FNPbm16CDl1jmYqHiVhc37c6nbOgoCLOzcunPbNpOi01mgiCh7VBnnjfl%2BN6vcJXnPiFRX7abFU4aeQnxyaW0mnxfcXaVc2akXP%2FMCJ2Xw3sVoYOwEzlY%2BOjq8GLNVP6uyAhxruzunHns5VpUe1gC%2FU4BToLPtlXlkw%2FpmkBD1nIo4ZmZVhi9LicWIRHVHAyLhPD7FzgmsGCmHSlDd5eVmBkyaP9RjMW5c3gIItllbCEKZDLFVRCImup94t%2FSDTRGI8rnnzCtmnG0O4HOrAg%2FPVRDeykW7YpUWvm%2BLH3BAogcRMRgaEIcwsr7VDzCTEg%2BVJ6zGCe0FzWruraoHGWYt%2F3E4TP9JR0yAbanjoFxuzCqXmt4V5%2BqCVTcLzbZ1%2FW8GOPilcRJgnV80NjTjlNqFEWz%2FY1%2BqLshv1fER3NS6LXxEmhWiQIAWIMqSHVroI7dpRcINw8iXOukGCLrQ%2BBwKT9pxX%2BobPhlm4aXvpGgNtqU39mf4zOr2%2BzQ4A6rEFf9GayE1SaIGOA9ZKOVYpEuTPkZUIs%2BPr8ODQMs8SHRcD9Fg%2BSCAyxMqCegROpcA50d%2BuoovdI9mrGttppUsXz8a8PWOLZaWT2hEYMMHj%2F8QGOqUBvDuCniivMAhCYcJ83L1IWw5RiXpJEpr3Iv5mVXd4NQ%2FeRiAW9sECkWLgrbjg54F%2FjicZ%2BPDLES%2FUTH5IB8F2xMhRPPPUte5kGTPWG06sdBMAAFCkUWJYEIGmdV6v99zMyc%2FPNcgxzIgBkUUnT5oPfBbEuoX6asIjZTczVTbJjXxO1RvmPzA8ZffV7WOv1LB8HYM1mIcrpI02iMoUKilZfsy4R%2Fl9&X-Amz-Signature=84e2e75d8d7bca0ea044f937c74691cd237d3348346e5409fbc41805c36e81ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVSNGDC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIGi5JpU%2Bsvsh4ntBe1UYeCgNwYEd4PLXn2aEfUHEPal5AiEAjhnjrrmFI61PBOSw9ezhuYpOnz1q%2B6mMD2EuZ2QlvOsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNbWZ3j9a%2BfGv821RircA93BcSgZC2Y5MunsGSoDGo4bn%2FNPbm16CDl1jmYqHiVhc37c6nbOgoCLOzcunPbNpOi01mgiCh7VBnnjfl%2BN6vcJXnPiFRX7abFU4aeQnxyaW0mnxfcXaVc2akXP%2FMCJ2Xw3sVoYOwEzlY%2BOjq8GLNVP6uyAhxruzunHns5VpUe1gC%2FU4BToLPtlXlkw%2FpmkBD1nIo4ZmZVhi9LicWIRHVHAyLhPD7FzgmsGCmHSlDd5eVmBkyaP9RjMW5c3gIItllbCEKZDLFVRCImup94t%2FSDTRGI8rnnzCtmnG0O4HOrAg%2FPVRDeykW7YpUWvm%2BLH3BAogcRMRgaEIcwsr7VDzCTEg%2BVJ6zGCe0FzWruraoHGWYt%2F3E4TP9JR0yAbanjoFxuzCqXmt4V5%2BqCVTcLzbZ1%2FW8GOPilcRJgnV80NjTjlNqFEWz%2FY1%2BqLshv1fER3NS6LXxEmhWiQIAWIMqSHVroI7dpRcINw8iXOukGCLrQ%2BBwKT9pxX%2BobPhlm4aXvpGgNtqU39mf4zOr2%2BzQ4A6rEFf9GayE1SaIGOA9ZKOVYpEuTPkZUIs%2BPr8ODQMs8SHRcD9Fg%2BSCAyxMqCegROpcA50d%2BuoovdI9mrGttppUsXz8a8PWOLZaWT2hEYMMHj%2F8QGOqUBvDuCniivMAhCYcJ83L1IWw5RiXpJEpr3Iv5mVXd4NQ%2FeRiAW9sECkWLgrbjg54F%2FjicZ%2BPDLES%2FUTH5IB8F2xMhRPPPUte5kGTPWG06sdBMAAFCkUWJYEIGmdV6v99zMyc%2FPNcgxzIgBkUUnT5oPfBbEuoX6asIjZTczVTbJjXxO1RvmPzA8ZffV7WOv1LB8HYM1mIcrpI02iMoUKilZfsy4R%2Fl9&X-Amz-Signature=20b6e0b7dd94a3d197daedb0c65daf0dd5923a603e40b4e20feea8b23b177385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

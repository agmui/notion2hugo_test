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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRY6SK62%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIGv4P%2FeZT1ohJiQ8WffqKzklJx7MSDOMhqXcl9vQww38AiEA%2B1QE5M7xYC4OWGe4pOsXynKsSHNA4TUZKWG5Jv1qMJcqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQP%2F1GX8h3qK6YzoCrcA4D8SV%2Fi0qk7MA8yDOrmKkdbMAHFRkQ0rpKzFOckOMLBus57lf4NMnskLgwuQjjDThVRSVJ311l06b%2FedDMvfrtDHsLCoBaLjiIZzxHZNl5sSHaFrfP51qGr0QEQVjZHlQ8Q%2BD6p%2BWl78LE7suK%2BthdX9uSWFnaqG%2BdaATi1XbE9WgsorLGriuaRDVZ9fk9VzdtZ3%2FzLjkeSeC0h%2FkUwfqlnUaQfW4w9BPQhwdfsqA3D1XhE%2BI%2BPgWCy1jN4SRDFQITIXto1IVPQXrzcbN8y7JfawO7uyXxca4%2B4El4m4hNUGjoHAKq6rU4LVcWbSyLOqYdlMVcWEtWDhQH9mUbtOJYNYOKY05YXrDqDUlXbGKG6%2FXTgHXXICprnejpG%2F8TXJBT3J6Z8Xd3HFM8IKmb2ip1yWaYEj3WkOSfXH%2FPRdg3dUZfkLA3HA4o4YXlXb2obk4B45pviIZ%2BHqx31g1iEffILmeTnGscdtuBUptoWDarIwPILsQ%2BMk2v9XTzM24rSPcjkVt3q2tSYmYQiEcODocf%2BS%2BceGanWJDO0WVxw7q0JEsJrBw1HMC5Y7uTx8uIamcMkUcDZzatsPKmU02YpG2zICqeflMePMGdgvAnOo%2Bi%2FkowChfyJ5ZCy88uQMMSKy8sGOqUBysp6MD0v3D95wrLQbkjQmY3xols%2Ft2APLAonxx96Lgv1YdBhUmRSIxzUeMTrIxRnHp2f3NkMj5jwCZGhjIr6%2FZhmZ0AR%2BqqwrfXGKkux6uvlJCF2xYOZEKB%2FfcDjj0wl9VZJw8vZxhC2G6OuH6NoZQMb7Qz%2BczFf3vh9i0usxAuzAEjrCKB7n9vEb%2Fbj9YGMgkfe4iPCWH6eAOZ1lHcxJHBNlNGU&X-Amz-Signature=76fb6c79ccdd8f037e2157584cf67106736d9bee30ec7fcdccfacae7ecf772fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRY6SK62%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIGv4P%2FeZT1ohJiQ8WffqKzklJx7MSDOMhqXcl9vQww38AiEA%2B1QE5M7xYC4OWGe4pOsXynKsSHNA4TUZKWG5Jv1qMJcqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQP%2F1GX8h3qK6YzoCrcA4D8SV%2Fi0qk7MA8yDOrmKkdbMAHFRkQ0rpKzFOckOMLBus57lf4NMnskLgwuQjjDThVRSVJ311l06b%2FedDMvfrtDHsLCoBaLjiIZzxHZNl5sSHaFrfP51qGr0QEQVjZHlQ8Q%2BD6p%2BWl78LE7suK%2BthdX9uSWFnaqG%2BdaATi1XbE9WgsorLGriuaRDVZ9fk9VzdtZ3%2FzLjkeSeC0h%2FkUwfqlnUaQfW4w9BPQhwdfsqA3D1XhE%2BI%2BPgWCy1jN4SRDFQITIXto1IVPQXrzcbN8y7JfawO7uyXxca4%2B4El4m4hNUGjoHAKq6rU4LVcWbSyLOqYdlMVcWEtWDhQH9mUbtOJYNYOKY05YXrDqDUlXbGKG6%2FXTgHXXICprnejpG%2F8TXJBT3J6Z8Xd3HFM8IKmb2ip1yWaYEj3WkOSfXH%2FPRdg3dUZfkLA3HA4o4YXlXb2obk4B45pviIZ%2BHqx31g1iEffILmeTnGscdtuBUptoWDarIwPILsQ%2BMk2v9XTzM24rSPcjkVt3q2tSYmYQiEcODocf%2BS%2BceGanWJDO0WVxw7q0JEsJrBw1HMC5Y7uTx8uIamcMkUcDZzatsPKmU02YpG2zICqeflMePMGdgvAnOo%2Bi%2FkowChfyJ5ZCy88uQMMSKy8sGOqUBysp6MD0v3D95wrLQbkjQmY3xols%2Ft2APLAonxx96Lgv1YdBhUmRSIxzUeMTrIxRnHp2f3NkMj5jwCZGhjIr6%2FZhmZ0AR%2BqqwrfXGKkux6uvlJCF2xYOZEKB%2FfcDjj0wl9VZJw8vZxhC2G6OuH6NoZQMb7Qz%2BczFf3vh9i0usxAuzAEjrCKB7n9vEb%2Fbj9YGMgkfe4iPCWH6eAOZ1lHcxJHBNlNGU&X-Amz-Signature=780262aa033772d909e8d754c7b191515179371e234a2f1bc2cc4406de76652e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRY6SK62%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIGv4P%2FeZT1ohJiQ8WffqKzklJx7MSDOMhqXcl9vQww38AiEA%2B1QE5M7xYC4OWGe4pOsXynKsSHNA4TUZKWG5Jv1qMJcqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQP%2F1GX8h3qK6YzoCrcA4D8SV%2Fi0qk7MA8yDOrmKkdbMAHFRkQ0rpKzFOckOMLBus57lf4NMnskLgwuQjjDThVRSVJ311l06b%2FedDMvfrtDHsLCoBaLjiIZzxHZNl5sSHaFrfP51qGr0QEQVjZHlQ8Q%2BD6p%2BWl78LE7suK%2BthdX9uSWFnaqG%2BdaATi1XbE9WgsorLGriuaRDVZ9fk9VzdtZ3%2FzLjkeSeC0h%2FkUwfqlnUaQfW4w9BPQhwdfsqA3D1XhE%2BI%2BPgWCy1jN4SRDFQITIXto1IVPQXrzcbN8y7JfawO7uyXxca4%2B4El4m4hNUGjoHAKq6rU4LVcWbSyLOqYdlMVcWEtWDhQH9mUbtOJYNYOKY05YXrDqDUlXbGKG6%2FXTgHXXICprnejpG%2F8TXJBT3J6Z8Xd3HFM8IKmb2ip1yWaYEj3WkOSfXH%2FPRdg3dUZfkLA3HA4o4YXlXb2obk4B45pviIZ%2BHqx31g1iEffILmeTnGscdtuBUptoWDarIwPILsQ%2BMk2v9XTzM24rSPcjkVt3q2tSYmYQiEcODocf%2BS%2BceGanWJDO0WVxw7q0JEsJrBw1HMC5Y7uTx8uIamcMkUcDZzatsPKmU02YpG2zICqeflMePMGdgvAnOo%2Bi%2FkowChfyJ5ZCy88uQMMSKy8sGOqUBysp6MD0v3D95wrLQbkjQmY3xols%2Ft2APLAonxx96Lgv1YdBhUmRSIxzUeMTrIxRnHp2f3NkMj5jwCZGhjIr6%2FZhmZ0AR%2BqqwrfXGKkux6uvlJCF2xYOZEKB%2FfcDjj0wl9VZJw8vZxhC2G6OuH6NoZQMb7Qz%2BczFf3vh9i0usxAuzAEjrCKB7n9vEb%2Fbj9YGMgkfe4iPCWH6eAOZ1lHcxJHBNlNGU&X-Amz-Signature=535e7a6d466ba36c6081feabea89acd3962c419b6eb7485e7b50c9bfbaa7afe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRY6SK62%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIGv4P%2FeZT1ohJiQ8WffqKzklJx7MSDOMhqXcl9vQww38AiEA%2B1QE5M7xYC4OWGe4pOsXynKsSHNA4TUZKWG5Jv1qMJcqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQP%2F1GX8h3qK6YzoCrcA4D8SV%2Fi0qk7MA8yDOrmKkdbMAHFRkQ0rpKzFOckOMLBus57lf4NMnskLgwuQjjDThVRSVJ311l06b%2FedDMvfrtDHsLCoBaLjiIZzxHZNl5sSHaFrfP51qGr0QEQVjZHlQ8Q%2BD6p%2BWl78LE7suK%2BthdX9uSWFnaqG%2BdaATi1XbE9WgsorLGriuaRDVZ9fk9VzdtZ3%2FzLjkeSeC0h%2FkUwfqlnUaQfW4w9BPQhwdfsqA3D1XhE%2BI%2BPgWCy1jN4SRDFQITIXto1IVPQXrzcbN8y7JfawO7uyXxca4%2B4El4m4hNUGjoHAKq6rU4LVcWbSyLOqYdlMVcWEtWDhQH9mUbtOJYNYOKY05YXrDqDUlXbGKG6%2FXTgHXXICprnejpG%2F8TXJBT3J6Z8Xd3HFM8IKmb2ip1yWaYEj3WkOSfXH%2FPRdg3dUZfkLA3HA4o4YXlXb2obk4B45pviIZ%2BHqx31g1iEffILmeTnGscdtuBUptoWDarIwPILsQ%2BMk2v9XTzM24rSPcjkVt3q2tSYmYQiEcODocf%2BS%2BceGanWJDO0WVxw7q0JEsJrBw1HMC5Y7uTx8uIamcMkUcDZzatsPKmU02YpG2zICqeflMePMGdgvAnOo%2Bi%2FkowChfyJ5ZCy88uQMMSKy8sGOqUBysp6MD0v3D95wrLQbkjQmY3xols%2Ft2APLAonxx96Lgv1YdBhUmRSIxzUeMTrIxRnHp2f3NkMj5jwCZGhjIr6%2FZhmZ0AR%2BqqwrfXGKkux6uvlJCF2xYOZEKB%2FfcDjj0wl9VZJw8vZxhC2G6OuH6NoZQMb7Qz%2BczFf3vh9i0usxAuzAEjrCKB7n9vEb%2Fbj9YGMgkfe4iPCWH6eAOZ1lHcxJHBNlNGU&X-Amz-Signature=c5fde5003ed9a31670099fbff3f1c6ca696fba8acac793b787c38fc63b6d23cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRY6SK62%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIGv4P%2FeZT1ohJiQ8WffqKzklJx7MSDOMhqXcl9vQww38AiEA%2B1QE5M7xYC4OWGe4pOsXynKsSHNA4TUZKWG5Jv1qMJcqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQP%2F1GX8h3qK6YzoCrcA4D8SV%2Fi0qk7MA8yDOrmKkdbMAHFRkQ0rpKzFOckOMLBus57lf4NMnskLgwuQjjDThVRSVJ311l06b%2FedDMvfrtDHsLCoBaLjiIZzxHZNl5sSHaFrfP51qGr0QEQVjZHlQ8Q%2BD6p%2BWl78LE7suK%2BthdX9uSWFnaqG%2BdaATi1XbE9WgsorLGriuaRDVZ9fk9VzdtZ3%2FzLjkeSeC0h%2FkUwfqlnUaQfW4w9BPQhwdfsqA3D1XhE%2BI%2BPgWCy1jN4SRDFQITIXto1IVPQXrzcbN8y7JfawO7uyXxca4%2B4El4m4hNUGjoHAKq6rU4LVcWbSyLOqYdlMVcWEtWDhQH9mUbtOJYNYOKY05YXrDqDUlXbGKG6%2FXTgHXXICprnejpG%2F8TXJBT3J6Z8Xd3HFM8IKmb2ip1yWaYEj3WkOSfXH%2FPRdg3dUZfkLA3HA4o4YXlXb2obk4B45pviIZ%2BHqx31g1iEffILmeTnGscdtuBUptoWDarIwPILsQ%2BMk2v9XTzM24rSPcjkVt3q2tSYmYQiEcODocf%2BS%2BceGanWJDO0WVxw7q0JEsJrBw1HMC5Y7uTx8uIamcMkUcDZzatsPKmU02YpG2zICqeflMePMGdgvAnOo%2Bi%2FkowChfyJ5ZCy88uQMMSKy8sGOqUBysp6MD0v3D95wrLQbkjQmY3xols%2Ft2APLAonxx96Lgv1YdBhUmRSIxzUeMTrIxRnHp2f3NkMj5jwCZGhjIr6%2FZhmZ0AR%2BqqwrfXGKkux6uvlJCF2xYOZEKB%2FfcDjj0wl9VZJw8vZxhC2G6OuH6NoZQMb7Qz%2BczFf3vh9i0usxAuzAEjrCKB7n9vEb%2Fbj9YGMgkfe4iPCWH6eAOZ1lHcxJHBNlNGU&X-Amz-Signature=3c5a13076ba2722d50e518dd4506b898c3e710e1f587168ff2dd0349e05118f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

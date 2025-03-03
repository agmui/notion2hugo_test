---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHTLBJOY%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICG3k3FgQiMoA80S02w6GNJx0%2Bu2joibYlgkzbdODBbBAiEAgU9tJP%2Bz%2FvePqCW6y8C%2FA8Fhe4fVGmsib6sjQLy6gZwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJK347XBMsrPHD8bCrcA0aJCk9%2Bux%2BQbkjMmI%2BTxPF3kJk0JmK4Nuqdm88f5N3pJxJNkehMH%2BK%2BWXP2HV4BhiBQTALcSElw4aoB3H1M53DcGO7Aiw5ug9zU5rdjfgq2lZ1LX57GcGGUPJcpWIypcRjIMq0GfgD5BFY4rR9xdwcECuv5V%2FK5WjNBsGRrbh%2FrWS4zUHHa6iAExS69Qcnu%2BA8t%2BO%2B1I56L%2FSp3QeJQfUcT5Eh3rZ%2B%2B5qo%2FgkZABwrvHdWc2Ngo6zUPhQYJkUTMd9plSqnsVews%2BFC73JL6bWLnHEV9HQKEMSblK90BjuNgVP0wqsHudDwrMXU9Ni3%2BWaAuap0WFsK74c4EdxP8hghGrn0Wn1io5gYpjb2jcDAWr5ZmpvEqOqwl%2B7bP3IgZ0UidX2clAB0XuktdKD5uMkd%2F4pZqTmaR5Hs5LapyP2aTRXAo%2F9CnJwqwRdx3XQEmAhR4x9NvTv7ipSQis3HhwrbzAD%2FNmIu7X2FXPoDZ5U81MWWqoTAL96F1BTbAWe%2FekKImO9v2GZAuWj9%2FnjgqYKmYDloP7fFrU78UVi50lCRBlYdsmxJfH8tSjSJO%2BklXPjwW%2FxZNtbJbsAvJq5sWwNTAe0l7puxwAQbME0vB66Hk%2Fc0MD%2FaT3e6BiXeVMOP4lL4GOqUBAALthvp5TYwET04CuCi6cxm6fkxtAUbsioJevSnw4ZeHrkgRMNl9dIVJbO8DKSZ9KVe7%2Fi5VFTVP85YSyPrlhveFzIwZ7gSamfgsFkfVnBtEfl%2FvluRHZy8HmxsxH9uZIuB1ALH0lqGFiwWhX71oGTEkcZW9QanxCBhQOx2WlmcrAhRkManuGdGWh4WIPhDwmRNKP1E%2Bd0te%2BeJ6ljre9Zo60INs&X-Amz-Signature=b30da3c14d2f62d0e8241cc5cf4134aaed1bd1c79dbed7e910a46fab99f8c446&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHTLBJOY%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICG3k3FgQiMoA80S02w6GNJx0%2Bu2joibYlgkzbdODBbBAiEAgU9tJP%2Bz%2FvePqCW6y8C%2FA8Fhe4fVGmsib6sjQLy6gZwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJK347XBMsrPHD8bCrcA0aJCk9%2Bux%2BQbkjMmI%2BTxPF3kJk0JmK4Nuqdm88f5N3pJxJNkehMH%2BK%2BWXP2HV4BhiBQTALcSElw4aoB3H1M53DcGO7Aiw5ug9zU5rdjfgq2lZ1LX57GcGGUPJcpWIypcRjIMq0GfgD5BFY4rR9xdwcECuv5V%2FK5WjNBsGRrbh%2FrWS4zUHHa6iAExS69Qcnu%2BA8t%2BO%2B1I56L%2FSp3QeJQfUcT5Eh3rZ%2B%2B5qo%2FgkZABwrvHdWc2Ngo6zUPhQYJkUTMd9plSqnsVews%2BFC73JL6bWLnHEV9HQKEMSblK90BjuNgVP0wqsHudDwrMXU9Ni3%2BWaAuap0WFsK74c4EdxP8hghGrn0Wn1io5gYpjb2jcDAWr5ZmpvEqOqwl%2B7bP3IgZ0UidX2clAB0XuktdKD5uMkd%2F4pZqTmaR5Hs5LapyP2aTRXAo%2F9CnJwqwRdx3XQEmAhR4x9NvTv7ipSQis3HhwrbzAD%2FNmIu7X2FXPoDZ5U81MWWqoTAL96F1BTbAWe%2FekKImO9v2GZAuWj9%2FnjgqYKmYDloP7fFrU78UVi50lCRBlYdsmxJfH8tSjSJO%2BklXPjwW%2FxZNtbJbsAvJq5sWwNTAe0l7puxwAQbME0vB66Hk%2Fc0MD%2FaT3e6BiXeVMOP4lL4GOqUBAALthvp5TYwET04CuCi6cxm6fkxtAUbsioJevSnw4ZeHrkgRMNl9dIVJbO8DKSZ9KVe7%2Fi5VFTVP85YSyPrlhveFzIwZ7gSamfgsFkfVnBtEfl%2FvluRHZy8HmxsxH9uZIuB1ALH0lqGFiwWhX71oGTEkcZW9QanxCBhQOx2WlmcrAhRkManuGdGWh4WIPhDwmRNKP1E%2Bd0te%2BeJ6ljre9Zo60INs&X-Amz-Signature=00b8f7dd808d5087d031d17b7274a17b977687aa88b540d85515b11c9122c08c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHTLBJOY%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICG3k3FgQiMoA80S02w6GNJx0%2Bu2joibYlgkzbdODBbBAiEAgU9tJP%2Bz%2FvePqCW6y8C%2FA8Fhe4fVGmsib6sjQLy6gZwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJK347XBMsrPHD8bCrcA0aJCk9%2Bux%2BQbkjMmI%2BTxPF3kJk0JmK4Nuqdm88f5N3pJxJNkehMH%2BK%2BWXP2HV4BhiBQTALcSElw4aoB3H1M53DcGO7Aiw5ug9zU5rdjfgq2lZ1LX57GcGGUPJcpWIypcRjIMq0GfgD5BFY4rR9xdwcECuv5V%2FK5WjNBsGRrbh%2FrWS4zUHHa6iAExS69Qcnu%2BA8t%2BO%2B1I56L%2FSp3QeJQfUcT5Eh3rZ%2B%2B5qo%2FgkZABwrvHdWc2Ngo6zUPhQYJkUTMd9plSqnsVews%2BFC73JL6bWLnHEV9HQKEMSblK90BjuNgVP0wqsHudDwrMXU9Ni3%2BWaAuap0WFsK74c4EdxP8hghGrn0Wn1io5gYpjb2jcDAWr5ZmpvEqOqwl%2B7bP3IgZ0UidX2clAB0XuktdKD5uMkd%2F4pZqTmaR5Hs5LapyP2aTRXAo%2F9CnJwqwRdx3XQEmAhR4x9NvTv7ipSQis3HhwrbzAD%2FNmIu7X2FXPoDZ5U81MWWqoTAL96F1BTbAWe%2FekKImO9v2GZAuWj9%2FnjgqYKmYDloP7fFrU78UVi50lCRBlYdsmxJfH8tSjSJO%2BklXPjwW%2FxZNtbJbsAvJq5sWwNTAe0l7puxwAQbME0vB66Hk%2Fc0MD%2FaT3e6BiXeVMOP4lL4GOqUBAALthvp5TYwET04CuCi6cxm6fkxtAUbsioJevSnw4ZeHrkgRMNl9dIVJbO8DKSZ9KVe7%2Fi5VFTVP85YSyPrlhveFzIwZ7gSamfgsFkfVnBtEfl%2FvluRHZy8HmxsxH9uZIuB1ALH0lqGFiwWhX71oGTEkcZW9QanxCBhQOx2WlmcrAhRkManuGdGWh4WIPhDwmRNKP1E%2Bd0te%2BeJ6ljre9Zo60INs&X-Amz-Signature=37a0fad6d0d8ab3bed4b30f766be3e44b6223fdd7e3be4f73796137622d4cd9f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHTLBJOY%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICG3k3FgQiMoA80S02w6GNJx0%2Bu2joibYlgkzbdODBbBAiEAgU9tJP%2Bz%2FvePqCW6y8C%2FA8Fhe4fVGmsib6sjQLy6gZwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJK347XBMsrPHD8bCrcA0aJCk9%2Bux%2BQbkjMmI%2BTxPF3kJk0JmK4Nuqdm88f5N3pJxJNkehMH%2BK%2BWXP2HV4BhiBQTALcSElw4aoB3H1M53DcGO7Aiw5ug9zU5rdjfgq2lZ1LX57GcGGUPJcpWIypcRjIMq0GfgD5BFY4rR9xdwcECuv5V%2FK5WjNBsGRrbh%2FrWS4zUHHa6iAExS69Qcnu%2BA8t%2BO%2B1I56L%2FSp3QeJQfUcT5Eh3rZ%2B%2B5qo%2FgkZABwrvHdWc2Ngo6zUPhQYJkUTMd9plSqnsVews%2BFC73JL6bWLnHEV9HQKEMSblK90BjuNgVP0wqsHudDwrMXU9Ni3%2BWaAuap0WFsK74c4EdxP8hghGrn0Wn1io5gYpjb2jcDAWr5ZmpvEqOqwl%2B7bP3IgZ0UidX2clAB0XuktdKD5uMkd%2F4pZqTmaR5Hs5LapyP2aTRXAo%2F9CnJwqwRdx3XQEmAhR4x9NvTv7ipSQis3HhwrbzAD%2FNmIu7X2FXPoDZ5U81MWWqoTAL96F1BTbAWe%2FekKImO9v2GZAuWj9%2FnjgqYKmYDloP7fFrU78UVi50lCRBlYdsmxJfH8tSjSJO%2BklXPjwW%2FxZNtbJbsAvJq5sWwNTAe0l7puxwAQbME0vB66Hk%2Fc0MD%2FaT3e6BiXeVMOP4lL4GOqUBAALthvp5TYwET04CuCi6cxm6fkxtAUbsioJevSnw4ZeHrkgRMNl9dIVJbO8DKSZ9KVe7%2Fi5VFTVP85YSyPrlhveFzIwZ7gSamfgsFkfVnBtEfl%2FvluRHZy8HmxsxH9uZIuB1ALH0lqGFiwWhX71oGTEkcZW9QanxCBhQOx2WlmcrAhRkManuGdGWh4WIPhDwmRNKP1E%2Bd0te%2BeJ6ljre9Zo60INs&X-Amz-Signature=fb3c27a91a5ae47949dabf73dc943ed1fa3d3d0acfff03429c83a1e845aa6c4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHTLBJOY%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICG3k3FgQiMoA80S02w6GNJx0%2Bu2joibYlgkzbdODBbBAiEAgU9tJP%2Bz%2FvePqCW6y8C%2FA8Fhe4fVGmsib6sjQLy6gZwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJK347XBMsrPHD8bCrcA0aJCk9%2Bux%2BQbkjMmI%2BTxPF3kJk0JmK4Nuqdm88f5N3pJxJNkehMH%2BK%2BWXP2HV4BhiBQTALcSElw4aoB3H1M53DcGO7Aiw5ug9zU5rdjfgq2lZ1LX57GcGGUPJcpWIypcRjIMq0GfgD5BFY4rR9xdwcECuv5V%2FK5WjNBsGRrbh%2FrWS4zUHHa6iAExS69Qcnu%2BA8t%2BO%2B1I56L%2FSp3QeJQfUcT5Eh3rZ%2B%2B5qo%2FgkZABwrvHdWc2Ngo6zUPhQYJkUTMd9plSqnsVews%2BFC73JL6bWLnHEV9HQKEMSblK90BjuNgVP0wqsHudDwrMXU9Ni3%2BWaAuap0WFsK74c4EdxP8hghGrn0Wn1io5gYpjb2jcDAWr5ZmpvEqOqwl%2B7bP3IgZ0UidX2clAB0XuktdKD5uMkd%2F4pZqTmaR5Hs5LapyP2aTRXAo%2F9CnJwqwRdx3XQEmAhR4x9NvTv7ipSQis3HhwrbzAD%2FNmIu7X2FXPoDZ5U81MWWqoTAL96F1BTbAWe%2FekKImO9v2GZAuWj9%2FnjgqYKmYDloP7fFrU78UVi50lCRBlYdsmxJfH8tSjSJO%2BklXPjwW%2FxZNtbJbsAvJq5sWwNTAe0l7puxwAQbME0vB66Hk%2Fc0MD%2FaT3e6BiXeVMOP4lL4GOqUBAALthvp5TYwET04CuCi6cxm6fkxtAUbsioJevSnw4ZeHrkgRMNl9dIVJbO8DKSZ9KVe7%2Fi5VFTVP85YSyPrlhveFzIwZ7gSamfgsFkfVnBtEfl%2FvluRHZy8HmxsxH9uZIuB1ALH0lqGFiwWhX71oGTEkcZW9QanxCBhQOx2WlmcrAhRkManuGdGWh4WIPhDwmRNKP1E%2Bd0te%2BeJ6ljre9Zo60INs&X-Amz-Signature=328ece52c20ea0447811d9c03040ac6f47b72f9a18713084d1c093b20590011c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

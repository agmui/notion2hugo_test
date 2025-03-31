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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE4TPCWG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDEIZ09r1mXHL5KUssZydx0IkLIp8BNtleY49%2FcTTUZUwIhANw5RJdmy4alfZLrZeVRIxH8O8%2BaC7vzLTLoHGKyfD7gKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFsrV8ivOx8wprTTMq3APjA1hkn0S2AaqqRqzORtq4Giu8Yzt8JxXq6DS2fhZU%2F5LuK1CvzjUfsXb08LORCvNa8ECVq2N7dxQt7TFKqFZ3zT5kHqwlUM6bQN6a1a2IyVS%2FtU8ZShO2YbXHd6eEFrhRPRqjB0Mi%2FmSkYlZwS1ivp7rACWk%2BjSkDXcCGpkF4mvlxkfXOCZdKEg2roVntjPcsngNFI8HW3eb00peQy%2B48ntwioKB1sn5tOMeFXCh2c2T6rCS0xGCuc7VwUb6t2njgog0UmFyKCT0pl1%2Bieq6%2FqDhQD%2FtQFG1ivk5IjvTs063IoYj3c7g7f2jteVsnOAZObPGXjy1LV15mf%2F9q2QBV1YsSZNsqZmA4geFHp2LaQ9ipguWcUIlwK4VqNR%2Bln6RG9fWeXSBihCuOd3LEMgQu9jOwQxMFWf%2FZZ1x%2Fl1OPzyf6q%2FutMp6HgN00vD3lU6bIAybpkim8SVlGi29cVMIE6%2FA9M51nB80ew3DxjBjtLWIO6HkvW56ifHFZRXzRSA84OEaIqSaNk4gyJScPUYYPM1GbdPD9yroOPqmjGMsWIpcSckGWMDdr7cdtMqkBX7d5XHl9Ym5i2ph6cB%2FbRGXtAW2Zhq9hoTDCEMf9RzP7PSWBlCv%2B6mAckN9ftTCzuKu%2FBjqkAXtNDWjGFG9JiOAGcVkYAYnwkqtNE0ppA4CFvw7xdX68R%2F%2BK%2BM7PFWAxPcUmi1JJjRDFQ2%2FPRnJy0abzP7fSGFJj9dAny9Jp3KpXuifYGbSgs3nCflEb3qN5owijMBA%2BViF7Vn3h5Thr4S4gwR4BU%2BcUx2wBMlnhMnper4Da99s6nKLuWbv2ZMUNBpmTyQ5VYHbFhUJDO9LsrIG9VZTtY52J2%2Bl3&X-Amz-Signature=8a8e705a1475f0acfc63cde7067d50018fe40db1c9cd1404d71c3aae920298ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE4TPCWG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDEIZ09r1mXHL5KUssZydx0IkLIp8BNtleY49%2FcTTUZUwIhANw5RJdmy4alfZLrZeVRIxH8O8%2BaC7vzLTLoHGKyfD7gKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFsrV8ivOx8wprTTMq3APjA1hkn0S2AaqqRqzORtq4Giu8Yzt8JxXq6DS2fhZU%2F5LuK1CvzjUfsXb08LORCvNa8ECVq2N7dxQt7TFKqFZ3zT5kHqwlUM6bQN6a1a2IyVS%2FtU8ZShO2YbXHd6eEFrhRPRqjB0Mi%2FmSkYlZwS1ivp7rACWk%2BjSkDXcCGpkF4mvlxkfXOCZdKEg2roVntjPcsngNFI8HW3eb00peQy%2B48ntwioKB1sn5tOMeFXCh2c2T6rCS0xGCuc7VwUb6t2njgog0UmFyKCT0pl1%2Bieq6%2FqDhQD%2FtQFG1ivk5IjvTs063IoYj3c7g7f2jteVsnOAZObPGXjy1LV15mf%2F9q2QBV1YsSZNsqZmA4geFHp2LaQ9ipguWcUIlwK4VqNR%2Bln6RG9fWeXSBihCuOd3LEMgQu9jOwQxMFWf%2FZZ1x%2Fl1OPzyf6q%2FutMp6HgN00vD3lU6bIAybpkim8SVlGi29cVMIE6%2FA9M51nB80ew3DxjBjtLWIO6HkvW56ifHFZRXzRSA84OEaIqSaNk4gyJScPUYYPM1GbdPD9yroOPqmjGMsWIpcSckGWMDdr7cdtMqkBX7d5XHl9Ym5i2ph6cB%2FbRGXtAW2Zhq9hoTDCEMf9RzP7PSWBlCv%2B6mAckN9ftTCzuKu%2FBjqkAXtNDWjGFG9JiOAGcVkYAYnwkqtNE0ppA4CFvw7xdX68R%2F%2BK%2BM7PFWAxPcUmi1JJjRDFQ2%2FPRnJy0abzP7fSGFJj9dAny9Jp3KpXuifYGbSgs3nCflEb3qN5owijMBA%2BViF7Vn3h5Thr4S4gwR4BU%2BcUx2wBMlnhMnper4Da99s6nKLuWbv2ZMUNBpmTyQ5VYHbFhUJDO9LsrIG9VZTtY52J2%2Bl3&X-Amz-Signature=e3f1eb126f1bba72d8c68967be7ad2bb57cc09355a34ac27a5f5bf2efa3ea0a5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE4TPCWG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDEIZ09r1mXHL5KUssZydx0IkLIp8BNtleY49%2FcTTUZUwIhANw5RJdmy4alfZLrZeVRIxH8O8%2BaC7vzLTLoHGKyfD7gKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFsrV8ivOx8wprTTMq3APjA1hkn0S2AaqqRqzORtq4Giu8Yzt8JxXq6DS2fhZU%2F5LuK1CvzjUfsXb08LORCvNa8ECVq2N7dxQt7TFKqFZ3zT5kHqwlUM6bQN6a1a2IyVS%2FtU8ZShO2YbXHd6eEFrhRPRqjB0Mi%2FmSkYlZwS1ivp7rACWk%2BjSkDXcCGpkF4mvlxkfXOCZdKEg2roVntjPcsngNFI8HW3eb00peQy%2B48ntwioKB1sn5tOMeFXCh2c2T6rCS0xGCuc7VwUb6t2njgog0UmFyKCT0pl1%2Bieq6%2FqDhQD%2FtQFG1ivk5IjvTs063IoYj3c7g7f2jteVsnOAZObPGXjy1LV15mf%2F9q2QBV1YsSZNsqZmA4geFHp2LaQ9ipguWcUIlwK4VqNR%2Bln6RG9fWeXSBihCuOd3LEMgQu9jOwQxMFWf%2FZZ1x%2Fl1OPzyf6q%2FutMp6HgN00vD3lU6bIAybpkim8SVlGi29cVMIE6%2FA9M51nB80ew3DxjBjtLWIO6HkvW56ifHFZRXzRSA84OEaIqSaNk4gyJScPUYYPM1GbdPD9yroOPqmjGMsWIpcSckGWMDdr7cdtMqkBX7d5XHl9Ym5i2ph6cB%2FbRGXtAW2Zhq9hoTDCEMf9RzP7PSWBlCv%2B6mAckN9ftTCzuKu%2FBjqkAXtNDWjGFG9JiOAGcVkYAYnwkqtNE0ppA4CFvw7xdX68R%2F%2BK%2BM7PFWAxPcUmi1JJjRDFQ2%2FPRnJy0abzP7fSGFJj9dAny9Jp3KpXuifYGbSgs3nCflEb3qN5owijMBA%2BViF7Vn3h5Thr4S4gwR4BU%2BcUx2wBMlnhMnper4Da99s6nKLuWbv2ZMUNBpmTyQ5VYHbFhUJDO9LsrIG9VZTtY52J2%2Bl3&X-Amz-Signature=5982cc62a298f80105d8ed33745397a09390b1dd7f475dc1d3193bcb80c0ad67&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE4TPCWG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDEIZ09r1mXHL5KUssZydx0IkLIp8BNtleY49%2FcTTUZUwIhANw5RJdmy4alfZLrZeVRIxH8O8%2BaC7vzLTLoHGKyfD7gKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFsrV8ivOx8wprTTMq3APjA1hkn0S2AaqqRqzORtq4Giu8Yzt8JxXq6DS2fhZU%2F5LuK1CvzjUfsXb08LORCvNa8ECVq2N7dxQt7TFKqFZ3zT5kHqwlUM6bQN6a1a2IyVS%2FtU8ZShO2YbXHd6eEFrhRPRqjB0Mi%2FmSkYlZwS1ivp7rACWk%2BjSkDXcCGpkF4mvlxkfXOCZdKEg2roVntjPcsngNFI8HW3eb00peQy%2B48ntwioKB1sn5tOMeFXCh2c2T6rCS0xGCuc7VwUb6t2njgog0UmFyKCT0pl1%2Bieq6%2FqDhQD%2FtQFG1ivk5IjvTs063IoYj3c7g7f2jteVsnOAZObPGXjy1LV15mf%2F9q2QBV1YsSZNsqZmA4geFHp2LaQ9ipguWcUIlwK4VqNR%2Bln6RG9fWeXSBihCuOd3LEMgQu9jOwQxMFWf%2FZZ1x%2Fl1OPzyf6q%2FutMp6HgN00vD3lU6bIAybpkim8SVlGi29cVMIE6%2FA9M51nB80ew3DxjBjtLWIO6HkvW56ifHFZRXzRSA84OEaIqSaNk4gyJScPUYYPM1GbdPD9yroOPqmjGMsWIpcSckGWMDdr7cdtMqkBX7d5XHl9Ym5i2ph6cB%2FbRGXtAW2Zhq9hoTDCEMf9RzP7PSWBlCv%2B6mAckN9ftTCzuKu%2FBjqkAXtNDWjGFG9JiOAGcVkYAYnwkqtNE0ppA4CFvw7xdX68R%2F%2BK%2BM7PFWAxPcUmi1JJjRDFQ2%2FPRnJy0abzP7fSGFJj9dAny9Jp3KpXuifYGbSgs3nCflEb3qN5owijMBA%2BViF7Vn3h5Thr4S4gwR4BU%2BcUx2wBMlnhMnper4Da99s6nKLuWbv2ZMUNBpmTyQ5VYHbFhUJDO9LsrIG9VZTtY52J2%2Bl3&X-Amz-Signature=d2d9c70b869db1cabfe60e4d19c54bbfe7e71e273a804373a65654c1a9c95e7e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE4TPCWG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDEIZ09r1mXHL5KUssZydx0IkLIp8BNtleY49%2FcTTUZUwIhANw5RJdmy4alfZLrZeVRIxH8O8%2BaC7vzLTLoHGKyfD7gKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFsrV8ivOx8wprTTMq3APjA1hkn0S2AaqqRqzORtq4Giu8Yzt8JxXq6DS2fhZU%2F5LuK1CvzjUfsXb08LORCvNa8ECVq2N7dxQt7TFKqFZ3zT5kHqwlUM6bQN6a1a2IyVS%2FtU8ZShO2YbXHd6eEFrhRPRqjB0Mi%2FmSkYlZwS1ivp7rACWk%2BjSkDXcCGpkF4mvlxkfXOCZdKEg2roVntjPcsngNFI8HW3eb00peQy%2B48ntwioKB1sn5tOMeFXCh2c2T6rCS0xGCuc7VwUb6t2njgog0UmFyKCT0pl1%2Bieq6%2FqDhQD%2FtQFG1ivk5IjvTs063IoYj3c7g7f2jteVsnOAZObPGXjy1LV15mf%2F9q2QBV1YsSZNsqZmA4geFHp2LaQ9ipguWcUIlwK4VqNR%2Bln6RG9fWeXSBihCuOd3LEMgQu9jOwQxMFWf%2FZZ1x%2Fl1OPzyf6q%2FutMp6HgN00vD3lU6bIAybpkim8SVlGi29cVMIE6%2FA9M51nB80ew3DxjBjtLWIO6HkvW56ifHFZRXzRSA84OEaIqSaNk4gyJScPUYYPM1GbdPD9yroOPqmjGMsWIpcSckGWMDdr7cdtMqkBX7d5XHl9Ym5i2ph6cB%2FbRGXtAW2Zhq9hoTDCEMf9RzP7PSWBlCv%2B6mAckN9ftTCzuKu%2FBjqkAXtNDWjGFG9JiOAGcVkYAYnwkqtNE0ppA4CFvw7xdX68R%2F%2BK%2BM7PFWAxPcUmi1JJjRDFQ2%2FPRnJy0abzP7fSGFJj9dAny9Jp3KpXuifYGbSgs3nCflEb3qN5owijMBA%2BViF7Vn3h5Thr4S4gwR4BU%2BcUx2wBMlnhMnper4Da99s6nKLuWbv2ZMUNBpmTyQ5VYHbFhUJDO9LsrIG9VZTtY52J2%2Bl3&X-Amz-Signature=d2cabfc4ff522bb5417c965e297c4f9783a7683d096be8ea36b2818fd4c5b397&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

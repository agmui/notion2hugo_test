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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KY64AMB%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZuASu%2FshTvhzp7eWjW0nJHQ4qYYbODeWLfNWGdRFOoAiACLvDgEYjI86R5IczZhE9s1PwSYeSiI9gfH0CbzluZqyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUSnmeJLS8%2FiQaMBmKtwD4YD1Ms1t81SNoAq4h8vWz6CQ3izWdI9J9TrY4eO9OBW1JdXuJePnsyxrjvIYlRhZdOShwVqKPnSEUlBfGRd1MmHh%2FD9AAfjeYvnhYCxvNZ6124qZvsKE3TVip9NtkqgMGdPR8axh0MDwiKwpVQ%2Fqqj6PWkNankRrM%2FLWnrX2EtSZutgp5mFy4Vq%2BZlUXxMkuPy06F8Tn8Q3ENvORwrPWQYFCqGq4%2BRGXxAIt1qhRdciqDMDCM3LCQR2L0FHrZOsoSfM0ojU4DjDLKF8RDaMqqdviHIhcd7KUBDeQpEgJTbm78Aqxaio2uAT16%2BBIdoBFSnG8luaVAzwWH9AzEopxzZoSPUSqr8vUdCWYPqptJR27zxbqlW1oq1cFRkDdxpC8s0pB5k6DlUoS174bUdzZNdGyFdujniggSTldBWDKyqLncQIVeKLJ5bnJMuVQ912wGDKO27ARspqnjd6E8p9FQ88sCwQtGe%2FVZDPirycjh5i6NzN8YEdZK9cqJysvB%2FCtKpDEJPKpE%2FOCqDTEI2wXBfWqXYJrtEp%2FOGrMDMHJVxze7LvwWxePeMe0K0AMJX59gfRfqPGtQJC6%2Fp1PvzTyX87Q%2BjETu%2FTnVctNwTJDmZOSfS%2B6HOQ26T6wWJYwv8GAvQY6pgEiWB%2BYo7qJAEe1w8ZYKe6LxX4BXi8iHIhtsEFfW22WCPvBqGKiqLD9b97Sk%2BdIbdOy5YAt01NuLYITrKZHNybPrYliKIDJZF1aoDe60dptcTthnoee15%2BBQAwC%2FvYkOmG5BnY5bmOaSd1bfT%2FQBPHvwwoBUAt1yIiMcI9%2BTxWxC1u%2BzHKB%2B0BEnYsOfQGNptSDjwgYmfe5phWpFa6cZCSefv1t9KN6&X-Amz-Signature=1cf03860ed24c8198db48be3baf06b9adc2e55138d3cadcb6e53c3d31c5d51db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KY64AMB%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZuASu%2FshTvhzp7eWjW0nJHQ4qYYbODeWLfNWGdRFOoAiACLvDgEYjI86R5IczZhE9s1PwSYeSiI9gfH0CbzluZqyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUSnmeJLS8%2FiQaMBmKtwD4YD1Ms1t81SNoAq4h8vWz6CQ3izWdI9J9TrY4eO9OBW1JdXuJePnsyxrjvIYlRhZdOShwVqKPnSEUlBfGRd1MmHh%2FD9AAfjeYvnhYCxvNZ6124qZvsKE3TVip9NtkqgMGdPR8axh0MDwiKwpVQ%2Fqqj6PWkNankRrM%2FLWnrX2EtSZutgp5mFy4Vq%2BZlUXxMkuPy06F8Tn8Q3ENvORwrPWQYFCqGq4%2BRGXxAIt1qhRdciqDMDCM3LCQR2L0FHrZOsoSfM0ojU4DjDLKF8RDaMqqdviHIhcd7KUBDeQpEgJTbm78Aqxaio2uAT16%2BBIdoBFSnG8luaVAzwWH9AzEopxzZoSPUSqr8vUdCWYPqptJR27zxbqlW1oq1cFRkDdxpC8s0pB5k6DlUoS174bUdzZNdGyFdujniggSTldBWDKyqLncQIVeKLJ5bnJMuVQ912wGDKO27ARspqnjd6E8p9FQ88sCwQtGe%2FVZDPirycjh5i6NzN8YEdZK9cqJysvB%2FCtKpDEJPKpE%2FOCqDTEI2wXBfWqXYJrtEp%2FOGrMDMHJVxze7LvwWxePeMe0K0AMJX59gfRfqPGtQJC6%2Fp1PvzTyX87Q%2BjETu%2FTnVctNwTJDmZOSfS%2B6HOQ26T6wWJYwv8GAvQY6pgEiWB%2BYo7qJAEe1w8ZYKe6LxX4BXi8iHIhtsEFfW22WCPvBqGKiqLD9b97Sk%2BdIbdOy5YAt01NuLYITrKZHNybPrYliKIDJZF1aoDe60dptcTthnoee15%2BBQAwC%2FvYkOmG5BnY5bmOaSd1bfT%2FQBPHvwwoBUAt1yIiMcI9%2BTxWxC1u%2BzHKB%2B0BEnYsOfQGNptSDjwgYmfe5phWpFa6cZCSefv1t9KN6&X-Amz-Signature=4999c9290fdb6b1c51164686daec23653be3c2b2a484920c8e5f7006d7956873&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KY64AMB%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZuASu%2FshTvhzp7eWjW0nJHQ4qYYbODeWLfNWGdRFOoAiACLvDgEYjI86R5IczZhE9s1PwSYeSiI9gfH0CbzluZqyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUSnmeJLS8%2FiQaMBmKtwD4YD1Ms1t81SNoAq4h8vWz6CQ3izWdI9J9TrY4eO9OBW1JdXuJePnsyxrjvIYlRhZdOShwVqKPnSEUlBfGRd1MmHh%2FD9AAfjeYvnhYCxvNZ6124qZvsKE3TVip9NtkqgMGdPR8axh0MDwiKwpVQ%2Fqqj6PWkNankRrM%2FLWnrX2EtSZutgp5mFy4Vq%2BZlUXxMkuPy06F8Tn8Q3ENvORwrPWQYFCqGq4%2BRGXxAIt1qhRdciqDMDCM3LCQR2L0FHrZOsoSfM0ojU4DjDLKF8RDaMqqdviHIhcd7KUBDeQpEgJTbm78Aqxaio2uAT16%2BBIdoBFSnG8luaVAzwWH9AzEopxzZoSPUSqr8vUdCWYPqptJR27zxbqlW1oq1cFRkDdxpC8s0pB5k6DlUoS174bUdzZNdGyFdujniggSTldBWDKyqLncQIVeKLJ5bnJMuVQ912wGDKO27ARspqnjd6E8p9FQ88sCwQtGe%2FVZDPirycjh5i6NzN8YEdZK9cqJysvB%2FCtKpDEJPKpE%2FOCqDTEI2wXBfWqXYJrtEp%2FOGrMDMHJVxze7LvwWxePeMe0K0AMJX59gfRfqPGtQJC6%2Fp1PvzTyX87Q%2BjETu%2FTnVctNwTJDmZOSfS%2B6HOQ26T6wWJYwv8GAvQY6pgEiWB%2BYo7qJAEe1w8ZYKe6LxX4BXi8iHIhtsEFfW22WCPvBqGKiqLD9b97Sk%2BdIbdOy5YAt01NuLYITrKZHNybPrYliKIDJZF1aoDe60dptcTthnoee15%2BBQAwC%2FvYkOmG5BnY5bmOaSd1bfT%2FQBPHvwwoBUAt1yIiMcI9%2BTxWxC1u%2BzHKB%2B0BEnYsOfQGNptSDjwgYmfe5phWpFa6cZCSefv1t9KN6&X-Amz-Signature=40ad92e2fd313abaeaa3f85464d73d3466e6ac8d9a7c32883f77007d06b882d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KY64AMB%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZuASu%2FshTvhzp7eWjW0nJHQ4qYYbODeWLfNWGdRFOoAiACLvDgEYjI86R5IczZhE9s1PwSYeSiI9gfH0CbzluZqyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUSnmeJLS8%2FiQaMBmKtwD4YD1Ms1t81SNoAq4h8vWz6CQ3izWdI9J9TrY4eO9OBW1JdXuJePnsyxrjvIYlRhZdOShwVqKPnSEUlBfGRd1MmHh%2FD9AAfjeYvnhYCxvNZ6124qZvsKE3TVip9NtkqgMGdPR8axh0MDwiKwpVQ%2Fqqj6PWkNankRrM%2FLWnrX2EtSZutgp5mFy4Vq%2BZlUXxMkuPy06F8Tn8Q3ENvORwrPWQYFCqGq4%2BRGXxAIt1qhRdciqDMDCM3LCQR2L0FHrZOsoSfM0ojU4DjDLKF8RDaMqqdviHIhcd7KUBDeQpEgJTbm78Aqxaio2uAT16%2BBIdoBFSnG8luaVAzwWH9AzEopxzZoSPUSqr8vUdCWYPqptJR27zxbqlW1oq1cFRkDdxpC8s0pB5k6DlUoS174bUdzZNdGyFdujniggSTldBWDKyqLncQIVeKLJ5bnJMuVQ912wGDKO27ARspqnjd6E8p9FQ88sCwQtGe%2FVZDPirycjh5i6NzN8YEdZK9cqJysvB%2FCtKpDEJPKpE%2FOCqDTEI2wXBfWqXYJrtEp%2FOGrMDMHJVxze7LvwWxePeMe0K0AMJX59gfRfqPGtQJC6%2Fp1PvzTyX87Q%2BjETu%2FTnVctNwTJDmZOSfS%2B6HOQ26T6wWJYwv8GAvQY6pgEiWB%2BYo7qJAEe1w8ZYKe6LxX4BXi8iHIhtsEFfW22WCPvBqGKiqLD9b97Sk%2BdIbdOy5YAt01NuLYITrKZHNybPrYliKIDJZF1aoDe60dptcTthnoee15%2BBQAwC%2FvYkOmG5BnY5bmOaSd1bfT%2FQBPHvwwoBUAt1yIiMcI9%2BTxWxC1u%2BzHKB%2B0BEnYsOfQGNptSDjwgYmfe5phWpFa6cZCSefv1t9KN6&X-Amz-Signature=89463ad70d5d336eba5f1ee2a9c9d01ddc70acc1537cec5fa4b3fc0bb7badca1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KY64AMB%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZuASu%2FshTvhzp7eWjW0nJHQ4qYYbODeWLfNWGdRFOoAiACLvDgEYjI86R5IczZhE9s1PwSYeSiI9gfH0CbzluZqyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUSnmeJLS8%2FiQaMBmKtwD4YD1Ms1t81SNoAq4h8vWz6CQ3izWdI9J9TrY4eO9OBW1JdXuJePnsyxrjvIYlRhZdOShwVqKPnSEUlBfGRd1MmHh%2FD9AAfjeYvnhYCxvNZ6124qZvsKE3TVip9NtkqgMGdPR8axh0MDwiKwpVQ%2Fqqj6PWkNankRrM%2FLWnrX2EtSZutgp5mFy4Vq%2BZlUXxMkuPy06F8Tn8Q3ENvORwrPWQYFCqGq4%2BRGXxAIt1qhRdciqDMDCM3LCQR2L0FHrZOsoSfM0ojU4DjDLKF8RDaMqqdviHIhcd7KUBDeQpEgJTbm78Aqxaio2uAT16%2BBIdoBFSnG8luaVAzwWH9AzEopxzZoSPUSqr8vUdCWYPqptJR27zxbqlW1oq1cFRkDdxpC8s0pB5k6DlUoS174bUdzZNdGyFdujniggSTldBWDKyqLncQIVeKLJ5bnJMuVQ912wGDKO27ARspqnjd6E8p9FQ88sCwQtGe%2FVZDPirycjh5i6NzN8YEdZK9cqJysvB%2FCtKpDEJPKpE%2FOCqDTEI2wXBfWqXYJrtEp%2FOGrMDMHJVxze7LvwWxePeMe0K0AMJX59gfRfqPGtQJC6%2Fp1PvzTyX87Q%2BjETu%2FTnVctNwTJDmZOSfS%2B6HOQ26T6wWJYwv8GAvQY6pgEiWB%2BYo7qJAEe1w8ZYKe6LxX4BXi8iHIhtsEFfW22WCPvBqGKiqLD9b97Sk%2BdIbdOy5YAt01NuLYITrKZHNybPrYliKIDJZF1aoDe60dptcTthnoee15%2BBQAwC%2FvYkOmG5BnY5bmOaSd1bfT%2FQBPHvwwoBUAt1yIiMcI9%2BTxWxC1u%2BzHKB%2B0BEnYsOfQGNptSDjwgYmfe5phWpFa6cZCSefv1t9KN6&X-Amz-Signature=22703c17bd44d95731c934cb7c6bac1d3e4d3c6a72612e68ca528530370ddb78&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

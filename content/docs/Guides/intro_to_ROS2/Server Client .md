---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-04-05T22:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-04-05T22:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KYUND6W%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChFNTWhh43OZ6yZnPDmsN2CeeSu9b6eG%2BtajP6jW%2BPKAiB1jQjhm5lyqUGypqqL87JnzOU7hBXKZ2yfeiOPpmTrHSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM51QCg%2FQHtCSxVSd%2BKtwDHhLI1bRS8qTkgZvlPLlw%2BAeCocD0IviW4neMFRmthU%2FXgnL4bWvuR8MUt%2BO%2FHuiaIrMVREMBo6y03rSEVmHdgZpwgRu3NDg3tn3xQW3v%2Fcnz1ujzvXpOS%2B3nbw%2F3CrkIhWPgeX4v7Xf%2BFL0vfysqBG5jDh%2FxyI0csSpIx33noN09seYDRAIGFrCciNBS2%2B%2BczXztht45EYmL%2FlsPFfcDZNtSwYMGdLsn6niG2jYhlPIKeMVWCId1gJ7iE3j0tvvUzBS2u3M60qS3Yx7RDoO9pmG1YCVrg%2B9x%2FIyrumoaLpDhZSx4qpKYc1l7KHka2%2BaWb1QpxtuVjdfOv%2BD4lasgUepZc%2Fhq2YF7ifT%2BwW1I24HiVFZekijW0GKLCbXN4Pl4hHKw4YlLSI6t4savgi7QIw1GLk2OzRmSEMPuAwgUhcDrcvj4M4ucaz341iJfnkj6lRoMNtUhzcD%2FVpoz4KZi6zlpvmj2H9S82KeLiMddnTKqhVhC68X1BRXLF3XWBN4QWSAcuvN7urYK%2BTWMZlMrO6oIKfg3%2F%2FmHwN1XtElixecu3N4uZLlB1vlF6AHJI9m5LHs0JcjcoIGBtZdM1hYsKQw5dmdt%2BovcXJLDhfC%2BrijdgDiexuCz8ymPxNow%2FJvxwwY6pgEUZMq%2B4kuPMtCW4a9HxwHPyZabQYzR4UZ1WkR1cPymy9PK0PJlHS%2BiCzIy40aySkAyNBApjzl4uf%2BNjNd1ZTbS6MdXBVYvwuJkr6po95sfpPh9WzwPU8Kyokslz%2Fma9enw8YcofLU%2Bsv1MUaltWPV8tDf9jgo9eygEo43Oz5bHLBKG8WktXc2%2FJvBhoR8ILQ7KbdAqIJArW5iFnTqKSsTB4MUPfHHH&X-Amz-Signature=65edcc2e4d759640e1660d30c79eb3c5ebf11459d808634ca0cef48cc989c5f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KYUND6W%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChFNTWhh43OZ6yZnPDmsN2CeeSu9b6eG%2BtajP6jW%2BPKAiB1jQjhm5lyqUGypqqL87JnzOU7hBXKZ2yfeiOPpmTrHSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM51QCg%2FQHtCSxVSd%2BKtwDHhLI1bRS8qTkgZvlPLlw%2BAeCocD0IviW4neMFRmthU%2FXgnL4bWvuR8MUt%2BO%2FHuiaIrMVREMBo6y03rSEVmHdgZpwgRu3NDg3tn3xQW3v%2Fcnz1ujzvXpOS%2B3nbw%2F3CrkIhWPgeX4v7Xf%2BFL0vfysqBG5jDh%2FxyI0csSpIx33noN09seYDRAIGFrCciNBS2%2B%2BczXztht45EYmL%2FlsPFfcDZNtSwYMGdLsn6niG2jYhlPIKeMVWCId1gJ7iE3j0tvvUzBS2u3M60qS3Yx7RDoO9pmG1YCVrg%2B9x%2FIyrumoaLpDhZSx4qpKYc1l7KHka2%2BaWb1QpxtuVjdfOv%2BD4lasgUepZc%2Fhq2YF7ifT%2BwW1I24HiVFZekijW0GKLCbXN4Pl4hHKw4YlLSI6t4savgi7QIw1GLk2OzRmSEMPuAwgUhcDrcvj4M4ucaz341iJfnkj6lRoMNtUhzcD%2FVpoz4KZi6zlpvmj2H9S82KeLiMddnTKqhVhC68X1BRXLF3XWBN4QWSAcuvN7urYK%2BTWMZlMrO6oIKfg3%2F%2FmHwN1XtElixecu3N4uZLlB1vlF6AHJI9m5LHs0JcjcoIGBtZdM1hYsKQw5dmdt%2BovcXJLDhfC%2BrijdgDiexuCz8ymPxNow%2FJvxwwY6pgEUZMq%2B4kuPMtCW4a9HxwHPyZabQYzR4UZ1WkR1cPymy9PK0PJlHS%2BiCzIy40aySkAyNBApjzl4uf%2BNjNd1ZTbS6MdXBVYvwuJkr6po95sfpPh9WzwPU8Kyokslz%2Fma9enw8YcofLU%2Bsv1MUaltWPV8tDf9jgo9eygEo43Oz5bHLBKG8WktXc2%2FJvBhoR8ILQ7KbdAqIJArW5iFnTqKSsTB4MUPfHHH&X-Amz-Signature=5428f84eee83d2a9f6f0a79ecb9682efd1e79339140e49eeb7af5934b442e8aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KYUND6W%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChFNTWhh43OZ6yZnPDmsN2CeeSu9b6eG%2BtajP6jW%2BPKAiB1jQjhm5lyqUGypqqL87JnzOU7hBXKZ2yfeiOPpmTrHSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM51QCg%2FQHtCSxVSd%2BKtwDHhLI1bRS8qTkgZvlPLlw%2BAeCocD0IviW4neMFRmthU%2FXgnL4bWvuR8MUt%2BO%2FHuiaIrMVREMBo6y03rSEVmHdgZpwgRu3NDg3tn3xQW3v%2Fcnz1ujzvXpOS%2B3nbw%2F3CrkIhWPgeX4v7Xf%2BFL0vfysqBG5jDh%2FxyI0csSpIx33noN09seYDRAIGFrCciNBS2%2B%2BczXztht45EYmL%2FlsPFfcDZNtSwYMGdLsn6niG2jYhlPIKeMVWCId1gJ7iE3j0tvvUzBS2u3M60qS3Yx7RDoO9pmG1YCVrg%2B9x%2FIyrumoaLpDhZSx4qpKYc1l7KHka2%2BaWb1QpxtuVjdfOv%2BD4lasgUepZc%2Fhq2YF7ifT%2BwW1I24HiVFZekijW0GKLCbXN4Pl4hHKw4YlLSI6t4savgi7QIw1GLk2OzRmSEMPuAwgUhcDrcvj4M4ucaz341iJfnkj6lRoMNtUhzcD%2FVpoz4KZi6zlpvmj2H9S82KeLiMddnTKqhVhC68X1BRXLF3XWBN4QWSAcuvN7urYK%2BTWMZlMrO6oIKfg3%2F%2FmHwN1XtElixecu3N4uZLlB1vlF6AHJI9m5LHs0JcjcoIGBtZdM1hYsKQw5dmdt%2BovcXJLDhfC%2BrijdgDiexuCz8ymPxNow%2FJvxwwY6pgEUZMq%2B4kuPMtCW4a9HxwHPyZabQYzR4UZ1WkR1cPymy9PK0PJlHS%2BiCzIy40aySkAyNBApjzl4uf%2BNjNd1ZTbS6MdXBVYvwuJkr6po95sfpPh9WzwPU8Kyokslz%2Fma9enw8YcofLU%2Bsv1MUaltWPV8tDf9jgo9eygEo43Oz5bHLBKG8WktXc2%2FJvBhoR8ILQ7KbdAqIJArW5iFnTqKSsTB4MUPfHHH&X-Amz-Signature=0800f0e7e1a0d31eb5aaddbdc48a57fe9c1de6b33aaaffc428fd3c6a39740d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KYUND6W%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChFNTWhh43OZ6yZnPDmsN2CeeSu9b6eG%2BtajP6jW%2BPKAiB1jQjhm5lyqUGypqqL87JnzOU7hBXKZ2yfeiOPpmTrHSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM51QCg%2FQHtCSxVSd%2BKtwDHhLI1bRS8qTkgZvlPLlw%2BAeCocD0IviW4neMFRmthU%2FXgnL4bWvuR8MUt%2BO%2FHuiaIrMVREMBo6y03rSEVmHdgZpwgRu3NDg3tn3xQW3v%2Fcnz1ujzvXpOS%2B3nbw%2F3CrkIhWPgeX4v7Xf%2BFL0vfysqBG5jDh%2FxyI0csSpIx33noN09seYDRAIGFrCciNBS2%2B%2BczXztht45EYmL%2FlsPFfcDZNtSwYMGdLsn6niG2jYhlPIKeMVWCId1gJ7iE3j0tvvUzBS2u3M60qS3Yx7RDoO9pmG1YCVrg%2B9x%2FIyrumoaLpDhZSx4qpKYc1l7KHka2%2BaWb1QpxtuVjdfOv%2BD4lasgUepZc%2Fhq2YF7ifT%2BwW1I24HiVFZekijW0GKLCbXN4Pl4hHKw4YlLSI6t4savgi7QIw1GLk2OzRmSEMPuAwgUhcDrcvj4M4ucaz341iJfnkj6lRoMNtUhzcD%2FVpoz4KZi6zlpvmj2H9S82KeLiMddnTKqhVhC68X1BRXLF3XWBN4QWSAcuvN7urYK%2BTWMZlMrO6oIKfg3%2F%2FmHwN1XtElixecu3N4uZLlB1vlF6AHJI9m5LHs0JcjcoIGBtZdM1hYsKQw5dmdt%2BovcXJLDhfC%2BrijdgDiexuCz8ymPxNow%2FJvxwwY6pgEUZMq%2B4kuPMtCW4a9HxwHPyZabQYzR4UZ1WkR1cPymy9PK0PJlHS%2BiCzIy40aySkAyNBApjzl4uf%2BNjNd1ZTbS6MdXBVYvwuJkr6po95sfpPh9WzwPU8Kyokslz%2Fma9enw8YcofLU%2Bsv1MUaltWPV8tDf9jgo9eygEo43Oz5bHLBKG8WktXc2%2FJvBhoR8ILQ7KbdAqIJArW5iFnTqKSsTB4MUPfHHH&X-Amz-Signature=e7d3723692061065a70e9bba674729e761006f95d4e53b67ec9e324ce7571612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KYUND6W%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChFNTWhh43OZ6yZnPDmsN2CeeSu9b6eG%2BtajP6jW%2BPKAiB1jQjhm5lyqUGypqqL87JnzOU7hBXKZ2yfeiOPpmTrHSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM51QCg%2FQHtCSxVSd%2BKtwDHhLI1bRS8qTkgZvlPLlw%2BAeCocD0IviW4neMFRmthU%2FXgnL4bWvuR8MUt%2BO%2FHuiaIrMVREMBo6y03rSEVmHdgZpwgRu3NDg3tn3xQW3v%2Fcnz1ujzvXpOS%2B3nbw%2F3CrkIhWPgeX4v7Xf%2BFL0vfysqBG5jDh%2FxyI0csSpIx33noN09seYDRAIGFrCciNBS2%2B%2BczXztht45EYmL%2FlsPFfcDZNtSwYMGdLsn6niG2jYhlPIKeMVWCId1gJ7iE3j0tvvUzBS2u3M60qS3Yx7RDoO9pmG1YCVrg%2B9x%2FIyrumoaLpDhZSx4qpKYc1l7KHka2%2BaWb1QpxtuVjdfOv%2BD4lasgUepZc%2Fhq2YF7ifT%2BwW1I24HiVFZekijW0GKLCbXN4Pl4hHKw4YlLSI6t4savgi7QIw1GLk2OzRmSEMPuAwgUhcDrcvj4M4ucaz341iJfnkj6lRoMNtUhzcD%2FVpoz4KZi6zlpvmj2H9S82KeLiMddnTKqhVhC68X1BRXLF3XWBN4QWSAcuvN7urYK%2BTWMZlMrO6oIKfg3%2F%2FmHwN1XtElixecu3N4uZLlB1vlF6AHJI9m5LHs0JcjcoIGBtZdM1hYsKQw5dmdt%2BovcXJLDhfC%2BrijdgDiexuCz8ymPxNow%2FJvxwwY6pgEUZMq%2B4kuPMtCW4a9HxwHPyZabQYzR4UZ1WkR1cPymy9PK0PJlHS%2BiCzIy40aySkAyNBApjzl4uf%2BNjNd1ZTbS6MdXBVYvwuJkr6po95sfpPh9WzwPU8Kyokslz%2Fma9enw8YcofLU%2Bsv1MUaltWPV8tDf9jgo9eygEo43Oz5bHLBKG8WktXc2%2FJvBhoR8ILQ7KbdAqIJArW5iFnTqKSsTB4MUPfHHH&X-Amz-Signature=38cd00690462fab1ff2d653c9e6ac0f3c1b8a68504c2bc9768a9e9d6b897f77a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

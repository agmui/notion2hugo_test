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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGYZHEJC%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICuL5zMa4OfMaETR4ZkRhAC0hb%2FBRo8e0P6hYB6z0yqBAiBubyKTFNlUvzIuQsueACv%2BTagmeVv%2FKoWKMjgctSr1QiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiPJ2ciVmIgwxGYa9KtwDqLit3%2B7IzzO8ORadzH2iFar4cm2P6Z%2B4qDXqU6wDv6QoZFnErYlfG3RqA3lVqYv0st2KKuRnMbpdDG7tX%2Bu86mprUPhc3kdVu3DbzSngX4r%2FtVmPSJL0DJ4WNr%2FL2iEF%2Fy0fcO%2FbsxxtvenLEkNrsRoJzsOCtyfvLcSKAGN7QOst2DJlbOyP%2F4HDMAGNLRxFnRwfnfbxwzcva%2BfyNQsxlQKBb3Qx%2FAQaxIJKfSEBNMfZnW44Zb6Y1nI1inslw5HZyrbEOOcTKn%2BC1afsj5kjGWA8JZgwucwuMZtL%2BmSIXjkJyCiEQQF1mYuh%2F7UsfdB5g4TFHG%2BveyOJbF9USy%2BG6WXQFEhbWZqf24wa2eOJ8rLPrhxqtimXDLETArrGNw%2B03WMMF4RSejhFL3Cqoi8cPpH4BU%2BLBPhqmWjo5%2FhSoCtzaW5%2Fhmnes1hmOfI70r9g9l7GVkJJaFq6QabGWX0QXd6IEoVvBfRS6EQa52JvVfWpNxrZsWIj3WbIGHH1UYo4QRt3cgPHpi2FFC3%2FxSAO5FvL%2F3Veu%2Bltpo337iCsA7%2FUAfUXfjeFdOH2IsAMLlpF6iher9UeMMdPfniwQa51pzIz8%2BUhqZ43psw2VXAVK0NjN3scezsU1BVZKQEw9sfhwgY6pgHLd7OiAKZwiVO0t2wfeKaTsXIjtp%2BKO1hpzubq3wUYp32TuUmyYJ39jAt1KDp5kDJ%2FXMrsA%2Fpqf6CBESEUhm235%2FebwiTtMh9cDUu23%2BAR%2FTpgIVny8L1rT%2BpfOJyeUgNWWzl7W%2BBGMZg0xcpWAjh9YhGn%2B5m00b6MPeOtaAbyF3Bm4BIKXVtAv6g1z%2B5DLZDhacqA45VEo3ffWzB5bsoP%2FFCPXrgN&X-Amz-Signature=44ff9dba8fbdca239d569e76cd43fa60cf8426c3284ddcf03eb4d231ac819027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGYZHEJC%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICuL5zMa4OfMaETR4ZkRhAC0hb%2FBRo8e0P6hYB6z0yqBAiBubyKTFNlUvzIuQsueACv%2BTagmeVv%2FKoWKMjgctSr1QiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiPJ2ciVmIgwxGYa9KtwDqLit3%2B7IzzO8ORadzH2iFar4cm2P6Z%2B4qDXqU6wDv6QoZFnErYlfG3RqA3lVqYv0st2KKuRnMbpdDG7tX%2Bu86mprUPhc3kdVu3DbzSngX4r%2FtVmPSJL0DJ4WNr%2FL2iEF%2Fy0fcO%2FbsxxtvenLEkNrsRoJzsOCtyfvLcSKAGN7QOst2DJlbOyP%2F4HDMAGNLRxFnRwfnfbxwzcva%2BfyNQsxlQKBb3Qx%2FAQaxIJKfSEBNMfZnW44Zb6Y1nI1inslw5HZyrbEOOcTKn%2BC1afsj5kjGWA8JZgwucwuMZtL%2BmSIXjkJyCiEQQF1mYuh%2F7UsfdB5g4TFHG%2BveyOJbF9USy%2BG6WXQFEhbWZqf24wa2eOJ8rLPrhxqtimXDLETArrGNw%2B03WMMF4RSejhFL3Cqoi8cPpH4BU%2BLBPhqmWjo5%2FhSoCtzaW5%2Fhmnes1hmOfI70r9g9l7GVkJJaFq6QabGWX0QXd6IEoVvBfRS6EQa52JvVfWpNxrZsWIj3WbIGHH1UYo4QRt3cgPHpi2FFC3%2FxSAO5FvL%2F3Veu%2Bltpo337iCsA7%2FUAfUXfjeFdOH2IsAMLlpF6iher9UeMMdPfniwQa51pzIz8%2BUhqZ43psw2VXAVK0NjN3scezsU1BVZKQEw9sfhwgY6pgHLd7OiAKZwiVO0t2wfeKaTsXIjtp%2BKO1hpzubq3wUYp32TuUmyYJ39jAt1KDp5kDJ%2FXMrsA%2Fpqf6CBESEUhm235%2FebwiTtMh9cDUu23%2BAR%2FTpgIVny8L1rT%2BpfOJyeUgNWWzl7W%2BBGMZg0xcpWAjh9YhGn%2B5m00b6MPeOtaAbyF3Bm4BIKXVtAv6g1z%2B5DLZDhacqA45VEo3ffWzB5bsoP%2FFCPXrgN&X-Amz-Signature=efd2f73ec344c4b7003cb7d500ec113dd1f3c628e3f9e4b4636c8e35291f17ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGYZHEJC%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICuL5zMa4OfMaETR4ZkRhAC0hb%2FBRo8e0P6hYB6z0yqBAiBubyKTFNlUvzIuQsueACv%2BTagmeVv%2FKoWKMjgctSr1QiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiPJ2ciVmIgwxGYa9KtwDqLit3%2B7IzzO8ORadzH2iFar4cm2P6Z%2B4qDXqU6wDv6QoZFnErYlfG3RqA3lVqYv0st2KKuRnMbpdDG7tX%2Bu86mprUPhc3kdVu3DbzSngX4r%2FtVmPSJL0DJ4WNr%2FL2iEF%2Fy0fcO%2FbsxxtvenLEkNrsRoJzsOCtyfvLcSKAGN7QOst2DJlbOyP%2F4HDMAGNLRxFnRwfnfbxwzcva%2BfyNQsxlQKBb3Qx%2FAQaxIJKfSEBNMfZnW44Zb6Y1nI1inslw5HZyrbEOOcTKn%2BC1afsj5kjGWA8JZgwucwuMZtL%2BmSIXjkJyCiEQQF1mYuh%2F7UsfdB5g4TFHG%2BveyOJbF9USy%2BG6WXQFEhbWZqf24wa2eOJ8rLPrhxqtimXDLETArrGNw%2B03WMMF4RSejhFL3Cqoi8cPpH4BU%2BLBPhqmWjo5%2FhSoCtzaW5%2Fhmnes1hmOfI70r9g9l7GVkJJaFq6QabGWX0QXd6IEoVvBfRS6EQa52JvVfWpNxrZsWIj3WbIGHH1UYo4QRt3cgPHpi2FFC3%2FxSAO5FvL%2F3Veu%2Bltpo337iCsA7%2FUAfUXfjeFdOH2IsAMLlpF6iher9UeMMdPfniwQa51pzIz8%2BUhqZ43psw2VXAVK0NjN3scezsU1BVZKQEw9sfhwgY6pgHLd7OiAKZwiVO0t2wfeKaTsXIjtp%2BKO1hpzubq3wUYp32TuUmyYJ39jAt1KDp5kDJ%2FXMrsA%2Fpqf6CBESEUhm235%2FebwiTtMh9cDUu23%2BAR%2FTpgIVny8L1rT%2BpfOJyeUgNWWzl7W%2BBGMZg0xcpWAjh9YhGn%2B5m00b6MPeOtaAbyF3Bm4BIKXVtAv6g1z%2B5DLZDhacqA45VEo3ffWzB5bsoP%2FFCPXrgN&X-Amz-Signature=a6dae1e7e49c52a73e5dceeef1acdcfcdec1600d1af2132c44fcd535b93d0c35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGYZHEJC%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICuL5zMa4OfMaETR4ZkRhAC0hb%2FBRo8e0P6hYB6z0yqBAiBubyKTFNlUvzIuQsueACv%2BTagmeVv%2FKoWKMjgctSr1QiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiPJ2ciVmIgwxGYa9KtwDqLit3%2B7IzzO8ORadzH2iFar4cm2P6Z%2B4qDXqU6wDv6QoZFnErYlfG3RqA3lVqYv0st2KKuRnMbpdDG7tX%2Bu86mprUPhc3kdVu3DbzSngX4r%2FtVmPSJL0DJ4WNr%2FL2iEF%2Fy0fcO%2FbsxxtvenLEkNrsRoJzsOCtyfvLcSKAGN7QOst2DJlbOyP%2F4HDMAGNLRxFnRwfnfbxwzcva%2BfyNQsxlQKBb3Qx%2FAQaxIJKfSEBNMfZnW44Zb6Y1nI1inslw5HZyrbEOOcTKn%2BC1afsj5kjGWA8JZgwucwuMZtL%2BmSIXjkJyCiEQQF1mYuh%2F7UsfdB5g4TFHG%2BveyOJbF9USy%2BG6WXQFEhbWZqf24wa2eOJ8rLPrhxqtimXDLETArrGNw%2B03WMMF4RSejhFL3Cqoi8cPpH4BU%2BLBPhqmWjo5%2FhSoCtzaW5%2Fhmnes1hmOfI70r9g9l7GVkJJaFq6QabGWX0QXd6IEoVvBfRS6EQa52JvVfWpNxrZsWIj3WbIGHH1UYo4QRt3cgPHpi2FFC3%2FxSAO5FvL%2F3Veu%2Bltpo337iCsA7%2FUAfUXfjeFdOH2IsAMLlpF6iher9UeMMdPfniwQa51pzIz8%2BUhqZ43psw2VXAVK0NjN3scezsU1BVZKQEw9sfhwgY6pgHLd7OiAKZwiVO0t2wfeKaTsXIjtp%2BKO1hpzubq3wUYp32TuUmyYJ39jAt1KDp5kDJ%2FXMrsA%2Fpqf6CBESEUhm235%2FebwiTtMh9cDUu23%2BAR%2FTpgIVny8L1rT%2BpfOJyeUgNWWzl7W%2BBGMZg0xcpWAjh9YhGn%2B5m00b6MPeOtaAbyF3Bm4BIKXVtAv6g1z%2B5DLZDhacqA45VEo3ffWzB5bsoP%2FFCPXrgN&X-Amz-Signature=214db92034c09e9b905b323fa9df1dbc686c31c04a69f6748a6f958a21cfe9c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGYZHEJC%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICuL5zMa4OfMaETR4ZkRhAC0hb%2FBRo8e0P6hYB6z0yqBAiBubyKTFNlUvzIuQsueACv%2BTagmeVv%2FKoWKMjgctSr1QiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiPJ2ciVmIgwxGYa9KtwDqLit3%2B7IzzO8ORadzH2iFar4cm2P6Z%2B4qDXqU6wDv6QoZFnErYlfG3RqA3lVqYv0st2KKuRnMbpdDG7tX%2Bu86mprUPhc3kdVu3DbzSngX4r%2FtVmPSJL0DJ4WNr%2FL2iEF%2Fy0fcO%2FbsxxtvenLEkNrsRoJzsOCtyfvLcSKAGN7QOst2DJlbOyP%2F4HDMAGNLRxFnRwfnfbxwzcva%2BfyNQsxlQKBb3Qx%2FAQaxIJKfSEBNMfZnW44Zb6Y1nI1inslw5HZyrbEOOcTKn%2BC1afsj5kjGWA8JZgwucwuMZtL%2BmSIXjkJyCiEQQF1mYuh%2F7UsfdB5g4TFHG%2BveyOJbF9USy%2BG6WXQFEhbWZqf24wa2eOJ8rLPrhxqtimXDLETArrGNw%2B03WMMF4RSejhFL3Cqoi8cPpH4BU%2BLBPhqmWjo5%2FhSoCtzaW5%2Fhmnes1hmOfI70r9g9l7GVkJJaFq6QabGWX0QXd6IEoVvBfRS6EQa52JvVfWpNxrZsWIj3WbIGHH1UYo4QRt3cgPHpi2FFC3%2FxSAO5FvL%2F3Veu%2Bltpo337iCsA7%2FUAfUXfjeFdOH2IsAMLlpF6iher9UeMMdPfniwQa51pzIz8%2BUhqZ43psw2VXAVK0NjN3scezsU1BVZKQEw9sfhwgY6pgHLd7OiAKZwiVO0t2wfeKaTsXIjtp%2BKO1hpzubq3wUYp32TuUmyYJ39jAt1KDp5kDJ%2FXMrsA%2Fpqf6CBESEUhm235%2FebwiTtMh9cDUu23%2BAR%2FTpgIVny8L1rT%2BpfOJyeUgNWWzl7W%2BBGMZg0xcpWAjh9YhGn%2B5m00b6MPeOtaAbyF3Bm4BIKXVtAv6g1z%2B5DLZDhacqA45VEo3ffWzB5bsoP%2FFCPXrgN&X-Amz-Signature=8806e6b5d36c0cc650500da3eaf754df0bbb98d5e0b398892be7520f6ff47e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

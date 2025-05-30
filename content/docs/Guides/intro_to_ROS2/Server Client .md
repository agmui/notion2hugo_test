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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YIBRV56%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0NUyA654TmNSQRuWilIsHOfskQy5Abjj9n%2Bl2kE6itAiBL5S34aVyKIAzmfYl2es0dcbN7GAYCRiK4qJlAXRaoMSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2FvQkV7l%2FgD3izDuKtwDCoy0oV7%2Bysz0JN31%2Fj4JPGRLTstN7ri915kiyb9nzfIMUnZ2vLTOYYnDjjkuz6tEztUqAElw82x%2F%2BWHbmSapW9TeEo81aznVU11xuk0RJxAhSJ%2B9SJ4DukmxncJxR%2BKT0u8Dne9nGtd1NclbYmrwfCPKwULFns%2FnUpJ5YBMKYbYlHXpU7X3mA6ZfWQqqP%2BQKi9%2BGLg1wxJxKRlRYm2k0pOWo%2Fb51ptSdF2%2FsCghwDLRDySJsdVBaiUozhUp%2Fz8%2BVtC7mX0YzAmDSCL4iu7Sb5GryqddOui5BPmkA9F5fGHQbrVwDR4ftcNtFRJjGRjhAPLY3Gfnq66AoBLxSH%2BOYmGSTKAuOuBnGXGJ01vzF%2BKDCqfWIFa%2FmNehE%2FFj0jnTgHKjotLy0YbY%2F%2Flt4lnfgewvArpBrPcTTww0LONWyudoVZv8Ki3oI%2FlQ3m5u9vq98oqGQ3fa2YaBJfwAEHZAfm133PsBxC%2FiHtaYMJzjbiKHpaQPR1VjKWrTNBHEqPtXqOUY73BDyPIYUUE20ax9ap9APjnvSk7nnLE0SGHbjA7z264HzQ8YXqBaLQ0Ueq8qr%2BpgTlICEJHSUGJfbTCBb1sYCTDW9I3IZn7%2FOZf1iR4a0wXwDu9BRpGpDKXgw3vLmwQY6pgHFtbPGWETUw8lbByEoYzA8xPPeTk541H5mwg%2BDCXDkxL9B3rvLTsP834uQuaVzRcRdxBHrVR34l7gLz2vj%2B4dHuI3aNsG55DQFm%2BjW%2BR365IVqD3u9fc%2FS3B6PlISOhkks2n4yP0q1VmyItRdXyzBYHRNssMrXfvrRuYZPfOYoT5hOHoO5BlsM%2BRQFMtnJfaTRUbVKd7NwORgG%2B2IevrVLrlgPgQF4&X-Amz-Signature=7c608f43771d0b507a510a5978a76ad9e2115fc2661cbd848540b23225bddda9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YIBRV56%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0NUyA654TmNSQRuWilIsHOfskQy5Abjj9n%2Bl2kE6itAiBL5S34aVyKIAzmfYl2es0dcbN7GAYCRiK4qJlAXRaoMSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2FvQkV7l%2FgD3izDuKtwDCoy0oV7%2Bysz0JN31%2Fj4JPGRLTstN7ri915kiyb9nzfIMUnZ2vLTOYYnDjjkuz6tEztUqAElw82x%2F%2BWHbmSapW9TeEo81aznVU11xuk0RJxAhSJ%2B9SJ4DukmxncJxR%2BKT0u8Dne9nGtd1NclbYmrwfCPKwULFns%2FnUpJ5YBMKYbYlHXpU7X3mA6ZfWQqqP%2BQKi9%2BGLg1wxJxKRlRYm2k0pOWo%2Fb51ptSdF2%2FsCghwDLRDySJsdVBaiUozhUp%2Fz8%2BVtC7mX0YzAmDSCL4iu7Sb5GryqddOui5BPmkA9F5fGHQbrVwDR4ftcNtFRJjGRjhAPLY3Gfnq66AoBLxSH%2BOYmGSTKAuOuBnGXGJ01vzF%2BKDCqfWIFa%2FmNehE%2FFj0jnTgHKjotLy0YbY%2F%2Flt4lnfgewvArpBrPcTTww0LONWyudoVZv8Ki3oI%2FlQ3m5u9vq98oqGQ3fa2YaBJfwAEHZAfm133PsBxC%2FiHtaYMJzjbiKHpaQPR1VjKWrTNBHEqPtXqOUY73BDyPIYUUE20ax9ap9APjnvSk7nnLE0SGHbjA7z264HzQ8YXqBaLQ0Ueq8qr%2BpgTlICEJHSUGJfbTCBb1sYCTDW9I3IZn7%2FOZf1iR4a0wXwDu9BRpGpDKXgw3vLmwQY6pgHFtbPGWETUw8lbByEoYzA8xPPeTk541H5mwg%2BDCXDkxL9B3rvLTsP834uQuaVzRcRdxBHrVR34l7gLz2vj%2B4dHuI3aNsG55DQFm%2BjW%2BR365IVqD3u9fc%2FS3B6PlISOhkks2n4yP0q1VmyItRdXyzBYHRNssMrXfvrRuYZPfOYoT5hOHoO5BlsM%2BRQFMtnJfaTRUbVKd7NwORgG%2B2IevrVLrlgPgQF4&X-Amz-Signature=8f175b583d9e623adb20b930de0d27de702713c37be0299d2d1fb0270dd7eb6c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YIBRV56%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0NUyA654TmNSQRuWilIsHOfskQy5Abjj9n%2Bl2kE6itAiBL5S34aVyKIAzmfYl2es0dcbN7GAYCRiK4qJlAXRaoMSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2FvQkV7l%2FgD3izDuKtwDCoy0oV7%2Bysz0JN31%2Fj4JPGRLTstN7ri915kiyb9nzfIMUnZ2vLTOYYnDjjkuz6tEztUqAElw82x%2F%2BWHbmSapW9TeEo81aznVU11xuk0RJxAhSJ%2B9SJ4DukmxncJxR%2BKT0u8Dne9nGtd1NclbYmrwfCPKwULFns%2FnUpJ5YBMKYbYlHXpU7X3mA6ZfWQqqP%2BQKi9%2BGLg1wxJxKRlRYm2k0pOWo%2Fb51ptSdF2%2FsCghwDLRDySJsdVBaiUozhUp%2Fz8%2BVtC7mX0YzAmDSCL4iu7Sb5GryqddOui5BPmkA9F5fGHQbrVwDR4ftcNtFRJjGRjhAPLY3Gfnq66AoBLxSH%2BOYmGSTKAuOuBnGXGJ01vzF%2BKDCqfWIFa%2FmNehE%2FFj0jnTgHKjotLy0YbY%2F%2Flt4lnfgewvArpBrPcTTww0LONWyudoVZv8Ki3oI%2FlQ3m5u9vq98oqGQ3fa2YaBJfwAEHZAfm133PsBxC%2FiHtaYMJzjbiKHpaQPR1VjKWrTNBHEqPtXqOUY73BDyPIYUUE20ax9ap9APjnvSk7nnLE0SGHbjA7z264HzQ8YXqBaLQ0Ueq8qr%2BpgTlICEJHSUGJfbTCBb1sYCTDW9I3IZn7%2FOZf1iR4a0wXwDu9BRpGpDKXgw3vLmwQY6pgHFtbPGWETUw8lbByEoYzA8xPPeTk541H5mwg%2BDCXDkxL9B3rvLTsP834uQuaVzRcRdxBHrVR34l7gLz2vj%2B4dHuI3aNsG55DQFm%2BjW%2BR365IVqD3u9fc%2FS3B6PlISOhkks2n4yP0q1VmyItRdXyzBYHRNssMrXfvrRuYZPfOYoT5hOHoO5BlsM%2BRQFMtnJfaTRUbVKd7NwORgG%2B2IevrVLrlgPgQF4&X-Amz-Signature=f9f9247a4b5378e977705c39aac9b0174c4023cacfbe75406f5d9605a3bfde65&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YIBRV56%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0NUyA654TmNSQRuWilIsHOfskQy5Abjj9n%2Bl2kE6itAiBL5S34aVyKIAzmfYl2es0dcbN7GAYCRiK4qJlAXRaoMSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2FvQkV7l%2FgD3izDuKtwDCoy0oV7%2Bysz0JN31%2Fj4JPGRLTstN7ri915kiyb9nzfIMUnZ2vLTOYYnDjjkuz6tEztUqAElw82x%2F%2BWHbmSapW9TeEo81aznVU11xuk0RJxAhSJ%2B9SJ4DukmxncJxR%2BKT0u8Dne9nGtd1NclbYmrwfCPKwULFns%2FnUpJ5YBMKYbYlHXpU7X3mA6ZfWQqqP%2BQKi9%2BGLg1wxJxKRlRYm2k0pOWo%2Fb51ptSdF2%2FsCghwDLRDySJsdVBaiUozhUp%2Fz8%2BVtC7mX0YzAmDSCL4iu7Sb5GryqddOui5BPmkA9F5fGHQbrVwDR4ftcNtFRJjGRjhAPLY3Gfnq66AoBLxSH%2BOYmGSTKAuOuBnGXGJ01vzF%2BKDCqfWIFa%2FmNehE%2FFj0jnTgHKjotLy0YbY%2F%2Flt4lnfgewvArpBrPcTTww0LONWyudoVZv8Ki3oI%2FlQ3m5u9vq98oqGQ3fa2YaBJfwAEHZAfm133PsBxC%2FiHtaYMJzjbiKHpaQPR1VjKWrTNBHEqPtXqOUY73BDyPIYUUE20ax9ap9APjnvSk7nnLE0SGHbjA7z264HzQ8YXqBaLQ0Ueq8qr%2BpgTlICEJHSUGJfbTCBb1sYCTDW9I3IZn7%2FOZf1iR4a0wXwDu9BRpGpDKXgw3vLmwQY6pgHFtbPGWETUw8lbByEoYzA8xPPeTk541H5mwg%2BDCXDkxL9B3rvLTsP834uQuaVzRcRdxBHrVR34l7gLz2vj%2B4dHuI3aNsG55DQFm%2BjW%2BR365IVqD3u9fc%2FS3B6PlISOhkks2n4yP0q1VmyItRdXyzBYHRNssMrXfvrRuYZPfOYoT5hOHoO5BlsM%2BRQFMtnJfaTRUbVKd7NwORgG%2B2IevrVLrlgPgQF4&X-Amz-Signature=c1f5b4ce401f7aa91409c73d18f0ec160fd076a7e7f6ae60e96aee5058b82b00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YIBRV56%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0NUyA654TmNSQRuWilIsHOfskQy5Abjj9n%2Bl2kE6itAiBL5S34aVyKIAzmfYl2es0dcbN7GAYCRiK4qJlAXRaoMSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2FvQkV7l%2FgD3izDuKtwDCoy0oV7%2Bysz0JN31%2Fj4JPGRLTstN7ri915kiyb9nzfIMUnZ2vLTOYYnDjjkuz6tEztUqAElw82x%2F%2BWHbmSapW9TeEo81aznVU11xuk0RJxAhSJ%2B9SJ4DukmxncJxR%2BKT0u8Dne9nGtd1NclbYmrwfCPKwULFns%2FnUpJ5YBMKYbYlHXpU7X3mA6ZfWQqqP%2BQKi9%2BGLg1wxJxKRlRYm2k0pOWo%2Fb51ptSdF2%2FsCghwDLRDySJsdVBaiUozhUp%2Fz8%2BVtC7mX0YzAmDSCL4iu7Sb5GryqddOui5BPmkA9F5fGHQbrVwDR4ftcNtFRJjGRjhAPLY3Gfnq66AoBLxSH%2BOYmGSTKAuOuBnGXGJ01vzF%2BKDCqfWIFa%2FmNehE%2FFj0jnTgHKjotLy0YbY%2F%2Flt4lnfgewvArpBrPcTTww0LONWyudoVZv8Ki3oI%2FlQ3m5u9vq98oqGQ3fa2YaBJfwAEHZAfm133PsBxC%2FiHtaYMJzjbiKHpaQPR1VjKWrTNBHEqPtXqOUY73BDyPIYUUE20ax9ap9APjnvSk7nnLE0SGHbjA7z264HzQ8YXqBaLQ0Ueq8qr%2BpgTlICEJHSUGJfbTCBb1sYCTDW9I3IZn7%2FOZf1iR4a0wXwDu9BRpGpDKXgw3vLmwQY6pgHFtbPGWETUw8lbByEoYzA8xPPeTk541H5mwg%2BDCXDkxL9B3rvLTsP834uQuaVzRcRdxBHrVR34l7gLz2vj%2B4dHuI3aNsG55DQFm%2BjW%2BR365IVqD3u9fc%2FS3B6PlISOhkks2n4yP0q1VmyItRdXyzBYHRNssMrXfvrRuYZPfOYoT5hOHoO5BlsM%2BRQFMtnJfaTRUbVKd7NwORgG%2B2IevrVLrlgPgQF4&X-Amz-Signature=daae54d0bc9f079fa42fdb909130a46c7b7b65bca5ba24d62650287d7dff14ed&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO3R526G%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIEU45m%2FovpMQnDbgU%2FI44RTF2SmNJ0CHJlU24y32wW4%2FAiBEloD9O1RsqOaKdCvUBPGEJqdXNZpMmz8cmnJqbUbrwCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4tq91nmyfb%2ByOYyZKtwDcmZKT%2BURw0BFvYzx7udVfNuqRKJ0nz%2B9mihY%2B1u2dfKq2hdvueA94ZYUX5vE%2Fi9B5Mc0463CfsEL5Kn9rXfQglS5C8Gve9hrPdb4HRj%2FgyjqeVuNaDpSXXXaxXbamVYLLL%2BDWic0aaB2C3Z2VbH8TVG1VuFUd%2Funqd%2FVXg09gyI8oG3PuONlZs%2F2gMhdA%2Bh7jtso0O2%2FGa9gfcQycwYXNEPlAYmHZfgLx1JBiRljVCrPKbwSXgySyR7ZvAQp%2FXmDj5UGshJi82GRCCgvRH21qrTzXFcUXDM9BnYk7Ol1Lxe9e0KXMkC9A%2FWLLn9HGbeizcuc7Jedd%2FBek85Xlv6ZOtgJovnKkq2UBXwe2G%2BJ4nBAo4CSoihIVCqrW%2FFHtobJ4r5qrlntfRPSjHRuURLP7eRqVKN%2FjS%2BZkA8FOqDROqYiR9m4ltUK6nUsVEqEYVZq4Z%2Bfw8ozBo2p4vmjIp2u4kyo1mxEuLiGktUZMUHnN%2BOPWGnUL%2FSyRs5whpFlXhBD0uVvPbByH8GjRXphvMcWCIPBGgBhYx%2BD4U6D6dK9t4ts6gryCsApEp8HoQdza5EXhhOSGcpCmCGcPP2EHhZ9kzobYgLpuvtzcInsM%2BenJnKm0fMq%2Fhzr5ZtCB%2BIwrvKLwQY6pgEHiTnkgUv07l9e2nBperDZc5p9HtCyf7fHG87BQk5zSwDxoYXQ8cPNXi6cJWJBjavc89EEbi2%2F5MnkqoqCkxPN1VklhP2KI01isX%2FCwCLtC6UfdJLWDnw%2BudAUA1L8MbCHE%2FNuXh4KmYzGXIh6i3Th8dDAPZgfRGFDuYTCZfG072eoMycU9Tp95Z%2Bw%2BVGbz%2BTTE9NABdB83yhQyjICK9V%2Be%2Fuig7TP&X-Amz-Signature=1842c119db229e5f5e8ad1f34ee6823e770c0562d749a57c6e82563fa9262dc2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO3R526G%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIEU45m%2FovpMQnDbgU%2FI44RTF2SmNJ0CHJlU24y32wW4%2FAiBEloD9O1RsqOaKdCvUBPGEJqdXNZpMmz8cmnJqbUbrwCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4tq91nmyfb%2ByOYyZKtwDcmZKT%2BURw0BFvYzx7udVfNuqRKJ0nz%2B9mihY%2B1u2dfKq2hdvueA94ZYUX5vE%2Fi9B5Mc0463CfsEL5Kn9rXfQglS5C8Gve9hrPdb4HRj%2FgyjqeVuNaDpSXXXaxXbamVYLLL%2BDWic0aaB2C3Z2VbH8TVG1VuFUd%2Funqd%2FVXg09gyI8oG3PuONlZs%2F2gMhdA%2Bh7jtso0O2%2FGa9gfcQycwYXNEPlAYmHZfgLx1JBiRljVCrPKbwSXgySyR7ZvAQp%2FXmDj5UGshJi82GRCCgvRH21qrTzXFcUXDM9BnYk7Ol1Lxe9e0KXMkC9A%2FWLLn9HGbeizcuc7Jedd%2FBek85Xlv6ZOtgJovnKkq2UBXwe2G%2BJ4nBAo4CSoihIVCqrW%2FFHtobJ4r5qrlntfRPSjHRuURLP7eRqVKN%2FjS%2BZkA8FOqDROqYiR9m4ltUK6nUsVEqEYVZq4Z%2Bfw8ozBo2p4vmjIp2u4kyo1mxEuLiGktUZMUHnN%2BOPWGnUL%2FSyRs5whpFlXhBD0uVvPbByH8GjRXphvMcWCIPBGgBhYx%2BD4U6D6dK9t4ts6gryCsApEp8HoQdza5EXhhOSGcpCmCGcPP2EHhZ9kzobYgLpuvtzcInsM%2BenJnKm0fMq%2Fhzr5ZtCB%2BIwrvKLwQY6pgEHiTnkgUv07l9e2nBperDZc5p9HtCyf7fHG87BQk5zSwDxoYXQ8cPNXi6cJWJBjavc89EEbi2%2F5MnkqoqCkxPN1VklhP2KI01isX%2FCwCLtC6UfdJLWDnw%2BudAUA1L8MbCHE%2FNuXh4KmYzGXIh6i3Th8dDAPZgfRGFDuYTCZfG072eoMycU9Tp95Z%2Bw%2BVGbz%2BTTE9NABdB83yhQyjICK9V%2Be%2Fuig7TP&X-Amz-Signature=5406e9e985d31207b73e7b331c68dc1ad71d16566e48c5281a013dd466a43c4d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO3R526G%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIEU45m%2FovpMQnDbgU%2FI44RTF2SmNJ0CHJlU24y32wW4%2FAiBEloD9O1RsqOaKdCvUBPGEJqdXNZpMmz8cmnJqbUbrwCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4tq91nmyfb%2ByOYyZKtwDcmZKT%2BURw0BFvYzx7udVfNuqRKJ0nz%2B9mihY%2B1u2dfKq2hdvueA94ZYUX5vE%2Fi9B5Mc0463CfsEL5Kn9rXfQglS5C8Gve9hrPdb4HRj%2FgyjqeVuNaDpSXXXaxXbamVYLLL%2BDWic0aaB2C3Z2VbH8TVG1VuFUd%2Funqd%2FVXg09gyI8oG3PuONlZs%2F2gMhdA%2Bh7jtso0O2%2FGa9gfcQycwYXNEPlAYmHZfgLx1JBiRljVCrPKbwSXgySyR7ZvAQp%2FXmDj5UGshJi82GRCCgvRH21qrTzXFcUXDM9BnYk7Ol1Lxe9e0KXMkC9A%2FWLLn9HGbeizcuc7Jedd%2FBek85Xlv6ZOtgJovnKkq2UBXwe2G%2BJ4nBAo4CSoihIVCqrW%2FFHtobJ4r5qrlntfRPSjHRuURLP7eRqVKN%2FjS%2BZkA8FOqDROqYiR9m4ltUK6nUsVEqEYVZq4Z%2Bfw8ozBo2p4vmjIp2u4kyo1mxEuLiGktUZMUHnN%2BOPWGnUL%2FSyRs5whpFlXhBD0uVvPbByH8GjRXphvMcWCIPBGgBhYx%2BD4U6D6dK9t4ts6gryCsApEp8HoQdza5EXhhOSGcpCmCGcPP2EHhZ9kzobYgLpuvtzcInsM%2BenJnKm0fMq%2Fhzr5ZtCB%2BIwrvKLwQY6pgEHiTnkgUv07l9e2nBperDZc5p9HtCyf7fHG87BQk5zSwDxoYXQ8cPNXi6cJWJBjavc89EEbi2%2F5MnkqoqCkxPN1VklhP2KI01isX%2FCwCLtC6UfdJLWDnw%2BudAUA1L8MbCHE%2FNuXh4KmYzGXIh6i3Th8dDAPZgfRGFDuYTCZfG072eoMycU9Tp95Z%2Bw%2BVGbz%2BTTE9NABdB83yhQyjICK9V%2Be%2Fuig7TP&X-Amz-Signature=6a4532f730662bf5e798298a047ace4db7b8a168d43049718cdc73427a78895f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO3R526G%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIEU45m%2FovpMQnDbgU%2FI44RTF2SmNJ0CHJlU24y32wW4%2FAiBEloD9O1RsqOaKdCvUBPGEJqdXNZpMmz8cmnJqbUbrwCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4tq91nmyfb%2ByOYyZKtwDcmZKT%2BURw0BFvYzx7udVfNuqRKJ0nz%2B9mihY%2B1u2dfKq2hdvueA94ZYUX5vE%2Fi9B5Mc0463CfsEL5Kn9rXfQglS5C8Gve9hrPdb4HRj%2FgyjqeVuNaDpSXXXaxXbamVYLLL%2BDWic0aaB2C3Z2VbH8TVG1VuFUd%2Funqd%2FVXg09gyI8oG3PuONlZs%2F2gMhdA%2Bh7jtso0O2%2FGa9gfcQycwYXNEPlAYmHZfgLx1JBiRljVCrPKbwSXgySyR7ZvAQp%2FXmDj5UGshJi82GRCCgvRH21qrTzXFcUXDM9BnYk7Ol1Lxe9e0KXMkC9A%2FWLLn9HGbeizcuc7Jedd%2FBek85Xlv6ZOtgJovnKkq2UBXwe2G%2BJ4nBAo4CSoihIVCqrW%2FFHtobJ4r5qrlntfRPSjHRuURLP7eRqVKN%2FjS%2BZkA8FOqDROqYiR9m4ltUK6nUsVEqEYVZq4Z%2Bfw8ozBo2p4vmjIp2u4kyo1mxEuLiGktUZMUHnN%2BOPWGnUL%2FSyRs5whpFlXhBD0uVvPbByH8GjRXphvMcWCIPBGgBhYx%2BD4U6D6dK9t4ts6gryCsApEp8HoQdza5EXhhOSGcpCmCGcPP2EHhZ9kzobYgLpuvtzcInsM%2BenJnKm0fMq%2Fhzr5ZtCB%2BIwrvKLwQY6pgEHiTnkgUv07l9e2nBperDZc5p9HtCyf7fHG87BQk5zSwDxoYXQ8cPNXi6cJWJBjavc89EEbi2%2F5MnkqoqCkxPN1VklhP2KI01isX%2FCwCLtC6UfdJLWDnw%2BudAUA1L8MbCHE%2FNuXh4KmYzGXIh6i3Th8dDAPZgfRGFDuYTCZfG072eoMycU9Tp95Z%2Bw%2BVGbz%2BTTE9NABdB83yhQyjICK9V%2Be%2Fuig7TP&X-Amz-Signature=16bd2e0613489580d7bd4b7308925ed3513a78282274b49b37fbcf7aae707c00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO3R526G%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIEU45m%2FovpMQnDbgU%2FI44RTF2SmNJ0CHJlU24y32wW4%2FAiBEloD9O1RsqOaKdCvUBPGEJqdXNZpMmz8cmnJqbUbrwCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4tq91nmyfb%2ByOYyZKtwDcmZKT%2BURw0BFvYzx7udVfNuqRKJ0nz%2B9mihY%2B1u2dfKq2hdvueA94ZYUX5vE%2Fi9B5Mc0463CfsEL5Kn9rXfQglS5C8Gve9hrPdb4HRj%2FgyjqeVuNaDpSXXXaxXbamVYLLL%2BDWic0aaB2C3Z2VbH8TVG1VuFUd%2Funqd%2FVXg09gyI8oG3PuONlZs%2F2gMhdA%2Bh7jtso0O2%2FGa9gfcQycwYXNEPlAYmHZfgLx1JBiRljVCrPKbwSXgySyR7ZvAQp%2FXmDj5UGshJi82GRCCgvRH21qrTzXFcUXDM9BnYk7Ol1Lxe9e0KXMkC9A%2FWLLn9HGbeizcuc7Jedd%2FBek85Xlv6ZOtgJovnKkq2UBXwe2G%2BJ4nBAo4CSoihIVCqrW%2FFHtobJ4r5qrlntfRPSjHRuURLP7eRqVKN%2FjS%2BZkA8FOqDROqYiR9m4ltUK6nUsVEqEYVZq4Z%2Bfw8ozBo2p4vmjIp2u4kyo1mxEuLiGktUZMUHnN%2BOPWGnUL%2FSyRs5whpFlXhBD0uVvPbByH8GjRXphvMcWCIPBGgBhYx%2BD4U6D6dK9t4ts6gryCsApEp8HoQdza5EXhhOSGcpCmCGcPP2EHhZ9kzobYgLpuvtzcInsM%2BenJnKm0fMq%2Fhzr5ZtCB%2BIwrvKLwQY6pgEHiTnkgUv07l9e2nBperDZc5p9HtCyf7fHG87BQk5zSwDxoYXQ8cPNXi6cJWJBjavc89EEbi2%2F5MnkqoqCkxPN1VklhP2KI01isX%2FCwCLtC6UfdJLWDnw%2BudAUA1L8MbCHE%2FNuXh4KmYzGXIh6i3Th8dDAPZgfRGFDuYTCZfG072eoMycU9Tp95Z%2Bw%2BVGbz%2BTTE9NABdB83yhQyjICK9V%2Be%2Fuig7TP&X-Amz-Signature=5e51e7b5d543142085830bd71820ba0089f755d2f795219b7c9effd5579332dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622QWQLRE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIHSAfRUhizve3suPRqYpRSueT0ql1s%2FXO4hDgArPKdRNAiBvSoVjmZq0cczOTLGxLmoEJcB2XujSE6yQDhIwcdtYXCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUAr2RpjABNQOUWSGKtwDn2%2BXR9V5kPL%2F4aomrBOyFAiwpD7xld65FamSMKr%2B2ZMPQhN7E9fe%2BbWsdAQPAAZZPt1STIuVeR%2FQHsjxQFfgmCdPQUoecH2EbGtXyRB85PXjI83JgZXv2wgw4WLarJ6x4sTfo989%2BCHiItWkhIqA44qeoCeX03SF%2Bsd%2BmUrbVuB8sa6L4zEHENbN55LWdn3c3NOIHi3QnGDPI6hx4rkaPN2DQOb2Do%2FeuSmoLmOpdxIFU%2Ff0xGecTOztJjXovQXHxGmmG1vI5T%2BCQQ8negdcfI84s0RcafSbE6HdEtUKZcSriWqDzAXDQYggy4C5m8sovgvAo2lngtniEZpoGGl3Pb0oXXoredTz7qxhrN1KB6RExE9Frzv9QGcmvYh02ywxdNwFMggzg8lAz3UV6mpv6dAZLX2V579%2B32xjLDs5ptqw4eRdejUKEAmH8EaOzmcEFVrSp%2FulcHtDLxpbLk7M4mwCdeaTOyUKeNy4n1cO2ok2SOk9naS2OZ%2Ba0tbbdRKpftRsZrTJTvl2eX3J6gpuqf%2FRF3r526J9U9bWj4DkLzcYa67Z91Mr7ZhWOBMRphZpp0gBSFVmGNjrM8A87%2FU701s6tFf%2Fnw7Q9%2B8hapRia3q8yRzvuFYPhMYXha0widWJvgY6pgFF4qXB8PputgGJWhDa2PE42Mo7FpijOiU2is2OYAW5zR%2BLNgjkO96ai1DJWBXvaSi1SmAmvViU0UdOvhXJZojybYonZfpILKSYtOPGlc2G4AFaftzpdNtMkIEjdjPLxUOg%2Fa%2BZO4g6LMrQeOZ%2BYaXN2gOFksjdhpNx6zfDkP882BRDcV%2BoeGwEVApC9BllqEYSw7d3kBBkDsEoQvnHMubZsWXa0qCT&X-Amz-Signature=a06c01e38f7109f350ff2687d289869455b2ce9500abff72262a112f776b206a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622QWQLRE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIHSAfRUhizve3suPRqYpRSueT0ql1s%2FXO4hDgArPKdRNAiBvSoVjmZq0cczOTLGxLmoEJcB2XujSE6yQDhIwcdtYXCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUAr2RpjABNQOUWSGKtwDn2%2BXR9V5kPL%2F4aomrBOyFAiwpD7xld65FamSMKr%2B2ZMPQhN7E9fe%2BbWsdAQPAAZZPt1STIuVeR%2FQHsjxQFfgmCdPQUoecH2EbGtXyRB85PXjI83JgZXv2wgw4WLarJ6x4sTfo989%2BCHiItWkhIqA44qeoCeX03SF%2Bsd%2BmUrbVuB8sa6L4zEHENbN55LWdn3c3NOIHi3QnGDPI6hx4rkaPN2DQOb2Do%2FeuSmoLmOpdxIFU%2Ff0xGecTOztJjXovQXHxGmmG1vI5T%2BCQQ8negdcfI84s0RcafSbE6HdEtUKZcSriWqDzAXDQYggy4C5m8sovgvAo2lngtniEZpoGGl3Pb0oXXoredTz7qxhrN1KB6RExE9Frzv9QGcmvYh02ywxdNwFMggzg8lAz3UV6mpv6dAZLX2V579%2B32xjLDs5ptqw4eRdejUKEAmH8EaOzmcEFVrSp%2FulcHtDLxpbLk7M4mwCdeaTOyUKeNy4n1cO2ok2SOk9naS2OZ%2Ba0tbbdRKpftRsZrTJTvl2eX3J6gpuqf%2FRF3r526J9U9bWj4DkLzcYa67Z91Mr7ZhWOBMRphZpp0gBSFVmGNjrM8A87%2FU701s6tFf%2Fnw7Q9%2B8hapRia3q8yRzvuFYPhMYXha0widWJvgY6pgFF4qXB8PputgGJWhDa2PE42Mo7FpijOiU2is2OYAW5zR%2BLNgjkO96ai1DJWBXvaSi1SmAmvViU0UdOvhXJZojybYonZfpILKSYtOPGlc2G4AFaftzpdNtMkIEjdjPLxUOg%2Fa%2BZO4g6LMrQeOZ%2BYaXN2gOFksjdhpNx6zfDkP882BRDcV%2BoeGwEVApC9BllqEYSw7d3kBBkDsEoQvnHMubZsWXa0qCT&X-Amz-Signature=e48471e7cab57c0bc5f2dfc567e859e1a15828c5f3dbb1007a1d9304bcf235dd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622QWQLRE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIHSAfRUhizve3suPRqYpRSueT0ql1s%2FXO4hDgArPKdRNAiBvSoVjmZq0cczOTLGxLmoEJcB2XujSE6yQDhIwcdtYXCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUAr2RpjABNQOUWSGKtwDn2%2BXR9V5kPL%2F4aomrBOyFAiwpD7xld65FamSMKr%2B2ZMPQhN7E9fe%2BbWsdAQPAAZZPt1STIuVeR%2FQHsjxQFfgmCdPQUoecH2EbGtXyRB85PXjI83JgZXv2wgw4WLarJ6x4sTfo989%2BCHiItWkhIqA44qeoCeX03SF%2Bsd%2BmUrbVuB8sa6L4zEHENbN55LWdn3c3NOIHi3QnGDPI6hx4rkaPN2DQOb2Do%2FeuSmoLmOpdxIFU%2Ff0xGecTOztJjXovQXHxGmmG1vI5T%2BCQQ8negdcfI84s0RcafSbE6HdEtUKZcSriWqDzAXDQYggy4C5m8sovgvAo2lngtniEZpoGGl3Pb0oXXoredTz7qxhrN1KB6RExE9Frzv9QGcmvYh02ywxdNwFMggzg8lAz3UV6mpv6dAZLX2V579%2B32xjLDs5ptqw4eRdejUKEAmH8EaOzmcEFVrSp%2FulcHtDLxpbLk7M4mwCdeaTOyUKeNy4n1cO2ok2SOk9naS2OZ%2Ba0tbbdRKpftRsZrTJTvl2eX3J6gpuqf%2FRF3r526J9U9bWj4DkLzcYa67Z91Mr7ZhWOBMRphZpp0gBSFVmGNjrM8A87%2FU701s6tFf%2Fnw7Q9%2B8hapRia3q8yRzvuFYPhMYXha0widWJvgY6pgFF4qXB8PputgGJWhDa2PE42Mo7FpijOiU2is2OYAW5zR%2BLNgjkO96ai1DJWBXvaSi1SmAmvViU0UdOvhXJZojybYonZfpILKSYtOPGlc2G4AFaftzpdNtMkIEjdjPLxUOg%2Fa%2BZO4g6LMrQeOZ%2BYaXN2gOFksjdhpNx6zfDkP882BRDcV%2BoeGwEVApC9BllqEYSw7d3kBBkDsEoQvnHMubZsWXa0qCT&X-Amz-Signature=3679541e12de1fb2c10d541978eb31899747252386669964b5df451a774f4dac&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622QWQLRE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIHSAfRUhizve3suPRqYpRSueT0ql1s%2FXO4hDgArPKdRNAiBvSoVjmZq0cczOTLGxLmoEJcB2XujSE6yQDhIwcdtYXCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUAr2RpjABNQOUWSGKtwDn2%2BXR9V5kPL%2F4aomrBOyFAiwpD7xld65FamSMKr%2B2ZMPQhN7E9fe%2BbWsdAQPAAZZPt1STIuVeR%2FQHsjxQFfgmCdPQUoecH2EbGtXyRB85PXjI83JgZXv2wgw4WLarJ6x4sTfo989%2BCHiItWkhIqA44qeoCeX03SF%2Bsd%2BmUrbVuB8sa6L4zEHENbN55LWdn3c3NOIHi3QnGDPI6hx4rkaPN2DQOb2Do%2FeuSmoLmOpdxIFU%2Ff0xGecTOztJjXovQXHxGmmG1vI5T%2BCQQ8negdcfI84s0RcafSbE6HdEtUKZcSriWqDzAXDQYggy4C5m8sovgvAo2lngtniEZpoGGl3Pb0oXXoredTz7qxhrN1KB6RExE9Frzv9QGcmvYh02ywxdNwFMggzg8lAz3UV6mpv6dAZLX2V579%2B32xjLDs5ptqw4eRdejUKEAmH8EaOzmcEFVrSp%2FulcHtDLxpbLk7M4mwCdeaTOyUKeNy4n1cO2ok2SOk9naS2OZ%2Ba0tbbdRKpftRsZrTJTvl2eX3J6gpuqf%2FRF3r526J9U9bWj4DkLzcYa67Z91Mr7ZhWOBMRphZpp0gBSFVmGNjrM8A87%2FU701s6tFf%2Fnw7Q9%2B8hapRia3q8yRzvuFYPhMYXha0widWJvgY6pgFF4qXB8PputgGJWhDa2PE42Mo7FpijOiU2is2OYAW5zR%2BLNgjkO96ai1DJWBXvaSi1SmAmvViU0UdOvhXJZojybYonZfpILKSYtOPGlc2G4AFaftzpdNtMkIEjdjPLxUOg%2Fa%2BZO4g6LMrQeOZ%2BYaXN2gOFksjdhpNx6zfDkP882BRDcV%2BoeGwEVApC9BllqEYSw7d3kBBkDsEoQvnHMubZsWXa0qCT&X-Amz-Signature=88c0ff8e5c1adf59aaf5116cb611d934740110a79ed2e2a2df2e7f1b1464656b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622QWQLRE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIHSAfRUhizve3suPRqYpRSueT0ql1s%2FXO4hDgArPKdRNAiBvSoVjmZq0cczOTLGxLmoEJcB2XujSE6yQDhIwcdtYXCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUAr2RpjABNQOUWSGKtwDn2%2BXR9V5kPL%2F4aomrBOyFAiwpD7xld65FamSMKr%2B2ZMPQhN7E9fe%2BbWsdAQPAAZZPt1STIuVeR%2FQHsjxQFfgmCdPQUoecH2EbGtXyRB85PXjI83JgZXv2wgw4WLarJ6x4sTfo989%2BCHiItWkhIqA44qeoCeX03SF%2Bsd%2BmUrbVuB8sa6L4zEHENbN55LWdn3c3NOIHi3QnGDPI6hx4rkaPN2DQOb2Do%2FeuSmoLmOpdxIFU%2Ff0xGecTOztJjXovQXHxGmmG1vI5T%2BCQQ8negdcfI84s0RcafSbE6HdEtUKZcSriWqDzAXDQYggy4C5m8sovgvAo2lngtniEZpoGGl3Pb0oXXoredTz7qxhrN1KB6RExE9Frzv9QGcmvYh02ywxdNwFMggzg8lAz3UV6mpv6dAZLX2V579%2B32xjLDs5ptqw4eRdejUKEAmH8EaOzmcEFVrSp%2FulcHtDLxpbLk7M4mwCdeaTOyUKeNy4n1cO2ok2SOk9naS2OZ%2Ba0tbbdRKpftRsZrTJTvl2eX3J6gpuqf%2FRF3r526J9U9bWj4DkLzcYa67Z91Mr7ZhWOBMRphZpp0gBSFVmGNjrM8A87%2FU701s6tFf%2Fnw7Q9%2B8hapRia3q8yRzvuFYPhMYXha0widWJvgY6pgFF4qXB8PputgGJWhDa2PE42Mo7FpijOiU2is2OYAW5zR%2BLNgjkO96ai1DJWBXvaSi1SmAmvViU0UdOvhXJZojybYonZfpILKSYtOPGlc2G4AFaftzpdNtMkIEjdjPLxUOg%2Fa%2BZO4g6LMrQeOZ%2BYaXN2gOFksjdhpNx6zfDkP882BRDcV%2BoeGwEVApC9BllqEYSw7d3kBBkDsEoQvnHMubZsWXa0qCT&X-Amz-Signature=9c8bfc34550d3bcc9b896a94026dd91217a0b6bbb27598f9022ba7adc19f5086&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTLG5WU%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICb432tXtmm%2Fo6l%2Bg%2BMDlijqZWdQGQ%2FSUDMMImUxRi1RAiAPei6dxQTzRHvp%2BE6RecDH75UpoKrAdlGHA2HgvfB0qir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMTdF0%2FfEVqwGOvTlVKtwDZ73CWitGwLTdAfL2sY4bi8cuBwPf0h%2BKhXvaIlY86P7o5uupgf%2Bqn96aOLsYtlZrZEASfYMi5INOnlxT4fZvsXcNjtdVzSIH8BArkenfCW5VtvbqD2OTk%2Fba9ed8KP4%2F6Z5ciXL%2BNqvKIkx1RGwhjszHG57ngYZLYJzmIk4eWN96BYcDpyi%2FMrOzTzi3vCNQy1HSGOnP9ZxYlr2%2Bfirh%2BBUYvQrNkldoID6GmSeWoHmwT%2Fn5QOEWJG4aUKU9NMf7zEPBG6aOSHSJxnviuAG%2ByyJ0ixHgf388VGBjhYYPLtWekl7VSTKnvgBx9%2Bd0HINR3ibC7tQqKaawjPLfhKkRmMC2EccwNcjZ4exNSnyyrpPeKn4aTQ7ebxoFBGOPdZb9lrEv3ZAVFN40BNyyZUatibl1hyeTfYpMQcMQdQZcmvTshGRVwCnWabA9EG6b7lSxfPnM0ff6nqO824eosgrx%2BUXOS%2BI7blF7v9ytLke%2FE3GXUdCqQaFdVRgpF8lG2NeiRoQoQRcpIdD8O4NkSX7Dwk0AZ8CrHMJXlr8C3J0HIiDR4yUI9XSIC22ciYTrA1gtZUAWv3u%2Fw%2BZLCfhLX23srwRjHklks8nOAJjVxjTTA1m5%2BFnkEECaniZX6EQw24T6vwY6pgGgVz0Cs3iEY3ynt2YQKh46XzYwbhfwrEqzkevDY1t%2F8e97DawyuYAnckjUsRjIS24Q43hFuDd8yC%2BPnUjFX0o2wak7UWLnBEAjq5UUb%2FreiBkjMjZj%2BViunaABU%2BpbEA4ZeDonoXazGu%2BpmCDq7k3iuQJwkoWk0lB7yJzSbXvfSwwSpr8to4VUpxgYSd1JXJV5WbcE4%2FVy9PnoSYoq3PKaFXeTsT%2FY&X-Amz-Signature=eae6f5c171126921c71dbc8ffd3e9c98b553fcbe06923d17043b5678a54d8c6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTLG5WU%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICb432tXtmm%2Fo6l%2Bg%2BMDlijqZWdQGQ%2FSUDMMImUxRi1RAiAPei6dxQTzRHvp%2BE6RecDH75UpoKrAdlGHA2HgvfB0qir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMTdF0%2FfEVqwGOvTlVKtwDZ73CWitGwLTdAfL2sY4bi8cuBwPf0h%2BKhXvaIlY86P7o5uupgf%2Bqn96aOLsYtlZrZEASfYMi5INOnlxT4fZvsXcNjtdVzSIH8BArkenfCW5VtvbqD2OTk%2Fba9ed8KP4%2F6Z5ciXL%2BNqvKIkx1RGwhjszHG57ngYZLYJzmIk4eWN96BYcDpyi%2FMrOzTzi3vCNQy1HSGOnP9ZxYlr2%2Bfirh%2BBUYvQrNkldoID6GmSeWoHmwT%2Fn5QOEWJG4aUKU9NMf7zEPBG6aOSHSJxnviuAG%2ByyJ0ixHgf388VGBjhYYPLtWekl7VSTKnvgBx9%2Bd0HINR3ibC7tQqKaawjPLfhKkRmMC2EccwNcjZ4exNSnyyrpPeKn4aTQ7ebxoFBGOPdZb9lrEv3ZAVFN40BNyyZUatibl1hyeTfYpMQcMQdQZcmvTshGRVwCnWabA9EG6b7lSxfPnM0ff6nqO824eosgrx%2BUXOS%2BI7blF7v9ytLke%2FE3GXUdCqQaFdVRgpF8lG2NeiRoQoQRcpIdD8O4NkSX7Dwk0AZ8CrHMJXlr8C3J0HIiDR4yUI9XSIC22ciYTrA1gtZUAWv3u%2Fw%2BZLCfhLX23srwRjHklks8nOAJjVxjTTA1m5%2BFnkEECaniZX6EQw24T6vwY6pgGgVz0Cs3iEY3ynt2YQKh46XzYwbhfwrEqzkevDY1t%2F8e97DawyuYAnckjUsRjIS24Q43hFuDd8yC%2BPnUjFX0o2wak7UWLnBEAjq5UUb%2FreiBkjMjZj%2BViunaABU%2BpbEA4ZeDonoXazGu%2BpmCDq7k3iuQJwkoWk0lB7yJzSbXvfSwwSpr8to4VUpxgYSd1JXJV5WbcE4%2FVy9PnoSYoq3PKaFXeTsT%2FY&X-Amz-Signature=943f76abc878c84a146498bdb57cd7ab9b273ab8a5c5a52fd218cceb0fbc3879&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTLG5WU%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICb432tXtmm%2Fo6l%2Bg%2BMDlijqZWdQGQ%2FSUDMMImUxRi1RAiAPei6dxQTzRHvp%2BE6RecDH75UpoKrAdlGHA2HgvfB0qir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMTdF0%2FfEVqwGOvTlVKtwDZ73CWitGwLTdAfL2sY4bi8cuBwPf0h%2BKhXvaIlY86P7o5uupgf%2Bqn96aOLsYtlZrZEASfYMi5INOnlxT4fZvsXcNjtdVzSIH8BArkenfCW5VtvbqD2OTk%2Fba9ed8KP4%2F6Z5ciXL%2BNqvKIkx1RGwhjszHG57ngYZLYJzmIk4eWN96BYcDpyi%2FMrOzTzi3vCNQy1HSGOnP9ZxYlr2%2Bfirh%2BBUYvQrNkldoID6GmSeWoHmwT%2Fn5QOEWJG4aUKU9NMf7zEPBG6aOSHSJxnviuAG%2ByyJ0ixHgf388VGBjhYYPLtWekl7VSTKnvgBx9%2Bd0HINR3ibC7tQqKaawjPLfhKkRmMC2EccwNcjZ4exNSnyyrpPeKn4aTQ7ebxoFBGOPdZb9lrEv3ZAVFN40BNyyZUatibl1hyeTfYpMQcMQdQZcmvTshGRVwCnWabA9EG6b7lSxfPnM0ff6nqO824eosgrx%2BUXOS%2BI7blF7v9ytLke%2FE3GXUdCqQaFdVRgpF8lG2NeiRoQoQRcpIdD8O4NkSX7Dwk0AZ8CrHMJXlr8C3J0HIiDR4yUI9XSIC22ciYTrA1gtZUAWv3u%2Fw%2BZLCfhLX23srwRjHklks8nOAJjVxjTTA1m5%2BFnkEECaniZX6EQw24T6vwY6pgGgVz0Cs3iEY3ynt2YQKh46XzYwbhfwrEqzkevDY1t%2F8e97DawyuYAnckjUsRjIS24Q43hFuDd8yC%2BPnUjFX0o2wak7UWLnBEAjq5UUb%2FreiBkjMjZj%2BViunaABU%2BpbEA4ZeDonoXazGu%2BpmCDq7k3iuQJwkoWk0lB7yJzSbXvfSwwSpr8to4VUpxgYSd1JXJV5WbcE4%2FVy9PnoSYoq3PKaFXeTsT%2FY&X-Amz-Signature=ba080a43bf0e50abf8c5a92c58856110cc3935e2ad5a04d72c04bd9125495b58&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTLG5WU%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICb432tXtmm%2Fo6l%2Bg%2BMDlijqZWdQGQ%2FSUDMMImUxRi1RAiAPei6dxQTzRHvp%2BE6RecDH75UpoKrAdlGHA2HgvfB0qir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMTdF0%2FfEVqwGOvTlVKtwDZ73CWitGwLTdAfL2sY4bi8cuBwPf0h%2BKhXvaIlY86P7o5uupgf%2Bqn96aOLsYtlZrZEASfYMi5INOnlxT4fZvsXcNjtdVzSIH8BArkenfCW5VtvbqD2OTk%2Fba9ed8KP4%2F6Z5ciXL%2BNqvKIkx1RGwhjszHG57ngYZLYJzmIk4eWN96BYcDpyi%2FMrOzTzi3vCNQy1HSGOnP9ZxYlr2%2Bfirh%2BBUYvQrNkldoID6GmSeWoHmwT%2Fn5QOEWJG4aUKU9NMf7zEPBG6aOSHSJxnviuAG%2ByyJ0ixHgf388VGBjhYYPLtWekl7VSTKnvgBx9%2Bd0HINR3ibC7tQqKaawjPLfhKkRmMC2EccwNcjZ4exNSnyyrpPeKn4aTQ7ebxoFBGOPdZb9lrEv3ZAVFN40BNyyZUatibl1hyeTfYpMQcMQdQZcmvTshGRVwCnWabA9EG6b7lSxfPnM0ff6nqO824eosgrx%2BUXOS%2BI7blF7v9ytLke%2FE3GXUdCqQaFdVRgpF8lG2NeiRoQoQRcpIdD8O4NkSX7Dwk0AZ8CrHMJXlr8C3J0HIiDR4yUI9XSIC22ciYTrA1gtZUAWv3u%2Fw%2BZLCfhLX23srwRjHklks8nOAJjVxjTTA1m5%2BFnkEECaniZX6EQw24T6vwY6pgGgVz0Cs3iEY3ynt2YQKh46XzYwbhfwrEqzkevDY1t%2F8e97DawyuYAnckjUsRjIS24Q43hFuDd8yC%2BPnUjFX0o2wak7UWLnBEAjq5UUb%2FreiBkjMjZj%2BViunaABU%2BpbEA4ZeDonoXazGu%2BpmCDq7k3iuQJwkoWk0lB7yJzSbXvfSwwSpr8to4VUpxgYSd1JXJV5WbcE4%2FVy9PnoSYoq3PKaFXeTsT%2FY&X-Amz-Signature=3e43f2c5c1ba5465224704bcdee55e36926d98e23b0cd7a8106ec7fd04aafb11&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTLG5WU%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICb432tXtmm%2Fo6l%2Bg%2BMDlijqZWdQGQ%2FSUDMMImUxRi1RAiAPei6dxQTzRHvp%2BE6RecDH75UpoKrAdlGHA2HgvfB0qir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMTdF0%2FfEVqwGOvTlVKtwDZ73CWitGwLTdAfL2sY4bi8cuBwPf0h%2BKhXvaIlY86P7o5uupgf%2Bqn96aOLsYtlZrZEASfYMi5INOnlxT4fZvsXcNjtdVzSIH8BArkenfCW5VtvbqD2OTk%2Fba9ed8KP4%2F6Z5ciXL%2BNqvKIkx1RGwhjszHG57ngYZLYJzmIk4eWN96BYcDpyi%2FMrOzTzi3vCNQy1HSGOnP9ZxYlr2%2Bfirh%2BBUYvQrNkldoID6GmSeWoHmwT%2Fn5QOEWJG4aUKU9NMf7zEPBG6aOSHSJxnviuAG%2ByyJ0ixHgf388VGBjhYYPLtWekl7VSTKnvgBx9%2Bd0HINR3ibC7tQqKaawjPLfhKkRmMC2EccwNcjZ4exNSnyyrpPeKn4aTQ7ebxoFBGOPdZb9lrEv3ZAVFN40BNyyZUatibl1hyeTfYpMQcMQdQZcmvTshGRVwCnWabA9EG6b7lSxfPnM0ff6nqO824eosgrx%2BUXOS%2BI7blF7v9ytLke%2FE3GXUdCqQaFdVRgpF8lG2NeiRoQoQRcpIdD8O4NkSX7Dwk0AZ8CrHMJXlr8C3J0HIiDR4yUI9XSIC22ciYTrA1gtZUAWv3u%2Fw%2BZLCfhLX23srwRjHklks8nOAJjVxjTTA1m5%2BFnkEECaniZX6EQw24T6vwY6pgGgVz0Cs3iEY3ynt2YQKh46XzYwbhfwrEqzkevDY1t%2F8e97DawyuYAnckjUsRjIS24Q43hFuDd8yC%2BPnUjFX0o2wak7UWLnBEAjq5UUb%2FreiBkjMjZj%2BViunaABU%2BpbEA4ZeDonoXazGu%2BpmCDq7k3iuQJwkoWk0lB7yJzSbXvfSwwSpr8to4VUpxgYSd1JXJV5WbcE4%2FVy9PnoSYoq3PKaFXeTsT%2FY&X-Amz-Signature=584f57c66d4462df1f5ea65c96f32f56b56b747ca11ad405a68378ad8dc0367c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3QHZ2TY%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEigaazqu8SPwfZJubbPFTIyhNYUa9BTONiWqGdU0j2yAiBUkh%2BrXdyx5BlIeSYO1DqP1lJiLCPRrVLf028R2STAeCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM8xdiGmm4AzJYeWkoKtwDjWWGCW2yOYh5Mk1O1V6IwkywSyB63pomu%2F83QUVYFUZJH1FA2Kd1PMtNtJjpeDsMOk3xQrFVWsYyg3ucjbDvSb1PQFs1Ef8%2FwscYkrlN6iiDQJhMTp4%2B359xBsGem7b0jebsZ4T6pBzwYgOzwQTVfUdJpI149PnFmMhlTJL7Zrszjn%2BUF4t2hL3IF0Qbd1XVY74KLSPj%2Bxz7hw5Hjyp7zAExz7pTjDLCrZySbwc4nkbawZ25xbjbm1AfFeja4aTBYfnK9H9gH8P9WlQHmB9hnFlIQQblJxLAdGMCHRu5PFJnKuHQCBuNrQGyG62vxH5Zp23ZMnYxI3UXY12lwgKKXGQSR%2BfdWYDF%2BxndmY9CVImCdzWOfVor2grLDhI9KbAwzlEW5RjbrbFc%2B%2BoKNLQA5yGni4YuNR2zbXxwn6uu38%2BJWaZhMje2c5Y%2FEdIGAxZDgVnfPaeystcjQWAwDq6oUAM0G%2FEmOK%2BOrJqLzxlDt5MBZuvIdzjwwP4OqvMZzcBtcYJruts%2FfByyNoTU0zv9J8DeGKn5qQmbXh%2FSmF6Q%2Bf6bWj8CxwUaPpHbyko1KdL1b2%2B%2F4t5Clmp9u1E9LFuqBrRZoPFCvS4%2FUUb3wEsNVL9q%2FO3lERk6teNa8Z4wqMbCxgY6pgGoX%2F95DkrsMx%2F76ATsll83hNVozJ%2Fr4CX9r5U425v3AzVQUyMn4iaV3FSy7krRpu4teGMeJZ62aOa5SMjW4MIMy31BT%2BoqURpeXnVPMHT0XVRY94uLn%2B6cDW4kk0kxa81wt5buH1RXBzRH6Pb1xyBunKe7Fits3%2FbjCAzNV7WnaiWXnbLYi4dmOhkKdRZtWy%2B0bHUGyx5GF9ZXcdfKyBjtfB1gkavJ&X-Amz-Signature=0800695d3bcb86898da807283d9fce3cda93825720849aa88debd2cae6a927ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3QHZ2TY%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEigaazqu8SPwfZJubbPFTIyhNYUa9BTONiWqGdU0j2yAiBUkh%2BrXdyx5BlIeSYO1DqP1lJiLCPRrVLf028R2STAeCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM8xdiGmm4AzJYeWkoKtwDjWWGCW2yOYh5Mk1O1V6IwkywSyB63pomu%2F83QUVYFUZJH1FA2Kd1PMtNtJjpeDsMOk3xQrFVWsYyg3ucjbDvSb1PQFs1Ef8%2FwscYkrlN6iiDQJhMTp4%2B359xBsGem7b0jebsZ4T6pBzwYgOzwQTVfUdJpI149PnFmMhlTJL7Zrszjn%2BUF4t2hL3IF0Qbd1XVY74KLSPj%2Bxz7hw5Hjyp7zAExz7pTjDLCrZySbwc4nkbawZ25xbjbm1AfFeja4aTBYfnK9H9gH8P9WlQHmB9hnFlIQQblJxLAdGMCHRu5PFJnKuHQCBuNrQGyG62vxH5Zp23ZMnYxI3UXY12lwgKKXGQSR%2BfdWYDF%2BxndmY9CVImCdzWOfVor2grLDhI9KbAwzlEW5RjbrbFc%2B%2BoKNLQA5yGni4YuNR2zbXxwn6uu38%2BJWaZhMje2c5Y%2FEdIGAxZDgVnfPaeystcjQWAwDq6oUAM0G%2FEmOK%2BOrJqLzxlDt5MBZuvIdzjwwP4OqvMZzcBtcYJruts%2FfByyNoTU0zv9J8DeGKn5qQmbXh%2FSmF6Q%2Bf6bWj8CxwUaPpHbyko1KdL1b2%2B%2F4t5Clmp9u1E9LFuqBrRZoPFCvS4%2FUUb3wEsNVL9q%2FO3lERk6teNa8Z4wqMbCxgY6pgGoX%2F95DkrsMx%2F76ATsll83hNVozJ%2Fr4CX9r5U425v3AzVQUyMn4iaV3FSy7krRpu4teGMeJZ62aOa5SMjW4MIMy31BT%2BoqURpeXnVPMHT0XVRY94uLn%2B6cDW4kk0kxa81wt5buH1RXBzRH6Pb1xyBunKe7Fits3%2FbjCAzNV7WnaiWXnbLYi4dmOhkKdRZtWy%2B0bHUGyx5GF9ZXcdfKyBjtfB1gkavJ&X-Amz-Signature=980f86cdcbb089fb11f4a366da6af35011a96beb538037cc894866155b41649b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3QHZ2TY%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEigaazqu8SPwfZJubbPFTIyhNYUa9BTONiWqGdU0j2yAiBUkh%2BrXdyx5BlIeSYO1DqP1lJiLCPRrVLf028R2STAeCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM8xdiGmm4AzJYeWkoKtwDjWWGCW2yOYh5Mk1O1V6IwkywSyB63pomu%2F83QUVYFUZJH1FA2Kd1PMtNtJjpeDsMOk3xQrFVWsYyg3ucjbDvSb1PQFs1Ef8%2FwscYkrlN6iiDQJhMTp4%2B359xBsGem7b0jebsZ4T6pBzwYgOzwQTVfUdJpI149PnFmMhlTJL7Zrszjn%2BUF4t2hL3IF0Qbd1XVY74KLSPj%2Bxz7hw5Hjyp7zAExz7pTjDLCrZySbwc4nkbawZ25xbjbm1AfFeja4aTBYfnK9H9gH8P9WlQHmB9hnFlIQQblJxLAdGMCHRu5PFJnKuHQCBuNrQGyG62vxH5Zp23ZMnYxI3UXY12lwgKKXGQSR%2BfdWYDF%2BxndmY9CVImCdzWOfVor2grLDhI9KbAwzlEW5RjbrbFc%2B%2BoKNLQA5yGni4YuNR2zbXxwn6uu38%2BJWaZhMje2c5Y%2FEdIGAxZDgVnfPaeystcjQWAwDq6oUAM0G%2FEmOK%2BOrJqLzxlDt5MBZuvIdzjwwP4OqvMZzcBtcYJruts%2FfByyNoTU0zv9J8DeGKn5qQmbXh%2FSmF6Q%2Bf6bWj8CxwUaPpHbyko1KdL1b2%2B%2F4t5Clmp9u1E9LFuqBrRZoPFCvS4%2FUUb3wEsNVL9q%2FO3lERk6teNa8Z4wqMbCxgY6pgGoX%2F95DkrsMx%2F76ATsll83hNVozJ%2Fr4CX9r5U425v3AzVQUyMn4iaV3FSy7krRpu4teGMeJZ62aOa5SMjW4MIMy31BT%2BoqURpeXnVPMHT0XVRY94uLn%2B6cDW4kk0kxa81wt5buH1RXBzRH6Pb1xyBunKe7Fits3%2FbjCAzNV7WnaiWXnbLYi4dmOhkKdRZtWy%2B0bHUGyx5GF9ZXcdfKyBjtfB1gkavJ&X-Amz-Signature=3e7a41ae342d8b7e9ab26e84ed62d22e43bc71b412e8c8d0a506b42304d889de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3QHZ2TY%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEigaazqu8SPwfZJubbPFTIyhNYUa9BTONiWqGdU0j2yAiBUkh%2BrXdyx5BlIeSYO1DqP1lJiLCPRrVLf028R2STAeCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM8xdiGmm4AzJYeWkoKtwDjWWGCW2yOYh5Mk1O1V6IwkywSyB63pomu%2F83QUVYFUZJH1FA2Kd1PMtNtJjpeDsMOk3xQrFVWsYyg3ucjbDvSb1PQFs1Ef8%2FwscYkrlN6iiDQJhMTp4%2B359xBsGem7b0jebsZ4T6pBzwYgOzwQTVfUdJpI149PnFmMhlTJL7Zrszjn%2BUF4t2hL3IF0Qbd1XVY74KLSPj%2Bxz7hw5Hjyp7zAExz7pTjDLCrZySbwc4nkbawZ25xbjbm1AfFeja4aTBYfnK9H9gH8P9WlQHmB9hnFlIQQblJxLAdGMCHRu5PFJnKuHQCBuNrQGyG62vxH5Zp23ZMnYxI3UXY12lwgKKXGQSR%2BfdWYDF%2BxndmY9CVImCdzWOfVor2grLDhI9KbAwzlEW5RjbrbFc%2B%2BoKNLQA5yGni4YuNR2zbXxwn6uu38%2BJWaZhMje2c5Y%2FEdIGAxZDgVnfPaeystcjQWAwDq6oUAM0G%2FEmOK%2BOrJqLzxlDt5MBZuvIdzjwwP4OqvMZzcBtcYJruts%2FfByyNoTU0zv9J8DeGKn5qQmbXh%2FSmF6Q%2Bf6bWj8CxwUaPpHbyko1KdL1b2%2B%2F4t5Clmp9u1E9LFuqBrRZoPFCvS4%2FUUb3wEsNVL9q%2FO3lERk6teNa8Z4wqMbCxgY6pgGoX%2F95DkrsMx%2F76ATsll83hNVozJ%2Fr4CX9r5U425v3AzVQUyMn4iaV3FSy7krRpu4teGMeJZ62aOa5SMjW4MIMy31BT%2BoqURpeXnVPMHT0XVRY94uLn%2B6cDW4kk0kxa81wt5buH1RXBzRH6Pb1xyBunKe7Fits3%2FbjCAzNV7WnaiWXnbLYi4dmOhkKdRZtWy%2B0bHUGyx5GF9ZXcdfKyBjtfB1gkavJ&X-Amz-Signature=0ea559aa0c68ad2e48b71a5990087851221f501fc03ae2917574a106d4c85a4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3QHZ2TY%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEigaazqu8SPwfZJubbPFTIyhNYUa9BTONiWqGdU0j2yAiBUkh%2BrXdyx5BlIeSYO1DqP1lJiLCPRrVLf028R2STAeCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM8xdiGmm4AzJYeWkoKtwDjWWGCW2yOYh5Mk1O1V6IwkywSyB63pomu%2F83QUVYFUZJH1FA2Kd1PMtNtJjpeDsMOk3xQrFVWsYyg3ucjbDvSb1PQFs1Ef8%2FwscYkrlN6iiDQJhMTp4%2B359xBsGem7b0jebsZ4T6pBzwYgOzwQTVfUdJpI149PnFmMhlTJL7Zrszjn%2BUF4t2hL3IF0Qbd1XVY74KLSPj%2Bxz7hw5Hjyp7zAExz7pTjDLCrZySbwc4nkbawZ25xbjbm1AfFeja4aTBYfnK9H9gH8P9WlQHmB9hnFlIQQblJxLAdGMCHRu5PFJnKuHQCBuNrQGyG62vxH5Zp23ZMnYxI3UXY12lwgKKXGQSR%2BfdWYDF%2BxndmY9CVImCdzWOfVor2grLDhI9KbAwzlEW5RjbrbFc%2B%2BoKNLQA5yGni4YuNR2zbXxwn6uu38%2BJWaZhMje2c5Y%2FEdIGAxZDgVnfPaeystcjQWAwDq6oUAM0G%2FEmOK%2BOrJqLzxlDt5MBZuvIdzjwwP4OqvMZzcBtcYJruts%2FfByyNoTU0zv9J8DeGKn5qQmbXh%2FSmF6Q%2Bf6bWj8CxwUaPpHbyko1KdL1b2%2B%2F4t5Clmp9u1E9LFuqBrRZoPFCvS4%2FUUb3wEsNVL9q%2FO3lERk6teNa8Z4wqMbCxgY6pgGoX%2F95DkrsMx%2F76ATsll83hNVozJ%2Fr4CX9r5U425v3AzVQUyMn4iaV3FSy7krRpu4teGMeJZ62aOa5SMjW4MIMy31BT%2BoqURpeXnVPMHT0XVRY94uLn%2B6cDW4kk0kxa81wt5buH1RXBzRH6Pb1xyBunKe7Fits3%2FbjCAzNV7WnaiWXnbLYi4dmOhkKdRZtWy%2B0bHUGyx5GF9ZXcdfKyBjtfB1gkavJ&X-Amz-Signature=5c5647edd39c4f2069f790c1a85f0656ec0a9ef269eb3c648cb607ac139c3156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

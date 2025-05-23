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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AIQAUBB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCvSs1Yp2EcrV0mbzwd2RxA%2BTOONh16Im5eakrhlxsuNwIgVbbY6JHj2HBVbT3Ujc5B1Y2KS%2Btl2sM9Rl0HmxLd3BgqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1WBe9Ip4whLXeSfircA04h3XWaaTlB3G0Htmo%2BpDZ8oX2e1MbtSROkCyvv0heIHd9%2B9mD3wk4Q68dk35EBgK8nr2R4NTTEdeyz6lv4LhYWx28%2FcZw4TGniY8CvkCp5K2qelQjD0%2FayAY%2BJ8f9OP0yPcecMBtJlLX9T3ErBxCz%2BE6tu5EoW8YqnBqzazIFFnSyOppJiWjYKzcCynJjOFhxpMUJNYG3xCoPbN2dmAWuzjc708OsXqOpiP4xzXxtj1ghapB3lXG4QvLIYW%2BsbYngOzQKL1n8R9DKue4eIrzoAI9VDyJVfBpw3p1ezp3992aUDY3lSfqfteyG%2Bpl%2BnGaxdEdZEy%2BaDTE7VAnf7MBLAZ2Lw%2FR1l8yrr49ZvAFKvyk2%2BAFbW09DE9IUn8ZDPg1PfrM37G9mqNCxZ1swWHo0y30Q3CYpi2tFUVCPAyVEJcoAuBNv%2B%2FC8jr9g6VZR1F6jMuXxB3gUwWhocWKbHVnX7FAS59yv4DXyFmbz3pWhuSq%2F6ebE32jysjz1NlvgGiVAPJfFdXGbitX5xLm7sjwIxUhx8y0FCvkPH5l7zaFyBBn872ZOIwS3TZffd60XIBEOrPR1IHiITNQ1zyWLTPUTWUZWmz%2FH5VFu%2F9PrQ8t2derlGgXYZOLJpvlG3MKfLwcEGOqUB1HmR9X1xtO%2BqG1KJ51At62gWDndcVmKsJAB3dDIH4vge4bwOak1Ax7O%2FD7K4PPN1O9DtfdAnYOrFWEZEfBymzV30SgNofY8vyf4Hg6gwC9%2BUvo%2FrenG8C1l6o%2BrS9ngTolZ7XlHPJN0vnf%2Fk7aH1s8TcUUnqJb28khh2KhhaGsqguQzld163dln8L1ghx2Cb9K7R85xH8kfn8cJCQvPSIUbRnwKW&X-Amz-Signature=8ef84235e807a484bf530463b7f0b0bc3a7669cefa0aa345ce1552f25b04382d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AIQAUBB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCvSs1Yp2EcrV0mbzwd2RxA%2BTOONh16Im5eakrhlxsuNwIgVbbY6JHj2HBVbT3Ujc5B1Y2KS%2Btl2sM9Rl0HmxLd3BgqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1WBe9Ip4whLXeSfircA04h3XWaaTlB3G0Htmo%2BpDZ8oX2e1MbtSROkCyvv0heIHd9%2B9mD3wk4Q68dk35EBgK8nr2R4NTTEdeyz6lv4LhYWx28%2FcZw4TGniY8CvkCp5K2qelQjD0%2FayAY%2BJ8f9OP0yPcecMBtJlLX9T3ErBxCz%2BE6tu5EoW8YqnBqzazIFFnSyOppJiWjYKzcCynJjOFhxpMUJNYG3xCoPbN2dmAWuzjc708OsXqOpiP4xzXxtj1ghapB3lXG4QvLIYW%2BsbYngOzQKL1n8R9DKue4eIrzoAI9VDyJVfBpw3p1ezp3992aUDY3lSfqfteyG%2Bpl%2BnGaxdEdZEy%2BaDTE7VAnf7MBLAZ2Lw%2FR1l8yrr49ZvAFKvyk2%2BAFbW09DE9IUn8ZDPg1PfrM37G9mqNCxZ1swWHo0y30Q3CYpi2tFUVCPAyVEJcoAuBNv%2B%2FC8jr9g6VZR1F6jMuXxB3gUwWhocWKbHVnX7FAS59yv4DXyFmbz3pWhuSq%2F6ebE32jysjz1NlvgGiVAPJfFdXGbitX5xLm7sjwIxUhx8y0FCvkPH5l7zaFyBBn872ZOIwS3TZffd60XIBEOrPR1IHiITNQ1zyWLTPUTWUZWmz%2FH5VFu%2F9PrQ8t2derlGgXYZOLJpvlG3MKfLwcEGOqUB1HmR9X1xtO%2BqG1KJ51At62gWDndcVmKsJAB3dDIH4vge4bwOak1Ax7O%2FD7K4PPN1O9DtfdAnYOrFWEZEfBymzV30SgNofY8vyf4Hg6gwC9%2BUvo%2FrenG8C1l6o%2BrS9ngTolZ7XlHPJN0vnf%2Fk7aH1s8TcUUnqJb28khh2KhhaGsqguQzld163dln8L1ghx2Cb9K7R85xH8kfn8cJCQvPSIUbRnwKW&X-Amz-Signature=ef58a4dcb06d2b87e877ffc9ea574c648c47aee1dda3549b4ca41ba155f4778f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AIQAUBB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCvSs1Yp2EcrV0mbzwd2RxA%2BTOONh16Im5eakrhlxsuNwIgVbbY6JHj2HBVbT3Ujc5B1Y2KS%2Btl2sM9Rl0HmxLd3BgqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1WBe9Ip4whLXeSfircA04h3XWaaTlB3G0Htmo%2BpDZ8oX2e1MbtSROkCyvv0heIHd9%2B9mD3wk4Q68dk35EBgK8nr2R4NTTEdeyz6lv4LhYWx28%2FcZw4TGniY8CvkCp5K2qelQjD0%2FayAY%2BJ8f9OP0yPcecMBtJlLX9T3ErBxCz%2BE6tu5EoW8YqnBqzazIFFnSyOppJiWjYKzcCynJjOFhxpMUJNYG3xCoPbN2dmAWuzjc708OsXqOpiP4xzXxtj1ghapB3lXG4QvLIYW%2BsbYngOzQKL1n8R9DKue4eIrzoAI9VDyJVfBpw3p1ezp3992aUDY3lSfqfteyG%2Bpl%2BnGaxdEdZEy%2BaDTE7VAnf7MBLAZ2Lw%2FR1l8yrr49ZvAFKvyk2%2BAFbW09DE9IUn8ZDPg1PfrM37G9mqNCxZ1swWHo0y30Q3CYpi2tFUVCPAyVEJcoAuBNv%2B%2FC8jr9g6VZR1F6jMuXxB3gUwWhocWKbHVnX7FAS59yv4DXyFmbz3pWhuSq%2F6ebE32jysjz1NlvgGiVAPJfFdXGbitX5xLm7sjwIxUhx8y0FCvkPH5l7zaFyBBn872ZOIwS3TZffd60XIBEOrPR1IHiITNQ1zyWLTPUTWUZWmz%2FH5VFu%2F9PrQ8t2derlGgXYZOLJpvlG3MKfLwcEGOqUB1HmR9X1xtO%2BqG1KJ51At62gWDndcVmKsJAB3dDIH4vge4bwOak1Ax7O%2FD7K4PPN1O9DtfdAnYOrFWEZEfBymzV30SgNofY8vyf4Hg6gwC9%2BUvo%2FrenG8C1l6o%2BrS9ngTolZ7XlHPJN0vnf%2Fk7aH1s8TcUUnqJb28khh2KhhaGsqguQzld163dln8L1ghx2Cb9K7R85xH8kfn8cJCQvPSIUbRnwKW&X-Amz-Signature=3495c0a159def1018f1cc8a80264ace78401b55329ca2f03a3b08a095381f069&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AIQAUBB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCvSs1Yp2EcrV0mbzwd2RxA%2BTOONh16Im5eakrhlxsuNwIgVbbY6JHj2HBVbT3Ujc5B1Y2KS%2Btl2sM9Rl0HmxLd3BgqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1WBe9Ip4whLXeSfircA04h3XWaaTlB3G0Htmo%2BpDZ8oX2e1MbtSROkCyvv0heIHd9%2B9mD3wk4Q68dk35EBgK8nr2R4NTTEdeyz6lv4LhYWx28%2FcZw4TGniY8CvkCp5K2qelQjD0%2FayAY%2BJ8f9OP0yPcecMBtJlLX9T3ErBxCz%2BE6tu5EoW8YqnBqzazIFFnSyOppJiWjYKzcCynJjOFhxpMUJNYG3xCoPbN2dmAWuzjc708OsXqOpiP4xzXxtj1ghapB3lXG4QvLIYW%2BsbYngOzQKL1n8R9DKue4eIrzoAI9VDyJVfBpw3p1ezp3992aUDY3lSfqfteyG%2Bpl%2BnGaxdEdZEy%2BaDTE7VAnf7MBLAZ2Lw%2FR1l8yrr49ZvAFKvyk2%2BAFbW09DE9IUn8ZDPg1PfrM37G9mqNCxZ1swWHo0y30Q3CYpi2tFUVCPAyVEJcoAuBNv%2B%2FC8jr9g6VZR1F6jMuXxB3gUwWhocWKbHVnX7FAS59yv4DXyFmbz3pWhuSq%2F6ebE32jysjz1NlvgGiVAPJfFdXGbitX5xLm7sjwIxUhx8y0FCvkPH5l7zaFyBBn872ZOIwS3TZffd60XIBEOrPR1IHiITNQ1zyWLTPUTWUZWmz%2FH5VFu%2F9PrQ8t2derlGgXYZOLJpvlG3MKfLwcEGOqUB1HmR9X1xtO%2BqG1KJ51At62gWDndcVmKsJAB3dDIH4vge4bwOak1Ax7O%2FD7K4PPN1O9DtfdAnYOrFWEZEfBymzV30SgNofY8vyf4Hg6gwC9%2BUvo%2FrenG8C1l6o%2BrS9ngTolZ7XlHPJN0vnf%2Fk7aH1s8TcUUnqJb28khh2KhhaGsqguQzld163dln8L1ghx2Cb9K7R85xH8kfn8cJCQvPSIUbRnwKW&X-Amz-Signature=0a5b0ead2f35d36e81228db0007999424aeb1b86e96ec1801a896af2b968d5cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AIQAUBB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCvSs1Yp2EcrV0mbzwd2RxA%2BTOONh16Im5eakrhlxsuNwIgVbbY6JHj2HBVbT3Ujc5B1Y2KS%2Btl2sM9Rl0HmxLd3BgqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1WBe9Ip4whLXeSfircA04h3XWaaTlB3G0Htmo%2BpDZ8oX2e1MbtSROkCyvv0heIHd9%2B9mD3wk4Q68dk35EBgK8nr2R4NTTEdeyz6lv4LhYWx28%2FcZw4TGniY8CvkCp5K2qelQjD0%2FayAY%2BJ8f9OP0yPcecMBtJlLX9T3ErBxCz%2BE6tu5EoW8YqnBqzazIFFnSyOppJiWjYKzcCynJjOFhxpMUJNYG3xCoPbN2dmAWuzjc708OsXqOpiP4xzXxtj1ghapB3lXG4QvLIYW%2BsbYngOzQKL1n8R9DKue4eIrzoAI9VDyJVfBpw3p1ezp3992aUDY3lSfqfteyG%2Bpl%2BnGaxdEdZEy%2BaDTE7VAnf7MBLAZ2Lw%2FR1l8yrr49ZvAFKvyk2%2BAFbW09DE9IUn8ZDPg1PfrM37G9mqNCxZ1swWHo0y30Q3CYpi2tFUVCPAyVEJcoAuBNv%2B%2FC8jr9g6VZR1F6jMuXxB3gUwWhocWKbHVnX7FAS59yv4DXyFmbz3pWhuSq%2F6ebE32jysjz1NlvgGiVAPJfFdXGbitX5xLm7sjwIxUhx8y0FCvkPH5l7zaFyBBn872ZOIwS3TZffd60XIBEOrPR1IHiITNQ1zyWLTPUTWUZWmz%2FH5VFu%2F9PrQ8t2derlGgXYZOLJpvlG3MKfLwcEGOqUB1HmR9X1xtO%2BqG1KJ51At62gWDndcVmKsJAB3dDIH4vge4bwOak1Ax7O%2FD7K4PPN1O9DtfdAnYOrFWEZEfBymzV30SgNofY8vyf4Hg6gwC9%2BUvo%2FrenG8C1l6o%2BrS9ngTolZ7XlHPJN0vnf%2Fk7aH1s8TcUUnqJb28khh2KhhaGsqguQzld163dln8L1ghx2Cb9K7R85xH8kfn8cJCQvPSIUbRnwKW&X-Amz-Signature=e45bdf78a4bb0c77e2693d2d8b003f402201912462348012f9dc7ea854d7f9cb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6LH46AM%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCgHYjQAdUwbPAkp4FArHzq6g6Yuy%2BvU3QjWthx1lGbKAIhAP2gVmplcVBFDwE5pd9xUoCP01ptHWRBPNz5YUyBCf9YKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAYpejp%2BLBajc53b0q3APo7XsOmqywB8tzE7OAWjakGohGuzmrNqQaJi%2BJ0szlLgAJ1GcIGf9WrntkFRB69a8lxdw7xoKBqn4x1JZzsfieiiheGtC8uHNiParv5mFZqsmDRD43Ks%2BwTvsHfc%2BvfgiZvoqzzeOWOVPG8S8WcG5lBH0vRBLL9A5CrKAYmc%2Fq76q4DYyTyN0TN5ynCt3s60iN6Tv0XhjCrqjhP1CF4mWO4k6vO8irmTeRnk50amBQ%2FJepsoaraSKgE%2B4nWca3gUPr%2BNYlo1tjML1l16I0l4%2B3z%2FiouuzWyyoCvB1BSgDuYWctAxhobnBVmgVGoCIpMMulnNkt5KGa0V6Hy06l9DAU80IJrWwboB1oRd0m1Ju5wNwNj8IKGdIMcqvyCMWYpZSlPMrU2b1PeWkdgEPzq2NQhsIpU9NbpR8Kcez2A1OVP0%2BPyUh6Ch9Yy26GiRWQJpPNB1PONyl1nUdaoVM5QdPzksjkRw1Jp5TjC697rn86edQKqzrlkPlUrL8rCudehV%2FRBJ%2FgFDPupmFjHaK5737vHAhru7IOrESQerhNzfsWZNjrI2c4DREglEzp5G5ye8vUFSJWneh0Krv8rmsn0QxZ%2FC12IpQtpAmxk7EyLBIsZ5YiksB8STnnXq8UdTCs7t%2B%2FBjqkAT0697WQ3Cc6h5omI5GUSyykvPKuBm2VnfotF76kl4U8ry6Jfzh5qtDNZ9kWdeoZElisSnnO%2FbdBbf31xaO8CS2zJMnrwWY1mxv9ky2Xa6uXYi%2F8pQH5giSKTe1PPGGw%2BOClQYEeGYSoKPiHtJu4Ct%2F1%2FNvw%2BbepUuRPEA4CJKzeZ120bRzSoFWEGCFjiOW9h%2Bz79tsGC%2B79kvixLBpaskZNvMU2&X-Amz-Signature=d6f66bdc93f48b08a2fefc90fb3527e1023a2e2587a576c2d9472a4ebaa5f0a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6LH46AM%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCgHYjQAdUwbPAkp4FArHzq6g6Yuy%2BvU3QjWthx1lGbKAIhAP2gVmplcVBFDwE5pd9xUoCP01ptHWRBPNz5YUyBCf9YKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAYpejp%2BLBajc53b0q3APo7XsOmqywB8tzE7OAWjakGohGuzmrNqQaJi%2BJ0szlLgAJ1GcIGf9WrntkFRB69a8lxdw7xoKBqn4x1JZzsfieiiheGtC8uHNiParv5mFZqsmDRD43Ks%2BwTvsHfc%2BvfgiZvoqzzeOWOVPG8S8WcG5lBH0vRBLL9A5CrKAYmc%2Fq76q4DYyTyN0TN5ynCt3s60iN6Tv0XhjCrqjhP1CF4mWO4k6vO8irmTeRnk50amBQ%2FJepsoaraSKgE%2B4nWca3gUPr%2BNYlo1tjML1l16I0l4%2B3z%2FiouuzWyyoCvB1BSgDuYWctAxhobnBVmgVGoCIpMMulnNkt5KGa0V6Hy06l9DAU80IJrWwboB1oRd0m1Ju5wNwNj8IKGdIMcqvyCMWYpZSlPMrU2b1PeWkdgEPzq2NQhsIpU9NbpR8Kcez2A1OVP0%2BPyUh6Ch9Yy26GiRWQJpPNB1PONyl1nUdaoVM5QdPzksjkRw1Jp5TjC697rn86edQKqzrlkPlUrL8rCudehV%2FRBJ%2FgFDPupmFjHaK5737vHAhru7IOrESQerhNzfsWZNjrI2c4DREglEzp5G5ye8vUFSJWneh0Krv8rmsn0QxZ%2FC12IpQtpAmxk7EyLBIsZ5YiksB8STnnXq8UdTCs7t%2B%2FBjqkAT0697WQ3Cc6h5omI5GUSyykvPKuBm2VnfotF76kl4U8ry6Jfzh5qtDNZ9kWdeoZElisSnnO%2FbdBbf31xaO8CS2zJMnrwWY1mxv9ky2Xa6uXYi%2F8pQH5giSKTe1PPGGw%2BOClQYEeGYSoKPiHtJu4Ct%2F1%2FNvw%2BbepUuRPEA4CJKzeZ120bRzSoFWEGCFjiOW9h%2Bz79tsGC%2B79kvixLBpaskZNvMU2&X-Amz-Signature=0098f25d576d009b863fef32076282552c4d8b3431040c3a2c16fefedd732748&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6LH46AM%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCgHYjQAdUwbPAkp4FArHzq6g6Yuy%2BvU3QjWthx1lGbKAIhAP2gVmplcVBFDwE5pd9xUoCP01ptHWRBPNz5YUyBCf9YKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAYpejp%2BLBajc53b0q3APo7XsOmqywB8tzE7OAWjakGohGuzmrNqQaJi%2BJ0szlLgAJ1GcIGf9WrntkFRB69a8lxdw7xoKBqn4x1JZzsfieiiheGtC8uHNiParv5mFZqsmDRD43Ks%2BwTvsHfc%2BvfgiZvoqzzeOWOVPG8S8WcG5lBH0vRBLL9A5CrKAYmc%2Fq76q4DYyTyN0TN5ynCt3s60iN6Tv0XhjCrqjhP1CF4mWO4k6vO8irmTeRnk50amBQ%2FJepsoaraSKgE%2B4nWca3gUPr%2BNYlo1tjML1l16I0l4%2B3z%2FiouuzWyyoCvB1BSgDuYWctAxhobnBVmgVGoCIpMMulnNkt5KGa0V6Hy06l9DAU80IJrWwboB1oRd0m1Ju5wNwNj8IKGdIMcqvyCMWYpZSlPMrU2b1PeWkdgEPzq2NQhsIpU9NbpR8Kcez2A1OVP0%2BPyUh6Ch9Yy26GiRWQJpPNB1PONyl1nUdaoVM5QdPzksjkRw1Jp5TjC697rn86edQKqzrlkPlUrL8rCudehV%2FRBJ%2FgFDPupmFjHaK5737vHAhru7IOrESQerhNzfsWZNjrI2c4DREglEzp5G5ye8vUFSJWneh0Krv8rmsn0QxZ%2FC12IpQtpAmxk7EyLBIsZ5YiksB8STnnXq8UdTCs7t%2B%2FBjqkAT0697WQ3Cc6h5omI5GUSyykvPKuBm2VnfotF76kl4U8ry6Jfzh5qtDNZ9kWdeoZElisSnnO%2FbdBbf31xaO8CS2zJMnrwWY1mxv9ky2Xa6uXYi%2F8pQH5giSKTe1PPGGw%2BOClQYEeGYSoKPiHtJu4Ct%2F1%2FNvw%2BbepUuRPEA4CJKzeZ120bRzSoFWEGCFjiOW9h%2Bz79tsGC%2B79kvixLBpaskZNvMU2&X-Amz-Signature=143e833e46d02fc34ed04d63d85dc726dd66d6160f5c835beeef1e5d733c9fae&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6LH46AM%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCgHYjQAdUwbPAkp4FArHzq6g6Yuy%2BvU3QjWthx1lGbKAIhAP2gVmplcVBFDwE5pd9xUoCP01ptHWRBPNz5YUyBCf9YKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAYpejp%2BLBajc53b0q3APo7XsOmqywB8tzE7OAWjakGohGuzmrNqQaJi%2BJ0szlLgAJ1GcIGf9WrntkFRB69a8lxdw7xoKBqn4x1JZzsfieiiheGtC8uHNiParv5mFZqsmDRD43Ks%2BwTvsHfc%2BvfgiZvoqzzeOWOVPG8S8WcG5lBH0vRBLL9A5CrKAYmc%2Fq76q4DYyTyN0TN5ynCt3s60iN6Tv0XhjCrqjhP1CF4mWO4k6vO8irmTeRnk50amBQ%2FJepsoaraSKgE%2B4nWca3gUPr%2BNYlo1tjML1l16I0l4%2B3z%2FiouuzWyyoCvB1BSgDuYWctAxhobnBVmgVGoCIpMMulnNkt5KGa0V6Hy06l9DAU80IJrWwboB1oRd0m1Ju5wNwNj8IKGdIMcqvyCMWYpZSlPMrU2b1PeWkdgEPzq2NQhsIpU9NbpR8Kcez2A1OVP0%2BPyUh6Ch9Yy26GiRWQJpPNB1PONyl1nUdaoVM5QdPzksjkRw1Jp5TjC697rn86edQKqzrlkPlUrL8rCudehV%2FRBJ%2FgFDPupmFjHaK5737vHAhru7IOrESQerhNzfsWZNjrI2c4DREglEzp5G5ye8vUFSJWneh0Krv8rmsn0QxZ%2FC12IpQtpAmxk7EyLBIsZ5YiksB8STnnXq8UdTCs7t%2B%2FBjqkAT0697WQ3Cc6h5omI5GUSyykvPKuBm2VnfotF76kl4U8ry6Jfzh5qtDNZ9kWdeoZElisSnnO%2FbdBbf31xaO8CS2zJMnrwWY1mxv9ky2Xa6uXYi%2F8pQH5giSKTe1PPGGw%2BOClQYEeGYSoKPiHtJu4Ct%2F1%2FNvw%2BbepUuRPEA4CJKzeZ120bRzSoFWEGCFjiOW9h%2Bz79tsGC%2B79kvixLBpaskZNvMU2&X-Amz-Signature=3cd4861969c3e1a6079874c5d3159db8fdaab060dbab0fea019c1bc8bf3cea9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6LH46AM%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCgHYjQAdUwbPAkp4FArHzq6g6Yuy%2BvU3QjWthx1lGbKAIhAP2gVmplcVBFDwE5pd9xUoCP01ptHWRBPNz5YUyBCf9YKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAYpejp%2BLBajc53b0q3APo7XsOmqywB8tzE7OAWjakGohGuzmrNqQaJi%2BJ0szlLgAJ1GcIGf9WrntkFRB69a8lxdw7xoKBqn4x1JZzsfieiiheGtC8uHNiParv5mFZqsmDRD43Ks%2BwTvsHfc%2BvfgiZvoqzzeOWOVPG8S8WcG5lBH0vRBLL9A5CrKAYmc%2Fq76q4DYyTyN0TN5ynCt3s60iN6Tv0XhjCrqjhP1CF4mWO4k6vO8irmTeRnk50amBQ%2FJepsoaraSKgE%2B4nWca3gUPr%2BNYlo1tjML1l16I0l4%2B3z%2FiouuzWyyoCvB1BSgDuYWctAxhobnBVmgVGoCIpMMulnNkt5KGa0V6Hy06l9DAU80IJrWwboB1oRd0m1Ju5wNwNj8IKGdIMcqvyCMWYpZSlPMrU2b1PeWkdgEPzq2NQhsIpU9NbpR8Kcez2A1OVP0%2BPyUh6Ch9Yy26GiRWQJpPNB1PONyl1nUdaoVM5QdPzksjkRw1Jp5TjC697rn86edQKqzrlkPlUrL8rCudehV%2FRBJ%2FgFDPupmFjHaK5737vHAhru7IOrESQerhNzfsWZNjrI2c4DREglEzp5G5ye8vUFSJWneh0Krv8rmsn0QxZ%2FC12IpQtpAmxk7EyLBIsZ5YiksB8STnnXq8UdTCs7t%2B%2FBjqkAT0697WQ3Cc6h5omI5GUSyykvPKuBm2VnfotF76kl4U8ry6Jfzh5qtDNZ9kWdeoZElisSnnO%2FbdBbf31xaO8CS2zJMnrwWY1mxv9ky2Xa6uXYi%2F8pQH5giSKTe1PPGGw%2BOClQYEeGYSoKPiHtJu4Ct%2F1%2FNvw%2BbepUuRPEA4CJKzeZ120bRzSoFWEGCFjiOW9h%2Bz79tsGC%2B79kvixLBpaskZNvMU2&X-Amz-Signature=91af4ad5048f060af6c616f4a59dd1bd1dabdc2045cbf7321946317dcf0435c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

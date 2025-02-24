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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIR6FQI6%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMNZRGTvBLMUiqE1xKElCEL2JBMxEAzJwOLpnqUWfp6AiAxNqEeeH%2F1cHmC1xmHaWI9XwEwYZfsTO4jTbJOoXk0ECr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMC65iF6fU8LniLfBFKtwDMo8VG9STqH5rQqO%2FCJLqhvRSj0px4yTFHLB2RJsRWDGi6%2Fe46l7LzVOgD%2FCyB8erdU2jKcshjzsf8JjfoP1KoJy3Hkc7T8AjklDw7b%2BOKmFoObLFIXY2C6lK%2FwJ%2BAHN%2FauiWPPU2cxipgXVyU49wkgUR6K2VWaxhMeweb5uIBzh50OKx5aa9Vs8iZtyvGoCOmtnDT4krwfpJSmNTSACl0M%2FdGLWSLdFPXjRQlLPUeHtO%2Fcnw1cyxtTQJIJUUZT0LadlE8XvobVQlVNuqfqDbTar6CL18mgUlusM2Dbb0nM4jvWk6ccdkwe6VlMuREBlbmKTY7zcYDzK89XArD1m35o3ht1T1RBzRbA%2Bvcj5XeU8FZndBcfo%2BS2D%2Bwqkf0J%2FaVzgeWWfFwCZjaM6CHxuAaQcY%2FaqzoiguXbSAo0uLA44Ly572sfPpOvoDDZPnHeDfKXN9xQmrcgRwtPD9zC%2BQDmyYkrnU6bGE8WWXrq3IZ3lfS4bRZU68gBQyp5bys66EtyCTw54F0ecVZ9JFFK6406Bb5JfbHK9XJCeMOJZXdq%2FoYUUXTWy4zqQis7hmF73OwpdPEdi7mfEHbMUC5j7BQ4pWg%2BnSkLyMvNg4oqxLkKDoC1FRsB3u8LAICncwkLzyvQY6pgH6sJg%2BuBlwL9NeNzK7DmwbY9cqY5GZh4HSvKdMV4wDznksucp%2Bh7ew%2FKeSweZrKmpinpq3tW2kCks5qf4tfAHLSrH6NKXSj8%2BFFfepxmMnpvQoQ0uRyroZLzj%2Foj2xwa3qQ%2B5nG6m1nfx3BJ3jqNkmC5GX6a6LZrbJw%2FxMfpMOg%2BBBD2fBdXFJgAeYuze14JUPus3%2Buulvdn0NcgafGEqurU0%2Fod6J&X-Amz-Signature=48b4463a3f6762a310ef2f0b08a8676f84a588f30dcbb72ce16447b142175d89&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIR6FQI6%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMNZRGTvBLMUiqE1xKElCEL2JBMxEAzJwOLpnqUWfp6AiAxNqEeeH%2F1cHmC1xmHaWI9XwEwYZfsTO4jTbJOoXk0ECr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMC65iF6fU8LniLfBFKtwDMo8VG9STqH5rQqO%2FCJLqhvRSj0px4yTFHLB2RJsRWDGi6%2Fe46l7LzVOgD%2FCyB8erdU2jKcshjzsf8JjfoP1KoJy3Hkc7T8AjklDw7b%2BOKmFoObLFIXY2C6lK%2FwJ%2BAHN%2FauiWPPU2cxipgXVyU49wkgUR6K2VWaxhMeweb5uIBzh50OKx5aa9Vs8iZtyvGoCOmtnDT4krwfpJSmNTSACl0M%2FdGLWSLdFPXjRQlLPUeHtO%2Fcnw1cyxtTQJIJUUZT0LadlE8XvobVQlVNuqfqDbTar6CL18mgUlusM2Dbb0nM4jvWk6ccdkwe6VlMuREBlbmKTY7zcYDzK89XArD1m35o3ht1T1RBzRbA%2Bvcj5XeU8FZndBcfo%2BS2D%2Bwqkf0J%2FaVzgeWWfFwCZjaM6CHxuAaQcY%2FaqzoiguXbSAo0uLA44Ly572sfPpOvoDDZPnHeDfKXN9xQmrcgRwtPD9zC%2BQDmyYkrnU6bGE8WWXrq3IZ3lfS4bRZU68gBQyp5bys66EtyCTw54F0ecVZ9JFFK6406Bb5JfbHK9XJCeMOJZXdq%2FoYUUXTWy4zqQis7hmF73OwpdPEdi7mfEHbMUC5j7BQ4pWg%2BnSkLyMvNg4oqxLkKDoC1FRsB3u8LAICncwkLzyvQY6pgH6sJg%2BuBlwL9NeNzK7DmwbY9cqY5GZh4HSvKdMV4wDznksucp%2Bh7ew%2FKeSweZrKmpinpq3tW2kCks5qf4tfAHLSrH6NKXSj8%2BFFfepxmMnpvQoQ0uRyroZLzj%2Foj2xwa3qQ%2B5nG6m1nfx3BJ3jqNkmC5GX6a6LZrbJw%2FxMfpMOg%2BBBD2fBdXFJgAeYuze14JUPus3%2Buulvdn0NcgafGEqurU0%2Fod6J&X-Amz-Signature=e44461849841d296fc745d3444190fa1de9422e0e482f177fcd7131097a22d37&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIR6FQI6%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMNZRGTvBLMUiqE1xKElCEL2JBMxEAzJwOLpnqUWfp6AiAxNqEeeH%2F1cHmC1xmHaWI9XwEwYZfsTO4jTbJOoXk0ECr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMC65iF6fU8LniLfBFKtwDMo8VG9STqH5rQqO%2FCJLqhvRSj0px4yTFHLB2RJsRWDGi6%2Fe46l7LzVOgD%2FCyB8erdU2jKcshjzsf8JjfoP1KoJy3Hkc7T8AjklDw7b%2BOKmFoObLFIXY2C6lK%2FwJ%2BAHN%2FauiWPPU2cxipgXVyU49wkgUR6K2VWaxhMeweb5uIBzh50OKx5aa9Vs8iZtyvGoCOmtnDT4krwfpJSmNTSACl0M%2FdGLWSLdFPXjRQlLPUeHtO%2Fcnw1cyxtTQJIJUUZT0LadlE8XvobVQlVNuqfqDbTar6CL18mgUlusM2Dbb0nM4jvWk6ccdkwe6VlMuREBlbmKTY7zcYDzK89XArD1m35o3ht1T1RBzRbA%2Bvcj5XeU8FZndBcfo%2BS2D%2Bwqkf0J%2FaVzgeWWfFwCZjaM6CHxuAaQcY%2FaqzoiguXbSAo0uLA44Ly572sfPpOvoDDZPnHeDfKXN9xQmrcgRwtPD9zC%2BQDmyYkrnU6bGE8WWXrq3IZ3lfS4bRZU68gBQyp5bys66EtyCTw54F0ecVZ9JFFK6406Bb5JfbHK9XJCeMOJZXdq%2FoYUUXTWy4zqQis7hmF73OwpdPEdi7mfEHbMUC5j7BQ4pWg%2BnSkLyMvNg4oqxLkKDoC1FRsB3u8LAICncwkLzyvQY6pgH6sJg%2BuBlwL9NeNzK7DmwbY9cqY5GZh4HSvKdMV4wDznksucp%2Bh7ew%2FKeSweZrKmpinpq3tW2kCks5qf4tfAHLSrH6NKXSj8%2BFFfepxmMnpvQoQ0uRyroZLzj%2Foj2xwa3qQ%2B5nG6m1nfx3BJ3jqNkmC5GX6a6LZrbJw%2FxMfpMOg%2BBBD2fBdXFJgAeYuze14JUPus3%2Buulvdn0NcgafGEqurU0%2Fod6J&X-Amz-Signature=b5db94739a9bc1bffcbdcf098450dccfc7e307d3efea5fe6a11a414461e365cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIR6FQI6%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMNZRGTvBLMUiqE1xKElCEL2JBMxEAzJwOLpnqUWfp6AiAxNqEeeH%2F1cHmC1xmHaWI9XwEwYZfsTO4jTbJOoXk0ECr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMC65iF6fU8LniLfBFKtwDMo8VG9STqH5rQqO%2FCJLqhvRSj0px4yTFHLB2RJsRWDGi6%2Fe46l7LzVOgD%2FCyB8erdU2jKcshjzsf8JjfoP1KoJy3Hkc7T8AjklDw7b%2BOKmFoObLFIXY2C6lK%2FwJ%2BAHN%2FauiWPPU2cxipgXVyU49wkgUR6K2VWaxhMeweb5uIBzh50OKx5aa9Vs8iZtyvGoCOmtnDT4krwfpJSmNTSACl0M%2FdGLWSLdFPXjRQlLPUeHtO%2Fcnw1cyxtTQJIJUUZT0LadlE8XvobVQlVNuqfqDbTar6CL18mgUlusM2Dbb0nM4jvWk6ccdkwe6VlMuREBlbmKTY7zcYDzK89XArD1m35o3ht1T1RBzRbA%2Bvcj5XeU8FZndBcfo%2BS2D%2Bwqkf0J%2FaVzgeWWfFwCZjaM6CHxuAaQcY%2FaqzoiguXbSAo0uLA44Ly572sfPpOvoDDZPnHeDfKXN9xQmrcgRwtPD9zC%2BQDmyYkrnU6bGE8WWXrq3IZ3lfS4bRZU68gBQyp5bys66EtyCTw54F0ecVZ9JFFK6406Bb5JfbHK9XJCeMOJZXdq%2FoYUUXTWy4zqQis7hmF73OwpdPEdi7mfEHbMUC5j7BQ4pWg%2BnSkLyMvNg4oqxLkKDoC1FRsB3u8LAICncwkLzyvQY6pgH6sJg%2BuBlwL9NeNzK7DmwbY9cqY5GZh4HSvKdMV4wDznksucp%2Bh7ew%2FKeSweZrKmpinpq3tW2kCks5qf4tfAHLSrH6NKXSj8%2BFFfepxmMnpvQoQ0uRyroZLzj%2Foj2xwa3qQ%2B5nG6m1nfx3BJ3jqNkmC5GX6a6LZrbJw%2FxMfpMOg%2BBBD2fBdXFJgAeYuze14JUPus3%2Buulvdn0NcgafGEqurU0%2Fod6J&X-Amz-Signature=d2eac5a3b9f28818981b6bc964d570f5ba56131d487b9137ccb95d93cc8ebee0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIR6FQI6%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMNZRGTvBLMUiqE1xKElCEL2JBMxEAzJwOLpnqUWfp6AiAxNqEeeH%2F1cHmC1xmHaWI9XwEwYZfsTO4jTbJOoXk0ECr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMC65iF6fU8LniLfBFKtwDMo8VG9STqH5rQqO%2FCJLqhvRSj0px4yTFHLB2RJsRWDGi6%2Fe46l7LzVOgD%2FCyB8erdU2jKcshjzsf8JjfoP1KoJy3Hkc7T8AjklDw7b%2BOKmFoObLFIXY2C6lK%2FwJ%2BAHN%2FauiWPPU2cxipgXVyU49wkgUR6K2VWaxhMeweb5uIBzh50OKx5aa9Vs8iZtyvGoCOmtnDT4krwfpJSmNTSACl0M%2FdGLWSLdFPXjRQlLPUeHtO%2Fcnw1cyxtTQJIJUUZT0LadlE8XvobVQlVNuqfqDbTar6CL18mgUlusM2Dbb0nM4jvWk6ccdkwe6VlMuREBlbmKTY7zcYDzK89XArD1m35o3ht1T1RBzRbA%2Bvcj5XeU8FZndBcfo%2BS2D%2Bwqkf0J%2FaVzgeWWfFwCZjaM6CHxuAaQcY%2FaqzoiguXbSAo0uLA44Ly572sfPpOvoDDZPnHeDfKXN9xQmrcgRwtPD9zC%2BQDmyYkrnU6bGE8WWXrq3IZ3lfS4bRZU68gBQyp5bys66EtyCTw54F0ecVZ9JFFK6406Bb5JfbHK9XJCeMOJZXdq%2FoYUUXTWy4zqQis7hmF73OwpdPEdi7mfEHbMUC5j7BQ4pWg%2BnSkLyMvNg4oqxLkKDoC1FRsB3u8LAICncwkLzyvQY6pgH6sJg%2BuBlwL9NeNzK7DmwbY9cqY5GZh4HSvKdMV4wDznksucp%2Bh7ew%2FKeSweZrKmpinpq3tW2kCks5qf4tfAHLSrH6NKXSj8%2BFFfepxmMnpvQoQ0uRyroZLzj%2Foj2xwa3qQ%2B5nG6m1nfx3BJ3jqNkmC5GX6a6LZrbJw%2FxMfpMOg%2BBBD2fBdXFJgAeYuze14JUPus3%2Buulvdn0NcgafGEqurU0%2Fod6J&X-Amz-Signature=4211ebaafecf2ed2c2e1b143c7bd444532882b237d06abd9efc21f0138c4cfcd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

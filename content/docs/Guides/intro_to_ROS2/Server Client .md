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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZSRCINC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeB15cEPUvn9oyGmVjsKW8jKtjrhuQir2Mh93gwKf1tAiEApsu%2FzWBBTgsME3iaHnE1fZJouuT1qqPmacepDeAwxuUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7s7WPphj7czrCrBSrcAy00owtE2vWBU11hqLnGamC59KiBKNRyZ83HkHwqlXHu3lI8MRiA9f6Rlom5%2BANaQTULsIM6jQOKmZ4TPhPm2piuxVa80fCMEOWB%2BH9ahjnweYCF5XEHykRonBG0l%2FAu417%2FfAGJwbeOlYPnBIbB1BQCncHmTSen4WUNfdGTX2p82ffCm7tIo0ig9huIc%2FlNxsnQDArQD58G%2B6udH6EtqfrYOkzM0op%2F17KLRDEZ1YCXLa%2BRdVM8mGYnrgp7X8uwv4gNMreji2%2BxTDqq5GZRS4kFoglmeENNXqYUNRNw7bI5Xu%2FfJlJyUZHXaV0aAwP96cFL2h1sRoIXQ11BOvlVJgu3IvNztdjZ86ZTnzgL2%2FiE4103%2FMxiVi7NJoe2BDvUsp0LTVidEGnQu2V9akRnhNHTidPaatA0M7j2vZ46amejvUPmAszGCbUNI8Awms7GbkC1xhWPRUAFUJe4Z1VH8x578FuvHWtBbSs0jSoCa%2BsVP3XuEjeoIT3GwmnqtqU2gm9Tbo2ygnm3MTKnjh9quT30UoVWdrQB56Bcu3FL0URdJzI%2BnYJ5tQT6IOHcY1FFN3%2BaVbLWUH5ypCfYBPYQTR0ABi4rUFxLTC%2FnbG6HkFrS9R%2FNq3Bff%2BqFbkqzMIOXzL4GOqUB%2BmPnbklBAs0tWPu2BFNDFZ5oJoJYbovfuyPFkP1H9wslmKFrC4gmADh8Vu3NYglLnVIL1wrIC7KwnE00Ep%2BpGZ7zTXQ4v%2FhvbH%2FwHUB1WuyhDR3WyxuJY3eFk1HkUFJH2rvvhU5lQ0%2FkK13btu8efJ%2BPWmmjEMsb5Cxy%2BvrPrZtIjHy0PB0ds59QxELe0KIxwuwR7X60VBBfIqlxS7OrGqM4IdPs&X-Amz-Signature=98ec4aab202bbd906adbfd79f25c5314284dcc8c52413dc79b92bb4a298227f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZSRCINC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeB15cEPUvn9oyGmVjsKW8jKtjrhuQir2Mh93gwKf1tAiEApsu%2FzWBBTgsME3iaHnE1fZJouuT1qqPmacepDeAwxuUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7s7WPphj7czrCrBSrcAy00owtE2vWBU11hqLnGamC59KiBKNRyZ83HkHwqlXHu3lI8MRiA9f6Rlom5%2BANaQTULsIM6jQOKmZ4TPhPm2piuxVa80fCMEOWB%2BH9ahjnweYCF5XEHykRonBG0l%2FAu417%2FfAGJwbeOlYPnBIbB1BQCncHmTSen4WUNfdGTX2p82ffCm7tIo0ig9huIc%2FlNxsnQDArQD58G%2B6udH6EtqfrYOkzM0op%2F17KLRDEZ1YCXLa%2BRdVM8mGYnrgp7X8uwv4gNMreji2%2BxTDqq5GZRS4kFoglmeENNXqYUNRNw7bI5Xu%2FfJlJyUZHXaV0aAwP96cFL2h1sRoIXQ11BOvlVJgu3IvNztdjZ86ZTnzgL2%2FiE4103%2FMxiVi7NJoe2BDvUsp0LTVidEGnQu2V9akRnhNHTidPaatA0M7j2vZ46amejvUPmAszGCbUNI8Awms7GbkC1xhWPRUAFUJe4Z1VH8x578FuvHWtBbSs0jSoCa%2BsVP3XuEjeoIT3GwmnqtqU2gm9Tbo2ygnm3MTKnjh9quT30UoVWdrQB56Bcu3FL0URdJzI%2BnYJ5tQT6IOHcY1FFN3%2BaVbLWUH5ypCfYBPYQTR0ABi4rUFxLTC%2FnbG6HkFrS9R%2FNq3Bff%2BqFbkqzMIOXzL4GOqUB%2BmPnbklBAs0tWPu2BFNDFZ5oJoJYbovfuyPFkP1H9wslmKFrC4gmADh8Vu3NYglLnVIL1wrIC7KwnE00Ep%2BpGZ7zTXQ4v%2FhvbH%2FwHUB1WuyhDR3WyxuJY3eFk1HkUFJH2rvvhU5lQ0%2FkK13btu8efJ%2BPWmmjEMsb5Cxy%2BvrPrZtIjHy0PB0ds59QxELe0KIxwuwR7X60VBBfIqlxS7OrGqM4IdPs&X-Amz-Signature=84b1804fa9a6e1240b7013f1811be95a6788e4002735985a2c920104215a217a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZSRCINC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeB15cEPUvn9oyGmVjsKW8jKtjrhuQir2Mh93gwKf1tAiEApsu%2FzWBBTgsME3iaHnE1fZJouuT1qqPmacepDeAwxuUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7s7WPphj7czrCrBSrcAy00owtE2vWBU11hqLnGamC59KiBKNRyZ83HkHwqlXHu3lI8MRiA9f6Rlom5%2BANaQTULsIM6jQOKmZ4TPhPm2piuxVa80fCMEOWB%2BH9ahjnweYCF5XEHykRonBG0l%2FAu417%2FfAGJwbeOlYPnBIbB1BQCncHmTSen4WUNfdGTX2p82ffCm7tIo0ig9huIc%2FlNxsnQDArQD58G%2B6udH6EtqfrYOkzM0op%2F17KLRDEZ1YCXLa%2BRdVM8mGYnrgp7X8uwv4gNMreji2%2BxTDqq5GZRS4kFoglmeENNXqYUNRNw7bI5Xu%2FfJlJyUZHXaV0aAwP96cFL2h1sRoIXQ11BOvlVJgu3IvNztdjZ86ZTnzgL2%2FiE4103%2FMxiVi7NJoe2BDvUsp0LTVidEGnQu2V9akRnhNHTidPaatA0M7j2vZ46amejvUPmAszGCbUNI8Awms7GbkC1xhWPRUAFUJe4Z1VH8x578FuvHWtBbSs0jSoCa%2BsVP3XuEjeoIT3GwmnqtqU2gm9Tbo2ygnm3MTKnjh9quT30UoVWdrQB56Bcu3FL0URdJzI%2BnYJ5tQT6IOHcY1FFN3%2BaVbLWUH5ypCfYBPYQTR0ABi4rUFxLTC%2FnbG6HkFrS9R%2FNq3Bff%2BqFbkqzMIOXzL4GOqUB%2BmPnbklBAs0tWPu2BFNDFZ5oJoJYbovfuyPFkP1H9wslmKFrC4gmADh8Vu3NYglLnVIL1wrIC7KwnE00Ep%2BpGZ7zTXQ4v%2FhvbH%2FwHUB1WuyhDR3WyxuJY3eFk1HkUFJH2rvvhU5lQ0%2FkK13btu8efJ%2BPWmmjEMsb5Cxy%2BvrPrZtIjHy0PB0ds59QxELe0KIxwuwR7X60VBBfIqlxS7OrGqM4IdPs&X-Amz-Signature=7699378bf5c16c6d69e23b746ef052f9ec1cfef1cf7256d2297bc9395db47511&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZSRCINC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeB15cEPUvn9oyGmVjsKW8jKtjrhuQir2Mh93gwKf1tAiEApsu%2FzWBBTgsME3iaHnE1fZJouuT1qqPmacepDeAwxuUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7s7WPphj7czrCrBSrcAy00owtE2vWBU11hqLnGamC59KiBKNRyZ83HkHwqlXHu3lI8MRiA9f6Rlom5%2BANaQTULsIM6jQOKmZ4TPhPm2piuxVa80fCMEOWB%2BH9ahjnweYCF5XEHykRonBG0l%2FAu417%2FfAGJwbeOlYPnBIbB1BQCncHmTSen4WUNfdGTX2p82ffCm7tIo0ig9huIc%2FlNxsnQDArQD58G%2B6udH6EtqfrYOkzM0op%2F17KLRDEZ1YCXLa%2BRdVM8mGYnrgp7X8uwv4gNMreji2%2BxTDqq5GZRS4kFoglmeENNXqYUNRNw7bI5Xu%2FfJlJyUZHXaV0aAwP96cFL2h1sRoIXQ11BOvlVJgu3IvNztdjZ86ZTnzgL2%2FiE4103%2FMxiVi7NJoe2BDvUsp0LTVidEGnQu2V9akRnhNHTidPaatA0M7j2vZ46amejvUPmAszGCbUNI8Awms7GbkC1xhWPRUAFUJe4Z1VH8x578FuvHWtBbSs0jSoCa%2BsVP3XuEjeoIT3GwmnqtqU2gm9Tbo2ygnm3MTKnjh9quT30UoVWdrQB56Bcu3FL0URdJzI%2BnYJ5tQT6IOHcY1FFN3%2BaVbLWUH5ypCfYBPYQTR0ABi4rUFxLTC%2FnbG6HkFrS9R%2FNq3Bff%2BqFbkqzMIOXzL4GOqUB%2BmPnbklBAs0tWPu2BFNDFZ5oJoJYbovfuyPFkP1H9wslmKFrC4gmADh8Vu3NYglLnVIL1wrIC7KwnE00Ep%2BpGZ7zTXQ4v%2FhvbH%2FwHUB1WuyhDR3WyxuJY3eFk1HkUFJH2rvvhU5lQ0%2FkK13btu8efJ%2BPWmmjEMsb5Cxy%2BvrPrZtIjHy0PB0ds59QxELe0KIxwuwR7X60VBBfIqlxS7OrGqM4IdPs&X-Amz-Signature=3c2268801a573221e23ec0bb18c36f820fcf6cde09d5e9657ffc36eab6ffb668&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZSRCINC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeB15cEPUvn9oyGmVjsKW8jKtjrhuQir2Mh93gwKf1tAiEApsu%2FzWBBTgsME3iaHnE1fZJouuT1qqPmacepDeAwxuUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7s7WPphj7czrCrBSrcAy00owtE2vWBU11hqLnGamC59KiBKNRyZ83HkHwqlXHu3lI8MRiA9f6Rlom5%2BANaQTULsIM6jQOKmZ4TPhPm2piuxVa80fCMEOWB%2BH9ahjnweYCF5XEHykRonBG0l%2FAu417%2FfAGJwbeOlYPnBIbB1BQCncHmTSen4WUNfdGTX2p82ffCm7tIo0ig9huIc%2FlNxsnQDArQD58G%2B6udH6EtqfrYOkzM0op%2F17KLRDEZ1YCXLa%2BRdVM8mGYnrgp7X8uwv4gNMreji2%2BxTDqq5GZRS4kFoglmeENNXqYUNRNw7bI5Xu%2FfJlJyUZHXaV0aAwP96cFL2h1sRoIXQ11BOvlVJgu3IvNztdjZ86ZTnzgL2%2FiE4103%2FMxiVi7NJoe2BDvUsp0LTVidEGnQu2V9akRnhNHTidPaatA0M7j2vZ46amejvUPmAszGCbUNI8Awms7GbkC1xhWPRUAFUJe4Z1VH8x578FuvHWtBbSs0jSoCa%2BsVP3XuEjeoIT3GwmnqtqU2gm9Tbo2ygnm3MTKnjh9quT30UoVWdrQB56Bcu3FL0URdJzI%2BnYJ5tQT6IOHcY1FFN3%2BaVbLWUH5ypCfYBPYQTR0ABi4rUFxLTC%2FnbG6HkFrS9R%2FNq3Bff%2BqFbkqzMIOXzL4GOqUB%2BmPnbklBAs0tWPu2BFNDFZ5oJoJYbovfuyPFkP1H9wslmKFrC4gmADh8Vu3NYglLnVIL1wrIC7KwnE00Ep%2BpGZ7zTXQ4v%2FhvbH%2FwHUB1WuyhDR3WyxuJY3eFk1HkUFJH2rvvhU5lQ0%2FkK13btu8efJ%2BPWmmjEMsb5Cxy%2BvrPrZtIjHy0PB0ds59QxELe0KIxwuwR7X60VBBfIqlxS7OrGqM4IdPs&X-Amz-Signature=1a0bf11fe10a57e34ac088dce81caea83d207a413388a21371f796a0af2c7b08&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5HVKOV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgTK2iw95dXs9fcwUdLEiCjXf6BV0dITF5olpXzMUqRAIgKQuiL638d4vgHep30InZf2XaIhBoCr2A74pxnegDpIcq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDsRSEcwgXihe7WLMircA3X61B3UALLCMCLIUeTSyNFlvd%2B7ZhVnBMgYYkCChMYZND66HEpf12atzj1zh0wso%2BCwIpClWdw7%2FNwID1BRFj87ILTF4szUMOmNKdYBwnuTzzsoAJXatJ3dUGQeLaERNZ0lJShxe8VbBGXDBtiZasVl5N%2B9Ry0bM0gqb43AnM47Gjldwtvx1IAnClsNOVGih4Jjuup0CEgXdjCvD9qn91cia7EbLpO6EQsGAf7XzoJEFT9u9%2BA%2FQDxHE2g%2BS88m%2F9gLCYCVsEs0Vaiq3crDMg6tcsVw%2B4%2FH%2FTK8%2BJ%2BolvjH17thIw%2BNo4e1pbEGSTbwunVHi5ZTWO672LjrjeD%2FECkjE9mFrnvhpWtHB6zXOhgRjQCTtbA0XL%2Fh8kfbuxhNQPhTk%2BKkpHbu1inw04GHx3LiBxrYGLtAXxTnLVV5ACXHJf0oHBjI9bcfkDbusT4RvZ5Hg46cGIBBrN1MGrJl2%2Bn2vBw9EtzzpXyHWJsbLRG%2FwgmAar0KFX7Xaas13MUox6HFViWU5MkpFR9k7wNb7SXmlxC7y0AxAsG2wAaeB2mLu0ic1o2LxH3XhWzZxk9KhIv9Tz5tHjkRzv7M%2BTcIxwEGsrMBlLvhnya3hHcDSeMAcFhWFau68hAEZK%2B3MMbXpMEGOqUBx09%2FaDoj88y6Zn%2FK%2F%2BBA9bfhcPVoVeEMjzumh%2B2Mk9RCKEassu7ijTGVVQJfowonRfZzVhJ26XbauDTH8MwA0obaLn68HNjXTejzQIJCQPs5OzQgJXNB%2BzPXg2Mi0k%2BMkI30fpmjND92dlSpy3M0GaPYC70ml1lTA%2BUiZVa2mKw7p82OpH3iGJseLFocWaXuD49pPn1djgu3YjF%2FxcNcYcniasUT&X-Amz-Signature=c2433cacd30886ffd9f5e68c356a6b0e871f449a8b7229093382b91d70eebed4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5HVKOV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgTK2iw95dXs9fcwUdLEiCjXf6BV0dITF5olpXzMUqRAIgKQuiL638d4vgHep30InZf2XaIhBoCr2A74pxnegDpIcq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDsRSEcwgXihe7WLMircA3X61B3UALLCMCLIUeTSyNFlvd%2B7ZhVnBMgYYkCChMYZND66HEpf12atzj1zh0wso%2BCwIpClWdw7%2FNwID1BRFj87ILTF4szUMOmNKdYBwnuTzzsoAJXatJ3dUGQeLaERNZ0lJShxe8VbBGXDBtiZasVl5N%2B9Ry0bM0gqb43AnM47Gjldwtvx1IAnClsNOVGih4Jjuup0CEgXdjCvD9qn91cia7EbLpO6EQsGAf7XzoJEFT9u9%2BA%2FQDxHE2g%2BS88m%2F9gLCYCVsEs0Vaiq3crDMg6tcsVw%2B4%2FH%2FTK8%2BJ%2BolvjH17thIw%2BNo4e1pbEGSTbwunVHi5ZTWO672LjrjeD%2FECkjE9mFrnvhpWtHB6zXOhgRjQCTtbA0XL%2Fh8kfbuxhNQPhTk%2BKkpHbu1inw04GHx3LiBxrYGLtAXxTnLVV5ACXHJf0oHBjI9bcfkDbusT4RvZ5Hg46cGIBBrN1MGrJl2%2Bn2vBw9EtzzpXyHWJsbLRG%2FwgmAar0KFX7Xaas13MUox6HFViWU5MkpFR9k7wNb7SXmlxC7y0AxAsG2wAaeB2mLu0ic1o2LxH3XhWzZxk9KhIv9Tz5tHjkRzv7M%2BTcIxwEGsrMBlLvhnya3hHcDSeMAcFhWFau68hAEZK%2B3MMbXpMEGOqUBx09%2FaDoj88y6Zn%2FK%2F%2BBA9bfhcPVoVeEMjzumh%2B2Mk9RCKEassu7ijTGVVQJfowonRfZzVhJ26XbauDTH8MwA0obaLn68HNjXTejzQIJCQPs5OzQgJXNB%2BzPXg2Mi0k%2BMkI30fpmjND92dlSpy3M0GaPYC70ml1lTA%2BUiZVa2mKw7p82OpH3iGJseLFocWaXuD49pPn1djgu3YjF%2FxcNcYcniasUT&X-Amz-Signature=ca104c2d8ef62e3c175b650bc67f1f2c0fdd556a9a5889c81ae6dd87abd36177&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5HVKOV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgTK2iw95dXs9fcwUdLEiCjXf6BV0dITF5olpXzMUqRAIgKQuiL638d4vgHep30InZf2XaIhBoCr2A74pxnegDpIcq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDsRSEcwgXihe7WLMircA3X61B3UALLCMCLIUeTSyNFlvd%2B7ZhVnBMgYYkCChMYZND66HEpf12atzj1zh0wso%2BCwIpClWdw7%2FNwID1BRFj87ILTF4szUMOmNKdYBwnuTzzsoAJXatJ3dUGQeLaERNZ0lJShxe8VbBGXDBtiZasVl5N%2B9Ry0bM0gqb43AnM47Gjldwtvx1IAnClsNOVGih4Jjuup0CEgXdjCvD9qn91cia7EbLpO6EQsGAf7XzoJEFT9u9%2BA%2FQDxHE2g%2BS88m%2F9gLCYCVsEs0Vaiq3crDMg6tcsVw%2B4%2FH%2FTK8%2BJ%2BolvjH17thIw%2BNo4e1pbEGSTbwunVHi5ZTWO672LjrjeD%2FECkjE9mFrnvhpWtHB6zXOhgRjQCTtbA0XL%2Fh8kfbuxhNQPhTk%2BKkpHbu1inw04GHx3LiBxrYGLtAXxTnLVV5ACXHJf0oHBjI9bcfkDbusT4RvZ5Hg46cGIBBrN1MGrJl2%2Bn2vBw9EtzzpXyHWJsbLRG%2FwgmAar0KFX7Xaas13MUox6HFViWU5MkpFR9k7wNb7SXmlxC7y0AxAsG2wAaeB2mLu0ic1o2LxH3XhWzZxk9KhIv9Tz5tHjkRzv7M%2BTcIxwEGsrMBlLvhnya3hHcDSeMAcFhWFau68hAEZK%2B3MMbXpMEGOqUBx09%2FaDoj88y6Zn%2FK%2F%2BBA9bfhcPVoVeEMjzumh%2B2Mk9RCKEassu7ijTGVVQJfowonRfZzVhJ26XbauDTH8MwA0obaLn68HNjXTejzQIJCQPs5OzQgJXNB%2BzPXg2Mi0k%2BMkI30fpmjND92dlSpy3M0GaPYC70ml1lTA%2BUiZVa2mKw7p82OpH3iGJseLFocWaXuD49pPn1djgu3YjF%2FxcNcYcniasUT&X-Amz-Signature=ed379860a46fa9e0cfafce5236ac7912d97b904237909c8bee6e13f1b8321ba8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5HVKOV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgTK2iw95dXs9fcwUdLEiCjXf6BV0dITF5olpXzMUqRAIgKQuiL638d4vgHep30InZf2XaIhBoCr2A74pxnegDpIcq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDsRSEcwgXihe7WLMircA3X61B3UALLCMCLIUeTSyNFlvd%2B7ZhVnBMgYYkCChMYZND66HEpf12atzj1zh0wso%2BCwIpClWdw7%2FNwID1BRFj87ILTF4szUMOmNKdYBwnuTzzsoAJXatJ3dUGQeLaERNZ0lJShxe8VbBGXDBtiZasVl5N%2B9Ry0bM0gqb43AnM47Gjldwtvx1IAnClsNOVGih4Jjuup0CEgXdjCvD9qn91cia7EbLpO6EQsGAf7XzoJEFT9u9%2BA%2FQDxHE2g%2BS88m%2F9gLCYCVsEs0Vaiq3crDMg6tcsVw%2B4%2FH%2FTK8%2BJ%2BolvjH17thIw%2BNo4e1pbEGSTbwunVHi5ZTWO672LjrjeD%2FECkjE9mFrnvhpWtHB6zXOhgRjQCTtbA0XL%2Fh8kfbuxhNQPhTk%2BKkpHbu1inw04GHx3LiBxrYGLtAXxTnLVV5ACXHJf0oHBjI9bcfkDbusT4RvZ5Hg46cGIBBrN1MGrJl2%2Bn2vBw9EtzzpXyHWJsbLRG%2FwgmAar0KFX7Xaas13MUox6HFViWU5MkpFR9k7wNb7SXmlxC7y0AxAsG2wAaeB2mLu0ic1o2LxH3XhWzZxk9KhIv9Tz5tHjkRzv7M%2BTcIxwEGsrMBlLvhnya3hHcDSeMAcFhWFau68hAEZK%2B3MMbXpMEGOqUBx09%2FaDoj88y6Zn%2FK%2F%2BBA9bfhcPVoVeEMjzumh%2B2Mk9RCKEassu7ijTGVVQJfowonRfZzVhJ26XbauDTH8MwA0obaLn68HNjXTejzQIJCQPs5OzQgJXNB%2BzPXg2Mi0k%2BMkI30fpmjND92dlSpy3M0GaPYC70ml1lTA%2BUiZVa2mKw7p82OpH3iGJseLFocWaXuD49pPn1djgu3YjF%2FxcNcYcniasUT&X-Amz-Signature=517f7bd9ecf52e247c9a2925c67142d996cdd959bd706210d43a4751e1dde6cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5HVKOV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgTK2iw95dXs9fcwUdLEiCjXf6BV0dITF5olpXzMUqRAIgKQuiL638d4vgHep30InZf2XaIhBoCr2A74pxnegDpIcq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDsRSEcwgXihe7WLMircA3X61B3UALLCMCLIUeTSyNFlvd%2B7ZhVnBMgYYkCChMYZND66HEpf12atzj1zh0wso%2BCwIpClWdw7%2FNwID1BRFj87ILTF4szUMOmNKdYBwnuTzzsoAJXatJ3dUGQeLaERNZ0lJShxe8VbBGXDBtiZasVl5N%2B9Ry0bM0gqb43AnM47Gjldwtvx1IAnClsNOVGih4Jjuup0CEgXdjCvD9qn91cia7EbLpO6EQsGAf7XzoJEFT9u9%2BA%2FQDxHE2g%2BS88m%2F9gLCYCVsEs0Vaiq3crDMg6tcsVw%2B4%2FH%2FTK8%2BJ%2BolvjH17thIw%2BNo4e1pbEGSTbwunVHi5ZTWO672LjrjeD%2FECkjE9mFrnvhpWtHB6zXOhgRjQCTtbA0XL%2Fh8kfbuxhNQPhTk%2BKkpHbu1inw04GHx3LiBxrYGLtAXxTnLVV5ACXHJf0oHBjI9bcfkDbusT4RvZ5Hg46cGIBBrN1MGrJl2%2Bn2vBw9EtzzpXyHWJsbLRG%2FwgmAar0KFX7Xaas13MUox6HFViWU5MkpFR9k7wNb7SXmlxC7y0AxAsG2wAaeB2mLu0ic1o2LxH3XhWzZxk9KhIv9Tz5tHjkRzv7M%2BTcIxwEGsrMBlLvhnya3hHcDSeMAcFhWFau68hAEZK%2B3MMbXpMEGOqUBx09%2FaDoj88y6Zn%2FK%2F%2BBA9bfhcPVoVeEMjzumh%2B2Mk9RCKEassu7ijTGVVQJfowonRfZzVhJ26XbauDTH8MwA0obaLn68HNjXTejzQIJCQPs5OzQgJXNB%2BzPXg2Mi0k%2BMkI30fpmjND92dlSpy3M0GaPYC70ml1lTA%2BUiZVa2mKw7p82OpH3iGJseLFocWaXuD49pPn1djgu3YjF%2FxcNcYcniasUT&X-Amz-Signature=91ac80eda075d9e337908d6db2775eb9fe709344957c183d566e7e8d3249e58f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

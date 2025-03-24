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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQOVLMAJ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeAXXitvu6R%2B9Q4%2Fi%2B8ura%2FULzTlnVwRPIqfRis45rIgIhAIgoJzwZ5juEWV0HvYLSfwV%2FNooF5DXdhhVSvsc42W3GKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4gNuB4%2B7DGNOKhLMq3AMiOjmQg%2B4wuLEtzkA3%2FiLnEsjhk0FohjMhuS9fX7cg8Ky13Xi%2B1vJ2belYBsLUUT4sidHywnF09jP8ereVkUn2p3%2FlFP9K5R7Y4lUEaNv%2FkrsSm1LxQZcmEbO9YqYMRIn4%2F8%2BmVgOQ092zsGQplVVdevrgMJlagzsaI4hRF0x08yhOuBaEmQYDL4OKQ%2FuZzqX8MhqVPGrq8lnXbnx6Xj73gQRWtBlXPSAuO1Bx7pBV2nwAYBXe1wudQwBp7DNH0Um9suqQkKepvBx%2F5TbtdUBwnVeJ2%2BIDkSOswzA7xx13oqU1wJQ4Cp7lUUlaO0g4wnGei%2BhKt89HTzQhrjfkhjLtRL4pJHZ8sSZ7xlkT2bKXhbOJBd5llSP4z9lrLs535Z9OUy%2BDQOJ5WyCz2lpUptKpotvSZ58xsVC2HRhr9BZpgv9QPtmxKRIWoQrdtugCOvwUDbUKjjtwX%2BbHuWU3qnYlPvfwK%2FUsHdH%2Fg4lDC0Eg8RX%2BCnU2yNm%2FZDwVOI32L%2FR6vyv5weuyjNFbQLbmyhEGdRxrsucnUJT9Kx%2F202koy1gIZUvTh49biawXT0%2Fe5MzufcHFVcZusd%2Bv603n4tlrQn2AiuBNUYQGGt81dPlNNFeOXW5y8Fxu9vtAMzDPuIO%2FBjqkATnia56dW31CWEJ6ctH1tdyq7n570mgPkihLDeWATg9kFl4YH3oeGbu2itd00Uy9N67KCjOUbDjWQQqD5SW8h97lNj6e%2FiyzotmpOzfQWcwxrvRln8S%2BhcGifU7tQge6wWHyVSVrzlK8GignVV0Ndo%2FBmqo8WBlhbnhcfZRCUhxuYRuiTkF3M%2BpSYV9dfNsZuEc0a1lPOXE2kJCZ8nX6A1LK0w%2B4&X-Amz-Signature=ba6c7f482a0b756d2c9bb0f902937f3894585b1f7bc04cfc3fc57c0f9e63bd19&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQOVLMAJ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeAXXitvu6R%2B9Q4%2Fi%2B8ura%2FULzTlnVwRPIqfRis45rIgIhAIgoJzwZ5juEWV0HvYLSfwV%2FNooF5DXdhhVSvsc42W3GKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4gNuB4%2B7DGNOKhLMq3AMiOjmQg%2B4wuLEtzkA3%2FiLnEsjhk0FohjMhuS9fX7cg8Ky13Xi%2B1vJ2belYBsLUUT4sidHywnF09jP8ereVkUn2p3%2FlFP9K5R7Y4lUEaNv%2FkrsSm1LxQZcmEbO9YqYMRIn4%2F8%2BmVgOQ092zsGQplVVdevrgMJlagzsaI4hRF0x08yhOuBaEmQYDL4OKQ%2FuZzqX8MhqVPGrq8lnXbnx6Xj73gQRWtBlXPSAuO1Bx7pBV2nwAYBXe1wudQwBp7DNH0Um9suqQkKepvBx%2F5TbtdUBwnVeJ2%2BIDkSOswzA7xx13oqU1wJQ4Cp7lUUlaO0g4wnGei%2BhKt89HTzQhrjfkhjLtRL4pJHZ8sSZ7xlkT2bKXhbOJBd5llSP4z9lrLs535Z9OUy%2BDQOJ5WyCz2lpUptKpotvSZ58xsVC2HRhr9BZpgv9QPtmxKRIWoQrdtugCOvwUDbUKjjtwX%2BbHuWU3qnYlPvfwK%2FUsHdH%2Fg4lDC0Eg8RX%2BCnU2yNm%2FZDwVOI32L%2FR6vyv5weuyjNFbQLbmyhEGdRxrsucnUJT9Kx%2F202koy1gIZUvTh49biawXT0%2Fe5MzufcHFVcZusd%2Bv603n4tlrQn2AiuBNUYQGGt81dPlNNFeOXW5y8Fxu9vtAMzDPuIO%2FBjqkATnia56dW31CWEJ6ctH1tdyq7n570mgPkihLDeWATg9kFl4YH3oeGbu2itd00Uy9N67KCjOUbDjWQQqD5SW8h97lNj6e%2FiyzotmpOzfQWcwxrvRln8S%2BhcGifU7tQge6wWHyVSVrzlK8GignVV0Ndo%2FBmqo8WBlhbnhcfZRCUhxuYRuiTkF3M%2BpSYV9dfNsZuEc0a1lPOXE2kJCZ8nX6A1LK0w%2B4&X-Amz-Signature=7052ff1528c56be8ebde3fb736bd1271fed6315a5c26763d758c085f7f76d16c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQOVLMAJ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeAXXitvu6R%2B9Q4%2Fi%2B8ura%2FULzTlnVwRPIqfRis45rIgIhAIgoJzwZ5juEWV0HvYLSfwV%2FNooF5DXdhhVSvsc42W3GKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4gNuB4%2B7DGNOKhLMq3AMiOjmQg%2B4wuLEtzkA3%2FiLnEsjhk0FohjMhuS9fX7cg8Ky13Xi%2B1vJ2belYBsLUUT4sidHywnF09jP8ereVkUn2p3%2FlFP9K5R7Y4lUEaNv%2FkrsSm1LxQZcmEbO9YqYMRIn4%2F8%2BmVgOQ092zsGQplVVdevrgMJlagzsaI4hRF0x08yhOuBaEmQYDL4OKQ%2FuZzqX8MhqVPGrq8lnXbnx6Xj73gQRWtBlXPSAuO1Bx7pBV2nwAYBXe1wudQwBp7DNH0Um9suqQkKepvBx%2F5TbtdUBwnVeJ2%2BIDkSOswzA7xx13oqU1wJQ4Cp7lUUlaO0g4wnGei%2BhKt89HTzQhrjfkhjLtRL4pJHZ8sSZ7xlkT2bKXhbOJBd5llSP4z9lrLs535Z9OUy%2BDQOJ5WyCz2lpUptKpotvSZ58xsVC2HRhr9BZpgv9QPtmxKRIWoQrdtugCOvwUDbUKjjtwX%2BbHuWU3qnYlPvfwK%2FUsHdH%2Fg4lDC0Eg8RX%2BCnU2yNm%2FZDwVOI32L%2FR6vyv5weuyjNFbQLbmyhEGdRxrsucnUJT9Kx%2F202koy1gIZUvTh49biawXT0%2Fe5MzufcHFVcZusd%2Bv603n4tlrQn2AiuBNUYQGGt81dPlNNFeOXW5y8Fxu9vtAMzDPuIO%2FBjqkATnia56dW31CWEJ6ctH1tdyq7n570mgPkihLDeWATg9kFl4YH3oeGbu2itd00Uy9N67KCjOUbDjWQQqD5SW8h97lNj6e%2FiyzotmpOzfQWcwxrvRln8S%2BhcGifU7tQge6wWHyVSVrzlK8GignVV0Ndo%2FBmqo8WBlhbnhcfZRCUhxuYRuiTkF3M%2BpSYV9dfNsZuEc0a1lPOXE2kJCZ8nX6A1LK0w%2B4&X-Amz-Signature=9b031e4278258aaacd1a6111a22babaa6cb8363612f62fe07e8c445e76aa7bbf&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQOVLMAJ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeAXXitvu6R%2B9Q4%2Fi%2B8ura%2FULzTlnVwRPIqfRis45rIgIhAIgoJzwZ5juEWV0HvYLSfwV%2FNooF5DXdhhVSvsc42W3GKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4gNuB4%2B7DGNOKhLMq3AMiOjmQg%2B4wuLEtzkA3%2FiLnEsjhk0FohjMhuS9fX7cg8Ky13Xi%2B1vJ2belYBsLUUT4sidHywnF09jP8ereVkUn2p3%2FlFP9K5R7Y4lUEaNv%2FkrsSm1LxQZcmEbO9YqYMRIn4%2F8%2BmVgOQ092zsGQplVVdevrgMJlagzsaI4hRF0x08yhOuBaEmQYDL4OKQ%2FuZzqX8MhqVPGrq8lnXbnx6Xj73gQRWtBlXPSAuO1Bx7pBV2nwAYBXe1wudQwBp7DNH0Um9suqQkKepvBx%2F5TbtdUBwnVeJ2%2BIDkSOswzA7xx13oqU1wJQ4Cp7lUUlaO0g4wnGei%2BhKt89HTzQhrjfkhjLtRL4pJHZ8sSZ7xlkT2bKXhbOJBd5llSP4z9lrLs535Z9OUy%2BDQOJ5WyCz2lpUptKpotvSZ58xsVC2HRhr9BZpgv9QPtmxKRIWoQrdtugCOvwUDbUKjjtwX%2BbHuWU3qnYlPvfwK%2FUsHdH%2Fg4lDC0Eg8RX%2BCnU2yNm%2FZDwVOI32L%2FR6vyv5weuyjNFbQLbmyhEGdRxrsucnUJT9Kx%2F202koy1gIZUvTh49biawXT0%2Fe5MzufcHFVcZusd%2Bv603n4tlrQn2AiuBNUYQGGt81dPlNNFeOXW5y8Fxu9vtAMzDPuIO%2FBjqkATnia56dW31CWEJ6ctH1tdyq7n570mgPkihLDeWATg9kFl4YH3oeGbu2itd00Uy9N67KCjOUbDjWQQqD5SW8h97lNj6e%2FiyzotmpOzfQWcwxrvRln8S%2BhcGifU7tQge6wWHyVSVrzlK8GignVV0Ndo%2FBmqo8WBlhbnhcfZRCUhxuYRuiTkF3M%2BpSYV9dfNsZuEc0a1lPOXE2kJCZ8nX6A1LK0w%2B4&X-Amz-Signature=38fc2246e651b918c05de47151c9059d177e0bd57c33e0359f20e6c8151fdd79&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQOVLMAJ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeAXXitvu6R%2B9Q4%2Fi%2B8ura%2FULzTlnVwRPIqfRis45rIgIhAIgoJzwZ5juEWV0HvYLSfwV%2FNooF5DXdhhVSvsc42W3GKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4gNuB4%2B7DGNOKhLMq3AMiOjmQg%2B4wuLEtzkA3%2FiLnEsjhk0FohjMhuS9fX7cg8Ky13Xi%2B1vJ2belYBsLUUT4sidHywnF09jP8ereVkUn2p3%2FlFP9K5R7Y4lUEaNv%2FkrsSm1LxQZcmEbO9YqYMRIn4%2F8%2BmVgOQ092zsGQplVVdevrgMJlagzsaI4hRF0x08yhOuBaEmQYDL4OKQ%2FuZzqX8MhqVPGrq8lnXbnx6Xj73gQRWtBlXPSAuO1Bx7pBV2nwAYBXe1wudQwBp7DNH0Um9suqQkKepvBx%2F5TbtdUBwnVeJ2%2BIDkSOswzA7xx13oqU1wJQ4Cp7lUUlaO0g4wnGei%2BhKt89HTzQhrjfkhjLtRL4pJHZ8sSZ7xlkT2bKXhbOJBd5llSP4z9lrLs535Z9OUy%2BDQOJ5WyCz2lpUptKpotvSZ58xsVC2HRhr9BZpgv9QPtmxKRIWoQrdtugCOvwUDbUKjjtwX%2BbHuWU3qnYlPvfwK%2FUsHdH%2Fg4lDC0Eg8RX%2BCnU2yNm%2FZDwVOI32L%2FR6vyv5weuyjNFbQLbmyhEGdRxrsucnUJT9Kx%2F202koy1gIZUvTh49biawXT0%2Fe5MzufcHFVcZusd%2Bv603n4tlrQn2AiuBNUYQGGt81dPlNNFeOXW5y8Fxu9vtAMzDPuIO%2FBjqkATnia56dW31CWEJ6ctH1tdyq7n570mgPkihLDeWATg9kFl4YH3oeGbu2itd00Uy9N67KCjOUbDjWQQqD5SW8h97lNj6e%2FiyzotmpOzfQWcwxrvRln8S%2BhcGifU7tQge6wWHyVSVrzlK8GignVV0Ndo%2FBmqo8WBlhbnhcfZRCUhxuYRuiTkF3M%2BpSYV9dfNsZuEc0a1lPOXE2kJCZ8nX6A1LK0w%2B4&X-Amz-Signature=cbfb28fd7c6cb7c5f372a2cdc8866acf3924a760c0492851baab7f687d4bcc8d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

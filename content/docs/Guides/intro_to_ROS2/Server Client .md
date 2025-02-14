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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY2UUE2R%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPfg4tElNfZhG7jXjMjb3B1aiImSuFrZRMJiU7V0LdUwIhAKA4ziFuC2DQuoIWcMaFqly%2BncEl8995OXqi55DAhDMjKv8DCCEQABoMNjM3NDIzMTgzODA1IgxBnN7LgPYybnuAEaoq3AMTAn91HycZmpsv%2FMFP77iE25N%2FUlZRHuL7BAEK90lRH6BK8TLp2xk054JrbrMX8osIEV5SJLtiaomdRD8mqCxBClDGXiUsXFnlWDPdi4GIch5pOwuY91PF6GKE0BV5aiediw09NWtmyI%2FMXCU3jVRUTRSg9UIIGhK7d2%2FRYIqGXewLKQoKwKwMns9Zou1Fr6iuSuQG8VBikYcQpM82elrVGv4ZTeKTQP6BGErUImyEZshLikJ2k6WBpkq%2Ft203Ty2yPshv8zy5LGEk7djWpBs9mq23C3ysuGyegPwGbsz2kkLGGKXUJMIdeKFN0z6hjBZJoRfinnSp5CovAQVVV%2FN%2BGLjnpNAPu2Fs%2B43%2B%2BnwM0nw%2FkngqeA3VZefXj88lu3U1wgOhRCmi4gseXPBkF0gknYa1nHz1gK3OHPZGkMzgLviTJdXNKqGIZxO1viZjH9H%2FLkl9sGo6XJT7p6HTDmU6p%2BTrvTS9zDmD1kYNqamzyMju50PeOQ%2FvOCR1cFaXsZIlB1hThULf9iO3XBdU4SH8W6fcXb8uWlAeH4hFbt7bJ6NbQTf4ao3v8Ck0rkwevr%2BqRVXQH5H11ANE3D%2BklbNCnI%2BF7cb8sjxIPA7wiQe%2BPRhlRkAf3VR6IHn%2F%2BTCghLq9BjqkAcG7NFSJmQz99bYSgMZDxTpt%2BS4rPYoY68Cxi7Lv5q9Ct4GRVZtratupAsNWqoJLMaW3vO%2FAeT9gRoIGVyozoqwV2skbT8Qqnm9YoN5LdQMaWyRd2HDga9IZKzp1uUyTO%2FgT773NFgJI2VluwpY%2B5Y3WigZIJnvIQyYNhVbG%2FtafQx%2Bn1kGiaw5ZjgW5yiutR7l6XrWS%2Bcvjy%2Fzs3CuhGMbi7nNy&X-Amz-Signature=5b0c4a95f3256c429c522db243194b67803bbbd7df94d249d5081a3f4a4a60ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY2UUE2R%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPfg4tElNfZhG7jXjMjb3B1aiImSuFrZRMJiU7V0LdUwIhAKA4ziFuC2DQuoIWcMaFqly%2BncEl8995OXqi55DAhDMjKv8DCCEQABoMNjM3NDIzMTgzODA1IgxBnN7LgPYybnuAEaoq3AMTAn91HycZmpsv%2FMFP77iE25N%2FUlZRHuL7BAEK90lRH6BK8TLp2xk054JrbrMX8osIEV5SJLtiaomdRD8mqCxBClDGXiUsXFnlWDPdi4GIch5pOwuY91PF6GKE0BV5aiediw09NWtmyI%2FMXCU3jVRUTRSg9UIIGhK7d2%2FRYIqGXewLKQoKwKwMns9Zou1Fr6iuSuQG8VBikYcQpM82elrVGv4ZTeKTQP6BGErUImyEZshLikJ2k6WBpkq%2Ft203Ty2yPshv8zy5LGEk7djWpBs9mq23C3ysuGyegPwGbsz2kkLGGKXUJMIdeKFN0z6hjBZJoRfinnSp5CovAQVVV%2FN%2BGLjnpNAPu2Fs%2B43%2B%2BnwM0nw%2FkngqeA3VZefXj88lu3U1wgOhRCmi4gseXPBkF0gknYa1nHz1gK3OHPZGkMzgLviTJdXNKqGIZxO1viZjH9H%2FLkl9sGo6XJT7p6HTDmU6p%2BTrvTS9zDmD1kYNqamzyMju50PeOQ%2FvOCR1cFaXsZIlB1hThULf9iO3XBdU4SH8W6fcXb8uWlAeH4hFbt7bJ6NbQTf4ao3v8Ck0rkwevr%2BqRVXQH5H11ANE3D%2BklbNCnI%2BF7cb8sjxIPA7wiQe%2BPRhlRkAf3VR6IHn%2F%2BTCghLq9BjqkAcG7NFSJmQz99bYSgMZDxTpt%2BS4rPYoY68Cxi7Lv5q9Ct4GRVZtratupAsNWqoJLMaW3vO%2FAeT9gRoIGVyozoqwV2skbT8Qqnm9YoN5LdQMaWyRd2HDga9IZKzp1uUyTO%2FgT773NFgJI2VluwpY%2B5Y3WigZIJnvIQyYNhVbG%2FtafQx%2Bn1kGiaw5ZjgW5yiutR7l6XrWS%2Bcvjy%2Fzs3CuhGMbi7nNy&X-Amz-Signature=a2934eed71d0f7be4b0709b2a4d0b3ec17aea4daf3433a43b37d786bfe33cc46&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY2UUE2R%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPfg4tElNfZhG7jXjMjb3B1aiImSuFrZRMJiU7V0LdUwIhAKA4ziFuC2DQuoIWcMaFqly%2BncEl8995OXqi55DAhDMjKv8DCCEQABoMNjM3NDIzMTgzODA1IgxBnN7LgPYybnuAEaoq3AMTAn91HycZmpsv%2FMFP77iE25N%2FUlZRHuL7BAEK90lRH6BK8TLp2xk054JrbrMX8osIEV5SJLtiaomdRD8mqCxBClDGXiUsXFnlWDPdi4GIch5pOwuY91PF6GKE0BV5aiediw09NWtmyI%2FMXCU3jVRUTRSg9UIIGhK7d2%2FRYIqGXewLKQoKwKwMns9Zou1Fr6iuSuQG8VBikYcQpM82elrVGv4ZTeKTQP6BGErUImyEZshLikJ2k6WBpkq%2Ft203Ty2yPshv8zy5LGEk7djWpBs9mq23C3ysuGyegPwGbsz2kkLGGKXUJMIdeKFN0z6hjBZJoRfinnSp5CovAQVVV%2FN%2BGLjnpNAPu2Fs%2B43%2B%2BnwM0nw%2FkngqeA3VZefXj88lu3U1wgOhRCmi4gseXPBkF0gknYa1nHz1gK3OHPZGkMzgLviTJdXNKqGIZxO1viZjH9H%2FLkl9sGo6XJT7p6HTDmU6p%2BTrvTS9zDmD1kYNqamzyMju50PeOQ%2FvOCR1cFaXsZIlB1hThULf9iO3XBdU4SH8W6fcXb8uWlAeH4hFbt7bJ6NbQTf4ao3v8Ck0rkwevr%2BqRVXQH5H11ANE3D%2BklbNCnI%2BF7cb8sjxIPA7wiQe%2BPRhlRkAf3VR6IHn%2F%2BTCghLq9BjqkAcG7NFSJmQz99bYSgMZDxTpt%2BS4rPYoY68Cxi7Lv5q9Ct4GRVZtratupAsNWqoJLMaW3vO%2FAeT9gRoIGVyozoqwV2skbT8Qqnm9YoN5LdQMaWyRd2HDga9IZKzp1uUyTO%2FgT773NFgJI2VluwpY%2B5Y3WigZIJnvIQyYNhVbG%2FtafQx%2Bn1kGiaw5ZjgW5yiutR7l6XrWS%2Bcvjy%2Fzs3CuhGMbi7nNy&X-Amz-Signature=7b799c8bcf2ba6caba02f31e0ac555b5319fe8e0ff876455a3e60990b4f1183f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY2UUE2R%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPfg4tElNfZhG7jXjMjb3B1aiImSuFrZRMJiU7V0LdUwIhAKA4ziFuC2DQuoIWcMaFqly%2BncEl8995OXqi55DAhDMjKv8DCCEQABoMNjM3NDIzMTgzODA1IgxBnN7LgPYybnuAEaoq3AMTAn91HycZmpsv%2FMFP77iE25N%2FUlZRHuL7BAEK90lRH6BK8TLp2xk054JrbrMX8osIEV5SJLtiaomdRD8mqCxBClDGXiUsXFnlWDPdi4GIch5pOwuY91PF6GKE0BV5aiediw09NWtmyI%2FMXCU3jVRUTRSg9UIIGhK7d2%2FRYIqGXewLKQoKwKwMns9Zou1Fr6iuSuQG8VBikYcQpM82elrVGv4ZTeKTQP6BGErUImyEZshLikJ2k6WBpkq%2Ft203Ty2yPshv8zy5LGEk7djWpBs9mq23C3ysuGyegPwGbsz2kkLGGKXUJMIdeKFN0z6hjBZJoRfinnSp5CovAQVVV%2FN%2BGLjnpNAPu2Fs%2B43%2B%2BnwM0nw%2FkngqeA3VZefXj88lu3U1wgOhRCmi4gseXPBkF0gknYa1nHz1gK3OHPZGkMzgLviTJdXNKqGIZxO1viZjH9H%2FLkl9sGo6XJT7p6HTDmU6p%2BTrvTS9zDmD1kYNqamzyMju50PeOQ%2FvOCR1cFaXsZIlB1hThULf9iO3XBdU4SH8W6fcXb8uWlAeH4hFbt7bJ6NbQTf4ao3v8Ck0rkwevr%2BqRVXQH5H11ANE3D%2BklbNCnI%2BF7cb8sjxIPA7wiQe%2BPRhlRkAf3VR6IHn%2F%2BTCghLq9BjqkAcG7NFSJmQz99bYSgMZDxTpt%2BS4rPYoY68Cxi7Lv5q9Ct4GRVZtratupAsNWqoJLMaW3vO%2FAeT9gRoIGVyozoqwV2skbT8Qqnm9YoN5LdQMaWyRd2HDga9IZKzp1uUyTO%2FgT773NFgJI2VluwpY%2B5Y3WigZIJnvIQyYNhVbG%2FtafQx%2Bn1kGiaw5ZjgW5yiutR7l6XrWS%2Bcvjy%2Fzs3CuhGMbi7nNy&X-Amz-Signature=5c32d2eb1c20b6489e0c1e84b6e66816b4ba24c438b1bc5e84fd56d4e600c51a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY2UUE2R%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPfg4tElNfZhG7jXjMjb3B1aiImSuFrZRMJiU7V0LdUwIhAKA4ziFuC2DQuoIWcMaFqly%2BncEl8995OXqi55DAhDMjKv8DCCEQABoMNjM3NDIzMTgzODA1IgxBnN7LgPYybnuAEaoq3AMTAn91HycZmpsv%2FMFP77iE25N%2FUlZRHuL7BAEK90lRH6BK8TLp2xk054JrbrMX8osIEV5SJLtiaomdRD8mqCxBClDGXiUsXFnlWDPdi4GIch5pOwuY91PF6GKE0BV5aiediw09NWtmyI%2FMXCU3jVRUTRSg9UIIGhK7d2%2FRYIqGXewLKQoKwKwMns9Zou1Fr6iuSuQG8VBikYcQpM82elrVGv4ZTeKTQP6BGErUImyEZshLikJ2k6WBpkq%2Ft203Ty2yPshv8zy5LGEk7djWpBs9mq23C3ysuGyegPwGbsz2kkLGGKXUJMIdeKFN0z6hjBZJoRfinnSp5CovAQVVV%2FN%2BGLjnpNAPu2Fs%2B43%2B%2BnwM0nw%2FkngqeA3VZefXj88lu3U1wgOhRCmi4gseXPBkF0gknYa1nHz1gK3OHPZGkMzgLviTJdXNKqGIZxO1viZjH9H%2FLkl9sGo6XJT7p6HTDmU6p%2BTrvTS9zDmD1kYNqamzyMju50PeOQ%2FvOCR1cFaXsZIlB1hThULf9iO3XBdU4SH8W6fcXb8uWlAeH4hFbt7bJ6NbQTf4ao3v8Ck0rkwevr%2BqRVXQH5H11ANE3D%2BklbNCnI%2BF7cb8sjxIPA7wiQe%2BPRhlRkAf3VR6IHn%2F%2BTCghLq9BjqkAcG7NFSJmQz99bYSgMZDxTpt%2BS4rPYoY68Cxi7Lv5q9Ct4GRVZtratupAsNWqoJLMaW3vO%2FAeT9gRoIGVyozoqwV2skbT8Qqnm9YoN5LdQMaWyRd2HDga9IZKzp1uUyTO%2FgT773NFgJI2VluwpY%2B5Y3WigZIJnvIQyYNhVbG%2FtafQx%2Bn1kGiaw5ZjgW5yiutR7l6XrWS%2Bcvjy%2Fzs3CuhGMbi7nNy&X-Amz-Signature=b6bae6b2ad11c29a042f544da182938ff5e69183faa4e2041e2356cebdfae706&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

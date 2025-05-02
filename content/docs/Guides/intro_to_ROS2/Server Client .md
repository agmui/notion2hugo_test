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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VUZCP47%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIFbFd3H0udItZfrXcQDP7XfwnAU6B%2F%2Fcmals%2F8gzTJFrAiEAzdew5ny1DrvmUeQ8MpHiaSNKvxr4Gv6yiv%2B%2Fb5FJIlUqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEpj1rMQGghwR4jgCrcA0XoUemLYZ8uqSrQCZDfQTarYNDD7O1fN67Rsb4rTJgnnAxlFaN5d7rrkfLqImkaqOj09zdCb5UPSfFg0A5ocNYFw1wX34XrvTtPoJyugtrQsXuBgRIp6YrG8s%2FrBXHFqTzZ8AVmThpW%2BnoTCFZAHJSJ%2Bka2PRMZI5l3Y8sREixoPLliWxrgkwrpPQvboJsmaao2An8RzrFlJAaY79ZyHJv5oiRbGdC%2Fa81z8zMVYsAoHJWHzGHAucpuF1R9D9izwlK%2FIVDL4wOXGe0jhIV8tLS7AC5PnWZWhM1HnRkvEd4GWG8cVFa2gkFgHraajXJpLMfZrR2nTrJFhQihsnoiaLZ4jVbHw9kZQJoyPRxquuWdR9Vqsz69LSpRvJ9fcoVF7AGjjb%2Bqm0fYG%2FmDlrRGnngAAzfjU67a0pkkaaZNFmU8be2qD%2BltJ15LTJ61dow37FDJ%2Bxbj575W4kv2mlfr105pEFCwdxdVblOy0kMfZeceoNde8HnVSI4UnHlDnwQ9IfC3UXBlhNoQRjcS%2Fuyv3jDHQ8fTvO%2BfQO4zPyAwhiRDozSfGX1YVef4zRjluMvi1jTqEbkMDgdrE8HXpgS6w0Xn9hKx1FAXCYhwiwp%2F9k0guuh2939qBVs8Ay8HMKPs0MAGOqUBzavZ%2BPoAKkB22IgsR69%2FM38eRGhJr1FiVJbI%2BY9YRt7rkzAsOGOdlw2NzBlb3lSn%2F%2Fon5VUSrrsacgVx0NEWmG2UTdNQY4GJ4sxYP8wg%2Fdx20HPaHmQvXDiImfZZIMoxeUyh8rs2k9leqxwJdnGqtrvQ%2FFUrjXZaMrJnqKuTmYfpknGWlsYhI6f4Mv5HDGRxrXHVLqLq8L3k3dCKRCPhmdgsJOEf&X-Amz-Signature=b362cf8410948ebde6ded2e8c66ae051240be2af744b6d8d06317bbb7ffaecd9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VUZCP47%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIFbFd3H0udItZfrXcQDP7XfwnAU6B%2F%2Fcmals%2F8gzTJFrAiEAzdew5ny1DrvmUeQ8MpHiaSNKvxr4Gv6yiv%2B%2Fb5FJIlUqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEpj1rMQGghwR4jgCrcA0XoUemLYZ8uqSrQCZDfQTarYNDD7O1fN67Rsb4rTJgnnAxlFaN5d7rrkfLqImkaqOj09zdCb5UPSfFg0A5ocNYFw1wX34XrvTtPoJyugtrQsXuBgRIp6YrG8s%2FrBXHFqTzZ8AVmThpW%2BnoTCFZAHJSJ%2Bka2PRMZI5l3Y8sREixoPLliWxrgkwrpPQvboJsmaao2An8RzrFlJAaY79ZyHJv5oiRbGdC%2Fa81z8zMVYsAoHJWHzGHAucpuF1R9D9izwlK%2FIVDL4wOXGe0jhIV8tLS7AC5PnWZWhM1HnRkvEd4GWG8cVFa2gkFgHraajXJpLMfZrR2nTrJFhQihsnoiaLZ4jVbHw9kZQJoyPRxquuWdR9Vqsz69LSpRvJ9fcoVF7AGjjb%2Bqm0fYG%2FmDlrRGnngAAzfjU67a0pkkaaZNFmU8be2qD%2BltJ15LTJ61dow37FDJ%2Bxbj575W4kv2mlfr105pEFCwdxdVblOy0kMfZeceoNde8HnVSI4UnHlDnwQ9IfC3UXBlhNoQRjcS%2Fuyv3jDHQ8fTvO%2BfQO4zPyAwhiRDozSfGX1YVef4zRjluMvi1jTqEbkMDgdrE8HXpgS6w0Xn9hKx1FAXCYhwiwp%2F9k0guuh2939qBVs8Ay8HMKPs0MAGOqUBzavZ%2BPoAKkB22IgsR69%2FM38eRGhJr1FiVJbI%2BY9YRt7rkzAsOGOdlw2NzBlb3lSn%2F%2Fon5VUSrrsacgVx0NEWmG2UTdNQY4GJ4sxYP8wg%2Fdx20HPaHmQvXDiImfZZIMoxeUyh8rs2k9leqxwJdnGqtrvQ%2FFUrjXZaMrJnqKuTmYfpknGWlsYhI6f4Mv5HDGRxrXHVLqLq8L3k3dCKRCPhmdgsJOEf&X-Amz-Signature=4d655a96d64c47d5814043ac3ec60a6aa63a502e4a5f1933e33bb01e796e8b1b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VUZCP47%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIFbFd3H0udItZfrXcQDP7XfwnAU6B%2F%2Fcmals%2F8gzTJFrAiEAzdew5ny1DrvmUeQ8MpHiaSNKvxr4Gv6yiv%2B%2Fb5FJIlUqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEpj1rMQGghwR4jgCrcA0XoUemLYZ8uqSrQCZDfQTarYNDD7O1fN67Rsb4rTJgnnAxlFaN5d7rrkfLqImkaqOj09zdCb5UPSfFg0A5ocNYFw1wX34XrvTtPoJyugtrQsXuBgRIp6YrG8s%2FrBXHFqTzZ8AVmThpW%2BnoTCFZAHJSJ%2Bka2PRMZI5l3Y8sREixoPLliWxrgkwrpPQvboJsmaao2An8RzrFlJAaY79ZyHJv5oiRbGdC%2Fa81z8zMVYsAoHJWHzGHAucpuF1R9D9izwlK%2FIVDL4wOXGe0jhIV8tLS7AC5PnWZWhM1HnRkvEd4GWG8cVFa2gkFgHraajXJpLMfZrR2nTrJFhQihsnoiaLZ4jVbHw9kZQJoyPRxquuWdR9Vqsz69LSpRvJ9fcoVF7AGjjb%2Bqm0fYG%2FmDlrRGnngAAzfjU67a0pkkaaZNFmU8be2qD%2BltJ15LTJ61dow37FDJ%2Bxbj575W4kv2mlfr105pEFCwdxdVblOy0kMfZeceoNde8HnVSI4UnHlDnwQ9IfC3UXBlhNoQRjcS%2Fuyv3jDHQ8fTvO%2BfQO4zPyAwhiRDozSfGX1YVef4zRjluMvi1jTqEbkMDgdrE8HXpgS6w0Xn9hKx1FAXCYhwiwp%2F9k0guuh2939qBVs8Ay8HMKPs0MAGOqUBzavZ%2BPoAKkB22IgsR69%2FM38eRGhJr1FiVJbI%2BY9YRt7rkzAsOGOdlw2NzBlb3lSn%2F%2Fon5VUSrrsacgVx0NEWmG2UTdNQY4GJ4sxYP8wg%2Fdx20HPaHmQvXDiImfZZIMoxeUyh8rs2k9leqxwJdnGqtrvQ%2FFUrjXZaMrJnqKuTmYfpknGWlsYhI6f4Mv5HDGRxrXHVLqLq8L3k3dCKRCPhmdgsJOEf&X-Amz-Signature=60a6418cb8e5c124a8d8f6ad36e4616149d8b3452e4d98b701eb55d8f5a52cf2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VUZCP47%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIFbFd3H0udItZfrXcQDP7XfwnAU6B%2F%2Fcmals%2F8gzTJFrAiEAzdew5ny1DrvmUeQ8MpHiaSNKvxr4Gv6yiv%2B%2Fb5FJIlUqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEpj1rMQGghwR4jgCrcA0XoUemLYZ8uqSrQCZDfQTarYNDD7O1fN67Rsb4rTJgnnAxlFaN5d7rrkfLqImkaqOj09zdCb5UPSfFg0A5ocNYFw1wX34XrvTtPoJyugtrQsXuBgRIp6YrG8s%2FrBXHFqTzZ8AVmThpW%2BnoTCFZAHJSJ%2Bka2PRMZI5l3Y8sREixoPLliWxrgkwrpPQvboJsmaao2An8RzrFlJAaY79ZyHJv5oiRbGdC%2Fa81z8zMVYsAoHJWHzGHAucpuF1R9D9izwlK%2FIVDL4wOXGe0jhIV8tLS7AC5PnWZWhM1HnRkvEd4GWG8cVFa2gkFgHraajXJpLMfZrR2nTrJFhQihsnoiaLZ4jVbHw9kZQJoyPRxquuWdR9Vqsz69LSpRvJ9fcoVF7AGjjb%2Bqm0fYG%2FmDlrRGnngAAzfjU67a0pkkaaZNFmU8be2qD%2BltJ15LTJ61dow37FDJ%2Bxbj575W4kv2mlfr105pEFCwdxdVblOy0kMfZeceoNde8HnVSI4UnHlDnwQ9IfC3UXBlhNoQRjcS%2Fuyv3jDHQ8fTvO%2BfQO4zPyAwhiRDozSfGX1YVef4zRjluMvi1jTqEbkMDgdrE8HXpgS6w0Xn9hKx1FAXCYhwiwp%2F9k0guuh2939qBVs8Ay8HMKPs0MAGOqUBzavZ%2BPoAKkB22IgsR69%2FM38eRGhJr1FiVJbI%2BY9YRt7rkzAsOGOdlw2NzBlb3lSn%2F%2Fon5VUSrrsacgVx0NEWmG2UTdNQY4GJ4sxYP8wg%2Fdx20HPaHmQvXDiImfZZIMoxeUyh8rs2k9leqxwJdnGqtrvQ%2FFUrjXZaMrJnqKuTmYfpknGWlsYhI6f4Mv5HDGRxrXHVLqLq8L3k3dCKRCPhmdgsJOEf&X-Amz-Signature=3c0df4b8e713f59707a67b065f7a0ec17133e148a0fd3d061091ca52cdd6ee55&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VUZCP47%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIFbFd3H0udItZfrXcQDP7XfwnAU6B%2F%2Fcmals%2F8gzTJFrAiEAzdew5ny1DrvmUeQ8MpHiaSNKvxr4Gv6yiv%2B%2Fb5FJIlUqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEpj1rMQGghwR4jgCrcA0XoUemLYZ8uqSrQCZDfQTarYNDD7O1fN67Rsb4rTJgnnAxlFaN5d7rrkfLqImkaqOj09zdCb5UPSfFg0A5ocNYFw1wX34XrvTtPoJyugtrQsXuBgRIp6YrG8s%2FrBXHFqTzZ8AVmThpW%2BnoTCFZAHJSJ%2Bka2PRMZI5l3Y8sREixoPLliWxrgkwrpPQvboJsmaao2An8RzrFlJAaY79ZyHJv5oiRbGdC%2Fa81z8zMVYsAoHJWHzGHAucpuF1R9D9izwlK%2FIVDL4wOXGe0jhIV8tLS7AC5PnWZWhM1HnRkvEd4GWG8cVFa2gkFgHraajXJpLMfZrR2nTrJFhQihsnoiaLZ4jVbHw9kZQJoyPRxquuWdR9Vqsz69LSpRvJ9fcoVF7AGjjb%2Bqm0fYG%2FmDlrRGnngAAzfjU67a0pkkaaZNFmU8be2qD%2BltJ15LTJ61dow37FDJ%2Bxbj575W4kv2mlfr105pEFCwdxdVblOy0kMfZeceoNde8HnVSI4UnHlDnwQ9IfC3UXBlhNoQRjcS%2Fuyv3jDHQ8fTvO%2BfQO4zPyAwhiRDozSfGX1YVef4zRjluMvi1jTqEbkMDgdrE8HXpgS6w0Xn9hKx1FAXCYhwiwp%2F9k0guuh2939qBVs8Ay8HMKPs0MAGOqUBzavZ%2BPoAKkB22IgsR69%2FM38eRGhJr1FiVJbI%2BY9YRt7rkzAsOGOdlw2NzBlb3lSn%2F%2Fon5VUSrrsacgVx0NEWmG2UTdNQY4GJ4sxYP8wg%2Fdx20HPaHmQvXDiImfZZIMoxeUyh8rs2k9leqxwJdnGqtrvQ%2FFUrjXZaMrJnqKuTmYfpknGWlsYhI6f4Mv5HDGRxrXHVLqLq8L3k3dCKRCPhmdgsJOEf&X-Amz-Signature=5f73107d65133b86d9d76963dbbab123880d80ddc6459b344a5f215723e520a7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

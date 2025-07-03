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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNYFBKJW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIBJJxAXxbTDDpcRAXHcvA%2FHYFqyiaU4yNC2sdJtAxTKOAiAGGTn94BnvAr%2B69Y2gflIqgH6eZ6NZSRO0H9VjWu5fbCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMzWhmlGr0G%2BhkzTqWKtwD8QpUPuiqiLp7fCYGHAkJsEz9Yt1DfkGjYe0g7PHilP4H4AeMneoE5BMhNbz7ijetYKPCm8v8KqTdn9dOgeIJug6ZIdQYU1q6S%2BSIMo%2BuSgfWUUK5rzY2qwoCZt1aHKAK%2BdTmZjioYWERh2McFVDG47zY0Tv3IwZliM2Nl8g1Z2E6%2Fv%2B%2Brf%2FLDCP%2BFjWrJso%2BisXZWvlQ%2F8M%2BuZCo68kpY%2Bd7QBO%2Fuae3u8gL83gcaZouBXDImTG7WKF%2F%2BUg0Dr3B5U59zr%2BP3%2Bsmhgns1iD5NXj9NZygEDkKPeoNGd47V8ADUr5zoIBDX6ntbXmktqmmkF9vyAtoP5wcPBT8DUnroUm%2BtQjJgAvuO7mjuhmocLcNtNXq8Q0WjAzLNWfNAMICr7fotL7IkvcFZST3QfVRK6UQFpQDGUdh2SrDhLs54VYU9wRtNZSGZsYFcRlnWdVmzzjzF289ohT8XyXgJ9JzNrp9%2BNlpsKECeWsN%2Bf8WKRh4n%2B4WSAnJDZxonaYz0YpA%2Fb4VkZntEtn%2F%2Fa88ab188b%2BTZ2s%2BOH2%2FJOmzY32rtxG9ue29mojgMFWhVxy0yglzJqMUBGidEhu3SzgAdiv6HZwWuqZnvFhLTWMbAjFOgBYoLs0nvYaClVSMtucw%2BbiawwY6pgH9La6aG3HexisxWybXHQZKHsUsQuspzYt6px79QIM1K9AjQtXTsbbEU%2FguMoIxoUCrCb2xtmtb9RFm2f5qlp7jaHmoyAbQQnAddwbm9etNQfvmgkaXkk%2Btj4%2F4YL35yt8GFvTePhDl%2BC6cpvI0RWYFeOtszvyCH4Tvh7XA0qsaD8EV2zynAJhS%2B3ikUbp%2FcS7eP30heDIGhasOtBGbXzA5ty2EpwrC&X-Amz-Signature=702875d22d51a66113ece2805356e545c3628df9136cb372ef12c705173ce470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNYFBKJW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIBJJxAXxbTDDpcRAXHcvA%2FHYFqyiaU4yNC2sdJtAxTKOAiAGGTn94BnvAr%2B69Y2gflIqgH6eZ6NZSRO0H9VjWu5fbCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMzWhmlGr0G%2BhkzTqWKtwD8QpUPuiqiLp7fCYGHAkJsEz9Yt1DfkGjYe0g7PHilP4H4AeMneoE5BMhNbz7ijetYKPCm8v8KqTdn9dOgeIJug6ZIdQYU1q6S%2BSIMo%2BuSgfWUUK5rzY2qwoCZt1aHKAK%2BdTmZjioYWERh2McFVDG47zY0Tv3IwZliM2Nl8g1Z2E6%2Fv%2B%2Brf%2FLDCP%2BFjWrJso%2BisXZWvlQ%2F8M%2BuZCo68kpY%2Bd7QBO%2Fuae3u8gL83gcaZouBXDImTG7WKF%2F%2BUg0Dr3B5U59zr%2BP3%2Bsmhgns1iD5NXj9NZygEDkKPeoNGd47V8ADUr5zoIBDX6ntbXmktqmmkF9vyAtoP5wcPBT8DUnroUm%2BtQjJgAvuO7mjuhmocLcNtNXq8Q0WjAzLNWfNAMICr7fotL7IkvcFZST3QfVRK6UQFpQDGUdh2SrDhLs54VYU9wRtNZSGZsYFcRlnWdVmzzjzF289ohT8XyXgJ9JzNrp9%2BNlpsKECeWsN%2Bf8WKRh4n%2B4WSAnJDZxonaYz0YpA%2Fb4VkZntEtn%2F%2Fa88ab188b%2BTZ2s%2BOH2%2FJOmzY32rtxG9ue29mojgMFWhVxy0yglzJqMUBGidEhu3SzgAdiv6HZwWuqZnvFhLTWMbAjFOgBYoLs0nvYaClVSMtucw%2BbiawwY6pgH9La6aG3HexisxWybXHQZKHsUsQuspzYt6px79QIM1K9AjQtXTsbbEU%2FguMoIxoUCrCb2xtmtb9RFm2f5qlp7jaHmoyAbQQnAddwbm9etNQfvmgkaXkk%2Btj4%2F4YL35yt8GFvTePhDl%2BC6cpvI0RWYFeOtszvyCH4Tvh7XA0qsaD8EV2zynAJhS%2B3ikUbp%2FcS7eP30heDIGhasOtBGbXzA5ty2EpwrC&X-Amz-Signature=724302da238226ebe68b1de90afc9dcd062037f1edc13951ead6aa35f235c675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNYFBKJW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIBJJxAXxbTDDpcRAXHcvA%2FHYFqyiaU4yNC2sdJtAxTKOAiAGGTn94BnvAr%2B69Y2gflIqgH6eZ6NZSRO0H9VjWu5fbCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMzWhmlGr0G%2BhkzTqWKtwD8QpUPuiqiLp7fCYGHAkJsEz9Yt1DfkGjYe0g7PHilP4H4AeMneoE5BMhNbz7ijetYKPCm8v8KqTdn9dOgeIJug6ZIdQYU1q6S%2BSIMo%2BuSgfWUUK5rzY2qwoCZt1aHKAK%2BdTmZjioYWERh2McFVDG47zY0Tv3IwZliM2Nl8g1Z2E6%2Fv%2B%2Brf%2FLDCP%2BFjWrJso%2BisXZWvlQ%2F8M%2BuZCo68kpY%2Bd7QBO%2Fuae3u8gL83gcaZouBXDImTG7WKF%2F%2BUg0Dr3B5U59zr%2BP3%2Bsmhgns1iD5NXj9NZygEDkKPeoNGd47V8ADUr5zoIBDX6ntbXmktqmmkF9vyAtoP5wcPBT8DUnroUm%2BtQjJgAvuO7mjuhmocLcNtNXq8Q0WjAzLNWfNAMICr7fotL7IkvcFZST3QfVRK6UQFpQDGUdh2SrDhLs54VYU9wRtNZSGZsYFcRlnWdVmzzjzF289ohT8XyXgJ9JzNrp9%2BNlpsKECeWsN%2Bf8WKRh4n%2B4WSAnJDZxonaYz0YpA%2Fb4VkZntEtn%2F%2Fa88ab188b%2BTZ2s%2BOH2%2FJOmzY32rtxG9ue29mojgMFWhVxy0yglzJqMUBGidEhu3SzgAdiv6HZwWuqZnvFhLTWMbAjFOgBYoLs0nvYaClVSMtucw%2BbiawwY6pgH9La6aG3HexisxWybXHQZKHsUsQuspzYt6px79QIM1K9AjQtXTsbbEU%2FguMoIxoUCrCb2xtmtb9RFm2f5qlp7jaHmoyAbQQnAddwbm9etNQfvmgkaXkk%2Btj4%2F4YL35yt8GFvTePhDl%2BC6cpvI0RWYFeOtszvyCH4Tvh7XA0qsaD8EV2zynAJhS%2B3ikUbp%2FcS7eP30heDIGhasOtBGbXzA5ty2EpwrC&X-Amz-Signature=ff1236547c17650dfda663a448635243a7a6b5f841c8d9d830e90bf8ff481ce7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNYFBKJW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIBJJxAXxbTDDpcRAXHcvA%2FHYFqyiaU4yNC2sdJtAxTKOAiAGGTn94BnvAr%2B69Y2gflIqgH6eZ6NZSRO0H9VjWu5fbCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMzWhmlGr0G%2BhkzTqWKtwD8QpUPuiqiLp7fCYGHAkJsEz9Yt1DfkGjYe0g7PHilP4H4AeMneoE5BMhNbz7ijetYKPCm8v8KqTdn9dOgeIJug6ZIdQYU1q6S%2BSIMo%2BuSgfWUUK5rzY2qwoCZt1aHKAK%2BdTmZjioYWERh2McFVDG47zY0Tv3IwZliM2Nl8g1Z2E6%2Fv%2B%2Brf%2FLDCP%2BFjWrJso%2BisXZWvlQ%2F8M%2BuZCo68kpY%2Bd7QBO%2Fuae3u8gL83gcaZouBXDImTG7WKF%2F%2BUg0Dr3B5U59zr%2BP3%2Bsmhgns1iD5NXj9NZygEDkKPeoNGd47V8ADUr5zoIBDX6ntbXmktqmmkF9vyAtoP5wcPBT8DUnroUm%2BtQjJgAvuO7mjuhmocLcNtNXq8Q0WjAzLNWfNAMICr7fotL7IkvcFZST3QfVRK6UQFpQDGUdh2SrDhLs54VYU9wRtNZSGZsYFcRlnWdVmzzjzF289ohT8XyXgJ9JzNrp9%2BNlpsKECeWsN%2Bf8WKRh4n%2B4WSAnJDZxonaYz0YpA%2Fb4VkZntEtn%2F%2Fa88ab188b%2BTZ2s%2BOH2%2FJOmzY32rtxG9ue29mojgMFWhVxy0yglzJqMUBGidEhu3SzgAdiv6HZwWuqZnvFhLTWMbAjFOgBYoLs0nvYaClVSMtucw%2BbiawwY6pgH9La6aG3HexisxWybXHQZKHsUsQuspzYt6px79QIM1K9AjQtXTsbbEU%2FguMoIxoUCrCb2xtmtb9RFm2f5qlp7jaHmoyAbQQnAddwbm9etNQfvmgkaXkk%2Btj4%2F4YL35yt8GFvTePhDl%2BC6cpvI0RWYFeOtszvyCH4Tvh7XA0qsaD8EV2zynAJhS%2B3ikUbp%2FcS7eP30heDIGhasOtBGbXzA5ty2EpwrC&X-Amz-Signature=bda0fd9231c1fd6095449ea38bdb8379297c04e5a986943a35ca5bdc8ac380d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNYFBKJW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIBJJxAXxbTDDpcRAXHcvA%2FHYFqyiaU4yNC2sdJtAxTKOAiAGGTn94BnvAr%2B69Y2gflIqgH6eZ6NZSRO0H9VjWu5fbCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMzWhmlGr0G%2BhkzTqWKtwD8QpUPuiqiLp7fCYGHAkJsEz9Yt1DfkGjYe0g7PHilP4H4AeMneoE5BMhNbz7ijetYKPCm8v8KqTdn9dOgeIJug6ZIdQYU1q6S%2BSIMo%2BuSgfWUUK5rzY2qwoCZt1aHKAK%2BdTmZjioYWERh2McFVDG47zY0Tv3IwZliM2Nl8g1Z2E6%2Fv%2B%2Brf%2FLDCP%2BFjWrJso%2BisXZWvlQ%2F8M%2BuZCo68kpY%2Bd7QBO%2Fuae3u8gL83gcaZouBXDImTG7WKF%2F%2BUg0Dr3B5U59zr%2BP3%2Bsmhgns1iD5NXj9NZygEDkKPeoNGd47V8ADUr5zoIBDX6ntbXmktqmmkF9vyAtoP5wcPBT8DUnroUm%2BtQjJgAvuO7mjuhmocLcNtNXq8Q0WjAzLNWfNAMICr7fotL7IkvcFZST3QfVRK6UQFpQDGUdh2SrDhLs54VYU9wRtNZSGZsYFcRlnWdVmzzjzF289ohT8XyXgJ9JzNrp9%2BNlpsKECeWsN%2Bf8WKRh4n%2B4WSAnJDZxonaYz0YpA%2Fb4VkZntEtn%2F%2Fa88ab188b%2BTZ2s%2BOH2%2FJOmzY32rtxG9ue29mojgMFWhVxy0yglzJqMUBGidEhu3SzgAdiv6HZwWuqZnvFhLTWMbAjFOgBYoLs0nvYaClVSMtucw%2BbiawwY6pgH9La6aG3HexisxWybXHQZKHsUsQuspzYt6px79QIM1K9AjQtXTsbbEU%2FguMoIxoUCrCb2xtmtb9RFm2f5qlp7jaHmoyAbQQnAddwbm9etNQfvmgkaXkk%2Btj4%2F4YL35yt8GFvTePhDl%2BC6cpvI0RWYFeOtszvyCH4Tvh7XA0qsaD8EV2zynAJhS%2B3ikUbp%2FcS7eP30heDIGhasOtBGbXzA5ty2EpwrC&X-Amz-Signature=3f4104b7d3d02c0d8cfd9689ae03f6fc8b5fab3399d58599652bc315209fcc25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

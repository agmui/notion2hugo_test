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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OA3ONPE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA4oKtsMPj1pMEddsenrMYf9GbDNRss68C6xTieNHIJwIhAIz%2B3wfRPZTNTC11ld9O2k8zteoe5sBCWJ9ZKPbg2IqHKv8DCHQQABoMNjM3NDIzMTgzODA1Igw4IUKis62UX1Q6BZIq3ANjl1UqIKL2DzQi7PHVGTOdKRGQ6X5iXLkZ0ESVg7Cf6Tgcyo9vtlktv%2FBoFtkRb2aL6XQ9oLYcfHHJqlixRkWuRY2KMeNeSM3OTRGZTRFomK8NYJMX0SOkwIFyt%2FImIB00l2iWgGImZkvQT76HzQzGZkajCZnilVBV%2BqjpCCkdcY5iKdVQ9QQFvlW31OgNVQGbuC1nzjfnXrMGIna43Rffyw3ely3Uv%2FQyJopQV6bDwUrvpZTIwzH1lz0Ik9iBoERY6wstTMH18EbU6VIj5ssNjgGVeqInF5dv7BKGM6kAjeMxumsSz3KZcliTJVkLDI2BGqGQTRCNHGvW%2BaNo5f6e06LURy7MhnwtnWMH0CCmIBrlnvSGrOAnF%2FHmNKS1HxnKMb3dBGtZprjxxr5rU8JuRFuqImwgTt94rF2X6iQwDm0y3HF23VLUAAYsUAVTz6NCj%2FKNn6%2BXSi7KtcN2aZn0rhND26O3eHEQer00lIm7W6lMIxXBHt7P5yoVDarAqfc44VGKMCDIIx8Hmnf1r5Ql%2FO3WO6FueM%2FgEL6g3ctJeI%2B4aQoHm70SZV8SONOUYEl%2BkqHGlESS6HvEaBngEBTx6zwWT7JJm50wSUuwBgsOLIAH15A%2BcUnLYr73EjC8yL3ABjqkAQenPMBfZJlJEzYLwyBy4b%2F4dMaZqZ6k2PP0fwpTdhZfbLf9FrfTmKO8AMzv%2Fiz6bCxbDW%2B95h31RxYMjwW4KUNjqgGjE1bScZk5syVEKDtCUIyKVpK1ZZYfpTCCRTAqbcLI3lP7asGqYok3Tis8OIMy63MjPVahroPrkeNuGFkg1IYZNQcnsMnWnnz4nfTA5UaUuano8Uas5oo8xKcDWAklv8Kx&X-Amz-Signature=cc1c4749620fa001d6a9a8ab5407effb9721090068c85b7e6182d9dda012f34a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OA3ONPE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA4oKtsMPj1pMEddsenrMYf9GbDNRss68C6xTieNHIJwIhAIz%2B3wfRPZTNTC11ld9O2k8zteoe5sBCWJ9ZKPbg2IqHKv8DCHQQABoMNjM3NDIzMTgzODA1Igw4IUKis62UX1Q6BZIq3ANjl1UqIKL2DzQi7PHVGTOdKRGQ6X5iXLkZ0ESVg7Cf6Tgcyo9vtlktv%2FBoFtkRb2aL6XQ9oLYcfHHJqlixRkWuRY2KMeNeSM3OTRGZTRFomK8NYJMX0SOkwIFyt%2FImIB00l2iWgGImZkvQT76HzQzGZkajCZnilVBV%2BqjpCCkdcY5iKdVQ9QQFvlW31OgNVQGbuC1nzjfnXrMGIna43Rffyw3ely3Uv%2FQyJopQV6bDwUrvpZTIwzH1lz0Ik9iBoERY6wstTMH18EbU6VIj5ssNjgGVeqInF5dv7BKGM6kAjeMxumsSz3KZcliTJVkLDI2BGqGQTRCNHGvW%2BaNo5f6e06LURy7MhnwtnWMH0CCmIBrlnvSGrOAnF%2FHmNKS1HxnKMb3dBGtZprjxxr5rU8JuRFuqImwgTt94rF2X6iQwDm0y3HF23VLUAAYsUAVTz6NCj%2FKNn6%2BXSi7KtcN2aZn0rhND26O3eHEQer00lIm7W6lMIxXBHt7P5yoVDarAqfc44VGKMCDIIx8Hmnf1r5Ql%2FO3WO6FueM%2FgEL6g3ctJeI%2B4aQoHm70SZV8SONOUYEl%2BkqHGlESS6HvEaBngEBTx6zwWT7JJm50wSUuwBgsOLIAH15A%2BcUnLYr73EjC8yL3ABjqkAQenPMBfZJlJEzYLwyBy4b%2F4dMaZqZ6k2PP0fwpTdhZfbLf9FrfTmKO8AMzv%2Fiz6bCxbDW%2B95h31RxYMjwW4KUNjqgGjE1bScZk5syVEKDtCUIyKVpK1ZZYfpTCCRTAqbcLI3lP7asGqYok3Tis8OIMy63MjPVahroPrkeNuGFkg1IYZNQcnsMnWnnz4nfTA5UaUuano8Uas5oo8xKcDWAklv8Kx&X-Amz-Signature=cf24091817ce8b08d9992c33cd20038b0a4e2c18d3e15ee36c7c3fab72802db1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OA3ONPE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA4oKtsMPj1pMEddsenrMYf9GbDNRss68C6xTieNHIJwIhAIz%2B3wfRPZTNTC11ld9O2k8zteoe5sBCWJ9ZKPbg2IqHKv8DCHQQABoMNjM3NDIzMTgzODA1Igw4IUKis62UX1Q6BZIq3ANjl1UqIKL2DzQi7PHVGTOdKRGQ6X5iXLkZ0ESVg7Cf6Tgcyo9vtlktv%2FBoFtkRb2aL6XQ9oLYcfHHJqlixRkWuRY2KMeNeSM3OTRGZTRFomK8NYJMX0SOkwIFyt%2FImIB00l2iWgGImZkvQT76HzQzGZkajCZnilVBV%2BqjpCCkdcY5iKdVQ9QQFvlW31OgNVQGbuC1nzjfnXrMGIna43Rffyw3ely3Uv%2FQyJopQV6bDwUrvpZTIwzH1lz0Ik9iBoERY6wstTMH18EbU6VIj5ssNjgGVeqInF5dv7BKGM6kAjeMxumsSz3KZcliTJVkLDI2BGqGQTRCNHGvW%2BaNo5f6e06LURy7MhnwtnWMH0CCmIBrlnvSGrOAnF%2FHmNKS1HxnKMb3dBGtZprjxxr5rU8JuRFuqImwgTt94rF2X6iQwDm0y3HF23VLUAAYsUAVTz6NCj%2FKNn6%2BXSi7KtcN2aZn0rhND26O3eHEQer00lIm7W6lMIxXBHt7P5yoVDarAqfc44VGKMCDIIx8Hmnf1r5Ql%2FO3WO6FueM%2FgEL6g3ctJeI%2B4aQoHm70SZV8SONOUYEl%2BkqHGlESS6HvEaBngEBTx6zwWT7JJm50wSUuwBgsOLIAH15A%2BcUnLYr73EjC8yL3ABjqkAQenPMBfZJlJEzYLwyBy4b%2F4dMaZqZ6k2PP0fwpTdhZfbLf9FrfTmKO8AMzv%2Fiz6bCxbDW%2B95h31RxYMjwW4KUNjqgGjE1bScZk5syVEKDtCUIyKVpK1ZZYfpTCCRTAqbcLI3lP7asGqYok3Tis8OIMy63MjPVahroPrkeNuGFkg1IYZNQcnsMnWnnz4nfTA5UaUuano8Uas5oo8xKcDWAklv8Kx&X-Amz-Signature=ab3fe142084b3835ba81d7ffec525c5233913a0f7a3a9de2f3357cb3c17ee35b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OA3ONPE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA4oKtsMPj1pMEddsenrMYf9GbDNRss68C6xTieNHIJwIhAIz%2B3wfRPZTNTC11ld9O2k8zteoe5sBCWJ9ZKPbg2IqHKv8DCHQQABoMNjM3NDIzMTgzODA1Igw4IUKis62UX1Q6BZIq3ANjl1UqIKL2DzQi7PHVGTOdKRGQ6X5iXLkZ0ESVg7Cf6Tgcyo9vtlktv%2FBoFtkRb2aL6XQ9oLYcfHHJqlixRkWuRY2KMeNeSM3OTRGZTRFomK8NYJMX0SOkwIFyt%2FImIB00l2iWgGImZkvQT76HzQzGZkajCZnilVBV%2BqjpCCkdcY5iKdVQ9QQFvlW31OgNVQGbuC1nzjfnXrMGIna43Rffyw3ely3Uv%2FQyJopQV6bDwUrvpZTIwzH1lz0Ik9iBoERY6wstTMH18EbU6VIj5ssNjgGVeqInF5dv7BKGM6kAjeMxumsSz3KZcliTJVkLDI2BGqGQTRCNHGvW%2BaNo5f6e06LURy7MhnwtnWMH0CCmIBrlnvSGrOAnF%2FHmNKS1HxnKMb3dBGtZprjxxr5rU8JuRFuqImwgTt94rF2X6iQwDm0y3HF23VLUAAYsUAVTz6NCj%2FKNn6%2BXSi7KtcN2aZn0rhND26O3eHEQer00lIm7W6lMIxXBHt7P5yoVDarAqfc44VGKMCDIIx8Hmnf1r5Ql%2FO3WO6FueM%2FgEL6g3ctJeI%2B4aQoHm70SZV8SONOUYEl%2BkqHGlESS6HvEaBngEBTx6zwWT7JJm50wSUuwBgsOLIAH15A%2BcUnLYr73EjC8yL3ABjqkAQenPMBfZJlJEzYLwyBy4b%2F4dMaZqZ6k2PP0fwpTdhZfbLf9FrfTmKO8AMzv%2Fiz6bCxbDW%2B95h31RxYMjwW4KUNjqgGjE1bScZk5syVEKDtCUIyKVpK1ZZYfpTCCRTAqbcLI3lP7asGqYok3Tis8OIMy63MjPVahroPrkeNuGFkg1IYZNQcnsMnWnnz4nfTA5UaUuano8Uas5oo8xKcDWAklv8Kx&X-Amz-Signature=68801d3e3694cdfb9436eaf6fc2fa900ee67391e41002389ede96fe8add34e27&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OA3ONPE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA4oKtsMPj1pMEddsenrMYf9GbDNRss68C6xTieNHIJwIhAIz%2B3wfRPZTNTC11ld9O2k8zteoe5sBCWJ9ZKPbg2IqHKv8DCHQQABoMNjM3NDIzMTgzODA1Igw4IUKis62UX1Q6BZIq3ANjl1UqIKL2DzQi7PHVGTOdKRGQ6X5iXLkZ0ESVg7Cf6Tgcyo9vtlktv%2FBoFtkRb2aL6XQ9oLYcfHHJqlixRkWuRY2KMeNeSM3OTRGZTRFomK8NYJMX0SOkwIFyt%2FImIB00l2iWgGImZkvQT76HzQzGZkajCZnilVBV%2BqjpCCkdcY5iKdVQ9QQFvlW31OgNVQGbuC1nzjfnXrMGIna43Rffyw3ely3Uv%2FQyJopQV6bDwUrvpZTIwzH1lz0Ik9iBoERY6wstTMH18EbU6VIj5ssNjgGVeqInF5dv7BKGM6kAjeMxumsSz3KZcliTJVkLDI2BGqGQTRCNHGvW%2BaNo5f6e06LURy7MhnwtnWMH0CCmIBrlnvSGrOAnF%2FHmNKS1HxnKMb3dBGtZprjxxr5rU8JuRFuqImwgTt94rF2X6iQwDm0y3HF23VLUAAYsUAVTz6NCj%2FKNn6%2BXSi7KtcN2aZn0rhND26O3eHEQer00lIm7W6lMIxXBHt7P5yoVDarAqfc44VGKMCDIIx8Hmnf1r5Ql%2FO3WO6FueM%2FgEL6g3ctJeI%2B4aQoHm70SZV8SONOUYEl%2BkqHGlESS6HvEaBngEBTx6zwWT7JJm50wSUuwBgsOLIAH15A%2BcUnLYr73EjC8yL3ABjqkAQenPMBfZJlJEzYLwyBy4b%2F4dMaZqZ6k2PP0fwpTdhZfbLf9FrfTmKO8AMzv%2Fiz6bCxbDW%2B95h31RxYMjwW4KUNjqgGjE1bScZk5syVEKDtCUIyKVpK1ZZYfpTCCRTAqbcLI3lP7asGqYok3Tis8OIMy63MjPVahroPrkeNuGFkg1IYZNQcnsMnWnnz4nfTA5UaUuano8Uas5oo8xKcDWAklv8Kx&X-Amz-Signature=b6d3f383b58884cf7ff04ef27aa670b3085ff60da65146b312a77914df6bbd0a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

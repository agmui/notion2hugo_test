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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V3XGU3K%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDF%2BnyIrsfeyV1Myz300Bbi9EpaB2nrZTc3LJtDqOzxeQIhAJSJ0z%2FLuK7%2FWyRbZ6Y01W4rNmk3p5yLspmVTBXiICuFKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8lpKsa0IRmGNlg0Uq3AOnmnK994vcpmfdlRzZvb%2BV100GZi2QzKao7YrH%2BN%2FK67YSgD4JC52nN0ivMGH0xd5uVneB2X1d458vuY86cakhN%2BupQctJXcPWix%2F%2FAZ5Ng8mxbXHmwYBbZQI8QwUhlVetaPpwLd2MjEZBteUpAUyMmR2066pLvhdwoInsr3S%2Fcqe8cJKXXKlpeZSKnI9fgyMtWn%2Fvbf1ndbiZrI0t3ReVMK%2F%2BF8P1TZxgjx6oel%2FYn8WNqczFatwlewblIE3A1zCG2%2B4L5WNVdlfKL0N68QZpLaXMpEt2T4vX64TbWKdTxJO7uTzEFK1ZpC377qXqy9KGyDeyUqvdfV8b%2BoAiSNBQrwHsZUSsCUh0VeWlnwYKsRN10gfrs9YvAteQXMoc3OWGVafDl81dfKLLSdJFMgb4%2BcK52shWWG57Wxs%2Be%2FZ0zIPKcqRW9BWqAx5P8AoQcO%2BhKSN0nl8Y2%2F905Re%2Fmh1wMotNrBLDl3JLScapnIdxN7ROvP0zYMnXfhl70DEl1Aad9KOFgyKpURN%2B97UFPDWEi26xpdscNM%2FMhqPQluiyrGLJtcx6Jrr5rhH1yeEn3X0W0%2BBmcUWPOXfKKZEhHDmJ1yhQDYPUHDRB6nilTZP0ciNeALgkRadGFzqvLzCchYXBBjqkAQ0XpiuHp%2Flnn5FYCMiTfL88NmFCW2QX8tvU6reGPw9%2B5s0agZCL%2BgHSQG420J4Y%2B6mG%2FM0X9hkYo50OZwPlc2B%2FQ8H7EFhtF1kIQcLo18bRj%2BkAG46LgN9fpvY7rfn1tLsUcQ2AGdNO8fZgJK6NqqkNUj%2BesSBllTP8ANV1fJN4nM3pNBxJg5YaVhrwXT7YLnPfhg1EjOzr5ATJzblVXC4pBLLD&X-Amz-Signature=6563c8adb47a6725e892fc3b1c604036b4e63c63ba81d0a515aa918178af0b6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V3XGU3K%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDF%2BnyIrsfeyV1Myz300Bbi9EpaB2nrZTc3LJtDqOzxeQIhAJSJ0z%2FLuK7%2FWyRbZ6Y01W4rNmk3p5yLspmVTBXiICuFKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8lpKsa0IRmGNlg0Uq3AOnmnK994vcpmfdlRzZvb%2BV100GZi2QzKao7YrH%2BN%2FK67YSgD4JC52nN0ivMGH0xd5uVneB2X1d458vuY86cakhN%2BupQctJXcPWix%2F%2FAZ5Ng8mxbXHmwYBbZQI8QwUhlVetaPpwLd2MjEZBteUpAUyMmR2066pLvhdwoInsr3S%2Fcqe8cJKXXKlpeZSKnI9fgyMtWn%2Fvbf1ndbiZrI0t3ReVMK%2F%2BF8P1TZxgjx6oel%2FYn8WNqczFatwlewblIE3A1zCG2%2B4L5WNVdlfKL0N68QZpLaXMpEt2T4vX64TbWKdTxJO7uTzEFK1ZpC377qXqy9KGyDeyUqvdfV8b%2BoAiSNBQrwHsZUSsCUh0VeWlnwYKsRN10gfrs9YvAteQXMoc3OWGVafDl81dfKLLSdJFMgb4%2BcK52shWWG57Wxs%2Be%2FZ0zIPKcqRW9BWqAx5P8AoQcO%2BhKSN0nl8Y2%2F905Re%2Fmh1wMotNrBLDl3JLScapnIdxN7ROvP0zYMnXfhl70DEl1Aad9KOFgyKpURN%2B97UFPDWEi26xpdscNM%2FMhqPQluiyrGLJtcx6Jrr5rhH1yeEn3X0W0%2BBmcUWPOXfKKZEhHDmJ1yhQDYPUHDRB6nilTZP0ciNeALgkRadGFzqvLzCchYXBBjqkAQ0XpiuHp%2Flnn5FYCMiTfL88NmFCW2QX8tvU6reGPw9%2B5s0agZCL%2BgHSQG420J4Y%2B6mG%2FM0X9hkYo50OZwPlc2B%2FQ8H7EFhtF1kIQcLo18bRj%2BkAG46LgN9fpvY7rfn1tLsUcQ2AGdNO8fZgJK6NqqkNUj%2BesSBllTP8ANV1fJN4nM3pNBxJg5YaVhrwXT7YLnPfhg1EjOzr5ATJzblVXC4pBLLD&X-Amz-Signature=ffd9f0a6a421e3c38a1f1df4ae94a8d6fb60d7164aabfa9bef42669daa3c44dc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V3XGU3K%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDF%2BnyIrsfeyV1Myz300Bbi9EpaB2nrZTc3LJtDqOzxeQIhAJSJ0z%2FLuK7%2FWyRbZ6Y01W4rNmk3p5yLspmVTBXiICuFKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8lpKsa0IRmGNlg0Uq3AOnmnK994vcpmfdlRzZvb%2BV100GZi2QzKao7YrH%2BN%2FK67YSgD4JC52nN0ivMGH0xd5uVneB2X1d458vuY86cakhN%2BupQctJXcPWix%2F%2FAZ5Ng8mxbXHmwYBbZQI8QwUhlVetaPpwLd2MjEZBteUpAUyMmR2066pLvhdwoInsr3S%2Fcqe8cJKXXKlpeZSKnI9fgyMtWn%2Fvbf1ndbiZrI0t3ReVMK%2F%2BF8P1TZxgjx6oel%2FYn8WNqczFatwlewblIE3A1zCG2%2B4L5WNVdlfKL0N68QZpLaXMpEt2T4vX64TbWKdTxJO7uTzEFK1ZpC377qXqy9KGyDeyUqvdfV8b%2BoAiSNBQrwHsZUSsCUh0VeWlnwYKsRN10gfrs9YvAteQXMoc3OWGVafDl81dfKLLSdJFMgb4%2BcK52shWWG57Wxs%2Be%2FZ0zIPKcqRW9BWqAx5P8AoQcO%2BhKSN0nl8Y2%2F905Re%2Fmh1wMotNrBLDl3JLScapnIdxN7ROvP0zYMnXfhl70DEl1Aad9KOFgyKpURN%2B97UFPDWEi26xpdscNM%2FMhqPQluiyrGLJtcx6Jrr5rhH1yeEn3X0W0%2BBmcUWPOXfKKZEhHDmJ1yhQDYPUHDRB6nilTZP0ciNeALgkRadGFzqvLzCchYXBBjqkAQ0XpiuHp%2Flnn5FYCMiTfL88NmFCW2QX8tvU6reGPw9%2B5s0agZCL%2BgHSQG420J4Y%2B6mG%2FM0X9hkYo50OZwPlc2B%2FQ8H7EFhtF1kIQcLo18bRj%2BkAG46LgN9fpvY7rfn1tLsUcQ2AGdNO8fZgJK6NqqkNUj%2BesSBllTP8ANV1fJN4nM3pNBxJg5YaVhrwXT7YLnPfhg1EjOzr5ATJzblVXC4pBLLD&X-Amz-Signature=8f055e0de1f90e2437655c169597ab4708a05b65e64ab2d0546516b4151b4891&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V3XGU3K%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDF%2BnyIrsfeyV1Myz300Bbi9EpaB2nrZTc3LJtDqOzxeQIhAJSJ0z%2FLuK7%2FWyRbZ6Y01W4rNmk3p5yLspmVTBXiICuFKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8lpKsa0IRmGNlg0Uq3AOnmnK994vcpmfdlRzZvb%2BV100GZi2QzKao7YrH%2BN%2FK67YSgD4JC52nN0ivMGH0xd5uVneB2X1d458vuY86cakhN%2BupQctJXcPWix%2F%2FAZ5Ng8mxbXHmwYBbZQI8QwUhlVetaPpwLd2MjEZBteUpAUyMmR2066pLvhdwoInsr3S%2Fcqe8cJKXXKlpeZSKnI9fgyMtWn%2Fvbf1ndbiZrI0t3ReVMK%2F%2BF8P1TZxgjx6oel%2FYn8WNqczFatwlewblIE3A1zCG2%2B4L5WNVdlfKL0N68QZpLaXMpEt2T4vX64TbWKdTxJO7uTzEFK1ZpC377qXqy9KGyDeyUqvdfV8b%2BoAiSNBQrwHsZUSsCUh0VeWlnwYKsRN10gfrs9YvAteQXMoc3OWGVafDl81dfKLLSdJFMgb4%2BcK52shWWG57Wxs%2Be%2FZ0zIPKcqRW9BWqAx5P8AoQcO%2BhKSN0nl8Y2%2F905Re%2Fmh1wMotNrBLDl3JLScapnIdxN7ROvP0zYMnXfhl70DEl1Aad9KOFgyKpURN%2B97UFPDWEi26xpdscNM%2FMhqPQluiyrGLJtcx6Jrr5rhH1yeEn3X0W0%2BBmcUWPOXfKKZEhHDmJ1yhQDYPUHDRB6nilTZP0ciNeALgkRadGFzqvLzCchYXBBjqkAQ0XpiuHp%2Flnn5FYCMiTfL88NmFCW2QX8tvU6reGPw9%2B5s0agZCL%2BgHSQG420J4Y%2B6mG%2FM0X9hkYo50OZwPlc2B%2FQ8H7EFhtF1kIQcLo18bRj%2BkAG46LgN9fpvY7rfn1tLsUcQ2AGdNO8fZgJK6NqqkNUj%2BesSBllTP8ANV1fJN4nM3pNBxJg5YaVhrwXT7YLnPfhg1EjOzr5ATJzblVXC4pBLLD&X-Amz-Signature=79f1836f3c78bc46bfa2391b96c0bf600bf14f16b8e3174fd0ee99c6cd9922d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V3XGU3K%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDF%2BnyIrsfeyV1Myz300Bbi9EpaB2nrZTc3LJtDqOzxeQIhAJSJ0z%2FLuK7%2FWyRbZ6Y01W4rNmk3p5yLspmVTBXiICuFKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8lpKsa0IRmGNlg0Uq3AOnmnK994vcpmfdlRzZvb%2BV100GZi2QzKao7YrH%2BN%2FK67YSgD4JC52nN0ivMGH0xd5uVneB2X1d458vuY86cakhN%2BupQctJXcPWix%2F%2FAZ5Ng8mxbXHmwYBbZQI8QwUhlVetaPpwLd2MjEZBteUpAUyMmR2066pLvhdwoInsr3S%2Fcqe8cJKXXKlpeZSKnI9fgyMtWn%2Fvbf1ndbiZrI0t3ReVMK%2F%2BF8P1TZxgjx6oel%2FYn8WNqczFatwlewblIE3A1zCG2%2B4L5WNVdlfKL0N68QZpLaXMpEt2T4vX64TbWKdTxJO7uTzEFK1ZpC377qXqy9KGyDeyUqvdfV8b%2BoAiSNBQrwHsZUSsCUh0VeWlnwYKsRN10gfrs9YvAteQXMoc3OWGVafDl81dfKLLSdJFMgb4%2BcK52shWWG57Wxs%2Be%2FZ0zIPKcqRW9BWqAx5P8AoQcO%2BhKSN0nl8Y2%2F905Re%2Fmh1wMotNrBLDl3JLScapnIdxN7ROvP0zYMnXfhl70DEl1Aad9KOFgyKpURN%2B97UFPDWEi26xpdscNM%2FMhqPQluiyrGLJtcx6Jrr5rhH1yeEn3X0W0%2BBmcUWPOXfKKZEhHDmJ1yhQDYPUHDRB6nilTZP0ciNeALgkRadGFzqvLzCchYXBBjqkAQ0XpiuHp%2Flnn5FYCMiTfL88NmFCW2QX8tvU6reGPw9%2B5s0agZCL%2BgHSQG420J4Y%2B6mG%2FM0X9hkYo50OZwPlc2B%2FQ8H7EFhtF1kIQcLo18bRj%2BkAG46LgN9fpvY7rfn1tLsUcQ2AGdNO8fZgJK6NqqkNUj%2BesSBllTP8ANV1fJN4nM3pNBxJg5YaVhrwXT7YLnPfhg1EjOzr5ATJzblVXC4pBLLD&X-Amz-Signature=a83d97bef8e4872d7e004e7cab06fa37988111e3f478221e0afc5013082eafda&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

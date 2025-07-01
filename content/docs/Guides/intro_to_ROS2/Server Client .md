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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDD5BJXS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzUsDj2qH4g2sFhPgopkmTPlkdgrY1PHTPQ2ilntexcgIgPNtzO4F0WNZW8Tz8zuyW6C7FEuiEYcTka7DyxYVCRoYqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH58PYXfdMw3%2FyAxPircA%2Fm9WbPD1ZBkHFERy9uuuAkz2YNzAWi5AuuE42XfKOwV6jj%2BfHOepGta0eAFWiEq8MvHeskeADqsLXrxMoJdU%2BA8FODY8u8QrEucw310F71jfYX4bziUGVArrSS1f%2BdXSqcLW5E0SPS1kqc4T4w9puR%2FNsVLj5BnKP54rdavr4RpLDjmpdHQZ5SSjILlw9wA%2B7WDnFdR%2Bj5linyH4BaK%2FLXV7ydI881%2Fnx1YqEZwTycvEL4z2DgMVM9oDGoOo1E93WqysydVTYeH5lKwX9ayiVbgACK11X8iaQzPrmaHmNhPDFSwkv7PE2TeItItU5Hok4P1hbeS19TnWDth0%2FM%2FFKpS54NQsunS8Qn5uWAtE1mQ08JGZZDkhocRWshKaAaX13ybbB%2BGbRopFt6zZ5bk1jkdBu2%2BR4lYLcDYIhvQsQKfxd8UMhIsa8K2cBZpVMQGpxM8Eyu5uf46BvECPelRTNm4o3eY%2BaRssi7qFzNsvRbIxgSbA0pBSBLp3IBdAddZaOaPa89v2mWL80jHkXwXKLRFvi7HsDUdMVTNj6wOjvl3GT2fYDFsip1HNwOUyOIiYgdNf%2B7xx8qYj1nVzuJNtMOfszAwC8yqWQ3gaZ7h2EQ7k0eRgHDAP%2FXhTvjGMI2GjsMGOqUBHvYBAU9t9HUsbc6UCglE3QgVQlbBoy%2FRRuVk7qfoVOb8HhyMEvoBi3V%2FZQd6uI2XBtDJt%2B4PKsw1lVSBjzgnh2X9kq5l269TmeUmqzWy5vnNYdV5%2FbV%2FWuVpK6Cz8DsUBVNZWK0Thd0py0hyOwbwNbaek9IWp8soDpAAuXGNgpSbuSkLrGcX2eSZJdEKHw8jsyl10Ix2aUgvRKXeVdhOjnbs0gTm&X-Amz-Signature=89060e5bccdf66e2b3f6408229194029e2b46c177245d3767a20a9c8d9550581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDD5BJXS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzUsDj2qH4g2sFhPgopkmTPlkdgrY1PHTPQ2ilntexcgIgPNtzO4F0WNZW8Tz8zuyW6C7FEuiEYcTka7DyxYVCRoYqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH58PYXfdMw3%2FyAxPircA%2Fm9WbPD1ZBkHFERy9uuuAkz2YNzAWi5AuuE42XfKOwV6jj%2BfHOepGta0eAFWiEq8MvHeskeADqsLXrxMoJdU%2BA8FODY8u8QrEucw310F71jfYX4bziUGVArrSS1f%2BdXSqcLW5E0SPS1kqc4T4w9puR%2FNsVLj5BnKP54rdavr4RpLDjmpdHQZ5SSjILlw9wA%2B7WDnFdR%2Bj5linyH4BaK%2FLXV7ydI881%2Fnx1YqEZwTycvEL4z2DgMVM9oDGoOo1E93WqysydVTYeH5lKwX9ayiVbgACK11X8iaQzPrmaHmNhPDFSwkv7PE2TeItItU5Hok4P1hbeS19TnWDth0%2FM%2FFKpS54NQsunS8Qn5uWAtE1mQ08JGZZDkhocRWshKaAaX13ybbB%2BGbRopFt6zZ5bk1jkdBu2%2BR4lYLcDYIhvQsQKfxd8UMhIsa8K2cBZpVMQGpxM8Eyu5uf46BvECPelRTNm4o3eY%2BaRssi7qFzNsvRbIxgSbA0pBSBLp3IBdAddZaOaPa89v2mWL80jHkXwXKLRFvi7HsDUdMVTNj6wOjvl3GT2fYDFsip1HNwOUyOIiYgdNf%2B7xx8qYj1nVzuJNtMOfszAwC8yqWQ3gaZ7h2EQ7k0eRgHDAP%2FXhTvjGMI2GjsMGOqUBHvYBAU9t9HUsbc6UCglE3QgVQlbBoy%2FRRuVk7qfoVOb8HhyMEvoBi3V%2FZQd6uI2XBtDJt%2B4PKsw1lVSBjzgnh2X9kq5l269TmeUmqzWy5vnNYdV5%2FbV%2FWuVpK6Cz8DsUBVNZWK0Thd0py0hyOwbwNbaek9IWp8soDpAAuXGNgpSbuSkLrGcX2eSZJdEKHw8jsyl10Ix2aUgvRKXeVdhOjnbs0gTm&X-Amz-Signature=5fbd658bf49d9a13dacc90e459bc28d47ddb7cf9effd5c88377cf265e9caa1a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDD5BJXS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzUsDj2qH4g2sFhPgopkmTPlkdgrY1PHTPQ2ilntexcgIgPNtzO4F0WNZW8Tz8zuyW6C7FEuiEYcTka7DyxYVCRoYqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH58PYXfdMw3%2FyAxPircA%2Fm9WbPD1ZBkHFERy9uuuAkz2YNzAWi5AuuE42XfKOwV6jj%2BfHOepGta0eAFWiEq8MvHeskeADqsLXrxMoJdU%2BA8FODY8u8QrEucw310F71jfYX4bziUGVArrSS1f%2BdXSqcLW5E0SPS1kqc4T4w9puR%2FNsVLj5BnKP54rdavr4RpLDjmpdHQZ5SSjILlw9wA%2B7WDnFdR%2Bj5linyH4BaK%2FLXV7ydI881%2Fnx1YqEZwTycvEL4z2DgMVM9oDGoOo1E93WqysydVTYeH5lKwX9ayiVbgACK11X8iaQzPrmaHmNhPDFSwkv7PE2TeItItU5Hok4P1hbeS19TnWDth0%2FM%2FFKpS54NQsunS8Qn5uWAtE1mQ08JGZZDkhocRWshKaAaX13ybbB%2BGbRopFt6zZ5bk1jkdBu2%2BR4lYLcDYIhvQsQKfxd8UMhIsa8K2cBZpVMQGpxM8Eyu5uf46BvECPelRTNm4o3eY%2BaRssi7qFzNsvRbIxgSbA0pBSBLp3IBdAddZaOaPa89v2mWL80jHkXwXKLRFvi7HsDUdMVTNj6wOjvl3GT2fYDFsip1HNwOUyOIiYgdNf%2B7xx8qYj1nVzuJNtMOfszAwC8yqWQ3gaZ7h2EQ7k0eRgHDAP%2FXhTvjGMI2GjsMGOqUBHvYBAU9t9HUsbc6UCglE3QgVQlbBoy%2FRRuVk7qfoVOb8HhyMEvoBi3V%2FZQd6uI2XBtDJt%2B4PKsw1lVSBjzgnh2X9kq5l269TmeUmqzWy5vnNYdV5%2FbV%2FWuVpK6Cz8DsUBVNZWK0Thd0py0hyOwbwNbaek9IWp8soDpAAuXGNgpSbuSkLrGcX2eSZJdEKHw8jsyl10Ix2aUgvRKXeVdhOjnbs0gTm&X-Amz-Signature=3a64944e7fbde31cb92cbcca328df7ab6542b8265aeb57c7dd130782879e633c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDD5BJXS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzUsDj2qH4g2sFhPgopkmTPlkdgrY1PHTPQ2ilntexcgIgPNtzO4F0WNZW8Tz8zuyW6C7FEuiEYcTka7DyxYVCRoYqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH58PYXfdMw3%2FyAxPircA%2Fm9WbPD1ZBkHFERy9uuuAkz2YNzAWi5AuuE42XfKOwV6jj%2BfHOepGta0eAFWiEq8MvHeskeADqsLXrxMoJdU%2BA8FODY8u8QrEucw310F71jfYX4bziUGVArrSS1f%2BdXSqcLW5E0SPS1kqc4T4w9puR%2FNsVLj5BnKP54rdavr4RpLDjmpdHQZ5SSjILlw9wA%2B7WDnFdR%2Bj5linyH4BaK%2FLXV7ydI881%2Fnx1YqEZwTycvEL4z2DgMVM9oDGoOo1E93WqysydVTYeH5lKwX9ayiVbgACK11X8iaQzPrmaHmNhPDFSwkv7PE2TeItItU5Hok4P1hbeS19TnWDth0%2FM%2FFKpS54NQsunS8Qn5uWAtE1mQ08JGZZDkhocRWshKaAaX13ybbB%2BGbRopFt6zZ5bk1jkdBu2%2BR4lYLcDYIhvQsQKfxd8UMhIsa8K2cBZpVMQGpxM8Eyu5uf46BvECPelRTNm4o3eY%2BaRssi7qFzNsvRbIxgSbA0pBSBLp3IBdAddZaOaPa89v2mWL80jHkXwXKLRFvi7HsDUdMVTNj6wOjvl3GT2fYDFsip1HNwOUyOIiYgdNf%2B7xx8qYj1nVzuJNtMOfszAwC8yqWQ3gaZ7h2EQ7k0eRgHDAP%2FXhTvjGMI2GjsMGOqUBHvYBAU9t9HUsbc6UCglE3QgVQlbBoy%2FRRuVk7qfoVOb8HhyMEvoBi3V%2FZQd6uI2XBtDJt%2B4PKsw1lVSBjzgnh2X9kq5l269TmeUmqzWy5vnNYdV5%2FbV%2FWuVpK6Cz8DsUBVNZWK0Thd0py0hyOwbwNbaek9IWp8soDpAAuXGNgpSbuSkLrGcX2eSZJdEKHw8jsyl10Ix2aUgvRKXeVdhOjnbs0gTm&X-Amz-Signature=31912d491f9c41142ed3f4b939cc717df6e505b8150a1e1749d89bfb689c8fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDD5BJXS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzUsDj2qH4g2sFhPgopkmTPlkdgrY1PHTPQ2ilntexcgIgPNtzO4F0WNZW8Tz8zuyW6C7FEuiEYcTka7DyxYVCRoYqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH58PYXfdMw3%2FyAxPircA%2Fm9WbPD1ZBkHFERy9uuuAkz2YNzAWi5AuuE42XfKOwV6jj%2BfHOepGta0eAFWiEq8MvHeskeADqsLXrxMoJdU%2BA8FODY8u8QrEucw310F71jfYX4bziUGVArrSS1f%2BdXSqcLW5E0SPS1kqc4T4w9puR%2FNsVLj5BnKP54rdavr4RpLDjmpdHQZ5SSjILlw9wA%2B7WDnFdR%2Bj5linyH4BaK%2FLXV7ydI881%2Fnx1YqEZwTycvEL4z2DgMVM9oDGoOo1E93WqysydVTYeH5lKwX9ayiVbgACK11X8iaQzPrmaHmNhPDFSwkv7PE2TeItItU5Hok4P1hbeS19TnWDth0%2FM%2FFKpS54NQsunS8Qn5uWAtE1mQ08JGZZDkhocRWshKaAaX13ybbB%2BGbRopFt6zZ5bk1jkdBu2%2BR4lYLcDYIhvQsQKfxd8UMhIsa8K2cBZpVMQGpxM8Eyu5uf46BvECPelRTNm4o3eY%2BaRssi7qFzNsvRbIxgSbA0pBSBLp3IBdAddZaOaPa89v2mWL80jHkXwXKLRFvi7HsDUdMVTNj6wOjvl3GT2fYDFsip1HNwOUyOIiYgdNf%2B7xx8qYj1nVzuJNtMOfszAwC8yqWQ3gaZ7h2EQ7k0eRgHDAP%2FXhTvjGMI2GjsMGOqUBHvYBAU9t9HUsbc6UCglE3QgVQlbBoy%2FRRuVk7qfoVOb8HhyMEvoBi3V%2FZQd6uI2XBtDJt%2B4PKsw1lVSBjzgnh2X9kq5l269TmeUmqzWy5vnNYdV5%2FbV%2FWuVpK6Cz8DsUBVNZWK0Thd0py0hyOwbwNbaek9IWp8soDpAAuXGNgpSbuSkLrGcX2eSZJdEKHw8jsyl10Ix2aUgvRKXeVdhOjnbs0gTm&X-Amz-Signature=294ddbd691b8e5d1ede93d074461c465d65a6d2fab1e0656a6fc27311527a60f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

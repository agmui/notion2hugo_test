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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFOT3DO6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCck8%2BC%2FDH5Q65%2FaT4Y7l8mkm%2FSD6%2B%2FcSfFb6XLNrClDgIgX1JijLeStcbS885IRC12tYAm%2BXeJz%2B4y4aj9I0v1YXoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDH4I2eLFdZjGPQbwxircA%2BEFxF3DHhXT%2Bi9iJ1DZJPsqFekQhdy89L0PNvdj4AZlvHDdK6pPcLFHpFlm6YmDIwHmva2VXhWMNVlMRtxK7IKC00cnJUJD2A6mLZ2tXZ%2FUAeYuURXbuHARLRMdv3rb3bVNBBEudp6vPqhg%2FfX4pQTz7iayskkfzJi0M8sUuad90nNi2HACJ0HTsaZdUWl1Us26pHr5%2B0aICj%2F%2FcGnfhl2R8pGFLAja4U6WDbT4sHiA3FN%2FrhcCZNMsrFEoXknl2KRsmbfGdNptIILZ8wCNTbueCEbPbz2S9cik1f5MXweWy8lDBjbuMXXWETpc1jFIT7Xssi%2FBvYJy0PKX7wA1B15EVoYSVwEwCD2B9YUIU0czcXpfXXS8qzZTxjSX4TROXwV0tnj9NAcuzM%2BPBH51MjxGti%2B2rxaMJbCPFGBIz18A1xFEy4dhWFXSum%2BzJ7gdCEBXKG6cKX%2FAsxkbr7dGMO6T7FtXhujNy9cl%2B8qBnU0zvHrjwDswqqg0QTolgGEEpKvj2azMkALD7U8K0efMAQ%2FO53iHrq%2BxT87H2xM26RilPP1njVWB8pTx%2Fsono4ztoYVf0QXA8NigfRwSTiyn1Q%2FoiKSginGZWoNOZj8h2NYakg%2F0PhCQoCeZcT2ZMOTikcQGOqUBAon4Zihm%2B4Yy1Oqv4sHgb6TY4SpaAqFoyUbLKDOZNkuUUInX4AZkAKXY6Xjb28w5Hc2s%2BnOrxwhJkKgZi8PXT0rdvqpO7n4ecNBlLLCP1PLmRnYCIWyXdhTzCellvO30vdhRp6otXQx%2Fj%2B7XZkdRWdD2sFFbXVeX%2FP3SOb1YuvUFrPwqg%2BgLE%2F2nxw%2BQbn37US1LvGF2sUAu4ARjja3jXlv9QJHd&X-Amz-Signature=4c325f1971d8f6ba4d7f7d10f257d8021f04cee5f8391f0f12f19943b1e8e6f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFOT3DO6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCck8%2BC%2FDH5Q65%2FaT4Y7l8mkm%2FSD6%2B%2FcSfFb6XLNrClDgIgX1JijLeStcbS885IRC12tYAm%2BXeJz%2B4y4aj9I0v1YXoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDH4I2eLFdZjGPQbwxircA%2BEFxF3DHhXT%2Bi9iJ1DZJPsqFekQhdy89L0PNvdj4AZlvHDdK6pPcLFHpFlm6YmDIwHmva2VXhWMNVlMRtxK7IKC00cnJUJD2A6mLZ2tXZ%2FUAeYuURXbuHARLRMdv3rb3bVNBBEudp6vPqhg%2FfX4pQTz7iayskkfzJi0M8sUuad90nNi2HACJ0HTsaZdUWl1Us26pHr5%2B0aICj%2F%2FcGnfhl2R8pGFLAja4U6WDbT4sHiA3FN%2FrhcCZNMsrFEoXknl2KRsmbfGdNptIILZ8wCNTbueCEbPbz2S9cik1f5MXweWy8lDBjbuMXXWETpc1jFIT7Xssi%2FBvYJy0PKX7wA1B15EVoYSVwEwCD2B9YUIU0czcXpfXXS8qzZTxjSX4TROXwV0tnj9NAcuzM%2BPBH51MjxGti%2B2rxaMJbCPFGBIz18A1xFEy4dhWFXSum%2BzJ7gdCEBXKG6cKX%2FAsxkbr7dGMO6T7FtXhujNy9cl%2B8qBnU0zvHrjwDswqqg0QTolgGEEpKvj2azMkALD7U8K0efMAQ%2FO53iHrq%2BxT87H2xM26RilPP1njVWB8pTx%2Fsono4ztoYVf0QXA8NigfRwSTiyn1Q%2FoiKSginGZWoNOZj8h2NYakg%2F0PhCQoCeZcT2ZMOTikcQGOqUBAon4Zihm%2B4Yy1Oqv4sHgb6TY4SpaAqFoyUbLKDOZNkuUUInX4AZkAKXY6Xjb28w5Hc2s%2BnOrxwhJkKgZi8PXT0rdvqpO7n4ecNBlLLCP1PLmRnYCIWyXdhTzCellvO30vdhRp6otXQx%2Fj%2B7XZkdRWdD2sFFbXVeX%2FP3SOb1YuvUFrPwqg%2BgLE%2F2nxw%2BQbn37US1LvGF2sUAu4ARjja3jXlv9QJHd&X-Amz-Signature=8260ddbcf50c6e3a50e60c00c23ebb9822cdf63379207b481d0b15fb3abe7178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFOT3DO6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCck8%2BC%2FDH5Q65%2FaT4Y7l8mkm%2FSD6%2B%2FcSfFb6XLNrClDgIgX1JijLeStcbS885IRC12tYAm%2BXeJz%2B4y4aj9I0v1YXoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDH4I2eLFdZjGPQbwxircA%2BEFxF3DHhXT%2Bi9iJ1DZJPsqFekQhdy89L0PNvdj4AZlvHDdK6pPcLFHpFlm6YmDIwHmva2VXhWMNVlMRtxK7IKC00cnJUJD2A6mLZ2tXZ%2FUAeYuURXbuHARLRMdv3rb3bVNBBEudp6vPqhg%2FfX4pQTz7iayskkfzJi0M8sUuad90nNi2HACJ0HTsaZdUWl1Us26pHr5%2B0aICj%2F%2FcGnfhl2R8pGFLAja4U6WDbT4sHiA3FN%2FrhcCZNMsrFEoXknl2KRsmbfGdNptIILZ8wCNTbueCEbPbz2S9cik1f5MXweWy8lDBjbuMXXWETpc1jFIT7Xssi%2FBvYJy0PKX7wA1B15EVoYSVwEwCD2B9YUIU0czcXpfXXS8qzZTxjSX4TROXwV0tnj9NAcuzM%2BPBH51MjxGti%2B2rxaMJbCPFGBIz18A1xFEy4dhWFXSum%2BzJ7gdCEBXKG6cKX%2FAsxkbr7dGMO6T7FtXhujNy9cl%2B8qBnU0zvHrjwDswqqg0QTolgGEEpKvj2azMkALD7U8K0efMAQ%2FO53iHrq%2BxT87H2xM26RilPP1njVWB8pTx%2Fsono4ztoYVf0QXA8NigfRwSTiyn1Q%2FoiKSginGZWoNOZj8h2NYakg%2F0PhCQoCeZcT2ZMOTikcQGOqUBAon4Zihm%2B4Yy1Oqv4sHgb6TY4SpaAqFoyUbLKDOZNkuUUInX4AZkAKXY6Xjb28w5Hc2s%2BnOrxwhJkKgZi8PXT0rdvqpO7n4ecNBlLLCP1PLmRnYCIWyXdhTzCellvO30vdhRp6otXQx%2Fj%2B7XZkdRWdD2sFFbXVeX%2FP3SOb1YuvUFrPwqg%2BgLE%2F2nxw%2BQbn37US1LvGF2sUAu4ARjja3jXlv9QJHd&X-Amz-Signature=b1224ac9a5e180b0f4e7004721d85794195a516031045f27ca7750d7d9fd4ea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFOT3DO6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCck8%2BC%2FDH5Q65%2FaT4Y7l8mkm%2FSD6%2B%2FcSfFb6XLNrClDgIgX1JijLeStcbS885IRC12tYAm%2BXeJz%2B4y4aj9I0v1YXoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDH4I2eLFdZjGPQbwxircA%2BEFxF3DHhXT%2Bi9iJ1DZJPsqFekQhdy89L0PNvdj4AZlvHDdK6pPcLFHpFlm6YmDIwHmva2VXhWMNVlMRtxK7IKC00cnJUJD2A6mLZ2tXZ%2FUAeYuURXbuHARLRMdv3rb3bVNBBEudp6vPqhg%2FfX4pQTz7iayskkfzJi0M8sUuad90nNi2HACJ0HTsaZdUWl1Us26pHr5%2B0aICj%2F%2FcGnfhl2R8pGFLAja4U6WDbT4sHiA3FN%2FrhcCZNMsrFEoXknl2KRsmbfGdNptIILZ8wCNTbueCEbPbz2S9cik1f5MXweWy8lDBjbuMXXWETpc1jFIT7Xssi%2FBvYJy0PKX7wA1B15EVoYSVwEwCD2B9YUIU0czcXpfXXS8qzZTxjSX4TROXwV0tnj9NAcuzM%2BPBH51MjxGti%2B2rxaMJbCPFGBIz18A1xFEy4dhWFXSum%2BzJ7gdCEBXKG6cKX%2FAsxkbr7dGMO6T7FtXhujNy9cl%2B8qBnU0zvHrjwDswqqg0QTolgGEEpKvj2azMkALD7U8K0efMAQ%2FO53iHrq%2BxT87H2xM26RilPP1njVWB8pTx%2Fsono4ztoYVf0QXA8NigfRwSTiyn1Q%2FoiKSginGZWoNOZj8h2NYakg%2F0PhCQoCeZcT2ZMOTikcQGOqUBAon4Zihm%2B4Yy1Oqv4sHgb6TY4SpaAqFoyUbLKDOZNkuUUInX4AZkAKXY6Xjb28w5Hc2s%2BnOrxwhJkKgZi8PXT0rdvqpO7n4ecNBlLLCP1PLmRnYCIWyXdhTzCellvO30vdhRp6otXQx%2Fj%2B7XZkdRWdD2sFFbXVeX%2FP3SOb1YuvUFrPwqg%2BgLE%2F2nxw%2BQbn37US1LvGF2sUAu4ARjja3jXlv9QJHd&X-Amz-Signature=22ef993dd77605a7d0279579d0d6f0723e306b54bd9cf2323f45aef7202cd6ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFOT3DO6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCck8%2BC%2FDH5Q65%2FaT4Y7l8mkm%2FSD6%2B%2FcSfFb6XLNrClDgIgX1JijLeStcbS885IRC12tYAm%2BXeJz%2B4y4aj9I0v1YXoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDH4I2eLFdZjGPQbwxircA%2BEFxF3DHhXT%2Bi9iJ1DZJPsqFekQhdy89L0PNvdj4AZlvHDdK6pPcLFHpFlm6YmDIwHmva2VXhWMNVlMRtxK7IKC00cnJUJD2A6mLZ2tXZ%2FUAeYuURXbuHARLRMdv3rb3bVNBBEudp6vPqhg%2FfX4pQTz7iayskkfzJi0M8sUuad90nNi2HACJ0HTsaZdUWl1Us26pHr5%2B0aICj%2F%2FcGnfhl2R8pGFLAja4U6WDbT4sHiA3FN%2FrhcCZNMsrFEoXknl2KRsmbfGdNptIILZ8wCNTbueCEbPbz2S9cik1f5MXweWy8lDBjbuMXXWETpc1jFIT7Xssi%2FBvYJy0PKX7wA1B15EVoYSVwEwCD2B9YUIU0czcXpfXXS8qzZTxjSX4TROXwV0tnj9NAcuzM%2BPBH51MjxGti%2B2rxaMJbCPFGBIz18A1xFEy4dhWFXSum%2BzJ7gdCEBXKG6cKX%2FAsxkbr7dGMO6T7FtXhujNy9cl%2B8qBnU0zvHrjwDswqqg0QTolgGEEpKvj2azMkALD7U8K0efMAQ%2FO53iHrq%2BxT87H2xM26RilPP1njVWB8pTx%2Fsono4ztoYVf0QXA8NigfRwSTiyn1Q%2FoiKSginGZWoNOZj8h2NYakg%2F0PhCQoCeZcT2ZMOTikcQGOqUBAon4Zihm%2B4Yy1Oqv4sHgb6TY4SpaAqFoyUbLKDOZNkuUUInX4AZkAKXY6Xjb28w5Hc2s%2BnOrxwhJkKgZi8PXT0rdvqpO7n4ecNBlLLCP1PLmRnYCIWyXdhTzCellvO30vdhRp6otXQx%2Fj%2B7XZkdRWdD2sFFbXVeX%2FP3SOb1YuvUFrPwqg%2BgLE%2F2nxw%2BQbn37US1LvGF2sUAu4ARjja3jXlv9QJHd&X-Amz-Signature=79c215480fee5b800177b530b8e3f841820d60b402f466bf20c22cdcfeac063d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

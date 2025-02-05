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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHQCTMB%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCKo%2BL6ST%2FvjXZPjT26tDYf9mIO6ADDICXvc5fDA%2BfeuQIgALsaMdyK7n709wO9H3R99VYzUp%2B57SzehtOM0igxMVsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCTta%2BiSthPbiXVCSircA%2BcexPDjUgC9oQPGZ5mPKWytOrL3ipl8ms5VgMp3YgI8aM9t3J4S1GSCAaoOHfswpSzKZQHHpSufkgS9FP2q0w5ajdk2JkOqhks2B9A7Jk6%2FI8GmMyAHWulmcdb%2FFiEy2WPhECmh9E75vFdba6DFcNzQF01Zk5A5nod51UzuHF3DKAkpkSuJv6aPnKHWlvO9VPqnLQwzJ0rU3qvvtBWYVoTQTFbHikWugA3bm%2FzbYbQkYbJm7Bf0tnF9fDN%2BbbXzLr8OfmKmAcwVaHbDN7TL55K%2BwoYew4lAJqZT18yPEC35mnWpEjQVnSO2KhwvZiNTPeVbY9FRmBcaGlh7jzSyp7RNNHX560nWJktr8ySKKPtH5o2hUctqva4da63rLp%2BbSGJX1vQawmBoBA1%2Bs%2FmfLRGM0M%2B7arVF93dZ2bA1vuGxWwVi9BOgFi45bLyhpcS6Y1KJwc7PI3CV%2BN4M0ZLdfAfp5Wg5bqnLh3Dn1UG6NpCzb%2B9x5hn9dQ6hFU2wUrwdNPSufIQmCk4UrAihZGhQi6oml8KvJOYTLj6%2FzLrEkV9fRuD0YAbTucVkVZfGJMqPgYr6n%2BoCxBPqTVhgFF5QQsIobuOx7SgR1mKtgDj9L7T5MB1zZ7yixitdh%2BSwMPK7jr0GOqUBog0Ni5Q%2BFxFCKjkI7MemG8i7C9CtYFwnovG0Hh8otQiBx%2FG1kPN87fS08yxPiLpWrdL5FwlSpWVH9wTvZieIfgX7fp05UQlToNiqbMsBn1ekhh5YII90o2vUg%2BVuLVhWmFebXYXrGokznec6xibmccOoDjGfQ4mNZn0ncGvgfZGtqvioHugEILBlaoMnYWnc2K559jrULVDgoctclREGEfTyHDe2&X-Amz-Signature=510bebeec30ebc670a4f86c8fd059cc5785a7a655596a28c3c42aab05be9e669&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHQCTMB%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCKo%2BL6ST%2FvjXZPjT26tDYf9mIO6ADDICXvc5fDA%2BfeuQIgALsaMdyK7n709wO9H3R99VYzUp%2B57SzehtOM0igxMVsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCTta%2BiSthPbiXVCSircA%2BcexPDjUgC9oQPGZ5mPKWytOrL3ipl8ms5VgMp3YgI8aM9t3J4S1GSCAaoOHfswpSzKZQHHpSufkgS9FP2q0w5ajdk2JkOqhks2B9A7Jk6%2FI8GmMyAHWulmcdb%2FFiEy2WPhECmh9E75vFdba6DFcNzQF01Zk5A5nod51UzuHF3DKAkpkSuJv6aPnKHWlvO9VPqnLQwzJ0rU3qvvtBWYVoTQTFbHikWugA3bm%2FzbYbQkYbJm7Bf0tnF9fDN%2BbbXzLr8OfmKmAcwVaHbDN7TL55K%2BwoYew4lAJqZT18yPEC35mnWpEjQVnSO2KhwvZiNTPeVbY9FRmBcaGlh7jzSyp7RNNHX560nWJktr8ySKKPtH5o2hUctqva4da63rLp%2BbSGJX1vQawmBoBA1%2Bs%2FmfLRGM0M%2B7arVF93dZ2bA1vuGxWwVi9BOgFi45bLyhpcS6Y1KJwc7PI3CV%2BN4M0ZLdfAfp5Wg5bqnLh3Dn1UG6NpCzb%2B9x5hn9dQ6hFU2wUrwdNPSufIQmCk4UrAihZGhQi6oml8KvJOYTLj6%2FzLrEkV9fRuD0YAbTucVkVZfGJMqPgYr6n%2BoCxBPqTVhgFF5QQsIobuOx7SgR1mKtgDj9L7T5MB1zZ7yixitdh%2BSwMPK7jr0GOqUBog0Ni5Q%2BFxFCKjkI7MemG8i7C9CtYFwnovG0Hh8otQiBx%2FG1kPN87fS08yxPiLpWrdL5FwlSpWVH9wTvZieIfgX7fp05UQlToNiqbMsBn1ekhh5YII90o2vUg%2BVuLVhWmFebXYXrGokznec6xibmccOoDjGfQ4mNZn0ncGvgfZGtqvioHugEILBlaoMnYWnc2K559jrULVDgoctclREGEfTyHDe2&X-Amz-Signature=0fb9cd5c47e1ffae9947894c0176c5993d633098f5b8d4011943b82c6c1cc084&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHQCTMB%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCKo%2BL6ST%2FvjXZPjT26tDYf9mIO6ADDICXvc5fDA%2BfeuQIgALsaMdyK7n709wO9H3R99VYzUp%2B57SzehtOM0igxMVsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCTta%2BiSthPbiXVCSircA%2BcexPDjUgC9oQPGZ5mPKWytOrL3ipl8ms5VgMp3YgI8aM9t3J4S1GSCAaoOHfswpSzKZQHHpSufkgS9FP2q0w5ajdk2JkOqhks2B9A7Jk6%2FI8GmMyAHWulmcdb%2FFiEy2WPhECmh9E75vFdba6DFcNzQF01Zk5A5nod51UzuHF3DKAkpkSuJv6aPnKHWlvO9VPqnLQwzJ0rU3qvvtBWYVoTQTFbHikWugA3bm%2FzbYbQkYbJm7Bf0tnF9fDN%2BbbXzLr8OfmKmAcwVaHbDN7TL55K%2BwoYew4lAJqZT18yPEC35mnWpEjQVnSO2KhwvZiNTPeVbY9FRmBcaGlh7jzSyp7RNNHX560nWJktr8ySKKPtH5o2hUctqva4da63rLp%2BbSGJX1vQawmBoBA1%2Bs%2FmfLRGM0M%2B7arVF93dZ2bA1vuGxWwVi9BOgFi45bLyhpcS6Y1KJwc7PI3CV%2BN4M0ZLdfAfp5Wg5bqnLh3Dn1UG6NpCzb%2B9x5hn9dQ6hFU2wUrwdNPSufIQmCk4UrAihZGhQi6oml8KvJOYTLj6%2FzLrEkV9fRuD0YAbTucVkVZfGJMqPgYr6n%2BoCxBPqTVhgFF5QQsIobuOx7SgR1mKtgDj9L7T5MB1zZ7yixitdh%2BSwMPK7jr0GOqUBog0Ni5Q%2BFxFCKjkI7MemG8i7C9CtYFwnovG0Hh8otQiBx%2FG1kPN87fS08yxPiLpWrdL5FwlSpWVH9wTvZieIfgX7fp05UQlToNiqbMsBn1ekhh5YII90o2vUg%2BVuLVhWmFebXYXrGokznec6xibmccOoDjGfQ4mNZn0ncGvgfZGtqvioHugEILBlaoMnYWnc2K559jrULVDgoctclREGEfTyHDe2&X-Amz-Signature=8f0d17445bcaa73b7748eeedd98524a09cdcc196b53470748f4319abd4fd510a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHQCTMB%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCKo%2BL6ST%2FvjXZPjT26tDYf9mIO6ADDICXvc5fDA%2BfeuQIgALsaMdyK7n709wO9H3R99VYzUp%2B57SzehtOM0igxMVsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCTta%2BiSthPbiXVCSircA%2BcexPDjUgC9oQPGZ5mPKWytOrL3ipl8ms5VgMp3YgI8aM9t3J4S1GSCAaoOHfswpSzKZQHHpSufkgS9FP2q0w5ajdk2JkOqhks2B9A7Jk6%2FI8GmMyAHWulmcdb%2FFiEy2WPhECmh9E75vFdba6DFcNzQF01Zk5A5nod51UzuHF3DKAkpkSuJv6aPnKHWlvO9VPqnLQwzJ0rU3qvvtBWYVoTQTFbHikWugA3bm%2FzbYbQkYbJm7Bf0tnF9fDN%2BbbXzLr8OfmKmAcwVaHbDN7TL55K%2BwoYew4lAJqZT18yPEC35mnWpEjQVnSO2KhwvZiNTPeVbY9FRmBcaGlh7jzSyp7RNNHX560nWJktr8ySKKPtH5o2hUctqva4da63rLp%2BbSGJX1vQawmBoBA1%2Bs%2FmfLRGM0M%2B7arVF93dZ2bA1vuGxWwVi9BOgFi45bLyhpcS6Y1KJwc7PI3CV%2BN4M0ZLdfAfp5Wg5bqnLh3Dn1UG6NpCzb%2B9x5hn9dQ6hFU2wUrwdNPSufIQmCk4UrAihZGhQi6oml8KvJOYTLj6%2FzLrEkV9fRuD0YAbTucVkVZfGJMqPgYr6n%2BoCxBPqTVhgFF5QQsIobuOx7SgR1mKtgDj9L7T5MB1zZ7yixitdh%2BSwMPK7jr0GOqUBog0Ni5Q%2BFxFCKjkI7MemG8i7C9CtYFwnovG0Hh8otQiBx%2FG1kPN87fS08yxPiLpWrdL5FwlSpWVH9wTvZieIfgX7fp05UQlToNiqbMsBn1ekhh5YII90o2vUg%2BVuLVhWmFebXYXrGokznec6xibmccOoDjGfQ4mNZn0ncGvgfZGtqvioHugEILBlaoMnYWnc2K559jrULVDgoctclREGEfTyHDe2&X-Amz-Signature=0b7b34b1b1d966942d753155e7ce10f50eeb885b4521ca98c84423557adafe52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHQCTMB%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCKo%2BL6ST%2FvjXZPjT26tDYf9mIO6ADDICXvc5fDA%2BfeuQIgALsaMdyK7n709wO9H3R99VYzUp%2B57SzehtOM0igxMVsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCTta%2BiSthPbiXVCSircA%2BcexPDjUgC9oQPGZ5mPKWytOrL3ipl8ms5VgMp3YgI8aM9t3J4S1GSCAaoOHfswpSzKZQHHpSufkgS9FP2q0w5ajdk2JkOqhks2B9A7Jk6%2FI8GmMyAHWulmcdb%2FFiEy2WPhECmh9E75vFdba6DFcNzQF01Zk5A5nod51UzuHF3DKAkpkSuJv6aPnKHWlvO9VPqnLQwzJ0rU3qvvtBWYVoTQTFbHikWugA3bm%2FzbYbQkYbJm7Bf0tnF9fDN%2BbbXzLr8OfmKmAcwVaHbDN7TL55K%2BwoYew4lAJqZT18yPEC35mnWpEjQVnSO2KhwvZiNTPeVbY9FRmBcaGlh7jzSyp7RNNHX560nWJktr8ySKKPtH5o2hUctqva4da63rLp%2BbSGJX1vQawmBoBA1%2Bs%2FmfLRGM0M%2B7arVF93dZ2bA1vuGxWwVi9BOgFi45bLyhpcS6Y1KJwc7PI3CV%2BN4M0ZLdfAfp5Wg5bqnLh3Dn1UG6NpCzb%2B9x5hn9dQ6hFU2wUrwdNPSufIQmCk4UrAihZGhQi6oml8KvJOYTLj6%2FzLrEkV9fRuD0YAbTucVkVZfGJMqPgYr6n%2BoCxBPqTVhgFF5QQsIobuOx7SgR1mKtgDj9L7T5MB1zZ7yixitdh%2BSwMPK7jr0GOqUBog0Ni5Q%2BFxFCKjkI7MemG8i7C9CtYFwnovG0Hh8otQiBx%2FG1kPN87fS08yxPiLpWrdL5FwlSpWVH9wTvZieIfgX7fp05UQlToNiqbMsBn1ekhh5YII90o2vUg%2BVuLVhWmFebXYXrGokznec6xibmccOoDjGfQ4mNZn0ncGvgfZGtqvioHugEILBlaoMnYWnc2K559jrULVDgoctclREGEfTyHDe2&X-Amz-Signature=a2a416840c8ba1178790fe171dba99c4497e7cdda0c37bbeae866590ad60f887&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

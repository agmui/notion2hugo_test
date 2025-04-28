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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPZKJXE7%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvl4PGr3%2BndcDcO%2Flvv%2FM%2B1VJedgcTi5QgQWxRlDcHqgIhAPfhji61XnrYBFwh5f%2FtAlj27HnXVqZGEpCF%2BTKv1BO5Kv8DCHYQABoMNjM3NDIzMTgzODA1IgwsJJVR3VYp6QvcwW0q3ANjcBw9hNescyg2tRm0y4JUU%2FjpGd4UWAdiFGV236aWWx07ElMpzBuZ0ztlbISQSEypaIVErE5%2B4vydfMIm8D%2BALcjZl%2F83ceJQDR7AqVC43%2FSFKVZCiojacnW%2F1nJmlLHaHGqjiPlmnt3G%2B3yGW%2Bgs%2Bn9xMMkqKuO1xUH%2FP%2BkRjtE9JppXL4ypxUxtVWPHL0mVSWG2IJ5ppextdZB8PgOKFbuljcpCrPO9tvHSGvRZ4ZFdIVc51vFy3yxw9leuinLOAyFRdUaknIlAQbAG%2FPc6QQe3cN7qIoLRRy6uRXP%2BOlJpoVgqJdcRDCK6SnX4rioJP9HwJExHJFce4oGCRF3aqYt8g0FqcEA8kMZma%2Fs1ZBtv4P6sZWcjKts6dihQg53csgTwXXOmDVFVdpMiyZbvBYV8x7rp6dDHf8VXJRUoxo1ViipfbK2svmdAr0iuMXCmKFIfJ9ZvN33p0dqtkX6Y%2FY%2BS9DaK7DJu4LWAXqNeFArRU97E3KF4JXqsUAGoEai9Mz2o7kIQAHlEomL%2FR4l4eFbzsU7mflrqX7U6XyUbaFUBkDPBOgjc9SfBV7Iuq07c6dhXFgMKknv0242km%2BU2Q5KbDy7fQzSTYozU7hzJgHZ3TsqDa3KR4JJdWTChg77ABjqkAVxeVlW037spFi62i4bY4Jkqcvz8ncvGYF14EcgyuDfk%2BK8fghUczMQ67%2FRSQDKV6bfZRv4sOPfJEOmriVlo31QNjTghfYQYQ3hJtETyQ5xK45BRySirxfgrNASDmJfrovC5DSTygulBIYH8DxJQKkQgFHG7gibVQL31NMhHXPgGMHbzvczQzld7YUSyf0PZ5sbEUQ4b8H0WrQO8IZS2s2Qz0Ckz&X-Amz-Signature=f6bde7765b903ee1703466040a7fa5c80c4539c5dc11c2d75b91b5a33d76cd6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPZKJXE7%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvl4PGr3%2BndcDcO%2Flvv%2FM%2B1VJedgcTi5QgQWxRlDcHqgIhAPfhji61XnrYBFwh5f%2FtAlj27HnXVqZGEpCF%2BTKv1BO5Kv8DCHYQABoMNjM3NDIzMTgzODA1IgwsJJVR3VYp6QvcwW0q3ANjcBw9hNescyg2tRm0y4JUU%2FjpGd4UWAdiFGV236aWWx07ElMpzBuZ0ztlbISQSEypaIVErE5%2B4vydfMIm8D%2BALcjZl%2F83ceJQDR7AqVC43%2FSFKVZCiojacnW%2F1nJmlLHaHGqjiPlmnt3G%2B3yGW%2Bgs%2Bn9xMMkqKuO1xUH%2FP%2BkRjtE9JppXL4ypxUxtVWPHL0mVSWG2IJ5ppextdZB8PgOKFbuljcpCrPO9tvHSGvRZ4ZFdIVc51vFy3yxw9leuinLOAyFRdUaknIlAQbAG%2FPc6QQe3cN7qIoLRRy6uRXP%2BOlJpoVgqJdcRDCK6SnX4rioJP9HwJExHJFce4oGCRF3aqYt8g0FqcEA8kMZma%2Fs1ZBtv4P6sZWcjKts6dihQg53csgTwXXOmDVFVdpMiyZbvBYV8x7rp6dDHf8VXJRUoxo1ViipfbK2svmdAr0iuMXCmKFIfJ9ZvN33p0dqtkX6Y%2FY%2BS9DaK7DJu4LWAXqNeFArRU97E3KF4JXqsUAGoEai9Mz2o7kIQAHlEomL%2FR4l4eFbzsU7mflrqX7U6XyUbaFUBkDPBOgjc9SfBV7Iuq07c6dhXFgMKknv0242km%2BU2Q5KbDy7fQzSTYozU7hzJgHZ3TsqDa3KR4JJdWTChg77ABjqkAVxeVlW037spFi62i4bY4Jkqcvz8ncvGYF14EcgyuDfk%2BK8fghUczMQ67%2FRSQDKV6bfZRv4sOPfJEOmriVlo31QNjTghfYQYQ3hJtETyQ5xK45BRySirxfgrNASDmJfrovC5DSTygulBIYH8DxJQKkQgFHG7gibVQL31NMhHXPgGMHbzvczQzld7YUSyf0PZ5sbEUQ4b8H0WrQO8IZS2s2Qz0Ckz&X-Amz-Signature=b5db35f96a0cba3ab5e1cb06968ad865de85c169f748e434da5540a666e0bb53&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPZKJXE7%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvl4PGr3%2BndcDcO%2Flvv%2FM%2B1VJedgcTi5QgQWxRlDcHqgIhAPfhji61XnrYBFwh5f%2FtAlj27HnXVqZGEpCF%2BTKv1BO5Kv8DCHYQABoMNjM3NDIzMTgzODA1IgwsJJVR3VYp6QvcwW0q3ANjcBw9hNescyg2tRm0y4JUU%2FjpGd4UWAdiFGV236aWWx07ElMpzBuZ0ztlbISQSEypaIVErE5%2B4vydfMIm8D%2BALcjZl%2F83ceJQDR7AqVC43%2FSFKVZCiojacnW%2F1nJmlLHaHGqjiPlmnt3G%2B3yGW%2Bgs%2Bn9xMMkqKuO1xUH%2FP%2BkRjtE9JppXL4ypxUxtVWPHL0mVSWG2IJ5ppextdZB8PgOKFbuljcpCrPO9tvHSGvRZ4ZFdIVc51vFy3yxw9leuinLOAyFRdUaknIlAQbAG%2FPc6QQe3cN7qIoLRRy6uRXP%2BOlJpoVgqJdcRDCK6SnX4rioJP9HwJExHJFce4oGCRF3aqYt8g0FqcEA8kMZma%2Fs1ZBtv4P6sZWcjKts6dihQg53csgTwXXOmDVFVdpMiyZbvBYV8x7rp6dDHf8VXJRUoxo1ViipfbK2svmdAr0iuMXCmKFIfJ9ZvN33p0dqtkX6Y%2FY%2BS9DaK7DJu4LWAXqNeFArRU97E3KF4JXqsUAGoEai9Mz2o7kIQAHlEomL%2FR4l4eFbzsU7mflrqX7U6XyUbaFUBkDPBOgjc9SfBV7Iuq07c6dhXFgMKknv0242km%2BU2Q5KbDy7fQzSTYozU7hzJgHZ3TsqDa3KR4JJdWTChg77ABjqkAVxeVlW037spFi62i4bY4Jkqcvz8ncvGYF14EcgyuDfk%2BK8fghUczMQ67%2FRSQDKV6bfZRv4sOPfJEOmriVlo31QNjTghfYQYQ3hJtETyQ5xK45BRySirxfgrNASDmJfrovC5DSTygulBIYH8DxJQKkQgFHG7gibVQL31NMhHXPgGMHbzvczQzld7YUSyf0PZ5sbEUQ4b8H0WrQO8IZS2s2Qz0Ckz&X-Amz-Signature=2964ec4010dfccbcbebe0774df3688fe4a1b793bf4e71319017e0e610a7a030f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPZKJXE7%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvl4PGr3%2BndcDcO%2Flvv%2FM%2B1VJedgcTi5QgQWxRlDcHqgIhAPfhji61XnrYBFwh5f%2FtAlj27HnXVqZGEpCF%2BTKv1BO5Kv8DCHYQABoMNjM3NDIzMTgzODA1IgwsJJVR3VYp6QvcwW0q3ANjcBw9hNescyg2tRm0y4JUU%2FjpGd4UWAdiFGV236aWWx07ElMpzBuZ0ztlbISQSEypaIVErE5%2B4vydfMIm8D%2BALcjZl%2F83ceJQDR7AqVC43%2FSFKVZCiojacnW%2F1nJmlLHaHGqjiPlmnt3G%2B3yGW%2Bgs%2Bn9xMMkqKuO1xUH%2FP%2BkRjtE9JppXL4ypxUxtVWPHL0mVSWG2IJ5ppextdZB8PgOKFbuljcpCrPO9tvHSGvRZ4ZFdIVc51vFy3yxw9leuinLOAyFRdUaknIlAQbAG%2FPc6QQe3cN7qIoLRRy6uRXP%2BOlJpoVgqJdcRDCK6SnX4rioJP9HwJExHJFce4oGCRF3aqYt8g0FqcEA8kMZma%2Fs1ZBtv4P6sZWcjKts6dihQg53csgTwXXOmDVFVdpMiyZbvBYV8x7rp6dDHf8VXJRUoxo1ViipfbK2svmdAr0iuMXCmKFIfJ9ZvN33p0dqtkX6Y%2FY%2BS9DaK7DJu4LWAXqNeFArRU97E3KF4JXqsUAGoEai9Mz2o7kIQAHlEomL%2FR4l4eFbzsU7mflrqX7U6XyUbaFUBkDPBOgjc9SfBV7Iuq07c6dhXFgMKknv0242km%2BU2Q5KbDy7fQzSTYozU7hzJgHZ3TsqDa3KR4JJdWTChg77ABjqkAVxeVlW037spFi62i4bY4Jkqcvz8ncvGYF14EcgyuDfk%2BK8fghUczMQ67%2FRSQDKV6bfZRv4sOPfJEOmriVlo31QNjTghfYQYQ3hJtETyQ5xK45BRySirxfgrNASDmJfrovC5DSTygulBIYH8DxJQKkQgFHG7gibVQL31NMhHXPgGMHbzvczQzld7YUSyf0PZ5sbEUQ4b8H0WrQO8IZS2s2Qz0Ckz&X-Amz-Signature=ea8ec8c0eac96d551a9d001db1af4bf5d27ac4d8ac224f2bc39e1305f2d847be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPZKJXE7%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvl4PGr3%2BndcDcO%2Flvv%2FM%2B1VJedgcTi5QgQWxRlDcHqgIhAPfhji61XnrYBFwh5f%2FtAlj27HnXVqZGEpCF%2BTKv1BO5Kv8DCHYQABoMNjM3NDIzMTgzODA1IgwsJJVR3VYp6QvcwW0q3ANjcBw9hNescyg2tRm0y4JUU%2FjpGd4UWAdiFGV236aWWx07ElMpzBuZ0ztlbISQSEypaIVErE5%2B4vydfMIm8D%2BALcjZl%2F83ceJQDR7AqVC43%2FSFKVZCiojacnW%2F1nJmlLHaHGqjiPlmnt3G%2B3yGW%2Bgs%2Bn9xMMkqKuO1xUH%2FP%2BkRjtE9JppXL4ypxUxtVWPHL0mVSWG2IJ5ppextdZB8PgOKFbuljcpCrPO9tvHSGvRZ4ZFdIVc51vFy3yxw9leuinLOAyFRdUaknIlAQbAG%2FPc6QQe3cN7qIoLRRy6uRXP%2BOlJpoVgqJdcRDCK6SnX4rioJP9HwJExHJFce4oGCRF3aqYt8g0FqcEA8kMZma%2Fs1ZBtv4P6sZWcjKts6dihQg53csgTwXXOmDVFVdpMiyZbvBYV8x7rp6dDHf8VXJRUoxo1ViipfbK2svmdAr0iuMXCmKFIfJ9ZvN33p0dqtkX6Y%2FY%2BS9DaK7DJu4LWAXqNeFArRU97E3KF4JXqsUAGoEai9Mz2o7kIQAHlEomL%2FR4l4eFbzsU7mflrqX7U6XyUbaFUBkDPBOgjc9SfBV7Iuq07c6dhXFgMKknv0242km%2BU2Q5KbDy7fQzSTYozU7hzJgHZ3TsqDa3KR4JJdWTChg77ABjqkAVxeVlW037spFi62i4bY4Jkqcvz8ncvGYF14EcgyuDfk%2BK8fghUczMQ67%2FRSQDKV6bfZRv4sOPfJEOmriVlo31QNjTghfYQYQ3hJtETyQ5xK45BRySirxfgrNASDmJfrovC5DSTygulBIYH8DxJQKkQgFHG7gibVQL31NMhHXPgGMHbzvczQzld7YUSyf0PZ5sbEUQ4b8H0WrQO8IZS2s2Qz0Ckz&X-Amz-Signature=8cade74e0681e8646bfeacc5c283a2b257ed5614e6d9296e2ae31427357285f9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

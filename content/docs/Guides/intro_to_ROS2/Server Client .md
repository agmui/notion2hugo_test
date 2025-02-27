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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM5XL3YS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDhdalCLtkXQ%2Fg2663eQ07VN9kKIdaU%2BjsEo%2B4udTv6kgIgfhkcWK7KdQoF4lldN1zdCMNmdftLnW3GIWsFHtQwB7kq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDOTqeUizLh4DUpSqMyrcAy8W1SIHExbsbBmqyet4WzwjgSBxQe1P7JTshfk45zZoPuUaVd2am3xHIhdlSYkLqTgVKjwHii7AbnutGfl51XQ2C5P5%2FSIYY1DVbNyK1T9nurwGf8ipx4pRbfrjDvpY8ULi1dIjRx7qmIRCYAuJ1XW68WC8nuNCVfiWwWabz3PPmiBd2lc%2FokookY603vsuDEkeXnfLpWn%2BIJJ%2BH%2F0ew%2FogfzZIe3i9B%2BJX8iru%2FZJyi3ubSWwavie%2Fg4YIxhKdAzs8ma%2BmfhjV1ft%2F4x7ZVsrbA%2BCbFDbauDMr1m1o%2BDulrg2ZMFmjkEcH4UDhpXVEDtGI8jTG14B%2FFZ4LoMvz0iWw7CmceMKJhQL%2FfIflx8PKFBg0Zy3m8yMkuWtlQBoBSiR1XOHjl7ZcoRGP6J%2BA9LTs01WdL5k%2FjAasWaS4rVsRTbU%2FhAbgMEaGKkWswub7wrJTBQFejp8%2BRQHJXJYDSFNqVQ08w%2FG5FIThB1oEsx4rdm5VyDFhMxGt0kf5jA5vI%2BNa3RGQIGer%2BuYn5qULP7J%2BEEoNmb%2BfSLxtVYSatWslyazE6fwKOSwdFNmJpYxLZ4%2FbA5MPx1nvVDELn2wgarmNczfZoZ8fjDo64Eilc2a%2BC3jh8q0ieSWPC0wYMI%2By%2F70GOqUB4lT7pfweNvLoo3yWgd9HX9NUM2G16yNLEB9YT%2BUxsgYUx52Ea%2FfgT9uDucyjFHqNjc%2FMwDw7q5n7gfPuJ0L1CVCXgBXlmUvw5siADX28s5hGFKJpmxED0Gwfcv%2FdmDU%2F46RgVOhamEkUR%2FH0VhdmFdX0xc2K65Krt75Pzl%2FV5wahx8L3%2BNQtlA7OPwFPrC0Q7Ur68rOsoqpu%2ByLi3aTHZTxqHrFt&X-Amz-Signature=4d7c77bdc1335d2b0d2f4cd524560903552b9bdc630391c63873b6c33efad54b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM5XL3YS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDhdalCLtkXQ%2Fg2663eQ07VN9kKIdaU%2BjsEo%2B4udTv6kgIgfhkcWK7KdQoF4lldN1zdCMNmdftLnW3GIWsFHtQwB7kq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDOTqeUizLh4DUpSqMyrcAy8W1SIHExbsbBmqyet4WzwjgSBxQe1P7JTshfk45zZoPuUaVd2am3xHIhdlSYkLqTgVKjwHii7AbnutGfl51XQ2C5P5%2FSIYY1DVbNyK1T9nurwGf8ipx4pRbfrjDvpY8ULi1dIjRx7qmIRCYAuJ1XW68WC8nuNCVfiWwWabz3PPmiBd2lc%2FokookY603vsuDEkeXnfLpWn%2BIJJ%2BH%2F0ew%2FogfzZIe3i9B%2BJX8iru%2FZJyi3ubSWwavie%2Fg4YIxhKdAzs8ma%2BmfhjV1ft%2F4x7ZVsrbA%2BCbFDbauDMr1m1o%2BDulrg2ZMFmjkEcH4UDhpXVEDtGI8jTG14B%2FFZ4LoMvz0iWw7CmceMKJhQL%2FfIflx8PKFBg0Zy3m8yMkuWtlQBoBSiR1XOHjl7ZcoRGP6J%2BA9LTs01WdL5k%2FjAasWaS4rVsRTbU%2FhAbgMEaGKkWswub7wrJTBQFejp8%2BRQHJXJYDSFNqVQ08w%2FG5FIThB1oEsx4rdm5VyDFhMxGt0kf5jA5vI%2BNa3RGQIGer%2BuYn5qULP7J%2BEEoNmb%2BfSLxtVYSatWslyazE6fwKOSwdFNmJpYxLZ4%2FbA5MPx1nvVDELn2wgarmNczfZoZ8fjDo64Eilc2a%2BC3jh8q0ieSWPC0wYMI%2By%2F70GOqUB4lT7pfweNvLoo3yWgd9HX9NUM2G16yNLEB9YT%2BUxsgYUx52Ea%2FfgT9uDucyjFHqNjc%2FMwDw7q5n7gfPuJ0L1CVCXgBXlmUvw5siADX28s5hGFKJpmxED0Gwfcv%2FdmDU%2F46RgVOhamEkUR%2FH0VhdmFdX0xc2K65Krt75Pzl%2FV5wahx8L3%2BNQtlA7OPwFPrC0Q7Ur68rOsoqpu%2ByLi3aTHZTxqHrFt&X-Amz-Signature=55312a925d9a88e6f03b0c882ae1c4342b67edfc1a9118dd28518792937408ff&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM5XL3YS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDhdalCLtkXQ%2Fg2663eQ07VN9kKIdaU%2BjsEo%2B4udTv6kgIgfhkcWK7KdQoF4lldN1zdCMNmdftLnW3GIWsFHtQwB7kq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDOTqeUizLh4DUpSqMyrcAy8W1SIHExbsbBmqyet4WzwjgSBxQe1P7JTshfk45zZoPuUaVd2am3xHIhdlSYkLqTgVKjwHii7AbnutGfl51XQ2C5P5%2FSIYY1DVbNyK1T9nurwGf8ipx4pRbfrjDvpY8ULi1dIjRx7qmIRCYAuJ1XW68WC8nuNCVfiWwWabz3PPmiBd2lc%2FokookY603vsuDEkeXnfLpWn%2BIJJ%2BH%2F0ew%2FogfzZIe3i9B%2BJX8iru%2FZJyi3ubSWwavie%2Fg4YIxhKdAzs8ma%2BmfhjV1ft%2F4x7ZVsrbA%2BCbFDbauDMr1m1o%2BDulrg2ZMFmjkEcH4UDhpXVEDtGI8jTG14B%2FFZ4LoMvz0iWw7CmceMKJhQL%2FfIflx8PKFBg0Zy3m8yMkuWtlQBoBSiR1XOHjl7ZcoRGP6J%2BA9LTs01WdL5k%2FjAasWaS4rVsRTbU%2FhAbgMEaGKkWswub7wrJTBQFejp8%2BRQHJXJYDSFNqVQ08w%2FG5FIThB1oEsx4rdm5VyDFhMxGt0kf5jA5vI%2BNa3RGQIGer%2BuYn5qULP7J%2BEEoNmb%2BfSLxtVYSatWslyazE6fwKOSwdFNmJpYxLZ4%2FbA5MPx1nvVDELn2wgarmNczfZoZ8fjDo64Eilc2a%2BC3jh8q0ieSWPC0wYMI%2By%2F70GOqUB4lT7pfweNvLoo3yWgd9HX9NUM2G16yNLEB9YT%2BUxsgYUx52Ea%2FfgT9uDucyjFHqNjc%2FMwDw7q5n7gfPuJ0L1CVCXgBXlmUvw5siADX28s5hGFKJpmxED0Gwfcv%2FdmDU%2F46RgVOhamEkUR%2FH0VhdmFdX0xc2K65Krt75Pzl%2FV5wahx8L3%2BNQtlA7OPwFPrC0Q7Ur68rOsoqpu%2ByLi3aTHZTxqHrFt&X-Amz-Signature=bf22d2ba05299e0605c90f3c765ec39bc1324c6cbca284e2d42f2a7c518a6d86&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM5XL3YS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDhdalCLtkXQ%2Fg2663eQ07VN9kKIdaU%2BjsEo%2B4udTv6kgIgfhkcWK7KdQoF4lldN1zdCMNmdftLnW3GIWsFHtQwB7kq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDOTqeUizLh4DUpSqMyrcAy8W1SIHExbsbBmqyet4WzwjgSBxQe1P7JTshfk45zZoPuUaVd2am3xHIhdlSYkLqTgVKjwHii7AbnutGfl51XQ2C5P5%2FSIYY1DVbNyK1T9nurwGf8ipx4pRbfrjDvpY8ULi1dIjRx7qmIRCYAuJ1XW68WC8nuNCVfiWwWabz3PPmiBd2lc%2FokookY603vsuDEkeXnfLpWn%2BIJJ%2BH%2F0ew%2FogfzZIe3i9B%2BJX8iru%2FZJyi3ubSWwavie%2Fg4YIxhKdAzs8ma%2BmfhjV1ft%2F4x7ZVsrbA%2BCbFDbauDMr1m1o%2BDulrg2ZMFmjkEcH4UDhpXVEDtGI8jTG14B%2FFZ4LoMvz0iWw7CmceMKJhQL%2FfIflx8PKFBg0Zy3m8yMkuWtlQBoBSiR1XOHjl7ZcoRGP6J%2BA9LTs01WdL5k%2FjAasWaS4rVsRTbU%2FhAbgMEaGKkWswub7wrJTBQFejp8%2BRQHJXJYDSFNqVQ08w%2FG5FIThB1oEsx4rdm5VyDFhMxGt0kf5jA5vI%2BNa3RGQIGer%2BuYn5qULP7J%2BEEoNmb%2BfSLxtVYSatWslyazE6fwKOSwdFNmJpYxLZ4%2FbA5MPx1nvVDELn2wgarmNczfZoZ8fjDo64Eilc2a%2BC3jh8q0ieSWPC0wYMI%2By%2F70GOqUB4lT7pfweNvLoo3yWgd9HX9NUM2G16yNLEB9YT%2BUxsgYUx52Ea%2FfgT9uDucyjFHqNjc%2FMwDw7q5n7gfPuJ0L1CVCXgBXlmUvw5siADX28s5hGFKJpmxED0Gwfcv%2FdmDU%2F46RgVOhamEkUR%2FH0VhdmFdX0xc2K65Krt75Pzl%2FV5wahx8L3%2BNQtlA7OPwFPrC0Q7Ur68rOsoqpu%2ByLi3aTHZTxqHrFt&X-Amz-Signature=c0b51124fde516414794dd9017578ea2af85c5f3a1e9fc11a08ca8704781fa49&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM5XL3YS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDhdalCLtkXQ%2Fg2663eQ07VN9kKIdaU%2BjsEo%2B4udTv6kgIgfhkcWK7KdQoF4lldN1zdCMNmdftLnW3GIWsFHtQwB7kq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDOTqeUizLh4DUpSqMyrcAy8W1SIHExbsbBmqyet4WzwjgSBxQe1P7JTshfk45zZoPuUaVd2am3xHIhdlSYkLqTgVKjwHii7AbnutGfl51XQ2C5P5%2FSIYY1DVbNyK1T9nurwGf8ipx4pRbfrjDvpY8ULi1dIjRx7qmIRCYAuJ1XW68WC8nuNCVfiWwWabz3PPmiBd2lc%2FokookY603vsuDEkeXnfLpWn%2BIJJ%2BH%2F0ew%2FogfzZIe3i9B%2BJX8iru%2FZJyi3ubSWwavie%2Fg4YIxhKdAzs8ma%2BmfhjV1ft%2F4x7ZVsrbA%2BCbFDbauDMr1m1o%2BDulrg2ZMFmjkEcH4UDhpXVEDtGI8jTG14B%2FFZ4LoMvz0iWw7CmceMKJhQL%2FfIflx8PKFBg0Zy3m8yMkuWtlQBoBSiR1XOHjl7ZcoRGP6J%2BA9LTs01WdL5k%2FjAasWaS4rVsRTbU%2FhAbgMEaGKkWswub7wrJTBQFejp8%2BRQHJXJYDSFNqVQ08w%2FG5FIThB1oEsx4rdm5VyDFhMxGt0kf5jA5vI%2BNa3RGQIGer%2BuYn5qULP7J%2BEEoNmb%2BfSLxtVYSatWslyazE6fwKOSwdFNmJpYxLZ4%2FbA5MPx1nvVDELn2wgarmNczfZoZ8fjDo64Eilc2a%2BC3jh8q0ieSWPC0wYMI%2By%2F70GOqUB4lT7pfweNvLoo3yWgd9HX9NUM2G16yNLEB9YT%2BUxsgYUx52Ea%2FfgT9uDucyjFHqNjc%2FMwDw7q5n7gfPuJ0L1CVCXgBXlmUvw5siADX28s5hGFKJpmxED0Gwfcv%2FdmDU%2F46RgVOhamEkUR%2FH0VhdmFdX0xc2K65Krt75Pzl%2FV5wahx8L3%2BNQtlA7OPwFPrC0Q7Ur68rOsoqpu%2ByLi3aTHZTxqHrFt&X-Amz-Signature=6f52abb8e6ba486c02a9d5387e8d42791b7e26c978ce137a18caaeb53a9dbe13&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

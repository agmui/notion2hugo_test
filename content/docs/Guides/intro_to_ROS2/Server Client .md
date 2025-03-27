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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645EAQDZZ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ9w1WKrSDlE4RZD48by2cwF6H85fspjH7PvTcSS9d5AIhAJnj14Hh7YICY7QqQ0%2F5%2F6WPKz6Q05oJx91ZoSVfAs5%2FKv8DCDwQABoMNjM3NDIzMTgzODA1Igz3mM0iLBaLuxuwPlIq3AOOYcXgio0BgJmtuVuKtgTVp%2B9xEZk6qDgv4GzSccR%2FsyKd%2BtfNBP7M6%2FqjM2Snuz%2B57uHCNui8fy9f6BKtjRjv2uLwN16Q3L9pLcIT6ya1NYSlT9L%2FnW33QOl4ljBFQ%2FcrQcHCq6cevkCpoVMfeUt5AHOdX3Lpwn6FbSX3A%2Fqd54A6qNd5%2FPn4Xz%2B2KvX5OxZih%2B6ZUN5HQV6D6GAeDvDLBmAT6qLdwgWQJrYj3icPjI5n5f5dPHcA1qM%2BXoDkh7iqdV3CR%2FlvklTlJJrnRU90Er9IFgq7Rw3RsSLHcnls1yFAn%2F4JiD6O5zNV4sPi4QVnXEnLq73Zwf%2BFn5rzv9ZCcrbYafP6pQ63AqW4oJcoqS857zWzzMD0KpKfF95rWpSUjJywytVH8%2F2Whvt21qAo8dU9UpN5TF%2BHOb5EEvWwijGNxY0KV%2FV6UTgKnrmzTmjVSzwwUQPM0mm73yuPvG5hrNmcwTF%2B2DTOrDxJeiC%2BKl1PkRZBNtCmunrtqF5c8DDZhqtGcBFxXA0xKHi%2FouuwYpAJO62BMKwjORZY%2FKKTaJbwWelcbBEMsDzQwDaTBRwWbwp%2FNsDXdD%2F2HfT76yTrNv1aveDIyzF4iLpp6tlIKCQoKzGgMRsZ4DmJ8TCriZO%2FBjqkAeUBpQv%2FH68iBpiCAehfzeYrgVrEvCZ4wxrWsCZII9txpSHHAb1fR8sz8Ee3RgDudDJIqaiIp2E2VAG2PkfYgOJznDLOfwM6QN1oUpUB0Tu2DkgNxhaeTKmBJsL0ZDu2AUyIiAa4clD5pgYpLVlQQvgk4zsjb%2Ft9Nw2Nm5DDPoOdLfJPIP2WcaK0w52S3ybhG1XTrZMaH6NYi0RhuqY2sqHiafiC&X-Amz-Signature=d9511fff84848a01350af4b91346df6b0c115c52e7ac51ab4e8294697243151e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645EAQDZZ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ9w1WKrSDlE4RZD48by2cwF6H85fspjH7PvTcSS9d5AIhAJnj14Hh7YICY7QqQ0%2F5%2F6WPKz6Q05oJx91ZoSVfAs5%2FKv8DCDwQABoMNjM3NDIzMTgzODA1Igz3mM0iLBaLuxuwPlIq3AOOYcXgio0BgJmtuVuKtgTVp%2B9xEZk6qDgv4GzSccR%2FsyKd%2BtfNBP7M6%2FqjM2Snuz%2B57uHCNui8fy9f6BKtjRjv2uLwN16Q3L9pLcIT6ya1NYSlT9L%2FnW33QOl4ljBFQ%2FcrQcHCq6cevkCpoVMfeUt5AHOdX3Lpwn6FbSX3A%2Fqd54A6qNd5%2FPn4Xz%2B2KvX5OxZih%2B6ZUN5HQV6D6GAeDvDLBmAT6qLdwgWQJrYj3icPjI5n5f5dPHcA1qM%2BXoDkh7iqdV3CR%2FlvklTlJJrnRU90Er9IFgq7Rw3RsSLHcnls1yFAn%2F4JiD6O5zNV4sPi4QVnXEnLq73Zwf%2BFn5rzv9ZCcrbYafP6pQ63AqW4oJcoqS857zWzzMD0KpKfF95rWpSUjJywytVH8%2F2Whvt21qAo8dU9UpN5TF%2BHOb5EEvWwijGNxY0KV%2FV6UTgKnrmzTmjVSzwwUQPM0mm73yuPvG5hrNmcwTF%2B2DTOrDxJeiC%2BKl1PkRZBNtCmunrtqF5c8DDZhqtGcBFxXA0xKHi%2FouuwYpAJO62BMKwjORZY%2FKKTaJbwWelcbBEMsDzQwDaTBRwWbwp%2FNsDXdD%2F2HfT76yTrNv1aveDIyzF4iLpp6tlIKCQoKzGgMRsZ4DmJ8TCriZO%2FBjqkAeUBpQv%2FH68iBpiCAehfzeYrgVrEvCZ4wxrWsCZII9txpSHHAb1fR8sz8Ee3RgDudDJIqaiIp2E2VAG2PkfYgOJznDLOfwM6QN1oUpUB0Tu2DkgNxhaeTKmBJsL0ZDu2AUyIiAa4clD5pgYpLVlQQvgk4zsjb%2Ft9Nw2Nm5DDPoOdLfJPIP2WcaK0w52S3ybhG1XTrZMaH6NYi0RhuqY2sqHiafiC&X-Amz-Signature=1e83d1cc6f440c36b017e1a4e95364a4fa3887af4da079593e0316e467e482ba&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645EAQDZZ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ9w1WKrSDlE4RZD48by2cwF6H85fspjH7PvTcSS9d5AIhAJnj14Hh7YICY7QqQ0%2F5%2F6WPKz6Q05oJx91ZoSVfAs5%2FKv8DCDwQABoMNjM3NDIzMTgzODA1Igz3mM0iLBaLuxuwPlIq3AOOYcXgio0BgJmtuVuKtgTVp%2B9xEZk6qDgv4GzSccR%2FsyKd%2BtfNBP7M6%2FqjM2Snuz%2B57uHCNui8fy9f6BKtjRjv2uLwN16Q3L9pLcIT6ya1NYSlT9L%2FnW33QOl4ljBFQ%2FcrQcHCq6cevkCpoVMfeUt5AHOdX3Lpwn6FbSX3A%2Fqd54A6qNd5%2FPn4Xz%2B2KvX5OxZih%2B6ZUN5HQV6D6GAeDvDLBmAT6qLdwgWQJrYj3icPjI5n5f5dPHcA1qM%2BXoDkh7iqdV3CR%2FlvklTlJJrnRU90Er9IFgq7Rw3RsSLHcnls1yFAn%2F4JiD6O5zNV4sPi4QVnXEnLq73Zwf%2BFn5rzv9ZCcrbYafP6pQ63AqW4oJcoqS857zWzzMD0KpKfF95rWpSUjJywytVH8%2F2Whvt21qAo8dU9UpN5TF%2BHOb5EEvWwijGNxY0KV%2FV6UTgKnrmzTmjVSzwwUQPM0mm73yuPvG5hrNmcwTF%2B2DTOrDxJeiC%2BKl1PkRZBNtCmunrtqF5c8DDZhqtGcBFxXA0xKHi%2FouuwYpAJO62BMKwjORZY%2FKKTaJbwWelcbBEMsDzQwDaTBRwWbwp%2FNsDXdD%2F2HfT76yTrNv1aveDIyzF4iLpp6tlIKCQoKzGgMRsZ4DmJ8TCriZO%2FBjqkAeUBpQv%2FH68iBpiCAehfzeYrgVrEvCZ4wxrWsCZII9txpSHHAb1fR8sz8Ee3RgDudDJIqaiIp2E2VAG2PkfYgOJznDLOfwM6QN1oUpUB0Tu2DkgNxhaeTKmBJsL0ZDu2AUyIiAa4clD5pgYpLVlQQvgk4zsjb%2Ft9Nw2Nm5DDPoOdLfJPIP2WcaK0w52S3ybhG1XTrZMaH6NYi0RhuqY2sqHiafiC&X-Amz-Signature=fac1d57c79e461bf13265c4c3a0c137e0f92a901027f801ba406b45f617fb7f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645EAQDZZ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ9w1WKrSDlE4RZD48by2cwF6H85fspjH7PvTcSS9d5AIhAJnj14Hh7YICY7QqQ0%2F5%2F6WPKz6Q05oJx91ZoSVfAs5%2FKv8DCDwQABoMNjM3NDIzMTgzODA1Igz3mM0iLBaLuxuwPlIq3AOOYcXgio0BgJmtuVuKtgTVp%2B9xEZk6qDgv4GzSccR%2FsyKd%2BtfNBP7M6%2FqjM2Snuz%2B57uHCNui8fy9f6BKtjRjv2uLwN16Q3L9pLcIT6ya1NYSlT9L%2FnW33QOl4ljBFQ%2FcrQcHCq6cevkCpoVMfeUt5AHOdX3Lpwn6FbSX3A%2Fqd54A6qNd5%2FPn4Xz%2B2KvX5OxZih%2B6ZUN5HQV6D6GAeDvDLBmAT6qLdwgWQJrYj3icPjI5n5f5dPHcA1qM%2BXoDkh7iqdV3CR%2FlvklTlJJrnRU90Er9IFgq7Rw3RsSLHcnls1yFAn%2F4JiD6O5zNV4sPi4QVnXEnLq73Zwf%2BFn5rzv9ZCcrbYafP6pQ63AqW4oJcoqS857zWzzMD0KpKfF95rWpSUjJywytVH8%2F2Whvt21qAo8dU9UpN5TF%2BHOb5EEvWwijGNxY0KV%2FV6UTgKnrmzTmjVSzwwUQPM0mm73yuPvG5hrNmcwTF%2B2DTOrDxJeiC%2BKl1PkRZBNtCmunrtqF5c8DDZhqtGcBFxXA0xKHi%2FouuwYpAJO62BMKwjORZY%2FKKTaJbwWelcbBEMsDzQwDaTBRwWbwp%2FNsDXdD%2F2HfT76yTrNv1aveDIyzF4iLpp6tlIKCQoKzGgMRsZ4DmJ8TCriZO%2FBjqkAeUBpQv%2FH68iBpiCAehfzeYrgVrEvCZ4wxrWsCZII9txpSHHAb1fR8sz8Ee3RgDudDJIqaiIp2E2VAG2PkfYgOJznDLOfwM6QN1oUpUB0Tu2DkgNxhaeTKmBJsL0ZDu2AUyIiAa4clD5pgYpLVlQQvgk4zsjb%2Ft9Nw2Nm5DDPoOdLfJPIP2WcaK0w52S3ybhG1XTrZMaH6NYi0RhuqY2sqHiafiC&X-Amz-Signature=486174e4b1d6f7d1fc83d2e9fa4150b72c0405e6842d6e1210b407d6c3198d15&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645EAQDZZ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ9w1WKrSDlE4RZD48by2cwF6H85fspjH7PvTcSS9d5AIhAJnj14Hh7YICY7QqQ0%2F5%2F6WPKz6Q05oJx91ZoSVfAs5%2FKv8DCDwQABoMNjM3NDIzMTgzODA1Igz3mM0iLBaLuxuwPlIq3AOOYcXgio0BgJmtuVuKtgTVp%2B9xEZk6qDgv4GzSccR%2FsyKd%2BtfNBP7M6%2FqjM2Snuz%2B57uHCNui8fy9f6BKtjRjv2uLwN16Q3L9pLcIT6ya1NYSlT9L%2FnW33QOl4ljBFQ%2FcrQcHCq6cevkCpoVMfeUt5AHOdX3Lpwn6FbSX3A%2Fqd54A6qNd5%2FPn4Xz%2B2KvX5OxZih%2B6ZUN5HQV6D6GAeDvDLBmAT6qLdwgWQJrYj3icPjI5n5f5dPHcA1qM%2BXoDkh7iqdV3CR%2FlvklTlJJrnRU90Er9IFgq7Rw3RsSLHcnls1yFAn%2F4JiD6O5zNV4sPi4QVnXEnLq73Zwf%2BFn5rzv9ZCcrbYafP6pQ63AqW4oJcoqS857zWzzMD0KpKfF95rWpSUjJywytVH8%2F2Whvt21qAo8dU9UpN5TF%2BHOb5EEvWwijGNxY0KV%2FV6UTgKnrmzTmjVSzwwUQPM0mm73yuPvG5hrNmcwTF%2B2DTOrDxJeiC%2BKl1PkRZBNtCmunrtqF5c8DDZhqtGcBFxXA0xKHi%2FouuwYpAJO62BMKwjORZY%2FKKTaJbwWelcbBEMsDzQwDaTBRwWbwp%2FNsDXdD%2F2HfT76yTrNv1aveDIyzF4iLpp6tlIKCQoKzGgMRsZ4DmJ8TCriZO%2FBjqkAeUBpQv%2FH68iBpiCAehfzeYrgVrEvCZ4wxrWsCZII9txpSHHAb1fR8sz8Ee3RgDudDJIqaiIp2E2VAG2PkfYgOJznDLOfwM6QN1oUpUB0Tu2DkgNxhaeTKmBJsL0ZDu2AUyIiAa4clD5pgYpLVlQQvgk4zsjb%2Ft9Nw2Nm5DDPoOdLfJPIP2WcaK0w52S3ybhG1XTrZMaH6NYi0RhuqY2sqHiafiC&X-Amz-Signature=dde436d8eb1dc77b131805b5b1ea9ae2e5101f79763d4dda8f5d4cf0007e6e06&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

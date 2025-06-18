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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCIX4L6C%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr0BbAfZipct60TnbS3MDIFhakDJ2iEHgQI77y8TYUuAIgbbVqjEwXy3u3sT4piy%2FPXhVbWKHMwXh74PGB%2FDpngw8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHchFzf%2BmC7Gz15%2ByircA0N2OTn3HrqeE4MU7aVOkbzus%2Fc2MBeeDPeerLpUSkf54swSVUZ9cT2ENEb3PmRUAyIAvOPEC5cTc3QQFdQ2UWfLzeyTsttV5Rx48DOLRGhkJhDMEmN5Qr5Z5owwIOyGKCcvbaj4oP8RZ6vuW0Cg6LY38W1hBw%2FCmO33QGPLrQpMJ%2FvRPYnMhqbHH1cnV4KDZpXOnDxDguaJ%2FkvqfmSKNYsRPoY2o%2FevQLd6xax1f7lwORF0BW4H%2FjHLid6cw5UhRzUn7gtnhe5UHppT1%2BufCuX0hCmImTJmwCTvnvnqEmbdKWvfZ50VrsJnzwRJH%2FhHGr4iQ%2BMhicsrVY%2BUHbKTl0jejFNhldsPs3RLumlhPg7lO2bxHAsQwZiW4Epkej11ZSxKFLWDVK1VA9P49E810QvseDRDMP46atq4T2RmWODaOeizrlyiRHAUvcpov%2BmcQx6OD9FI6KjyyBO4U5TmS8ZG9rZ7OELeU2gQ%2Bg5eQEanWPGyguuaq5AhneCaoPljDuEUQQmO5a2yJP75fXyftbuPoxYxbDnIQno84dG9Azj7GUGQaggoTE%2BCU3MIyYzjPeHQyW%2FvDkG5XBORZXVUeuaDblXaqUp4g1hh%2Bzx3efUufMyA9kffpBRvPUz2MPDrx8IGOqUBlTF68OJ6%2F6xiHMVwIM35UYtZ%2Fco1s16MBsohcONtaAZz%2FhqbS6tpaRkr8hm6pVVhedtZoMCqjNoM6QWuJ%2BRWhJjczeoVC66wbt956Rbim1GU7xKe84kD%2FP00k3VUk2SMMFeF1IPlljTHwJj3c04gGcKJgWU%2BgbQbz%2Bceiv%2BEBmpiDRNkHN%2FPaOoCX3Q2dt5QkVabnSNqjWK%2BxENe%2FXEXbUoOM38i&X-Amz-Signature=10fdaa4adb71fbbe5ab60113028706ec8355c59068e81f3bb5382594bccec36d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCIX4L6C%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr0BbAfZipct60TnbS3MDIFhakDJ2iEHgQI77y8TYUuAIgbbVqjEwXy3u3sT4piy%2FPXhVbWKHMwXh74PGB%2FDpngw8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHchFzf%2BmC7Gz15%2ByircA0N2OTn3HrqeE4MU7aVOkbzus%2Fc2MBeeDPeerLpUSkf54swSVUZ9cT2ENEb3PmRUAyIAvOPEC5cTc3QQFdQ2UWfLzeyTsttV5Rx48DOLRGhkJhDMEmN5Qr5Z5owwIOyGKCcvbaj4oP8RZ6vuW0Cg6LY38W1hBw%2FCmO33QGPLrQpMJ%2FvRPYnMhqbHH1cnV4KDZpXOnDxDguaJ%2FkvqfmSKNYsRPoY2o%2FevQLd6xax1f7lwORF0BW4H%2FjHLid6cw5UhRzUn7gtnhe5UHppT1%2BufCuX0hCmImTJmwCTvnvnqEmbdKWvfZ50VrsJnzwRJH%2FhHGr4iQ%2BMhicsrVY%2BUHbKTl0jejFNhldsPs3RLumlhPg7lO2bxHAsQwZiW4Epkej11ZSxKFLWDVK1VA9P49E810QvseDRDMP46atq4T2RmWODaOeizrlyiRHAUvcpov%2BmcQx6OD9FI6KjyyBO4U5TmS8ZG9rZ7OELeU2gQ%2Bg5eQEanWPGyguuaq5AhneCaoPljDuEUQQmO5a2yJP75fXyftbuPoxYxbDnIQno84dG9Azj7GUGQaggoTE%2BCU3MIyYzjPeHQyW%2FvDkG5XBORZXVUeuaDblXaqUp4g1hh%2Bzx3efUufMyA9kffpBRvPUz2MPDrx8IGOqUBlTF68OJ6%2F6xiHMVwIM35UYtZ%2Fco1s16MBsohcONtaAZz%2FhqbS6tpaRkr8hm6pVVhedtZoMCqjNoM6QWuJ%2BRWhJjczeoVC66wbt956Rbim1GU7xKe84kD%2FP00k3VUk2SMMFeF1IPlljTHwJj3c04gGcKJgWU%2BgbQbz%2Bceiv%2BEBmpiDRNkHN%2FPaOoCX3Q2dt5QkVabnSNqjWK%2BxENe%2FXEXbUoOM38i&X-Amz-Signature=ed1132380564ea2238a41721c9ec55258bdfda469faac914c0756b2bf1996519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCIX4L6C%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr0BbAfZipct60TnbS3MDIFhakDJ2iEHgQI77y8TYUuAIgbbVqjEwXy3u3sT4piy%2FPXhVbWKHMwXh74PGB%2FDpngw8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHchFzf%2BmC7Gz15%2ByircA0N2OTn3HrqeE4MU7aVOkbzus%2Fc2MBeeDPeerLpUSkf54swSVUZ9cT2ENEb3PmRUAyIAvOPEC5cTc3QQFdQ2UWfLzeyTsttV5Rx48DOLRGhkJhDMEmN5Qr5Z5owwIOyGKCcvbaj4oP8RZ6vuW0Cg6LY38W1hBw%2FCmO33QGPLrQpMJ%2FvRPYnMhqbHH1cnV4KDZpXOnDxDguaJ%2FkvqfmSKNYsRPoY2o%2FevQLd6xax1f7lwORF0BW4H%2FjHLid6cw5UhRzUn7gtnhe5UHppT1%2BufCuX0hCmImTJmwCTvnvnqEmbdKWvfZ50VrsJnzwRJH%2FhHGr4iQ%2BMhicsrVY%2BUHbKTl0jejFNhldsPs3RLumlhPg7lO2bxHAsQwZiW4Epkej11ZSxKFLWDVK1VA9P49E810QvseDRDMP46atq4T2RmWODaOeizrlyiRHAUvcpov%2BmcQx6OD9FI6KjyyBO4U5TmS8ZG9rZ7OELeU2gQ%2Bg5eQEanWPGyguuaq5AhneCaoPljDuEUQQmO5a2yJP75fXyftbuPoxYxbDnIQno84dG9Azj7GUGQaggoTE%2BCU3MIyYzjPeHQyW%2FvDkG5XBORZXVUeuaDblXaqUp4g1hh%2Bzx3efUufMyA9kffpBRvPUz2MPDrx8IGOqUBlTF68OJ6%2F6xiHMVwIM35UYtZ%2Fco1s16MBsohcONtaAZz%2FhqbS6tpaRkr8hm6pVVhedtZoMCqjNoM6QWuJ%2BRWhJjczeoVC66wbt956Rbim1GU7xKe84kD%2FP00k3VUk2SMMFeF1IPlljTHwJj3c04gGcKJgWU%2BgbQbz%2Bceiv%2BEBmpiDRNkHN%2FPaOoCX3Q2dt5QkVabnSNqjWK%2BxENe%2FXEXbUoOM38i&X-Amz-Signature=4be0d084e120759680e8c836694c70b5ccc6e8e59fba2d272532baee305095b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCIX4L6C%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr0BbAfZipct60TnbS3MDIFhakDJ2iEHgQI77y8TYUuAIgbbVqjEwXy3u3sT4piy%2FPXhVbWKHMwXh74PGB%2FDpngw8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHchFzf%2BmC7Gz15%2ByircA0N2OTn3HrqeE4MU7aVOkbzus%2Fc2MBeeDPeerLpUSkf54swSVUZ9cT2ENEb3PmRUAyIAvOPEC5cTc3QQFdQ2UWfLzeyTsttV5Rx48DOLRGhkJhDMEmN5Qr5Z5owwIOyGKCcvbaj4oP8RZ6vuW0Cg6LY38W1hBw%2FCmO33QGPLrQpMJ%2FvRPYnMhqbHH1cnV4KDZpXOnDxDguaJ%2FkvqfmSKNYsRPoY2o%2FevQLd6xax1f7lwORF0BW4H%2FjHLid6cw5UhRzUn7gtnhe5UHppT1%2BufCuX0hCmImTJmwCTvnvnqEmbdKWvfZ50VrsJnzwRJH%2FhHGr4iQ%2BMhicsrVY%2BUHbKTl0jejFNhldsPs3RLumlhPg7lO2bxHAsQwZiW4Epkej11ZSxKFLWDVK1VA9P49E810QvseDRDMP46atq4T2RmWODaOeizrlyiRHAUvcpov%2BmcQx6OD9FI6KjyyBO4U5TmS8ZG9rZ7OELeU2gQ%2Bg5eQEanWPGyguuaq5AhneCaoPljDuEUQQmO5a2yJP75fXyftbuPoxYxbDnIQno84dG9Azj7GUGQaggoTE%2BCU3MIyYzjPeHQyW%2FvDkG5XBORZXVUeuaDblXaqUp4g1hh%2Bzx3efUufMyA9kffpBRvPUz2MPDrx8IGOqUBlTF68OJ6%2F6xiHMVwIM35UYtZ%2Fco1s16MBsohcONtaAZz%2FhqbS6tpaRkr8hm6pVVhedtZoMCqjNoM6QWuJ%2BRWhJjczeoVC66wbt956Rbim1GU7xKe84kD%2FP00k3VUk2SMMFeF1IPlljTHwJj3c04gGcKJgWU%2BgbQbz%2Bceiv%2BEBmpiDRNkHN%2FPaOoCX3Q2dt5QkVabnSNqjWK%2BxENe%2FXEXbUoOM38i&X-Amz-Signature=e15970c0efc0ef4f523d69da2d46d04364dd32ef6dc99ef5da01ba0990943b77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCIX4L6C%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr0BbAfZipct60TnbS3MDIFhakDJ2iEHgQI77y8TYUuAIgbbVqjEwXy3u3sT4piy%2FPXhVbWKHMwXh74PGB%2FDpngw8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHchFzf%2BmC7Gz15%2ByircA0N2OTn3HrqeE4MU7aVOkbzus%2Fc2MBeeDPeerLpUSkf54swSVUZ9cT2ENEb3PmRUAyIAvOPEC5cTc3QQFdQ2UWfLzeyTsttV5Rx48DOLRGhkJhDMEmN5Qr5Z5owwIOyGKCcvbaj4oP8RZ6vuW0Cg6LY38W1hBw%2FCmO33QGPLrQpMJ%2FvRPYnMhqbHH1cnV4KDZpXOnDxDguaJ%2FkvqfmSKNYsRPoY2o%2FevQLd6xax1f7lwORF0BW4H%2FjHLid6cw5UhRzUn7gtnhe5UHppT1%2BufCuX0hCmImTJmwCTvnvnqEmbdKWvfZ50VrsJnzwRJH%2FhHGr4iQ%2BMhicsrVY%2BUHbKTl0jejFNhldsPs3RLumlhPg7lO2bxHAsQwZiW4Epkej11ZSxKFLWDVK1VA9P49E810QvseDRDMP46atq4T2RmWODaOeizrlyiRHAUvcpov%2BmcQx6OD9FI6KjyyBO4U5TmS8ZG9rZ7OELeU2gQ%2Bg5eQEanWPGyguuaq5AhneCaoPljDuEUQQmO5a2yJP75fXyftbuPoxYxbDnIQno84dG9Azj7GUGQaggoTE%2BCU3MIyYzjPeHQyW%2FvDkG5XBORZXVUeuaDblXaqUp4g1hh%2Bzx3efUufMyA9kffpBRvPUz2MPDrx8IGOqUBlTF68OJ6%2F6xiHMVwIM35UYtZ%2Fco1s16MBsohcONtaAZz%2FhqbS6tpaRkr8hm6pVVhedtZoMCqjNoM6QWuJ%2BRWhJjczeoVC66wbt956Rbim1GU7xKe84kD%2FP00k3VUk2SMMFeF1IPlljTHwJj3c04gGcKJgWU%2BgbQbz%2Bceiv%2BEBmpiDRNkHN%2FPaOoCX3Q2dt5QkVabnSNqjWK%2BxENe%2FXEXbUoOM38i&X-Amz-Signature=433aeae4e3d19bf07f22e3908c8907c4c45552d6e47c7e2fee151eb6d5ddddb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

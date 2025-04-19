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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCE5LIAP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIDnaIflWK3bptjOlbzPZ7dJMBD96cNIT0PAJ6E5ujE2PAiEA3trTkwww32o0Wd7S6%2Bboz%2Buxxx9n1vyHPbRC0Z51uxgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnOW4Cj6cCwmwkznyrcAyUGT3fyIt2YRJiqsYeeRsQTU1sgx9%2FZXBq9%2BW%2B3aYyuI0ZAAS7nw9a1qza9yRBUec76UZ5TkUwC6xtt4bX7Ip4Ck7zzGPUqcD0y5cqD%2FqCE93btKWJ8v5nRI0%2FUIXU5cUw6DH9z1R9QuQ3382CuRJrOsrYXCQtS5I%2F2Lsj4QE5t%2FJQg9aOip%2FSQPinkqewfVKOmJyLbHfllWI%2BU0cnv2DKaJHmcTpHbcPuy0clZKdjwNVRFnOU%2But7jihAvbUPq8TfiERu5gzlK41Aa%2FmAyQ%2ByTuQBgKmjLebw8ZNDbqP4dwkZAwkK9fZ7Aw7oVG3cbVTF3Pt14v5313KDxHVGr9WIc3PGheJ1ijxo%2BT6fw18Aa2CN1jf8CWI%2FtoDLSaaw9SuV3bXInqSqJdSKccbqzDM4qC3LyArGUdUoQay5obUFf2iMY3bPUwO5wBBFLSxajjk7%2FNZiU89lilhnjcWFN0Rm%2FWlIqJsxzqQG7j9i7sg2zd4O%2FS2HjA891vWTXJgAv54U8TjiyCfw7YzfqSHuSeB4vGsXc7bPYEQUTW89jHh2Xn%2F7ijQaiHSRWLvNnd95nuFedwD3q%2FccDN0s7RKozhtjczXewJ68z5MpN1%2FZN8x3JO2MkfTb1i3Sxd%2FXTMMKdjsAGOqUBOgPshHsvH07911MvuOfS5j2jOYI0HQcXvfZRxo4w%2BzwxyukGT0KuAUVsnnwSmmRlZ3YQI71nKIdFU79McbKNWJd6NpqdeFKfGLLwh1fzpwDP5wKSZkZkSkTgU7MfVvURzSXs24Kg1M7SnBuFehLz%2F%2FWgHMIcbs8bkCiihy7tu2B9f%2FucM%2Ff6vCQkn5Cpdyg1D1rZjOBz%2B3rKw7TI5kbauFHcVR75&X-Amz-Signature=addaec0c7d55398278703c3b973514fa6b388d652594c3c1be1c4cba20375895&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCE5LIAP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIDnaIflWK3bptjOlbzPZ7dJMBD96cNIT0PAJ6E5ujE2PAiEA3trTkwww32o0Wd7S6%2Bboz%2Buxxx9n1vyHPbRC0Z51uxgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnOW4Cj6cCwmwkznyrcAyUGT3fyIt2YRJiqsYeeRsQTU1sgx9%2FZXBq9%2BW%2B3aYyuI0ZAAS7nw9a1qza9yRBUec76UZ5TkUwC6xtt4bX7Ip4Ck7zzGPUqcD0y5cqD%2FqCE93btKWJ8v5nRI0%2FUIXU5cUw6DH9z1R9QuQ3382CuRJrOsrYXCQtS5I%2F2Lsj4QE5t%2FJQg9aOip%2FSQPinkqewfVKOmJyLbHfllWI%2BU0cnv2DKaJHmcTpHbcPuy0clZKdjwNVRFnOU%2But7jihAvbUPq8TfiERu5gzlK41Aa%2FmAyQ%2ByTuQBgKmjLebw8ZNDbqP4dwkZAwkK9fZ7Aw7oVG3cbVTF3Pt14v5313KDxHVGr9WIc3PGheJ1ijxo%2BT6fw18Aa2CN1jf8CWI%2FtoDLSaaw9SuV3bXInqSqJdSKccbqzDM4qC3LyArGUdUoQay5obUFf2iMY3bPUwO5wBBFLSxajjk7%2FNZiU89lilhnjcWFN0Rm%2FWlIqJsxzqQG7j9i7sg2zd4O%2FS2HjA891vWTXJgAv54U8TjiyCfw7YzfqSHuSeB4vGsXc7bPYEQUTW89jHh2Xn%2F7ijQaiHSRWLvNnd95nuFedwD3q%2FccDN0s7RKozhtjczXewJ68z5MpN1%2FZN8x3JO2MkfTb1i3Sxd%2FXTMMKdjsAGOqUBOgPshHsvH07911MvuOfS5j2jOYI0HQcXvfZRxo4w%2BzwxyukGT0KuAUVsnnwSmmRlZ3YQI71nKIdFU79McbKNWJd6NpqdeFKfGLLwh1fzpwDP5wKSZkZkSkTgU7MfVvURzSXs24Kg1M7SnBuFehLz%2F%2FWgHMIcbs8bkCiihy7tu2B9f%2FucM%2Ff6vCQkn5Cpdyg1D1rZjOBz%2B3rKw7TI5kbauFHcVR75&X-Amz-Signature=b35d4833d18db35c598577acbdc198cc3498790441c925bb99bf5ea4bd11543e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCE5LIAP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIDnaIflWK3bptjOlbzPZ7dJMBD96cNIT0PAJ6E5ujE2PAiEA3trTkwww32o0Wd7S6%2Bboz%2Buxxx9n1vyHPbRC0Z51uxgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnOW4Cj6cCwmwkznyrcAyUGT3fyIt2YRJiqsYeeRsQTU1sgx9%2FZXBq9%2BW%2B3aYyuI0ZAAS7nw9a1qza9yRBUec76UZ5TkUwC6xtt4bX7Ip4Ck7zzGPUqcD0y5cqD%2FqCE93btKWJ8v5nRI0%2FUIXU5cUw6DH9z1R9QuQ3382CuRJrOsrYXCQtS5I%2F2Lsj4QE5t%2FJQg9aOip%2FSQPinkqewfVKOmJyLbHfllWI%2BU0cnv2DKaJHmcTpHbcPuy0clZKdjwNVRFnOU%2But7jihAvbUPq8TfiERu5gzlK41Aa%2FmAyQ%2ByTuQBgKmjLebw8ZNDbqP4dwkZAwkK9fZ7Aw7oVG3cbVTF3Pt14v5313KDxHVGr9WIc3PGheJ1ijxo%2BT6fw18Aa2CN1jf8CWI%2FtoDLSaaw9SuV3bXInqSqJdSKccbqzDM4qC3LyArGUdUoQay5obUFf2iMY3bPUwO5wBBFLSxajjk7%2FNZiU89lilhnjcWFN0Rm%2FWlIqJsxzqQG7j9i7sg2zd4O%2FS2HjA891vWTXJgAv54U8TjiyCfw7YzfqSHuSeB4vGsXc7bPYEQUTW89jHh2Xn%2F7ijQaiHSRWLvNnd95nuFedwD3q%2FccDN0s7RKozhtjczXewJ68z5MpN1%2FZN8x3JO2MkfTb1i3Sxd%2FXTMMKdjsAGOqUBOgPshHsvH07911MvuOfS5j2jOYI0HQcXvfZRxo4w%2BzwxyukGT0KuAUVsnnwSmmRlZ3YQI71nKIdFU79McbKNWJd6NpqdeFKfGLLwh1fzpwDP5wKSZkZkSkTgU7MfVvURzSXs24Kg1M7SnBuFehLz%2F%2FWgHMIcbs8bkCiihy7tu2B9f%2FucM%2Ff6vCQkn5Cpdyg1D1rZjOBz%2B3rKw7TI5kbauFHcVR75&X-Amz-Signature=35e08e1e85b6ddc1e03915d9f5dd44f1922d942fb391d185585798e2841b8a13&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCE5LIAP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIDnaIflWK3bptjOlbzPZ7dJMBD96cNIT0PAJ6E5ujE2PAiEA3trTkwww32o0Wd7S6%2Bboz%2Buxxx9n1vyHPbRC0Z51uxgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnOW4Cj6cCwmwkznyrcAyUGT3fyIt2YRJiqsYeeRsQTU1sgx9%2FZXBq9%2BW%2B3aYyuI0ZAAS7nw9a1qza9yRBUec76UZ5TkUwC6xtt4bX7Ip4Ck7zzGPUqcD0y5cqD%2FqCE93btKWJ8v5nRI0%2FUIXU5cUw6DH9z1R9QuQ3382CuRJrOsrYXCQtS5I%2F2Lsj4QE5t%2FJQg9aOip%2FSQPinkqewfVKOmJyLbHfllWI%2BU0cnv2DKaJHmcTpHbcPuy0clZKdjwNVRFnOU%2But7jihAvbUPq8TfiERu5gzlK41Aa%2FmAyQ%2ByTuQBgKmjLebw8ZNDbqP4dwkZAwkK9fZ7Aw7oVG3cbVTF3Pt14v5313KDxHVGr9WIc3PGheJ1ijxo%2BT6fw18Aa2CN1jf8CWI%2FtoDLSaaw9SuV3bXInqSqJdSKccbqzDM4qC3LyArGUdUoQay5obUFf2iMY3bPUwO5wBBFLSxajjk7%2FNZiU89lilhnjcWFN0Rm%2FWlIqJsxzqQG7j9i7sg2zd4O%2FS2HjA891vWTXJgAv54U8TjiyCfw7YzfqSHuSeB4vGsXc7bPYEQUTW89jHh2Xn%2F7ijQaiHSRWLvNnd95nuFedwD3q%2FccDN0s7RKozhtjczXewJ68z5MpN1%2FZN8x3JO2MkfTb1i3Sxd%2FXTMMKdjsAGOqUBOgPshHsvH07911MvuOfS5j2jOYI0HQcXvfZRxo4w%2BzwxyukGT0KuAUVsnnwSmmRlZ3YQI71nKIdFU79McbKNWJd6NpqdeFKfGLLwh1fzpwDP5wKSZkZkSkTgU7MfVvURzSXs24Kg1M7SnBuFehLz%2F%2FWgHMIcbs8bkCiihy7tu2B9f%2FucM%2Ff6vCQkn5Cpdyg1D1rZjOBz%2B3rKw7TI5kbauFHcVR75&X-Amz-Signature=e789d98ef93d52144977d855b425acde88e15b41e9372e6906a95ec15e4341a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCE5LIAP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIDnaIflWK3bptjOlbzPZ7dJMBD96cNIT0PAJ6E5ujE2PAiEA3trTkwww32o0Wd7S6%2Bboz%2Buxxx9n1vyHPbRC0Z51uxgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnOW4Cj6cCwmwkznyrcAyUGT3fyIt2YRJiqsYeeRsQTU1sgx9%2FZXBq9%2BW%2B3aYyuI0ZAAS7nw9a1qza9yRBUec76UZ5TkUwC6xtt4bX7Ip4Ck7zzGPUqcD0y5cqD%2FqCE93btKWJ8v5nRI0%2FUIXU5cUw6DH9z1R9QuQ3382CuRJrOsrYXCQtS5I%2F2Lsj4QE5t%2FJQg9aOip%2FSQPinkqewfVKOmJyLbHfllWI%2BU0cnv2DKaJHmcTpHbcPuy0clZKdjwNVRFnOU%2But7jihAvbUPq8TfiERu5gzlK41Aa%2FmAyQ%2ByTuQBgKmjLebw8ZNDbqP4dwkZAwkK9fZ7Aw7oVG3cbVTF3Pt14v5313KDxHVGr9WIc3PGheJ1ijxo%2BT6fw18Aa2CN1jf8CWI%2FtoDLSaaw9SuV3bXInqSqJdSKccbqzDM4qC3LyArGUdUoQay5obUFf2iMY3bPUwO5wBBFLSxajjk7%2FNZiU89lilhnjcWFN0Rm%2FWlIqJsxzqQG7j9i7sg2zd4O%2FS2HjA891vWTXJgAv54U8TjiyCfw7YzfqSHuSeB4vGsXc7bPYEQUTW89jHh2Xn%2F7ijQaiHSRWLvNnd95nuFedwD3q%2FccDN0s7RKozhtjczXewJ68z5MpN1%2FZN8x3JO2MkfTb1i3Sxd%2FXTMMKdjsAGOqUBOgPshHsvH07911MvuOfS5j2jOYI0HQcXvfZRxo4w%2BzwxyukGT0KuAUVsnnwSmmRlZ3YQI71nKIdFU79McbKNWJd6NpqdeFKfGLLwh1fzpwDP5wKSZkZkSkTgU7MfVvURzSXs24Kg1M7SnBuFehLz%2F%2FWgHMIcbs8bkCiihy7tu2B9f%2FucM%2Ff6vCQkn5Cpdyg1D1rZjOBz%2B3rKw7TI5kbauFHcVR75&X-Amz-Signature=9dcdcaddd1c906323ba0259f0fd2441ba6e1c97d4c3a85020295e866adde1c83&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMW5VYZD%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeHQMEmKAv3EhEuwhKmA6f0EhUUPGzXSVaDnUsynA3tAiEA4ACUoFGdwYpoMcyg%2B6LO82h6mCRgeipgLyjxs9R6FXYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM16SqEZdGK7SlUN%2FSrcA1kyMSBkvM4dHonLlSVOW2hm0XZRDnEarq8B5FLAb08kS6zP5SBEFOTsmYIQw3eIzhBXjFH%2FhLGaiJsJgn1AMELYiibzXwr074kAjbY%2B0mv9zNIhX6xNRqHPVn7lk1rAH1sJRomZkNo9P2fHvmaongeOe90YQY7OuLQ%2B%2BuxMHMxK%2F%2BAo9jdusigQPuee8xvc0o9A8kqd3S7UUEtHyvtWdQdY6upJG80fb%2FnRQIRWLUEN2yQNvHJoELgg1BBXg%2Fq34BezQdF4zwnpej9ZF5Aw8icJ3hw7AlChyvdSCICU15B9sRf8grtx9tOgQV%2FQsI0F6sF8JM7zP50A1dDMAPf8AQ4Op4IDP4k0HXMCJZ9f9cJIj5WJsR%2BnsSqS1mZNrExcy8kCNz57xL8k4LtuntSWS%2BG6eoqImRABDLH7gpDXTMW5fll%2F2%2BxE%2BR68ixNILwI13RQ4uC3N7249xFc5MEpEfQyqEe9SNzqLvY%2BnzULhjd%2BKAGnepZMR2Z2AwJ5VhA8QeumvTey33KknjzdfxI91V5zyHsdaBmJ9%2FTw3vlGWRMod9WOuBpQ9cHb9hnfdqm%2FGuRNfiq7E4IVy%2Bg4oePJAKNCguMlKJfWOqOkZLU7Xe1yF2pV4uajI%2Fo6ffAv%2BMKrm57wGOqUB1FpAAQs7XAV3Kr2sn4WPSzYOy931BkGbKexb94fqlkTI6uJV1VtJoaRQSuGd6qBzhUv1bQJ87%2BlZ9rzLJ5bSSR%2ByNr8W2ceLA9Ut%2F3oOksM3FUXn%2BeCVFex9yfVtMDB5ehjasscjPfvjHZWEjyGn5YAeZGx64sVVKhvFhexawvYewu92dsO2u6NjiEGxz0jBPzyugDfFYsBKEpmUwD%2Fm5JwpJD0d&X-Amz-Signature=4efe704b451700a750c53022da2a246299efe6f47806434adacfb4af82a34416&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMW5VYZD%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeHQMEmKAv3EhEuwhKmA6f0EhUUPGzXSVaDnUsynA3tAiEA4ACUoFGdwYpoMcyg%2B6LO82h6mCRgeipgLyjxs9R6FXYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM16SqEZdGK7SlUN%2FSrcA1kyMSBkvM4dHonLlSVOW2hm0XZRDnEarq8B5FLAb08kS6zP5SBEFOTsmYIQw3eIzhBXjFH%2FhLGaiJsJgn1AMELYiibzXwr074kAjbY%2B0mv9zNIhX6xNRqHPVn7lk1rAH1sJRomZkNo9P2fHvmaongeOe90YQY7OuLQ%2B%2BuxMHMxK%2F%2BAo9jdusigQPuee8xvc0o9A8kqd3S7UUEtHyvtWdQdY6upJG80fb%2FnRQIRWLUEN2yQNvHJoELgg1BBXg%2Fq34BezQdF4zwnpej9ZF5Aw8icJ3hw7AlChyvdSCICU15B9sRf8grtx9tOgQV%2FQsI0F6sF8JM7zP50A1dDMAPf8AQ4Op4IDP4k0HXMCJZ9f9cJIj5WJsR%2BnsSqS1mZNrExcy8kCNz57xL8k4LtuntSWS%2BG6eoqImRABDLH7gpDXTMW5fll%2F2%2BxE%2BR68ixNILwI13RQ4uC3N7249xFc5MEpEfQyqEe9SNzqLvY%2BnzULhjd%2BKAGnepZMR2Z2AwJ5VhA8QeumvTey33KknjzdfxI91V5zyHsdaBmJ9%2FTw3vlGWRMod9WOuBpQ9cHb9hnfdqm%2FGuRNfiq7E4IVy%2Bg4oePJAKNCguMlKJfWOqOkZLU7Xe1yF2pV4uajI%2Fo6ffAv%2BMKrm57wGOqUB1FpAAQs7XAV3Kr2sn4WPSzYOy931BkGbKexb94fqlkTI6uJV1VtJoaRQSuGd6qBzhUv1bQJ87%2BlZ9rzLJ5bSSR%2ByNr8W2ceLA9Ut%2F3oOksM3FUXn%2BeCVFex9yfVtMDB5ehjasscjPfvjHZWEjyGn5YAeZGx64sVVKhvFhexawvYewu92dsO2u6NjiEGxz0jBPzyugDfFYsBKEpmUwD%2Fm5JwpJD0d&X-Amz-Signature=74da137e8ec3ac6aee8e4ea084639062107449e1d7168c4ae6e924c706dfeff8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMW5VYZD%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeHQMEmKAv3EhEuwhKmA6f0EhUUPGzXSVaDnUsynA3tAiEA4ACUoFGdwYpoMcyg%2B6LO82h6mCRgeipgLyjxs9R6FXYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM16SqEZdGK7SlUN%2FSrcA1kyMSBkvM4dHonLlSVOW2hm0XZRDnEarq8B5FLAb08kS6zP5SBEFOTsmYIQw3eIzhBXjFH%2FhLGaiJsJgn1AMELYiibzXwr074kAjbY%2B0mv9zNIhX6xNRqHPVn7lk1rAH1sJRomZkNo9P2fHvmaongeOe90YQY7OuLQ%2B%2BuxMHMxK%2F%2BAo9jdusigQPuee8xvc0o9A8kqd3S7UUEtHyvtWdQdY6upJG80fb%2FnRQIRWLUEN2yQNvHJoELgg1BBXg%2Fq34BezQdF4zwnpej9ZF5Aw8icJ3hw7AlChyvdSCICU15B9sRf8grtx9tOgQV%2FQsI0F6sF8JM7zP50A1dDMAPf8AQ4Op4IDP4k0HXMCJZ9f9cJIj5WJsR%2BnsSqS1mZNrExcy8kCNz57xL8k4LtuntSWS%2BG6eoqImRABDLH7gpDXTMW5fll%2F2%2BxE%2BR68ixNILwI13RQ4uC3N7249xFc5MEpEfQyqEe9SNzqLvY%2BnzULhjd%2BKAGnepZMR2Z2AwJ5VhA8QeumvTey33KknjzdfxI91V5zyHsdaBmJ9%2FTw3vlGWRMod9WOuBpQ9cHb9hnfdqm%2FGuRNfiq7E4IVy%2Bg4oePJAKNCguMlKJfWOqOkZLU7Xe1yF2pV4uajI%2Fo6ffAv%2BMKrm57wGOqUB1FpAAQs7XAV3Kr2sn4WPSzYOy931BkGbKexb94fqlkTI6uJV1VtJoaRQSuGd6qBzhUv1bQJ87%2BlZ9rzLJ5bSSR%2ByNr8W2ceLA9Ut%2F3oOksM3FUXn%2BeCVFex9yfVtMDB5ehjasscjPfvjHZWEjyGn5YAeZGx64sVVKhvFhexawvYewu92dsO2u6NjiEGxz0jBPzyugDfFYsBKEpmUwD%2Fm5JwpJD0d&X-Amz-Signature=6f59ecf51682eecb0266d89833c573b471037abf13706de7edde67224d90e2b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMW5VYZD%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeHQMEmKAv3EhEuwhKmA6f0EhUUPGzXSVaDnUsynA3tAiEA4ACUoFGdwYpoMcyg%2B6LO82h6mCRgeipgLyjxs9R6FXYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM16SqEZdGK7SlUN%2FSrcA1kyMSBkvM4dHonLlSVOW2hm0XZRDnEarq8B5FLAb08kS6zP5SBEFOTsmYIQw3eIzhBXjFH%2FhLGaiJsJgn1AMELYiibzXwr074kAjbY%2B0mv9zNIhX6xNRqHPVn7lk1rAH1sJRomZkNo9P2fHvmaongeOe90YQY7OuLQ%2B%2BuxMHMxK%2F%2BAo9jdusigQPuee8xvc0o9A8kqd3S7UUEtHyvtWdQdY6upJG80fb%2FnRQIRWLUEN2yQNvHJoELgg1BBXg%2Fq34BezQdF4zwnpej9ZF5Aw8icJ3hw7AlChyvdSCICU15B9sRf8grtx9tOgQV%2FQsI0F6sF8JM7zP50A1dDMAPf8AQ4Op4IDP4k0HXMCJZ9f9cJIj5WJsR%2BnsSqS1mZNrExcy8kCNz57xL8k4LtuntSWS%2BG6eoqImRABDLH7gpDXTMW5fll%2F2%2BxE%2BR68ixNILwI13RQ4uC3N7249xFc5MEpEfQyqEe9SNzqLvY%2BnzULhjd%2BKAGnepZMR2Z2AwJ5VhA8QeumvTey33KknjzdfxI91V5zyHsdaBmJ9%2FTw3vlGWRMod9WOuBpQ9cHb9hnfdqm%2FGuRNfiq7E4IVy%2Bg4oePJAKNCguMlKJfWOqOkZLU7Xe1yF2pV4uajI%2Fo6ffAv%2BMKrm57wGOqUB1FpAAQs7XAV3Kr2sn4WPSzYOy931BkGbKexb94fqlkTI6uJV1VtJoaRQSuGd6qBzhUv1bQJ87%2BlZ9rzLJ5bSSR%2ByNr8W2ceLA9Ut%2F3oOksM3FUXn%2BeCVFex9yfVtMDB5ehjasscjPfvjHZWEjyGn5YAeZGx64sVVKhvFhexawvYewu92dsO2u6NjiEGxz0jBPzyugDfFYsBKEpmUwD%2Fm5JwpJD0d&X-Amz-Signature=7c769755a84326a8c009f10af10d1283ff88697e1231606f76210419163f4727&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMW5VYZD%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeHQMEmKAv3EhEuwhKmA6f0EhUUPGzXSVaDnUsynA3tAiEA4ACUoFGdwYpoMcyg%2B6LO82h6mCRgeipgLyjxs9R6FXYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM16SqEZdGK7SlUN%2FSrcA1kyMSBkvM4dHonLlSVOW2hm0XZRDnEarq8B5FLAb08kS6zP5SBEFOTsmYIQw3eIzhBXjFH%2FhLGaiJsJgn1AMELYiibzXwr074kAjbY%2B0mv9zNIhX6xNRqHPVn7lk1rAH1sJRomZkNo9P2fHvmaongeOe90YQY7OuLQ%2B%2BuxMHMxK%2F%2BAo9jdusigQPuee8xvc0o9A8kqd3S7UUEtHyvtWdQdY6upJG80fb%2FnRQIRWLUEN2yQNvHJoELgg1BBXg%2Fq34BezQdF4zwnpej9ZF5Aw8icJ3hw7AlChyvdSCICU15B9sRf8grtx9tOgQV%2FQsI0F6sF8JM7zP50A1dDMAPf8AQ4Op4IDP4k0HXMCJZ9f9cJIj5WJsR%2BnsSqS1mZNrExcy8kCNz57xL8k4LtuntSWS%2BG6eoqImRABDLH7gpDXTMW5fll%2F2%2BxE%2BR68ixNILwI13RQ4uC3N7249xFc5MEpEfQyqEe9SNzqLvY%2BnzULhjd%2BKAGnepZMR2Z2AwJ5VhA8QeumvTey33KknjzdfxI91V5zyHsdaBmJ9%2FTw3vlGWRMod9WOuBpQ9cHb9hnfdqm%2FGuRNfiq7E4IVy%2Bg4oePJAKNCguMlKJfWOqOkZLU7Xe1yF2pV4uajI%2Fo6ffAv%2BMKrm57wGOqUB1FpAAQs7XAV3Kr2sn4WPSzYOy931BkGbKexb94fqlkTI6uJV1VtJoaRQSuGd6qBzhUv1bQJ87%2BlZ9rzLJ5bSSR%2ByNr8W2ceLA9Ut%2F3oOksM3FUXn%2BeCVFex9yfVtMDB5ehjasscjPfvjHZWEjyGn5YAeZGx64sVVKhvFhexawvYewu92dsO2u6NjiEGxz0jBPzyugDfFYsBKEpmUwD%2Fm5JwpJD0d&X-Amz-Signature=79b5b8df5aa95cc6ef69e844e50c4bf8640f23a5d943c13221f5482874398b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

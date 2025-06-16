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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4T2PWJ3%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGdSlbYH4ck0Ty%2FsE9rmjTTL5Ii0a9VyhJ39WIJHQV6YAiBD23SNK5aRvAT7wOeCLl1slqPPYldKJ3mdGJksRXfIbyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM8lshHNq6LEXbarExKtwDkqamP%2FHKXs4UzIHD6WkaSFAXNxIoWZZv4CbBNcyWWgFqMdBqNpjCM7lukKuoRtDjkUuDF0X11tpeGFVEJh1K3MuPXFDtkRPGAwksii9EzS80Shjml0beTXJ2RxPWuJ8viJn7BMFfikEcjJgKlyq3MtZWLdyKxKPRGGd%2BMxu6rbPZKWyWK5e3CYf6LM8B1xuk2KlFsQaNl0cwWzqY70xJO%2FBG1oT7A%2BoWmUDrvXKfjGP3zhWR9IJp8zCbahSaNPKByR1lQtAO5omIiZpgh3ABsH0WB8ba16FO7o61xu96nqZWYiUtxn0%2FcEh8XeBJ1fdMrIa5loA5FclSiBKKhNOakM5cYTT57%2FQSsagI9zwf%2BxQaUZUf3ebi30Pc%2FhSxtzZjpOMQDV0PNxevqo%2BAZ2QcoKR5XV6trYSRiXmiY01WUMvc0Gz5hBQ5kOxsi1VDqNcYGgPNDWWmbJdx%2BSRcIs7V%2FfcSH3anwQV4Ee%2Fu7qzJFfENvzSJBSI3RxyDBc0QXehdvGZwivOpgwFR37FD6B5R79p8eb21Xxy1Hm5FhwDDW3bPEC6gNWLxQd4FKymn%2BouMjFdyC0tn1e8PlhJkrVSnssuddEFXDx%2FbthYV9jTs3zOtv3DT5aIn0d%2BtIKUwvY7CwgY6pgHUZ7Xmk7p%2FjKeFbIPS40ByKFiu3UZQWWDIj2tAyessGbXdMABMgWofh1uLMHd3akCAwzEpu%2Bu6y9K1W1p3Dqc1UP2jFs3r4N%2Fa%2B4gpJBH0DfuY4tBjrYX2puFE6boLMzyoZg0CUqPqsipTzjJ2TCoTHCNaHpUPAlKt7LxWp0G5R5ewOodtmrbepX5VZ5%2FCc775KnrlaicMl5YBZFwdybPU%2BbT93zQQ&X-Amz-Signature=758e82b5fd4b37cf62158862be349ed22847a6aa913fdac804ee3123aa2759fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4T2PWJ3%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGdSlbYH4ck0Ty%2FsE9rmjTTL5Ii0a9VyhJ39WIJHQV6YAiBD23SNK5aRvAT7wOeCLl1slqPPYldKJ3mdGJksRXfIbyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM8lshHNq6LEXbarExKtwDkqamP%2FHKXs4UzIHD6WkaSFAXNxIoWZZv4CbBNcyWWgFqMdBqNpjCM7lukKuoRtDjkUuDF0X11tpeGFVEJh1K3MuPXFDtkRPGAwksii9EzS80Shjml0beTXJ2RxPWuJ8viJn7BMFfikEcjJgKlyq3MtZWLdyKxKPRGGd%2BMxu6rbPZKWyWK5e3CYf6LM8B1xuk2KlFsQaNl0cwWzqY70xJO%2FBG1oT7A%2BoWmUDrvXKfjGP3zhWR9IJp8zCbahSaNPKByR1lQtAO5omIiZpgh3ABsH0WB8ba16FO7o61xu96nqZWYiUtxn0%2FcEh8XeBJ1fdMrIa5loA5FclSiBKKhNOakM5cYTT57%2FQSsagI9zwf%2BxQaUZUf3ebi30Pc%2FhSxtzZjpOMQDV0PNxevqo%2BAZ2QcoKR5XV6trYSRiXmiY01WUMvc0Gz5hBQ5kOxsi1VDqNcYGgPNDWWmbJdx%2BSRcIs7V%2FfcSH3anwQV4Ee%2Fu7qzJFfENvzSJBSI3RxyDBc0QXehdvGZwivOpgwFR37FD6B5R79p8eb21Xxy1Hm5FhwDDW3bPEC6gNWLxQd4FKymn%2BouMjFdyC0tn1e8PlhJkrVSnssuddEFXDx%2FbthYV9jTs3zOtv3DT5aIn0d%2BtIKUwvY7CwgY6pgHUZ7Xmk7p%2FjKeFbIPS40ByKFiu3UZQWWDIj2tAyessGbXdMABMgWofh1uLMHd3akCAwzEpu%2Bu6y9K1W1p3Dqc1UP2jFs3r4N%2Fa%2B4gpJBH0DfuY4tBjrYX2puFE6boLMzyoZg0CUqPqsipTzjJ2TCoTHCNaHpUPAlKt7LxWp0G5R5ewOodtmrbepX5VZ5%2FCc775KnrlaicMl5YBZFwdybPU%2BbT93zQQ&X-Amz-Signature=c7f54532a20a9b90cbce662634c40c69fda3870d344dbd5b2ff9312223a88209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4T2PWJ3%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGdSlbYH4ck0Ty%2FsE9rmjTTL5Ii0a9VyhJ39WIJHQV6YAiBD23SNK5aRvAT7wOeCLl1slqPPYldKJ3mdGJksRXfIbyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM8lshHNq6LEXbarExKtwDkqamP%2FHKXs4UzIHD6WkaSFAXNxIoWZZv4CbBNcyWWgFqMdBqNpjCM7lukKuoRtDjkUuDF0X11tpeGFVEJh1K3MuPXFDtkRPGAwksii9EzS80Shjml0beTXJ2RxPWuJ8viJn7BMFfikEcjJgKlyq3MtZWLdyKxKPRGGd%2BMxu6rbPZKWyWK5e3CYf6LM8B1xuk2KlFsQaNl0cwWzqY70xJO%2FBG1oT7A%2BoWmUDrvXKfjGP3zhWR9IJp8zCbahSaNPKByR1lQtAO5omIiZpgh3ABsH0WB8ba16FO7o61xu96nqZWYiUtxn0%2FcEh8XeBJ1fdMrIa5loA5FclSiBKKhNOakM5cYTT57%2FQSsagI9zwf%2BxQaUZUf3ebi30Pc%2FhSxtzZjpOMQDV0PNxevqo%2BAZ2QcoKR5XV6trYSRiXmiY01WUMvc0Gz5hBQ5kOxsi1VDqNcYGgPNDWWmbJdx%2BSRcIs7V%2FfcSH3anwQV4Ee%2Fu7qzJFfENvzSJBSI3RxyDBc0QXehdvGZwivOpgwFR37FD6B5R79p8eb21Xxy1Hm5FhwDDW3bPEC6gNWLxQd4FKymn%2BouMjFdyC0tn1e8PlhJkrVSnssuddEFXDx%2FbthYV9jTs3zOtv3DT5aIn0d%2BtIKUwvY7CwgY6pgHUZ7Xmk7p%2FjKeFbIPS40ByKFiu3UZQWWDIj2tAyessGbXdMABMgWofh1uLMHd3akCAwzEpu%2Bu6y9K1W1p3Dqc1UP2jFs3r4N%2Fa%2B4gpJBH0DfuY4tBjrYX2puFE6boLMzyoZg0CUqPqsipTzjJ2TCoTHCNaHpUPAlKt7LxWp0G5R5ewOodtmrbepX5VZ5%2FCc775KnrlaicMl5YBZFwdybPU%2BbT93zQQ&X-Amz-Signature=074eef10fb88bd076fb23c8888e748245cc6326a115beb785e4201349ac6fdb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4T2PWJ3%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGdSlbYH4ck0Ty%2FsE9rmjTTL5Ii0a9VyhJ39WIJHQV6YAiBD23SNK5aRvAT7wOeCLl1slqPPYldKJ3mdGJksRXfIbyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM8lshHNq6LEXbarExKtwDkqamP%2FHKXs4UzIHD6WkaSFAXNxIoWZZv4CbBNcyWWgFqMdBqNpjCM7lukKuoRtDjkUuDF0X11tpeGFVEJh1K3MuPXFDtkRPGAwksii9EzS80Shjml0beTXJ2RxPWuJ8viJn7BMFfikEcjJgKlyq3MtZWLdyKxKPRGGd%2BMxu6rbPZKWyWK5e3CYf6LM8B1xuk2KlFsQaNl0cwWzqY70xJO%2FBG1oT7A%2BoWmUDrvXKfjGP3zhWR9IJp8zCbahSaNPKByR1lQtAO5omIiZpgh3ABsH0WB8ba16FO7o61xu96nqZWYiUtxn0%2FcEh8XeBJ1fdMrIa5loA5FclSiBKKhNOakM5cYTT57%2FQSsagI9zwf%2BxQaUZUf3ebi30Pc%2FhSxtzZjpOMQDV0PNxevqo%2BAZ2QcoKR5XV6trYSRiXmiY01WUMvc0Gz5hBQ5kOxsi1VDqNcYGgPNDWWmbJdx%2BSRcIs7V%2FfcSH3anwQV4Ee%2Fu7qzJFfENvzSJBSI3RxyDBc0QXehdvGZwivOpgwFR37FD6B5R79p8eb21Xxy1Hm5FhwDDW3bPEC6gNWLxQd4FKymn%2BouMjFdyC0tn1e8PlhJkrVSnssuddEFXDx%2FbthYV9jTs3zOtv3DT5aIn0d%2BtIKUwvY7CwgY6pgHUZ7Xmk7p%2FjKeFbIPS40ByKFiu3UZQWWDIj2tAyessGbXdMABMgWofh1uLMHd3akCAwzEpu%2Bu6y9K1W1p3Dqc1UP2jFs3r4N%2Fa%2B4gpJBH0DfuY4tBjrYX2puFE6boLMzyoZg0CUqPqsipTzjJ2TCoTHCNaHpUPAlKt7LxWp0G5R5ewOodtmrbepX5VZ5%2FCc775KnrlaicMl5YBZFwdybPU%2BbT93zQQ&X-Amz-Signature=213b550f93e3be8c98ad6844427b03738bb9d7da0f9ca83af0b57ae2ac6f7406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4T2PWJ3%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGdSlbYH4ck0Ty%2FsE9rmjTTL5Ii0a9VyhJ39WIJHQV6YAiBD23SNK5aRvAT7wOeCLl1slqPPYldKJ3mdGJksRXfIbyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM8lshHNq6LEXbarExKtwDkqamP%2FHKXs4UzIHD6WkaSFAXNxIoWZZv4CbBNcyWWgFqMdBqNpjCM7lukKuoRtDjkUuDF0X11tpeGFVEJh1K3MuPXFDtkRPGAwksii9EzS80Shjml0beTXJ2RxPWuJ8viJn7BMFfikEcjJgKlyq3MtZWLdyKxKPRGGd%2BMxu6rbPZKWyWK5e3CYf6LM8B1xuk2KlFsQaNl0cwWzqY70xJO%2FBG1oT7A%2BoWmUDrvXKfjGP3zhWR9IJp8zCbahSaNPKByR1lQtAO5omIiZpgh3ABsH0WB8ba16FO7o61xu96nqZWYiUtxn0%2FcEh8XeBJ1fdMrIa5loA5FclSiBKKhNOakM5cYTT57%2FQSsagI9zwf%2BxQaUZUf3ebi30Pc%2FhSxtzZjpOMQDV0PNxevqo%2BAZ2QcoKR5XV6trYSRiXmiY01WUMvc0Gz5hBQ5kOxsi1VDqNcYGgPNDWWmbJdx%2BSRcIs7V%2FfcSH3anwQV4Ee%2Fu7qzJFfENvzSJBSI3RxyDBc0QXehdvGZwivOpgwFR37FD6B5R79p8eb21Xxy1Hm5FhwDDW3bPEC6gNWLxQd4FKymn%2BouMjFdyC0tn1e8PlhJkrVSnssuddEFXDx%2FbthYV9jTs3zOtv3DT5aIn0d%2BtIKUwvY7CwgY6pgHUZ7Xmk7p%2FjKeFbIPS40ByKFiu3UZQWWDIj2tAyessGbXdMABMgWofh1uLMHd3akCAwzEpu%2Bu6y9K1W1p3Dqc1UP2jFs3r4N%2Fa%2B4gpJBH0DfuY4tBjrYX2puFE6boLMzyoZg0CUqPqsipTzjJ2TCoTHCNaHpUPAlKt7LxWp0G5R5ewOodtmrbepX5VZ5%2FCc775KnrlaicMl5YBZFwdybPU%2BbT93zQQ&X-Amz-Signature=386727a7a54c7bf934af5272702e328028e678d36c68eadf54de2976590503db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

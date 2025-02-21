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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XD5KW4V%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1HUPWtX8f2aNhI8BLCprG2dhci8kQG6JA5xdLm19HFAiAGANtlMqe7GuTLBNU8eswvuztJ0SAgReGkRjNUXZFpvyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBGLi%2BLWTx19TTmV0KtwDtGlUCMErrUom7YEHqMup6qpAqx3TrE7i2uBIK5f67Ul24O1zcvo9IHL5o9deYiVneHcJ2TJddBb%2F9QDbeQzTPspB4w5I4hSh9TdUCptNVW13Hyp7Bb080QXnLLExkz3v7QXGl5krC6P5gsx8IJ2V9ApgPr9GOikkbyg2smKpTH3SXmNUyowGVXt6G9fKz3g26ck5EZOMJGHpRqmpPk3RaiMF4GYVkiDwpdTAXp1obC5uelbjRm5OjgGra8e16ZNBRs6VAOl1y3E5W%2FGbfBCB2gQqU%2FBfYuS7wuZ9Iprg72AZKw5PsckDx8lNqUn95PLNw75cmwk4XjjWV2iTGU2Rm8bvNXUFE0hA490KxaYLaicuJoGOKIjMVE0TuIKzmakSt2mKHd923CmY6Ao0Ac2FoKwlzbMHNqdzKGdBGNJOBnDF%2BxxRr1OwjfMM66DMev2yrsA27oaAF69g4f%2FMnSJ37SQvaFKf%2BwDTgqqo7%2BmFjNrMutH%2F5qZ5B9Px8kH1o0tL1YCEZzWSLYas7vfMa80nZuLrw3xAXmWews89D8IRHDs2J8N1mR%2B6qKWF5QWRJOz%2BUQjKjrXOB01%2BvhKUjSvAEtkNQKEjK%2FWOj5Ooiangre0vxWMsPddD6YU71LAw%2BvngvQY6pgEF0SH10wyPFgXGRq%2Fz1uXqdU4rHY4KVn4g7kVHX5my17%2BQH5opk8jwGQs5NvkPehJGvwMb7G3P5WxPPm8YReLsQPzRvDShhj8qO0xWUFVtqbwtlbomDoD5kOmS4UOWPh22MnsK%2BCoL7O1XCFJ7N%2B1ho9qLzKQzss55rBI3GZGIYa8zwgn04nrSU0s6JuWYQfRxKsoZn%2BJZ76UagmHnQR5umVWQCDaK&X-Amz-Signature=e3dd5be974de977cb92e5a5fd53eef38d10377479f44418fd9fcaba55f2ae2df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XD5KW4V%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1HUPWtX8f2aNhI8BLCprG2dhci8kQG6JA5xdLm19HFAiAGANtlMqe7GuTLBNU8eswvuztJ0SAgReGkRjNUXZFpvyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBGLi%2BLWTx19TTmV0KtwDtGlUCMErrUom7YEHqMup6qpAqx3TrE7i2uBIK5f67Ul24O1zcvo9IHL5o9deYiVneHcJ2TJddBb%2F9QDbeQzTPspB4w5I4hSh9TdUCptNVW13Hyp7Bb080QXnLLExkz3v7QXGl5krC6P5gsx8IJ2V9ApgPr9GOikkbyg2smKpTH3SXmNUyowGVXt6G9fKz3g26ck5EZOMJGHpRqmpPk3RaiMF4GYVkiDwpdTAXp1obC5uelbjRm5OjgGra8e16ZNBRs6VAOl1y3E5W%2FGbfBCB2gQqU%2FBfYuS7wuZ9Iprg72AZKw5PsckDx8lNqUn95PLNw75cmwk4XjjWV2iTGU2Rm8bvNXUFE0hA490KxaYLaicuJoGOKIjMVE0TuIKzmakSt2mKHd923CmY6Ao0Ac2FoKwlzbMHNqdzKGdBGNJOBnDF%2BxxRr1OwjfMM66DMev2yrsA27oaAF69g4f%2FMnSJ37SQvaFKf%2BwDTgqqo7%2BmFjNrMutH%2F5qZ5B9Px8kH1o0tL1YCEZzWSLYas7vfMa80nZuLrw3xAXmWews89D8IRHDs2J8N1mR%2B6qKWF5QWRJOz%2BUQjKjrXOB01%2BvhKUjSvAEtkNQKEjK%2FWOj5Ooiangre0vxWMsPddD6YU71LAw%2BvngvQY6pgEF0SH10wyPFgXGRq%2Fz1uXqdU4rHY4KVn4g7kVHX5my17%2BQH5opk8jwGQs5NvkPehJGvwMb7G3P5WxPPm8YReLsQPzRvDShhj8qO0xWUFVtqbwtlbomDoD5kOmS4UOWPh22MnsK%2BCoL7O1XCFJ7N%2B1ho9qLzKQzss55rBI3GZGIYa8zwgn04nrSU0s6JuWYQfRxKsoZn%2BJZ76UagmHnQR5umVWQCDaK&X-Amz-Signature=e3467252114c378832b8978123cf04d8d88e2024da40df6d75d180cb9f7e85ce&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XD5KW4V%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1HUPWtX8f2aNhI8BLCprG2dhci8kQG6JA5xdLm19HFAiAGANtlMqe7GuTLBNU8eswvuztJ0SAgReGkRjNUXZFpvyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBGLi%2BLWTx19TTmV0KtwDtGlUCMErrUom7YEHqMup6qpAqx3TrE7i2uBIK5f67Ul24O1zcvo9IHL5o9deYiVneHcJ2TJddBb%2F9QDbeQzTPspB4w5I4hSh9TdUCptNVW13Hyp7Bb080QXnLLExkz3v7QXGl5krC6P5gsx8IJ2V9ApgPr9GOikkbyg2smKpTH3SXmNUyowGVXt6G9fKz3g26ck5EZOMJGHpRqmpPk3RaiMF4GYVkiDwpdTAXp1obC5uelbjRm5OjgGra8e16ZNBRs6VAOl1y3E5W%2FGbfBCB2gQqU%2FBfYuS7wuZ9Iprg72AZKw5PsckDx8lNqUn95PLNw75cmwk4XjjWV2iTGU2Rm8bvNXUFE0hA490KxaYLaicuJoGOKIjMVE0TuIKzmakSt2mKHd923CmY6Ao0Ac2FoKwlzbMHNqdzKGdBGNJOBnDF%2BxxRr1OwjfMM66DMev2yrsA27oaAF69g4f%2FMnSJ37SQvaFKf%2BwDTgqqo7%2BmFjNrMutH%2F5qZ5B9Px8kH1o0tL1YCEZzWSLYas7vfMa80nZuLrw3xAXmWews89D8IRHDs2J8N1mR%2B6qKWF5QWRJOz%2BUQjKjrXOB01%2BvhKUjSvAEtkNQKEjK%2FWOj5Ooiangre0vxWMsPddD6YU71LAw%2BvngvQY6pgEF0SH10wyPFgXGRq%2Fz1uXqdU4rHY4KVn4g7kVHX5my17%2BQH5opk8jwGQs5NvkPehJGvwMb7G3P5WxPPm8YReLsQPzRvDShhj8qO0xWUFVtqbwtlbomDoD5kOmS4UOWPh22MnsK%2BCoL7O1XCFJ7N%2B1ho9qLzKQzss55rBI3GZGIYa8zwgn04nrSU0s6JuWYQfRxKsoZn%2BJZ76UagmHnQR5umVWQCDaK&X-Amz-Signature=06ec2b5443a60bf0debdd160dc69e522f69c8d169f748565b06753a45a757435&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XD5KW4V%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1HUPWtX8f2aNhI8BLCprG2dhci8kQG6JA5xdLm19HFAiAGANtlMqe7GuTLBNU8eswvuztJ0SAgReGkRjNUXZFpvyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBGLi%2BLWTx19TTmV0KtwDtGlUCMErrUom7YEHqMup6qpAqx3TrE7i2uBIK5f67Ul24O1zcvo9IHL5o9deYiVneHcJ2TJddBb%2F9QDbeQzTPspB4w5I4hSh9TdUCptNVW13Hyp7Bb080QXnLLExkz3v7QXGl5krC6P5gsx8IJ2V9ApgPr9GOikkbyg2smKpTH3SXmNUyowGVXt6G9fKz3g26ck5EZOMJGHpRqmpPk3RaiMF4GYVkiDwpdTAXp1obC5uelbjRm5OjgGra8e16ZNBRs6VAOl1y3E5W%2FGbfBCB2gQqU%2FBfYuS7wuZ9Iprg72AZKw5PsckDx8lNqUn95PLNw75cmwk4XjjWV2iTGU2Rm8bvNXUFE0hA490KxaYLaicuJoGOKIjMVE0TuIKzmakSt2mKHd923CmY6Ao0Ac2FoKwlzbMHNqdzKGdBGNJOBnDF%2BxxRr1OwjfMM66DMev2yrsA27oaAF69g4f%2FMnSJ37SQvaFKf%2BwDTgqqo7%2BmFjNrMutH%2F5qZ5B9Px8kH1o0tL1YCEZzWSLYas7vfMa80nZuLrw3xAXmWews89D8IRHDs2J8N1mR%2B6qKWF5QWRJOz%2BUQjKjrXOB01%2BvhKUjSvAEtkNQKEjK%2FWOj5Ooiangre0vxWMsPddD6YU71LAw%2BvngvQY6pgEF0SH10wyPFgXGRq%2Fz1uXqdU4rHY4KVn4g7kVHX5my17%2BQH5opk8jwGQs5NvkPehJGvwMb7G3P5WxPPm8YReLsQPzRvDShhj8qO0xWUFVtqbwtlbomDoD5kOmS4UOWPh22MnsK%2BCoL7O1XCFJ7N%2B1ho9qLzKQzss55rBI3GZGIYa8zwgn04nrSU0s6JuWYQfRxKsoZn%2BJZ76UagmHnQR5umVWQCDaK&X-Amz-Signature=c860a956512ef24ac9d211989576b537bc15d8edbdf8eb5382a6c7572cf5a889&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XD5KW4V%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1HUPWtX8f2aNhI8BLCprG2dhci8kQG6JA5xdLm19HFAiAGANtlMqe7GuTLBNU8eswvuztJ0SAgReGkRjNUXZFpvyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBGLi%2BLWTx19TTmV0KtwDtGlUCMErrUom7YEHqMup6qpAqx3TrE7i2uBIK5f67Ul24O1zcvo9IHL5o9deYiVneHcJ2TJddBb%2F9QDbeQzTPspB4w5I4hSh9TdUCptNVW13Hyp7Bb080QXnLLExkz3v7QXGl5krC6P5gsx8IJ2V9ApgPr9GOikkbyg2smKpTH3SXmNUyowGVXt6G9fKz3g26ck5EZOMJGHpRqmpPk3RaiMF4GYVkiDwpdTAXp1obC5uelbjRm5OjgGra8e16ZNBRs6VAOl1y3E5W%2FGbfBCB2gQqU%2FBfYuS7wuZ9Iprg72AZKw5PsckDx8lNqUn95PLNw75cmwk4XjjWV2iTGU2Rm8bvNXUFE0hA490KxaYLaicuJoGOKIjMVE0TuIKzmakSt2mKHd923CmY6Ao0Ac2FoKwlzbMHNqdzKGdBGNJOBnDF%2BxxRr1OwjfMM66DMev2yrsA27oaAF69g4f%2FMnSJ37SQvaFKf%2BwDTgqqo7%2BmFjNrMutH%2F5qZ5B9Px8kH1o0tL1YCEZzWSLYas7vfMa80nZuLrw3xAXmWews89D8IRHDs2J8N1mR%2B6qKWF5QWRJOz%2BUQjKjrXOB01%2BvhKUjSvAEtkNQKEjK%2FWOj5Ooiangre0vxWMsPddD6YU71LAw%2BvngvQY6pgEF0SH10wyPFgXGRq%2Fz1uXqdU4rHY4KVn4g7kVHX5my17%2BQH5opk8jwGQs5NvkPehJGvwMb7G3P5WxPPm8YReLsQPzRvDShhj8qO0xWUFVtqbwtlbomDoD5kOmS4UOWPh22MnsK%2BCoL7O1XCFJ7N%2B1ho9qLzKQzss55rBI3GZGIYa8zwgn04nrSU0s6JuWYQfRxKsoZn%2BJZ76UagmHnQR5umVWQCDaK&X-Amz-Signature=cac501e31aa0b15d1c083c183dfd3fa2e79f61b7b0a3f8fee01e775f45b933be&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

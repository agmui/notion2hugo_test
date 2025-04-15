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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF746R3L%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHNex7KZhu7rrYDJzbj%2BUPV0rjUXz12T6t%2FEiGJ%2FhT6gIgdq5COIu50PS3jw9Kv%2B54W%2BPAUqWUtNT09bDVR96vAHAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNUVObCjKxsJnvwCGSrcA6BqQF5J5NH3q6InqvHMUeiDB0WXhKT2qeCnzXHj98gO38c58Bcwglp0J5hxOoIQdxvrBAuoS2Z5ED4r433u0D1ENL4u0SJZ2FP8VDd%2B9XgUYfOwqev8op1aKGBgGUn9ZeqFzo8xa1xR0K1Q%2BYF4M3WDg7Y9gzdAcJUrMdrQr1k3%2FIwHN6l%2FEZ%2FO3%2FPh7FpWcf6GS79G5TaSGYRF9APieMTQIGY3lefsg%2F4BcQJGNoShNUMrJ7C0%2BTwGQbklvdPB6b2AWP1tPWNCCjUvoczawIRz4tLjlI6nQ9A2xdYIXo7V2ZHq2mGgsEdC%2BW9s73ROqoVdmRUUgElnt3ql8TLRbuFpxhy9iI4Cl1f1dK4PLjHDBScYK3XJOzJkJ4tSzMYx9eC5tr72ZmKqykiScvRm6%2FXZdhXYDRlLOJQqNM9Y29%2FZ2%2BvUzS2ktjU%2BokR90BgCW5rhkA3gecjU%2FGRFSxh7UjAodbr7snOLnNrVkMc9I8OqW92YbS%2B%2BfT9iiM5ysw3eBJ%2Fe7qQ0kZWidjXjZC1WEGvaNq6iLVmDWpfvDrFOjXT5EE2Jw8hrPK0rXtBQxz%2FXybsKgpHOVONRBvHbGhrl7YRvYGhVfoQKC6dafzq2P0YljE%2FXYILKys7RcMuOMN%2FW%2Br8GOqUB%2BZ1zvNNYo9G6av9dRFjzRi5J22Z8LOz7XcyjbiBxOmUVTj%2B5ppnl%2FBSdPT9TqD42o0%2BWXmNEClSnZlPt6dv5xwVON0mxkHlZBc0OyYxA9xY25kSsAW%2FUzxdc6XCjqcjXG6cVEQqER%2BF6ifOsqVS1WXYy99B8PI1gOLVvHt7Rq48RbdNTAj0RwSfZKYTBfTRKBzGWi0W0awpHYTQgrOnMumrBcR7u&X-Amz-Signature=6f9a3c228fcc1e0911198e14f570a6e40be5359c2dd710c0eb1daf9dc8714151&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF746R3L%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHNex7KZhu7rrYDJzbj%2BUPV0rjUXz12T6t%2FEiGJ%2FhT6gIgdq5COIu50PS3jw9Kv%2B54W%2BPAUqWUtNT09bDVR96vAHAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNUVObCjKxsJnvwCGSrcA6BqQF5J5NH3q6InqvHMUeiDB0WXhKT2qeCnzXHj98gO38c58Bcwglp0J5hxOoIQdxvrBAuoS2Z5ED4r433u0D1ENL4u0SJZ2FP8VDd%2B9XgUYfOwqev8op1aKGBgGUn9ZeqFzo8xa1xR0K1Q%2BYF4M3WDg7Y9gzdAcJUrMdrQr1k3%2FIwHN6l%2FEZ%2FO3%2FPh7FpWcf6GS79G5TaSGYRF9APieMTQIGY3lefsg%2F4BcQJGNoShNUMrJ7C0%2BTwGQbklvdPB6b2AWP1tPWNCCjUvoczawIRz4tLjlI6nQ9A2xdYIXo7V2ZHq2mGgsEdC%2BW9s73ROqoVdmRUUgElnt3ql8TLRbuFpxhy9iI4Cl1f1dK4PLjHDBScYK3XJOzJkJ4tSzMYx9eC5tr72ZmKqykiScvRm6%2FXZdhXYDRlLOJQqNM9Y29%2FZ2%2BvUzS2ktjU%2BokR90BgCW5rhkA3gecjU%2FGRFSxh7UjAodbr7snOLnNrVkMc9I8OqW92YbS%2B%2BfT9iiM5ysw3eBJ%2Fe7qQ0kZWidjXjZC1WEGvaNq6iLVmDWpfvDrFOjXT5EE2Jw8hrPK0rXtBQxz%2FXybsKgpHOVONRBvHbGhrl7YRvYGhVfoQKC6dafzq2P0YljE%2FXYILKys7RcMuOMN%2FW%2Br8GOqUB%2BZ1zvNNYo9G6av9dRFjzRi5J22Z8LOz7XcyjbiBxOmUVTj%2B5ppnl%2FBSdPT9TqD42o0%2BWXmNEClSnZlPt6dv5xwVON0mxkHlZBc0OyYxA9xY25kSsAW%2FUzxdc6XCjqcjXG6cVEQqER%2BF6ifOsqVS1WXYy99B8PI1gOLVvHt7Rq48RbdNTAj0RwSfZKYTBfTRKBzGWi0W0awpHYTQgrOnMumrBcR7u&X-Amz-Signature=db610f54b8002f8db72d5a93d046fa5eeddc4e92e9e31b11610db5b2cd758fd9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF746R3L%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHNex7KZhu7rrYDJzbj%2BUPV0rjUXz12T6t%2FEiGJ%2FhT6gIgdq5COIu50PS3jw9Kv%2B54W%2BPAUqWUtNT09bDVR96vAHAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNUVObCjKxsJnvwCGSrcA6BqQF5J5NH3q6InqvHMUeiDB0WXhKT2qeCnzXHj98gO38c58Bcwglp0J5hxOoIQdxvrBAuoS2Z5ED4r433u0D1ENL4u0SJZ2FP8VDd%2B9XgUYfOwqev8op1aKGBgGUn9ZeqFzo8xa1xR0K1Q%2BYF4M3WDg7Y9gzdAcJUrMdrQr1k3%2FIwHN6l%2FEZ%2FO3%2FPh7FpWcf6GS79G5TaSGYRF9APieMTQIGY3lefsg%2F4BcQJGNoShNUMrJ7C0%2BTwGQbklvdPB6b2AWP1tPWNCCjUvoczawIRz4tLjlI6nQ9A2xdYIXo7V2ZHq2mGgsEdC%2BW9s73ROqoVdmRUUgElnt3ql8TLRbuFpxhy9iI4Cl1f1dK4PLjHDBScYK3XJOzJkJ4tSzMYx9eC5tr72ZmKqykiScvRm6%2FXZdhXYDRlLOJQqNM9Y29%2FZ2%2BvUzS2ktjU%2BokR90BgCW5rhkA3gecjU%2FGRFSxh7UjAodbr7snOLnNrVkMc9I8OqW92YbS%2B%2BfT9iiM5ysw3eBJ%2Fe7qQ0kZWidjXjZC1WEGvaNq6iLVmDWpfvDrFOjXT5EE2Jw8hrPK0rXtBQxz%2FXybsKgpHOVONRBvHbGhrl7YRvYGhVfoQKC6dafzq2P0YljE%2FXYILKys7RcMuOMN%2FW%2Br8GOqUB%2BZ1zvNNYo9G6av9dRFjzRi5J22Z8LOz7XcyjbiBxOmUVTj%2B5ppnl%2FBSdPT9TqD42o0%2BWXmNEClSnZlPt6dv5xwVON0mxkHlZBc0OyYxA9xY25kSsAW%2FUzxdc6XCjqcjXG6cVEQqER%2BF6ifOsqVS1WXYy99B8PI1gOLVvHt7Rq48RbdNTAj0RwSfZKYTBfTRKBzGWi0W0awpHYTQgrOnMumrBcR7u&X-Amz-Signature=1cbd03aa6c322826a4272c31da9d1efed3e130495718203ec8a455263b32294d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF746R3L%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHNex7KZhu7rrYDJzbj%2BUPV0rjUXz12T6t%2FEiGJ%2FhT6gIgdq5COIu50PS3jw9Kv%2B54W%2BPAUqWUtNT09bDVR96vAHAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNUVObCjKxsJnvwCGSrcA6BqQF5J5NH3q6InqvHMUeiDB0WXhKT2qeCnzXHj98gO38c58Bcwglp0J5hxOoIQdxvrBAuoS2Z5ED4r433u0D1ENL4u0SJZ2FP8VDd%2B9XgUYfOwqev8op1aKGBgGUn9ZeqFzo8xa1xR0K1Q%2BYF4M3WDg7Y9gzdAcJUrMdrQr1k3%2FIwHN6l%2FEZ%2FO3%2FPh7FpWcf6GS79G5TaSGYRF9APieMTQIGY3lefsg%2F4BcQJGNoShNUMrJ7C0%2BTwGQbklvdPB6b2AWP1tPWNCCjUvoczawIRz4tLjlI6nQ9A2xdYIXo7V2ZHq2mGgsEdC%2BW9s73ROqoVdmRUUgElnt3ql8TLRbuFpxhy9iI4Cl1f1dK4PLjHDBScYK3XJOzJkJ4tSzMYx9eC5tr72ZmKqykiScvRm6%2FXZdhXYDRlLOJQqNM9Y29%2FZ2%2BvUzS2ktjU%2BokR90BgCW5rhkA3gecjU%2FGRFSxh7UjAodbr7snOLnNrVkMc9I8OqW92YbS%2B%2BfT9iiM5ysw3eBJ%2Fe7qQ0kZWidjXjZC1WEGvaNq6iLVmDWpfvDrFOjXT5EE2Jw8hrPK0rXtBQxz%2FXybsKgpHOVONRBvHbGhrl7YRvYGhVfoQKC6dafzq2P0YljE%2FXYILKys7RcMuOMN%2FW%2Br8GOqUB%2BZ1zvNNYo9G6av9dRFjzRi5J22Z8LOz7XcyjbiBxOmUVTj%2B5ppnl%2FBSdPT9TqD42o0%2BWXmNEClSnZlPt6dv5xwVON0mxkHlZBc0OyYxA9xY25kSsAW%2FUzxdc6XCjqcjXG6cVEQqER%2BF6ifOsqVS1WXYy99B8PI1gOLVvHt7Rq48RbdNTAj0RwSfZKYTBfTRKBzGWi0W0awpHYTQgrOnMumrBcR7u&X-Amz-Signature=a4c4bb262b4c5fb03726633becc3f56f789352243f74475ee92e06748eccce4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF746R3L%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHNex7KZhu7rrYDJzbj%2BUPV0rjUXz12T6t%2FEiGJ%2FhT6gIgdq5COIu50PS3jw9Kv%2B54W%2BPAUqWUtNT09bDVR96vAHAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNUVObCjKxsJnvwCGSrcA6BqQF5J5NH3q6InqvHMUeiDB0WXhKT2qeCnzXHj98gO38c58Bcwglp0J5hxOoIQdxvrBAuoS2Z5ED4r433u0D1ENL4u0SJZ2FP8VDd%2B9XgUYfOwqev8op1aKGBgGUn9ZeqFzo8xa1xR0K1Q%2BYF4M3WDg7Y9gzdAcJUrMdrQr1k3%2FIwHN6l%2FEZ%2FO3%2FPh7FpWcf6GS79G5TaSGYRF9APieMTQIGY3lefsg%2F4BcQJGNoShNUMrJ7C0%2BTwGQbklvdPB6b2AWP1tPWNCCjUvoczawIRz4tLjlI6nQ9A2xdYIXo7V2ZHq2mGgsEdC%2BW9s73ROqoVdmRUUgElnt3ql8TLRbuFpxhy9iI4Cl1f1dK4PLjHDBScYK3XJOzJkJ4tSzMYx9eC5tr72ZmKqykiScvRm6%2FXZdhXYDRlLOJQqNM9Y29%2FZ2%2BvUzS2ktjU%2BokR90BgCW5rhkA3gecjU%2FGRFSxh7UjAodbr7snOLnNrVkMc9I8OqW92YbS%2B%2BfT9iiM5ysw3eBJ%2Fe7qQ0kZWidjXjZC1WEGvaNq6iLVmDWpfvDrFOjXT5EE2Jw8hrPK0rXtBQxz%2FXybsKgpHOVONRBvHbGhrl7YRvYGhVfoQKC6dafzq2P0YljE%2FXYILKys7RcMuOMN%2FW%2Br8GOqUB%2BZ1zvNNYo9G6av9dRFjzRi5J22Z8LOz7XcyjbiBxOmUVTj%2B5ppnl%2FBSdPT9TqD42o0%2BWXmNEClSnZlPt6dv5xwVON0mxkHlZBc0OyYxA9xY25kSsAW%2FUzxdc6XCjqcjXG6cVEQqER%2BF6ifOsqVS1WXYy99B8PI1gOLVvHt7Rq48RbdNTAj0RwSfZKYTBfTRKBzGWi0W0awpHYTQgrOnMumrBcR7u&X-Amz-Signature=7fe11a764149eddd679784dda40cb2fc2a6fb153efa05f4a5e9e0106bbde72f2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEALQ4AP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDodMvrgQc7Ifjr0L7JHwbUnCVfRhxpLDy1an0WxL3H%2FQIgOZhivwR6srbpq6itdbOrwZrDVdqtztNcPXXheUMClgAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHeA%2B69oE2s2N7w1myrcA5CEn74Eu3pXZlZ0jGCmWRmYUK1UIB5BrrXtIwM%2BTxi8XLBNltDgKbe5j9jEJoWW1JOYgRE89mPU4j1ks8Zxq6oY68He0mFuyLaBenLZCzQBWtLNha6phcDNPYpZ%2Fg%2BRClEDH2RQsoG80lsMrUsLpIFlUdUDu4bWjgSCnOWwKc6zccERA9v1h01Ns0YoGWRYrXnYj0feGXFhAL32h7%2BoMr7xenVKa%2F6NQ6Dr3fxqGAXZqd6jhhpRaRNtjTtsGrhrLF9lsS1tqAyW3LlgRwycWQ6bHwabb%2BVg9LoUG2GDKEkxfB1s3sxY6V25c%2BmCjO29iPE3DtNYkOfciGXjztKIlms6yNwv557UCubOsDaYsEl%2BXik2A6CJJNdLEOnGRCdL4HkRIZoaqZ0jsN5jQ0TxwIY96Ba2h7FtbtTqLIAYk5gP6%2F7GUC7%2BE6ofHeeB0hOjHQxVS%2FHVbborqGEToE0J2tMhlC9TdjAgZkHFBW4Mx%2FRP2Duqy1VsSZ%2FBKhQB4ziiaQ9hnvhRSt1P%2FZ1RNKrjgSgb%2Fjst84karRIOlXr93H3Zla8%2Fzqn9mYWb3xJd3aNvySPEvtBW%2FfPnIV8YnzcwxqHFGwl5ubecqM0N2UVD%2BF%2FwXBcKWaZGOQu1G%2BupMIqko8MGOqUBynBvsgfyzF3YCyunvv5sChV2ZSTQRsNTPIYmEN1vU8B14t0wREAp68sr%2BfZxnUZlyOOxULUaK0Dcn52DPNZq6sdOw2f629tu0hjwALq5M7FI%2BYSPmdewwhzufP0xxeaihsr07Qhc9Xkjur4OFw9f2xhaIEzNATG74iAVlG%2BdUXBkG8rJ5x1IqT7C7A1MpROGtV%2FEmEnssoZJtkuQ3Pexir%2BOOolj&X-Amz-Signature=01789dd4584187d8f60ce2ead1c14d60520ca204c7f31d0d3febcf7fbbec1bb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEALQ4AP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDodMvrgQc7Ifjr0L7JHwbUnCVfRhxpLDy1an0WxL3H%2FQIgOZhivwR6srbpq6itdbOrwZrDVdqtztNcPXXheUMClgAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHeA%2B69oE2s2N7w1myrcA5CEn74Eu3pXZlZ0jGCmWRmYUK1UIB5BrrXtIwM%2BTxi8XLBNltDgKbe5j9jEJoWW1JOYgRE89mPU4j1ks8Zxq6oY68He0mFuyLaBenLZCzQBWtLNha6phcDNPYpZ%2Fg%2BRClEDH2RQsoG80lsMrUsLpIFlUdUDu4bWjgSCnOWwKc6zccERA9v1h01Ns0YoGWRYrXnYj0feGXFhAL32h7%2BoMr7xenVKa%2F6NQ6Dr3fxqGAXZqd6jhhpRaRNtjTtsGrhrLF9lsS1tqAyW3LlgRwycWQ6bHwabb%2BVg9LoUG2GDKEkxfB1s3sxY6V25c%2BmCjO29iPE3DtNYkOfciGXjztKIlms6yNwv557UCubOsDaYsEl%2BXik2A6CJJNdLEOnGRCdL4HkRIZoaqZ0jsN5jQ0TxwIY96Ba2h7FtbtTqLIAYk5gP6%2F7GUC7%2BE6ofHeeB0hOjHQxVS%2FHVbborqGEToE0J2tMhlC9TdjAgZkHFBW4Mx%2FRP2Duqy1VsSZ%2FBKhQB4ziiaQ9hnvhRSt1P%2FZ1RNKrjgSgb%2Fjst84karRIOlXr93H3Zla8%2Fzqn9mYWb3xJd3aNvySPEvtBW%2FfPnIV8YnzcwxqHFGwl5ubecqM0N2UVD%2BF%2FwXBcKWaZGOQu1G%2BupMIqko8MGOqUBynBvsgfyzF3YCyunvv5sChV2ZSTQRsNTPIYmEN1vU8B14t0wREAp68sr%2BfZxnUZlyOOxULUaK0Dcn52DPNZq6sdOw2f629tu0hjwALq5M7FI%2BYSPmdewwhzufP0xxeaihsr07Qhc9Xkjur4OFw9f2xhaIEzNATG74iAVlG%2BdUXBkG8rJ5x1IqT7C7A1MpROGtV%2FEmEnssoZJtkuQ3Pexir%2BOOolj&X-Amz-Signature=f6f6dad2f95c49b3ed9dee425c946d15f71ed6ab0a8593b1315516ea786b9264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEALQ4AP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDodMvrgQc7Ifjr0L7JHwbUnCVfRhxpLDy1an0WxL3H%2FQIgOZhivwR6srbpq6itdbOrwZrDVdqtztNcPXXheUMClgAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHeA%2B69oE2s2N7w1myrcA5CEn74Eu3pXZlZ0jGCmWRmYUK1UIB5BrrXtIwM%2BTxi8XLBNltDgKbe5j9jEJoWW1JOYgRE89mPU4j1ks8Zxq6oY68He0mFuyLaBenLZCzQBWtLNha6phcDNPYpZ%2Fg%2BRClEDH2RQsoG80lsMrUsLpIFlUdUDu4bWjgSCnOWwKc6zccERA9v1h01Ns0YoGWRYrXnYj0feGXFhAL32h7%2BoMr7xenVKa%2F6NQ6Dr3fxqGAXZqd6jhhpRaRNtjTtsGrhrLF9lsS1tqAyW3LlgRwycWQ6bHwabb%2BVg9LoUG2GDKEkxfB1s3sxY6V25c%2BmCjO29iPE3DtNYkOfciGXjztKIlms6yNwv557UCubOsDaYsEl%2BXik2A6CJJNdLEOnGRCdL4HkRIZoaqZ0jsN5jQ0TxwIY96Ba2h7FtbtTqLIAYk5gP6%2F7GUC7%2BE6ofHeeB0hOjHQxVS%2FHVbborqGEToE0J2tMhlC9TdjAgZkHFBW4Mx%2FRP2Duqy1VsSZ%2FBKhQB4ziiaQ9hnvhRSt1P%2FZ1RNKrjgSgb%2Fjst84karRIOlXr93H3Zla8%2Fzqn9mYWb3xJd3aNvySPEvtBW%2FfPnIV8YnzcwxqHFGwl5ubecqM0N2UVD%2BF%2FwXBcKWaZGOQu1G%2BupMIqko8MGOqUBynBvsgfyzF3YCyunvv5sChV2ZSTQRsNTPIYmEN1vU8B14t0wREAp68sr%2BfZxnUZlyOOxULUaK0Dcn52DPNZq6sdOw2f629tu0hjwALq5M7FI%2BYSPmdewwhzufP0xxeaihsr07Qhc9Xkjur4OFw9f2xhaIEzNATG74iAVlG%2BdUXBkG8rJ5x1IqT7C7A1MpROGtV%2FEmEnssoZJtkuQ3Pexir%2BOOolj&X-Amz-Signature=928285ffe38fad1003bdb8f292dc35701e6878c9513a1ee7312a12ace3a4a104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEALQ4AP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDodMvrgQc7Ifjr0L7JHwbUnCVfRhxpLDy1an0WxL3H%2FQIgOZhivwR6srbpq6itdbOrwZrDVdqtztNcPXXheUMClgAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHeA%2B69oE2s2N7w1myrcA5CEn74Eu3pXZlZ0jGCmWRmYUK1UIB5BrrXtIwM%2BTxi8XLBNltDgKbe5j9jEJoWW1JOYgRE89mPU4j1ks8Zxq6oY68He0mFuyLaBenLZCzQBWtLNha6phcDNPYpZ%2Fg%2BRClEDH2RQsoG80lsMrUsLpIFlUdUDu4bWjgSCnOWwKc6zccERA9v1h01Ns0YoGWRYrXnYj0feGXFhAL32h7%2BoMr7xenVKa%2F6NQ6Dr3fxqGAXZqd6jhhpRaRNtjTtsGrhrLF9lsS1tqAyW3LlgRwycWQ6bHwabb%2BVg9LoUG2GDKEkxfB1s3sxY6V25c%2BmCjO29iPE3DtNYkOfciGXjztKIlms6yNwv557UCubOsDaYsEl%2BXik2A6CJJNdLEOnGRCdL4HkRIZoaqZ0jsN5jQ0TxwIY96Ba2h7FtbtTqLIAYk5gP6%2F7GUC7%2BE6ofHeeB0hOjHQxVS%2FHVbborqGEToE0J2tMhlC9TdjAgZkHFBW4Mx%2FRP2Duqy1VsSZ%2FBKhQB4ziiaQ9hnvhRSt1P%2FZ1RNKrjgSgb%2Fjst84karRIOlXr93H3Zla8%2Fzqn9mYWb3xJd3aNvySPEvtBW%2FfPnIV8YnzcwxqHFGwl5ubecqM0N2UVD%2BF%2FwXBcKWaZGOQu1G%2BupMIqko8MGOqUBynBvsgfyzF3YCyunvv5sChV2ZSTQRsNTPIYmEN1vU8B14t0wREAp68sr%2BfZxnUZlyOOxULUaK0Dcn52DPNZq6sdOw2f629tu0hjwALq5M7FI%2BYSPmdewwhzufP0xxeaihsr07Qhc9Xkjur4OFw9f2xhaIEzNATG74iAVlG%2BdUXBkG8rJ5x1IqT7C7A1MpROGtV%2FEmEnssoZJtkuQ3Pexir%2BOOolj&X-Amz-Signature=aa2c100b875eac3c1df4e6be009cc309127bec1b0a3ec524e2a3f3c5d3a27495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEALQ4AP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDodMvrgQc7Ifjr0L7JHwbUnCVfRhxpLDy1an0WxL3H%2FQIgOZhivwR6srbpq6itdbOrwZrDVdqtztNcPXXheUMClgAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHeA%2B69oE2s2N7w1myrcA5CEn74Eu3pXZlZ0jGCmWRmYUK1UIB5BrrXtIwM%2BTxi8XLBNltDgKbe5j9jEJoWW1JOYgRE89mPU4j1ks8Zxq6oY68He0mFuyLaBenLZCzQBWtLNha6phcDNPYpZ%2Fg%2BRClEDH2RQsoG80lsMrUsLpIFlUdUDu4bWjgSCnOWwKc6zccERA9v1h01Ns0YoGWRYrXnYj0feGXFhAL32h7%2BoMr7xenVKa%2F6NQ6Dr3fxqGAXZqd6jhhpRaRNtjTtsGrhrLF9lsS1tqAyW3LlgRwycWQ6bHwabb%2BVg9LoUG2GDKEkxfB1s3sxY6V25c%2BmCjO29iPE3DtNYkOfciGXjztKIlms6yNwv557UCubOsDaYsEl%2BXik2A6CJJNdLEOnGRCdL4HkRIZoaqZ0jsN5jQ0TxwIY96Ba2h7FtbtTqLIAYk5gP6%2F7GUC7%2BE6ofHeeB0hOjHQxVS%2FHVbborqGEToE0J2tMhlC9TdjAgZkHFBW4Mx%2FRP2Duqy1VsSZ%2FBKhQB4ziiaQ9hnvhRSt1P%2FZ1RNKrjgSgb%2Fjst84karRIOlXr93H3Zla8%2Fzqn9mYWb3xJd3aNvySPEvtBW%2FfPnIV8YnzcwxqHFGwl5ubecqM0N2UVD%2BF%2FwXBcKWaZGOQu1G%2BupMIqko8MGOqUBynBvsgfyzF3YCyunvv5sChV2ZSTQRsNTPIYmEN1vU8B14t0wREAp68sr%2BfZxnUZlyOOxULUaK0Dcn52DPNZq6sdOw2f629tu0hjwALq5M7FI%2BYSPmdewwhzufP0xxeaihsr07Qhc9Xkjur4OFw9f2xhaIEzNATG74iAVlG%2BdUXBkG8rJ5x1IqT7C7A1MpROGtV%2FEmEnssoZJtkuQ3Pexir%2BOOolj&X-Amz-Signature=78423530a852982a80d03692e37a8c1d892b2916245618ae18f9264206ea88c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

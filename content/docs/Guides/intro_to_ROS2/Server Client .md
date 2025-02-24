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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTQSR2W%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUG0QxZGZUPYKsnr%2BCiDvszNSNDIbvzZGfsbiLLwTUNwIgSUTPG%2BtPPke8bPUe3kBVrG0rw0ijpnIvwVJApW161AYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMBBdpf5psxgneBXuyrcA68mVGqzONFS3WOlwNj3TZyLbna7R4768hV%2Boyb6jDpMdESs4mULz%2FfswkLCUgVCm4PeEa7sntm%2B%2BN%2B%2BWw0TcA1r%2BG%2Fr9Jjllxnhm4CHHNiq%2BNkV2JQa3XxCZvEy8%2FOdvtcdWTS4OYto16e9htywaBa%2BtNsrP1y81l95mIXsuCaEcVTuE0IzU5aC647y6xAknaqAA%2BHbu2rJ3A7m1OPzJtLJwU9mGxPI%2BxC%2FVA7jMA92c1vHwXlQCg3cv3B6nW9DNyR3FXTlUjmpYZh5VnJnHgKrtwhC77MHd7BGgyz0jByDqAJz1O5yBAuohR%2FMU%2BzJ1gTe%2BzqkDe9KDGeOW4Ez1IF6GbEW9VgL3NTqSnsMKrko0UpChcIjYzbIIi8fdgxw2YwhoJTRKl5GkOGBMJMW90o2pPbOPGZzqptES%2BdRFXc71T1d96c2rElxACN76FFZqLJrk%2BHZuE%2BBneLAMswbDTZiP%2Bkc1QYa74lYKvbm4To%2B9QDAg6vBUhKsW9lzBU9sXr%2BspGd1GG76xY%2B2tuevj7N4zhIHVNjFYeaeegzbx48n7%2Fbrx3jhydoeTRweJOJqUVG7Sfm5sQI1v9Q%2BbTo0pVqihj2XwPhe7vsuMnlw2%2Bd%2FjtBOhWhlx%2BtEj9%2BPMPTd8r0GOqUBIHX5FCy7FOEC13EyP%2FHKtXxHGKBUE2vegqejB3CHtgtU3q3A%2Bo93Zz9V2ueTzUsUZjs1lmkRwrmq5MCWXaTlAPkVmtlVuhvUIJ6%2FOi2VkIp2GMCSkZ%2By%2FJl5%2BZgaUsYqRnu0Qn2zGLfMnjr2H7tRXomoNCeWUv2QEztkcC4y8wmM3ofYHpP%2FOm4uIuyXKJmo97ZcReXaoI1W2BJnrb%2Bqg23CQLt2&X-Amz-Signature=adb082fc16e4159ff015924987a2d67a0cdd3d5fae91e6739c93858077d1c480&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTQSR2W%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUG0QxZGZUPYKsnr%2BCiDvszNSNDIbvzZGfsbiLLwTUNwIgSUTPG%2BtPPke8bPUe3kBVrG0rw0ijpnIvwVJApW161AYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMBBdpf5psxgneBXuyrcA68mVGqzONFS3WOlwNj3TZyLbna7R4768hV%2Boyb6jDpMdESs4mULz%2FfswkLCUgVCm4PeEa7sntm%2B%2BN%2B%2BWw0TcA1r%2BG%2Fr9Jjllxnhm4CHHNiq%2BNkV2JQa3XxCZvEy8%2FOdvtcdWTS4OYto16e9htywaBa%2BtNsrP1y81l95mIXsuCaEcVTuE0IzU5aC647y6xAknaqAA%2BHbu2rJ3A7m1OPzJtLJwU9mGxPI%2BxC%2FVA7jMA92c1vHwXlQCg3cv3B6nW9DNyR3FXTlUjmpYZh5VnJnHgKrtwhC77MHd7BGgyz0jByDqAJz1O5yBAuohR%2FMU%2BzJ1gTe%2BzqkDe9KDGeOW4Ez1IF6GbEW9VgL3NTqSnsMKrko0UpChcIjYzbIIi8fdgxw2YwhoJTRKl5GkOGBMJMW90o2pPbOPGZzqptES%2BdRFXc71T1d96c2rElxACN76FFZqLJrk%2BHZuE%2BBneLAMswbDTZiP%2Bkc1QYa74lYKvbm4To%2B9QDAg6vBUhKsW9lzBU9sXr%2BspGd1GG76xY%2B2tuevj7N4zhIHVNjFYeaeegzbx48n7%2Fbrx3jhydoeTRweJOJqUVG7Sfm5sQI1v9Q%2BbTo0pVqihj2XwPhe7vsuMnlw2%2Bd%2FjtBOhWhlx%2BtEj9%2BPMPTd8r0GOqUBIHX5FCy7FOEC13EyP%2FHKtXxHGKBUE2vegqejB3CHtgtU3q3A%2Bo93Zz9V2ueTzUsUZjs1lmkRwrmq5MCWXaTlAPkVmtlVuhvUIJ6%2FOi2VkIp2GMCSkZ%2By%2FJl5%2BZgaUsYqRnu0Qn2zGLfMnjr2H7tRXomoNCeWUv2QEztkcC4y8wmM3ofYHpP%2FOm4uIuyXKJmo97ZcReXaoI1W2BJnrb%2Bqg23CQLt2&X-Amz-Signature=66bae1c3f61cc67c79c0d67e3b1bd08b87ee45ab811d3317c50b87ef0b0982bc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTQSR2W%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUG0QxZGZUPYKsnr%2BCiDvszNSNDIbvzZGfsbiLLwTUNwIgSUTPG%2BtPPke8bPUe3kBVrG0rw0ijpnIvwVJApW161AYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMBBdpf5psxgneBXuyrcA68mVGqzONFS3WOlwNj3TZyLbna7R4768hV%2Boyb6jDpMdESs4mULz%2FfswkLCUgVCm4PeEa7sntm%2B%2BN%2B%2BWw0TcA1r%2BG%2Fr9Jjllxnhm4CHHNiq%2BNkV2JQa3XxCZvEy8%2FOdvtcdWTS4OYto16e9htywaBa%2BtNsrP1y81l95mIXsuCaEcVTuE0IzU5aC647y6xAknaqAA%2BHbu2rJ3A7m1OPzJtLJwU9mGxPI%2BxC%2FVA7jMA92c1vHwXlQCg3cv3B6nW9DNyR3FXTlUjmpYZh5VnJnHgKrtwhC77MHd7BGgyz0jByDqAJz1O5yBAuohR%2FMU%2BzJ1gTe%2BzqkDe9KDGeOW4Ez1IF6GbEW9VgL3NTqSnsMKrko0UpChcIjYzbIIi8fdgxw2YwhoJTRKl5GkOGBMJMW90o2pPbOPGZzqptES%2BdRFXc71T1d96c2rElxACN76FFZqLJrk%2BHZuE%2BBneLAMswbDTZiP%2Bkc1QYa74lYKvbm4To%2B9QDAg6vBUhKsW9lzBU9sXr%2BspGd1GG76xY%2B2tuevj7N4zhIHVNjFYeaeegzbx48n7%2Fbrx3jhydoeTRweJOJqUVG7Sfm5sQI1v9Q%2BbTo0pVqihj2XwPhe7vsuMnlw2%2Bd%2FjtBOhWhlx%2BtEj9%2BPMPTd8r0GOqUBIHX5FCy7FOEC13EyP%2FHKtXxHGKBUE2vegqejB3CHtgtU3q3A%2Bo93Zz9V2ueTzUsUZjs1lmkRwrmq5MCWXaTlAPkVmtlVuhvUIJ6%2FOi2VkIp2GMCSkZ%2By%2FJl5%2BZgaUsYqRnu0Qn2zGLfMnjr2H7tRXomoNCeWUv2QEztkcC4y8wmM3ofYHpP%2FOm4uIuyXKJmo97ZcReXaoI1W2BJnrb%2Bqg23CQLt2&X-Amz-Signature=d6c88da4e561e05f744412a5687d1bf313d7c71a6ae5eb3622678d1e591f4907&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTQSR2W%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUG0QxZGZUPYKsnr%2BCiDvszNSNDIbvzZGfsbiLLwTUNwIgSUTPG%2BtPPke8bPUe3kBVrG0rw0ijpnIvwVJApW161AYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMBBdpf5psxgneBXuyrcA68mVGqzONFS3WOlwNj3TZyLbna7R4768hV%2Boyb6jDpMdESs4mULz%2FfswkLCUgVCm4PeEa7sntm%2B%2BN%2B%2BWw0TcA1r%2BG%2Fr9Jjllxnhm4CHHNiq%2BNkV2JQa3XxCZvEy8%2FOdvtcdWTS4OYto16e9htywaBa%2BtNsrP1y81l95mIXsuCaEcVTuE0IzU5aC647y6xAknaqAA%2BHbu2rJ3A7m1OPzJtLJwU9mGxPI%2BxC%2FVA7jMA92c1vHwXlQCg3cv3B6nW9DNyR3FXTlUjmpYZh5VnJnHgKrtwhC77MHd7BGgyz0jByDqAJz1O5yBAuohR%2FMU%2BzJ1gTe%2BzqkDe9KDGeOW4Ez1IF6GbEW9VgL3NTqSnsMKrko0UpChcIjYzbIIi8fdgxw2YwhoJTRKl5GkOGBMJMW90o2pPbOPGZzqptES%2BdRFXc71T1d96c2rElxACN76FFZqLJrk%2BHZuE%2BBneLAMswbDTZiP%2Bkc1QYa74lYKvbm4To%2B9QDAg6vBUhKsW9lzBU9sXr%2BspGd1GG76xY%2B2tuevj7N4zhIHVNjFYeaeegzbx48n7%2Fbrx3jhydoeTRweJOJqUVG7Sfm5sQI1v9Q%2BbTo0pVqihj2XwPhe7vsuMnlw2%2Bd%2FjtBOhWhlx%2BtEj9%2BPMPTd8r0GOqUBIHX5FCy7FOEC13EyP%2FHKtXxHGKBUE2vegqejB3CHtgtU3q3A%2Bo93Zz9V2ueTzUsUZjs1lmkRwrmq5MCWXaTlAPkVmtlVuhvUIJ6%2FOi2VkIp2GMCSkZ%2By%2FJl5%2BZgaUsYqRnu0Qn2zGLfMnjr2H7tRXomoNCeWUv2QEztkcC4y8wmM3ofYHpP%2FOm4uIuyXKJmo97ZcReXaoI1W2BJnrb%2Bqg23CQLt2&X-Amz-Signature=0f6f8309de4cd103252c90f243214ee359794c3d91f37dc90d51ffd4d0b2a41c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTQSR2W%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUG0QxZGZUPYKsnr%2BCiDvszNSNDIbvzZGfsbiLLwTUNwIgSUTPG%2BtPPke8bPUe3kBVrG0rw0ijpnIvwVJApW161AYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMBBdpf5psxgneBXuyrcA68mVGqzONFS3WOlwNj3TZyLbna7R4768hV%2Boyb6jDpMdESs4mULz%2FfswkLCUgVCm4PeEa7sntm%2B%2BN%2B%2BWw0TcA1r%2BG%2Fr9Jjllxnhm4CHHNiq%2BNkV2JQa3XxCZvEy8%2FOdvtcdWTS4OYto16e9htywaBa%2BtNsrP1y81l95mIXsuCaEcVTuE0IzU5aC647y6xAknaqAA%2BHbu2rJ3A7m1OPzJtLJwU9mGxPI%2BxC%2FVA7jMA92c1vHwXlQCg3cv3B6nW9DNyR3FXTlUjmpYZh5VnJnHgKrtwhC77MHd7BGgyz0jByDqAJz1O5yBAuohR%2FMU%2BzJ1gTe%2BzqkDe9KDGeOW4Ez1IF6GbEW9VgL3NTqSnsMKrko0UpChcIjYzbIIi8fdgxw2YwhoJTRKl5GkOGBMJMW90o2pPbOPGZzqptES%2BdRFXc71T1d96c2rElxACN76FFZqLJrk%2BHZuE%2BBneLAMswbDTZiP%2Bkc1QYa74lYKvbm4To%2B9QDAg6vBUhKsW9lzBU9sXr%2BspGd1GG76xY%2B2tuevj7N4zhIHVNjFYeaeegzbx48n7%2Fbrx3jhydoeTRweJOJqUVG7Sfm5sQI1v9Q%2BbTo0pVqihj2XwPhe7vsuMnlw2%2Bd%2FjtBOhWhlx%2BtEj9%2BPMPTd8r0GOqUBIHX5FCy7FOEC13EyP%2FHKtXxHGKBUE2vegqejB3CHtgtU3q3A%2Bo93Zz9V2ueTzUsUZjs1lmkRwrmq5MCWXaTlAPkVmtlVuhvUIJ6%2FOi2VkIp2GMCSkZ%2By%2FJl5%2BZgaUsYqRnu0Qn2zGLfMnjr2H7tRXomoNCeWUv2QEztkcC4y8wmM3ofYHpP%2FOm4uIuyXKJmo97ZcReXaoI1W2BJnrb%2Bqg23CQLt2&X-Amz-Signature=6c09e1e7afac84f39d6e0b321176f5fdf2610d9675415a121f8f96d36e2a48bb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE6X6GEL%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCvbVbHEVlKJI8oKLyq3WvewDyNE1g6ISRvtoAlK%2FbajgIgcLBU5VQliKImvAe6dkdM4eObwELKUGYAN%2Fk3SWiuIXAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPToS0odt3jB5njVMCrcA11hyEay7TyQcIuTypM4y06DZC9SSeghvpsxHs1PK9BcbcxBQAX2pOSB8A%2FygBZrsTmGn5FjV9IfyTwktTFXpkpL6OT4pT4aIJgllnP0pjJQrjZ%2FDctBAFzJyX5KJ%2FnhtiC8avNRrl9JLgQ4bPz8SNX5JDbshPScanYJuVpO7972DFLHLh1vW3lFREz052lg0FZ0j%2B61p2WTUZip7rJFMsDZaqoFXZQUF3%2FKOu0FYE0qRk%2Bt6gUbCzokpFaSU%2Bw%2B%2Br8Lx4z0HxNSDyJjaPo4BZRbY%2B40hiOdNAOTf7UImF8%2FW9mzbIMOEacvZIyqPAaFD8h9QpVVRZwljClX9QivFujIgQSH11bgzmMl3mgoQtO0zjg1HUahhPy6kRLZCK%2F1njGkJunQ%2F2bBeV6YyJX4Gy75NwBrzAzyS%2FcZPM7qJy8fJHVcIVvY3uxhC0F0nSO7lNe41804QikesnEH7Hy4O83l80a7PAjWRAM20IB7tFTDdjJ%2BYqmy9Hi236OaRoKC86vTQtDTFI0CWo0LCwdM4ZzmjLwbKfPsm%2F3G9Ao28pskKAP4FThqf%2BCzI%2Fa45fethFL9MURfp93hqzwFgzhoNq6vsZaMYerLfqG2vwjHXwPcmNn9Z0kC9fCtWsCaMKKgoL8GOqUBv4kTgQTc4udyqWRAmomJJkyIGMFtOX9L7CCAow5ZodDssJuzwcvaE%2B2An4ycn6V0LkUAoJKNIhmZjac6wjrKjobzFDM5iiJXPI67J2KeJTjVWXKsz4go7uwkusCdU0NSbJLsKr7Z4GCTAkXANHSQdSARBxASD7K1EounVm%2FeUp38xnF31Ss%2FeJUM%2FelfNUJH9LtNFbquYBrNJ6vMRvT%2BIecPwySB&X-Amz-Signature=004f4abd479bcefcd4059b89b901331caa23c62bf16c37cfbbf88d119eec107e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE6X6GEL%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCvbVbHEVlKJI8oKLyq3WvewDyNE1g6ISRvtoAlK%2FbajgIgcLBU5VQliKImvAe6dkdM4eObwELKUGYAN%2Fk3SWiuIXAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPToS0odt3jB5njVMCrcA11hyEay7TyQcIuTypM4y06DZC9SSeghvpsxHs1PK9BcbcxBQAX2pOSB8A%2FygBZrsTmGn5FjV9IfyTwktTFXpkpL6OT4pT4aIJgllnP0pjJQrjZ%2FDctBAFzJyX5KJ%2FnhtiC8avNRrl9JLgQ4bPz8SNX5JDbshPScanYJuVpO7972DFLHLh1vW3lFREz052lg0FZ0j%2B61p2WTUZip7rJFMsDZaqoFXZQUF3%2FKOu0FYE0qRk%2Bt6gUbCzokpFaSU%2Bw%2B%2Br8Lx4z0HxNSDyJjaPo4BZRbY%2B40hiOdNAOTf7UImF8%2FW9mzbIMOEacvZIyqPAaFD8h9QpVVRZwljClX9QivFujIgQSH11bgzmMl3mgoQtO0zjg1HUahhPy6kRLZCK%2F1njGkJunQ%2F2bBeV6YyJX4Gy75NwBrzAzyS%2FcZPM7qJy8fJHVcIVvY3uxhC0F0nSO7lNe41804QikesnEH7Hy4O83l80a7PAjWRAM20IB7tFTDdjJ%2BYqmy9Hi236OaRoKC86vTQtDTFI0CWo0LCwdM4ZzmjLwbKfPsm%2F3G9Ao28pskKAP4FThqf%2BCzI%2Fa45fethFL9MURfp93hqzwFgzhoNq6vsZaMYerLfqG2vwjHXwPcmNn9Z0kC9fCtWsCaMKKgoL8GOqUBv4kTgQTc4udyqWRAmomJJkyIGMFtOX9L7CCAow5ZodDssJuzwcvaE%2B2An4ycn6V0LkUAoJKNIhmZjac6wjrKjobzFDM5iiJXPI67J2KeJTjVWXKsz4go7uwkusCdU0NSbJLsKr7Z4GCTAkXANHSQdSARBxASD7K1EounVm%2FeUp38xnF31Ss%2FeJUM%2FelfNUJH9LtNFbquYBrNJ6vMRvT%2BIecPwySB&X-Amz-Signature=54f0426cabd97ae4efd6b238309e7da3a9a026827ae563f542ca338ab22fcd07&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE6X6GEL%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCvbVbHEVlKJI8oKLyq3WvewDyNE1g6ISRvtoAlK%2FbajgIgcLBU5VQliKImvAe6dkdM4eObwELKUGYAN%2Fk3SWiuIXAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPToS0odt3jB5njVMCrcA11hyEay7TyQcIuTypM4y06DZC9SSeghvpsxHs1PK9BcbcxBQAX2pOSB8A%2FygBZrsTmGn5FjV9IfyTwktTFXpkpL6OT4pT4aIJgllnP0pjJQrjZ%2FDctBAFzJyX5KJ%2FnhtiC8avNRrl9JLgQ4bPz8SNX5JDbshPScanYJuVpO7972DFLHLh1vW3lFREz052lg0FZ0j%2B61p2WTUZip7rJFMsDZaqoFXZQUF3%2FKOu0FYE0qRk%2Bt6gUbCzokpFaSU%2Bw%2B%2Br8Lx4z0HxNSDyJjaPo4BZRbY%2B40hiOdNAOTf7UImF8%2FW9mzbIMOEacvZIyqPAaFD8h9QpVVRZwljClX9QivFujIgQSH11bgzmMl3mgoQtO0zjg1HUahhPy6kRLZCK%2F1njGkJunQ%2F2bBeV6YyJX4Gy75NwBrzAzyS%2FcZPM7qJy8fJHVcIVvY3uxhC0F0nSO7lNe41804QikesnEH7Hy4O83l80a7PAjWRAM20IB7tFTDdjJ%2BYqmy9Hi236OaRoKC86vTQtDTFI0CWo0LCwdM4ZzmjLwbKfPsm%2F3G9Ao28pskKAP4FThqf%2BCzI%2Fa45fethFL9MURfp93hqzwFgzhoNq6vsZaMYerLfqG2vwjHXwPcmNn9Z0kC9fCtWsCaMKKgoL8GOqUBv4kTgQTc4udyqWRAmomJJkyIGMFtOX9L7CCAow5ZodDssJuzwcvaE%2B2An4ycn6V0LkUAoJKNIhmZjac6wjrKjobzFDM5iiJXPI67J2KeJTjVWXKsz4go7uwkusCdU0NSbJLsKr7Z4GCTAkXANHSQdSARBxASD7K1EounVm%2FeUp38xnF31Ss%2FeJUM%2FelfNUJH9LtNFbquYBrNJ6vMRvT%2BIecPwySB&X-Amz-Signature=12d7ef0faecd8707e3371fc29e3f2dcc3eb889ed13bd276db3853f31acad0bc8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE6X6GEL%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCvbVbHEVlKJI8oKLyq3WvewDyNE1g6ISRvtoAlK%2FbajgIgcLBU5VQliKImvAe6dkdM4eObwELKUGYAN%2Fk3SWiuIXAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPToS0odt3jB5njVMCrcA11hyEay7TyQcIuTypM4y06DZC9SSeghvpsxHs1PK9BcbcxBQAX2pOSB8A%2FygBZrsTmGn5FjV9IfyTwktTFXpkpL6OT4pT4aIJgllnP0pjJQrjZ%2FDctBAFzJyX5KJ%2FnhtiC8avNRrl9JLgQ4bPz8SNX5JDbshPScanYJuVpO7972DFLHLh1vW3lFREz052lg0FZ0j%2B61p2WTUZip7rJFMsDZaqoFXZQUF3%2FKOu0FYE0qRk%2Bt6gUbCzokpFaSU%2Bw%2B%2Br8Lx4z0HxNSDyJjaPo4BZRbY%2B40hiOdNAOTf7UImF8%2FW9mzbIMOEacvZIyqPAaFD8h9QpVVRZwljClX9QivFujIgQSH11bgzmMl3mgoQtO0zjg1HUahhPy6kRLZCK%2F1njGkJunQ%2F2bBeV6YyJX4Gy75NwBrzAzyS%2FcZPM7qJy8fJHVcIVvY3uxhC0F0nSO7lNe41804QikesnEH7Hy4O83l80a7PAjWRAM20IB7tFTDdjJ%2BYqmy9Hi236OaRoKC86vTQtDTFI0CWo0LCwdM4ZzmjLwbKfPsm%2F3G9Ao28pskKAP4FThqf%2BCzI%2Fa45fethFL9MURfp93hqzwFgzhoNq6vsZaMYerLfqG2vwjHXwPcmNn9Z0kC9fCtWsCaMKKgoL8GOqUBv4kTgQTc4udyqWRAmomJJkyIGMFtOX9L7CCAow5ZodDssJuzwcvaE%2B2An4ycn6V0LkUAoJKNIhmZjac6wjrKjobzFDM5iiJXPI67J2KeJTjVWXKsz4go7uwkusCdU0NSbJLsKr7Z4GCTAkXANHSQdSARBxASD7K1EounVm%2FeUp38xnF31Ss%2FeJUM%2FelfNUJH9LtNFbquYBrNJ6vMRvT%2BIecPwySB&X-Amz-Signature=80ff48df442f3977a467fb0ae5d4634ae980d81b6a270ebd1cb93ca090d06fee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE6X6GEL%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCvbVbHEVlKJI8oKLyq3WvewDyNE1g6ISRvtoAlK%2FbajgIgcLBU5VQliKImvAe6dkdM4eObwELKUGYAN%2Fk3SWiuIXAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPToS0odt3jB5njVMCrcA11hyEay7TyQcIuTypM4y06DZC9SSeghvpsxHs1PK9BcbcxBQAX2pOSB8A%2FygBZrsTmGn5FjV9IfyTwktTFXpkpL6OT4pT4aIJgllnP0pjJQrjZ%2FDctBAFzJyX5KJ%2FnhtiC8avNRrl9JLgQ4bPz8SNX5JDbshPScanYJuVpO7972DFLHLh1vW3lFREz052lg0FZ0j%2B61p2WTUZip7rJFMsDZaqoFXZQUF3%2FKOu0FYE0qRk%2Bt6gUbCzokpFaSU%2Bw%2B%2Br8Lx4z0HxNSDyJjaPo4BZRbY%2B40hiOdNAOTf7UImF8%2FW9mzbIMOEacvZIyqPAaFD8h9QpVVRZwljClX9QivFujIgQSH11bgzmMl3mgoQtO0zjg1HUahhPy6kRLZCK%2F1njGkJunQ%2F2bBeV6YyJX4Gy75NwBrzAzyS%2FcZPM7qJy8fJHVcIVvY3uxhC0F0nSO7lNe41804QikesnEH7Hy4O83l80a7PAjWRAM20IB7tFTDdjJ%2BYqmy9Hi236OaRoKC86vTQtDTFI0CWo0LCwdM4ZzmjLwbKfPsm%2F3G9Ao28pskKAP4FThqf%2BCzI%2Fa45fethFL9MURfp93hqzwFgzhoNq6vsZaMYerLfqG2vwjHXwPcmNn9Z0kC9fCtWsCaMKKgoL8GOqUBv4kTgQTc4udyqWRAmomJJkyIGMFtOX9L7CCAow5ZodDssJuzwcvaE%2B2An4ycn6V0LkUAoJKNIhmZjac6wjrKjobzFDM5iiJXPI67J2KeJTjVWXKsz4go7uwkusCdU0NSbJLsKr7Z4GCTAkXANHSQdSARBxASD7K1EounVm%2FeUp38xnF31Ss%2FeJUM%2FelfNUJH9LtNFbquYBrNJ6vMRvT%2BIecPwySB&X-Amz-Signature=0238547d691c736ffbd556666302be9cb8df546764e672ccfb7b39fe808a3c5f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

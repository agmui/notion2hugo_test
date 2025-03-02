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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIERWEFX%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIrUlmHNNb5VsAIDroulvvnNLXb7gdJvQcy%2BJdhs3MuAiAsbpRqnWVa01V4lpwX%2Fo2CiSwTuHZkvr8b0OgvzB6L9iqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2Bckp%2FpVJ0vjmqyhKtwDBIs9iERLuE7lDp2VAde42OW8KxmqPaq6q4QFpIsj4cP89jegP3frbH84YatprZwaYZjHKr9ZqeBXMA8rM1ahhmWM8U4zfPwIREdklXW%2B1aF0EDJCjDc8pX1tkl9dk%2FJYkoHcYdSMeITbDua7PnX4zE0Olf5KtJCxVIKvzfvlg9ogFo2IiXzs3RMqxHkZtJORhcrkMlEZH7FRa3dpXTG8oauyHF1sm%2FCQ9Pv7tgY4vJtnQaNAxJ8vB6xVz3TVANpCmehZwp2rofQHw1pBSVf3xuFxKWJ6GSyxuzFsix6gW6RNF9ER6yrfFpIysuuSSrj4EL16t7WV2KQLRotgW4Mp8KzCaQTgojdLNna1tto3RV7awamMzQR6tUDTQJgsG2myltTEbP8iXVppaM9zzHHMVLjSnnQfzirB6IDBOps8jLC7%2BwGE6PjOC%2FpKi9GRaho9lXaQ%2FmI7ODCPxzqXDIK6J6cELCdXShWrST0YJsjpe3RNQ5qrmiU5nDUW7arKfKgo7mCvBfar%2F%2BM9uRR2Q1LWDCqTUE2u90QqpEpdcj1HC7a0V68zhizKycZwbWzl%2B130WYvb3i3%2B20wAxM81AlHbYIcjQIlbRmnh3zVAPeZAUg9R2z7A6CHXGvMhnNQw6PiQvgY6pgEPKqASD4MOrhDL%2Fl7Blnfmux%2B0AKYOHGHOcqrWlFq9fSaU43B5E1DTteA6ZXS%2BEAs1Co%2B1Z%2Bo8yUoyBbKiGhvVTq8AahkxvJfhAbUqfvQqFCm8%2B62n3rW%2FIU4oP6F0jlbgZuHBdtCuuqJztvy7YTXIJYYepkHokd5r%2B%2BXv8D5IfIbFzEzbVimpFbTQU3whCpp%2F7XGo5YIZh3dHNhmGYrbNaooCJqW0&X-Amz-Signature=1833b00d283f870d5abf3d04b297ba6dabb1c4be71afa98895269040604713e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIERWEFX%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIrUlmHNNb5VsAIDroulvvnNLXb7gdJvQcy%2BJdhs3MuAiAsbpRqnWVa01V4lpwX%2Fo2CiSwTuHZkvr8b0OgvzB6L9iqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2Bckp%2FpVJ0vjmqyhKtwDBIs9iERLuE7lDp2VAde42OW8KxmqPaq6q4QFpIsj4cP89jegP3frbH84YatprZwaYZjHKr9ZqeBXMA8rM1ahhmWM8U4zfPwIREdklXW%2B1aF0EDJCjDc8pX1tkl9dk%2FJYkoHcYdSMeITbDua7PnX4zE0Olf5KtJCxVIKvzfvlg9ogFo2IiXzs3RMqxHkZtJORhcrkMlEZH7FRa3dpXTG8oauyHF1sm%2FCQ9Pv7tgY4vJtnQaNAxJ8vB6xVz3TVANpCmehZwp2rofQHw1pBSVf3xuFxKWJ6GSyxuzFsix6gW6RNF9ER6yrfFpIysuuSSrj4EL16t7WV2KQLRotgW4Mp8KzCaQTgojdLNna1tto3RV7awamMzQR6tUDTQJgsG2myltTEbP8iXVppaM9zzHHMVLjSnnQfzirB6IDBOps8jLC7%2BwGE6PjOC%2FpKi9GRaho9lXaQ%2FmI7ODCPxzqXDIK6J6cELCdXShWrST0YJsjpe3RNQ5qrmiU5nDUW7arKfKgo7mCvBfar%2F%2BM9uRR2Q1LWDCqTUE2u90QqpEpdcj1HC7a0V68zhizKycZwbWzl%2B130WYvb3i3%2B20wAxM81AlHbYIcjQIlbRmnh3zVAPeZAUg9R2z7A6CHXGvMhnNQw6PiQvgY6pgEPKqASD4MOrhDL%2Fl7Blnfmux%2B0AKYOHGHOcqrWlFq9fSaU43B5E1DTteA6ZXS%2BEAs1Co%2B1Z%2Bo8yUoyBbKiGhvVTq8AahkxvJfhAbUqfvQqFCm8%2B62n3rW%2FIU4oP6F0jlbgZuHBdtCuuqJztvy7YTXIJYYepkHokd5r%2B%2BXv8D5IfIbFzEzbVimpFbTQU3whCpp%2F7XGo5YIZh3dHNhmGYrbNaooCJqW0&X-Amz-Signature=08a71c702405b1c1621597c49e9186169f94524b6f1434e002840acf1dab431b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIERWEFX%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIrUlmHNNb5VsAIDroulvvnNLXb7gdJvQcy%2BJdhs3MuAiAsbpRqnWVa01V4lpwX%2Fo2CiSwTuHZkvr8b0OgvzB6L9iqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2Bckp%2FpVJ0vjmqyhKtwDBIs9iERLuE7lDp2VAde42OW8KxmqPaq6q4QFpIsj4cP89jegP3frbH84YatprZwaYZjHKr9ZqeBXMA8rM1ahhmWM8U4zfPwIREdklXW%2B1aF0EDJCjDc8pX1tkl9dk%2FJYkoHcYdSMeITbDua7PnX4zE0Olf5KtJCxVIKvzfvlg9ogFo2IiXzs3RMqxHkZtJORhcrkMlEZH7FRa3dpXTG8oauyHF1sm%2FCQ9Pv7tgY4vJtnQaNAxJ8vB6xVz3TVANpCmehZwp2rofQHw1pBSVf3xuFxKWJ6GSyxuzFsix6gW6RNF9ER6yrfFpIysuuSSrj4EL16t7WV2KQLRotgW4Mp8KzCaQTgojdLNna1tto3RV7awamMzQR6tUDTQJgsG2myltTEbP8iXVppaM9zzHHMVLjSnnQfzirB6IDBOps8jLC7%2BwGE6PjOC%2FpKi9GRaho9lXaQ%2FmI7ODCPxzqXDIK6J6cELCdXShWrST0YJsjpe3RNQ5qrmiU5nDUW7arKfKgo7mCvBfar%2F%2BM9uRR2Q1LWDCqTUE2u90QqpEpdcj1HC7a0V68zhizKycZwbWzl%2B130WYvb3i3%2B20wAxM81AlHbYIcjQIlbRmnh3zVAPeZAUg9R2z7A6CHXGvMhnNQw6PiQvgY6pgEPKqASD4MOrhDL%2Fl7Blnfmux%2B0AKYOHGHOcqrWlFq9fSaU43B5E1DTteA6ZXS%2BEAs1Co%2B1Z%2Bo8yUoyBbKiGhvVTq8AahkxvJfhAbUqfvQqFCm8%2B62n3rW%2FIU4oP6F0jlbgZuHBdtCuuqJztvy7YTXIJYYepkHokd5r%2B%2BXv8D5IfIbFzEzbVimpFbTQU3whCpp%2F7XGo5YIZh3dHNhmGYrbNaooCJqW0&X-Amz-Signature=e25c58092300de65818125ad005d886c1486053ae12e425b40c172130a522b0f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIERWEFX%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIrUlmHNNb5VsAIDroulvvnNLXb7gdJvQcy%2BJdhs3MuAiAsbpRqnWVa01V4lpwX%2Fo2CiSwTuHZkvr8b0OgvzB6L9iqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2Bckp%2FpVJ0vjmqyhKtwDBIs9iERLuE7lDp2VAde42OW8KxmqPaq6q4QFpIsj4cP89jegP3frbH84YatprZwaYZjHKr9ZqeBXMA8rM1ahhmWM8U4zfPwIREdklXW%2B1aF0EDJCjDc8pX1tkl9dk%2FJYkoHcYdSMeITbDua7PnX4zE0Olf5KtJCxVIKvzfvlg9ogFo2IiXzs3RMqxHkZtJORhcrkMlEZH7FRa3dpXTG8oauyHF1sm%2FCQ9Pv7tgY4vJtnQaNAxJ8vB6xVz3TVANpCmehZwp2rofQHw1pBSVf3xuFxKWJ6GSyxuzFsix6gW6RNF9ER6yrfFpIysuuSSrj4EL16t7WV2KQLRotgW4Mp8KzCaQTgojdLNna1tto3RV7awamMzQR6tUDTQJgsG2myltTEbP8iXVppaM9zzHHMVLjSnnQfzirB6IDBOps8jLC7%2BwGE6PjOC%2FpKi9GRaho9lXaQ%2FmI7ODCPxzqXDIK6J6cELCdXShWrST0YJsjpe3RNQ5qrmiU5nDUW7arKfKgo7mCvBfar%2F%2BM9uRR2Q1LWDCqTUE2u90QqpEpdcj1HC7a0V68zhizKycZwbWzl%2B130WYvb3i3%2B20wAxM81AlHbYIcjQIlbRmnh3zVAPeZAUg9R2z7A6CHXGvMhnNQw6PiQvgY6pgEPKqASD4MOrhDL%2Fl7Blnfmux%2B0AKYOHGHOcqrWlFq9fSaU43B5E1DTteA6ZXS%2BEAs1Co%2B1Z%2Bo8yUoyBbKiGhvVTq8AahkxvJfhAbUqfvQqFCm8%2B62n3rW%2FIU4oP6F0jlbgZuHBdtCuuqJztvy7YTXIJYYepkHokd5r%2B%2BXv8D5IfIbFzEzbVimpFbTQU3whCpp%2F7XGo5YIZh3dHNhmGYrbNaooCJqW0&X-Amz-Signature=80ba0c650043836a8b8c04c84cdccd72e35eec67272e1113dc2c227fe6b5893f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIERWEFX%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIrUlmHNNb5VsAIDroulvvnNLXb7gdJvQcy%2BJdhs3MuAiAsbpRqnWVa01V4lpwX%2Fo2CiSwTuHZkvr8b0OgvzB6L9iqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2Bckp%2FpVJ0vjmqyhKtwDBIs9iERLuE7lDp2VAde42OW8KxmqPaq6q4QFpIsj4cP89jegP3frbH84YatprZwaYZjHKr9ZqeBXMA8rM1ahhmWM8U4zfPwIREdklXW%2B1aF0EDJCjDc8pX1tkl9dk%2FJYkoHcYdSMeITbDua7PnX4zE0Olf5KtJCxVIKvzfvlg9ogFo2IiXzs3RMqxHkZtJORhcrkMlEZH7FRa3dpXTG8oauyHF1sm%2FCQ9Pv7tgY4vJtnQaNAxJ8vB6xVz3TVANpCmehZwp2rofQHw1pBSVf3xuFxKWJ6GSyxuzFsix6gW6RNF9ER6yrfFpIysuuSSrj4EL16t7WV2KQLRotgW4Mp8KzCaQTgojdLNna1tto3RV7awamMzQR6tUDTQJgsG2myltTEbP8iXVppaM9zzHHMVLjSnnQfzirB6IDBOps8jLC7%2BwGE6PjOC%2FpKi9GRaho9lXaQ%2FmI7ODCPxzqXDIK6J6cELCdXShWrST0YJsjpe3RNQ5qrmiU5nDUW7arKfKgo7mCvBfar%2F%2BM9uRR2Q1LWDCqTUE2u90QqpEpdcj1HC7a0V68zhizKycZwbWzl%2B130WYvb3i3%2B20wAxM81AlHbYIcjQIlbRmnh3zVAPeZAUg9R2z7A6CHXGvMhnNQw6PiQvgY6pgEPKqASD4MOrhDL%2Fl7Blnfmux%2B0AKYOHGHOcqrWlFq9fSaU43B5E1DTteA6ZXS%2BEAs1Co%2B1Z%2Bo8yUoyBbKiGhvVTq8AahkxvJfhAbUqfvQqFCm8%2B62n3rW%2FIU4oP6F0jlbgZuHBdtCuuqJztvy7YTXIJYYepkHokd5r%2B%2BXv8D5IfIbFzEzbVimpFbTQU3whCpp%2F7XGo5YIZh3dHNhmGYrbNaooCJqW0&X-Amz-Signature=c0c5929e4519e0aaf17aac3486fa655e2ba320dbcdb7c20d76fd207a41711a74&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

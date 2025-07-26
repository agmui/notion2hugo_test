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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQAOHMAL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFyuqNyq8Kv0TsFfqQ2Qd6dDtKiPwrEWJqqP5dEaQKgiAiBLI%2BSasBO7iua1e0WEj%2B2eqQvxezkhOjYVf70GlMo%2Fcyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMUMZYwsMU0%2BgspYM%2FKtwD8CAj9wCGJdl81ezJBeLfb8%2FKA64OxaLM01U%2BXAS1j%2BVWBMLnIx5c0jTC9s%2FGliivGHo5c9Urmkfj%2BodVCk%2BIqy7Q9GUqtpZRS8KfWSb459TRkG84wPMYWuPmyzP%2Fzuzx7VAw9%2FT22MiAKG3FJeWb7ViOck4qHGprGtY%2B9xtgk8xQRAPAhJWiaHI1bhB1OItE4v%2BTPMsVbfcN7j03t7huuumTJ8X3RiCrjHdIY0hSoCRsz7gnIW0tr0aRZkW2ABhYwzG9q5LcuGsFv4hwM80kbYDlUq6WsBZsvBRuptC2bvYsw2Ulgekndjl45gwGrvlg17gLs7MLmjEvVJgGMVgbxYQs1LQ6UQZXXqgN7VtxYU5B9v03fujyKUZLiuNSDzXrmNRfJb0chjRrirGKHnFwyDwdsFBm%2BvGbOJZngJaLBm9%2Fpk30nAcby0t3NndzW47PjQ5JSpdfbzqgVxO13tZa4O4Ay1RnWOcQD%2BxFvpnqpdQDfc3FDKM2lJNbk1vJ3LvKA%2BCTcWCqB93VyDnjnmaKmMNTcBdiGQLjuQXwkVsJ3LgxJxzctm0waiAEFMrKkkEY52S1ZJPmAboUlIPeiXFoNsf7FPG6PKA2BotNH955qKY83GBEZWMWY5CS7%2B8wneKRxAY6pgFCKtcjzV5gT1p142rK%2FNk%2BtDYF5t6qbY7YSgPb3uy9B9AsQCBcTe0OVphdrDYHQVwg2y3L3Ugyqx7m83QLPWstNc9M1G0yJ%2BSu3J2ikH8LsE6UDKrlYTa3ajBsa52Wc3qna%2FQo1Az%2BFCGmkDDUsZTnDK2uMmGrylU2lultLKdHFd6175sFWOBLDmvGS9v39jNtWv3Y7P9SA8Dsa8qEJRFXEY7VKqq5&X-Amz-Signature=560f87f7fe2e17f554800ce52b5e1bb06eec46e3a81322801c88dba1bfe4fa58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQAOHMAL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFyuqNyq8Kv0TsFfqQ2Qd6dDtKiPwrEWJqqP5dEaQKgiAiBLI%2BSasBO7iua1e0WEj%2B2eqQvxezkhOjYVf70GlMo%2Fcyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMUMZYwsMU0%2BgspYM%2FKtwD8CAj9wCGJdl81ezJBeLfb8%2FKA64OxaLM01U%2BXAS1j%2BVWBMLnIx5c0jTC9s%2FGliivGHo5c9Urmkfj%2BodVCk%2BIqy7Q9GUqtpZRS8KfWSb459TRkG84wPMYWuPmyzP%2Fzuzx7VAw9%2FT22MiAKG3FJeWb7ViOck4qHGprGtY%2B9xtgk8xQRAPAhJWiaHI1bhB1OItE4v%2BTPMsVbfcN7j03t7huuumTJ8X3RiCrjHdIY0hSoCRsz7gnIW0tr0aRZkW2ABhYwzG9q5LcuGsFv4hwM80kbYDlUq6WsBZsvBRuptC2bvYsw2Ulgekndjl45gwGrvlg17gLs7MLmjEvVJgGMVgbxYQs1LQ6UQZXXqgN7VtxYU5B9v03fujyKUZLiuNSDzXrmNRfJb0chjRrirGKHnFwyDwdsFBm%2BvGbOJZngJaLBm9%2Fpk30nAcby0t3NndzW47PjQ5JSpdfbzqgVxO13tZa4O4Ay1RnWOcQD%2BxFvpnqpdQDfc3FDKM2lJNbk1vJ3LvKA%2BCTcWCqB93VyDnjnmaKmMNTcBdiGQLjuQXwkVsJ3LgxJxzctm0waiAEFMrKkkEY52S1ZJPmAboUlIPeiXFoNsf7FPG6PKA2BotNH955qKY83GBEZWMWY5CS7%2B8wneKRxAY6pgFCKtcjzV5gT1p142rK%2FNk%2BtDYF5t6qbY7YSgPb3uy9B9AsQCBcTe0OVphdrDYHQVwg2y3L3Ugyqx7m83QLPWstNc9M1G0yJ%2BSu3J2ikH8LsE6UDKrlYTa3ajBsa52Wc3qna%2FQo1Az%2BFCGmkDDUsZTnDK2uMmGrylU2lultLKdHFd6175sFWOBLDmvGS9v39jNtWv3Y7P9SA8Dsa8qEJRFXEY7VKqq5&X-Amz-Signature=b5d66100e67ec9c346d8c32a2c501050db05d18ceb269067819396e93dd62a3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQAOHMAL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFyuqNyq8Kv0TsFfqQ2Qd6dDtKiPwrEWJqqP5dEaQKgiAiBLI%2BSasBO7iua1e0WEj%2B2eqQvxezkhOjYVf70GlMo%2Fcyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMUMZYwsMU0%2BgspYM%2FKtwD8CAj9wCGJdl81ezJBeLfb8%2FKA64OxaLM01U%2BXAS1j%2BVWBMLnIx5c0jTC9s%2FGliivGHo5c9Urmkfj%2BodVCk%2BIqy7Q9GUqtpZRS8KfWSb459TRkG84wPMYWuPmyzP%2Fzuzx7VAw9%2FT22MiAKG3FJeWb7ViOck4qHGprGtY%2B9xtgk8xQRAPAhJWiaHI1bhB1OItE4v%2BTPMsVbfcN7j03t7huuumTJ8X3RiCrjHdIY0hSoCRsz7gnIW0tr0aRZkW2ABhYwzG9q5LcuGsFv4hwM80kbYDlUq6WsBZsvBRuptC2bvYsw2Ulgekndjl45gwGrvlg17gLs7MLmjEvVJgGMVgbxYQs1LQ6UQZXXqgN7VtxYU5B9v03fujyKUZLiuNSDzXrmNRfJb0chjRrirGKHnFwyDwdsFBm%2BvGbOJZngJaLBm9%2Fpk30nAcby0t3NndzW47PjQ5JSpdfbzqgVxO13tZa4O4Ay1RnWOcQD%2BxFvpnqpdQDfc3FDKM2lJNbk1vJ3LvKA%2BCTcWCqB93VyDnjnmaKmMNTcBdiGQLjuQXwkVsJ3LgxJxzctm0waiAEFMrKkkEY52S1ZJPmAboUlIPeiXFoNsf7FPG6PKA2BotNH955qKY83GBEZWMWY5CS7%2B8wneKRxAY6pgFCKtcjzV5gT1p142rK%2FNk%2BtDYF5t6qbY7YSgPb3uy9B9AsQCBcTe0OVphdrDYHQVwg2y3L3Ugyqx7m83QLPWstNc9M1G0yJ%2BSu3J2ikH8LsE6UDKrlYTa3ajBsa52Wc3qna%2FQo1Az%2BFCGmkDDUsZTnDK2uMmGrylU2lultLKdHFd6175sFWOBLDmvGS9v39jNtWv3Y7P9SA8Dsa8qEJRFXEY7VKqq5&X-Amz-Signature=8a10e395b7905b3cccadac3a760c473e7435ad1d8fdb4618b97b57c456549ce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQAOHMAL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFyuqNyq8Kv0TsFfqQ2Qd6dDtKiPwrEWJqqP5dEaQKgiAiBLI%2BSasBO7iua1e0WEj%2B2eqQvxezkhOjYVf70GlMo%2Fcyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMUMZYwsMU0%2BgspYM%2FKtwD8CAj9wCGJdl81ezJBeLfb8%2FKA64OxaLM01U%2BXAS1j%2BVWBMLnIx5c0jTC9s%2FGliivGHo5c9Urmkfj%2BodVCk%2BIqy7Q9GUqtpZRS8KfWSb459TRkG84wPMYWuPmyzP%2Fzuzx7VAw9%2FT22MiAKG3FJeWb7ViOck4qHGprGtY%2B9xtgk8xQRAPAhJWiaHI1bhB1OItE4v%2BTPMsVbfcN7j03t7huuumTJ8X3RiCrjHdIY0hSoCRsz7gnIW0tr0aRZkW2ABhYwzG9q5LcuGsFv4hwM80kbYDlUq6WsBZsvBRuptC2bvYsw2Ulgekndjl45gwGrvlg17gLs7MLmjEvVJgGMVgbxYQs1LQ6UQZXXqgN7VtxYU5B9v03fujyKUZLiuNSDzXrmNRfJb0chjRrirGKHnFwyDwdsFBm%2BvGbOJZngJaLBm9%2Fpk30nAcby0t3NndzW47PjQ5JSpdfbzqgVxO13tZa4O4Ay1RnWOcQD%2BxFvpnqpdQDfc3FDKM2lJNbk1vJ3LvKA%2BCTcWCqB93VyDnjnmaKmMNTcBdiGQLjuQXwkVsJ3LgxJxzctm0waiAEFMrKkkEY52S1ZJPmAboUlIPeiXFoNsf7FPG6PKA2BotNH955qKY83GBEZWMWY5CS7%2B8wneKRxAY6pgFCKtcjzV5gT1p142rK%2FNk%2BtDYF5t6qbY7YSgPb3uy9B9AsQCBcTe0OVphdrDYHQVwg2y3L3Ugyqx7m83QLPWstNc9M1G0yJ%2BSu3J2ikH8LsE6UDKrlYTa3ajBsa52Wc3qna%2FQo1Az%2BFCGmkDDUsZTnDK2uMmGrylU2lultLKdHFd6175sFWOBLDmvGS9v39jNtWv3Y7P9SA8Dsa8qEJRFXEY7VKqq5&X-Amz-Signature=6c3f1fb5db68980068373ad8e6cde2607abb29b6feda33b29280bf2433d83524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQAOHMAL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFyuqNyq8Kv0TsFfqQ2Qd6dDtKiPwrEWJqqP5dEaQKgiAiBLI%2BSasBO7iua1e0WEj%2B2eqQvxezkhOjYVf70GlMo%2Fcyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMUMZYwsMU0%2BgspYM%2FKtwD8CAj9wCGJdl81ezJBeLfb8%2FKA64OxaLM01U%2BXAS1j%2BVWBMLnIx5c0jTC9s%2FGliivGHo5c9Urmkfj%2BodVCk%2BIqy7Q9GUqtpZRS8KfWSb459TRkG84wPMYWuPmyzP%2Fzuzx7VAw9%2FT22MiAKG3FJeWb7ViOck4qHGprGtY%2B9xtgk8xQRAPAhJWiaHI1bhB1OItE4v%2BTPMsVbfcN7j03t7huuumTJ8X3RiCrjHdIY0hSoCRsz7gnIW0tr0aRZkW2ABhYwzG9q5LcuGsFv4hwM80kbYDlUq6WsBZsvBRuptC2bvYsw2Ulgekndjl45gwGrvlg17gLs7MLmjEvVJgGMVgbxYQs1LQ6UQZXXqgN7VtxYU5B9v03fujyKUZLiuNSDzXrmNRfJb0chjRrirGKHnFwyDwdsFBm%2BvGbOJZngJaLBm9%2Fpk30nAcby0t3NndzW47PjQ5JSpdfbzqgVxO13tZa4O4Ay1RnWOcQD%2BxFvpnqpdQDfc3FDKM2lJNbk1vJ3LvKA%2BCTcWCqB93VyDnjnmaKmMNTcBdiGQLjuQXwkVsJ3LgxJxzctm0waiAEFMrKkkEY52S1ZJPmAboUlIPeiXFoNsf7FPG6PKA2BotNH955qKY83GBEZWMWY5CS7%2B8wneKRxAY6pgFCKtcjzV5gT1p142rK%2FNk%2BtDYF5t6qbY7YSgPb3uy9B9AsQCBcTe0OVphdrDYHQVwg2y3L3Ugyqx7m83QLPWstNc9M1G0yJ%2BSu3J2ikH8LsE6UDKrlYTa3ajBsa52Wc3qna%2FQo1Az%2BFCGmkDDUsZTnDK2uMmGrylU2lultLKdHFd6175sFWOBLDmvGS9v39jNtWv3Y7P9SA8Dsa8qEJRFXEY7VKqq5&X-Amz-Signature=8cfd6e951cc86982e379cd0a98b0390e04f8d1c17a07933f0323db2130dbf27b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

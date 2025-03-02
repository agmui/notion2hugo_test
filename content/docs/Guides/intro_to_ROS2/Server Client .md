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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W4H2QES%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCv9vgSv8k3futcWYPmjYjI1PhhbncLXcj5%2Fmx2i%2FpfBwIgJ2TAjWgM29SmABtpxuWf%2B9ZFjwlSUFpi7ZcVUpCF7Y8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwJhiT40eAxDn3M2ircA1nDpz1jHn1gxNHQN1iGgIeYTkGqKHX76gb91reqe2E0adra5HCbCbqsDNOZ2pJd%2F9s7%2F9jQGUuRJIJ0fAH88aJIkkR8dD0TTDc6djEc5bPkn25bqvg0R%2F9j7ZMboO9M3EtvIdlgmrdncrezDtNoW8KDzHEVXu7doRwNFJHtAwJofbpJ%2BSGtkSbBhXxlwmlK21kBwQNpBQdCCL0WTnwjBAnZQw3J87k%2FekwkfMd%2FYNtERT51tIZ6rsO1hkdelSyqerMD%2FMdeZUE2Bw38%2FFSLvM%2BU0yEBwd6yxjnNXxbO83EqVtWsuDm3yW7%2FDlKZeDmnQKxg6e%2FWA1FxLZjx3hRHSPYz9iyyERnDxwXkqX61ewkDgmfYzt2LzOdqKUxOPmnz0dfbbG5jnCMYk%2FFBgKRgLRGNHvO7tNZVho6ZPFfe8D2wpqXV8rVXg9lmO6PfkaOcf6bKdCICLmUCuGiPI6nEtqWBYC5y6%2B83ISLohoo6BLO5n9KWT%2B%2BL%2FcuEnaInLZelBE5aYgsmHo3m1x%2FiCKRi2tw0mR4hFCvYLGEMAVsg2261hUlLqMKdHFdjEQ2rZJbZRdhqQHrvIt1rL6Dl5RBEph4rN8J1WDkmWN2dwH1YyvQV2xA33W3o6Tg7Dz7NMKz2jr4GOqUBhVf5eadZ9rz0JnGpnucwV8JYsc5ZiFktoVEAkgbexZq%2FzbcOoXzIJX0BxvOIMy2Q74i%2BI4Q4E5VpE4Ez8DRoHmis%2BpfSz4793ZQIominy0LyW0mp6Gop%2BQvzMN3zbdI%2FtQ8TW7qSCnsPMOfOhD637WvR%2FOs1my9klCzBPErJHIM4B2CPZ7NZRCs71%2FO%2FcYApoU5xpiI2fNzw0ZFX%2B8LLXBGQY13l&X-Amz-Signature=def1a46d470d94b9a506b13dbfb685f80205452358ead44c36d9974d5aee640d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W4H2QES%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCv9vgSv8k3futcWYPmjYjI1PhhbncLXcj5%2Fmx2i%2FpfBwIgJ2TAjWgM29SmABtpxuWf%2B9ZFjwlSUFpi7ZcVUpCF7Y8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwJhiT40eAxDn3M2ircA1nDpz1jHn1gxNHQN1iGgIeYTkGqKHX76gb91reqe2E0adra5HCbCbqsDNOZ2pJd%2F9s7%2F9jQGUuRJIJ0fAH88aJIkkR8dD0TTDc6djEc5bPkn25bqvg0R%2F9j7ZMboO9M3EtvIdlgmrdncrezDtNoW8KDzHEVXu7doRwNFJHtAwJofbpJ%2BSGtkSbBhXxlwmlK21kBwQNpBQdCCL0WTnwjBAnZQw3J87k%2FekwkfMd%2FYNtERT51tIZ6rsO1hkdelSyqerMD%2FMdeZUE2Bw38%2FFSLvM%2BU0yEBwd6yxjnNXxbO83EqVtWsuDm3yW7%2FDlKZeDmnQKxg6e%2FWA1FxLZjx3hRHSPYz9iyyERnDxwXkqX61ewkDgmfYzt2LzOdqKUxOPmnz0dfbbG5jnCMYk%2FFBgKRgLRGNHvO7tNZVho6ZPFfe8D2wpqXV8rVXg9lmO6PfkaOcf6bKdCICLmUCuGiPI6nEtqWBYC5y6%2B83ISLohoo6BLO5n9KWT%2B%2BL%2FcuEnaInLZelBE5aYgsmHo3m1x%2FiCKRi2tw0mR4hFCvYLGEMAVsg2261hUlLqMKdHFdjEQ2rZJbZRdhqQHrvIt1rL6Dl5RBEph4rN8J1WDkmWN2dwH1YyvQV2xA33W3o6Tg7Dz7NMKz2jr4GOqUBhVf5eadZ9rz0JnGpnucwV8JYsc5ZiFktoVEAkgbexZq%2FzbcOoXzIJX0BxvOIMy2Q74i%2BI4Q4E5VpE4Ez8DRoHmis%2BpfSz4793ZQIominy0LyW0mp6Gop%2BQvzMN3zbdI%2FtQ8TW7qSCnsPMOfOhD637WvR%2FOs1my9klCzBPErJHIM4B2CPZ7NZRCs71%2FO%2FcYApoU5xpiI2fNzw0ZFX%2B8LLXBGQY13l&X-Amz-Signature=7ff7124aab618fa50aa03d31980f7a167b96ba018115b020fb5148ae8be01959&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W4H2QES%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCv9vgSv8k3futcWYPmjYjI1PhhbncLXcj5%2Fmx2i%2FpfBwIgJ2TAjWgM29SmABtpxuWf%2B9ZFjwlSUFpi7ZcVUpCF7Y8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwJhiT40eAxDn3M2ircA1nDpz1jHn1gxNHQN1iGgIeYTkGqKHX76gb91reqe2E0adra5HCbCbqsDNOZ2pJd%2F9s7%2F9jQGUuRJIJ0fAH88aJIkkR8dD0TTDc6djEc5bPkn25bqvg0R%2F9j7ZMboO9M3EtvIdlgmrdncrezDtNoW8KDzHEVXu7doRwNFJHtAwJofbpJ%2BSGtkSbBhXxlwmlK21kBwQNpBQdCCL0WTnwjBAnZQw3J87k%2FekwkfMd%2FYNtERT51tIZ6rsO1hkdelSyqerMD%2FMdeZUE2Bw38%2FFSLvM%2BU0yEBwd6yxjnNXxbO83EqVtWsuDm3yW7%2FDlKZeDmnQKxg6e%2FWA1FxLZjx3hRHSPYz9iyyERnDxwXkqX61ewkDgmfYzt2LzOdqKUxOPmnz0dfbbG5jnCMYk%2FFBgKRgLRGNHvO7tNZVho6ZPFfe8D2wpqXV8rVXg9lmO6PfkaOcf6bKdCICLmUCuGiPI6nEtqWBYC5y6%2B83ISLohoo6BLO5n9KWT%2B%2BL%2FcuEnaInLZelBE5aYgsmHo3m1x%2FiCKRi2tw0mR4hFCvYLGEMAVsg2261hUlLqMKdHFdjEQ2rZJbZRdhqQHrvIt1rL6Dl5RBEph4rN8J1WDkmWN2dwH1YyvQV2xA33W3o6Tg7Dz7NMKz2jr4GOqUBhVf5eadZ9rz0JnGpnucwV8JYsc5ZiFktoVEAkgbexZq%2FzbcOoXzIJX0BxvOIMy2Q74i%2BI4Q4E5VpE4Ez8DRoHmis%2BpfSz4793ZQIominy0LyW0mp6Gop%2BQvzMN3zbdI%2FtQ8TW7qSCnsPMOfOhD637WvR%2FOs1my9klCzBPErJHIM4B2CPZ7NZRCs71%2FO%2FcYApoU5xpiI2fNzw0ZFX%2B8LLXBGQY13l&X-Amz-Signature=4ed2bcc3684611246b4c827b9536ad2ecb3cb3a98b87f2f3adcb9aa17f76bff2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W4H2QES%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCv9vgSv8k3futcWYPmjYjI1PhhbncLXcj5%2Fmx2i%2FpfBwIgJ2TAjWgM29SmABtpxuWf%2B9ZFjwlSUFpi7ZcVUpCF7Y8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwJhiT40eAxDn3M2ircA1nDpz1jHn1gxNHQN1iGgIeYTkGqKHX76gb91reqe2E0adra5HCbCbqsDNOZ2pJd%2F9s7%2F9jQGUuRJIJ0fAH88aJIkkR8dD0TTDc6djEc5bPkn25bqvg0R%2F9j7ZMboO9M3EtvIdlgmrdncrezDtNoW8KDzHEVXu7doRwNFJHtAwJofbpJ%2BSGtkSbBhXxlwmlK21kBwQNpBQdCCL0WTnwjBAnZQw3J87k%2FekwkfMd%2FYNtERT51tIZ6rsO1hkdelSyqerMD%2FMdeZUE2Bw38%2FFSLvM%2BU0yEBwd6yxjnNXxbO83EqVtWsuDm3yW7%2FDlKZeDmnQKxg6e%2FWA1FxLZjx3hRHSPYz9iyyERnDxwXkqX61ewkDgmfYzt2LzOdqKUxOPmnz0dfbbG5jnCMYk%2FFBgKRgLRGNHvO7tNZVho6ZPFfe8D2wpqXV8rVXg9lmO6PfkaOcf6bKdCICLmUCuGiPI6nEtqWBYC5y6%2B83ISLohoo6BLO5n9KWT%2B%2BL%2FcuEnaInLZelBE5aYgsmHo3m1x%2FiCKRi2tw0mR4hFCvYLGEMAVsg2261hUlLqMKdHFdjEQ2rZJbZRdhqQHrvIt1rL6Dl5RBEph4rN8J1WDkmWN2dwH1YyvQV2xA33W3o6Tg7Dz7NMKz2jr4GOqUBhVf5eadZ9rz0JnGpnucwV8JYsc5ZiFktoVEAkgbexZq%2FzbcOoXzIJX0BxvOIMy2Q74i%2BI4Q4E5VpE4Ez8DRoHmis%2BpfSz4793ZQIominy0LyW0mp6Gop%2BQvzMN3zbdI%2FtQ8TW7qSCnsPMOfOhD637WvR%2FOs1my9klCzBPErJHIM4B2CPZ7NZRCs71%2FO%2FcYApoU5xpiI2fNzw0ZFX%2B8LLXBGQY13l&X-Amz-Signature=3bf32a443b0c5900966d554c9ac6f5c1939914c6214a13a7b08d76cf33b90f17&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W4H2QES%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCv9vgSv8k3futcWYPmjYjI1PhhbncLXcj5%2Fmx2i%2FpfBwIgJ2TAjWgM29SmABtpxuWf%2B9ZFjwlSUFpi7ZcVUpCF7Y8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwJhiT40eAxDn3M2ircA1nDpz1jHn1gxNHQN1iGgIeYTkGqKHX76gb91reqe2E0adra5HCbCbqsDNOZ2pJd%2F9s7%2F9jQGUuRJIJ0fAH88aJIkkR8dD0TTDc6djEc5bPkn25bqvg0R%2F9j7ZMboO9M3EtvIdlgmrdncrezDtNoW8KDzHEVXu7doRwNFJHtAwJofbpJ%2BSGtkSbBhXxlwmlK21kBwQNpBQdCCL0WTnwjBAnZQw3J87k%2FekwkfMd%2FYNtERT51tIZ6rsO1hkdelSyqerMD%2FMdeZUE2Bw38%2FFSLvM%2BU0yEBwd6yxjnNXxbO83EqVtWsuDm3yW7%2FDlKZeDmnQKxg6e%2FWA1FxLZjx3hRHSPYz9iyyERnDxwXkqX61ewkDgmfYzt2LzOdqKUxOPmnz0dfbbG5jnCMYk%2FFBgKRgLRGNHvO7tNZVho6ZPFfe8D2wpqXV8rVXg9lmO6PfkaOcf6bKdCICLmUCuGiPI6nEtqWBYC5y6%2B83ISLohoo6BLO5n9KWT%2B%2BL%2FcuEnaInLZelBE5aYgsmHo3m1x%2FiCKRi2tw0mR4hFCvYLGEMAVsg2261hUlLqMKdHFdjEQ2rZJbZRdhqQHrvIt1rL6Dl5RBEph4rN8J1WDkmWN2dwH1YyvQV2xA33W3o6Tg7Dz7NMKz2jr4GOqUBhVf5eadZ9rz0JnGpnucwV8JYsc5ZiFktoVEAkgbexZq%2FzbcOoXzIJX0BxvOIMy2Q74i%2BI4Q4E5VpE4Ez8DRoHmis%2BpfSz4793ZQIominy0LyW0mp6Gop%2BQvzMN3zbdI%2FtQ8TW7qSCnsPMOfOhD637WvR%2FOs1my9klCzBPErJHIM4B2CPZ7NZRCs71%2FO%2FcYApoU5xpiI2fNzw0ZFX%2B8LLXBGQY13l&X-Amz-Signature=d2d5b74c1b9bd5c8bb44c045c38a3fbb2cff8cf150ef1678f9fd95ed30e605ed&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

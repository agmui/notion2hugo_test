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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3PWSXQE%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAgAYZmf1AzeU9yaQevto8Oq9uHmOmuqYutH2VIDLgAAiEA0qCk%2FR5TePiR4XRAOcSnvKfSynF4AmVkQyPfn2muB1Uq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDLn7qH2pHeKYgvWOqircA3w2FASl7wEltyyqcwq0xPCqmxDMeUO1b1%2FF8vvda5AYqrpW9qXyAz9s3t5LirZ%2Fc%2FJ6T%2B5dpnd4YxR8oRzGGBoixYPA%2BX2nYa%2FaMpqIARMMPXYEI8JxPiWpf5CITrMo8y9brZNLO383xAzlkfNUhNl02EV%2FfTy2k7zcKFOwd9XMHZKBaUxbqG2FbCl9S6UPS%2FkzISauCsoxipV%2BBgINqa%2B83LinGB6IoegvQ7aROfU9uv%2BLmghVJNX4zhcGJjxK6tHCqvhX1Vb4XxceODl8dzbeCpi45QGJrogpkEhlYEOPIX49bz%2BE3Wi2mV%2FRYchbqO7xN9N7OyadKcKiJU3jvzQWUKhJO7qG7iUr4xreXVXN%2BT8sG7ncvRHzCjsEpnQS6tg1r4mkZ09CR0APuTKl6tjQ96PFoErp7oK%2FquVU6ZnwuT%2Fy9EmK87jdXfoBYE%2BcV%2BEsGeIJWJtEmP7PykVVUP73KqwTMhcuHO0E17d8kTwS1Iud5pn2KziRzGeZ9l9AXv7a7yW0gRBQT19xRjvTd8QnYVa37cmwVCTy3PJFJzDmDZbccttMaDvIPsSnjKCIlvvMbyZ%2FhJtAUUK14syfraVBg69%2FT1aKfuvsjCV7uPns9XU%2B71S5REe0xP6sMJGr0sEGOqUBgMyIsGsvnZ9BKf7jSBq0KEqeXNMqM5hOXNLmGkTF9wdE%2F27dFW3Nv%2B2FJvCK3hhB%2Fe8rX3kLF7mPtxVKKfWvDVGUiAkFg2JRCB7ZEz3KBs34NhUsd7kwKnMavkSM0iIAAMK%2FzaW4HlQfW%2F%2BdmfeJcLY4mKF9c4MXuQU3xjE%2BSdAkldCS84uG8qaF7aKXY4eLnRimdjdEe0MfdMQsgyKK4XuNVxoa&X-Amz-Signature=45c9aa17d12c39b4ab7d81de87601469f086715b92f53aa68ced0e46d9a37e2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3PWSXQE%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAgAYZmf1AzeU9yaQevto8Oq9uHmOmuqYutH2VIDLgAAiEA0qCk%2FR5TePiR4XRAOcSnvKfSynF4AmVkQyPfn2muB1Uq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDLn7qH2pHeKYgvWOqircA3w2FASl7wEltyyqcwq0xPCqmxDMeUO1b1%2FF8vvda5AYqrpW9qXyAz9s3t5LirZ%2Fc%2FJ6T%2B5dpnd4YxR8oRzGGBoixYPA%2BX2nYa%2FaMpqIARMMPXYEI8JxPiWpf5CITrMo8y9brZNLO383xAzlkfNUhNl02EV%2FfTy2k7zcKFOwd9XMHZKBaUxbqG2FbCl9S6UPS%2FkzISauCsoxipV%2BBgINqa%2B83LinGB6IoegvQ7aROfU9uv%2BLmghVJNX4zhcGJjxK6tHCqvhX1Vb4XxceODl8dzbeCpi45QGJrogpkEhlYEOPIX49bz%2BE3Wi2mV%2FRYchbqO7xN9N7OyadKcKiJU3jvzQWUKhJO7qG7iUr4xreXVXN%2BT8sG7ncvRHzCjsEpnQS6tg1r4mkZ09CR0APuTKl6tjQ96PFoErp7oK%2FquVU6ZnwuT%2Fy9EmK87jdXfoBYE%2BcV%2BEsGeIJWJtEmP7PykVVUP73KqwTMhcuHO0E17d8kTwS1Iud5pn2KziRzGeZ9l9AXv7a7yW0gRBQT19xRjvTd8QnYVa37cmwVCTy3PJFJzDmDZbccttMaDvIPsSnjKCIlvvMbyZ%2FhJtAUUK14syfraVBg69%2FT1aKfuvsjCV7uPns9XU%2B71S5REe0xP6sMJGr0sEGOqUBgMyIsGsvnZ9BKf7jSBq0KEqeXNMqM5hOXNLmGkTF9wdE%2F27dFW3Nv%2B2FJvCK3hhB%2Fe8rX3kLF7mPtxVKKfWvDVGUiAkFg2JRCB7ZEz3KBs34NhUsd7kwKnMavkSM0iIAAMK%2FzaW4HlQfW%2F%2BdmfeJcLY4mKF9c4MXuQU3xjE%2BSdAkldCS84uG8qaF7aKXY4eLnRimdjdEe0MfdMQsgyKK4XuNVxoa&X-Amz-Signature=1bfdba7c2c481bb10eadc1f20b561cc7225cd763c9c9df9afa6152ce430ba7cd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3PWSXQE%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAgAYZmf1AzeU9yaQevto8Oq9uHmOmuqYutH2VIDLgAAiEA0qCk%2FR5TePiR4XRAOcSnvKfSynF4AmVkQyPfn2muB1Uq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDLn7qH2pHeKYgvWOqircA3w2FASl7wEltyyqcwq0xPCqmxDMeUO1b1%2FF8vvda5AYqrpW9qXyAz9s3t5LirZ%2Fc%2FJ6T%2B5dpnd4YxR8oRzGGBoixYPA%2BX2nYa%2FaMpqIARMMPXYEI8JxPiWpf5CITrMo8y9brZNLO383xAzlkfNUhNl02EV%2FfTy2k7zcKFOwd9XMHZKBaUxbqG2FbCl9S6UPS%2FkzISauCsoxipV%2BBgINqa%2B83LinGB6IoegvQ7aROfU9uv%2BLmghVJNX4zhcGJjxK6tHCqvhX1Vb4XxceODl8dzbeCpi45QGJrogpkEhlYEOPIX49bz%2BE3Wi2mV%2FRYchbqO7xN9N7OyadKcKiJU3jvzQWUKhJO7qG7iUr4xreXVXN%2BT8sG7ncvRHzCjsEpnQS6tg1r4mkZ09CR0APuTKl6tjQ96PFoErp7oK%2FquVU6ZnwuT%2Fy9EmK87jdXfoBYE%2BcV%2BEsGeIJWJtEmP7PykVVUP73KqwTMhcuHO0E17d8kTwS1Iud5pn2KziRzGeZ9l9AXv7a7yW0gRBQT19xRjvTd8QnYVa37cmwVCTy3PJFJzDmDZbccttMaDvIPsSnjKCIlvvMbyZ%2FhJtAUUK14syfraVBg69%2FT1aKfuvsjCV7uPns9XU%2B71S5REe0xP6sMJGr0sEGOqUBgMyIsGsvnZ9BKf7jSBq0KEqeXNMqM5hOXNLmGkTF9wdE%2F27dFW3Nv%2B2FJvCK3hhB%2Fe8rX3kLF7mPtxVKKfWvDVGUiAkFg2JRCB7ZEz3KBs34NhUsd7kwKnMavkSM0iIAAMK%2FzaW4HlQfW%2F%2BdmfeJcLY4mKF9c4MXuQU3xjE%2BSdAkldCS84uG8qaF7aKXY4eLnRimdjdEe0MfdMQsgyKK4XuNVxoa&X-Amz-Signature=a387086149a8d16dc5c92df3bbfa80687f25a8e3bd5e102e28a4966a08fd87ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3PWSXQE%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAgAYZmf1AzeU9yaQevto8Oq9uHmOmuqYutH2VIDLgAAiEA0qCk%2FR5TePiR4XRAOcSnvKfSynF4AmVkQyPfn2muB1Uq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDLn7qH2pHeKYgvWOqircA3w2FASl7wEltyyqcwq0xPCqmxDMeUO1b1%2FF8vvda5AYqrpW9qXyAz9s3t5LirZ%2Fc%2FJ6T%2B5dpnd4YxR8oRzGGBoixYPA%2BX2nYa%2FaMpqIARMMPXYEI8JxPiWpf5CITrMo8y9brZNLO383xAzlkfNUhNl02EV%2FfTy2k7zcKFOwd9XMHZKBaUxbqG2FbCl9S6UPS%2FkzISauCsoxipV%2BBgINqa%2B83LinGB6IoegvQ7aROfU9uv%2BLmghVJNX4zhcGJjxK6tHCqvhX1Vb4XxceODl8dzbeCpi45QGJrogpkEhlYEOPIX49bz%2BE3Wi2mV%2FRYchbqO7xN9N7OyadKcKiJU3jvzQWUKhJO7qG7iUr4xreXVXN%2BT8sG7ncvRHzCjsEpnQS6tg1r4mkZ09CR0APuTKl6tjQ96PFoErp7oK%2FquVU6ZnwuT%2Fy9EmK87jdXfoBYE%2BcV%2BEsGeIJWJtEmP7PykVVUP73KqwTMhcuHO0E17d8kTwS1Iud5pn2KziRzGeZ9l9AXv7a7yW0gRBQT19xRjvTd8QnYVa37cmwVCTy3PJFJzDmDZbccttMaDvIPsSnjKCIlvvMbyZ%2FhJtAUUK14syfraVBg69%2FT1aKfuvsjCV7uPns9XU%2B71S5REe0xP6sMJGr0sEGOqUBgMyIsGsvnZ9BKf7jSBq0KEqeXNMqM5hOXNLmGkTF9wdE%2F27dFW3Nv%2B2FJvCK3hhB%2Fe8rX3kLF7mPtxVKKfWvDVGUiAkFg2JRCB7ZEz3KBs34NhUsd7kwKnMavkSM0iIAAMK%2FzaW4HlQfW%2F%2BdmfeJcLY4mKF9c4MXuQU3xjE%2BSdAkldCS84uG8qaF7aKXY4eLnRimdjdEe0MfdMQsgyKK4XuNVxoa&X-Amz-Signature=500c671414d071ec1100637ebe889148e2c6796f51b430754f8f442685fc1f2b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3PWSXQE%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAgAYZmf1AzeU9yaQevto8Oq9uHmOmuqYutH2VIDLgAAiEA0qCk%2FR5TePiR4XRAOcSnvKfSynF4AmVkQyPfn2muB1Uq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDLn7qH2pHeKYgvWOqircA3w2FASl7wEltyyqcwq0xPCqmxDMeUO1b1%2FF8vvda5AYqrpW9qXyAz9s3t5LirZ%2Fc%2FJ6T%2B5dpnd4YxR8oRzGGBoixYPA%2BX2nYa%2FaMpqIARMMPXYEI8JxPiWpf5CITrMo8y9brZNLO383xAzlkfNUhNl02EV%2FfTy2k7zcKFOwd9XMHZKBaUxbqG2FbCl9S6UPS%2FkzISauCsoxipV%2BBgINqa%2B83LinGB6IoegvQ7aROfU9uv%2BLmghVJNX4zhcGJjxK6tHCqvhX1Vb4XxceODl8dzbeCpi45QGJrogpkEhlYEOPIX49bz%2BE3Wi2mV%2FRYchbqO7xN9N7OyadKcKiJU3jvzQWUKhJO7qG7iUr4xreXVXN%2BT8sG7ncvRHzCjsEpnQS6tg1r4mkZ09CR0APuTKl6tjQ96PFoErp7oK%2FquVU6ZnwuT%2Fy9EmK87jdXfoBYE%2BcV%2BEsGeIJWJtEmP7PykVVUP73KqwTMhcuHO0E17d8kTwS1Iud5pn2KziRzGeZ9l9AXv7a7yW0gRBQT19xRjvTd8QnYVa37cmwVCTy3PJFJzDmDZbccttMaDvIPsSnjKCIlvvMbyZ%2FhJtAUUK14syfraVBg69%2FT1aKfuvsjCV7uPns9XU%2B71S5REe0xP6sMJGr0sEGOqUBgMyIsGsvnZ9BKf7jSBq0KEqeXNMqM5hOXNLmGkTF9wdE%2F27dFW3Nv%2B2FJvCK3hhB%2Fe8rX3kLF7mPtxVKKfWvDVGUiAkFg2JRCB7ZEz3KBs34NhUsd7kwKnMavkSM0iIAAMK%2FzaW4HlQfW%2F%2BdmfeJcLY4mKF9c4MXuQU3xjE%2BSdAkldCS84uG8qaF7aKXY4eLnRimdjdEe0MfdMQsgyKK4XuNVxoa&X-Amz-Signature=f443f511aedc79df18937468d5c3cdd3a084e647746390dd8a6c50f98337c819&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDRIZ5L%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDfjNUHz3s%2F8vjrjh%2Foj5ftie5cvUIkkmiVHevqQuTj4wIgFtOhbQceudLAWTx9PE7NhwqaMcSKl79neq%2BzmOQLaAQqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0Vd2TMR85zjg5MGCrcA4F%2FtSSq92ni7jwXigtlSzlc1TwA%2Bw4i%2FWT0YuNDP0AYHkd8u%2BuuNsuzuj0vxfBEBXVV2ZUb2Sm7vB6xUdlOXy2kNBPjAgPsDevJulOr%2F%2Fn8lpb0OBM%2BWqO4FuN3N%2Bm%2FuSEtOlmITQ%2BdvX30lYFyZO7jEglVkv6uyhuaVs2UmldjBTafzFn9MKRonxJfPHo0%2BX5pGwM2EpRODjBzzK9oW%2BL3UThgwh%2BR%2F4YILqVIZw4Ra8BgmNO874XxLNYPSO8ZfPs1JqEKzvip4J2Te8DyKXDsWgD3vwPK%2F5fr82OhMGXy8dzSC%2BGUPm8odkIAqCatA9mVq6Ex4FIQyERH%2FFT6JWaplf%2F6Kv2dmtnS6AfRmLNbN8AXtvHZUU7Wwk5%2FpRIvXvhtTihOD770XmeLh20MAL4gI0RH9LYd6WEfDgwiit0QN22Q%2FrfpUN2i8QKcyV5SHQvjdS1RbFZCiNLeuyxT0BKZWt9UE5BVyvgyKhcCENjza3L0yPm%2FPqwCcLhgpNVDMcNWzovou0g3F3ovFhNuy5iPp3BcOtGPcL11iZyKYL1NGh7So1%2FNzV1j70tg4AjxY7dRlTFx5krJFvvtWfiMo%2FNc9ApQk82oUcxoOlFyFeWnh%2BqPOp0WKMHAmRJAMKnF%2BcEGOqUBJB01f25TGdCKrbgbEIlhDOqOCHrNZUQiscEzeN5M%2B4JUVN4a5lplXWNzQN7q7uvFQE1WWzpzOfOGW%2FqWGqyLsQpzFEW%2B%2Fh0ZE04i4Bp%2BZE%2FtXlqZHbDFxNyFq6NAMnZf%2BnIZI8j1yJeyUrMo06K6WQhgEy0OIgbLA71h4gh0dAjRn%2BxGnzvKRJRAwcAgRna14ZfQW8aUTnZNg1xu4gxAVInoMh3n&X-Amz-Signature=abd1221e6037d7f9939bd60150e80b86d675d85774d0e08c98985cc010a87b8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDRIZ5L%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDfjNUHz3s%2F8vjrjh%2Foj5ftie5cvUIkkmiVHevqQuTj4wIgFtOhbQceudLAWTx9PE7NhwqaMcSKl79neq%2BzmOQLaAQqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0Vd2TMR85zjg5MGCrcA4F%2FtSSq92ni7jwXigtlSzlc1TwA%2Bw4i%2FWT0YuNDP0AYHkd8u%2BuuNsuzuj0vxfBEBXVV2ZUb2Sm7vB6xUdlOXy2kNBPjAgPsDevJulOr%2F%2Fn8lpb0OBM%2BWqO4FuN3N%2Bm%2FuSEtOlmITQ%2BdvX30lYFyZO7jEglVkv6uyhuaVs2UmldjBTafzFn9MKRonxJfPHo0%2BX5pGwM2EpRODjBzzK9oW%2BL3UThgwh%2BR%2F4YILqVIZw4Ra8BgmNO874XxLNYPSO8ZfPs1JqEKzvip4J2Te8DyKXDsWgD3vwPK%2F5fr82OhMGXy8dzSC%2BGUPm8odkIAqCatA9mVq6Ex4FIQyERH%2FFT6JWaplf%2F6Kv2dmtnS6AfRmLNbN8AXtvHZUU7Wwk5%2FpRIvXvhtTihOD770XmeLh20MAL4gI0RH9LYd6WEfDgwiit0QN22Q%2FrfpUN2i8QKcyV5SHQvjdS1RbFZCiNLeuyxT0BKZWt9UE5BVyvgyKhcCENjza3L0yPm%2FPqwCcLhgpNVDMcNWzovou0g3F3ovFhNuy5iPp3BcOtGPcL11iZyKYL1NGh7So1%2FNzV1j70tg4AjxY7dRlTFx5krJFvvtWfiMo%2FNc9ApQk82oUcxoOlFyFeWnh%2BqPOp0WKMHAmRJAMKnF%2BcEGOqUBJB01f25TGdCKrbgbEIlhDOqOCHrNZUQiscEzeN5M%2B4JUVN4a5lplXWNzQN7q7uvFQE1WWzpzOfOGW%2FqWGqyLsQpzFEW%2B%2Fh0ZE04i4Bp%2BZE%2FtXlqZHbDFxNyFq6NAMnZf%2BnIZI8j1yJeyUrMo06K6WQhgEy0OIgbLA71h4gh0dAjRn%2BxGnzvKRJRAwcAgRna14ZfQW8aUTnZNg1xu4gxAVInoMh3n&X-Amz-Signature=18cb04415f43d4ebe26fc50b8daa2db29993cdbd4463d118a9b16b9b50de7416&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDRIZ5L%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDfjNUHz3s%2F8vjrjh%2Foj5ftie5cvUIkkmiVHevqQuTj4wIgFtOhbQceudLAWTx9PE7NhwqaMcSKl79neq%2BzmOQLaAQqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0Vd2TMR85zjg5MGCrcA4F%2FtSSq92ni7jwXigtlSzlc1TwA%2Bw4i%2FWT0YuNDP0AYHkd8u%2BuuNsuzuj0vxfBEBXVV2ZUb2Sm7vB6xUdlOXy2kNBPjAgPsDevJulOr%2F%2Fn8lpb0OBM%2BWqO4FuN3N%2Bm%2FuSEtOlmITQ%2BdvX30lYFyZO7jEglVkv6uyhuaVs2UmldjBTafzFn9MKRonxJfPHo0%2BX5pGwM2EpRODjBzzK9oW%2BL3UThgwh%2BR%2F4YILqVIZw4Ra8BgmNO874XxLNYPSO8ZfPs1JqEKzvip4J2Te8DyKXDsWgD3vwPK%2F5fr82OhMGXy8dzSC%2BGUPm8odkIAqCatA9mVq6Ex4FIQyERH%2FFT6JWaplf%2F6Kv2dmtnS6AfRmLNbN8AXtvHZUU7Wwk5%2FpRIvXvhtTihOD770XmeLh20MAL4gI0RH9LYd6WEfDgwiit0QN22Q%2FrfpUN2i8QKcyV5SHQvjdS1RbFZCiNLeuyxT0BKZWt9UE5BVyvgyKhcCENjza3L0yPm%2FPqwCcLhgpNVDMcNWzovou0g3F3ovFhNuy5iPp3BcOtGPcL11iZyKYL1NGh7So1%2FNzV1j70tg4AjxY7dRlTFx5krJFvvtWfiMo%2FNc9ApQk82oUcxoOlFyFeWnh%2BqPOp0WKMHAmRJAMKnF%2BcEGOqUBJB01f25TGdCKrbgbEIlhDOqOCHrNZUQiscEzeN5M%2B4JUVN4a5lplXWNzQN7q7uvFQE1WWzpzOfOGW%2FqWGqyLsQpzFEW%2B%2Fh0ZE04i4Bp%2BZE%2FtXlqZHbDFxNyFq6NAMnZf%2BnIZI8j1yJeyUrMo06K6WQhgEy0OIgbLA71h4gh0dAjRn%2BxGnzvKRJRAwcAgRna14ZfQW8aUTnZNg1xu4gxAVInoMh3n&X-Amz-Signature=a579a5b9a4a7b4c4debc13ea3dd1df29896cc4e6eca23f17afdbc0e6c9cba48f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDRIZ5L%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDfjNUHz3s%2F8vjrjh%2Foj5ftie5cvUIkkmiVHevqQuTj4wIgFtOhbQceudLAWTx9PE7NhwqaMcSKl79neq%2BzmOQLaAQqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0Vd2TMR85zjg5MGCrcA4F%2FtSSq92ni7jwXigtlSzlc1TwA%2Bw4i%2FWT0YuNDP0AYHkd8u%2BuuNsuzuj0vxfBEBXVV2ZUb2Sm7vB6xUdlOXy2kNBPjAgPsDevJulOr%2F%2Fn8lpb0OBM%2BWqO4FuN3N%2Bm%2FuSEtOlmITQ%2BdvX30lYFyZO7jEglVkv6uyhuaVs2UmldjBTafzFn9MKRonxJfPHo0%2BX5pGwM2EpRODjBzzK9oW%2BL3UThgwh%2BR%2F4YILqVIZw4Ra8BgmNO874XxLNYPSO8ZfPs1JqEKzvip4J2Te8DyKXDsWgD3vwPK%2F5fr82OhMGXy8dzSC%2BGUPm8odkIAqCatA9mVq6Ex4FIQyERH%2FFT6JWaplf%2F6Kv2dmtnS6AfRmLNbN8AXtvHZUU7Wwk5%2FpRIvXvhtTihOD770XmeLh20MAL4gI0RH9LYd6WEfDgwiit0QN22Q%2FrfpUN2i8QKcyV5SHQvjdS1RbFZCiNLeuyxT0BKZWt9UE5BVyvgyKhcCENjza3L0yPm%2FPqwCcLhgpNVDMcNWzovou0g3F3ovFhNuy5iPp3BcOtGPcL11iZyKYL1NGh7So1%2FNzV1j70tg4AjxY7dRlTFx5krJFvvtWfiMo%2FNc9ApQk82oUcxoOlFyFeWnh%2BqPOp0WKMHAmRJAMKnF%2BcEGOqUBJB01f25TGdCKrbgbEIlhDOqOCHrNZUQiscEzeN5M%2B4JUVN4a5lplXWNzQN7q7uvFQE1WWzpzOfOGW%2FqWGqyLsQpzFEW%2B%2Fh0ZE04i4Bp%2BZE%2FtXlqZHbDFxNyFq6NAMnZf%2BnIZI8j1yJeyUrMo06K6WQhgEy0OIgbLA71h4gh0dAjRn%2BxGnzvKRJRAwcAgRna14ZfQW8aUTnZNg1xu4gxAVInoMh3n&X-Amz-Signature=ae740df2d717094c6cb69947fc79a85d789666c5a3508c0d72cba7a7cc905291&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDRIZ5L%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDfjNUHz3s%2F8vjrjh%2Foj5ftie5cvUIkkmiVHevqQuTj4wIgFtOhbQceudLAWTx9PE7NhwqaMcSKl79neq%2BzmOQLaAQqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0Vd2TMR85zjg5MGCrcA4F%2FtSSq92ni7jwXigtlSzlc1TwA%2Bw4i%2FWT0YuNDP0AYHkd8u%2BuuNsuzuj0vxfBEBXVV2ZUb2Sm7vB6xUdlOXy2kNBPjAgPsDevJulOr%2F%2Fn8lpb0OBM%2BWqO4FuN3N%2Bm%2FuSEtOlmITQ%2BdvX30lYFyZO7jEglVkv6uyhuaVs2UmldjBTafzFn9MKRonxJfPHo0%2BX5pGwM2EpRODjBzzK9oW%2BL3UThgwh%2BR%2F4YILqVIZw4Ra8BgmNO874XxLNYPSO8ZfPs1JqEKzvip4J2Te8DyKXDsWgD3vwPK%2F5fr82OhMGXy8dzSC%2BGUPm8odkIAqCatA9mVq6Ex4FIQyERH%2FFT6JWaplf%2F6Kv2dmtnS6AfRmLNbN8AXtvHZUU7Wwk5%2FpRIvXvhtTihOD770XmeLh20MAL4gI0RH9LYd6WEfDgwiit0QN22Q%2FrfpUN2i8QKcyV5SHQvjdS1RbFZCiNLeuyxT0BKZWt9UE5BVyvgyKhcCENjza3L0yPm%2FPqwCcLhgpNVDMcNWzovou0g3F3ovFhNuy5iPp3BcOtGPcL11iZyKYL1NGh7So1%2FNzV1j70tg4AjxY7dRlTFx5krJFvvtWfiMo%2FNc9ApQk82oUcxoOlFyFeWnh%2BqPOp0WKMHAmRJAMKnF%2BcEGOqUBJB01f25TGdCKrbgbEIlhDOqOCHrNZUQiscEzeN5M%2B4JUVN4a5lplXWNzQN7q7uvFQE1WWzpzOfOGW%2FqWGqyLsQpzFEW%2B%2Fh0ZE04i4Bp%2BZE%2FtXlqZHbDFxNyFq6NAMnZf%2BnIZI8j1yJeyUrMo06K6WQhgEy0OIgbLA71h4gh0dAjRn%2BxGnzvKRJRAwcAgRna14ZfQW8aUTnZNg1xu4gxAVInoMh3n&X-Amz-Signature=6b3ee9c2e3529050883c9e75b2b2181e4ad62b3ba7ad452373447e451bcfc551&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

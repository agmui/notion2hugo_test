---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMFF3HUC%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDXhQkYFx5KiW7gQSW6e4SnQ8LRGQLB%2FY9iV4jHkEcPRQIhAIaA%2F7CeuukyWIWHth0iF3zEkiGAdK8zM2vyifGNRJ8rKv8DCDIQABoMNjM3NDIzMTgzODA1Igy%2FNsmru%2F%2FDl%2FzK1mYq3APDX52c602s9tJ8pw%2F%2B3tGrpfDwOq4KBtnwzGMb7J2RQNPhwSu%2FXC1RAGHdcuCC9PA2Zz%2BcYFM5Fd%2BSVVjVQh6rhHN36KCri1erl7wN8mRjihFWxxSTXhw8MyRG3PUgKxyB8TWcEPCQAumA8jYDq%2FroUUFuAyZj%2Fg3Oh91VnUx6HiHY%2Bg5AgX%2BfScIs1JCQU3qtXlQiB1PxobzKXDQwy3wz%2FyJGcAqqtd6t0SFlD4810jgd%2BU1Lm3Im7DdJBF2WTGa%2Fr2Yzep3uXI2fL7wyuAQPiX9XZIwQ16rALzKIw6H8SRqxKG0y%2FjtTHVCYtS0K66EkUgS0LsbSJldbl%2FM2l9cQfRStYoY7K5EVJRTXUXNkBFCKL0lht8jzzPy7foH%2Fmakpyz%2Br3aKlKVGVFW6r%2BKJdsTA%2BDXBDxXioJB%2BgIUznLnkmcY0agENblh8HSL2VYm39pBBCFKFOE8uErhfknDb5xrRoDZycfilTarS0%2FXvqXcrAamRxBATQquPI%2FSpuFK59S3Nk42NfjqWQ9mEljQHmJsRmKlVihsHGSyVgIGqWBcTYVc2XWQHT4oBLsb%2Fb0Fs7CeXJvGvbDnwhcx%2BVNrKO%2ByqD%2BmMHvBOjaxahiF16DRw7ayJ2cpy1BN6a%2BjC8sInJBjqkAVO9Orv6yP9bKHkVDZz73w%2BgihWbn1EUwoetC4P3vMOBIYP6h0B6O3APH9jsh79ZF3WxflMAvJr8bLNqDGBF%2B1qNVIJRv1Qe%2FgaXnOyFqPWgmX0rZb2q3BK0JOL0Z4ZtycYi0b1f5NJt49%2FjiYn37taclexjpDvMTJHwagm7j541CeaYyUQUfn8rwhiYUKPJjKYlkgZ9U5mz7eDA3qZFUq0Bad48&X-Amz-Signature=5f8cf7bca2de4992dfbd239f455c77a4b039eb0c66fb62fad2829ba57edfa77c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMFF3HUC%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDXhQkYFx5KiW7gQSW6e4SnQ8LRGQLB%2FY9iV4jHkEcPRQIhAIaA%2F7CeuukyWIWHth0iF3zEkiGAdK8zM2vyifGNRJ8rKv8DCDIQABoMNjM3NDIzMTgzODA1Igy%2FNsmru%2F%2FDl%2FzK1mYq3APDX52c602s9tJ8pw%2F%2B3tGrpfDwOq4KBtnwzGMb7J2RQNPhwSu%2FXC1RAGHdcuCC9PA2Zz%2BcYFM5Fd%2BSVVjVQh6rhHN36KCri1erl7wN8mRjihFWxxSTXhw8MyRG3PUgKxyB8TWcEPCQAumA8jYDq%2FroUUFuAyZj%2Fg3Oh91VnUx6HiHY%2Bg5AgX%2BfScIs1JCQU3qtXlQiB1PxobzKXDQwy3wz%2FyJGcAqqtd6t0SFlD4810jgd%2BU1Lm3Im7DdJBF2WTGa%2Fr2Yzep3uXI2fL7wyuAQPiX9XZIwQ16rALzKIw6H8SRqxKG0y%2FjtTHVCYtS0K66EkUgS0LsbSJldbl%2FM2l9cQfRStYoY7K5EVJRTXUXNkBFCKL0lht8jzzPy7foH%2Fmakpyz%2Br3aKlKVGVFW6r%2BKJdsTA%2BDXBDxXioJB%2BgIUznLnkmcY0agENblh8HSL2VYm39pBBCFKFOE8uErhfknDb5xrRoDZycfilTarS0%2FXvqXcrAamRxBATQquPI%2FSpuFK59S3Nk42NfjqWQ9mEljQHmJsRmKlVihsHGSyVgIGqWBcTYVc2XWQHT4oBLsb%2Fb0Fs7CeXJvGvbDnwhcx%2BVNrKO%2ByqD%2BmMHvBOjaxahiF16DRw7ayJ2cpy1BN6a%2BjC8sInJBjqkAVO9Orv6yP9bKHkVDZz73w%2BgihWbn1EUwoetC4P3vMOBIYP6h0B6O3APH9jsh79ZF3WxflMAvJr8bLNqDGBF%2B1qNVIJRv1Qe%2FgaXnOyFqPWgmX0rZb2q3BK0JOL0Z4ZtycYi0b1f5NJt49%2FjiYn37taclexjpDvMTJHwagm7j541CeaYyUQUfn8rwhiYUKPJjKYlkgZ9U5mz7eDA3qZFUq0Bad48&X-Amz-Signature=f8a9d0b4c9834f9675411edecffec92c0c335cb5993c1fbf4d43f7c45054cca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMFF3HUC%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDXhQkYFx5KiW7gQSW6e4SnQ8LRGQLB%2FY9iV4jHkEcPRQIhAIaA%2F7CeuukyWIWHth0iF3zEkiGAdK8zM2vyifGNRJ8rKv8DCDIQABoMNjM3NDIzMTgzODA1Igy%2FNsmru%2F%2FDl%2FzK1mYq3APDX52c602s9tJ8pw%2F%2B3tGrpfDwOq4KBtnwzGMb7J2RQNPhwSu%2FXC1RAGHdcuCC9PA2Zz%2BcYFM5Fd%2BSVVjVQh6rhHN36KCri1erl7wN8mRjihFWxxSTXhw8MyRG3PUgKxyB8TWcEPCQAumA8jYDq%2FroUUFuAyZj%2Fg3Oh91VnUx6HiHY%2Bg5AgX%2BfScIs1JCQU3qtXlQiB1PxobzKXDQwy3wz%2FyJGcAqqtd6t0SFlD4810jgd%2BU1Lm3Im7DdJBF2WTGa%2Fr2Yzep3uXI2fL7wyuAQPiX9XZIwQ16rALzKIw6H8SRqxKG0y%2FjtTHVCYtS0K66EkUgS0LsbSJldbl%2FM2l9cQfRStYoY7K5EVJRTXUXNkBFCKL0lht8jzzPy7foH%2Fmakpyz%2Br3aKlKVGVFW6r%2BKJdsTA%2BDXBDxXioJB%2BgIUznLnkmcY0agENblh8HSL2VYm39pBBCFKFOE8uErhfknDb5xrRoDZycfilTarS0%2FXvqXcrAamRxBATQquPI%2FSpuFK59S3Nk42NfjqWQ9mEljQHmJsRmKlVihsHGSyVgIGqWBcTYVc2XWQHT4oBLsb%2Fb0Fs7CeXJvGvbDnwhcx%2BVNrKO%2ByqD%2BmMHvBOjaxahiF16DRw7ayJ2cpy1BN6a%2BjC8sInJBjqkAVO9Orv6yP9bKHkVDZz73w%2BgihWbn1EUwoetC4P3vMOBIYP6h0B6O3APH9jsh79ZF3WxflMAvJr8bLNqDGBF%2B1qNVIJRv1Qe%2FgaXnOyFqPWgmX0rZb2q3BK0JOL0Z4ZtycYi0b1f5NJt49%2FjiYn37taclexjpDvMTJHwagm7j541CeaYyUQUfn8rwhiYUKPJjKYlkgZ9U5mz7eDA3qZFUq0Bad48&X-Amz-Signature=b0a6eed58a839115759ae0e8374c8b44fe8aeef644118af3dfc839fdec175862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMFF3HUC%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDXhQkYFx5KiW7gQSW6e4SnQ8LRGQLB%2FY9iV4jHkEcPRQIhAIaA%2F7CeuukyWIWHth0iF3zEkiGAdK8zM2vyifGNRJ8rKv8DCDIQABoMNjM3NDIzMTgzODA1Igy%2FNsmru%2F%2FDl%2FzK1mYq3APDX52c602s9tJ8pw%2F%2B3tGrpfDwOq4KBtnwzGMb7J2RQNPhwSu%2FXC1RAGHdcuCC9PA2Zz%2BcYFM5Fd%2BSVVjVQh6rhHN36KCri1erl7wN8mRjihFWxxSTXhw8MyRG3PUgKxyB8TWcEPCQAumA8jYDq%2FroUUFuAyZj%2Fg3Oh91VnUx6HiHY%2Bg5AgX%2BfScIs1JCQU3qtXlQiB1PxobzKXDQwy3wz%2FyJGcAqqtd6t0SFlD4810jgd%2BU1Lm3Im7DdJBF2WTGa%2Fr2Yzep3uXI2fL7wyuAQPiX9XZIwQ16rALzKIw6H8SRqxKG0y%2FjtTHVCYtS0K66EkUgS0LsbSJldbl%2FM2l9cQfRStYoY7K5EVJRTXUXNkBFCKL0lht8jzzPy7foH%2Fmakpyz%2Br3aKlKVGVFW6r%2BKJdsTA%2BDXBDxXioJB%2BgIUznLnkmcY0agENblh8HSL2VYm39pBBCFKFOE8uErhfknDb5xrRoDZycfilTarS0%2FXvqXcrAamRxBATQquPI%2FSpuFK59S3Nk42NfjqWQ9mEljQHmJsRmKlVihsHGSyVgIGqWBcTYVc2XWQHT4oBLsb%2Fb0Fs7CeXJvGvbDnwhcx%2BVNrKO%2ByqD%2BmMHvBOjaxahiF16DRw7ayJ2cpy1BN6a%2BjC8sInJBjqkAVO9Orv6yP9bKHkVDZz73w%2BgihWbn1EUwoetC4P3vMOBIYP6h0B6O3APH9jsh79ZF3WxflMAvJr8bLNqDGBF%2B1qNVIJRv1Qe%2FgaXnOyFqPWgmX0rZb2q3BK0JOL0Z4ZtycYi0b1f5NJt49%2FjiYn37taclexjpDvMTJHwagm7j541CeaYyUQUfn8rwhiYUKPJjKYlkgZ9U5mz7eDA3qZFUq0Bad48&X-Amz-Signature=e6be0fcdd5b188cc5f674a44d9e3ac9d1454c480d20e36b41aa350938658bd6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMFF3HUC%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDXhQkYFx5KiW7gQSW6e4SnQ8LRGQLB%2FY9iV4jHkEcPRQIhAIaA%2F7CeuukyWIWHth0iF3zEkiGAdK8zM2vyifGNRJ8rKv8DCDIQABoMNjM3NDIzMTgzODA1Igy%2FNsmru%2F%2FDl%2FzK1mYq3APDX52c602s9tJ8pw%2F%2B3tGrpfDwOq4KBtnwzGMb7J2RQNPhwSu%2FXC1RAGHdcuCC9PA2Zz%2BcYFM5Fd%2BSVVjVQh6rhHN36KCri1erl7wN8mRjihFWxxSTXhw8MyRG3PUgKxyB8TWcEPCQAumA8jYDq%2FroUUFuAyZj%2Fg3Oh91VnUx6HiHY%2Bg5AgX%2BfScIs1JCQU3qtXlQiB1PxobzKXDQwy3wz%2FyJGcAqqtd6t0SFlD4810jgd%2BU1Lm3Im7DdJBF2WTGa%2Fr2Yzep3uXI2fL7wyuAQPiX9XZIwQ16rALzKIw6H8SRqxKG0y%2FjtTHVCYtS0K66EkUgS0LsbSJldbl%2FM2l9cQfRStYoY7K5EVJRTXUXNkBFCKL0lht8jzzPy7foH%2Fmakpyz%2Br3aKlKVGVFW6r%2BKJdsTA%2BDXBDxXioJB%2BgIUznLnkmcY0agENblh8HSL2VYm39pBBCFKFOE8uErhfknDb5xrRoDZycfilTarS0%2FXvqXcrAamRxBATQquPI%2FSpuFK59S3Nk42NfjqWQ9mEljQHmJsRmKlVihsHGSyVgIGqWBcTYVc2XWQHT4oBLsb%2Fb0Fs7CeXJvGvbDnwhcx%2BVNrKO%2ByqD%2BmMHvBOjaxahiF16DRw7ayJ2cpy1BN6a%2BjC8sInJBjqkAVO9Orv6yP9bKHkVDZz73w%2BgihWbn1EUwoetC4P3vMOBIYP6h0B6O3APH9jsh79ZF3WxflMAvJr8bLNqDGBF%2B1qNVIJRv1Qe%2FgaXnOyFqPWgmX0rZb2q3BK0JOL0Z4ZtycYi0b1f5NJt49%2FjiYn37taclexjpDvMTJHwagm7j541CeaYyUQUfn8rwhiYUKPJjKYlkgZ9U5mz7eDA3qZFUq0Bad48&X-Amz-Signature=839dce2965f4c7d4effb956ab14417330d4213870e74127c2f5b841f18a1786b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

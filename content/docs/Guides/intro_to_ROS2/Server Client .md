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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD7AGKNK%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIE%2BhoTluF97WKg6KoIU6cbX5wPVaRgmzV7bma5rBkL3TAiAqEpn2pu2DxGubPF7Q6kcrvD%2BS4krJFKlLAnu6ptZ7xyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSX0L7AePQDb8p81eKtwDm4d8aepq3vlsY%2B7ODP8rYxYQTlJv9BxzblE%2FW%2Fdx2c%2B2O3f2CrjpPKK5foCuM6K7Nn0SXVuY9BshC5fvz%2BpsfyBp6sRvZtTiRpLzJCJY3VQgXXCnJo3N%2BOCY%2BSZ17xrks8%2FkQsyxw7ieLaY7xUMvWT2o8DmB%2BMXY7HgMVhDU9x8PX1krJ%2FQcCfO5YYYOWKkTnNlhXg40MRD4dI2Oodrn3Rug45uvnItouZvgwH8bFVYga%2BT9eND8H%2BfU39qmN3TTxysrQkpm5RWZ7MpsgwvFsv%2F2tLuiatXUs0HIRt71Q4bBsZ7xEQpP7l2P5QEhiZD%2BiWiLFF902b%2FgFqWZVg9OPRsChMcYo5ozZ1lWg2B%2B2Kjv%2BhaUU3s0NR9hZ6VDV9LEsyA6bQcfbP86lLGlc%2FHyyjGd6CaNwmX68VOPUmIUT%2BXMEqTwjNsHq7lQ0x%2FTt%2BfxFpb%2Bs4R9vMlWbsylMwYfmkmcTEZb6JilYZj2Omdia1bLYmT6NKt9T%2FTmQh%2BPQ19tlCLq%2BNsCrAwOHKRlqF%2F4qA%2B%2BOvxJqlemlWGwD9dE00EaqovipGPXUDyoQmoheNxihphz56ixcSskt26rH7NyAFLc8PzmBSKmjdKqdRbfBh6k9h0AF%2Bu%2FYh5Ne3gwx4qzvwY6pgGsYdRlVnKHvgqXAQdltSzKtNgpSQrst0uFK9SBN4oRPSoUfWT9jvj%2FZ9BHteygJa2FzbI%2Bww637mM3N2rCphdF%2B7Ai7rY01RLmAsE4JDiYNKvL3fKFLvpDFGbrw52o09wSCCnmJ2S%2BjImtRTGBWMySBSdfudHn1HsmT5A0TX%2FaUKxoQycjVXkV%2FwmeWYsNpYFSQiTvyAek3MqWK%2FJA5THQNkflNKWh&X-Amz-Signature=d127b0658268162d62c4f699df8e472b15e463b6b423f460d785199a29e576bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD7AGKNK%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIE%2BhoTluF97WKg6KoIU6cbX5wPVaRgmzV7bma5rBkL3TAiAqEpn2pu2DxGubPF7Q6kcrvD%2BS4krJFKlLAnu6ptZ7xyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSX0L7AePQDb8p81eKtwDm4d8aepq3vlsY%2B7ODP8rYxYQTlJv9BxzblE%2FW%2Fdx2c%2B2O3f2CrjpPKK5foCuM6K7Nn0SXVuY9BshC5fvz%2BpsfyBp6sRvZtTiRpLzJCJY3VQgXXCnJo3N%2BOCY%2BSZ17xrks8%2FkQsyxw7ieLaY7xUMvWT2o8DmB%2BMXY7HgMVhDU9x8PX1krJ%2FQcCfO5YYYOWKkTnNlhXg40MRD4dI2Oodrn3Rug45uvnItouZvgwH8bFVYga%2BT9eND8H%2BfU39qmN3TTxysrQkpm5RWZ7MpsgwvFsv%2F2tLuiatXUs0HIRt71Q4bBsZ7xEQpP7l2P5QEhiZD%2BiWiLFF902b%2FgFqWZVg9OPRsChMcYo5ozZ1lWg2B%2B2Kjv%2BhaUU3s0NR9hZ6VDV9LEsyA6bQcfbP86lLGlc%2FHyyjGd6CaNwmX68VOPUmIUT%2BXMEqTwjNsHq7lQ0x%2FTt%2BfxFpb%2Bs4R9vMlWbsylMwYfmkmcTEZb6JilYZj2Omdia1bLYmT6NKt9T%2FTmQh%2BPQ19tlCLq%2BNsCrAwOHKRlqF%2F4qA%2B%2BOvxJqlemlWGwD9dE00EaqovipGPXUDyoQmoheNxihphz56ixcSskt26rH7NyAFLc8PzmBSKmjdKqdRbfBh6k9h0AF%2Bu%2FYh5Ne3gwx4qzvwY6pgGsYdRlVnKHvgqXAQdltSzKtNgpSQrst0uFK9SBN4oRPSoUfWT9jvj%2FZ9BHteygJa2FzbI%2Bww637mM3N2rCphdF%2B7Ai7rY01RLmAsE4JDiYNKvL3fKFLvpDFGbrw52o09wSCCnmJ2S%2BjImtRTGBWMySBSdfudHn1HsmT5A0TX%2FaUKxoQycjVXkV%2FwmeWYsNpYFSQiTvyAek3MqWK%2FJA5THQNkflNKWh&X-Amz-Signature=d46d81bf5eed954dcc36eafc861aed2bdbb400299e955da90d62dc74b33ddbc6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD7AGKNK%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIE%2BhoTluF97WKg6KoIU6cbX5wPVaRgmzV7bma5rBkL3TAiAqEpn2pu2DxGubPF7Q6kcrvD%2BS4krJFKlLAnu6ptZ7xyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSX0L7AePQDb8p81eKtwDm4d8aepq3vlsY%2B7ODP8rYxYQTlJv9BxzblE%2FW%2Fdx2c%2B2O3f2CrjpPKK5foCuM6K7Nn0SXVuY9BshC5fvz%2BpsfyBp6sRvZtTiRpLzJCJY3VQgXXCnJo3N%2BOCY%2BSZ17xrks8%2FkQsyxw7ieLaY7xUMvWT2o8DmB%2BMXY7HgMVhDU9x8PX1krJ%2FQcCfO5YYYOWKkTnNlhXg40MRD4dI2Oodrn3Rug45uvnItouZvgwH8bFVYga%2BT9eND8H%2BfU39qmN3TTxysrQkpm5RWZ7MpsgwvFsv%2F2tLuiatXUs0HIRt71Q4bBsZ7xEQpP7l2P5QEhiZD%2BiWiLFF902b%2FgFqWZVg9OPRsChMcYo5ozZ1lWg2B%2B2Kjv%2BhaUU3s0NR9hZ6VDV9LEsyA6bQcfbP86lLGlc%2FHyyjGd6CaNwmX68VOPUmIUT%2BXMEqTwjNsHq7lQ0x%2FTt%2BfxFpb%2Bs4R9vMlWbsylMwYfmkmcTEZb6JilYZj2Omdia1bLYmT6NKt9T%2FTmQh%2BPQ19tlCLq%2BNsCrAwOHKRlqF%2F4qA%2B%2BOvxJqlemlWGwD9dE00EaqovipGPXUDyoQmoheNxihphz56ixcSskt26rH7NyAFLc8PzmBSKmjdKqdRbfBh6k9h0AF%2Bu%2FYh5Ne3gwx4qzvwY6pgGsYdRlVnKHvgqXAQdltSzKtNgpSQrst0uFK9SBN4oRPSoUfWT9jvj%2FZ9BHteygJa2FzbI%2Bww637mM3N2rCphdF%2B7Ai7rY01RLmAsE4JDiYNKvL3fKFLvpDFGbrw52o09wSCCnmJ2S%2BjImtRTGBWMySBSdfudHn1HsmT5A0TX%2FaUKxoQycjVXkV%2FwmeWYsNpYFSQiTvyAek3MqWK%2FJA5THQNkflNKWh&X-Amz-Signature=8f5c44ecce3bf8fd190c5b801d00dc7b82e2dea40dc0ed3cf565209103e93569&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD7AGKNK%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIE%2BhoTluF97WKg6KoIU6cbX5wPVaRgmzV7bma5rBkL3TAiAqEpn2pu2DxGubPF7Q6kcrvD%2BS4krJFKlLAnu6ptZ7xyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSX0L7AePQDb8p81eKtwDm4d8aepq3vlsY%2B7ODP8rYxYQTlJv9BxzblE%2FW%2Fdx2c%2B2O3f2CrjpPKK5foCuM6K7Nn0SXVuY9BshC5fvz%2BpsfyBp6sRvZtTiRpLzJCJY3VQgXXCnJo3N%2BOCY%2BSZ17xrks8%2FkQsyxw7ieLaY7xUMvWT2o8DmB%2BMXY7HgMVhDU9x8PX1krJ%2FQcCfO5YYYOWKkTnNlhXg40MRD4dI2Oodrn3Rug45uvnItouZvgwH8bFVYga%2BT9eND8H%2BfU39qmN3TTxysrQkpm5RWZ7MpsgwvFsv%2F2tLuiatXUs0HIRt71Q4bBsZ7xEQpP7l2P5QEhiZD%2BiWiLFF902b%2FgFqWZVg9OPRsChMcYo5ozZ1lWg2B%2B2Kjv%2BhaUU3s0NR9hZ6VDV9LEsyA6bQcfbP86lLGlc%2FHyyjGd6CaNwmX68VOPUmIUT%2BXMEqTwjNsHq7lQ0x%2FTt%2BfxFpb%2Bs4R9vMlWbsylMwYfmkmcTEZb6JilYZj2Omdia1bLYmT6NKt9T%2FTmQh%2BPQ19tlCLq%2BNsCrAwOHKRlqF%2F4qA%2B%2BOvxJqlemlWGwD9dE00EaqovipGPXUDyoQmoheNxihphz56ixcSskt26rH7NyAFLc8PzmBSKmjdKqdRbfBh6k9h0AF%2Bu%2FYh5Ne3gwx4qzvwY6pgGsYdRlVnKHvgqXAQdltSzKtNgpSQrst0uFK9SBN4oRPSoUfWT9jvj%2FZ9BHteygJa2FzbI%2Bww637mM3N2rCphdF%2B7Ai7rY01RLmAsE4JDiYNKvL3fKFLvpDFGbrw52o09wSCCnmJ2S%2BjImtRTGBWMySBSdfudHn1HsmT5A0TX%2FaUKxoQycjVXkV%2FwmeWYsNpYFSQiTvyAek3MqWK%2FJA5THQNkflNKWh&X-Amz-Signature=1b43db181c75eae06004086b5ffc0ab3fc9f81fd99789a219527c3d307e85666&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD7AGKNK%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIE%2BhoTluF97WKg6KoIU6cbX5wPVaRgmzV7bma5rBkL3TAiAqEpn2pu2DxGubPF7Q6kcrvD%2BS4krJFKlLAnu6ptZ7xyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSX0L7AePQDb8p81eKtwDm4d8aepq3vlsY%2B7ODP8rYxYQTlJv9BxzblE%2FW%2Fdx2c%2B2O3f2CrjpPKK5foCuM6K7Nn0SXVuY9BshC5fvz%2BpsfyBp6sRvZtTiRpLzJCJY3VQgXXCnJo3N%2BOCY%2BSZ17xrks8%2FkQsyxw7ieLaY7xUMvWT2o8DmB%2BMXY7HgMVhDU9x8PX1krJ%2FQcCfO5YYYOWKkTnNlhXg40MRD4dI2Oodrn3Rug45uvnItouZvgwH8bFVYga%2BT9eND8H%2BfU39qmN3TTxysrQkpm5RWZ7MpsgwvFsv%2F2tLuiatXUs0HIRt71Q4bBsZ7xEQpP7l2P5QEhiZD%2BiWiLFF902b%2FgFqWZVg9OPRsChMcYo5ozZ1lWg2B%2B2Kjv%2BhaUU3s0NR9hZ6VDV9LEsyA6bQcfbP86lLGlc%2FHyyjGd6CaNwmX68VOPUmIUT%2BXMEqTwjNsHq7lQ0x%2FTt%2BfxFpb%2Bs4R9vMlWbsylMwYfmkmcTEZb6JilYZj2Omdia1bLYmT6NKt9T%2FTmQh%2BPQ19tlCLq%2BNsCrAwOHKRlqF%2F4qA%2B%2BOvxJqlemlWGwD9dE00EaqovipGPXUDyoQmoheNxihphz56ixcSskt26rH7NyAFLc8PzmBSKmjdKqdRbfBh6k9h0AF%2Bu%2FYh5Ne3gwx4qzvwY6pgGsYdRlVnKHvgqXAQdltSzKtNgpSQrst0uFK9SBN4oRPSoUfWT9jvj%2FZ9BHteygJa2FzbI%2Bww637mM3N2rCphdF%2B7Ai7rY01RLmAsE4JDiYNKvL3fKFLvpDFGbrw52o09wSCCnmJ2S%2BjImtRTGBWMySBSdfudHn1HsmT5A0TX%2FaUKxoQycjVXkV%2FwmeWYsNpYFSQiTvyAek3MqWK%2FJA5THQNkflNKWh&X-Amz-Signature=cffa31d9c8f488b3975fccb6215893446074edc5e32dc495d24a84c03120e5b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

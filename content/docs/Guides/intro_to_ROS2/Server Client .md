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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAZDMRXC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOAZF9FoGsba82PR2qQodAa0ocM0EdHEv%2BRaEf5L%2FgsAiEAyzcJ9PoqcaH9vM%2FvrBzWPxeK74kjRlswiFFc%2FyuRpKUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLsdpRjtSBXvyVgSwircAwFvhLXxW5%2FxX%2FEZqMOKe3m81TzTIuDiT5N%2BqooSlGj8j2N4QyQFvCuZI9oSFhNoSQCsLhBKbe0G6s3UC4vkcUm4caz3%2BUpWcTsZqcECFZAVXgU5LwDddL1fAhVfDhFUaCIBIM6SUQc0OkXakVqRXMWcjgeEeT8LgCpEiSQVPTHd%2F3mmfR2z7CI%2B9g0IoS8xCD0dvFb7h1sJKaaau%2FlZ3njmuSTH9yVYGXVXi0lg6kxpef0utLTUhN95Tx3aNvkQ%2BUoVxiwmwZhBu21KazX2R27fvFXV1Nxbok2%2F1sZd%2B39fOwic2VJb6IjrNGIu8VOUBmWxtImX5V30Hm4xM3Qd0Y77rgglzGLb1E9WYECjeAKU2wF966JsfEeuXB67n0Qqjg9V1hXeCC5qIT0jM77oT9N3N639L8IYjzKv%2BuFwU8WhNmJVuWOyD7%2BfFMMAgrrbZJLSXc9Ug6lCwx46EgRENTtOVsbwbGcP2HPAo2n2Ejzxlp7%2FX2ziORW4zyZvWMg5hH8uSTG12YU%2FWLIEpf%2Bs2NH1kYklpcNThFJ8N8I8hD4qE%2F95VPvLg6lwuBTyI8MPBFfbqRssoAOvgisKwWInhUHeV7hf5RL4mT7kqGfdVvHTrNsL0A5eHwTrtnubMMWUg8AGOqUBDdNe%2Bi1jGMeKY%2FeLOBD%2FgUg1vUTAv89QM6UmYUEMACqAUfQI1GCXDFEMW7k7GGYjEYB8dkGqtQ1kazgjpXLJWqIuu0RQ0gdgfDftqursr1vfZUaqDJtonXWfE%2FZ8revxjCRn3xb%2FglocZ%2BcpcHPahmPlPsXfhEq%2B97Qg%2F0uop89APyjaYkYMQ53wGB%2FaVqTUDzxBlPUa2WYdXumUK89gwbwcCIe7&X-Amz-Signature=4b4f5bd2a8152ff02d73f00d01ef5886ea577b02875e03b91adfdb9ae86eb74e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAZDMRXC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOAZF9FoGsba82PR2qQodAa0ocM0EdHEv%2BRaEf5L%2FgsAiEAyzcJ9PoqcaH9vM%2FvrBzWPxeK74kjRlswiFFc%2FyuRpKUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLsdpRjtSBXvyVgSwircAwFvhLXxW5%2FxX%2FEZqMOKe3m81TzTIuDiT5N%2BqooSlGj8j2N4QyQFvCuZI9oSFhNoSQCsLhBKbe0G6s3UC4vkcUm4caz3%2BUpWcTsZqcECFZAVXgU5LwDddL1fAhVfDhFUaCIBIM6SUQc0OkXakVqRXMWcjgeEeT8LgCpEiSQVPTHd%2F3mmfR2z7CI%2B9g0IoS8xCD0dvFb7h1sJKaaau%2FlZ3njmuSTH9yVYGXVXi0lg6kxpef0utLTUhN95Tx3aNvkQ%2BUoVxiwmwZhBu21KazX2R27fvFXV1Nxbok2%2F1sZd%2B39fOwic2VJb6IjrNGIu8VOUBmWxtImX5V30Hm4xM3Qd0Y77rgglzGLb1E9WYECjeAKU2wF966JsfEeuXB67n0Qqjg9V1hXeCC5qIT0jM77oT9N3N639L8IYjzKv%2BuFwU8WhNmJVuWOyD7%2BfFMMAgrrbZJLSXc9Ug6lCwx46EgRENTtOVsbwbGcP2HPAo2n2Ejzxlp7%2FX2ziORW4zyZvWMg5hH8uSTG12YU%2FWLIEpf%2Bs2NH1kYklpcNThFJ8N8I8hD4qE%2F95VPvLg6lwuBTyI8MPBFfbqRssoAOvgisKwWInhUHeV7hf5RL4mT7kqGfdVvHTrNsL0A5eHwTrtnubMMWUg8AGOqUBDdNe%2Bi1jGMeKY%2FeLOBD%2FgUg1vUTAv89QM6UmYUEMACqAUfQI1GCXDFEMW7k7GGYjEYB8dkGqtQ1kazgjpXLJWqIuu0RQ0gdgfDftqursr1vfZUaqDJtonXWfE%2FZ8revxjCRn3xb%2FglocZ%2BcpcHPahmPlPsXfhEq%2B97Qg%2F0uop89APyjaYkYMQ53wGB%2FaVqTUDzxBlPUa2WYdXumUK89gwbwcCIe7&X-Amz-Signature=08634ac06248638033fadcb7ec1bf4f85656bc4331b7680c32ee47f14884531f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAZDMRXC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOAZF9FoGsba82PR2qQodAa0ocM0EdHEv%2BRaEf5L%2FgsAiEAyzcJ9PoqcaH9vM%2FvrBzWPxeK74kjRlswiFFc%2FyuRpKUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLsdpRjtSBXvyVgSwircAwFvhLXxW5%2FxX%2FEZqMOKe3m81TzTIuDiT5N%2BqooSlGj8j2N4QyQFvCuZI9oSFhNoSQCsLhBKbe0G6s3UC4vkcUm4caz3%2BUpWcTsZqcECFZAVXgU5LwDddL1fAhVfDhFUaCIBIM6SUQc0OkXakVqRXMWcjgeEeT8LgCpEiSQVPTHd%2F3mmfR2z7CI%2B9g0IoS8xCD0dvFb7h1sJKaaau%2FlZ3njmuSTH9yVYGXVXi0lg6kxpef0utLTUhN95Tx3aNvkQ%2BUoVxiwmwZhBu21KazX2R27fvFXV1Nxbok2%2F1sZd%2B39fOwic2VJb6IjrNGIu8VOUBmWxtImX5V30Hm4xM3Qd0Y77rgglzGLb1E9WYECjeAKU2wF966JsfEeuXB67n0Qqjg9V1hXeCC5qIT0jM77oT9N3N639L8IYjzKv%2BuFwU8WhNmJVuWOyD7%2BfFMMAgrrbZJLSXc9Ug6lCwx46EgRENTtOVsbwbGcP2HPAo2n2Ejzxlp7%2FX2ziORW4zyZvWMg5hH8uSTG12YU%2FWLIEpf%2Bs2NH1kYklpcNThFJ8N8I8hD4qE%2F95VPvLg6lwuBTyI8MPBFfbqRssoAOvgisKwWInhUHeV7hf5RL4mT7kqGfdVvHTrNsL0A5eHwTrtnubMMWUg8AGOqUBDdNe%2Bi1jGMeKY%2FeLOBD%2FgUg1vUTAv89QM6UmYUEMACqAUfQI1GCXDFEMW7k7GGYjEYB8dkGqtQ1kazgjpXLJWqIuu0RQ0gdgfDftqursr1vfZUaqDJtonXWfE%2FZ8revxjCRn3xb%2FglocZ%2BcpcHPahmPlPsXfhEq%2B97Qg%2F0uop89APyjaYkYMQ53wGB%2FaVqTUDzxBlPUa2WYdXumUK89gwbwcCIe7&X-Amz-Signature=237232b724e75f0f343b5cfa659bbc6a7f01fc15b2eea23fd0b8ddd6591aca8b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAZDMRXC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOAZF9FoGsba82PR2qQodAa0ocM0EdHEv%2BRaEf5L%2FgsAiEAyzcJ9PoqcaH9vM%2FvrBzWPxeK74kjRlswiFFc%2FyuRpKUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLsdpRjtSBXvyVgSwircAwFvhLXxW5%2FxX%2FEZqMOKe3m81TzTIuDiT5N%2BqooSlGj8j2N4QyQFvCuZI9oSFhNoSQCsLhBKbe0G6s3UC4vkcUm4caz3%2BUpWcTsZqcECFZAVXgU5LwDddL1fAhVfDhFUaCIBIM6SUQc0OkXakVqRXMWcjgeEeT8LgCpEiSQVPTHd%2F3mmfR2z7CI%2B9g0IoS8xCD0dvFb7h1sJKaaau%2FlZ3njmuSTH9yVYGXVXi0lg6kxpef0utLTUhN95Tx3aNvkQ%2BUoVxiwmwZhBu21KazX2R27fvFXV1Nxbok2%2F1sZd%2B39fOwic2VJb6IjrNGIu8VOUBmWxtImX5V30Hm4xM3Qd0Y77rgglzGLb1E9WYECjeAKU2wF966JsfEeuXB67n0Qqjg9V1hXeCC5qIT0jM77oT9N3N639L8IYjzKv%2BuFwU8WhNmJVuWOyD7%2BfFMMAgrrbZJLSXc9Ug6lCwx46EgRENTtOVsbwbGcP2HPAo2n2Ejzxlp7%2FX2ziORW4zyZvWMg5hH8uSTG12YU%2FWLIEpf%2Bs2NH1kYklpcNThFJ8N8I8hD4qE%2F95VPvLg6lwuBTyI8MPBFfbqRssoAOvgisKwWInhUHeV7hf5RL4mT7kqGfdVvHTrNsL0A5eHwTrtnubMMWUg8AGOqUBDdNe%2Bi1jGMeKY%2FeLOBD%2FgUg1vUTAv89QM6UmYUEMACqAUfQI1GCXDFEMW7k7GGYjEYB8dkGqtQ1kazgjpXLJWqIuu0RQ0gdgfDftqursr1vfZUaqDJtonXWfE%2FZ8revxjCRn3xb%2FglocZ%2BcpcHPahmPlPsXfhEq%2B97Qg%2F0uop89APyjaYkYMQ53wGB%2FaVqTUDzxBlPUa2WYdXumUK89gwbwcCIe7&X-Amz-Signature=04d709044043a910a9011fddda0af37d399cf982710fbcbb132cceb8bc30d53c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAZDMRXC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOAZF9FoGsba82PR2qQodAa0ocM0EdHEv%2BRaEf5L%2FgsAiEAyzcJ9PoqcaH9vM%2FvrBzWPxeK74kjRlswiFFc%2FyuRpKUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLsdpRjtSBXvyVgSwircAwFvhLXxW5%2FxX%2FEZqMOKe3m81TzTIuDiT5N%2BqooSlGj8j2N4QyQFvCuZI9oSFhNoSQCsLhBKbe0G6s3UC4vkcUm4caz3%2BUpWcTsZqcECFZAVXgU5LwDddL1fAhVfDhFUaCIBIM6SUQc0OkXakVqRXMWcjgeEeT8LgCpEiSQVPTHd%2F3mmfR2z7CI%2B9g0IoS8xCD0dvFb7h1sJKaaau%2FlZ3njmuSTH9yVYGXVXi0lg6kxpef0utLTUhN95Tx3aNvkQ%2BUoVxiwmwZhBu21KazX2R27fvFXV1Nxbok2%2F1sZd%2B39fOwic2VJb6IjrNGIu8VOUBmWxtImX5V30Hm4xM3Qd0Y77rgglzGLb1E9WYECjeAKU2wF966JsfEeuXB67n0Qqjg9V1hXeCC5qIT0jM77oT9N3N639L8IYjzKv%2BuFwU8WhNmJVuWOyD7%2BfFMMAgrrbZJLSXc9Ug6lCwx46EgRENTtOVsbwbGcP2HPAo2n2Ejzxlp7%2FX2ziORW4zyZvWMg5hH8uSTG12YU%2FWLIEpf%2Bs2NH1kYklpcNThFJ8N8I8hD4qE%2F95VPvLg6lwuBTyI8MPBFfbqRssoAOvgisKwWInhUHeV7hf5RL4mT7kqGfdVvHTrNsL0A5eHwTrtnubMMWUg8AGOqUBDdNe%2Bi1jGMeKY%2FeLOBD%2FgUg1vUTAv89QM6UmYUEMACqAUfQI1GCXDFEMW7k7GGYjEYB8dkGqtQ1kazgjpXLJWqIuu0RQ0gdgfDftqursr1vfZUaqDJtonXWfE%2FZ8revxjCRn3xb%2FglocZ%2BcpcHPahmPlPsXfhEq%2B97Qg%2F0uop89APyjaYkYMQ53wGB%2FaVqTUDzxBlPUa2WYdXumUK89gwbwcCIe7&X-Amz-Signature=c100f638bd386b1fec47cbb3f2c274ef21323acc3901d169febc350a21a0ab52&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

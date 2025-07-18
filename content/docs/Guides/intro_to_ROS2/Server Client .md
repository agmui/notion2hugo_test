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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X73OPQSZ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDSVdOJc0lrMuH3eN8Gb0%2Bp8O8QijDSbTlWy7F%2BQB2G8AiEAk12tTZ6SedZAPh8Vm%2FUBxffKwAVe1orjuZGvP5wqylwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIWs8U1AUlA9FX7ASrcA08kzCpTPjNj94YR8BAgDaTylkvNqwXATryWcA%2Bd2tWoFSrrxR6AMAdwtvRSgpzjZFhhBswC%2FkGxCveAyfoPLHN1hie0cKBctVLxTeTS46%2BbanNOHEOHpf%2B5bN4WT0lyAfNdu5MkH1ZGORFV2aAXeIN4RaQzzx%2F2UPMqqcXEGUFZv%2FG%2FbiOeYpoVETcD%2BTlMLUCc6dOIbZasO4lIzUF6iTcJzV4pyrHJvqP9%2BPRgUQC04MBhoZaSvdHCjuRbiV5irGQjJTNYk168A7xi7%2BK2nWXKiAucMi5zpc0G2Ezeprnp5LJklXiD3Dg%2F4sADVaFgKiemjn8Vy%2FvhZLiHRGoQkw2J3vcHmmCg6Xqd1c8%2F6MiwbwjoyRfoLFI6tC10fX9WGHvn7hDrsDD1pJW1f7KoMNAHgKYoVNE%2F0Du87dR8x2c5np%2BoD31jq7RN8L5u07ZmPhhY08jRgXtCdvjJIf453O2F6mDDDbVQFKEcs3ub16TZcuw3s2onMS50Nblr714EDBDxnlJyqJwRCPTAX57M5AsUuUUJwbwxuuOWOx0VjVLKzdfLVWTPtENYEvb85RtssniMwXWXL065lGxKbcxI2GVPnFhST5BUVP64eS2ooacmtP6ZWt9nH7us8OObMLLP6MMGOqUBT0MH%2FiYqDbkDJTQrV2n4QoRo5AFnrdQuHVcKHVzet8Cw8Lwfw%2FWg5Xn7yxQQfpA1Ic44JhYkut15TIrorMCYk%2FIma0jhBPRBRf6DVHnvvKeD1dJOLFhcTUd256znMv1j%2B1h3jnB8sFUq5JeF8WlgnfG6BpY%2BC7UA7b1fKuRDQC8bR5JljRn4jdJzySTg%2FCaOjlMJ4V15%2BI6amtQ8jgMgNa7psynI&X-Amz-Signature=2f877b48f3ad7a1f5f8448ce6d8c0e128ea35b93d1804e348fd5ca7118cd416e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X73OPQSZ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDSVdOJc0lrMuH3eN8Gb0%2Bp8O8QijDSbTlWy7F%2BQB2G8AiEAk12tTZ6SedZAPh8Vm%2FUBxffKwAVe1orjuZGvP5wqylwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIWs8U1AUlA9FX7ASrcA08kzCpTPjNj94YR8BAgDaTylkvNqwXATryWcA%2Bd2tWoFSrrxR6AMAdwtvRSgpzjZFhhBswC%2FkGxCveAyfoPLHN1hie0cKBctVLxTeTS46%2BbanNOHEOHpf%2B5bN4WT0lyAfNdu5MkH1ZGORFV2aAXeIN4RaQzzx%2F2UPMqqcXEGUFZv%2FG%2FbiOeYpoVETcD%2BTlMLUCc6dOIbZasO4lIzUF6iTcJzV4pyrHJvqP9%2BPRgUQC04MBhoZaSvdHCjuRbiV5irGQjJTNYk168A7xi7%2BK2nWXKiAucMi5zpc0G2Ezeprnp5LJklXiD3Dg%2F4sADVaFgKiemjn8Vy%2FvhZLiHRGoQkw2J3vcHmmCg6Xqd1c8%2F6MiwbwjoyRfoLFI6tC10fX9WGHvn7hDrsDD1pJW1f7KoMNAHgKYoVNE%2F0Du87dR8x2c5np%2BoD31jq7RN8L5u07ZmPhhY08jRgXtCdvjJIf453O2F6mDDDbVQFKEcs3ub16TZcuw3s2onMS50Nblr714EDBDxnlJyqJwRCPTAX57M5AsUuUUJwbwxuuOWOx0VjVLKzdfLVWTPtENYEvb85RtssniMwXWXL065lGxKbcxI2GVPnFhST5BUVP64eS2ooacmtP6ZWt9nH7us8OObMLLP6MMGOqUBT0MH%2FiYqDbkDJTQrV2n4QoRo5AFnrdQuHVcKHVzet8Cw8Lwfw%2FWg5Xn7yxQQfpA1Ic44JhYkut15TIrorMCYk%2FIma0jhBPRBRf6DVHnvvKeD1dJOLFhcTUd256znMv1j%2B1h3jnB8sFUq5JeF8WlgnfG6BpY%2BC7UA7b1fKuRDQC8bR5JljRn4jdJzySTg%2FCaOjlMJ4V15%2BI6amtQ8jgMgNa7psynI&X-Amz-Signature=90189b485491cda68cfea5bd3ce5fe49f49d459ee5ab31fa446953dc0b6fa65c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X73OPQSZ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDSVdOJc0lrMuH3eN8Gb0%2Bp8O8QijDSbTlWy7F%2BQB2G8AiEAk12tTZ6SedZAPh8Vm%2FUBxffKwAVe1orjuZGvP5wqylwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIWs8U1AUlA9FX7ASrcA08kzCpTPjNj94YR8BAgDaTylkvNqwXATryWcA%2Bd2tWoFSrrxR6AMAdwtvRSgpzjZFhhBswC%2FkGxCveAyfoPLHN1hie0cKBctVLxTeTS46%2BbanNOHEOHpf%2B5bN4WT0lyAfNdu5MkH1ZGORFV2aAXeIN4RaQzzx%2F2UPMqqcXEGUFZv%2FG%2FbiOeYpoVETcD%2BTlMLUCc6dOIbZasO4lIzUF6iTcJzV4pyrHJvqP9%2BPRgUQC04MBhoZaSvdHCjuRbiV5irGQjJTNYk168A7xi7%2BK2nWXKiAucMi5zpc0G2Ezeprnp5LJklXiD3Dg%2F4sADVaFgKiemjn8Vy%2FvhZLiHRGoQkw2J3vcHmmCg6Xqd1c8%2F6MiwbwjoyRfoLFI6tC10fX9WGHvn7hDrsDD1pJW1f7KoMNAHgKYoVNE%2F0Du87dR8x2c5np%2BoD31jq7RN8L5u07ZmPhhY08jRgXtCdvjJIf453O2F6mDDDbVQFKEcs3ub16TZcuw3s2onMS50Nblr714EDBDxnlJyqJwRCPTAX57M5AsUuUUJwbwxuuOWOx0VjVLKzdfLVWTPtENYEvb85RtssniMwXWXL065lGxKbcxI2GVPnFhST5BUVP64eS2ooacmtP6ZWt9nH7us8OObMLLP6MMGOqUBT0MH%2FiYqDbkDJTQrV2n4QoRo5AFnrdQuHVcKHVzet8Cw8Lwfw%2FWg5Xn7yxQQfpA1Ic44JhYkut15TIrorMCYk%2FIma0jhBPRBRf6DVHnvvKeD1dJOLFhcTUd256znMv1j%2B1h3jnB8sFUq5JeF8WlgnfG6BpY%2BC7UA7b1fKuRDQC8bR5JljRn4jdJzySTg%2FCaOjlMJ4V15%2BI6amtQ8jgMgNa7psynI&X-Amz-Signature=791d49625bb7224a4af5cab6bb6a95f9095c4a6b71254a89affa548fe40d38cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X73OPQSZ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDSVdOJc0lrMuH3eN8Gb0%2Bp8O8QijDSbTlWy7F%2BQB2G8AiEAk12tTZ6SedZAPh8Vm%2FUBxffKwAVe1orjuZGvP5wqylwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIWs8U1AUlA9FX7ASrcA08kzCpTPjNj94YR8BAgDaTylkvNqwXATryWcA%2Bd2tWoFSrrxR6AMAdwtvRSgpzjZFhhBswC%2FkGxCveAyfoPLHN1hie0cKBctVLxTeTS46%2BbanNOHEOHpf%2B5bN4WT0lyAfNdu5MkH1ZGORFV2aAXeIN4RaQzzx%2F2UPMqqcXEGUFZv%2FG%2FbiOeYpoVETcD%2BTlMLUCc6dOIbZasO4lIzUF6iTcJzV4pyrHJvqP9%2BPRgUQC04MBhoZaSvdHCjuRbiV5irGQjJTNYk168A7xi7%2BK2nWXKiAucMi5zpc0G2Ezeprnp5LJklXiD3Dg%2F4sADVaFgKiemjn8Vy%2FvhZLiHRGoQkw2J3vcHmmCg6Xqd1c8%2F6MiwbwjoyRfoLFI6tC10fX9WGHvn7hDrsDD1pJW1f7KoMNAHgKYoVNE%2F0Du87dR8x2c5np%2BoD31jq7RN8L5u07ZmPhhY08jRgXtCdvjJIf453O2F6mDDDbVQFKEcs3ub16TZcuw3s2onMS50Nblr714EDBDxnlJyqJwRCPTAX57M5AsUuUUJwbwxuuOWOx0VjVLKzdfLVWTPtENYEvb85RtssniMwXWXL065lGxKbcxI2GVPnFhST5BUVP64eS2ooacmtP6ZWt9nH7us8OObMLLP6MMGOqUBT0MH%2FiYqDbkDJTQrV2n4QoRo5AFnrdQuHVcKHVzet8Cw8Lwfw%2FWg5Xn7yxQQfpA1Ic44JhYkut15TIrorMCYk%2FIma0jhBPRBRf6DVHnvvKeD1dJOLFhcTUd256znMv1j%2B1h3jnB8sFUq5JeF8WlgnfG6BpY%2BC7UA7b1fKuRDQC8bR5JljRn4jdJzySTg%2FCaOjlMJ4V15%2BI6amtQ8jgMgNa7psynI&X-Amz-Signature=16ae2d8aede7bfde2c520876e7a1b93eb2b52f3bfccd75191eaf9013a634954a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X73OPQSZ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDSVdOJc0lrMuH3eN8Gb0%2Bp8O8QijDSbTlWy7F%2BQB2G8AiEAk12tTZ6SedZAPh8Vm%2FUBxffKwAVe1orjuZGvP5wqylwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIWs8U1AUlA9FX7ASrcA08kzCpTPjNj94YR8BAgDaTylkvNqwXATryWcA%2Bd2tWoFSrrxR6AMAdwtvRSgpzjZFhhBswC%2FkGxCveAyfoPLHN1hie0cKBctVLxTeTS46%2BbanNOHEOHpf%2B5bN4WT0lyAfNdu5MkH1ZGORFV2aAXeIN4RaQzzx%2F2UPMqqcXEGUFZv%2FG%2FbiOeYpoVETcD%2BTlMLUCc6dOIbZasO4lIzUF6iTcJzV4pyrHJvqP9%2BPRgUQC04MBhoZaSvdHCjuRbiV5irGQjJTNYk168A7xi7%2BK2nWXKiAucMi5zpc0G2Ezeprnp5LJklXiD3Dg%2F4sADVaFgKiemjn8Vy%2FvhZLiHRGoQkw2J3vcHmmCg6Xqd1c8%2F6MiwbwjoyRfoLFI6tC10fX9WGHvn7hDrsDD1pJW1f7KoMNAHgKYoVNE%2F0Du87dR8x2c5np%2BoD31jq7RN8L5u07ZmPhhY08jRgXtCdvjJIf453O2F6mDDDbVQFKEcs3ub16TZcuw3s2onMS50Nblr714EDBDxnlJyqJwRCPTAX57M5AsUuUUJwbwxuuOWOx0VjVLKzdfLVWTPtENYEvb85RtssniMwXWXL065lGxKbcxI2GVPnFhST5BUVP64eS2ooacmtP6ZWt9nH7us8OObMLLP6MMGOqUBT0MH%2FiYqDbkDJTQrV2n4QoRo5AFnrdQuHVcKHVzet8Cw8Lwfw%2FWg5Xn7yxQQfpA1Ic44JhYkut15TIrorMCYk%2FIma0jhBPRBRf6DVHnvvKeD1dJOLFhcTUd256znMv1j%2B1h3jnB8sFUq5JeF8WlgnfG6BpY%2BC7UA7b1fKuRDQC8bR5JljRn4jdJzySTg%2FCaOjlMJ4V15%2BI6amtQ8jgMgNa7psynI&X-Amz-Signature=48519f1d9fca18b48ecff8ce3566b60b3e6372af393aa80c8bdd147e80736580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

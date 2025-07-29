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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUYK56ZF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdICLzyFRtwVrPStuLbXaj6NxZ%2FE8uWgvcbwgdJ0RoKAiEAgZEnSCanh%2FVhKBvrE1F4xTdIJ%2FYD%2FBfeW6JoQKk8gKAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDZ6r5l%2FUVFvciyaircA%2FmahQrrSdXRmMBm1G2AFjIZv7FED2z97XTCun0QGE9E2RUUlLAFHHivPFMsgF02j14U31ykeDgBDkVely5znxEL1Difz09PbPEK3H%2B2P8%2Fme%2Futm%2B7k%2Fual2Mmd9oytBM3jtXH8aLk6n%2B0IKio9xOJQF0cRp2v3SYO7frIda1i7%2Bfm3Dofnxg4nTb7D8lkGDtQ6%2FyYIEdq0Cl8xQkyRTnSVjkFjSHPWxEsTzv9cWyjGZSqsABXsf6IB6wTtEELrWcpweVxmpVTUIiRzJU0WqKQZ%2BejR9QtRvXFSJQHmELFZPBmVhpqIqsIquN9rYXnEvTesImWy7wvrwK45cpYO%2BXJ6f%2F7esT%2FHyehO1zDeQv%2BjdPJ5MUEc3qNK3kmnZMF805ikrWbbFw9jw%2F4CVnSr%2FhlK1V%2FYKVgjD2yeF5QtAlwr58pyVkC%2FzyZRXGCiMS9pwDeeBPGXV06FdGBF6JYOsMT5r9Ot3UjdqTmk6n1N%2BHdchlkhaD7VAEpHe0V1mD7LQknOM4sZfXQMrw5ODMDH0GBJ6IjL4H%2FyYiqdVrgTWz8UvAMAsY2TdmBAFm%2F%2FepE4B5Fkprf%2BTwcz9JcEzRNnMND%2BGYldGkzCW0wrP43GfKTl%2BKr%2FKHChuiGyWUdAMMb%2Bo8QGOqUBlZnsWQ%2BbFW3jvZg2nw6aoMjDT%2BdnnV3Gbd8AeBjJTbo7twaNbmO4pJkuIfcF3E6nNYnh6e5CyBjVflFaQVkI0OIRkfnvTM8xO4e%2FqHhDhkk5ZGrzHa1Qii4IsEtP6lRAOrl%2B4NVN9XdZBUDViVacp%2Fueq2djIZLxa4SDKD5Zx8Ucy8Vg%2BPL5N1msjjjNXjL6UymgnfO%2BP9HFiaxDeHZqT47V3NQL&X-Amz-Signature=9b894e03b8e18b64df33988a888e63de689c266259a66f70f187032898e54522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUYK56ZF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdICLzyFRtwVrPStuLbXaj6NxZ%2FE8uWgvcbwgdJ0RoKAiEAgZEnSCanh%2FVhKBvrE1F4xTdIJ%2FYD%2FBfeW6JoQKk8gKAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDZ6r5l%2FUVFvciyaircA%2FmahQrrSdXRmMBm1G2AFjIZv7FED2z97XTCun0QGE9E2RUUlLAFHHivPFMsgF02j14U31ykeDgBDkVely5znxEL1Difz09PbPEK3H%2B2P8%2Fme%2Futm%2B7k%2Fual2Mmd9oytBM3jtXH8aLk6n%2B0IKio9xOJQF0cRp2v3SYO7frIda1i7%2Bfm3Dofnxg4nTb7D8lkGDtQ6%2FyYIEdq0Cl8xQkyRTnSVjkFjSHPWxEsTzv9cWyjGZSqsABXsf6IB6wTtEELrWcpweVxmpVTUIiRzJU0WqKQZ%2BejR9QtRvXFSJQHmELFZPBmVhpqIqsIquN9rYXnEvTesImWy7wvrwK45cpYO%2BXJ6f%2F7esT%2FHyehO1zDeQv%2BjdPJ5MUEc3qNK3kmnZMF805ikrWbbFw9jw%2F4CVnSr%2FhlK1V%2FYKVgjD2yeF5QtAlwr58pyVkC%2FzyZRXGCiMS9pwDeeBPGXV06FdGBF6JYOsMT5r9Ot3UjdqTmk6n1N%2BHdchlkhaD7VAEpHe0V1mD7LQknOM4sZfXQMrw5ODMDH0GBJ6IjL4H%2FyYiqdVrgTWz8UvAMAsY2TdmBAFm%2F%2FepE4B5Fkprf%2BTwcz9JcEzRNnMND%2BGYldGkzCW0wrP43GfKTl%2BKr%2FKHChuiGyWUdAMMb%2Bo8QGOqUBlZnsWQ%2BbFW3jvZg2nw6aoMjDT%2BdnnV3Gbd8AeBjJTbo7twaNbmO4pJkuIfcF3E6nNYnh6e5CyBjVflFaQVkI0OIRkfnvTM8xO4e%2FqHhDhkk5ZGrzHa1Qii4IsEtP6lRAOrl%2B4NVN9XdZBUDViVacp%2Fueq2djIZLxa4SDKD5Zx8Ucy8Vg%2BPL5N1msjjjNXjL6UymgnfO%2BP9HFiaxDeHZqT47V3NQL&X-Amz-Signature=19630e5da98e2639be6643092a2d86d0f2c373583015e8f9225d05640257762d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUYK56ZF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdICLzyFRtwVrPStuLbXaj6NxZ%2FE8uWgvcbwgdJ0RoKAiEAgZEnSCanh%2FVhKBvrE1F4xTdIJ%2FYD%2FBfeW6JoQKk8gKAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDZ6r5l%2FUVFvciyaircA%2FmahQrrSdXRmMBm1G2AFjIZv7FED2z97XTCun0QGE9E2RUUlLAFHHivPFMsgF02j14U31ykeDgBDkVely5znxEL1Difz09PbPEK3H%2B2P8%2Fme%2Futm%2B7k%2Fual2Mmd9oytBM3jtXH8aLk6n%2B0IKio9xOJQF0cRp2v3SYO7frIda1i7%2Bfm3Dofnxg4nTb7D8lkGDtQ6%2FyYIEdq0Cl8xQkyRTnSVjkFjSHPWxEsTzv9cWyjGZSqsABXsf6IB6wTtEELrWcpweVxmpVTUIiRzJU0WqKQZ%2BejR9QtRvXFSJQHmELFZPBmVhpqIqsIquN9rYXnEvTesImWy7wvrwK45cpYO%2BXJ6f%2F7esT%2FHyehO1zDeQv%2BjdPJ5MUEc3qNK3kmnZMF805ikrWbbFw9jw%2F4CVnSr%2FhlK1V%2FYKVgjD2yeF5QtAlwr58pyVkC%2FzyZRXGCiMS9pwDeeBPGXV06FdGBF6JYOsMT5r9Ot3UjdqTmk6n1N%2BHdchlkhaD7VAEpHe0V1mD7LQknOM4sZfXQMrw5ODMDH0GBJ6IjL4H%2FyYiqdVrgTWz8UvAMAsY2TdmBAFm%2F%2FepE4B5Fkprf%2BTwcz9JcEzRNnMND%2BGYldGkzCW0wrP43GfKTl%2BKr%2FKHChuiGyWUdAMMb%2Bo8QGOqUBlZnsWQ%2BbFW3jvZg2nw6aoMjDT%2BdnnV3Gbd8AeBjJTbo7twaNbmO4pJkuIfcF3E6nNYnh6e5CyBjVflFaQVkI0OIRkfnvTM8xO4e%2FqHhDhkk5ZGrzHa1Qii4IsEtP6lRAOrl%2B4NVN9XdZBUDViVacp%2Fueq2djIZLxa4SDKD5Zx8Ucy8Vg%2BPL5N1msjjjNXjL6UymgnfO%2BP9HFiaxDeHZqT47V3NQL&X-Amz-Signature=d21ec73e81395816f2af2a40a4bc0d30241e1758c2577845dce3c0309ed2b30d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUYK56ZF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdICLzyFRtwVrPStuLbXaj6NxZ%2FE8uWgvcbwgdJ0RoKAiEAgZEnSCanh%2FVhKBvrE1F4xTdIJ%2FYD%2FBfeW6JoQKk8gKAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDZ6r5l%2FUVFvciyaircA%2FmahQrrSdXRmMBm1G2AFjIZv7FED2z97XTCun0QGE9E2RUUlLAFHHivPFMsgF02j14U31ykeDgBDkVely5znxEL1Difz09PbPEK3H%2B2P8%2Fme%2Futm%2B7k%2Fual2Mmd9oytBM3jtXH8aLk6n%2B0IKio9xOJQF0cRp2v3SYO7frIda1i7%2Bfm3Dofnxg4nTb7D8lkGDtQ6%2FyYIEdq0Cl8xQkyRTnSVjkFjSHPWxEsTzv9cWyjGZSqsABXsf6IB6wTtEELrWcpweVxmpVTUIiRzJU0WqKQZ%2BejR9QtRvXFSJQHmELFZPBmVhpqIqsIquN9rYXnEvTesImWy7wvrwK45cpYO%2BXJ6f%2F7esT%2FHyehO1zDeQv%2BjdPJ5MUEc3qNK3kmnZMF805ikrWbbFw9jw%2F4CVnSr%2FhlK1V%2FYKVgjD2yeF5QtAlwr58pyVkC%2FzyZRXGCiMS9pwDeeBPGXV06FdGBF6JYOsMT5r9Ot3UjdqTmk6n1N%2BHdchlkhaD7VAEpHe0V1mD7LQknOM4sZfXQMrw5ODMDH0GBJ6IjL4H%2FyYiqdVrgTWz8UvAMAsY2TdmBAFm%2F%2FepE4B5Fkprf%2BTwcz9JcEzRNnMND%2BGYldGkzCW0wrP43GfKTl%2BKr%2FKHChuiGyWUdAMMb%2Bo8QGOqUBlZnsWQ%2BbFW3jvZg2nw6aoMjDT%2BdnnV3Gbd8AeBjJTbo7twaNbmO4pJkuIfcF3E6nNYnh6e5CyBjVflFaQVkI0OIRkfnvTM8xO4e%2FqHhDhkk5ZGrzHa1Qii4IsEtP6lRAOrl%2B4NVN9XdZBUDViVacp%2Fueq2djIZLxa4SDKD5Zx8Ucy8Vg%2BPL5N1msjjjNXjL6UymgnfO%2BP9HFiaxDeHZqT47V3NQL&X-Amz-Signature=f76e79490a570e8a38a1c08a9da16a1c6ebfc7ee4e4f49df2757ce926d0490ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUYK56ZF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdICLzyFRtwVrPStuLbXaj6NxZ%2FE8uWgvcbwgdJ0RoKAiEAgZEnSCanh%2FVhKBvrE1F4xTdIJ%2FYD%2FBfeW6JoQKk8gKAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDZ6r5l%2FUVFvciyaircA%2FmahQrrSdXRmMBm1G2AFjIZv7FED2z97XTCun0QGE9E2RUUlLAFHHivPFMsgF02j14U31ykeDgBDkVely5znxEL1Difz09PbPEK3H%2B2P8%2Fme%2Futm%2B7k%2Fual2Mmd9oytBM3jtXH8aLk6n%2B0IKio9xOJQF0cRp2v3SYO7frIda1i7%2Bfm3Dofnxg4nTb7D8lkGDtQ6%2FyYIEdq0Cl8xQkyRTnSVjkFjSHPWxEsTzv9cWyjGZSqsABXsf6IB6wTtEELrWcpweVxmpVTUIiRzJU0WqKQZ%2BejR9QtRvXFSJQHmELFZPBmVhpqIqsIquN9rYXnEvTesImWy7wvrwK45cpYO%2BXJ6f%2F7esT%2FHyehO1zDeQv%2BjdPJ5MUEc3qNK3kmnZMF805ikrWbbFw9jw%2F4CVnSr%2FhlK1V%2FYKVgjD2yeF5QtAlwr58pyVkC%2FzyZRXGCiMS9pwDeeBPGXV06FdGBF6JYOsMT5r9Ot3UjdqTmk6n1N%2BHdchlkhaD7VAEpHe0V1mD7LQknOM4sZfXQMrw5ODMDH0GBJ6IjL4H%2FyYiqdVrgTWz8UvAMAsY2TdmBAFm%2F%2FepE4B5Fkprf%2BTwcz9JcEzRNnMND%2BGYldGkzCW0wrP43GfKTl%2BKr%2FKHChuiGyWUdAMMb%2Bo8QGOqUBlZnsWQ%2BbFW3jvZg2nw6aoMjDT%2BdnnV3Gbd8AeBjJTbo7twaNbmO4pJkuIfcF3E6nNYnh6e5CyBjVflFaQVkI0OIRkfnvTM8xO4e%2FqHhDhkk5ZGrzHa1Qii4IsEtP6lRAOrl%2B4NVN9XdZBUDViVacp%2Fueq2djIZLxa4SDKD5Zx8Ucy8Vg%2BPL5N1msjjjNXjL6UymgnfO%2BP9HFiaxDeHZqT47V3NQL&X-Amz-Signature=90fc712533df4f3f02beda4da2a94e88be0a2ded59c135f94248deaa3fd2441c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

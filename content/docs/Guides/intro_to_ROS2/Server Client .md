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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CT2UJYN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIAUJg7Dwg0%2B23uagA0Xy6VXCrYCwu5QzEiqGp1tf4M1WAiBPJO79PIa0qcEty2xiNNVAK8elabxNivEUgC3Kjy%2BuNCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM4YPNLwD1K7G7xMWnKtwDacoHGrjZr2ZRHM1Eg8Tmz8jahkx%2BkL6jz%2FokwjuWKOxHu7NzmW%2BXaL4T7jAz39MH1k5zsjQsT3tNxO8YP24IJzD9AzwE1c0%2FA0Em91ryJ3G3DPAQFrTIo1FrlxYafYkSIscspZKb9obxHGH778QEi6xNU6dVXbBzuCBx35i644VoXm9brd8QzT%2FL1KrlmrWAroFJ0ufvu%2BEaSWNz4BmHdJxYD9nZLJ0%2B4%2FlgIXZXcIAWXE5SppifPDgouTPd%2FtJv9f4wZQwT8UC4VBuze1cYcUV85hvjCNZzj%2BpMA0%2BGcxJx9%2B2tPDAEVWb2I3Z35PYDztLlM4L%2BPbmV9v4AmVVsk13TRa0Efy91YQ%2BtC9VY%2Bg3vCjH%2F7blqf%2FJjsAuGumdiPiWcY6bulszn5Gy7DTf5w27y3dRJIOAWhbe8PPA01EnUk4gtGg%2BEsXuu6B7ZEsb%2FMcbz5Sblvq%2BWIN9FyoDWc3snAg8FMNduBqaYuMuX8AyHyn4ZIBkpEwuDDhM5szvfhDQ7lQaGUiT4qjFwNTLC9VE6A%2BURUlQodAiqsKx99E4SXNgGeT%2Bv5o99dyfXG%2BcROatl2eNUC1vgyKLA5Vxfg0c2IEjGPj8OfPn0RLELtbOjhWMlY0Nrq3U%2Bcpgwtsv2wgY6pgHHizxn%2FApK%2B9Fn4OdkDhXqSAcY9HVOy8wlciqpUR45qZFiVLvEfG7iAWOq6IjPhGkZX42FaUSCqZZhSRqMnpE3mzAHbB9qPIFlSrFrvFiENLqyXMmpxOX9OhXN1gV5NckyLA9jOIcJxRBLbBLbagKFwxhSjYlefsTCvwiuliGQzMk2TiFlAM578A0C6HcIW%2Fpkn5fPEhAofTTMOmZ%2B7C4PO%2FoeWtAl&X-Amz-Signature=6361bca2461134088d640e2b421f4a74f9bb995700b83c4fe0ab163d37d98c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CT2UJYN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIAUJg7Dwg0%2B23uagA0Xy6VXCrYCwu5QzEiqGp1tf4M1WAiBPJO79PIa0qcEty2xiNNVAK8elabxNivEUgC3Kjy%2BuNCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM4YPNLwD1K7G7xMWnKtwDacoHGrjZr2ZRHM1Eg8Tmz8jahkx%2BkL6jz%2FokwjuWKOxHu7NzmW%2BXaL4T7jAz39MH1k5zsjQsT3tNxO8YP24IJzD9AzwE1c0%2FA0Em91ryJ3G3DPAQFrTIo1FrlxYafYkSIscspZKb9obxHGH778QEi6xNU6dVXbBzuCBx35i644VoXm9brd8QzT%2FL1KrlmrWAroFJ0ufvu%2BEaSWNz4BmHdJxYD9nZLJ0%2B4%2FlgIXZXcIAWXE5SppifPDgouTPd%2FtJv9f4wZQwT8UC4VBuze1cYcUV85hvjCNZzj%2BpMA0%2BGcxJx9%2B2tPDAEVWb2I3Z35PYDztLlM4L%2BPbmV9v4AmVVsk13TRa0Efy91YQ%2BtC9VY%2Bg3vCjH%2F7blqf%2FJjsAuGumdiPiWcY6bulszn5Gy7DTf5w27y3dRJIOAWhbe8PPA01EnUk4gtGg%2BEsXuu6B7ZEsb%2FMcbz5Sblvq%2BWIN9FyoDWc3snAg8FMNduBqaYuMuX8AyHyn4ZIBkpEwuDDhM5szvfhDQ7lQaGUiT4qjFwNTLC9VE6A%2BURUlQodAiqsKx99E4SXNgGeT%2Bv5o99dyfXG%2BcROatl2eNUC1vgyKLA5Vxfg0c2IEjGPj8OfPn0RLELtbOjhWMlY0Nrq3U%2Bcpgwtsv2wgY6pgHHizxn%2FApK%2B9Fn4OdkDhXqSAcY9HVOy8wlciqpUR45qZFiVLvEfG7iAWOq6IjPhGkZX42FaUSCqZZhSRqMnpE3mzAHbB9qPIFlSrFrvFiENLqyXMmpxOX9OhXN1gV5NckyLA9jOIcJxRBLbBLbagKFwxhSjYlefsTCvwiuliGQzMk2TiFlAM578A0C6HcIW%2Fpkn5fPEhAofTTMOmZ%2B7C4PO%2FoeWtAl&X-Amz-Signature=eacbfb9a880490b0aa482cba9037e6f27f7a4cee00244d97aa08a2734c3f8dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CT2UJYN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIAUJg7Dwg0%2B23uagA0Xy6VXCrYCwu5QzEiqGp1tf4M1WAiBPJO79PIa0qcEty2xiNNVAK8elabxNivEUgC3Kjy%2BuNCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM4YPNLwD1K7G7xMWnKtwDacoHGrjZr2ZRHM1Eg8Tmz8jahkx%2BkL6jz%2FokwjuWKOxHu7NzmW%2BXaL4T7jAz39MH1k5zsjQsT3tNxO8YP24IJzD9AzwE1c0%2FA0Em91ryJ3G3DPAQFrTIo1FrlxYafYkSIscspZKb9obxHGH778QEi6xNU6dVXbBzuCBx35i644VoXm9brd8QzT%2FL1KrlmrWAroFJ0ufvu%2BEaSWNz4BmHdJxYD9nZLJ0%2B4%2FlgIXZXcIAWXE5SppifPDgouTPd%2FtJv9f4wZQwT8UC4VBuze1cYcUV85hvjCNZzj%2BpMA0%2BGcxJx9%2B2tPDAEVWb2I3Z35PYDztLlM4L%2BPbmV9v4AmVVsk13TRa0Efy91YQ%2BtC9VY%2Bg3vCjH%2F7blqf%2FJjsAuGumdiPiWcY6bulszn5Gy7DTf5w27y3dRJIOAWhbe8PPA01EnUk4gtGg%2BEsXuu6B7ZEsb%2FMcbz5Sblvq%2BWIN9FyoDWc3snAg8FMNduBqaYuMuX8AyHyn4ZIBkpEwuDDhM5szvfhDQ7lQaGUiT4qjFwNTLC9VE6A%2BURUlQodAiqsKx99E4SXNgGeT%2Bv5o99dyfXG%2BcROatl2eNUC1vgyKLA5Vxfg0c2IEjGPj8OfPn0RLELtbOjhWMlY0Nrq3U%2Bcpgwtsv2wgY6pgHHizxn%2FApK%2B9Fn4OdkDhXqSAcY9HVOy8wlciqpUR45qZFiVLvEfG7iAWOq6IjPhGkZX42FaUSCqZZhSRqMnpE3mzAHbB9qPIFlSrFrvFiENLqyXMmpxOX9OhXN1gV5NckyLA9jOIcJxRBLbBLbagKFwxhSjYlefsTCvwiuliGQzMk2TiFlAM578A0C6HcIW%2Fpkn5fPEhAofTTMOmZ%2B7C4PO%2FoeWtAl&X-Amz-Signature=4320726b6d5453beca976db193ac503e9158332b0923e9483948121aff691949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CT2UJYN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIAUJg7Dwg0%2B23uagA0Xy6VXCrYCwu5QzEiqGp1tf4M1WAiBPJO79PIa0qcEty2xiNNVAK8elabxNivEUgC3Kjy%2BuNCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM4YPNLwD1K7G7xMWnKtwDacoHGrjZr2ZRHM1Eg8Tmz8jahkx%2BkL6jz%2FokwjuWKOxHu7NzmW%2BXaL4T7jAz39MH1k5zsjQsT3tNxO8YP24IJzD9AzwE1c0%2FA0Em91ryJ3G3DPAQFrTIo1FrlxYafYkSIscspZKb9obxHGH778QEi6xNU6dVXbBzuCBx35i644VoXm9brd8QzT%2FL1KrlmrWAroFJ0ufvu%2BEaSWNz4BmHdJxYD9nZLJ0%2B4%2FlgIXZXcIAWXE5SppifPDgouTPd%2FtJv9f4wZQwT8UC4VBuze1cYcUV85hvjCNZzj%2BpMA0%2BGcxJx9%2B2tPDAEVWb2I3Z35PYDztLlM4L%2BPbmV9v4AmVVsk13TRa0Efy91YQ%2BtC9VY%2Bg3vCjH%2F7blqf%2FJjsAuGumdiPiWcY6bulszn5Gy7DTf5w27y3dRJIOAWhbe8PPA01EnUk4gtGg%2BEsXuu6B7ZEsb%2FMcbz5Sblvq%2BWIN9FyoDWc3snAg8FMNduBqaYuMuX8AyHyn4ZIBkpEwuDDhM5szvfhDQ7lQaGUiT4qjFwNTLC9VE6A%2BURUlQodAiqsKx99E4SXNgGeT%2Bv5o99dyfXG%2BcROatl2eNUC1vgyKLA5Vxfg0c2IEjGPj8OfPn0RLELtbOjhWMlY0Nrq3U%2Bcpgwtsv2wgY6pgHHizxn%2FApK%2B9Fn4OdkDhXqSAcY9HVOy8wlciqpUR45qZFiVLvEfG7iAWOq6IjPhGkZX42FaUSCqZZhSRqMnpE3mzAHbB9qPIFlSrFrvFiENLqyXMmpxOX9OhXN1gV5NckyLA9jOIcJxRBLbBLbagKFwxhSjYlefsTCvwiuliGQzMk2TiFlAM578A0C6HcIW%2Fpkn5fPEhAofTTMOmZ%2B7C4PO%2FoeWtAl&X-Amz-Signature=be49d6f670e5b2e2552686039701daea455a1417ffa43c6c07ee0fdd3deea7ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CT2UJYN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIAUJg7Dwg0%2B23uagA0Xy6VXCrYCwu5QzEiqGp1tf4M1WAiBPJO79PIa0qcEty2xiNNVAK8elabxNivEUgC3Kjy%2BuNCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM4YPNLwD1K7G7xMWnKtwDacoHGrjZr2ZRHM1Eg8Tmz8jahkx%2BkL6jz%2FokwjuWKOxHu7NzmW%2BXaL4T7jAz39MH1k5zsjQsT3tNxO8YP24IJzD9AzwE1c0%2FA0Em91ryJ3G3DPAQFrTIo1FrlxYafYkSIscspZKb9obxHGH778QEi6xNU6dVXbBzuCBx35i644VoXm9brd8QzT%2FL1KrlmrWAroFJ0ufvu%2BEaSWNz4BmHdJxYD9nZLJ0%2B4%2FlgIXZXcIAWXE5SppifPDgouTPd%2FtJv9f4wZQwT8UC4VBuze1cYcUV85hvjCNZzj%2BpMA0%2BGcxJx9%2B2tPDAEVWb2I3Z35PYDztLlM4L%2BPbmV9v4AmVVsk13TRa0Efy91YQ%2BtC9VY%2Bg3vCjH%2F7blqf%2FJjsAuGumdiPiWcY6bulszn5Gy7DTf5w27y3dRJIOAWhbe8PPA01EnUk4gtGg%2BEsXuu6B7ZEsb%2FMcbz5Sblvq%2BWIN9FyoDWc3snAg8FMNduBqaYuMuX8AyHyn4ZIBkpEwuDDhM5szvfhDQ7lQaGUiT4qjFwNTLC9VE6A%2BURUlQodAiqsKx99E4SXNgGeT%2Bv5o99dyfXG%2BcROatl2eNUC1vgyKLA5Vxfg0c2IEjGPj8OfPn0RLELtbOjhWMlY0Nrq3U%2Bcpgwtsv2wgY6pgHHizxn%2FApK%2B9Fn4OdkDhXqSAcY9HVOy8wlciqpUR45qZFiVLvEfG7iAWOq6IjPhGkZX42FaUSCqZZhSRqMnpE3mzAHbB9qPIFlSrFrvFiENLqyXMmpxOX9OhXN1gV5NckyLA9jOIcJxRBLbBLbagKFwxhSjYlefsTCvwiuliGQzMk2TiFlAM578A0C6HcIW%2Fpkn5fPEhAofTTMOmZ%2B7C4PO%2FoeWtAl&X-Amz-Signature=264badc6b3dde9e4c7115f80de80fa7679f9eda913730c6436d5434761e9abe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI27XUN7%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgAMQNqWo6gcIXBHyAG3%2BVIaFw%2Fo8NDyjvg7hUR1xe8gIhAPmP40bB0u8T5ukPGhbHmQYJ%2FCaAC7ptvgCfxoEOq3KhKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQBY8VrAmrGPslG3Eq3AOfJ1oSwyEbtQS4ArUvNDU8iAcCjYqbgbTJI6kyL5ouh4jcthnByVXkODy%2FrysiOV4pdX7nHM9sUlAZw66CaK3a2U4J24BN7wZ0MZj0bSapbKEDUkah2o%2FOXoaW%2Bj0YYrqowwrmzRQmY9AiexgIGCX1qNg59JgipqPjgOth21E4DRdO3xSfldlgqpU98MIIzXFz7JlFYDE%2FLluvyqfO3oRN1zCHDGO1m1c1xpLUu5KbKLWxZ4pFiiBfC1ezLr4e3dJNcMFl77yVmPw68rXxtp4pixk%2FkZr%2BPWbqSPBycwb0R175SfgpI0lsVCy9ScBqoD6pV8IVvqflOvp3%2BCd6YRhATFCLXVHyPOJNe5RohjdSgVRvnYFKaLEaxXn4ysUlXgvkRUFnL9TMQDj5Xrk98iR72p47NVBResCaqexgnRXMQ7rZEcmsHQnxYiiJ75ZrlQgMN0Hf87sEtd33ulvmiABf6%2BKJjzflPngJQFzEEWruVNZyhKOwX1%2FsWs6NDTmTNm%2FAbW%2BpdNsJoeiKlXKPNuZvpN4wLPXuiKFMIU1%2BN42sZNMSIzUnqMMcQl8ISTqVgR01Qrd0RmhhOar%2FYd01a160pgj%2BDYoF2%2BD1CloWfqq7%2Btz%2FIN0PWjUEe0w4HDCnzYnDBjqkAadfToEIsTnKt6duC%2FelUSa0J%2BRp5U4KBiMwiIpYFIa%2FZ0Bd4FSKGib3NVPZZWU%2FHNPcHMdljLXz%2BVqaGqoPgOC9R0Ar5MI2KrxqOb%2FM6dFD1L9iWUoB0ckUHVc0a%2BPSYz3rY7yzVAQemMgnVF3TnKxHXZg39YQve1%2FAxwK5g5bhbT%2BnVsOZwLP47mw66upuhZCbA0sdp%2BB9Q0cKiC%2FyCLODmxGS&X-Amz-Signature=5b16c66c68567c7c80ba713a45ecb644d47cc39c3c168e8d59f223acf8dd887f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI27XUN7%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgAMQNqWo6gcIXBHyAG3%2BVIaFw%2Fo8NDyjvg7hUR1xe8gIhAPmP40bB0u8T5ukPGhbHmQYJ%2FCaAC7ptvgCfxoEOq3KhKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQBY8VrAmrGPslG3Eq3AOfJ1oSwyEbtQS4ArUvNDU8iAcCjYqbgbTJI6kyL5ouh4jcthnByVXkODy%2FrysiOV4pdX7nHM9sUlAZw66CaK3a2U4J24BN7wZ0MZj0bSapbKEDUkah2o%2FOXoaW%2Bj0YYrqowwrmzRQmY9AiexgIGCX1qNg59JgipqPjgOth21E4DRdO3xSfldlgqpU98MIIzXFz7JlFYDE%2FLluvyqfO3oRN1zCHDGO1m1c1xpLUu5KbKLWxZ4pFiiBfC1ezLr4e3dJNcMFl77yVmPw68rXxtp4pixk%2FkZr%2BPWbqSPBycwb0R175SfgpI0lsVCy9ScBqoD6pV8IVvqflOvp3%2BCd6YRhATFCLXVHyPOJNe5RohjdSgVRvnYFKaLEaxXn4ysUlXgvkRUFnL9TMQDj5Xrk98iR72p47NVBResCaqexgnRXMQ7rZEcmsHQnxYiiJ75ZrlQgMN0Hf87sEtd33ulvmiABf6%2BKJjzflPngJQFzEEWruVNZyhKOwX1%2FsWs6NDTmTNm%2FAbW%2BpdNsJoeiKlXKPNuZvpN4wLPXuiKFMIU1%2BN42sZNMSIzUnqMMcQl8ISTqVgR01Qrd0RmhhOar%2FYd01a160pgj%2BDYoF2%2BD1CloWfqq7%2Btz%2FIN0PWjUEe0w4HDCnzYnDBjqkAadfToEIsTnKt6duC%2FelUSa0J%2BRp5U4KBiMwiIpYFIa%2FZ0Bd4FSKGib3NVPZZWU%2FHNPcHMdljLXz%2BVqaGqoPgOC9R0Ar5MI2KrxqOb%2FM6dFD1L9iWUoB0ckUHVc0a%2BPSYz3rY7yzVAQemMgnVF3TnKxHXZg39YQve1%2FAxwK5g5bhbT%2BnVsOZwLP47mw66upuhZCbA0sdp%2BB9Q0cKiC%2FyCLODmxGS&X-Amz-Signature=000d86cbec80b922477ad282e39c3fc51c6d0889bff25b0d0015ccfcd94a94e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI27XUN7%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgAMQNqWo6gcIXBHyAG3%2BVIaFw%2Fo8NDyjvg7hUR1xe8gIhAPmP40bB0u8T5ukPGhbHmQYJ%2FCaAC7ptvgCfxoEOq3KhKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQBY8VrAmrGPslG3Eq3AOfJ1oSwyEbtQS4ArUvNDU8iAcCjYqbgbTJI6kyL5ouh4jcthnByVXkODy%2FrysiOV4pdX7nHM9sUlAZw66CaK3a2U4J24BN7wZ0MZj0bSapbKEDUkah2o%2FOXoaW%2Bj0YYrqowwrmzRQmY9AiexgIGCX1qNg59JgipqPjgOth21E4DRdO3xSfldlgqpU98MIIzXFz7JlFYDE%2FLluvyqfO3oRN1zCHDGO1m1c1xpLUu5KbKLWxZ4pFiiBfC1ezLr4e3dJNcMFl77yVmPw68rXxtp4pixk%2FkZr%2BPWbqSPBycwb0R175SfgpI0lsVCy9ScBqoD6pV8IVvqflOvp3%2BCd6YRhATFCLXVHyPOJNe5RohjdSgVRvnYFKaLEaxXn4ysUlXgvkRUFnL9TMQDj5Xrk98iR72p47NVBResCaqexgnRXMQ7rZEcmsHQnxYiiJ75ZrlQgMN0Hf87sEtd33ulvmiABf6%2BKJjzflPngJQFzEEWruVNZyhKOwX1%2FsWs6NDTmTNm%2FAbW%2BpdNsJoeiKlXKPNuZvpN4wLPXuiKFMIU1%2BN42sZNMSIzUnqMMcQl8ISTqVgR01Qrd0RmhhOar%2FYd01a160pgj%2BDYoF2%2BD1CloWfqq7%2Btz%2FIN0PWjUEe0w4HDCnzYnDBjqkAadfToEIsTnKt6duC%2FelUSa0J%2BRp5U4KBiMwiIpYFIa%2FZ0Bd4FSKGib3NVPZZWU%2FHNPcHMdljLXz%2BVqaGqoPgOC9R0Ar5MI2KrxqOb%2FM6dFD1L9iWUoB0ckUHVc0a%2BPSYz3rY7yzVAQemMgnVF3TnKxHXZg39YQve1%2FAxwK5g5bhbT%2BnVsOZwLP47mw66upuhZCbA0sdp%2BB9Q0cKiC%2FyCLODmxGS&X-Amz-Signature=98eb627a17ff4261d806a627355adc76372a2237edfabe24cf934b7907101595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI27XUN7%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgAMQNqWo6gcIXBHyAG3%2BVIaFw%2Fo8NDyjvg7hUR1xe8gIhAPmP40bB0u8T5ukPGhbHmQYJ%2FCaAC7ptvgCfxoEOq3KhKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQBY8VrAmrGPslG3Eq3AOfJ1oSwyEbtQS4ArUvNDU8iAcCjYqbgbTJI6kyL5ouh4jcthnByVXkODy%2FrysiOV4pdX7nHM9sUlAZw66CaK3a2U4J24BN7wZ0MZj0bSapbKEDUkah2o%2FOXoaW%2Bj0YYrqowwrmzRQmY9AiexgIGCX1qNg59JgipqPjgOth21E4DRdO3xSfldlgqpU98MIIzXFz7JlFYDE%2FLluvyqfO3oRN1zCHDGO1m1c1xpLUu5KbKLWxZ4pFiiBfC1ezLr4e3dJNcMFl77yVmPw68rXxtp4pixk%2FkZr%2BPWbqSPBycwb0R175SfgpI0lsVCy9ScBqoD6pV8IVvqflOvp3%2BCd6YRhATFCLXVHyPOJNe5RohjdSgVRvnYFKaLEaxXn4ysUlXgvkRUFnL9TMQDj5Xrk98iR72p47NVBResCaqexgnRXMQ7rZEcmsHQnxYiiJ75ZrlQgMN0Hf87sEtd33ulvmiABf6%2BKJjzflPngJQFzEEWruVNZyhKOwX1%2FsWs6NDTmTNm%2FAbW%2BpdNsJoeiKlXKPNuZvpN4wLPXuiKFMIU1%2BN42sZNMSIzUnqMMcQl8ISTqVgR01Qrd0RmhhOar%2FYd01a160pgj%2BDYoF2%2BD1CloWfqq7%2Btz%2FIN0PWjUEe0w4HDCnzYnDBjqkAadfToEIsTnKt6duC%2FelUSa0J%2BRp5U4KBiMwiIpYFIa%2FZ0Bd4FSKGib3NVPZZWU%2FHNPcHMdljLXz%2BVqaGqoPgOC9R0Ar5MI2KrxqOb%2FM6dFD1L9iWUoB0ckUHVc0a%2BPSYz3rY7yzVAQemMgnVF3TnKxHXZg39YQve1%2FAxwK5g5bhbT%2BnVsOZwLP47mw66upuhZCbA0sdp%2BB9Q0cKiC%2FyCLODmxGS&X-Amz-Signature=24c216243c15039c04c9cfe651ebe60f389c9e9dcfcda68fc2742ad5e6b87ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI27XUN7%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgAMQNqWo6gcIXBHyAG3%2BVIaFw%2Fo8NDyjvg7hUR1xe8gIhAPmP40bB0u8T5ukPGhbHmQYJ%2FCaAC7ptvgCfxoEOq3KhKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQBY8VrAmrGPslG3Eq3AOfJ1oSwyEbtQS4ArUvNDU8iAcCjYqbgbTJI6kyL5ouh4jcthnByVXkODy%2FrysiOV4pdX7nHM9sUlAZw66CaK3a2U4J24BN7wZ0MZj0bSapbKEDUkah2o%2FOXoaW%2Bj0YYrqowwrmzRQmY9AiexgIGCX1qNg59JgipqPjgOth21E4DRdO3xSfldlgqpU98MIIzXFz7JlFYDE%2FLluvyqfO3oRN1zCHDGO1m1c1xpLUu5KbKLWxZ4pFiiBfC1ezLr4e3dJNcMFl77yVmPw68rXxtp4pixk%2FkZr%2BPWbqSPBycwb0R175SfgpI0lsVCy9ScBqoD6pV8IVvqflOvp3%2BCd6YRhATFCLXVHyPOJNe5RohjdSgVRvnYFKaLEaxXn4ysUlXgvkRUFnL9TMQDj5Xrk98iR72p47NVBResCaqexgnRXMQ7rZEcmsHQnxYiiJ75ZrlQgMN0Hf87sEtd33ulvmiABf6%2BKJjzflPngJQFzEEWruVNZyhKOwX1%2FsWs6NDTmTNm%2FAbW%2BpdNsJoeiKlXKPNuZvpN4wLPXuiKFMIU1%2BN42sZNMSIzUnqMMcQl8ISTqVgR01Qrd0RmhhOar%2FYd01a160pgj%2BDYoF2%2BD1CloWfqq7%2Btz%2FIN0PWjUEe0w4HDCnzYnDBjqkAadfToEIsTnKt6duC%2FelUSa0J%2BRp5U4KBiMwiIpYFIa%2FZ0Bd4FSKGib3NVPZZWU%2FHNPcHMdljLXz%2BVqaGqoPgOC9R0Ar5MI2KrxqOb%2FM6dFD1L9iWUoB0ckUHVc0a%2BPSYz3rY7yzVAQemMgnVF3TnKxHXZg39YQve1%2FAxwK5g5bhbT%2BnVsOZwLP47mw66upuhZCbA0sdp%2BB9Q0cKiC%2FyCLODmxGS&X-Amz-Signature=5272ef5fa33074cdf39ab3c36338a089d489f1edc484b0bb7f1e9336a6d82cf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

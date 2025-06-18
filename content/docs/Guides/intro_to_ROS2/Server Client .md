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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SWWYFWV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZTKja%2FRqxUZ1GE17IfxHlFU%2BdwjRCDyXRj38vbytQOAiAsOKNQ8pzfT9Lm8VLDhOG1BpkzVmf5NIniONnGLtoQAyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy3Sv4eGWji4XXpr5KtwDF8bL50z1jcYdiVSEP5kvA%2FrpvO%2FRPkC43nxFr7P7mT%2FtUkVSOk4R131FFuCfvOFU1jcYCumUbSaA9veed99FlXtRadcb8qNkFCGD7RQFqzheNrME%2Foj6Wvph0I%2FNJJxF5DzjXIa6yP1XqW6FSdQfZlRpHJExtFyb9fiBJL6V1EcVT1htLML3oYkhfeqYz4Y8KNEbdrHxCt9QUWbC%2BouccByF7Mm36jQMZeDPthn9N5HfbwP8yeL2JYYsLrsyBAly8Tmwzw7ZfbVBFGQuVARhAxkD5qxg89pgMPQDx43IwUBZfcsAXtJRXyCXC%2BJEOS4tZMI76ZVIfEZOS1LlbbxxrKhcIlkUUUZARC31S1rVoQD3RfybK5iPxXcv2iKHdFHaiZ%2BtfLHZmUhkH%2Bhn9xmvLDUKYHJ%2FAb7Ybk2ylg%2FRdN2EnjfzXDIVXD%2BzOHeOLD4fuWf9ul4GXMqg36zkWH%2FxCAsiXM2VrMMkyWGkTgjpoux11OGVFMpW%2BWMF03X9pi3o8yR1cmIJqz0c2%2BvMvvZm7%2BPYZD%2FtXW%2BAN2Ahl%2BziVg%2BYrKUOEH6YFJ1Q76U77VvW%2FmyZfXyD%2FLynXbuF54gT2CngquIsvmQWNiZIL3xdsBH99TyBsXw20cnFwv0w%2BaLJwgY6pgHNUzRBuFjffIPyZB2%2BmT6tL%2B5rVoDX2V0APZ9hjjolx54VrDud2a9NCu9E51YDD3YNtoDcAy5eyxWPNBpQnJSgSrTGYNpoFag2wj2PqFfLnwaPD6K%2FV99UBJHUtxGmDAD8ZoEB22lTT%2FDIl8mVOoLknbjGottdYytlSH87GfVHG6iU0gxRDqmlyB%2BiyMfvl4uwW9C2zPnRNhllKWsFGJzCLy0lta1K&X-Amz-Signature=82c21bbef35c1235b000c060278231a47c6bd4b7349346a4e3963fa7ea1bdde6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SWWYFWV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZTKja%2FRqxUZ1GE17IfxHlFU%2BdwjRCDyXRj38vbytQOAiAsOKNQ8pzfT9Lm8VLDhOG1BpkzVmf5NIniONnGLtoQAyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy3Sv4eGWji4XXpr5KtwDF8bL50z1jcYdiVSEP5kvA%2FrpvO%2FRPkC43nxFr7P7mT%2FtUkVSOk4R131FFuCfvOFU1jcYCumUbSaA9veed99FlXtRadcb8qNkFCGD7RQFqzheNrME%2Foj6Wvph0I%2FNJJxF5DzjXIa6yP1XqW6FSdQfZlRpHJExtFyb9fiBJL6V1EcVT1htLML3oYkhfeqYz4Y8KNEbdrHxCt9QUWbC%2BouccByF7Mm36jQMZeDPthn9N5HfbwP8yeL2JYYsLrsyBAly8Tmwzw7ZfbVBFGQuVARhAxkD5qxg89pgMPQDx43IwUBZfcsAXtJRXyCXC%2BJEOS4tZMI76ZVIfEZOS1LlbbxxrKhcIlkUUUZARC31S1rVoQD3RfybK5iPxXcv2iKHdFHaiZ%2BtfLHZmUhkH%2Bhn9xmvLDUKYHJ%2FAb7Ybk2ylg%2FRdN2EnjfzXDIVXD%2BzOHeOLD4fuWf9ul4GXMqg36zkWH%2FxCAsiXM2VrMMkyWGkTgjpoux11OGVFMpW%2BWMF03X9pi3o8yR1cmIJqz0c2%2BvMvvZm7%2BPYZD%2FtXW%2BAN2Ahl%2BziVg%2BYrKUOEH6YFJ1Q76U77VvW%2FmyZfXyD%2FLynXbuF54gT2CngquIsvmQWNiZIL3xdsBH99TyBsXw20cnFwv0w%2BaLJwgY6pgHNUzRBuFjffIPyZB2%2BmT6tL%2B5rVoDX2V0APZ9hjjolx54VrDud2a9NCu9E51YDD3YNtoDcAy5eyxWPNBpQnJSgSrTGYNpoFag2wj2PqFfLnwaPD6K%2FV99UBJHUtxGmDAD8ZoEB22lTT%2FDIl8mVOoLknbjGottdYytlSH87GfVHG6iU0gxRDqmlyB%2BiyMfvl4uwW9C2zPnRNhllKWsFGJzCLy0lta1K&X-Amz-Signature=6cc96eebaff363e555e1a761a08b135f137fb2cffb5ad5f2e72522bdf8596ff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SWWYFWV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZTKja%2FRqxUZ1GE17IfxHlFU%2BdwjRCDyXRj38vbytQOAiAsOKNQ8pzfT9Lm8VLDhOG1BpkzVmf5NIniONnGLtoQAyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy3Sv4eGWji4XXpr5KtwDF8bL50z1jcYdiVSEP5kvA%2FrpvO%2FRPkC43nxFr7P7mT%2FtUkVSOk4R131FFuCfvOFU1jcYCumUbSaA9veed99FlXtRadcb8qNkFCGD7RQFqzheNrME%2Foj6Wvph0I%2FNJJxF5DzjXIa6yP1XqW6FSdQfZlRpHJExtFyb9fiBJL6V1EcVT1htLML3oYkhfeqYz4Y8KNEbdrHxCt9QUWbC%2BouccByF7Mm36jQMZeDPthn9N5HfbwP8yeL2JYYsLrsyBAly8Tmwzw7ZfbVBFGQuVARhAxkD5qxg89pgMPQDx43IwUBZfcsAXtJRXyCXC%2BJEOS4tZMI76ZVIfEZOS1LlbbxxrKhcIlkUUUZARC31S1rVoQD3RfybK5iPxXcv2iKHdFHaiZ%2BtfLHZmUhkH%2Bhn9xmvLDUKYHJ%2FAb7Ybk2ylg%2FRdN2EnjfzXDIVXD%2BzOHeOLD4fuWf9ul4GXMqg36zkWH%2FxCAsiXM2VrMMkyWGkTgjpoux11OGVFMpW%2BWMF03X9pi3o8yR1cmIJqz0c2%2BvMvvZm7%2BPYZD%2FtXW%2BAN2Ahl%2BziVg%2BYrKUOEH6YFJ1Q76U77VvW%2FmyZfXyD%2FLynXbuF54gT2CngquIsvmQWNiZIL3xdsBH99TyBsXw20cnFwv0w%2BaLJwgY6pgHNUzRBuFjffIPyZB2%2BmT6tL%2B5rVoDX2V0APZ9hjjolx54VrDud2a9NCu9E51YDD3YNtoDcAy5eyxWPNBpQnJSgSrTGYNpoFag2wj2PqFfLnwaPD6K%2FV99UBJHUtxGmDAD8ZoEB22lTT%2FDIl8mVOoLknbjGottdYytlSH87GfVHG6iU0gxRDqmlyB%2BiyMfvl4uwW9C2zPnRNhllKWsFGJzCLy0lta1K&X-Amz-Signature=758337879c493aea5a0ea692e05105529a0e45e76c0cfe35f8e19f36d54e80c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SWWYFWV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZTKja%2FRqxUZ1GE17IfxHlFU%2BdwjRCDyXRj38vbytQOAiAsOKNQ8pzfT9Lm8VLDhOG1BpkzVmf5NIniONnGLtoQAyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy3Sv4eGWji4XXpr5KtwDF8bL50z1jcYdiVSEP5kvA%2FrpvO%2FRPkC43nxFr7P7mT%2FtUkVSOk4R131FFuCfvOFU1jcYCumUbSaA9veed99FlXtRadcb8qNkFCGD7RQFqzheNrME%2Foj6Wvph0I%2FNJJxF5DzjXIa6yP1XqW6FSdQfZlRpHJExtFyb9fiBJL6V1EcVT1htLML3oYkhfeqYz4Y8KNEbdrHxCt9QUWbC%2BouccByF7Mm36jQMZeDPthn9N5HfbwP8yeL2JYYsLrsyBAly8Tmwzw7ZfbVBFGQuVARhAxkD5qxg89pgMPQDx43IwUBZfcsAXtJRXyCXC%2BJEOS4tZMI76ZVIfEZOS1LlbbxxrKhcIlkUUUZARC31S1rVoQD3RfybK5iPxXcv2iKHdFHaiZ%2BtfLHZmUhkH%2Bhn9xmvLDUKYHJ%2FAb7Ybk2ylg%2FRdN2EnjfzXDIVXD%2BzOHeOLD4fuWf9ul4GXMqg36zkWH%2FxCAsiXM2VrMMkyWGkTgjpoux11OGVFMpW%2BWMF03X9pi3o8yR1cmIJqz0c2%2BvMvvZm7%2BPYZD%2FtXW%2BAN2Ahl%2BziVg%2BYrKUOEH6YFJ1Q76U77VvW%2FmyZfXyD%2FLynXbuF54gT2CngquIsvmQWNiZIL3xdsBH99TyBsXw20cnFwv0w%2BaLJwgY6pgHNUzRBuFjffIPyZB2%2BmT6tL%2B5rVoDX2V0APZ9hjjolx54VrDud2a9NCu9E51YDD3YNtoDcAy5eyxWPNBpQnJSgSrTGYNpoFag2wj2PqFfLnwaPD6K%2FV99UBJHUtxGmDAD8ZoEB22lTT%2FDIl8mVOoLknbjGottdYytlSH87GfVHG6iU0gxRDqmlyB%2BiyMfvl4uwW9C2zPnRNhllKWsFGJzCLy0lta1K&X-Amz-Signature=43cdd04b6b912a1765353d5ce24fca8413d1f51cad68fc614f858cacdfed6c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SWWYFWV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZTKja%2FRqxUZ1GE17IfxHlFU%2BdwjRCDyXRj38vbytQOAiAsOKNQ8pzfT9Lm8VLDhOG1BpkzVmf5NIniONnGLtoQAyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy3Sv4eGWji4XXpr5KtwDF8bL50z1jcYdiVSEP5kvA%2FrpvO%2FRPkC43nxFr7P7mT%2FtUkVSOk4R131FFuCfvOFU1jcYCumUbSaA9veed99FlXtRadcb8qNkFCGD7RQFqzheNrME%2Foj6Wvph0I%2FNJJxF5DzjXIa6yP1XqW6FSdQfZlRpHJExtFyb9fiBJL6V1EcVT1htLML3oYkhfeqYz4Y8KNEbdrHxCt9QUWbC%2BouccByF7Mm36jQMZeDPthn9N5HfbwP8yeL2JYYsLrsyBAly8Tmwzw7ZfbVBFGQuVARhAxkD5qxg89pgMPQDx43IwUBZfcsAXtJRXyCXC%2BJEOS4tZMI76ZVIfEZOS1LlbbxxrKhcIlkUUUZARC31S1rVoQD3RfybK5iPxXcv2iKHdFHaiZ%2BtfLHZmUhkH%2Bhn9xmvLDUKYHJ%2FAb7Ybk2ylg%2FRdN2EnjfzXDIVXD%2BzOHeOLD4fuWf9ul4GXMqg36zkWH%2FxCAsiXM2VrMMkyWGkTgjpoux11OGVFMpW%2BWMF03X9pi3o8yR1cmIJqz0c2%2BvMvvZm7%2BPYZD%2FtXW%2BAN2Ahl%2BziVg%2BYrKUOEH6YFJ1Q76U77VvW%2FmyZfXyD%2FLynXbuF54gT2CngquIsvmQWNiZIL3xdsBH99TyBsXw20cnFwv0w%2BaLJwgY6pgHNUzRBuFjffIPyZB2%2BmT6tL%2B5rVoDX2V0APZ9hjjolx54VrDud2a9NCu9E51YDD3YNtoDcAy5eyxWPNBpQnJSgSrTGYNpoFag2wj2PqFfLnwaPD6K%2FV99UBJHUtxGmDAD8ZoEB22lTT%2FDIl8mVOoLknbjGottdYytlSH87GfVHG6iU0gxRDqmlyB%2BiyMfvl4uwW9C2zPnRNhllKWsFGJzCLy0lta1K&X-Amz-Signature=a1e1663283c0f7d14f829f556d7d6a6da56878f08173dfa186f9975a8acd01cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

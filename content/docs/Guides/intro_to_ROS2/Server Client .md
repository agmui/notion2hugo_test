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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU4GQZLZ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC6l1JQxyMCoVKMf6R752PBJJSVW67DUXD3vtrOHIN2wIgVqEUOLCqw4dtwuWUvPhHTS5rA02TQcB7Dw5mv7rBCdcq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPlgNugr%2BMpwlWNmHCrcA%2FioYCboZ%2FgUKfoJIxKUPcLxaBbzR%2FhXscYZGHGPXc%2BIPyfq0daeY8kDHlch%2BqbmC4ND87THmhjxYAoqz2S1aDM02wD%2BBBAtGz2UbRQzqrTiB8We90zHTpoeENV2MhtZHDg17xgAdBC1KQBdmGVzYoEJWLMiayjjtrzwj1fwNo47QJ3zx4bR%2B1I%2FnkHju5G6MZLjnhdu1QpehUufIS%2FUPEuI7Q5doY7LxO83dIyMjNojwUnmb5gr9iyyD%2F%2FAOuFTPYathqi77WekdWdWpR6qr99HSiJOPZtbgIt0gPVvB21as7Q4oU1uA43W4RfDo4VtmjCq5ripLDOV8C4MTDTPm0L1T72yQ0kL7Tdlei%2BrjsNHPgJ45j%2FzR98SuVowdwu0bU6PZWpDBXNQu%2FLH6BeZE3%2Be2WsmY0cYDy%2FxsJOazCShxcv8fZOy5TNxoTVHcf5nVrx7Fig%2FmE2EpMg0mDzQqE77pgTgXwDGAcu91PQU4Bhs7DNnYAzHj2S8CNAQ0Xfg2vXCPS6nuf9bKqGmlMgqQggtkgiKP6iWkIx7DciwZt5cYCV%2BfgZuSJe00l4nYIkzPFZU%2B6RvecOFlVdHKUwhXkM4ub5SbCTMEm7RWopzl%2Bm0J4EtDZXHDTHmD%2Bh6MPbmqMEGOqUBfSW%2FIEG83EN5SS%2BkuTrJhBHa9d9kcKlV1V8wcskcIhOl61ppNMrEJf0Bagpblp%2BVscFnFT2l1aWmyKfdyi%2F1TfDLZ0aqiz%2BVfYrjEdzBGj4DK7Y1pLJjKVttbBqDD%2Bb%2BKi1488Mcv9gK%2BEE99BmtdlrDXdmTeDb5KCPSjZ76mlRi7zALSShlmumxcLkaXmd6BMdGSlPTL4lcf6DiLZ4hkTWcFNrj&X-Amz-Signature=2d4481e7f83717ebd2b5d4cbab3cc2952d26c38edf227077c026b1cfd665f08f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU4GQZLZ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC6l1JQxyMCoVKMf6R752PBJJSVW67DUXD3vtrOHIN2wIgVqEUOLCqw4dtwuWUvPhHTS5rA02TQcB7Dw5mv7rBCdcq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPlgNugr%2BMpwlWNmHCrcA%2FioYCboZ%2FgUKfoJIxKUPcLxaBbzR%2FhXscYZGHGPXc%2BIPyfq0daeY8kDHlch%2BqbmC4ND87THmhjxYAoqz2S1aDM02wD%2BBBAtGz2UbRQzqrTiB8We90zHTpoeENV2MhtZHDg17xgAdBC1KQBdmGVzYoEJWLMiayjjtrzwj1fwNo47QJ3zx4bR%2B1I%2FnkHju5G6MZLjnhdu1QpehUufIS%2FUPEuI7Q5doY7LxO83dIyMjNojwUnmb5gr9iyyD%2F%2FAOuFTPYathqi77WekdWdWpR6qr99HSiJOPZtbgIt0gPVvB21as7Q4oU1uA43W4RfDo4VtmjCq5ripLDOV8C4MTDTPm0L1T72yQ0kL7Tdlei%2BrjsNHPgJ45j%2FzR98SuVowdwu0bU6PZWpDBXNQu%2FLH6BeZE3%2Be2WsmY0cYDy%2FxsJOazCShxcv8fZOy5TNxoTVHcf5nVrx7Fig%2FmE2EpMg0mDzQqE77pgTgXwDGAcu91PQU4Bhs7DNnYAzHj2S8CNAQ0Xfg2vXCPS6nuf9bKqGmlMgqQggtkgiKP6iWkIx7DciwZt5cYCV%2BfgZuSJe00l4nYIkzPFZU%2B6RvecOFlVdHKUwhXkM4ub5SbCTMEm7RWopzl%2Bm0J4EtDZXHDTHmD%2Bh6MPbmqMEGOqUBfSW%2FIEG83EN5SS%2BkuTrJhBHa9d9kcKlV1V8wcskcIhOl61ppNMrEJf0Bagpblp%2BVscFnFT2l1aWmyKfdyi%2F1TfDLZ0aqiz%2BVfYrjEdzBGj4DK7Y1pLJjKVttbBqDD%2Bb%2BKi1488Mcv9gK%2BEE99BmtdlrDXdmTeDb5KCPSjZ76mlRi7zALSShlmumxcLkaXmd6BMdGSlPTL4lcf6DiLZ4hkTWcFNrj&X-Amz-Signature=4ebc29ed28b96fd6da7b3eaa7bc23d444facb72488b450dadc06851620fb4cd9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU4GQZLZ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC6l1JQxyMCoVKMf6R752PBJJSVW67DUXD3vtrOHIN2wIgVqEUOLCqw4dtwuWUvPhHTS5rA02TQcB7Dw5mv7rBCdcq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPlgNugr%2BMpwlWNmHCrcA%2FioYCboZ%2FgUKfoJIxKUPcLxaBbzR%2FhXscYZGHGPXc%2BIPyfq0daeY8kDHlch%2BqbmC4ND87THmhjxYAoqz2S1aDM02wD%2BBBAtGz2UbRQzqrTiB8We90zHTpoeENV2MhtZHDg17xgAdBC1KQBdmGVzYoEJWLMiayjjtrzwj1fwNo47QJ3zx4bR%2B1I%2FnkHju5G6MZLjnhdu1QpehUufIS%2FUPEuI7Q5doY7LxO83dIyMjNojwUnmb5gr9iyyD%2F%2FAOuFTPYathqi77WekdWdWpR6qr99HSiJOPZtbgIt0gPVvB21as7Q4oU1uA43W4RfDo4VtmjCq5ripLDOV8C4MTDTPm0L1T72yQ0kL7Tdlei%2BrjsNHPgJ45j%2FzR98SuVowdwu0bU6PZWpDBXNQu%2FLH6BeZE3%2Be2WsmY0cYDy%2FxsJOazCShxcv8fZOy5TNxoTVHcf5nVrx7Fig%2FmE2EpMg0mDzQqE77pgTgXwDGAcu91PQU4Bhs7DNnYAzHj2S8CNAQ0Xfg2vXCPS6nuf9bKqGmlMgqQggtkgiKP6iWkIx7DciwZt5cYCV%2BfgZuSJe00l4nYIkzPFZU%2B6RvecOFlVdHKUwhXkM4ub5SbCTMEm7RWopzl%2Bm0J4EtDZXHDTHmD%2Bh6MPbmqMEGOqUBfSW%2FIEG83EN5SS%2BkuTrJhBHa9d9kcKlV1V8wcskcIhOl61ppNMrEJf0Bagpblp%2BVscFnFT2l1aWmyKfdyi%2F1TfDLZ0aqiz%2BVfYrjEdzBGj4DK7Y1pLJjKVttbBqDD%2Bb%2BKi1488Mcv9gK%2BEE99BmtdlrDXdmTeDb5KCPSjZ76mlRi7zALSShlmumxcLkaXmd6BMdGSlPTL4lcf6DiLZ4hkTWcFNrj&X-Amz-Signature=9b1816a2a4d120fdfe39c5041ae804e9c2aacae309ec4db80b69896ba86cb5a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU4GQZLZ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC6l1JQxyMCoVKMf6R752PBJJSVW67DUXD3vtrOHIN2wIgVqEUOLCqw4dtwuWUvPhHTS5rA02TQcB7Dw5mv7rBCdcq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPlgNugr%2BMpwlWNmHCrcA%2FioYCboZ%2FgUKfoJIxKUPcLxaBbzR%2FhXscYZGHGPXc%2BIPyfq0daeY8kDHlch%2BqbmC4ND87THmhjxYAoqz2S1aDM02wD%2BBBAtGz2UbRQzqrTiB8We90zHTpoeENV2MhtZHDg17xgAdBC1KQBdmGVzYoEJWLMiayjjtrzwj1fwNo47QJ3zx4bR%2B1I%2FnkHju5G6MZLjnhdu1QpehUufIS%2FUPEuI7Q5doY7LxO83dIyMjNojwUnmb5gr9iyyD%2F%2FAOuFTPYathqi77WekdWdWpR6qr99HSiJOPZtbgIt0gPVvB21as7Q4oU1uA43W4RfDo4VtmjCq5ripLDOV8C4MTDTPm0L1T72yQ0kL7Tdlei%2BrjsNHPgJ45j%2FzR98SuVowdwu0bU6PZWpDBXNQu%2FLH6BeZE3%2Be2WsmY0cYDy%2FxsJOazCShxcv8fZOy5TNxoTVHcf5nVrx7Fig%2FmE2EpMg0mDzQqE77pgTgXwDGAcu91PQU4Bhs7DNnYAzHj2S8CNAQ0Xfg2vXCPS6nuf9bKqGmlMgqQggtkgiKP6iWkIx7DciwZt5cYCV%2BfgZuSJe00l4nYIkzPFZU%2B6RvecOFlVdHKUwhXkM4ub5SbCTMEm7RWopzl%2Bm0J4EtDZXHDTHmD%2Bh6MPbmqMEGOqUBfSW%2FIEG83EN5SS%2BkuTrJhBHa9d9kcKlV1V8wcskcIhOl61ppNMrEJf0Bagpblp%2BVscFnFT2l1aWmyKfdyi%2F1TfDLZ0aqiz%2BVfYrjEdzBGj4DK7Y1pLJjKVttbBqDD%2Bb%2BKi1488Mcv9gK%2BEE99BmtdlrDXdmTeDb5KCPSjZ76mlRi7zALSShlmumxcLkaXmd6BMdGSlPTL4lcf6DiLZ4hkTWcFNrj&X-Amz-Signature=d0b2b5d41f1aeeafe989356ee92da01ae4f60d1ec527fae5a968b089a1d63bd2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU4GQZLZ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC6l1JQxyMCoVKMf6R752PBJJSVW67DUXD3vtrOHIN2wIgVqEUOLCqw4dtwuWUvPhHTS5rA02TQcB7Dw5mv7rBCdcq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPlgNugr%2BMpwlWNmHCrcA%2FioYCboZ%2FgUKfoJIxKUPcLxaBbzR%2FhXscYZGHGPXc%2BIPyfq0daeY8kDHlch%2BqbmC4ND87THmhjxYAoqz2S1aDM02wD%2BBBAtGz2UbRQzqrTiB8We90zHTpoeENV2MhtZHDg17xgAdBC1KQBdmGVzYoEJWLMiayjjtrzwj1fwNo47QJ3zx4bR%2B1I%2FnkHju5G6MZLjnhdu1QpehUufIS%2FUPEuI7Q5doY7LxO83dIyMjNojwUnmb5gr9iyyD%2F%2FAOuFTPYathqi77WekdWdWpR6qr99HSiJOPZtbgIt0gPVvB21as7Q4oU1uA43W4RfDo4VtmjCq5ripLDOV8C4MTDTPm0L1T72yQ0kL7Tdlei%2BrjsNHPgJ45j%2FzR98SuVowdwu0bU6PZWpDBXNQu%2FLH6BeZE3%2Be2WsmY0cYDy%2FxsJOazCShxcv8fZOy5TNxoTVHcf5nVrx7Fig%2FmE2EpMg0mDzQqE77pgTgXwDGAcu91PQU4Bhs7DNnYAzHj2S8CNAQ0Xfg2vXCPS6nuf9bKqGmlMgqQggtkgiKP6iWkIx7DciwZt5cYCV%2BfgZuSJe00l4nYIkzPFZU%2B6RvecOFlVdHKUwhXkM4ub5SbCTMEm7RWopzl%2Bm0J4EtDZXHDTHmD%2Bh6MPbmqMEGOqUBfSW%2FIEG83EN5SS%2BkuTrJhBHa9d9kcKlV1V8wcskcIhOl61ppNMrEJf0Bagpblp%2BVscFnFT2l1aWmyKfdyi%2F1TfDLZ0aqiz%2BVfYrjEdzBGj4DK7Y1pLJjKVttbBqDD%2Bb%2BKi1488Mcv9gK%2BEE99BmtdlrDXdmTeDb5KCPSjZ76mlRi7zALSShlmumxcLkaXmd6BMdGSlPTL4lcf6DiLZ4hkTWcFNrj&X-Amz-Signature=6d185b08068927d3f5f077da78f0d4cc0e6115224c953efa9e59e11efd12aef6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

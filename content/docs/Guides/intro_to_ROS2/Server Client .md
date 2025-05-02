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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3B42J75%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFIfl4Dl8%2BBiENF6oi9Nwb95ChIcepmHcxMunvTVAj84AiEA6Tfo6ZDFna0Uh36j54%2B5Vt7z0ZTTTTzjn6JMf3qzmLQqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJu%2Folj9wW8v%2FIFybCrcAyIBoidOqwkcR1IcOWbw%2FgMkxnYfQNG1MCodbaQFlk7ND4vwkAdwm%2BohILl4bP8ICqYtg96dcEeioV0faJ3jfzNf2jRX4qWus3NUnydYG8nnCi0nqb71UFoFW9PwhpqNRjd8llYzhDLbrZzowt7SVFZZGxu%2BAKSgYSlstKi6bstDY%2Bm5QVr3LhN4ThRTAsCQpFSh2tx9WJzwgqiIDsXy%2Ft6lCoKBklvExxomRK3kizl0crW1pNLRPLMLMDXPds%2BN%2FDA%2BS5WyFXNMtRbYjTcUvXD4B%2BS9CyVU3tYbs%2F7Y3yDa4m4a02V8o%2FHe1LytK14OdghCTxJtIu%2FyCyUpXg%2BvB5iGby1rYwjKmevbP865dRPFKkhDH89g%2FNmo%2FYTIAvZ%2FhyhLbtoVxlcWMXaA3FlHuVCrkYoDSvTMgkYEgwx5tRNtdBXPeSFkOk1EGz8kYgBy4C%2F9P6fD13b%2FpoAKJiu6OmRfbdNRpCdymFKzo2Po6pTh5uv0ssgA0sh%2FvLwe75uYhg%2FL11MxI4rBtBKfQkebnTBBatz8YcJqUy7Qcn%2BIwdwM8T3cQi7lkKgfVPQwp2s8%2FWr%2Bu2IXQmCwtZ2wLJbXLaBN2yewU0Md1vjPeUd7I5zjZatl1fuZj3LY5R81MLbZ0cAGOqUBf%2FUPgb6001HubI%2Byl9msed6TnZELhqV1dYgt76u1zY9aqJi6CnwVLA6woGy9t6MhvjkRtStlvdttOMcuHZ%2B2dkbCu%2Fzu2CoUIzmtP3RSwUj76WlVy38JjattKWPtVCMgSXgnCj9TYxSuPc7nBgknTDMcJR6KOwvVfUzsBhu1%2FpgAesk3BTubSsF88aLOW0FMvWG8GTe%2BCz%2BCrJwHoPFRjXqd3L8k&X-Amz-Signature=e0299f1a2e0085f68ae966cf46fc93efc095732a28885cf03d55c1c6bfbed3ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3B42J75%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFIfl4Dl8%2BBiENF6oi9Nwb95ChIcepmHcxMunvTVAj84AiEA6Tfo6ZDFna0Uh36j54%2B5Vt7z0ZTTTTzjn6JMf3qzmLQqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJu%2Folj9wW8v%2FIFybCrcAyIBoidOqwkcR1IcOWbw%2FgMkxnYfQNG1MCodbaQFlk7ND4vwkAdwm%2BohILl4bP8ICqYtg96dcEeioV0faJ3jfzNf2jRX4qWus3NUnydYG8nnCi0nqb71UFoFW9PwhpqNRjd8llYzhDLbrZzowt7SVFZZGxu%2BAKSgYSlstKi6bstDY%2Bm5QVr3LhN4ThRTAsCQpFSh2tx9WJzwgqiIDsXy%2Ft6lCoKBklvExxomRK3kizl0crW1pNLRPLMLMDXPds%2BN%2FDA%2BS5WyFXNMtRbYjTcUvXD4B%2BS9CyVU3tYbs%2F7Y3yDa4m4a02V8o%2FHe1LytK14OdghCTxJtIu%2FyCyUpXg%2BvB5iGby1rYwjKmevbP865dRPFKkhDH89g%2FNmo%2FYTIAvZ%2FhyhLbtoVxlcWMXaA3FlHuVCrkYoDSvTMgkYEgwx5tRNtdBXPeSFkOk1EGz8kYgBy4C%2F9P6fD13b%2FpoAKJiu6OmRfbdNRpCdymFKzo2Po6pTh5uv0ssgA0sh%2FvLwe75uYhg%2FL11MxI4rBtBKfQkebnTBBatz8YcJqUy7Qcn%2BIwdwM8T3cQi7lkKgfVPQwp2s8%2FWr%2Bu2IXQmCwtZ2wLJbXLaBN2yewU0Md1vjPeUd7I5zjZatl1fuZj3LY5R81MLbZ0cAGOqUBf%2FUPgb6001HubI%2Byl9msed6TnZELhqV1dYgt76u1zY9aqJi6CnwVLA6woGy9t6MhvjkRtStlvdttOMcuHZ%2B2dkbCu%2Fzu2CoUIzmtP3RSwUj76WlVy38JjattKWPtVCMgSXgnCj9TYxSuPc7nBgknTDMcJR6KOwvVfUzsBhu1%2FpgAesk3BTubSsF88aLOW0FMvWG8GTe%2BCz%2BCrJwHoPFRjXqd3L8k&X-Amz-Signature=e7e943b4b88746c408768d2b7e775d0a576e157fd3308a230c3f8a574e0136b4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3B42J75%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFIfl4Dl8%2BBiENF6oi9Nwb95ChIcepmHcxMunvTVAj84AiEA6Tfo6ZDFna0Uh36j54%2B5Vt7z0ZTTTTzjn6JMf3qzmLQqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJu%2Folj9wW8v%2FIFybCrcAyIBoidOqwkcR1IcOWbw%2FgMkxnYfQNG1MCodbaQFlk7ND4vwkAdwm%2BohILl4bP8ICqYtg96dcEeioV0faJ3jfzNf2jRX4qWus3NUnydYG8nnCi0nqb71UFoFW9PwhpqNRjd8llYzhDLbrZzowt7SVFZZGxu%2BAKSgYSlstKi6bstDY%2Bm5QVr3LhN4ThRTAsCQpFSh2tx9WJzwgqiIDsXy%2Ft6lCoKBklvExxomRK3kizl0crW1pNLRPLMLMDXPds%2BN%2FDA%2BS5WyFXNMtRbYjTcUvXD4B%2BS9CyVU3tYbs%2F7Y3yDa4m4a02V8o%2FHe1LytK14OdghCTxJtIu%2FyCyUpXg%2BvB5iGby1rYwjKmevbP865dRPFKkhDH89g%2FNmo%2FYTIAvZ%2FhyhLbtoVxlcWMXaA3FlHuVCrkYoDSvTMgkYEgwx5tRNtdBXPeSFkOk1EGz8kYgBy4C%2F9P6fD13b%2FpoAKJiu6OmRfbdNRpCdymFKzo2Po6pTh5uv0ssgA0sh%2FvLwe75uYhg%2FL11MxI4rBtBKfQkebnTBBatz8YcJqUy7Qcn%2BIwdwM8T3cQi7lkKgfVPQwp2s8%2FWr%2Bu2IXQmCwtZ2wLJbXLaBN2yewU0Md1vjPeUd7I5zjZatl1fuZj3LY5R81MLbZ0cAGOqUBf%2FUPgb6001HubI%2Byl9msed6TnZELhqV1dYgt76u1zY9aqJi6CnwVLA6woGy9t6MhvjkRtStlvdttOMcuHZ%2B2dkbCu%2Fzu2CoUIzmtP3RSwUj76WlVy38JjattKWPtVCMgSXgnCj9TYxSuPc7nBgknTDMcJR6KOwvVfUzsBhu1%2FpgAesk3BTubSsF88aLOW0FMvWG8GTe%2BCz%2BCrJwHoPFRjXqd3L8k&X-Amz-Signature=2fdead8714b1cb8ddc93167fca06ce3168b567ec0735fc9469d1356c0436ee62&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3B42J75%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFIfl4Dl8%2BBiENF6oi9Nwb95ChIcepmHcxMunvTVAj84AiEA6Tfo6ZDFna0Uh36j54%2B5Vt7z0ZTTTTzjn6JMf3qzmLQqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJu%2Folj9wW8v%2FIFybCrcAyIBoidOqwkcR1IcOWbw%2FgMkxnYfQNG1MCodbaQFlk7ND4vwkAdwm%2BohILl4bP8ICqYtg96dcEeioV0faJ3jfzNf2jRX4qWus3NUnydYG8nnCi0nqb71UFoFW9PwhpqNRjd8llYzhDLbrZzowt7SVFZZGxu%2BAKSgYSlstKi6bstDY%2Bm5QVr3LhN4ThRTAsCQpFSh2tx9WJzwgqiIDsXy%2Ft6lCoKBklvExxomRK3kizl0crW1pNLRPLMLMDXPds%2BN%2FDA%2BS5WyFXNMtRbYjTcUvXD4B%2BS9CyVU3tYbs%2F7Y3yDa4m4a02V8o%2FHe1LytK14OdghCTxJtIu%2FyCyUpXg%2BvB5iGby1rYwjKmevbP865dRPFKkhDH89g%2FNmo%2FYTIAvZ%2FhyhLbtoVxlcWMXaA3FlHuVCrkYoDSvTMgkYEgwx5tRNtdBXPeSFkOk1EGz8kYgBy4C%2F9P6fD13b%2FpoAKJiu6OmRfbdNRpCdymFKzo2Po6pTh5uv0ssgA0sh%2FvLwe75uYhg%2FL11MxI4rBtBKfQkebnTBBatz8YcJqUy7Qcn%2BIwdwM8T3cQi7lkKgfVPQwp2s8%2FWr%2Bu2IXQmCwtZ2wLJbXLaBN2yewU0Md1vjPeUd7I5zjZatl1fuZj3LY5R81MLbZ0cAGOqUBf%2FUPgb6001HubI%2Byl9msed6TnZELhqV1dYgt76u1zY9aqJi6CnwVLA6woGy9t6MhvjkRtStlvdttOMcuHZ%2B2dkbCu%2Fzu2CoUIzmtP3RSwUj76WlVy38JjattKWPtVCMgSXgnCj9TYxSuPc7nBgknTDMcJR6KOwvVfUzsBhu1%2FpgAesk3BTubSsF88aLOW0FMvWG8GTe%2BCz%2BCrJwHoPFRjXqd3L8k&X-Amz-Signature=6a9d49406001ed523d3aeccc7ed15323cc3d2eb03bdb0d1d6a64c68d01c7c81e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3B42J75%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIFIfl4Dl8%2BBiENF6oi9Nwb95ChIcepmHcxMunvTVAj84AiEA6Tfo6ZDFna0Uh36j54%2B5Vt7z0ZTTTTzjn6JMf3qzmLQqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJu%2Folj9wW8v%2FIFybCrcAyIBoidOqwkcR1IcOWbw%2FgMkxnYfQNG1MCodbaQFlk7ND4vwkAdwm%2BohILl4bP8ICqYtg96dcEeioV0faJ3jfzNf2jRX4qWus3NUnydYG8nnCi0nqb71UFoFW9PwhpqNRjd8llYzhDLbrZzowt7SVFZZGxu%2BAKSgYSlstKi6bstDY%2Bm5QVr3LhN4ThRTAsCQpFSh2tx9WJzwgqiIDsXy%2Ft6lCoKBklvExxomRK3kizl0crW1pNLRPLMLMDXPds%2BN%2FDA%2BS5WyFXNMtRbYjTcUvXD4B%2BS9CyVU3tYbs%2F7Y3yDa4m4a02V8o%2FHe1LytK14OdghCTxJtIu%2FyCyUpXg%2BvB5iGby1rYwjKmevbP865dRPFKkhDH89g%2FNmo%2FYTIAvZ%2FhyhLbtoVxlcWMXaA3FlHuVCrkYoDSvTMgkYEgwx5tRNtdBXPeSFkOk1EGz8kYgBy4C%2F9P6fD13b%2FpoAKJiu6OmRfbdNRpCdymFKzo2Po6pTh5uv0ssgA0sh%2FvLwe75uYhg%2FL11MxI4rBtBKfQkebnTBBatz8YcJqUy7Qcn%2BIwdwM8T3cQi7lkKgfVPQwp2s8%2FWr%2Bu2IXQmCwtZ2wLJbXLaBN2yewU0Md1vjPeUd7I5zjZatl1fuZj3LY5R81MLbZ0cAGOqUBf%2FUPgb6001HubI%2Byl9msed6TnZELhqV1dYgt76u1zY9aqJi6CnwVLA6woGy9t6MhvjkRtStlvdttOMcuHZ%2B2dkbCu%2Fzu2CoUIzmtP3RSwUj76WlVy38JjattKWPtVCMgSXgnCj9TYxSuPc7nBgknTDMcJR6KOwvVfUzsBhu1%2FpgAesk3BTubSsF88aLOW0FMvWG8GTe%2BCz%2BCrJwHoPFRjXqd3L8k&X-Amz-Signature=07fddc1fb4475526046d8e69e967f5832a3d33e1cd13ad0336620dc928c85753&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

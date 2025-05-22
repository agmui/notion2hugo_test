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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZIBA2LH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCZTPQ2VZpqnuzGIztw4pXrD%2F7liQe3RlLOwamhWtQiQAIhAOEUETulkhJaS%2BzlIeiynM%2F%2BS%2B4%2BlLycb5OhwFSrGQtTKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq%2BVbdQt%2BGYxFBk1Mq3AM0FzfueL6Uv8B8iIcmou4uC9ht3iq8AJ2qjg4DoRMpTVfB6OryXV0j5g0iDhAST7HHtaSg7cfLecyEQwFCbOnE5bQU0ZJFodDNdOMZjZIXeMi8xkQxAmdeTGcc3pU0KBS%2FsvTvPgsb0yG2dPeDA7Ast1WANpwvHbsUDTxlvm2m4NxqdnvtKaaFiFtSb0addqIybRL8dSiPc%2BFADONQ%2BQfLHVzFfyUKNG9OOddxJ%2FNQFBimTvs0C9SwpjC%2FMHWCtbCa5Pn54yYJ2dDomJMbGLBuDyPQOvZGhhY4Vvx%2Bo4bn2cYh20yDvGRxq%2BHHHiRmjimynMgttA546KPaQ1tZaAkbJaotmaOqxJ5awmVJsotW7ZHSLW3OZaRKn%2FGkbEMJzbxY4JXZ8EUFvD6pXhigBt6SEVsj%2BjMdSxHpbRKdZx%2Bh7g9rob6i%2FLVz87pdto4wvAkBSXzWK%2Bo1m4iGfArbMudBY7vqFMBDBezqLTHkL8vwtoLVpOQLHrx0ZSkhBSoZJTBh9lk5vMyJHfdcefhkLEQ8TseGq%2FHFmqv06cykQzGMPLs1gkl7q9cBEZn%2Bm9XcKE8jO9z0Ku3qBhVmoxbej15NQcIf%2B5xX7pFVmUd%2FnXSSMgKoBbjlS%2BEfXveryzCRxbzBBjqkAaOUpAZ3z2EjwFZHYnNlhScAMhOiQeWcw%2BG6mRepRTyD6yCAxmqDdltUjEiKWFVeNSdeU1OM96cm9P2q7Wb7o1f3EjDTaK5jHzJRZs5FxszSdTALpeJRepRlQhexmKh1N4XMJBwWE06ajP2bNA7%2BTMsYmBpEYl2cBH8LoUV4Vy5e4BPwM3NvwDPjaXAZcLR9xkf6e2laT2evkYSwpjJYWTs9iiz5&X-Amz-Signature=b352386845f640517f27bfb2399266ec7b1d068ce43a9822f8eed75c54326d96&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZIBA2LH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCZTPQ2VZpqnuzGIztw4pXrD%2F7liQe3RlLOwamhWtQiQAIhAOEUETulkhJaS%2BzlIeiynM%2F%2BS%2B4%2BlLycb5OhwFSrGQtTKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq%2BVbdQt%2BGYxFBk1Mq3AM0FzfueL6Uv8B8iIcmou4uC9ht3iq8AJ2qjg4DoRMpTVfB6OryXV0j5g0iDhAST7HHtaSg7cfLecyEQwFCbOnE5bQU0ZJFodDNdOMZjZIXeMi8xkQxAmdeTGcc3pU0KBS%2FsvTvPgsb0yG2dPeDA7Ast1WANpwvHbsUDTxlvm2m4NxqdnvtKaaFiFtSb0addqIybRL8dSiPc%2BFADONQ%2BQfLHVzFfyUKNG9OOddxJ%2FNQFBimTvs0C9SwpjC%2FMHWCtbCa5Pn54yYJ2dDomJMbGLBuDyPQOvZGhhY4Vvx%2Bo4bn2cYh20yDvGRxq%2BHHHiRmjimynMgttA546KPaQ1tZaAkbJaotmaOqxJ5awmVJsotW7ZHSLW3OZaRKn%2FGkbEMJzbxY4JXZ8EUFvD6pXhigBt6SEVsj%2BjMdSxHpbRKdZx%2Bh7g9rob6i%2FLVz87pdto4wvAkBSXzWK%2Bo1m4iGfArbMudBY7vqFMBDBezqLTHkL8vwtoLVpOQLHrx0ZSkhBSoZJTBh9lk5vMyJHfdcefhkLEQ8TseGq%2FHFmqv06cykQzGMPLs1gkl7q9cBEZn%2Bm9XcKE8jO9z0Ku3qBhVmoxbej15NQcIf%2B5xX7pFVmUd%2FnXSSMgKoBbjlS%2BEfXveryzCRxbzBBjqkAaOUpAZ3z2EjwFZHYnNlhScAMhOiQeWcw%2BG6mRepRTyD6yCAxmqDdltUjEiKWFVeNSdeU1OM96cm9P2q7Wb7o1f3EjDTaK5jHzJRZs5FxszSdTALpeJRepRlQhexmKh1N4XMJBwWE06ajP2bNA7%2BTMsYmBpEYl2cBH8LoUV4Vy5e4BPwM3NvwDPjaXAZcLR9xkf6e2laT2evkYSwpjJYWTs9iiz5&X-Amz-Signature=4c3a1cc71928cc145d466ea7f33a87240b165549455df2635f254b58b991a3f7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZIBA2LH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCZTPQ2VZpqnuzGIztw4pXrD%2F7liQe3RlLOwamhWtQiQAIhAOEUETulkhJaS%2BzlIeiynM%2F%2BS%2B4%2BlLycb5OhwFSrGQtTKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq%2BVbdQt%2BGYxFBk1Mq3AM0FzfueL6Uv8B8iIcmou4uC9ht3iq8AJ2qjg4DoRMpTVfB6OryXV0j5g0iDhAST7HHtaSg7cfLecyEQwFCbOnE5bQU0ZJFodDNdOMZjZIXeMi8xkQxAmdeTGcc3pU0KBS%2FsvTvPgsb0yG2dPeDA7Ast1WANpwvHbsUDTxlvm2m4NxqdnvtKaaFiFtSb0addqIybRL8dSiPc%2BFADONQ%2BQfLHVzFfyUKNG9OOddxJ%2FNQFBimTvs0C9SwpjC%2FMHWCtbCa5Pn54yYJ2dDomJMbGLBuDyPQOvZGhhY4Vvx%2Bo4bn2cYh20yDvGRxq%2BHHHiRmjimynMgttA546KPaQ1tZaAkbJaotmaOqxJ5awmVJsotW7ZHSLW3OZaRKn%2FGkbEMJzbxY4JXZ8EUFvD6pXhigBt6SEVsj%2BjMdSxHpbRKdZx%2Bh7g9rob6i%2FLVz87pdto4wvAkBSXzWK%2Bo1m4iGfArbMudBY7vqFMBDBezqLTHkL8vwtoLVpOQLHrx0ZSkhBSoZJTBh9lk5vMyJHfdcefhkLEQ8TseGq%2FHFmqv06cykQzGMPLs1gkl7q9cBEZn%2Bm9XcKE8jO9z0Ku3qBhVmoxbej15NQcIf%2B5xX7pFVmUd%2FnXSSMgKoBbjlS%2BEfXveryzCRxbzBBjqkAaOUpAZ3z2EjwFZHYnNlhScAMhOiQeWcw%2BG6mRepRTyD6yCAxmqDdltUjEiKWFVeNSdeU1OM96cm9P2q7Wb7o1f3EjDTaK5jHzJRZs5FxszSdTALpeJRepRlQhexmKh1N4XMJBwWE06ajP2bNA7%2BTMsYmBpEYl2cBH8LoUV4Vy5e4BPwM3NvwDPjaXAZcLR9xkf6e2laT2evkYSwpjJYWTs9iiz5&X-Amz-Signature=749356f69858b2a29b2d21188a6792a42c54626e0384463871cd160772982ad3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZIBA2LH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCZTPQ2VZpqnuzGIztw4pXrD%2F7liQe3RlLOwamhWtQiQAIhAOEUETulkhJaS%2BzlIeiynM%2F%2BS%2B4%2BlLycb5OhwFSrGQtTKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq%2BVbdQt%2BGYxFBk1Mq3AM0FzfueL6Uv8B8iIcmou4uC9ht3iq8AJ2qjg4DoRMpTVfB6OryXV0j5g0iDhAST7HHtaSg7cfLecyEQwFCbOnE5bQU0ZJFodDNdOMZjZIXeMi8xkQxAmdeTGcc3pU0KBS%2FsvTvPgsb0yG2dPeDA7Ast1WANpwvHbsUDTxlvm2m4NxqdnvtKaaFiFtSb0addqIybRL8dSiPc%2BFADONQ%2BQfLHVzFfyUKNG9OOddxJ%2FNQFBimTvs0C9SwpjC%2FMHWCtbCa5Pn54yYJ2dDomJMbGLBuDyPQOvZGhhY4Vvx%2Bo4bn2cYh20yDvGRxq%2BHHHiRmjimynMgttA546KPaQ1tZaAkbJaotmaOqxJ5awmVJsotW7ZHSLW3OZaRKn%2FGkbEMJzbxY4JXZ8EUFvD6pXhigBt6SEVsj%2BjMdSxHpbRKdZx%2Bh7g9rob6i%2FLVz87pdto4wvAkBSXzWK%2Bo1m4iGfArbMudBY7vqFMBDBezqLTHkL8vwtoLVpOQLHrx0ZSkhBSoZJTBh9lk5vMyJHfdcefhkLEQ8TseGq%2FHFmqv06cykQzGMPLs1gkl7q9cBEZn%2Bm9XcKE8jO9z0Ku3qBhVmoxbej15NQcIf%2B5xX7pFVmUd%2FnXSSMgKoBbjlS%2BEfXveryzCRxbzBBjqkAaOUpAZ3z2EjwFZHYnNlhScAMhOiQeWcw%2BG6mRepRTyD6yCAxmqDdltUjEiKWFVeNSdeU1OM96cm9P2q7Wb7o1f3EjDTaK5jHzJRZs5FxszSdTALpeJRepRlQhexmKh1N4XMJBwWE06ajP2bNA7%2BTMsYmBpEYl2cBH8LoUV4Vy5e4BPwM3NvwDPjaXAZcLR9xkf6e2laT2evkYSwpjJYWTs9iiz5&X-Amz-Signature=9ebdab23947a36b32b6c26ef1f2a87bc9d167b78ba2efd8a9d676df3960413d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZIBA2LH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCZTPQ2VZpqnuzGIztw4pXrD%2F7liQe3RlLOwamhWtQiQAIhAOEUETulkhJaS%2BzlIeiynM%2F%2BS%2B4%2BlLycb5OhwFSrGQtTKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq%2BVbdQt%2BGYxFBk1Mq3AM0FzfueL6Uv8B8iIcmou4uC9ht3iq8AJ2qjg4DoRMpTVfB6OryXV0j5g0iDhAST7HHtaSg7cfLecyEQwFCbOnE5bQU0ZJFodDNdOMZjZIXeMi8xkQxAmdeTGcc3pU0KBS%2FsvTvPgsb0yG2dPeDA7Ast1WANpwvHbsUDTxlvm2m4NxqdnvtKaaFiFtSb0addqIybRL8dSiPc%2BFADONQ%2BQfLHVzFfyUKNG9OOddxJ%2FNQFBimTvs0C9SwpjC%2FMHWCtbCa5Pn54yYJ2dDomJMbGLBuDyPQOvZGhhY4Vvx%2Bo4bn2cYh20yDvGRxq%2BHHHiRmjimynMgttA546KPaQ1tZaAkbJaotmaOqxJ5awmVJsotW7ZHSLW3OZaRKn%2FGkbEMJzbxY4JXZ8EUFvD6pXhigBt6SEVsj%2BjMdSxHpbRKdZx%2Bh7g9rob6i%2FLVz87pdto4wvAkBSXzWK%2Bo1m4iGfArbMudBY7vqFMBDBezqLTHkL8vwtoLVpOQLHrx0ZSkhBSoZJTBh9lk5vMyJHfdcefhkLEQ8TseGq%2FHFmqv06cykQzGMPLs1gkl7q9cBEZn%2Bm9XcKE8jO9z0Ku3qBhVmoxbej15NQcIf%2B5xX7pFVmUd%2FnXSSMgKoBbjlS%2BEfXveryzCRxbzBBjqkAaOUpAZ3z2EjwFZHYnNlhScAMhOiQeWcw%2BG6mRepRTyD6yCAxmqDdltUjEiKWFVeNSdeU1OM96cm9P2q7Wb7o1f3EjDTaK5jHzJRZs5FxszSdTALpeJRepRlQhexmKh1N4XMJBwWE06ajP2bNA7%2BTMsYmBpEYl2cBH8LoUV4Vy5e4BPwM3NvwDPjaXAZcLR9xkf6e2laT2evkYSwpjJYWTs9iiz5&X-Amz-Signature=ac8a2c3cdb91936df745572b188a6b099efd225a6350702aa9eec34f537b1e90&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

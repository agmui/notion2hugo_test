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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XGH5445%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHIYHi03bkmQ2l5%2FAobkUFSCql6l%2B0WNOLPd0TS75%2BNLAiA46YS%2FGlgwCYdnZmLRPn%2BVIyILT7UR21fNSHdpjC571CqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdwIjsarsMsVMht47KtwDzwuabf2XPRD26%2BevU0bWrQSx5VDceOa7zN0fv8VvE3x5wvwdbg9%2BrRRnTQRi%2F17MZ7x%2FZxw5i4VmdGEK1v%2FnQfQ%2BmMQOyp0ueyIH3LgJOWVNpycLQIxDH02FSfnU6QZ%2BzXwIruv0kDdb4Zw3QLgRDuTIQ9DTHecQCNnCHoaYieFHeeDn9xeMjKXMIQoX5Gs3w0zvQHGUZLuWHQeXrEfY4x17YitTsqo0h3L0v%2BrnmBiE8o%2BnVrqhmgEKh2ZmW9vLwqh61pVV7L7HfFBkqACO%2Bl3VHKK3tfPscH%2F9UOpOuEMwECpk8YEhtfvtZnauiQXtlRsAt4h1pU3WhRDxfHRAA2L5RUjTbDO%2FMzchtFE2PFzhK1DoVuxW7BzB0Au2bcL2kWoJJvzYF6%2F%2BpscSOJzhxx6EcQ51cVB88xFpnzPBRQ8%2BzddXcdNLV51QzE8EdcjXM7Wb51tsBGGjnkO7xJVwXDWI8j2I67bPi0uztW1DybSopWGXBjCP3dcR5rEfar8EA8qiJSlvgTsIO%2FugKQKrC6AKsh8Eg%2BPUtWHj6st3yoXBOI6avqf8fXqlNvTXaic26M5G06LKPRWfzLaiVilfuFxF1lq1uDC8Kgn562efbuEJ7HaAt%2FpTOFir9xsw28K%2FwQY6pgEGvz86reD%2FrOyzYKFeCDksK6XJpGifnpc3ldfIZ%2FyV7P3t5a5uqcf%2BhX%2BMlMc7NV5rzu1AHvRNEPT2%2FbU9oK5MkeL9QvGpiHUn6exG0H2JwItfGRYMUxekRhTgTIZXY0qX4T1cfCbmQZjCjMY0mhXbO7Jf9HlCtawcljkyiW6xOYy6PGI2K6fWnZmHTtWjIy6YWnIj8DutQxjkXhahoVWNkr3ZDowy&X-Amz-Signature=81fdfba6aa0e1f5c3b5113e8b3c49a064c0c29febe7988703e7613b0d3b788c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XGH5445%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHIYHi03bkmQ2l5%2FAobkUFSCql6l%2B0WNOLPd0TS75%2BNLAiA46YS%2FGlgwCYdnZmLRPn%2BVIyILT7UR21fNSHdpjC571CqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdwIjsarsMsVMht47KtwDzwuabf2XPRD26%2BevU0bWrQSx5VDceOa7zN0fv8VvE3x5wvwdbg9%2BrRRnTQRi%2F17MZ7x%2FZxw5i4VmdGEK1v%2FnQfQ%2BmMQOyp0ueyIH3LgJOWVNpycLQIxDH02FSfnU6QZ%2BzXwIruv0kDdb4Zw3QLgRDuTIQ9DTHecQCNnCHoaYieFHeeDn9xeMjKXMIQoX5Gs3w0zvQHGUZLuWHQeXrEfY4x17YitTsqo0h3L0v%2BrnmBiE8o%2BnVrqhmgEKh2ZmW9vLwqh61pVV7L7HfFBkqACO%2Bl3VHKK3tfPscH%2F9UOpOuEMwECpk8YEhtfvtZnauiQXtlRsAt4h1pU3WhRDxfHRAA2L5RUjTbDO%2FMzchtFE2PFzhK1DoVuxW7BzB0Au2bcL2kWoJJvzYF6%2F%2BpscSOJzhxx6EcQ51cVB88xFpnzPBRQ8%2BzddXcdNLV51QzE8EdcjXM7Wb51tsBGGjnkO7xJVwXDWI8j2I67bPi0uztW1DybSopWGXBjCP3dcR5rEfar8EA8qiJSlvgTsIO%2FugKQKrC6AKsh8Eg%2BPUtWHj6st3yoXBOI6avqf8fXqlNvTXaic26M5G06LKPRWfzLaiVilfuFxF1lq1uDC8Kgn562efbuEJ7HaAt%2FpTOFir9xsw28K%2FwQY6pgEGvz86reD%2FrOyzYKFeCDksK6XJpGifnpc3ldfIZ%2FyV7P3t5a5uqcf%2BhX%2BMlMc7NV5rzu1AHvRNEPT2%2FbU9oK5MkeL9QvGpiHUn6exG0H2JwItfGRYMUxekRhTgTIZXY0qX4T1cfCbmQZjCjMY0mhXbO7Jf9HlCtawcljkyiW6xOYy6PGI2K6fWnZmHTtWjIy6YWnIj8DutQxjkXhahoVWNkr3ZDowy&X-Amz-Signature=6e830a1e00a3e2e8bb36f45ba1e4c7b67533023efad1ea8d81528bb2e5e370bb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XGH5445%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHIYHi03bkmQ2l5%2FAobkUFSCql6l%2B0WNOLPd0TS75%2BNLAiA46YS%2FGlgwCYdnZmLRPn%2BVIyILT7UR21fNSHdpjC571CqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdwIjsarsMsVMht47KtwDzwuabf2XPRD26%2BevU0bWrQSx5VDceOa7zN0fv8VvE3x5wvwdbg9%2BrRRnTQRi%2F17MZ7x%2FZxw5i4VmdGEK1v%2FnQfQ%2BmMQOyp0ueyIH3LgJOWVNpycLQIxDH02FSfnU6QZ%2BzXwIruv0kDdb4Zw3QLgRDuTIQ9DTHecQCNnCHoaYieFHeeDn9xeMjKXMIQoX5Gs3w0zvQHGUZLuWHQeXrEfY4x17YitTsqo0h3L0v%2BrnmBiE8o%2BnVrqhmgEKh2ZmW9vLwqh61pVV7L7HfFBkqACO%2Bl3VHKK3tfPscH%2F9UOpOuEMwECpk8YEhtfvtZnauiQXtlRsAt4h1pU3WhRDxfHRAA2L5RUjTbDO%2FMzchtFE2PFzhK1DoVuxW7BzB0Au2bcL2kWoJJvzYF6%2F%2BpscSOJzhxx6EcQ51cVB88xFpnzPBRQ8%2BzddXcdNLV51QzE8EdcjXM7Wb51tsBGGjnkO7xJVwXDWI8j2I67bPi0uztW1DybSopWGXBjCP3dcR5rEfar8EA8qiJSlvgTsIO%2FugKQKrC6AKsh8Eg%2BPUtWHj6st3yoXBOI6avqf8fXqlNvTXaic26M5G06LKPRWfzLaiVilfuFxF1lq1uDC8Kgn562efbuEJ7HaAt%2FpTOFir9xsw28K%2FwQY6pgEGvz86reD%2FrOyzYKFeCDksK6XJpGifnpc3ldfIZ%2FyV7P3t5a5uqcf%2BhX%2BMlMc7NV5rzu1AHvRNEPT2%2FbU9oK5MkeL9QvGpiHUn6exG0H2JwItfGRYMUxekRhTgTIZXY0qX4T1cfCbmQZjCjMY0mhXbO7Jf9HlCtawcljkyiW6xOYy6PGI2K6fWnZmHTtWjIy6YWnIj8DutQxjkXhahoVWNkr3ZDowy&X-Amz-Signature=14e92080bdc36679b78006cdaf32f154bac66c69ac94127495b1a5f029eebbae&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XGH5445%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHIYHi03bkmQ2l5%2FAobkUFSCql6l%2B0WNOLPd0TS75%2BNLAiA46YS%2FGlgwCYdnZmLRPn%2BVIyILT7UR21fNSHdpjC571CqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdwIjsarsMsVMht47KtwDzwuabf2XPRD26%2BevU0bWrQSx5VDceOa7zN0fv8VvE3x5wvwdbg9%2BrRRnTQRi%2F17MZ7x%2FZxw5i4VmdGEK1v%2FnQfQ%2BmMQOyp0ueyIH3LgJOWVNpycLQIxDH02FSfnU6QZ%2BzXwIruv0kDdb4Zw3QLgRDuTIQ9DTHecQCNnCHoaYieFHeeDn9xeMjKXMIQoX5Gs3w0zvQHGUZLuWHQeXrEfY4x17YitTsqo0h3L0v%2BrnmBiE8o%2BnVrqhmgEKh2ZmW9vLwqh61pVV7L7HfFBkqACO%2Bl3VHKK3tfPscH%2F9UOpOuEMwECpk8YEhtfvtZnauiQXtlRsAt4h1pU3WhRDxfHRAA2L5RUjTbDO%2FMzchtFE2PFzhK1DoVuxW7BzB0Au2bcL2kWoJJvzYF6%2F%2BpscSOJzhxx6EcQ51cVB88xFpnzPBRQ8%2BzddXcdNLV51QzE8EdcjXM7Wb51tsBGGjnkO7xJVwXDWI8j2I67bPi0uztW1DybSopWGXBjCP3dcR5rEfar8EA8qiJSlvgTsIO%2FugKQKrC6AKsh8Eg%2BPUtWHj6st3yoXBOI6avqf8fXqlNvTXaic26M5G06LKPRWfzLaiVilfuFxF1lq1uDC8Kgn562efbuEJ7HaAt%2FpTOFir9xsw28K%2FwQY6pgEGvz86reD%2FrOyzYKFeCDksK6XJpGifnpc3ldfIZ%2FyV7P3t5a5uqcf%2BhX%2BMlMc7NV5rzu1AHvRNEPT2%2FbU9oK5MkeL9QvGpiHUn6exG0H2JwItfGRYMUxekRhTgTIZXY0qX4T1cfCbmQZjCjMY0mhXbO7Jf9HlCtawcljkyiW6xOYy6PGI2K6fWnZmHTtWjIy6YWnIj8DutQxjkXhahoVWNkr3ZDowy&X-Amz-Signature=0a35094d0435b30569f2bfe01cfd840306314d0a8cbe322097bd6a7af2e9fdd1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XGH5445%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHIYHi03bkmQ2l5%2FAobkUFSCql6l%2B0WNOLPd0TS75%2BNLAiA46YS%2FGlgwCYdnZmLRPn%2BVIyILT7UR21fNSHdpjC571CqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdwIjsarsMsVMht47KtwDzwuabf2XPRD26%2BevU0bWrQSx5VDceOa7zN0fv8VvE3x5wvwdbg9%2BrRRnTQRi%2F17MZ7x%2FZxw5i4VmdGEK1v%2FnQfQ%2BmMQOyp0ueyIH3LgJOWVNpycLQIxDH02FSfnU6QZ%2BzXwIruv0kDdb4Zw3QLgRDuTIQ9DTHecQCNnCHoaYieFHeeDn9xeMjKXMIQoX5Gs3w0zvQHGUZLuWHQeXrEfY4x17YitTsqo0h3L0v%2BrnmBiE8o%2BnVrqhmgEKh2ZmW9vLwqh61pVV7L7HfFBkqACO%2Bl3VHKK3tfPscH%2F9UOpOuEMwECpk8YEhtfvtZnauiQXtlRsAt4h1pU3WhRDxfHRAA2L5RUjTbDO%2FMzchtFE2PFzhK1DoVuxW7BzB0Au2bcL2kWoJJvzYF6%2F%2BpscSOJzhxx6EcQ51cVB88xFpnzPBRQ8%2BzddXcdNLV51QzE8EdcjXM7Wb51tsBGGjnkO7xJVwXDWI8j2I67bPi0uztW1DybSopWGXBjCP3dcR5rEfar8EA8qiJSlvgTsIO%2FugKQKrC6AKsh8Eg%2BPUtWHj6st3yoXBOI6avqf8fXqlNvTXaic26M5G06LKPRWfzLaiVilfuFxF1lq1uDC8Kgn562efbuEJ7HaAt%2FpTOFir9xsw28K%2FwQY6pgEGvz86reD%2FrOyzYKFeCDksK6XJpGifnpc3ldfIZ%2FyV7P3t5a5uqcf%2BhX%2BMlMc7NV5rzu1AHvRNEPT2%2FbU9oK5MkeL9QvGpiHUn6exG0H2JwItfGRYMUxekRhTgTIZXY0qX4T1cfCbmQZjCjMY0mhXbO7Jf9HlCtawcljkyiW6xOYy6PGI2K6fWnZmHTtWjIy6YWnIj8DutQxjkXhahoVWNkr3ZDowy&X-Amz-Signature=e8695f18fecfafb1e8d98814168889531891b928252c4dd1b41aff8f815de110&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

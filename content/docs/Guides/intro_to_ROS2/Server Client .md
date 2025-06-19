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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYUQWKDB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwYo%2BdwNl0YxY2NUme6bmgXJXTkgAIRDIfF1nDmMCrigIgKZNiYspPyf%2B%2B%2BpONPpKg9M4dZ8FkK%2BaBDTRjPdSTd%2F0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN66ODM778vOIw2UyircA2h9A0uX5w06u8EkjTCX3qxOVzFgOO2VWjSpFP7ucDuspFap3tvuhIk%2Bm3yGXdSMDDvPB57F6g%2BRCuB9NWfTs2w7Nc1CroF5zQnuaMjYCpd5Uktg%2FZc%2FZrRnvqrTDU0Rw1c9DKxx9ouFJQHcbaXQ6MwPgY9KJ%2BYPVEVju1p3qwYdAiFhQ07W82gMajyhSk0EjLGJYJXsAgLU0FyLJkKZqX5%2F%2BxISfnsnEGQ6dL1CE9jVgw%2F0xu9niKnsKGYeG3StCprYI1Rddv%2BvPCXYGYJGSk0bI34ZQQ%2Fr5VIuHAP4GwNEMjDaoLTuMmtWz9g6MBCcWPvTpfD49TGbIWCAYbhZQ6KcWJJgmY3ahU3zJoHbTSM2bWnAx3wM%2BzjIQp%2B%2FkN5%2FXkdtTMByhvfTMZRQOvv0UfAArt%2BgHqM5C2lhLZpdWBCNm1dvXNNQF8ize6y9PLlrPB6Acyl5Y7%2FGOdMQQKqoORmbgcZhSVVJDI8FEEjFY7xLg9XHw8CcwtesgPuS%2BlgcqwUSoS8WHQWpxmDBxFoJOBVBQU2iXnDW02hskMTbd%2BXX1%2FYhkE2pj%2FdRmhHuxgf2hafip6XHnSHiIIL7vCetVE2AU9rWhBOM0F01tFqzutDsAF3wCXbz3RFPUyTGMPPd0MIGOqUBf1odQTbRo061vd7fzL9MuQZjSMvSauyDLzjUxTlKkNtEo0fUCxQwTMtXFz2pXzerYlUZBSWZlFCXUxJZNYB1JFUr7pdB9B9rrK7l%2F7SoWZkSM7%2BSeTF7y47kzmrIyC0E%2BFxnVhOAnxe3chMkt5ZqBstP1NZ77Hjdfyzb4v%2BdJ%2BvYiaoEC50JKfIPk5llBQKPpDcvegoCdmHgLJuQ%2BoCDpawJM0ac&X-Amz-Signature=93aeb225b38d277553989d8a36d2c682c40c9c6f354944a29307acebbcfd4160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYUQWKDB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwYo%2BdwNl0YxY2NUme6bmgXJXTkgAIRDIfF1nDmMCrigIgKZNiYspPyf%2B%2B%2BpONPpKg9M4dZ8FkK%2BaBDTRjPdSTd%2F0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN66ODM778vOIw2UyircA2h9A0uX5w06u8EkjTCX3qxOVzFgOO2VWjSpFP7ucDuspFap3tvuhIk%2Bm3yGXdSMDDvPB57F6g%2BRCuB9NWfTs2w7Nc1CroF5zQnuaMjYCpd5Uktg%2FZc%2FZrRnvqrTDU0Rw1c9DKxx9ouFJQHcbaXQ6MwPgY9KJ%2BYPVEVju1p3qwYdAiFhQ07W82gMajyhSk0EjLGJYJXsAgLU0FyLJkKZqX5%2F%2BxISfnsnEGQ6dL1CE9jVgw%2F0xu9niKnsKGYeG3StCprYI1Rddv%2BvPCXYGYJGSk0bI34ZQQ%2Fr5VIuHAP4GwNEMjDaoLTuMmtWz9g6MBCcWPvTpfD49TGbIWCAYbhZQ6KcWJJgmY3ahU3zJoHbTSM2bWnAx3wM%2BzjIQp%2B%2FkN5%2FXkdtTMByhvfTMZRQOvv0UfAArt%2BgHqM5C2lhLZpdWBCNm1dvXNNQF8ize6y9PLlrPB6Acyl5Y7%2FGOdMQQKqoORmbgcZhSVVJDI8FEEjFY7xLg9XHw8CcwtesgPuS%2BlgcqwUSoS8WHQWpxmDBxFoJOBVBQU2iXnDW02hskMTbd%2BXX1%2FYhkE2pj%2FdRmhHuxgf2hafip6XHnSHiIIL7vCetVE2AU9rWhBOM0F01tFqzutDsAF3wCXbz3RFPUyTGMPPd0MIGOqUBf1odQTbRo061vd7fzL9MuQZjSMvSauyDLzjUxTlKkNtEo0fUCxQwTMtXFz2pXzerYlUZBSWZlFCXUxJZNYB1JFUr7pdB9B9rrK7l%2F7SoWZkSM7%2BSeTF7y47kzmrIyC0E%2BFxnVhOAnxe3chMkt5ZqBstP1NZ77Hjdfyzb4v%2BdJ%2BvYiaoEC50JKfIPk5llBQKPpDcvegoCdmHgLJuQ%2BoCDpawJM0ac&X-Amz-Signature=2b572be5f53008277daaf3567a30b8bab21acbe18d26a82e54b48de40b856550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYUQWKDB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwYo%2BdwNl0YxY2NUme6bmgXJXTkgAIRDIfF1nDmMCrigIgKZNiYspPyf%2B%2B%2BpONPpKg9M4dZ8FkK%2BaBDTRjPdSTd%2F0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN66ODM778vOIw2UyircA2h9A0uX5w06u8EkjTCX3qxOVzFgOO2VWjSpFP7ucDuspFap3tvuhIk%2Bm3yGXdSMDDvPB57F6g%2BRCuB9NWfTs2w7Nc1CroF5zQnuaMjYCpd5Uktg%2FZc%2FZrRnvqrTDU0Rw1c9DKxx9ouFJQHcbaXQ6MwPgY9KJ%2BYPVEVju1p3qwYdAiFhQ07W82gMajyhSk0EjLGJYJXsAgLU0FyLJkKZqX5%2F%2BxISfnsnEGQ6dL1CE9jVgw%2F0xu9niKnsKGYeG3StCprYI1Rddv%2BvPCXYGYJGSk0bI34ZQQ%2Fr5VIuHAP4GwNEMjDaoLTuMmtWz9g6MBCcWPvTpfD49TGbIWCAYbhZQ6KcWJJgmY3ahU3zJoHbTSM2bWnAx3wM%2BzjIQp%2B%2FkN5%2FXkdtTMByhvfTMZRQOvv0UfAArt%2BgHqM5C2lhLZpdWBCNm1dvXNNQF8ize6y9PLlrPB6Acyl5Y7%2FGOdMQQKqoORmbgcZhSVVJDI8FEEjFY7xLg9XHw8CcwtesgPuS%2BlgcqwUSoS8WHQWpxmDBxFoJOBVBQU2iXnDW02hskMTbd%2BXX1%2FYhkE2pj%2FdRmhHuxgf2hafip6XHnSHiIIL7vCetVE2AU9rWhBOM0F01tFqzutDsAF3wCXbz3RFPUyTGMPPd0MIGOqUBf1odQTbRo061vd7fzL9MuQZjSMvSauyDLzjUxTlKkNtEo0fUCxQwTMtXFz2pXzerYlUZBSWZlFCXUxJZNYB1JFUr7pdB9B9rrK7l%2F7SoWZkSM7%2BSeTF7y47kzmrIyC0E%2BFxnVhOAnxe3chMkt5ZqBstP1NZ77Hjdfyzb4v%2BdJ%2BvYiaoEC50JKfIPk5llBQKPpDcvegoCdmHgLJuQ%2BoCDpawJM0ac&X-Amz-Signature=681068ab3def99a739c89e40690f64fa78d6070ceb95d41e0fd7a9d35582b8f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYUQWKDB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwYo%2BdwNl0YxY2NUme6bmgXJXTkgAIRDIfF1nDmMCrigIgKZNiYspPyf%2B%2B%2BpONPpKg9M4dZ8FkK%2BaBDTRjPdSTd%2F0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN66ODM778vOIw2UyircA2h9A0uX5w06u8EkjTCX3qxOVzFgOO2VWjSpFP7ucDuspFap3tvuhIk%2Bm3yGXdSMDDvPB57F6g%2BRCuB9NWfTs2w7Nc1CroF5zQnuaMjYCpd5Uktg%2FZc%2FZrRnvqrTDU0Rw1c9DKxx9ouFJQHcbaXQ6MwPgY9KJ%2BYPVEVju1p3qwYdAiFhQ07W82gMajyhSk0EjLGJYJXsAgLU0FyLJkKZqX5%2F%2BxISfnsnEGQ6dL1CE9jVgw%2F0xu9niKnsKGYeG3StCprYI1Rddv%2BvPCXYGYJGSk0bI34ZQQ%2Fr5VIuHAP4GwNEMjDaoLTuMmtWz9g6MBCcWPvTpfD49TGbIWCAYbhZQ6KcWJJgmY3ahU3zJoHbTSM2bWnAx3wM%2BzjIQp%2B%2FkN5%2FXkdtTMByhvfTMZRQOvv0UfAArt%2BgHqM5C2lhLZpdWBCNm1dvXNNQF8ize6y9PLlrPB6Acyl5Y7%2FGOdMQQKqoORmbgcZhSVVJDI8FEEjFY7xLg9XHw8CcwtesgPuS%2BlgcqwUSoS8WHQWpxmDBxFoJOBVBQU2iXnDW02hskMTbd%2BXX1%2FYhkE2pj%2FdRmhHuxgf2hafip6XHnSHiIIL7vCetVE2AU9rWhBOM0F01tFqzutDsAF3wCXbz3RFPUyTGMPPd0MIGOqUBf1odQTbRo061vd7fzL9MuQZjSMvSauyDLzjUxTlKkNtEo0fUCxQwTMtXFz2pXzerYlUZBSWZlFCXUxJZNYB1JFUr7pdB9B9rrK7l%2F7SoWZkSM7%2BSeTF7y47kzmrIyC0E%2BFxnVhOAnxe3chMkt5ZqBstP1NZ77Hjdfyzb4v%2BdJ%2BvYiaoEC50JKfIPk5llBQKPpDcvegoCdmHgLJuQ%2BoCDpawJM0ac&X-Amz-Signature=4322dfa4dfd71003356e74d26db51e852f30128585ce1368b69bdca803c38fb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYUQWKDB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwYo%2BdwNl0YxY2NUme6bmgXJXTkgAIRDIfF1nDmMCrigIgKZNiYspPyf%2B%2B%2BpONPpKg9M4dZ8FkK%2BaBDTRjPdSTd%2F0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN66ODM778vOIw2UyircA2h9A0uX5w06u8EkjTCX3qxOVzFgOO2VWjSpFP7ucDuspFap3tvuhIk%2Bm3yGXdSMDDvPB57F6g%2BRCuB9NWfTs2w7Nc1CroF5zQnuaMjYCpd5Uktg%2FZc%2FZrRnvqrTDU0Rw1c9DKxx9ouFJQHcbaXQ6MwPgY9KJ%2BYPVEVju1p3qwYdAiFhQ07W82gMajyhSk0EjLGJYJXsAgLU0FyLJkKZqX5%2F%2BxISfnsnEGQ6dL1CE9jVgw%2F0xu9niKnsKGYeG3StCprYI1Rddv%2BvPCXYGYJGSk0bI34ZQQ%2Fr5VIuHAP4GwNEMjDaoLTuMmtWz9g6MBCcWPvTpfD49TGbIWCAYbhZQ6KcWJJgmY3ahU3zJoHbTSM2bWnAx3wM%2BzjIQp%2B%2FkN5%2FXkdtTMByhvfTMZRQOvv0UfAArt%2BgHqM5C2lhLZpdWBCNm1dvXNNQF8ize6y9PLlrPB6Acyl5Y7%2FGOdMQQKqoORmbgcZhSVVJDI8FEEjFY7xLg9XHw8CcwtesgPuS%2BlgcqwUSoS8WHQWpxmDBxFoJOBVBQU2iXnDW02hskMTbd%2BXX1%2FYhkE2pj%2FdRmhHuxgf2hafip6XHnSHiIIL7vCetVE2AU9rWhBOM0F01tFqzutDsAF3wCXbz3RFPUyTGMPPd0MIGOqUBf1odQTbRo061vd7fzL9MuQZjSMvSauyDLzjUxTlKkNtEo0fUCxQwTMtXFz2pXzerYlUZBSWZlFCXUxJZNYB1JFUr7pdB9B9rrK7l%2F7SoWZkSM7%2BSeTF7y47kzmrIyC0E%2BFxnVhOAnxe3chMkt5ZqBstP1NZ77Hjdfyzb4v%2BdJ%2BvYiaoEC50JKfIPk5llBQKPpDcvegoCdmHgLJuQ%2BoCDpawJM0ac&X-Amz-Signature=f019aa19062fd6e9c88d12a1ae2efacc5762104122c462997495cc7e069473ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

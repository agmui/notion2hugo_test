---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J2YWM6B%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIB0WTRhCCwWymeSjj%2B1BpTl5Q0RjHnhSGmyqdV%2BwNI2QAiEAgQiLShMkJZz6ODnzwI%2F68eKyzf%2BXAe6UMrkUW2tPLGwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNjexXVIPtNHVHSuqircA6Ugvs%2Bug2E%2Be%2FLH5HM18rvTMJXAX9B7jTMwjUg3BmpG%2FvuhueGHBj4GmOAyuQJEm3b4zC32T0jYFuWkkqezZhtBIH%2FVHLZDzPTmX%2FU%2FNPMy3%2BTEwDU97tgSSa3ksYkxfELfVKKT3s9SFMO1eb12T37G%2F7EcC%2Bcsbbpunxek5MuiHhfOnMFtnBr7LJAstqPrpDOf6RffN4aNTJzIquupU8LRMcULFqqHvSE4qnELuTXfKr%2FDxOkihvJs8hVv4umsQBUW74JwbVtiqJ56wyls2olu99DDqONbHGOu03yP1SXKmFyxnTXMVr0Cb9%2FU%2FgxnJnB4Gi%2Bgk8%2F7X0zvDBMVsbTJHP8n%2BfpEQZt%2BuNprB5AwgScuoGR%2FG0ARBWYJqqefV1blmo9CDNXn2NZEQ6My84GI%2F8WuvXqqzBlot9U2DCZ6542pDS%2BDF9Xs4k%2BuAlUo0%2Fp2oGy8WIsLUf5qmKGKp%2FsvvsN34pUMKxCV3XNw7KbOzDtY6UF5D99LlpUJgJhPuf2%2BKtO%2BxdXrSy3LoarpvBbj2kghAeNshSZK3r53dML%2BT%2BGnbE3EUEDBv%2FlsLmqumSzE3IZ%2FPlSpL7ZoSfZKCccphnrOhAZgISJKFva4EXFn60sPl2%2BrLGSJ0%2BXkMJW8jr0GOqUBBsxa%2F%2B6KnziVhcIq2gU3COhpJrzfHII8wTrRdSBZF5sL5MBXS4Ws3pkQFYB18A0Jp9HW9%2BTQN6f%2F5Rb2ACLrus%2B2katTlBvQrdNmMYk9zH709HoUVB18QG75H46GqAxIKz%2FUdBVaJAzPGk3%2BkRFXfL76WIlFFirFSn2wldZ039ocNkZuSM7YPcvKDpdZ1lswhb2XOf5Ba0TNFAvrog4b0Qo4cPcN&X-Amz-Signature=e651422e2f2fd242d08ae738995657f6d744f563156ded16d42b1d92a2da5d06&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J2YWM6B%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIB0WTRhCCwWymeSjj%2B1BpTl5Q0RjHnhSGmyqdV%2BwNI2QAiEAgQiLShMkJZz6ODnzwI%2F68eKyzf%2BXAe6UMrkUW2tPLGwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNjexXVIPtNHVHSuqircA6Ugvs%2Bug2E%2Be%2FLH5HM18rvTMJXAX9B7jTMwjUg3BmpG%2FvuhueGHBj4GmOAyuQJEm3b4zC32T0jYFuWkkqezZhtBIH%2FVHLZDzPTmX%2FU%2FNPMy3%2BTEwDU97tgSSa3ksYkxfELfVKKT3s9SFMO1eb12T37G%2F7EcC%2Bcsbbpunxek5MuiHhfOnMFtnBr7LJAstqPrpDOf6RffN4aNTJzIquupU8LRMcULFqqHvSE4qnELuTXfKr%2FDxOkihvJs8hVv4umsQBUW74JwbVtiqJ56wyls2olu99DDqONbHGOu03yP1SXKmFyxnTXMVr0Cb9%2FU%2FgxnJnB4Gi%2Bgk8%2F7X0zvDBMVsbTJHP8n%2BfpEQZt%2BuNprB5AwgScuoGR%2FG0ARBWYJqqefV1blmo9CDNXn2NZEQ6My84GI%2F8WuvXqqzBlot9U2DCZ6542pDS%2BDF9Xs4k%2BuAlUo0%2Fp2oGy8WIsLUf5qmKGKp%2FsvvsN34pUMKxCV3XNw7KbOzDtY6UF5D99LlpUJgJhPuf2%2BKtO%2BxdXrSy3LoarpvBbj2kghAeNshSZK3r53dML%2BT%2BGnbE3EUEDBv%2FlsLmqumSzE3IZ%2FPlSpL7ZoSfZKCccphnrOhAZgISJKFva4EXFn60sPl2%2BrLGSJ0%2BXkMJW8jr0GOqUBBsxa%2F%2B6KnziVhcIq2gU3COhpJrzfHII8wTrRdSBZF5sL5MBXS4Ws3pkQFYB18A0Jp9HW9%2BTQN6f%2F5Rb2ACLrus%2B2katTlBvQrdNmMYk9zH709HoUVB18QG75H46GqAxIKz%2FUdBVaJAzPGk3%2BkRFXfL76WIlFFirFSn2wldZ039ocNkZuSM7YPcvKDpdZ1lswhb2XOf5Ba0TNFAvrog4b0Qo4cPcN&X-Amz-Signature=365a4b9a11e84f82859a1f22cac5a0ba3d5ca7364132cbf4cd5c4fa8dcf3d241&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J2YWM6B%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIB0WTRhCCwWymeSjj%2B1BpTl5Q0RjHnhSGmyqdV%2BwNI2QAiEAgQiLShMkJZz6ODnzwI%2F68eKyzf%2BXAe6UMrkUW2tPLGwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNjexXVIPtNHVHSuqircA6Ugvs%2Bug2E%2Be%2FLH5HM18rvTMJXAX9B7jTMwjUg3BmpG%2FvuhueGHBj4GmOAyuQJEm3b4zC32T0jYFuWkkqezZhtBIH%2FVHLZDzPTmX%2FU%2FNPMy3%2BTEwDU97tgSSa3ksYkxfELfVKKT3s9SFMO1eb12T37G%2F7EcC%2Bcsbbpunxek5MuiHhfOnMFtnBr7LJAstqPrpDOf6RffN4aNTJzIquupU8LRMcULFqqHvSE4qnELuTXfKr%2FDxOkihvJs8hVv4umsQBUW74JwbVtiqJ56wyls2olu99DDqONbHGOu03yP1SXKmFyxnTXMVr0Cb9%2FU%2FgxnJnB4Gi%2Bgk8%2F7X0zvDBMVsbTJHP8n%2BfpEQZt%2BuNprB5AwgScuoGR%2FG0ARBWYJqqefV1blmo9CDNXn2NZEQ6My84GI%2F8WuvXqqzBlot9U2DCZ6542pDS%2BDF9Xs4k%2BuAlUo0%2Fp2oGy8WIsLUf5qmKGKp%2FsvvsN34pUMKxCV3XNw7KbOzDtY6UF5D99LlpUJgJhPuf2%2BKtO%2BxdXrSy3LoarpvBbj2kghAeNshSZK3r53dML%2BT%2BGnbE3EUEDBv%2FlsLmqumSzE3IZ%2FPlSpL7ZoSfZKCccphnrOhAZgISJKFva4EXFn60sPl2%2BrLGSJ0%2BXkMJW8jr0GOqUBBsxa%2F%2B6KnziVhcIq2gU3COhpJrzfHII8wTrRdSBZF5sL5MBXS4Ws3pkQFYB18A0Jp9HW9%2BTQN6f%2F5Rb2ACLrus%2B2katTlBvQrdNmMYk9zH709HoUVB18QG75H46GqAxIKz%2FUdBVaJAzPGk3%2BkRFXfL76WIlFFirFSn2wldZ039ocNkZuSM7YPcvKDpdZ1lswhb2XOf5Ba0TNFAvrog4b0Qo4cPcN&X-Amz-Signature=760781a2b8960c6fdcc714e7cfa30a07d9f584c0438599aa784cb693e773ad00&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J2YWM6B%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIB0WTRhCCwWymeSjj%2B1BpTl5Q0RjHnhSGmyqdV%2BwNI2QAiEAgQiLShMkJZz6ODnzwI%2F68eKyzf%2BXAe6UMrkUW2tPLGwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNjexXVIPtNHVHSuqircA6Ugvs%2Bug2E%2Be%2FLH5HM18rvTMJXAX9B7jTMwjUg3BmpG%2FvuhueGHBj4GmOAyuQJEm3b4zC32T0jYFuWkkqezZhtBIH%2FVHLZDzPTmX%2FU%2FNPMy3%2BTEwDU97tgSSa3ksYkxfELfVKKT3s9SFMO1eb12T37G%2F7EcC%2Bcsbbpunxek5MuiHhfOnMFtnBr7LJAstqPrpDOf6RffN4aNTJzIquupU8LRMcULFqqHvSE4qnELuTXfKr%2FDxOkihvJs8hVv4umsQBUW74JwbVtiqJ56wyls2olu99DDqONbHGOu03yP1SXKmFyxnTXMVr0Cb9%2FU%2FgxnJnB4Gi%2Bgk8%2F7X0zvDBMVsbTJHP8n%2BfpEQZt%2BuNprB5AwgScuoGR%2FG0ARBWYJqqefV1blmo9CDNXn2NZEQ6My84GI%2F8WuvXqqzBlot9U2DCZ6542pDS%2BDF9Xs4k%2BuAlUo0%2Fp2oGy8WIsLUf5qmKGKp%2FsvvsN34pUMKxCV3XNw7KbOzDtY6UF5D99LlpUJgJhPuf2%2BKtO%2BxdXrSy3LoarpvBbj2kghAeNshSZK3r53dML%2BT%2BGnbE3EUEDBv%2FlsLmqumSzE3IZ%2FPlSpL7ZoSfZKCccphnrOhAZgISJKFva4EXFn60sPl2%2BrLGSJ0%2BXkMJW8jr0GOqUBBsxa%2F%2B6KnziVhcIq2gU3COhpJrzfHII8wTrRdSBZF5sL5MBXS4Ws3pkQFYB18A0Jp9HW9%2BTQN6f%2F5Rb2ACLrus%2B2katTlBvQrdNmMYk9zH709HoUVB18QG75H46GqAxIKz%2FUdBVaJAzPGk3%2BkRFXfL76WIlFFirFSn2wldZ039ocNkZuSM7YPcvKDpdZ1lswhb2XOf5Ba0TNFAvrog4b0Qo4cPcN&X-Amz-Signature=467cadf94e371c36bf21f4b5ac55cc2ccf40afb3d241d472d2223bbcd488f60f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J2YWM6B%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIB0WTRhCCwWymeSjj%2B1BpTl5Q0RjHnhSGmyqdV%2BwNI2QAiEAgQiLShMkJZz6ODnzwI%2F68eKyzf%2BXAe6UMrkUW2tPLGwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNjexXVIPtNHVHSuqircA6Ugvs%2Bug2E%2Be%2FLH5HM18rvTMJXAX9B7jTMwjUg3BmpG%2FvuhueGHBj4GmOAyuQJEm3b4zC32T0jYFuWkkqezZhtBIH%2FVHLZDzPTmX%2FU%2FNPMy3%2BTEwDU97tgSSa3ksYkxfELfVKKT3s9SFMO1eb12T37G%2F7EcC%2Bcsbbpunxek5MuiHhfOnMFtnBr7LJAstqPrpDOf6RffN4aNTJzIquupU8LRMcULFqqHvSE4qnELuTXfKr%2FDxOkihvJs8hVv4umsQBUW74JwbVtiqJ56wyls2olu99DDqONbHGOu03yP1SXKmFyxnTXMVr0Cb9%2FU%2FgxnJnB4Gi%2Bgk8%2F7X0zvDBMVsbTJHP8n%2BfpEQZt%2BuNprB5AwgScuoGR%2FG0ARBWYJqqefV1blmo9CDNXn2NZEQ6My84GI%2F8WuvXqqzBlot9U2DCZ6542pDS%2BDF9Xs4k%2BuAlUo0%2Fp2oGy8WIsLUf5qmKGKp%2FsvvsN34pUMKxCV3XNw7KbOzDtY6UF5D99LlpUJgJhPuf2%2BKtO%2BxdXrSy3LoarpvBbj2kghAeNshSZK3r53dML%2BT%2BGnbE3EUEDBv%2FlsLmqumSzE3IZ%2FPlSpL7ZoSfZKCccphnrOhAZgISJKFva4EXFn60sPl2%2BrLGSJ0%2BXkMJW8jr0GOqUBBsxa%2F%2B6KnziVhcIq2gU3COhpJrzfHII8wTrRdSBZF5sL5MBXS4Ws3pkQFYB18A0Jp9HW9%2BTQN6f%2F5Rb2ACLrus%2B2katTlBvQrdNmMYk9zH709HoUVB18QG75H46GqAxIKz%2FUdBVaJAzPGk3%2BkRFXfL76WIlFFirFSn2wldZ039ocNkZuSM7YPcvKDpdZ1lswhb2XOf5Ba0TNFAvrog4b0Qo4cPcN&X-Amz-Signature=1f9c8259d1824bb897d39c22a8d2dc38b55f7a0ffbfb91a03540a01135158701&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

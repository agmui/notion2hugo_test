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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZLFX5FR%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZz16wHevo%2Fx%2F5Q5ElNtXKg04OHoadCVO1cfkSJOHBuwIgVYR%2Bk0Mv7vEm8BdEWNKiZXqs7TMqx2I%2BRygDEA7GxtYqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORfBtzPWXqxN8oYQSrcAwKjAmtXTGy%2FuiE5rupvKa%2F133BToXuMyQyUGvs6Gc1rd%2B3ALJukukl6U0RIzufyZpiSZiPtHmUm7nMxqVEQUAbSaoSG0FmPT1krkdKs5M9w81LTVP0YwSM3MqJF%2B6WB3CtLjcsRfvIf3bWBbfaGUZzxbX9V9hRYtSaKiVc4KWbL3%2FzM39DO0MI1e5MBdspU621c%2Fgwf9a%2BxxvvHwJLR5BQcd1CC7YXFtjEm9nGFPfalTIkxULKec4dwNCm3GQw06nPCABspJzTxexHfXtkK%2B%2B0tF3gcqIViPnJMfjffJE72G1tyKUJE2FoyTbQvqrMUn7UfyeyVVtUKyhD6R3OvCs3ZgKiZtVFiMCap99qG654DVliPvjQ8MW8EtHKRZuAaFg0iHHHQ8dqhl4sMEK4cq94g8t7bq5YoTYwYWa8SGZcKeT0zB7CTY5AuRxkxQxxNyo9q%2BU32ApH%2BZBusqB%2BLXeHwxJrsVOLsroR8Iu%2FrS%2F%2BkEQhQRIWnafoqCwfoc4zk9dVNJ9XU3QykLJNtmCvbkgrg%2BWYY4ZNmDpOORR8fFJtbOlGbsLjvxbGOHOh1gfDVRMFbz%2FvdKjEEjlvhTJamtA6%2FdxAVmxWrCVEKQXKojd8VtNL2BlH5L%2Fc73%2FGGMI%2Fkob0GOqUBtoTZUaYiTphPM3gBWeA%2FDZ3XTm5um3uUFeloI0xXGfFiddzY5xCl9zZvhkCRILDxtzC4t1qMGnXrMz%2FDcpkPTa1ap0s3GEQtAxvlFET%2FL4BgdGgcXjEUkwsSbDX0kmucYMDzC5tFWKrLmen5J4820%2BDnTP1HAw6rEr9WOmtatu93V8zNBG%2BDhWqGA9OlJL4QgAn08CVmTU%2BXMNAe9v%2BnpEsvTgLr&X-Amz-Signature=fe2b94b06ade36e25bdea48fb60c10d1a0ac388b9b552a17d76dca67c0432f15&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZLFX5FR%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZz16wHevo%2Fx%2F5Q5ElNtXKg04OHoadCVO1cfkSJOHBuwIgVYR%2Bk0Mv7vEm8BdEWNKiZXqs7TMqx2I%2BRygDEA7GxtYqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORfBtzPWXqxN8oYQSrcAwKjAmtXTGy%2FuiE5rupvKa%2F133BToXuMyQyUGvs6Gc1rd%2B3ALJukukl6U0RIzufyZpiSZiPtHmUm7nMxqVEQUAbSaoSG0FmPT1krkdKs5M9w81LTVP0YwSM3MqJF%2B6WB3CtLjcsRfvIf3bWBbfaGUZzxbX9V9hRYtSaKiVc4KWbL3%2FzM39DO0MI1e5MBdspU621c%2Fgwf9a%2BxxvvHwJLR5BQcd1CC7YXFtjEm9nGFPfalTIkxULKec4dwNCm3GQw06nPCABspJzTxexHfXtkK%2B%2B0tF3gcqIViPnJMfjffJE72G1tyKUJE2FoyTbQvqrMUn7UfyeyVVtUKyhD6R3OvCs3ZgKiZtVFiMCap99qG654DVliPvjQ8MW8EtHKRZuAaFg0iHHHQ8dqhl4sMEK4cq94g8t7bq5YoTYwYWa8SGZcKeT0zB7CTY5AuRxkxQxxNyo9q%2BU32ApH%2BZBusqB%2BLXeHwxJrsVOLsroR8Iu%2FrS%2F%2BkEQhQRIWnafoqCwfoc4zk9dVNJ9XU3QykLJNtmCvbkgrg%2BWYY4ZNmDpOORR8fFJtbOlGbsLjvxbGOHOh1gfDVRMFbz%2FvdKjEEjlvhTJamtA6%2FdxAVmxWrCVEKQXKojd8VtNL2BlH5L%2Fc73%2FGGMI%2Fkob0GOqUBtoTZUaYiTphPM3gBWeA%2FDZ3XTm5um3uUFeloI0xXGfFiddzY5xCl9zZvhkCRILDxtzC4t1qMGnXrMz%2FDcpkPTa1ap0s3GEQtAxvlFET%2FL4BgdGgcXjEUkwsSbDX0kmucYMDzC5tFWKrLmen5J4820%2BDnTP1HAw6rEr9WOmtatu93V8zNBG%2BDhWqGA9OlJL4QgAn08CVmTU%2BXMNAe9v%2BnpEsvTgLr&X-Amz-Signature=0efc8e2f5af940d39dfff0941f0952afa8309eb23db174864c15b8e01b9ceb7a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZLFX5FR%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZz16wHevo%2Fx%2F5Q5ElNtXKg04OHoadCVO1cfkSJOHBuwIgVYR%2Bk0Mv7vEm8BdEWNKiZXqs7TMqx2I%2BRygDEA7GxtYqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORfBtzPWXqxN8oYQSrcAwKjAmtXTGy%2FuiE5rupvKa%2F133BToXuMyQyUGvs6Gc1rd%2B3ALJukukl6U0RIzufyZpiSZiPtHmUm7nMxqVEQUAbSaoSG0FmPT1krkdKs5M9w81LTVP0YwSM3MqJF%2B6WB3CtLjcsRfvIf3bWBbfaGUZzxbX9V9hRYtSaKiVc4KWbL3%2FzM39DO0MI1e5MBdspU621c%2Fgwf9a%2BxxvvHwJLR5BQcd1CC7YXFtjEm9nGFPfalTIkxULKec4dwNCm3GQw06nPCABspJzTxexHfXtkK%2B%2B0tF3gcqIViPnJMfjffJE72G1tyKUJE2FoyTbQvqrMUn7UfyeyVVtUKyhD6R3OvCs3ZgKiZtVFiMCap99qG654DVliPvjQ8MW8EtHKRZuAaFg0iHHHQ8dqhl4sMEK4cq94g8t7bq5YoTYwYWa8SGZcKeT0zB7CTY5AuRxkxQxxNyo9q%2BU32ApH%2BZBusqB%2BLXeHwxJrsVOLsroR8Iu%2FrS%2F%2BkEQhQRIWnafoqCwfoc4zk9dVNJ9XU3QykLJNtmCvbkgrg%2BWYY4ZNmDpOORR8fFJtbOlGbsLjvxbGOHOh1gfDVRMFbz%2FvdKjEEjlvhTJamtA6%2FdxAVmxWrCVEKQXKojd8VtNL2BlH5L%2Fc73%2FGGMI%2Fkob0GOqUBtoTZUaYiTphPM3gBWeA%2FDZ3XTm5um3uUFeloI0xXGfFiddzY5xCl9zZvhkCRILDxtzC4t1qMGnXrMz%2FDcpkPTa1ap0s3GEQtAxvlFET%2FL4BgdGgcXjEUkwsSbDX0kmucYMDzC5tFWKrLmen5J4820%2BDnTP1HAw6rEr9WOmtatu93V8zNBG%2BDhWqGA9OlJL4QgAn08CVmTU%2BXMNAe9v%2BnpEsvTgLr&X-Amz-Signature=523c2ccd322baa39a2fe480eabba044083aff6bb070a3ea7d76fcb8309544ed5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZLFX5FR%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZz16wHevo%2Fx%2F5Q5ElNtXKg04OHoadCVO1cfkSJOHBuwIgVYR%2Bk0Mv7vEm8BdEWNKiZXqs7TMqx2I%2BRygDEA7GxtYqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORfBtzPWXqxN8oYQSrcAwKjAmtXTGy%2FuiE5rupvKa%2F133BToXuMyQyUGvs6Gc1rd%2B3ALJukukl6U0RIzufyZpiSZiPtHmUm7nMxqVEQUAbSaoSG0FmPT1krkdKs5M9w81LTVP0YwSM3MqJF%2B6WB3CtLjcsRfvIf3bWBbfaGUZzxbX9V9hRYtSaKiVc4KWbL3%2FzM39DO0MI1e5MBdspU621c%2Fgwf9a%2BxxvvHwJLR5BQcd1CC7YXFtjEm9nGFPfalTIkxULKec4dwNCm3GQw06nPCABspJzTxexHfXtkK%2B%2B0tF3gcqIViPnJMfjffJE72G1tyKUJE2FoyTbQvqrMUn7UfyeyVVtUKyhD6R3OvCs3ZgKiZtVFiMCap99qG654DVliPvjQ8MW8EtHKRZuAaFg0iHHHQ8dqhl4sMEK4cq94g8t7bq5YoTYwYWa8SGZcKeT0zB7CTY5AuRxkxQxxNyo9q%2BU32ApH%2BZBusqB%2BLXeHwxJrsVOLsroR8Iu%2FrS%2F%2BkEQhQRIWnafoqCwfoc4zk9dVNJ9XU3QykLJNtmCvbkgrg%2BWYY4ZNmDpOORR8fFJtbOlGbsLjvxbGOHOh1gfDVRMFbz%2FvdKjEEjlvhTJamtA6%2FdxAVmxWrCVEKQXKojd8VtNL2BlH5L%2Fc73%2FGGMI%2Fkob0GOqUBtoTZUaYiTphPM3gBWeA%2FDZ3XTm5um3uUFeloI0xXGfFiddzY5xCl9zZvhkCRILDxtzC4t1qMGnXrMz%2FDcpkPTa1ap0s3GEQtAxvlFET%2FL4BgdGgcXjEUkwsSbDX0kmucYMDzC5tFWKrLmen5J4820%2BDnTP1HAw6rEr9WOmtatu93V8zNBG%2BDhWqGA9OlJL4QgAn08CVmTU%2BXMNAe9v%2BnpEsvTgLr&X-Amz-Signature=29422a203a7b7b958ee8ceb9cdb26b92da25630a2277345229db70c1432e1b36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZLFX5FR%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZz16wHevo%2Fx%2F5Q5ElNtXKg04OHoadCVO1cfkSJOHBuwIgVYR%2Bk0Mv7vEm8BdEWNKiZXqs7TMqx2I%2BRygDEA7GxtYqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORfBtzPWXqxN8oYQSrcAwKjAmtXTGy%2FuiE5rupvKa%2F133BToXuMyQyUGvs6Gc1rd%2B3ALJukukl6U0RIzufyZpiSZiPtHmUm7nMxqVEQUAbSaoSG0FmPT1krkdKs5M9w81LTVP0YwSM3MqJF%2B6WB3CtLjcsRfvIf3bWBbfaGUZzxbX9V9hRYtSaKiVc4KWbL3%2FzM39DO0MI1e5MBdspU621c%2Fgwf9a%2BxxvvHwJLR5BQcd1CC7YXFtjEm9nGFPfalTIkxULKec4dwNCm3GQw06nPCABspJzTxexHfXtkK%2B%2B0tF3gcqIViPnJMfjffJE72G1tyKUJE2FoyTbQvqrMUn7UfyeyVVtUKyhD6R3OvCs3ZgKiZtVFiMCap99qG654DVliPvjQ8MW8EtHKRZuAaFg0iHHHQ8dqhl4sMEK4cq94g8t7bq5YoTYwYWa8SGZcKeT0zB7CTY5AuRxkxQxxNyo9q%2BU32ApH%2BZBusqB%2BLXeHwxJrsVOLsroR8Iu%2FrS%2F%2BkEQhQRIWnafoqCwfoc4zk9dVNJ9XU3QykLJNtmCvbkgrg%2BWYY4ZNmDpOORR8fFJtbOlGbsLjvxbGOHOh1gfDVRMFbz%2FvdKjEEjlvhTJamtA6%2FdxAVmxWrCVEKQXKojd8VtNL2BlH5L%2Fc73%2FGGMI%2Fkob0GOqUBtoTZUaYiTphPM3gBWeA%2FDZ3XTm5um3uUFeloI0xXGfFiddzY5xCl9zZvhkCRILDxtzC4t1qMGnXrMz%2FDcpkPTa1ap0s3GEQtAxvlFET%2FL4BgdGgcXjEUkwsSbDX0kmucYMDzC5tFWKrLmen5J4820%2BDnTP1HAw6rEr9WOmtatu93V8zNBG%2BDhWqGA9OlJL4QgAn08CVmTU%2BXMNAe9v%2BnpEsvTgLr&X-Amz-Signature=1bc10cae9416d11703617645ca432020dbd4eed6ec6af143abe01b6febdddcf3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

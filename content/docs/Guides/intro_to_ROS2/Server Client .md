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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEGFIXH6%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtkeMgUahc0MWF5nsSJWCyWGknFTE3WcxeEgQL%2Fau6gAiARYfml97COjgxbW%2FYos3%2FP07wdk%2FmXgOekLkWI0Y9VXCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMYiKJuB7JmfKh6P6%2FKtwDyLJMHDA0ST5V7FyzWwgisPgcwJfmzfmqx%2BvjlQLRz1O6M%2BVNXLyp9qtxMFbb7JoOXOndRBMgK2XxpRqsmNWgAtXB6xKlcsDut8rnJsQSVab%2BBwCq37ffoNPIfrm6oEp1wvZz3%2ByM%2FoPp%2BsKQfOv%2F3nu8EWxuKt9vjm4Q%2FuP6IxOZJAqxXRy91xIdEyCrt82qL62kYVdKjm9jGelJQO2K106ZtNzJIjErSUI%2BRVbVj%2Bya7xtSdOVqtRolr8lk3fYv6nAOorYCGgsokhacF6qaRVch19259MnSVxf9qrW2GrgD3ua5QtCBf8LNzw5618fNV%2Ffhi%2B%2Fh5Bd7fUrjMGewdAXIjXMwxqr0iaN0cCYE%2BmrM%2Biz52GbAeeK%2FHUuedKSRZUUFF1qW2muQ8DrKcaPt%2BdhsZC4OcRHfnbVTH7J86klOUrFg9mzda3EuylHYLjwU3dQTr4DF1EZFF4Jm0Jh7aGfJ2yt%2FTCqWp%2Bl7HqrIYc5yhOwiGpKIEHRVDBqmDHDBQmlU8X%2F0aBZrUOCyLNSUpoLixZM1Wfv3YuPBrkhytKBs26Q3xtcUO3VTSrmX8vaSGPagDb0yzD3cs9AoljMr3WWPsQsRcJ2VSH%2F5fyYe38XdFNoK3FnyYkJwLt8w24r9vwY6pgFfDhs5ggABwaXqOEEdgT90uG2Z6P7p8QlzPGqfDwYPoHaEGyCaLTja0dUVVqv%2FFfgxaEuFcIHLy9ssWMkP%2F18SNQ1ZcycbgB8rb%2FXKe6IutTgd753BuNAc1Iob%2BtqH35tsld%2Bt0C9B0XrVpB2PgYrkfXncynIy7tQp2YuGSkIJJFS7PGP2N7TqPayw%2By8bX8ZzCj%2Bx4xP4TLCmT20PZKXaNXYWKsgq&X-Amz-Signature=c2e7c60e6b360c9811645832d9bffac213a99626866f517554c7297142dfaefb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEGFIXH6%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtkeMgUahc0MWF5nsSJWCyWGknFTE3WcxeEgQL%2Fau6gAiARYfml97COjgxbW%2FYos3%2FP07wdk%2FmXgOekLkWI0Y9VXCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMYiKJuB7JmfKh6P6%2FKtwDyLJMHDA0ST5V7FyzWwgisPgcwJfmzfmqx%2BvjlQLRz1O6M%2BVNXLyp9qtxMFbb7JoOXOndRBMgK2XxpRqsmNWgAtXB6xKlcsDut8rnJsQSVab%2BBwCq37ffoNPIfrm6oEp1wvZz3%2ByM%2FoPp%2BsKQfOv%2F3nu8EWxuKt9vjm4Q%2FuP6IxOZJAqxXRy91xIdEyCrt82qL62kYVdKjm9jGelJQO2K106ZtNzJIjErSUI%2BRVbVj%2Bya7xtSdOVqtRolr8lk3fYv6nAOorYCGgsokhacF6qaRVch19259MnSVxf9qrW2GrgD3ua5QtCBf8LNzw5618fNV%2Ffhi%2B%2Fh5Bd7fUrjMGewdAXIjXMwxqr0iaN0cCYE%2BmrM%2Biz52GbAeeK%2FHUuedKSRZUUFF1qW2muQ8DrKcaPt%2BdhsZC4OcRHfnbVTH7J86klOUrFg9mzda3EuylHYLjwU3dQTr4DF1EZFF4Jm0Jh7aGfJ2yt%2FTCqWp%2Bl7HqrIYc5yhOwiGpKIEHRVDBqmDHDBQmlU8X%2F0aBZrUOCyLNSUpoLixZM1Wfv3YuPBrkhytKBs26Q3xtcUO3VTSrmX8vaSGPagDb0yzD3cs9AoljMr3WWPsQsRcJ2VSH%2F5fyYe38XdFNoK3FnyYkJwLt8w24r9vwY6pgFfDhs5ggABwaXqOEEdgT90uG2Z6P7p8QlzPGqfDwYPoHaEGyCaLTja0dUVVqv%2FFfgxaEuFcIHLy9ssWMkP%2F18SNQ1ZcycbgB8rb%2FXKe6IutTgd753BuNAc1Iob%2BtqH35tsld%2Bt0C9B0XrVpB2PgYrkfXncynIy7tQp2YuGSkIJJFS7PGP2N7TqPayw%2By8bX8ZzCj%2Bx4xP4TLCmT20PZKXaNXYWKsgq&X-Amz-Signature=37cc6361a4673238db8600795b132c546c0d24a6aa19d90e18e31ba47bb1bc0f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEGFIXH6%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtkeMgUahc0MWF5nsSJWCyWGknFTE3WcxeEgQL%2Fau6gAiARYfml97COjgxbW%2FYos3%2FP07wdk%2FmXgOekLkWI0Y9VXCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMYiKJuB7JmfKh6P6%2FKtwDyLJMHDA0ST5V7FyzWwgisPgcwJfmzfmqx%2BvjlQLRz1O6M%2BVNXLyp9qtxMFbb7JoOXOndRBMgK2XxpRqsmNWgAtXB6xKlcsDut8rnJsQSVab%2BBwCq37ffoNPIfrm6oEp1wvZz3%2ByM%2FoPp%2BsKQfOv%2F3nu8EWxuKt9vjm4Q%2FuP6IxOZJAqxXRy91xIdEyCrt82qL62kYVdKjm9jGelJQO2K106ZtNzJIjErSUI%2BRVbVj%2Bya7xtSdOVqtRolr8lk3fYv6nAOorYCGgsokhacF6qaRVch19259MnSVxf9qrW2GrgD3ua5QtCBf8LNzw5618fNV%2Ffhi%2B%2Fh5Bd7fUrjMGewdAXIjXMwxqr0iaN0cCYE%2BmrM%2Biz52GbAeeK%2FHUuedKSRZUUFF1qW2muQ8DrKcaPt%2BdhsZC4OcRHfnbVTH7J86klOUrFg9mzda3EuylHYLjwU3dQTr4DF1EZFF4Jm0Jh7aGfJ2yt%2FTCqWp%2Bl7HqrIYc5yhOwiGpKIEHRVDBqmDHDBQmlU8X%2F0aBZrUOCyLNSUpoLixZM1Wfv3YuPBrkhytKBs26Q3xtcUO3VTSrmX8vaSGPagDb0yzD3cs9AoljMr3WWPsQsRcJ2VSH%2F5fyYe38XdFNoK3FnyYkJwLt8w24r9vwY6pgFfDhs5ggABwaXqOEEdgT90uG2Z6P7p8QlzPGqfDwYPoHaEGyCaLTja0dUVVqv%2FFfgxaEuFcIHLy9ssWMkP%2F18SNQ1ZcycbgB8rb%2FXKe6IutTgd753BuNAc1Iob%2BtqH35tsld%2Bt0C9B0XrVpB2PgYrkfXncynIy7tQp2YuGSkIJJFS7PGP2N7TqPayw%2By8bX8ZzCj%2Bx4xP4TLCmT20PZKXaNXYWKsgq&X-Amz-Signature=680084ffde50c644a65e8fef26b92fd2a8a0af8bd1c8444f63c4626fa173036a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEGFIXH6%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtkeMgUahc0MWF5nsSJWCyWGknFTE3WcxeEgQL%2Fau6gAiARYfml97COjgxbW%2FYos3%2FP07wdk%2FmXgOekLkWI0Y9VXCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMYiKJuB7JmfKh6P6%2FKtwDyLJMHDA0ST5V7FyzWwgisPgcwJfmzfmqx%2BvjlQLRz1O6M%2BVNXLyp9qtxMFbb7JoOXOndRBMgK2XxpRqsmNWgAtXB6xKlcsDut8rnJsQSVab%2BBwCq37ffoNPIfrm6oEp1wvZz3%2ByM%2FoPp%2BsKQfOv%2F3nu8EWxuKt9vjm4Q%2FuP6IxOZJAqxXRy91xIdEyCrt82qL62kYVdKjm9jGelJQO2K106ZtNzJIjErSUI%2BRVbVj%2Bya7xtSdOVqtRolr8lk3fYv6nAOorYCGgsokhacF6qaRVch19259MnSVxf9qrW2GrgD3ua5QtCBf8LNzw5618fNV%2Ffhi%2B%2Fh5Bd7fUrjMGewdAXIjXMwxqr0iaN0cCYE%2BmrM%2Biz52GbAeeK%2FHUuedKSRZUUFF1qW2muQ8DrKcaPt%2BdhsZC4OcRHfnbVTH7J86klOUrFg9mzda3EuylHYLjwU3dQTr4DF1EZFF4Jm0Jh7aGfJ2yt%2FTCqWp%2Bl7HqrIYc5yhOwiGpKIEHRVDBqmDHDBQmlU8X%2F0aBZrUOCyLNSUpoLixZM1Wfv3YuPBrkhytKBs26Q3xtcUO3VTSrmX8vaSGPagDb0yzD3cs9AoljMr3WWPsQsRcJ2VSH%2F5fyYe38XdFNoK3FnyYkJwLt8w24r9vwY6pgFfDhs5ggABwaXqOEEdgT90uG2Z6P7p8QlzPGqfDwYPoHaEGyCaLTja0dUVVqv%2FFfgxaEuFcIHLy9ssWMkP%2F18SNQ1ZcycbgB8rb%2FXKe6IutTgd753BuNAc1Iob%2BtqH35tsld%2Bt0C9B0XrVpB2PgYrkfXncynIy7tQp2YuGSkIJJFS7PGP2N7TqPayw%2By8bX8ZzCj%2Bx4xP4TLCmT20PZKXaNXYWKsgq&X-Amz-Signature=9057e373f9f49efe2ccf88a654e990f2a1828b5b482925a4f9dde9044b5a40f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEGFIXH6%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtkeMgUahc0MWF5nsSJWCyWGknFTE3WcxeEgQL%2Fau6gAiARYfml97COjgxbW%2FYos3%2FP07wdk%2FmXgOekLkWI0Y9VXCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMYiKJuB7JmfKh6P6%2FKtwDyLJMHDA0ST5V7FyzWwgisPgcwJfmzfmqx%2BvjlQLRz1O6M%2BVNXLyp9qtxMFbb7JoOXOndRBMgK2XxpRqsmNWgAtXB6xKlcsDut8rnJsQSVab%2BBwCq37ffoNPIfrm6oEp1wvZz3%2ByM%2FoPp%2BsKQfOv%2F3nu8EWxuKt9vjm4Q%2FuP6IxOZJAqxXRy91xIdEyCrt82qL62kYVdKjm9jGelJQO2K106ZtNzJIjErSUI%2BRVbVj%2Bya7xtSdOVqtRolr8lk3fYv6nAOorYCGgsokhacF6qaRVch19259MnSVxf9qrW2GrgD3ua5QtCBf8LNzw5618fNV%2Ffhi%2B%2Fh5Bd7fUrjMGewdAXIjXMwxqr0iaN0cCYE%2BmrM%2Biz52GbAeeK%2FHUuedKSRZUUFF1qW2muQ8DrKcaPt%2BdhsZC4OcRHfnbVTH7J86klOUrFg9mzda3EuylHYLjwU3dQTr4DF1EZFF4Jm0Jh7aGfJ2yt%2FTCqWp%2Bl7HqrIYc5yhOwiGpKIEHRVDBqmDHDBQmlU8X%2F0aBZrUOCyLNSUpoLixZM1Wfv3YuPBrkhytKBs26Q3xtcUO3VTSrmX8vaSGPagDb0yzD3cs9AoljMr3WWPsQsRcJ2VSH%2F5fyYe38XdFNoK3FnyYkJwLt8w24r9vwY6pgFfDhs5ggABwaXqOEEdgT90uG2Z6P7p8QlzPGqfDwYPoHaEGyCaLTja0dUVVqv%2FFfgxaEuFcIHLy9ssWMkP%2F18SNQ1ZcycbgB8rb%2FXKe6IutTgd753BuNAc1Iob%2BtqH35tsld%2Bt0C9B0XrVpB2PgYrkfXncynIy7tQp2YuGSkIJJFS7PGP2N7TqPayw%2By8bX8ZzCj%2Bx4xP4TLCmT20PZKXaNXYWKsgq&X-Amz-Signature=23b4de6d3520a5bba09b41fa7573d28837e7089b5f3dff2c8aab881af32c9989&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

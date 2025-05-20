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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULAXMHAM%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICIr19uPYZSIJIw6k%2BeIlUszUj3a4mf7yQ70TTHcm7POAiEAmthtoP3Ic1WdnrZ6g2BbwyJF5JOXoCfNUviDCsK7T5oqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYTKRrqZaYOMfX%2FUCrcAyiIiQqc1A%2BeiczI%2FV0y2DfyZITtJZTRTriTpT05hV1Gwb9FflPO6N%2F%2BQzZqGARX5g7inOlBvXfu23lwZVsmf3SIVw1PZy6RH3PFk9%2Fr2Izyg0cC4iYiU9daHrs7wU6z0vMcRjlDUaTF4Tw6DQopy%2BMw8V9emqweRL2sBu6sKZqrc5lNwFC1duzXZkzCoLtMIuOExTL8QV2stcIdyeijmEx%2BXGnMMV%2BAECGnhVZwSjawFrWL3vqtiJPvKlbXU1UtYokfVaDWN4s%2B7Fy55RVLqPnMKJwva7fftATBxwAsUqzOCmVYiL49Dm%2F1wR5oSPR3WE81iiQ46cBAizdA0woeXZJu8U1le6WCOEs%2F6EHBxK8kJhrVQE1IBdShRSPVJkYVbuLZgCIatQ5lyeRrH%2BtDqRwJIbC%2Bzjc8SU2TSJbF0MYvMdLCeLiec83jRR%2Bs2%2FGNkyxMkpEz%2FRu4BJnu7Iien5ZNFDlrPJ0oGsPd2oR12eJd%2B6XsVGFiNoDG3VvFqm8fwL0gISaLHoRWIKHcdjk%2BwShgNrD6LakzYYrxCmTP%2BGtMSJONw9ttXUW99rtsimwh%2Fltx%2FW1S4y6e6LURIbdqGp3ddjkLZ4EIVjcJjuaSotrZMVLx3BifZ3I39LY3ML2YssEGOqUBWTEqmBtClvBzcG3QQ0EJsGE5OBJmdoIvuPzrX%2FFY45qXjMZPsL4vMaW2jY5NiE77bAjBQNA9E716DxD%2FiAHjEIToseUoZJtfxUme3rIEJyFjqrdkFqYwT9YRDC5paKlT84m%2FMfiiwa2agAhYnh2AryWEoAqrRy66g%2FFIQIn0ZhHXqSzj9VZkIphFALEmKzQK4344MSonH69MDRx2S1MJouH3GlRN&X-Amz-Signature=bbbc841fe879f0925f7c28e61d007c63a5a6e354fd44ca6de68db81975f5a914&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULAXMHAM%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICIr19uPYZSIJIw6k%2BeIlUszUj3a4mf7yQ70TTHcm7POAiEAmthtoP3Ic1WdnrZ6g2BbwyJF5JOXoCfNUviDCsK7T5oqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYTKRrqZaYOMfX%2FUCrcAyiIiQqc1A%2BeiczI%2FV0y2DfyZITtJZTRTriTpT05hV1Gwb9FflPO6N%2F%2BQzZqGARX5g7inOlBvXfu23lwZVsmf3SIVw1PZy6RH3PFk9%2Fr2Izyg0cC4iYiU9daHrs7wU6z0vMcRjlDUaTF4Tw6DQopy%2BMw8V9emqweRL2sBu6sKZqrc5lNwFC1duzXZkzCoLtMIuOExTL8QV2stcIdyeijmEx%2BXGnMMV%2BAECGnhVZwSjawFrWL3vqtiJPvKlbXU1UtYokfVaDWN4s%2B7Fy55RVLqPnMKJwva7fftATBxwAsUqzOCmVYiL49Dm%2F1wR5oSPR3WE81iiQ46cBAizdA0woeXZJu8U1le6WCOEs%2F6EHBxK8kJhrVQE1IBdShRSPVJkYVbuLZgCIatQ5lyeRrH%2BtDqRwJIbC%2Bzjc8SU2TSJbF0MYvMdLCeLiec83jRR%2Bs2%2FGNkyxMkpEz%2FRu4BJnu7Iien5ZNFDlrPJ0oGsPd2oR12eJd%2B6XsVGFiNoDG3VvFqm8fwL0gISaLHoRWIKHcdjk%2BwShgNrD6LakzYYrxCmTP%2BGtMSJONw9ttXUW99rtsimwh%2Fltx%2FW1S4y6e6LURIbdqGp3ddjkLZ4EIVjcJjuaSotrZMVLx3BifZ3I39LY3ML2YssEGOqUBWTEqmBtClvBzcG3QQ0EJsGE5OBJmdoIvuPzrX%2FFY45qXjMZPsL4vMaW2jY5NiE77bAjBQNA9E716DxD%2FiAHjEIToseUoZJtfxUme3rIEJyFjqrdkFqYwT9YRDC5paKlT84m%2FMfiiwa2agAhYnh2AryWEoAqrRy66g%2FFIQIn0ZhHXqSzj9VZkIphFALEmKzQK4344MSonH69MDRx2S1MJouH3GlRN&X-Amz-Signature=88655559e34ed5b6236ecd572ec206896fc61c21aa603ff776a0ef1a7c8dd0f1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULAXMHAM%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICIr19uPYZSIJIw6k%2BeIlUszUj3a4mf7yQ70TTHcm7POAiEAmthtoP3Ic1WdnrZ6g2BbwyJF5JOXoCfNUviDCsK7T5oqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYTKRrqZaYOMfX%2FUCrcAyiIiQqc1A%2BeiczI%2FV0y2DfyZITtJZTRTriTpT05hV1Gwb9FflPO6N%2F%2BQzZqGARX5g7inOlBvXfu23lwZVsmf3SIVw1PZy6RH3PFk9%2Fr2Izyg0cC4iYiU9daHrs7wU6z0vMcRjlDUaTF4Tw6DQopy%2BMw8V9emqweRL2sBu6sKZqrc5lNwFC1duzXZkzCoLtMIuOExTL8QV2stcIdyeijmEx%2BXGnMMV%2BAECGnhVZwSjawFrWL3vqtiJPvKlbXU1UtYokfVaDWN4s%2B7Fy55RVLqPnMKJwva7fftATBxwAsUqzOCmVYiL49Dm%2F1wR5oSPR3WE81iiQ46cBAizdA0woeXZJu8U1le6WCOEs%2F6EHBxK8kJhrVQE1IBdShRSPVJkYVbuLZgCIatQ5lyeRrH%2BtDqRwJIbC%2Bzjc8SU2TSJbF0MYvMdLCeLiec83jRR%2Bs2%2FGNkyxMkpEz%2FRu4BJnu7Iien5ZNFDlrPJ0oGsPd2oR12eJd%2B6XsVGFiNoDG3VvFqm8fwL0gISaLHoRWIKHcdjk%2BwShgNrD6LakzYYrxCmTP%2BGtMSJONw9ttXUW99rtsimwh%2Fltx%2FW1S4y6e6LURIbdqGp3ddjkLZ4EIVjcJjuaSotrZMVLx3BifZ3I39LY3ML2YssEGOqUBWTEqmBtClvBzcG3QQ0EJsGE5OBJmdoIvuPzrX%2FFY45qXjMZPsL4vMaW2jY5NiE77bAjBQNA9E716DxD%2FiAHjEIToseUoZJtfxUme3rIEJyFjqrdkFqYwT9YRDC5paKlT84m%2FMfiiwa2agAhYnh2AryWEoAqrRy66g%2FFIQIn0ZhHXqSzj9VZkIphFALEmKzQK4344MSonH69MDRx2S1MJouH3GlRN&X-Amz-Signature=10bf0102ad2d5c45022559e8bfb13e1930875d38b1c5ae379af82ac3abace9ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULAXMHAM%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICIr19uPYZSIJIw6k%2BeIlUszUj3a4mf7yQ70TTHcm7POAiEAmthtoP3Ic1WdnrZ6g2BbwyJF5JOXoCfNUviDCsK7T5oqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYTKRrqZaYOMfX%2FUCrcAyiIiQqc1A%2BeiczI%2FV0y2DfyZITtJZTRTriTpT05hV1Gwb9FflPO6N%2F%2BQzZqGARX5g7inOlBvXfu23lwZVsmf3SIVw1PZy6RH3PFk9%2Fr2Izyg0cC4iYiU9daHrs7wU6z0vMcRjlDUaTF4Tw6DQopy%2BMw8V9emqweRL2sBu6sKZqrc5lNwFC1duzXZkzCoLtMIuOExTL8QV2stcIdyeijmEx%2BXGnMMV%2BAECGnhVZwSjawFrWL3vqtiJPvKlbXU1UtYokfVaDWN4s%2B7Fy55RVLqPnMKJwva7fftATBxwAsUqzOCmVYiL49Dm%2F1wR5oSPR3WE81iiQ46cBAizdA0woeXZJu8U1le6WCOEs%2F6EHBxK8kJhrVQE1IBdShRSPVJkYVbuLZgCIatQ5lyeRrH%2BtDqRwJIbC%2Bzjc8SU2TSJbF0MYvMdLCeLiec83jRR%2Bs2%2FGNkyxMkpEz%2FRu4BJnu7Iien5ZNFDlrPJ0oGsPd2oR12eJd%2B6XsVGFiNoDG3VvFqm8fwL0gISaLHoRWIKHcdjk%2BwShgNrD6LakzYYrxCmTP%2BGtMSJONw9ttXUW99rtsimwh%2Fltx%2FW1S4y6e6LURIbdqGp3ddjkLZ4EIVjcJjuaSotrZMVLx3BifZ3I39LY3ML2YssEGOqUBWTEqmBtClvBzcG3QQ0EJsGE5OBJmdoIvuPzrX%2FFY45qXjMZPsL4vMaW2jY5NiE77bAjBQNA9E716DxD%2FiAHjEIToseUoZJtfxUme3rIEJyFjqrdkFqYwT9YRDC5paKlT84m%2FMfiiwa2agAhYnh2AryWEoAqrRy66g%2FFIQIn0ZhHXqSzj9VZkIphFALEmKzQK4344MSonH69MDRx2S1MJouH3GlRN&X-Amz-Signature=309d44b20e2cf43907395f26b5b5d20da3a9be882438989890e8299a4b48a8eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULAXMHAM%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICIr19uPYZSIJIw6k%2BeIlUszUj3a4mf7yQ70TTHcm7POAiEAmthtoP3Ic1WdnrZ6g2BbwyJF5JOXoCfNUviDCsK7T5oqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYTKRrqZaYOMfX%2FUCrcAyiIiQqc1A%2BeiczI%2FV0y2DfyZITtJZTRTriTpT05hV1Gwb9FflPO6N%2F%2BQzZqGARX5g7inOlBvXfu23lwZVsmf3SIVw1PZy6RH3PFk9%2Fr2Izyg0cC4iYiU9daHrs7wU6z0vMcRjlDUaTF4Tw6DQopy%2BMw8V9emqweRL2sBu6sKZqrc5lNwFC1duzXZkzCoLtMIuOExTL8QV2stcIdyeijmEx%2BXGnMMV%2BAECGnhVZwSjawFrWL3vqtiJPvKlbXU1UtYokfVaDWN4s%2B7Fy55RVLqPnMKJwva7fftATBxwAsUqzOCmVYiL49Dm%2F1wR5oSPR3WE81iiQ46cBAizdA0woeXZJu8U1le6WCOEs%2F6EHBxK8kJhrVQE1IBdShRSPVJkYVbuLZgCIatQ5lyeRrH%2BtDqRwJIbC%2Bzjc8SU2TSJbF0MYvMdLCeLiec83jRR%2Bs2%2FGNkyxMkpEz%2FRu4BJnu7Iien5ZNFDlrPJ0oGsPd2oR12eJd%2B6XsVGFiNoDG3VvFqm8fwL0gISaLHoRWIKHcdjk%2BwShgNrD6LakzYYrxCmTP%2BGtMSJONw9ttXUW99rtsimwh%2Fltx%2FW1S4y6e6LURIbdqGp3ddjkLZ4EIVjcJjuaSotrZMVLx3BifZ3I39LY3ML2YssEGOqUBWTEqmBtClvBzcG3QQ0EJsGE5OBJmdoIvuPzrX%2FFY45qXjMZPsL4vMaW2jY5NiE77bAjBQNA9E716DxD%2FiAHjEIToseUoZJtfxUme3rIEJyFjqrdkFqYwT9YRDC5paKlT84m%2FMfiiwa2agAhYnh2AryWEoAqrRy66g%2FFIQIn0ZhHXqSzj9VZkIphFALEmKzQK4344MSonH69MDRx2S1MJouH3GlRN&X-Amz-Signature=f2a11e59120e9e31b9113b60e8ed3764d1032eea02e84920a069473670115fe4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

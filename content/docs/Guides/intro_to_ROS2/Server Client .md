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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDS3LRVO%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAEjn18MCXCYeCP7%2Bl8PwSX0gbCfY2RnTVQqpxmAKCinAiEAuu8M5KsDqIaGChLSOa1IvdqJNKuf172BQEYPY%2FXvD7MqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgDeqTmaEvmBTpQ5yrcA1s5La4KWn0%2FD6WfN8%2F60qLOFVvn6aVZvZV%2FYoVRClxX%2BdnzruEGosWdP9vJKE%2BAclLZwgJ4OaZjkrcp04BaDlUmaBZVwWBgb80hSoX3H5Up0%2FGs6LlJJfJfFfTNAEqMvokt8%2Byzbv7qQxLhYUvCXm39jIa6sI4A%2B%2BI6QznJmy3WFm9fAFscVZ3BK2fLGnI3Q%2FuL3zoe1sTBrRB5NT33WgJvlKv5hCB8LJI5m%2FYfzqiq4uIP7mu27QL7wlKF5i42ZIYZQUR8s9ueES5Axx%2Bb7ArxNaW2%2FjwHsCOUylIa5%2BupQ9%2Bo87RfaSxb8aNdS8spTpMQFTm9trcA63Kq63wwF9Xb7R0c9%2BpuLJ%2B10KhTzhmFpEoI9qbvF%2Fa4yJwwQFtWtQlghWHiLvrUlqYThhfPAzVY1NMhRffJjoH562xmcCwAceMdfRz4itLldm0PQf%2BqCKJgcBQxdORpBftceL%2BO9lv5giGFhRK5eVC1nujMalmeuJt784HSYiQkxhM6NGZMJUUtJi3ANA8edbk465yBMfmHo3trPszmW68hcefKJh%2FBuMST0xqnanp%2Bc3NaEi%2B3H3SeQd8fVxycW5jODOZATKu4%2FAMKdxW%2Bb0Uy9bssD5pkYTEyqtSVgWmDh9Q%2FMPTxv74GOqUBqKJn1iaRi3okMthHAL2tirK4J9BmEtMuJ71XVMxqj4jfDkbyA%2FFyY4%2B0a7xzlgPAYOh5CESKlEymMf3yZtulBdl7MHPkzk%2FUK1bY02kY9Fsaf9LQJWx1j0jhzHmChVnxLig2GZ74SrsV%2F5DGoOd5lUEhxUw1arQAT1iWd%2Fj9XY08SXZXGVtMCISdXikbp%2BE81WwAVjuRnFiEZvicV7EiIQPwXlgq&X-Amz-Signature=24e7b6376ecda01c41cc24556d4df89db177a24e8261848426f499999f64c225&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDS3LRVO%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAEjn18MCXCYeCP7%2Bl8PwSX0gbCfY2RnTVQqpxmAKCinAiEAuu8M5KsDqIaGChLSOa1IvdqJNKuf172BQEYPY%2FXvD7MqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgDeqTmaEvmBTpQ5yrcA1s5La4KWn0%2FD6WfN8%2F60qLOFVvn6aVZvZV%2FYoVRClxX%2BdnzruEGosWdP9vJKE%2BAclLZwgJ4OaZjkrcp04BaDlUmaBZVwWBgb80hSoX3H5Up0%2FGs6LlJJfJfFfTNAEqMvokt8%2Byzbv7qQxLhYUvCXm39jIa6sI4A%2B%2BI6QznJmy3WFm9fAFscVZ3BK2fLGnI3Q%2FuL3zoe1sTBrRB5NT33WgJvlKv5hCB8LJI5m%2FYfzqiq4uIP7mu27QL7wlKF5i42ZIYZQUR8s9ueES5Axx%2Bb7ArxNaW2%2FjwHsCOUylIa5%2BupQ9%2Bo87RfaSxb8aNdS8spTpMQFTm9trcA63Kq63wwF9Xb7R0c9%2BpuLJ%2B10KhTzhmFpEoI9qbvF%2Fa4yJwwQFtWtQlghWHiLvrUlqYThhfPAzVY1NMhRffJjoH562xmcCwAceMdfRz4itLldm0PQf%2BqCKJgcBQxdORpBftceL%2BO9lv5giGFhRK5eVC1nujMalmeuJt784HSYiQkxhM6NGZMJUUtJi3ANA8edbk465yBMfmHo3trPszmW68hcefKJh%2FBuMST0xqnanp%2Bc3NaEi%2B3H3SeQd8fVxycW5jODOZATKu4%2FAMKdxW%2Bb0Uy9bssD5pkYTEyqtSVgWmDh9Q%2FMPTxv74GOqUBqKJn1iaRi3okMthHAL2tirK4J9BmEtMuJ71XVMxqj4jfDkbyA%2FFyY4%2B0a7xzlgPAYOh5CESKlEymMf3yZtulBdl7MHPkzk%2FUK1bY02kY9Fsaf9LQJWx1j0jhzHmChVnxLig2GZ74SrsV%2F5DGoOd5lUEhxUw1arQAT1iWd%2Fj9XY08SXZXGVtMCISdXikbp%2BE81WwAVjuRnFiEZvicV7EiIQPwXlgq&X-Amz-Signature=247ca7bcf822721e01dde8f4ae6e8b921d26c95970102e4cdf0774768b8c73df&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDS3LRVO%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAEjn18MCXCYeCP7%2Bl8PwSX0gbCfY2RnTVQqpxmAKCinAiEAuu8M5KsDqIaGChLSOa1IvdqJNKuf172BQEYPY%2FXvD7MqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgDeqTmaEvmBTpQ5yrcA1s5La4KWn0%2FD6WfN8%2F60qLOFVvn6aVZvZV%2FYoVRClxX%2BdnzruEGosWdP9vJKE%2BAclLZwgJ4OaZjkrcp04BaDlUmaBZVwWBgb80hSoX3H5Up0%2FGs6LlJJfJfFfTNAEqMvokt8%2Byzbv7qQxLhYUvCXm39jIa6sI4A%2B%2BI6QznJmy3WFm9fAFscVZ3BK2fLGnI3Q%2FuL3zoe1sTBrRB5NT33WgJvlKv5hCB8LJI5m%2FYfzqiq4uIP7mu27QL7wlKF5i42ZIYZQUR8s9ueES5Axx%2Bb7ArxNaW2%2FjwHsCOUylIa5%2BupQ9%2Bo87RfaSxb8aNdS8spTpMQFTm9trcA63Kq63wwF9Xb7R0c9%2BpuLJ%2B10KhTzhmFpEoI9qbvF%2Fa4yJwwQFtWtQlghWHiLvrUlqYThhfPAzVY1NMhRffJjoH562xmcCwAceMdfRz4itLldm0PQf%2BqCKJgcBQxdORpBftceL%2BO9lv5giGFhRK5eVC1nujMalmeuJt784HSYiQkxhM6NGZMJUUtJi3ANA8edbk465yBMfmHo3trPszmW68hcefKJh%2FBuMST0xqnanp%2Bc3NaEi%2B3H3SeQd8fVxycW5jODOZATKu4%2FAMKdxW%2Bb0Uy9bssD5pkYTEyqtSVgWmDh9Q%2FMPTxv74GOqUBqKJn1iaRi3okMthHAL2tirK4J9BmEtMuJ71XVMxqj4jfDkbyA%2FFyY4%2B0a7xzlgPAYOh5CESKlEymMf3yZtulBdl7MHPkzk%2FUK1bY02kY9Fsaf9LQJWx1j0jhzHmChVnxLig2GZ74SrsV%2F5DGoOd5lUEhxUw1arQAT1iWd%2Fj9XY08SXZXGVtMCISdXikbp%2BE81WwAVjuRnFiEZvicV7EiIQPwXlgq&X-Amz-Signature=02812f6e8a7a0f6d124c4090aa2d4661aab9b8e822669a7682494e1defe4ef68&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDS3LRVO%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAEjn18MCXCYeCP7%2Bl8PwSX0gbCfY2RnTVQqpxmAKCinAiEAuu8M5KsDqIaGChLSOa1IvdqJNKuf172BQEYPY%2FXvD7MqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgDeqTmaEvmBTpQ5yrcA1s5La4KWn0%2FD6WfN8%2F60qLOFVvn6aVZvZV%2FYoVRClxX%2BdnzruEGosWdP9vJKE%2BAclLZwgJ4OaZjkrcp04BaDlUmaBZVwWBgb80hSoX3H5Up0%2FGs6LlJJfJfFfTNAEqMvokt8%2Byzbv7qQxLhYUvCXm39jIa6sI4A%2B%2BI6QznJmy3WFm9fAFscVZ3BK2fLGnI3Q%2FuL3zoe1sTBrRB5NT33WgJvlKv5hCB8LJI5m%2FYfzqiq4uIP7mu27QL7wlKF5i42ZIYZQUR8s9ueES5Axx%2Bb7ArxNaW2%2FjwHsCOUylIa5%2BupQ9%2Bo87RfaSxb8aNdS8spTpMQFTm9trcA63Kq63wwF9Xb7R0c9%2BpuLJ%2B10KhTzhmFpEoI9qbvF%2Fa4yJwwQFtWtQlghWHiLvrUlqYThhfPAzVY1NMhRffJjoH562xmcCwAceMdfRz4itLldm0PQf%2BqCKJgcBQxdORpBftceL%2BO9lv5giGFhRK5eVC1nujMalmeuJt784HSYiQkxhM6NGZMJUUtJi3ANA8edbk465yBMfmHo3trPszmW68hcefKJh%2FBuMST0xqnanp%2Bc3NaEi%2B3H3SeQd8fVxycW5jODOZATKu4%2FAMKdxW%2Bb0Uy9bssD5pkYTEyqtSVgWmDh9Q%2FMPTxv74GOqUBqKJn1iaRi3okMthHAL2tirK4J9BmEtMuJ71XVMxqj4jfDkbyA%2FFyY4%2B0a7xzlgPAYOh5CESKlEymMf3yZtulBdl7MHPkzk%2FUK1bY02kY9Fsaf9LQJWx1j0jhzHmChVnxLig2GZ74SrsV%2F5DGoOd5lUEhxUw1arQAT1iWd%2Fj9XY08SXZXGVtMCISdXikbp%2BE81WwAVjuRnFiEZvicV7EiIQPwXlgq&X-Amz-Signature=fececbc8b35e53d6c7b43e5f08a8c4adbb7bebc40a1e142fcc17b983015e1927&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDS3LRVO%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAEjn18MCXCYeCP7%2Bl8PwSX0gbCfY2RnTVQqpxmAKCinAiEAuu8M5KsDqIaGChLSOa1IvdqJNKuf172BQEYPY%2FXvD7MqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgDeqTmaEvmBTpQ5yrcA1s5La4KWn0%2FD6WfN8%2F60qLOFVvn6aVZvZV%2FYoVRClxX%2BdnzruEGosWdP9vJKE%2BAclLZwgJ4OaZjkrcp04BaDlUmaBZVwWBgb80hSoX3H5Up0%2FGs6LlJJfJfFfTNAEqMvokt8%2Byzbv7qQxLhYUvCXm39jIa6sI4A%2B%2BI6QznJmy3WFm9fAFscVZ3BK2fLGnI3Q%2FuL3zoe1sTBrRB5NT33WgJvlKv5hCB8LJI5m%2FYfzqiq4uIP7mu27QL7wlKF5i42ZIYZQUR8s9ueES5Axx%2Bb7ArxNaW2%2FjwHsCOUylIa5%2BupQ9%2Bo87RfaSxb8aNdS8spTpMQFTm9trcA63Kq63wwF9Xb7R0c9%2BpuLJ%2B10KhTzhmFpEoI9qbvF%2Fa4yJwwQFtWtQlghWHiLvrUlqYThhfPAzVY1NMhRffJjoH562xmcCwAceMdfRz4itLldm0PQf%2BqCKJgcBQxdORpBftceL%2BO9lv5giGFhRK5eVC1nujMalmeuJt784HSYiQkxhM6NGZMJUUtJi3ANA8edbk465yBMfmHo3trPszmW68hcefKJh%2FBuMST0xqnanp%2Bc3NaEi%2B3H3SeQd8fVxycW5jODOZATKu4%2FAMKdxW%2Bb0Uy9bssD5pkYTEyqtSVgWmDh9Q%2FMPTxv74GOqUBqKJn1iaRi3okMthHAL2tirK4J9BmEtMuJ71XVMxqj4jfDkbyA%2FFyY4%2B0a7xzlgPAYOh5CESKlEymMf3yZtulBdl7MHPkzk%2FUK1bY02kY9Fsaf9LQJWx1j0jhzHmChVnxLig2GZ74SrsV%2F5DGoOd5lUEhxUw1arQAT1iWd%2Fj9XY08SXZXGVtMCISdXikbp%2BE81WwAVjuRnFiEZvicV7EiIQPwXlgq&X-Amz-Signature=8e006da73b152a069eb0b49a785b43aba7db530a07e6d374a01199120b841782&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

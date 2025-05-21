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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEDIVMIK%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCLL3YG2SsIg8Ij6dQrx8%2BzTcUyHwByovH2nSs2Pjv1pgIhAMwor028p7des3XKsGjohJfAne6Dwc%2BTXc6Ay52ZdlrqKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTI05bOetwGS%2BzVCEq3ANszc2OtS1m5waGg0Q%2B8J%2FSLBfMM00PT9YUZzOEpLsXryteUmaYUSCEYFV%2FNFbMHv2%2FkLzQE4zlotKGwnAewmkCZ13%2F0RPDlppWzr7rN5CzJiKQpawpt2Z4Wzdcn3GhdZH3kobG3kDMga8hTwJIj6GHCSkmZ8B6n793SNWpKF9lwk43t%2Ff7JkifXOpj2ABDD4k%2FuPgm2cSoAl2Vk9jMjSLFxf%2Fu5NF1xeEQgdy%2F%2F0z6PjQVcMu55hwt8ieAAiaY9ibqxdb346TidwVTqgs03Ts3WuOpM4wbhV8%2F1Dn5s2WFQNTNTyN3RH07DFUeeWS6A4p6xX7xGB92X7KTMauxg0eM1ahsxHyeuOrb00DW8ASVhyibSL%2FkRXbWVBSBIKT9uekXsRZeP9Y2Ikq0A8s%2FExRR%2FiyxBU623HIPPc4ygVoFYJnwAf%2FC1mb40z3poVSsWRwERJoVOjkZ6Amq3cHIAwzRLvRz9BQ1dXmprFdnFG2Yzj9xuoARNvgJHrLLsKDbaE82I6RT91%2FLSKDRrPrNl%2Bxz3i%2B7mQAyjUIjy6odNAW6fdCDbPkRFBkWDMQNbjWUkbJ9yt2irM7jgt4uvziGGsPr6WAN99I0wvmHkRxUyrPsdo7F0zJMYFEhAC2oQTDEo7jBBjqkAdhEI9%2FLXROFs10xATWzPsmpgo374gpkW2Xr7Jy6JEICO2GaK5rGln341CBlvh%2FXVHVVkJ7pdQZw8WqbXFpX%2FktZO%2BL7%2Bh9uEDTuiD%2FYiVyLHXFYej1cPCEHu8UH4se%2F7EKJ3gVpdjCPFl7qVoLPYEA2Ik02z5Kh%2FZby59%2F08ZpBOSSQ3KwYAE7Eaqg%2B8j%2BgvkZErV7364gK4ccCr%2Bgr0j0H9yox&X-Amz-Signature=c839d6c04084b4143dde9688413c00f155c982819ed937e25c270db171d7eedf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEDIVMIK%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCLL3YG2SsIg8Ij6dQrx8%2BzTcUyHwByovH2nSs2Pjv1pgIhAMwor028p7des3XKsGjohJfAne6Dwc%2BTXc6Ay52ZdlrqKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTI05bOetwGS%2BzVCEq3ANszc2OtS1m5waGg0Q%2B8J%2FSLBfMM00PT9YUZzOEpLsXryteUmaYUSCEYFV%2FNFbMHv2%2FkLzQE4zlotKGwnAewmkCZ13%2F0RPDlppWzr7rN5CzJiKQpawpt2Z4Wzdcn3GhdZH3kobG3kDMga8hTwJIj6GHCSkmZ8B6n793SNWpKF9lwk43t%2Ff7JkifXOpj2ABDD4k%2FuPgm2cSoAl2Vk9jMjSLFxf%2Fu5NF1xeEQgdy%2F%2F0z6PjQVcMu55hwt8ieAAiaY9ibqxdb346TidwVTqgs03Ts3WuOpM4wbhV8%2F1Dn5s2WFQNTNTyN3RH07DFUeeWS6A4p6xX7xGB92X7KTMauxg0eM1ahsxHyeuOrb00DW8ASVhyibSL%2FkRXbWVBSBIKT9uekXsRZeP9Y2Ikq0A8s%2FExRR%2FiyxBU623HIPPc4ygVoFYJnwAf%2FC1mb40z3poVSsWRwERJoVOjkZ6Amq3cHIAwzRLvRz9BQ1dXmprFdnFG2Yzj9xuoARNvgJHrLLsKDbaE82I6RT91%2FLSKDRrPrNl%2Bxz3i%2B7mQAyjUIjy6odNAW6fdCDbPkRFBkWDMQNbjWUkbJ9yt2irM7jgt4uvziGGsPr6WAN99I0wvmHkRxUyrPsdo7F0zJMYFEhAC2oQTDEo7jBBjqkAdhEI9%2FLXROFs10xATWzPsmpgo374gpkW2Xr7Jy6JEICO2GaK5rGln341CBlvh%2FXVHVVkJ7pdQZw8WqbXFpX%2FktZO%2BL7%2Bh9uEDTuiD%2FYiVyLHXFYej1cPCEHu8UH4se%2F7EKJ3gVpdjCPFl7qVoLPYEA2Ik02z5Kh%2FZby59%2F08ZpBOSSQ3KwYAE7Eaqg%2B8j%2BgvkZErV7364gK4ccCr%2Bgr0j0H9yox&X-Amz-Signature=cd70e875fd0cbe548e0a954de2dd6da21d33d08666fbdab25aff3e0d106ca44b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEDIVMIK%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCLL3YG2SsIg8Ij6dQrx8%2BzTcUyHwByovH2nSs2Pjv1pgIhAMwor028p7des3XKsGjohJfAne6Dwc%2BTXc6Ay52ZdlrqKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTI05bOetwGS%2BzVCEq3ANszc2OtS1m5waGg0Q%2B8J%2FSLBfMM00PT9YUZzOEpLsXryteUmaYUSCEYFV%2FNFbMHv2%2FkLzQE4zlotKGwnAewmkCZ13%2F0RPDlppWzr7rN5CzJiKQpawpt2Z4Wzdcn3GhdZH3kobG3kDMga8hTwJIj6GHCSkmZ8B6n793SNWpKF9lwk43t%2Ff7JkifXOpj2ABDD4k%2FuPgm2cSoAl2Vk9jMjSLFxf%2Fu5NF1xeEQgdy%2F%2F0z6PjQVcMu55hwt8ieAAiaY9ibqxdb346TidwVTqgs03Ts3WuOpM4wbhV8%2F1Dn5s2WFQNTNTyN3RH07DFUeeWS6A4p6xX7xGB92X7KTMauxg0eM1ahsxHyeuOrb00DW8ASVhyibSL%2FkRXbWVBSBIKT9uekXsRZeP9Y2Ikq0A8s%2FExRR%2FiyxBU623HIPPc4ygVoFYJnwAf%2FC1mb40z3poVSsWRwERJoVOjkZ6Amq3cHIAwzRLvRz9BQ1dXmprFdnFG2Yzj9xuoARNvgJHrLLsKDbaE82I6RT91%2FLSKDRrPrNl%2Bxz3i%2B7mQAyjUIjy6odNAW6fdCDbPkRFBkWDMQNbjWUkbJ9yt2irM7jgt4uvziGGsPr6WAN99I0wvmHkRxUyrPsdo7F0zJMYFEhAC2oQTDEo7jBBjqkAdhEI9%2FLXROFs10xATWzPsmpgo374gpkW2Xr7Jy6JEICO2GaK5rGln341CBlvh%2FXVHVVkJ7pdQZw8WqbXFpX%2FktZO%2BL7%2Bh9uEDTuiD%2FYiVyLHXFYej1cPCEHu8UH4se%2F7EKJ3gVpdjCPFl7qVoLPYEA2Ik02z5Kh%2FZby59%2F08ZpBOSSQ3KwYAE7Eaqg%2B8j%2BgvkZErV7364gK4ccCr%2Bgr0j0H9yox&X-Amz-Signature=f3b55621c3744bf8370a604c52f65fca91e1cf7784e7828aa0576c6c307a6b65&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEDIVMIK%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCLL3YG2SsIg8Ij6dQrx8%2BzTcUyHwByovH2nSs2Pjv1pgIhAMwor028p7des3XKsGjohJfAne6Dwc%2BTXc6Ay52ZdlrqKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTI05bOetwGS%2BzVCEq3ANszc2OtS1m5waGg0Q%2B8J%2FSLBfMM00PT9YUZzOEpLsXryteUmaYUSCEYFV%2FNFbMHv2%2FkLzQE4zlotKGwnAewmkCZ13%2F0RPDlppWzr7rN5CzJiKQpawpt2Z4Wzdcn3GhdZH3kobG3kDMga8hTwJIj6GHCSkmZ8B6n793SNWpKF9lwk43t%2Ff7JkifXOpj2ABDD4k%2FuPgm2cSoAl2Vk9jMjSLFxf%2Fu5NF1xeEQgdy%2F%2F0z6PjQVcMu55hwt8ieAAiaY9ibqxdb346TidwVTqgs03Ts3WuOpM4wbhV8%2F1Dn5s2WFQNTNTyN3RH07DFUeeWS6A4p6xX7xGB92X7KTMauxg0eM1ahsxHyeuOrb00DW8ASVhyibSL%2FkRXbWVBSBIKT9uekXsRZeP9Y2Ikq0A8s%2FExRR%2FiyxBU623HIPPc4ygVoFYJnwAf%2FC1mb40z3poVSsWRwERJoVOjkZ6Amq3cHIAwzRLvRz9BQ1dXmprFdnFG2Yzj9xuoARNvgJHrLLsKDbaE82I6RT91%2FLSKDRrPrNl%2Bxz3i%2B7mQAyjUIjy6odNAW6fdCDbPkRFBkWDMQNbjWUkbJ9yt2irM7jgt4uvziGGsPr6WAN99I0wvmHkRxUyrPsdo7F0zJMYFEhAC2oQTDEo7jBBjqkAdhEI9%2FLXROFs10xATWzPsmpgo374gpkW2Xr7Jy6JEICO2GaK5rGln341CBlvh%2FXVHVVkJ7pdQZw8WqbXFpX%2FktZO%2BL7%2Bh9uEDTuiD%2FYiVyLHXFYej1cPCEHu8UH4se%2F7EKJ3gVpdjCPFl7qVoLPYEA2Ik02z5Kh%2FZby59%2F08ZpBOSSQ3KwYAE7Eaqg%2B8j%2BgvkZErV7364gK4ccCr%2Bgr0j0H9yox&X-Amz-Signature=20d26c3a0c856299aab474805c86320a94b72dc906f876eaf1cb1597ee9e2107&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEDIVMIK%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCLL3YG2SsIg8Ij6dQrx8%2BzTcUyHwByovH2nSs2Pjv1pgIhAMwor028p7des3XKsGjohJfAne6Dwc%2BTXc6Ay52ZdlrqKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTI05bOetwGS%2BzVCEq3ANszc2OtS1m5waGg0Q%2B8J%2FSLBfMM00PT9YUZzOEpLsXryteUmaYUSCEYFV%2FNFbMHv2%2FkLzQE4zlotKGwnAewmkCZ13%2F0RPDlppWzr7rN5CzJiKQpawpt2Z4Wzdcn3GhdZH3kobG3kDMga8hTwJIj6GHCSkmZ8B6n793SNWpKF9lwk43t%2Ff7JkifXOpj2ABDD4k%2FuPgm2cSoAl2Vk9jMjSLFxf%2Fu5NF1xeEQgdy%2F%2F0z6PjQVcMu55hwt8ieAAiaY9ibqxdb346TidwVTqgs03Ts3WuOpM4wbhV8%2F1Dn5s2WFQNTNTyN3RH07DFUeeWS6A4p6xX7xGB92X7KTMauxg0eM1ahsxHyeuOrb00DW8ASVhyibSL%2FkRXbWVBSBIKT9uekXsRZeP9Y2Ikq0A8s%2FExRR%2FiyxBU623HIPPc4ygVoFYJnwAf%2FC1mb40z3poVSsWRwERJoVOjkZ6Amq3cHIAwzRLvRz9BQ1dXmprFdnFG2Yzj9xuoARNvgJHrLLsKDbaE82I6RT91%2FLSKDRrPrNl%2Bxz3i%2B7mQAyjUIjy6odNAW6fdCDbPkRFBkWDMQNbjWUkbJ9yt2irM7jgt4uvziGGsPr6WAN99I0wvmHkRxUyrPsdo7F0zJMYFEhAC2oQTDEo7jBBjqkAdhEI9%2FLXROFs10xATWzPsmpgo374gpkW2Xr7Jy6JEICO2GaK5rGln341CBlvh%2FXVHVVkJ7pdQZw8WqbXFpX%2FktZO%2BL7%2Bh9uEDTuiD%2FYiVyLHXFYej1cPCEHu8UH4se%2F7EKJ3gVpdjCPFl7qVoLPYEA2Ik02z5Kh%2FZby59%2F08ZpBOSSQ3KwYAE7Eaqg%2B8j%2BgvkZErV7364gK4ccCr%2Bgr0j0H9yox&X-Amz-Signature=1f4e164c4d18b0d46517c9ddca654f005fc54e6d8925d2f3a7d3906a41ab3f05&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DW375MA%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXCf2y5qUf3bTq3wv%2BQf%2BxVChX9gln3JYm5Uv%2BvkuX9AiACQ5Mb1j6aSk5pOj1UYh22qdmtK3MRHzNTZE1CQam7Hir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMhnyBeghuqkTDxWJMKtwDdERQ6F9mmxk7kK57uZJYnt2fy7%2FQpRc3rqlV3dDdP5eddftKjv1gJnrRuGELXHh%2FOzE%2FM%2FfWqL7G%2FeKPP6Ko5pAewQFLZKOZuC6mdHEJP760LB4XTO3vNdpauqm5LckgBpxBgSyh%2F4YWSgJ8izVlDIpMuAcstZCwx4bJTCBcePPAupebSeZIrNQUHZ6gvXMS5gx1OW4GMT9Dbd0vgwm3JhMMINWsiyW%2Fvt17D1ZiezqCC7tdtB%2Fz5emXzLFaGLO%2F76Wcj6rOmxGVrBVZAywK3DAEhNEw7unTVE7nxlTXNfhpnAAOVphmKZAEsbMDqOWnlwlOJdAOLGluuectxZvxaWPCI0F2RbCcFzdp%2Fy97yl8Xuv9SmKYBS2EKDmnPpYjIE53faZnPW3uwjAtAo4KwI0b3DtayMU78upWs25t5qPrGH7ZO2lEaY6JfVD49a3a2Jt696M%2BEG%2FRHiY9rfJ7%2BtDTl%2B9YhUgDKFDwvwJgdfKrvtemwwC%2B4s78LkKKzGZmaUYGk%2BpjZzGQgiWgcgIzkeI5X6zeO3gkymcMCQXsk7BqHCLAWBdIoscKtgTk9n9k%2BO9CgK3HP101qqSCWGoNYAkKjk8fwBi71L8CWEfsO59BAXlhW7dH%2Fc0XDQ9cw0vnqwAY6pgEpQQSrF7ebR%2BUDJk%2BHso%2FO%2FkcHFRSBZlhbNMtnO%2FTjvkCOvSdE%2BHa8mezF%2BkuCtccAgdu7n5JSoilNiLHsv%2BOyajQDQCpL4FkPGlvRWzBFT9Hh3vUv%2Bpuu5udu6W0%2B5LuXC1ds2pw7ezFGnPzoT5xgWTgBP2pimT1eSGTZjQWahS704e7DKR3IJZDeVKAvBejORk%2BoF6dQFSMDoRdTaFEfvCETbTkq&X-Amz-Signature=6f50e43b50462542b21b794b72cbafa7460bfc3519b917c7903726829cceab9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DW375MA%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXCf2y5qUf3bTq3wv%2BQf%2BxVChX9gln3JYm5Uv%2BvkuX9AiACQ5Mb1j6aSk5pOj1UYh22qdmtK3MRHzNTZE1CQam7Hir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMhnyBeghuqkTDxWJMKtwDdERQ6F9mmxk7kK57uZJYnt2fy7%2FQpRc3rqlV3dDdP5eddftKjv1gJnrRuGELXHh%2FOzE%2FM%2FfWqL7G%2FeKPP6Ko5pAewQFLZKOZuC6mdHEJP760LB4XTO3vNdpauqm5LckgBpxBgSyh%2F4YWSgJ8izVlDIpMuAcstZCwx4bJTCBcePPAupebSeZIrNQUHZ6gvXMS5gx1OW4GMT9Dbd0vgwm3JhMMINWsiyW%2Fvt17D1ZiezqCC7tdtB%2Fz5emXzLFaGLO%2F76Wcj6rOmxGVrBVZAywK3DAEhNEw7unTVE7nxlTXNfhpnAAOVphmKZAEsbMDqOWnlwlOJdAOLGluuectxZvxaWPCI0F2RbCcFzdp%2Fy97yl8Xuv9SmKYBS2EKDmnPpYjIE53faZnPW3uwjAtAo4KwI0b3DtayMU78upWs25t5qPrGH7ZO2lEaY6JfVD49a3a2Jt696M%2BEG%2FRHiY9rfJ7%2BtDTl%2B9YhUgDKFDwvwJgdfKrvtemwwC%2B4s78LkKKzGZmaUYGk%2BpjZzGQgiWgcgIzkeI5X6zeO3gkymcMCQXsk7BqHCLAWBdIoscKtgTk9n9k%2BO9CgK3HP101qqSCWGoNYAkKjk8fwBi71L8CWEfsO59BAXlhW7dH%2Fc0XDQ9cw0vnqwAY6pgEpQQSrF7ebR%2BUDJk%2BHso%2FO%2FkcHFRSBZlhbNMtnO%2FTjvkCOvSdE%2BHa8mezF%2BkuCtccAgdu7n5JSoilNiLHsv%2BOyajQDQCpL4FkPGlvRWzBFT9Hh3vUv%2Bpuu5udu6W0%2B5LuXC1ds2pw7ezFGnPzoT5xgWTgBP2pimT1eSGTZjQWahS704e7DKR3IJZDeVKAvBejORk%2BoF6dQFSMDoRdTaFEfvCETbTkq&X-Amz-Signature=2745aca3d4b466cccc20a29f86857282b337156d0551f76b7f504778c7bfd5cf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DW375MA%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXCf2y5qUf3bTq3wv%2BQf%2BxVChX9gln3JYm5Uv%2BvkuX9AiACQ5Mb1j6aSk5pOj1UYh22qdmtK3MRHzNTZE1CQam7Hir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMhnyBeghuqkTDxWJMKtwDdERQ6F9mmxk7kK57uZJYnt2fy7%2FQpRc3rqlV3dDdP5eddftKjv1gJnrRuGELXHh%2FOzE%2FM%2FfWqL7G%2FeKPP6Ko5pAewQFLZKOZuC6mdHEJP760LB4XTO3vNdpauqm5LckgBpxBgSyh%2F4YWSgJ8izVlDIpMuAcstZCwx4bJTCBcePPAupebSeZIrNQUHZ6gvXMS5gx1OW4GMT9Dbd0vgwm3JhMMINWsiyW%2Fvt17D1ZiezqCC7tdtB%2Fz5emXzLFaGLO%2F76Wcj6rOmxGVrBVZAywK3DAEhNEw7unTVE7nxlTXNfhpnAAOVphmKZAEsbMDqOWnlwlOJdAOLGluuectxZvxaWPCI0F2RbCcFzdp%2Fy97yl8Xuv9SmKYBS2EKDmnPpYjIE53faZnPW3uwjAtAo4KwI0b3DtayMU78upWs25t5qPrGH7ZO2lEaY6JfVD49a3a2Jt696M%2BEG%2FRHiY9rfJ7%2BtDTl%2B9YhUgDKFDwvwJgdfKrvtemwwC%2B4s78LkKKzGZmaUYGk%2BpjZzGQgiWgcgIzkeI5X6zeO3gkymcMCQXsk7BqHCLAWBdIoscKtgTk9n9k%2BO9CgK3HP101qqSCWGoNYAkKjk8fwBi71L8CWEfsO59BAXlhW7dH%2Fc0XDQ9cw0vnqwAY6pgEpQQSrF7ebR%2BUDJk%2BHso%2FO%2FkcHFRSBZlhbNMtnO%2FTjvkCOvSdE%2BHa8mezF%2BkuCtccAgdu7n5JSoilNiLHsv%2BOyajQDQCpL4FkPGlvRWzBFT9Hh3vUv%2Bpuu5udu6W0%2B5LuXC1ds2pw7ezFGnPzoT5xgWTgBP2pimT1eSGTZjQWahS704e7DKR3IJZDeVKAvBejORk%2BoF6dQFSMDoRdTaFEfvCETbTkq&X-Amz-Signature=5bb59947925730f848f18e6e8729542608023d79302e1e4a91b06dae352b9234&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DW375MA%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXCf2y5qUf3bTq3wv%2BQf%2BxVChX9gln3JYm5Uv%2BvkuX9AiACQ5Mb1j6aSk5pOj1UYh22qdmtK3MRHzNTZE1CQam7Hir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMhnyBeghuqkTDxWJMKtwDdERQ6F9mmxk7kK57uZJYnt2fy7%2FQpRc3rqlV3dDdP5eddftKjv1gJnrRuGELXHh%2FOzE%2FM%2FfWqL7G%2FeKPP6Ko5pAewQFLZKOZuC6mdHEJP760LB4XTO3vNdpauqm5LckgBpxBgSyh%2F4YWSgJ8izVlDIpMuAcstZCwx4bJTCBcePPAupebSeZIrNQUHZ6gvXMS5gx1OW4GMT9Dbd0vgwm3JhMMINWsiyW%2Fvt17D1ZiezqCC7tdtB%2Fz5emXzLFaGLO%2F76Wcj6rOmxGVrBVZAywK3DAEhNEw7unTVE7nxlTXNfhpnAAOVphmKZAEsbMDqOWnlwlOJdAOLGluuectxZvxaWPCI0F2RbCcFzdp%2Fy97yl8Xuv9SmKYBS2EKDmnPpYjIE53faZnPW3uwjAtAo4KwI0b3DtayMU78upWs25t5qPrGH7ZO2lEaY6JfVD49a3a2Jt696M%2BEG%2FRHiY9rfJ7%2BtDTl%2B9YhUgDKFDwvwJgdfKrvtemwwC%2B4s78LkKKzGZmaUYGk%2BpjZzGQgiWgcgIzkeI5X6zeO3gkymcMCQXsk7BqHCLAWBdIoscKtgTk9n9k%2BO9CgK3HP101qqSCWGoNYAkKjk8fwBi71L8CWEfsO59BAXlhW7dH%2Fc0XDQ9cw0vnqwAY6pgEpQQSrF7ebR%2BUDJk%2BHso%2FO%2FkcHFRSBZlhbNMtnO%2FTjvkCOvSdE%2BHa8mezF%2BkuCtccAgdu7n5JSoilNiLHsv%2BOyajQDQCpL4FkPGlvRWzBFT9Hh3vUv%2Bpuu5udu6W0%2B5LuXC1ds2pw7ezFGnPzoT5xgWTgBP2pimT1eSGTZjQWahS704e7DKR3IJZDeVKAvBejORk%2BoF6dQFSMDoRdTaFEfvCETbTkq&X-Amz-Signature=df98f68ee1f524fb521550977c943ca600bdb05f566d1d64b8cbb76fba49f7e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DW375MA%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXCf2y5qUf3bTq3wv%2BQf%2BxVChX9gln3JYm5Uv%2BvkuX9AiACQ5Mb1j6aSk5pOj1UYh22qdmtK3MRHzNTZE1CQam7Hir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMhnyBeghuqkTDxWJMKtwDdERQ6F9mmxk7kK57uZJYnt2fy7%2FQpRc3rqlV3dDdP5eddftKjv1gJnrRuGELXHh%2FOzE%2FM%2FfWqL7G%2FeKPP6Ko5pAewQFLZKOZuC6mdHEJP760LB4XTO3vNdpauqm5LckgBpxBgSyh%2F4YWSgJ8izVlDIpMuAcstZCwx4bJTCBcePPAupebSeZIrNQUHZ6gvXMS5gx1OW4GMT9Dbd0vgwm3JhMMINWsiyW%2Fvt17D1ZiezqCC7tdtB%2Fz5emXzLFaGLO%2F76Wcj6rOmxGVrBVZAywK3DAEhNEw7unTVE7nxlTXNfhpnAAOVphmKZAEsbMDqOWnlwlOJdAOLGluuectxZvxaWPCI0F2RbCcFzdp%2Fy97yl8Xuv9SmKYBS2EKDmnPpYjIE53faZnPW3uwjAtAo4KwI0b3DtayMU78upWs25t5qPrGH7ZO2lEaY6JfVD49a3a2Jt696M%2BEG%2FRHiY9rfJ7%2BtDTl%2B9YhUgDKFDwvwJgdfKrvtemwwC%2B4s78LkKKzGZmaUYGk%2BpjZzGQgiWgcgIzkeI5X6zeO3gkymcMCQXsk7BqHCLAWBdIoscKtgTk9n9k%2BO9CgK3HP101qqSCWGoNYAkKjk8fwBi71L8CWEfsO59BAXlhW7dH%2Fc0XDQ9cw0vnqwAY6pgEpQQSrF7ebR%2BUDJk%2BHso%2FO%2FkcHFRSBZlhbNMtnO%2FTjvkCOvSdE%2BHa8mezF%2BkuCtccAgdu7n5JSoilNiLHsv%2BOyajQDQCpL4FkPGlvRWzBFT9Hh3vUv%2Bpuu5udu6W0%2B5LuXC1ds2pw7ezFGnPzoT5xgWTgBP2pimT1eSGTZjQWahS704e7DKR3IJZDeVKAvBejORk%2BoF6dQFSMDoRdTaFEfvCETbTkq&X-Amz-Signature=015b4610ee08ae3c8a0b19888e33187468b7b13d23bafbaf23e2d46d4ce98af5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

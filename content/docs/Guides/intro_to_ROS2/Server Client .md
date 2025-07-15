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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4H2RTND%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCq2dYUJ4kZRiYDNbFOLn7fQA2H2SjIZompGucdIkg%2B2AIgXFFduCzhffDZTL5KYbE%2BIF6CviKpyFKONK2xAXc%2BYsAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDEN5DhtRPQPwqytMQSrcA0dLBDaIOmfruuHmo1F%2B5V43EsfnLNvZjppZUZ%2Bk1NOOv%2FNcOrgRamZc%2BmTIgPsMsaWFWYrRE83Trs9nDyK4YRrg%2FOO6oy72%2Fpx8O1fxYoLtacAXqJJFlJnz5s1L%2FEJxue%2FFTBre7lJeykVPe%2BdBNMojNhc%2BlvWHxjCEnUZZjWH1%2BTshFJcrpqyne%2Fv1%2Fs31mdRv4Q%2FDGL3HcaeT9qQT50hufhQ7EcnVkY9N4eDfbciDTHtumkCsNRv%2B0akncR3zi4ZEgfRHvTaW26D%2F4gG3xNBdMBxEvWT2PDf%2FLL0WAuVQ6aJwSJWLnn7XXLqBGT0%2B84sCKQmmj1rofnauuLGJN22BtpukNBI%2FFunlDxFK0979RI8cRNHWIUTQORB0Jcwf0l7WwnRK1N7ydtqFn9shSTeHRSb4qVP2wpdNxtQzx6UfbutMfWdybyh5%2B7%2BaKOAyCXfcpCykfG%2FSN%2BeABmhnE2PFp5OslDRLGS6p04x8n2RoG6TvNyy8SL93Ga6c6QxjE6Z%2F2ZWqBiBT8juMmb9elhtyy2JLdr4FVSyRj2H3m2KUkH1UfHlfIdSwtXpjYU3IueotzaCBaQT9dFnH4x0CT%2BlHEhQJMtD3rjPKBOv1JYf4AyQrpKV6gFEW2GOeMJ7U18MGOqUBkKGXyE35%2BMiy3QFziA6LXl6h6vURaMKkQ45dzZdVNQbx5zo2prfJrCFTvyRocdA4RrbZCwjtCay8odHJiMqca0gXumzVfg4pX04KH0dCwfSU6OzlQHBgN2TTKomaPQ8nDMTV6p%2B9k0vaUM6YjMwqrt9BsyfrgRpbZ%2BaVpagSziW%2FGdFiLmhzcf4Pg8URd8u9BmhX%2FsZKsqzbO0TYKGzdjIRnQSx3&X-Amz-Signature=32f5f81e6a184bf91c57d55e921b4125b2a6186f0bd4b9bab59ddb52ca815dd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4H2RTND%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCq2dYUJ4kZRiYDNbFOLn7fQA2H2SjIZompGucdIkg%2B2AIgXFFduCzhffDZTL5KYbE%2BIF6CviKpyFKONK2xAXc%2BYsAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDEN5DhtRPQPwqytMQSrcA0dLBDaIOmfruuHmo1F%2B5V43EsfnLNvZjppZUZ%2Bk1NOOv%2FNcOrgRamZc%2BmTIgPsMsaWFWYrRE83Trs9nDyK4YRrg%2FOO6oy72%2Fpx8O1fxYoLtacAXqJJFlJnz5s1L%2FEJxue%2FFTBre7lJeykVPe%2BdBNMojNhc%2BlvWHxjCEnUZZjWH1%2BTshFJcrpqyne%2Fv1%2Fs31mdRv4Q%2FDGL3HcaeT9qQT50hufhQ7EcnVkY9N4eDfbciDTHtumkCsNRv%2B0akncR3zi4ZEgfRHvTaW26D%2F4gG3xNBdMBxEvWT2PDf%2FLL0WAuVQ6aJwSJWLnn7XXLqBGT0%2B84sCKQmmj1rofnauuLGJN22BtpukNBI%2FFunlDxFK0979RI8cRNHWIUTQORB0Jcwf0l7WwnRK1N7ydtqFn9shSTeHRSb4qVP2wpdNxtQzx6UfbutMfWdybyh5%2B7%2BaKOAyCXfcpCykfG%2FSN%2BeABmhnE2PFp5OslDRLGS6p04x8n2RoG6TvNyy8SL93Ga6c6QxjE6Z%2F2ZWqBiBT8juMmb9elhtyy2JLdr4FVSyRj2H3m2KUkH1UfHlfIdSwtXpjYU3IueotzaCBaQT9dFnH4x0CT%2BlHEhQJMtD3rjPKBOv1JYf4AyQrpKV6gFEW2GOeMJ7U18MGOqUBkKGXyE35%2BMiy3QFziA6LXl6h6vURaMKkQ45dzZdVNQbx5zo2prfJrCFTvyRocdA4RrbZCwjtCay8odHJiMqca0gXumzVfg4pX04KH0dCwfSU6OzlQHBgN2TTKomaPQ8nDMTV6p%2B9k0vaUM6YjMwqrt9BsyfrgRpbZ%2BaVpagSziW%2FGdFiLmhzcf4Pg8URd8u9BmhX%2FsZKsqzbO0TYKGzdjIRnQSx3&X-Amz-Signature=e039b2cb7012c08b8ed5d28da471a3d0000d614013caecba14c7ffc2deaf4f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4H2RTND%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCq2dYUJ4kZRiYDNbFOLn7fQA2H2SjIZompGucdIkg%2B2AIgXFFduCzhffDZTL5KYbE%2BIF6CviKpyFKONK2xAXc%2BYsAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDEN5DhtRPQPwqytMQSrcA0dLBDaIOmfruuHmo1F%2B5V43EsfnLNvZjppZUZ%2Bk1NOOv%2FNcOrgRamZc%2BmTIgPsMsaWFWYrRE83Trs9nDyK4YRrg%2FOO6oy72%2Fpx8O1fxYoLtacAXqJJFlJnz5s1L%2FEJxue%2FFTBre7lJeykVPe%2BdBNMojNhc%2BlvWHxjCEnUZZjWH1%2BTshFJcrpqyne%2Fv1%2Fs31mdRv4Q%2FDGL3HcaeT9qQT50hufhQ7EcnVkY9N4eDfbciDTHtumkCsNRv%2B0akncR3zi4ZEgfRHvTaW26D%2F4gG3xNBdMBxEvWT2PDf%2FLL0WAuVQ6aJwSJWLnn7XXLqBGT0%2B84sCKQmmj1rofnauuLGJN22BtpukNBI%2FFunlDxFK0979RI8cRNHWIUTQORB0Jcwf0l7WwnRK1N7ydtqFn9shSTeHRSb4qVP2wpdNxtQzx6UfbutMfWdybyh5%2B7%2BaKOAyCXfcpCykfG%2FSN%2BeABmhnE2PFp5OslDRLGS6p04x8n2RoG6TvNyy8SL93Ga6c6QxjE6Z%2F2ZWqBiBT8juMmb9elhtyy2JLdr4FVSyRj2H3m2KUkH1UfHlfIdSwtXpjYU3IueotzaCBaQT9dFnH4x0CT%2BlHEhQJMtD3rjPKBOv1JYf4AyQrpKV6gFEW2GOeMJ7U18MGOqUBkKGXyE35%2BMiy3QFziA6LXl6h6vURaMKkQ45dzZdVNQbx5zo2prfJrCFTvyRocdA4RrbZCwjtCay8odHJiMqca0gXumzVfg4pX04KH0dCwfSU6OzlQHBgN2TTKomaPQ8nDMTV6p%2B9k0vaUM6YjMwqrt9BsyfrgRpbZ%2BaVpagSziW%2FGdFiLmhzcf4Pg8URd8u9BmhX%2FsZKsqzbO0TYKGzdjIRnQSx3&X-Amz-Signature=74d3b1592e50aa973e30d4280e3e8e9d821c82f150ab9c50aafd530a7d5f6e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4H2RTND%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCq2dYUJ4kZRiYDNbFOLn7fQA2H2SjIZompGucdIkg%2B2AIgXFFduCzhffDZTL5KYbE%2BIF6CviKpyFKONK2xAXc%2BYsAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDEN5DhtRPQPwqytMQSrcA0dLBDaIOmfruuHmo1F%2B5V43EsfnLNvZjppZUZ%2Bk1NOOv%2FNcOrgRamZc%2BmTIgPsMsaWFWYrRE83Trs9nDyK4YRrg%2FOO6oy72%2Fpx8O1fxYoLtacAXqJJFlJnz5s1L%2FEJxue%2FFTBre7lJeykVPe%2BdBNMojNhc%2BlvWHxjCEnUZZjWH1%2BTshFJcrpqyne%2Fv1%2Fs31mdRv4Q%2FDGL3HcaeT9qQT50hufhQ7EcnVkY9N4eDfbciDTHtumkCsNRv%2B0akncR3zi4ZEgfRHvTaW26D%2F4gG3xNBdMBxEvWT2PDf%2FLL0WAuVQ6aJwSJWLnn7XXLqBGT0%2B84sCKQmmj1rofnauuLGJN22BtpukNBI%2FFunlDxFK0979RI8cRNHWIUTQORB0Jcwf0l7WwnRK1N7ydtqFn9shSTeHRSb4qVP2wpdNxtQzx6UfbutMfWdybyh5%2B7%2BaKOAyCXfcpCykfG%2FSN%2BeABmhnE2PFp5OslDRLGS6p04x8n2RoG6TvNyy8SL93Ga6c6QxjE6Z%2F2ZWqBiBT8juMmb9elhtyy2JLdr4FVSyRj2H3m2KUkH1UfHlfIdSwtXpjYU3IueotzaCBaQT9dFnH4x0CT%2BlHEhQJMtD3rjPKBOv1JYf4AyQrpKV6gFEW2GOeMJ7U18MGOqUBkKGXyE35%2BMiy3QFziA6LXl6h6vURaMKkQ45dzZdVNQbx5zo2prfJrCFTvyRocdA4RrbZCwjtCay8odHJiMqca0gXumzVfg4pX04KH0dCwfSU6OzlQHBgN2TTKomaPQ8nDMTV6p%2B9k0vaUM6YjMwqrt9BsyfrgRpbZ%2BaVpagSziW%2FGdFiLmhzcf4Pg8URd8u9BmhX%2FsZKsqzbO0TYKGzdjIRnQSx3&X-Amz-Signature=84d78b615c0a763ad92efb419c536303cc6bd185d8af9c34d713438b7d2ff5b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4H2RTND%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCq2dYUJ4kZRiYDNbFOLn7fQA2H2SjIZompGucdIkg%2B2AIgXFFduCzhffDZTL5KYbE%2BIF6CviKpyFKONK2xAXc%2BYsAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDEN5DhtRPQPwqytMQSrcA0dLBDaIOmfruuHmo1F%2B5V43EsfnLNvZjppZUZ%2Bk1NOOv%2FNcOrgRamZc%2BmTIgPsMsaWFWYrRE83Trs9nDyK4YRrg%2FOO6oy72%2Fpx8O1fxYoLtacAXqJJFlJnz5s1L%2FEJxue%2FFTBre7lJeykVPe%2BdBNMojNhc%2BlvWHxjCEnUZZjWH1%2BTshFJcrpqyne%2Fv1%2Fs31mdRv4Q%2FDGL3HcaeT9qQT50hufhQ7EcnVkY9N4eDfbciDTHtumkCsNRv%2B0akncR3zi4ZEgfRHvTaW26D%2F4gG3xNBdMBxEvWT2PDf%2FLL0WAuVQ6aJwSJWLnn7XXLqBGT0%2B84sCKQmmj1rofnauuLGJN22BtpukNBI%2FFunlDxFK0979RI8cRNHWIUTQORB0Jcwf0l7WwnRK1N7ydtqFn9shSTeHRSb4qVP2wpdNxtQzx6UfbutMfWdybyh5%2B7%2BaKOAyCXfcpCykfG%2FSN%2BeABmhnE2PFp5OslDRLGS6p04x8n2RoG6TvNyy8SL93Ga6c6QxjE6Z%2F2ZWqBiBT8juMmb9elhtyy2JLdr4FVSyRj2H3m2KUkH1UfHlfIdSwtXpjYU3IueotzaCBaQT9dFnH4x0CT%2BlHEhQJMtD3rjPKBOv1JYf4AyQrpKV6gFEW2GOeMJ7U18MGOqUBkKGXyE35%2BMiy3QFziA6LXl6h6vURaMKkQ45dzZdVNQbx5zo2prfJrCFTvyRocdA4RrbZCwjtCay8odHJiMqca0gXumzVfg4pX04KH0dCwfSU6OzlQHBgN2TTKomaPQ8nDMTV6p%2B9k0vaUM6YjMwqrt9BsyfrgRpbZ%2BaVpagSziW%2FGdFiLmhzcf4Pg8URd8u9BmhX%2FsZKsqzbO0TYKGzdjIRnQSx3&X-Amz-Signature=4b6ff879eb2f38c6150602ad23ccc8d4f0dd92483c59ab8fe890c713361f476c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

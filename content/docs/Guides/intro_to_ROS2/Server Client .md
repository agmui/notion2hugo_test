---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q53LY4XI%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGocXtk%2FwTQXFeCaRQU%2FIbQI2gZLBo65%2FZmf6BA%2FLKMvAiEA56U1Opi8ku%2BDyU0mGiziQU0Lt869iKrvn%2FQejBChVhYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDORh0gqxatbQXDRRzyrcA1elCaqpDD3TzVjlvs8CCNVuzYkmKuYH8h3bFnsNU40eAihpcPNb3NQrxlT3A7a651%2FspVTzBAZ8q52vTlc7%2BmnV%2B%2FyPcer%2FXWt7gTz%2BiMXyUCFIob0ewHBrjuv8bs5R6ATUDPPuZYXMRPK8aAifX7Yp7R5Ll%2FARxX44iViaq0A6wmaDVJ%2BumXyrHybKdXzHcx79udouXy7V2DqIS6%2FcMHPo%2F4Y9xlwpBgYjybruIWRnsGfjIMcj4GrnfkQPIMlNUNVTSon3rqpgSQyg7lGueT7ViFnxPDWsd0bu85EFnSvNiWd4Ie68crXQZFrz9s2YaGrMQA4xNK6FgkzhSysVugKeqTHs5vRexQn7Z9X38kicnK7OldvppCpirLx3CfIDunv5x85j2N3KcYTDiVPgAWGCSsPLcSn4pCLVG3%2B8%2BXN8PWfVWXZ5Z4tzZO9ok%2BUUXl%2BjU%2BH4yZRDRvabT%2Bb9jEa%2FiRUJDV6jIycrb8t9GmQBji7%2Ff34XLY10E6PBGErHFjm1uv1%2Bf82mMNzlmdPq%2F8wi1Fpsr6%2F26iz3kRtSn92MQGHA2jm46S2aySUcOEauVg8NJlcuJBYsbndbTxd69Eimvyf%2F%2FlAXBRKnBHAJIbD3V2Zzu009i42CEF4eMJzx7NEGOqUBvQww49coZSrA6ou3ZB2P7emM7nznfSPLhBNc75Q%2BCc904f%2F5rbdWWpuS3C8oMj3zPJTTTwbjqkJclAshDcOzF%2FsxgvF7b8dTfoVzbILDm2BVD6DFqm1Dv0Gj0uvVBJZcJMVtdiubP5JqmpxMjH7VD5OJ1l6jR1gPG6vtTb1wnhLiX7om5HA01o4s2adcTayQsUEHNeHFaL27%2BgIECfrYtURZmzr0&X-Amz-Signature=69bed884b2bfd35251d21340ca62846c144bec010386c7912cee46ec6855272c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q53LY4XI%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGocXtk%2FwTQXFeCaRQU%2FIbQI2gZLBo65%2FZmf6BA%2FLKMvAiEA56U1Opi8ku%2BDyU0mGiziQU0Lt869iKrvn%2FQejBChVhYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDORh0gqxatbQXDRRzyrcA1elCaqpDD3TzVjlvs8CCNVuzYkmKuYH8h3bFnsNU40eAihpcPNb3NQrxlT3A7a651%2FspVTzBAZ8q52vTlc7%2BmnV%2B%2FyPcer%2FXWt7gTz%2BiMXyUCFIob0ewHBrjuv8bs5R6ATUDPPuZYXMRPK8aAifX7Yp7R5Ll%2FARxX44iViaq0A6wmaDVJ%2BumXyrHybKdXzHcx79udouXy7V2DqIS6%2FcMHPo%2F4Y9xlwpBgYjybruIWRnsGfjIMcj4GrnfkQPIMlNUNVTSon3rqpgSQyg7lGueT7ViFnxPDWsd0bu85EFnSvNiWd4Ie68crXQZFrz9s2YaGrMQA4xNK6FgkzhSysVugKeqTHs5vRexQn7Z9X38kicnK7OldvppCpirLx3CfIDunv5x85j2N3KcYTDiVPgAWGCSsPLcSn4pCLVG3%2B8%2BXN8PWfVWXZ5Z4tzZO9ok%2BUUXl%2BjU%2BH4yZRDRvabT%2Bb9jEa%2FiRUJDV6jIycrb8t9GmQBji7%2Ff34XLY10E6PBGErHFjm1uv1%2Bf82mMNzlmdPq%2F8wi1Fpsr6%2F26iz3kRtSn92MQGHA2jm46S2aySUcOEauVg8NJlcuJBYsbndbTxd69Eimvyf%2F%2FlAXBRKnBHAJIbD3V2Zzu009i42CEF4eMJzx7NEGOqUBvQww49coZSrA6ou3ZB2P7emM7nznfSPLhBNc75Q%2BCc904f%2F5rbdWWpuS3C8oMj3zPJTTTwbjqkJclAshDcOzF%2FsxgvF7b8dTfoVzbILDm2BVD6DFqm1Dv0Gj0uvVBJZcJMVtdiubP5JqmpxMjH7VD5OJ1l6jR1gPG6vtTb1wnhLiX7om5HA01o4s2adcTayQsUEHNeHFaL27%2BgIECfrYtURZmzr0&X-Amz-Signature=b32f606413c3100a47ebf9bc468e0821954a8fd23f80e4fbc46ad0d22bc837ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q53LY4XI%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGocXtk%2FwTQXFeCaRQU%2FIbQI2gZLBo65%2FZmf6BA%2FLKMvAiEA56U1Opi8ku%2BDyU0mGiziQU0Lt869iKrvn%2FQejBChVhYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDORh0gqxatbQXDRRzyrcA1elCaqpDD3TzVjlvs8CCNVuzYkmKuYH8h3bFnsNU40eAihpcPNb3NQrxlT3A7a651%2FspVTzBAZ8q52vTlc7%2BmnV%2B%2FyPcer%2FXWt7gTz%2BiMXyUCFIob0ewHBrjuv8bs5R6ATUDPPuZYXMRPK8aAifX7Yp7R5Ll%2FARxX44iViaq0A6wmaDVJ%2BumXyrHybKdXzHcx79udouXy7V2DqIS6%2FcMHPo%2F4Y9xlwpBgYjybruIWRnsGfjIMcj4GrnfkQPIMlNUNVTSon3rqpgSQyg7lGueT7ViFnxPDWsd0bu85EFnSvNiWd4Ie68crXQZFrz9s2YaGrMQA4xNK6FgkzhSysVugKeqTHs5vRexQn7Z9X38kicnK7OldvppCpirLx3CfIDunv5x85j2N3KcYTDiVPgAWGCSsPLcSn4pCLVG3%2B8%2BXN8PWfVWXZ5Z4tzZO9ok%2BUUXl%2BjU%2BH4yZRDRvabT%2Bb9jEa%2FiRUJDV6jIycrb8t9GmQBji7%2Ff34XLY10E6PBGErHFjm1uv1%2Bf82mMNzlmdPq%2F8wi1Fpsr6%2F26iz3kRtSn92MQGHA2jm46S2aySUcOEauVg8NJlcuJBYsbndbTxd69Eimvyf%2F%2FlAXBRKnBHAJIbD3V2Zzu009i42CEF4eMJzx7NEGOqUBvQww49coZSrA6ou3ZB2P7emM7nznfSPLhBNc75Q%2BCc904f%2F5rbdWWpuS3C8oMj3zPJTTTwbjqkJclAshDcOzF%2FsxgvF7b8dTfoVzbILDm2BVD6DFqm1Dv0Gj0uvVBJZcJMVtdiubP5JqmpxMjH7VD5OJ1l6jR1gPG6vtTb1wnhLiX7om5HA01o4s2adcTayQsUEHNeHFaL27%2BgIECfrYtURZmzr0&X-Amz-Signature=bddb25cda74994f76572172acde76319a4d468bf9b76390c14609bcf6db01fac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q53LY4XI%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGocXtk%2FwTQXFeCaRQU%2FIbQI2gZLBo65%2FZmf6BA%2FLKMvAiEA56U1Opi8ku%2BDyU0mGiziQU0Lt869iKrvn%2FQejBChVhYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDORh0gqxatbQXDRRzyrcA1elCaqpDD3TzVjlvs8CCNVuzYkmKuYH8h3bFnsNU40eAihpcPNb3NQrxlT3A7a651%2FspVTzBAZ8q52vTlc7%2BmnV%2B%2FyPcer%2FXWt7gTz%2BiMXyUCFIob0ewHBrjuv8bs5R6ATUDPPuZYXMRPK8aAifX7Yp7R5Ll%2FARxX44iViaq0A6wmaDVJ%2BumXyrHybKdXzHcx79udouXy7V2DqIS6%2FcMHPo%2F4Y9xlwpBgYjybruIWRnsGfjIMcj4GrnfkQPIMlNUNVTSon3rqpgSQyg7lGueT7ViFnxPDWsd0bu85EFnSvNiWd4Ie68crXQZFrz9s2YaGrMQA4xNK6FgkzhSysVugKeqTHs5vRexQn7Z9X38kicnK7OldvppCpirLx3CfIDunv5x85j2N3KcYTDiVPgAWGCSsPLcSn4pCLVG3%2B8%2BXN8PWfVWXZ5Z4tzZO9ok%2BUUXl%2BjU%2BH4yZRDRvabT%2Bb9jEa%2FiRUJDV6jIycrb8t9GmQBji7%2Ff34XLY10E6PBGErHFjm1uv1%2Bf82mMNzlmdPq%2F8wi1Fpsr6%2F26iz3kRtSn92MQGHA2jm46S2aySUcOEauVg8NJlcuJBYsbndbTxd69Eimvyf%2F%2FlAXBRKnBHAJIbD3V2Zzu009i42CEF4eMJzx7NEGOqUBvQww49coZSrA6ou3ZB2P7emM7nznfSPLhBNc75Q%2BCc904f%2F5rbdWWpuS3C8oMj3zPJTTTwbjqkJclAshDcOzF%2FsxgvF7b8dTfoVzbILDm2BVD6DFqm1Dv0Gj0uvVBJZcJMVtdiubP5JqmpxMjH7VD5OJ1l6jR1gPG6vtTb1wnhLiX7om5HA01o4s2adcTayQsUEHNeHFaL27%2BgIECfrYtURZmzr0&X-Amz-Signature=03af5e13fe94e85d6caae3021eaba1ade4c4c280c4eee1fc8f7ac504dd6ad36d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q53LY4XI%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGocXtk%2FwTQXFeCaRQU%2FIbQI2gZLBo65%2FZmf6BA%2FLKMvAiEA56U1Opi8ku%2BDyU0mGiziQU0Lt869iKrvn%2FQejBChVhYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDORh0gqxatbQXDRRzyrcA1elCaqpDD3TzVjlvs8CCNVuzYkmKuYH8h3bFnsNU40eAihpcPNb3NQrxlT3A7a651%2FspVTzBAZ8q52vTlc7%2BmnV%2B%2FyPcer%2FXWt7gTz%2BiMXyUCFIob0ewHBrjuv8bs5R6ATUDPPuZYXMRPK8aAifX7Yp7R5Ll%2FARxX44iViaq0A6wmaDVJ%2BumXyrHybKdXzHcx79udouXy7V2DqIS6%2FcMHPo%2F4Y9xlwpBgYjybruIWRnsGfjIMcj4GrnfkQPIMlNUNVTSon3rqpgSQyg7lGueT7ViFnxPDWsd0bu85EFnSvNiWd4Ie68crXQZFrz9s2YaGrMQA4xNK6FgkzhSysVugKeqTHs5vRexQn7Z9X38kicnK7OldvppCpirLx3CfIDunv5x85j2N3KcYTDiVPgAWGCSsPLcSn4pCLVG3%2B8%2BXN8PWfVWXZ5Z4tzZO9ok%2BUUXl%2BjU%2BH4yZRDRvabT%2Bb9jEa%2FiRUJDV6jIycrb8t9GmQBji7%2Ff34XLY10E6PBGErHFjm1uv1%2Bf82mMNzlmdPq%2F8wi1Fpsr6%2F26iz3kRtSn92MQGHA2jm46S2aySUcOEauVg8NJlcuJBYsbndbTxd69Eimvyf%2F%2FlAXBRKnBHAJIbD3V2Zzu009i42CEF4eMJzx7NEGOqUBvQww49coZSrA6ou3ZB2P7emM7nznfSPLhBNc75Q%2BCc904f%2F5rbdWWpuS3C8oMj3zPJTTTwbjqkJclAshDcOzF%2FsxgvF7b8dTfoVzbILDm2BVD6DFqm1Dv0Gj0uvVBJZcJMVtdiubP5JqmpxMjH7VD5OJ1l6jR1gPG6vtTb1wnhLiX7om5HA01o4s2adcTayQsUEHNeHFaL27%2BgIECfrYtURZmzr0&X-Amz-Signature=37495c9118b615852227419f4f2e1461523303fc67ce43355dfd75f0056b5b53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

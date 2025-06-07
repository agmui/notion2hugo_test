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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMQICERS%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYabNdvy064n%2Fojca22g0MYoYx32rHskigGQaE6wH%2F8AiABqInGfeT2nW2Z0rt2Vxj31rpP6lMjbv9JWhwjzosGcir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMibQPXid2G%2FLAKTFWKtwDpimhDL1cGrxcPFcwd%2FvaJbW7x9Nr3uI2NrIl8kkg7rbDQRUsz03JsnlZIL3php%2FcxW6fxWCqVEM1M9pQPbCIIs8741qQKCOlerd7kF9RorjMijz4FvJXOdQOLfI5EvtvlDlH8UPR6rVfDMgTXPrhDBmEYRGVe67HXwdj3O2XTvGzytxS3xnCH%2FdOg10rzNYqNp55GQUtPyUlyCDtNEUQirkf2%2B5Wq3fgTDkUMakL%2F1pnYkJ4AxiLKFcoJWrk%2BWnjjC0eeTmmJDhHSR8Eg4LZmVlVqmOnpkcUJXQkM%2FhKGPf2Js3nvoZeaUfvUzEf3kkKQYxfbjCuw5hjF4HZCtB2k0HPqSAO5ixCAo7oU3z2vFRQuz%2BCnbjsQLCvM9JxUMsY213w5Yw%2FHwiOwykLChoFPjNwqy53nN4%2F6Ase%2Bg7Dj54CCcXB8T8G4XLXV93ELiH1ZKI2AvZh3k2yZCAZmwNHMNC3GxdOHKw5WrdAWb0vxdN5cCrqSHWA0Tgait7NWfytmr6icjMF9MDRaoPNFn4m%2F92UkSqUHFD5ZZ3%2BX8o19euWRRtlVdCJaee5qoLPZ0cNgp4BsvdXzB8nxgs5AbXBpECQybsabff%2Bjj%2FsAhyGrMu%2BvAAGKyfph8ynYkEwtIGRwgY6pgF8qWfV6my8k1r2g9I4JMc0qKUkMWTXRH1nVJzExSrxGFFSkX6xtHKu0%2FdRA%2FKC2zA8FmmtNBBi16N%2F26Ku2dj%2B4jEOoTd4EE75ICFKy1Otn57VZcFdoWJru%2BrasmTUqnD%2FitddigS9I2X0ambHB%2B%2FoIWGvx3xrSNrBnyRL74m49wb3CRHM9FEka4no5vG5d6lPCzP5S4Jwlcat%2Byt%2BTsaSAT%2Fw6D8B&X-Amz-Signature=e988566b0267d1ab53654be936a112ed208cfc543ec64de1e8b970e705b99e0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMQICERS%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYabNdvy064n%2Fojca22g0MYoYx32rHskigGQaE6wH%2F8AiABqInGfeT2nW2Z0rt2Vxj31rpP6lMjbv9JWhwjzosGcir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMibQPXid2G%2FLAKTFWKtwDpimhDL1cGrxcPFcwd%2FvaJbW7x9Nr3uI2NrIl8kkg7rbDQRUsz03JsnlZIL3php%2FcxW6fxWCqVEM1M9pQPbCIIs8741qQKCOlerd7kF9RorjMijz4FvJXOdQOLfI5EvtvlDlH8UPR6rVfDMgTXPrhDBmEYRGVe67HXwdj3O2XTvGzytxS3xnCH%2FdOg10rzNYqNp55GQUtPyUlyCDtNEUQirkf2%2B5Wq3fgTDkUMakL%2F1pnYkJ4AxiLKFcoJWrk%2BWnjjC0eeTmmJDhHSR8Eg4LZmVlVqmOnpkcUJXQkM%2FhKGPf2Js3nvoZeaUfvUzEf3kkKQYxfbjCuw5hjF4HZCtB2k0HPqSAO5ixCAo7oU3z2vFRQuz%2BCnbjsQLCvM9JxUMsY213w5Yw%2FHwiOwykLChoFPjNwqy53nN4%2F6Ase%2Bg7Dj54CCcXB8T8G4XLXV93ELiH1ZKI2AvZh3k2yZCAZmwNHMNC3GxdOHKw5WrdAWb0vxdN5cCrqSHWA0Tgait7NWfytmr6icjMF9MDRaoPNFn4m%2F92UkSqUHFD5ZZ3%2BX8o19euWRRtlVdCJaee5qoLPZ0cNgp4BsvdXzB8nxgs5AbXBpECQybsabff%2Bjj%2FsAhyGrMu%2BvAAGKyfph8ynYkEwtIGRwgY6pgF8qWfV6my8k1r2g9I4JMc0qKUkMWTXRH1nVJzExSrxGFFSkX6xtHKu0%2FdRA%2FKC2zA8FmmtNBBi16N%2F26Ku2dj%2B4jEOoTd4EE75ICFKy1Otn57VZcFdoWJru%2BrasmTUqnD%2FitddigS9I2X0ambHB%2B%2FoIWGvx3xrSNrBnyRL74m49wb3CRHM9FEka4no5vG5d6lPCzP5S4Jwlcat%2Byt%2BTsaSAT%2Fw6D8B&X-Amz-Signature=e6691ad1e330f066a3559954b097126a2b539403fa2ebbdac3510c2bc37dfbb2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMQICERS%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYabNdvy064n%2Fojca22g0MYoYx32rHskigGQaE6wH%2F8AiABqInGfeT2nW2Z0rt2Vxj31rpP6lMjbv9JWhwjzosGcir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMibQPXid2G%2FLAKTFWKtwDpimhDL1cGrxcPFcwd%2FvaJbW7x9Nr3uI2NrIl8kkg7rbDQRUsz03JsnlZIL3php%2FcxW6fxWCqVEM1M9pQPbCIIs8741qQKCOlerd7kF9RorjMijz4FvJXOdQOLfI5EvtvlDlH8UPR6rVfDMgTXPrhDBmEYRGVe67HXwdj3O2XTvGzytxS3xnCH%2FdOg10rzNYqNp55GQUtPyUlyCDtNEUQirkf2%2B5Wq3fgTDkUMakL%2F1pnYkJ4AxiLKFcoJWrk%2BWnjjC0eeTmmJDhHSR8Eg4LZmVlVqmOnpkcUJXQkM%2FhKGPf2Js3nvoZeaUfvUzEf3kkKQYxfbjCuw5hjF4HZCtB2k0HPqSAO5ixCAo7oU3z2vFRQuz%2BCnbjsQLCvM9JxUMsY213w5Yw%2FHwiOwykLChoFPjNwqy53nN4%2F6Ase%2Bg7Dj54CCcXB8T8G4XLXV93ELiH1ZKI2AvZh3k2yZCAZmwNHMNC3GxdOHKw5WrdAWb0vxdN5cCrqSHWA0Tgait7NWfytmr6icjMF9MDRaoPNFn4m%2F92UkSqUHFD5ZZ3%2BX8o19euWRRtlVdCJaee5qoLPZ0cNgp4BsvdXzB8nxgs5AbXBpECQybsabff%2Bjj%2FsAhyGrMu%2BvAAGKyfph8ynYkEwtIGRwgY6pgF8qWfV6my8k1r2g9I4JMc0qKUkMWTXRH1nVJzExSrxGFFSkX6xtHKu0%2FdRA%2FKC2zA8FmmtNBBi16N%2F26Ku2dj%2B4jEOoTd4EE75ICFKy1Otn57VZcFdoWJru%2BrasmTUqnD%2FitddigS9I2X0ambHB%2B%2FoIWGvx3xrSNrBnyRL74m49wb3CRHM9FEka4no5vG5d6lPCzP5S4Jwlcat%2Byt%2BTsaSAT%2Fw6D8B&X-Amz-Signature=778d20c2dfb89eb8319ab60a1c615a16a3b0aa16ca34d8f44c9f5a63a2b50e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMQICERS%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYabNdvy064n%2Fojca22g0MYoYx32rHskigGQaE6wH%2F8AiABqInGfeT2nW2Z0rt2Vxj31rpP6lMjbv9JWhwjzosGcir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMibQPXid2G%2FLAKTFWKtwDpimhDL1cGrxcPFcwd%2FvaJbW7x9Nr3uI2NrIl8kkg7rbDQRUsz03JsnlZIL3php%2FcxW6fxWCqVEM1M9pQPbCIIs8741qQKCOlerd7kF9RorjMijz4FvJXOdQOLfI5EvtvlDlH8UPR6rVfDMgTXPrhDBmEYRGVe67HXwdj3O2XTvGzytxS3xnCH%2FdOg10rzNYqNp55GQUtPyUlyCDtNEUQirkf2%2B5Wq3fgTDkUMakL%2F1pnYkJ4AxiLKFcoJWrk%2BWnjjC0eeTmmJDhHSR8Eg4LZmVlVqmOnpkcUJXQkM%2FhKGPf2Js3nvoZeaUfvUzEf3kkKQYxfbjCuw5hjF4HZCtB2k0HPqSAO5ixCAo7oU3z2vFRQuz%2BCnbjsQLCvM9JxUMsY213w5Yw%2FHwiOwykLChoFPjNwqy53nN4%2F6Ase%2Bg7Dj54CCcXB8T8G4XLXV93ELiH1ZKI2AvZh3k2yZCAZmwNHMNC3GxdOHKw5WrdAWb0vxdN5cCrqSHWA0Tgait7NWfytmr6icjMF9MDRaoPNFn4m%2F92UkSqUHFD5ZZ3%2BX8o19euWRRtlVdCJaee5qoLPZ0cNgp4BsvdXzB8nxgs5AbXBpECQybsabff%2Bjj%2FsAhyGrMu%2BvAAGKyfph8ynYkEwtIGRwgY6pgF8qWfV6my8k1r2g9I4JMc0qKUkMWTXRH1nVJzExSrxGFFSkX6xtHKu0%2FdRA%2FKC2zA8FmmtNBBi16N%2F26Ku2dj%2B4jEOoTd4EE75ICFKy1Otn57VZcFdoWJru%2BrasmTUqnD%2FitddigS9I2X0ambHB%2B%2FoIWGvx3xrSNrBnyRL74m49wb3CRHM9FEka4no5vG5d6lPCzP5S4Jwlcat%2Byt%2BTsaSAT%2Fw6D8B&X-Amz-Signature=3d5549df54a99bde71007ab2283f90da19bce681d463773afc59276292f013c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMQICERS%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYabNdvy064n%2Fojca22g0MYoYx32rHskigGQaE6wH%2F8AiABqInGfeT2nW2Z0rt2Vxj31rpP6lMjbv9JWhwjzosGcir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMibQPXid2G%2FLAKTFWKtwDpimhDL1cGrxcPFcwd%2FvaJbW7x9Nr3uI2NrIl8kkg7rbDQRUsz03JsnlZIL3php%2FcxW6fxWCqVEM1M9pQPbCIIs8741qQKCOlerd7kF9RorjMijz4FvJXOdQOLfI5EvtvlDlH8UPR6rVfDMgTXPrhDBmEYRGVe67HXwdj3O2XTvGzytxS3xnCH%2FdOg10rzNYqNp55GQUtPyUlyCDtNEUQirkf2%2B5Wq3fgTDkUMakL%2F1pnYkJ4AxiLKFcoJWrk%2BWnjjC0eeTmmJDhHSR8Eg4LZmVlVqmOnpkcUJXQkM%2FhKGPf2Js3nvoZeaUfvUzEf3kkKQYxfbjCuw5hjF4HZCtB2k0HPqSAO5ixCAo7oU3z2vFRQuz%2BCnbjsQLCvM9JxUMsY213w5Yw%2FHwiOwykLChoFPjNwqy53nN4%2F6Ase%2Bg7Dj54CCcXB8T8G4XLXV93ELiH1ZKI2AvZh3k2yZCAZmwNHMNC3GxdOHKw5WrdAWb0vxdN5cCrqSHWA0Tgait7NWfytmr6icjMF9MDRaoPNFn4m%2F92UkSqUHFD5ZZ3%2BX8o19euWRRtlVdCJaee5qoLPZ0cNgp4BsvdXzB8nxgs5AbXBpECQybsabff%2Bjj%2FsAhyGrMu%2BvAAGKyfph8ynYkEwtIGRwgY6pgF8qWfV6my8k1r2g9I4JMc0qKUkMWTXRH1nVJzExSrxGFFSkX6xtHKu0%2FdRA%2FKC2zA8FmmtNBBi16N%2F26Ku2dj%2B4jEOoTd4EE75ICFKy1Otn57VZcFdoWJru%2BrasmTUqnD%2FitddigS9I2X0ambHB%2B%2FoIWGvx3xrSNrBnyRL74m49wb3CRHM9FEka4no5vG5d6lPCzP5S4Jwlcat%2Byt%2BTsaSAT%2Fw6D8B&X-Amz-Signature=db1a959730b7fbff3246dc8184257d2dd9b6340c2025c8d9daeefca455e9472c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

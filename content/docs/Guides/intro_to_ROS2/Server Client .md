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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DVEU775%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC19sV%2Fsuk5Rn0p0Gi50BzUPbOrfeeE23YsbDSOC07L4gIgBmO2cE4NgK48T4HCfYxoI%2BAr74Gas54BXH2FXQdw4KYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9eSSge55iRZ7pk8SrcA2aZc0lkkF3JlMYRFsqbBxYasUdHL%2Fr2eos8%2FzYmfzfPNF6sPSbC%2BaLprXqLDjedukFIkgvM0DUHd6mMDP%2FCwOSsKMM%2F7mRsNguA9smzC%2BE3akGB3lr2fTI4ou1oWrDPwsU5U6jlH4p0Hu0oWgRKhxIBXAZ%2BjUleoqjeAqoIp6u04QlHoDPKbteueRr5IR%2FYgfzczItkcyO2%2BbxQH7RiR4ty3nm3Le0IufmjND8TLZh2F9Nw9Ysi6wPZOoh1UNUnxI62THKnUO3npRGVUwSTO9IA6rH0ftOa4Arunmg0Cf%2BoLnjVUSm7Qb18XYhVMdWnHvvGe33hpyLCzQgL4OMnDobckhbQC310Rt%2Fu2Tgp0JuvrmGXQr8SwJguKkXSPmv%2FoDypXzMixySOWKqsElUVJnmMX2R9xRqEpVRHDmniQ%2B3UK1w%2FLl8JC3O9bG9wyzDZDCUk30VdArSBtLOG%2BYNJsnVo%2Fyw5A0e%2BP6EnRpDNamobS%2FbH8QVflrR6XpdNqLcilBcd%2Bb1p4cL9aBL11UGbX22ZCxNaz7qriCVcnuR%2FZMMXhwjsD7t81oPTKbfvehGB21sVxJahzDBHAWTUOGItJUCM9RvuJF3ZQESI5zoy3JuP2q72qr%2BJJMHR1lFsMMnrlMAGOqUB8X4MrM3%2FNRzBwwQvSJEBTTQyPL2IxoSPovztkOAYkyE0SaseEDOLVNizYJPGq5%2Fw1ah1RGqj%2F8X%2FiJzH4B9%2Fbxl2niB0xNKkxV24G87xtEQ9p6SRJVsiO8i2rMur8z1hw9CxmR5CpB2Ng0u%2BtHC%2BfTcVkA1IooIbxq2xFK5pwD%2F5ANdi%2BNvFjxGYuCKp3NugWLX6E46xofLGL%2BAsNUxzuXQUHUb8&X-Amz-Signature=591653cb7d677bb40ae918114a8adff6a89bedfa057068e9293555a968a262d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DVEU775%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC19sV%2Fsuk5Rn0p0Gi50BzUPbOrfeeE23YsbDSOC07L4gIgBmO2cE4NgK48T4HCfYxoI%2BAr74Gas54BXH2FXQdw4KYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9eSSge55iRZ7pk8SrcA2aZc0lkkF3JlMYRFsqbBxYasUdHL%2Fr2eos8%2FzYmfzfPNF6sPSbC%2BaLprXqLDjedukFIkgvM0DUHd6mMDP%2FCwOSsKMM%2F7mRsNguA9smzC%2BE3akGB3lr2fTI4ou1oWrDPwsU5U6jlH4p0Hu0oWgRKhxIBXAZ%2BjUleoqjeAqoIp6u04QlHoDPKbteueRr5IR%2FYgfzczItkcyO2%2BbxQH7RiR4ty3nm3Le0IufmjND8TLZh2F9Nw9Ysi6wPZOoh1UNUnxI62THKnUO3npRGVUwSTO9IA6rH0ftOa4Arunmg0Cf%2BoLnjVUSm7Qb18XYhVMdWnHvvGe33hpyLCzQgL4OMnDobckhbQC310Rt%2Fu2Tgp0JuvrmGXQr8SwJguKkXSPmv%2FoDypXzMixySOWKqsElUVJnmMX2R9xRqEpVRHDmniQ%2B3UK1w%2FLl8JC3O9bG9wyzDZDCUk30VdArSBtLOG%2BYNJsnVo%2Fyw5A0e%2BP6EnRpDNamobS%2FbH8QVflrR6XpdNqLcilBcd%2Bb1p4cL9aBL11UGbX22ZCxNaz7qriCVcnuR%2FZMMXhwjsD7t81oPTKbfvehGB21sVxJahzDBHAWTUOGItJUCM9RvuJF3ZQESI5zoy3JuP2q72qr%2BJJMHR1lFsMMnrlMAGOqUB8X4MrM3%2FNRzBwwQvSJEBTTQyPL2IxoSPovztkOAYkyE0SaseEDOLVNizYJPGq5%2Fw1ah1RGqj%2F8X%2FiJzH4B9%2Fbxl2niB0xNKkxV24G87xtEQ9p6SRJVsiO8i2rMur8z1hw9CxmR5CpB2Ng0u%2BtHC%2BfTcVkA1IooIbxq2xFK5pwD%2F5ANdi%2BNvFjxGYuCKp3NugWLX6E46xofLGL%2BAsNUxzuXQUHUb8&X-Amz-Signature=b6300ba30da77e68f2509acf630d5bf22c3157d5b3b59700a4aba3029013d775&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DVEU775%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC19sV%2Fsuk5Rn0p0Gi50BzUPbOrfeeE23YsbDSOC07L4gIgBmO2cE4NgK48T4HCfYxoI%2BAr74Gas54BXH2FXQdw4KYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9eSSge55iRZ7pk8SrcA2aZc0lkkF3JlMYRFsqbBxYasUdHL%2Fr2eos8%2FzYmfzfPNF6sPSbC%2BaLprXqLDjedukFIkgvM0DUHd6mMDP%2FCwOSsKMM%2F7mRsNguA9smzC%2BE3akGB3lr2fTI4ou1oWrDPwsU5U6jlH4p0Hu0oWgRKhxIBXAZ%2BjUleoqjeAqoIp6u04QlHoDPKbteueRr5IR%2FYgfzczItkcyO2%2BbxQH7RiR4ty3nm3Le0IufmjND8TLZh2F9Nw9Ysi6wPZOoh1UNUnxI62THKnUO3npRGVUwSTO9IA6rH0ftOa4Arunmg0Cf%2BoLnjVUSm7Qb18XYhVMdWnHvvGe33hpyLCzQgL4OMnDobckhbQC310Rt%2Fu2Tgp0JuvrmGXQr8SwJguKkXSPmv%2FoDypXzMixySOWKqsElUVJnmMX2R9xRqEpVRHDmniQ%2B3UK1w%2FLl8JC3O9bG9wyzDZDCUk30VdArSBtLOG%2BYNJsnVo%2Fyw5A0e%2BP6EnRpDNamobS%2FbH8QVflrR6XpdNqLcilBcd%2Bb1p4cL9aBL11UGbX22ZCxNaz7qriCVcnuR%2FZMMXhwjsD7t81oPTKbfvehGB21sVxJahzDBHAWTUOGItJUCM9RvuJF3ZQESI5zoy3JuP2q72qr%2BJJMHR1lFsMMnrlMAGOqUB8X4MrM3%2FNRzBwwQvSJEBTTQyPL2IxoSPovztkOAYkyE0SaseEDOLVNizYJPGq5%2Fw1ah1RGqj%2F8X%2FiJzH4B9%2Fbxl2niB0xNKkxV24G87xtEQ9p6SRJVsiO8i2rMur8z1hw9CxmR5CpB2Ng0u%2BtHC%2BfTcVkA1IooIbxq2xFK5pwD%2F5ANdi%2BNvFjxGYuCKp3NugWLX6E46xofLGL%2BAsNUxzuXQUHUb8&X-Amz-Signature=c91366909d471794bcd2e46241252d89c3bd02452e9336f05ea30961e7e92ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DVEU775%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC19sV%2Fsuk5Rn0p0Gi50BzUPbOrfeeE23YsbDSOC07L4gIgBmO2cE4NgK48T4HCfYxoI%2BAr74Gas54BXH2FXQdw4KYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9eSSge55iRZ7pk8SrcA2aZc0lkkF3JlMYRFsqbBxYasUdHL%2Fr2eos8%2FzYmfzfPNF6sPSbC%2BaLprXqLDjedukFIkgvM0DUHd6mMDP%2FCwOSsKMM%2F7mRsNguA9smzC%2BE3akGB3lr2fTI4ou1oWrDPwsU5U6jlH4p0Hu0oWgRKhxIBXAZ%2BjUleoqjeAqoIp6u04QlHoDPKbteueRr5IR%2FYgfzczItkcyO2%2BbxQH7RiR4ty3nm3Le0IufmjND8TLZh2F9Nw9Ysi6wPZOoh1UNUnxI62THKnUO3npRGVUwSTO9IA6rH0ftOa4Arunmg0Cf%2BoLnjVUSm7Qb18XYhVMdWnHvvGe33hpyLCzQgL4OMnDobckhbQC310Rt%2Fu2Tgp0JuvrmGXQr8SwJguKkXSPmv%2FoDypXzMixySOWKqsElUVJnmMX2R9xRqEpVRHDmniQ%2B3UK1w%2FLl8JC3O9bG9wyzDZDCUk30VdArSBtLOG%2BYNJsnVo%2Fyw5A0e%2BP6EnRpDNamobS%2FbH8QVflrR6XpdNqLcilBcd%2Bb1p4cL9aBL11UGbX22ZCxNaz7qriCVcnuR%2FZMMXhwjsD7t81oPTKbfvehGB21sVxJahzDBHAWTUOGItJUCM9RvuJF3ZQESI5zoy3JuP2q72qr%2BJJMHR1lFsMMnrlMAGOqUB8X4MrM3%2FNRzBwwQvSJEBTTQyPL2IxoSPovztkOAYkyE0SaseEDOLVNizYJPGq5%2Fw1ah1RGqj%2F8X%2FiJzH4B9%2Fbxl2niB0xNKkxV24G87xtEQ9p6SRJVsiO8i2rMur8z1hw9CxmR5CpB2Ng0u%2BtHC%2BfTcVkA1IooIbxq2xFK5pwD%2F5ANdi%2BNvFjxGYuCKp3NugWLX6E46xofLGL%2BAsNUxzuXQUHUb8&X-Amz-Signature=80ea17e30f50e3ed4121658b028d615e78184ed2137e9a078974467a1c7e1ec6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DVEU775%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC19sV%2Fsuk5Rn0p0Gi50BzUPbOrfeeE23YsbDSOC07L4gIgBmO2cE4NgK48T4HCfYxoI%2BAr74Gas54BXH2FXQdw4KYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9eSSge55iRZ7pk8SrcA2aZc0lkkF3JlMYRFsqbBxYasUdHL%2Fr2eos8%2FzYmfzfPNF6sPSbC%2BaLprXqLDjedukFIkgvM0DUHd6mMDP%2FCwOSsKMM%2F7mRsNguA9smzC%2BE3akGB3lr2fTI4ou1oWrDPwsU5U6jlH4p0Hu0oWgRKhxIBXAZ%2BjUleoqjeAqoIp6u04QlHoDPKbteueRr5IR%2FYgfzczItkcyO2%2BbxQH7RiR4ty3nm3Le0IufmjND8TLZh2F9Nw9Ysi6wPZOoh1UNUnxI62THKnUO3npRGVUwSTO9IA6rH0ftOa4Arunmg0Cf%2BoLnjVUSm7Qb18XYhVMdWnHvvGe33hpyLCzQgL4OMnDobckhbQC310Rt%2Fu2Tgp0JuvrmGXQr8SwJguKkXSPmv%2FoDypXzMixySOWKqsElUVJnmMX2R9xRqEpVRHDmniQ%2B3UK1w%2FLl8JC3O9bG9wyzDZDCUk30VdArSBtLOG%2BYNJsnVo%2Fyw5A0e%2BP6EnRpDNamobS%2FbH8QVflrR6XpdNqLcilBcd%2Bb1p4cL9aBL11UGbX22ZCxNaz7qriCVcnuR%2FZMMXhwjsD7t81oPTKbfvehGB21sVxJahzDBHAWTUOGItJUCM9RvuJF3ZQESI5zoy3JuP2q72qr%2BJJMHR1lFsMMnrlMAGOqUB8X4MrM3%2FNRzBwwQvSJEBTTQyPL2IxoSPovztkOAYkyE0SaseEDOLVNizYJPGq5%2Fw1ah1RGqj%2F8X%2FiJzH4B9%2Fbxl2niB0xNKkxV24G87xtEQ9p6SRJVsiO8i2rMur8z1hw9CxmR5CpB2Ng0u%2BtHC%2BfTcVkA1IooIbxq2xFK5pwD%2F5ANdi%2BNvFjxGYuCKp3NugWLX6E46xofLGL%2BAsNUxzuXQUHUb8&X-Amz-Signature=edaff57d2a02511c42afec51a1ae84cb3c398e9d6e54db896c104b60e1b89cb7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOG6U7J6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDaH9Y1BgSB5nwxPqyLccguHJNbluqLCPTV7kcwejQ%2FMwIgelH2HYT2x1SET84sS0mt3DC6o063sE35zOdpzPeyJ0sqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMS5ldViKblbs1AhECrcA9jhxzz96wnW909GVm8VI6zk1AI6EFGjn94Wwd0XQRf%2FCUfzKR98ntpcp0Nclci1iqeDPMSXpwPTduOgBXBkIRxwUdswDmPQx0YhXml9SkLBUjkzSN9omT%2FuoouOW%2Ff482ShlLkp%2F9zoIzx8ovU9gQvfhVQmWZY8zfwAho4%2B3Wie68WbMXS7D6wUBsDVti7uDoP1x0nWnN4VNRtbAt9qSCD4nfR%2BM8KyESVjSPcPeURRanZzU%2BwX9t1iTnHmdKaBGr6QREm5I8iUmcGNn1A%2FYiN%2Fjs5POzW0lFZxG%2Fd2cjd9An4Cx65TBeoJ5AExeSnfY2Z6Mx3XBni4vdwiL7jRvlwpaCH7GHKDb5hVbaZYF%2FuhEVzvcO75ZbjixRZq8m9F%2FZXd9SWVjybtzXWjrvEifJrdQJnkRkUpMiPLH37NNNANp201xEUfbSRb2Qswh2iRX1w7RasPBwYj%2F%2BmFWp%2B0SGvTips5qqCRP7%2FxClt5QUSzlBuPcWG1ceZDxPedJJTBKOnDcq69pm%2BtlI0il8n%2B%2FSrYEVFYajajmHz%2F99pRY1whzqbJ0uFcx26vQ%2F0pY6rNtbrar5tD12UGQxrnuuGHfWXvN1NPFFH%2FyNyC48CNszzhL4pOtau9HbSy%2FzD7MLKw48IGOqUBPg63Lra%2FchtnR9zObjhcnK4FtT86xlukmz3m%2BN7YaRl12rsmq4VyDpKFlsJFeOcYYvd%2FLuaIqNSV2%2Bk0G9WUcBvQxltVqPXLRq3xj5Gersmii2eOFGzcS3kwtjPRGk%2BWnKYRqVm7XLGkRblPaXAUDg2GygkG5xyKDrlKfadf%2FBgy7%2F8%2BotpqjkT4u%2Bbup%2FfHVwAbPbEU8gR%2F9H51tGXo4QhxXmU%2B&X-Amz-Signature=99a7985a047a3b6c4a1c1a59f5ed4f5a8ac6ff896cfa31654b6c73bc8a4f97f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOG6U7J6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDaH9Y1BgSB5nwxPqyLccguHJNbluqLCPTV7kcwejQ%2FMwIgelH2HYT2x1SET84sS0mt3DC6o063sE35zOdpzPeyJ0sqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMS5ldViKblbs1AhECrcA9jhxzz96wnW909GVm8VI6zk1AI6EFGjn94Wwd0XQRf%2FCUfzKR98ntpcp0Nclci1iqeDPMSXpwPTduOgBXBkIRxwUdswDmPQx0YhXml9SkLBUjkzSN9omT%2FuoouOW%2Ff482ShlLkp%2F9zoIzx8ovU9gQvfhVQmWZY8zfwAho4%2B3Wie68WbMXS7D6wUBsDVti7uDoP1x0nWnN4VNRtbAt9qSCD4nfR%2BM8KyESVjSPcPeURRanZzU%2BwX9t1iTnHmdKaBGr6QREm5I8iUmcGNn1A%2FYiN%2Fjs5POzW0lFZxG%2Fd2cjd9An4Cx65TBeoJ5AExeSnfY2Z6Mx3XBni4vdwiL7jRvlwpaCH7GHKDb5hVbaZYF%2FuhEVzvcO75ZbjixRZq8m9F%2FZXd9SWVjybtzXWjrvEifJrdQJnkRkUpMiPLH37NNNANp201xEUfbSRb2Qswh2iRX1w7RasPBwYj%2F%2BmFWp%2B0SGvTips5qqCRP7%2FxClt5QUSzlBuPcWG1ceZDxPedJJTBKOnDcq69pm%2BtlI0il8n%2B%2FSrYEVFYajajmHz%2F99pRY1whzqbJ0uFcx26vQ%2F0pY6rNtbrar5tD12UGQxrnuuGHfWXvN1NPFFH%2FyNyC48CNszzhL4pOtau9HbSy%2FzD7MLKw48IGOqUBPg63Lra%2FchtnR9zObjhcnK4FtT86xlukmz3m%2BN7YaRl12rsmq4VyDpKFlsJFeOcYYvd%2FLuaIqNSV2%2Bk0G9WUcBvQxltVqPXLRq3xj5Gersmii2eOFGzcS3kwtjPRGk%2BWnKYRqVm7XLGkRblPaXAUDg2GygkG5xyKDrlKfadf%2FBgy7%2F8%2BotpqjkT4u%2Bbup%2FfHVwAbPbEU8gR%2F9H51tGXo4QhxXmU%2B&X-Amz-Signature=300bfcb398d71a7051f1e89163bac002a57fded819a07e499ffc889c01dd4698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOG6U7J6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDaH9Y1BgSB5nwxPqyLccguHJNbluqLCPTV7kcwejQ%2FMwIgelH2HYT2x1SET84sS0mt3DC6o063sE35zOdpzPeyJ0sqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMS5ldViKblbs1AhECrcA9jhxzz96wnW909GVm8VI6zk1AI6EFGjn94Wwd0XQRf%2FCUfzKR98ntpcp0Nclci1iqeDPMSXpwPTduOgBXBkIRxwUdswDmPQx0YhXml9SkLBUjkzSN9omT%2FuoouOW%2Ff482ShlLkp%2F9zoIzx8ovU9gQvfhVQmWZY8zfwAho4%2B3Wie68WbMXS7D6wUBsDVti7uDoP1x0nWnN4VNRtbAt9qSCD4nfR%2BM8KyESVjSPcPeURRanZzU%2BwX9t1iTnHmdKaBGr6QREm5I8iUmcGNn1A%2FYiN%2Fjs5POzW0lFZxG%2Fd2cjd9An4Cx65TBeoJ5AExeSnfY2Z6Mx3XBni4vdwiL7jRvlwpaCH7GHKDb5hVbaZYF%2FuhEVzvcO75ZbjixRZq8m9F%2FZXd9SWVjybtzXWjrvEifJrdQJnkRkUpMiPLH37NNNANp201xEUfbSRb2Qswh2iRX1w7RasPBwYj%2F%2BmFWp%2B0SGvTips5qqCRP7%2FxClt5QUSzlBuPcWG1ceZDxPedJJTBKOnDcq69pm%2BtlI0il8n%2B%2FSrYEVFYajajmHz%2F99pRY1whzqbJ0uFcx26vQ%2F0pY6rNtbrar5tD12UGQxrnuuGHfWXvN1NPFFH%2FyNyC48CNszzhL4pOtau9HbSy%2FzD7MLKw48IGOqUBPg63Lra%2FchtnR9zObjhcnK4FtT86xlukmz3m%2BN7YaRl12rsmq4VyDpKFlsJFeOcYYvd%2FLuaIqNSV2%2Bk0G9WUcBvQxltVqPXLRq3xj5Gersmii2eOFGzcS3kwtjPRGk%2BWnKYRqVm7XLGkRblPaXAUDg2GygkG5xyKDrlKfadf%2FBgy7%2F8%2BotpqjkT4u%2Bbup%2FfHVwAbPbEU8gR%2F9H51tGXo4QhxXmU%2B&X-Amz-Signature=a14772185bd3304f8b04044b0a4749c1865b2fe19fe83d45c7a200b9f2374acd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOG6U7J6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDaH9Y1BgSB5nwxPqyLccguHJNbluqLCPTV7kcwejQ%2FMwIgelH2HYT2x1SET84sS0mt3DC6o063sE35zOdpzPeyJ0sqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMS5ldViKblbs1AhECrcA9jhxzz96wnW909GVm8VI6zk1AI6EFGjn94Wwd0XQRf%2FCUfzKR98ntpcp0Nclci1iqeDPMSXpwPTduOgBXBkIRxwUdswDmPQx0YhXml9SkLBUjkzSN9omT%2FuoouOW%2Ff482ShlLkp%2F9zoIzx8ovU9gQvfhVQmWZY8zfwAho4%2B3Wie68WbMXS7D6wUBsDVti7uDoP1x0nWnN4VNRtbAt9qSCD4nfR%2BM8KyESVjSPcPeURRanZzU%2BwX9t1iTnHmdKaBGr6QREm5I8iUmcGNn1A%2FYiN%2Fjs5POzW0lFZxG%2Fd2cjd9An4Cx65TBeoJ5AExeSnfY2Z6Mx3XBni4vdwiL7jRvlwpaCH7GHKDb5hVbaZYF%2FuhEVzvcO75ZbjixRZq8m9F%2FZXd9SWVjybtzXWjrvEifJrdQJnkRkUpMiPLH37NNNANp201xEUfbSRb2Qswh2iRX1w7RasPBwYj%2F%2BmFWp%2B0SGvTips5qqCRP7%2FxClt5QUSzlBuPcWG1ceZDxPedJJTBKOnDcq69pm%2BtlI0il8n%2B%2FSrYEVFYajajmHz%2F99pRY1whzqbJ0uFcx26vQ%2F0pY6rNtbrar5tD12UGQxrnuuGHfWXvN1NPFFH%2FyNyC48CNszzhL4pOtau9HbSy%2FzD7MLKw48IGOqUBPg63Lra%2FchtnR9zObjhcnK4FtT86xlukmz3m%2BN7YaRl12rsmq4VyDpKFlsJFeOcYYvd%2FLuaIqNSV2%2Bk0G9WUcBvQxltVqPXLRq3xj5Gersmii2eOFGzcS3kwtjPRGk%2BWnKYRqVm7XLGkRblPaXAUDg2GygkG5xyKDrlKfadf%2FBgy7%2F8%2BotpqjkT4u%2Bbup%2FfHVwAbPbEU8gR%2F9H51tGXo4QhxXmU%2B&X-Amz-Signature=9fd9d676e1f847128b1ccb01e9962c521ffb8b5622c51897941029303c72a9dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOG6U7J6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDaH9Y1BgSB5nwxPqyLccguHJNbluqLCPTV7kcwejQ%2FMwIgelH2HYT2x1SET84sS0mt3DC6o063sE35zOdpzPeyJ0sqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMS5ldViKblbs1AhECrcA9jhxzz96wnW909GVm8VI6zk1AI6EFGjn94Wwd0XQRf%2FCUfzKR98ntpcp0Nclci1iqeDPMSXpwPTduOgBXBkIRxwUdswDmPQx0YhXml9SkLBUjkzSN9omT%2FuoouOW%2Ff482ShlLkp%2F9zoIzx8ovU9gQvfhVQmWZY8zfwAho4%2B3Wie68WbMXS7D6wUBsDVti7uDoP1x0nWnN4VNRtbAt9qSCD4nfR%2BM8KyESVjSPcPeURRanZzU%2BwX9t1iTnHmdKaBGr6QREm5I8iUmcGNn1A%2FYiN%2Fjs5POzW0lFZxG%2Fd2cjd9An4Cx65TBeoJ5AExeSnfY2Z6Mx3XBni4vdwiL7jRvlwpaCH7GHKDb5hVbaZYF%2FuhEVzvcO75ZbjixRZq8m9F%2FZXd9SWVjybtzXWjrvEifJrdQJnkRkUpMiPLH37NNNANp201xEUfbSRb2Qswh2iRX1w7RasPBwYj%2F%2BmFWp%2B0SGvTips5qqCRP7%2FxClt5QUSzlBuPcWG1ceZDxPedJJTBKOnDcq69pm%2BtlI0il8n%2B%2FSrYEVFYajajmHz%2F99pRY1whzqbJ0uFcx26vQ%2F0pY6rNtbrar5tD12UGQxrnuuGHfWXvN1NPFFH%2FyNyC48CNszzhL4pOtau9HbSy%2FzD7MLKw48IGOqUBPg63Lra%2FchtnR9zObjhcnK4FtT86xlukmz3m%2BN7YaRl12rsmq4VyDpKFlsJFeOcYYvd%2FLuaIqNSV2%2Bk0G9WUcBvQxltVqPXLRq3xj5Gersmii2eOFGzcS3kwtjPRGk%2BWnKYRqVm7XLGkRblPaXAUDg2GygkG5xyKDrlKfadf%2FBgy7%2F8%2BotpqjkT4u%2Bbup%2FfHVwAbPbEU8gR%2F9H51tGXo4QhxXmU%2B&X-Amz-Signature=f80d962d629ceb33ce1e6907327de6cff920bfd00f64af75777760c11bc3f0fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

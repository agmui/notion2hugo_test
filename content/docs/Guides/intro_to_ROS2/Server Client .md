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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZWYXN4G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BlAV4v4%2F%2B4OY2ZcGEr7qVri7FU8w5Ve%2Bw8WZWlL644AiAX7Rsi0APhOY6mpFUlFsvIPaJeJfQ1KY5bkKbZxMjkXiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg3i%2B7TeaHK4ux7MOKtwDXd3aZWVFiIYadiiwdjhE%2BcFIQyLVkuU2leSuLL6sPI48cuQEA0%2Fo1cgKr308yJkiwjWocb0I1aLjZd16Tgmr052g5ulR6oqfNUZlSDmX%2Bq5hNPYV%2Fszxyt9sFBNFFSiWreIcssrml%2FwPHjkIZBrBOqRYtRLkMlbpmErB%2FdXzHokhIrVvwssHBdjuAMRyd7MV2UGnpJdt4pIQxdOsDEFaf6sXRpHX4QL8QwHfZK7qutiHr%2FB8a6v7VB04zqcHuNDmoTHfTD7ivofNm7NF9DpPejGMZfZzpWN%2BzAb4DOgatiaG9s0PYsMlGSlnQpXMibcmnAyM%2FoeWVOoy%2FsID%2FLTZADW4crh2jN8kDACCoR%2FrjHwVPwrqBnFfHpiyt%2Blko4i5UkfuaK4QaJ0t3XNjusToUy39JXAey9%2BU2Sv%2FHIW3Lj9D4MFczeEHOvmg4rj05ZMRtQf%2BVDrh8qqfVsZ%2BRixmH1MlxWMBbpSaTWTRkNai21srN%2BJ67xHL7cTW54pkJsZRoV1WTwjQsWXfVaYy93l07A4OUyWm6HUqLL%2FtMr8nz5Zbn3dRjlOvxWBhZ1Rn7ETngegygh%2BgazKtL%2FzLfzHZkJvY1R2pzNS6YLOYi%2BggAfnc7tpPGZSG2KJAmtowv7jxvwY6pgHpqEN56MbUQAsnp8nC4czS9X6gmaaJ3rHOtsfaQ8%2BZlYnrkNHZ1aRtXXpEMs1gKW2Jr3%2FZN7yOkhKynhYfWBdhedqSGnP9vGdYT%2FYLSi4blxCeEhiExsAuMbI3%2FkMWqVjOzM7mHpVs7102rJSELr%2BO%2B4pnsCYdACIZEkH8%2FyxTECbe5g62wPhMjOwKAHwrwwqZ8ZeYTSAfLdz%2BOQ7yjra2b2Mc2vRa&X-Amz-Signature=d56d259e67d325860d3e06d24b39942a533b35e1d56319072f40f7db83161973&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZWYXN4G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BlAV4v4%2F%2B4OY2ZcGEr7qVri7FU8w5Ve%2Bw8WZWlL644AiAX7Rsi0APhOY6mpFUlFsvIPaJeJfQ1KY5bkKbZxMjkXiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg3i%2B7TeaHK4ux7MOKtwDXd3aZWVFiIYadiiwdjhE%2BcFIQyLVkuU2leSuLL6sPI48cuQEA0%2Fo1cgKr308yJkiwjWocb0I1aLjZd16Tgmr052g5ulR6oqfNUZlSDmX%2Bq5hNPYV%2Fszxyt9sFBNFFSiWreIcssrml%2FwPHjkIZBrBOqRYtRLkMlbpmErB%2FdXzHokhIrVvwssHBdjuAMRyd7MV2UGnpJdt4pIQxdOsDEFaf6sXRpHX4QL8QwHfZK7qutiHr%2FB8a6v7VB04zqcHuNDmoTHfTD7ivofNm7NF9DpPejGMZfZzpWN%2BzAb4DOgatiaG9s0PYsMlGSlnQpXMibcmnAyM%2FoeWVOoy%2FsID%2FLTZADW4crh2jN8kDACCoR%2FrjHwVPwrqBnFfHpiyt%2Blko4i5UkfuaK4QaJ0t3XNjusToUy39JXAey9%2BU2Sv%2FHIW3Lj9D4MFczeEHOvmg4rj05ZMRtQf%2BVDrh8qqfVsZ%2BRixmH1MlxWMBbpSaTWTRkNai21srN%2BJ67xHL7cTW54pkJsZRoV1WTwjQsWXfVaYy93l07A4OUyWm6HUqLL%2FtMr8nz5Zbn3dRjlOvxWBhZ1Rn7ETngegygh%2BgazKtL%2FzLfzHZkJvY1R2pzNS6YLOYi%2BggAfnc7tpPGZSG2KJAmtowv7jxvwY6pgHpqEN56MbUQAsnp8nC4czS9X6gmaaJ3rHOtsfaQ8%2BZlYnrkNHZ1aRtXXpEMs1gKW2Jr3%2FZN7yOkhKynhYfWBdhedqSGnP9vGdYT%2FYLSi4blxCeEhiExsAuMbI3%2FkMWqVjOzM7mHpVs7102rJSELr%2BO%2B4pnsCYdACIZEkH8%2FyxTECbe5g62wPhMjOwKAHwrwwqZ8ZeYTSAfLdz%2BOQ7yjra2b2Mc2vRa&X-Amz-Signature=d1b4b3e45ad8bcd01a1482c56361e13b9b38e62e8ed7d2b67296f692e7b734c5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZWYXN4G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BlAV4v4%2F%2B4OY2ZcGEr7qVri7FU8w5Ve%2Bw8WZWlL644AiAX7Rsi0APhOY6mpFUlFsvIPaJeJfQ1KY5bkKbZxMjkXiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg3i%2B7TeaHK4ux7MOKtwDXd3aZWVFiIYadiiwdjhE%2BcFIQyLVkuU2leSuLL6sPI48cuQEA0%2Fo1cgKr308yJkiwjWocb0I1aLjZd16Tgmr052g5ulR6oqfNUZlSDmX%2Bq5hNPYV%2Fszxyt9sFBNFFSiWreIcssrml%2FwPHjkIZBrBOqRYtRLkMlbpmErB%2FdXzHokhIrVvwssHBdjuAMRyd7MV2UGnpJdt4pIQxdOsDEFaf6sXRpHX4QL8QwHfZK7qutiHr%2FB8a6v7VB04zqcHuNDmoTHfTD7ivofNm7NF9DpPejGMZfZzpWN%2BzAb4DOgatiaG9s0PYsMlGSlnQpXMibcmnAyM%2FoeWVOoy%2FsID%2FLTZADW4crh2jN8kDACCoR%2FrjHwVPwrqBnFfHpiyt%2Blko4i5UkfuaK4QaJ0t3XNjusToUy39JXAey9%2BU2Sv%2FHIW3Lj9D4MFczeEHOvmg4rj05ZMRtQf%2BVDrh8qqfVsZ%2BRixmH1MlxWMBbpSaTWTRkNai21srN%2BJ67xHL7cTW54pkJsZRoV1WTwjQsWXfVaYy93l07A4OUyWm6HUqLL%2FtMr8nz5Zbn3dRjlOvxWBhZ1Rn7ETngegygh%2BgazKtL%2FzLfzHZkJvY1R2pzNS6YLOYi%2BggAfnc7tpPGZSG2KJAmtowv7jxvwY6pgHpqEN56MbUQAsnp8nC4czS9X6gmaaJ3rHOtsfaQ8%2BZlYnrkNHZ1aRtXXpEMs1gKW2Jr3%2FZN7yOkhKynhYfWBdhedqSGnP9vGdYT%2FYLSi4blxCeEhiExsAuMbI3%2FkMWqVjOzM7mHpVs7102rJSELr%2BO%2B4pnsCYdACIZEkH8%2FyxTECbe5g62wPhMjOwKAHwrwwqZ8ZeYTSAfLdz%2BOQ7yjra2b2Mc2vRa&X-Amz-Signature=cdb6766e4dc90daa3179aac7059157aa495c4cf1b1d062a47184d0257fbf3641&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZWYXN4G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BlAV4v4%2F%2B4OY2ZcGEr7qVri7FU8w5Ve%2Bw8WZWlL644AiAX7Rsi0APhOY6mpFUlFsvIPaJeJfQ1KY5bkKbZxMjkXiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg3i%2B7TeaHK4ux7MOKtwDXd3aZWVFiIYadiiwdjhE%2BcFIQyLVkuU2leSuLL6sPI48cuQEA0%2Fo1cgKr308yJkiwjWocb0I1aLjZd16Tgmr052g5ulR6oqfNUZlSDmX%2Bq5hNPYV%2Fszxyt9sFBNFFSiWreIcssrml%2FwPHjkIZBrBOqRYtRLkMlbpmErB%2FdXzHokhIrVvwssHBdjuAMRyd7MV2UGnpJdt4pIQxdOsDEFaf6sXRpHX4QL8QwHfZK7qutiHr%2FB8a6v7VB04zqcHuNDmoTHfTD7ivofNm7NF9DpPejGMZfZzpWN%2BzAb4DOgatiaG9s0PYsMlGSlnQpXMibcmnAyM%2FoeWVOoy%2FsID%2FLTZADW4crh2jN8kDACCoR%2FrjHwVPwrqBnFfHpiyt%2Blko4i5UkfuaK4QaJ0t3XNjusToUy39JXAey9%2BU2Sv%2FHIW3Lj9D4MFczeEHOvmg4rj05ZMRtQf%2BVDrh8qqfVsZ%2BRixmH1MlxWMBbpSaTWTRkNai21srN%2BJ67xHL7cTW54pkJsZRoV1WTwjQsWXfVaYy93l07A4OUyWm6HUqLL%2FtMr8nz5Zbn3dRjlOvxWBhZ1Rn7ETngegygh%2BgazKtL%2FzLfzHZkJvY1R2pzNS6YLOYi%2BggAfnc7tpPGZSG2KJAmtowv7jxvwY6pgHpqEN56MbUQAsnp8nC4czS9X6gmaaJ3rHOtsfaQ8%2BZlYnrkNHZ1aRtXXpEMs1gKW2Jr3%2FZN7yOkhKynhYfWBdhedqSGnP9vGdYT%2FYLSi4blxCeEhiExsAuMbI3%2FkMWqVjOzM7mHpVs7102rJSELr%2BO%2B4pnsCYdACIZEkH8%2FyxTECbe5g62wPhMjOwKAHwrwwqZ8ZeYTSAfLdz%2BOQ7yjra2b2Mc2vRa&X-Amz-Signature=b03fb1684dbc41c969b6e4dcd220c6faafd128f9caa5c098570ce47483cbbdbc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZWYXN4G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BlAV4v4%2F%2B4OY2ZcGEr7qVri7FU8w5Ve%2Bw8WZWlL644AiAX7Rsi0APhOY6mpFUlFsvIPaJeJfQ1KY5bkKbZxMjkXiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg3i%2B7TeaHK4ux7MOKtwDXd3aZWVFiIYadiiwdjhE%2BcFIQyLVkuU2leSuLL6sPI48cuQEA0%2Fo1cgKr308yJkiwjWocb0I1aLjZd16Tgmr052g5ulR6oqfNUZlSDmX%2Bq5hNPYV%2Fszxyt9sFBNFFSiWreIcssrml%2FwPHjkIZBrBOqRYtRLkMlbpmErB%2FdXzHokhIrVvwssHBdjuAMRyd7MV2UGnpJdt4pIQxdOsDEFaf6sXRpHX4QL8QwHfZK7qutiHr%2FB8a6v7VB04zqcHuNDmoTHfTD7ivofNm7NF9DpPejGMZfZzpWN%2BzAb4DOgatiaG9s0PYsMlGSlnQpXMibcmnAyM%2FoeWVOoy%2FsID%2FLTZADW4crh2jN8kDACCoR%2FrjHwVPwrqBnFfHpiyt%2Blko4i5UkfuaK4QaJ0t3XNjusToUy39JXAey9%2BU2Sv%2FHIW3Lj9D4MFczeEHOvmg4rj05ZMRtQf%2BVDrh8qqfVsZ%2BRixmH1MlxWMBbpSaTWTRkNai21srN%2BJ67xHL7cTW54pkJsZRoV1WTwjQsWXfVaYy93l07A4OUyWm6HUqLL%2FtMr8nz5Zbn3dRjlOvxWBhZ1Rn7ETngegygh%2BgazKtL%2FzLfzHZkJvY1R2pzNS6YLOYi%2BggAfnc7tpPGZSG2KJAmtowv7jxvwY6pgHpqEN56MbUQAsnp8nC4czS9X6gmaaJ3rHOtsfaQ8%2BZlYnrkNHZ1aRtXXpEMs1gKW2Jr3%2FZN7yOkhKynhYfWBdhedqSGnP9vGdYT%2FYLSi4blxCeEhiExsAuMbI3%2FkMWqVjOzM7mHpVs7102rJSELr%2BO%2B4pnsCYdACIZEkH8%2FyxTECbe5g62wPhMjOwKAHwrwwqZ8ZeYTSAfLdz%2BOQ7yjra2b2Mc2vRa&X-Amz-Signature=4c649fa1c4352d2cc929e5cdc7a69c8350b7bd636f5deeb2944ea9f57c2f5f3a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

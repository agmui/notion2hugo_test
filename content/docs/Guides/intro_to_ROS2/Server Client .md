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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BJSKVC%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFt1oHRtsCcJ1Pkpmm7sv8uECXz%2BN1TY6f3FJkoI2RJkAiBpf7xE00FVFq3%2F6bHHq9nYtVYlcK18s2%2BkPHfUTcSV%2FyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrxMREs9w82jk%2FjkvKtwDiF05b%2FzBR9qN6%2BHLrODe8Za0PAVZv1R8UjqVUz8gagERYByGtLKB102TjjWbL%2Fgs24%2Fvl49JKga4lA%2Bpy1OZFfSyVDv1%2BBOjS8KR0FZHq4KCg0UUk1TyrS0%2FrgUfmoNNj%2BEMIhdG5LBgFVFyYDDRyst%2FdDl%2BIkyxXGBvqCS4Oima67c7M0g7C4NCCCp6ujhBK6%2BuPmMWYP1teF68cf1Spjuib2QcRkhNr1ltRSHDYwGz96RcvJWAs6N5vJNHUVhhdaQ4S5Qubgsimnivq%2BZXwxrhmyKrYNchIzQCM9qEnpbEfMSqqkmuyIWjSsryRaNTiytuNf5TR%2BDKMWka5YmEN8T6XV%2F%2BNz7S2ezVlzKL14Wz%2BeS62xniZiYGk1o5w1szs9JUIka6ijO4l0hQfuOrwTNL58NhS%2Br8oPw%2FP2rj1%2FtWllipkiqHFhoa1IO4qTb%2FhOxyjcjJnqjrakTZ%2Bo4%2B1B4Q6rWerNlM1R%2B%2FYFpHw1Z1PD0T4C1XB%2Fl67LvZLmxtzirfRLFXk57Mfver6vpfEkjb6lD9sByK3JUrXwQFnBADkG9Sto659%2BZWtdAhM1WqcTDXpSIqIlUBXTNlwMcuSaiPrqlWbkOG4ZfeFtUkquJMe0suxEGIyXvdDc4w%2BNSYwAY6pgFRLTFU6ODAMo5LIltjw16mfspzoK7igKu4a1KIXFViNlLgAtwBnThtNL41e9q7pjL2JlCiNeh26tiQBE9%2FTtw5Ko62Jf%2B6oEwXd8PQoRtpRLn70f4K2GYaltwN%2BV0lYMSmSqfOypQUlCCvEdeI4HuH0QcMkkH2hYmunQ%2F9z%2BywACrCF26OysK9gMDhbiOSgPa725JB3S23DsWc8FWC%2BkVuBh2iNFFP&X-Amz-Signature=6eb33ebdfab63e0b719a6fc62538599f74b8654bf02af81c77b21c2d1d0d31ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BJSKVC%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFt1oHRtsCcJ1Pkpmm7sv8uECXz%2BN1TY6f3FJkoI2RJkAiBpf7xE00FVFq3%2F6bHHq9nYtVYlcK18s2%2BkPHfUTcSV%2FyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrxMREs9w82jk%2FjkvKtwDiF05b%2FzBR9qN6%2BHLrODe8Za0PAVZv1R8UjqVUz8gagERYByGtLKB102TjjWbL%2Fgs24%2Fvl49JKga4lA%2Bpy1OZFfSyVDv1%2BBOjS8KR0FZHq4KCg0UUk1TyrS0%2FrgUfmoNNj%2BEMIhdG5LBgFVFyYDDRyst%2FdDl%2BIkyxXGBvqCS4Oima67c7M0g7C4NCCCp6ujhBK6%2BuPmMWYP1teF68cf1Spjuib2QcRkhNr1ltRSHDYwGz96RcvJWAs6N5vJNHUVhhdaQ4S5Qubgsimnivq%2BZXwxrhmyKrYNchIzQCM9qEnpbEfMSqqkmuyIWjSsryRaNTiytuNf5TR%2BDKMWka5YmEN8T6XV%2F%2BNz7S2ezVlzKL14Wz%2BeS62xniZiYGk1o5w1szs9JUIka6ijO4l0hQfuOrwTNL58NhS%2Br8oPw%2FP2rj1%2FtWllipkiqHFhoa1IO4qTb%2FhOxyjcjJnqjrakTZ%2Bo4%2B1B4Q6rWerNlM1R%2B%2FYFpHw1Z1PD0T4C1XB%2Fl67LvZLmxtzirfRLFXk57Mfver6vpfEkjb6lD9sByK3JUrXwQFnBADkG9Sto659%2BZWtdAhM1WqcTDXpSIqIlUBXTNlwMcuSaiPrqlWbkOG4ZfeFtUkquJMe0suxEGIyXvdDc4w%2BNSYwAY6pgFRLTFU6ODAMo5LIltjw16mfspzoK7igKu4a1KIXFViNlLgAtwBnThtNL41e9q7pjL2JlCiNeh26tiQBE9%2FTtw5Ko62Jf%2B6oEwXd8PQoRtpRLn70f4K2GYaltwN%2BV0lYMSmSqfOypQUlCCvEdeI4HuH0QcMkkH2hYmunQ%2F9z%2BywACrCF26OysK9gMDhbiOSgPa725JB3S23DsWc8FWC%2BkVuBh2iNFFP&X-Amz-Signature=5ab498777cc0bc5cb284e2de2f7a3be6dbb21bbb1f9cfe7dee6e043410174684&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BJSKVC%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFt1oHRtsCcJ1Pkpmm7sv8uECXz%2BN1TY6f3FJkoI2RJkAiBpf7xE00FVFq3%2F6bHHq9nYtVYlcK18s2%2BkPHfUTcSV%2FyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrxMREs9w82jk%2FjkvKtwDiF05b%2FzBR9qN6%2BHLrODe8Za0PAVZv1R8UjqVUz8gagERYByGtLKB102TjjWbL%2Fgs24%2Fvl49JKga4lA%2Bpy1OZFfSyVDv1%2BBOjS8KR0FZHq4KCg0UUk1TyrS0%2FrgUfmoNNj%2BEMIhdG5LBgFVFyYDDRyst%2FdDl%2BIkyxXGBvqCS4Oima67c7M0g7C4NCCCp6ujhBK6%2BuPmMWYP1teF68cf1Spjuib2QcRkhNr1ltRSHDYwGz96RcvJWAs6N5vJNHUVhhdaQ4S5Qubgsimnivq%2BZXwxrhmyKrYNchIzQCM9qEnpbEfMSqqkmuyIWjSsryRaNTiytuNf5TR%2BDKMWka5YmEN8T6XV%2F%2BNz7S2ezVlzKL14Wz%2BeS62xniZiYGk1o5w1szs9JUIka6ijO4l0hQfuOrwTNL58NhS%2Br8oPw%2FP2rj1%2FtWllipkiqHFhoa1IO4qTb%2FhOxyjcjJnqjrakTZ%2Bo4%2B1B4Q6rWerNlM1R%2B%2FYFpHw1Z1PD0T4C1XB%2Fl67LvZLmxtzirfRLFXk57Mfver6vpfEkjb6lD9sByK3JUrXwQFnBADkG9Sto659%2BZWtdAhM1WqcTDXpSIqIlUBXTNlwMcuSaiPrqlWbkOG4ZfeFtUkquJMe0suxEGIyXvdDc4w%2BNSYwAY6pgFRLTFU6ODAMo5LIltjw16mfspzoK7igKu4a1KIXFViNlLgAtwBnThtNL41e9q7pjL2JlCiNeh26tiQBE9%2FTtw5Ko62Jf%2B6oEwXd8PQoRtpRLn70f4K2GYaltwN%2BV0lYMSmSqfOypQUlCCvEdeI4HuH0QcMkkH2hYmunQ%2F9z%2BywACrCF26OysK9gMDhbiOSgPa725JB3S23DsWc8FWC%2BkVuBh2iNFFP&X-Amz-Signature=39630b50ca44968fd1296e1a904717e852ed5ef3cb6df3f627f2b5d52af6f261&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BJSKVC%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFt1oHRtsCcJ1Pkpmm7sv8uECXz%2BN1TY6f3FJkoI2RJkAiBpf7xE00FVFq3%2F6bHHq9nYtVYlcK18s2%2BkPHfUTcSV%2FyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrxMREs9w82jk%2FjkvKtwDiF05b%2FzBR9qN6%2BHLrODe8Za0PAVZv1R8UjqVUz8gagERYByGtLKB102TjjWbL%2Fgs24%2Fvl49JKga4lA%2Bpy1OZFfSyVDv1%2BBOjS8KR0FZHq4KCg0UUk1TyrS0%2FrgUfmoNNj%2BEMIhdG5LBgFVFyYDDRyst%2FdDl%2BIkyxXGBvqCS4Oima67c7M0g7C4NCCCp6ujhBK6%2BuPmMWYP1teF68cf1Spjuib2QcRkhNr1ltRSHDYwGz96RcvJWAs6N5vJNHUVhhdaQ4S5Qubgsimnivq%2BZXwxrhmyKrYNchIzQCM9qEnpbEfMSqqkmuyIWjSsryRaNTiytuNf5TR%2BDKMWka5YmEN8T6XV%2F%2BNz7S2ezVlzKL14Wz%2BeS62xniZiYGk1o5w1szs9JUIka6ijO4l0hQfuOrwTNL58NhS%2Br8oPw%2FP2rj1%2FtWllipkiqHFhoa1IO4qTb%2FhOxyjcjJnqjrakTZ%2Bo4%2B1B4Q6rWerNlM1R%2B%2FYFpHw1Z1PD0T4C1XB%2Fl67LvZLmxtzirfRLFXk57Mfver6vpfEkjb6lD9sByK3JUrXwQFnBADkG9Sto659%2BZWtdAhM1WqcTDXpSIqIlUBXTNlwMcuSaiPrqlWbkOG4ZfeFtUkquJMe0suxEGIyXvdDc4w%2BNSYwAY6pgFRLTFU6ODAMo5LIltjw16mfspzoK7igKu4a1KIXFViNlLgAtwBnThtNL41e9q7pjL2JlCiNeh26tiQBE9%2FTtw5Ko62Jf%2B6oEwXd8PQoRtpRLn70f4K2GYaltwN%2BV0lYMSmSqfOypQUlCCvEdeI4HuH0QcMkkH2hYmunQ%2F9z%2BywACrCF26OysK9gMDhbiOSgPa725JB3S23DsWc8FWC%2BkVuBh2iNFFP&X-Amz-Signature=15f9ff6a6f66403ab5795147b99954637ec7e53b2ac300c9835c8883d3bf0f1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BJSKVC%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFt1oHRtsCcJ1Pkpmm7sv8uECXz%2BN1TY6f3FJkoI2RJkAiBpf7xE00FVFq3%2F6bHHq9nYtVYlcK18s2%2BkPHfUTcSV%2FyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrxMREs9w82jk%2FjkvKtwDiF05b%2FzBR9qN6%2BHLrODe8Za0PAVZv1R8UjqVUz8gagERYByGtLKB102TjjWbL%2Fgs24%2Fvl49JKga4lA%2Bpy1OZFfSyVDv1%2BBOjS8KR0FZHq4KCg0UUk1TyrS0%2FrgUfmoNNj%2BEMIhdG5LBgFVFyYDDRyst%2FdDl%2BIkyxXGBvqCS4Oima67c7M0g7C4NCCCp6ujhBK6%2BuPmMWYP1teF68cf1Spjuib2QcRkhNr1ltRSHDYwGz96RcvJWAs6N5vJNHUVhhdaQ4S5Qubgsimnivq%2BZXwxrhmyKrYNchIzQCM9qEnpbEfMSqqkmuyIWjSsryRaNTiytuNf5TR%2BDKMWka5YmEN8T6XV%2F%2BNz7S2ezVlzKL14Wz%2BeS62xniZiYGk1o5w1szs9JUIka6ijO4l0hQfuOrwTNL58NhS%2Br8oPw%2FP2rj1%2FtWllipkiqHFhoa1IO4qTb%2FhOxyjcjJnqjrakTZ%2Bo4%2B1B4Q6rWerNlM1R%2B%2FYFpHw1Z1PD0T4C1XB%2Fl67LvZLmxtzirfRLFXk57Mfver6vpfEkjb6lD9sByK3JUrXwQFnBADkG9Sto659%2BZWtdAhM1WqcTDXpSIqIlUBXTNlwMcuSaiPrqlWbkOG4ZfeFtUkquJMe0suxEGIyXvdDc4w%2BNSYwAY6pgFRLTFU6ODAMo5LIltjw16mfspzoK7igKu4a1KIXFViNlLgAtwBnThtNL41e9q7pjL2JlCiNeh26tiQBE9%2FTtw5Ko62Jf%2B6oEwXd8PQoRtpRLn70f4K2GYaltwN%2BV0lYMSmSqfOypQUlCCvEdeI4HuH0QcMkkH2hYmunQ%2F9z%2BywACrCF26OysK9gMDhbiOSgPa725JB3S23DsWc8FWC%2BkVuBh2iNFFP&X-Amz-Signature=8bd61934635e6bdef5d101d078c2a8b3a63135042b549c77cad042cdae7d731b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

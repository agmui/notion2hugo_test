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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23EURTJ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCygPBtstKeJmGN7L5vMJIYMbm%2FrwGchiTt97eRDpnqgAIhAMgUH%2F1H7h3T8yOaO2ZYTx8dOqkA24BaeERBEvx5FGWOKv8DCBcQABoMNjM3NDIzMTgzODA1IgxCA%2BAKnpDqqqInFawq3ANvyAXlo4yLmghzgTVlkKKPwAB7Q%2FnqdZxWehTMzPUaIwauIsgwqFI02D4G9N90GObAtpbjMHZuNjvjN%2BQQyd0ZYCSpCRJ1ZO6Bfd9T1oxS3WCuTum8wXbKtXPM46SiGowiEn%2F7oirRTLEWvCi6Jj0NNk8V9cAQRN2h1LX2rr4TXNQP3dj7HT%2BqGkfWVlbhyEWOTQzla%2FeXeqyaoYQoeDYRQwrhuJ2y%2B3Imr3VWG2aU99ZpN0LAKZDnWkUJJpK%2BOVAB%2BJrBj44JGQHDZUqMmjVgW23%2BdDm7kFpJWoXMXT2PKBTcrxkt%2BV8vda%2FePgal1fxIjUCmqp6SrmAli74RwONKtdtdaLCRfNEIgmHhYhJuHreN%2B0q60RcVk5F%2Ba%2BRj3EHICM4NGNTu4l1eQELwC891WG2BzMsGPHlsu8iJ2MzVpGmvcLCZzvkdtyjeskbjHeXmqMCIU93obxR7vcgxy2v5kMpRaeJi55Bj0QjiRRANygypotTmiQ4iVuxxk3ZRL6Yp6GSpnHDuZJ8InLbXS%2FikE4N6jhgMSrXQWRnPx%2FkTb%2B1OX3oZp050f1cK5OrhiSPFaYBX5bzLnE2VjA70EIlBFsgI1%2F9AevnZM8mW3tyWiFQw3O6ZYfknW8m3BjCP5Iq%2FBjqkAVc6u7ONUr2q5M2BGd3kOrHZC4Isr1LSHg1LVJmCpLJJxBMWM3Cq41CFJco1gNRXgy7nVnFnYHAieB8lDMM1A6b9xGiODtYvhE8Z3HURxf3Xn9dPOwizzIKnsNsh47WQMlD%2FXxEQVyTx8QgPtj9lFDy5OxBa6ilUQZvjfYdzVvg%2BCOb3hVwtKOVPMRxI1R71BhsjLgQB10TnsMch%2FkyFOO36uaV8&X-Amz-Signature=60b44e9a6bff67a243ba1bf4a2ee99193ecb19bdda198f6666fb90905adc8e49&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23EURTJ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCygPBtstKeJmGN7L5vMJIYMbm%2FrwGchiTt97eRDpnqgAIhAMgUH%2F1H7h3T8yOaO2ZYTx8dOqkA24BaeERBEvx5FGWOKv8DCBcQABoMNjM3NDIzMTgzODA1IgxCA%2BAKnpDqqqInFawq3ANvyAXlo4yLmghzgTVlkKKPwAB7Q%2FnqdZxWehTMzPUaIwauIsgwqFI02D4G9N90GObAtpbjMHZuNjvjN%2BQQyd0ZYCSpCRJ1ZO6Bfd9T1oxS3WCuTum8wXbKtXPM46SiGowiEn%2F7oirRTLEWvCi6Jj0NNk8V9cAQRN2h1LX2rr4TXNQP3dj7HT%2BqGkfWVlbhyEWOTQzla%2FeXeqyaoYQoeDYRQwrhuJ2y%2B3Imr3VWG2aU99ZpN0LAKZDnWkUJJpK%2BOVAB%2BJrBj44JGQHDZUqMmjVgW23%2BdDm7kFpJWoXMXT2PKBTcrxkt%2BV8vda%2FePgal1fxIjUCmqp6SrmAli74RwONKtdtdaLCRfNEIgmHhYhJuHreN%2B0q60RcVk5F%2Ba%2BRj3EHICM4NGNTu4l1eQELwC891WG2BzMsGPHlsu8iJ2MzVpGmvcLCZzvkdtyjeskbjHeXmqMCIU93obxR7vcgxy2v5kMpRaeJi55Bj0QjiRRANygypotTmiQ4iVuxxk3ZRL6Yp6GSpnHDuZJ8InLbXS%2FikE4N6jhgMSrXQWRnPx%2FkTb%2B1OX3oZp050f1cK5OrhiSPFaYBX5bzLnE2VjA70EIlBFsgI1%2F9AevnZM8mW3tyWiFQw3O6ZYfknW8m3BjCP5Iq%2FBjqkAVc6u7ONUr2q5M2BGd3kOrHZC4Isr1LSHg1LVJmCpLJJxBMWM3Cq41CFJco1gNRXgy7nVnFnYHAieB8lDMM1A6b9xGiODtYvhE8Z3HURxf3Xn9dPOwizzIKnsNsh47WQMlD%2FXxEQVyTx8QgPtj9lFDy5OxBa6ilUQZvjfYdzVvg%2BCOb3hVwtKOVPMRxI1R71BhsjLgQB10TnsMch%2FkyFOO36uaV8&X-Amz-Signature=dca60d034ada052cfc54c7aec4036fc65c93f855a34ce5b31a675b4d7eff54ea&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23EURTJ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCygPBtstKeJmGN7L5vMJIYMbm%2FrwGchiTt97eRDpnqgAIhAMgUH%2F1H7h3T8yOaO2ZYTx8dOqkA24BaeERBEvx5FGWOKv8DCBcQABoMNjM3NDIzMTgzODA1IgxCA%2BAKnpDqqqInFawq3ANvyAXlo4yLmghzgTVlkKKPwAB7Q%2FnqdZxWehTMzPUaIwauIsgwqFI02D4G9N90GObAtpbjMHZuNjvjN%2BQQyd0ZYCSpCRJ1ZO6Bfd9T1oxS3WCuTum8wXbKtXPM46SiGowiEn%2F7oirRTLEWvCi6Jj0NNk8V9cAQRN2h1LX2rr4TXNQP3dj7HT%2BqGkfWVlbhyEWOTQzla%2FeXeqyaoYQoeDYRQwrhuJ2y%2B3Imr3VWG2aU99ZpN0LAKZDnWkUJJpK%2BOVAB%2BJrBj44JGQHDZUqMmjVgW23%2BdDm7kFpJWoXMXT2PKBTcrxkt%2BV8vda%2FePgal1fxIjUCmqp6SrmAli74RwONKtdtdaLCRfNEIgmHhYhJuHreN%2B0q60RcVk5F%2Ba%2BRj3EHICM4NGNTu4l1eQELwC891WG2BzMsGPHlsu8iJ2MzVpGmvcLCZzvkdtyjeskbjHeXmqMCIU93obxR7vcgxy2v5kMpRaeJi55Bj0QjiRRANygypotTmiQ4iVuxxk3ZRL6Yp6GSpnHDuZJ8InLbXS%2FikE4N6jhgMSrXQWRnPx%2FkTb%2B1OX3oZp050f1cK5OrhiSPFaYBX5bzLnE2VjA70EIlBFsgI1%2F9AevnZM8mW3tyWiFQw3O6ZYfknW8m3BjCP5Iq%2FBjqkAVc6u7ONUr2q5M2BGd3kOrHZC4Isr1LSHg1LVJmCpLJJxBMWM3Cq41CFJco1gNRXgy7nVnFnYHAieB8lDMM1A6b9xGiODtYvhE8Z3HURxf3Xn9dPOwizzIKnsNsh47WQMlD%2FXxEQVyTx8QgPtj9lFDy5OxBa6ilUQZvjfYdzVvg%2BCOb3hVwtKOVPMRxI1R71BhsjLgQB10TnsMch%2FkyFOO36uaV8&X-Amz-Signature=325ba03f49979de1a908d149ac8011b159c7ef7d8e6e14c40cc4302332fa4356&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23EURTJ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCygPBtstKeJmGN7L5vMJIYMbm%2FrwGchiTt97eRDpnqgAIhAMgUH%2F1H7h3T8yOaO2ZYTx8dOqkA24BaeERBEvx5FGWOKv8DCBcQABoMNjM3NDIzMTgzODA1IgxCA%2BAKnpDqqqInFawq3ANvyAXlo4yLmghzgTVlkKKPwAB7Q%2FnqdZxWehTMzPUaIwauIsgwqFI02D4G9N90GObAtpbjMHZuNjvjN%2BQQyd0ZYCSpCRJ1ZO6Bfd9T1oxS3WCuTum8wXbKtXPM46SiGowiEn%2F7oirRTLEWvCi6Jj0NNk8V9cAQRN2h1LX2rr4TXNQP3dj7HT%2BqGkfWVlbhyEWOTQzla%2FeXeqyaoYQoeDYRQwrhuJ2y%2B3Imr3VWG2aU99ZpN0LAKZDnWkUJJpK%2BOVAB%2BJrBj44JGQHDZUqMmjVgW23%2BdDm7kFpJWoXMXT2PKBTcrxkt%2BV8vda%2FePgal1fxIjUCmqp6SrmAli74RwONKtdtdaLCRfNEIgmHhYhJuHreN%2B0q60RcVk5F%2Ba%2BRj3EHICM4NGNTu4l1eQELwC891WG2BzMsGPHlsu8iJ2MzVpGmvcLCZzvkdtyjeskbjHeXmqMCIU93obxR7vcgxy2v5kMpRaeJi55Bj0QjiRRANygypotTmiQ4iVuxxk3ZRL6Yp6GSpnHDuZJ8InLbXS%2FikE4N6jhgMSrXQWRnPx%2FkTb%2B1OX3oZp050f1cK5OrhiSPFaYBX5bzLnE2VjA70EIlBFsgI1%2F9AevnZM8mW3tyWiFQw3O6ZYfknW8m3BjCP5Iq%2FBjqkAVc6u7ONUr2q5M2BGd3kOrHZC4Isr1LSHg1LVJmCpLJJxBMWM3Cq41CFJco1gNRXgy7nVnFnYHAieB8lDMM1A6b9xGiODtYvhE8Z3HURxf3Xn9dPOwizzIKnsNsh47WQMlD%2FXxEQVyTx8QgPtj9lFDy5OxBa6ilUQZvjfYdzVvg%2BCOb3hVwtKOVPMRxI1R71BhsjLgQB10TnsMch%2FkyFOO36uaV8&X-Amz-Signature=8c61fc8eed6555235fdb95ce3aa3f9e12f927e87c28fb259b01c64e45d88d57f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23EURTJ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCygPBtstKeJmGN7L5vMJIYMbm%2FrwGchiTt97eRDpnqgAIhAMgUH%2F1H7h3T8yOaO2ZYTx8dOqkA24BaeERBEvx5FGWOKv8DCBcQABoMNjM3NDIzMTgzODA1IgxCA%2BAKnpDqqqInFawq3ANvyAXlo4yLmghzgTVlkKKPwAB7Q%2FnqdZxWehTMzPUaIwauIsgwqFI02D4G9N90GObAtpbjMHZuNjvjN%2BQQyd0ZYCSpCRJ1ZO6Bfd9T1oxS3WCuTum8wXbKtXPM46SiGowiEn%2F7oirRTLEWvCi6Jj0NNk8V9cAQRN2h1LX2rr4TXNQP3dj7HT%2BqGkfWVlbhyEWOTQzla%2FeXeqyaoYQoeDYRQwrhuJ2y%2B3Imr3VWG2aU99ZpN0LAKZDnWkUJJpK%2BOVAB%2BJrBj44JGQHDZUqMmjVgW23%2BdDm7kFpJWoXMXT2PKBTcrxkt%2BV8vda%2FePgal1fxIjUCmqp6SrmAli74RwONKtdtdaLCRfNEIgmHhYhJuHreN%2B0q60RcVk5F%2Ba%2BRj3EHICM4NGNTu4l1eQELwC891WG2BzMsGPHlsu8iJ2MzVpGmvcLCZzvkdtyjeskbjHeXmqMCIU93obxR7vcgxy2v5kMpRaeJi55Bj0QjiRRANygypotTmiQ4iVuxxk3ZRL6Yp6GSpnHDuZJ8InLbXS%2FikE4N6jhgMSrXQWRnPx%2FkTb%2B1OX3oZp050f1cK5OrhiSPFaYBX5bzLnE2VjA70EIlBFsgI1%2F9AevnZM8mW3tyWiFQw3O6ZYfknW8m3BjCP5Iq%2FBjqkAVc6u7ONUr2q5M2BGd3kOrHZC4Isr1LSHg1LVJmCpLJJxBMWM3Cq41CFJco1gNRXgy7nVnFnYHAieB8lDMM1A6b9xGiODtYvhE8Z3HURxf3Xn9dPOwizzIKnsNsh47WQMlD%2FXxEQVyTx8QgPtj9lFDy5OxBa6ilUQZvjfYdzVvg%2BCOb3hVwtKOVPMRxI1R71BhsjLgQB10TnsMch%2FkyFOO36uaV8&X-Amz-Signature=aaef6f7d48780b560ff0037b5c1400fd014c3bab47e7f0f01c3ce96a4868defb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

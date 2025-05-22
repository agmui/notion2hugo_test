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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVCSWARV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDZM%2BV7lJ3%2FBHJT9kn%2BqFBq0tAA%2BCkJsWOVCTlnHEwjAwIhANXB8AALzRnBgira6LPABtn%2BwN0MB7xOCGou0E4waUPdKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz48y4fc3S%2BV%2FZFR3Yq3ANtKUqavVXxFnC8tvPjavB%2Fd7ushYkpbyylJRbTADux2ZKLV2EWEcIaYMOzG6OuAq3kGq2fILZlth731rhc9Rz0mFa27hpRfTTxrvntXSpRxd12gFvLPeQ5Ta3rEAAUr6ADcSFMTxhQqZ6Nrh4Dy0fq%2B7gHfoYhcOjfOptO3v23M7rtCHfow33RGNj089r6P2DmzEuDBZe06Gc9xPXUn6y8PzTAdO2OnFyAuvpIFzaWaqAPpBfPFbCh7TVChH1PFdYIh%2B7kYNDCNLn12r3JOcV4kZWkOQDtRXiiTnSRpH%2Bg09Dc%2BL3UZajAT%2By%2Bv2uxSAlMLDqxFIJFtlM4G%2Fdvrhiw7hBtcJFBO3ysctko5KYvBycdA7GMqnTTgmoKKfm7Flo03rXT8Q6kn1xy%2BvPJz1KAkpg%2BPXlkhi4NLT7WthXVZaLGCn4TE1PBtzuvrhgfz6pGEIcmgvcCwF5L9XVjWItnId4ssqDa3deT33zA2gMe3u5ZdKMPGaLgNrC1abAVGUgBH70%2Ffn%2FCbZZhma9%2B6QI8z3%2F0T0wXxn6swhKt2QyWlZGDcI82Ur%2B6%2F9AKW4g9Pu4BXBJtmZzVLipGqgHor5oT7HK6An3%2BLtReX3Fnq%2BM5Se7iKmARNjoZBYoHjzChyr7BBjqkAaSjqbPyzgnrxTkskbJfAaG2Gz7aE8N1GRvdItZ1X1OkLJeAxBAXqtU3AlkMuTPjuxigU7IRav2u%2FVSoYJJqEhvAQMK%2B7WZXcnY3B3aTwY59tlpQXjp%2FG0QwAruWaXAOOXGm8h%2BcbjzfBhGVyxSV13boBZK1Pt4OEXJNxsefAxXKEzMPIQ2xKENtWnsy76B%2BEOKhOOhWyr4qiQsupmznJWmj1tCJ&X-Amz-Signature=e401aa9cf09cea94be03da2cdd7f97f5762cc04d29d81de05f062d497a6d03c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVCSWARV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDZM%2BV7lJ3%2FBHJT9kn%2BqFBq0tAA%2BCkJsWOVCTlnHEwjAwIhANXB8AALzRnBgira6LPABtn%2BwN0MB7xOCGou0E4waUPdKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz48y4fc3S%2BV%2FZFR3Yq3ANtKUqavVXxFnC8tvPjavB%2Fd7ushYkpbyylJRbTADux2ZKLV2EWEcIaYMOzG6OuAq3kGq2fILZlth731rhc9Rz0mFa27hpRfTTxrvntXSpRxd12gFvLPeQ5Ta3rEAAUr6ADcSFMTxhQqZ6Nrh4Dy0fq%2B7gHfoYhcOjfOptO3v23M7rtCHfow33RGNj089r6P2DmzEuDBZe06Gc9xPXUn6y8PzTAdO2OnFyAuvpIFzaWaqAPpBfPFbCh7TVChH1PFdYIh%2B7kYNDCNLn12r3JOcV4kZWkOQDtRXiiTnSRpH%2Bg09Dc%2BL3UZajAT%2By%2Bv2uxSAlMLDqxFIJFtlM4G%2Fdvrhiw7hBtcJFBO3ysctko5KYvBycdA7GMqnTTgmoKKfm7Flo03rXT8Q6kn1xy%2BvPJz1KAkpg%2BPXlkhi4NLT7WthXVZaLGCn4TE1PBtzuvrhgfz6pGEIcmgvcCwF5L9XVjWItnId4ssqDa3deT33zA2gMe3u5ZdKMPGaLgNrC1abAVGUgBH70%2Ffn%2FCbZZhma9%2B6QI8z3%2F0T0wXxn6swhKt2QyWlZGDcI82Ur%2B6%2F9AKW4g9Pu4BXBJtmZzVLipGqgHor5oT7HK6An3%2BLtReX3Fnq%2BM5Se7iKmARNjoZBYoHjzChyr7BBjqkAaSjqbPyzgnrxTkskbJfAaG2Gz7aE8N1GRvdItZ1X1OkLJeAxBAXqtU3AlkMuTPjuxigU7IRav2u%2FVSoYJJqEhvAQMK%2B7WZXcnY3B3aTwY59tlpQXjp%2FG0QwAruWaXAOOXGm8h%2BcbjzfBhGVyxSV13boBZK1Pt4OEXJNxsefAxXKEzMPIQ2xKENtWnsy76B%2BEOKhOOhWyr4qiQsupmznJWmj1tCJ&X-Amz-Signature=f99705f4431922b3d3e00cfee5be211ebd9193d289ddb1b868a77980c3152883&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVCSWARV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDZM%2BV7lJ3%2FBHJT9kn%2BqFBq0tAA%2BCkJsWOVCTlnHEwjAwIhANXB8AALzRnBgira6LPABtn%2BwN0MB7xOCGou0E4waUPdKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz48y4fc3S%2BV%2FZFR3Yq3ANtKUqavVXxFnC8tvPjavB%2Fd7ushYkpbyylJRbTADux2ZKLV2EWEcIaYMOzG6OuAq3kGq2fILZlth731rhc9Rz0mFa27hpRfTTxrvntXSpRxd12gFvLPeQ5Ta3rEAAUr6ADcSFMTxhQqZ6Nrh4Dy0fq%2B7gHfoYhcOjfOptO3v23M7rtCHfow33RGNj089r6P2DmzEuDBZe06Gc9xPXUn6y8PzTAdO2OnFyAuvpIFzaWaqAPpBfPFbCh7TVChH1PFdYIh%2B7kYNDCNLn12r3JOcV4kZWkOQDtRXiiTnSRpH%2Bg09Dc%2BL3UZajAT%2By%2Bv2uxSAlMLDqxFIJFtlM4G%2Fdvrhiw7hBtcJFBO3ysctko5KYvBycdA7GMqnTTgmoKKfm7Flo03rXT8Q6kn1xy%2BvPJz1KAkpg%2BPXlkhi4NLT7WthXVZaLGCn4TE1PBtzuvrhgfz6pGEIcmgvcCwF5L9XVjWItnId4ssqDa3deT33zA2gMe3u5ZdKMPGaLgNrC1abAVGUgBH70%2Ffn%2FCbZZhma9%2B6QI8z3%2F0T0wXxn6swhKt2QyWlZGDcI82Ur%2B6%2F9AKW4g9Pu4BXBJtmZzVLipGqgHor5oT7HK6An3%2BLtReX3Fnq%2BM5Se7iKmARNjoZBYoHjzChyr7BBjqkAaSjqbPyzgnrxTkskbJfAaG2Gz7aE8N1GRvdItZ1X1OkLJeAxBAXqtU3AlkMuTPjuxigU7IRav2u%2FVSoYJJqEhvAQMK%2B7WZXcnY3B3aTwY59tlpQXjp%2FG0QwAruWaXAOOXGm8h%2BcbjzfBhGVyxSV13boBZK1Pt4OEXJNxsefAxXKEzMPIQ2xKENtWnsy76B%2BEOKhOOhWyr4qiQsupmznJWmj1tCJ&X-Amz-Signature=055db4c7c8f196182fe2e53e6c9fa2a2c0154a542a0c023088dfadaef24369bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVCSWARV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDZM%2BV7lJ3%2FBHJT9kn%2BqFBq0tAA%2BCkJsWOVCTlnHEwjAwIhANXB8AALzRnBgira6LPABtn%2BwN0MB7xOCGou0E4waUPdKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz48y4fc3S%2BV%2FZFR3Yq3ANtKUqavVXxFnC8tvPjavB%2Fd7ushYkpbyylJRbTADux2ZKLV2EWEcIaYMOzG6OuAq3kGq2fILZlth731rhc9Rz0mFa27hpRfTTxrvntXSpRxd12gFvLPeQ5Ta3rEAAUr6ADcSFMTxhQqZ6Nrh4Dy0fq%2B7gHfoYhcOjfOptO3v23M7rtCHfow33RGNj089r6P2DmzEuDBZe06Gc9xPXUn6y8PzTAdO2OnFyAuvpIFzaWaqAPpBfPFbCh7TVChH1PFdYIh%2B7kYNDCNLn12r3JOcV4kZWkOQDtRXiiTnSRpH%2Bg09Dc%2BL3UZajAT%2By%2Bv2uxSAlMLDqxFIJFtlM4G%2Fdvrhiw7hBtcJFBO3ysctko5KYvBycdA7GMqnTTgmoKKfm7Flo03rXT8Q6kn1xy%2BvPJz1KAkpg%2BPXlkhi4NLT7WthXVZaLGCn4TE1PBtzuvrhgfz6pGEIcmgvcCwF5L9XVjWItnId4ssqDa3deT33zA2gMe3u5ZdKMPGaLgNrC1abAVGUgBH70%2Ffn%2FCbZZhma9%2B6QI8z3%2F0T0wXxn6swhKt2QyWlZGDcI82Ur%2B6%2F9AKW4g9Pu4BXBJtmZzVLipGqgHor5oT7HK6An3%2BLtReX3Fnq%2BM5Se7iKmARNjoZBYoHjzChyr7BBjqkAaSjqbPyzgnrxTkskbJfAaG2Gz7aE8N1GRvdItZ1X1OkLJeAxBAXqtU3AlkMuTPjuxigU7IRav2u%2FVSoYJJqEhvAQMK%2B7WZXcnY3B3aTwY59tlpQXjp%2FG0QwAruWaXAOOXGm8h%2BcbjzfBhGVyxSV13boBZK1Pt4OEXJNxsefAxXKEzMPIQ2xKENtWnsy76B%2BEOKhOOhWyr4qiQsupmznJWmj1tCJ&X-Amz-Signature=90f04a66aaf2f68580fae90152fa5498c4e79c4f3fba4e82d6afb9f43a7cb708&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVCSWARV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDZM%2BV7lJ3%2FBHJT9kn%2BqFBq0tAA%2BCkJsWOVCTlnHEwjAwIhANXB8AALzRnBgira6LPABtn%2BwN0MB7xOCGou0E4waUPdKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz48y4fc3S%2BV%2FZFR3Yq3ANtKUqavVXxFnC8tvPjavB%2Fd7ushYkpbyylJRbTADux2ZKLV2EWEcIaYMOzG6OuAq3kGq2fILZlth731rhc9Rz0mFa27hpRfTTxrvntXSpRxd12gFvLPeQ5Ta3rEAAUr6ADcSFMTxhQqZ6Nrh4Dy0fq%2B7gHfoYhcOjfOptO3v23M7rtCHfow33RGNj089r6P2DmzEuDBZe06Gc9xPXUn6y8PzTAdO2OnFyAuvpIFzaWaqAPpBfPFbCh7TVChH1PFdYIh%2B7kYNDCNLn12r3JOcV4kZWkOQDtRXiiTnSRpH%2Bg09Dc%2BL3UZajAT%2By%2Bv2uxSAlMLDqxFIJFtlM4G%2Fdvrhiw7hBtcJFBO3ysctko5KYvBycdA7GMqnTTgmoKKfm7Flo03rXT8Q6kn1xy%2BvPJz1KAkpg%2BPXlkhi4NLT7WthXVZaLGCn4TE1PBtzuvrhgfz6pGEIcmgvcCwF5L9XVjWItnId4ssqDa3deT33zA2gMe3u5ZdKMPGaLgNrC1abAVGUgBH70%2Ffn%2FCbZZhma9%2B6QI8z3%2F0T0wXxn6swhKt2QyWlZGDcI82Ur%2B6%2F9AKW4g9Pu4BXBJtmZzVLipGqgHor5oT7HK6An3%2BLtReX3Fnq%2BM5Se7iKmARNjoZBYoHjzChyr7BBjqkAaSjqbPyzgnrxTkskbJfAaG2Gz7aE8N1GRvdItZ1X1OkLJeAxBAXqtU3AlkMuTPjuxigU7IRav2u%2FVSoYJJqEhvAQMK%2B7WZXcnY3B3aTwY59tlpQXjp%2FG0QwAruWaXAOOXGm8h%2BcbjzfBhGVyxSV13boBZK1Pt4OEXJNxsefAxXKEzMPIQ2xKENtWnsy76B%2BEOKhOOhWyr4qiQsupmznJWmj1tCJ&X-Amz-Signature=2f331c25614fe83d712ff6191ea204e6484895f06563ef320b40e0aa6272f6d3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

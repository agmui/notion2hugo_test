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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R37HL3UK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEpLQrtpTO3MCYmg%2FRuMnr2hgy1G7uid46bQm1fEbkNAiAomjRDNcbMsAH%2FFJtysZgz9cqX6qXHGeQMbP10raBloSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzIuDMt3XtjYjUbvkKtwDGxVabRVFCyox1TbrlMabVJxu8fKybZlEfFiuS%2BUr8bzUUUnqoY9kLJf9%2B55I9yu7fnqs%2BbOfez1J%2BOuExU%2B1omJ%2FCr46d0e%2Fj7QayfnEggQzqEKWfPD02If0ENBpEqKRJ1wGS47y4XXwXu7I9FXeU1QIU0UIxsCqFOkSRHs2rcMIACg%2FNIi9%2BUNEsAxe1E9GMUCiEVlQszAgWJH4LpuVfl5m9J67p3r1K%2B%2BIQdSLRxypzg%2B502zIyzXFjGNb8xR1AuUooMKi%2BRGVScYCZSaillIVbW63%2FLn7Gkbb7q2XsX17h99tCTdRsyvL%2BJhRUcAhC%2FcexU68%2Fq5kkesQQ1HrWVwP%2BB0DZVzSqcTQa8X1dAhv%2B4Rrjm3G2QZ014Qvw775Mp7oTWIpt4N8kwJSODST0oAbAp3tYzc6AYaNTmZ3ENvy%2FfxEmMi%2Bb0UWiIbPN%2Bs074QaiH1n1UQS3IEumzUg0qzzGVvRg3I5BMYIYABjZfLpvsjicfQ6K12TBh23imOb93%2BbE%2FMC%2BXC%2FPyuAbjEbzyzTYLl30nlCusNr9GtIyFazdSDrsjdlImA2YNoVvhuVEdDRao6Cef5twxDFVqMfxTyCZglYKOOotjSztUQYYEQHui1NBaiboX53d2Aw0MLXwgY6pgHAaOgYnxU95dlueviBv4TcIX%2F191JevOzV2IDlU5mJlX0Iy%2BsuCiUgtnsslH2AK9VODuA2tOaKhmAm%2Ff8UCo49u3BekPHyW%2BWy73q1ElmMxSzXj16RGLI%2BXSHNA2emR%2BXVdcp42OHmDohZW6OaNkVpYoEmb0N%2FAWUP2KSrvreh3XET5tT50y%2FkkhYd8arQwCHFYVHp1XFxmbsr2ImlCQ%2FIimekHvUW&X-Amz-Signature=f7180f980c72b56147a5fc636850c3e93145ecf3c55edecbf24468b60a49beda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R37HL3UK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEpLQrtpTO3MCYmg%2FRuMnr2hgy1G7uid46bQm1fEbkNAiAomjRDNcbMsAH%2FFJtysZgz9cqX6qXHGeQMbP10raBloSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzIuDMt3XtjYjUbvkKtwDGxVabRVFCyox1TbrlMabVJxu8fKybZlEfFiuS%2BUr8bzUUUnqoY9kLJf9%2B55I9yu7fnqs%2BbOfez1J%2BOuExU%2B1omJ%2FCr46d0e%2Fj7QayfnEggQzqEKWfPD02If0ENBpEqKRJ1wGS47y4XXwXu7I9FXeU1QIU0UIxsCqFOkSRHs2rcMIACg%2FNIi9%2BUNEsAxe1E9GMUCiEVlQszAgWJH4LpuVfl5m9J67p3r1K%2B%2BIQdSLRxypzg%2B502zIyzXFjGNb8xR1AuUooMKi%2BRGVScYCZSaillIVbW63%2FLn7Gkbb7q2XsX17h99tCTdRsyvL%2BJhRUcAhC%2FcexU68%2Fq5kkesQQ1HrWVwP%2BB0DZVzSqcTQa8X1dAhv%2B4Rrjm3G2QZ014Qvw775Mp7oTWIpt4N8kwJSODST0oAbAp3tYzc6AYaNTmZ3ENvy%2FfxEmMi%2Bb0UWiIbPN%2Bs074QaiH1n1UQS3IEumzUg0qzzGVvRg3I5BMYIYABjZfLpvsjicfQ6K12TBh23imOb93%2BbE%2FMC%2BXC%2FPyuAbjEbzyzTYLl30nlCusNr9GtIyFazdSDrsjdlImA2YNoVvhuVEdDRao6Cef5twxDFVqMfxTyCZglYKOOotjSztUQYYEQHui1NBaiboX53d2Aw0MLXwgY6pgHAaOgYnxU95dlueviBv4TcIX%2F191JevOzV2IDlU5mJlX0Iy%2BsuCiUgtnsslH2AK9VODuA2tOaKhmAm%2Ff8UCo49u3BekPHyW%2BWy73q1ElmMxSzXj16RGLI%2BXSHNA2emR%2BXVdcp42OHmDohZW6OaNkVpYoEmb0N%2FAWUP2KSrvreh3XET5tT50y%2FkkhYd8arQwCHFYVHp1XFxmbsr2ImlCQ%2FIimekHvUW&X-Amz-Signature=16d15f99fdd5019089a81f897e9c2970e3db7c34180307c01daaed5661e7c6b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R37HL3UK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEpLQrtpTO3MCYmg%2FRuMnr2hgy1G7uid46bQm1fEbkNAiAomjRDNcbMsAH%2FFJtysZgz9cqX6qXHGeQMbP10raBloSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzIuDMt3XtjYjUbvkKtwDGxVabRVFCyox1TbrlMabVJxu8fKybZlEfFiuS%2BUr8bzUUUnqoY9kLJf9%2B55I9yu7fnqs%2BbOfez1J%2BOuExU%2B1omJ%2FCr46d0e%2Fj7QayfnEggQzqEKWfPD02If0ENBpEqKRJ1wGS47y4XXwXu7I9FXeU1QIU0UIxsCqFOkSRHs2rcMIACg%2FNIi9%2BUNEsAxe1E9GMUCiEVlQszAgWJH4LpuVfl5m9J67p3r1K%2B%2BIQdSLRxypzg%2B502zIyzXFjGNb8xR1AuUooMKi%2BRGVScYCZSaillIVbW63%2FLn7Gkbb7q2XsX17h99tCTdRsyvL%2BJhRUcAhC%2FcexU68%2Fq5kkesQQ1HrWVwP%2BB0DZVzSqcTQa8X1dAhv%2B4Rrjm3G2QZ014Qvw775Mp7oTWIpt4N8kwJSODST0oAbAp3tYzc6AYaNTmZ3ENvy%2FfxEmMi%2Bb0UWiIbPN%2Bs074QaiH1n1UQS3IEumzUg0qzzGVvRg3I5BMYIYABjZfLpvsjicfQ6K12TBh23imOb93%2BbE%2FMC%2BXC%2FPyuAbjEbzyzTYLl30nlCusNr9GtIyFazdSDrsjdlImA2YNoVvhuVEdDRao6Cef5twxDFVqMfxTyCZglYKOOotjSztUQYYEQHui1NBaiboX53d2Aw0MLXwgY6pgHAaOgYnxU95dlueviBv4TcIX%2F191JevOzV2IDlU5mJlX0Iy%2BsuCiUgtnsslH2AK9VODuA2tOaKhmAm%2Ff8UCo49u3BekPHyW%2BWy73q1ElmMxSzXj16RGLI%2BXSHNA2emR%2BXVdcp42OHmDohZW6OaNkVpYoEmb0N%2FAWUP2KSrvreh3XET5tT50y%2FkkhYd8arQwCHFYVHp1XFxmbsr2ImlCQ%2FIimekHvUW&X-Amz-Signature=740a7fb7d5d442016d88c4c358a4482138f3044f3fd15bc2b4dfb8f9b6b1043e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R37HL3UK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEpLQrtpTO3MCYmg%2FRuMnr2hgy1G7uid46bQm1fEbkNAiAomjRDNcbMsAH%2FFJtysZgz9cqX6qXHGeQMbP10raBloSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzIuDMt3XtjYjUbvkKtwDGxVabRVFCyox1TbrlMabVJxu8fKybZlEfFiuS%2BUr8bzUUUnqoY9kLJf9%2B55I9yu7fnqs%2BbOfez1J%2BOuExU%2B1omJ%2FCr46d0e%2Fj7QayfnEggQzqEKWfPD02If0ENBpEqKRJ1wGS47y4XXwXu7I9FXeU1QIU0UIxsCqFOkSRHs2rcMIACg%2FNIi9%2BUNEsAxe1E9GMUCiEVlQszAgWJH4LpuVfl5m9J67p3r1K%2B%2BIQdSLRxypzg%2B502zIyzXFjGNb8xR1AuUooMKi%2BRGVScYCZSaillIVbW63%2FLn7Gkbb7q2XsX17h99tCTdRsyvL%2BJhRUcAhC%2FcexU68%2Fq5kkesQQ1HrWVwP%2BB0DZVzSqcTQa8X1dAhv%2B4Rrjm3G2QZ014Qvw775Mp7oTWIpt4N8kwJSODST0oAbAp3tYzc6AYaNTmZ3ENvy%2FfxEmMi%2Bb0UWiIbPN%2Bs074QaiH1n1UQS3IEumzUg0qzzGVvRg3I5BMYIYABjZfLpvsjicfQ6K12TBh23imOb93%2BbE%2FMC%2BXC%2FPyuAbjEbzyzTYLl30nlCusNr9GtIyFazdSDrsjdlImA2YNoVvhuVEdDRao6Cef5twxDFVqMfxTyCZglYKOOotjSztUQYYEQHui1NBaiboX53d2Aw0MLXwgY6pgHAaOgYnxU95dlueviBv4TcIX%2F191JevOzV2IDlU5mJlX0Iy%2BsuCiUgtnsslH2AK9VODuA2tOaKhmAm%2Ff8UCo49u3BekPHyW%2BWy73q1ElmMxSzXj16RGLI%2BXSHNA2emR%2BXVdcp42OHmDohZW6OaNkVpYoEmb0N%2FAWUP2KSrvreh3XET5tT50y%2FkkhYd8arQwCHFYVHp1XFxmbsr2ImlCQ%2FIimekHvUW&X-Amz-Signature=7d68a17ce4661f85c8ff47d96749559fa502f7ef85f52a303999985352034bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R37HL3UK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEpLQrtpTO3MCYmg%2FRuMnr2hgy1G7uid46bQm1fEbkNAiAomjRDNcbMsAH%2FFJtysZgz9cqX6qXHGeQMbP10raBloSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzIuDMt3XtjYjUbvkKtwDGxVabRVFCyox1TbrlMabVJxu8fKybZlEfFiuS%2BUr8bzUUUnqoY9kLJf9%2B55I9yu7fnqs%2BbOfez1J%2BOuExU%2B1omJ%2FCr46d0e%2Fj7QayfnEggQzqEKWfPD02If0ENBpEqKRJ1wGS47y4XXwXu7I9FXeU1QIU0UIxsCqFOkSRHs2rcMIACg%2FNIi9%2BUNEsAxe1E9GMUCiEVlQszAgWJH4LpuVfl5m9J67p3r1K%2B%2BIQdSLRxypzg%2B502zIyzXFjGNb8xR1AuUooMKi%2BRGVScYCZSaillIVbW63%2FLn7Gkbb7q2XsX17h99tCTdRsyvL%2BJhRUcAhC%2FcexU68%2Fq5kkesQQ1HrWVwP%2BB0DZVzSqcTQa8X1dAhv%2B4Rrjm3G2QZ014Qvw775Mp7oTWIpt4N8kwJSODST0oAbAp3tYzc6AYaNTmZ3ENvy%2FfxEmMi%2Bb0UWiIbPN%2Bs074QaiH1n1UQS3IEumzUg0qzzGVvRg3I5BMYIYABjZfLpvsjicfQ6K12TBh23imOb93%2BbE%2FMC%2BXC%2FPyuAbjEbzyzTYLl30nlCusNr9GtIyFazdSDrsjdlImA2YNoVvhuVEdDRao6Cef5twxDFVqMfxTyCZglYKOOotjSztUQYYEQHui1NBaiboX53d2Aw0MLXwgY6pgHAaOgYnxU95dlueviBv4TcIX%2F191JevOzV2IDlU5mJlX0Iy%2BsuCiUgtnsslH2AK9VODuA2tOaKhmAm%2Ff8UCo49u3BekPHyW%2BWy73q1ElmMxSzXj16RGLI%2BXSHNA2emR%2BXVdcp42OHmDohZW6OaNkVpYoEmb0N%2FAWUP2KSrvreh3XET5tT50y%2FkkhYd8arQwCHFYVHp1XFxmbsr2ImlCQ%2FIimekHvUW&X-Amz-Signature=b671fcb926468aa331915b1388f07c0aea8b24e7277c270a25d361f8c2b22d82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

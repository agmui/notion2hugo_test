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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THJPJDWE%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIAfEHGZjojc93OKCOTRgR1yFJMTKh%2Fn6nyLdhNWQIBHtAiEAkg2%2FMZnVWTG4Vc11NARJ1YsjniaClLAUQYOuL1tDefcq%2FwMIBhAAGgw2Mzc0MjMxODM4MDUiDEjQmUem6oMh4kdUNyrcAyOMc2JKVzgEK18sYv8OU7cNaqOObRvUyy2HBRLNLB0%2BoixbPqj8Vc6UEu1duLytroMg%2FeMY4g8mO6i0SqKj7mvf%2FvPMsYqqZ7GTh%2BisIhKVAkEGxRc614JDehNCIT4Oi0OztJG1ejkVIeU9JXpyE7eRN%2Ffp202va5HTMXwoekURU0HBioV9A7sdRv3EfzwRRw7a7O3yqhRtM0uOrc6Fgo83hsQNRdI63fvYm79Xj2r1KRMIn1dmgkvp3GakKJ9fUiM1kYRRQuIRUppErYQvi16RhpXzEAOi%2FqQuEX9eKR0OMkeVgsC8L3aqI2Di3HSQMMNY8jc8iZn4dLqZL8yhCWbpfWo0y7CK4QewnkOfepAPVD7hYcZ3R35iQK6gzACQIQuqtB1gTxz2vzCsfPzxPStdogt%2BOcpicEtrHIIbM3DnNkK70%2Fxy0VeaqLMtWudW0DneUIpPhxs7A92Ogh%2BveLAtNhYInaCFYfmBL9q%2Fr0cXfSXkLnA6qZOmVz21hlfOF%2B1T%2BwTaHl9vlSe8urS2Uffkmn9Orq0xWJ8aHZnO4rPVZJ%2BhFhDSPRgHw0CMIE9odDs2OURYK09DB%2BNL%2BXlj94gKsXcsGRuTLS7tKxo2VW93ynRSKXouW2LElcr7MKLS4MoGOqUB9TehNhRT0Cz7UtVrkjjFYUuOOQLd7fafJayXpJn71j4mmTCIgSA%2F6vI5DwWP4ImSxPvUc%2BciZAAR%2BkWfosQTvFdr0%2BZkwY%2BYwG3Kd%2B%2BUioWfl69RxYY%2Be7h72C4d8yCqupY546Me10OUga9xUJK%2FUewz8zP8Z%2F%2FFEeTZNFnlbyyAp2wt8JjBsQQBgYB6mwwAsQTHimxviWWxxAb2LjmHujjj3AG2&X-Amz-Signature=5f56ceb30f0b7233d3cde1e957abe49b039654b894c3abb7919a2c0c0cd8146d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THJPJDWE%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIAfEHGZjojc93OKCOTRgR1yFJMTKh%2Fn6nyLdhNWQIBHtAiEAkg2%2FMZnVWTG4Vc11NARJ1YsjniaClLAUQYOuL1tDefcq%2FwMIBhAAGgw2Mzc0MjMxODM4MDUiDEjQmUem6oMh4kdUNyrcAyOMc2JKVzgEK18sYv8OU7cNaqOObRvUyy2HBRLNLB0%2BoixbPqj8Vc6UEu1duLytroMg%2FeMY4g8mO6i0SqKj7mvf%2FvPMsYqqZ7GTh%2BisIhKVAkEGxRc614JDehNCIT4Oi0OztJG1ejkVIeU9JXpyE7eRN%2Ffp202va5HTMXwoekURU0HBioV9A7sdRv3EfzwRRw7a7O3yqhRtM0uOrc6Fgo83hsQNRdI63fvYm79Xj2r1KRMIn1dmgkvp3GakKJ9fUiM1kYRRQuIRUppErYQvi16RhpXzEAOi%2FqQuEX9eKR0OMkeVgsC8L3aqI2Di3HSQMMNY8jc8iZn4dLqZL8yhCWbpfWo0y7CK4QewnkOfepAPVD7hYcZ3R35iQK6gzACQIQuqtB1gTxz2vzCsfPzxPStdogt%2BOcpicEtrHIIbM3DnNkK70%2Fxy0VeaqLMtWudW0DneUIpPhxs7A92Ogh%2BveLAtNhYInaCFYfmBL9q%2Fr0cXfSXkLnA6qZOmVz21hlfOF%2B1T%2BwTaHl9vlSe8urS2Uffkmn9Orq0xWJ8aHZnO4rPVZJ%2BhFhDSPRgHw0CMIE9odDs2OURYK09DB%2BNL%2BXlj94gKsXcsGRuTLS7tKxo2VW93ynRSKXouW2LElcr7MKLS4MoGOqUB9TehNhRT0Cz7UtVrkjjFYUuOOQLd7fafJayXpJn71j4mmTCIgSA%2F6vI5DwWP4ImSxPvUc%2BciZAAR%2BkWfosQTvFdr0%2BZkwY%2BYwG3Kd%2B%2BUioWfl69RxYY%2Be7h72C4d8yCqupY546Me10OUga9xUJK%2FUewz8zP8Z%2F%2FFEeTZNFnlbyyAp2wt8JjBsQQBgYB6mwwAsQTHimxviWWxxAb2LjmHujjj3AG2&X-Amz-Signature=d3673282114151affbd7aef3c1c9b340687fbce9327a531ad5845b0716f921ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THJPJDWE%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIAfEHGZjojc93OKCOTRgR1yFJMTKh%2Fn6nyLdhNWQIBHtAiEAkg2%2FMZnVWTG4Vc11NARJ1YsjniaClLAUQYOuL1tDefcq%2FwMIBhAAGgw2Mzc0MjMxODM4MDUiDEjQmUem6oMh4kdUNyrcAyOMc2JKVzgEK18sYv8OU7cNaqOObRvUyy2HBRLNLB0%2BoixbPqj8Vc6UEu1duLytroMg%2FeMY4g8mO6i0SqKj7mvf%2FvPMsYqqZ7GTh%2BisIhKVAkEGxRc614JDehNCIT4Oi0OztJG1ejkVIeU9JXpyE7eRN%2Ffp202va5HTMXwoekURU0HBioV9A7sdRv3EfzwRRw7a7O3yqhRtM0uOrc6Fgo83hsQNRdI63fvYm79Xj2r1KRMIn1dmgkvp3GakKJ9fUiM1kYRRQuIRUppErYQvi16RhpXzEAOi%2FqQuEX9eKR0OMkeVgsC8L3aqI2Di3HSQMMNY8jc8iZn4dLqZL8yhCWbpfWo0y7CK4QewnkOfepAPVD7hYcZ3R35iQK6gzACQIQuqtB1gTxz2vzCsfPzxPStdogt%2BOcpicEtrHIIbM3DnNkK70%2Fxy0VeaqLMtWudW0DneUIpPhxs7A92Ogh%2BveLAtNhYInaCFYfmBL9q%2Fr0cXfSXkLnA6qZOmVz21hlfOF%2B1T%2BwTaHl9vlSe8urS2Uffkmn9Orq0xWJ8aHZnO4rPVZJ%2BhFhDSPRgHw0CMIE9odDs2OURYK09DB%2BNL%2BXlj94gKsXcsGRuTLS7tKxo2VW93ynRSKXouW2LElcr7MKLS4MoGOqUB9TehNhRT0Cz7UtVrkjjFYUuOOQLd7fafJayXpJn71j4mmTCIgSA%2F6vI5DwWP4ImSxPvUc%2BciZAAR%2BkWfosQTvFdr0%2BZkwY%2BYwG3Kd%2B%2BUioWfl69RxYY%2Be7h72C4d8yCqupY546Me10OUga9xUJK%2FUewz8zP8Z%2F%2FFEeTZNFnlbyyAp2wt8JjBsQQBgYB6mwwAsQTHimxviWWxxAb2LjmHujjj3AG2&X-Amz-Signature=65fcdbb94803df247185ac7afa4f9b808be2d338eb55f3ec74eb7582c5584b91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THJPJDWE%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIAfEHGZjojc93OKCOTRgR1yFJMTKh%2Fn6nyLdhNWQIBHtAiEAkg2%2FMZnVWTG4Vc11NARJ1YsjniaClLAUQYOuL1tDefcq%2FwMIBhAAGgw2Mzc0MjMxODM4MDUiDEjQmUem6oMh4kdUNyrcAyOMc2JKVzgEK18sYv8OU7cNaqOObRvUyy2HBRLNLB0%2BoixbPqj8Vc6UEu1duLytroMg%2FeMY4g8mO6i0SqKj7mvf%2FvPMsYqqZ7GTh%2BisIhKVAkEGxRc614JDehNCIT4Oi0OztJG1ejkVIeU9JXpyE7eRN%2Ffp202va5HTMXwoekURU0HBioV9A7sdRv3EfzwRRw7a7O3yqhRtM0uOrc6Fgo83hsQNRdI63fvYm79Xj2r1KRMIn1dmgkvp3GakKJ9fUiM1kYRRQuIRUppErYQvi16RhpXzEAOi%2FqQuEX9eKR0OMkeVgsC8L3aqI2Di3HSQMMNY8jc8iZn4dLqZL8yhCWbpfWo0y7CK4QewnkOfepAPVD7hYcZ3R35iQK6gzACQIQuqtB1gTxz2vzCsfPzxPStdogt%2BOcpicEtrHIIbM3DnNkK70%2Fxy0VeaqLMtWudW0DneUIpPhxs7A92Ogh%2BveLAtNhYInaCFYfmBL9q%2Fr0cXfSXkLnA6qZOmVz21hlfOF%2B1T%2BwTaHl9vlSe8urS2Uffkmn9Orq0xWJ8aHZnO4rPVZJ%2BhFhDSPRgHw0CMIE9odDs2OURYK09DB%2BNL%2BXlj94gKsXcsGRuTLS7tKxo2VW93ynRSKXouW2LElcr7MKLS4MoGOqUB9TehNhRT0Cz7UtVrkjjFYUuOOQLd7fafJayXpJn71j4mmTCIgSA%2F6vI5DwWP4ImSxPvUc%2BciZAAR%2BkWfosQTvFdr0%2BZkwY%2BYwG3Kd%2B%2BUioWfl69RxYY%2Be7h72C4d8yCqupY546Me10OUga9xUJK%2FUewz8zP8Z%2F%2FFEeTZNFnlbyyAp2wt8JjBsQQBgYB6mwwAsQTHimxviWWxxAb2LjmHujjj3AG2&X-Amz-Signature=4b8495729dcdc98f460d2d88f60d4e22b0598659e67f91d0ff40f4b7cdffd1da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THJPJDWE%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIAfEHGZjojc93OKCOTRgR1yFJMTKh%2Fn6nyLdhNWQIBHtAiEAkg2%2FMZnVWTG4Vc11NARJ1YsjniaClLAUQYOuL1tDefcq%2FwMIBhAAGgw2Mzc0MjMxODM4MDUiDEjQmUem6oMh4kdUNyrcAyOMc2JKVzgEK18sYv8OU7cNaqOObRvUyy2HBRLNLB0%2BoixbPqj8Vc6UEu1duLytroMg%2FeMY4g8mO6i0SqKj7mvf%2FvPMsYqqZ7GTh%2BisIhKVAkEGxRc614JDehNCIT4Oi0OztJG1ejkVIeU9JXpyE7eRN%2Ffp202va5HTMXwoekURU0HBioV9A7sdRv3EfzwRRw7a7O3yqhRtM0uOrc6Fgo83hsQNRdI63fvYm79Xj2r1KRMIn1dmgkvp3GakKJ9fUiM1kYRRQuIRUppErYQvi16RhpXzEAOi%2FqQuEX9eKR0OMkeVgsC8L3aqI2Di3HSQMMNY8jc8iZn4dLqZL8yhCWbpfWo0y7CK4QewnkOfepAPVD7hYcZ3R35iQK6gzACQIQuqtB1gTxz2vzCsfPzxPStdogt%2BOcpicEtrHIIbM3DnNkK70%2Fxy0VeaqLMtWudW0DneUIpPhxs7A92Ogh%2BveLAtNhYInaCFYfmBL9q%2Fr0cXfSXkLnA6qZOmVz21hlfOF%2B1T%2BwTaHl9vlSe8urS2Uffkmn9Orq0xWJ8aHZnO4rPVZJ%2BhFhDSPRgHw0CMIE9odDs2OURYK09DB%2BNL%2BXlj94gKsXcsGRuTLS7tKxo2VW93ynRSKXouW2LElcr7MKLS4MoGOqUB9TehNhRT0Cz7UtVrkjjFYUuOOQLd7fafJayXpJn71j4mmTCIgSA%2F6vI5DwWP4ImSxPvUc%2BciZAAR%2BkWfosQTvFdr0%2BZkwY%2BYwG3Kd%2B%2BUioWfl69RxYY%2Be7h72C4d8yCqupY546Me10OUga9xUJK%2FUewz8zP8Z%2F%2FFEeTZNFnlbyyAp2wt8JjBsQQBgYB6mwwAsQTHimxviWWxxAb2LjmHujjj3AG2&X-Amz-Signature=acb953b4af15e7eed386205f0390b9470a2e5998f28a71b422df6ff0f819b834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWE3CHD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhIsyYH15Q0fj0OD9hf0Q1QEboGUEN3GIlOBwaIApghAiEAtnAa692EY%2BlYZ2fZDgianFleZQHMvb5g815XSw%2FLL8sqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKh9TPgQLpLnkyOndSrcA2hSLwsNKrlQaTaeYmFIWCS6j3LCu8xMIIPmXoyf%2BskvAZRjMbdByfYQZ%2Brgh%2FZkSEcQx3At3i3F1%2BAAR4mWyRzuNvzgdBxu3x3FWMRUd0Z7M58hLLBxmDTaF6HgZCrWs9og%2BmoZawoKgc%2Bb1dzkhZzmx05t65FfR07NmRvT1t1kPF2fpfmu43V5%2Bn%2FDGsxjm2MyrigvPu6QvdkF15enUoP3jg2btNRJ7DSlV5tFkWbJmjLjM%2FUyVh2v67n9%2FHHP1zOMC%2BW6HdXzHXN%2BINLyQRIX5EIg4uI%2F%2Fy6eCeHYzar%2BpuJqaMMfEzZ7d1K3YkNQDpoDfugtP6zisHrU%2Fw59k4ceWtueceX71xt3gLPKMhuwPKJsycqc2axpvG6oHINd%2BXSJfofdlE4vSASC26KQBknJswJvf6tjH7kqIvTVD4XYwtv%2BH2ej8namfSDMIVCqemXh9NZ53PUXRyrOU%2BPaovoq0z%2FEIhMmhfCSJmycx8RTAvGqervCybwUCHlOPXkaMTS8E3ExkRxPy4VtBqEShxfW7p6XxL%2BF2%2ByzwoFhIPNKJOGuzCA%2BIsB4ahdd35MuP638z0zX7TCcGVrV11SMSzbAk4h%2Be%2Bl2jA7GDMJYPF2Ez%2B2upSywR5Cc5Y5lMJi%2FwMAGOqUBi0vNwT8%2BQV6%2FcRyjJZnNC0zAxogo5rzdJ1koMBUdqLz%2F9uOs4%2BfJ6myxvKH6GGVO2i%2FKkrntkz1xgIDbAEvyTlwIXzxjYI8ciWMVgcQqDmIc2%2BSOPDuMEzSNXKPAzpwDdUj2E9BpOp02%2FEiB4V8eJ8hz26xFSazbK8MblKR3p2%2BFtytq5eo2zLBdyPbIJzXkYlZSgCAAN8NPOCNO5%2BM%2FX2Pwe%2FEl&X-Amz-Signature=3612950b80f139618fd52e184eaf768fc401004f3f5971843a43e31ee0b754b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWE3CHD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhIsyYH15Q0fj0OD9hf0Q1QEboGUEN3GIlOBwaIApghAiEAtnAa692EY%2BlYZ2fZDgianFleZQHMvb5g815XSw%2FLL8sqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKh9TPgQLpLnkyOndSrcA2hSLwsNKrlQaTaeYmFIWCS6j3LCu8xMIIPmXoyf%2BskvAZRjMbdByfYQZ%2Brgh%2FZkSEcQx3At3i3F1%2BAAR4mWyRzuNvzgdBxu3x3FWMRUd0Z7M58hLLBxmDTaF6HgZCrWs9og%2BmoZawoKgc%2Bb1dzkhZzmx05t65FfR07NmRvT1t1kPF2fpfmu43V5%2Bn%2FDGsxjm2MyrigvPu6QvdkF15enUoP3jg2btNRJ7DSlV5tFkWbJmjLjM%2FUyVh2v67n9%2FHHP1zOMC%2BW6HdXzHXN%2BINLyQRIX5EIg4uI%2F%2Fy6eCeHYzar%2BpuJqaMMfEzZ7d1K3YkNQDpoDfugtP6zisHrU%2Fw59k4ceWtueceX71xt3gLPKMhuwPKJsycqc2axpvG6oHINd%2BXSJfofdlE4vSASC26KQBknJswJvf6tjH7kqIvTVD4XYwtv%2BH2ej8namfSDMIVCqemXh9NZ53PUXRyrOU%2BPaovoq0z%2FEIhMmhfCSJmycx8RTAvGqervCybwUCHlOPXkaMTS8E3ExkRxPy4VtBqEShxfW7p6XxL%2BF2%2ByzwoFhIPNKJOGuzCA%2BIsB4ahdd35MuP638z0zX7TCcGVrV11SMSzbAk4h%2Be%2Bl2jA7GDMJYPF2Ez%2B2upSywR5Cc5Y5lMJi%2FwMAGOqUBi0vNwT8%2BQV6%2FcRyjJZnNC0zAxogo5rzdJ1koMBUdqLz%2F9uOs4%2BfJ6myxvKH6GGVO2i%2FKkrntkz1xgIDbAEvyTlwIXzxjYI8ciWMVgcQqDmIc2%2BSOPDuMEzSNXKPAzpwDdUj2E9BpOp02%2FEiB4V8eJ8hz26xFSazbK8MblKR3p2%2BFtytq5eo2zLBdyPbIJzXkYlZSgCAAN8NPOCNO5%2BM%2FX2Pwe%2FEl&X-Amz-Signature=a9f666df24a1009c7e1af8d5d412b24759baed68aa191a19f43faf9ddbf547d8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWE3CHD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhIsyYH15Q0fj0OD9hf0Q1QEboGUEN3GIlOBwaIApghAiEAtnAa692EY%2BlYZ2fZDgianFleZQHMvb5g815XSw%2FLL8sqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKh9TPgQLpLnkyOndSrcA2hSLwsNKrlQaTaeYmFIWCS6j3LCu8xMIIPmXoyf%2BskvAZRjMbdByfYQZ%2Brgh%2FZkSEcQx3At3i3F1%2BAAR4mWyRzuNvzgdBxu3x3FWMRUd0Z7M58hLLBxmDTaF6HgZCrWs9og%2BmoZawoKgc%2Bb1dzkhZzmx05t65FfR07NmRvT1t1kPF2fpfmu43V5%2Bn%2FDGsxjm2MyrigvPu6QvdkF15enUoP3jg2btNRJ7DSlV5tFkWbJmjLjM%2FUyVh2v67n9%2FHHP1zOMC%2BW6HdXzHXN%2BINLyQRIX5EIg4uI%2F%2Fy6eCeHYzar%2BpuJqaMMfEzZ7d1K3YkNQDpoDfugtP6zisHrU%2Fw59k4ceWtueceX71xt3gLPKMhuwPKJsycqc2axpvG6oHINd%2BXSJfofdlE4vSASC26KQBknJswJvf6tjH7kqIvTVD4XYwtv%2BH2ej8namfSDMIVCqemXh9NZ53PUXRyrOU%2BPaovoq0z%2FEIhMmhfCSJmycx8RTAvGqervCybwUCHlOPXkaMTS8E3ExkRxPy4VtBqEShxfW7p6XxL%2BF2%2ByzwoFhIPNKJOGuzCA%2BIsB4ahdd35MuP638z0zX7TCcGVrV11SMSzbAk4h%2Be%2Bl2jA7GDMJYPF2Ez%2B2upSywR5Cc5Y5lMJi%2FwMAGOqUBi0vNwT8%2BQV6%2FcRyjJZnNC0zAxogo5rzdJ1koMBUdqLz%2F9uOs4%2BfJ6myxvKH6GGVO2i%2FKkrntkz1xgIDbAEvyTlwIXzxjYI8ciWMVgcQqDmIc2%2BSOPDuMEzSNXKPAzpwDdUj2E9BpOp02%2FEiB4V8eJ8hz26xFSazbK8MblKR3p2%2BFtytq5eo2zLBdyPbIJzXkYlZSgCAAN8NPOCNO5%2BM%2FX2Pwe%2FEl&X-Amz-Signature=2c55b113bd8c9da7e5f4af9f6e1940d9a0d3d67768173b1656eace81e2d4f411&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWE3CHD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhIsyYH15Q0fj0OD9hf0Q1QEboGUEN3GIlOBwaIApghAiEAtnAa692EY%2BlYZ2fZDgianFleZQHMvb5g815XSw%2FLL8sqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKh9TPgQLpLnkyOndSrcA2hSLwsNKrlQaTaeYmFIWCS6j3LCu8xMIIPmXoyf%2BskvAZRjMbdByfYQZ%2Brgh%2FZkSEcQx3At3i3F1%2BAAR4mWyRzuNvzgdBxu3x3FWMRUd0Z7M58hLLBxmDTaF6HgZCrWs9og%2BmoZawoKgc%2Bb1dzkhZzmx05t65FfR07NmRvT1t1kPF2fpfmu43V5%2Bn%2FDGsxjm2MyrigvPu6QvdkF15enUoP3jg2btNRJ7DSlV5tFkWbJmjLjM%2FUyVh2v67n9%2FHHP1zOMC%2BW6HdXzHXN%2BINLyQRIX5EIg4uI%2F%2Fy6eCeHYzar%2BpuJqaMMfEzZ7d1K3YkNQDpoDfugtP6zisHrU%2Fw59k4ceWtueceX71xt3gLPKMhuwPKJsycqc2axpvG6oHINd%2BXSJfofdlE4vSASC26KQBknJswJvf6tjH7kqIvTVD4XYwtv%2BH2ej8namfSDMIVCqemXh9NZ53PUXRyrOU%2BPaovoq0z%2FEIhMmhfCSJmycx8RTAvGqervCybwUCHlOPXkaMTS8E3ExkRxPy4VtBqEShxfW7p6XxL%2BF2%2ByzwoFhIPNKJOGuzCA%2BIsB4ahdd35MuP638z0zX7TCcGVrV11SMSzbAk4h%2Be%2Bl2jA7GDMJYPF2Ez%2B2upSywR5Cc5Y5lMJi%2FwMAGOqUBi0vNwT8%2BQV6%2FcRyjJZnNC0zAxogo5rzdJ1koMBUdqLz%2F9uOs4%2BfJ6myxvKH6GGVO2i%2FKkrntkz1xgIDbAEvyTlwIXzxjYI8ciWMVgcQqDmIc2%2BSOPDuMEzSNXKPAzpwDdUj2E9BpOp02%2FEiB4V8eJ8hz26xFSazbK8MblKR3p2%2BFtytq5eo2zLBdyPbIJzXkYlZSgCAAN8NPOCNO5%2BM%2FX2Pwe%2FEl&X-Amz-Signature=15f3653edb306871497a9d3701df22bdb0179a7522932b7e7a29c2b4920c0457&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWE3CHD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhIsyYH15Q0fj0OD9hf0Q1QEboGUEN3GIlOBwaIApghAiEAtnAa692EY%2BlYZ2fZDgianFleZQHMvb5g815XSw%2FLL8sqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKh9TPgQLpLnkyOndSrcA2hSLwsNKrlQaTaeYmFIWCS6j3LCu8xMIIPmXoyf%2BskvAZRjMbdByfYQZ%2Brgh%2FZkSEcQx3At3i3F1%2BAAR4mWyRzuNvzgdBxu3x3FWMRUd0Z7M58hLLBxmDTaF6HgZCrWs9og%2BmoZawoKgc%2Bb1dzkhZzmx05t65FfR07NmRvT1t1kPF2fpfmu43V5%2Bn%2FDGsxjm2MyrigvPu6QvdkF15enUoP3jg2btNRJ7DSlV5tFkWbJmjLjM%2FUyVh2v67n9%2FHHP1zOMC%2BW6HdXzHXN%2BINLyQRIX5EIg4uI%2F%2Fy6eCeHYzar%2BpuJqaMMfEzZ7d1K3YkNQDpoDfugtP6zisHrU%2Fw59k4ceWtueceX71xt3gLPKMhuwPKJsycqc2axpvG6oHINd%2BXSJfofdlE4vSASC26KQBknJswJvf6tjH7kqIvTVD4XYwtv%2BH2ej8namfSDMIVCqemXh9NZ53PUXRyrOU%2BPaovoq0z%2FEIhMmhfCSJmycx8RTAvGqervCybwUCHlOPXkaMTS8E3ExkRxPy4VtBqEShxfW7p6XxL%2BF2%2ByzwoFhIPNKJOGuzCA%2BIsB4ahdd35MuP638z0zX7TCcGVrV11SMSzbAk4h%2Be%2Bl2jA7GDMJYPF2Ez%2B2upSywR5Cc5Y5lMJi%2FwMAGOqUBi0vNwT8%2BQV6%2FcRyjJZnNC0zAxogo5rzdJ1koMBUdqLz%2F9uOs4%2BfJ6myxvKH6GGVO2i%2FKkrntkz1xgIDbAEvyTlwIXzxjYI8ciWMVgcQqDmIc2%2BSOPDuMEzSNXKPAzpwDdUj2E9BpOp02%2FEiB4V8eJ8hz26xFSazbK8MblKR3p2%2BFtytq5eo2zLBdyPbIJzXkYlZSgCAAN8NPOCNO5%2BM%2FX2Pwe%2FEl&X-Amz-Signature=cded0a962f1733ef4ce0642269c1e0ad6640025042e8a81f9762bc7754e83014&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

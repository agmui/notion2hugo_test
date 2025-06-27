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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZJWC5WL%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk440WFfp5lI7AedC%2BXBHYhSWyuRUEsuS7IUojkGpwfAIhAOwS4QbAVtggUsbynIc9O77r7ZKaB8PJgEPa4lcCPzRqKv8DCHkQABoMNjM3NDIzMTgzODA1IgyDcXepwmUP1WWQiaAq3AMSUzvprnwkDDbMI20xfcSyGJdvMYtWmQr1OMB1NrPUmsrnBbF%2BKAx5JxPgxOh4%2FvYPh%2FdnCIshrOd1Pmp%2F2Av8roGwP9JDbVH%2BPEOAU89FP9wqwbVZ5O14HcZFi7fjg753c6pK4KQbQDRDKYMkEZzXohpTjZfRvSPBV9mOjtTx2Woxyyk%2ByCLCUBVjPhVmeDR0oHHC%2FVu509%2Bi%2F7RIReeMZPvZCtVpetPKTebkWsVcXH9ZMN%2FncwWOv43P4k%2FbcLl3VxeMlFS6ACXxytzdZ2jGntVuQQDalsNJ%2Ff%2FUsB478JxYWebukTsuyIDfHQ%2BCJWODUu5hJcwguBfyowPzAFNesfHBXLJMcq6BFlpMrmHOnq3LBKaHfXYKzXBZQsnNbRyev%2B8EGL6T2uYaeC3P%2FjqOat5X8kvpiiUVps%2BifMJuaPJofcx8KQA3i5NTJ60%2F4HozfnlRO7eak7dv4kypKx4F9Pe2yVJwoYj%2FcPMzwSv%2BCgybcy%2Bst4lWXb1UsOR653zPVFtKiRFd%2F4Kh190sT%2BSfnB860uGBXe76n4i5Q%2F2L%2FQiaackdewX6W0V9bNKQirmLVS1QDYC1WcE%2FaDt6CxIY%2FlonVV4Ppit2KMr47yyhwbPcX3Ai6jZ%2FmfAOKzDc9vrCBjqkAXeiChR6L1MAqPgArIPNZDInPYHhpmAuzhLXmI6j3mxgWa%2BaHCfw4RRfUX0Dm0QVkWUbi88uZ2rwZwCmu0AGCi7QhIQnvBXW9zvbjaNzYhgDO2bpY9g64qEjBDpqBwpYsKz%2Ft9xDB2ZWDbSlV0Eu9s1VjarGS%2Fses2g%2B8qRf5MF7bxnhh%2FtkubDWOOx%2F1r5vMLrRnw9%2FsjuTAm%2BszlQUZy%2F4QGYm&X-Amz-Signature=b7e756ff4783b0f2cb0130cf5f21f5dcb228f8b06ea6ae1e1aee3f6ae3406537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZJWC5WL%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk440WFfp5lI7AedC%2BXBHYhSWyuRUEsuS7IUojkGpwfAIhAOwS4QbAVtggUsbynIc9O77r7ZKaB8PJgEPa4lcCPzRqKv8DCHkQABoMNjM3NDIzMTgzODA1IgyDcXepwmUP1WWQiaAq3AMSUzvprnwkDDbMI20xfcSyGJdvMYtWmQr1OMB1NrPUmsrnBbF%2BKAx5JxPgxOh4%2FvYPh%2FdnCIshrOd1Pmp%2F2Av8roGwP9JDbVH%2BPEOAU89FP9wqwbVZ5O14HcZFi7fjg753c6pK4KQbQDRDKYMkEZzXohpTjZfRvSPBV9mOjtTx2Woxyyk%2ByCLCUBVjPhVmeDR0oHHC%2FVu509%2Bi%2F7RIReeMZPvZCtVpetPKTebkWsVcXH9ZMN%2FncwWOv43P4k%2FbcLl3VxeMlFS6ACXxytzdZ2jGntVuQQDalsNJ%2Ff%2FUsB478JxYWebukTsuyIDfHQ%2BCJWODUu5hJcwguBfyowPzAFNesfHBXLJMcq6BFlpMrmHOnq3LBKaHfXYKzXBZQsnNbRyev%2B8EGL6T2uYaeC3P%2FjqOat5X8kvpiiUVps%2BifMJuaPJofcx8KQA3i5NTJ60%2F4HozfnlRO7eak7dv4kypKx4F9Pe2yVJwoYj%2FcPMzwSv%2BCgybcy%2Bst4lWXb1UsOR653zPVFtKiRFd%2F4Kh190sT%2BSfnB860uGBXe76n4i5Q%2F2L%2FQiaackdewX6W0V9bNKQirmLVS1QDYC1WcE%2FaDt6CxIY%2FlonVV4Ppit2KMr47yyhwbPcX3Ai6jZ%2FmfAOKzDc9vrCBjqkAXeiChR6L1MAqPgArIPNZDInPYHhpmAuzhLXmI6j3mxgWa%2BaHCfw4RRfUX0Dm0QVkWUbi88uZ2rwZwCmu0AGCi7QhIQnvBXW9zvbjaNzYhgDO2bpY9g64qEjBDpqBwpYsKz%2Ft9xDB2ZWDbSlV0Eu9s1VjarGS%2Fses2g%2B8qRf5MF7bxnhh%2FtkubDWOOx%2F1r5vMLrRnw9%2FsjuTAm%2BszlQUZy%2F4QGYm&X-Amz-Signature=7c712d0d68b4b39aa1bae19c4bdf2d8e260a2b22a5836199ef21bb742190f496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZJWC5WL%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk440WFfp5lI7AedC%2BXBHYhSWyuRUEsuS7IUojkGpwfAIhAOwS4QbAVtggUsbynIc9O77r7ZKaB8PJgEPa4lcCPzRqKv8DCHkQABoMNjM3NDIzMTgzODA1IgyDcXepwmUP1WWQiaAq3AMSUzvprnwkDDbMI20xfcSyGJdvMYtWmQr1OMB1NrPUmsrnBbF%2BKAx5JxPgxOh4%2FvYPh%2FdnCIshrOd1Pmp%2F2Av8roGwP9JDbVH%2BPEOAU89FP9wqwbVZ5O14HcZFi7fjg753c6pK4KQbQDRDKYMkEZzXohpTjZfRvSPBV9mOjtTx2Woxyyk%2ByCLCUBVjPhVmeDR0oHHC%2FVu509%2Bi%2F7RIReeMZPvZCtVpetPKTebkWsVcXH9ZMN%2FncwWOv43P4k%2FbcLl3VxeMlFS6ACXxytzdZ2jGntVuQQDalsNJ%2Ff%2FUsB478JxYWebukTsuyIDfHQ%2BCJWODUu5hJcwguBfyowPzAFNesfHBXLJMcq6BFlpMrmHOnq3LBKaHfXYKzXBZQsnNbRyev%2B8EGL6T2uYaeC3P%2FjqOat5X8kvpiiUVps%2BifMJuaPJofcx8KQA3i5NTJ60%2F4HozfnlRO7eak7dv4kypKx4F9Pe2yVJwoYj%2FcPMzwSv%2BCgybcy%2Bst4lWXb1UsOR653zPVFtKiRFd%2F4Kh190sT%2BSfnB860uGBXe76n4i5Q%2F2L%2FQiaackdewX6W0V9bNKQirmLVS1QDYC1WcE%2FaDt6CxIY%2FlonVV4Ppit2KMr47yyhwbPcX3Ai6jZ%2FmfAOKzDc9vrCBjqkAXeiChR6L1MAqPgArIPNZDInPYHhpmAuzhLXmI6j3mxgWa%2BaHCfw4RRfUX0Dm0QVkWUbi88uZ2rwZwCmu0AGCi7QhIQnvBXW9zvbjaNzYhgDO2bpY9g64qEjBDpqBwpYsKz%2Ft9xDB2ZWDbSlV0Eu9s1VjarGS%2Fses2g%2B8qRf5MF7bxnhh%2FtkubDWOOx%2F1r5vMLrRnw9%2FsjuTAm%2BszlQUZy%2F4QGYm&X-Amz-Signature=b0ef57bfaea285462dd4f86479b818fa1c583c622a54c379c9486bb7fe2ec7d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZJWC5WL%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk440WFfp5lI7AedC%2BXBHYhSWyuRUEsuS7IUojkGpwfAIhAOwS4QbAVtggUsbynIc9O77r7ZKaB8PJgEPa4lcCPzRqKv8DCHkQABoMNjM3NDIzMTgzODA1IgyDcXepwmUP1WWQiaAq3AMSUzvprnwkDDbMI20xfcSyGJdvMYtWmQr1OMB1NrPUmsrnBbF%2BKAx5JxPgxOh4%2FvYPh%2FdnCIshrOd1Pmp%2F2Av8roGwP9JDbVH%2BPEOAU89FP9wqwbVZ5O14HcZFi7fjg753c6pK4KQbQDRDKYMkEZzXohpTjZfRvSPBV9mOjtTx2Woxyyk%2ByCLCUBVjPhVmeDR0oHHC%2FVu509%2Bi%2F7RIReeMZPvZCtVpetPKTebkWsVcXH9ZMN%2FncwWOv43P4k%2FbcLl3VxeMlFS6ACXxytzdZ2jGntVuQQDalsNJ%2Ff%2FUsB478JxYWebukTsuyIDfHQ%2BCJWODUu5hJcwguBfyowPzAFNesfHBXLJMcq6BFlpMrmHOnq3LBKaHfXYKzXBZQsnNbRyev%2B8EGL6T2uYaeC3P%2FjqOat5X8kvpiiUVps%2BifMJuaPJofcx8KQA3i5NTJ60%2F4HozfnlRO7eak7dv4kypKx4F9Pe2yVJwoYj%2FcPMzwSv%2BCgybcy%2Bst4lWXb1UsOR653zPVFtKiRFd%2F4Kh190sT%2BSfnB860uGBXe76n4i5Q%2F2L%2FQiaackdewX6W0V9bNKQirmLVS1QDYC1WcE%2FaDt6CxIY%2FlonVV4Ppit2KMr47yyhwbPcX3Ai6jZ%2FmfAOKzDc9vrCBjqkAXeiChR6L1MAqPgArIPNZDInPYHhpmAuzhLXmI6j3mxgWa%2BaHCfw4RRfUX0Dm0QVkWUbi88uZ2rwZwCmu0AGCi7QhIQnvBXW9zvbjaNzYhgDO2bpY9g64qEjBDpqBwpYsKz%2Ft9xDB2ZWDbSlV0Eu9s1VjarGS%2Fses2g%2B8qRf5MF7bxnhh%2FtkubDWOOx%2F1r5vMLrRnw9%2FsjuTAm%2BszlQUZy%2F4QGYm&X-Amz-Signature=2e4cfd772fc718450359c3b25745f767506bd2e3e28e483bcf71bc39770cb7ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZJWC5WL%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk440WFfp5lI7AedC%2BXBHYhSWyuRUEsuS7IUojkGpwfAIhAOwS4QbAVtggUsbynIc9O77r7ZKaB8PJgEPa4lcCPzRqKv8DCHkQABoMNjM3NDIzMTgzODA1IgyDcXepwmUP1WWQiaAq3AMSUzvprnwkDDbMI20xfcSyGJdvMYtWmQr1OMB1NrPUmsrnBbF%2BKAx5JxPgxOh4%2FvYPh%2FdnCIshrOd1Pmp%2F2Av8roGwP9JDbVH%2BPEOAU89FP9wqwbVZ5O14HcZFi7fjg753c6pK4KQbQDRDKYMkEZzXohpTjZfRvSPBV9mOjtTx2Woxyyk%2ByCLCUBVjPhVmeDR0oHHC%2FVu509%2Bi%2F7RIReeMZPvZCtVpetPKTebkWsVcXH9ZMN%2FncwWOv43P4k%2FbcLl3VxeMlFS6ACXxytzdZ2jGntVuQQDalsNJ%2Ff%2FUsB478JxYWebukTsuyIDfHQ%2BCJWODUu5hJcwguBfyowPzAFNesfHBXLJMcq6BFlpMrmHOnq3LBKaHfXYKzXBZQsnNbRyev%2B8EGL6T2uYaeC3P%2FjqOat5X8kvpiiUVps%2BifMJuaPJofcx8KQA3i5NTJ60%2F4HozfnlRO7eak7dv4kypKx4F9Pe2yVJwoYj%2FcPMzwSv%2BCgybcy%2Bst4lWXb1UsOR653zPVFtKiRFd%2F4Kh190sT%2BSfnB860uGBXe76n4i5Q%2F2L%2FQiaackdewX6W0V9bNKQirmLVS1QDYC1WcE%2FaDt6CxIY%2FlonVV4Ppit2KMr47yyhwbPcX3Ai6jZ%2FmfAOKzDc9vrCBjqkAXeiChR6L1MAqPgArIPNZDInPYHhpmAuzhLXmI6j3mxgWa%2BaHCfw4RRfUX0Dm0QVkWUbi88uZ2rwZwCmu0AGCi7QhIQnvBXW9zvbjaNzYhgDO2bpY9g64qEjBDpqBwpYsKz%2Ft9xDB2ZWDbSlV0Eu9s1VjarGS%2Fses2g%2B8qRf5MF7bxnhh%2FtkubDWOOx%2F1r5vMLrRnw9%2FsjuTAm%2BszlQUZy%2F4QGYm&X-Amz-Signature=0dc5758e96e62d86e34c5b41dec2ab0ac2f6260313a8e32755c75c6324c089a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

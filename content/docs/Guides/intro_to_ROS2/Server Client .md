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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YECHSX72%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEC6yZKbXU30h%2BLHZw3lrr4n3XWObt%2BdCsObDuLyD1uIAiEA%2FQbW%2BjNHvX5W%2BisucESkaAerR7SQGR2viQw92ztOD3Aq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDL4UZ%2FD%2F%2FwZgHlqOkyrcA26tKnN2Kk8Jjf5IjgAgaLYWHmLkHJd7b1yDF25f9jzBmBGVJPB%2F51zv8Wi4JS%2BhAZkm5GmKbIEVKEUuCbVVqGV%2Bv2vsgAO8HDUgrxo1yyfrm1GjGQlPU%2BgyK2i%2BslakrA4RUbZRb%2B25RbkI0yodbWS6DpjyAcaii5GeghFw2o1Co%2B%2BkJkkA46yDSIS3E%2FMWpuYfWSJwfXlsX1vvFq6zjnpHrOCUHIWzzrXJW4rX8bLQl2MboHoEnaXeAAMqKSqNZox5W1heMTtQSq5XoRFxEMMxNS%2BfrX0wwjiN8RSMnaQLtzHvAZR4Ihz33AZ7tN1UG6oH0OOUNvhZaJ9nOJ31Vx%2BEl8keEOspkz68XwMJr3GcMgjiX3q%2FB6CvlzXNxQqr5vKIXW6Zc3YXehD8N7oYP%2FVhItmUHn%2BBQKkyitmNtgcIFZKcitFQiYysLvYn6DcdGvUj0XE0E76cq%2BhL%2B83q3ea3ZGfFDI75Jk4U99hEJdCjfdIa%2Bz%2BLC%2FRYqxd%2BXD3YXuYY%2BFCbDmxefoSkH2f%2FGeyNX15R04wJq1Lmh4xWrOHChHrvJEAxZ4NmR3IEqaZWBF8JAECDUquqMsFKP%2FOEJ2fSrucSDVy3WDN4gGYAui90j4uHHttxC%2FCPdY0jMMLP4cAGOqUBfQur7pJsudhtzFTEuWf64HZAEx1UEkq%2Fhz1FifuorztJy4LXe%2FYHPus32jB2JxyYQa2a3wBHdylVGDXHiW0MZxK8ajid09nVzBZjBZ%2FkKN7Z4ooknNNrrOgtMIbW8L06ZKDnXBWcRXIPCjLAI4bGX5eDk30ypOVdxy9hOurbSQGHW1zZTBnk6%2Bg0TnA2lzlK2FL3b%2BnAEk%2BzvMmJGH7IGqNLWFmr&X-Amz-Signature=2a5006d570f204a468cdd8af815d4286edc683ea6c3b3e536826a4621929d112&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YECHSX72%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEC6yZKbXU30h%2BLHZw3lrr4n3XWObt%2BdCsObDuLyD1uIAiEA%2FQbW%2BjNHvX5W%2BisucESkaAerR7SQGR2viQw92ztOD3Aq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDL4UZ%2FD%2F%2FwZgHlqOkyrcA26tKnN2Kk8Jjf5IjgAgaLYWHmLkHJd7b1yDF25f9jzBmBGVJPB%2F51zv8Wi4JS%2BhAZkm5GmKbIEVKEUuCbVVqGV%2Bv2vsgAO8HDUgrxo1yyfrm1GjGQlPU%2BgyK2i%2BslakrA4RUbZRb%2B25RbkI0yodbWS6DpjyAcaii5GeghFw2o1Co%2B%2BkJkkA46yDSIS3E%2FMWpuYfWSJwfXlsX1vvFq6zjnpHrOCUHIWzzrXJW4rX8bLQl2MboHoEnaXeAAMqKSqNZox5W1heMTtQSq5XoRFxEMMxNS%2BfrX0wwjiN8RSMnaQLtzHvAZR4Ihz33AZ7tN1UG6oH0OOUNvhZaJ9nOJ31Vx%2BEl8keEOspkz68XwMJr3GcMgjiX3q%2FB6CvlzXNxQqr5vKIXW6Zc3YXehD8N7oYP%2FVhItmUHn%2BBQKkyitmNtgcIFZKcitFQiYysLvYn6DcdGvUj0XE0E76cq%2BhL%2B83q3ea3ZGfFDI75Jk4U99hEJdCjfdIa%2Bz%2BLC%2FRYqxd%2BXD3YXuYY%2BFCbDmxefoSkH2f%2FGeyNX15R04wJq1Lmh4xWrOHChHrvJEAxZ4NmR3IEqaZWBF8JAECDUquqMsFKP%2FOEJ2fSrucSDVy3WDN4gGYAui90j4uHHttxC%2FCPdY0jMMLP4cAGOqUBfQur7pJsudhtzFTEuWf64HZAEx1UEkq%2Fhz1FifuorztJy4LXe%2FYHPus32jB2JxyYQa2a3wBHdylVGDXHiW0MZxK8ajid09nVzBZjBZ%2FkKN7Z4ooknNNrrOgtMIbW8L06ZKDnXBWcRXIPCjLAI4bGX5eDk30ypOVdxy9hOurbSQGHW1zZTBnk6%2Bg0TnA2lzlK2FL3b%2BnAEk%2BzvMmJGH7IGqNLWFmr&X-Amz-Signature=b560835c845b1bb77f299ec187aac5d6cac81d79e05178f26ea69b7e40303fcc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YECHSX72%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEC6yZKbXU30h%2BLHZw3lrr4n3XWObt%2BdCsObDuLyD1uIAiEA%2FQbW%2BjNHvX5W%2BisucESkaAerR7SQGR2viQw92ztOD3Aq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDL4UZ%2FD%2F%2FwZgHlqOkyrcA26tKnN2Kk8Jjf5IjgAgaLYWHmLkHJd7b1yDF25f9jzBmBGVJPB%2F51zv8Wi4JS%2BhAZkm5GmKbIEVKEUuCbVVqGV%2Bv2vsgAO8HDUgrxo1yyfrm1GjGQlPU%2BgyK2i%2BslakrA4RUbZRb%2B25RbkI0yodbWS6DpjyAcaii5GeghFw2o1Co%2B%2BkJkkA46yDSIS3E%2FMWpuYfWSJwfXlsX1vvFq6zjnpHrOCUHIWzzrXJW4rX8bLQl2MboHoEnaXeAAMqKSqNZox5W1heMTtQSq5XoRFxEMMxNS%2BfrX0wwjiN8RSMnaQLtzHvAZR4Ihz33AZ7tN1UG6oH0OOUNvhZaJ9nOJ31Vx%2BEl8keEOspkz68XwMJr3GcMgjiX3q%2FB6CvlzXNxQqr5vKIXW6Zc3YXehD8N7oYP%2FVhItmUHn%2BBQKkyitmNtgcIFZKcitFQiYysLvYn6DcdGvUj0XE0E76cq%2BhL%2B83q3ea3ZGfFDI75Jk4U99hEJdCjfdIa%2Bz%2BLC%2FRYqxd%2BXD3YXuYY%2BFCbDmxefoSkH2f%2FGeyNX15R04wJq1Lmh4xWrOHChHrvJEAxZ4NmR3IEqaZWBF8JAECDUquqMsFKP%2FOEJ2fSrucSDVy3WDN4gGYAui90j4uHHttxC%2FCPdY0jMMLP4cAGOqUBfQur7pJsudhtzFTEuWf64HZAEx1UEkq%2Fhz1FifuorztJy4LXe%2FYHPus32jB2JxyYQa2a3wBHdylVGDXHiW0MZxK8ajid09nVzBZjBZ%2FkKN7Z4ooknNNrrOgtMIbW8L06ZKDnXBWcRXIPCjLAI4bGX5eDk30ypOVdxy9hOurbSQGHW1zZTBnk6%2Bg0TnA2lzlK2FL3b%2BnAEk%2BzvMmJGH7IGqNLWFmr&X-Amz-Signature=2d4bfdc7ba7dd04b874199b244bff1cde916ac95a6f3b2f52ae6624fc4168d74&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YECHSX72%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEC6yZKbXU30h%2BLHZw3lrr4n3XWObt%2BdCsObDuLyD1uIAiEA%2FQbW%2BjNHvX5W%2BisucESkaAerR7SQGR2viQw92ztOD3Aq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDL4UZ%2FD%2F%2FwZgHlqOkyrcA26tKnN2Kk8Jjf5IjgAgaLYWHmLkHJd7b1yDF25f9jzBmBGVJPB%2F51zv8Wi4JS%2BhAZkm5GmKbIEVKEUuCbVVqGV%2Bv2vsgAO8HDUgrxo1yyfrm1GjGQlPU%2BgyK2i%2BslakrA4RUbZRb%2B25RbkI0yodbWS6DpjyAcaii5GeghFw2o1Co%2B%2BkJkkA46yDSIS3E%2FMWpuYfWSJwfXlsX1vvFq6zjnpHrOCUHIWzzrXJW4rX8bLQl2MboHoEnaXeAAMqKSqNZox5W1heMTtQSq5XoRFxEMMxNS%2BfrX0wwjiN8RSMnaQLtzHvAZR4Ihz33AZ7tN1UG6oH0OOUNvhZaJ9nOJ31Vx%2BEl8keEOspkz68XwMJr3GcMgjiX3q%2FB6CvlzXNxQqr5vKIXW6Zc3YXehD8N7oYP%2FVhItmUHn%2BBQKkyitmNtgcIFZKcitFQiYysLvYn6DcdGvUj0XE0E76cq%2BhL%2B83q3ea3ZGfFDI75Jk4U99hEJdCjfdIa%2Bz%2BLC%2FRYqxd%2BXD3YXuYY%2BFCbDmxefoSkH2f%2FGeyNX15R04wJq1Lmh4xWrOHChHrvJEAxZ4NmR3IEqaZWBF8JAECDUquqMsFKP%2FOEJ2fSrucSDVy3WDN4gGYAui90j4uHHttxC%2FCPdY0jMMLP4cAGOqUBfQur7pJsudhtzFTEuWf64HZAEx1UEkq%2Fhz1FifuorztJy4LXe%2FYHPus32jB2JxyYQa2a3wBHdylVGDXHiW0MZxK8ajid09nVzBZjBZ%2FkKN7Z4ooknNNrrOgtMIbW8L06ZKDnXBWcRXIPCjLAI4bGX5eDk30ypOVdxy9hOurbSQGHW1zZTBnk6%2Bg0TnA2lzlK2FL3b%2BnAEk%2BzvMmJGH7IGqNLWFmr&X-Amz-Signature=0c2280c98828afbc57eac6419d26a25b779a797a57cd938efc8d52f151ea7126&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YECHSX72%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEC6yZKbXU30h%2BLHZw3lrr4n3XWObt%2BdCsObDuLyD1uIAiEA%2FQbW%2BjNHvX5W%2BisucESkaAerR7SQGR2viQw92ztOD3Aq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDL4UZ%2FD%2F%2FwZgHlqOkyrcA26tKnN2Kk8Jjf5IjgAgaLYWHmLkHJd7b1yDF25f9jzBmBGVJPB%2F51zv8Wi4JS%2BhAZkm5GmKbIEVKEUuCbVVqGV%2Bv2vsgAO8HDUgrxo1yyfrm1GjGQlPU%2BgyK2i%2BslakrA4RUbZRb%2B25RbkI0yodbWS6DpjyAcaii5GeghFw2o1Co%2B%2BkJkkA46yDSIS3E%2FMWpuYfWSJwfXlsX1vvFq6zjnpHrOCUHIWzzrXJW4rX8bLQl2MboHoEnaXeAAMqKSqNZox5W1heMTtQSq5XoRFxEMMxNS%2BfrX0wwjiN8RSMnaQLtzHvAZR4Ihz33AZ7tN1UG6oH0OOUNvhZaJ9nOJ31Vx%2BEl8keEOspkz68XwMJr3GcMgjiX3q%2FB6CvlzXNxQqr5vKIXW6Zc3YXehD8N7oYP%2FVhItmUHn%2BBQKkyitmNtgcIFZKcitFQiYysLvYn6DcdGvUj0XE0E76cq%2BhL%2B83q3ea3ZGfFDI75Jk4U99hEJdCjfdIa%2Bz%2BLC%2FRYqxd%2BXD3YXuYY%2BFCbDmxefoSkH2f%2FGeyNX15R04wJq1Lmh4xWrOHChHrvJEAxZ4NmR3IEqaZWBF8JAECDUquqMsFKP%2FOEJ2fSrucSDVy3WDN4gGYAui90j4uHHttxC%2FCPdY0jMMLP4cAGOqUBfQur7pJsudhtzFTEuWf64HZAEx1UEkq%2Fhz1FifuorztJy4LXe%2FYHPus32jB2JxyYQa2a3wBHdylVGDXHiW0MZxK8ajid09nVzBZjBZ%2FkKN7Z4ooknNNrrOgtMIbW8L06ZKDnXBWcRXIPCjLAI4bGX5eDk30ypOVdxy9hOurbSQGHW1zZTBnk6%2Bg0TnA2lzlK2FL3b%2BnAEk%2BzvMmJGH7IGqNLWFmr&X-Amz-Signature=27d5fa6b62a5628f5b90d157bb6616763380b5be4ae7547ad71cd1fad9539551&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

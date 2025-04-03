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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFDN6Z2A%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCwYqUcxEWE3rWDbTZi%2F6XFucUKvmv6Myuj9W8wxk2lgwIhAMM0XMZFqabABrU74%2Bg4D55SRnZXYA7XhYRYTGxEltKlKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytOy0%2BS2i6IWFtRoQq3AOkrp8rVTo4gYZlomfBG6hUgL86D3dYDyUulJhbbIIdrzgthqOnTxNKv9jgV9UdPxn68o7pvLjn%2Byp2OOJlSP5b8ocFynkHzu1dCKoEPuhzEuuVMryPueR75N4CbB7ywIWOPOCR%2BqOycJyP%2B83ZXvlHSyt3gEeV9zcoZYKK0I1Ngft%2BjEZ19xQLeWS1EHGt%2B48ZBiQVwhKR2oRdBG6ICKmF7chufMhvjYImyW7%2BljXJ5RqKUvZxe1dUcLuKbgMLbmC4aNLs5bit%2FKKML3om2yHqTj24apFNMj8rW4f70oBLwfsKsg8v3iSGTpq6RfX6gQsjGf4H5cG3QHGXOnDCJRZbTC93OqRHQFu3CGG%2ByRDTehcjguLFGDhf0rga9pwGKxN%2FrPoThfxh%2Bjz0JmTTEuDVYxB3tp5vZaoyraR3TWNaPLaW6U2GtDYFgw3Vmwn03drFQqOi4BtHngyx%2FZEsq9qvdbn5%2FCAI%2Bkodpt6jPn4EsE2DEAHU0TRhZozRKOKAWwe6aquaPt35wRT4bScurLcF8kX3%2FSeQJrNKwkTFgAWjMNrfwX9CZIgQ9ZJcFFA1qyA%2BykXd5gW6BZdCRAm4UBBvNRq7ypjgJQIfCZ%2BAK4Bkzs16Vr38qSpcwvOfDjCwrre%2FBjqkAfXBQUz8b%2Fw1J18Vfs%2BF3W5OcrKfKayviyG6S1OHN2e1cyVjvt6Y88zkbxHksQdx4wPAcurgjgNqpaP4%2FfewZK8SP1EOhgX323WaGL3T2jR11Fkahw%2FEXhMqBaYFR4wArIPTYWCFwYXJk%2B4LNeyeqhrFqcMYoLAHZSAr1SSPnOnkWuQgxmKoBH4btyRctv0qQSpxYpkcZYOK7L6v7mutax8p%2FbSI&X-Amz-Signature=fed6954af177dbd06d63184bb9738f3ba3702d7bfbb5f98f4500ff755724d88c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFDN6Z2A%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCwYqUcxEWE3rWDbTZi%2F6XFucUKvmv6Myuj9W8wxk2lgwIhAMM0XMZFqabABrU74%2Bg4D55SRnZXYA7XhYRYTGxEltKlKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytOy0%2BS2i6IWFtRoQq3AOkrp8rVTo4gYZlomfBG6hUgL86D3dYDyUulJhbbIIdrzgthqOnTxNKv9jgV9UdPxn68o7pvLjn%2Byp2OOJlSP5b8ocFynkHzu1dCKoEPuhzEuuVMryPueR75N4CbB7ywIWOPOCR%2BqOycJyP%2B83ZXvlHSyt3gEeV9zcoZYKK0I1Ngft%2BjEZ19xQLeWS1EHGt%2B48ZBiQVwhKR2oRdBG6ICKmF7chufMhvjYImyW7%2BljXJ5RqKUvZxe1dUcLuKbgMLbmC4aNLs5bit%2FKKML3om2yHqTj24apFNMj8rW4f70oBLwfsKsg8v3iSGTpq6RfX6gQsjGf4H5cG3QHGXOnDCJRZbTC93OqRHQFu3CGG%2ByRDTehcjguLFGDhf0rga9pwGKxN%2FrPoThfxh%2Bjz0JmTTEuDVYxB3tp5vZaoyraR3TWNaPLaW6U2GtDYFgw3Vmwn03drFQqOi4BtHngyx%2FZEsq9qvdbn5%2FCAI%2Bkodpt6jPn4EsE2DEAHU0TRhZozRKOKAWwe6aquaPt35wRT4bScurLcF8kX3%2FSeQJrNKwkTFgAWjMNrfwX9CZIgQ9ZJcFFA1qyA%2BykXd5gW6BZdCRAm4UBBvNRq7ypjgJQIfCZ%2BAK4Bkzs16Vr38qSpcwvOfDjCwrre%2FBjqkAfXBQUz8b%2Fw1J18Vfs%2BF3W5OcrKfKayviyG6S1OHN2e1cyVjvt6Y88zkbxHksQdx4wPAcurgjgNqpaP4%2FfewZK8SP1EOhgX323WaGL3T2jR11Fkahw%2FEXhMqBaYFR4wArIPTYWCFwYXJk%2B4LNeyeqhrFqcMYoLAHZSAr1SSPnOnkWuQgxmKoBH4btyRctv0qQSpxYpkcZYOK7L6v7mutax8p%2FbSI&X-Amz-Signature=b3afc0207aa9d7c78448274dcd5e692c62886c941cd4359a465b2467a06bec46&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFDN6Z2A%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCwYqUcxEWE3rWDbTZi%2F6XFucUKvmv6Myuj9W8wxk2lgwIhAMM0XMZFqabABrU74%2Bg4D55SRnZXYA7XhYRYTGxEltKlKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytOy0%2BS2i6IWFtRoQq3AOkrp8rVTo4gYZlomfBG6hUgL86D3dYDyUulJhbbIIdrzgthqOnTxNKv9jgV9UdPxn68o7pvLjn%2Byp2OOJlSP5b8ocFynkHzu1dCKoEPuhzEuuVMryPueR75N4CbB7ywIWOPOCR%2BqOycJyP%2B83ZXvlHSyt3gEeV9zcoZYKK0I1Ngft%2BjEZ19xQLeWS1EHGt%2B48ZBiQVwhKR2oRdBG6ICKmF7chufMhvjYImyW7%2BljXJ5RqKUvZxe1dUcLuKbgMLbmC4aNLs5bit%2FKKML3om2yHqTj24apFNMj8rW4f70oBLwfsKsg8v3iSGTpq6RfX6gQsjGf4H5cG3QHGXOnDCJRZbTC93OqRHQFu3CGG%2ByRDTehcjguLFGDhf0rga9pwGKxN%2FrPoThfxh%2Bjz0JmTTEuDVYxB3tp5vZaoyraR3TWNaPLaW6U2GtDYFgw3Vmwn03drFQqOi4BtHngyx%2FZEsq9qvdbn5%2FCAI%2Bkodpt6jPn4EsE2DEAHU0TRhZozRKOKAWwe6aquaPt35wRT4bScurLcF8kX3%2FSeQJrNKwkTFgAWjMNrfwX9CZIgQ9ZJcFFA1qyA%2BykXd5gW6BZdCRAm4UBBvNRq7ypjgJQIfCZ%2BAK4Bkzs16Vr38qSpcwvOfDjCwrre%2FBjqkAfXBQUz8b%2Fw1J18Vfs%2BF3W5OcrKfKayviyG6S1OHN2e1cyVjvt6Y88zkbxHksQdx4wPAcurgjgNqpaP4%2FfewZK8SP1EOhgX323WaGL3T2jR11Fkahw%2FEXhMqBaYFR4wArIPTYWCFwYXJk%2B4LNeyeqhrFqcMYoLAHZSAr1SSPnOnkWuQgxmKoBH4btyRctv0qQSpxYpkcZYOK7L6v7mutax8p%2FbSI&X-Amz-Signature=a0b0bd86f71ab967d1bd073fd8561b68902407cea51c17b6aec6d0943e139b4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFDN6Z2A%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCwYqUcxEWE3rWDbTZi%2F6XFucUKvmv6Myuj9W8wxk2lgwIhAMM0XMZFqabABrU74%2Bg4D55SRnZXYA7XhYRYTGxEltKlKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytOy0%2BS2i6IWFtRoQq3AOkrp8rVTo4gYZlomfBG6hUgL86D3dYDyUulJhbbIIdrzgthqOnTxNKv9jgV9UdPxn68o7pvLjn%2Byp2OOJlSP5b8ocFynkHzu1dCKoEPuhzEuuVMryPueR75N4CbB7ywIWOPOCR%2BqOycJyP%2B83ZXvlHSyt3gEeV9zcoZYKK0I1Ngft%2BjEZ19xQLeWS1EHGt%2B48ZBiQVwhKR2oRdBG6ICKmF7chufMhvjYImyW7%2BljXJ5RqKUvZxe1dUcLuKbgMLbmC4aNLs5bit%2FKKML3om2yHqTj24apFNMj8rW4f70oBLwfsKsg8v3iSGTpq6RfX6gQsjGf4H5cG3QHGXOnDCJRZbTC93OqRHQFu3CGG%2ByRDTehcjguLFGDhf0rga9pwGKxN%2FrPoThfxh%2Bjz0JmTTEuDVYxB3tp5vZaoyraR3TWNaPLaW6U2GtDYFgw3Vmwn03drFQqOi4BtHngyx%2FZEsq9qvdbn5%2FCAI%2Bkodpt6jPn4EsE2DEAHU0TRhZozRKOKAWwe6aquaPt35wRT4bScurLcF8kX3%2FSeQJrNKwkTFgAWjMNrfwX9CZIgQ9ZJcFFA1qyA%2BykXd5gW6BZdCRAm4UBBvNRq7ypjgJQIfCZ%2BAK4Bkzs16Vr38qSpcwvOfDjCwrre%2FBjqkAfXBQUz8b%2Fw1J18Vfs%2BF3W5OcrKfKayviyG6S1OHN2e1cyVjvt6Y88zkbxHksQdx4wPAcurgjgNqpaP4%2FfewZK8SP1EOhgX323WaGL3T2jR11Fkahw%2FEXhMqBaYFR4wArIPTYWCFwYXJk%2B4LNeyeqhrFqcMYoLAHZSAr1SSPnOnkWuQgxmKoBH4btyRctv0qQSpxYpkcZYOK7L6v7mutax8p%2FbSI&X-Amz-Signature=bf09a3e7ddaca801811b62f1008fc6a4a57978da6b27405f13582bacf60f1987&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFDN6Z2A%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCwYqUcxEWE3rWDbTZi%2F6XFucUKvmv6Myuj9W8wxk2lgwIhAMM0XMZFqabABrU74%2Bg4D55SRnZXYA7XhYRYTGxEltKlKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytOy0%2BS2i6IWFtRoQq3AOkrp8rVTo4gYZlomfBG6hUgL86D3dYDyUulJhbbIIdrzgthqOnTxNKv9jgV9UdPxn68o7pvLjn%2Byp2OOJlSP5b8ocFynkHzu1dCKoEPuhzEuuVMryPueR75N4CbB7ywIWOPOCR%2BqOycJyP%2B83ZXvlHSyt3gEeV9zcoZYKK0I1Ngft%2BjEZ19xQLeWS1EHGt%2B48ZBiQVwhKR2oRdBG6ICKmF7chufMhvjYImyW7%2BljXJ5RqKUvZxe1dUcLuKbgMLbmC4aNLs5bit%2FKKML3om2yHqTj24apFNMj8rW4f70oBLwfsKsg8v3iSGTpq6RfX6gQsjGf4H5cG3QHGXOnDCJRZbTC93OqRHQFu3CGG%2ByRDTehcjguLFGDhf0rga9pwGKxN%2FrPoThfxh%2Bjz0JmTTEuDVYxB3tp5vZaoyraR3TWNaPLaW6U2GtDYFgw3Vmwn03drFQqOi4BtHngyx%2FZEsq9qvdbn5%2FCAI%2Bkodpt6jPn4EsE2DEAHU0TRhZozRKOKAWwe6aquaPt35wRT4bScurLcF8kX3%2FSeQJrNKwkTFgAWjMNrfwX9CZIgQ9ZJcFFA1qyA%2BykXd5gW6BZdCRAm4UBBvNRq7ypjgJQIfCZ%2BAK4Bkzs16Vr38qSpcwvOfDjCwrre%2FBjqkAfXBQUz8b%2Fw1J18Vfs%2BF3W5OcrKfKayviyG6S1OHN2e1cyVjvt6Y88zkbxHksQdx4wPAcurgjgNqpaP4%2FfewZK8SP1EOhgX323WaGL3T2jR11Fkahw%2FEXhMqBaYFR4wArIPTYWCFwYXJk%2B4LNeyeqhrFqcMYoLAHZSAr1SSPnOnkWuQgxmKoBH4btyRctv0qQSpxYpkcZYOK7L6v7mutax8p%2FbSI&X-Amz-Signature=c44fcbaf7698194d296d1838195600f26a0f9453bcb1224730dde1e2e9f2b50f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

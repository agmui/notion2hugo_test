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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ3WLCY7%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQPIO0HczEeLGQan28uIELSctTEw%2FSuWqJFSJE4aRu7AiA4IFXEoYg1Mq1EGGXkum8cR5RVxZW3Efh7QF7kYlC4USr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM9CAc30G3OQ0sK2ewKtwD7M75hu%2FgtvNfYxiCjT3SEyvZELR1ELipxuA%2BJtkw8zaYyaDZtgAR7Uk81pcAQXcerK6IeMJEElHsjeleL%2Bki51C2bsDdRDi4oX7jMMklgp9dvpbSKZsCZQs55H9flF4vxYDgdtQ%2FPK9BSTuDNIqVi0sP14bUkJAvTalBTAJZxvz9U8qkWfOItFzrVbEo6FNbtIPGOzig0dNWBN2P%2Bte99CsArl4CSivCmBj1JUsfHa8R6Fp3a3YuO18Kkxa8sXMrbFi2F2LIXE0g3uz3l0FuUNx%2F5Isov02oy9RtM9IWcw6TNDiMf%2BeSgv0emV%2B3livGMLlQg0inaM9AGHLduteuvm5QruOmx5U8CCm4uGUda3FGcCpFb7u9Y60hqBs%2BYdXlQ%2FtCCjSc9qaKKLxmGoFE4Ojck8K8b77FQJiTdv19qFS610wI5gFo%2BqoW6%2BfC4xcRYmeMVtUzfsO4sSwNe2Xq93D68nsKf1dgdatgcVyX8XAWIlst1%2F2oF2Nzq8CpulB1nyxHS2mMkwmvB35ltpD7zLuTNop%2FhWV3k6m0YQhFrHzP3ifvfNUhOFQSsVqR7q9tLACjtDVPqMQIhMWjqXhhdyKMhXbO%2FaME3Io9enbglp2%2BjvcOAimL6%2FfKMikwotmBvQY6pgFFdDLAmsrBcOn3mMpG0iYm6Jjgoe7g5qtXiwrPCRxHrLdzbEGXL2ibwa6OJVNNRnctiKsfWrHDCfF3kDU%2B9L9gDSGnYqrIifA8T%2BwYoRCpceD35Ni5cEHaOCqQ0%2BqjtR%2F6CsBCTvi%2FXEzyoYtp010VWvSy%2F7jeVm%2F%2BoO0wnRCRRC%2Bc4x2XlYU8ViO2YzjH5n3VRLhL%2BnxADaXrI2L6v8tMTbmRF5U0&X-Amz-Signature=27b42c0b2cf8fd7b1218186b238c3b7756bbd65396d239fa50c3542141dd2d35&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ3WLCY7%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQPIO0HczEeLGQan28uIELSctTEw%2FSuWqJFSJE4aRu7AiA4IFXEoYg1Mq1EGGXkum8cR5RVxZW3Efh7QF7kYlC4USr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM9CAc30G3OQ0sK2ewKtwD7M75hu%2FgtvNfYxiCjT3SEyvZELR1ELipxuA%2BJtkw8zaYyaDZtgAR7Uk81pcAQXcerK6IeMJEElHsjeleL%2Bki51C2bsDdRDi4oX7jMMklgp9dvpbSKZsCZQs55H9flF4vxYDgdtQ%2FPK9BSTuDNIqVi0sP14bUkJAvTalBTAJZxvz9U8qkWfOItFzrVbEo6FNbtIPGOzig0dNWBN2P%2Bte99CsArl4CSivCmBj1JUsfHa8R6Fp3a3YuO18Kkxa8sXMrbFi2F2LIXE0g3uz3l0FuUNx%2F5Isov02oy9RtM9IWcw6TNDiMf%2BeSgv0emV%2B3livGMLlQg0inaM9AGHLduteuvm5QruOmx5U8CCm4uGUda3FGcCpFb7u9Y60hqBs%2BYdXlQ%2FtCCjSc9qaKKLxmGoFE4Ojck8K8b77FQJiTdv19qFS610wI5gFo%2BqoW6%2BfC4xcRYmeMVtUzfsO4sSwNe2Xq93D68nsKf1dgdatgcVyX8XAWIlst1%2F2oF2Nzq8CpulB1nyxHS2mMkwmvB35ltpD7zLuTNop%2FhWV3k6m0YQhFrHzP3ifvfNUhOFQSsVqR7q9tLACjtDVPqMQIhMWjqXhhdyKMhXbO%2FaME3Io9enbglp2%2BjvcOAimL6%2FfKMikwotmBvQY6pgFFdDLAmsrBcOn3mMpG0iYm6Jjgoe7g5qtXiwrPCRxHrLdzbEGXL2ibwa6OJVNNRnctiKsfWrHDCfF3kDU%2B9L9gDSGnYqrIifA8T%2BwYoRCpceD35Ni5cEHaOCqQ0%2BqjtR%2F6CsBCTvi%2FXEzyoYtp010VWvSy%2F7jeVm%2F%2BoO0wnRCRRC%2Bc4x2XlYU8ViO2YzjH5n3VRLhL%2BnxADaXrI2L6v8tMTbmRF5U0&X-Amz-Signature=44afa191924b9f98d348fd4caaf113370fd3116cac94aa2ed8fea8b648634f02&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ3WLCY7%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQPIO0HczEeLGQan28uIELSctTEw%2FSuWqJFSJE4aRu7AiA4IFXEoYg1Mq1EGGXkum8cR5RVxZW3Efh7QF7kYlC4USr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM9CAc30G3OQ0sK2ewKtwD7M75hu%2FgtvNfYxiCjT3SEyvZELR1ELipxuA%2BJtkw8zaYyaDZtgAR7Uk81pcAQXcerK6IeMJEElHsjeleL%2Bki51C2bsDdRDi4oX7jMMklgp9dvpbSKZsCZQs55H9flF4vxYDgdtQ%2FPK9BSTuDNIqVi0sP14bUkJAvTalBTAJZxvz9U8qkWfOItFzrVbEo6FNbtIPGOzig0dNWBN2P%2Bte99CsArl4CSivCmBj1JUsfHa8R6Fp3a3YuO18Kkxa8sXMrbFi2F2LIXE0g3uz3l0FuUNx%2F5Isov02oy9RtM9IWcw6TNDiMf%2BeSgv0emV%2B3livGMLlQg0inaM9AGHLduteuvm5QruOmx5U8CCm4uGUda3FGcCpFb7u9Y60hqBs%2BYdXlQ%2FtCCjSc9qaKKLxmGoFE4Ojck8K8b77FQJiTdv19qFS610wI5gFo%2BqoW6%2BfC4xcRYmeMVtUzfsO4sSwNe2Xq93D68nsKf1dgdatgcVyX8XAWIlst1%2F2oF2Nzq8CpulB1nyxHS2mMkwmvB35ltpD7zLuTNop%2FhWV3k6m0YQhFrHzP3ifvfNUhOFQSsVqR7q9tLACjtDVPqMQIhMWjqXhhdyKMhXbO%2FaME3Io9enbglp2%2BjvcOAimL6%2FfKMikwotmBvQY6pgFFdDLAmsrBcOn3mMpG0iYm6Jjgoe7g5qtXiwrPCRxHrLdzbEGXL2ibwa6OJVNNRnctiKsfWrHDCfF3kDU%2B9L9gDSGnYqrIifA8T%2BwYoRCpceD35Ni5cEHaOCqQ0%2BqjtR%2F6CsBCTvi%2FXEzyoYtp010VWvSy%2F7jeVm%2F%2BoO0wnRCRRC%2Bc4x2XlYU8ViO2YzjH5n3VRLhL%2BnxADaXrI2L6v8tMTbmRF5U0&X-Amz-Signature=e7ed7b6556e00be8dbc9ed435416e0343fb48fc17abac9061d4273fadbf44995&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ3WLCY7%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQPIO0HczEeLGQan28uIELSctTEw%2FSuWqJFSJE4aRu7AiA4IFXEoYg1Mq1EGGXkum8cR5RVxZW3Efh7QF7kYlC4USr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM9CAc30G3OQ0sK2ewKtwD7M75hu%2FgtvNfYxiCjT3SEyvZELR1ELipxuA%2BJtkw8zaYyaDZtgAR7Uk81pcAQXcerK6IeMJEElHsjeleL%2Bki51C2bsDdRDi4oX7jMMklgp9dvpbSKZsCZQs55H9flF4vxYDgdtQ%2FPK9BSTuDNIqVi0sP14bUkJAvTalBTAJZxvz9U8qkWfOItFzrVbEo6FNbtIPGOzig0dNWBN2P%2Bte99CsArl4CSivCmBj1JUsfHa8R6Fp3a3YuO18Kkxa8sXMrbFi2F2LIXE0g3uz3l0FuUNx%2F5Isov02oy9RtM9IWcw6TNDiMf%2BeSgv0emV%2B3livGMLlQg0inaM9AGHLduteuvm5QruOmx5U8CCm4uGUda3FGcCpFb7u9Y60hqBs%2BYdXlQ%2FtCCjSc9qaKKLxmGoFE4Ojck8K8b77FQJiTdv19qFS610wI5gFo%2BqoW6%2BfC4xcRYmeMVtUzfsO4sSwNe2Xq93D68nsKf1dgdatgcVyX8XAWIlst1%2F2oF2Nzq8CpulB1nyxHS2mMkwmvB35ltpD7zLuTNop%2FhWV3k6m0YQhFrHzP3ifvfNUhOFQSsVqR7q9tLACjtDVPqMQIhMWjqXhhdyKMhXbO%2FaME3Io9enbglp2%2BjvcOAimL6%2FfKMikwotmBvQY6pgFFdDLAmsrBcOn3mMpG0iYm6Jjgoe7g5qtXiwrPCRxHrLdzbEGXL2ibwa6OJVNNRnctiKsfWrHDCfF3kDU%2B9L9gDSGnYqrIifA8T%2BwYoRCpceD35Ni5cEHaOCqQ0%2BqjtR%2F6CsBCTvi%2FXEzyoYtp010VWvSy%2F7jeVm%2F%2BoO0wnRCRRC%2Bc4x2XlYU8ViO2YzjH5n3VRLhL%2BnxADaXrI2L6v8tMTbmRF5U0&X-Amz-Signature=9d629e0122180acc190e31c081dd8347c9f4d0a02adeb3cf5d536c394aa0a49b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ3WLCY7%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQPIO0HczEeLGQan28uIELSctTEw%2FSuWqJFSJE4aRu7AiA4IFXEoYg1Mq1EGGXkum8cR5RVxZW3Efh7QF7kYlC4USr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM9CAc30G3OQ0sK2ewKtwD7M75hu%2FgtvNfYxiCjT3SEyvZELR1ELipxuA%2BJtkw8zaYyaDZtgAR7Uk81pcAQXcerK6IeMJEElHsjeleL%2Bki51C2bsDdRDi4oX7jMMklgp9dvpbSKZsCZQs55H9flF4vxYDgdtQ%2FPK9BSTuDNIqVi0sP14bUkJAvTalBTAJZxvz9U8qkWfOItFzrVbEo6FNbtIPGOzig0dNWBN2P%2Bte99CsArl4CSivCmBj1JUsfHa8R6Fp3a3YuO18Kkxa8sXMrbFi2F2LIXE0g3uz3l0FuUNx%2F5Isov02oy9RtM9IWcw6TNDiMf%2BeSgv0emV%2B3livGMLlQg0inaM9AGHLduteuvm5QruOmx5U8CCm4uGUda3FGcCpFb7u9Y60hqBs%2BYdXlQ%2FtCCjSc9qaKKLxmGoFE4Ojck8K8b77FQJiTdv19qFS610wI5gFo%2BqoW6%2BfC4xcRYmeMVtUzfsO4sSwNe2Xq93D68nsKf1dgdatgcVyX8XAWIlst1%2F2oF2Nzq8CpulB1nyxHS2mMkwmvB35ltpD7zLuTNop%2FhWV3k6m0YQhFrHzP3ifvfNUhOFQSsVqR7q9tLACjtDVPqMQIhMWjqXhhdyKMhXbO%2FaME3Io9enbglp2%2BjvcOAimL6%2FfKMikwotmBvQY6pgFFdDLAmsrBcOn3mMpG0iYm6Jjgoe7g5qtXiwrPCRxHrLdzbEGXL2ibwa6OJVNNRnctiKsfWrHDCfF3kDU%2B9L9gDSGnYqrIifA8T%2BwYoRCpceD35Ni5cEHaOCqQ0%2BqjtR%2F6CsBCTvi%2FXEzyoYtp010VWvSy%2F7jeVm%2F%2BoO0wnRCRRC%2Bc4x2XlYU8ViO2YzjH5n3VRLhL%2BnxADaXrI2L6v8tMTbmRF5U0&X-Amz-Signature=bf8fa5dde4c6fa812979451f2e1181fd6cee72044b432e1c0c5a53a99fcee4a0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

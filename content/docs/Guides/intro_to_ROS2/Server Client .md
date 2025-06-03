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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JRYJ72S%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQC1DHMeDL%2Femluvu26wFeF3ZfvyajqnxTSOO5BmB7FSfAIgd1adhVX4QmBo5jjuZNQUJ6qvY4l4Nj0DWSY55Apoh94q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPzJ7t40nhhg%2BomrVSrcA%2Fyi17Px0Uj9aGd2f%2Fy4x0oGC9Uk5OihTIPVUPV7wn9fS8xFWBSihSBc6TuApfDIprjOx6DUpysvGaVPmL6XAYyvzozVGraKgKMrd27PHM8GYHXlYs38PY0Grufl0EYjbo4Gx2%2BsmfT7k3093HsiJbzn9D30oNp4xqmtapD7e%2BAEle8YHW1PO8bmvhZ0zH69s79qnZqR9hXev9AlfvKx%2FyePamxCS5nBKrUBhr1f1FPXE6%2F%2BlSCyPOPzf9nt4KxnOOI0TdM8PhI7%2F%2BltEYMQpPADC7wiHlej3PxHelKpJrU8v05cb3IC%2Bm86yZ9ooM1zpUK3MVgXlX7MDwsI8SUVRAx8ZGNDnQuTrsiS33mE%2FnOX7R8aHuJlaLFxCs5KCobPUkJmYmAAWkDmq2FX0qEA7WakiJYCBd4t8GAK7vcllr1TUSz6TKBjgf4H9c%2Fv3sh%2BpClJC14DWcED8OZju0gp%2F%2F%2F%2F8MLkgLP6DqJCoTLYyLGHfepkWr4%2BdHHCHE4%2FiZcISmrKKSNw1XgrR9q7HZN7nm8H4fdJElAypIOPkTJr0%2Fx5naDClxg8niIENrVxuv%2FGyv1aykx%2B3Qnk68WcqdYUm9BjpiqaOKW6HU3ngYutlYba72Gy8ybTzzF1vNWQMK%2Fm%2B8EGOqUBGP08duT3mwlbVqxoC9%2Bixz9zfKghe1uMAX8tfbTPbrdwc8JJsAYGSDKRNAfAvysris4twXQVynL7nwEcfQwthGtuBDR9slECCXENlrGhg802rDioHx%2BnDWQp6nur9iYXgjAZxBB0XrCA3H8eKNscTTA%2F8qKdb3hHnGGT9Lo6Uhob1zHrkHa%2F%2BimqeHgWSMxY5mNCBBqBip4mjGpuWLJg8O1Fe2Xx&X-Amz-Signature=82fc740af308b8629a83a1f16a814f7aa6bba23118a15a68a7412e15adf1e1f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JRYJ72S%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQC1DHMeDL%2Femluvu26wFeF3ZfvyajqnxTSOO5BmB7FSfAIgd1adhVX4QmBo5jjuZNQUJ6qvY4l4Nj0DWSY55Apoh94q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPzJ7t40nhhg%2BomrVSrcA%2Fyi17Px0Uj9aGd2f%2Fy4x0oGC9Uk5OihTIPVUPV7wn9fS8xFWBSihSBc6TuApfDIprjOx6DUpysvGaVPmL6XAYyvzozVGraKgKMrd27PHM8GYHXlYs38PY0Grufl0EYjbo4Gx2%2BsmfT7k3093HsiJbzn9D30oNp4xqmtapD7e%2BAEle8YHW1PO8bmvhZ0zH69s79qnZqR9hXev9AlfvKx%2FyePamxCS5nBKrUBhr1f1FPXE6%2F%2BlSCyPOPzf9nt4KxnOOI0TdM8PhI7%2F%2BltEYMQpPADC7wiHlej3PxHelKpJrU8v05cb3IC%2Bm86yZ9ooM1zpUK3MVgXlX7MDwsI8SUVRAx8ZGNDnQuTrsiS33mE%2FnOX7R8aHuJlaLFxCs5KCobPUkJmYmAAWkDmq2FX0qEA7WakiJYCBd4t8GAK7vcllr1TUSz6TKBjgf4H9c%2Fv3sh%2BpClJC14DWcED8OZju0gp%2F%2F%2F%2F8MLkgLP6DqJCoTLYyLGHfepkWr4%2BdHHCHE4%2FiZcISmrKKSNw1XgrR9q7HZN7nm8H4fdJElAypIOPkTJr0%2Fx5naDClxg8niIENrVxuv%2FGyv1aykx%2B3Qnk68WcqdYUm9BjpiqaOKW6HU3ngYutlYba72Gy8ybTzzF1vNWQMK%2Fm%2B8EGOqUBGP08duT3mwlbVqxoC9%2Bixz9zfKghe1uMAX8tfbTPbrdwc8JJsAYGSDKRNAfAvysris4twXQVynL7nwEcfQwthGtuBDR9slECCXENlrGhg802rDioHx%2BnDWQp6nur9iYXgjAZxBB0XrCA3H8eKNscTTA%2F8qKdb3hHnGGT9Lo6Uhob1zHrkHa%2F%2BimqeHgWSMxY5mNCBBqBip4mjGpuWLJg8O1Fe2Xx&X-Amz-Signature=e65a1a2a3896de5df53c412d0b3836fb64d14dbe5ea40392c562747ba185f2ff&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JRYJ72S%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQC1DHMeDL%2Femluvu26wFeF3ZfvyajqnxTSOO5BmB7FSfAIgd1adhVX4QmBo5jjuZNQUJ6qvY4l4Nj0DWSY55Apoh94q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPzJ7t40nhhg%2BomrVSrcA%2Fyi17Px0Uj9aGd2f%2Fy4x0oGC9Uk5OihTIPVUPV7wn9fS8xFWBSihSBc6TuApfDIprjOx6DUpysvGaVPmL6XAYyvzozVGraKgKMrd27PHM8GYHXlYs38PY0Grufl0EYjbo4Gx2%2BsmfT7k3093HsiJbzn9D30oNp4xqmtapD7e%2BAEle8YHW1PO8bmvhZ0zH69s79qnZqR9hXev9AlfvKx%2FyePamxCS5nBKrUBhr1f1FPXE6%2F%2BlSCyPOPzf9nt4KxnOOI0TdM8PhI7%2F%2BltEYMQpPADC7wiHlej3PxHelKpJrU8v05cb3IC%2Bm86yZ9ooM1zpUK3MVgXlX7MDwsI8SUVRAx8ZGNDnQuTrsiS33mE%2FnOX7R8aHuJlaLFxCs5KCobPUkJmYmAAWkDmq2FX0qEA7WakiJYCBd4t8GAK7vcllr1TUSz6TKBjgf4H9c%2Fv3sh%2BpClJC14DWcED8OZju0gp%2F%2F%2F%2F8MLkgLP6DqJCoTLYyLGHfepkWr4%2BdHHCHE4%2FiZcISmrKKSNw1XgrR9q7HZN7nm8H4fdJElAypIOPkTJr0%2Fx5naDClxg8niIENrVxuv%2FGyv1aykx%2B3Qnk68WcqdYUm9BjpiqaOKW6HU3ngYutlYba72Gy8ybTzzF1vNWQMK%2Fm%2B8EGOqUBGP08duT3mwlbVqxoC9%2Bixz9zfKghe1uMAX8tfbTPbrdwc8JJsAYGSDKRNAfAvysris4twXQVynL7nwEcfQwthGtuBDR9slECCXENlrGhg802rDioHx%2BnDWQp6nur9iYXgjAZxBB0XrCA3H8eKNscTTA%2F8qKdb3hHnGGT9Lo6Uhob1zHrkHa%2F%2BimqeHgWSMxY5mNCBBqBip4mjGpuWLJg8O1Fe2Xx&X-Amz-Signature=2d900740f5ac1e78eb1eea647d7f9063a2a58b44bdd5960cdbc24943cb98341c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JRYJ72S%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQC1DHMeDL%2Femluvu26wFeF3ZfvyajqnxTSOO5BmB7FSfAIgd1adhVX4QmBo5jjuZNQUJ6qvY4l4Nj0DWSY55Apoh94q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPzJ7t40nhhg%2BomrVSrcA%2Fyi17Px0Uj9aGd2f%2Fy4x0oGC9Uk5OihTIPVUPV7wn9fS8xFWBSihSBc6TuApfDIprjOx6DUpysvGaVPmL6XAYyvzozVGraKgKMrd27PHM8GYHXlYs38PY0Grufl0EYjbo4Gx2%2BsmfT7k3093HsiJbzn9D30oNp4xqmtapD7e%2BAEle8YHW1PO8bmvhZ0zH69s79qnZqR9hXev9AlfvKx%2FyePamxCS5nBKrUBhr1f1FPXE6%2F%2BlSCyPOPzf9nt4KxnOOI0TdM8PhI7%2F%2BltEYMQpPADC7wiHlej3PxHelKpJrU8v05cb3IC%2Bm86yZ9ooM1zpUK3MVgXlX7MDwsI8SUVRAx8ZGNDnQuTrsiS33mE%2FnOX7R8aHuJlaLFxCs5KCobPUkJmYmAAWkDmq2FX0qEA7WakiJYCBd4t8GAK7vcllr1TUSz6TKBjgf4H9c%2Fv3sh%2BpClJC14DWcED8OZju0gp%2F%2F%2F%2F8MLkgLP6DqJCoTLYyLGHfepkWr4%2BdHHCHE4%2FiZcISmrKKSNw1XgrR9q7HZN7nm8H4fdJElAypIOPkTJr0%2Fx5naDClxg8niIENrVxuv%2FGyv1aykx%2B3Qnk68WcqdYUm9BjpiqaOKW6HU3ngYutlYba72Gy8ybTzzF1vNWQMK%2Fm%2B8EGOqUBGP08duT3mwlbVqxoC9%2Bixz9zfKghe1uMAX8tfbTPbrdwc8JJsAYGSDKRNAfAvysris4twXQVynL7nwEcfQwthGtuBDR9slECCXENlrGhg802rDioHx%2BnDWQp6nur9iYXgjAZxBB0XrCA3H8eKNscTTA%2F8qKdb3hHnGGT9Lo6Uhob1zHrkHa%2F%2BimqeHgWSMxY5mNCBBqBip4mjGpuWLJg8O1Fe2Xx&X-Amz-Signature=d4ed2a7bd0fea3c12826237a02b685af7cc9277d995a1d7e2407b99995295b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JRYJ72S%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQC1DHMeDL%2Femluvu26wFeF3ZfvyajqnxTSOO5BmB7FSfAIgd1adhVX4QmBo5jjuZNQUJ6qvY4l4Nj0DWSY55Apoh94q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPzJ7t40nhhg%2BomrVSrcA%2Fyi17Px0Uj9aGd2f%2Fy4x0oGC9Uk5OihTIPVUPV7wn9fS8xFWBSihSBc6TuApfDIprjOx6DUpysvGaVPmL6XAYyvzozVGraKgKMrd27PHM8GYHXlYs38PY0Grufl0EYjbo4Gx2%2BsmfT7k3093HsiJbzn9D30oNp4xqmtapD7e%2BAEle8YHW1PO8bmvhZ0zH69s79qnZqR9hXev9AlfvKx%2FyePamxCS5nBKrUBhr1f1FPXE6%2F%2BlSCyPOPzf9nt4KxnOOI0TdM8PhI7%2F%2BltEYMQpPADC7wiHlej3PxHelKpJrU8v05cb3IC%2Bm86yZ9ooM1zpUK3MVgXlX7MDwsI8SUVRAx8ZGNDnQuTrsiS33mE%2FnOX7R8aHuJlaLFxCs5KCobPUkJmYmAAWkDmq2FX0qEA7WakiJYCBd4t8GAK7vcllr1TUSz6TKBjgf4H9c%2Fv3sh%2BpClJC14DWcED8OZju0gp%2F%2F%2F%2F8MLkgLP6DqJCoTLYyLGHfepkWr4%2BdHHCHE4%2FiZcISmrKKSNw1XgrR9q7HZN7nm8H4fdJElAypIOPkTJr0%2Fx5naDClxg8niIENrVxuv%2FGyv1aykx%2B3Qnk68WcqdYUm9BjpiqaOKW6HU3ngYutlYba72Gy8ybTzzF1vNWQMK%2Fm%2B8EGOqUBGP08duT3mwlbVqxoC9%2Bixz9zfKghe1uMAX8tfbTPbrdwc8JJsAYGSDKRNAfAvysris4twXQVynL7nwEcfQwthGtuBDR9slECCXENlrGhg802rDioHx%2BnDWQp6nur9iYXgjAZxBB0XrCA3H8eKNscTTA%2F8qKdb3hHnGGT9Lo6Uhob1zHrkHa%2F%2BimqeHgWSMxY5mNCBBqBip4mjGpuWLJg8O1Fe2Xx&X-Amz-Signature=5e9c96debf3c3df8f2c7b4e1f30c3ef175af317f1d6e247281cf60d8f86b62d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

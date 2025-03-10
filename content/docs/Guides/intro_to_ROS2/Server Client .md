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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWDUBIV3%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDk3hgkWEwbdRTrPp37Uo1LmC8TygWQauAjkX%2FXm2PrsAiA36etg591wUUXUZL8q1p6Q84fduyro%2BUuPD7Lr45uhbSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1rmxAnWF%2FUQx0rLXKtwDkTEpfrBMpMR%2BoFM1VbOmRcczhg5nb6wLDLlyg3zzG1eYNbMdKwZv1pGDFnL6Tv5YWMVWv5%2Bwo%2BR0VmeLY%2BnsTuxDGvErCmzfUBCFrOYUbmJnFnWd%2FbmIIIJ58pa0HQTx4sHjTNFKP5um9gay8SmVKKWj0hX7Uy2M6DbO44K9MLq7bfyLm7finWHFiAcNvfprAGY0FrrbMbYMyBJ6HIxauyRompbT5h8BkSTGCrjpaC%2FoW8BPJqgdmrA8yttjtvWO1e%2FpfrBcHjCpcpy%2F0afwrphupwpKxj2BBK50gyH%2FWfmC%2BH2YcudcMVT11MR9yJjKtZS83LELAxDJZJ6IzU0C3kfAiblFDHnvFL8QEboH6fbeAP5WRCcFQ3S7jVpXlZPXF86%2Bsteqba9MOqR5RMVU1uXCUZjSKy0U6VXDgp78s7fVckUI7mqJ6qA1o06uV84KFnaNbJqGMAXRcqfG5dPU9sV4oIo%2BdtagDbmR%2BGfiM%2FB%2Fm4XrUQ%2BqEVVOi74fCM5GFA1XCkFPBnR2r1WOvWNmo9MNNUa1Wmp2A7hGj5khb2JP5nRFReznFt2HB8RW5onYO3NtLA91hW8iFj0UhFy8V%2B8oSPYLVtc8QQChhhiFvVRpUZQtpUAZBfAiDL8w%2Fqm8vgY6pgFXKEE0%2FxETlgOiSouSUv1773ExDADWZdfUNS1DTu1cN68nsKC%2BOb3v7apIbCU%2FmxEqvGMhtI8%2Fz%2FCpJS7g0HiF8Irq%2BIjnKW2DIkDwipNB4z4GklpGoJS8sa8MHSOmPCMxNiokGAymFKXZHaBnz%2FYBofcxV8VB%2B2%2FDSz1%2Fj9JVrEk21rbxuIuGBnECMcFMmRGmYgL9jRghv6yLFb5dZgq6ok8iKpbq&X-Amz-Signature=1c3c144ee441585a8bd7e595ee11c9f359eb486dab6b4539d148754c2e791f1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWDUBIV3%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDk3hgkWEwbdRTrPp37Uo1LmC8TygWQauAjkX%2FXm2PrsAiA36etg591wUUXUZL8q1p6Q84fduyro%2BUuPD7Lr45uhbSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1rmxAnWF%2FUQx0rLXKtwDkTEpfrBMpMR%2BoFM1VbOmRcczhg5nb6wLDLlyg3zzG1eYNbMdKwZv1pGDFnL6Tv5YWMVWv5%2Bwo%2BR0VmeLY%2BnsTuxDGvErCmzfUBCFrOYUbmJnFnWd%2FbmIIIJ58pa0HQTx4sHjTNFKP5um9gay8SmVKKWj0hX7Uy2M6DbO44K9MLq7bfyLm7finWHFiAcNvfprAGY0FrrbMbYMyBJ6HIxauyRompbT5h8BkSTGCrjpaC%2FoW8BPJqgdmrA8yttjtvWO1e%2FpfrBcHjCpcpy%2F0afwrphupwpKxj2BBK50gyH%2FWfmC%2BH2YcudcMVT11MR9yJjKtZS83LELAxDJZJ6IzU0C3kfAiblFDHnvFL8QEboH6fbeAP5WRCcFQ3S7jVpXlZPXF86%2Bsteqba9MOqR5RMVU1uXCUZjSKy0U6VXDgp78s7fVckUI7mqJ6qA1o06uV84KFnaNbJqGMAXRcqfG5dPU9sV4oIo%2BdtagDbmR%2BGfiM%2FB%2Fm4XrUQ%2BqEVVOi74fCM5GFA1XCkFPBnR2r1WOvWNmo9MNNUa1Wmp2A7hGj5khb2JP5nRFReznFt2HB8RW5onYO3NtLA91hW8iFj0UhFy8V%2B8oSPYLVtc8QQChhhiFvVRpUZQtpUAZBfAiDL8w%2Fqm8vgY6pgFXKEE0%2FxETlgOiSouSUv1773ExDADWZdfUNS1DTu1cN68nsKC%2BOb3v7apIbCU%2FmxEqvGMhtI8%2Fz%2FCpJS7g0HiF8Irq%2BIjnKW2DIkDwipNB4z4GklpGoJS8sa8MHSOmPCMxNiokGAymFKXZHaBnz%2FYBofcxV8VB%2B2%2FDSz1%2Fj9JVrEk21rbxuIuGBnECMcFMmRGmYgL9jRghv6yLFb5dZgq6ok8iKpbq&X-Amz-Signature=eba4552546b54ff180b58e26752526ff71718ebbb045e8c0d293f0dd5c67ba07&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWDUBIV3%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDk3hgkWEwbdRTrPp37Uo1LmC8TygWQauAjkX%2FXm2PrsAiA36etg591wUUXUZL8q1p6Q84fduyro%2BUuPD7Lr45uhbSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1rmxAnWF%2FUQx0rLXKtwDkTEpfrBMpMR%2BoFM1VbOmRcczhg5nb6wLDLlyg3zzG1eYNbMdKwZv1pGDFnL6Tv5YWMVWv5%2Bwo%2BR0VmeLY%2BnsTuxDGvErCmzfUBCFrOYUbmJnFnWd%2FbmIIIJ58pa0HQTx4sHjTNFKP5um9gay8SmVKKWj0hX7Uy2M6DbO44K9MLq7bfyLm7finWHFiAcNvfprAGY0FrrbMbYMyBJ6HIxauyRompbT5h8BkSTGCrjpaC%2FoW8BPJqgdmrA8yttjtvWO1e%2FpfrBcHjCpcpy%2F0afwrphupwpKxj2BBK50gyH%2FWfmC%2BH2YcudcMVT11MR9yJjKtZS83LELAxDJZJ6IzU0C3kfAiblFDHnvFL8QEboH6fbeAP5WRCcFQ3S7jVpXlZPXF86%2Bsteqba9MOqR5RMVU1uXCUZjSKy0U6VXDgp78s7fVckUI7mqJ6qA1o06uV84KFnaNbJqGMAXRcqfG5dPU9sV4oIo%2BdtagDbmR%2BGfiM%2FB%2Fm4XrUQ%2BqEVVOi74fCM5GFA1XCkFPBnR2r1WOvWNmo9MNNUa1Wmp2A7hGj5khb2JP5nRFReznFt2HB8RW5onYO3NtLA91hW8iFj0UhFy8V%2B8oSPYLVtc8QQChhhiFvVRpUZQtpUAZBfAiDL8w%2Fqm8vgY6pgFXKEE0%2FxETlgOiSouSUv1773ExDADWZdfUNS1DTu1cN68nsKC%2BOb3v7apIbCU%2FmxEqvGMhtI8%2Fz%2FCpJS7g0HiF8Irq%2BIjnKW2DIkDwipNB4z4GklpGoJS8sa8MHSOmPCMxNiokGAymFKXZHaBnz%2FYBofcxV8VB%2B2%2FDSz1%2Fj9JVrEk21rbxuIuGBnECMcFMmRGmYgL9jRghv6yLFb5dZgq6ok8iKpbq&X-Amz-Signature=2399446be1181300222293191f7601e17e579392fd7f68dfd727021a3e60c7c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWDUBIV3%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDk3hgkWEwbdRTrPp37Uo1LmC8TygWQauAjkX%2FXm2PrsAiA36etg591wUUXUZL8q1p6Q84fduyro%2BUuPD7Lr45uhbSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1rmxAnWF%2FUQx0rLXKtwDkTEpfrBMpMR%2BoFM1VbOmRcczhg5nb6wLDLlyg3zzG1eYNbMdKwZv1pGDFnL6Tv5YWMVWv5%2Bwo%2BR0VmeLY%2BnsTuxDGvErCmzfUBCFrOYUbmJnFnWd%2FbmIIIJ58pa0HQTx4sHjTNFKP5um9gay8SmVKKWj0hX7Uy2M6DbO44K9MLq7bfyLm7finWHFiAcNvfprAGY0FrrbMbYMyBJ6HIxauyRompbT5h8BkSTGCrjpaC%2FoW8BPJqgdmrA8yttjtvWO1e%2FpfrBcHjCpcpy%2F0afwrphupwpKxj2BBK50gyH%2FWfmC%2BH2YcudcMVT11MR9yJjKtZS83LELAxDJZJ6IzU0C3kfAiblFDHnvFL8QEboH6fbeAP5WRCcFQ3S7jVpXlZPXF86%2Bsteqba9MOqR5RMVU1uXCUZjSKy0U6VXDgp78s7fVckUI7mqJ6qA1o06uV84KFnaNbJqGMAXRcqfG5dPU9sV4oIo%2BdtagDbmR%2BGfiM%2FB%2Fm4XrUQ%2BqEVVOi74fCM5GFA1XCkFPBnR2r1WOvWNmo9MNNUa1Wmp2A7hGj5khb2JP5nRFReznFt2HB8RW5onYO3NtLA91hW8iFj0UhFy8V%2B8oSPYLVtc8QQChhhiFvVRpUZQtpUAZBfAiDL8w%2Fqm8vgY6pgFXKEE0%2FxETlgOiSouSUv1773ExDADWZdfUNS1DTu1cN68nsKC%2BOb3v7apIbCU%2FmxEqvGMhtI8%2Fz%2FCpJS7g0HiF8Irq%2BIjnKW2DIkDwipNB4z4GklpGoJS8sa8MHSOmPCMxNiokGAymFKXZHaBnz%2FYBofcxV8VB%2B2%2FDSz1%2Fj9JVrEk21rbxuIuGBnECMcFMmRGmYgL9jRghv6yLFb5dZgq6ok8iKpbq&X-Amz-Signature=957dbe9f24460a089b8a406f85d6285b28d0558f250b22b4396ad2dc0455d81d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWDUBIV3%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDk3hgkWEwbdRTrPp37Uo1LmC8TygWQauAjkX%2FXm2PrsAiA36etg591wUUXUZL8q1p6Q84fduyro%2BUuPD7Lr45uhbSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1rmxAnWF%2FUQx0rLXKtwDkTEpfrBMpMR%2BoFM1VbOmRcczhg5nb6wLDLlyg3zzG1eYNbMdKwZv1pGDFnL6Tv5YWMVWv5%2Bwo%2BR0VmeLY%2BnsTuxDGvErCmzfUBCFrOYUbmJnFnWd%2FbmIIIJ58pa0HQTx4sHjTNFKP5um9gay8SmVKKWj0hX7Uy2M6DbO44K9MLq7bfyLm7finWHFiAcNvfprAGY0FrrbMbYMyBJ6HIxauyRompbT5h8BkSTGCrjpaC%2FoW8BPJqgdmrA8yttjtvWO1e%2FpfrBcHjCpcpy%2F0afwrphupwpKxj2BBK50gyH%2FWfmC%2BH2YcudcMVT11MR9yJjKtZS83LELAxDJZJ6IzU0C3kfAiblFDHnvFL8QEboH6fbeAP5WRCcFQ3S7jVpXlZPXF86%2Bsteqba9MOqR5RMVU1uXCUZjSKy0U6VXDgp78s7fVckUI7mqJ6qA1o06uV84KFnaNbJqGMAXRcqfG5dPU9sV4oIo%2BdtagDbmR%2BGfiM%2FB%2Fm4XrUQ%2BqEVVOi74fCM5GFA1XCkFPBnR2r1WOvWNmo9MNNUa1Wmp2A7hGj5khb2JP5nRFReznFt2HB8RW5onYO3NtLA91hW8iFj0UhFy8V%2B8oSPYLVtc8QQChhhiFvVRpUZQtpUAZBfAiDL8w%2Fqm8vgY6pgFXKEE0%2FxETlgOiSouSUv1773ExDADWZdfUNS1DTu1cN68nsKC%2BOb3v7apIbCU%2FmxEqvGMhtI8%2Fz%2FCpJS7g0HiF8Irq%2BIjnKW2DIkDwipNB4z4GklpGoJS8sa8MHSOmPCMxNiokGAymFKXZHaBnz%2FYBofcxV8VB%2B2%2FDSz1%2Fj9JVrEk21rbxuIuGBnECMcFMmRGmYgL9jRghv6yLFb5dZgq6ok8iKpbq&X-Amz-Signature=bc63f580732fd066c50a0ae001911473d4032a1221647ed3daa2e15b868e2c50&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

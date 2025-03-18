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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U7N3PQY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZGl%2BpwfkGafYd6Xm75qDw1VxNd01IrWqXtRSA1PMjbQIhAPpi4GbLI31ugMehalcMtxlH3N2fhH5R0qdu%2B2w119mNKv8DCFgQABoMNjM3NDIzMTgzODA1IgxWEAxhpoLrvyds2MYq3APcyGlyzPI79Vm%2FgaFWvtWamgvq9mmHIr308OwQ8LxKQmVqyWfBOtXhow%2By48x7G5CUUsmvr%2BOj24FVgzrmN9%2FlVJrxPRckMA0KT8KMa3LE0jslaLx03afj2nW96Zark0gWCUhol5VgiMQwWgyPvxK4p39SFSAlc7b6T7jojqAdPiDMEHhjPMin%2FP0flQlTEZs5SODRarhcLoUROEAkCq45SP0hWeAM9dwAqg04s3aePEute9jLm3y2HJ4ylOXYZ4SZTKBewgktmU%2BMCh7pqoEOGQ7EM7ffMtYnXT4AMnBCp2ebkhOYTHie2h7NOddW6C6jM5keJv%2FIMzFClU07%2Bap6BHHehBgW2ZRR5CxKBrIoSOOtdbl%2B26XiB8XERpPiCwSZwsPRqiw3x82bbRndJJlM3nrzEsSempChPcTM1l30MwxNn5qkVGC6PINexAMB4HQxwRk9oNNxp%2BmEsh6TbNtooUmiNXf251NIniVUaj4SHwvA8IEAIdLomxt7P2GA1Yl%2FEMjWbUFCvVAS3pdmI42mELVofO6eP72LCnrbT04n6Bu6CPFunxwL0FYQP007By%2F%2B%2BvJRI4LyC3rqYtoKwqWnyxDtr17uZBzSrP%2BvNFr4SlMG3BwRSxVE6ukvITCjtuS%2BBjqkAfaAAMyKgUr7apRyuRUXLjmhG3Tayf3BR96FNmj1U%2FkEJjTIdBd61LP%2FFF6aRorgDhmZcnqG%2FHPuH4AeEKiwbwo4wkynGIb3yfT%2BT5deDVYhW1qKvIJ0Zt7f%2BTmUy%2B2godqNNPtC9ShVpoOK%2FFn0p1zq2ZiTQBhjL%2FgHJ5FirK2kYgvMslBviEhCLNLLfJEhLZpBosaZFD9t3xk3c73woVs4xg8I&X-Amz-Signature=09a2e457dc376357725dd8c74e2ccebed89eb1fe3d5777c15057f1634fae555b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U7N3PQY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZGl%2BpwfkGafYd6Xm75qDw1VxNd01IrWqXtRSA1PMjbQIhAPpi4GbLI31ugMehalcMtxlH3N2fhH5R0qdu%2B2w119mNKv8DCFgQABoMNjM3NDIzMTgzODA1IgxWEAxhpoLrvyds2MYq3APcyGlyzPI79Vm%2FgaFWvtWamgvq9mmHIr308OwQ8LxKQmVqyWfBOtXhow%2By48x7G5CUUsmvr%2BOj24FVgzrmN9%2FlVJrxPRckMA0KT8KMa3LE0jslaLx03afj2nW96Zark0gWCUhol5VgiMQwWgyPvxK4p39SFSAlc7b6T7jojqAdPiDMEHhjPMin%2FP0flQlTEZs5SODRarhcLoUROEAkCq45SP0hWeAM9dwAqg04s3aePEute9jLm3y2HJ4ylOXYZ4SZTKBewgktmU%2BMCh7pqoEOGQ7EM7ffMtYnXT4AMnBCp2ebkhOYTHie2h7NOddW6C6jM5keJv%2FIMzFClU07%2Bap6BHHehBgW2ZRR5CxKBrIoSOOtdbl%2B26XiB8XERpPiCwSZwsPRqiw3x82bbRndJJlM3nrzEsSempChPcTM1l30MwxNn5qkVGC6PINexAMB4HQxwRk9oNNxp%2BmEsh6TbNtooUmiNXf251NIniVUaj4SHwvA8IEAIdLomxt7P2GA1Yl%2FEMjWbUFCvVAS3pdmI42mELVofO6eP72LCnrbT04n6Bu6CPFunxwL0FYQP007By%2F%2B%2BvJRI4LyC3rqYtoKwqWnyxDtr17uZBzSrP%2BvNFr4SlMG3BwRSxVE6ukvITCjtuS%2BBjqkAfaAAMyKgUr7apRyuRUXLjmhG3Tayf3BR96FNmj1U%2FkEJjTIdBd61LP%2FFF6aRorgDhmZcnqG%2FHPuH4AeEKiwbwo4wkynGIb3yfT%2BT5deDVYhW1qKvIJ0Zt7f%2BTmUy%2B2godqNNPtC9ShVpoOK%2FFn0p1zq2ZiTQBhjL%2FgHJ5FirK2kYgvMslBviEhCLNLLfJEhLZpBosaZFD9t3xk3c73woVs4xg8I&X-Amz-Signature=b2ba6cfa30902dd628a336c786eeb092081eeacc43a86affa30bc9bba7e96c7a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U7N3PQY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZGl%2BpwfkGafYd6Xm75qDw1VxNd01IrWqXtRSA1PMjbQIhAPpi4GbLI31ugMehalcMtxlH3N2fhH5R0qdu%2B2w119mNKv8DCFgQABoMNjM3NDIzMTgzODA1IgxWEAxhpoLrvyds2MYq3APcyGlyzPI79Vm%2FgaFWvtWamgvq9mmHIr308OwQ8LxKQmVqyWfBOtXhow%2By48x7G5CUUsmvr%2BOj24FVgzrmN9%2FlVJrxPRckMA0KT8KMa3LE0jslaLx03afj2nW96Zark0gWCUhol5VgiMQwWgyPvxK4p39SFSAlc7b6T7jojqAdPiDMEHhjPMin%2FP0flQlTEZs5SODRarhcLoUROEAkCq45SP0hWeAM9dwAqg04s3aePEute9jLm3y2HJ4ylOXYZ4SZTKBewgktmU%2BMCh7pqoEOGQ7EM7ffMtYnXT4AMnBCp2ebkhOYTHie2h7NOddW6C6jM5keJv%2FIMzFClU07%2Bap6BHHehBgW2ZRR5CxKBrIoSOOtdbl%2B26XiB8XERpPiCwSZwsPRqiw3x82bbRndJJlM3nrzEsSempChPcTM1l30MwxNn5qkVGC6PINexAMB4HQxwRk9oNNxp%2BmEsh6TbNtooUmiNXf251NIniVUaj4SHwvA8IEAIdLomxt7P2GA1Yl%2FEMjWbUFCvVAS3pdmI42mELVofO6eP72LCnrbT04n6Bu6CPFunxwL0FYQP007By%2F%2B%2BvJRI4LyC3rqYtoKwqWnyxDtr17uZBzSrP%2BvNFr4SlMG3BwRSxVE6ukvITCjtuS%2BBjqkAfaAAMyKgUr7apRyuRUXLjmhG3Tayf3BR96FNmj1U%2FkEJjTIdBd61LP%2FFF6aRorgDhmZcnqG%2FHPuH4AeEKiwbwo4wkynGIb3yfT%2BT5deDVYhW1qKvIJ0Zt7f%2BTmUy%2B2godqNNPtC9ShVpoOK%2FFn0p1zq2ZiTQBhjL%2FgHJ5FirK2kYgvMslBviEhCLNLLfJEhLZpBosaZFD9t3xk3c73woVs4xg8I&X-Amz-Signature=848648ad1a64fd84d22072264df7bc1e17b090c0a973cf9541f95fbca2deaaac&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U7N3PQY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZGl%2BpwfkGafYd6Xm75qDw1VxNd01IrWqXtRSA1PMjbQIhAPpi4GbLI31ugMehalcMtxlH3N2fhH5R0qdu%2B2w119mNKv8DCFgQABoMNjM3NDIzMTgzODA1IgxWEAxhpoLrvyds2MYq3APcyGlyzPI79Vm%2FgaFWvtWamgvq9mmHIr308OwQ8LxKQmVqyWfBOtXhow%2By48x7G5CUUsmvr%2BOj24FVgzrmN9%2FlVJrxPRckMA0KT8KMa3LE0jslaLx03afj2nW96Zark0gWCUhol5VgiMQwWgyPvxK4p39SFSAlc7b6T7jojqAdPiDMEHhjPMin%2FP0flQlTEZs5SODRarhcLoUROEAkCq45SP0hWeAM9dwAqg04s3aePEute9jLm3y2HJ4ylOXYZ4SZTKBewgktmU%2BMCh7pqoEOGQ7EM7ffMtYnXT4AMnBCp2ebkhOYTHie2h7NOddW6C6jM5keJv%2FIMzFClU07%2Bap6BHHehBgW2ZRR5CxKBrIoSOOtdbl%2B26XiB8XERpPiCwSZwsPRqiw3x82bbRndJJlM3nrzEsSempChPcTM1l30MwxNn5qkVGC6PINexAMB4HQxwRk9oNNxp%2BmEsh6TbNtooUmiNXf251NIniVUaj4SHwvA8IEAIdLomxt7P2GA1Yl%2FEMjWbUFCvVAS3pdmI42mELVofO6eP72LCnrbT04n6Bu6CPFunxwL0FYQP007By%2F%2B%2BvJRI4LyC3rqYtoKwqWnyxDtr17uZBzSrP%2BvNFr4SlMG3BwRSxVE6ukvITCjtuS%2BBjqkAfaAAMyKgUr7apRyuRUXLjmhG3Tayf3BR96FNmj1U%2FkEJjTIdBd61LP%2FFF6aRorgDhmZcnqG%2FHPuH4AeEKiwbwo4wkynGIb3yfT%2BT5deDVYhW1qKvIJ0Zt7f%2BTmUy%2B2godqNNPtC9ShVpoOK%2FFn0p1zq2ZiTQBhjL%2FgHJ5FirK2kYgvMslBviEhCLNLLfJEhLZpBosaZFD9t3xk3c73woVs4xg8I&X-Amz-Signature=aac3524e31626c53c7d7705bad811a7892b1209ba5fab56eafd06a0b4688c0f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U7N3PQY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZGl%2BpwfkGafYd6Xm75qDw1VxNd01IrWqXtRSA1PMjbQIhAPpi4GbLI31ugMehalcMtxlH3N2fhH5R0qdu%2B2w119mNKv8DCFgQABoMNjM3NDIzMTgzODA1IgxWEAxhpoLrvyds2MYq3APcyGlyzPI79Vm%2FgaFWvtWamgvq9mmHIr308OwQ8LxKQmVqyWfBOtXhow%2By48x7G5CUUsmvr%2BOj24FVgzrmN9%2FlVJrxPRckMA0KT8KMa3LE0jslaLx03afj2nW96Zark0gWCUhol5VgiMQwWgyPvxK4p39SFSAlc7b6T7jojqAdPiDMEHhjPMin%2FP0flQlTEZs5SODRarhcLoUROEAkCq45SP0hWeAM9dwAqg04s3aePEute9jLm3y2HJ4ylOXYZ4SZTKBewgktmU%2BMCh7pqoEOGQ7EM7ffMtYnXT4AMnBCp2ebkhOYTHie2h7NOddW6C6jM5keJv%2FIMzFClU07%2Bap6BHHehBgW2ZRR5CxKBrIoSOOtdbl%2B26XiB8XERpPiCwSZwsPRqiw3x82bbRndJJlM3nrzEsSempChPcTM1l30MwxNn5qkVGC6PINexAMB4HQxwRk9oNNxp%2BmEsh6TbNtooUmiNXf251NIniVUaj4SHwvA8IEAIdLomxt7P2GA1Yl%2FEMjWbUFCvVAS3pdmI42mELVofO6eP72LCnrbT04n6Bu6CPFunxwL0FYQP007By%2F%2B%2BvJRI4LyC3rqYtoKwqWnyxDtr17uZBzSrP%2BvNFr4SlMG3BwRSxVE6ukvITCjtuS%2BBjqkAfaAAMyKgUr7apRyuRUXLjmhG3Tayf3BR96FNmj1U%2FkEJjTIdBd61LP%2FFF6aRorgDhmZcnqG%2FHPuH4AeEKiwbwo4wkynGIb3yfT%2BT5deDVYhW1qKvIJ0Zt7f%2BTmUy%2B2godqNNPtC9ShVpoOK%2FFn0p1zq2ZiTQBhjL%2FgHJ5FirK2kYgvMslBviEhCLNLLfJEhLZpBosaZFD9t3xk3c73woVs4xg8I&X-Amz-Signature=faf35a7a63724cd0095f9c988106f193847151163a040e7060b8488f7e22ec16&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

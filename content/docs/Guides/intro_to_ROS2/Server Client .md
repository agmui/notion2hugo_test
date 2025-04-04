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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5724BB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwMTGAryE885uTEBa78nVhlgDusAzf9rd4C5ONnSdN3AIhAL4cZY1ywku%2FAWoYkcbZ6ydcHrxMOGQu20Nixu3UL6dKKv8DCB0QABoMNjM3NDIzMTgzODA1IgwWJtsUGvBdlqYCEfkq3AOqtrr%2FR9U%2BJK4j4NkEs6tMdM8nw0kNJaIz89PtYTiOpT5AXb9cAl%2F3%2Bpr9fsF9Ia1ofUX6Cm7LSNSNbJe0KIKesOH4%2FElApm5jwgp7OIGV1%2BskZUrph3lXmysGcWbcrXRs3mUHmz2UDlRUmDGLhnLDF%2Fc9voN1mlfKL4LFSLFJgRiqwS2JT6XMHwF%2BPjexZOyp6aq9qjoGpH%2BuB2d7Wob9wSJAL1Hk6%2FznZEupBo3vI3vMYmhQRhJBBa5ELlOAhpkqG4xkZcNg%2FSNiBVYSFBTY%2B1%2Bh8vHm3z%2BNz5WNhcB%2F%2FZL0xfS3pMYT3sTKcroyIp%2FvCIFT77kxyzsnid4T5azodv%2Fgd3AIeXVq12ztuGwHOSO78pLcRmJYDMXfsCyd%2FQyhDzacRJrEitCE8mrluU6CsiTcNf3VSdmAr%2Bs04CVNOvlC%2FZR%2FTDs3RuoUznO35ZOGm3NPr2fi0m61aBSsuFo8o1o9mtFVimu1DtoaRzuXWnTPuCAVf%2B7EOYey9JQZBbgDQ1KW5UAkDoWTGp%2Bhyxjlam3dmT5qc%2BKCEhCWuxXxyeEeYMdmZJ5KpYihOZDpURXoXjfeA2vPZVYUOuhE69HKzRA375pOhl6MoOKRwkqHbrvsq4KJ61WLbZWGTzCB7sC%2FBjqkAdJsuSZiuRb5xjAcyKmYecZKSb97jLReFI8ugqHEpNkOxV%2BbVRgLM3mimyzVkshsbV7ymGF%2BGcERiP75OfkR%2F7EmRt0AUOcpmtTLzzg6NHfWJ4UxYsln9KsRkIgeA8Lhp4Z6UOIGzn80UkwQPjWtOvF%2BiW9hRBkPEoRbHUU1mxL1fKs51FpnMNFt6zJJsBzV7drHPX6buJEUmAIOXBth4SN51gYH&X-Amz-Signature=322d02e8efe72bd0f974b9828ca1033fb28453e742018d83240bcbc132fd7270&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5724BB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwMTGAryE885uTEBa78nVhlgDusAzf9rd4C5ONnSdN3AIhAL4cZY1ywku%2FAWoYkcbZ6ydcHrxMOGQu20Nixu3UL6dKKv8DCB0QABoMNjM3NDIzMTgzODA1IgwWJtsUGvBdlqYCEfkq3AOqtrr%2FR9U%2BJK4j4NkEs6tMdM8nw0kNJaIz89PtYTiOpT5AXb9cAl%2F3%2Bpr9fsF9Ia1ofUX6Cm7LSNSNbJe0KIKesOH4%2FElApm5jwgp7OIGV1%2BskZUrph3lXmysGcWbcrXRs3mUHmz2UDlRUmDGLhnLDF%2Fc9voN1mlfKL4LFSLFJgRiqwS2JT6XMHwF%2BPjexZOyp6aq9qjoGpH%2BuB2d7Wob9wSJAL1Hk6%2FznZEupBo3vI3vMYmhQRhJBBa5ELlOAhpkqG4xkZcNg%2FSNiBVYSFBTY%2B1%2Bh8vHm3z%2BNz5WNhcB%2F%2FZL0xfS3pMYT3sTKcroyIp%2FvCIFT77kxyzsnid4T5azodv%2Fgd3AIeXVq12ztuGwHOSO78pLcRmJYDMXfsCyd%2FQyhDzacRJrEitCE8mrluU6CsiTcNf3VSdmAr%2Bs04CVNOvlC%2FZR%2FTDs3RuoUznO35ZOGm3NPr2fi0m61aBSsuFo8o1o9mtFVimu1DtoaRzuXWnTPuCAVf%2B7EOYey9JQZBbgDQ1KW5UAkDoWTGp%2Bhyxjlam3dmT5qc%2BKCEhCWuxXxyeEeYMdmZJ5KpYihOZDpURXoXjfeA2vPZVYUOuhE69HKzRA375pOhl6MoOKRwkqHbrvsq4KJ61WLbZWGTzCB7sC%2FBjqkAdJsuSZiuRb5xjAcyKmYecZKSb97jLReFI8ugqHEpNkOxV%2BbVRgLM3mimyzVkshsbV7ymGF%2BGcERiP75OfkR%2F7EmRt0AUOcpmtTLzzg6NHfWJ4UxYsln9KsRkIgeA8Lhp4Z6UOIGzn80UkwQPjWtOvF%2BiW9hRBkPEoRbHUU1mxL1fKs51FpnMNFt6zJJsBzV7drHPX6buJEUmAIOXBth4SN51gYH&X-Amz-Signature=0e637bd365086f61b1bba9fd10d8d9c2e5097dfbb5c2123843d6d474bba2c266&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5724BB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwMTGAryE885uTEBa78nVhlgDusAzf9rd4C5ONnSdN3AIhAL4cZY1ywku%2FAWoYkcbZ6ydcHrxMOGQu20Nixu3UL6dKKv8DCB0QABoMNjM3NDIzMTgzODA1IgwWJtsUGvBdlqYCEfkq3AOqtrr%2FR9U%2BJK4j4NkEs6tMdM8nw0kNJaIz89PtYTiOpT5AXb9cAl%2F3%2Bpr9fsF9Ia1ofUX6Cm7LSNSNbJe0KIKesOH4%2FElApm5jwgp7OIGV1%2BskZUrph3lXmysGcWbcrXRs3mUHmz2UDlRUmDGLhnLDF%2Fc9voN1mlfKL4LFSLFJgRiqwS2JT6XMHwF%2BPjexZOyp6aq9qjoGpH%2BuB2d7Wob9wSJAL1Hk6%2FznZEupBo3vI3vMYmhQRhJBBa5ELlOAhpkqG4xkZcNg%2FSNiBVYSFBTY%2B1%2Bh8vHm3z%2BNz5WNhcB%2F%2FZL0xfS3pMYT3sTKcroyIp%2FvCIFT77kxyzsnid4T5azodv%2Fgd3AIeXVq12ztuGwHOSO78pLcRmJYDMXfsCyd%2FQyhDzacRJrEitCE8mrluU6CsiTcNf3VSdmAr%2Bs04CVNOvlC%2FZR%2FTDs3RuoUznO35ZOGm3NPr2fi0m61aBSsuFo8o1o9mtFVimu1DtoaRzuXWnTPuCAVf%2B7EOYey9JQZBbgDQ1KW5UAkDoWTGp%2Bhyxjlam3dmT5qc%2BKCEhCWuxXxyeEeYMdmZJ5KpYihOZDpURXoXjfeA2vPZVYUOuhE69HKzRA375pOhl6MoOKRwkqHbrvsq4KJ61WLbZWGTzCB7sC%2FBjqkAdJsuSZiuRb5xjAcyKmYecZKSb97jLReFI8ugqHEpNkOxV%2BbVRgLM3mimyzVkshsbV7ymGF%2BGcERiP75OfkR%2F7EmRt0AUOcpmtTLzzg6NHfWJ4UxYsln9KsRkIgeA8Lhp4Z6UOIGzn80UkwQPjWtOvF%2BiW9hRBkPEoRbHUU1mxL1fKs51FpnMNFt6zJJsBzV7drHPX6buJEUmAIOXBth4SN51gYH&X-Amz-Signature=aa29bab1f00d688eef6a7461520ec9f87ceed01a9ed5dd6104817a3083fc7a80&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5724BB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwMTGAryE885uTEBa78nVhlgDusAzf9rd4C5ONnSdN3AIhAL4cZY1ywku%2FAWoYkcbZ6ydcHrxMOGQu20Nixu3UL6dKKv8DCB0QABoMNjM3NDIzMTgzODA1IgwWJtsUGvBdlqYCEfkq3AOqtrr%2FR9U%2BJK4j4NkEs6tMdM8nw0kNJaIz89PtYTiOpT5AXb9cAl%2F3%2Bpr9fsF9Ia1ofUX6Cm7LSNSNbJe0KIKesOH4%2FElApm5jwgp7OIGV1%2BskZUrph3lXmysGcWbcrXRs3mUHmz2UDlRUmDGLhnLDF%2Fc9voN1mlfKL4LFSLFJgRiqwS2JT6XMHwF%2BPjexZOyp6aq9qjoGpH%2BuB2d7Wob9wSJAL1Hk6%2FznZEupBo3vI3vMYmhQRhJBBa5ELlOAhpkqG4xkZcNg%2FSNiBVYSFBTY%2B1%2Bh8vHm3z%2BNz5WNhcB%2F%2FZL0xfS3pMYT3sTKcroyIp%2FvCIFT77kxyzsnid4T5azodv%2Fgd3AIeXVq12ztuGwHOSO78pLcRmJYDMXfsCyd%2FQyhDzacRJrEitCE8mrluU6CsiTcNf3VSdmAr%2Bs04CVNOvlC%2FZR%2FTDs3RuoUznO35ZOGm3NPr2fi0m61aBSsuFo8o1o9mtFVimu1DtoaRzuXWnTPuCAVf%2B7EOYey9JQZBbgDQ1KW5UAkDoWTGp%2Bhyxjlam3dmT5qc%2BKCEhCWuxXxyeEeYMdmZJ5KpYihOZDpURXoXjfeA2vPZVYUOuhE69HKzRA375pOhl6MoOKRwkqHbrvsq4KJ61WLbZWGTzCB7sC%2FBjqkAdJsuSZiuRb5xjAcyKmYecZKSb97jLReFI8ugqHEpNkOxV%2BbVRgLM3mimyzVkshsbV7ymGF%2BGcERiP75OfkR%2F7EmRt0AUOcpmtTLzzg6NHfWJ4UxYsln9KsRkIgeA8Lhp4Z6UOIGzn80UkwQPjWtOvF%2BiW9hRBkPEoRbHUU1mxL1fKs51FpnMNFt6zJJsBzV7drHPX6buJEUmAIOXBth4SN51gYH&X-Amz-Signature=d1b8a871d8fc2a31ba2f9ae96cf1246f326e0678225d4081605fc71101228d47&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5724BB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwMTGAryE885uTEBa78nVhlgDusAzf9rd4C5ONnSdN3AIhAL4cZY1ywku%2FAWoYkcbZ6ydcHrxMOGQu20Nixu3UL6dKKv8DCB0QABoMNjM3NDIzMTgzODA1IgwWJtsUGvBdlqYCEfkq3AOqtrr%2FR9U%2BJK4j4NkEs6tMdM8nw0kNJaIz89PtYTiOpT5AXb9cAl%2F3%2Bpr9fsF9Ia1ofUX6Cm7LSNSNbJe0KIKesOH4%2FElApm5jwgp7OIGV1%2BskZUrph3lXmysGcWbcrXRs3mUHmz2UDlRUmDGLhnLDF%2Fc9voN1mlfKL4LFSLFJgRiqwS2JT6XMHwF%2BPjexZOyp6aq9qjoGpH%2BuB2d7Wob9wSJAL1Hk6%2FznZEupBo3vI3vMYmhQRhJBBa5ELlOAhpkqG4xkZcNg%2FSNiBVYSFBTY%2B1%2Bh8vHm3z%2BNz5WNhcB%2F%2FZL0xfS3pMYT3sTKcroyIp%2FvCIFT77kxyzsnid4T5azodv%2Fgd3AIeXVq12ztuGwHOSO78pLcRmJYDMXfsCyd%2FQyhDzacRJrEitCE8mrluU6CsiTcNf3VSdmAr%2Bs04CVNOvlC%2FZR%2FTDs3RuoUznO35ZOGm3NPr2fi0m61aBSsuFo8o1o9mtFVimu1DtoaRzuXWnTPuCAVf%2B7EOYey9JQZBbgDQ1KW5UAkDoWTGp%2Bhyxjlam3dmT5qc%2BKCEhCWuxXxyeEeYMdmZJ5KpYihOZDpURXoXjfeA2vPZVYUOuhE69HKzRA375pOhl6MoOKRwkqHbrvsq4KJ61WLbZWGTzCB7sC%2FBjqkAdJsuSZiuRb5xjAcyKmYecZKSb97jLReFI8ugqHEpNkOxV%2BbVRgLM3mimyzVkshsbV7ymGF%2BGcERiP75OfkR%2F7EmRt0AUOcpmtTLzzg6NHfWJ4UxYsln9KsRkIgeA8Lhp4Z6UOIGzn80UkwQPjWtOvF%2BiW9hRBkPEoRbHUU1mxL1fKs51FpnMNFt6zJJsBzV7drHPX6buJEUmAIOXBth4SN51gYH&X-Amz-Signature=fb7d9978039941d25ff1001779fd8c81bc780d867666d2d70dd19cab2c0a4ef8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

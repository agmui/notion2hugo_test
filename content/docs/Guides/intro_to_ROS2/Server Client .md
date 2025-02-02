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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466227WCYQG%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACHUA8n2BZ0Lw3KikaGTAohHJySVLON30IYnzXizUKUAiAt1lsRditN6NfXjDmoNtsTiz8pEZ1t6PiDga%2F%2F0dvqjCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaYW%2BRezBvGWtyyaOKtwDoR3j68%2BNBvBBRTa6WB6XGP3D9TeFx%2FN4h3PyJYOOHyI88kJyBcoR%2BUP9CRDA%2BpXm%2BrgLuSsakVsPPu3719GJpjW9%2B0VeA%2FF9HpUD48DdWSFWMjY3g4DHp%2BqxgGedYv1odSkLhnu5K964jeVNSaR7LWu8K2sjbHmhEOy88fQ%2FqmrmBwH%2BPNgVp79vrxVXActT%2FmDTwbBMYPTZJb6yJvUn1HQxUA%2B5r%2BabNyQnzenzqOtsimUCq8bRgt8djPfeOYfJiCol%2FXQ0Fy5kcu260G1oHhont9mBQAeSYuq6BDpdfVPaD956bl3Ctt9TBPL40TVhiX2WgnV2ZI2P6IRHWTqw6806VG2%2FCXC5x6WX0yML7hOo8gcr48wmybyOa81w1gLMCw%2ByF3Ts8skaoBFMvStCN2XGwUN96Ual6%2FRmJg4N%2FEfvXaEyoGpFT537xzn6ECiMbTfrJn%2BWCZuMYH9i9cxDbHbmL9IOf7OJdp97r2ggZTpP4MNZR8CrLBW%2BU0oPl0NxtHzOCuvf92EbnG0NOmizFc5bBtFQXlXC%2FsCxlgEXkF0kUrJKpgiih16Y8YmAR3i5hCmmFTBDiwZAC91tvfszEceTvjx0feZgMicj%2Bs57meAEns80enR119D%2BKRIwz8H9vAY6pgFSwBUBcldXGZCoojlrOfWVUZMiXfSR5HOvYJphhI5Xvye5H3aOtIRgGrlhPoIO1blkT%2Fddimzi6mBNIXrvnnBU3bWBP9jY8k5b0lDtuCrk6WVGm%2BqyowQCT156CKxGN9EfJPHVukldVp6aeJkaYlINem6ZL818UZfp8yTT6wxmDvATLt3iIjeb%2FRPDv9lBGvgD8IV9%2F0ENm31w%2BB%2BW62HP6KoEAFD7&X-Amz-Signature=df7d7a93512414a92d23225b4f71421e540043ce2caf702596acc82acfe85526&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466227WCYQG%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACHUA8n2BZ0Lw3KikaGTAohHJySVLON30IYnzXizUKUAiAt1lsRditN6NfXjDmoNtsTiz8pEZ1t6PiDga%2F%2F0dvqjCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaYW%2BRezBvGWtyyaOKtwDoR3j68%2BNBvBBRTa6WB6XGP3D9TeFx%2FN4h3PyJYOOHyI88kJyBcoR%2BUP9CRDA%2BpXm%2BrgLuSsakVsPPu3719GJpjW9%2B0VeA%2FF9HpUD48DdWSFWMjY3g4DHp%2BqxgGedYv1odSkLhnu5K964jeVNSaR7LWu8K2sjbHmhEOy88fQ%2FqmrmBwH%2BPNgVp79vrxVXActT%2FmDTwbBMYPTZJb6yJvUn1HQxUA%2B5r%2BabNyQnzenzqOtsimUCq8bRgt8djPfeOYfJiCol%2FXQ0Fy5kcu260G1oHhont9mBQAeSYuq6BDpdfVPaD956bl3Ctt9TBPL40TVhiX2WgnV2ZI2P6IRHWTqw6806VG2%2FCXC5x6WX0yML7hOo8gcr48wmybyOa81w1gLMCw%2ByF3Ts8skaoBFMvStCN2XGwUN96Ual6%2FRmJg4N%2FEfvXaEyoGpFT537xzn6ECiMbTfrJn%2BWCZuMYH9i9cxDbHbmL9IOf7OJdp97r2ggZTpP4MNZR8CrLBW%2BU0oPl0NxtHzOCuvf92EbnG0NOmizFc5bBtFQXlXC%2FsCxlgEXkF0kUrJKpgiih16Y8YmAR3i5hCmmFTBDiwZAC91tvfszEceTvjx0feZgMicj%2Bs57meAEns80enR119D%2BKRIwz8H9vAY6pgFSwBUBcldXGZCoojlrOfWVUZMiXfSR5HOvYJphhI5Xvye5H3aOtIRgGrlhPoIO1blkT%2Fddimzi6mBNIXrvnnBU3bWBP9jY8k5b0lDtuCrk6WVGm%2BqyowQCT156CKxGN9EfJPHVukldVp6aeJkaYlINem6ZL818UZfp8yTT6wxmDvATLt3iIjeb%2FRPDv9lBGvgD8IV9%2F0ENm31w%2BB%2BW62HP6KoEAFD7&X-Amz-Signature=172e6eb2e511a18759a7b19308e228a65635f8a2e1ae713242bf080d860a3341&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466227WCYQG%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACHUA8n2BZ0Lw3KikaGTAohHJySVLON30IYnzXizUKUAiAt1lsRditN6NfXjDmoNtsTiz8pEZ1t6PiDga%2F%2F0dvqjCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaYW%2BRezBvGWtyyaOKtwDoR3j68%2BNBvBBRTa6WB6XGP3D9TeFx%2FN4h3PyJYOOHyI88kJyBcoR%2BUP9CRDA%2BpXm%2BrgLuSsakVsPPu3719GJpjW9%2B0VeA%2FF9HpUD48DdWSFWMjY3g4DHp%2BqxgGedYv1odSkLhnu5K964jeVNSaR7LWu8K2sjbHmhEOy88fQ%2FqmrmBwH%2BPNgVp79vrxVXActT%2FmDTwbBMYPTZJb6yJvUn1HQxUA%2B5r%2BabNyQnzenzqOtsimUCq8bRgt8djPfeOYfJiCol%2FXQ0Fy5kcu260G1oHhont9mBQAeSYuq6BDpdfVPaD956bl3Ctt9TBPL40TVhiX2WgnV2ZI2P6IRHWTqw6806VG2%2FCXC5x6WX0yML7hOo8gcr48wmybyOa81w1gLMCw%2ByF3Ts8skaoBFMvStCN2XGwUN96Ual6%2FRmJg4N%2FEfvXaEyoGpFT537xzn6ECiMbTfrJn%2BWCZuMYH9i9cxDbHbmL9IOf7OJdp97r2ggZTpP4MNZR8CrLBW%2BU0oPl0NxtHzOCuvf92EbnG0NOmizFc5bBtFQXlXC%2FsCxlgEXkF0kUrJKpgiih16Y8YmAR3i5hCmmFTBDiwZAC91tvfszEceTvjx0feZgMicj%2Bs57meAEns80enR119D%2BKRIwz8H9vAY6pgFSwBUBcldXGZCoojlrOfWVUZMiXfSR5HOvYJphhI5Xvye5H3aOtIRgGrlhPoIO1blkT%2Fddimzi6mBNIXrvnnBU3bWBP9jY8k5b0lDtuCrk6WVGm%2BqyowQCT156CKxGN9EfJPHVukldVp6aeJkaYlINem6ZL818UZfp8yTT6wxmDvATLt3iIjeb%2FRPDv9lBGvgD8IV9%2F0ENm31w%2BB%2BW62HP6KoEAFD7&X-Amz-Signature=a05aec3c8b794a2faeebaddd1e9e4babf11d1de40e32b5bfff3460ea360e47d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466227WCYQG%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACHUA8n2BZ0Lw3KikaGTAohHJySVLON30IYnzXizUKUAiAt1lsRditN6NfXjDmoNtsTiz8pEZ1t6PiDga%2F%2F0dvqjCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaYW%2BRezBvGWtyyaOKtwDoR3j68%2BNBvBBRTa6WB6XGP3D9TeFx%2FN4h3PyJYOOHyI88kJyBcoR%2BUP9CRDA%2BpXm%2BrgLuSsakVsPPu3719GJpjW9%2B0VeA%2FF9HpUD48DdWSFWMjY3g4DHp%2BqxgGedYv1odSkLhnu5K964jeVNSaR7LWu8K2sjbHmhEOy88fQ%2FqmrmBwH%2BPNgVp79vrxVXActT%2FmDTwbBMYPTZJb6yJvUn1HQxUA%2B5r%2BabNyQnzenzqOtsimUCq8bRgt8djPfeOYfJiCol%2FXQ0Fy5kcu260G1oHhont9mBQAeSYuq6BDpdfVPaD956bl3Ctt9TBPL40TVhiX2WgnV2ZI2P6IRHWTqw6806VG2%2FCXC5x6WX0yML7hOo8gcr48wmybyOa81w1gLMCw%2ByF3Ts8skaoBFMvStCN2XGwUN96Ual6%2FRmJg4N%2FEfvXaEyoGpFT537xzn6ECiMbTfrJn%2BWCZuMYH9i9cxDbHbmL9IOf7OJdp97r2ggZTpP4MNZR8CrLBW%2BU0oPl0NxtHzOCuvf92EbnG0NOmizFc5bBtFQXlXC%2FsCxlgEXkF0kUrJKpgiih16Y8YmAR3i5hCmmFTBDiwZAC91tvfszEceTvjx0feZgMicj%2Bs57meAEns80enR119D%2BKRIwz8H9vAY6pgFSwBUBcldXGZCoojlrOfWVUZMiXfSR5HOvYJphhI5Xvye5H3aOtIRgGrlhPoIO1blkT%2Fddimzi6mBNIXrvnnBU3bWBP9jY8k5b0lDtuCrk6WVGm%2BqyowQCT156CKxGN9EfJPHVukldVp6aeJkaYlINem6ZL818UZfp8yTT6wxmDvATLt3iIjeb%2FRPDv9lBGvgD8IV9%2F0ENm31w%2BB%2BW62HP6KoEAFD7&X-Amz-Signature=e821dc07096f08d0a37b359f92e02a3cbe58d0380814d346e3f59f1521123c7a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466227WCYQG%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACHUA8n2BZ0Lw3KikaGTAohHJySVLON30IYnzXizUKUAiAt1lsRditN6NfXjDmoNtsTiz8pEZ1t6PiDga%2F%2F0dvqjCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaYW%2BRezBvGWtyyaOKtwDoR3j68%2BNBvBBRTa6WB6XGP3D9TeFx%2FN4h3PyJYOOHyI88kJyBcoR%2BUP9CRDA%2BpXm%2BrgLuSsakVsPPu3719GJpjW9%2B0VeA%2FF9HpUD48DdWSFWMjY3g4DHp%2BqxgGedYv1odSkLhnu5K964jeVNSaR7LWu8K2sjbHmhEOy88fQ%2FqmrmBwH%2BPNgVp79vrxVXActT%2FmDTwbBMYPTZJb6yJvUn1HQxUA%2B5r%2BabNyQnzenzqOtsimUCq8bRgt8djPfeOYfJiCol%2FXQ0Fy5kcu260G1oHhont9mBQAeSYuq6BDpdfVPaD956bl3Ctt9TBPL40TVhiX2WgnV2ZI2P6IRHWTqw6806VG2%2FCXC5x6WX0yML7hOo8gcr48wmybyOa81w1gLMCw%2ByF3Ts8skaoBFMvStCN2XGwUN96Ual6%2FRmJg4N%2FEfvXaEyoGpFT537xzn6ECiMbTfrJn%2BWCZuMYH9i9cxDbHbmL9IOf7OJdp97r2ggZTpP4MNZR8CrLBW%2BU0oPl0NxtHzOCuvf92EbnG0NOmizFc5bBtFQXlXC%2FsCxlgEXkF0kUrJKpgiih16Y8YmAR3i5hCmmFTBDiwZAC91tvfszEceTvjx0feZgMicj%2Bs57meAEns80enR119D%2BKRIwz8H9vAY6pgFSwBUBcldXGZCoojlrOfWVUZMiXfSR5HOvYJphhI5Xvye5H3aOtIRgGrlhPoIO1blkT%2Fddimzi6mBNIXrvnnBU3bWBP9jY8k5b0lDtuCrk6WVGm%2BqyowQCT156CKxGN9EfJPHVukldVp6aeJkaYlINem6ZL818UZfp8yTT6wxmDvATLt3iIjeb%2FRPDv9lBGvgD8IV9%2F0ENm31w%2BB%2BW62HP6KoEAFD7&X-Amz-Signature=cc50a14ee49f4b07eb295381ed3e232ffecf62bbbd1939828589928e8e2836a2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

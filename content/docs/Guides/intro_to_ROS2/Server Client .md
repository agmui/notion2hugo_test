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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROJEBEUQ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEuYDB85gsRkyc%2Faqt%2Fk1SOTxijF%2FL354zncRiavo4DAIgeLOZ8Q0sfTHOcK5uuMEiVTrS4jTXmu5MpBX3o1ATIYUq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJbFTf0mFW0PWrU5tCrcAwY%2FVGMGlkmAxnGNRJf%2B9IY5S0XCOgHT46HmFvaWW%2FRFSiYEkwcBn8%2Bvy9KlT80u4ne%2FJTOQdxeDnuH%2BQvnBhbet1kM2cjmspaJHh%2FchwB5QVIi7ulPrIe05XIx0M%2Bw3iPUWBR0WBWDToGcRtYjiE6Y8WnOdrHzXl3jwgOichiTZoq5l%2Fc50v8ivgmyfharkuHqqTczYK4AFY44L3ovVIq949cpfT1yv4qt2ROuFjFk0CJWBdGvriTIuAWq1g2dd1XDzlyKQIzP55UNoKkm8Z3Oaxv8VrmF0ptJLKH0JNoX9lYmykL%2FN50NURKb%2FXf34eGlo8KFsOFyUnPKjfOlaroe1%2BN78GO%2BV0Ec6zorlKLxv4EgeoMpGQkxRbEqRf0DJ1R3453Y4zv0ucwuuJT4KSzsHRAOpt9bRjmbl1bgY149c9QOkhZz6g%2FMV8w4N5ky60LE%2FVPTsxvfq5fumfv2PAxiB8YSawZeB8qsPvi9oahu9rtllYOp3q2xuxuhlADR55%2FNiT4ve3syk9Fz9QnlsDr7zQO7S4afEZNPPHUZjrakc%2F0K5hG7M34Ki%2FgWQnYprbXXTYiT9NlofIK01wmez736sBx%2FLEoZRw9kWvnI6MGKFO5X4KSjPvIFrMcc4MLi3ob4GOqUBYm%2B83h0TVeAWSj0F%2Faa%2BSNc47V3Basen5AtexfopkYlIyxcbJaVqqsPjODM%2FYs6QeJKYKnTsvxrgP1EEbe6oZEuEKNBaiKsiGorbXgoG5e%2Btgjc%2BSSWBB17Mzswqyi50hFun8DjnyRQqVezytnrt%2B1oHhlocN2sqWl4d6fhjxZW5%2BM9cM%2BgUl4Q%2BYF34IuJHeJvYy2C77X2P33Kbo70syrg2yHWF&X-Amz-Signature=78b06ea89d0e9137a4a40442133bcf982f88e7124d20a9ddd698a85be12c9420&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROJEBEUQ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEuYDB85gsRkyc%2Faqt%2Fk1SOTxijF%2FL354zncRiavo4DAIgeLOZ8Q0sfTHOcK5uuMEiVTrS4jTXmu5MpBX3o1ATIYUq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJbFTf0mFW0PWrU5tCrcAwY%2FVGMGlkmAxnGNRJf%2B9IY5S0XCOgHT46HmFvaWW%2FRFSiYEkwcBn8%2Bvy9KlT80u4ne%2FJTOQdxeDnuH%2BQvnBhbet1kM2cjmspaJHh%2FchwB5QVIi7ulPrIe05XIx0M%2Bw3iPUWBR0WBWDToGcRtYjiE6Y8WnOdrHzXl3jwgOichiTZoq5l%2Fc50v8ivgmyfharkuHqqTczYK4AFY44L3ovVIq949cpfT1yv4qt2ROuFjFk0CJWBdGvriTIuAWq1g2dd1XDzlyKQIzP55UNoKkm8Z3Oaxv8VrmF0ptJLKH0JNoX9lYmykL%2FN50NURKb%2FXf34eGlo8KFsOFyUnPKjfOlaroe1%2BN78GO%2BV0Ec6zorlKLxv4EgeoMpGQkxRbEqRf0DJ1R3453Y4zv0ucwuuJT4KSzsHRAOpt9bRjmbl1bgY149c9QOkhZz6g%2FMV8w4N5ky60LE%2FVPTsxvfq5fumfv2PAxiB8YSawZeB8qsPvi9oahu9rtllYOp3q2xuxuhlADR55%2FNiT4ve3syk9Fz9QnlsDr7zQO7S4afEZNPPHUZjrakc%2F0K5hG7M34Ki%2FgWQnYprbXXTYiT9NlofIK01wmez736sBx%2FLEoZRw9kWvnI6MGKFO5X4KSjPvIFrMcc4MLi3ob4GOqUBYm%2B83h0TVeAWSj0F%2Faa%2BSNc47V3Basen5AtexfopkYlIyxcbJaVqqsPjODM%2FYs6QeJKYKnTsvxrgP1EEbe6oZEuEKNBaiKsiGorbXgoG5e%2Btgjc%2BSSWBB17Mzswqyi50hFun8DjnyRQqVezytnrt%2B1oHhlocN2sqWl4d6fhjxZW5%2BM9cM%2BgUl4Q%2BYF34IuJHeJvYy2C77X2P33Kbo70syrg2yHWF&X-Amz-Signature=a81c4fdc33728189b3636cea86106fa2c3fc6a98eeea8fcc0f23b341435e0862&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROJEBEUQ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEuYDB85gsRkyc%2Faqt%2Fk1SOTxijF%2FL354zncRiavo4DAIgeLOZ8Q0sfTHOcK5uuMEiVTrS4jTXmu5MpBX3o1ATIYUq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJbFTf0mFW0PWrU5tCrcAwY%2FVGMGlkmAxnGNRJf%2B9IY5S0XCOgHT46HmFvaWW%2FRFSiYEkwcBn8%2Bvy9KlT80u4ne%2FJTOQdxeDnuH%2BQvnBhbet1kM2cjmspaJHh%2FchwB5QVIi7ulPrIe05XIx0M%2Bw3iPUWBR0WBWDToGcRtYjiE6Y8WnOdrHzXl3jwgOichiTZoq5l%2Fc50v8ivgmyfharkuHqqTczYK4AFY44L3ovVIq949cpfT1yv4qt2ROuFjFk0CJWBdGvriTIuAWq1g2dd1XDzlyKQIzP55UNoKkm8Z3Oaxv8VrmF0ptJLKH0JNoX9lYmykL%2FN50NURKb%2FXf34eGlo8KFsOFyUnPKjfOlaroe1%2BN78GO%2BV0Ec6zorlKLxv4EgeoMpGQkxRbEqRf0DJ1R3453Y4zv0ucwuuJT4KSzsHRAOpt9bRjmbl1bgY149c9QOkhZz6g%2FMV8w4N5ky60LE%2FVPTsxvfq5fumfv2PAxiB8YSawZeB8qsPvi9oahu9rtllYOp3q2xuxuhlADR55%2FNiT4ve3syk9Fz9QnlsDr7zQO7S4afEZNPPHUZjrakc%2F0K5hG7M34Ki%2FgWQnYprbXXTYiT9NlofIK01wmez736sBx%2FLEoZRw9kWvnI6MGKFO5X4KSjPvIFrMcc4MLi3ob4GOqUBYm%2B83h0TVeAWSj0F%2Faa%2BSNc47V3Basen5AtexfopkYlIyxcbJaVqqsPjODM%2FYs6QeJKYKnTsvxrgP1EEbe6oZEuEKNBaiKsiGorbXgoG5e%2Btgjc%2BSSWBB17Mzswqyi50hFun8DjnyRQqVezytnrt%2B1oHhlocN2sqWl4d6fhjxZW5%2BM9cM%2BgUl4Q%2BYF34IuJHeJvYy2C77X2P33Kbo70syrg2yHWF&X-Amz-Signature=946b044b0913202990a1497e03df5c97b86e7799a335716c8f18f048625a82ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROJEBEUQ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEuYDB85gsRkyc%2Faqt%2Fk1SOTxijF%2FL354zncRiavo4DAIgeLOZ8Q0sfTHOcK5uuMEiVTrS4jTXmu5MpBX3o1ATIYUq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJbFTf0mFW0PWrU5tCrcAwY%2FVGMGlkmAxnGNRJf%2B9IY5S0XCOgHT46HmFvaWW%2FRFSiYEkwcBn8%2Bvy9KlT80u4ne%2FJTOQdxeDnuH%2BQvnBhbet1kM2cjmspaJHh%2FchwB5QVIi7ulPrIe05XIx0M%2Bw3iPUWBR0WBWDToGcRtYjiE6Y8WnOdrHzXl3jwgOichiTZoq5l%2Fc50v8ivgmyfharkuHqqTczYK4AFY44L3ovVIq949cpfT1yv4qt2ROuFjFk0CJWBdGvriTIuAWq1g2dd1XDzlyKQIzP55UNoKkm8Z3Oaxv8VrmF0ptJLKH0JNoX9lYmykL%2FN50NURKb%2FXf34eGlo8KFsOFyUnPKjfOlaroe1%2BN78GO%2BV0Ec6zorlKLxv4EgeoMpGQkxRbEqRf0DJ1R3453Y4zv0ucwuuJT4KSzsHRAOpt9bRjmbl1bgY149c9QOkhZz6g%2FMV8w4N5ky60LE%2FVPTsxvfq5fumfv2PAxiB8YSawZeB8qsPvi9oahu9rtllYOp3q2xuxuhlADR55%2FNiT4ve3syk9Fz9QnlsDr7zQO7S4afEZNPPHUZjrakc%2F0K5hG7M34Ki%2FgWQnYprbXXTYiT9NlofIK01wmez736sBx%2FLEoZRw9kWvnI6MGKFO5X4KSjPvIFrMcc4MLi3ob4GOqUBYm%2B83h0TVeAWSj0F%2Faa%2BSNc47V3Basen5AtexfopkYlIyxcbJaVqqsPjODM%2FYs6QeJKYKnTsvxrgP1EEbe6oZEuEKNBaiKsiGorbXgoG5e%2Btgjc%2BSSWBB17Mzswqyi50hFun8DjnyRQqVezytnrt%2B1oHhlocN2sqWl4d6fhjxZW5%2BM9cM%2BgUl4Q%2BYF34IuJHeJvYy2C77X2P33Kbo70syrg2yHWF&X-Amz-Signature=04d9ab7b23e4fdbc0077e3f824c98993140901345974dbce1dd19eaa85737218&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROJEBEUQ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEuYDB85gsRkyc%2Faqt%2Fk1SOTxijF%2FL354zncRiavo4DAIgeLOZ8Q0sfTHOcK5uuMEiVTrS4jTXmu5MpBX3o1ATIYUq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJbFTf0mFW0PWrU5tCrcAwY%2FVGMGlkmAxnGNRJf%2B9IY5S0XCOgHT46HmFvaWW%2FRFSiYEkwcBn8%2Bvy9KlT80u4ne%2FJTOQdxeDnuH%2BQvnBhbet1kM2cjmspaJHh%2FchwB5QVIi7ulPrIe05XIx0M%2Bw3iPUWBR0WBWDToGcRtYjiE6Y8WnOdrHzXl3jwgOichiTZoq5l%2Fc50v8ivgmyfharkuHqqTczYK4AFY44L3ovVIq949cpfT1yv4qt2ROuFjFk0CJWBdGvriTIuAWq1g2dd1XDzlyKQIzP55UNoKkm8Z3Oaxv8VrmF0ptJLKH0JNoX9lYmykL%2FN50NURKb%2FXf34eGlo8KFsOFyUnPKjfOlaroe1%2BN78GO%2BV0Ec6zorlKLxv4EgeoMpGQkxRbEqRf0DJ1R3453Y4zv0ucwuuJT4KSzsHRAOpt9bRjmbl1bgY149c9QOkhZz6g%2FMV8w4N5ky60LE%2FVPTsxvfq5fumfv2PAxiB8YSawZeB8qsPvi9oahu9rtllYOp3q2xuxuhlADR55%2FNiT4ve3syk9Fz9QnlsDr7zQO7S4afEZNPPHUZjrakc%2F0K5hG7M34Ki%2FgWQnYprbXXTYiT9NlofIK01wmez736sBx%2FLEoZRw9kWvnI6MGKFO5X4KSjPvIFrMcc4MLi3ob4GOqUBYm%2B83h0TVeAWSj0F%2Faa%2BSNc47V3Basen5AtexfopkYlIyxcbJaVqqsPjODM%2FYs6QeJKYKnTsvxrgP1EEbe6oZEuEKNBaiKsiGorbXgoG5e%2Btgjc%2BSSWBB17Mzswqyi50hFun8DjnyRQqVezytnrt%2B1oHhlocN2sqWl4d6fhjxZW5%2BM9cM%2BgUl4Q%2BYF34IuJHeJvYy2C77X2P33Kbo70syrg2yHWF&X-Amz-Signature=9fdb8b49cad8dc49c3cf3f41a4ec8a4e8f65ff75b2046c0b3558587b420afe6b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

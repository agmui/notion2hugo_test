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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5SLOUS%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIA2auOQJ%2BVk2lJ7JLqj%2B82ePmSmKLCNct66McJRPYrcrAiA05KDRIXMkzMq5H2vS5028nw8%2FCbmaThPHc8N5d4SqzyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbCSXaqXJOi5wEFlvKtwDXnBypU3ubwDtcMm9jzf7L0P0ueqy6YSvZBXA3VpezGUO3NRJNySW19AXAQNNs85WEARoEedGFXQbvg%2FrcdkvG329Jt31iuWTCbLYnRoM2SYcseHB%2BaSeY33sQG3ESeT1x%2FSK9rv0PjjP2mmkx423%2FIYTD0exp4gJph1q05ju33PHUuUO4LHH1V1pClpty4MCdMzjEFF7wWYSekzAiN%2FsDrsJiBJlilzEDf4lliPhyzeb%2BXAt%2BcZENne7L1lacZ%2FxWPBItsRw9gNxb0b3B2ynbE8eXR%2FOsPlwaH9wVlRrhry43iNbxnVGspw9kMGShAc%2F5Us1Hhcxl%2BOgMgmZ8WHaV6zHfWVDTNe56V48V9nSmu%2BjDadZ58G%2Fv3yYd%2B%2F3Y9cXF0WofIBvTKBgqWvFlijeE1q55Ff2wfnd9gRtqN0S%2FBueMWzLNogs3JCByx%2FLDHUsefhhh5SghM7zUiDDGr3DB1szXbmMaKsUqZC6I9CKUCqGEO7LnFp2pdbe2crQ36wKSxID23%2FnxbTM7BjF1N6XiqteIFD8%2FQvRb%2BS1j2fxSJhpDXhuxVu8Y%2FivfiVuyWPh6M5yhTpHDc%2Ff%2BKChdEfI%2Bp0QP2sd84QuIGZr7clfQaB%2FnmIc5ELTZYh0ZuAwq8O0vwY6pgEqZ7U4sWnpIHPEF5qngoDAj%2BJRjVQD0ZX3XCHBujPwtRyaWRDpuS7%2BNYzhwGN8Bpb%2FmwO6KgoyYK0jMKO83hSUGmBh6Aqqjium9kE7SWLU4Xjo%2BkN1Cthi%2FnBlEFA8gRdVBX32sWc4xFPTHdih%2F1gIGUrVGV6JNjpgA3ksloMZK4qGmwsmr3zz4E96Xu7Jw7LIYelYa8MPogdbjN0pxx2XourSuLbi&X-Amz-Signature=0e32f8f83774e28d34116928f444dffb8301421264d6bae40c254b2603b76428&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5SLOUS%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIA2auOQJ%2BVk2lJ7JLqj%2B82ePmSmKLCNct66McJRPYrcrAiA05KDRIXMkzMq5H2vS5028nw8%2FCbmaThPHc8N5d4SqzyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbCSXaqXJOi5wEFlvKtwDXnBypU3ubwDtcMm9jzf7L0P0ueqy6YSvZBXA3VpezGUO3NRJNySW19AXAQNNs85WEARoEedGFXQbvg%2FrcdkvG329Jt31iuWTCbLYnRoM2SYcseHB%2BaSeY33sQG3ESeT1x%2FSK9rv0PjjP2mmkx423%2FIYTD0exp4gJph1q05ju33PHUuUO4LHH1V1pClpty4MCdMzjEFF7wWYSekzAiN%2FsDrsJiBJlilzEDf4lliPhyzeb%2BXAt%2BcZENne7L1lacZ%2FxWPBItsRw9gNxb0b3B2ynbE8eXR%2FOsPlwaH9wVlRrhry43iNbxnVGspw9kMGShAc%2F5Us1Hhcxl%2BOgMgmZ8WHaV6zHfWVDTNe56V48V9nSmu%2BjDadZ58G%2Fv3yYd%2B%2F3Y9cXF0WofIBvTKBgqWvFlijeE1q55Ff2wfnd9gRtqN0S%2FBueMWzLNogs3JCByx%2FLDHUsefhhh5SghM7zUiDDGr3DB1szXbmMaKsUqZC6I9CKUCqGEO7LnFp2pdbe2crQ36wKSxID23%2FnxbTM7BjF1N6XiqteIFD8%2FQvRb%2BS1j2fxSJhpDXhuxVu8Y%2FivfiVuyWPh6M5yhTpHDc%2Ff%2BKChdEfI%2Bp0QP2sd84QuIGZr7clfQaB%2FnmIc5ELTZYh0ZuAwq8O0vwY6pgEqZ7U4sWnpIHPEF5qngoDAj%2BJRjVQD0ZX3XCHBujPwtRyaWRDpuS7%2BNYzhwGN8Bpb%2FmwO6KgoyYK0jMKO83hSUGmBh6Aqqjium9kE7SWLU4Xjo%2BkN1Cthi%2FnBlEFA8gRdVBX32sWc4xFPTHdih%2F1gIGUrVGV6JNjpgA3ksloMZK4qGmwsmr3zz4E96Xu7Jw7LIYelYa8MPogdbjN0pxx2XourSuLbi&X-Amz-Signature=2b2b53a13255322782c4a3a4d217f8a0f688811fb27e98e47b351ad8c7929eea&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5SLOUS%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIA2auOQJ%2BVk2lJ7JLqj%2B82ePmSmKLCNct66McJRPYrcrAiA05KDRIXMkzMq5H2vS5028nw8%2FCbmaThPHc8N5d4SqzyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbCSXaqXJOi5wEFlvKtwDXnBypU3ubwDtcMm9jzf7L0P0ueqy6YSvZBXA3VpezGUO3NRJNySW19AXAQNNs85WEARoEedGFXQbvg%2FrcdkvG329Jt31iuWTCbLYnRoM2SYcseHB%2BaSeY33sQG3ESeT1x%2FSK9rv0PjjP2mmkx423%2FIYTD0exp4gJph1q05ju33PHUuUO4LHH1V1pClpty4MCdMzjEFF7wWYSekzAiN%2FsDrsJiBJlilzEDf4lliPhyzeb%2BXAt%2BcZENne7L1lacZ%2FxWPBItsRw9gNxb0b3B2ynbE8eXR%2FOsPlwaH9wVlRrhry43iNbxnVGspw9kMGShAc%2F5Us1Hhcxl%2BOgMgmZ8WHaV6zHfWVDTNe56V48V9nSmu%2BjDadZ58G%2Fv3yYd%2B%2F3Y9cXF0WofIBvTKBgqWvFlijeE1q55Ff2wfnd9gRtqN0S%2FBueMWzLNogs3JCByx%2FLDHUsefhhh5SghM7zUiDDGr3DB1szXbmMaKsUqZC6I9CKUCqGEO7LnFp2pdbe2crQ36wKSxID23%2FnxbTM7BjF1N6XiqteIFD8%2FQvRb%2BS1j2fxSJhpDXhuxVu8Y%2FivfiVuyWPh6M5yhTpHDc%2Ff%2BKChdEfI%2Bp0QP2sd84QuIGZr7clfQaB%2FnmIc5ELTZYh0ZuAwq8O0vwY6pgEqZ7U4sWnpIHPEF5qngoDAj%2BJRjVQD0ZX3XCHBujPwtRyaWRDpuS7%2BNYzhwGN8Bpb%2FmwO6KgoyYK0jMKO83hSUGmBh6Aqqjium9kE7SWLU4Xjo%2BkN1Cthi%2FnBlEFA8gRdVBX32sWc4xFPTHdih%2F1gIGUrVGV6JNjpgA3ksloMZK4qGmwsmr3zz4E96Xu7Jw7LIYelYa8MPogdbjN0pxx2XourSuLbi&X-Amz-Signature=79eba48d33aac3f92b80846d0b226ff49844c474eafaa128df3f3e02924f2cfd&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5SLOUS%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIA2auOQJ%2BVk2lJ7JLqj%2B82ePmSmKLCNct66McJRPYrcrAiA05KDRIXMkzMq5H2vS5028nw8%2FCbmaThPHc8N5d4SqzyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbCSXaqXJOi5wEFlvKtwDXnBypU3ubwDtcMm9jzf7L0P0ueqy6YSvZBXA3VpezGUO3NRJNySW19AXAQNNs85WEARoEedGFXQbvg%2FrcdkvG329Jt31iuWTCbLYnRoM2SYcseHB%2BaSeY33sQG3ESeT1x%2FSK9rv0PjjP2mmkx423%2FIYTD0exp4gJph1q05ju33PHUuUO4LHH1V1pClpty4MCdMzjEFF7wWYSekzAiN%2FsDrsJiBJlilzEDf4lliPhyzeb%2BXAt%2BcZENne7L1lacZ%2FxWPBItsRw9gNxb0b3B2ynbE8eXR%2FOsPlwaH9wVlRrhry43iNbxnVGspw9kMGShAc%2F5Us1Hhcxl%2BOgMgmZ8WHaV6zHfWVDTNe56V48V9nSmu%2BjDadZ58G%2Fv3yYd%2B%2F3Y9cXF0WofIBvTKBgqWvFlijeE1q55Ff2wfnd9gRtqN0S%2FBueMWzLNogs3JCByx%2FLDHUsefhhh5SghM7zUiDDGr3DB1szXbmMaKsUqZC6I9CKUCqGEO7LnFp2pdbe2crQ36wKSxID23%2FnxbTM7BjF1N6XiqteIFD8%2FQvRb%2BS1j2fxSJhpDXhuxVu8Y%2FivfiVuyWPh6M5yhTpHDc%2Ff%2BKChdEfI%2Bp0QP2sd84QuIGZr7clfQaB%2FnmIc5ELTZYh0ZuAwq8O0vwY6pgEqZ7U4sWnpIHPEF5qngoDAj%2BJRjVQD0ZX3XCHBujPwtRyaWRDpuS7%2BNYzhwGN8Bpb%2FmwO6KgoyYK0jMKO83hSUGmBh6Aqqjium9kE7SWLU4Xjo%2BkN1Cthi%2FnBlEFA8gRdVBX32sWc4xFPTHdih%2F1gIGUrVGV6JNjpgA3ksloMZK4qGmwsmr3zz4E96Xu7Jw7LIYelYa8MPogdbjN0pxx2XourSuLbi&X-Amz-Signature=4c0d5e48471fd1e418c6588cde2e96ea7704d1937db884d028886f3202d70fba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5SLOUS%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIA2auOQJ%2BVk2lJ7JLqj%2B82ePmSmKLCNct66McJRPYrcrAiA05KDRIXMkzMq5H2vS5028nw8%2FCbmaThPHc8N5d4SqzyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbCSXaqXJOi5wEFlvKtwDXnBypU3ubwDtcMm9jzf7L0P0ueqy6YSvZBXA3VpezGUO3NRJNySW19AXAQNNs85WEARoEedGFXQbvg%2FrcdkvG329Jt31iuWTCbLYnRoM2SYcseHB%2BaSeY33sQG3ESeT1x%2FSK9rv0PjjP2mmkx423%2FIYTD0exp4gJph1q05ju33PHUuUO4LHH1V1pClpty4MCdMzjEFF7wWYSekzAiN%2FsDrsJiBJlilzEDf4lliPhyzeb%2BXAt%2BcZENne7L1lacZ%2FxWPBItsRw9gNxb0b3B2ynbE8eXR%2FOsPlwaH9wVlRrhry43iNbxnVGspw9kMGShAc%2F5Us1Hhcxl%2BOgMgmZ8WHaV6zHfWVDTNe56V48V9nSmu%2BjDadZ58G%2Fv3yYd%2B%2F3Y9cXF0WofIBvTKBgqWvFlijeE1q55Ff2wfnd9gRtqN0S%2FBueMWzLNogs3JCByx%2FLDHUsefhhh5SghM7zUiDDGr3DB1szXbmMaKsUqZC6I9CKUCqGEO7LnFp2pdbe2crQ36wKSxID23%2FnxbTM7BjF1N6XiqteIFD8%2FQvRb%2BS1j2fxSJhpDXhuxVu8Y%2FivfiVuyWPh6M5yhTpHDc%2Ff%2BKChdEfI%2Bp0QP2sd84QuIGZr7clfQaB%2FnmIc5ELTZYh0ZuAwq8O0vwY6pgEqZ7U4sWnpIHPEF5qngoDAj%2BJRjVQD0ZX3XCHBujPwtRyaWRDpuS7%2BNYzhwGN8Bpb%2FmwO6KgoyYK0jMKO83hSUGmBh6Aqqjium9kE7SWLU4Xjo%2BkN1Cthi%2FnBlEFA8gRdVBX32sWc4xFPTHdih%2F1gIGUrVGV6JNjpgA3ksloMZK4qGmwsmr3zz4E96Xu7Jw7LIYelYa8MPogdbjN0pxx2XourSuLbi&X-Amz-Signature=6b9e14796407c071bea904860e4eda493b3846f9fcc3a66eac90a82d250228eb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

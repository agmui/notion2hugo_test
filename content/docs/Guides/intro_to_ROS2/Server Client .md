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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS66U3FS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDYRcZCZem%2BQAsyNSW6R%2BOOS%2BpfEJ7PkqS7pOUCOswcAwIhAO%2Bhpef3l0GS5KSaJZUl1koDq0n7Ipj2glpxx2Ywb0XhKv8DCCUQABoMNjM3NDIzMTgzODA1IgwSEIYwP5l%2F69KEyS8q3APK7dch6jbERrAvrlHbtfHGxyrYTFX15BILwLHNvwg3xzXO2WBOuLVwNfdsssH1ElSFWbLd%2FOGjMZuJEEduh%2F8mEjhu5AfPsiXsNFBa6gWkjUqRNWmq%2BmG%2FL%2B%2B9EU%2BYyPbD%2F2mpVD2BAAoy9FC3IZSsMhLCpAuW9tUWniFZg0HOxE%2Bm97BkgOAlZgxsra1bgk543Qot%2BYMYOG8aSPfYmRNyTgywdD2tY8MF8cYMEtfn77rqfTnC83LdTgPD88CivBzw2eSyZFkZWHuHaIjLcYBLE01KK5PeXvd4JgihlNHuiLK0KysWKq5ssXwp4rQjgR5NpNesXV5kMm1vK6GuhEsImydG5TpLAo6nTM6AoDWBM2WTiW3swWep%2BmBu%2FxjvqmDZFDzqOYTylN763CdpwIhSSTYNmptzFBfRql%2FhyPNY20QV0jESTcokE%2BC5N3HKRnCBQ8UBRHZFneO52vNkndDGLG6uXANc4feeEuRgoo2Mmoled9fHUxlrjYXMVtnAxWsp87IAP8r0kozAtkIbRiB2d0j1W%2F7NkNJKRVbXkU%2FyVG0usn69PEXQjrlmZWGtgrzoNNnWqB4RDx%2FkUD3gEViefVAXGGUKov%2FKqJwG%2FWYzMDSwim57HEwSZrPGzDDXiP%2FBBjqkAbsg4vdBEhuVZAGZYkU%2F6K%2FPEgyaFJBMAo32MfjgzspbKuPqxwnCBsELito%2FILkfwR4etZsL3LemMR1chJKKPO1Xor%2BvQyOUXAJDTHJ28YRTm0kg89ugex3y0i%2B74u%2FR2Jl27kbu6gyXRId%2FF8MFTi2kG2vo%2B6KKLUrv0ZrCDGWWfvOzRWEKZ2NZto9H9Fsbyf2eAkPsFLoSe%2Bru49WUZirLSGf%2F&X-Amz-Signature=f2dee4e86ae2a2dba32ada0db05e9348caad66004d61af21f0749f840ec7d60b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS66U3FS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDYRcZCZem%2BQAsyNSW6R%2BOOS%2BpfEJ7PkqS7pOUCOswcAwIhAO%2Bhpef3l0GS5KSaJZUl1koDq0n7Ipj2glpxx2Ywb0XhKv8DCCUQABoMNjM3NDIzMTgzODA1IgwSEIYwP5l%2F69KEyS8q3APK7dch6jbERrAvrlHbtfHGxyrYTFX15BILwLHNvwg3xzXO2WBOuLVwNfdsssH1ElSFWbLd%2FOGjMZuJEEduh%2F8mEjhu5AfPsiXsNFBa6gWkjUqRNWmq%2BmG%2FL%2B%2B9EU%2BYyPbD%2F2mpVD2BAAoy9FC3IZSsMhLCpAuW9tUWniFZg0HOxE%2Bm97BkgOAlZgxsra1bgk543Qot%2BYMYOG8aSPfYmRNyTgywdD2tY8MF8cYMEtfn77rqfTnC83LdTgPD88CivBzw2eSyZFkZWHuHaIjLcYBLE01KK5PeXvd4JgihlNHuiLK0KysWKq5ssXwp4rQjgR5NpNesXV5kMm1vK6GuhEsImydG5TpLAo6nTM6AoDWBM2WTiW3swWep%2BmBu%2FxjvqmDZFDzqOYTylN763CdpwIhSSTYNmptzFBfRql%2FhyPNY20QV0jESTcokE%2BC5N3HKRnCBQ8UBRHZFneO52vNkndDGLG6uXANc4feeEuRgoo2Mmoled9fHUxlrjYXMVtnAxWsp87IAP8r0kozAtkIbRiB2d0j1W%2F7NkNJKRVbXkU%2FyVG0usn69PEXQjrlmZWGtgrzoNNnWqB4RDx%2FkUD3gEViefVAXGGUKov%2FKqJwG%2FWYzMDSwim57HEwSZrPGzDDXiP%2FBBjqkAbsg4vdBEhuVZAGZYkU%2F6K%2FPEgyaFJBMAo32MfjgzspbKuPqxwnCBsELito%2FILkfwR4etZsL3LemMR1chJKKPO1Xor%2BvQyOUXAJDTHJ28YRTm0kg89ugex3y0i%2B74u%2FR2Jl27kbu6gyXRId%2FF8MFTi2kG2vo%2B6KKLUrv0ZrCDGWWfvOzRWEKZ2NZto9H9Fsbyf2eAkPsFLoSe%2Bru49WUZirLSGf%2F&X-Amz-Signature=a128d59c504e23154527723e5697b1b69d556a5cab6dce8c6d3f65a80b486aaa&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS66U3FS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDYRcZCZem%2BQAsyNSW6R%2BOOS%2BpfEJ7PkqS7pOUCOswcAwIhAO%2Bhpef3l0GS5KSaJZUl1koDq0n7Ipj2glpxx2Ywb0XhKv8DCCUQABoMNjM3NDIzMTgzODA1IgwSEIYwP5l%2F69KEyS8q3APK7dch6jbERrAvrlHbtfHGxyrYTFX15BILwLHNvwg3xzXO2WBOuLVwNfdsssH1ElSFWbLd%2FOGjMZuJEEduh%2F8mEjhu5AfPsiXsNFBa6gWkjUqRNWmq%2BmG%2FL%2B%2B9EU%2BYyPbD%2F2mpVD2BAAoy9FC3IZSsMhLCpAuW9tUWniFZg0HOxE%2Bm97BkgOAlZgxsra1bgk543Qot%2BYMYOG8aSPfYmRNyTgywdD2tY8MF8cYMEtfn77rqfTnC83LdTgPD88CivBzw2eSyZFkZWHuHaIjLcYBLE01KK5PeXvd4JgihlNHuiLK0KysWKq5ssXwp4rQjgR5NpNesXV5kMm1vK6GuhEsImydG5TpLAo6nTM6AoDWBM2WTiW3swWep%2BmBu%2FxjvqmDZFDzqOYTylN763CdpwIhSSTYNmptzFBfRql%2FhyPNY20QV0jESTcokE%2BC5N3HKRnCBQ8UBRHZFneO52vNkndDGLG6uXANc4feeEuRgoo2Mmoled9fHUxlrjYXMVtnAxWsp87IAP8r0kozAtkIbRiB2d0j1W%2F7NkNJKRVbXkU%2FyVG0usn69PEXQjrlmZWGtgrzoNNnWqB4RDx%2FkUD3gEViefVAXGGUKov%2FKqJwG%2FWYzMDSwim57HEwSZrPGzDDXiP%2FBBjqkAbsg4vdBEhuVZAGZYkU%2F6K%2FPEgyaFJBMAo32MfjgzspbKuPqxwnCBsELito%2FILkfwR4etZsL3LemMR1chJKKPO1Xor%2BvQyOUXAJDTHJ28YRTm0kg89ugex3y0i%2B74u%2FR2Jl27kbu6gyXRId%2FF8MFTi2kG2vo%2B6KKLUrv0ZrCDGWWfvOzRWEKZ2NZto9H9Fsbyf2eAkPsFLoSe%2Bru49WUZirLSGf%2F&X-Amz-Signature=b6d45830146e2d30b2a6421522cc4dcf46f7794e6c4bb7df9b2f244660c174b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS66U3FS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDYRcZCZem%2BQAsyNSW6R%2BOOS%2BpfEJ7PkqS7pOUCOswcAwIhAO%2Bhpef3l0GS5KSaJZUl1koDq0n7Ipj2glpxx2Ywb0XhKv8DCCUQABoMNjM3NDIzMTgzODA1IgwSEIYwP5l%2F69KEyS8q3APK7dch6jbERrAvrlHbtfHGxyrYTFX15BILwLHNvwg3xzXO2WBOuLVwNfdsssH1ElSFWbLd%2FOGjMZuJEEduh%2F8mEjhu5AfPsiXsNFBa6gWkjUqRNWmq%2BmG%2FL%2B%2B9EU%2BYyPbD%2F2mpVD2BAAoy9FC3IZSsMhLCpAuW9tUWniFZg0HOxE%2Bm97BkgOAlZgxsra1bgk543Qot%2BYMYOG8aSPfYmRNyTgywdD2tY8MF8cYMEtfn77rqfTnC83LdTgPD88CivBzw2eSyZFkZWHuHaIjLcYBLE01KK5PeXvd4JgihlNHuiLK0KysWKq5ssXwp4rQjgR5NpNesXV5kMm1vK6GuhEsImydG5TpLAo6nTM6AoDWBM2WTiW3swWep%2BmBu%2FxjvqmDZFDzqOYTylN763CdpwIhSSTYNmptzFBfRql%2FhyPNY20QV0jESTcokE%2BC5N3HKRnCBQ8UBRHZFneO52vNkndDGLG6uXANc4feeEuRgoo2Mmoled9fHUxlrjYXMVtnAxWsp87IAP8r0kozAtkIbRiB2d0j1W%2F7NkNJKRVbXkU%2FyVG0usn69PEXQjrlmZWGtgrzoNNnWqB4RDx%2FkUD3gEViefVAXGGUKov%2FKqJwG%2FWYzMDSwim57HEwSZrPGzDDXiP%2FBBjqkAbsg4vdBEhuVZAGZYkU%2F6K%2FPEgyaFJBMAo32MfjgzspbKuPqxwnCBsELito%2FILkfwR4etZsL3LemMR1chJKKPO1Xor%2BvQyOUXAJDTHJ28YRTm0kg89ugex3y0i%2B74u%2FR2Jl27kbu6gyXRId%2FF8MFTi2kG2vo%2B6KKLUrv0ZrCDGWWfvOzRWEKZ2NZto9H9Fsbyf2eAkPsFLoSe%2Bru49WUZirLSGf%2F&X-Amz-Signature=39d3cd04f1d15614f383f5eca3d91ae4e2536459862289612d2f5364767081ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS66U3FS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDYRcZCZem%2BQAsyNSW6R%2BOOS%2BpfEJ7PkqS7pOUCOswcAwIhAO%2Bhpef3l0GS5KSaJZUl1koDq0n7Ipj2glpxx2Ywb0XhKv8DCCUQABoMNjM3NDIzMTgzODA1IgwSEIYwP5l%2F69KEyS8q3APK7dch6jbERrAvrlHbtfHGxyrYTFX15BILwLHNvwg3xzXO2WBOuLVwNfdsssH1ElSFWbLd%2FOGjMZuJEEduh%2F8mEjhu5AfPsiXsNFBa6gWkjUqRNWmq%2BmG%2FL%2B%2B9EU%2BYyPbD%2F2mpVD2BAAoy9FC3IZSsMhLCpAuW9tUWniFZg0HOxE%2Bm97BkgOAlZgxsra1bgk543Qot%2BYMYOG8aSPfYmRNyTgywdD2tY8MF8cYMEtfn77rqfTnC83LdTgPD88CivBzw2eSyZFkZWHuHaIjLcYBLE01KK5PeXvd4JgihlNHuiLK0KysWKq5ssXwp4rQjgR5NpNesXV5kMm1vK6GuhEsImydG5TpLAo6nTM6AoDWBM2WTiW3swWep%2BmBu%2FxjvqmDZFDzqOYTylN763CdpwIhSSTYNmptzFBfRql%2FhyPNY20QV0jESTcokE%2BC5N3HKRnCBQ8UBRHZFneO52vNkndDGLG6uXANc4feeEuRgoo2Mmoled9fHUxlrjYXMVtnAxWsp87IAP8r0kozAtkIbRiB2d0j1W%2F7NkNJKRVbXkU%2FyVG0usn69PEXQjrlmZWGtgrzoNNnWqB4RDx%2FkUD3gEViefVAXGGUKov%2FKqJwG%2FWYzMDSwim57HEwSZrPGzDDXiP%2FBBjqkAbsg4vdBEhuVZAGZYkU%2F6K%2FPEgyaFJBMAo32MfjgzspbKuPqxwnCBsELito%2FILkfwR4etZsL3LemMR1chJKKPO1Xor%2BvQyOUXAJDTHJ28YRTm0kg89ugex3y0i%2B74u%2FR2Jl27kbu6gyXRId%2FF8MFTi2kG2vo%2B6KKLUrv0ZrCDGWWfvOzRWEKZ2NZto9H9Fsbyf2eAkPsFLoSe%2Bru49WUZirLSGf%2F&X-Amz-Signature=76e7af972fb8b7096a29cb442556697d721b9c157b01badd2fe2519bd44bc87c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

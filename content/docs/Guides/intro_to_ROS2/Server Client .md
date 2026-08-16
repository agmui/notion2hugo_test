---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDR2XIA4%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFoVGVWh4vTojTKGEJjPwG85W%2FyIaITYq8mKr6Wcj8mWAiAIQxnwBO9puwHlXD3dTiJK3%2FeP%2BdPupCky82uUnafBNir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMZj%2B1TBd7FmZLMZzQKtwDwJEMNfG84V8m5NIasoPinJezziNUHApPE5jK4e8dxJQszR4gBUEzfAamkLxMqcTUjlOzFny%2BTCz2Ajtqx4ncczX3QSandXUE%2B6uCeCkEcjrPi7pHUWJx%2BWoA9ScwU30qVNuPSN0ZERF4eMGQK93DZXPYrVdUEj%2FTmkss7mVQtv3toxM%2BIyqTRKQxPFwzSfrK0fp1pg4MEvAgoQ%2BtWNoFDHtLNmB9vUCEsvQWzO5oKKZle0ZCEctAcqEzpm8Iv9EIIS9WAbDDyyirRm%2F4f7x8Rw3ywdVbx2uFtc%2FNSepSYhKu%2BcgUkzqAg%2FP8ukdThNsJdHYKuV4kRB1k9cVIRItV%2FQstIhJ6iblWby9%2Bw5nH6lxPuQXQKSyHeQdo1m%2BSZ5sYMPh4NN8ZaPjFNFAZRPOvVTQnr%2FgYvC%2FQYRySS0nfwCNJw1UulVPX1VEtREnFLoLxk%2F1HUeA4k3S4cumz3DL08hS%2BNd3iz1nxyho31SmTV96mWJJo%2FC90qq0%2B7FosDAHNl%2FqvZrcF67aulIw2Nx3p%2B1Mpi%2Fe3FS5SNSJ9fvwT0Q88Q%2FDHjxAcEA4G1gP3H8d6ETF5107qHAXT6mU0YboPICqk8VooGT2%2BxTfLCFIaatBtekexTxJu6H4t7zkw3%2B2D1AY6pgG%2BnqiL7L7BAhkAMpU6NS7uv6mXJgAwpvw95xV58JZYk9ksSuH3w1e3hgR%2Falo3%2BfFRxFrwCNNeoFahqESYJ%2FmX2DLbHPS0s4ERLwRsQWtCNbESORcgWb83W1hzhjARh5%2FrCPVhci%2FKqFkuhKeh6SPEt6R5%2B%2F7Zm8w%2BjqpEGH7VSJ9dDSRHQUn5VxpSz8gmUCuMGbk4ttmw3XeLrGjt7uf%2Fa05%2Fe0Wr&X-Amz-Signature=9db9492e30e0eaa885948103caeac2dc30ba12b650480b05a65113df13f519c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDR2XIA4%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFoVGVWh4vTojTKGEJjPwG85W%2FyIaITYq8mKr6Wcj8mWAiAIQxnwBO9puwHlXD3dTiJK3%2FeP%2BdPupCky82uUnafBNir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMZj%2B1TBd7FmZLMZzQKtwDwJEMNfG84V8m5NIasoPinJezziNUHApPE5jK4e8dxJQszR4gBUEzfAamkLxMqcTUjlOzFny%2BTCz2Ajtqx4ncczX3QSandXUE%2B6uCeCkEcjrPi7pHUWJx%2BWoA9ScwU30qVNuPSN0ZERF4eMGQK93DZXPYrVdUEj%2FTmkss7mVQtv3toxM%2BIyqTRKQxPFwzSfrK0fp1pg4MEvAgoQ%2BtWNoFDHtLNmB9vUCEsvQWzO5oKKZle0ZCEctAcqEzpm8Iv9EIIS9WAbDDyyirRm%2F4f7x8Rw3ywdVbx2uFtc%2FNSepSYhKu%2BcgUkzqAg%2FP8ukdThNsJdHYKuV4kRB1k9cVIRItV%2FQstIhJ6iblWby9%2Bw5nH6lxPuQXQKSyHeQdo1m%2BSZ5sYMPh4NN8ZaPjFNFAZRPOvVTQnr%2FgYvC%2FQYRySS0nfwCNJw1UulVPX1VEtREnFLoLxk%2F1HUeA4k3S4cumz3DL08hS%2BNd3iz1nxyho31SmTV96mWJJo%2FC90qq0%2B7FosDAHNl%2FqvZrcF67aulIw2Nx3p%2B1Mpi%2Fe3FS5SNSJ9fvwT0Q88Q%2FDHjxAcEA4G1gP3H8d6ETF5107qHAXT6mU0YboPICqk8VooGT2%2BxTfLCFIaatBtekexTxJu6H4t7zkw3%2B2D1AY6pgG%2BnqiL7L7BAhkAMpU6NS7uv6mXJgAwpvw95xV58JZYk9ksSuH3w1e3hgR%2Falo3%2BfFRxFrwCNNeoFahqESYJ%2FmX2DLbHPS0s4ERLwRsQWtCNbESORcgWb83W1hzhjARh5%2FrCPVhci%2FKqFkuhKeh6SPEt6R5%2B%2F7Zm8w%2BjqpEGH7VSJ9dDSRHQUn5VxpSz8gmUCuMGbk4ttmw3XeLrGjt7uf%2Fa05%2Fe0Wr&X-Amz-Signature=fde7852adfbb67555a477ac4292d1fd427b1300ce10f8f7ed7341be1a268328d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDR2XIA4%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFoVGVWh4vTojTKGEJjPwG85W%2FyIaITYq8mKr6Wcj8mWAiAIQxnwBO9puwHlXD3dTiJK3%2FeP%2BdPupCky82uUnafBNir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMZj%2B1TBd7FmZLMZzQKtwDwJEMNfG84V8m5NIasoPinJezziNUHApPE5jK4e8dxJQszR4gBUEzfAamkLxMqcTUjlOzFny%2BTCz2Ajtqx4ncczX3QSandXUE%2B6uCeCkEcjrPi7pHUWJx%2BWoA9ScwU30qVNuPSN0ZERF4eMGQK93DZXPYrVdUEj%2FTmkss7mVQtv3toxM%2BIyqTRKQxPFwzSfrK0fp1pg4MEvAgoQ%2BtWNoFDHtLNmB9vUCEsvQWzO5oKKZle0ZCEctAcqEzpm8Iv9EIIS9WAbDDyyirRm%2F4f7x8Rw3ywdVbx2uFtc%2FNSepSYhKu%2BcgUkzqAg%2FP8ukdThNsJdHYKuV4kRB1k9cVIRItV%2FQstIhJ6iblWby9%2Bw5nH6lxPuQXQKSyHeQdo1m%2BSZ5sYMPh4NN8ZaPjFNFAZRPOvVTQnr%2FgYvC%2FQYRySS0nfwCNJw1UulVPX1VEtREnFLoLxk%2F1HUeA4k3S4cumz3DL08hS%2BNd3iz1nxyho31SmTV96mWJJo%2FC90qq0%2B7FosDAHNl%2FqvZrcF67aulIw2Nx3p%2B1Mpi%2Fe3FS5SNSJ9fvwT0Q88Q%2FDHjxAcEA4G1gP3H8d6ETF5107qHAXT6mU0YboPICqk8VooGT2%2BxTfLCFIaatBtekexTxJu6H4t7zkw3%2B2D1AY6pgG%2BnqiL7L7BAhkAMpU6NS7uv6mXJgAwpvw95xV58JZYk9ksSuH3w1e3hgR%2Falo3%2BfFRxFrwCNNeoFahqESYJ%2FmX2DLbHPS0s4ERLwRsQWtCNbESORcgWb83W1hzhjARh5%2FrCPVhci%2FKqFkuhKeh6SPEt6R5%2B%2F7Zm8w%2BjqpEGH7VSJ9dDSRHQUn5VxpSz8gmUCuMGbk4ttmw3XeLrGjt7uf%2Fa05%2Fe0Wr&X-Amz-Signature=4eb5a1ec6e18220c165a827d68fa804866d8b62c9e464ba01cc5a895cc85c586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDR2XIA4%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFoVGVWh4vTojTKGEJjPwG85W%2FyIaITYq8mKr6Wcj8mWAiAIQxnwBO9puwHlXD3dTiJK3%2FeP%2BdPupCky82uUnafBNir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMZj%2B1TBd7FmZLMZzQKtwDwJEMNfG84V8m5NIasoPinJezziNUHApPE5jK4e8dxJQszR4gBUEzfAamkLxMqcTUjlOzFny%2BTCz2Ajtqx4ncczX3QSandXUE%2B6uCeCkEcjrPi7pHUWJx%2BWoA9ScwU30qVNuPSN0ZERF4eMGQK93DZXPYrVdUEj%2FTmkss7mVQtv3toxM%2BIyqTRKQxPFwzSfrK0fp1pg4MEvAgoQ%2BtWNoFDHtLNmB9vUCEsvQWzO5oKKZle0ZCEctAcqEzpm8Iv9EIIS9WAbDDyyirRm%2F4f7x8Rw3ywdVbx2uFtc%2FNSepSYhKu%2BcgUkzqAg%2FP8ukdThNsJdHYKuV4kRB1k9cVIRItV%2FQstIhJ6iblWby9%2Bw5nH6lxPuQXQKSyHeQdo1m%2BSZ5sYMPh4NN8ZaPjFNFAZRPOvVTQnr%2FgYvC%2FQYRySS0nfwCNJw1UulVPX1VEtREnFLoLxk%2F1HUeA4k3S4cumz3DL08hS%2BNd3iz1nxyho31SmTV96mWJJo%2FC90qq0%2B7FosDAHNl%2FqvZrcF67aulIw2Nx3p%2B1Mpi%2Fe3FS5SNSJ9fvwT0Q88Q%2FDHjxAcEA4G1gP3H8d6ETF5107qHAXT6mU0YboPICqk8VooGT2%2BxTfLCFIaatBtekexTxJu6H4t7zkw3%2B2D1AY6pgG%2BnqiL7L7BAhkAMpU6NS7uv6mXJgAwpvw95xV58JZYk9ksSuH3w1e3hgR%2Falo3%2BfFRxFrwCNNeoFahqESYJ%2FmX2DLbHPS0s4ERLwRsQWtCNbESORcgWb83W1hzhjARh5%2FrCPVhci%2FKqFkuhKeh6SPEt6R5%2B%2F7Zm8w%2BjqpEGH7VSJ9dDSRHQUn5VxpSz8gmUCuMGbk4ttmw3XeLrGjt7uf%2Fa05%2Fe0Wr&X-Amz-Signature=5ba2fe4b5569853972ad2d4cf6090f32513ae9bb017ff700869e8fe86d2a0d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDR2XIA4%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFoVGVWh4vTojTKGEJjPwG85W%2FyIaITYq8mKr6Wcj8mWAiAIQxnwBO9puwHlXD3dTiJK3%2FeP%2BdPupCky82uUnafBNir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMZj%2B1TBd7FmZLMZzQKtwDwJEMNfG84V8m5NIasoPinJezziNUHApPE5jK4e8dxJQszR4gBUEzfAamkLxMqcTUjlOzFny%2BTCz2Ajtqx4ncczX3QSandXUE%2B6uCeCkEcjrPi7pHUWJx%2BWoA9ScwU30qVNuPSN0ZERF4eMGQK93DZXPYrVdUEj%2FTmkss7mVQtv3toxM%2BIyqTRKQxPFwzSfrK0fp1pg4MEvAgoQ%2BtWNoFDHtLNmB9vUCEsvQWzO5oKKZle0ZCEctAcqEzpm8Iv9EIIS9WAbDDyyirRm%2F4f7x8Rw3ywdVbx2uFtc%2FNSepSYhKu%2BcgUkzqAg%2FP8ukdThNsJdHYKuV4kRB1k9cVIRItV%2FQstIhJ6iblWby9%2Bw5nH6lxPuQXQKSyHeQdo1m%2BSZ5sYMPh4NN8ZaPjFNFAZRPOvVTQnr%2FgYvC%2FQYRySS0nfwCNJw1UulVPX1VEtREnFLoLxk%2F1HUeA4k3S4cumz3DL08hS%2BNd3iz1nxyho31SmTV96mWJJo%2FC90qq0%2B7FosDAHNl%2FqvZrcF67aulIw2Nx3p%2B1Mpi%2Fe3FS5SNSJ9fvwT0Q88Q%2FDHjxAcEA4G1gP3H8d6ETF5107qHAXT6mU0YboPICqk8VooGT2%2BxTfLCFIaatBtekexTxJu6H4t7zkw3%2B2D1AY6pgG%2BnqiL7L7BAhkAMpU6NS7uv6mXJgAwpvw95xV58JZYk9ksSuH3w1e3hgR%2Falo3%2BfFRxFrwCNNeoFahqESYJ%2FmX2DLbHPS0s4ERLwRsQWtCNbESORcgWb83W1hzhjARh5%2FrCPVhci%2FKqFkuhKeh6SPEt6R5%2B%2F7Zm8w%2BjqpEGH7VSJ9dDSRHQUn5VxpSz8gmUCuMGbk4ttmw3XeLrGjt7uf%2Fa05%2Fe0Wr&X-Amz-Signature=7aecbc9280cda3758e672e9f4dd7eca67a79e19ae72a9f5158038f723397901b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

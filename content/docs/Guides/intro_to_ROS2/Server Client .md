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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSSRZS5P%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPelnF%2Fi5MwRSHrP%2BEvTUQbXvhU%2BtoVUAgoSU3U28t7AiAmczGWPN2gXY742JWERZS1cb7l8NMtWjvKRpjERbcrhCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjhBRNuv8brvoyvYkKtwD6rnL8gPKpo5%2Bf6ApgpK%2FkbjEPDd%2BNSCDDSZg1qHhopeCoKz%2FoZWZ5lucclAE5OlqpDwqua9dZsfgi52aHtyZRuzh7eaDqrMqfcRPb1hYjs%2Bpl7sV4rjyWviCFuWshExH20oELwTYjsFWQCiBykmUNEcuKo0E%2F7QhofmtosonZHn%2F%2FCGqYHaxZF7mcoc2SJbodThOAhIzkCL3wX1c%2FZRNdBu%2FYy9yN9sNOMUHcOUS%2FT4UIhVo%2FXu2AAda8MqEnMRIl1e%2FUDnQ8PGssPYhUUpV4lp%2F9zqGltBE5embiQ3qoxdq%2Bsmf9XaKFbC6cXyGsnbLxiXsYZBdEg2YEFLoacnlN9cTVYqHrQOWLaKhH8TV%2BNw%2FaNsaOVKnGaLT2zPy5g0rDBKQMOgpISME4929xB7WmyFSvw7TEJCBt3Dp5sjFXee8lswhhcYmynzHC%2F4PqPPJ2ZwPKYEooZ2Sa9sN%2BdV%2BUTRIo82u5g59dPACBfT58dQlav1IqMVN5syjguGylvoqiaKz6jTOd2MteGV9qGJ78RK6YrddBlXwtsw3knwGllY%2Bepc8J1oCJ3brAVvOe8%2B%2BLJu8XmydBcKz9TUJ4RFUoHZVp1FHOc7aTgnrzzBnfWP8xEqWMTplxJCtVwIwxPiYvgY6pgF9fPsKq4%2BKVcEpgjpyGcjFbAbJydu81Jx%2F9Oa2jZsQzFk8S3nAwgLKVK2yrKQMbHHb0gy%2FXYUj0y1a5JpGqNFNXQcY0tnaKz8NkOVsShU%2Ft%2B4M2PmMHWtqHsKOH2gdD1lr5nWig9HXDvpdbtFTg3PoqncQOMpzxFroT6A%2FcRrk2MxpIFdfCF7W6c0X9oosTZjgkzEHLZ5gVTNBMI%2Fv6DETpVoF7U71&X-Amz-Signature=a8d0b74375eaed9e37aa8824d5d50f7ba5c2d3daad676e643f387c227776c18c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSSRZS5P%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPelnF%2Fi5MwRSHrP%2BEvTUQbXvhU%2BtoVUAgoSU3U28t7AiAmczGWPN2gXY742JWERZS1cb7l8NMtWjvKRpjERbcrhCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjhBRNuv8brvoyvYkKtwD6rnL8gPKpo5%2Bf6ApgpK%2FkbjEPDd%2BNSCDDSZg1qHhopeCoKz%2FoZWZ5lucclAE5OlqpDwqua9dZsfgi52aHtyZRuzh7eaDqrMqfcRPb1hYjs%2Bpl7sV4rjyWviCFuWshExH20oELwTYjsFWQCiBykmUNEcuKo0E%2F7QhofmtosonZHn%2F%2FCGqYHaxZF7mcoc2SJbodThOAhIzkCL3wX1c%2FZRNdBu%2FYy9yN9sNOMUHcOUS%2FT4UIhVo%2FXu2AAda8MqEnMRIl1e%2FUDnQ8PGssPYhUUpV4lp%2F9zqGltBE5embiQ3qoxdq%2Bsmf9XaKFbC6cXyGsnbLxiXsYZBdEg2YEFLoacnlN9cTVYqHrQOWLaKhH8TV%2BNw%2FaNsaOVKnGaLT2zPy5g0rDBKQMOgpISME4929xB7WmyFSvw7TEJCBt3Dp5sjFXee8lswhhcYmynzHC%2F4PqPPJ2ZwPKYEooZ2Sa9sN%2BdV%2BUTRIo82u5g59dPACBfT58dQlav1IqMVN5syjguGylvoqiaKz6jTOd2MteGV9qGJ78RK6YrddBlXwtsw3knwGllY%2Bepc8J1oCJ3brAVvOe8%2B%2BLJu8XmydBcKz9TUJ4RFUoHZVp1FHOc7aTgnrzzBnfWP8xEqWMTplxJCtVwIwxPiYvgY6pgF9fPsKq4%2BKVcEpgjpyGcjFbAbJydu81Jx%2F9Oa2jZsQzFk8S3nAwgLKVK2yrKQMbHHb0gy%2FXYUj0y1a5JpGqNFNXQcY0tnaKz8NkOVsShU%2Ft%2B4M2PmMHWtqHsKOH2gdD1lr5nWig9HXDvpdbtFTg3PoqncQOMpzxFroT6A%2FcRrk2MxpIFdfCF7W6c0X9oosTZjgkzEHLZ5gVTNBMI%2Fv6DETpVoF7U71&X-Amz-Signature=2787e6e91ca530e850a42a348ce30a48d6d60a6023be9f7a80f1ec1d191398bc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSSRZS5P%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPelnF%2Fi5MwRSHrP%2BEvTUQbXvhU%2BtoVUAgoSU3U28t7AiAmczGWPN2gXY742JWERZS1cb7l8NMtWjvKRpjERbcrhCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjhBRNuv8brvoyvYkKtwD6rnL8gPKpo5%2Bf6ApgpK%2FkbjEPDd%2BNSCDDSZg1qHhopeCoKz%2FoZWZ5lucclAE5OlqpDwqua9dZsfgi52aHtyZRuzh7eaDqrMqfcRPb1hYjs%2Bpl7sV4rjyWviCFuWshExH20oELwTYjsFWQCiBykmUNEcuKo0E%2F7QhofmtosonZHn%2F%2FCGqYHaxZF7mcoc2SJbodThOAhIzkCL3wX1c%2FZRNdBu%2FYy9yN9sNOMUHcOUS%2FT4UIhVo%2FXu2AAda8MqEnMRIl1e%2FUDnQ8PGssPYhUUpV4lp%2F9zqGltBE5embiQ3qoxdq%2Bsmf9XaKFbC6cXyGsnbLxiXsYZBdEg2YEFLoacnlN9cTVYqHrQOWLaKhH8TV%2BNw%2FaNsaOVKnGaLT2zPy5g0rDBKQMOgpISME4929xB7WmyFSvw7TEJCBt3Dp5sjFXee8lswhhcYmynzHC%2F4PqPPJ2ZwPKYEooZ2Sa9sN%2BdV%2BUTRIo82u5g59dPACBfT58dQlav1IqMVN5syjguGylvoqiaKz6jTOd2MteGV9qGJ78RK6YrddBlXwtsw3knwGllY%2Bepc8J1oCJ3brAVvOe8%2B%2BLJu8XmydBcKz9TUJ4RFUoHZVp1FHOc7aTgnrzzBnfWP8xEqWMTplxJCtVwIwxPiYvgY6pgF9fPsKq4%2BKVcEpgjpyGcjFbAbJydu81Jx%2F9Oa2jZsQzFk8S3nAwgLKVK2yrKQMbHHb0gy%2FXYUj0y1a5JpGqNFNXQcY0tnaKz8NkOVsShU%2Ft%2B4M2PmMHWtqHsKOH2gdD1lr5nWig9HXDvpdbtFTg3PoqncQOMpzxFroT6A%2FcRrk2MxpIFdfCF7W6c0X9oosTZjgkzEHLZ5gVTNBMI%2Fv6DETpVoF7U71&X-Amz-Signature=4d9524bc001b02345dbdbcc3b188db45d85d94871063cc778ee402339693f4e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSSRZS5P%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPelnF%2Fi5MwRSHrP%2BEvTUQbXvhU%2BtoVUAgoSU3U28t7AiAmczGWPN2gXY742JWERZS1cb7l8NMtWjvKRpjERbcrhCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjhBRNuv8brvoyvYkKtwD6rnL8gPKpo5%2Bf6ApgpK%2FkbjEPDd%2BNSCDDSZg1qHhopeCoKz%2FoZWZ5lucclAE5OlqpDwqua9dZsfgi52aHtyZRuzh7eaDqrMqfcRPb1hYjs%2Bpl7sV4rjyWviCFuWshExH20oELwTYjsFWQCiBykmUNEcuKo0E%2F7QhofmtosonZHn%2F%2FCGqYHaxZF7mcoc2SJbodThOAhIzkCL3wX1c%2FZRNdBu%2FYy9yN9sNOMUHcOUS%2FT4UIhVo%2FXu2AAda8MqEnMRIl1e%2FUDnQ8PGssPYhUUpV4lp%2F9zqGltBE5embiQ3qoxdq%2Bsmf9XaKFbC6cXyGsnbLxiXsYZBdEg2YEFLoacnlN9cTVYqHrQOWLaKhH8TV%2BNw%2FaNsaOVKnGaLT2zPy5g0rDBKQMOgpISME4929xB7WmyFSvw7TEJCBt3Dp5sjFXee8lswhhcYmynzHC%2F4PqPPJ2ZwPKYEooZ2Sa9sN%2BdV%2BUTRIo82u5g59dPACBfT58dQlav1IqMVN5syjguGylvoqiaKz6jTOd2MteGV9qGJ78RK6YrddBlXwtsw3knwGllY%2Bepc8J1oCJ3brAVvOe8%2B%2BLJu8XmydBcKz9TUJ4RFUoHZVp1FHOc7aTgnrzzBnfWP8xEqWMTplxJCtVwIwxPiYvgY6pgF9fPsKq4%2BKVcEpgjpyGcjFbAbJydu81Jx%2F9Oa2jZsQzFk8S3nAwgLKVK2yrKQMbHHb0gy%2FXYUj0y1a5JpGqNFNXQcY0tnaKz8NkOVsShU%2Ft%2B4M2PmMHWtqHsKOH2gdD1lr5nWig9HXDvpdbtFTg3PoqncQOMpzxFroT6A%2FcRrk2MxpIFdfCF7W6c0X9oosTZjgkzEHLZ5gVTNBMI%2Fv6DETpVoF7U71&X-Amz-Signature=5338b01588ef7e801b802eaf9ac7e5132212c2620e12f79ef7249ca3a61f50a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSSRZS5P%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPelnF%2Fi5MwRSHrP%2BEvTUQbXvhU%2BtoVUAgoSU3U28t7AiAmczGWPN2gXY742JWERZS1cb7l8NMtWjvKRpjERbcrhCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjhBRNuv8brvoyvYkKtwD6rnL8gPKpo5%2Bf6ApgpK%2FkbjEPDd%2BNSCDDSZg1qHhopeCoKz%2FoZWZ5lucclAE5OlqpDwqua9dZsfgi52aHtyZRuzh7eaDqrMqfcRPb1hYjs%2Bpl7sV4rjyWviCFuWshExH20oELwTYjsFWQCiBykmUNEcuKo0E%2F7QhofmtosonZHn%2F%2FCGqYHaxZF7mcoc2SJbodThOAhIzkCL3wX1c%2FZRNdBu%2FYy9yN9sNOMUHcOUS%2FT4UIhVo%2FXu2AAda8MqEnMRIl1e%2FUDnQ8PGssPYhUUpV4lp%2F9zqGltBE5embiQ3qoxdq%2Bsmf9XaKFbC6cXyGsnbLxiXsYZBdEg2YEFLoacnlN9cTVYqHrQOWLaKhH8TV%2BNw%2FaNsaOVKnGaLT2zPy5g0rDBKQMOgpISME4929xB7WmyFSvw7TEJCBt3Dp5sjFXee8lswhhcYmynzHC%2F4PqPPJ2ZwPKYEooZ2Sa9sN%2BdV%2BUTRIo82u5g59dPACBfT58dQlav1IqMVN5syjguGylvoqiaKz6jTOd2MteGV9qGJ78RK6YrddBlXwtsw3knwGllY%2Bepc8J1oCJ3brAVvOe8%2B%2BLJu8XmydBcKz9TUJ4RFUoHZVp1FHOc7aTgnrzzBnfWP8xEqWMTplxJCtVwIwxPiYvgY6pgF9fPsKq4%2BKVcEpgjpyGcjFbAbJydu81Jx%2F9Oa2jZsQzFk8S3nAwgLKVK2yrKQMbHHb0gy%2FXYUj0y1a5JpGqNFNXQcY0tnaKz8NkOVsShU%2Ft%2B4M2PmMHWtqHsKOH2gdD1lr5nWig9HXDvpdbtFTg3PoqncQOMpzxFroT6A%2FcRrk2MxpIFdfCF7W6c0X9oosTZjgkzEHLZ5gVTNBMI%2Fv6DETpVoF7U71&X-Amz-Signature=bb4666db57448436235e08756ee17aa2c98cbda67fa064cbfb89bf3ed407c246&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

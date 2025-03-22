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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTTXI55%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQC2Ixk56yHvnz3jWqVjwR1yE8DqBufijUVHTbVAf2S5IQIgJ%2BrY2P8E%2Bajbj786ipku09ZJNjzS%2F5NCuFXbNBXXQ44qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPmYl6Qhp9T71rghyrcAz6iXlrEH%2Bv3qTPOYT%2F17WNp1%2BTDzA3tzhj5zQ6oO2LQ822UaZTxh1DFPFYEHIfptbatW2dhpmGiETS58BzV%2FWgmruJV8r58X2QCZTp2UqiypOEcznzfqstZAJCafPc%2FC9LYQOSRPyNG9S2rATUOcfuAWih7AohZm2VTdBAlxelNjYMaYTs4iSCwrf60zVrcuDMR%2FUq4y8eR5CoLoksX%2FwiW2Qs%2BM2RSMLivG31M8kVP%2FApn09VJojAts836YQTobKOiM2yEI5Xrq6ByOfkNc4OHtLg2xSPbpT4GrLNvmh0%2B7pZHNnUat%2BVFD1nPiiD3vz4D%2Br8hPGrtN6WZZ4LjFuZ%2FS3fYsqHZr5vkZGLT%2F8ZFJU0AP%2BKgPrMVye5HT852mc1CK6QXFqF2%2Be0hobZr8ySYA0d6iT%2BJvR1tJSFEy85IqaIDkN9Q1F5j9gnFzu1m5jFWFdAl%2B3u8MJzUVYz1HBpzmPVsNzM4qY17DBIk5SEq2mTi7%2F4BXKSQKppdaRA%2Fi8RFDb3je2J%2FFOsbbQQKgbF%2B5YbtuYsPFKKLK5nt8PZjyTP8yU3vKp4J44PI0BtF0MvDO5LOEixhvh5v2hgEIAfFiAJUxVCHnhyFsHZKu0NLcQdE0POHvs9fwtZnMJqr%2Bb4GOqUBUPYb%2FRfALFUPgKWeS1LgrRDXsvpdSU%2FFYMX4UkbnTWW2evFm91rXNuZ%2FakAtZOfP6uKHDIq9bnJjPCzUbpJ505Bi%2FJs%2Fs4GbVL7HoDrDvQBfALWzIYuS4vjIPJ7izC2hlmSpbqFS6RecYoYJ%2BWrXVpEXwhyG1mS9uiALDayo%2B93PmKkGt%2FnalA7oUkEtSvQIjBhReGuXiSUwxEUskvvjq5yyzyYs&X-Amz-Signature=78c29cc662aa6c34f58dff75656185ab866922f43cafe823332fa059ceda9f84&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTTXI55%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQC2Ixk56yHvnz3jWqVjwR1yE8DqBufijUVHTbVAf2S5IQIgJ%2BrY2P8E%2Bajbj786ipku09ZJNjzS%2F5NCuFXbNBXXQ44qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPmYl6Qhp9T71rghyrcAz6iXlrEH%2Bv3qTPOYT%2F17WNp1%2BTDzA3tzhj5zQ6oO2LQ822UaZTxh1DFPFYEHIfptbatW2dhpmGiETS58BzV%2FWgmruJV8r58X2QCZTp2UqiypOEcznzfqstZAJCafPc%2FC9LYQOSRPyNG9S2rATUOcfuAWih7AohZm2VTdBAlxelNjYMaYTs4iSCwrf60zVrcuDMR%2FUq4y8eR5CoLoksX%2FwiW2Qs%2BM2RSMLivG31M8kVP%2FApn09VJojAts836YQTobKOiM2yEI5Xrq6ByOfkNc4OHtLg2xSPbpT4GrLNvmh0%2B7pZHNnUat%2BVFD1nPiiD3vz4D%2Br8hPGrtN6WZZ4LjFuZ%2FS3fYsqHZr5vkZGLT%2F8ZFJU0AP%2BKgPrMVye5HT852mc1CK6QXFqF2%2Be0hobZr8ySYA0d6iT%2BJvR1tJSFEy85IqaIDkN9Q1F5j9gnFzu1m5jFWFdAl%2B3u8MJzUVYz1HBpzmPVsNzM4qY17DBIk5SEq2mTi7%2F4BXKSQKppdaRA%2Fi8RFDb3je2J%2FFOsbbQQKgbF%2B5YbtuYsPFKKLK5nt8PZjyTP8yU3vKp4J44PI0BtF0MvDO5LOEixhvh5v2hgEIAfFiAJUxVCHnhyFsHZKu0NLcQdE0POHvs9fwtZnMJqr%2Bb4GOqUBUPYb%2FRfALFUPgKWeS1LgrRDXsvpdSU%2FFYMX4UkbnTWW2evFm91rXNuZ%2FakAtZOfP6uKHDIq9bnJjPCzUbpJ505Bi%2FJs%2Fs4GbVL7HoDrDvQBfALWzIYuS4vjIPJ7izC2hlmSpbqFS6RecYoYJ%2BWrXVpEXwhyG1mS9uiALDayo%2B93PmKkGt%2FnalA7oUkEtSvQIjBhReGuXiSUwxEUskvvjq5yyzyYs&X-Amz-Signature=3e9d1c02c67d5f9b5086cd9c4d94205b8f9f8673ee9a417b6ee2c3b43b5b4bb7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTTXI55%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQC2Ixk56yHvnz3jWqVjwR1yE8DqBufijUVHTbVAf2S5IQIgJ%2BrY2P8E%2Bajbj786ipku09ZJNjzS%2F5NCuFXbNBXXQ44qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPmYl6Qhp9T71rghyrcAz6iXlrEH%2Bv3qTPOYT%2F17WNp1%2BTDzA3tzhj5zQ6oO2LQ822UaZTxh1DFPFYEHIfptbatW2dhpmGiETS58BzV%2FWgmruJV8r58X2QCZTp2UqiypOEcznzfqstZAJCafPc%2FC9LYQOSRPyNG9S2rATUOcfuAWih7AohZm2VTdBAlxelNjYMaYTs4iSCwrf60zVrcuDMR%2FUq4y8eR5CoLoksX%2FwiW2Qs%2BM2RSMLivG31M8kVP%2FApn09VJojAts836YQTobKOiM2yEI5Xrq6ByOfkNc4OHtLg2xSPbpT4GrLNvmh0%2B7pZHNnUat%2BVFD1nPiiD3vz4D%2Br8hPGrtN6WZZ4LjFuZ%2FS3fYsqHZr5vkZGLT%2F8ZFJU0AP%2BKgPrMVye5HT852mc1CK6QXFqF2%2Be0hobZr8ySYA0d6iT%2BJvR1tJSFEy85IqaIDkN9Q1F5j9gnFzu1m5jFWFdAl%2B3u8MJzUVYz1HBpzmPVsNzM4qY17DBIk5SEq2mTi7%2F4BXKSQKppdaRA%2Fi8RFDb3je2J%2FFOsbbQQKgbF%2B5YbtuYsPFKKLK5nt8PZjyTP8yU3vKp4J44PI0BtF0MvDO5LOEixhvh5v2hgEIAfFiAJUxVCHnhyFsHZKu0NLcQdE0POHvs9fwtZnMJqr%2Bb4GOqUBUPYb%2FRfALFUPgKWeS1LgrRDXsvpdSU%2FFYMX4UkbnTWW2evFm91rXNuZ%2FakAtZOfP6uKHDIq9bnJjPCzUbpJ505Bi%2FJs%2Fs4GbVL7HoDrDvQBfALWzIYuS4vjIPJ7izC2hlmSpbqFS6RecYoYJ%2BWrXVpEXwhyG1mS9uiALDayo%2B93PmKkGt%2FnalA7oUkEtSvQIjBhReGuXiSUwxEUskvvjq5yyzyYs&X-Amz-Signature=5a04860430a01772841a5639a0d624cf1bf8d87ab5271ac8d515c5d746fbb6a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTTXI55%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQC2Ixk56yHvnz3jWqVjwR1yE8DqBufijUVHTbVAf2S5IQIgJ%2BrY2P8E%2Bajbj786ipku09ZJNjzS%2F5NCuFXbNBXXQ44qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPmYl6Qhp9T71rghyrcAz6iXlrEH%2Bv3qTPOYT%2F17WNp1%2BTDzA3tzhj5zQ6oO2LQ822UaZTxh1DFPFYEHIfptbatW2dhpmGiETS58BzV%2FWgmruJV8r58X2QCZTp2UqiypOEcznzfqstZAJCafPc%2FC9LYQOSRPyNG9S2rATUOcfuAWih7AohZm2VTdBAlxelNjYMaYTs4iSCwrf60zVrcuDMR%2FUq4y8eR5CoLoksX%2FwiW2Qs%2BM2RSMLivG31M8kVP%2FApn09VJojAts836YQTobKOiM2yEI5Xrq6ByOfkNc4OHtLg2xSPbpT4GrLNvmh0%2B7pZHNnUat%2BVFD1nPiiD3vz4D%2Br8hPGrtN6WZZ4LjFuZ%2FS3fYsqHZr5vkZGLT%2F8ZFJU0AP%2BKgPrMVye5HT852mc1CK6QXFqF2%2Be0hobZr8ySYA0d6iT%2BJvR1tJSFEy85IqaIDkN9Q1F5j9gnFzu1m5jFWFdAl%2B3u8MJzUVYz1HBpzmPVsNzM4qY17DBIk5SEq2mTi7%2F4BXKSQKppdaRA%2Fi8RFDb3je2J%2FFOsbbQQKgbF%2B5YbtuYsPFKKLK5nt8PZjyTP8yU3vKp4J44PI0BtF0MvDO5LOEixhvh5v2hgEIAfFiAJUxVCHnhyFsHZKu0NLcQdE0POHvs9fwtZnMJqr%2Bb4GOqUBUPYb%2FRfALFUPgKWeS1LgrRDXsvpdSU%2FFYMX4UkbnTWW2evFm91rXNuZ%2FakAtZOfP6uKHDIq9bnJjPCzUbpJ505Bi%2FJs%2Fs4GbVL7HoDrDvQBfALWzIYuS4vjIPJ7izC2hlmSpbqFS6RecYoYJ%2BWrXVpEXwhyG1mS9uiALDayo%2B93PmKkGt%2FnalA7oUkEtSvQIjBhReGuXiSUwxEUskvvjq5yyzyYs&X-Amz-Signature=9ea9b5753f4c10b4d09deb3e76e4d6202a98a3bae776f554999baa69c83c9d7c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTTXI55%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQC2Ixk56yHvnz3jWqVjwR1yE8DqBufijUVHTbVAf2S5IQIgJ%2BrY2P8E%2Bajbj786ipku09ZJNjzS%2F5NCuFXbNBXXQ44qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPmYl6Qhp9T71rghyrcAz6iXlrEH%2Bv3qTPOYT%2F17WNp1%2BTDzA3tzhj5zQ6oO2LQ822UaZTxh1DFPFYEHIfptbatW2dhpmGiETS58BzV%2FWgmruJV8r58X2QCZTp2UqiypOEcznzfqstZAJCafPc%2FC9LYQOSRPyNG9S2rATUOcfuAWih7AohZm2VTdBAlxelNjYMaYTs4iSCwrf60zVrcuDMR%2FUq4y8eR5CoLoksX%2FwiW2Qs%2BM2RSMLivG31M8kVP%2FApn09VJojAts836YQTobKOiM2yEI5Xrq6ByOfkNc4OHtLg2xSPbpT4GrLNvmh0%2B7pZHNnUat%2BVFD1nPiiD3vz4D%2Br8hPGrtN6WZZ4LjFuZ%2FS3fYsqHZr5vkZGLT%2F8ZFJU0AP%2BKgPrMVye5HT852mc1CK6QXFqF2%2Be0hobZr8ySYA0d6iT%2BJvR1tJSFEy85IqaIDkN9Q1F5j9gnFzu1m5jFWFdAl%2B3u8MJzUVYz1HBpzmPVsNzM4qY17DBIk5SEq2mTi7%2F4BXKSQKppdaRA%2Fi8RFDb3je2J%2FFOsbbQQKgbF%2B5YbtuYsPFKKLK5nt8PZjyTP8yU3vKp4J44PI0BtF0MvDO5LOEixhvh5v2hgEIAfFiAJUxVCHnhyFsHZKu0NLcQdE0POHvs9fwtZnMJqr%2Bb4GOqUBUPYb%2FRfALFUPgKWeS1LgrRDXsvpdSU%2FFYMX4UkbnTWW2evFm91rXNuZ%2FakAtZOfP6uKHDIq9bnJjPCzUbpJ505Bi%2FJs%2Fs4GbVL7HoDrDvQBfALWzIYuS4vjIPJ7izC2hlmSpbqFS6RecYoYJ%2BWrXVpEXwhyG1mS9uiALDayo%2B93PmKkGt%2FnalA7oUkEtSvQIjBhReGuXiSUwxEUskvvjq5yyzyYs&X-Amz-Signature=afad7a22ea9d75ffa1ae5474eabd57d6d27884cddd626195e7767c89cde7e3b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

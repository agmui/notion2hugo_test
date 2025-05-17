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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJT5T5YC%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsCfTElmzt2OCWtNMddxSyqgU1ROsm41bewJkoK3o%2BjQIgS%2FkpONyhy93VcC%2FG72kE7kN7kPY3EDV6SW%2Bqq4OCoG0q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOji%2Fq%2FfqhEvnopCYCrcA%2BjIFD5uticS7VV4wYvIDVO8NVN2E6t1YZS9xdnN%2FRGdYtyOQ4ECigNr80aOuLSy9XA0d9tXVmazEIsVILnO%2FBzSCbgDgkYeJ9lntyhML0NvJclrMCqpRrAEhyXsCNYI7iC%2FZeD3D2JU836zcZNGAPb22%2Fu9q1972Ti3Z663isezm8KEPYQPMmIAz1Ydr3uYNbtKZMyG4mH56cw69QgBHG60tLfvSIaNMPa71Ns9i6cVcxxS7mdru8pzLf7qe92hdSdVihMo1fXalKQX7YlcVpkTe1KKnuyah7Gt3FNql1ok4%2F27M6sxIZlp%2BY8ICTQE%2BpuN9b4pbQNNUr5mXgAa0eVDJqTrw0DGMN9wbIJPcNqosgEnsN8iZOEvjAeYWrz64nYrITFMCJ1oWUIGe3VjWjsNMDyQbwFpgvqNQPytxgQWBQcVv25CfGeiZkpZEf4MuamyHGCXaLT3QH3RM0xVv5jHUlSi2n8fmWx9WKzOcQ4s227euFpO2WXKWw5FM%2Bzknh3vjVuR1kTwwSGS9vhn62yT09Q1G3rpdrlDGhqinqpA1D1OBI%2F6%2BrKcusavu%2FI74QYV%2BHqjVRREO%2FVfOshhCTkHZNXB8J%2BJiS702WSsxPOCcsh2Tpr0BmMVhXZKMLa8ocEGOqUBlL5ecmBzRwpTIMyPa%2BrOh6cNMOznarbf6TzDl%2Bax6jrFDsDYQIAUyA93UjNDqEsas7R6mhpErYw55CXcDMmGOmnGl5s3XI7yn8Jn%2Fhp57kreTxqhLKDFiQAtBip2Cx1povJjvJ7%2BrXWitYCAU3RVkyp%2BNCvZvJwKNx4hZ%2BPkFu6Mtph6T0aj25fXPBuhI69SsE2kyTz2xwnYUx40XnNLMJHSE4u%2B&X-Amz-Signature=efb2ad0b21135aa652cce5357d4fea5e184f8772f9d8671da39766abe32419df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJT5T5YC%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsCfTElmzt2OCWtNMddxSyqgU1ROsm41bewJkoK3o%2BjQIgS%2FkpONyhy93VcC%2FG72kE7kN7kPY3EDV6SW%2Bqq4OCoG0q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOji%2Fq%2FfqhEvnopCYCrcA%2BjIFD5uticS7VV4wYvIDVO8NVN2E6t1YZS9xdnN%2FRGdYtyOQ4ECigNr80aOuLSy9XA0d9tXVmazEIsVILnO%2FBzSCbgDgkYeJ9lntyhML0NvJclrMCqpRrAEhyXsCNYI7iC%2FZeD3D2JU836zcZNGAPb22%2Fu9q1972Ti3Z663isezm8KEPYQPMmIAz1Ydr3uYNbtKZMyG4mH56cw69QgBHG60tLfvSIaNMPa71Ns9i6cVcxxS7mdru8pzLf7qe92hdSdVihMo1fXalKQX7YlcVpkTe1KKnuyah7Gt3FNql1ok4%2F27M6sxIZlp%2BY8ICTQE%2BpuN9b4pbQNNUr5mXgAa0eVDJqTrw0DGMN9wbIJPcNqosgEnsN8iZOEvjAeYWrz64nYrITFMCJ1oWUIGe3VjWjsNMDyQbwFpgvqNQPytxgQWBQcVv25CfGeiZkpZEf4MuamyHGCXaLT3QH3RM0xVv5jHUlSi2n8fmWx9WKzOcQ4s227euFpO2WXKWw5FM%2Bzknh3vjVuR1kTwwSGS9vhn62yT09Q1G3rpdrlDGhqinqpA1D1OBI%2F6%2BrKcusavu%2FI74QYV%2BHqjVRREO%2FVfOshhCTkHZNXB8J%2BJiS702WSsxPOCcsh2Tpr0BmMVhXZKMLa8ocEGOqUBlL5ecmBzRwpTIMyPa%2BrOh6cNMOznarbf6TzDl%2Bax6jrFDsDYQIAUyA93UjNDqEsas7R6mhpErYw55CXcDMmGOmnGl5s3XI7yn8Jn%2Fhp57kreTxqhLKDFiQAtBip2Cx1povJjvJ7%2BrXWitYCAU3RVkyp%2BNCvZvJwKNx4hZ%2BPkFu6Mtph6T0aj25fXPBuhI69SsE2kyTz2xwnYUx40XnNLMJHSE4u%2B&X-Amz-Signature=18dbbf882a27ce7668621212d09f6ecd172366381926c69bb0884cff3f9f87d9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJT5T5YC%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsCfTElmzt2OCWtNMddxSyqgU1ROsm41bewJkoK3o%2BjQIgS%2FkpONyhy93VcC%2FG72kE7kN7kPY3EDV6SW%2Bqq4OCoG0q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOji%2Fq%2FfqhEvnopCYCrcA%2BjIFD5uticS7VV4wYvIDVO8NVN2E6t1YZS9xdnN%2FRGdYtyOQ4ECigNr80aOuLSy9XA0d9tXVmazEIsVILnO%2FBzSCbgDgkYeJ9lntyhML0NvJclrMCqpRrAEhyXsCNYI7iC%2FZeD3D2JU836zcZNGAPb22%2Fu9q1972Ti3Z663isezm8KEPYQPMmIAz1Ydr3uYNbtKZMyG4mH56cw69QgBHG60tLfvSIaNMPa71Ns9i6cVcxxS7mdru8pzLf7qe92hdSdVihMo1fXalKQX7YlcVpkTe1KKnuyah7Gt3FNql1ok4%2F27M6sxIZlp%2BY8ICTQE%2BpuN9b4pbQNNUr5mXgAa0eVDJqTrw0DGMN9wbIJPcNqosgEnsN8iZOEvjAeYWrz64nYrITFMCJ1oWUIGe3VjWjsNMDyQbwFpgvqNQPytxgQWBQcVv25CfGeiZkpZEf4MuamyHGCXaLT3QH3RM0xVv5jHUlSi2n8fmWx9WKzOcQ4s227euFpO2WXKWw5FM%2Bzknh3vjVuR1kTwwSGS9vhn62yT09Q1G3rpdrlDGhqinqpA1D1OBI%2F6%2BrKcusavu%2FI74QYV%2BHqjVRREO%2FVfOshhCTkHZNXB8J%2BJiS702WSsxPOCcsh2Tpr0BmMVhXZKMLa8ocEGOqUBlL5ecmBzRwpTIMyPa%2BrOh6cNMOznarbf6TzDl%2Bax6jrFDsDYQIAUyA93UjNDqEsas7R6mhpErYw55CXcDMmGOmnGl5s3XI7yn8Jn%2Fhp57kreTxqhLKDFiQAtBip2Cx1povJjvJ7%2BrXWitYCAU3RVkyp%2BNCvZvJwKNx4hZ%2BPkFu6Mtph6T0aj25fXPBuhI69SsE2kyTz2xwnYUx40XnNLMJHSE4u%2B&X-Amz-Signature=e15592fdcfe7f382092041391a731fe2a220b996732067e34889a83eac1d2c6a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJT5T5YC%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsCfTElmzt2OCWtNMddxSyqgU1ROsm41bewJkoK3o%2BjQIgS%2FkpONyhy93VcC%2FG72kE7kN7kPY3EDV6SW%2Bqq4OCoG0q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOji%2Fq%2FfqhEvnopCYCrcA%2BjIFD5uticS7VV4wYvIDVO8NVN2E6t1YZS9xdnN%2FRGdYtyOQ4ECigNr80aOuLSy9XA0d9tXVmazEIsVILnO%2FBzSCbgDgkYeJ9lntyhML0NvJclrMCqpRrAEhyXsCNYI7iC%2FZeD3D2JU836zcZNGAPb22%2Fu9q1972Ti3Z663isezm8KEPYQPMmIAz1Ydr3uYNbtKZMyG4mH56cw69QgBHG60tLfvSIaNMPa71Ns9i6cVcxxS7mdru8pzLf7qe92hdSdVihMo1fXalKQX7YlcVpkTe1KKnuyah7Gt3FNql1ok4%2F27M6sxIZlp%2BY8ICTQE%2BpuN9b4pbQNNUr5mXgAa0eVDJqTrw0DGMN9wbIJPcNqosgEnsN8iZOEvjAeYWrz64nYrITFMCJ1oWUIGe3VjWjsNMDyQbwFpgvqNQPytxgQWBQcVv25CfGeiZkpZEf4MuamyHGCXaLT3QH3RM0xVv5jHUlSi2n8fmWx9WKzOcQ4s227euFpO2WXKWw5FM%2Bzknh3vjVuR1kTwwSGS9vhn62yT09Q1G3rpdrlDGhqinqpA1D1OBI%2F6%2BrKcusavu%2FI74QYV%2BHqjVRREO%2FVfOshhCTkHZNXB8J%2BJiS702WSsxPOCcsh2Tpr0BmMVhXZKMLa8ocEGOqUBlL5ecmBzRwpTIMyPa%2BrOh6cNMOznarbf6TzDl%2Bax6jrFDsDYQIAUyA93UjNDqEsas7R6mhpErYw55CXcDMmGOmnGl5s3XI7yn8Jn%2Fhp57kreTxqhLKDFiQAtBip2Cx1povJjvJ7%2BrXWitYCAU3RVkyp%2BNCvZvJwKNx4hZ%2BPkFu6Mtph6T0aj25fXPBuhI69SsE2kyTz2xwnYUx40XnNLMJHSE4u%2B&X-Amz-Signature=84a682d39d2d7d634ee0cca2cff1c248411dbe2c82eb84353c7d107dca979c9e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJT5T5YC%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsCfTElmzt2OCWtNMddxSyqgU1ROsm41bewJkoK3o%2BjQIgS%2FkpONyhy93VcC%2FG72kE7kN7kPY3EDV6SW%2Bqq4OCoG0q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOji%2Fq%2FfqhEvnopCYCrcA%2BjIFD5uticS7VV4wYvIDVO8NVN2E6t1YZS9xdnN%2FRGdYtyOQ4ECigNr80aOuLSy9XA0d9tXVmazEIsVILnO%2FBzSCbgDgkYeJ9lntyhML0NvJclrMCqpRrAEhyXsCNYI7iC%2FZeD3D2JU836zcZNGAPb22%2Fu9q1972Ti3Z663isezm8KEPYQPMmIAz1Ydr3uYNbtKZMyG4mH56cw69QgBHG60tLfvSIaNMPa71Ns9i6cVcxxS7mdru8pzLf7qe92hdSdVihMo1fXalKQX7YlcVpkTe1KKnuyah7Gt3FNql1ok4%2F27M6sxIZlp%2BY8ICTQE%2BpuN9b4pbQNNUr5mXgAa0eVDJqTrw0DGMN9wbIJPcNqosgEnsN8iZOEvjAeYWrz64nYrITFMCJ1oWUIGe3VjWjsNMDyQbwFpgvqNQPytxgQWBQcVv25CfGeiZkpZEf4MuamyHGCXaLT3QH3RM0xVv5jHUlSi2n8fmWx9WKzOcQ4s227euFpO2WXKWw5FM%2Bzknh3vjVuR1kTwwSGS9vhn62yT09Q1G3rpdrlDGhqinqpA1D1OBI%2F6%2BrKcusavu%2FI74QYV%2BHqjVRREO%2FVfOshhCTkHZNXB8J%2BJiS702WSsxPOCcsh2Tpr0BmMVhXZKMLa8ocEGOqUBlL5ecmBzRwpTIMyPa%2BrOh6cNMOznarbf6TzDl%2Bax6jrFDsDYQIAUyA93UjNDqEsas7R6mhpErYw55CXcDMmGOmnGl5s3XI7yn8Jn%2Fhp57kreTxqhLKDFiQAtBip2Cx1povJjvJ7%2BrXWitYCAU3RVkyp%2BNCvZvJwKNx4hZ%2BPkFu6Mtph6T0aj25fXPBuhI69SsE2kyTz2xwnYUx40XnNLMJHSE4u%2B&X-Amz-Signature=705719c7dc4be088ec11060b6f45d58d25a07e86a9741a68a176f3078efce03c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

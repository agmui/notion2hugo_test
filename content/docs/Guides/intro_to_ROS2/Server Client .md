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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XQGZ3K5%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaBVU8uziy3TV9dg1W9tuF6bmlHkKq4fgbnjYxTPOViwIgEe9OwLiAg7AdfZA5gaFtBv7DteV4AZEkXvcrUa8M9UoqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO56IOdbpwuaEDmLQCrcA%2F2McLy8RoBK91x7LuO4ZZKRXp31Qbt%2BuuiUhrpSVdpE77zfzbllgYDb8iNkEZCR3INph8HruBjis77XML28WpNmDwziSrTB7wVTq%2FJ4P8%2BrSyhfPsFSPpsn50h7T6stXeJvfGlB%2F3gm7UKGaafJhrPx2dH7C4w29WbASReD%2FaLkaMZo0%2BLYzpGhG96TsHmzL1bR%2FDGrUsMdf7Nkars5udJh9CLPyPY%2BMEXaDDWmlorZbMuqZ9ZdhLqlBVptF2oWZpl8JYujYcCIVzDUDSQ5NCofdqxPVsZuEPNHRjUb3dyfT9Zc6D03hiKRLw4IEWzjHTwoC3mG9%2FSUlnor1MJPG9SlfjSqRW68FO%2B5hMmyY%2FLlQaZJBm3LTabd83MQqVY20KkWjesIvPSdlzBxwYGd1HEr5jWMpjuJhcqW%2B6wAzgd2IkyWMzxmh4Wetepyi9cE6%2FYjO4VtqNtFcTs1olnExE2i0NtOP7hjzNaNn9bt8dsm0oMUTZLMJuJeoSV2swfr4NZCBAfUr2MD%2FiVWRj5JUoXo3tBsb7LVM8tWnnyU80pRpCGmBSBriyQY0T7oeI51cBDFVf8U9ZCWYZKpDKaqnpz%2BbLmz46sXQk%2FwfLze90NwnUueSUDJPlMdhol6MKC8hMMGOqUBpF9HEkkN2dUseKqfmChUvzPO586AH00PAnIgoe5%2BrFlAZ9mX5CTcvMDnL5l0qQ3ikzgX8KYOcpPR%2FGhsIzaLH6Ny2NbuByADnTT5WQwkZiEu%2Bm50Ok057hFcy%2FLl6iOiaicLZhk7HZVuH6HQqDMVeB3BCCLnins5LRYhq0J2Z29vy4TgJ35OFYpk%2BPhb5%2Fh8RIemkZraxNPHkywbNYO6MxiBacqY&X-Amz-Signature=fab276c5b8b8ec15063dfe32f08eb0b90d9220a6b0ae52e3802f9c48e751434a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XQGZ3K5%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaBVU8uziy3TV9dg1W9tuF6bmlHkKq4fgbnjYxTPOViwIgEe9OwLiAg7AdfZA5gaFtBv7DteV4AZEkXvcrUa8M9UoqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO56IOdbpwuaEDmLQCrcA%2F2McLy8RoBK91x7LuO4ZZKRXp31Qbt%2BuuiUhrpSVdpE77zfzbllgYDb8iNkEZCR3INph8HruBjis77XML28WpNmDwziSrTB7wVTq%2FJ4P8%2BrSyhfPsFSPpsn50h7T6stXeJvfGlB%2F3gm7UKGaafJhrPx2dH7C4w29WbASReD%2FaLkaMZo0%2BLYzpGhG96TsHmzL1bR%2FDGrUsMdf7Nkars5udJh9CLPyPY%2BMEXaDDWmlorZbMuqZ9ZdhLqlBVptF2oWZpl8JYujYcCIVzDUDSQ5NCofdqxPVsZuEPNHRjUb3dyfT9Zc6D03hiKRLw4IEWzjHTwoC3mG9%2FSUlnor1MJPG9SlfjSqRW68FO%2B5hMmyY%2FLlQaZJBm3LTabd83MQqVY20KkWjesIvPSdlzBxwYGd1HEr5jWMpjuJhcqW%2B6wAzgd2IkyWMzxmh4Wetepyi9cE6%2FYjO4VtqNtFcTs1olnExE2i0NtOP7hjzNaNn9bt8dsm0oMUTZLMJuJeoSV2swfr4NZCBAfUr2MD%2FiVWRj5JUoXo3tBsb7LVM8tWnnyU80pRpCGmBSBriyQY0T7oeI51cBDFVf8U9ZCWYZKpDKaqnpz%2BbLmz46sXQk%2FwfLze90NwnUueSUDJPlMdhol6MKC8hMMGOqUBpF9HEkkN2dUseKqfmChUvzPO586AH00PAnIgoe5%2BrFlAZ9mX5CTcvMDnL5l0qQ3ikzgX8KYOcpPR%2FGhsIzaLH6Ny2NbuByADnTT5WQwkZiEu%2Bm50Ok057hFcy%2FLl6iOiaicLZhk7HZVuH6HQqDMVeB3BCCLnins5LRYhq0J2Z29vy4TgJ35OFYpk%2BPhb5%2Fh8RIemkZraxNPHkywbNYO6MxiBacqY&X-Amz-Signature=87ef5dec179309d2fd59e6b4b0edc58a49af0feeee2d83d50a6401670a930798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XQGZ3K5%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaBVU8uziy3TV9dg1W9tuF6bmlHkKq4fgbnjYxTPOViwIgEe9OwLiAg7AdfZA5gaFtBv7DteV4AZEkXvcrUa8M9UoqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO56IOdbpwuaEDmLQCrcA%2F2McLy8RoBK91x7LuO4ZZKRXp31Qbt%2BuuiUhrpSVdpE77zfzbllgYDb8iNkEZCR3INph8HruBjis77XML28WpNmDwziSrTB7wVTq%2FJ4P8%2BrSyhfPsFSPpsn50h7T6stXeJvfGlB%2F3gm7UKGaafJhrPx2dH7C4w29WbASReD%2FaLkaMZo0%2BLYzpGhG96TsHmzL1bR%2FDGrUsMdf7Nkars5udJh9CLPyPY%2BMEXaDDWmlorZbMuqZ9ZdhLqlBVptF2oWZpl8JYujYcCIVzDUDSQ5NCofdqxPVsZuEPNHRjUb3dyfT9Zc6D03hiKRLw4IEWzjHTwoC3mG9%2FSUlnor1MJPG9SlfjSqRW68FO%2B5hMmyY%2FLlQaZJBm3LTabd83MQqVY20KkWjesIvPSdlzBxwYGd1HEr5jWMpjuJhcqW%2B6wAzgd2IkyWMzxmh4Wetepyi9cE6%2FYjO4VtqNtFcTs1olnExE2i0NtOP7hjzNaNn9bt8dsm0oMUTZLMJuJeoSV2swfr4NZCBAfUr2MD%2FiVWRj5JUoXo3tBsb7LVM8tWnnyU80pRpCGmBSBriyQY0T7oeI51cBDFVf8U9ZCWYZKpDKaqnpz%2BbLmz46sXQk%2FwfLze90NwnUueSUDJPlMdhol6MKC8hMMGOqUBpF9HEkkN2dUseKqfmChUvzPO586AH00PAnIgoe5%2BrFlAZ9mX5CTcvMDnL5l0qQ3ikzgX8KYOcpPR%2FGhsIzaLH6Ny2NbuByADnTT5WQwkZiEu%2Bm50Ok057hFcy%2FLl6iOiaicLZhk7HZVuH6HQqDMVeB3BCCLnins5LRYhq0J2Z29vy4TgJ35OFYpk%2BPhb5%2Fh8RIemkZraxNPHkywbNYO6MxiBacqY&X-Amz-Signature=25844d101b2d5c39d05e80bb2afedc60d18f391930e47309619af913d9a2926d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XQGZ3K5%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaBVU8uziy3TV9dg1W9tuF6bmlHkKq4fgbnjYxTPOViwIgEe9OwLiAg7AdfZA5gaFtBv7DteV4AZEkXvcrUa8M9UoqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO56IOdbpwuaEDmLQCrcA%2F2McLy8RoBK91x7LuO4ZZKRXp31Qbt%2BuuiUhrpSVdpE77zfzbllgYDb8iNkEZCR3INph8HruBjis77XML28WpNmDwziSrTB7wVTq%2FJ4P8%2BrSyhfPsFSPpsn50h7T6stXeJvfGlB%2F3gm7UKGaafJhrPx2dH7C4w29WbASReD%2FaLkaMZo0%2BLYzpGhG96TsHmzL1bR%2FDGrUsMdf7Nkars5udJh9CLPyPY%2BMEXaDDWmlorZbMuqZ9ZdhLqlBVptF2oWZpl8JYujYcCIVzDUDSQ5NCofdqxPVsZuEPNHRjUb3dyfT9Zc6D03hiKRLw4IEWzjHTwoC3mG9%2FSUlnor1MJPG9SlfjSqRW68FO%2B5hMmyY%2FLlQaZJBm3LTabd83MQqVY20KkWjesIvPSdlzBxwYGd1HEr5jWMpjuJhcqW%2B6wAzgd2IkyWMzxmh4Wetepyi9cE6%2FYjO4VtqNtFcTs1olnExE2i0NtOP7hjzNaNn9bt8dsm0oMUTZLMJuJeoSV2swfr4NZCBAfUr2MD%2FiVWRj5JUoXo3tBsb7LVM8tWnnyU80pRpCGmBSBriyQY0T7oeI51cBDFVf8U9ZCWYZKpDKaqnpz%2BbLmz46sXQk%2FwfLze90NwnUueSUDJPlMdhol6MKC8hMMGOqUBpF9HEkkN2dUseKqfmChUvzPO586AH00PAnIgoe5%2BrFlAZ9mX5CTcvMDnL5l0qQ3ikzgX8KYOcpPR%2FGhsIzaLH6Ny2NbuByADnTT5WQwkZiEu%2Bm50Ok057hFcy%2FLl6iOiaicLZhk7HZVuH6HQqDMVeB3BCCLnins5LRYhq0J2Z29vy4TgJ35OFYpk%2BPhb5%2Fh8RIemkZraxNPHkywbNYO6MxiBacqY&X-Amz-Signature=3bcf6568ff5ae5e724b4a0823f910b6c712db286d891b58c0a02d31f83dcf219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XQGZ3K5%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaBVU8uziy3TV9dg1W9tuF6bmlHkKq4fgbnjYxTPOViwIgEe9OwLiAg7AdfZA5gaFtBv7DteV4AZEkXvcrUa8M9UoqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO56IOdbpwuaEDmLQCrcA%2F2McLy8RoBK91x7LuO4ZZKRXp31Qbt%2BuuiUhrpSVdpE77zfzbllgYDb8iNkEZCR3INph8HruBjis77XML28WpNmDwziSrTB7wVTq%2FJ4P8%2BrSyhfPsFSPpsn50h7T6stXeJvfGlB%2F3gm7UKGaafJhrPx2dH7C4w29WbASReD%2FaLkaMZo0%2BLYzpGhG96TsHmzL1bR%2FDGrUsMdf7Nkars5udJh9CLPyPY%2BMEXaDDWmlorZbMuqZ9ZdhLqlBVptF2oWZpl8JYujYcCIVzDUDSQ5NCofdqxPVsZuEPNHRjUb3dyfT9Zc6D03hiKRLw4IEWzjHTwoC3mG9%2FSUlnor1MJPG9SlfjSqRW68FO%2B5hMmyY%2FLlQaZJBm3LTabd83MQqVY20KkWjesIvPSdlzBxwYGd1HEr5jWMpjuJhcqW%2B6wAzgd2IkyWMzxmh4Wetepyi9cE6%2FYjO4VtqNtFcTs1olnExE2i0NtOP7hjzNaNn9bt8dsm0oMUTZLMJuJeoSV2swfr4NZCBAfUr2MD%2FiVWRj5JUoXo3tBsb7LVM8tWnnyU80pRpCGmBSBriyQY0T7oeI51cBDFVf8U9ZCWYZKpDKaqnpz%2BbLmz46sXQk%2FwfLze90NwnUueSUDJPlMdhol6MKC8hMMGOqUBpF9HEkkN2dUseKqfmChUvzPO586AH00PAnIgoe5%2BrFlAZ9mX5CTcvMDnL5l0qQ3ikzgX8KYOcpPR%2FGhsIzaLH6Ny2NbuByADnTT5WQwkZiEu%2Bm50Ok057hFcy%2FLl6iOiaicLZhk7HZVuH6HQqDMVeB3BCCLnins5LRYhq0J2Z29vy4TgJ35OFYpk%2BPhb5%2Fh8RIemkZraxNPHkywbNYO6MxiBacqY&X-Amz-Signature=b597ef8af62480e73b53a2c677a623cb16980983712f32b0feb54732345d6490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

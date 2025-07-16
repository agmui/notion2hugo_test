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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VHGCFHJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQC1y2sIo76y7gBSYfZXZmJn5O4pkMuS9AIjNGyJ3ib9iQIgJyR3B1v8O7NX4566vtzSOGMfBeY54ejnZIHIQew1xRwq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPY2j3NU2YE%2BLpNReSrcA9JCRy7BcEFVU3T%2BdTVHoSGq%2BrMsaWACJKQv4ir6lgpOztEr0ZhYFlGtpQd2cDnZQLWZnd6ChdV9bwd5kX2v9k3dHWKeX3ztMpPvQKjXj%2BQ%2B3T9IwhihG91WnFIsloX1bvdGiD5DysASFwyLUHS6zMufPcqRHjQpWqMUZEAMZdCzqDIM%2B9UHweZrorkMonwXji1c4z8QlHske8MX2mbbxuuMJK7Wcun1WMQu3%2FjLk1lwpQ4zsCij6pRvy27NLQmezBerfaAmegybOHnmM2YRx7EqSLSvSOSLa6Unpf9f5f%2BdK4Vn1gOjx0sCiiobFntFgcDv2t%2FM0vs3RyxSmdIZIuXNnTV%2B3IhV1iUVMMEaQhFYLF8c68umt4UBIpfJvaR%2BP4F%2FoytTslq2apgMIPoagl1jf8F0aIYvjCqn6DC0%2BuRwbE5Qpl62YKoFhXivCnU7hAcTgBPBz5i4PRyRcYLu7vIp4YfPYOYa%2FdWE78PisrTcSqxf4Wj9zTi79OkIqNAfQZ%2FyCpSCL1BecNcUMFt%2BZcEY2qc78Ibdcbvq3om%2FlgHr5w6%2BbCL1EISuiyQfycBipNDKmC%2BXzs0VZN%2FaxII7dDp%2F1ULkZc62yrHRCFCB8U0ZMExpKEKVWs1Q9hEjMKbQ28MGOqUBR%2B5b2phEan4Qegfd9oFcABw2vdLUjrfsFieCo%2FBhdUMtLRv1dZgrNMH698qfJtJT4adGHPwEhG5VMjTsRrlyFmXSVCBDVYYICo%2FZQjtOH1o%2BNC8%2Bk9XhlawBhBN3YNy6ZM%2Fz4%2FIlKjiHDAKC90p8AvUC0kdfgigOgBYMu68xM7cBTBgSiGmmu9w8LqM5jO2Y4WSoW41UcsHNfDXsvcPzTRqp3x2c&X-Amz-Signature=d6aa853ee0cd64937e10c44c492e73f2b1dc44593120e3edb20ea77c95e6b68b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VHGCFHJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQC1y2sIo76y7gBSYfZXZmJn5O4pkMuS9AIjNGyJ3ib9iQIgJyR3B1v8O7NX4566vtzSOGMfBeY54ejnZIHIQew1xRwq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPY2j3NU2YE%2BLpNReSrcA9JCRy7BcEFVU3T%2BdTVHoSGq%2BrMsaWACJKQv4ir6lgpOztEr0ZhYFlGtpQd2cDnZQLWZnd6ChdV9bwd5kX2v9k3dHWKeX3ztMpPvQKjXj%2BQ%2B3T9IwhihG91WnFIsloX1bvdGiD5DysASFwyLUHS6zMufPcqRHjQpWqMUZEAMZdCzqDIM%2B9UHweZrorkMonwXji1c4z8QlHske8MX2mbbxuuMJK7Wcun1WMQu3%2FjLk1lwpQ4zsCij6pRvy27NLQmezBerfaAmegybOHnmM2YRx7EqSLSvSOSLa6Unpf9f5f%2BdK4Vn1gOjx0sCiiobFntFgcDv2t%2FM0vs3RyxSmdIZIuXNnTV%2B3IhV1iUVMMEaQhFYLF8c68umt4UBIpfJvaR%2BP4F%2FoytTslq2apgMIPoagl1jf8F0aIYvjCqn6DC0%2BuRwbE5Qpl62YKoFhXivCnU7hAcTgBPBz5i4PRyRcYLu7vIp4YfPYOYa%2FdWE78PisrTcSqxf4Wj9zTi79OkIqNAfQZ%2FyCpSCL1BecNcUMFt%2BZcEY2qc78Ibdcbvq3om%2FlgHr5w6%2BbCL1EISuiyQfycBipNDKmC%2BXzs0VZN%2FaxII7dDp%2F1ULkZc62yrHRCFCB8U0ZMExpKEKVWs1Q9hEjMKbQ28MGOqUBR%2B5b2phEan4Qegfd9oFcABw2vdLUjrfsFieCo%2FBhdUMtLRv1dZgrNMH698qfJtJT4adGHPwEhG5VMjTsRrlyFmXSVCBDVYYICo%2FZQjtOH1o%2BNC8%2Bk9XhlawBhBN3YNy6ZM%2Fz4%2FIlKjiHDAKC90p8AvUC0kdfgigOgBYMu68xM7cBTBgSiGmmu9w8LqM5jO2Y4WSoW41UcsHNfDXsvcPzTRqp3x2c&X-Amz-Signature=ba70ca34f8d83f3f209f35666ce31f00a00760003b143126cbc9a73fb8fc7385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VHGCFHJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQC1y2sIo76y7gBSYfZXZmJn5O4pkMuS9AIjNGyJ3ib9iQIgJyR3B1v8O7NX4566vtzSOGMfBeY54ejnZIHIQew1xRwq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPY2j3NU2YE%2BLpNReSrcA9JCRy7BcEFVU3T%2BdTVHoSGq%2BrMsaWACJKQv4ir6lgpOztEr0ZhYFlGtpQd2cDnZQLWZnd6ChdV9bwd5kX2v9k3dHWKeX3ztMpPvQKjXj%2BQ%2B3T9IwhihG91WnFIsloX1bvdGiD5DysASFwyLUHS6zMufPcqRHjQpWqMUZEAMZdCzqDIM%2B9UHweZrorkMonwXji1c4z8QlHske8MX2mbbxuuMJK7Wcun1WMQu3%2FjLk1lwpQ4zsCij6pRvy27NLQmezBerfaAmegybOHnmM2YRx7EqSLSvSOSLa6Unpf9f5f%2BdK4Vn1gOjx0sCiiobFntFgcDv2t%2FM0vs3RyxSmdIZIuXNnTV%2B3IhV1iUVMMEaQhFYLF8c68umt4UBIpfJvaR%2BP4F%2FoytTslq2apgMIPoagl1jf8F0aIYvjCqn6DC0%2BuRwbE5Qpl62YKoFhXivCnU7hAcTgBPBz5i4PRyRcYLu7vIp4YfPYOYa%2FdWE78PisrTcSqxf4Wj9zTi79OkIqNAfQZ%2FyCpSCL1BecNcUMFt%2BZcEY2qc78Ibdcbvq3om%2FlgHr5w6%2BbCL1EISuiyQfycBipNDKmC%2BXzs0VZN%2FaxII7dDp%2F1ULkZc62yrHRCFCB8U0ZMExpKEKVWs1Q9hEjMKbQ28MGOqUBR%2B5b2phEan4Qegfd9oFcABw2vdLUjrfsFieCo%2FBhdUMtLRv1dZgrNMH698qfJtJT4adGHPwEhG5VMjTsRrlyFmXSVCBDVYYICo%2FZQjtOH1o%2BNC8%2Bk9XhlawBhBN3YNy6ZM%2Fz4%2FIlKjiHDAKC90p8AvUC0kdfgigOgBYMu68xM7cBTBgSiGmmu9w8LqM5jO2Y4WSoW41UcsHNfDXsvcPzTRqp3x2c&X-Amz-Signature=da4d5aa64b6e39d8948f5eab766a0f7f4ce9bd4c70eb43fab72613fd8cbdc7f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VHGCFHJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQC1y2sIo76y7gBSYfZXZmJn5O4pkMuS9AIjNGyJ3ib9iQIgJyR3B1v8O7NX4566vtzSOGMfBeY54ejnZIHIQew1xRwq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPY2j3NU2YE%2BLpNReSrcA9JCRy7BcEFVU3T%2BdTVHoSGq%2BrMsaWACJKQv4ir6lgpOztEr0ZhYFlGtpQd2cDnZQLWZnd6ChdV9bwd5kX2v9k3dHWKeX3ztMpPvQKjXj%2BQ%2B3T9IwhihG91WnFIsloX1bvdGiD5DysASFwyLUHS6zMufPcqRHjQpWqMUZEAMZdCzqDIM%2B9UHweZrorkMonwXji1c4z8QlHske8MX2mbbxuuMJK7Wcun1WMQu3%2FjLk1lwpQ4zsCij6pRvy27NLQmezBerfaAmegybOHnmM2YRx7EqSLSvSOSLa6Unpf9f5f%2BdK4Vn1gOjx0sCiiobFntFgcDv2t%2FM0vs3RyxSmdIZIuXNnTV%2B3IhV1iUVMMEaQhFYLF8c68umt4UBIpfJvaR%2BP4F%2FoytTslq2apgMIPoagl1jf8F0aIYvjCqn6DC0%2BuRwbE5Qpl62YKoFhXivCnU7hAcTgBPBz5i4PRyRcYLu7vIp4YfPYOYa%2FdWE78PisrTcSqxf4Wj9zTi79OkIqNAfQZ%2FyCpSCL1BecNcUMFt%2BZcEY2qc78Ibdcbvq3om%2FlgHr5w6%2BbCL1EISuiyQfycBipNDKmC%2BXzs0VZN%2FaxII7dDp%2F1ULkZc62yrHRCFCB8U0ZMExpKEKVWs1Q9hEjMKbQ28MGOqUBR%2B5b2phEan4Qegfd9oFcABw2vdLUjrfsFieCo%2FBhdUMtLRv1dZgrNMH698qfJtJT4adGHPwEhG5VMjTsRrlyFmXSVCBDVYYICo%2FZQjtOH1o%2BNC8%2Bk9XhlawBhBN3YNy6ZM%2Fz4%2FIlKjiHDAKC90p8AvUC0kdfgigOgBYMu68xM7cBTBgSiGmmu9w8LqM5jO2Y4WSoW41UcsHNfDXsvcPzTRqp3x2c&X-Amz-Signature=34dccb198efc147e815112d0a3b3374510b5a2685736b83fd77577784155e41f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VHGCFHJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQC1y2sIo76y7gBSYfZXZmJn5O4pkMuS9AIjNGyJ3ib9iQIgJyR3B1v8O7NX4566vtzSOGMfBeY54ejnZIHIQew1xRwq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPY2j3NU2YE%2BLpNReSrcA9JCRy7BcEFVU3T%2BdTVHoSGq%2BrMsaWACJKQv4ir6lgpOztEr0ZhYFlGtpQd2cDnZQLWZnd6ChdV9bwd5kX2v9k3dHWKeX3ztMpPvQKjXj%2BQ%2B3T9IwhihG91WnFIsloX1bvdGiD5DysASFwyLUHS6zMufPcqRHjQpWqMUZEAMZdCzqDIM%2B9UHweZrorkMonwXji1c4z8QlHske8MX2mbbxuuMJK7Wcun1WMQu3%2FjLk1lwpQ4zsCij6pRvy27NLQmezBerfaAmegybOHnmM2YRx7EqSLSvSOSLa6Unpf9f5f%2BdK4Vn1gOjx0sCiiobFntFgcDv2t%2FM0vs3RyxSmdIZIuXNnTV%2B3IhV1iUVMMEaQhFYLF8c68umt4UBIpfJvaR%2BP4F%2FoytTslq2apgMIPoagl1jf8F0aIYvjCqn6DC0%2BuRwbE5Qpl62YKoFhXivCnU7hAcTgBPBz5i4PRyRcYLu7vIp4YfPYOYa%2FdWE78PisrTcSqxf4Wj9zTi79OkIqNAfQZ%2FyCpSCL1BecNcUMFt%2BZcEY2qc78Ibdcbvq3om%2FlgHr5w6%2BbCL1EISuiyQfycBipNDKmC%2BXzs0VZN%2FaxII7dDp%2F1ULkZc62yrHRCFCB8U0ZMExpKEKVWs1Q9hEjMKbQ28MGOqUBR%2B5b2phEan4Qegfd9oFcABw2vdLUjrfsFieCo%2FBhdUMtLRv1dZgrNMH698qfJtJT4adGHPwEhG5VMjTsRrlyFmXSVCBDVYYICo%2FZQjtOH1o%2BNC8%2Bk9XhlawBhBN3YNy6ZM%2Fz4%2FIlKjiHDAKC90p8AvUC0kdfgigOgBYMu68xM7cBTBgSiGmmu9w8LqM5jO2Y4WSoW41UcsHNfDXsvcPzTRqp3x2c&X-Amz-Signature=26dc8a1dfdc6cf73d16e66146f75701e93a85db9bc3a8378603d878721ae1bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

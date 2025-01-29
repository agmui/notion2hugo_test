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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6PJ7FRR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ4Z%2FKBABGfHBjN9C9gb3tAFwIaMjJ9B31DOnLZJ4TwAiEA%2FT9KAMe5ZMYoXuGT4ZNld5TmVXIUTO%2FuAcLiQ2RK%2B84qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2B7GOyy3C7uRg8Z0ircA0TPSV29KSGg8waWJcIRsrE7JVMe3UCcyucjFBrptW9rkb5yiI1LqtJIN8df2nUwLEdegybAxPEMh9Mol%2BD09oUnWa%2FX1kXCYls4Zglkqj1T2eC1eyoT0NPbtIZllrxvMyNe4OT1XR6U4KOYy573touUFFwHeZzvMbKbnoMyksq3ttPEDvLh1yqkzO3goh7S2zxsg9yRMGoO3MZGgkxGyOmtZgT9fatj2CNzb2OI3x2K4knNr2KYsyhDLF4WgMcHYChb9Ad4CKNj71XOfHCf%2F5ZKdHDDy10D1novKYrYl5ONaSQzGSg%2BjzdoujVYLIPBUhXbU6%2BrkAnwxXT8AfOtszF3A7j28b1I9Q4Uk3UzGT1oNSNhAho7cL6jVTP6CeuYrNqC6Ab7JbFKvQ4kKpJy4eC%2BvSxa6SYRy3jorIRYEZ4B2pyulXTviTPlAY1TLqkJnn1m0a96KFt30QGKnBUNwRbz8diyOAF3K%2BVpXSTbUCihGK7NqcSOcNP6VwgG1Klar1PKWTL7%2FaZL65r0f%2FsMqSHyqPJ4XZzCH0syBbqE21ljDQJfz%2Fa3CUv5TojNO1z8mskRRxLlNqp8F59jbxb12R%2BXBy2k4CnJnZlaGF4g2%2FnguuBeo8CcJk1XSzjpMMnF6rwGOqUBhTLQbaLJgrN2bK8O8HnHNrjVdj1fFj7Fr9hDY58z28ZEM7JHrkbEgioBVyuirbxXaFn6dA0%2BWxdapw0D499j0%2FMLIt8sz2Y7OmHdpMs3aqtUvXKWYqrdPiV3dxff6I1a3AbwDknFL%2FKdf%2BuOMR7K4H7tuy0VaKAlaffKjFjyDfefzHnsJD6FcM4WQmE8za5QkiEVM8MCV2RnJCdr3GSu%2B5HUsql8&X-Amz-Signature=22cc3df62906eb794a20efa9ca71cbe08d392a7abfedf3d275ed37e21b0223ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6PJ7FRR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ4Z%2FKBABGfHBjN9C9gb3tAFwIaMjJ9B31DOnLZJ4TwAiEA%2FT9KAMe5ZMYoXuGT4ZNld5TmVXIUTO%2FuAcLiQ2RK%2B84qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2B7GOyy3C7uRg8Z0ircA0TPSV29KSGg8waWJcIRsrE7JVMe3UCcyucjFBrptW9rkb5yiI1LqtJIN8df2nUwLEdegybAxPEMh9Mol%2BD09oUnWa%2FX1kXCYls4Zglkqj1T2eC1eyoT0NPbtIZllrxvMyNe4OT1XR6U4KOYy573touUFFwHeZzvMbKbnoMyksq3ttPEDvLh1yqkzO3goh7S2zxsg9yRMGoO3MZGgkxGyOmtZgT9fatj2CNzb2OI3x2K4knNr2KYsyhDLF4WgMcHYChb9Ad4CKNj71XOfHCf%2F5ZKdHDDy10D1novKYrYl5ONaSQzGSg%2BjzdoujVYLIPBUhXbU6%2BrkAnwxXT8AfOtszF3A7j28b1I9Q4Uk3UzGT1oNSNhAho7cL6jVTP6CeuYrNqC6Ab7JbFKvQ4kKpJy4eC%2BvSxa6SYRy3jorIRYEZ4B2pyulXTviTPlAY1TLqkJnn1m0a96KFt30QGKnBUNwRbz8diyOAF3K%2BVpXSTbUCihGK7NqcSOcNP6VwgG1Klar1PKWTL7%2FaZL65r0f%2FsMqSHyqPJ4XZzCH0syBbqE21ljDQJfz%2Fa3CUv5TojNO1z8mskRRxLlNqp8F59jbxb12R%2BXBy2k4CnJnZlaGF4g2%2FnguuBeo8CcJk1XSzjpMMnF6rwGOqUBhTLQbaLJgrN2bK8O8HnHNrjVdj1fFj7Fr9hDY58z28ZEM7JHrkbEgioBVyuirbxXaFn6dA0%2BWxdapw0D499j0%2FMLIt8sz2Y7OmHdpMs3aqtUvXKWYqrdPiV3dxff6I1a3AbwDknFL%2FKdf%2BuOMR7K4H7tuy0VaKAlaffKjFjyDfefzHnsJD6FcM4WQmE8za5QkiEVM8MCV2RnJCdr3GSu%2B5HUsql8&X-Amz-Signature=8cf808dc6a14fc1dc3e95322a4c30cedee558a001e4f9fc37eafef998cfc1827&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6PJ7FRR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ4Z%2FKBABGfHBjN9C9gb3tAFwIaMjJ9B31DOnLZJ4TwAiEA%2FT9KAMe5ZMYoXuGT4ZNld5TmVXIUTO%2FuAcLiQ2RK%2B84qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2B7GOyy3C7uRg8Z0ircA0TPSV29KSGg8waWJcIRsrE7JVMe3UCcyucjFBrptW9rkb5yiI1LqtJIN8df2nUwLEdegybAxPEMh9Mol%2BD09oUnWa%2FX1kXCYls4Zglkqj1T2eC1eyoT0NPbtIZllrxvMyNe4OT1XR6U4KOYy573touUFFwHeZzvMbKbnoMyksq3ttPEDvLh1yqkzO3goh7S2zxsg9yRMGoO3MZGgkxGyOmtZgT9fatj2CNzb2OI3x2K4knNr2KYsyhDLF4WgMcHYChb9Ad4CKNj71XOfHCf%2F5ZKdHDDy10D1novKYrYl5ONaSQzGSg%2BjzdoujVYLIPBUhXbU6%2BrkAnwxXT8AfOtszF3A7j28b1I9Q4Uk3UzGT1oNSNhAho7cL6jVTP6CeuYrNqC6Ab7JbFKvQ4kKpJy4eC%2BvSxa6SYRy3jorIRYEZ4B2pyulXTviTPlAY1TLqkJnn1m0a96KFt30QGKnBUNwRbz8diyOAF3K%2BVpXSTbUCihGK7NqcSOcNP6VwgG1Klar1PKWTL7%2FaZL65r0f%2FsMqSHyqPJ4XZzCH0syBbqE21ljDQJfz%2Fa3CUv5TojNO1z8mskRRxLlNqp8F59jbxb12R%2BXBy2k4CnJnZlaGF4g2%2FnguuBeo8CcJk1XSzjpMMnF6rwGOqUBhTLQbaLJgrN2bK8O8HnHNrjVdj1fFj7Fr9hDY58z28ZEM7JHrkbEgioBVyuirbxXaFn6dA0%2BWxdapw0D499j0%2FMLIt8sz2Y7OmHdpMs3aqtUvXKWYqrdPiV3dxff6I1a3AbwDknFL%2FKdf%2BuOMR7K4H7tuy0VaKAlaffKjFjyDfefzHnsJD6FcM4WQmE8za5QkiEVM8MCV2RnJCdr3GSu%2B5HUsql8&X-Amz-Signature=a8c9123f9ebd90195aebc98943e77b9c727c129f0808218ba7a45a5ec3f2ef53&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6PJ7FRR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ4Z%2FKBABGfHBjN9C9gb3tAFwIaMjJ9B31DOnLZJ4TwAiEA%2FT9KAMe5ZMYoXuGT4ZNld5TmVXIUTO%2FuAcLiQ2RK%2B84qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2B7GOyy3C7uRg8Z0ircA0TPSV29KSGg8waWJcIRsrE7JVMe3UCcyucjFBrptW9rkb5yiI1LqtJIN8df2nUwLEdegybAxPEMh9Mol%2BD09oUnWa%2FX1kXCYls4Zglkqj1T2eC1eyoT0NPbtIZllrxvMyNe4OT1XR6U4KOYy573touUFFwHeZzvMbKbnoMyksq3ttPEDvLh1yqkzO3goh7S2zxsg9yRMGoO3MZGgkxGyOmtZgT9fatj2CNzb2OI3x2K4knNr2KYsyhDLF4WgMcHYChb9Ad4CKNj71XOfHCf%2F5ZKdHDDy10D1novKYrYl5ONaSQzGSg%2BjzdoujVYLIPBUhXbU6%2BrkAnwxXT8AfOtszF3A7j28b1I9Q4Uk3UzGT1oNSNhAho7cL6jVTP6CeuYrNqC6Ab7JbFKvQ4kKpJy4eC%2BvSxa6SYRy3jorIRYEZ4B2pyulXTviTPlAY1TLqkJnn1m0a96KFt30QGKnBUNwRbz8diyOAF3K%2BVpXSTbUCihGK7NqcSOcNP6VwgG1Klar1PKWTL7%2FaZL65r0f%2FsMqSHyqPJ4XZzCH0syBbqE21ljDQJfz%2Fa3CUv5TojNO1z8mskRRxLlNqp8F59jbxb12R%2BXBy2k4CnJnZlaGF4g2%2FnguuBeo8CcJk1XSzjpMMnF6rwGOqUBhTLQbaLJgrN2bK8O8HnHNrjVdj1fFj7Fr9hDY58z28ZEM7JHrkbEgioBVyuirbxXaFn6dA0%2BWxdapw0D499j0%2FMLIt8sz2Y7OmHdpMs3aqtUvXKWYqrdPiV3dxff6I1a3AbwDknFL%2FKdf%2BuOMR7K4H7tuy0VaKAlaffKjFjyDfefzHnsJD6FcM4WQmE8za5QkiEVM8MCV2RnJCdr3GSu%2B5HUsql8&X-Amz-Signature=abbdc1db4f005eee0850a2b1948cc3ff93606ad176d06cf3881cf5f8fcd0c2f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6PJ7FRR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ4Z%2FKBABGfHBjN9C9gb3tAFwIaMjJ9B31DOnLZJ4TwAiEA%2FT9KAMe5ZMYoXuGT4ZNld5TmVXIUTO%2FuAcLiQ2RK%2B84qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2B7GOyy3C7uRg8Z0ircA0TPSV29KSGg8waWJcIRsrE7JVMe3UCcyucjFBrptW9rkb5yiI1LqtJIN8df2nUwLEdegybAxPEMh9Mol%2BD09oUnWa%2FX1kXCYls4Zglkqj1T2eC1eyoT0NPbtIZllrxvMyNe4OT1XR6U4KOYy573touUFFwHeZzvMbKbnoMyksq3ttPEDvLh1yqkzO3goh7S2zxsg9yRMGoO3MZGgkxGyOmtZgT9fatj2CNzb2OI3x2K4knNr2KYsyhDLF4WgMcHYChb9Ad4CKNj71XOfHCf%2F5ZKdHDDy10D1novKYrYl5ONaSQzGSg%2BjzdoujVYLIPBUhXbU6%2BrkAnwxXT8AfOtszF3A7j28b1I9Q4Uk3UzGT1oNSNhAho7cL6jVTP6CeuYrNqC6Ab7JbFKvQ4kKpJy4eC%2BvSxa6SYRy3jorIRYEZ4B2pyulXTviTPlAY1TLqkJnn1m0a96KFt30QGKnBUNwRbz8diyOAF3K%2BVpXSTbUCihGK7NqcSOcNP6VwgG1Klar1PKWTL7%2FaZL65r0f%2FsMqSHyqPJ4XZzCH0syBbqE21ljDQJfz%2Fa3CUv5TojNO1z8mskRRxLlNqp8F59jbxb12R%2BXBy2k4CnJnZlaGF4g2%2FnguuBeo8CcJk1XSzjpMMnF6rwGOqUBhTLQbaLJgrN2bK8O8HnHNrjVdj1fFj7Fr9hDY58z28ZEM7JHrkbEgioBVyuirbxXaFn6dA0%2BWxdapw0D499j0%2FMLIt8sz2Y7OmHdpMs3aqtUvXKWYqrdPiV3dxff6I1a3AbwDknFL%2FKdf%2BuOMR7K4H7tuy0VaKAlaffKjFjyDfefzHnsJD6FcM4WQmE8za5QkiEVM8MCV2RnJCdr3GSu%2B5HUsql8&X-Amz-Signature=a22824aed01860e24e988b4d11b4420a9191d841415505b9e97f4955a15416d2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

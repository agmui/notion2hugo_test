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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GN4U5KX%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk3sJ5wRir32eVU4JjL0YwS0YH7AtATYG%2B%2FkNcXt4UVQIhAIvo8i3E9SOduseOxRsocfjfKx5sdZc%2FThr17Kj%2BL8l4KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJEkKAY20BpDlsaM8q3APVIIE%2FtF2WYEbK8GPoAj26bjqU7uN5jCZKxw4VA7tqDVkDH%2FIAf1dOK3Vz%2BTgjpj%2BhVvwK5rcppBk2XIp0stIxSthrmcwUnftDSyJynQCVaXmnzC6bfnoZo25MGIT90vw1W%2F4M9GG8OVMcLYKpndflzXI%2BexGVbDHqRrH86mBn2x8%2Fe%2BowI%2F8Z9USGdRdbUxghi%2Bz%2B7n%2FXNWPIwfPry8gOfRTtGu2AeYzwDcciSMa8ncbcioklLIN8IKu9kP1xaEk6O4hrDf52QBd0Ks4o0LwZdoobHvwDwM1ZJM61HhaEoYYPvW2JYvMu8YgoXXB%2BqjQpTyy5KBwXdIVt1%2B922LnODJM%2FuSu0VyuAWt4GGnAcMqTKtNG6numimWpILSz%2FE7xCVZRsmbeH9wNUXEXfT43CixuVRSreMbgOMd7pHNe6v7RSWXJkFCjJRaAktpacJGOQ3lO7hzDf4jxuZ9Kzl5XHBwRGFRqcG1dHxzt2p%2BaCFCdZ5zysMG%2BhaF6Ant%2BsMqgvyKr7e1gU4DroUi8DP%2BIaEUB%2FvA0Uc%2Ffl6P759Cl9gkHum6qOyDJOcICU%2FR1rV3ZWwm98P9EpUEB%2BsV%2BA5UnLMnBsMHlNFIfU%2FR%2BencZbtJUeccVKFUmQaSA91jDT%2BJXCBjqkAcymV%2Fiw4i57Jt3JGFQbSPUlNDxOAfkiKdC%2FGid4VPsd5GLmga4kDh3wKzN6WYtjhpL38FtQYs8PG30Otow4IPvw0KkdPM3meB7GGtEb%2FXwghPphJkkOgYTtuYKCBi8PCYS0kVkeUKeYJkpx8OFf%2BqTboZ6V1HOuwlPnHXxbacsYP8uzmhaprpeT%2Fy8%2BUeho88PHSRq1e9rFil0%2BYeOBpZkXkSby&X-Amz-Signature=eca1dd9b0cd16d417989d8ef2ee0e863151b6655a2dd8d7db0e37c041a949824&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GN4U5KX%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk3sJ5wRir32eVU4JjL0YwS0YH7AtATYG%2B%2FkNcXt4UVQIhAIvo8i3E9SOduseOxRsocfjfKx5sdZc%2FThr17Kj%2BL8l4KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJEkKAY20BpDlsaM8q3APVIIE%2FtF2WYEbK8GPoAj26bjqU7uN5jCZKxw4VA7tqDVkDH%2FIAf1dOK3Vz%2BTgjpj%2BhVvwK5rcppBk2XIp0stIxSthrmcwUnftDSyJynQCVaXmnzC6bfnoZo25MGIT90vw1W%2F4M9GG8OVMcLYKpndflzXI%2BexGVbDHqRrH86mBn2x8%2Fe%2BowI%2F8Z9USGdRdbUxghi%2Bz%2B7n%2FXNWPIwfPry8gOfRTtGu2AeYzwDcciSMa8ncbcioklLIN8IKu9kP1xaEk6O4hrDf52QBd0Ks4o0LwZdoobHvwDwM1ZJM61HhaEoYYPvW2JYvMu8YgoXXB%2BqjQpTyy5KBwXdIVt1%2B922LnODJM%2FuSu0VyuAWt4GGnAcMqTKtNG6numimWpILSz%2FE7xCVZRsmbeH9wNUXEXfT43CixuVRSreMbgOMd7pHNe6v7RSWXJkFCjJRaAktpacJGOQ3lO7hzDf4jxuZ9Kzl5XHBwRGFRqcG1dHxzt2p%2BaCFCdZ5zysMG%2BhaF6Ant%2BsMqgvyKr7e1gU4DroUi8DP%2BIaEUB%2FvA0Uc%2Ffl6P759Cl9gkHum6qOyDJOcICU%2FR1rV3ZWwm98P9EpUEB%2BsV%2BA5UnLMnBsMHlNFIfU%2FR%2BencZbtJUeccVKFUmQaSA91jDT%2BJXCBjqkAcymV%2Fiw4i57Jt3JGFQbSPUlNDxOAfkiKdC%2FGid4VPsd5GLmga4kDh3wKzN6WYtjhpL38FtQYs8PG30Otow4IPvw0KkdPM3meB7GGtEb%2FXwghPphJkkOgYTtuYKCBi8PCYS0kVkeUKeYJkpx8OFf%2BqTboZ6V1HOuwlPnHXxbacsYP8uzmhaprpeT%2Fy8%2BUeho88PHSRq1e9rFil0%2BYeOBpZkXkSby&X-Amz-Signature=a3b81ad0d0da28e94dbf379a26afcd0e3bf80337070ea9dd0581743c28bf6fa1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GN4U5KX%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk3sJ5wRir32eVU4JjL0YwS0YH7AtATYG%2B%2FkNcXt4UVQIhAIvo8i3E9SOduseOxRsocfjfKx5sdZc%2FThr17Kj%2BL8l4KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJEkKAY20BpDlsaM8q3APVIIE%2FtF2WYEbK8GPoAj26bjqU7uN5jCZKxw4VA7tqDVkDH%2FIAf1dOK3Vz%2BTgjpj%2BhVvwK5rcppBk2XIp0stIxSthrmcwUnftDSyJynQCVaXmnzC6bfnoZo25MGIT90vw1W%2F4M9GG8OVMcLYKpndflzXI%2BexGVbDHqRrH86mBn2x8%2Fe%2BowI%2F8Z9USGdRdbUxghi%2Bz%2B7n%2FXNWPIwfPry8gOfRTtGu2AeYzwDcciSMa8ncbcioklLIN8IKu9kP1xaEk6O4hrDf52QBd0Ks4o0LwZdoobHvwDwM1ZJM61HhaEoYYPvW2JYvMu8YgoXXB%2BqjQpTyy5KBwXdIVt1%2B922LnODJM%2FuSu0VyuAWt4GGnAcMqTKtNG6numimWpILSz%2FE7xCVZRsmbeH9wNUXEXfT43CixuVRSreMbgOMd7pHNe6v7RSWXJkFCjJRaAktpacJGOQ3lO7hzDf4jxuZ9Kzl5XHBwRGFRqcG1dHxzt2p%2BaCFCdZ5zysMG%2BhaF6Ant%2BsMqgvyKr7e1gU4DroUi8DP%2BIaEUB%2FvA0Uc%2Ffl6P759Cl9gkHum6qOyDJOcICU%2FR1rV3ZWwm98P9EpUEB%2BsV%2BA5UnLMnBsMHlNFIfU%2FR%2BencZbtJUeccVKFUmQaSA91jDT%2BJXCBjqkAcymV%2Fiw4i57Jt3JGFQbSPUlNDxOAfkiKdC%2FGid4VPsd5GLmga4kDh3wKzN6WYtjhpL38FtQYs8PG30Otow4IPvw0KkdPM3meB7GGtEb%2FXwghPphJkkOgYTtuYKCBi8PCYS0kVkeUKeYJkpx8OFf%2BqTboZ6V1HOuwlPnHXxbacsYP8uzmhaprpeT%2Fy8%2BUeho88PHSRq1e9rFil0%2BYeOBpZkXkSby&X-Amz-Signature=e71c5d1aa2fef900d431a3aab95aed811bbf78a6f3ca009d31b36e8e0864a7e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GN4U5KX%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk3sJ5wRir32eVU4JjL0YwS0YH7AtATYG%2B%2FkNcXt4UVQIhAIvo8i3E9SOduseOxRsocfjfKx5sdZc%2FThr17Kj%2BL8l4KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJEkKAY20BpDlsaM8q3APVIIE%2FtF2WYEbK8GPoAj26bjqU7uN5jCZKxw4VA7tqDVkDH%2FIAf1dOK3Vz%2BTgjpj%2BhVvwK5rcppBk2XIp0stIxSthrmcwUnftDSyJynQCVaXmnzC6bfnoZo25MGIT90vw1W%2F4M9GG8OVMcLYKpndflzXI%2BexGVbDHqRrH86mBn2x8%2Fe%2BowI%2F8Z9USGdRdbUxghi%2Bz%2B7n%2FXNWPIwfPry8gOfRTtGu2AeYzwDcciSMa8ncbcioklLIN8IKu9kP1xaEk6O4hrDf52QBd0Ks4o0LwZdoobHvwDwM1ZJM61HhaEoYYPvW2JYvMu8YgoXXB%2BqjQpTyy5KBwXdIVt1%2B922LnODJM%2FuSu0VyuAWt4GGnAcMqTKtNG6numimWpILSz%2FE7xCVZRsmbeH9wNUXEXfT43CixuVRSreMbgOMd7pHNe6v7RSWXJkFCjJRaAktpacJGOQ3lO7hzDf4jxuZ9Kzl5XHBwRGFRqcG1dHxzt2p%2BaCFCdZ5zysMG%2BhaF6Ant%2BsMqgvyKr7e1gU4DroUi8DP%2BIaEUB%2FvA0Uc%2Ffl6P759Cl9gkHum6qOyDJOcICU%2FR1rV3ZWwm98P9EpUEB%2BsV%2BA5UnLMnBsMHlNFIfU%2FR%2BencZbtJUeccVKFUmQaSA91jDT%2BJXCBjqkAcymV%2Fiw4i57Jt3JGFQbSPUlNDxOAfkiKdC%2FGid4VPsd5GLmga4kDh3wKzN6WYtjhpL38FtQYs8PG30Otow4IPvw0KkdPM3meB7GGtEb%2FXwghPphJkkOgYTtuYKCBi8PCYS0kVkeUKeYJkpx8OFf%2BqTboZ6V1HOuwlPnHXxbacsYP8uzmhaprpeT%2Fy8%2BUeho88PHSRq1e9rFil0%2BYeOBpZkXkSby&X-Amz-Signature=37fe875208777464a6d6706ab97d8d747f2a857ed5a346e978e3ee2717a68716&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GN4U5KX%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk3sJ5wRir32eVU4JjL0YwS0YH7AtATYG%2B%2FkNcXt4UVQIhAIvo8i3E9SOduseOxRsocfjfKx5sdZc%2FThr17Kj%2BL8l4KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJEkKAY20BpDlsaM8q3APVIIE%2FtF2WYEbK8GPoAj26bjqU7uN5jCZKxw4VA7tqDVkDH%2FIAf1dOK3Vz%2BTgjpj%2BhVvwK5rcppBk2XIp0stIxSthrmcwUnftDSyJynQCVaXmnzC6bfnoZo25MGIT90vw1W%2F4M9GG8OVMcLYKpndflzXI%2BexGVbDHqRrH86mBn2x8%2Fe%2BowI%2F8Z9USGdRdbUxghi%2Bz%2B7n%2FXNWPIwfPry8gOfRTtGu2AeYzwDcciSMa8ncbcioklLIN8IKu9kP1xaEk6O4hrDf52QBd0Ks4o0LwZdoobHvwDwM1ZJM61HhaEoYYPvW2JYvMu8YgoXXB%2BqjQpTyy5KBwXdIVt1%2B922LnODJM%2FuSu0VyuAWt4GGnAcMqTKtNG6numimWpILSz%2FE7xCVZRsmbeH9wNUXEXfT43CixuVRSreMbgOMd7pHNe6v7RSWXJkFCjJRaAktpacJGOQ3lO7hzDf4jxuZ9Kzl5XHBwRGFRqcG1dHxzt2p%2BaCFCdZ5zysMG%2BhaF6Ant%2BsMqgvyKr7e1gU4DroUi8DP%2BIaEUB%2FvA0Uc%2Ffl6P759Cl9gkHum6qOyDJOcICU%2FR1rV3ZWwm98P9EpUEB%2BsV%2BA5UnLMnBsMHlNFIfU%2FR%2BencZbtJUeccVKFUmQaSA91jDT%2BJXCBjqkAcymV%2Fiw4i57Jt3JGFQbSPUlNDxOAfkiKdC%2FGid4VPsd5GLmga4kDh3wKzN6WYtjhpL38FtQYs8PG30Otow4IPvw0KkdPM3meB7GGtEb%2FXwghPphJkkOgYTtuYKCBi8PCYS0kVkeUKeYJkpx8OFf%2BqTboZ6V1HOuwlPnHXxbacsYP8uzmhaprpeT%2Fy8%2BUeho88PHSRq1e9rFil0%2BYeOBpZkXkSby&X-Amz-Signature=06eba04f6e42541cf6dd139f937f369453d53b5adb4bd192c6b1de8c0daf2b64&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

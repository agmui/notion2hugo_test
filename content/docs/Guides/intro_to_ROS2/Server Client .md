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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPQW4KP4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICvSQRqTvhKmRugEwxDZer5WxWcbD%2BcDmsVVwhzHRMRIAiEAxeUTMeQtlvsixZlyetfUnW229cZp3A4XOF0XLxnd4LsqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmsb05zrbjd6zkbXircAwElOeYDnlk3tIyGk6%2BDExUIDDELHOq4OXt3P5eOUFVhQoLzbVmNq8r%2Brf930QKycDD4Wp0oVVyU6AcUP9iQhMiS5CvRFADaB5nISIa5kutnsU3yDIU7Y7r96b8UiEuq6y%2Fmnn6KS%2FwNCFb%2FWMSeaZrTegYJwsKUiFJFQg36J4WN08Be5rup6cDspzzEYb3UQAUKl6DEPX798fY3WtxVqZ4pjlwizcYr2obJ%2BBTgkVLGc6hRbpS%2F5U9lbitYbdCM8TTi8CoJDzjTxzdBpkYe6fTkBb%2BL0S9eoP%2FTYlkSghl8p5V7l%2FFur9mHlci3oJ7JA2nyhrVxdaBcIIbjZxaAKyC522AvPSjtKbz1LzAEew0lSTm8Gq5DN57IkJh9qEzhkfDRcxZjWT7FKJt30naec%2Bnp90GzA6vDLG468hFu413NqlQTBMkYfmJyiUJOkVj18Rz1hWPWLNgZOXCuXw5QrpXuahp2nDQzCY5h71OYpl8561yzMLFXH0oFD61Kv%2Fr70HAs3P10r9u58qVzcuIWNBLkU1IN7pVV%2BGzxJgB%2F%2BSuTbKwleVHs7Xn38CyHo5z6EZTq6h%2FIC3YlrXdR9vv6OJOdmmGL0kaF1Cip6M1yamWWXsPfXr5u6Vi1vOOPMPG9y8AGOqUBPlqiLED%2BL0E4uAWEwfYufGc2eTBGCJVlHQkSzhrmNmE%2F8%2FNWEWp1GHxkbCjpGWU67pq0sFYI8J%2Bvp7qceDJvtWBYarUPEde5KJngs%2B0H0bjUH3WvY8O7lGD60IP3llY5ASwzBb5JXUcEn04XltLvZs7XKSiDkp%2By9XAcG1kJ0%2Fbx9RVSUtLtqyqKiuY1JXs6xNFQe6mxSeVJizDNOvPrhziyZHa1&X-Amz-Signature=c628f7c8fa744a1c61bd6a2b9aa92d7058176a9627b964a9eccada208617ae92&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPQW4KP4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICvSQRqTvhKmRugEwxDZer5WxWcbD%2BcDmsVVwhzHRMRIAiEAxeUTMeQtlvsixZlyetfUnW229cZp3A4XOF0XLxnd4LsqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmsb05zrbjd6zkbXircAwElOeYDnlk3tIyGk6%2BDExUIDDELHOq4OXt3P5eOUFVhQoLzbVmNq8r%2Brf930QKycDD4Wp0oVVyU6AcUP9iQhMiS5CvRFADaB5nISIa5kutnsU3yDIU7Y7r96b8UiEuq6y%2Fmnn6KS%2FwNCFb%2FWMSeaZrTegYJwsKUiFJFQg36J4WN08Be5rup6cDspzzEYb3UQAUKl6DEPX798fY3WtxVqZ4pjlwizcYr2obJ%2BBTgkVLGc6hRbpS%2F5U9lbitYbdCM8TTi8CoJDzjTxzdBpkYe6fTkBb%2BL0S9eoP%2FTYlkSghl8p5V7l%2FFur9mHlci3oJ7JA2nyhrVxdaBcIIbjZxaAKyC522AvPSjtKbz1LzAEew0lSTm8Gq5DN57IkJh9qEzhkfDRcxZjWT7FKJt30naec%2Bnp90GzA6vDLG468hFu413NqlQTBMkYfmJyiUJOkVj18Rz1hWPWLNgZOXCuXw5QrpXuahp2nDQzCY5h71OYpl8561yzMLFXH0oFD61Kv%2Fr70HAs3P10r9u58qVzcuIWNBLkU1IN7pVV%2BGzxJgB%2F%2BSuTbKwleVHs7Xn38CyHo5z6EZTq6h%2FIC3YlrXdR9vv6OJOdmmGL0kaF1Cip6M1yamWWXsPfXr5u6Vi1vOOPMPG9y8AGOqUBPlqiLED%2BL0E4uAWEwfYufGc2eTBGCJVlHQkSzhrmNmE%2F8%2FNWEWp1GHxkbCjpGWU67pq0sFYI8J%2Bvp7qceDJvtWBYarUPEde5KJngs%2B0H0bjUH3WvY8O7lGD60IP3llY5ASwzBb5JXUcEn04XltLvZs7XKSiDkp%2By9XAcG1kJ0%2Fbx9RVSUtLtqyqKiuY1JXs6xNFQe6mxSeVJizDNOvPrhziyZHa1&X-Amz-Signature=c3e06ab780a143385b73e921dce10c336c132825dcbff5106e202b1c8a4cd28a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPQW4KP4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICvSQRqTvhKmRugEwxDZer5WxWcbD%2BcDmsVVwhzHRMRIAiEAxeUTMeQtlvsixZlyetfUnW229cZp3A4XOF0XLxnd4LsqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmsb05zrbjd6zkbXircAwElOeYDnlk3tIyGk6%2BDExUIDDELHOq4OXt3P5eOUFVhQoLzbVmNq8r%2Brf930QKycDD4Wp0oVVyU6AcUP9iQhMiS5CvRFADaB5nISIa5kutnsU3yDIU7Y7r96b8UiEuq6y%2Fmnn6KS%2FwNCFb%2FWMSeaZrTegYJwsKUiFJFQg36J4WN08Be5rup6cDspzzEYb3UQAUKl6DEPX798fY3WtxVqZ4pjlwizcYr2obJ%2BBTgkVLGc6hRbpS%2F5U9lbitYbdCM8TTi8CoJDzjTxzdBpkYe6fTkBb%2BL0S9eoP%2FTYlkSghl8p5V7l%2FFur9mHlci3oJ7JA2nyhrVxdaBcIIbjZxaAKyC522AvPSjtKbz1LzAEew0lSTm8Gq5DN57IkJh9qEzhkfDRcxZjWT7FKJt30naec%2Bnp90GzA6vDLG468hFu413NqlQTBMkYfmJyiUJOkVj18Rz1hWPWLNgZOXCuXw5QrpXuahp2nDQzCY5h71OYpl8561yzMLFXH0oFD61Kv%2Fr70HAs3P10r9u58qVzcuIWNBLkU1IN7pVV%2BGzxJgB%2F%2BSuTbKwleVHs7Xn38CyHo5z6EZTq6h%2FIC3YlrXdR9vv6OJOdmmGL0kaF1Cip6M1yamWWXsPfXr5u6Vi1vOOPMPG9y8AGOqUBPlqiLED%2BL0E4uAWEwfYufGc2eTBGCJVlHQkSzhrmNmE%2F8%2FNWEWp1GHxkbCjpGWU67pq0sFYI8J%2Bvp7qceDJvtWBYarUPEde5KJngs%2B0H0bjUH3WvY8O7lGD60IP3llY5ASwzBb5JXUcEn04XltLvZs7XKSiDkp%2By9XAcG1kJ0%2Fbx9RVSUtLtqyqKiuY1JXs6xNFQe6mxSeVJizDNOvPrhziyZHa1&X-Amz-Signature=057bb714550922452325a06615a6af5e78f33c79a9f022fdb78df6744e65d1ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPQW4KP4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICvSQRqTvhKmRugEwxDZer5WxWcbD%2BcDmsVVwhzHRMRIAiEAxeUTMeQtlvsixZlyetfUnW229cZp3A4XOF0XLxnd4LsqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmsb05zrbjd6zkbXircAwElOeYDnlk3tIyGk6%2BDExUIDDELHOq4OXt3P5eOUFVhQoLzbVmNq8r%2Brf930QKycDD4Wp0oVVyU6AcUP9iQhMiS5CvRFADaB5nISIa5kutnsU3yDIU7Y7r96b8UiEuq6y%2Fmnn6KS%2FwNCFb%2FWMSeaZrTegYJwsKUiFJFQg36J4WN08Be5rup6cDspzzEYb3UQAUKl6DEPX798fY3WtxVqZ4pjlwizcYr2obJ%2BBTgkVLGc6hRbpS%2F5U9lbitYbdCM8TTi8CoJDzjTxzdBpkYe6fTkBb%2BL0S9eoP%2FTYlkSghl8p5V7l%2FFur9mHlci3oJ7JA2nyhrVxdaBcIIbjZxaAKyC522AvPSjtKbz1LzAEew0lSTm8Gq5DN57IkJh9qEzhkfDRcxZjWT7FKJt30naec%2Bnp90GzA6vDLG468hFu413NqlQTBMkYfmJyiUJOkVj18Rz1hWPWLNgZOXCuXw5QrpXuahp2nDQzCY5h71OYpl8561yzMLFXH0oFD61Kv%2Fr70HAs3P10r9u58qVzcuIWNBLkU1IN7pVV%2BGzxJgB%2F%2BSuTbKwleVHs7Xn38CyHo5z6EZTq6h%2FIC3YlrXdR9vv6OJOdmmGL0kaF1Cip6M1yamWWXsPfXr5u6Vi1vOOPMPG9y8AGOqUBPlqiLED%2BL0E4uAWEwfYufGc2eTBGCJVlHQkSzhrmNmE%2F8%2FNWEWp1GHxkbCjpGWU67pq0sFYI8J%2Bvp7qceDJvtWBYarUPEde5KJngs%2B0H0bjUH3WvY8O7lGD60IP3llY5ASwzBb5JXUcEn04XltLvZs7XKSiDkp%2By9XAcG1kJ0%2Fbx9RVSUtLtqyqKiuY1JXs6xNFQe6mxSeVJizDNOvPrhziyZHa1&X-Amz-Signature=46385ebabf5bf44cc425bdbf0cc58eabb3303d3517906ea549acfdd398932786&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPQW4KP4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICvSQRqTvhKmRugEwxDZer5WxWcbD%2BcDmsVVwhzHRMRIAiEAxeUTMeQtlvsixZlyetfUnW229cZp3A4XOF0XLxnd4LsqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmsb05zrbjd6zkbXircAwElOeYDnlk3tIyGk6%2BDExUIDDELHOq4OXt3P5eOUFVhQoLzbVmNq8r%2Brf930QKycDD4Wp0oVVyU6AcUP9iQhMiS5CvRFADaB5nISIa5kutnsU3yDIU7Y7r96b8UiEuq6y%2Fmnn6KS%2FwNCFb%2FWMSeaZrTegYJwsKUiFJFQg36J4WN08Be5rup6cDspzzEYb3UQAUKl6DEPX798fY3WtxVqZ4pjlwizcYr2obJ%2BBTgkVLGc6hRbpS%2F5U9lbitYbdCM8TTi8CoJDzjTxzdBpkYe6fTkBb%2BL0S9eoP%2FTYlkSghl8p5V7l%2FFur9mHlci3oJ7JA2nyhrVxdaBcIIbjZxaAKyC522AvPSjtKbz1LzAEew0lSTm8Gq5DN57IkJh9qEzhkfDRcxZjWT7FKJt30naec%2Bnp90GzA6vDLG468hFu413NqlQTBMkYfmJyiUJOkVj18Rz1hWPWLNgZOXCuXw5QrpXuahp2nDQzCY5h71OYpl8561yzMLFXH0oFD61Kv%2Fr70HAs3P10r9u58qVzcuIWNBLkU1IN7pVV%2BGzxJgB%2F%2BSuTbKwleVHs7Xn38CyHo5z6EZTq6h%2FIC3YlrXdR9vv6OJOdmmGL0kaF1Cip6M1yamWWXsPfXr5u6Vi1vOOPMPG9y8AGOqUBPlqiLED%2BL0E4uAWEwfYufGc2eTBGCJVlHQkSzhrmNmE%2F8%2FNWEWp1GHxkbCjpGWU67pq0sFYI8J%2Bvp7qceDJvtWBYarUPEde5KJngs%2B0H0bjUH3WvY8O7lGD60IP3llY5ASwzBb5JXUcEn04XltLvZs7XKSiDkp%2By9XAcG1kJ0%2Fbx9RVSUtLtqyqKiuY1JXs6xNFQe6mxSeVJizDNOvPrhziyZHa1&X-Amz-Signature=7b6709f3bfb9d6ecb78fadb921183e773484cad0b671d138e4206f3a50b0c08e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DTGYVH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDV8og6I6Y530h%2BUgW46PBCIYuN3diNErgAHVK8jQp%2B4QIgLnAqp3FIififXjDT5fMe6UZRE5IcF%2FlKVyQ1amXAzYoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPGUfCY%2BT56YlMaPCrcA9jrYm%2FZkwOf5voto6Lh%2BblKxU%2BuA%2BMiuyvSI%2Fp7NQKuf6GaEzfTg%2BjjNobaVg3F66CYy95r1fihtXLCGl96NzRTCa2z5rDCR43K9APbGEIzixILykxDVpjjjKCefKxlYBDtutEc39KZL9HpEswE9rTPjlGdKpqpvlW%2FFFt73UqFBdzbGGz2cnIm9N%2F289a3WRXslUCLwgI%2BOlt%2BUrs0DKANT%2B6VoSbPzaUdzLEWd1h0Q4Wz92nB%2BxYlWQIp4RDvX%2BmeXJFj5fZXx%2FFNVY%2FIRRbqRyMNmSYJIVRqnkA3oQ8Q8PDdOP3WO9ce1zwxoe2dhEGmOLW5KfqdfwBy5NxSPeq3zIbSUQ4IEZiclECHh2ZfBYGEYYgLTdGcr1cMNdBnyxIrZcC8ZrHboy22FdIrzj6D%2BTahfnfXvz2XdupKQUPW1OO572Dp%2Fpl7dGxyb5jiEKaL9VgQxxN1E%2FbfKLbB187wt8u8YinJEQ7R6zn2LJc1aLD2iVjMkU4KTmWvmckP5nf98KYLp6XCX6689AD2662LAsmffodCmCi0lh%2F8r1X9vikLOf1H4fujIP%2F%2Bm0%2FGw8HoudT46HABNZXYsIUgFyyQvkgXz9VncdBG8%2BYVFUfP21MvBuC8qASDoYGbMKHq2MQGOqUBA9w6KL9zC46nam7EXk9EYs3LBrAnZrtKPKH201JS%2B48SS%2BpBtLIMeNlwU%2FBxGMD5NsSyd9MtB5lz6muwYU4UdT6Ka6jdT%2FyCBOb8lpTlzwuQXjIYsXpU8wq2xMki%2FRwb%2BedIH9JdXSScIWYZVolomgsRPKu60aBwB3oUMvFyMi9qSFyU6Wcfsi4uzx%2BbYe3nQBoU27Yt2WUkLX2Jj6gD2G5yDmW8&X-Amz-Signature=1580b2902d116a405324786af1dbe61345280c415c4c8a716273f25bc55ffdc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DTGYVH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDV8og6I6Y530h%2BUgW46PBCIYuN3diNErgAHVK8jQp%2B4QIgLnAqp3FIififXjDT5fMe6UZRE5IcF%2FlKVyQ1amXAzYoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPGUfCY%2BT56YlMaPCrcA9jrYm%2FZkwOf5voto6Lh%2BblKxU%2BuA%2BMiuyvSI%2Fp7NQKuf6GaEzfTg%2BjjNobaVg3F66CYy95r1fihtXLCGl96NzRTCa2z5rDCR43K9APbGEIzixILykxDVpjjjKCefKxlYBDtutEc39KZL9HpEswE9rTPjlGdKpqpvlW%2FFFt73UqFBdzbGGz2cnIm9N%2F289a3WRXslUCLwgI%2BOlt%2BUrs0DKANT%2B6VoSbPzaUdzLEWd1h0Q4Wz92nB%2BxYlWQIp4RDvX%2BmeXJFj5fZXx%2FFNVY%2FIRRbqRyMNmSYJIVRqnkA3oQ8Q8PDdOP3WO9ce1zwxoe2dhEGmOLW5KfqdfwBy5NxSPeq3zIbSUQ4IEZiclECHh2ZfBYGEYYgLTdGcr1cMNdBnyxIrZcC8ZrHboy22FdIrzj6D%2BTahfnfXvz2XdupKQUPW1OO572Dp%2Fpl7dGxyb5jiEKaL9VgQxxN1E%2FbfKLbB187wt8u8YinJEQ7R6zn2LJc1aLD2iVjMkU4KTmWvmckP5nf98KYLp6XCX6689AD2662LAsmffodCmCi0lh%2F8r1X9vikLOf1H4fujIP%2F%2Bm0%2FGw8HoudT46HABNZXYsIUgFyyQvkgXz9VncdBG8%2BYVFUfP21MvBuC8qASDoYGbMKHq2MQGOqUBA9w6KL9zC46nam7EXk9EYs3LBrAnZrtKPKH201JS%2B48SS%2BpBtLIMeNlwU%2FBxGMD5NsSyd9MtB5lz6muwYU4UdT6Ka6jdT%2FyCBOb8lpTlzwuQXjIYsXpU8wq2xMki%2FRwb%2BedIH9JdXSScIWYZVolomgsRPKu60aBwB3oUMvFyMi9qSFyU6Wcfsi4uzx%2BbYe3nQBoU27Yt2WUkLX2Jj6gD2G5yDmW8&X-Amz-Signature=8fce8f339324cb73e393d0d0618466d4c80bfc4bfc4f8d16761aef2efa391a2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DTGYVH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDV8og6I6Y530h%2BUgW46PBCIYuN3diNErgAHVK8jQp%2B4QIgLnAqp3FIififXjDT5fMe6UZRE5IcF%2FlKVyQ1amXAzYoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPGUfCY%2BT56YlMaPCrcA9jrYm%2FZkwOf5voto6Lh%2BblKxU%2BuA%2BMiuyvSI%2Fp7NQKuf6GaEzfTg%2BjjNobaVg3F66CYy95r1fihtXLCGl96NzRTCa2z5rDCR43K9APbGEIzixILykxDVpjjjKCefKxlYBDtutEc39KZL9HpEswE9rTPjlGdKpqpvlW%2FFFt73UqFBdzbGGz2cnIm9N%2F289a3WRXslUCLwgI%2BOlt%2BUrs0DKANT%2B6VoSbPzaUdzLEWd1h0Q4Wz92nB%2BxYlWQIp4RDvX%2BmeXJFj5fZXx%2FFNVY%2FIRRbqRyMNmSYJIVRqnkA3oQ8Q8PDdOP3WO9ce1zwxoe2dhEGmOLW5KfqdfwBy5NxSPeq3zIbSUQ4IEZiclECHh2ZfBYGEYYgLTdGcr1cMNdBnyxIrZcC8ZrHboy22FdIrzj6D%2BTahfnfXvz2XdupKQUPW1OO572Dp%2Fpl7dGxyb5jiEKaL9VgQxxN1E%2FbfKLbB187wt8u8YinJEQ7R6zn2LJc1aLD2iVjMkU4KTmWvmckP5nf98KYLp6XCX6689AD2662LAsmffodCmCi0lh%2F8r1X9vikLOf1H4fujIP%2F%2Bm0%2FGw8HoudT46HABNZXYsIUgFyyQvkgXz9VncdBG8%2BYVFUfP21MvBuC8qASDoYGbMKHq2MQGOqUBA9w6KL9zC46nam7EXk9EYs3LBrAnZrtKPKH201JS%2B48SS%2BpBtLIMeNlwU%2FBxGMD5NsSyd9MtB5lz6muwYU4UdT6Ka6jdT%2FyCBOb8lpTlzwuQXjIYsXpU8wq2xMki%2FRwb%2BedIH9JdXSScIWYZVolomgsRPKu60aBwB3oUMvFyMi9qSFyU6Wcfsi4uzx%2BbYe3nQBoU27Yt2WUkLX2Jj6gD2G5yDmW8&X-Amz-Signature=6c050928e54c9f1555fbbb059f63c169c4e3edcc8139e2272c1cbcf224fda2f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DTGYVH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDV8og6I6Y530h%2BUgW46PBCIYuN3diNErgAHVK8jQp%2B4QIgLnAqp3FIififXjDT5fMe6UZRE5IcF%2FlKVyQ1amXAzYoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPGUfCY%2BT56YlMaPCrcA9jrYm%2FZkwOf5voto6Lh%2BblKxU%2BuA%2BMiuyvSI%2Fp7NQKuf6GaEzfTg%2BjjNobaVg3F66CYy95r1fihtXLCGl96NzRTCa2z5rDCR43K9APbGEIzixILykxDVpjjjKCefKxlYBDtutEc39KZL9HpEswE9rTPjlGdKpqpvlW%2FFFt73UqFBdzbGGz2cnIm9N%2F289a3WRXslUCLwgI%2BOlt%2BUrs0DKANT%2B6VoSbPzaUdzLEWd1h0Q4Wz92nB%2BxYlWQIp4RDvX%2BmeXJFj5fZXx%2FFNVY%2FIRRbqRyMNmSYJIVRqnkA3oQ8Q8PDdOP3WO9ce1zwxoe2dhEGmOLW5KfqdfwBy5NxSPeq3zIbSUQ4IEZiclECHh2ZfBYGEYYgLTdGcr1cMNdBnyxIrZcC8ZrHboy22FdIrzj6D%2BTahfnfXvz2XdupKQUPW1OO572Dp%2Fpl7dGxyb5jiEKaL9VgQxxN1E%2FbfKLbB187wt8u8YinJEQ7R6zn2LJc1aLD2iVjMkU4KTmWvmckP5nf98KYLp6XCX6689AD2662LAsmffodCmCi0lh%2F8r1X9vikLOf1H4fujIP%2F%2Bm0%2FGw8HoudT46HABNZXYsIUgFyyQvkgXz9VncdBG8%2BYVFUfP21MvBuC8qASDoYGbMKHq2MQGOqUBA9w6KL9zC46nam7EXk9EYs3LBrAnZrtKPKH201JS%2B48SS%2BpBtLIMeNlwU%2FBxGMD5NsSyd9MtB5lz6muwYU4UdT6Ka6jdT%2FyCBOb8lpTlzwuQXjIYsXpU8wq2xMki%2FRwb%2BedIH9JdXSScIWYZVolomgsRPKu60aBwB3oUMvFyMi9qSFyU6Wcfsi4uzx%2BbYe3nQBoU27Yt2WUkLX2Jj6gD2G5yDmW8&X-Amz-Signature=589e6668167bec10e6ebf5dec84c9b1795b154423ba64c816f919fa1efc0c636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DTGYVH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDV8og6I6Y530h%2BUgW46PBCIYuN3diNErgAHVK8jQp%2B4QIgLnAqp3FIififXjDT5fMe6UZRE5IcF%2FlKVyQ1amXAzYoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPGUfCY%2BT56YlMaPCrcA9jrYm%2FZkwOf5voto6Lh%2BblKxU%2BuA%2BMiuyvSI%2Fp7NQKuf6GaEzfTg%2BjjNobaVg3F66CYy95r1fihtXLCGl96NzRTCa2z5rDCR43K9APbGEIzixILykxDVpjjjKCefKxlYBDtutEc39KZL9HpEswE9rTPjlGdKpqpvlW%2FFFt73UqFBdzbGGz2cnIm9N%2F289a3WRXslUCLwgI%2BOlt%2BUrs0DKANT%2B6VoSbPzaUdzLEWd1h0Q4Wz92nB%2BxYlWQIp4RDvX%2BmeXJFj5fZXx%2FFNVY%2FIRRbqRyMNmSYJIVRqnkA3oQ8Q8PDdOP3WO9ce1zwxoe2dhEGmOLW5KfqdfwBy5NxSPeq3zIbSUQ4IEZiclECHh2ZfBYGEYYgLTdGcr1cMNdBnyxIrZcC8ZrHboy22FdIrzj6D%2BTahfnfXvz2XdupKQUPW1OO572Dp%2Fpl7dGxyb5jiEKaL9VgQxxN1E%2FbfKLbB187wt8u8YinJEQ7R6zn2LJc1aLD2iVjMkU4KTmWvmckP5nf98KYLp6XCX6689AD2662LAsmffodCmCi0lh%2F8r1X9vikLOf1H4fujIP%2F%2Bm0%2FGw8HoudT46HABNZXYsIUgFyyQvkgXz9VncdBG8%2BYVFUfP21MvBuC8qASDoYGbMKHq2MQGOqUBA9w6KL9zC46nam7EXk9EYs3LBrAnZrtKPKH201JS%2B48SS%2BpBtLIMeNlwU%2FBxGMD5NsSyd9MtB5lz6muwYU4UdT6Ka6jdT%2FyCBOb8lpTlzwuQXjIYsXpU8wq2xMki%2FRwb%2BedIH9JdXSScIWYZVolomgsRPKu60aBwB3oUMvFyMi9qSFyU6Wcfsi4uzx%2BbYe3nQBoU27Yt2WUkLX2Jj6gD2G5yDmW8&X-Amz-Signature=253ccc9d4d534efbb66435fb202ec2fa2c034b2968007819e79b85729804bfd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

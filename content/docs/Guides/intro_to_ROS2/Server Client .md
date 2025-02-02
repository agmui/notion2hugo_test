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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZODQVQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy7KTB5QTFVAqAIPJ27n6YD9OotfX%2BBFa9armKSjrgJAiEAro0G2ai31qlHOooP3GtXge9YOI731nUEFRpx30oUCCMqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnsSj7Onyxvmbd2ByrcA6tKQwaZCS5EQ9isXXiEhRiy%2Frm6hzg%2FmRuuQj0gMf3hFTTAHn4oT%2FrHROOjb3ntfjFw90SSnjJ4IOwoKHo5eJEgQJDW%2ByQ77ZHwMNraVEO%2BBkb2OsfSFsRYZ95%2Fz9EedY%2BBqupdysxFNN5Ss07t2vfzDT7VQwXglthcvjc9Mvo8w7TvXBS6pAo5GmpJUmzV4vwrRp1%2FM6gZ0%2FotRZEd8J8TiNKpVDNLTKwYu1hALkOwwMLfJ0C6IhUMchzEiUFdtzKbNT844RblItEi4CsrAyQfM0F%2Ba8SjQzuaZdIPkG44J5YiF7V%2BuZAc3mEgwKLc3GjaUc6MfuCDHuz%2FqDjKXVYfMYEh8QYPyzIs0D1kf8e6BG%2BkZhvsXRI%2FwAwwpHcL2mwZPz11y73rGN36gLFcq3gvPPGAEGpGiBqr3Nnzm0U2lpJQbC73Onq8alGlXN4z2NSeNRd12iCocCuKkpK%2B6UeZHLFikjQ%2Fq8da53GowzD193F4g%2BukxONmfAE6u6VmAymd6V9QCHaXtBxfASsEUOZ3eYs%2F4fc5QpAz6%2BWI9gaQ8TAyXWErJFxMkqB1Qmf2o2FajJaYHLd%2BmZSElQGx7mzEOtTBIbDePlNmXgs177uSisEbW2MJRb4cpAyeMJ%2Fd%2FrwGOqUBcHpfauYmHnIzuKKy1pyVXi4Nkrr%2BY1%2FGM4roIS14ayVwitzkHixR%2BKTjNPE1Jt3zJlV47j4n2V5v%2FgsWXbqRK40B4cxd7dbyXwPpv21lpd1JozsDx99SoPhFYSt38RCcIR4kHVgDxfQW8Gq3KucCXmLNmc%2F10SaKcCt081y6t4vuccadZB24Pdbmdlz%2BctYPiDvH%2FSdYr8mVKa87NtMKCxhrFY%2FZ&X-Amz-Signature=86995f01218cd30a0908618f2edab48b67bb7a5f7b46a486492001b0912fbd40&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZODQVQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy7KTB5QTFVAqAIPJ27n6YD9OotfX%2BBFa9armKSjrgJAiEAro0G2ai31qlHOooP3GtXge9YOI731nUEFRpx30oUCCMqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnsSj7Onyxvmbd2ByrcA6tKQwaZCS5EQ9isXXiEhRiy%2Frm6hzg%2FmRuuQj0gMf3hFTTAHn4oT%2FrHROOjb3ntfjFw90SSnjJ4IOwoKHo5eJEgQJDW%2ByQ77ZHwMNraVEO%2BBkb2OsfSFsRYZ95%2Fz9EedY%2BBqupdysxFNN5Ss07t2vfzDT7VQwXglthcvjc9Mvo8w7TvXBS6pAo5GmpJUmzV4vwrRp1%2FM6gZ0%2FotRZEd8J8TiNKpVDNLTKwYu1hALkOwwMLfJ0C6IhUMchzEiUFdtzKbNT844RblItEi4CsrAyQfM0F%2Ba8SjQzuaZdIPkG44J5YiF7V%2BuZAc3mEgwKLc3GjaUc6MfuCDHuz%2FqDjKXVYfMYEh8QYPyzIs0D1kf8e6BG%2BkZhvsXRI%2FwAwwpHcL2mwZPz11y73rGN36gLFcq3gvPPGAEGpGiBqr3Nnzm0U2lpJQbC73Onq8alGlXN4z2NSeNRd12iCocCuKkpK%2B6UeZHLFikjQ%2Fq8da53GowzD193F4g%2BukxONmfAE6u6VmAymd6V9QCHaXtBxfASsEUOZ3eYs%2F4fc5QpAz6%2BWI9gaQ8TAyXWErJFxMkqB1Qmf2o2FajJaYHLd%2BmZSElQGx7mzEOtTBIbDePlNmXgs177uSisEbW2MJRb4cpAyeMJ%2Fd%2FrwGOqUBcHpfauYmHnIzuKKy1pyVXi4Nkrr%2BY1%2FGM4roIS14ayVwitzkHixR%2BKTjNPE1Jt3zJlV47j4n2V5v%2FgsWXbqRK40B4cxd7dbyXwPpv21lpd1JozsDx99SoPhFYSt38RCcIR4kHVgDxfQW8Gq3KucCXmLNmc%2F10SaKcCt081y6t4vuccadZB24Pdbmdlz%2BctYPiDvH%2FSdYr8mVKa87NtMKCxhrFY%2FZ&X-Amz-Signature=26e3295ccdd6584902d0d5db6cb932c7d65f6b98bad01fcde3c093be4cd1faeb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZODQVQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy7KTB5QTFVAqAIPJ27n6YD9OotfX%2BBFa9armKSjrgJAiEAro0G2ai31qlHOooP3GtXge9YOI731nUEFRpx30oUCCMqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnsSj7Onyxvmbd2ByrcA6tKQwaZCS5EQ9isXXiEhRiy%2Frm6hzg%2FmRuuQj0gMf3hFTTAHn4oT%2FrHROOjb3ntfjFw90SSnjJ4IOwoKHo5eJEgQJDW%2ByQ77ZHwMNraVEO%2BBkb2OsfSFsRYZ95%2Fz9EedY%2BBqupdysxFNN5Ss07t2vfzDT7VQwXglthcvjc9Mvo8w7TvXBS6pAo5GmpJUmzV4vwrRp1%2FM6gZ0%2FotRZEd8J8TiNKpVDNLTKwYu1hALkOwwMLfJ0C6IhUMchzEiUFdtzKbNT844RblItEi4CsrAyQfM0F%2Ba8SjQzuaZdIPkG44J5YiF7V%2BuZAc3mEgwKLc3GjaUc6MfuCDHuz%2FqDjKXVYfMYEh8QYPyzIs0D1kf8e6BG%2BkZhvsXRI%2FwAwwpHcL2mwZPz11y73rGN36gLFcq3gvPPGAEGpGiBqr3Nnzm0U2lpJQbC73Onq8alGlXN4z2NSeNRd12iCocCuKkpK%2B6UeZHLFikjQ%2Fq8da53GowzD193F4g%2BukxONmfAE6u6VmAymd6V9QCHaXtBxfASsEUOZ3eYs%2F4fc5QpAz6%2BWI9gaQ8TAyXWErJFxMkqB1Qmf2o2FajJaYHLd%2BmZSElQGx7mzEOtTBIbDePlNmXgs177uSisEbW2MJRb4cpAyeMJ%2Fd%2FrwGOqUBcHpfauYmHnIzuKKy1pyVXi4Nkrr%2BY1%2FGM4roIS14ayVwitzkHixR%2BKTjNPE1Jt3zJlV47j4n2V5v%2FgsWXbqRK40B4cxd7dbyXwPpv21lpd1JozsDx99SoPhFYSt38RCcIR4kHVgDxfQW8Gq3KucCXmLNmc%2F10SaKcCt081y6t4vuccadZB24Pdbmdlz%2BctYPiDvH%2FSdYr8mVKa87NtMKCxhrFY%2FZ&X-Amz-Signature=9b729fb654456bcb21c31577d487a7968ac38a165be5f815609f8d017bc49bfb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZODQVQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy7KTB5QTFVAqAIPJ27n6YD9OotfX%2BBFa9armKSjrgJAiEAro0G2ai31qlHOooP3GtXge9YOI731nUEFRpx30oUCCMqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnsSj7Onyxvmbd2ByrcA6tKQwaZCS5EQ9isXXiEhRiy%2Frm6hzg%2FmRuuQj0gMf3hFTTAHn4oT%2FrHROOjb3ntfjFw90SSnjJ4IOwoKHo5eJEgQJDW%2ByQ77ZHwMNraVEO%2BBkb2OsfSFsRYZ95%2Fz9EedY%2BBqupdysxFNN5Ss07t2vfzDT7VQwXglthcvjc9Mvo8w7TvXBS6pAo5GmpJUmzV4vwrRp1%2FM6gZ0%2FotRZEd8J8TiNKpVDNLTKwYu1hALkOwwMLfJ0C6IhUMchzEiUFdtzKbNT844RblItEi4CsrAyQfM0F%2Ba8SjQzuaZdIPkG44J5YiF7V%2BuZAc3mEgwKLc3GjaUc6MfuCDHuz%2FqDjKXVYfMYEh8QYPyzIs0D1kf8e6BG%2BkZhvsXRI%2FwAwwpHcL2mwZPz11y73rGN36gLFcq3gvPPGAEGpGiBqr3Nnzm0U2lpJQbC73Onq8alGlXN4z2NSeNRd12iCocCuKkpK%2B6UeZHLFikjQ%2Fq8da53GowzD193F4g%2BukxONmfAE6u6VmAymd6V9QCHaXtBxfASsEUOZ3eYs%2F4fc5QpAz6%2BWI9gaQ8TAyXWErJFxMkqB1Qmf2o2FajJaYHLd%2BmZSElQGx7mzEOtTBIbDePlNmXgs177uSisEbW2MJRb4cpAyeMJ%2Fd%2FrwGOqUBcHpfauYmHnIzuKKy1pyVXi4Nkrr%2BY1%2FGM4roIS14ayVwitzkHixR%2BKTjNPE1Jt3zJlV47j4n2V5v%2FgsWXbqRK40B4cxd7dbyXwPpv21lpd1JozsDx99SoPhFYSt38RCcIR4kHVgDxfQW8Gq3KucCXmLNmc%2F10SaKcCt081y6t4vuccadZB24Pdbmdlz%2BctYPiDvH%2FSdYr8mVKa87NtMKCxhrFY%2FZ&X-Amz-Signature=8796c7fe999c6b8838896efdae1a813e9a94d6c131d7d16a1f709d053aa6a3c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZODQVQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy7KTB5QTFVAqAIPJ27n6YD9OotfX%2BBFa9armKSjrgJAiEAro0G2ai31qlHOooP3GtXge9YOI731nUEFRpx30oUCCMqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnsSj7Onyxvmbd2ByrcA6tKQwaZCS5EQ9isXXiEhRiy%2Frm6hzg%2FmRuuQj0gMf3hFTTAHn4oT%2FrHROOjb3ntfjFw90SSnjJ4IOwoKHo5eJEgQJDW%2ByQ77ZHwMNraVEO%2BBkb2OsfSFsRYZ95%2Fz9EedY%2BBqupdysxFNN5Ss07t2vfzDT7VQwXglthcvjc9Mvo8w7TvXBS6pAo5GmpJUmzV4vwrRp1%2FM6gZ0%2FotRZEd8J8TiNKpVDNLTKwYu1hALkOwwMLfJ0C6IhUMchzEiUFdtzKbNT844RblItEi4CsrAyQfM0F%2Ba8SjQzuaZdIPkG44J5YiF7V%2BuZAc3mEgwKLc3GjaUc6MfuCDHuz%2FqDjKXVYfMYEh8QYPyzIs0D1kf8e6BG%2BkZhvsXRI%2FwAwwpHcL2mwZPz11y73rGN36gLFcq3gvPPGAEGpGiBqr3Nnzm0U2lpJQbC73Onq8alGlXN4z2NSeNRd12iCocCuKkpK%2B6UeZHLFikjQ%2Fq8da53GowzD193F4g%2BukxONmfAE6u6VmAymd6V9QCHaXtBxfASsEUOZ3eYs%2F4fc5QpAz6%2BWI9gaQ8TAyXWErJFxMkqB1Qmf2o2FajJaYHLd%2BmZSElQGx7mzEOtTBIbDePlNmXgs177uSisEbW2MJRb4cpAyeMJ%2Fd%2FrwGOqUBcHpfauYmHnIzuKKy1pyVXi4Nkrr%2BY1%2FGM4roIS14ayVwitzkHixR%2BKTjNPE1Jt3zJlV47j4n2V5v%2FgsWXbqRK40B4cxd7dbyXwPpv21lpd1JozsDx99SoPhFYSt38RCcIR4kHVgDxfQW8Gq3KucCXmLNmc%2F10SaKcCt081y6t4vuccadZB24Pdbmdlz%2BctYPiDvH%2FSdYr8mVKa87NtMKCxhrFY%2FZ&X-Amz-Signature=3be97af38c4ecaa72bcddf8d57df6607ed33277523e4d8130921234cb7234221&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

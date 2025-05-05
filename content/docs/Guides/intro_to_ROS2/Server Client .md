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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEFJFPZY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC40n%2FPozB%2FWCAVu9W99e63CBqnv694X938l%2BY0XWRCBQIhALpLFSFZaD2whA8khfQsWJcO%2BF7AOfseTB1CqKsdLrZIKv8DCC8QABoMNjM3NDIzMTgzODA1Igyl1AdcADBA9a8qLrMq3AOT%2BOwqbT23obcrWMvOEZp4W8Vi%2FnR5eRy4zLfehtlrYmdNZjoxaxyofqb9DYywdMAUTdtchR2A3nywE4UxK0WavlkA41NjjBm%2FMpT19AxpCGDXO08ahcJgXF0Sz%2FucnheSXpA3IX%2BS0iRELOOWYJWXFT7ubaiWOD41y2gVEQiaW2ujBupOwtzJamuFJiqBN1zPXycoD9Q2i5kLByfIu%2FHUf%2BwWRIEjG9l8OyOvTBiskPyOoKhaq1Y2WE9VJ9Gu5glfmMEiYWZnDPgyI6zSFKGguI20Jt8gb2MtQokDHqLkabmCwJ4c3JolbJCPJfD9LDDMWFJ%2BGM7uWRVC4XThLB4XFLV5rcZ8cpZvv3bDE5DDe47TLDzwqrxHurT2r5jy3XzQ8oz23lYRNoXZiydeBHNlirHEMicHOcJRfNzVW3pUTn9pbeA16e8jDYesPZKlFohq9k1wNv3qg1CtJUni2PC3AgfJijgq3lvhc4iwjs3UQwAZHKTquqsgR3%2FDZFFWcIhp8sl6L3S9KW9OMsNOV%2F%2BdCrvSAes3zGHnjGnorc94GdgkcYCixKIyfQCOsv%2B84sQqlfPBv5PCtuTcN7uQDltTpu7oUXkXfImVrquPGIPRoj4vhRVeIs2C%2BWo8rzDo%2FuLABjqkAQtqleddyX1JmlyDqtZzZuB8KDqrPnm%2BZ2Sffiqm86rkgFldhH%2BgwcRcyVMWJAmdwXGo402Fd0S53h%2FkRgjMWpFVn7tkMyoDVYzxu8XHH%2BE6Q1AkWLM4khb86NHwcjtAa9TSRm7EW6fuDGbbzCg%2F0shjUO41RD9oPd%2BBWEO0XpEH%2FYxMH0b%2FAIoi1dS4%2FJ%2Bnbid1XAdvBjDpol%2BTzb6ghkwBf%2Bqf&X-Amz-Signature=b27af474952cdf4535a35ead111272381659ee3b8ee199828f7a88e26290f21a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEFJFPZY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC40n%2FPozB%2FWCAVu9W99e63CBqnv694X938l%2BY0XWRCBQIhALpLFSFZaD2whA8khfQsWJcO%2BF7AOfseTB1CqKsdLrZIKv8DCC8QABoMNjM3NDIzMTgzODA1Igyl1AdcADBA9a8qLrMq3AOT%2BOwqbT23obcrWMvOEZp4W8Vi%2FnR5eRy4zLfehtlrYmdNZjoxaxyofqb9DYywdMAUTdtchR2A3nywE4UxK0WavlkA41NjjBm%2FMpT19AxpCGDXO08ahcJgXF0Sz%2FucnheSXpA3IX%2BS0iRELOOWYJWXFT7ubaiWOD41y2gVEQiaW2ujBupOwtzJamuFJiqBN1zPXycoD9Q2i5kLByfIu%2FHUf%2BwWRIEjG9l8OyOvTBiskPyOoKhaq1Y2WE9VJ9Gu5glfmMEiYWZnDPgyI6zSFKGguI20Jt8gb2MtQokDHqLkabmCwJ4c3JolbJCPJfD9LDDMWFJ%2BGM7uWRVC4XThLB4XFLV5rcZ8cpZvv3bDE5DDe47TLDzwqrxHurT2r5jy3XzQ8oz23lYRNoXZiydeBHNlirHEMicHOcJRfNzVW3pUTn9pbeA16e8jDYesPZKlFohq9k1wNv3qg1CtJUni2PC3AgfJijgq3lvhc4iwjs3UQwAZHKTquqsgR3%2FDZFFWcIhp8sl6L3S9KW9OMsNOV%2F%2BdCrvSAes3zGHnjGnorc94GdgkcYCixKIyfQCOsv%2B84sQqlfPBv5PCtuTcN7uQDltTpu7oUXkXfImVrquPGIPRoj4vhRVeIs2C%2BWo8rzDo%2FuLABjqkAQtqleddyX1JmlyDqtZzZuB8KDqrPnm%2BZ2Sffiqm86rkgFldhH%2BgwcRcyVMWJAmdwXGo402Fd0S53h%2FkRgjMWpFVn7tkMyoDVYzxu8XHH%2BE6Q1AkWLM4khb86NHwcjtAa9TSRm7EW6fuDGbbzCg%2F0shjUO41RD9oPd%2BBWEO0XpEH%2FYxMH0b%2FAIoi1dS4%2FJ%2Bnbid1XAdvBjDpol%2BTzb6ghkwBf%2Bqf&X-Amz-Signature=4f46c066c0b10cce54d4494a669eb5ad339eef7b406e6a1c348f6a1ae8345546&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEFJFPZY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC40n%2FPozB%2FWCAVu9W99e63CBqnv694X938l%2BY0XWRCBQIhALpLFSFZaD2whA8khfQsWJcO%2BF7AOfseTB1CqKsdLrZIKv8DCC8QABoMNjM3NDIzMTgzODA1Igyl1AdcADBA9a8qLrMq3AOT%2BOwqbT23obcrWMvOEZp4W8Vi%2FnR5eRy4zLfehtlrYmdNZjoxaxyofqb9DYywdMAUTdtchR2A3nywE4UxK0WavlkA41NjjBm%2FMpT19AxpCGDXO08ahcJgXF0Sz%2FucnheSXpA3IX%2BS0iRELOOWYJWXFT7ubaiWOD41y2gVEQiaW2ujBupOwtzJamuFJiqBN1zPXycoD9Q2i5kLByfIu%2FHUf%2BwWRIEjG9l8OyOvTBiskPyOoKhaq1Y2WE9VJ9Gu5glfmMEiYWZnDPgyI6zSFKGguI20Jt8gb2MtQokDHqLkabmCwJ4c3JolbJCPJfD9LDDMWFJ%2BGM7uWRVC4XThLB4XFLV5rcZ8cpZvv3bDE5DDe47TLDzwqrxHurT2r5jy3XzQ8oz23lYRNoXZiydeBHNlirHEMicHOcJRfNzVW3pUTn9pbeA16e8jDYesPZKlFohq9k1wNv3qg1CtJUni2PC3AgfJijgq3lvhc4iwjs3UQwAZHKTquqsgR3%2FDZFFWcIhp8sl6L3S9KW9OMsNOV%2F%2BdCrvSAes3zGHnjGnorc94GdgkcYCixKIyfQCOsv%2B84sQqlfPBv5PCtuTcN7uQDltTpu7oUXkXfImVrquPGIPRoj4vhRVeIs2C%2BWo8rzDo%2FuLABjqkAQtqleddyX1JmlyDqtZzZuB8KDqrPnm%2BZ2Sffiqm86rkgFldhH%2BgwcRcyVMWJAmdwXGo402Fd0S53h%2FkRgjMWpFVn7tkMyoDVYzxu8XHH%2BE6Q1AkWLM4khb86NHwcjtAa9TSRm7EW6fuDGbbzCg%2F0shjUO41RD9oPd%2BBWEO0XpEH%2FYxMH0b%2FAIoi1dS4%2FJ%2Bnbid1XAdvBjDpol%2BTzb6ghkwBf%2Bqf&X-Amz-Signature=f55bf2f8c51fcfc634ab604fa9fd5cc460da82ea1b3d74c12b4af8e86a8d9a9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEFJFPZY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC40n%2FPozB%2FWCAVu9W99e63CBqnv694X938l%2BY0XWRCBQIhALpLFSFZaD2whA8khfQsWJcO%2BF7AOfseTB1CqKsdLrZIKv8DCC8QABoMNjM3NDIzMTgzODA1Igyl1AdcADBA9a8qLrMq3AOT%2BOwqbT23obcrWMvOEZp4W8Vi%2FnR5eRy4zLfehtlrYmdNZjoxaxyofqb9DYywdMAUTdtchR2A3nywE4UxK0WavlkA41NjjBm%2FMpT19AxpCGDXO08ahcJgXF0Sz%2FucnheSXpA3IX%2BS0iRELOOWYJWXFT7ubaiWOD41y2gVEQiaW2ujBupOwtzJamuFJiqBN1zPXycoD9Q2i5kLByfIu%2FHUf%2BwWRIEjG9l8OyOvTBiskPyOoKhaq1Y2WE9VJ9Gu5glfmMEiYWZnDPgyI6zSFKGguI20Jt8gb2MtQokDHqLkabmCwJ4c3JolbJCPJfD9LDDMWFJ%2BGM7uWRVC4XThLB4XFLV5rcZ8cpZvv3bDE5DDe47TLDzwqrxHurT2r5jy3XzQ8oz23lYRNoXZiydeBHNlirHEMicHOcJRfNzVW3pUTn9pbeA16e8jDYesPZKlFohq9k1wNv3qg1CtJUni2PC3AgfJijgq3lvhc4iwjs3UQwAZHKTquqsgR3%2FDZFFWcIhp8sl6L3S9KW9OMsNOV%2F%2BdCrvSAes3zGHnjGnorc94GdgkcYCixKIyfQCOsv%2B84sQqlfPBv5PCtuTcN7uQDltTpu7oUXkXfImVrquPGIPRoj4vhRVeIs2C%2BWo8rzDo%2FuLABjqkAQtqleddyX1JmlyDqtZzZuB8KDqrPnm%2BZ2Sffiqm86rkgFldhH%2BgwcRcyVMWJAmdwXGo402Fd0S53h%2FkRgjMWpFVn7tkMyoDVYzxu8XHH%2BE6Q1AkWLM4khb86NHwcjtAa9TSRm7EW6fuDGbbzCg%2F0shjUO41RD9oPd%2BBWEO0XpEH%2FYxMH0b%2FAIoi1dS4%2FJ%2Bnbid1XAdvBjDpol%2BTzb6ghkwBf%2Bqf&X-Amz-Signature=1b873a77ab38fea835a53a8de5dde18e572aaa85eac7df1c0d57f9ab67d248d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEFJFPZY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC40n%2FPozB%2FWCAVu9W99e63CBqnv694X938l%2BY0XWRCBQIhALpLFSFZaD2whA8khfQsWJcO%2BF7AOfseTB1CqKsdLrZIKv8DCC8QABoMNjM3NDIzMTgzODA1Igyl1AdcADBA9a8qLrMq3AOT%2BOwqbT23obcrWMvOEZp4W8Vi%2FnR5eRy4zLfehtlrYmdNZjoxaxyofqb9DYywdMAUTdtchR2A3nywE4UxK0WavlkA41NjjBm%2FMpT19AxpCGDXO08ahcJgXF0Sz%2FucnheSXpA3IX%2BS0iRELOOWYJWXFT7ubaiWOD41y2gVEQiaW2ujBupOwtzJamuFJiqBN1zPXycoD9Q2i5kLByfIu%2FHUf%2BwWRIEjG9l8OyOvTBiskPyOoKhaq1Y2WE9VJ9Gu5glfmMEiYWZnDPgyI6zSFKGguI20Jt8gb2MtQokDHqLkabmCwJ4c3JolbJCPJfD9LDDMWFJ%2BGM7uWRVC4XThLB4XFLV5rcZ8cpZvv3bDE5DDe47TLDzwqrxHurT2r5jy3XzQ8oz23lYRNoXZiydeBHNlirHEMicHOcJRfNzVW3pUTn9pbeA16e8jDYesPZKlFohq9k1wNv3qg1CtJUni2PC3AgfJijgq3lvhc4iwjs3UQwAZHKTquqsgR3%2FDZFFWcIhp8sl6L3S9KW9OMsNOV%2F%2BdCrvSAes3zGHnjGnorc94GdgkcYCixKIyfQCOsv%2B84sQqlfPBv5PCtuTcN7uQDltTpu7oUXkXfImVrquPGIPRoj4vhRVeIs2C%2BWo8rzDo%2FuLABjqkAQtqleddyX1JmlyDqtZzZuB8KDqrPnm%2BZ2Sffiqm86rkgFldhH%2BgwcRcyVMWJAmdwXGo402Fd0S53h%2FkRgjMWpFVn7tkMyoDVYzxu8XHH%2BE6Q1AkWLM4khb86NHwcjtAa9TSRm7EW6fuDGbbzCg%2F0shjUO41RD9oPd%2BBWEO0XpEH%2FYxMH0b%2FAIoi1dS4%2FJ%2Bnbid1XAdvBjDpol%2BTzb6ghkwBf%2Bqf&X-Amz-Signature=a6d6bee2424ae816cc682e963296b58780036ad3d70b855d3ead980db391533a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

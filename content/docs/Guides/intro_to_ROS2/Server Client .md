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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QKL4IKE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCedT1IYw4u4VtO5BR2u4QaQT7Ii7yyPFxxhiX7agjHSQIhAPPTVxy%2FofM2pOkJb3kHKzG8SlQnyLfuiAaM5FTpGWm6Kv8DCG4QABoMNjM3NDIzMTgzODA1IgzG877YyD5n2Uvr3QQq3AM9%2FbtVHbHDRGOwoe6nvNyOov8zO428ZRGQtgGt8VFk%2Fvx94MjxIdve3Gveo8buVvJD%2B1WBMK2MnZB79fLPpetvbs3ZknfCrfJNVS%2Fj5zCY50abcMmAw4YZRPTkXzsAF3MZFMaH0Ew23PMfH9NVpk7x6ePbJWkajGkuUJU9a7jVDMkDiRPWSIlBNw4x91rllDr%2BHU3Sy8XUTzg5CPzI2xjtr0qOTTyWdlkOAJjFc2ISkAtZ727RzQxogbQJQgmgfO%2Btn0cWFNKwd4RvNAcDDgp4LamUTahazJqXSTbZsAFIBCwXtU0Suj84ZpX53yp4QzSvhBJYkpl9GrWf6%2Bl7xm9CmesWHvbmtaA53Lseq0%2FkJ9o9oROJE9jZPVKwvarvFPGIX6l0v2NtGWcL9BXDsXh%2Bm4FCz8mVN3cqUPgr2A%2F%2BtRmi%2FItP3QFM6xjZscOBx3910ntVoA66sLwsAxgfeUMmC42vCReQ3oncyBVebdoudpN0tLwKLIP1VmnFC3h7IQnXVmiAc5%2B%2FaL8X3N91qJc%2BiTEvJDJcNuubD%2BfQuKKbmYrwD951KY5gOJqmmddeYRXGYoA9U7EZKZ%2BeCO9r2AwmGQltm0SJV3%2BettNrItb%2BIABs8CMCsE%2FmaV2mpzC%2FzqXBBjqkAQ4o330hDuf3dyeMRONGByPz7vj2o0b3Zeo5hBrXzZp6wYdBRviD6QZAFHjN7D7tUhF1clVMn9Dkb3CW%2B3%2FFGrOQzUxE7j2r2PqKlTgdaaW%2BcLXF6cuhzpLEwz%2B4lW6bgWgTLDUhIhwn6JsFz9SqPMeecRP%2BZ1gw9mM8X%2BojiAjmhT%2B3Y6Mdv3HK%2Fm56q4e07POG7AvpSReLRgJbtf0%2FY5lX8MdY&X-Amz-Signature=3802b5278fc87abce37d09bd928b01a648b869b343fb7e02100f27389d5de245&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QKL4IKE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCedT1IYw4u4VtO5BR2u4QaQT7Ii7yyPFxxhiX7agjHSQIhAPPTVxy%2FofM2pOkJb3kHKzG8SlQnyLfuiAaM5FTpGWm6Kv8DCG4QABoMNjM3NDIzMTgzODA1IgzG877YyD5n2Uvr3QQq3AM9%2FbtVHbHDRGOwoe6nvNyOov8zO428ZRGQtgGt8VFk%2Fvx94MjxIdve3Gveo8buVvJD%2B1WBMK2MnZB79fLPpetvbs3ZknfCrfJNVS%2Fj5zCY50abcMmAw4YZRPTkXzsAF3MZFMaH0Ew23PMfH9NVpk7x6ePbJWkajGkuUJU9a7jVDMkDiRPWSIlBNw4x91rllDr%2BHU3Sy8XUTzg5CPzI2xjtr0qOTTyWdlkOAJjFc2ISkAtZ727RzQxogbQJQgmgfO%2Btn0cWFNKwd4RvNAcDDgp4LamUTahazJqXSTbZsAFIBCwXtU0Suj84ZpX53yp4QzSvhBJYkpl9GrWf6%2Bl7xm9CmesWHvbmtaA53Lseq0%2FkJ9o9oROJE9jZPVKwvarvFPGIX6l0v2NtGWcL9BXDsXh%2Bm4FCz8mVN3cqUPgr2A%2F%2BtRmi%2FItP3QFM6xjZscOBx3910ntVoA66sLwsAxgfeUMmC42vCReQ3oncyBVebdoudpN0tLwKLIP1VmnFC3h7IQnXVmiAc5%2B%2FaL8X3N91qJc%2BiTEvJDJcNuubD%2BfQuKKbmYrwD951KY5gOJqmmddeYRXGYoA9U7EZKZ%2BeCO9r2AwmGQltm0SJV3%2BettNrItb%2BIABs8CMCsE%2FmaV2mpzC%2FzqXBBjqkAQ4o330hDuf3dyeMRONGByPz7vj2o0b3Zeo5hBrXzZp6wYdBRviD6QZAFHjN7D7tUhF1clVMn9Dkb3CW%2B3%2FFGrOQzUxE7j2r2PqKlTgdaaW%2BcLXF6cuhzpLEwz%2B4lW6bgWgTLDUhIhwn6JsFz9SqPMeecRP%2BZ1gw9mM8X%2BojiAjmhT%2B3Y6Mdv3HK%2Fm56q4e07POG7AvpSReLRgJbtf0%2FY5lX8MdY&X-Amz-Signature=2b2de5cc4a2e69733f3344322c8879d5fc501fe2e5287f737508a7839787f014&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QKL4IKE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCedT1IYw4u4VtO5BR2u4QaQT7Ii7yyPFxxhiX7agjHSQIhAPPTVxy%2FofM2pOkJb3kHKzG8SlQnyLfuiAaM5FTpGWm6Kv8DCG4QABoMNjM3NDIzMTgzODA1IgzG877YyD5n2Uvr3QQq3AM9%2FbtVHbHDRGOwoe6nvNyOov8zO428ZRGQtgGt8VFk%2Fvx94MjxIdve3Gveo8buVvJD%2B1WBMK2MnZB79fLPpetvbs3ZknfCrfJNVS%2Fj5zCY50abcMmAw4YZRPTkXzsAF3MZFMaH0Ew23PMfH9NVpk7x6ePbJWkajGkuUJU9a7jVDMkDiRPWSIlBNw4x91rllDr%2BHU3Sy8XUTzg5CPzI2xjtr0qOTTyWdlkOAJjFc2ISkAtZ727RzQxogbQJQgmgfO%2Btn0cWFNKwd4RvNAcDDgp4LamUTahazJqXSTbZsAFIBCwXtU0Suj84ZpX53yp4QzSvhBJYkpl9GrWf6%2Bl7xm9CmesWHvbmtaA53Lseq0%2FkJ9o9oROJE9jZPVKwvarvFPGIX6l0v2NtGWcL9BXDsXh%2Bm4FCz8mVN3cqUPgr2A%2F%2BtRmi%2FItP3QFM6xjZscOBx3910ntVoA66sLwsAxgfeUMmC42vCReQ3oncyBVebdoudpN0tLwKLIP1VmnFC3h7IQnXVmiAc5%2B%2FaL8X3N91qJc%2BiTEvJDJcNuubD%2BfQuKKbmYrwD951KY5gOJqmmddeYRXGYoA9U7EZKZ%2BeCO9r2AwmGQltm0SJV3%2BettNrItb%2BIABs8CMCsE%2FmaV2mpzC%2FzqXBBjqkAQ4o330hDuf3dyeMRONGByPz7vj2o0b3Zeo5hBrXzZp6wYdBRviD6QZAFHjN7D7tUhF1clVMn9Dkb3CW%2B3%2FFGrOQzUxE7j2r2PqKlTgdaaW%2BcLXF6cuhzpLEwz%2B4lW6bgWgTLDUhIhwn6JsFz9SqPMeecRP%2BZ1gw9mM8X%2BojiAjmhT%2B3Y6Mdv3HK%2Fm56q4e07POG7AvpSReLRgJbtf0%2FY5lX8MdY&X-Amz-Signature=88d740cf389f4a4cec3c2c42a2a92e8ca2cf2249b0e2552089ef72e6e5374fec&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QKL4IKE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCedT1IYw4u4VtO5BR2u4QaQT7Ii7yyPFxxhiX7agjHSQIhAPPTVxy%2FofM2pOkJb3kHKzG8SlQnyLfuiAaM5FTpGWm6Kv8DCG4QABoMNjM3NDIzMTgzODA1IgzG877YyD5n2Uvr3QQq3AM9%2FbtVHbHDRGOwoe6nvNyOov8zO428ZRGQtgGt8VFk%2Fvx94MjxIdve3Gveo8buVvJD%2B1WBMK2MnZB79fLPpetvbs3ZknfCrfJNVS%2Fj5zCY50abcMmAw4YZRPTkXzsAF3MZFMaH0Ew23PMfH9NVpk7x6ePbJWkajGkuUJU9a7jVDMkDiRPWSIlBNw4x91rllDr%2BHU3Sy8XUTzg5CPzI2xjtr0qOTTyWdlkOAJjFc2ISkAtZ727RzQxogbQJQgmgfO%2Btn0cWFNKwd4RvNAcDDgp4LamUTahazJqXSTbZsAFIBCwXtU0Suj84ZpX53yp4QzSvhBJYkpl9GrWf6%2Bl7xm9CmesWHvbmtaA53Lseq0%2FkJ9o9oROJE9jZPVKwvarvFPGIX6l0v2NtGWcL9BXDsXh%2Bm4FCz8mVN3cqUPgr2A%2F%2BtRmi%2FItP3QFM6xjZscOBx3910ntVoA66sLwsAxgfeUMmC42vCReQ3oncyBVebdoudpN0tLwKLIP1VmnFC3h7IQnXVmiAc5%2B%2FaL8X3N91qJc%2BiTEvJDJcNuubD%2BfQuKKbmYrwD951KY5gOJqmmddeYRXGYoA9U7EZKZ%2BeCO9r2AwmGQltm0SJV3%2BettNrItb%2BIABs8CMCsE%2FmaV2mpzC%2FzqXBBjqkAQ4o330hDuf3dyeMRONGByPz7vj2o0b3Zeo5hBrXzZp6wYdBRviD6QZAFHjN7D7tUhF1clVMn9Dkb3CW%2B3%2FFGrOQzUxE7j2r2PqKlTgdaaW%2BcLXF6cuhzpLEwz%2B4lW6bgWgTLDUhIhwn6JsFz9SqPMeecRP%2BZ1gw9mM8X%2BojiAjmhT%2B3Y6Mdv3HK%2Fm56q4e07POG7AvpSReLRgJbtf0%2FY5lX8MdY&X-Amz-Signature=c8a158a7700e7bbcdd170921a85f23e64415b9bc9f940903aa6a57d1ba7f14fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QKL4IKE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCedT1IYw4u4VtO5BR2u4QaQT7Ii7yyPFxxhiX7agjHSQIhAPPTVxy%2FofM2pOkJb3kHKzG8SlQnyLfuiAaM5FTpGWm6Kv8DCG4QABoMNjM3NDIzMTgzODA1IgzG877YyD5n2Uvr3QQq3AM9%2FbtVHbHDRGOwoe6nvNyOov8zO428ZRGQtgGt8VFk%2Fvx94MjxIdve3Gveo8buVvJD%2B1WBMK2MnZB79fLPpetvbs3ZknfCrfJNVS%2Fj5zCY50abcMmAw4YZRPTkXzsAF3MZFMaH0Ew23PMfH9NVpk7x6ePbJWkajGkuUJU9a7jVDMkDiRPWSIlBNw4x91rllDr%2BHU3Sy8XUTzg5CPzI2xjtr0qOTTyWdlkOAJjFc2ISkAtZ727RzQxogbQJQgmgfO%2Btn0cWFNKwd4RvNAcDDgp4LamUTahazJqXSTbZsAFIBCwXtU0Suj84ZpX53yp4QzSvhBJYkpl9GrWf6%2Bl7xm9CmesWHvbmtaA53Lseq0%2FkJ9o9oROJE9jZPVKwvarvFPGIX6l0v2NtGWcL9BXDsXh%2Bm4FCz8mVN3cqUPgr2A%2F%2BtRmi%2FItP3QFM6xjZscOBx3910ntVoA66sLwsAxgfeUMmC42vCReQ3oncyBVebdoudpN0tLwKLIP1VmnFC3h7IQnXVmiAc5%2B%2FaL8X3N91qJc%2BiTEvJDJcNuubD%2BfQuKKbmYrwD951KY5gOJqmmddeYRXGYoA9U7EZKZ%2BeCO9r2AwmGQltm0SJV3%2BettNrItb%2BIABs8CMCsE%2FmaV2mpzC%2FzqXBBjqkAQ4o330hDuf3dyeMRONGByPz7vj2o0b3Zeo5hBrXzZp6wYdBRviD6QZAFHjN7D7tUhF1clVMn9Dkb3CW%2B3%2FFGrOQzUxE7j2r2PqKlTgdaaW%2BcLXF6cuhzpLEwz%2B4lW6bgWgTLDUhIhwn6JsFz9SqPMeecRP%2BZ1gw9mM8X%2BojiAjmhT%2B3Y6Mdv3HK%2Fm56q4e07POG7AvpSReLRgJbtf0%2FY5lX8MdY&X-Amz-Signature=197661ea6d29c26bfad0c0705b4292386ccc5b11c00b9256f4edffc1e8fa1a03&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

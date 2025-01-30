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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ALDSAH5%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcBmEwVvuF8bcjuZ1sqy%2B0ugdxUDgPLF7qnb%2B6e6EdXAiAYFuPkBG4uNQqXIhr6E0polWtisK3bAULs0wdj3%2BSbLiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGSsYgGv69De83GW%2BKtwD7%2B1oKo5gDjmtMSBfxBroruGZIE3tU%2FbZqdaw2LwLZAzUtKhFz3AA%2BPEpBvTE2NHjpktEFDIyEotBMezbiioeVPo%2FaktYJhdSp6ErK9HbeXIVHSjI5syjNOEGcGnkc5JgvfUvp8M2Lpc9BfqbQZ1fySBUPei9mxSnmkwnGxNbDRqqT96%2B0724u8tNsJ36i3VX8N8xutGnz0kRu8SioP4mv3QuxUHu4jPfePwoHrkkRNkvuQjg7VUWcCrfMgAREYpj769ukpyb1JIieaZtAlhIkCK6S%2FbV37gFvuRRwP1QhbDmkerTBFgp%2F8jZ%2Baq8Siwjuj1vHcVmXt9JCeJv4Aiw2IicgxcDb%2F%2F77OioifU%2FhAkqTKSmLyao7OvhdLUod8ZzV58DdJM3SUqy2gIpb0DlKfgnU0xC9H%2BeTQkPDtT%2Ft%2FRsLK8Rus%2FRqH2OhX7sd4a0s%2FUC8z0146hVuO5XLL2Cb%2B3bCyir027UMBAykEIKAONZXvjb6p24Mx4QCu5M9ZFiPTcgagbT0vWQDS%2BehIOZb6xYbZqyaylvOKDI8zzbC5t4XizsJLHOuuvUOynf1vqEwqzXCcD5UCa%2Bs%2F%2BaTCZzm5Lq7VvdOuqAaZAMxC5RcRflWLm8BVoQTIe4mNYw7evrvAY6pgHOtpzAFZrqwKXqqPEJgVkiRrk0TrfERwmxH7vg5T5oSTU8UGHsycT%2F%2FRGrVqYf03rmyZr6ciq0f%2FwOqPhrijrdpexg6XS1BbXiDSKO8Q%2BlDOtx2Q34fRBu8%2Br6y7VkLS%2BkQogmqeS14QM3FsxKMFrKB3JsPsPmA77k%2FBD9B0OLR%2F1q0QhFQT%2BVEyW25yLncnTFzxxUTVTLyB5mmjFLsHYnDHCOMp%2BY&X-Amz-Signature=e8ff458e20c12d181ad09323d5a50d0de0b02f709ff0cde30f8f07f347bdc30c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ALDSAH5%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcBmEwVvuF8bcjuZ1sqy%2B0ugdxUDgPLF7qnb%2B6e6EdXAiAYFuPkBG4uNQqXIhr6E0polWtisK3bAULs0wdj3%2BSbLiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGSsYgGv69De83GW%2BKtwD7%2B1oKo5gDjmtMSBfxBroruGZIE3tU%2FbZqdaw2LwLZAzUtKhFz3AA%2BPEpBvTE2NHjpktEFDIyEotBMezbiioeVPo%2FaktYJhdSp6ErK9HbeXIVHSjI5syjNOEGcGnkc5JgvfUvp8M2Lpc9BfqbQZ1fySBUPei9mxSnmkwnGxNbDRqqT96%2B0724u8tNsJ36i3VX8N8xutGnz0kRu8SioP4mv3QuxUHu4jPfePwoHrkkRNkvuQjg7VUWcCrfMgAREYpj769ukpyb1JIieaZtAlhIkCK6S%2FbV37gFvuRRwP1QhbDmkerTBFgp%2F8jZ%2Baq8Siwjuj1vHcVmXt9JCeJv4Aiw2IicgxcDb%2F%2F77OioifU%2FhAkqTKSmLyao7OvhdLUod8ZzV58DdJM3SUqy2gIpb0DlKfgnU0xC9H%2BeTQkPDtT%2Ft%2FRsLK8Rus%2FRqH2OhX7sd4a0s%2FUC8z0146hVuO5XLL2Cb%2B3bCyir027UMBAykEIKAONZXvjb6p24Mx4QCu5M9ZFiPTcgagbT0vWQDS%2BehIOZb6xYbZqyaylvOKDI8zzbC5t4XizsJLHOuuvUOynf1vqEwqzXCcD5UCa%2Bs%2F%2BaTCZzm5Lq7VvdOuqAaZAMxC5RcRflWLm8BVoQTIe4mNYw7evrvAY6pgHOtpzAFZrqwKXqqPEJgVkiRrk0TrfERwmxH7vg5T5oSTU8UGHsycT%2F%2FRGrVqYf03rmyZr6ciq0f%2FwOqPhrijrdpexg6XS1BbXiDSKO8Q%2BlDOtx2Q34fRBu8%2Br6y7VkLS%2BkQogmqeS14QM3FsxKMFrKB3JsPsPmA77k%2FBD9B0OLR%2F1q0QhFQT%2BVEyW25yLncnTFzxxUTVTLyB5mmjFLsHYnDHCOMp%2BY&X-Amz-Signature=473e4aeea7ee93405c62530ddfa2494909d76543667b0a4b91b37087187eb815&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ALDSAH5%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcBmEwVvuF8bcjuZ1sqy%2B0ugdxUDgPLF7qnb%2B6e6EdXAiAYFuPkBG4uNQqXIhr6E0polWtisK3bAULs0wdj3%2BSbLiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGSsYgGv69De83GW%2BKtwD7%2B1oKo5gDjmtMSBfxBroruGZIE3tU%2FbZqdaw2LwLZAzUtKhFz3AA%2BPEpBvTE2NHjpktEFDIyEotBMezbiioeVPo%2FaktYJhdSp6ErK9HbeXIVHSjI5syjNOEGcGnkc5JgvfUvp8M2Lpc9BfqbQZ1fySBUPei9mxSnmkwnGxNbDRqqT96%2B0724u8tNsJ36i3VX8N8xutGnz0kRu8SioP4mv3QuxUHu4jPfePwoHrkkRNkvuQjg7VUWcCrfMgAREYpj769ukpyb1JIieaZtAlhIkCK6S%2FbV37gFvuRRwP1QhbDmkerTBFgp%2F8jZ%2Baq8Siwjuj1vHcVmXt9JCeJv4Aiw2IicgxcDb%2F%2F77OioifU%2FhAkqTKSmLyao7OvhdLUod8ZzV58DdJM3SUqy2gIpb0DlKfgnU0xC9H%2BeTQkPDtT%2Ft%2FRsLK8Rus%2FRqH2OhX7sd4a0s%2FUC8z0146hVuO5XLL2Cb%2B3bCyir027UMBAykEIKAONZXvjb6p24Mx4QCu5M9ZFiPTcgagbT0vWQDS%2BehIOZb6xYbZqyaylvOKDI8zzbC5t4XizsJLHOuuvUOynf1vqEwqzXCcD5UCa%2Bs%2F%2BaTCZzm5Lq7VvdOuqAaZAMxC5RcRflWLm8BVoQTIe4mNYw7evrvAY6pgHOtpzAFZrqwKXqqPEJgVkiRrk0TrfERwmxH7vg5T5oSTU8UGHsycT%2F%2FRGrVqYf03rmyZr6ciq0f%2FwOqPhrijrdpexg6XS1BbXiDSKO8Q%2BlDOtx2Q34fRBu8%2Br6y7VkLS%2BkQogmqeS14QM3FsxKMFrKB3JsPsPmA77k%2FBD9B0OLR%2F1q0QhFQT%2BVEyW25yLncnTFzxxUTVTLyB5mmjFLsHYnDHCOMp%2BY&X-Amz-Signature=fbbbd1030dd63a6410d7c51498374897738997f4189765c82165faa10397ed25&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ALDSAH5%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcBmEwVvuF8bcjuZ1sqy%2B0ugdxUDgPLF7qnb%2B6e6EdXAiAYFuPkBG4uNQqXIhr6E0polWtisK3bAULs0wdj3%2BSbLiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGSsYgGv69De83GW%2BKtwD7%2B1oKo5gDjmtMSBfxBroruGZIE3tU%2FbZqdaw2LwLZAzUtKhFz3AA%2BPEpBvTE2NHjpktEFDIyEotBMezbiioeVPo%2FaktYJhdSp6ErK9HbeXIVHSjI5syjNOEGcGnkc5JgvfUvp8M2Lpc9BfqbQZ1fySBUPei9mxSnmkwnGxNbDRqqT96%2B0724u8tNsJ36i3VX8N8xutGnz0kRu8SioP4mv3QuxUHu4jPfePwoHrkkRNkvuQjg7VUWcCrfMgAREYpj769ukpyb1JIieaZtAlhIkCK6S%2FbV37gFvuRRwP1QhbDmkerTBFgp%2F8jZ%2Baq8Siwjuj1vHcVmXt9JCeJv4Aiw2IicgxcDb%2F%2F77OioifU%2FhAkqTKSmLyao7OvhdLUod8ZzV58DdJM3SUqy2gIpb0DlKfgnU0xC9H%2BeTQkPDtT%2Ft%2FRsLK8Rus%2FRqH2OhX7sd4a0s%2FUC8z0146hVuO5XLL2Cb%2B3bCyir027UMBAykEIKAONZXvjb6p24Mx4QCu5M9ZFiPTcgagbT0vWQDS%2BehIOZb6xYbZqyaylvOKDI8zzbC5t4XizsJLHOuuvUOynf1vqEwqzXCcD5UCa%2Bs%2F%2BaTCZzm5Lq7VvdOuqAaZAMxC5RcRflWLm8BVoQTIe4mNYw7evrvAY6pgHOtpzAFZrqwKXqqPEJgVkiRrk0TrfERwmxH7vg5T5oSTU8UGHsycT%2F%2FRGrVqYf03rmyZr6ciq0f%2FwOqPhrijrdpexg6XS1BbXiDSKO8Q%2BlDOtx2Q34fRBu8%2Br6y7VkLS%2BkQogmqeS14QM3FsxKMFrKB3JsPsPmA77k%2FBD9B0OLR%2F1q0QhFQT%2BVEyW25yLncnTFzxxUTVTLyB5mmjFLsHYnDHCOMp%2BY&X-Amz-Signature=b994641a0345df312f814193f79dd673e77a5bcf317a633424640c3b2ded6c55&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ALDSAH5%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcBmEwVvuF8bcjuZ1sqy%2B0ugdxUDgPLF7qnb%2B6e6EdXAiAYFuPkBG4uNQqXIhr6E0polWtisK3bAULs0wdj3%2BSbLiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGSsYgGv69De83GW%2BKtwD7%2B1oKo5gDjmtMSBfxBroruGZIE3tU%2FbZqdaw2LwLZAzUtKhFz3AA%2BPEpBvTE2NHjpktEFDIyEotBMezbiioeVPo%2FaktYJhdSp6ErK9HbeXIVHSjI5syjNOEGcGnkc5JgvfUvp8M2Lpc9BfqbQZ1fySBUPei9mxSnmkwnGxNbDRqqT96%2B0724u8tNsJ36i3VX8N8xutGnz0kRu8SioP4mv3QuxUHu4jPfePwoHrkkRNkvuQjg7VUWcCrfMgAREYpj769ukpyb1JIieaZtAlhIkCK6S%2FbV37gFvuRRwP1QhbDmkerTBFgp%2F8jZ%2Baq8Siwjuj1vHcVmXt9JCeJv4Aiw2IicgxcDb%2F%2F77OioifU%2FhAkqTKSmLyao7OvhdLUod8ZzV58DdJM3SUqy2gIpb0DlKfgnU0xC9H%2BeTQkPDtT%2Ft%2FRsLK8Rus%2FRqH2OhX7sd4a0s%2FUC8z0146hVuO5XLL2Cb%2B3bCyir027UMBAykEIKAONZXvjb6p24Mx4QCu5M9ZFiPTcgagbT0vWQDS%2BehIOZb6xYbZqyaylvOKDI8zzbC5t4XizsJLHOuuvUOynf1vqEwqzXCcD5UCa%2Bs%2F%2BaTCZzm5Lq7VvdOuqAaZAMxC5RcRflWLm8BVoQTIe4mNYw7evrvAY6pgHOtpzAFZrqwKXqqPEJgVkiRrk0TrfERwmxH7vg5T5oSTU8UGHsycT%2F%2FRGrVqYf03rmyZr6ciq0f%2FwOqPhrijrdpexg6XS1BbXiDSKO8Q%2BlDOtx2Q34fRBu8%2Br6y7VkLS%2BkQogmqeS14QM3FsxKMFrKB3JsPsPmA77k%2FBD9B0OLR%2F1q0QhFQT%2BVEyW25yLncnTFzxxUTVTLyB5mmjFLsHYnDHCOMp%2BY&X-Amz-Signature=405fac6e3c518622cea776a4c545b509618149e03fb7862391bedd7fe018d4a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

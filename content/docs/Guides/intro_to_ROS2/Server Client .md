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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUSLZB6C%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbpzTxmgv4bZGS%2BQB7qNM3kBD%2FkO5B%2FGLUbRUhdX08WQIhAMg2oJL5Hbsp6T5Nl1cZHwmpxE80pinprz%2FxrUnagR0eKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXus%2BuWHr5%2FTzcN3Eq3APkl2gitL8yIHlBOmaGSh01FBpz9Q6UyEyp2lZd7LXz2%2FHXM3atf3KSuShzi8yXBhvDx0q64%2BW7lGOlrb1%2Bwk9s1OtuXryeYTRTNQjMbAw0E4VOp5hs7%2Bh6qZsVvf3ZxyP1WF%2FVZiwdwlS0aaNsJj9U21oDeN1cpA8%2B4E5CDegDmKFrzkNnxJPJE7uxoR0M9aVDuK5n7cFTOG7scQZ%2Bkbkh2lK2RonpZ1FoCk49YOWVnvfUGurwviklejNAwKBsOkZax97v7%2F5CEs2A2nB99%2FQWjn1OcA9NP3NuPqK6Vs7M0LL1upGUK8h%2B2YzHIAW4%2BqH71FMZVNQkmsBwmgwjbTzZsJ3JsXsR5S0QMe8q%2Bu2EF2aCRGN4RVwd37CtgUzzm4hGadkt7aAc8FOaNcdD9CbZhJiEB5z%2F3o7Z8K%2FdjBpNLcLTXZV0aERTBW7JCK6UDa2UrAIL%2FoUiev4kU%2FQa3jGOQ7jL430TFfvoW8t1%2FqAbo0B%2BQ2frcJFpIwYi2vsOcs511zkSQYx1UowPSAP5AN6aQhKD%2B8jcOhQCXh8%2Fa42UbgvqpNdcBjaJzuSXgBCjWaadApxFbGoNginT%2BgEifgUZ2sBcD9C%2FN75eb19aJFXRb7EV%2BwyYC2sJJrvxSDDo3KrBBjqkAbh2VtTgkegc9BpvFkeWzQHArpJs1DlNUAOYhK7MPi0SQCu7uEWaQebI2F4V2PEjUGRnndrpn5ykUbJWcsTEGmG4dwoQz0qcNjz%2FM%2FpdDznCBcAwhknS6yJGpEfavmpfNrq4fh4usmphXQxVLPaDT74%2Bkxtm7v%2BVu4ovitIcPHRSMAOeMyLXgQllLl0iaRPQ1N2c1ZqZvI5Rpp4yWMJg6%2B1PksFQ&X-Amz-Signature=22fd5604500ef9541ca395bb5a55953f3837cf9ac6c11a89630f5498b9a8e1d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUSLZB6C%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbpzTxmgv4bZGS%2BQB7qNM3kBD%2FkO5B%2FGLUbRUhdX08WQIhAMg2oJL5Hbsp6T5Nl1cZHwmpxE80pinprz%2FxrUnagR0eKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXus%2BuWHr5%2FTzcN3Eq3APkl2gitL8yIHlBOmaGSh01FBpz9Q6UyEyp2lZd7LXz2%2FHXM3atf3KSuShzi8yXBhvDx0q64%2BW7lGOlrb1%2Bwk9s1OtuXryeYTRTNQjMbAw0E4VOp5hs7%2Bh6qZsVvf3ZxyP1WF%2FVZiwdwlS0aaNsJj9U21oDeN1cpA8%2B4E5CDegDmKFrzkNnxJPJE7uxoR0M9aVDuK5n7cFTOG7scQZ%2Bkbkh2lK2RonpZ1FoCk49YOWVnvfUGurwviklejNAwKBsOkZax97v7%2F5CEs2A2nB99%2FQWjn1OcA9NP3NuPqK6Vs7M0LL1upGUK8h%2B2YzHIAW4%2BqH71FMZVNQkmsBwmgwjbTzZsJ3JsXsR5S0QMe8q%2Bu2EF2aCRGN4RVwd37CtgUzzm4hGadkt7aAc8FOaNcdD9CbZhJiEB5z%2F3o7Z8K%2FdjBpNLcLTXZV0aERTBW7JCK6UDa2UrAIL%2FoUiev4kU%2FQa3jGOQ7jL430TFfvoW8t1%2FqAbo0B%2BQ2frcJFpIwYi2vsOcs511zkSQYx1UowPSAP5AN6aQhKD%2B8jcOhQCXh8%2Fa42UbgvqpNdcBjaJzuSXgBCjWaadApxFbGoNginT%2BgEifgUZ2sBcD9C%2FN75eb19aJFXRb7EV%2BwyYC2sJJrvxSDDo3KrBBjqkAbh2VtTgkegc9BpvFkeWzQHArpJs1DlNUAOYhK7MPi0SQCu7uEWaQebI2F4V2PEjUGRnndrpn5ykUbJWcsTEGmG4dwoQz0qcNjz%2FM%2FpdDznCBcAwhknS6yJGpEfavmpfNrq4fh4usmphXQxVLPaDT74%2Bkxtm7v%2BVu4ovitIcPHRSMAOeMyLXgQllLl0iaRPQ1N2c1ZqZvI5Rpp4yWMJg6%2B1PksFQ&X-Amz-Signature=13acf34372afdf39ed9849be4b66dfbba91323f50b34a2194c14035bcbc24a81&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUSLZB6C%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbpzTxmgv4bZGS%2BQB7qNM3kBD%2FkO5B%2FGLUbRUhdX08WQIhAMg2oJL5Hbsp6T5Nl1cZHwmpxE80pinprz%2FxrUnagR0eKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXus%2BuWHr5%2FTzcN3Eq3APkl2gitL8yIHlBOmaGSh01FBpz9Q6UyEyp2lZd7LXz2%2FHXM3atf3KSuShzi8yXBhvDx0q64%2BW7lGOlrb1%2Bwk9s1OtuXryeYTRTNQjMbAw0E4VOp5hs7%2Bh6qZsVvf3ZxyP1WF%2FVZiwdwlS0aaNsJj9U21oDeN1cpA8%2B4E5CDegDmKFrzkNnxJPJE7uxoR0M9aVDuK5n7cFTOG7scQZ%2Bkbkh2lK2RonpZ1FoCk49YOWVnvfUGurwviklejNAwKBsOkZax97v7%2F5CEs2A2nB99%2FQWjn1OcA9NP3NuPqK6Vs7M0LL1upGUK8h%2B2YzHIAW4%2BqH71FMZVNQkmsBwmgwjbTzZsJ3JsXsR5S0QMe8q%2Bu2EF2aCRGN4RVwd37CtgUzzm4hGadkt7aAc8FOaNcdD9CbZhJiEB5z%2F3o7Z8K%2FdjBpNLcLTXZV0aERTBW7JCK6UDa2UrAIL%2FoUiev4kU%2FQa3jGOQ7jL430TFfvoW8t1%2FqAbo0B%2BQ2frcJFpIwYi2vsOcs511zkSQYx1UowPSAP5AN6aQhKD%2B8jcOhQCXh8%2Fa42UbgvqpNdcBjaJzuSXgBCjWaadApxFbGoNginT%2BgEifgUZ2sBcD9C%2FN75eb19aJFXRb7EV%2BwyYC2sJJrvxSDDo3KrBBjqkAbh2VtTgkegc9BpvFkeWzQHArpJs1DlNUAOYhK7MPi0SQCu7uEWaQebI2F4V2PEjUGRnndrpn5ykUbJWcsTEGmG4dwoQz0qcNjz%2FM%2FpdDznCBcAwhknS6yJGpEfavmpfNrq4fh4usmphXQxVLPaDT74%2Bkxtm7v%2BVu4ovitIcPHRSMAOeMyLXgQllLl0iaRPQ1N2c1ZqZvI5Rpp4yWMJg6%2B1PksFQ&X-Amz-Signature=abfcc737829eb8e0913d0300dd4b496c3cc1bb3635d722c761a4b2b9a76800be&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUSLZB6C%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbpzTxmgv4bZGS%2BQB7qNM3kBD%2FkO5B%2FGLUbRUhdX08WQIhAMg2oJL5Hbsp6T5Nl1cZHwmpxE80pinprz%2FxrUnagR0eKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXus%2BuWHr5%2FTzcN3Eq3APkl2gitL8yIHlBOmaGSh01FBpz9Q6UyEyp2lZd7LXz2%2FHXM3atf3KSuShzi8yXBhvDx0q64%2BW7lGOlrb1%2Bwk9s1OtuXryeYTRTNQjMbAw0E4VOp5hs7%2Bh6qZsVvf3ZxyP1WF%2FVZiwdwlS0aaNsJj9U21oDeN1cpA8%2B4E5CDegDmKFrzkNnxJPJE7uxoR0M9aVDuK5n7cFTOG7scQZ%2Bkbkh2lK2RonpZ1FoCk49YOWVnvfUGurwviklejNAwKBsOkZax97v7%2F5CEs2A2nB99%2FQWjn1OcA9NP3NuPqK6Vs7M0LL1upGUK8h%2B2YzHIAW4%2BqH71FMZVNQkmsBwmgwjbTzZsJ3JsXsR5S0QMe8q%2Bu2EF2aCRGN4RVwd37CtgUzzm4hGadkt7aAc8FOaNcdD9CbZhJiEB5z%2F3o7Z8K%2FdjBpNLcLTXZV0aERTBW7JCK6UDa2UrAIL%2FoUiev4kU%2FQa3jGOQ7jL430TFfvoW8t1%2FqAbo0B%2BQ2frcJFpIwYi2vsOcs511zkSQYx1UowPSAP5AN6aQhKD%2B8jcOhQCXh8%2Fa42UbgvqpNdcBjaJzuSXgBCjWaadApxFbGoNginT%2BgEifgUZ2sBcD9C%2FN75eb19aJFXRb7EV%2BwyYC2sJJrvxSDDo3KrBBjqkAbh2VtTgkegc9BpvFkeWzQHArpJs1DlNUAOYhK7MPi0SQCu7uEWaQebI2F4V2PEjUGRnndrpn5ykUbJWcsTEGmG4dwoQz0qcNjz%2FM%2FpdDznCBcAwhknS6yJGpEfavmpfNrq4fh4usmphXQxVLPaDT74%2Bkxtm7v%2BVu4ovitIcPHRSMAOeMyLXgQllLl0iaRPQ1N2c1ZqZvI5Rpp4yWMJg6%2B1PksFQ&X-Amz-Signature=f8cb568984c059f2fa11788f08a650554c89141e09a6d09c98657273e73b349b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUSLZB6C%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbpzTxmgv4bZGS%2BQB7qNM3kBD%2FkO5B%2FGLUbRUhdX08WQIhAMg2oJL5Hbsp6T5Nl1cZHwmpxE80pinprz%2FxrUnagR0eKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXus%2BuWHr5%2FTzcN3Eq3APkl2gitL8yIHlBOmaGSh01FBpz9Q6UyEyp2lZd7LXz2%2FHXM3atf3KSuShzi8yXBhvDx0q64%2BW7lGOlrb1%2Bwk9s1OtuXryeYTRTNQjMbAw0E4VOp5hs7%2Bh6qZsVvf3ZxyP1WF%2FVZiwdwlS0aaNsJj9U21oDeN1cpA8%2B4E5CDegDmKFrzkNnxJPJE7uxoR0M9aVDuK5n7cFTOG7scQZ%2Bkbkh2lK2RonpZ1FoCk49YOWVnvfUGurwviklejNAwKBsOkZax97v7%2F5CEs2A2nB99%2FQWjn1OcA9NP3NuPqK6Vs7M0LL1upGUK8h%2B2YzHIAW4%2BqH71FMZVNQkmsBwmgwjbTzZsJ3JsXsR5S0QMe8q%2Bu2EF2aCRGN4RVwd37CtgUzzm4hGadkt7aAc8FOaNcdD9CbZhJiEB5z%2F3o7Z8K%2FdjBpNLcLTXZV0aERTBW7JCK6UDa2UrAIL%2FoUiev4kU%2FQa3jGOQ7jL430TFfvoW8t1%2FqAbo0B%2BQ2frcJFpIwYi2vsOcs511zkSQYx1UowPSAP5AN6aQhKD%2B8jcOhQCXh8%2Fa42UbgvqpNdcBjaJzuSXgBCjWaadApxFbGoNginT%2BgEifgUZ2sBcD9C%2FN75eb19aJFXRb7EV%2BwyYC2sJJrvxSDDo3KrBBjqkAbh2VtTgkegc9BpvFkeWzQHArpJs1DlNUAOYhK7MPi0SQCu7uEWaQebI2F4V2PEjUGRnndrpn5ykUbJWcsTEGmG4dwoQz0qcNjz%2FM%2FpdDznCBcAwhknS6yJGpEfavmpfNrq4fh4usmphXQxVLPaDT74%2Bkxtm7v%2BVu4ovitIcPHRSMAOeMyLXgQllLl0iaRPQ1N2c1ZqZvI5Rpp4yWMJg6%2B1PksFQ&X-Amz-Signature=bcaf3355960d614abd15c0e55c32493172695daa0686a32640016a76d4fd8e0c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

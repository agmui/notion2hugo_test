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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRBL4TC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC94asVNCnwYwpZhjYeyMqH%2FKMg0mwi8z5PTr56QjZ8RAIgdBWi5plCrG5oWZ%2BXZfU9vwtQGxLInnpy5gCAKrEYLFcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtPdPvAaGSKUG2rXyrcA6ibU9O%2B6l0b0Um4ZfX%2F7mCLPSTxFrIEArFrM0QVGwYVyfVs7mBt3PXOlZYLIPm6SItrAX3qpxLjHzKWz7QFRFrEriIAss9O%2FBnxETojHeXQJwYK96AOu3HIY8Sts6N7CSkBLCIAMgGV5slAKIbkmYs0HyykjIcDqYY8s9YBUbhWJGTjxrvwz1l%2BFJl4R6ko8qKrCRxICZKCmfpmJ1SGxbOyXaDvf%2FUsARNYq%2BaAEoobDnlqCr3kCt02n8sWTkmSIEP%2FcWV8IfO8ZyqnS5S%2F5PS38T7%2B0rhOi7qUxFAB86jVIs2pdLGCu56MAUwkurBl5n%2Ba6xN1dDmUDiR8i%2FtZ7kb9LRqBDhz%2F9cf0GMi%2BlqMKSvioTM6cES84vnBaRTGhgcREztua7s8jK2cgE1UDz1gsFSM5Ui%2B1zOl%2FBb7f82ISoSPRcqDpwHP6CgIxk2IJ2uZPHHOamSPTuDxsbAOW5iWrMzT%2BXCvydXnxo1j%2FI6RGc4PsAHbTj84QTvWk69vswueMPI%2FfklR5WCDMomfqHTf%2BiJbUEccdpFdNH8BtYAMAQxm7jB1HVz0wS13dDEIq59GlKS4fDYibIs9lCt2t%2BfrvSYg%2BYW5E9d1E%2BpFDUyMV1TO8xsH0UqFeKV4UMNPRnsQGOqUBC1K4aN4IG9nZAjy%2Bib58lVN0OxSJA4kLV8q7zMLvmbMBnj5A3OYdsU8sHhUf5FnTpVTANb92NRhu%2BMATDjfdD82xGwnHBj1pY9%2BHC%2BAwavRz9m4esrtFh4cvaa8mZ9V6MO6gvWIC3xBzi%2BmgwPOpgptq%2Fh%2B2C7TFC4VrrOj%2BDhfmA5zu6HjerpAeUrQBAsUip5NtXEGBpYHZnxOjAbDwvAIkDbn0&X-Amz-Signature=8ef24f50f4edb8c861535034a870a4cb75f87123b2bbb39eab06fd6efa7018d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRBL4TC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC94asVNCnwYwpZhjYeyMqH%2FKMg0mwi8z5PTr56QjZ8RAIgdBWi5plCrG5oWZ%2BXZfU9vwtQGxLInnpy5gCAKrEYLFcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtPdPvAaGSKUG2rXyrcA6ibU9O%2B6l0b0Um4ZfX%2F7mCLPSTxFrIEArFrM0QVGwYVyfVs7mBt3PXOlZYLIPm6SItrAX3qpxLjHzKWz7QFRFrEriIAss9O%2FBnxETojHeXQJwYK96AOu3HIY8Sts6N7CSkBLCIAMgGV5slAKIbkmYs0HyykjIcDqYY8s9YBUbhWJGTjxrvwz1l%2BFJl4R6ko8qKrCRxICZKCmfpmJ1SGxbOyXaDvf%2FUsARNYq%2BaAEoobDnlqCr3kCt02n8sWTkmSIEP%2FcWV8IfO8ZyqnS5S%2F5PS38T7%2B0rhOi7qUxFAB86jVIs2pdLGCu56MAUwkurBl5n%2Ba6xN1dDmUDiR8i%2FtZ7kb9LRqBDhz%2F9cf0GMi%2BlqMKSvioTM6cES84vnBaRTGhgcREztua7s8jK2cgE1UDz1gsFSM5Ui%2B1zOl%2FBb7f82ISoSPRcqDpwHP6CgIxk2IJ2uZPHHOamSPTuDxsbAOW5iWrMzT%2BXCvydXnxo1j%2FI6RGc4PsAHbTj84QTvWk69vswueMPI%2FfklR5WCDMomfqHTf%2BiJbUEccdpFdNH8BtYAMAQxm7jB1HVz0wS13dDEIq59GlKS4fDYibIs9lCt2t%2BfrvSYg%2BYW5E9d1E%2BpFDUyMV1TO8xsH0UqFeKV4UMNPRnsQGOqUBC1K4aN4IG9nZAjy%2Bib58lVN0OxSJA4kLV8q7zMLvmbMBnj5A3OYdsU8sHhUf5FnTpVTANb92NRhu%2BMATDjfdD82xGwnHBj1pY9%2BHC%2BAwavRz9m4esrtFh4cvaa8mZ9V6MO6gvWIC3xBzi%2BmgwPOpgptq%2Fh%2B2C7TFC4VrrOj%2BDhfmA5zu6HjerpAeUrQBAsUip5NtXEGBpYHZnxOjAbDwvAIkDbn0&X-Amz-Signature=dc9de5e79a74ba651fb901929d47239115dec9a7000f2fc752022fc4574faa54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRBL4TC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC94asVNCnwYwpZhjYeyMqH%2FKMg0mwi8z5PTr56QjZ8RAIgdBWi5plCrG5oWZ%2BXZfU9vwtQGxLInnpy5gCAKrEYLFcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtPdPvAaGSKUG2rXyrcA6ibU9O%2B6l0b0Um4ZfX%2F7mCLPSTxFrIEArFrM0QVGwYVyfVs7mBt3PXOlZYLIPm6SItrAX3qpxLjHzKWz7QFRFrEriIAss9O%2FBnxETojHeXQJwYK96AOu3HIY8Sts6N7CSkBLCIAMgGV5slAKIbkmYs0HyykjIcDqYY8s9YBUbhWJGTjxrvwz1l%2BFJl4R6ko8qKrCRxICZKCmfpmJ1SGxbOyXaDvf%2FUsARNYq%2BaAEoobDnlqCr3kCt02n8sWTkmSIEP%2FcWV8IfO8ZyqnS5S%2F5PS38T7%2B0rhOi7qUxFAB86jVIs2pdLGCu56MAUwkurBl5n%2Ba6xN1dDmUDiR8i%2FtZ7kb9LRqBDhz%2F9cf0GMi%2BlqMKSvioTM6cES84vnBaRTGhgcREztua7s8jK2cgE1UDz1gsFSM5Ui%2B1zOl%2FBb7f82ISoSPRcqDpwHP6CgIxk2IJ2uZPHHOamSPTuDxsbAOW5iWrMzT%2BXCvydXnxo1j%2FI6RGc4PsAHbTj84QTvWk69vswueMPI%2FfklR5WCDMomfqHTf%2BiJbUEccdpFdNH8BtYAMAQxm7jB1HVz0wS13dDEIq59GlKS4fDYibIs9lCt2t%2BfrvSYg%2BYW5E9d1E%2BpFDUyMV1TO8xsH0UqFeKV4UMNPRnsQGOqUBC1K4aN4IG9nZAjy%2Bib58lVN0OxSJA4kLV8q7zMLvmbMBnj5A3OYdsU8sHhUf5FnTpVTANb92NRhu%2BMATDjfdD82xGwnHBj1pY9%2BHC%2BAwavRz9m4esrtFh4cvaa8mZ9V6MO6gvWIC3xBzi%2BmgwPOpgptq%2Fh%2B2C7TFC4VrrOj%2BDhfmA5zu6HjerpAeUrQBAsUip5NtXEGBpYHZnxOjAbDwvAIkDbn0&X-Amz-Signature=d523ab669b96d1ebece540f98e293c57a37b16eb0904e0f3fabe2558af871306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRBL4TC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC94asVNCnwYwpZhjYeyMqH%2FKMg0mwi8z5PTr56QjZ8RAIgdBWi5plCrG5oWZ%2BXZfU9vwtQGxLInnpy5gCAKrEYLFcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtPdPvAaGSKUG2rXyrcA6ibU9O%2B6l0b0Um4ZfX%2F7mCLPSTxFrIEArFrM0QVGwYVyfVs7mBt3PXOlZYLIPm6SItrAX3qpxLjHzKWz7QFRFrEriIAss9O%2FBnxETojHeXQJwYK96AOu3HIY8Sts6N7CSkBLCIAMgGV5slAKIbkmYs0HyykjIcDqYY8s9YBUbhWJGTjxrvwz1l%2BFJl4R6ko8qKrCRxICZKCmfpmJ1SGxbOyXaDvf%2FUsARNYq%2BaAEoobDnlqCr3kCt02n8sWTkmSIEP%2FcWV8IfO8ZyqnS5S%2F5PS38T7%2B0rhOi7qUxFAB86jVIs2pdLGCu56MAUwkurBl5n%2Ba6xN1dDmUDiR8i%2FtZ7kb9LRqBDhz%2F9cf0GMi%2BlqMKSvioTM6cES84vnBaRTGhgcREztua7s8jK2cgE1UDz1gsFSM5Ui%2B1zOl%2FBb7f82ISoSPRcqDpwHP6CgIxk2IJ2uZPHHOamSPTuDxsbAOW5iWrMzT%2BXCvydXnxo1j%2FI6RGc4PsAHbTj84QTvWk69vswueMPI%2FfklR5WCDMomfqHTf%2BiJbUEccdpFdNH8BtYAMAQxm7jB1HVz0wS13dDEIq59GlKS4fDYibIs9lCt2t%2BfrvSYg%2BYW5E9d1E%2BpFDUyMV1TO8xsH0UqFeKV4UMNPRnsQGOqUBC1K4aN4IG9nZAjy%2Bib58lVN0OxSJA4kLV8q7zMLvmbMBnj5A3OYdsU8sHhUf5FnTpVTANb92NRhu%2BMATDjfdD82xGwnHBj1pY9%2BHC%2BAwavRz9m4esrtFh4cvaa8mZ9V6MO6gvWIC3xBzi%2BmgwPOpgptq%2Fh%2B2C7TFC4VrrOj%2BDhfmA5zu6HjerpAeUrQBAsUip5NtXEGBpYHZnxOjAbDwvAIkDbn0&X-Amz-Signature=78fab6f8db55012ca8cf194b368ba84745f9a5e06d0e63722aa2c932a97513a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRBL4TC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC94asVNCnwYwpZhjYeyMqH%2FKMg0mwi8z5PTr56QjZ8RAIgdBWi5plCrG5oWZ%2BXZfU9vwtQGxLInnpy5gCAKrEYLFcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtPdPvAaGSKUG2rXyrcA6ibU9O%2B6l0b0Um4ZfX%2F7mCLPSTxFrIEArFrM0QVGwYVyfVs7mBt3PXOlZYLIPm6SItrAX3qpxLjHzKWz7QFRFrEriIAss9O%2FBnxETojHeXQJwYK96AOu3HIY8Sts6N7CSkBLCIAMgGV5slAKIbkmYs0HyykjIcDqYY8s9YBUbhWJGTjxrvwz1l%2BFJl4R6ko8qKrCRxICZKCmfpmJ1SGxbOyXaDvf%2FUsARNYq%2BaAEoobDnlqCr3kCt02n8sWTkmSIEP%2FcWV8IfO8ZyqnS5S%2F5PS38T7%2B0rhOi7qUxFAB86jVIs2pdLGCu56MAUwkurBl5n%2Ba6xN1dDmUDiR8i%2FtZ7kb9LRqBDhz%2F9cf0GMi%2BlqMKSvioTM6cES84vnBaRTGhgcREztua7s8jK2cgE1UDz1gsFSM5Ui%2B1zOl%2FBb7f82ISoSPRcqDpwHP6CgIxk2IJ2uZPHHOamSPTuDxsbAOW5iWrMzT%2BXCvydXnxo1j%2FI6RGc4PsAHbTj84QTvWk69vswueMPI%2FfklR5WCDMomfqHTf%2BiJbUEccdpFdNH8BtYAMAQxm7jB1HVz0wS13dDEIq59GlKS4fDYibIs9lCt2t%2BfrvSYg%2BYW5E9d1E%2BpFDUyMV1TO8xsH0UqFeKV4UMNPRnsQGOqUBC1K4aN4IG9nZAjy%2Bib58lVN0OxSJA4kLV8q7zMLvmbMBnj5A3OYdsU8sHhUf5FnTpVTANb92NRhu%2BMATDjfdD82xGwnHBj1pY9%2BHC%2BAwavRz9m4esrtFh4cvaa8mZ9V6MO6gvWIC3xBzi%2BmgwPOpgptq%2Fh%2B2C7TFC4VrrOj%2BDhfmA5zu6HjerpAeUrQBAsUip5NtXEGBpYHZnxOjAbDwvAIkDbn0&X-Amz-Signature=c173036eec9de7afd025202276ab99d5b729e8bd577b6cc0bd117db4d54ef75b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

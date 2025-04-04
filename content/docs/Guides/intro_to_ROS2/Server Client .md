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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LS3SBOL%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7IUIPhEFLVW4f0b4jBn3phamdL1SIw9tmQxjbdgYQ3AiBOyC4IOW4fJSy%2BpzOIVWHqVF3d2TbsNJJBQFSv94e%2BfyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo45HZpD0IdobCBRrKtwDAycUqpl6ChiR6wXd9OjgoXggKuTDNSvsanqOrshHl%2FlOYU4EV0An6Wvb77tQNfBdXMCQEJGSnwiE3TOzgAnbJfKgZUi4NZb%2B%2BefnsBgCqRWSeBBjCCKrkZdg38gwq0qS%2F1%2FdmUqlaFr%2BVKsL%2BFb%2FeFurgaD8ZaBKiuqoIE4VQczQAbXoaudI5DEw%2BLgehnaMSATj1CAUZ4R8PKTQUxxO%2Ff%2F6FhIZuAuP8v%2FX4gGLcE9z47yP%2FPHqmWtyM%2BZDeD2%2BXHNGY71i6nre0asqr35h8CsJaNv8Z7F7l%2B26mW%2BZcmCak1QAQQm%2FRWIHLs3qUJRDtKX0RIN0qJvwk3dG2xK2za3G5ptV8SLZ2a4Sk%2FdWbzEajl5CE3jBlnQXjTIHrvTwe5FxcvD35IWlEnSQalYCKk9odk1VyT1Ui24aks6RqgecXDOyH8QhzYwp8wvEIOpL2Sbjbn4xwCK96UG6rv03AUhf0kdwiuaNlEAVRIms5RWpaIQPOioo34keNZjGA9sBRREJhe3KIUEIZ3uG0vGZNFu9PNKdvsngfiKcFozRFCdZeJp0DR0pL6%2B1dmX3jOONSuPWgyD77crz0vxWhYl8pcdb5ZQb7HJr0meAqlS3iNL8lCFKP4PQ0Zl5X7cw9IG9vwY6pgHY3q0lkzFE9x4XrgSeZZOxLnFLoHDXSZcUa5CNzdRDAvYoRKmtvxPXFnzf9E6O9EgFz2PeG2G%2BjMXYGsmlI9NKY26207JzUqPlVDNHLkuddyDjgGi2STNKhb5QkJUxV2u6zagYpzLCc2UcDBcaS3XqVNViy85F2kHKiGKcmiv7%2BHZwRr0RZPLOzxqpV9Pw4XsFCpqRS5uDSVic9Wy0pxo%2BJdtfnKr%2B&X-Amz-Signature=41d5f7ad56c060a1978c5bfd8626067cb2fda4f0908c347fec08757e14551453&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LS3SBOL%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7IUIPhEFLVW4f0b4jBn3phamdL1SIw9tmQxjbdgYQ3AiBOyC4IOW4fJSy%2BpzOIVWHqVF3d2TbsNJJBQFSv94e%2BfyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo45HZpD0IdobCBRrKtwDAycUqpl6ChiR6wXd9OjgoXggKuTDNSvsanqOrshHl%2FlOYU4EV0An6Wvb77tQNfBdXMCQEJGSnwiE3TOzgAnbJfKgZUi4NZb%2B%2BefnsBgCqRWSeBBjCCKrkZdg38gwq0qS%2F1%2FdmUqlaFr%2BVKsL%2BFb%2FeFurgaD8ZaBKiuqoIE4VQczQAbXoaudI5DEw%2BLgehnaMSATj1CAUZ4R8PKTQUxxO%2Ff%2F6FhIZuAuP8v%2FX4gGLcE9z47yP%2FPHqmWtyM%2BZDeD2%2BXHNGY71i6nre0asqr35h8CsJaNv8Z7F7l%2B26mW%2BZcmCak1QAQQm%2FRWIHLs3qUJRDtKX0RIN0qJvwk3dG2xK2za3G5ptV8SLZ2a4Sk%2FdWbzEajl5CE3jBlnQXjTIHrvTwe5FxcvD35IWlEnSQalYCKk9odk1VyT1Ui24aks6RqgecXDOyH8QhzYwp8wvEIOpL2Sbjbn4xwCK96UG6rv03AUhf0kdwiuaNlEAVRIms5RWpaIQPOioo34keNZjGA9sBRREJhe3KIUEIZ3uG0vGZNFu9PNKdvsngfiKcFozRFCdZeJp0DR0pL6%2B1dmX3jOONSuPWgyD77crz0vxWhYl8pcdb5ZQb7HJr0meAqlS3iNL8lCFKP4PQ0Zl5X7cw9IG9vwY6pgHY3q0lkzFE9x4XrgSeZZOxLnFLoHDXSZcUa5CNzdRDAvYoRKmtvxPXFnzf9E6O9EgFz2PeG2G%2BjMXYGsmlI9NKY26207JzUqPlVDNHLkuddyDjgGi2STNKhb5QkJUxV2u6zagYpzLCc2UcDBcaS3XqVNViy85F2kHKiGKcmiv7%2BHZwRr0RZPLOzxqpV9Pw4XsFCpqRS5uDSVic9Wy0pxo%2BJdtfnKr%2B&X-Amz-Signature=208fbaf773e19b7512a2a84844917279ed6c743f6da10af09acff8c8e72c52e8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LS3SBOL%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7IUIPhEFLVW4f0b4jBn3phamdL1SIw9tmQxjbdgYQ3AiBOyC4IOW4fJSy%2BpzOIVWHqVF3d2TbsNJJBQFSv94e%2BfyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo45HZpD0IdobCBRrKtwDAycUqpl6ChiR6wXd9OjgoXggKuTDNSvsanqOrshHl%2FlOYU4EV0An6Wvb77tQNfBdXMCQEJGSnwiE3TOzgAnbJfKgZUi4NZb%2B%2BefnsBgCqRWSeBBjCCKrkZdg38gwq0qS%2F1%2FdmUqlaFr%2BVKsL%2BFb%2FeFurgaD8ZaBKiuqoIE4VQczQAbXoaudI5DEw%2BLgehnaMSATj1CAUZ4R8PKTQUxxO%2Ff%2F6FhIZuAuP8v%2FX4gGLcE9z47yP%2FPHqmWtyM%2BZDeD2%2BXHNGY71i6nre0asqr35h8CsJaNv8Z7F7l%2B26mW%2BZcmCak1QAQQm%2FRWIHLs3qUJRDtKX0RIN0qJvwk3dG2xK2za3G5ptV8SLZ2a4Sk%2FdWbzEajl5CE3jBlnQXjTIHrvTwe5FxcvD35IWlEnSQalYCKk9odk1VyT1Ui24aks6RqgecXDOyH8QhzYwp8wvEIOpL2Sbjbn4xwCK96UG6rv03AUhf0kdwiuaNlEAVRIms5RWpaIQPOioo34keNZjGA9sBRREJhe3KIUEIZ3uG0vGZNFu9PNKdvsngfiKcFozRFCdZeJp0DR0pL6%2B1dmX3jOONSuPWgyD77crz0vxWhYl8pcdb5ZQb7HJr0meAqlS3iNL8lCFKP4PQ0Zl5X7cw9IG9vwY6pgHY3q0lkzFE9x4XrgSeZZOxLnFLoHDXSZcUa5CNzdRDAvYoRKmtvxPXFnzf9E6O9EgFz2PeG2G%2BjMXYGsmlI9NKY26207JzUqPlVDNHLkuddyDjgGi2STNKhb5QkJUxV2u6zagYpzLCc2UcDBcaS3XqVNViy85F2kHKiGKcmiv7%2BHZwRr0RZPLOzxqpV9Pw4XsFCpqRS5uDSVic9Wy0pxo%2BJdtfnKr%2B&X-Amz-Signature=a444083db4ee9805d6fa23ed4aedc99b3b4d850d0a8002b6a66666d0080aacc7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LS3SBOL%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7IUIPhEFLVW4f0b4jBn3phamdL1SIw9tmQxjbdgYQ3AiBOyC4IOW4fJSy%2BpzOIVWHqVF3d2TbsNJJBQFSv94e%2BfyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo45HZpD0IdobCBRrKtwDAycUqpl6ChiR6wXd9OjgoXggKuTDNSvsanqOrshHl%2FlOYU4EV0An6Wvb77tQNfBdXMCQEJGSnwiE3TOzgAnbJfKgZUi4NZb%2B%2BefnsBgCqRWSeBBjCCKrkZdg38gwq0qS%2F1%2FdmUqlaFr%2BVKsL%2BFb%2FeFurgaD8ZaBKiuqoIE4VQczQAbXoaudI5DEw%2BLgehnaMSATj1CAUZ4R8PKTQUxxO%2Ff%2F6FhIZuAuP8v%2FX4gGLcE9z47yP%2FPHqmWtyM%2BZDeD2%2BXHNGY71i6nre0asqr35h8CsJaNv8Z7F7l%2B26mW%2BZcmCak1QAQQm%2FRWIHLs3qUJRDtKX0RIN0qJvwk3dG2xK2za3G5ptV8SLZ2a4Sk%2FdWbzEajl5CE3jBlnQXjTIHrvTwe5FxcvD35IWlEnSQalYCKk9odk1VyT1Ui24aks6RqgecXDOyH8QhzYwp8wvEIOpL2Sbjbn4xwCK96UG6rv03AUhf0kdwiuaNlEAVRIms5RWpaIQPOioo34keNZjGA9sBRREJhe3KIUEIZ3uG0vGZNFu9PNKdvsngfiKcFozRFCdZeJp0DR0pL6%2B1dmX3jOONSuPWgyD77crz0vxWhYl8pcdb5ZQb7HJr0meAqlS3iNL8lCFKP4PQ0Zl5X7cw9IG9vwY6pgHY3q0lkzFE9x4XrgSeZZOxLnFLoHDXSZcUa5CNzdRDAvYoRKmtvxPXFnzf9E6O9EgFz2PeG2G%2BjMXYGsmlI9NKY26207JzUqPlVDNHLkuddyDjgGi2STNKhb5QkJUxV2u6zagYpzLCc2UcDBcaS3XqVNViy85F2kHKiGKcmiv7%2BHZwRr0RZPLOzxqpV9Pw4XsFCpqRS5uDSVic9Wy0pxo%2BJdtfnKr%2B&X-Amz-Signature=4c95fe88f4df2db31e21168398985c0a01a0bfcf7c433d4bc60ed1e690465cde&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LS3SBOL%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7IUIPhEFLVW4f0b4jBn3phamdL1SIw9tmQxjbdgYQ3AiBOyC4IOW4fJSy%2BpzOIVWHqVF3d2TbsNJJBQFSv94e%2BfyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo45HZpD0IdobCBRrKtwDAycUqpl6ChiR6wXd9OjgoXggKuTDNSvsanqOrshHl%2FlOYU4EV0An6Wvb77tQNfBdXMCQEJGSnwiE3TOzgAnbJfKgZUi4NZb%2B%2BefnsBgCqRWSeBBjCCKrkZdg38gwq0qS%2F1%2FdmUqlaFr%2BVKsL%2BFb%2FeFurgaD8ZaBKiuqoIE4VQczQAbXoaudI5DEw%2BLgehnaMSATj1CAUZ4R8PKTQUxxO%2Ff%2F6FhIZuAuP8v%2FX4gGLcE9z47yP%2FPHqmWtyM%2BZDeD2%2BXHNGY71i6nre0asqr35h8CsJaNv8Z7F7l%2B26mW%2BZcmCak1QAQQm%2FRWIHLs3qUJRDtKX0RIN0qJvwk3dG2xK2za3G5ptV8SLZ2a4Sk%2FdWbzEajl5CE3jBlnQXjTIHrvTwe5FxcvD35IWlEnSQalYCKk9odk1VyT1Ui24aks6RqgecXDOyH8QhzYwp8wvEIOpL2Sbjbn4xwCK96UG6rv03AUhf0kdwiuaNlEAVRIms5RWpaIQPOioo34keNZjGA9sBRREJhe3KIUEIZ3uG0vGZNFu9PNKdvsngfiKcFozRFCdZeJp0DR0pL6%2B1dmX3jOONSuPWgyD77crz0vxWhYl8pcdb5ZQb7HJr0meAqlS3iNL8lCFKP4PQ0Zl5X7cw9IG9vwY6pgHY3q0lkzFE9x4XrgSeZZOxLnFLoHDXSZcUa5CNzdRDAvYoRKmtvxPXFnzf9E6O9EgFz2PeG2G%2BjMXYGsmlI9NKY26207JzUqPlVDNHLkuddyDjgGi2STNKhb5QkJUxV2u6zagYpzLCc2UcDBcaS3XqVNViy85F2kHKiGKcmiv7%2BHZwRr0RZPLOzxqpV9Pw4XsFCpqRS5uDSVic9Wy0pxo%2BJdtfnKr%2B&X-Amz-Signature=14be145f3579aa5ee9f324c5c2122a5bc851dbd8470b0856062278a45ed98873&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

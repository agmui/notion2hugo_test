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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHIFWWKZ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDOyX25K830EHNimF8D4wQwsmBypzq3mksIy6QLaNEVVwIhAKcjeMfcIMzlu2Me8v6ixfJobCDRrcbcQn5Dt4Oct6epKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrIhc1jKXNQk7MRr4q3APFui21qhxFD6U7p5rwFypE%2FNDKAVQEuezAELXqyNwt%2BPZMFdnR4Wow1UU6I7FxlLxWSrndIEuAgPC5CT1jMUjemd278uK7M6wFRuU%2Fo518esi6CXsigROyJFW4UuTqeaoDLHkPwR97FNg7EhYylCVPvZO3sYpb8Y%2BmrH5T1Ppfm7Ax1ae0iwQvPsWrZINu9odxmiyRRIwEwUmxbG1je%2BRN49i4GQTYHr5uOYFFPOeKFhI0%2FIWf64a%2FsW8g87EpiCP%2FMmfDej9oeKo9Yhugw5EjzoU84FKqFi4PBEv0UW2vhm9j%2F6zoBogjMNaGtwdkIkIFSr%2BsB%2BVMxpJOsD7gR7%2Fr48zzeD8CnTeDculEoyrhik0s8DEWJoIFORlzQADNxpSPIxiNQYEwnrOsbypOSy14XEp69s4eGJtpGpuKkchQlqtkwwScEzV3gUjL0rE8Cr2BfxU%2FpFSMKkwhnqE3EatF56SH%2F1yTUmxU%2FnL1WN6A8961sN1vF31IQD3xxan8hohknhi4QL%2FEjG3iMTge21bJFlibeuFoUiNdN9D1U7%2BBVPJvDTP32E1TsUzd09SHTnrsy%2FDhOXT6FL6qURwILl5P%2F%2FqJb5T5mHAgMn%2BGdTSbgdTznHhg3Ss3b6l%2F6TCFs%2FfBBjqkAQS2Nifky2Ch1EVhWW%2Fgy3P1Qdvupky2OWfekPZTZ9sh1QYNEQBR1lks6K%2B%2FuAFLRJcvGJ8k91eEbUwn77opY0KqP4cN8QUJTjfoLuPYfNpiwbCRRN6gza9EG7o%2F79d3GAtih9KtAfX59WO5iTyDQ%2Bgp35ZLk0Y%2BvCl45lrZtDn%2F%2FBNjsJKtwMLnNGpPqKQ5Aqo6PN%2F75tctIQrgmWqkyV8m%2BjQN&X-Amz-Signature=e5713a15d2b8205dbe64f007c3aaf1f8c4ba7de12d5b3e108b4fa113a6b4471f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHIFWWKZ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDOyX25K830EHNimF8D4wQwsmBypzq3mksIy6QLaNEVVwIhAKcjeMfcIMzlu2Me8v6ixfJobCDRrcbcQn5Dt4Oct6epKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrIhc1jKXNQk7MRr4q3APFui21qhxFD6U7p5rwFypE%2FNDKAVQEuezAELXqyNwt%2BPZMFdnR4Wow1UU6I7FxlLxWSrndIEuAgPC5CT1jMUjemd278uK7M6wFRuU%2Fo518esi6CXsigROyJFW4UuTqeaoDLHkPwR97FNg7EhYylCVPvZO3sYpb8Y%2BmrH5T1Ppfm7Ax1ae0iwQvPsWrZINu9odxmiyRRIwEwUmxbG1je%2BRN49i4GQTYHr5uOYFFPOeKFhI0%2FIWf64a%2FsW8g87EpiCP%2FMmfDej9oeKo9Yhugw5EjzoU84FKqFi4PBEv0UW2vhm9j%2F6zoBogjMNaGtwdkIkIFSr%2BsB%2BVMxpJOsD7gR7%2Fr48zzeD8CnTeDculEoyrhik0s8DEWJoIFORlzQADNxpSPIxiNQYEwnrOsbypOSy14XEp69s4eGJtpGpuKkchQlqtkwwScEzV3gUjL0rE8Cr2BfxU%2FpFSMKkwhnqE3EatF56SH%2F1yTUmxU%2FnL1WN6A8961sN1vF31IQD3xxan8hohknhi4QL%2FEjG3iMTge21bJFlibeuFoUiNdN9D1U7%2BBVPJvDTP32E1TsUzd09SHTnrsy%2FDhOXT6FL6qURwILl5P%2F%2FqJb5T5mHAgMn%2BGdTSbgdTznHhg3Ss3b6l%2F6TCFs%2FfBBjqkAQS2Nifky2Ch1EVhWW%2Fgy3P1Qdvupky2OWfekPZTZ9sh1QYNEQBR1lks6K%2B%2FuAFLRJcvGJ8k91eEbUwn77opY0KqP4cN8QUJTjfoLuPYfNpiwbCRRN6gza9EG7o%2F79d3GAtih9KtAfX59WO5iTyDQ%2Bgp35ZLk0Y%2BvCl45lrZtDn%2F%2FBNjsJKtwMLnNGpPqKQ5Aqo6PN%2F75tctIQrgmWqkyV8m%2BjQN&X-Amz-Signature=20edd70e3efc4859a4cfb99aa7ee0b0fbc30d0369794d52be570fdcce4bc5f98&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHIFWWKZ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDOyX25K830EHNimF8D4wQwsmBypzq3mksIy6QLaNEVVwIhAKcjeMfcIMzlu2Me8v6ixfJobCDRrcbcQn5Dt4Oct6epKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrIhc1jKXNQk7MRr4q3APFui21qhxFD6U7p5rwFypE%2FNDKAVQEuezAELXqyNwt%2BPZMFdnR4Wow1UU6I7FxlLxWSrndIEuAgPC5CT1jMUjemd278uK7M6wFRuU%2Fo518esi6CXsigROyJFW4UuTqeaoDLHkPwR97FNg7EhYylCVPvZO3sYpb8Y%2BmrH5T1Ppfm7Ax1ae0iwQvPsWrZINu9odxmiyRRIwEwUmxbG1je%2BRN49i4GQTYHr5uOYFFPOeKFhI0%2FIWf64a%2FsW8g87EpiCP%2FMmfDej9oeKo9Yhugw5EjzoU84FKqFi4PBEv0UW2vhm9j%2F6zoBogjMNaGtwdkIkIFSr%2BsB%2BVMxpJOsD7gR7%2Fr48zzeD8CnTeDculEoyrhik0s8DEWJoIFORlzQADNxpSPIxiNQYEwnrOsbypOSy14XEp69s4eGJtpGpuKkchQlqtkwwScEzV3gUjL0rE8Cr2BfxU%2FpFSMKkwhnqE3EatF56SH%2F1yTUmxU%2FnL1WN6A8961sN1vF31IQD3xxan8hohknhi4QL%2FEjG3iMTge21bJFlibeuFoUiNdN9D1U7%2BBVPJvDTP32E1TsUzd09SHTnrsy%2FDhOXT6FL6qURwILl5P%2F%2FqJb5T5mHAgMn%2BGdTSbgdTznHhg3Ss3b6l%2F6TCFs%2FfBBjqkAQS2Nifky2Ch1EVhWW%2Fgy3P1Qdvupky2OWfekPZTZ9sh1QYNEQBR1lks6K%2B%2FuAFLRJcvGJ8k91eEbUwn77opY0KqP4cN8QUJTjfoLuPYfNpiwbCRRN6gza9EG7o%2F79d3GAtih9KtAfX59WO5iTyDQ%2Bgp35ZLk0Y%2BvCl45lrZtDn%2F%2FBNjsJKtwMLnNGpPqKQ5Aqo6PN%2F75tctIQrgmWqkyV8m%2BjQN&X-Amz-Signature=9b4531763696b7d02558e1050dbcdf0c963f19a46a3a2dc32dcb6e1c82f7b4b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHIFWWKZ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDOyX25K830EHNimF8D4wQwsmBypzq3mksIy6QLaNEVVwIhAKcjeMfcIMzlu2Me8v6ixfJobCDRrcbcQn5Dt4Oct6epKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrIhc1jKXNQk7MRr4q3APFui21qhxFD6U7p5rwFypE%2FNDKAVQEuezAELXqyNwt%2BPZMFdnR4Wow1UU6I7FxlLxWSrndIEuAgPC5CT1jMUjemd278uK7M6wFRuU%2Fo518esi6CXsigROyJFW4UuTqeaoDLHkPwR97FNg7EhYylCVPvZO3sYpb8Y%2BmrH5T1Ppfm7Ax1ae0iwQvPsWrZINu9odxmiyRRIwEwUmxbG1je%2BRN49i4GQTYHr5uOYFFPOeKFhI0%2FIWf64a%2FsW8g87EpiCP%2FMmfDej9oeKo9Yhugw5EjzoU84FKqFi4PBEv0UW2vhm9j%2F6zoBogjMNaGtwdkIkIFSr%2BsB%2BVMxpJOsD7gR7%2Fr48zzeD8CnTeDculEoyrhik0s8DEWJoIFORlzQADNxpSPIxiNQYEwnrOsbypOSy14XEp69s4eGJtpGpuKkchQlqtkwwScEzV3gUjL0rE8Cr2BfxU%2FpFSMKkwhnqE3EatF56SH%2F1yTUmxU%2FnL1WN6A8961sN1vF31IQD3xxan8hohknhi4QL%2FEjG3iMTge21bJFlibeuFoUiNdN9D1U7%2BBVPJvDTP32E1TsUzd09SHTnrsy%2FDhOXT6FL6qURwILl5P%2F%2FqJb5T5mHAgMn%2BGdTSbgdTznHhg3Ss3b6l%2F6TCFs%2FfBBjqkAQS2Nifky2Ch1EVhWW%2Fgy3P1Qdvupky2OWfekPZTZ9sh1QYNEQBR1lks6K%2B%2FuAFLRJcvGJ8k91eEbUwn77opY0KqP4cN8QUJTjfoLuPYfNpiwbCRRN6gza9EG7o%2F79d3GAtih9KtAfX59WO5iTyDQ%2Bgp35ZLk0Y%2BvCl45lrZtDn%2F%2FBNjsJKtwMLnNGpPqKQ5Aqo6PN%2F75tctIQrgmWqkyV8m%2BjQN&X-Amz-Signature=f69a4f9efe44af89f3d5c0bfed3e939db8914d9c6c36d6a9beee5691e89fba40&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHIFWWKZ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDOyX25K830EHNimF8D4wQwsmBypzq3mksIy6QLaNEVVwIhAKcjeMfcIMzlu2Me8v6ixfJobCDRrcbcQn5Dt4Oct6epKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrIhc1jKXNQk7MRr4q3APFui21qhxFD6U7p5rwFypE%2FNDKAVQEuezAELXqyNwt%2BPZMFdnR4Wow1UU6I7FxlLxWSrndIEuAgPC5CT1jMUjemd278uK7M6wFRuU%2Fo518esi6CXsigROyJFW4UuTqeaoDLHkPwR97FNg7EhYylCVPvZO3sYpb8Y%2BmrH5T1Ppfm7Ax1ae0iwQvPsWrZINu9odxmiyRRIwEwUmxbG1je%2BRN49i4GQTYHr5uOYFFPOeKFhI0%2FIWf64a%2FsW8g87EpiCP%2FMmfDej9oeKo9Yhugw5EjzoU84FKqFi4PBEv0UW2vhm9j%2F6zoBogjMNaGtwdkIkIFSr%2BsB%2BVMxpJOsD7gR7%2Fr48zzeD8CnTeDculEoyrhik0s8DEWJoIFORlzQADNxpSPIxiNQYEwnrOsbypOSy14XEp69s4eGJtpGpuKkchQlqtkwwScEzV3gUjL0rE8Cr2BfxU%2FpFSMKkwhnqE3EatF56SH%2F1yTUmxU%2FnL1WN6A8961sN1vF31IQD3xxan8hohknhi4QL%2FEjG3iMTge21bJFlibeuFoUiNdN9D1U7%2BBVPJvDTP32E1TsUzd09SHTnrsy%2FDhOXT6FL6qURwILl5P%2F%2FqJb5T5mHAgMn%2BGdTSbgdTznHhg3Ss3b6l%2F6TCFs%2FfBBjqkAQS2Nifky2Ch1EVhWW%2Fgy3P1Qdvupky2OWfekPZTZ9sh1QYNEQBR1lks6K%2B%2FuAFLRJcvGJ8k91eEbUwn77opY0KqP4cN8QUJTjfoLuPYfNpiwbCRRN6gza9EG7o%2F79d3GAtih9KtAfX59WO5iTyDQ%2Bgp35ZLk0Y%2BvCl45lrZtDn%2F%2FBNjsJKtwMLnNGpPqKQ5Aqo6PN%2F75tctIQrgmWqkyV8m%2BjQN&X-Amz-Signature=21f727af9e2fa05347a5afea0da275e00f1e9e19be8033a07ad829bf6bd9b8bb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

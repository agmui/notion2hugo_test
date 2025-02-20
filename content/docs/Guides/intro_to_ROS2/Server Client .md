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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SIRVMLI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaeyHq4x7tJS%2FJfhyj%2FylAS5ee09nqEx0z10MqNjQBwAIgdH%2FBTMr7nJ97UARiiTeefuvpJqAC3XwewhFgPNa3mm0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHt8MIDqWfkSgA3xSyrcA0a8fIqz2PKSw6HMfUuWaSxripCHaYV7rEJvHGgr%2Fwci%2BM%2FyChhMz6Sz2CmEVJuVamHXRLbMSppDzT7ZhUvBqcsLAtketrJmab2t912YExepT2MjniTXqYoy4KMBB9Q5vJOVyg%2BKDe123O9fmKseIOfFaYsmBskhXnkdGaMVWjZBMkjJk2YDIeUv7KcYFyM3pm%2BbhzTfq9jF%2B5Y4yleH59SlluBQ%2BJj5ykfS%2BuuVnu2tDgaKbS%2FtHk0H2Vyh2wT3aFK3ECQdBJSWryv96VBn5GeHloi6mmnWkbPIXAr%2BnEpb73BlAHoeAYPXbtZbooNJf4Im4ur1pr3rUSgnVMU3Y2%2F8dzfskfeKYpIMohijOOvc%2FA7JXk8P4XOaiMTCF%2FzZHW14pSlJ%2BsvMdGOIwUYqcnAlUp0v8r543AJWZW%2FcGgMfwTVePGsSnuVi%2BHUJdXtQz6qev1S2M8x6M7v0rjfZAmvkNWJlXwEDgtD9XYCSWmEcl74wluU2xviwSCO2f8ASoP661j1dJ4ZybAegVvQB2wb6aJctiN3SjkB5sUu1gIm9EisDOUmlxGr2YppqAJTj2eKWR0QiDg%2FCkp7Q1x%2FThWIubhRtdDNO7s540Vwox4itIX0G4y6YLxzY%2FgEwMNrx3b0GOqUBdCm%2B9lTbf6duyg39j9CaHxfMJrqraPvLm1%2FiBbBD5K%2B1KdsNo6oVJozOr75PHMKPRoMDKY%2B8CtpZ4WyAdJxhmJc0C1vJHNFNVZIUq0AqiG5YmfKRVMZSLpJNSow72Nur7pIZcUVSceCjCiwOw%2BKwgf2X%2B6rgh%2FFGgAFEJTqIOiubCmzMp90gZAy4Imvk%2BEKZ2EqzwQ0Ph8bLSqwSfFYdig8ayOB9&X-Amz-Signature=4f32e2f81dbe66921bdc156b152d9da7f33a4caa82fcd8330259da00e458bbd4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SIRVMLI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaeyHq4x7tJS%2FJfhyj%2FylAS5ee09nqEx0z10MqNjQBwAIgdH%2FBTMr7nJ97UARiiTeefuvpJqAC3XwewhFgPNa3mm0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHt8MIDqWfkSgA3xSyrcA0a8fIqz2PKSw6HMfUuWaSxripCHaYV7rEJvHGgr%2Fwci%2BM%2FyChhMz6Sz2CmEVJuVamHXRLbMSppDzT7ZhUvBqcsLAtketrJmab2t912YExepT2MjniTXqYoy4KMBB9Q5vJOVyg%2BKDe123O9fmKseIOfFaYsmBskhXnkdGaMVWjZBMkjJk2YDIeUv7KcYFyM3pm%2BbhzTfq9jF%2B5Y4yleH59SlluBQ%2BJj5ykfS%2BuuVnu2tDgaKbS%2FtHk0H2Vyh2wT3aFK3ECQdBJSWryv96VBn5GeHloi6mmnWkbPIXAr%2BnEpb73BlAHoeAYPXbtZbooNJf4Im4ur1pr3rUSgnVMU3Y2%2F8dzfskfeKYpIMohijOOvc%2FA7JXk8P4XOaiMTCF%2FzZHW14pSlJ%2BsvMdGOIwUYqcnAlUp0v8r543AJWZW%2FcGgMfwTVePGsSnuVi%2BHUJdXtQz6qev1S2M8x6M7v0rjfZAmvkNWJlXwEDgtD9XYCSWmEcl74wluU2xviwSCO2f8ASoP661j1dJ4ZybAegVvQB2wb6aJctiN3SjkB5sUu1gIm9EisDOUmlxGr2YppqAJTj2eKWR0QiDg%2FCkp7Q1x%2FThWIubhRtdDNO7s540Vwox4itIX0G4y6YLxzY%2FgEwMNrx3b0GOqUBdCm%2B9lTbf6duyg39j9CaHxfMJrqraPvLm1%2FiBbBD5K%2B1KdsNo6oVJozOr75PHMKPRoMDKY%2B8CtpZ4WyAdJxhmJc0C1vJHNFNVZIUq0AqiG5YmfKRVMZSLpJNSow72Nur7pIZcUVSceCjCiwOw%2BKwgf2X%2B6rgh%2FFGgAFEJTqIOiubCmzMp90gZAy4Imvk%2BEKZ2EqzwQ0Ph8bLSqwSfFYdig8ayOB9&X-Amz-Signature=c52e684463a35d812b153418b9e8f9aa3efb53f2804b63d547c3e75b8d27f1ac&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SIRVMLI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaeyHq4x7tJS%2FJfhyj%2FylAS5ee09nqEx0z10MqNjQBwAIgdH%2FBTMr7nJ97UARiiTeefuvpJqAC3XwewhFgPNa3mm0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHt8MIDqWfkSgA3xSyrcA0a8fIqz2PKSw6HMfUuWaSxripCHaYV7rEJvHGgr%2Fwci%2BM%2FyChhMz6Sz2CmEVJuVamHXRLbMSppDzT7ZhUvBqcsLAtketrJmab2t912YExepT2MjniTXqYoy4KMBB9Q5vJOVyg%2BKDe123O9fmKseIOfFaYsmBskhXnkdGaMVWjZBMkjJk2YDIeUv7KcYFyM3pm%2BbhzTfq9jF%2B5Y4yleH59SlluBQ%2BJj5ykfS%2BuuVnu2tDgaKbS%2FtHk0H2Vyh2wT3aFK3ECQdBJSWryv96VBn5GeHloi6mmnWkbPIXAr%2BnEpb73BlAHoeAYPXbtZbooNJf4Im4ur1pr3rUSgnVMU3Y2%2F8dzfskfeKYpIMohijOOvc%2FA7JXk8P4XOaiMTCF%2FzZHW14pSlJ%2BsvMdGOIwUYqcnAlUp0v8r543AJWZW%2FcGgMfwTVePGsSnuVi%2BHUJdXtQz6qev1S2M8x6M7v0rjfZAmvkNWJlXwEDgtD9XYCSWmEcl74wluU2xviwSCO2f8ASoP661j1dJ4ZybAegVvQB2wb6aJctiN3SjkB5sUu1gIm9EisDOUmlxGr2YppqAJTj2eKWR0QiDg%2FCkp7Q1x%2FThWIubhRtdDNO7s540Vwox4itIX0G4y6YLxzY%2FgEwMNrx3b0GOqUBdCm%2B9lTbf6duyg39j9CaHxfMJrqraPvLm1%2FiBbBD5K%2B1KdsNo6oVJozOr75PHMKPRoMDKY%2B8CtpZ4WyAdJxhmJc0C1vJHNFNVZIUq0AqiG5YmfKRVMZSLpJNSow72Nur7pIZcUVSceCjCiwOw%2BKwgf2X%2B6rgh%2FFGgAFEJTqIOiubCmzMp90gZAy4Imvk%2BEKZ2EqzwQ0Ph8bLSqwSfFYdig8ayOB9&X-Amz-Signature=8828387bfd31136e871e5ab1f6da3eeb4b48cdc148e4dd061c2205b516b3d4ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SIRVMLI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaeyHq4x7tJS%2FJfhyj%2FylAS5ee09nqEx0z10MqNjQBwAIgdH%2FBTMr7nJ97UARiiTeefuvpJqAC3XwewhFgPNa3mm0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHt8MIDqWfkSgA3xSyrcA0a8fIqz2PKSw6HMfUuWaSxripCHaYV7rEJvHGgr%2Fwci%2BM%2FyChhMz6Sz2CmEVJuVamHXRLbMSppDzT7ZhUvBqcsLAtketrJmab2t912YExepT2MjniTXqYoy4KMBB9Q5vJOVyg%2BKDe123O9fmKseIOfFaYsmBskhXnkdGaMVWjZBMkjJk2YDIeUv7KcYFyM3pm%2BbhzTfq9jF%2B5Y4yleH59SlluBQ%2BJj5ykfS%2BuuVnu2tDgaKbS%2FtHk0H2Vyh2wT3aFK3ECQdBJSWryv96VBn5GeHloi6mmnWkbPIXAr%2BnEpb73BlAHoeAYPXbtZbooNJf4Im4ur1pr3rUSgnVMU3Y2%2F8dzfskfeKYpIMohijOOvc%2FA7JXk8P4XOaiMTCF%2FzZHW14pSlJ%2BsvMdGOIwUYqcnAlUp0v8r543AJWZW%2FcGgMfwTVePGsSnuVi%2BHUJdXtQz6qev1S2M8x6M7v0rjfZAmvkNWJlXwEDgtD9XYCSWmEcl74wluU2xviwSCO2f8ASoP661j1dJ4ZybAegVvQB2wb6aJctiN3SjkB5sUu1gIm9EisDOUmlxGr2YppqAJTj2eKWR0QiDg%2FCkp7Q1x%2FThWIubhRtdDNO7s540Vwox4itIX0G4y6YLxzY%2FgEwMNrx3b0GOqUBdCm%2B9lTbf6duyg39j9CaHxfMJrqraPvLm1%2FiBbBD5K%2B1KdsNo6oVJozOr75PHMKPRoMDKY%2B8CtpZ4WyAdJxhmJc0C1vJHNFNVZIUq0AqiG5YmfKRVMZSLpJNSow72Nur7pIZcUVSceCjCiwOw%2BKwgf2X%2B6rgh%2FFGgAFEJTqIOiubCmzMp90gZAy4Imvk%2BEKZ2EqzwQ0Ph8bLSqwSfFYdig8ayOB9&X-Amz-Signature=c59963d8110d9f02f3611bea01d5d5bf5e20a7ced7c73d8f48ee2cbe7028a791&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SIRVMLI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaeyHq4x7tJS%2FJfhyj%2FylAS5ee09nqEx0z10MqNjQBwAIgdH%2FBTMr7nJ97UARiiTeefuvpJqAC3XwewhFgPNa3mm0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHt8MIDqWfkSgA3xSyrcA0a8fIqz2PKSw6HMfUuWaSxripCHaYV7rEJvHGgr%2Fwci%2BM%2FyChhMz6Sz2CmEVJuVamHXRLbMSppDzT7ZhUvBqcsLAtketrJmab2t912YExepT2MjniTXqYoy4KMBB9Q5vJOVyg%2BKDe123O9fmKseIOfFaYsmBskhXnkdGaMVWjZBMkjJk2YDIeUv7KcYFyM3pm%2BbhzTfq9jF%2B5Y4yleH59SlluBQ%2BJj5ykfS%2BuuVnu2tDgaKbS%2FtHk0H2Vyh2wT3aFK3ECQdBJSWryv96VBn5GeHloi6mmnWkbPIXAr%2BnEpb73BlAHoeAYPXbtZbooNJf4Im4ur1pr3rUSgnVMU3Y2%2F8dzfskfeKYpIMohijOOvc%2FA7JXk8P4XOaiMTCF%2FzZHW14pSlJ%2BsvMdGOIwUYqcnAlUp0v8r543AJWZW%2FcGgMfwTVePGsSnuVi%2BHUJdXtQz6qev1S2M8x6M7v0rjfZAmvkNWJlXwEDgtD9XYCSWmEcl74wluU2xviwSCO2f8ASoP661j1dJ4ZybAegVvQB2wb6aJctiN3SjkB5sUu1gIm9EisDOUmlxGr2YppqAJTj2eKWR0QiDg%2FCkp7Q1x%2FThWIubhRtdDNO7s540Vwox4itIX0G4y6YLxzY%2FgEwMNrx3b0GOqUBdCm%2B9lTbf6duyg39j9CaHxfMJrqraPvLm1%2FiBbBD5K%2B1KdsNo6oVJozOr75PHMKPRoMDKY%2B8CtpZ4WyAdJxhmJc0C1vJHNFNVZIUq0AqiG5YmfKRVMZSLpJNSow72Nur7pIZcUVSceCjCiwOw%2BKwgf2X%2B6rgh%2FFGgAFEJTqIOiubCmzMp90gZAy4Imvk%2BEKZ2EqzwQ0Ph8bLSqwSfFYdig8ayOB9&X-Amz-Signature=848fc9fb27b899a493d3aea08f41d3c9da274c9d589b93197e69a6c8688faefa&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

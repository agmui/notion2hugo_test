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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L5DXA7W%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFrqyJHu%2FTm03HFIjpTJFqOnupL6jqjyp9P%2BC4w%2BEzESAiEAkudCm%2BpbW9E1gA6tdoLPrGhKL2j81wJhiR3FjzgOiAgq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDAbuvrn6g0mojzVkayrcA5Rpvn7hZCRFOkOS1EmrK2Itd0p%2BOuFbCnV2qg5aUp5GHkOTMplxxxc04HbAudY4TT2C8iKnu%2FznXPT3FlEbywveKj9Aph9I3lz586pyXJGj4szkJai7M4FeP0S8unzQS73VleoXF7gSRDXMWkgUIDhwSa87C99bxIakUEOzx11ZAkgI9r2YZ2SohzDdmpGckGo7CfWSg2u7bL60aDUvuowA%2BnEHWChVu9nPtbaIrzKCuxwyLebPAvPO1aiI%2FaBjnwj%2Bo7zv%2B7dkxW%2FrUkAohKtp7z5qFCLINIk6yG%2Fq0ffdF9Jveuxu6yv6AVFUbzV80YWES%2FAdlsmDFbe2QZ0aGQPIH87rtZnosXzdbR66wlHl%2Bklix6oKLo03%2FYE44UgQRbYx4NlcAYlm29qMeSv51rE5aKDKBpQxq0KNA75mp8GyOO2DentkVIYawbXbsqunbwjA3qkARF9hfX1XUOWNNXfL9adbhh2rWVXFX5Rboq8t8Pqy1h4Jkqo1%2FbZYvujRwxal3oKncHP00q%2BPd5hArFS2DiFaG5cXZF2aMT%2BU8X7NC%2FgBlrxmpKfHNIvDMi42Ih5156HwRnBOl0QjzGQPeyDXshsUHneegnQLALDnbie0V0W0oIfp39TdsV8jMPPhmcMGOqUByLaWpxhYUFAP%2BlC5aU%2Bxg4s8mF4MLm0KkDlt00DAenHJIHaEG3B37oO1JX3Ag56qJd%2F0tFicBJiqaDlIQEP2czYlFEkyb2pkUrFay6Ihh%2FWigNtW8pAp%2Fo0esG5FVbkamD2g7cqg8cgdwgGce5WxypN94j9eenLYTI0a3e%2BXJ0A%2Fk1edrMlb8gi5GUyqmBq%2BJIVqAzIPks%2FwI0z7mnu%2BUv7GMD6j&X-Amz-Signature=48e9fe1b4dddcb58b620520a5076a5ac6e8e3583a78375a2a7294a5b4ca866cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L5DXA7W%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFrqyJHu%2FTm03HFIjpTJFqOnupL6jqjyp9P%2BC4w%2BEzESAiEAkudCm%2BpbW9E1gA6tdoLPrGhKL2j81wJhiR3FjzgOiAgq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDAbuvrn6g0mojzVkayrcA5Rpvn7hZCRFOkOS1EmrK2Itd0p%2BOuFbCnV2qg5aUp5GHkOTMplxxxc04HbAudY4TT2C8iKnu%2FznXPT3FlEbywveKj9Aph9I3lz586pyXJGj4szkJai7M4FeP0S8unzQS73VleoXF7gSRDXMWkgUIDhwSa87C99bxIakUEOzx11ZAkgI9r2YZ2SohzDdmpGckGo7CfWSg2u7bL60aDUvuowA%2BnEHWChVu9nPtbaIrzKCuxwyLebPAvPO1aiI%2FaBjnwj%2Bo7zv%2B7dkxW%2FrUkAohKtp7z5qFCLINIk6yG%2Fq0ffdF9Jveuxu6yv6AVFUbzV80YWES%2FAdlsmDFbe2QZ0aGQPIH87rtZnosXzdbR66wlHl%2Bklix6oKLo03%2FYE44UgQRbYx4NlcAYlm29qMeSv51rE5aKDKBpQxq0KNA75mp8GyOO2DentkVIYawbXbsqunbwjA3qkARF9hfX1XUOWNNXfL9adbhh2rWVXFX5Rboq8t8Pqy1h4Jkqo1%2FbZYvujRwxal3oKncHP00q%2BPd5hArFS2DiFaG5cXZF2aMT%2BU8X7NC%2FgBlrxmpKfHNIvDMi42Ih5156HwRnBOl0QjzGQPeyDXshsUHneegnQLALDnbie0V0W0oIfp39TdsV8jMPPhmcMGOqUByLaWpxhYUFAP%2BlC5aU%2Bxg4s8mF4MLm0KkDlt00DAenHJIHaEG3B37oO1JX3Ag56qJd%2F0tFicBJiqaDlIQEP2czYlFEkyb2pkUrFay6Ihh%2FWigNtW8pAp%2Fo0esG5FVbkamD2g7cqg8cgdwgGce5WxypN94j9eenLYTI0a3e%2BXJ0A%2Fk1edrMlb8gi5GUyqmBq%2BJIVqAzIPks%2FwI0z7mnu%2BUv7GMD6j&X-Amz-Signature=27a39121b96763de1f954f148b9661aaf9d79c26df02331d91f2b76147b9e7f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L5DXA7W%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFrqyJHu%2FTm03HFIjpTJFqOnupL6jqjyp9P%2BC4w%2BEzESAiEAkudCm%2BpbW9E1gA6tdoLPrGhKL2j81wJhiR3FjzgOiAgq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDAbuvrn6g0mojzVkayrcA5Rpvn7hZCRFOkOS1EmrK2Itd0p%2BOuFbCnV2qg5aUp5GHkOTMplxxxc04HbAudY4TT2C8iKnu%2FznXPT3FlEbywveKj9Aph9I3lz586pyXJGj4szkJai7M4FeP0S8unzQS73VleoXF7gSRDXMWkgUIDhwSa87C99bxIakUEOzx11ZAkgI9r2YZ2SohzDdmpGckGo7CfWSg2u7bL60aDUvuowA%2BnEHWChVu9nPtbaIrzKCuxwyLebPAvPO1aiI%2FaBjnwj%2Bo7zv%2B7dkxW%2FrUkAohKtp7z5qFCLINIk6yG%2Fq0ffdF9Jveuxu6yv6AVFUbzV80YWES%2FAdlsmDFbe2QZ0aGQPIH87rtZnosXzdbR66wlHl%2Bklix6oKLo03%2FYE44UgQRbYx4NlcAYlm29qMeSv51rE5aKDKBpQxq0KNA75mp8GyOO2DentkVIYawbXbsqunbwjA3qkARF9hfX1XUOWNNXfL9adbhh2rWVXFX5Rboq8t8Pqy1h4Jkqo1%2FbZYvujRwxal3oKncHP00q%2BPd5hArFS2DiFaG5cXZF2aMT%2BU8X7NC%2FgBlrxmpKfHNIvDMi42Ih5156HwRnBOl0QjzGQPeyDXshsUHneegnQLALDnbie0V0W0oIfp39TdsV8jMPPhmcMGOqUByLaWpxhYUFAP%2BlC5aU%2Bxg4s8mF4MLm0KkDlt00DAenHJIHaEG3B37oO1JX3Ag56qJd%2F0tFicBJiqaDlIQEP2czYlFEkyb2pkUrFay6Ihh%2FWigNtW8pAp%2Fo0esG5FVbkamD2g7cqg8cgdwgGce5WxypN94j9eenLYTI0a3e%2BXJ0A%2Fk1edrMlb8gi5GUyqmBq%2BJIVqAzIPks%2FwI0z7mnu%2BUv7GMD6j&X-Amz-Signature=e8093cd44ac701f11855a70a94e1d5187012c2874869540b3de5879806f65e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L5DXA7W%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFrqyJHu%2FTm03HFIjpTJFqOnupL6jqjyp9P%2BC4w%2BEzESAiEAkudCm%2BpbW9E1gA6tdoLPrGhKL2j81wJhiR3FjzgOiAgq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDAbuvrn6g0mojzVkayrcA5Rpvn7hZCRFOkOS1EmrK2Itd0p%2BOuFbCnV2qg5aUp5GHkOTMplxxxc04HbAudY4TT2C8iKnu%2FznXPT3FlEbywveKj9Aph9I3lz586pyXJGj4szkJai7M4FeP0S8unzQS73VleoXF7gSRDXMWkgUIDhwSa87C99bxIakUEOzx11ZAkgI9r2YZ2SohzDdmpGckGo7CfWSg2u7bL60aDUvuowA%2BnEHWChVu9nPtbaIrzKCuxwyLebPAvPO1aiI%2FaBjnwj%2Bo7zv%2B7dkxW%2FrUkAohKtp7z5qFCLINIk6yG%2Fq0ffdF9Jveuxu6yv6AVFUbzV80YWES%2FAdlsmDFbe2QZ0aGQPIH87rtZnosXzdbR66wlHl%2Bklix6oKLo03%2FYE44UgQRbYx4NlcAYlm29qMeSv51rE5aKDKBpQxq0KNA75mp8GyOO2DentkVIYawbXbsqunbwjA3qkARF9hfX1XUOWNNXfL9adbhh2rWVXFX5Rboq8t8Pqy1h4Jkqo1%2FbZYvujRwxal3oKncHP00q%2BPd5hArFS2DiFaG5cXZF2aMT%2BU8X7NC%2FgBlrxmpKfHNIvDMi42Ih5156HwRnBOl0QjzGQPeyDXshsUHneegnQLALDnbie0V0W0oIfp39TdsV8jMPPhmcMGOqUByLaWpxhYUFAP%2BlC5aU%2Bxg4s8mF4MLm0KkDlt00DAenHJIHaEG3B37oO1JX3Ag56qJd%2F0tFicBJiqaDlIQEP2czYlFEkyb2pkUrFay6Ihh%2FWigNtW8pAp%2Fo0esG5FVbkamD2g7cqg8cgdwgGce5WxypN94j9eenLYTI0a3e%2BXJ0A%2Fk1edrMlb8gi5GUyqmBq%2BJIVqAzIPks%2FwI0z7mnu%2BUv7GMD6j&X-Amz-Signature=bdfd44c38ae391ad34154ec0cf52bbe6fa302b087f6d1c5c7cdffc9e23c8763a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L5DXA7W%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFrqyJHu%2FTm03HFIjpTJFqOnupL6jqjyp9P%2BC4w%2BEzESAiEAkudCm%2BpbW9E1gA6tdoLPrGhKL2j81wJhiR3FjzgOiAgq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDAbuvrn6g0mojzVkayrcA5Rpvn7hZCRFOkOS1EmrK2Itd0p%2BOuFbCnV2qg5aUp5GHkOTMplxxxc04HbAudY4TT2C8iKnu%2FznXPT3FlEbywveKj9Aph9I3lz586pyXJGj4szkJai7M4FeP0S8unzQS73VleoXF7gSRDXMWkgUIDhwSa87C99bxIakUEOzx11ZAkgI9r2YZ2SohzDdmpGckGo7CfWSg2u7bL60aDUvuowA%2BnEHWChVu9nPtbaIrzKCuxwyLebPAvPO1aiI%2FaBjnwj%2Bo7zv%2B7dkxW%2FrUkAohKtp7z5qFCLINIk6yG%2Fq0ffdF9Jveuxu6yv6AVFUbzV80YWES%2FAdlsmDFbe2QZ0aGQPIH87rtZnosXzdbR66wlHl%2Bklix6oKLo03%2FYE44UgQRbYx4NlcAYlm29qMeSv51rE5aKDKBpQxq0KNA75mp8GyOO2DentkVIYawbXbsqunbwjA3qkARF9hfX1XUOWNNXfL9adbhh2rWVXFX5Rboq8t8Pqy1h4Jkqo1%2FbZYvujRwxal3oKncHP00q%2BPd5hArFS2DiFaG5cXZF2aMT%2BU8X7NC%2FgBlrxmpKfHNIvDMi42Ih5156HwRnBOl0QjzGQPeyDXshsUHneegnQLALDnbie0V0W0oIfp39TdsV8jMPPhmcMGOqUByLaWpxhYUFAP%2BlC5aU%2Bxg4s8mF4MLm0KkDlt00DAenHJIHaEG3B37oO1JX3Ag56qJd%2F0tFicBJiqaDlIQEP2czYlFEkyb2pkUrFay6Ihh%2FWigNtW8pAp%2Fo0esG5FVbkamD2g7cqg8cgdwgGce5WxypN94j9eenLYTI0a3e%2BXJ0A%2Fk1edrMlb8gi5GUyqmBq%2BJIVqAzIPks%2FwI0z7mnu%2BUv7GMD6j&X-Amz-Signature=68fae39f6ab576822db1394b003ff9868bcaa477b364606efe13d657474334c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

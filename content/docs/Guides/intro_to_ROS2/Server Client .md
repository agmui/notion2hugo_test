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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFVOYFDF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIC4dO4flCKAELlSBPqRymjzhBE6f0v5tc1%2Bn3TjjaiX3AiBgVP%2BkYt09xPOj7Kr3zSdmoPezL85gdAptq3R%2Bclc2ZCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMP427UCUGSijkakLxKtwDruU%2BBPhBRYKbRS2XfA2cml7rOqnvQw0EFqGCPKJzp5OTGw2HUvXtJHSLdWt3%2B8NL8x6iqvOOeCpx4lTd6R2PrEtELcsM71tuaaleZYCJjbT29HjPD4eicse3ArehZktPQb%2BfTJbsrsp78PC4wvnw52I0cYBWUAiq%2BWezx0nVZ8%2BKR8IunFUa6xj3ZxSvWw2tijDruG5mXu9NPZyPOsWsRScNxS3b2rlBlIUx1naMrBEBoe7eNzmsnYTIgYeD0EjFVT0%2Fdki179CBCyGY84EIiA36Lb6H2Gd1spTxkpX9q5jRziNl1EY2DjPu%2FPZR%2FVTGIgazuvglsnIYafMlt7e1S0meMOXBo6e1a85yK8w29PNv6ysFLZzT6jtCCJlWH%2BlBhQJR3S1sqxMVC7aW1xfsbLvHvlx5SzcLLEfoFOVyZFpnjB5JrwrmMy4CqfoXgkjqueWumilW7UoGu3FTqjnOnVyzN5qkqs7aim4SQrejO351mnzvuHuIeKBB%2Fce6oIL72%2BB9kPx3cpkHaQxMfgS1wzcOp4I8%2F9bAOZmq%2FU%2BZGlRAKiopQX586iNSLyjK1s%2BdcMlEKrLZDH%2BZnCpUFWrGRPoXzVWIJ%2B%2BU2e5XKVBLdqYj%2Blxj06ancJILF4cwwfbkvgY6pgErWNO9eqoAAeKM6OY1P90E5EKsXu165hl%2F7E9oVsIptZw%2Bo0YEoeYuBoUNcv1aaW1rOI77YC5tZphanpNPT%2FSr3WnnO1cLdLtWijsn5PjdbqEJbP7L5unUnX%2F71UJXipnb5oyBwDIYui3BiK9m67bHVGC1XCqvGJjf3u%2FUCTm5P%2FPPpCIS46uhedh%2FrlJLpHd8DShBq0tk5hN%2Fyu4QbMlZgu4aSHGZ&X-Amz-Signature=de91fe3e5a65efe88dc1723e02e6621fc3f3668a5eb5634b692f83a11e523c77&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFVOYFDF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIC4dO4flCKAELlSBPqRymjzhBE6f0v5tc1%2Bn3TjjaiX3AiBgVP%2BkYt09xPOj7Kr3zSdmoPezL85gdAptq3R%2Bclc2ZCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMP427UCUGSijkakLxKtwDruU%2BBPhBRYKbRS2XfA2cml7rOqnvQw0EFqGCPKJzp5OTGw2HUvXtJHSLdWt3%2B8NL8x6iqvOOeCpx4lTd6R2PrEtELcsM71tuaaleZYCJjbT29HjPD4eicse3ArehZktPQb%2BfTJbsrsp78PC4wvnw52I0cYBWUAiq%2BWezx0nVZ8%2BKR8IunFUa6xj3ZxSvWw2tijDruG5mXu9NPZyPOsWsRScNxS3b2rlBlIUx1naMrBEBoe7eNzmsnYTIgYeD0EjFVT0%2Fdki179CBCyGY84EIiA36Lb6H2Gd1spTxkpX9q5jRziNl1EY2DjPu%2FPZR%2FVTGIgazuvglsnIYafMlt7e1S0meMOXBo6e1a85yK8w29PNv6ysFLZzT6jtCCJlWH%2BlBhQJR3S1sqxMVC7aW1xfsbLvHvlx5SzcLLEfoFOVyZFpnjB5JrwrmMy4CqfoXgkjqueWumilW7UoGu3FTqjnOnVyzN5qkqs7aim4SQrejO351mnzvuHuIeKBB%2Fce6oIL72%2BB9kPx3cpkHaQxMfgS1wzcOp4I8%2F9bAOZmq%2FU%2BZGlRAKiopQX586iNSLyjK1s%2BdcMlEKrLZDH%2BZnCpUFWrGRPoXzVWIJ%2B%2BU2e5XKVBLdqYj%2Blxj06ancJILF4cwwfbkvgY6pgErWNO9eqoAAeKM6OY1P90E5EKsXu165hl%2F7E9oVsIptZw%2Bo0YEoeYuBoUNcv1aaW1rOI77YC5tZphanpNPT%2FSr3WnnO1cLdLtWijsn5PjdbqEJbP7L5unUnX%2F71UJXipnb5oyBwDIYui3BiK9m67bHVGC1XCqvGJjf3u%2FUCTm5P%2FPPpCIS46uhedh%2FrlJLpHd8DShBq0tk5hN%2Fyu4QbMlZgu4aSHGZ&X-Amz-Signature=55d339e17e147bbe9a96c200220901eb7eb90842e29a7538b81368cc142a105d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFVOYFDF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIC4dO4flCKAELlSBPqRymjzhBE6f0v5tc1%2Bn3TjjaiX3AiBgVP%2BkYt09xPOj7Kr3zSdmoPezL85gdAptq3R%2Bclc2ZCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMP427UCUGSijkakLxKtwDruU%2BBPhBRYKbRS2XfA2cml7rOqnvQw0EFqGCPKJzp5OTGw2HUvXtJHSLdWt3%2B8NL8x6iqvOOeCpx4lTd6R2PrEtELcsM71tuaaleZYCJjbT29HjPD4eicse3ArehZktPQb%2BfTJbsrsp78PC4wvnw52I0cYBWUAiq%2BWezx0nVZ8%2BKR8IunFUa6xj3ZxSvWw2tijDruG5mXu9NPZyPOsWsRScNxS3b2rlBlIUx1naMrBEBoe7eNzmsnYTIgYeD0EjFVT0%2Fdki179CBCyGY84EIiA36Lb6H2Gd1spTxkpX9q5jRziNl1EY2DjPu%2FPZR%2FVTGIgazuvglsnIYafMlt7e1S0meMOXBo6e1a85yK8w29PNv6ysFLZzT6jtCCJlWH%2BlBhQJR3S1sqxMVC7aW1xfsbLvHvlx5SzcLLEfoFOVyZFpnjB5JrwrmMy4CqfoXgkjqueWumilW7UoGu3FTqjnOnVyzN5qkqs7aim4SQrejO351mnzvuHuIeKBB%2Fce6oIL72%2BB9kPx3cpkHaQxMfgS1wzcOp4I8%2F9bAOZmq%2FU%2BZGlRAKiopQX586iNSLyjK1s%2BdcMlEKrLZDH%2BZnCpUFWrGRPoXzVWIJ%2B%2BU2e5XKVBLdqYj%2Blxj06ancJILF4cwwfbkvgY6pgErWNO9eqoAAeKM6OY1P90E5EKsXu165hl%2F7E9oVsIptZw%2Bo0YEoeYuBoUNcv1aaW1rOI77YC5tZphanpNPT%2FSr3WnnO1cLdLtWijsn5PjdbqEJbP7L5unUnX%2F71UJXipnb5oyBwDIYui3BiK9m67bHVGC1XCqvGJjf3u%2FUCTm5P%2FPPpCIS46uhedh%2FrlJLpHd8DShBq0tk5hN%2Fyu4QbMlZgu4aSHGZ&X-Amz-Signature=ce1270179932a0638ce217e59e45e7d3cc4831f26846d246b1c3f2a1c6ada050&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFVOYFDF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIC4dO4flCKAELlSBPqRymjzhBE6f0v5tc1%2Bn3TjjaiX3AiBgVP%2BkYt09xPOj7Kr3zSdmoPezL85gdAptq3R%2Bclc2ZCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMP427UCUGSijkakLxKtwDruU%2BBPhBRYKbRS2XfA2cml7rOqnvQw0EFqGCPKJzp5OTGw2HUvXtJHSLdWt3%2B8NL8x6iqvOOeCpx4lTd6R2PrEtELcsM71tuaaleZYCJjbT29HjPD4eicse3ArehZktPQb%2BfTJbsrsp78PC4wvnw52I0cYBWUAiq%2BWezx0nVZ8%2BKR8IunFUa6xj3ZxSvWw2tijDruG5mXu9NPZyPOsWsRScNxS3b2rlBlIUx1naMrBEBoe7eNzmsnYTIgYeD0EjFVT0%2Fdki179CBCyGY84EIiA36Lb6H2Gd1spTxkpX9q5jRziNl1EY2DjPu%2FPZR%2FVTGIgazuvglsnIYafMlt7e1S0meMOXBo6e1a85yK8w29PNv6ysFLZzT6jtCCJlWH%2BlBhQJR3S1sqxMVC7aW1xfsbLvHvlx5SzcLLEfoFOVyZFpnjB5JrwrmMy4CqfoXgkjqueWumilW7UoGu3FTqjnOnVyzN5qkqs7aim4SQrejO351mnzvuHuIeKBB%2Fce6oIL72%2BB9kPx3cpkHaQxMfgS1wzcOp4I8%2F9bAOZmq%2FU%2BZGlRAKiopQX586iNSLyjK1s%2BdcMlEKrLZDH%2BZnCpUFWrGRPoXzVWIJ%2B%2BU2e5XKVBLdqYj%2Blxj06ancJILF4cwwfbkvgY6pgErWNO9eqoAAeKM6OY1P90E5EKsXu165hl%2F7E9oVsIptZw%2Bo0YEoeYuBoUNcv1aaW1rOI77YC5tZphanpNPT%2FSr3WnnO1cLdLtWijsn5PjdbqEJbP7L5unUnX%2F71UJXipnb5oyBwDIYui3BiK9m67bHVGC1XCqvGJjf3u%2FUCTm5P%2FPPpCIS46uhedh%2FrlJLpHd8DShBq0tk5hN%2Fyu4QbMlZgu4aSHGZ&X-Amz-Signature=fc3767d21ef8ebb4fd2194cc3ba3cf21eb44c1a5b7695d90c83244c33e56e0a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFVOYFDF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIC4dO4flCKAELlSBPqRymjzhBE6f0v5tc1%2Bn3TjjaiX3AiBgVP%2BkYt09xPOj7Kr3zSdmoPezL85gdAptq3R%2Bclc2ZCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMP427UCUGSijkakLxKtwDruU%2BBPhBRYKbRS2XfA2cml7rOqnvQw0EFqGCPKJzp5OTGw2HUvXtJHSLdWt3%2B8NL8x6iqvOOeCpx4lTd6R2PrEtELcsM71tuaaleZYCJjbT29HjPD4eicse3ArehZktPQb%2BfTJbsrsp78PC4wvnw52I0cYBWUAiq%2BWezx0nVZ8%2BKR8IunFUa6xj3ZxSvWw2tijDruG5mXu9NPZyPOsWsRScNxS3b2rlBlIUx1naMrBEBoe7eNzmsnYTIgYeD0EjFVT0%2Fdki179CBCyGY84EIiA36Lb6H2Gd1spTxkpX9q5jRziNl1EY2DjPu%2FPZR%2FVTGIgazuvglsnIYafMlt7e1S0meMOXBo6e1a85yK8w29PNv6ysFLZzT6jtCCJlWH%2BlBhQJR3S1sqxMVC7aW1xfsbLvHvlx5SzcLLEfoFOVyZFpnjB5JrwrmMy4CqfoXgkjqueWumilW7UoGu3FTqjnOnVyzN5qkqs7aim4SQrejO351mnzvuHuIeKBB%2Fce6oIL72%2BB9kPx3cpkHaQxMfgS1wzcOp4I8%2F9bAOZmq%2FU%2BZGlRAKiopQX586iNSLyjK1s%2BdcMlEKrLZDH%2BZnCpUFWrGRPoXzVWIJ%2B%2BU2e5XKVBLdqYj%2Blxj06ancJILF4cwwfbkvgY6pgErWNO9eqoAAeKM6OY1P90E5EKsXu165hl%2F7E9oVsIptZw%2Bo0YEoeYuBoUNcv1aaW1rOI77YC5tZphanpNPT%2FSr3WnnO1cLdLtWijsn5PjdbqEJbP7L5unUnX%2F71UJXipnb5oyBwDIYui3BiK9m67bHVGC1XCqvGJjf3u%2FUCTm5P%2FPPpCIS46uhedh%2FrlJLpHd8DShBq0tk5hN%2Fyu4QbMlZgu4aSHGZ&X-Amz-Signature=35aa720365c83b5037d15e5e14e6109e42c0cfe92eb1057110c14c922f34c213&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

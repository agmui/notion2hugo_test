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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WAT3S3W%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQC0e12DO%2B7qfcrOBmZtp4ZpLM5IEh92Lm81rJPmegBp2gIhAPxAkwM9esaGL8Wnod%2FjMk3IKhErubHv4PLMuF%2Fn%2BETWKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrxVY1NO7I21dRZsUq3AM%2Fa4EMCUWQIIkaF3%2BlyR%2BTuTf%2FwKbzIqixAi3OkddEo2XT3rbJ5dFpvovTe44O%2BnbtmEjsN8I05knvLpjxBq%2Fo6Q%2BcLbktBmDH6xjBxt3XGebj5b4X1JukLXEUoYc%2BCAHk8HyN5tSfzIElnWrLDVaguWJZussbjvVEGE3GYgXxSga2FD90%2FLTuFSZHXxTXDsyx0jRB8WA55RVYkJ66r2uPf9OF%2FFg5%2FYzzXuNRdiEzo68GbdkYuGbt%2B9eFs7Er6V1uHZCqWcLq7RQSv05hwAd6k8bH6h2tTmyfbny6hDB%2FMTd8hK2ibIBE2kxRd4htE44hWEvzhb9fzQH3aziF37fywwdO3zhb%2BS1KBSveC3aAyPyqd4qi64Tc0vR%2FaD7rWWHKbY87aLC%2B%2Fh9mPO5lcozKezGglayxg%2Fhqh%2FBPF2Ho1e1LAuHIiXcH33F6Hsl7%2BF1ReNW16SKKw3dnMcMVuSO76j5r113QOXeVC7YqnqcqmlAV2R1FzA%2BOYhLvHlVURObPfiSbYA1uiI%2FnMXOMzDBqW50zQDu2nGK22MNNSx6e1CNJElXOD3KLstG49cF4IVCxSjor84f0IROsUhrZpsbloBTyeD1DjjRF1IChVnTBE%2FEcf82NLB6aFBEFGjDqhtbABjqkAe238VedHFFypAZGr4rcDsQP2XqyEd0%2BkQCG19mY5y6IiVyTAWBFUNg%2FZd%2FFpfUPuzFEANJ5Bo4qh4neieP4yd7kMYP2iQvP49ESwJFU9yFR1MUHIci%2B6%2FnY8KQ3RA2aRnREoR5S6z1gnE1Issbt%2FRES876%2F3Dz3hENlmhU2NZyo7F%2FXOI%2F48fXf%2FvfJWF%2F0mLVmftJu70Bavc%2F6qPuwDS2wvoQG&X-Amz-Signature=e615f39f53001322b55adb41b73de48133a16f3ad65581ec0bd1ab03175601af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WAT3S3W%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQC0e12DO%2B7qfcrOBmZtp4ZpLM5IEh92Lm81rJPmegBp2gIhAPxAkwM9esaGL8Wnod%2FjMk3IKhErubHv4PLMuF%2Fn%2BETWKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrxVY1NO7I21dRZsUq3AM%2Fa4EMCUWQIIkaF3%2BlyR%2BTuTf%2FwKbzIqixAi3OkddEo2XT3rbJ5dFpvovTe44O%2BnbtmEjsN8I05knvLpjxBq%2Fo6Q%2BcLbktBmDH6xjBxt3XGebj5b4X1JukLXEUoYc%2BCAHk8HyN5tSfzIElnWrLDVaguWJZussbjvVEGE3GYgXxSga2FD90%2FLTuFSZHXxTXDsyx0jRB8WA55RVYkJ66r2uPf9OF%2FFg5%2FYzzXuNRdiEzo68GbdkYuGbt%2B9eFs7Er6V1uHZCqWcLq7RQSv05hwAd6k8bH6h2tTmyfbny6hDB%2FMTd8hK2ibIBE2kxRd4htE44hWEvzhb9fzQH3aziF37fywwdO3zhb%2BS1KBSveC3aAyPyqd4qi64Tc0vR%2FaD7rWWHKbY87aLC%2B%2Fh9mPO5lcozKezGglayxg%2Fhqh%2FBPF2Ho1e1LAuHIiXcH33F6Hsl7%2BF1ReNW16SKKw3dnMcMVuSO76j5r113QOXeVC7YqnqcqmlAV2R1FzA%2BOYhLvHlVURObPfiSbYA1uiI%2FnMXOMzDBqW50zQDu2nGK22MNNSx6e1CNJElXOD3KLstG49cF4IVCxSjor84f0IROsUhrZpsbloBTyeD1DjjRF1IChVnTBE%2FEcf82NLB6aFBEFGjDqhtbABjqkAe238VedHFFypAZGr4rcDsQP2XqyEd0%2BkQCG19mY5y6IiVyTAWBFUNg%2FZd%2FFpfUPuzFEANJ5Bo4qh4neieP4yd7kMYP2iQvP49ESwJFU9yFR1MUHIci%2B6%2FnY8KQ3RA2aRnREoR5S6z1gnE1Issbt%2FRES876%2F3Dz3hENlmhU2NZyo7F%2FXOI%2F48fXf%2FvfJWF%2F0mLVmftJu70Bavc%2F6qPuwDS2wvoQG&X-Amz-Signature=6232477f55a662db865f6ccdad706901e8e1f6be6bdbe84dfdca89470d19b78e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WAT3S3W%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQC0e12DO%2B7qfcrOBmZtp4ZpLM5IEh92Lm81rJPmegBp2gIhAPxAkwM9esaGL8Wnod%2FjMk3IKhErubHv4PLMuF%2Fn%2BETWKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrxVY1NO7I21dRZsUq3AM%2Fa4EMCUWQIIkaF3%2BlyR%2BTuTf%2FwKbzIqixAi3OkddEo2XT3rbJ5dFpvovTe44O%2BnbtmEjsN8I05knvLpjxBq%2Fo6Q%2BcLbktBmDH6xjBxt3XGebj5b4X1JukLXEUoYc%2BCAHk8HyN5tSfzIElnWrLDVaguWJZussbjvVEGE3GYgXxSga2FD90%2FLTuFSZHXxTXDsyx0jRB8WA55RVYkJ66r2uPf9OF%2FFg5%2FYzzXuNRdiEzo68GbdkYuGbt%2B9eFs7Er6V1uHZCqWcLq7RQSv05hwAd6k8bH6h2tTmyfbny6hDB%2FMTd8hK2ibIBE2kxRd4htE44hWEvzhb9fzQH3aziF37fywwdO3zhb%2BS1KBSveC3aAyPyqd4qi64Tc0vR%2FaD7rWWHKbY87aLC%2B%2Fh9mPO5lcozKezGglayxg%2Fhqh%2FBPF2Ho1e1LAuHIiXcH33F6Hsl7%2BF1ReNW16SKKw3dnMcMVuSO76j5r113QOXeVC7YqnqcqmlAV2R1FzA%2BOYhLvHlVURObPfiSbYA1uiI%2FnMXOMzDBqW50zQDu2nGK22MNNSx6e1CNJElXOD3KLstG49cF4IVCxSjor84f0IROsUhrZpsbloBTyeD1DjjRF1IChVnTBE%2FEcf82NLB6aFBEFGjDqhtbABjqkAe238VedHFFypAZGr4rcDsQP2XqyEd0%2BkQCG19mY5y6IiVyTAWBFUNg%2FZd%2FFpfUPuzFEANJ5Bo4qh4neieP4yd7kMYP2iQvP49ESwJFU9yFR1MUHIci%2B6%2FnY8KQ3RA2aRnREoR5S6z1gnE1Issbt%2FRES876%2F3Dz3hENlmhU2NZyo7F%2FXOI%2F48fXf%2FvfJWF%2F0mLVmftJu70Bavc%2F6qPuwDS2wvoQG&X-Amz-Signature=bbda9be8f8411b2d34ed06746303212d062d6092f95b5bbc5c5fb740ff43f0fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WAT3S3W%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQC0e12DO%2B7qfcrOBmZtp4ZpLM5IEh92Lm81rJPmegBp2gIhAPxAkwM9esaGL8Wnod%2FjMk3IKhErubHv4PLMuF%2Fn%2BETWKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrxVY1NO7I21dRZsUq3AM%2Fa4EMCUWQIIkaF3%2BlyR%2BTuTf%2FwKbzIqixAi3OkddEo2XT3rbJ5dFpvovTe44O%2BnbtmEjsN8I05knvLpjxBq%2Fo6Q%2BcLbktBmDH6xjBxt3XGebj5b4X1JukLXEUoYc%2BCAHk8HyN5tSfzIElnWrLDVaguWJZussbjvVEGE3GYgXxSga2FD90%2FLTuFSZHXxTXDsyx0jRB8WA55RVYkJ66r2uPf9OF%2FFg5%2FYzzXuNRdiEzo68GbdkYuGbt%2B9eFs7Er6V1uHZCqWcLq7RQSv05hwAd6k8bH6h2tTmyfbny6hDB%2FMTd8hK2ibIBE2kxRd4htE44hWEvzhb9fzQH3aziF37fywwdO3zhb%2BS1KBSveC3aAyPyqd4qi64Tc0vR%2FaD7rWWHKbY87aLC%2B%2Fh9mPO5lcozKezGglayxg%2Fhqh%2FBPF2Ho1e1LAuHIiXcH33F6Hsl7%2BF1ReNW16SKKw3dnMcMVuSO76j5r113QOXeVC7YqnqcqmlAV2R1FzA%2BOYhLvHlVURObPfiSbYA1uiI%2FnMXOMzDBqW50zQDu2nGK22MNNSx6e1CNJElXOD3KLstG49cF4IVCxSjor84f0IROsUhrZpsbloBTyeD1DjjRF1IChVnTBE%2FEcf82NLB6aFBEFGjDqhtbABjqkAe238VedHFFypAZGr4rcDsQP2XqyEd0%2BkQCG19mY5y6IiVyTAWBFUNg%2FZd%2FFpfUPuzFEANJ5Bo4qh4neieP4yd7kMYP2iQvP49ESwJFU9yFR1MUHIci%2B6%2FnY8KQ3RA2aRnREoR5S6z1gnE1Issbt%2FRES876%2F3Dz3hENlmhU2NZyo7F%2FXOI%2F48fXf%2FvfJWF%2F0mLVmftJu70Bavc%2F6qPuwDS2wvoQG&X-Amz-Signature=6dd0113532f497802bfaff2880ff660e7459fccab1b538b0f0bd083fdb2a2c2b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WAT3S3W%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQC0e12DO%2B7qfcrOBmZtp4ZpLM5IEh92Lm81rJPmegBp2gIhAPxAkwM9esaGL8Wnod%2FjMk3IKhErubHv4PLMuF%2Fn%2BETWKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrxVY1NO7I21dRZsUq3AM%2Fa4EMCUWQIIkaF3%2BlyR%2BTuTf%2FwKbzIqixAi3OkddEo2XT3rbJ5dFpvovTe44O%2BnbtmEjsN8I05knvLpjxBq%2Fo6Q%2BcLbktBmDH6xjBxt3XGebj5b4X1JukLXEUoYc%2BCAHk8HyN5tSfzIElnWrLDVaguWJZussbjvVEGE3GYgXxSga2FD90%2FLTuFSZHXxTXDsyx0jRB8WA55RVYkJ66r2uPf9OF%2FFg5%2FYzzXuNRdiEzo68GbdkYuGbt%2B9eFs7Er6V1uHZCqWcLq7RQSv05hwAd6k8bH6h2tTmyfbny6hDB%2FMTd8hK2ibIBE2kxRd4htE44hWEvzhb9fzQH3aziF37fywwdO3zhb%2BS1KBSveC3aAyPyqd4qi64Tc0vR%2FaD7rWWHKbY87aLC%2B%2Fh9mPO5lcozKezGglayxg%2Fhqh%2FBPF2Ho1e1LAuHIiXcH33F6Hsl7%2BF1ReNW16SKKw3dnMcMVuSO76j5r113QOXeVC7YqnqcqmlAV2R1FzA%2BOYhLvHlVURObPfiSbYA1uiI%2FnMXOMzDBqW50zQDu2nGK22MNNSx6e1CNJElXOD3KLstG49cF4IVCxSjor84f0IROsUhrZpsbloBTyeD1DjjRF1IChVnTBE%2FEcf82NLB6aFBEFGjDqhtbABjqkAe238VedHFFypAZGr4rcDsQP2XqyEd0%2BkQCG19mY5y6IiVyTAWBFUNg%2FZd%2FFpfUPuzFEANJ5Bo4qh4neieP4yd7kMYP2iQvP49ESwJFU9yFR1MUHIci%2B6%2FnY8KQ3RA2aRnREoR5S6z1gnE1Issbt%2FRES876%2F3Dz3hENlmhU2NZyo7F%2FXOI%2F48fXf%2FvfJWF%2F0mLVmftJu70Bavc%2F6qPuwDS2wvoQG&X-Amz-Signature=f994580b95b1de92adc4924ede627c657557e52c7ff1b5de7eb7bcd92e8dc3bc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

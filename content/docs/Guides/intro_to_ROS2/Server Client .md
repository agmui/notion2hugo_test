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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BECFBVU%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCEWtTEBWOgoY%2BohN%2FCJeOZFfwZNsFErf0KSHDPQlGM%2BwIhAPdMJ%2BraIjwstOndfEeT2f7AniFgSF1NJkVVHmr%2BCakhKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlzwobo9ieRK%2Bvbiwq3AOnI29e06oc%2FSACWavgXxABrcRUxAGeeqJLGQE83DEv73VrcC3YiXlMXAc1d6ijZXYgdofgNO0V4JpUtlzbHnJSmNFCQrgZR4IARGOhAKWHOLjiwydNUD6YBTUtUEByhr4UfhFUcka1A2xiVHII9xXTOSdzb35g8FlNU5Ml7%2FuQiSoD56CV7bS0lossUHjazZqRXEnYyFegxHyyIHiaK89XlfN4NMKSE8ZdpnOfiI5FwC3ZuDUAde7cl1JaV8oOXpRpmPzqdiCwp6RZgzmEX9uFLxGmc1XFSecOmrHGCb%2BGqogWFOHaPyzctWoPHQOsm0vw54q%2Fkzo1aJNShBEece6hpBMPUishWwYu0tzQi%2F9sGywkdh7Li4XvGV091XfyseohRqr2KUa8bkLwvhUNWJkcNN0v89boUjuRbzuprJKAL4PEeswCtvtN0XdPMevHfdHViWAyGFPCRdX7D5JLxJWFS%2FhgFTO6eRq1%2FyL1R9QsM%2BioOhBckTwRdiUPu%2F3cG32ZIPMOF54vevPXQXXQwhEWHbA1KnJSubLttOcZXpVRLMIWSO0fzaTp%2FpMiMXg2bzuQQvpfuXQpcjjflj%2B3vgokPG3jisteeqS0Wj5LovvgDz9cA5nWYKGgokLcjTDPs5u9BjqkAVp%2BRz%2FV8trpYsfjfhnRxg3FY5cZfUe%2BLYfI2lYtjaYkRq%2BQ3KL7T1LP%2FoNDotzbrTTWyenfbs65uA2E2deglILVJxffnVqwOXqTK8G2PZcY4teB3zhqY%2FtH7GoQ1SRTCRWItAjlsjH9zSaMALmv6ol18wM5yxtG4bhAycx9IlpgmRZqNWKUH0W97HbXcW%2FkxRZt73nJYEcOrxaaUD8CSoJbJGe9&X-Amz-Signature=233ae6bc165b88a952a09cc60603290da1a2687b7fe47bacdc043797c6d17583&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BECFBVU%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCEWtTEBWOgoY%2BohN%2FCJeOZFfwZNsFErf0KSHDPQlGM%2BwIhAPdMJ%2BraIjwstOndfEeT2f7AniFgSF1NJkVVHmr%2BCakhKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlzwobo9ieRK%2Bvbiwq3AOnI29e06oc%2FSACWavgXxABrcRUxAGeeqJLGQE83DEv73VrcC3YiXlMXAc1d6ijZXYgdofgNO0V4JpUtlzbHnJSmNFCQrgZR4IARGOhAKWHOLjiwydNUD6YBTUtUEByhr4UfhFUcka1A2xiVHII9xXTOSdzb35g8FlNU5Ml7%2FuQiSoD56CV7bS0lossUHjazZqRXEnYyFegxHyyIHiaK89XlfN4NMKSE8ZdpnOfiI5FwC3ZuDUAde7cl1JaV8oOXpRpmPzqdiCwp6RZgzmEX9uFLxGmc1XFSecOmrHGCb%2BGqogWFOHaPyzctWoPHQOsm0vw54q%2Fkzo1aJNShBEece6hpBMPUishWwYu0tzQi%2F9sGywkdh7Li4XvGV091XfyseohRqr2KUa8bkLwvhUNWJkcNN0v89boUjuRbzuprJKAL4PEeswCtvtN0XdPMevHfdHViWAyGFPCRdX7D5JLxJWFS%2FhgFTO6eRq1%2FyL1R9QsM%2BioOhBckTwRdiUPu%2F3cG32ZIPMOF54vevPXQXXQwhEWHbA1KnJSubLttOcZXpVRLMIWSO0fzaTp%2FpMiMXg2bzuQQvpfuXQpcjjflj%2B3vgokPG3jisteeqS0Wj5LovvgDz9cA5nWYKGgokLcjTDPs5u9BjqkAVp%2BRz%2FV8trpYsfjfhnRxg3FY5cZfUe%2BLYfI2lYtjaYkRq%2BQ3KL7T1LP%2FoNDotzbrTTWyenfbs65uA2E2deglILVJxffnVqwOXqTK8G2PZcY4teB3zhqY%2FtH7GoQ1SRTCRWItAjlsjH9zSaMALmv6ol18wM5yxtG4bhAycx9IlpgmRZqNWKUH0W97HbXcW%2FkxRZt73nJYEcOrxaaUD8CSoJbJGe9&X-Amz-Signature=6cbf3ac472dd69795bf80726cb5e3b78a46003c64dc9ec01e3d783f6861f440d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BECFBVU%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCEWtTEBWOgoY%2BohN%2FCJeOZFfwZNsFErf0KSHDPQlGM%2BwIhAPdMJ%2BraIjwstOndfEeT2f7AniFgSF1NJkVVHmr%2BCakhKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlzwobo9ieRK%2Bvbiwq3AOnI29e06oc%2FSACWavgXxABrcRUxAGeeqJLGQE83DEv73VrcC3YiXlMXAc1d6ijZXYgdofgNO0V4JpUtlzbHnJSmNFCQrgZR4IARGOhAKWHOLjiwydNUD6YBTUtUEByhr4UfhFUcka1A2xiVHII9xXTOSdzb35g8FlNU5Ml7%2FuQiSoD56CV7bS0lossUHjazZqRXEnYyFegxHyyIHiaK89XlfN4NMKSE8ZdpnOfiI5FwC3ZuDUAde7cl1JaV8oOXpRpmPzqdiCwp6RZgzmEX9uFLxGmc1XFSecOmrHGCb%2BGqogWFOHaPyzctWoPHQOsm0vw54q%2Fkzo1aJNShBEece6hpBMPUishWwYu0tzQi%2F9sGywkdh7Li4XvGV091XfyseohRqr2KUa8bkLwvhUNWJkcNN0v89boUjuRbzuprJKAL4PEeswCtvtN0XdPMevHfdHViWAyGFPCRdX7D5JLxJWFS%2FhgFTO6eRq1%2FyL1R9QsM%2BioOhBckTwRdiUPu%2F3cG32ZIPMOF54vevPXQXXQwhEWHbA1KnJSubLttOcZXpVRLMIWSO0fzaTp%2FpMiMXg2bzuQQvpfuXQpcjjflj%2B3vgokPG3jisteeqS0Wj5LovvgDz9cA5nWYKGgokLcjTDPs5u9BjqkAVp%2BRz%2FV8trpYsfjfhnRxg3FY5cZfUe%2BLYfI2lYtjaYkRq%2BQ3KL7T1LP%2FoNDotzbrTTWyenfbs65uA2E2deglILVJxffnVqwOXqTK8G2PZcY4teB3zhqY%2FtH7GoQ1SRTCRWItAjlsjH9zSaMALmv6ol18wM5yxtG4bhAycx9IlpgmRZqNWKUH0W97HbXcW%2FkxRZt73nJYEcOrxaaUD8CSoJbJGe9&X-Amz-Signature=14d3d76e5735285ba774bfb099ce5dfbb8c9bb65edca8f98fe47071681e28c56&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BECFBVU%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCEWtTEBWOgoY%2BohN%2FCJeOZFfwZNsFErf0KSHDPQlGM%2BwIhAPdMJ%2BraIjwstOndfEeT2f7AniFgSF1NJkVVHmr%2BCakhKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlzwobo9ieRK%2Bvbiwq3AOnI29e06oc%2FSACWavgXxABrcRUxAGeeqJLGQE83DEv73VrcC3YiXlMXAc1d6ijZXYgdofgNO0V4JpUtlzbHnJSmNFCQrgZR4IARGOhAKWHOLjiwydNUD6YBTUtUEByhr4UfhFUcka1A2xiVHII9xXTOSdzb35g8FlNU5Ml7%2FuQiSoD56CV7bS0lossUHjazZqRXEnYyFegxHyyIHiaK89XlfN4NMKSE8ZdpnOfiI5FwC3ZuDUAde7cl1JaV8oOXpRpmPzqdiCwp6RZgzmEX9uFLxGmc1XFSecOmrHGCb%2BGqogWFOHaPyzctWoPHQOsm0vw54q%2Fkzo1aJNShBEece6hpBMPUishWwYu0tzQi%2F9sGywkdh7Li4XvGV091XfyseohRqr2KUa8bkLwvhUNWJkcNN0v89boUjuRbzuprJKAL4PEeswCtvtN0XdPMevHfdHViWAyGFPCRdX7D5JLxJWFS%2FhgFTO6eRq1%2FyL1R9QsM%2BioOhBckTwRdiUPu%2F3cG32ZIPMOF54vevPXQXXQwhEWHbA1KnJSubLttOcZXpVRLMIWSO0fzaTp%2FpMiMXg2bzuQQvpfuXQpcjjflj%2B3vgokPG3jisteeqS0Wj5LovvgDz9cA5nWYKGgokLcjTDPs5u9BjqkAVp%2BRz%2FV8trpYsfjfhnRxg3FY5cZfUe%2BLYfI2lYtjaYkRq%2BQ3KL7T1LP%2FoNDotzbrTTWyenfbs65uA2E2deglILVJxffnVqwOXqTK8G2PZcY4teB3zhqY%2FtH7GoQ1SRTCRWItAjlsjH9zSaMALmv6ol18wM5yxtG4bhAycx9IlpgmRZqNWKUH0W97HbXcW%2FkxRZt73nJYEcOrxaaUD8CSoJbJGe9&X-Amz-Signature=56075e9b9966dd6f9338a4cd69e60cdaf19cf03562a1eb6f86cf4f9deb8cadc8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BECFBVU%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCEWtTEBWOgoY%2BohN%2FCJeOZFfwZNsFErf0KSHDPQlGM%2BwIhAPdMJ%2BraIjwstOndfEeT2f7AniFgSF1NJkVVHmr%2BCakhKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlzwobo9ieRK%2Bvbiwq3AOnI29e06oc%2FSACWavgXxABrcRUxAGeeqJLGQE83DEv73VrcC3YiXlMXAc1d6ijZXYgdofgNO0V4JpUtlzbHnJSmNFCQrgZR4IARGOhAKWHOLjiwydNUD6YBTUtUEByhr4UfhFUcka1A2xiVHII9xXTOSdzb35g8FlNU5Ml7%2FuQiSoD56CV7bS0lossUHjazZqRXEnYyFegxHyyIHiaK89XlfN4NMKSE8ZdpnOfiI5FwC3ZuDUAde7cl1JaV8oOXpRpmPzqdiCwp6RZgzmEX9uFLxGmc1XFSecOmrHGCb%2BGqogWFOHaPyzctWoPHQOsm0vw54q%2Fkzo1aJNShBEece6hpBMPUishWwYu0tzQi%2F9sGywkdh7Li4XvGV091XfyseohRqr2KUa8bkLwvhUNWJkcNN0v89boUjuRbzuprJKAL4PEeswCtvtN0XdPMevHfdHViWAyGFPCRdX7D5JLxJWFS%2FhgFTO6eRq1%2FyL1R9QsM%2BioOhBckTwRdiUPu%2F3cG32ZIPMOF54vevPXQXXQwhEWHbA1KnJSubLttOcZXpVRLMIWSO0fzaTp%2FpMiMXg2bzuQQvpfuXQpcjjflj%2B3vgokPG3jisteeqS0Wj5LovvgDz9cA5nWYKGgokLcjTDPs5u9BjqkAVp%2BRz%2FV8trpYsfjfhnRxg3FY5cZfUe%2BLYfI2lYtjaYkRq%2BQ3KL7T1LP%2FoNDotzbrTTWyenfbs65uA2E2deglILVJxffnVqwOXqTK8G2PZcY4teB3zhqY%2FtH7GoQ1SRTCRWItAjlsjH9zSaMALmv6ol18wM5yxtG4bhAycx9IlpgmRZqNWKUH0W97HbXcW%2FkxRZt73nJYEcOrxaaUD8CSoJbJGe9&X-Amz-Signature=74cd3ddb117ef27aae26586a66b16f03e3baff571b899002f62acdf39516c87f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

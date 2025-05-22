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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFAHTEF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC469rwlQrBDAegGFeCWEls8zKVVxkNax68vsneedbILQIgPyFSdO01u1nySFe096AhyI%2Fkldo5Zfyv%2FegB24cQrbUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6EzdIa7yO3uVoZSyrcA0eYU%2F96jTMPquq8DQFDoEjvOGZuG2CdOCaFBc%2FGB30GCNZvEGW0Lr0MQ5UuyoqlyxMnpv1jrE6c%2FP0M9p%2F71BB%2FO%2Fud4h%2BkTnH4DGy8yRRgrrYOpj%2B8Yzdqsp2aH6tVRwfxC0zCSE9wiZdRZX2qhAfyhZiAcW3fTDwEn7UcihCcC6DQeUuaQaLl6YCjXQ51%2Bfjv6uOScLmTfHU3dqB6yjtzTbxagt06ARA%2Bh%2B2JQG1ZYe6FGHQ1Kf30sUWHyUAufUJVWcPLIDXkDKi0WNiAv9VQEZLeKNIy%2By5Y6FgfIrdG48da%2Bxui0WYuiLA1JaeeGrmfb3g79hMSpTkerlbe2kgJcSCudQ1%2BXsEs%2FldQOXG7rMeCBrcmSAPFENEC2hSscQ7ud3HJpsEEYOPy22JYY6jEm2Oz4yA1w3sb9D0a6sPOoQr67ihaZ0ragog8p06NSLC%2Fb5fvxec3PZMWc8CVL6s08DqTIp1h4qLTxWe3PcMh91moQ52l8RGCE%2FUTDBbepPik1G%2BhS4PM82EiHDjs3IDWRCKTU9M8BnobfHjzM9xFWABUFgeQJ7OeWRTnvowG8eumF9rjj8kPF15Bx9av6apAZbfRArBfd6LNu%2B3U1oprN%2Bn8KsOSKVR0PwUkMMiyusEGOqUBM9OeDApdC%2Fth%2BAEI9zbgNjgYpSPc11Tz9u3VA%2FQSgHumWhBvoWlAHYeT0K3f6pZeh7pKVAAaB7f4avgKSTSIQ5cYVvwcAKg%2FoPvzdoNacwSHBxfIaMVFzmsYcPABiey0U%2BEY%2FI3OcWxWCmYtRNPizq%2Fr0kE69nYjItofUx0gbTm3MNPTBKboHPqC4M99l9U%2BMBpu3WwZVmpIp1XLWk%2FymW2fYzPG&X-Amz-Signature=5b4376838f9b7baebcff6b54143a8a3be0680e64b2dadeceb0def852db3b3bc3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFAHTEF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC469rwlQrBDAegGFeCWEls8zKVVxkNax68vsneedbILQIgPyFSdO01u1nySFe096AhyI%2Fkldo5Zfyv%2FegB24cQrbUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6EzdIa7yO3uVoZSyrcA0eYU%2F96jTMPquq8DQFDoEjvOGZuG2CdOCaFBc%2FGB30GCNZvEGW0Lr0MQ5UuyoqlyxMnpv1jrE6c%2FP0M9p%2F71BB%2FO%2Fud4h%2BkTnH4DGy8yRRgrrYOpj%2B8Yzdqsp2aH6tVRwfxC0zCSE9wiZdRZX2qhAfyhZiAcW3fTDwEn7UcihCcC6DQeUuaQaLl6YCjXQ51%2Bfjv6uOScLmTfHU3dqB6yjtzTbxagt06ARA%2Bh%2B2JQG1ZYe6FGHQ1Kf30sUWHyUAufUJVWcPLIDXkDKi0WNiAv9VQEZLeKNIy%2By5Y6FgfIrdG48da%2Bxui0WYuiLA1JaeeGrmfb3g79hMSpTkerlbe2kgJcSCudQ1%2BXsEs%2FldQOXG7rMeCBrcmSAPFENEC2hSscQ7ud3HJpsEEYOPy22JYY6jEm2Oz4yA1w3sb9D0a6sPOoQr67ihaZ0ragog8p06NSLC%2Fb5fvxec3PZMWc8CVL6s08DqTIp1h4qLTxWe3PcMh91moQ52l8RGCE%2FUTDBbepPik1G%2BhS4PM82EiHDjs3IDWRCKTU9M8BnobfHjzM9xFWABUFgeQJ7OeWRTnvowG8eumF9rjj8kPF15Bx9av6apAZbfRArBfd6LNu%2B3U1oprN%2Bn8KsOSKVR0PwUkMMiyusEGOqUBM9OeDApdC%2Fth%2BAEI9zbgNjgYpSPc11Tz9u3VA%2FQSgHumWhBvoWlAHYeT0K3f6pZeh7pKVAAaB7f4avgKSTSIQ5cYVvwcAKg%2FoPvzdoNacwSHBxfIaMVFzmsYcPABiey0U%2BEY%2FI3OcWxWCmYtRNPizq%2Fr0kE69nYjItofUx0gbTm3MNPTBKboHPqC4M99l9U%2BMBpu3WwZVmpIp1XLWk%2FymW2fYzPG&X-Amz-Signature=872ea005beebccf4951762ca1d34fef6d8ea70ba5cb105a13c42e626d51e679f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFAHTEF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC469rwlQrBDAegGFeCWEls8zKVVxkNax68vsneedbILQIgPyFSdO01u1nySFe096AhyI%2Fkldo5Zfyv%2FegB24cQrbUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6EzdIa7yO3uVoZSyrcA0eYU%2F96jTMPquq8DQFDoEjvOGZuG2CdOCaFBc%2FGB30GCNZvEGW0Lr0MQ5UuyoqlyxMnpv1jrE6c%2FP0M9p%2F71BB%2FO%2Fud4h%2BkTnH4DGy8yRRgrrYOpj%2B8Yzdqsp2aH6tVRwfxC0zCSE9wiZdRZX2qhAfyhZiAcW3fTDwEn7UcihCcC6DQeUuaQaLl6YCjXQ51%2Bfjv6uOScLmTfHU3dqB6yjtzTbxagt06ARA%2Bh%2B2JQG1ZYe6FGHQ1Kf30sUWHyUAufUJVWcPLIDXkDKi0WNiAv9VQEZLeKNIy%2By5Y6FgfIrdG48da%2Bxui0WYuiLA1JaeeGrmfb3g79hMSpTkerlbe2kgJcSCudQ1%2BXsEs%2FldQOXG7rMeCBrcmSAPFENEC2hSscQ7ud3HJpsEEYOPy22JYY6jEm2Oz4yA1w3sb9D0a6sPOoQr67ihaZ0ragog8p06NSLC%2Fb5fvxec3PZMWc8CVL6s08DqTIp1h4qLTxWe3PcMh91moQ52l8RGCE%2FUTDBbepPik1G%2BhS4PM82EiHDjs3IDWRCKTU9M8BnobfHjzM9xFWABUFgeQJ7OeWRTnvowG8eumF9rjj8kPF15Bx9av6apAZbfRArBfd6LNu%2B3U1oprN%2Bn8KsOSKVR0PwUkMMiyusEGOqUBM9OeDApdC%2Fth%2BAEI9zbgNjgYpSPc11Tz9u3VA%2FQSgHumWhBvoWlAHYeT0K3f6pZeh7pKVAAaB7f4avgKSTSIQ5cYVvwcAKg%2FoPvzdoNacwSHBxfIaMVFzmsYcPABiey0U%2BEY%2FI3OcWxWCmYtRNPizq%2Fr0kE69nYjItofUx0gbTm3MNPTBKboHPqC4M99l9U%2BMBpu3WwZVmpIp1XLWk%2FymW2fYzPG&X-Amz-Signature=940913b44f1c0c2903bde278d439ae00f702693bc1177869a705ff5f6c9de09c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFAHTEF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC469rwlQrBDAegGFeCWEls8zKVVxkNax68vsneedbILQIgPyFSdO01u1nySFe096AhyI%2Fkldo5Zfyv%2FegB24cQrbUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6EzdIa7yO3uVoZSyrcA0eYU%2F96jTMPquq8DQFDoEjvOGZuG2CdOCaFBc%2FGB30GCNZvEGW0Lr0MQ5UuyoqlyxMnpv1jrE6c%2FP0M9p%2F71BB%2FO%2Fud4h%2BkTnH4DGy8yRRgrrYOpj%2B8Yzdqsp2aH6tVRwfxC0zCSE9wiZdRZX2qhAfyhZiAcW3fTDwEn7UcihCcC6DQeUuaQaLl6YCjXQ51%2Bfjv6uOScLmTfHU3dqB6yjtzTbxagt06ARA%2Bh%2B2JQG1ZYe6FGHQ1Kf30sUWHyUAufUJVWcPLIDXkDKi0WNiAv9VQEZLeKNIy%2By5Y6FgfIrdG48da%2Bxui0WYuiLA1JaeeGrmfb3g79hMSpTkerlbe2kgJcSCudQ1%2BXsEs%2FldQOXG7rMeCBrcmSAPFENEC2hSscQ7ud3HJpsEEYOPy22JYY6jEm2Oz4yA1w3sb9D0a6sPOoQr67ihaZ0ragog8p06NSLC%2Fb5fvxec3PZMWc8CVL6s08DqTIp1h4qLTxWe3PcMh91moQ52l8RGCE%2FUTDBbepPik1G%2BhS4PM82EiHDjs3IDWRCKTU9M8BnobfHjzM9xFWABUFgeQJ7OeWRTnvowG8eumF9rjj8kPF15Bx9av6apAZbfRArBfd6LNu%2B3U1oprN%2Bn8KsOSKVR0PwUkMMiyusEGOqUBM9OeDApdC%2Fth%2BAEI9zbgNjgYpSPc11Tz9u3VA%2FQSgHumWhBvoWlAHYeT0K3f6pZeh7pKVAAaB7f4avgKSTSIQ5cYVvwcAKg%2FoPvzdoNacwSHBxfIaMVFzmsYcPABiey0U%2BEY%2FI3OcWxWCmYtRNPizq%2Fr0kE69nYjItofUx0gbTm3MNPTBKboHPqC4M99l9U%2BMBpu3WwZVmpIp1XLWk%2FymW2fYzPG&X-Amz-Signature=6b3615a218f246d9d28292e07e3d13a39fc6fea93542bba7f6c4fcb6917af3a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFAHTEF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC469rwlQrBDAegGFeCWEls8zKVVxkNax68vsneedbILQIgPyFSdO01u1nySFe096AhyI%2Fkldo5Zfyv%2FegB24cQrbUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6EzdIa7yO3uVoZSyrcA0eYU%2F96jTMPquq8DQFDoEjvOGZuG2CdOCaFBc%2FGB30GCNZvEGW0Lr0MQ5UuyoqlyxMnpv1jrE6c%2FP0M9p%2F71BB%2FO%2Fud4h%2BkTnH4DGy8yRRgrrYOpj%2B8Yzdqsp2aH6tVRwfxC0zCSE9wiZdRZX2qhAfyhZiAcW3fTDwEn7UcihCcC6DQeUuaQaLl6YCjXQ51%2Bfjv6uOScLmTfHU3dqB6yjtzTbxagt06ARA%2Bh%2B2JQG1ZYe6FGHQ1Kf30sUWHyUAufUJVWcPLIDXkDKi0WNiAv9VQEZLeKNIy%2By5Y6FgfIrdG48da%2Bxui0WYuiLA1JaeeGrmfb3g79hMSpTkerlbe2kgJcSCudQ1%2BXsEs%2FldQOXG7rMeCBrcmSAPFENEC2hSscQ7ud3HJpsEEYOPy22JYY6jEm2Oz4yA1w3sb9D0a6sPOoQr67ihaZ0ragog8p06NSLC%2Fb5fvxec3PZMWc8CVL6s08DqTIp1h4qLTxWe3PcMh91moQ52l8RGCE%2FUTDBbepPik1G%2BhS4PM82EiHDjs3IDWRCKTU9M8BnobfHjzM9xFWABUFgeQJ7OeWRTnvowG8eumF9rjj8kPF15Bx9av6apAZbfRArBfd6LNu%2B3U1oprN%2Bn8KsOSKVR0PwUkMMiyusEGOqUBM9OeDApdC%2Fth%2BAEI9zbgNjgYpSPc11Tz9u3VA%2FQSgHumWhBvoWlAHYeT0K3f6pZeh7pKVAAaB7f4avgKSTSIQ5cYVvwcAKg%2FoPvzdoNacwSHBxfIaMVFzmsYcPABiey0U%2BEY%2FI3OcWxWCmYtRNPizq%2Fr0kE69nYjItofUx0gbTm3MNPTBKboHPqC4M99l9U%2BMBpu3WwZVmpIp1XLWk%2FymW2fYzPG&X-Amz-Signature=12f14afc13949bd6b3c2382ceb2028bc435c20f30a4d4d7256bb8739cd03cd78&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

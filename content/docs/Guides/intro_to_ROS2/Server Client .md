---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJL3HQNU%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFKSqXpl4AlMZlCtd8EWbZDKWgU4h%2BNfsqOBebtcyBGpAiEAixV%2BPBoXH9Oa3izh6t0JMSGzYdm1cpCQ3Hk9vNArNW0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfa5RWDzvqXlQNqnircAzgBcg82btpIQA8nEHIr6N2%2Bu%2FcDyj7DQkIo7%2BlRBvAVD8bhIEdeQl6l9Ps5HnwfRFeJfmXqwnRE%2FYII6v%2F7GaRqRCUJsRNynyyp%2BTopk2uMQ5cYZKLTP8l6N3V0LjAO5OVnhOi401Zu5uunmUBoTHzjuJQNa5vJWsycRgeyzPYSQe2KKoak46UJ7WcwCI5wSrfgCgLv2oCtoMWTcv0jKp48wjOhceLFeCmLhxRm1N5e53kYoy12uy4mKDRgI8yDF8H0dyqVaUN8Mgz2Fe2o%2BWl5EmOvDTXbsIYldl%2FZKgf4UckOuNSk20vbKL0AoseubpqKeHXD24AVKaN%2F%2FPaoIY34vFZOMsrSAgtxopw%2FsxezGhb5jKjQaIN9jPrgCBq0SSp3OyNEWddFNfLqiXOswllkN0yb%2FlhEfGHhAhz5ELf1QgcZGCEVH9FqNkxZeC0eCqWa1qy4mzIUAjQKFs3iwusoStkpTaD50BQDnpQdqjzKDs43ip7bbWmQdH7UJVNc7cR4TdrlbIwrKVRLpLNVJZL8CjSWQEwCMOrMf06nRz2j9xqCRMIbMJrBsutdjlQYtk%2Bw8xNYtHfW5O%2Fo8GdjPAcd3qV1OcYu9cAQGEvMTZVpvDIMBYn7m9l0HvKGMLbVtMwGOqUBTT%2BGCiXu2vogmOUMEiAL%2Bv2J1ib%2FVRACMyeZ7VmqJp2vHtB54JfMYC3NZs3o2wa8gytEgWZNO%2FrZyHadaKDyX7NQlxjCmOK%2FbscYo5uqQQoTvskA7PONoEspyk0f57hQz37bpZsoV8reiEmbrkih3WktZKMvlcuvQtWlalqvXaTQ2YMK5B2lrIgGPi0fukTZ58aq3rvGbU2KOmIlrMDZzSJp5%2F%2F2&X-Amz-Signature=788abea2d77d3b3f90d58299d450dfd1e042813f9c444cada55005e9551faffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJL3HQNU%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFKSqXpl4AlMZlCtd8EWbZDKWgU4h%2BNfsqOBebtcyBGpAiEAixV%2BPBoXH9Oa3izh6t0JMSGzYdm1cpCQ3Hk9vNArNW0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfa5RWDzvqXlQNqnircAzgBcg82btpIQA8nEHIr6N2%2Bu%2FcDyj7DQkIo7%2BlRBvAVD8bhIEdeQl6l9Ps5HnwfRFeJfmXqwnRE%2FYII6v%2F7GaRqRCUJsRNynyyp%2BTopk2uMQ5cYZKLTP8l6N3V0LjAO5OVnhOi401Zu5uunmUBoTHzjuJQNa5vJWsycRgeyzPYSQe2KKoak46UJ7WcwCI5wSrfgCgLv2oCtoMWTcv0jKp48wjOhceLFeCmLhxRm1N5e53kYoy12uy4mKDRgI8yDF8H0dyqVaUN8Mgz2Fe2o%2BWl5EmOvDTXbsIYldl%2FZKgf4UckOuNSk20vbKL0AoseubpqKeHXD24AVKaN%2F%2FPaoIY34vFZOMsrSAgtxopw%2FsxezGhb5jKjQaIN9jPrgCBq0SSp3OyNEWddFNfLqiXOswllkN0yb%2FlhEfGHhAhz5ELf1QgcZGCEVH9FqNkxZeC0eCqWa1qy4mzIUAjQKFs3iwusoStkpTaD50BQDnpQdqjzKDs43ip7bbWmQdH7UJVNc7cR4TdrlbIwrKVRLpLNVJZL8CjSWQEwCMOrMf06nRz2j9xqCRMIbMJrBsutdjlQYtk%2Bw8xNYtHfW5O%2Fo8GdjPAcd3qV1OcYu9cAQGEvMTZVpvDIMBYn7m9l0HvKGMLbVtMwGOqUBTT%2BGCiXu2vogmOUMEiAL%2Bv2J1ib%2FVRACMyeZ7VmqJp2vHtB54JfMYC3NZs3o2wa8gytEgWZNO%2FrZyHadaKDyX7NQlxjCmOK%2FbscYo5uqQQoTvskA7PONoEspyk0f57hQz37bpZsoV8reiEmbrkih3WktZKMvlcuvQtWlalqvXaTQ2YMK5B2lrIgGPi0fukTZ58aq3rvGbU2KOmIlrMDZzSJp5%2F%2F2&X-Amz-Signature=cc2ad6a9d8a72051fb7b8affea712cf98eb2106eb1c6e830dc893899e76a84a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJL3HQNU%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFKSqXpl4AlMZlCtd8EWbZDKWgU4h%2BNfsqOBebtcyBGpAiEAixV%2BPBoXH9Oa3izh6t0JMSGzYdm1cpCQ3Hk9vNArNW0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfa5RWDzvqXlQNqnircAzgBcg82btpIQA8nEHIr6N2%2Bu%2FcDyj7DQkIo7%2BlRBvAVD8bhIEdeQl6l9Ps5HnwfRFeJfmXqwnRE%2FYII6v%2F7GaRqRCUJsRNynyyp%2BTopk2uMQ5cYZKLTP8l6N3V0LjAO5OVnhOi401Zu5uunmUBoTHzjuJQNa5vJWsycRgeyzPYSQe2KKoak46UJ7WcwCI5wSrfgCgLv2oCtoMWTcv0jKp48wjOhceLFeCmLhxRm1N5e53kYoy12uy4mKDRgI8yDF8H0dyqVaUN8Mgz2Fe2o%2BWl5EmOvDTXbsIYldl%2FZKgf4UckOuNSk20vbKL0AoseubpqKeHXD24AVKaN%2F%2FPaoIY34vFZOMsrSAgtxopw%2FsxezGhb5jKjQaIN9jPrgCBq0SSp3OyNEWddFNfLqiXOswllkN0yb%2FlhEfGHhAhz5ELf1QgcZGCEVH9FqNkxZeC0eCqWa1qy4mzIUAjQKFs3iwusoStkpTaD50BQDnpQdqjzKDs43ip7bbWmQdH7UJVNc7cR4TdrlbIwrKVRLpLNVJZL8CjSWQEwCMOrMf06nRz2j9xqCRMIbMJrBsutdjlQYtk%2Bw8xNYtHfW5O%2Fo8GdjPAcd3qV1OcYu9cAQGEvMTZVpvDIMBYn7m9l0HvKGMLbVtMwGOqUBTT%2BGCiXu2vogmOUMEiAL%2Bv2J1ib%2FVRACMyeZ7VmqJp2vHtB54JfMYC3NZs3o2wa8gytEgWZNO%2FrZyHadaKDyX7NQlxjCmOK%2FbscYo5uqQQoTvskA7PONoEspyk0f57hQz37bpZsoV8reiEmbrkih3WktZKMvlcuvQtWlalqvXaTQ2YMK5B2lrIgGPi0fukTZ58aq3rvGbU2KOmIlrMDZzSJp5%2F%2F2&X-Amz-Signature=6d8efe4efc04325d5ecf409cc513e0bd06d125df056eebbea99b5cfbe54e35ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJL3HQNU%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFKSqXpl4AlMZlCtd8EWbZDKWgU4h%2BNfsqOBebtcyBGpAiEAixV%2BPBoXH9Oa3izh6t0JMSGzYdm1cpCQ3Hk9vNArNW0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfa5RWDzvqXlQNqnircAzgBcg82btpIQA8nEHIr6N2%2Bu%2FcDyj7DQkIo7%2BlRBvAVD8bhIEdeQl6l9Ps5HnwfRFeJfmXqwnRE%2FYII6v%2F7GaRqRCUJsRNynyyp%2BTopk2uMQ5cYZKLTP8l6N3V0LjAO5OVnhOi401Zu5uunmUBoTHzjuJQNa5vJWsycRgeyzPYSQe2KKoak46UJ7WcwCI5wSrfgCgLv2oCtoMWTcv0jKp48wjOhceLFeCmLhxRm1N5e53kYoy12uy4mKDRgI8yDF8H0dyqVaUN8Mgz2Fe2o%2BWl5EmOvDTXbsIYldl%2FZKgf4UckOuNSk20vbKL0AoseubpqKeHXD24AVKaN%2F%2FPaoIY34vFZOMsrSAgtxopw%2FsxezGhb5jKjQaIN9jPrgCBq0SSp3OyNEWddFNfLqiXOswllkN0yb%2FlhEfGHhAhz5ELf1QgcZGCEVH9FqNkxZeC0eCqWa1qy4mzIUAjQKFs3iwusoStkpTaD50BQDnpQdqjzKDs43ip7bbWmQdH7UJVNc7cR4TdrlbIwrKVRLpLNVJZL8CjSWQEwCMOrMf06nRz2j9xqCRMIbMJrBsutdjlQYtk%2Bw8xNYtHfW5O%2Fo8GdjPAcd3qV1OcYu9cAQGEvMTZVpvDIMBYn7m9l0HvKGMLbVtMwGOqUBTT%2BGCiXu2vogmOUMEiAL%2Bv2J1ib%2FVRACMyeZ7VmqJp2vHtB54JfMYC3NZs3o2wa8gytEgWZNO%2FrZyHadaKDyX7NQlxjCmOK%2FbscYo5uqQQoTvskA7PONoEspyk0f57hQz37bpZsoV8reiEmbrkih3WktZKMvlcuvQtWlalqvXaTQ2YMK5B2lrIgGPi0fukTZ58aq3rvGbU2KOmIlrMDZzSJp5%2F%2F2&X-Amz-Signature=0cb34a77b091d016dc357b957a39ff789f5cc0fee7dd06a4a7ba053fe7b56083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJL3HQNU%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFKSqXpl4AlMZlCtd8EWbZDKWgU4h%2BNfsqOBebtcyBGpAiEAixV%2BPBoXH9Oa3izh6t0JMSGzYdm1cpCQ3Hk9vNArNW0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfa5RWDzvqXlQNqnircAzgBcg82btpIQA8nEHIr6N2%2Bu%2FcDyj7DQkIo7%2BlRBvAVD8bhIEdeQl6l9Ps5HnwfRFeJfmXqwnRE%2FYII6v%2F7GaRqRCUJsRNynyyp%2BTopk2uMQ5cYZKLTP8l6N3V0LjAO5OVnhOi401Zu5uunmUBoTHzjuJQNa5vJWsycRgeyzPYSQe2KKoak46UJ7WcwCI5wSrfgCgLv2oCtoMWTcv0jKp48wjOhceLFeCmLhxRm1N5e53kYoy12uy4mKDRgI8yDF8H0dyqVaUN8Mgz2Fe2o%2BWl5EmOvDTXbsIYldl%2FZKgf4UckOuNSk20vbKL0AoseubpqKeHXD24AVKaN%2F%2FPaoIY34vFZOMsrSAgtxopw%2FsxezGhb5jKjQaIN9jPrgCBq0SSp3OyNEWddFNfLqiXOswllkN0yb%2FlhEfGHhAhz5ELf1QgcZGCEVH9FqNkxZeC0eCqWa1qy4mzIUAjQKFs3iwusoStkpTaD50BQDnpQdqjzKDs43ip7bbWmQdH7UJVNc7cR4TdrlbIwrKVRLpLNVJZL8CjSWQEwCMOrMf06nRz2j9xqCRMIbMJrBsutdjlQYtk%2Bw8xNYtHfW5O%2Fo8GdjPAcd3qV1OcYu9cAQGEvMTZVpvDIMBYn7m9l0HvKGMLbVtMwGOqUBTT%2BGCiXu2vogmOUMEiAL%2Bv2J1ib%2FVRACMyeZ7VmqJp2vHtB54JfMYC3NZs3o2wa8gytEgWZNO%2FrZyHadaKDyX7NQlxjCmOK%2FbscYo5uqQQoTvskA7PONoEspyk0f57hQz37bpZsoV8reiEmbrkih3WktZKMvlcuvQtWlalqvXaTQ2YMK5B2lrIgGPi0fukTZ58aq3rvGbU2KOmIlrMDZzSJp5%2F%2F2&X-Amz-Signature=f2b638f32c8fe4aaa87ca49ef5a9b1643c975fa5cdca449a390ef9208e4c8606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

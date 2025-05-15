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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AUJ6MQP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFkGk5wSXyH%2BVidOHQjAqXmNXEIftFWoJgJbTZKNhF5iAiEA5CnYAcQItU7sL3H4BTqGO2nlAM1t7IqDnoMcTXjpQFUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDd5HcwCqaQChKz3WyrcA1a9Py5rVIW5Iv%2FdhlqVdRrVeTMMuuhsVJaRvvfZoxR8gQei6%2FbM%2Bg6vaWKcyJHxqGpkzWLMjdzzNMeLxSxw6npt1TU794Js5fTYkZuxoidMS7W4jkuzsGyfA9drhzXOFiGIufanKpQE7rLNaH0v69y4vLNJJo04uWjivYtICsvATk5qxgwa9rG737VlNlx%2FUsfsKjuvrd07hzEM%2BfXpRvOYs6ORJoMatSWlan8xAQe%2FHSl4cYjawIi3Yo8G0aW4e6bZZHolVCaEYUzH0%2BLqLoaf2YDhi3UJs4%2FYabB4SFIat2tcdaziJJFrhpe1onaRbjEjRykEY1dN1w1b2a3BK7%2FC%2FHc7zUrn%2FsHH4OPlbsKpXhlf8hkEDl3eUDW3oaIDDvmDuJ2uJl7axWQ7x8RXdrfMyRHRSIY7acaYKUCE9m8txCuux4HMNB2mxV3eXOJ8ZG7pf3fTPK0uC08RHVBbw%2B5KvNsWtemDuQ7iDWKEzQQ6%2FPyj9sSqT8MmLGb1mkc19kPrKANAwprqw%2BJQVcwM1yMweLff13kE8FgCzS2uCBGtn%2F78qruIE8bEJSQF1GMFYQFSxdsAejgDs6B5iNvUz7wIITwmm7VgskegHQIaJAroM8niGD3TWkihmYduML%2BdlsEGOqUBVN%2BacqbN7K3PlIo27l1fb5IEn6IfXWdVVFtpY%2BXV2qi6OeboKAuQ9LJA5%2FTdSBCsodSrAuA4UcTxSdZO6O%2FwO0pnOY8uCsLZyLjD%2BUet17VJIONMbx2l6lmaO64FhYAKI6DxWZe5lQhkCx9TS%2Bbpr6PfNgBSbShXQ16n6JaIe2eGDszKWGrFwFb0GYdDns1P%2FMXfW26FjIopTSksjL%2FLsy0Dk%2F46&X-Amz-Signature=a9443410925bea96eb2f1492922d086ff52032b3ee6bc429be11d49918131169&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AUJ6MQP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFkGk5wSXyH%2BVidOHQjAqXmNXEIftFWoJgJbTZKNhF5iAiEA5CnYAcQItU7sL3H4BTqGO2nlAM1t7IqDnoMcTXjpQFUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDd5HcwCqaQChKz3WyrcA1a9Py5rVIW5Iv%2FdhlqVdRrVeTMMuuhsVJaRvvfZoxR8gQei6%2FbM%2Bg6vaWKcyJHxqGpkzWLMjdzzNMeLxSxw6npt1TU794Js5fTYkZuxoidMS7W4jkuzsGyfA9drhzXOFiGIufanKpQE7rLNaH0v69y4vLNJJo04uWjivYtICsvATk5qxgwa9rG737VlNlx%2FUsfsKjuvrd07hzEM%2BfXpRvOYs6ORJoMatSWlan8xAQe%2FHSl4cYjawIi3Yo8G0aW4e6bZZHolVCaEYUzH0%2BLqLoaf2YDhi3UJs4%2FYabB4SFIat2tcdaziJJFrhpe1onaRbjEjRykEY1dN1w1b2a3BK7%2FC%2FHc7zUrn%2FsHH4OPlbsKpXhlf8hkEDl3eUDW3oaIDDvmDuJ2uJl7axWQ7x8RXdrfMyRHRSIY7acaYKUCE9m8txCuux4HMNB2mxV3eXOJ8ZG7pf3fTPK0uC08RHVBbw%2B5KvNsWtemDuQ7iDWKEzQQ6%2FPyj9sSqT8MmLGb1mkc19kPrKANAwprqw%2BJQVcwM1yMweLff13kE8FgCzS2uCBGtn%2F78qruIE8bEJSQF1GMFYQFSxdsAejgDs6B5iNvUz7wIITwmm7VgskegHQIaJAroM8niGD3TWkihmYduML%2BdlsEGOqUBVN%2BacqbN7K3PlIo27l1fb5IEn6IfXWdVVFtpY%2BXV2qi6OeboKAuQ9LJA5%2FTdSBCsodSrAuA4UcTxSdZO6O%2FwO0pnOY8uCsLZyLjD%2BUet17VJIONMbx2l6lmaO64FhYAKI6DxWZe5lQhkCx9TS%2Bbpr6PfNgBSbShXQ16n6JaIe2eGDszKWGrFwFb0GYdDns1P%2FMXfW26FjIopTSksjL%2FLsy0Dk%2F46&X-Amz-Signature=9253a894faf253a6ef14d6b53f3499924c6e283dbf1e893322ebe1baeba68831&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AUJ6MQP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFkGk5wSXyH%2BVidOHQjAqXmNXEIftFWoJgJbTZKNhF5iAiEA5CnYAcQItU7sL3H4BTqGO2nlAM1t7IqDnoMcTXjpQFUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDd5HcwCqaQChKz3WyrcA1a9Py5rVIW5Iv%2FdhlqVdRrVeTMMuuhsVJaRvvfZoxR8gQei6%2FbM%2Bg6vaWKcyJHxqGpkzWLMjdzzNMeLxSxw6npt1TU794Js5fTYkZuxoidMS7W4jkuzsGyfA9drhzXOFiGIufanKpQE7rLNaH0v69y4vLNJJo04uWjivYtICsvATk5qxgwa9rG737VlNlx%2FUsfsKjuvrd07hzEM%2BfXpRvOYs6ORJoMatSWlan8xAQe%2FHSl4cYjawIi3Yo8G0aW4e6bZZHolVCaEYUzH0%2BLqLoaf2YDhi3UJs4%2FYabB4SFIat2tcdaziJJFrhpe1onaRbjEjRykEY1dN1w1b2a3BK7%2FC%2FHc7zUrn%2FsHH4OPlbsKpXhlf8hkEDl3eUDW3oaIDDvmDuJ2uJl7axWQ7x8RXdrfMyRHRSIY7acaYKUCE9m8txCuux4HMNB2mxV3eXOJ8ZG7pf3fTPK0uC08RHVBbw%2B5KvNsWtemDuQ7iDWKEzQQ6%2FPyj9sSqT8MmLGb1mkc19kPrKANAwprqw%2BJQVcwM1yMweLff13kE8FgCzS2uCBGtn%2F78qruIE8bEJSQF1GMFYQFSxdsAejgDs6B5iNvUz7wIITwmm7VgskegHQIaJAroM8niGD3TWkihmYduML%2BdlsEGOqUBVN%2BacqbN7K3PlIo27l1fb5IEn6IfXWdVVFtpY%2BXV2qi6OeboKAuQ9LJA5%2FTdSBCsodSrAuA4UcTxSdZO6O%2FwO0pnOY8uCsLZyLjD%2BUet17VJIONMbx2l6lmaO64FhYAKI6DxWZe5lQhkCx9TS%2Bbpr6PfNgBSbShXQ16n6JaIe2eGDszKWGrFwFb0GYdDns1P%2FMXfW26FjIopTSksjL%2FLsy0Dk%2F46&X-Amz-Signature=e2cc78699264c118aa0c2d72953e731e7711d897619e47c9726c423b49f9be42&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AUJ6MQP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFkGk5wSXyH%2BVidOHQjAqXmNXEIftFWoJgJbTZKNhF5iAiEA5CnYAcQItU7sL3H4BTqGO2nlAM1t7IqDnoMcTXjpQFUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDd5HcwCqaQChKz3WyrcA1a9Py5rVIW5Iv%2FdhlqVdRrVeTMMuuhsVJaRvvfZoxR8gQei6%2FbM%2Bg6vaWKcyJHxqGpkzWLMjdzzNMeLxSxw6npt1TU794Js5fTYkZuxoidMS7W4jkuzsGyfA9drhzXOFiGIufanKpQE7rLNaH0v69y4vLNJJo04uWjivYtICsvATk5qxgwa9rG737VlNlx%2FUsfsKjuvrd07hzEM%2BfXpRvOYs6ORJoMatSWlan8xAQe%2FHSl4cYjawIi3Yo8G0aW4e6bZZHolVCaEYUzH0%2BLqLoaf2YDhi3UJs4%2FYabB4SFIat2tcdaziJJFrhpe1onaRbjEjRykEY1dN1w1b2a3BK7%2FC%2FHc7zUrn%2FsHH4OPlbsKpXhlf8hkEDl3eUDW3oaIDDvmDuJ2uJl7axWQ7x8RXdrfMyRHRSIY7acaYKUCE9m8txCuux4HMNB2mxV3eXOJ8ZG7pf3fTPK0uC08RHVBbw%2B5KvNsWtemDuQ7iDWKEzQQ6%2FPyj9sSqT8MmLGb1mkc19kPrKANAwprqw%2BJQVcwM1yMweLff13kE8FgCzS2uCBGtn%2F78qruIE8bEJSQF1GMFYQFSxdsAejgDs6B5iNvUz7wIITwmm7VgskegHQIaJAroM8niGD3TWkihmYduML%2BdlsEGOqUBVN%2BacqbN7K3PlIo27l1fb5IEn6IfXWdVVFtpY%2BXV2qi6OeboKAuQ9LJA5%2FTdSBCsodSrAuA4UcTxSdZO6O%2FwO0pnOY8uCsLZyLjD%2BUet17VJIONMbx2l6lmaO64FhYAKI6DxWZe5lQhkCx9TS%2Bbpr6PfNgBSbShXQ16n6JaIe2eGDszKWGrFwFb0GYdDns1P%2FMXfW26FjIopTSksjL%2FLsy0Dk%2F46&X-Amz-Signature=2f56ad010f1041eb8164a2d048057027caa6e90cf2b444092b1812a2370f50c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AUJ6MQP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFkGk5wSXyH%2BVidOHQjAqXmNXEIftFWoJgJbTZKNhF5iAiEA5CnYAcQItU7sL3H4BTqGO2nlAM1t7IqDnoMcTXjpQFUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDd5HcwCqaQChKz3WyrcA1a9Py5rVIW5Iv%2FdhlqVdRrVeTMMuuhsVJaRvvfZoxR8gQei6%2FbM%2Bg6vaWKcyJHxqGpkzWLMjdzzNMeLxSxw6npt1TU794Js5fTYkZuxoidMS7W4jkuzsGyfA9drhzXOFiGIufanKpQE7rLNaH0v69y4vLNJJo04uWjivYtICsvATk5qxgwa9rG737VlNlx%2FUsfsKjuvrd07hzEM%2BfXpRvOYs6ORJoMatSWlan8xAQe%2FHSl4cYjawIi3Yo8G0aW4e6bZZHolVCaEYUzH0%2BLqLoaf2YDhi3UJs4%2FYabB4SFIat2tcdaziJJFrhpe1onaRbjEjRykEY1dN1w1b2a3BK7%2FC%2FHc7zUrn%2FsHH4OPlbsKpXhlf8hkEDl3eUDW3oaIDDvmDuJ2uJl7axWQ7x8RXdrfMyRHRSIY7acaYKUCE9m8txCuux4HMNB2mxV3eXOJ8ZG7pf3fTPK0uC08RHVBbw%2B5KvNsWtemDuQ7iDWKEzQQ6%2FPyj9sSqT8MmLGb1mkc19kPrKANAwprqw%2BJQVcwM1yMweLff13kE8FgCzS2uCBGtn%2F78qruIE8bEJSQF1GMFYQFSxdsAejgDs6B5iNvUz7wIITwmm7VgskegHQIaJAroM8niGD3TWkihmYduML%2BdlsEGOqUBVN%2BacqbN7K3PlIo27l1fb5IEn6IfXWdVVFtpY%2BXV2qi6OeboKAuQ9LJA5%2FTdSBCsodSrAuA4UcTxSdZO6O%2FwO0pnOY8uCsLZyLjD%2BUet17VJIONMbx2l6lmaO64FhYAKI6DxWZe5lQhkCx9TS%2Bbpr6PfNgBSbShXQ16n6JaIe2eGDszKWGrFwFb0GYdDns1P%2FMXfW26FjIopTSksjL%2FLsy0Dk%2F46&X-Amz-Signature=fd3f9a164d5b8df4f60f0cb3728a7b308549f8fc704e6284828455a45a240a8c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

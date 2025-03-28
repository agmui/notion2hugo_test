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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAOJYK6X%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPmNnc5JqHvE9Ti9S5g2VmJikpgxO3%2FGVkYxDh%2BH5VWAiEAqF6olh4HihwBaxth02t24skEiFQ%2B5oUDijGaAhBJJt4q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLKpyaKoaFqu5jYi7CrcA7BK99vfJQSwz1R4os7CVixltM48cSIgSLpVax4DkOfptaUgKq94fZsAcl6bAX%2BDimVp3PUURuWETzuUy9pdGNL6BzDDgi5ZdOO6Ty0tHM99HOflYOWWU7diHhzZX4Qij9il6Y809x4%2FcLLpQGmn9lYPRFapuX5cfKuShTUr1YM88OuJ9a9wQxEiVN0GD8OFSDeArpJ6rWGbES%2FyICGIuCIldBnsUOkrGQdtfjtK%2FvYOlX4QCWNHzercNrfFcVGI07%2B09hw9ZeLh07GBreyPovCeQqujD1oW%2FmMPCaAKGaOCzM%2FA0%2BYO7mNxD%2ByK5W1p5WgUpkHlLV5JSsOPNb2AAK5aGPWPz%2BKQkLt%2F5iLXH6vTa14SToA3j0PmGBlHM%2FCRoxqRenzwoX2fZX8Vi9UzgYRp1CEO3csG0X0LDfZMYoI7NC0zm0230euzkxCVMdzYtpRbtPsg0pV63dLfDp%2BHFYYOfr4CfyxV6yuTngBUG3mUy9WzpMbwtDt8mF3UxfYdsuM4T%2BI7Hq57uIgLckgK1OXb4UQZcaT2gao82OieYDPVBZhCPqpWF5JETaxFjGr%2BE0lvtdZ1ehNztAbLn6knTkFkDFJql0VBuLpF%2FHO4LxO%2FguJIyM132Cj1trruMPyimb8GOqUB%2FWgGeYfMXx04tnR7kZuMFLB6t61T3ekn6UdcCBttek29MkkSnkRy474Us9qajApZCDT0kzZ9bWfzwl9bL7jmcFc%2BYKxPd5OVzEuT5juX5vjkyNGNYKSDc%2FxOpZShGaH%2F8HebjALBFVdQ4Sp%2F8RMZ2pZ9Xs%2F1V7ZhldVyLrBRL0UhqE7PolWHApTWjkb0TeHq%2BKEH3OlWERKOiewXhvAHlUgRaEmU&X-Amz-Signature=d7ae1ca70b7c74d7f390c3412ed1c737263a235e44c907af961ff6e7b3893ffb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAOJYK6X%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPmNnc5JqHvE9Ti9S5g2VmJikpgxO3%2FGVkYxDh%2BH5VWAiEAqF6olh4HihwBaxth02t24skEiFQ%2B5oUDijGaAhBJJt4q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLKpyaKoaFqu5jYi7CrcA7BK99vfJQSwz1R4os7CVixltM48cSIgSLpVax4DkOfptaUgKq94fZsAcl6bAX%2BDimVp3PUURuWETzuUy9pdGNL6BzDDgi5ZdOO6Ty0tHM99HOflYOWWU7diHhzZX4Qij9il6Y809x4%2FcLLpQGmn9lYPRFapuX5cfKuShTUr1YM88OuJ9a9wQxEiVN0GD8OFSDeArpJ6rWGbES%2FyICGIuCIldBnsUOkrGQdtfjtK%2FvYOlX4QCWNHzercNrfFcVGI07%2B09hw9ZeLh07GBreyPovCeQqujD1oW%2FmMPCaAKGaOCzM%2FA0%2BYO7mNxD%2ByK5W1p5WgUpkHlLV5JSsOPNb2AAK5aGPWPz%2BKQkLt%2F5iLXH6vTa14SToA3j0PmGBlHM%2FCRoxqRenzwoX2fZX8Vi9UzgYRp1CEO3csG0X0LDfZMYoI7NC0zm0230euzkxCVMdzYtpRbtPsg0pV63dLfDp%2BHFYYOfr4CfyxV6yuTngBUG3mUy9WzpMbwtDt8mF3UxfYdsuM4T%2BI7Hq57uIgLckgK1OXb4UQZcaT2gao82OieYDPVBZhCPqpWF5JETaxFjGr%2BE0lvtdZ1ehNztAbLn6knTkFkDFJql0VBuLpF%2FHO4LxO%2FguJIyM132Cj1trruMPyimb8GOqUB%2FWgGeYfMXx04tnR7kZuMFLB6t61T3ekn6UdcCBttek29MkkSnkRy474Us9qajApZCDT0kzZ9bWfzwl9bL7jmcFc%2BYKxPd5OVzEuT5juX5vjkyNGNYKSDc%2FxOpZShGaH%2F8HebjALBFVdQ4Sp%2F8RMZ2pZ9Xs%2F1V7ZhldVyLrBRL0UhqE7PolWHApTWjkb0TeHq%2BKEH3OlWERKOiewXhvAHlUgRaEmU&X-Amz-Signature=e38847ea373adc1d16c912234a29135ea0105427dfaaef070e89901c23383f8b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAOJYK6X%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPmNnc5JqHvE9Ti9S5g2VmJikpgxO3%2FGVkYxDh%2BH5VWAiEAqF6olh4HihwBaxth02t24skEiFQ%2B5oUDijGaAhBJJt4q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLKpyaKoaFqu5jYi7CrcA7BK99vfJQSwz1R4os7CVixltM48cSIgSLpVax4DkOfptaUgKq94fZsAcl6bAX%2BDimVp3PUURuWETzuUy9pdGNL6BzDDgi5ZdOO6Ty0tHM99HOflYOWWU7diHhzZX4Qij9il6Y809x4%2FcLLpQGmn9lYPRFapuX5cfKuShTUr1YM88OuJ9a9wQxEiVN0GD8OFSDeArpJ6rWGbES%2FyICGIuCIldBnsUOkrGQdtfjtK%2FvYOlX4QCWNHzercNrfFcVGI07%2B09hw9ZeLh07GBreyPovCeQqujD1oW%2FmMPCaAKGaOCzM%2FA0%2BYO7mNxD%2ByK5W1p5WgUpkHlLV5JSsOPNb2AAK5aGPWPz%2BKQkLt%2F5iLXH6vTa14SToA3j0PmGBlHM%2FCRoxqRenzwoX2fZX8Vi9UzgYRp1CEO3csG0X0LDfZMYoI7NC0zm0230euzkxCVMdzYtpRbtPsg0pV63dLfDp%2BHFYYOfr4CfyxV6yuTngBUG3mUy9WzpMbwtDt8mF3UxfYdsuM4T%2BI7Hq57uIgLckgK1OXb4UQZcaT2gao82OieYDPVBZhCPqpWF5JETaxFjGr%2BE0lvtdZ1ehNztAbLn6knTkFkDFJql0VBuLpF%2FHO4LxO%2FguJIyM132Cj1trruMPyimb8GOqUB%2FWgGeYfMXx04tnR7kZuMFLB6t61T3ekn6UdcCBttek29MkkSnkRy474Us9qajApZCDT0kzZ9bWfzwl9bL7jmcFc%2BYKxPd5OVzEuT5juX5vjkyNGNYKSDc%2FxOpZShGaH%2F8HebjALBFVdQ4Sp%2F8RMZ2pZ9Xs%2F1V7ZhldVyLrBRL0UhqE7PolWHApTWjkb0TeHq%2BKEH3OlWERKOiewXhvAHlUgRaEmU&X-Amz-Signature=9805678778709a04a8606f5d2031de979992f4255c85ef45c3456253d46c01be&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAOJYK6X%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPmNnc5JqHvE9Ti9S5g2VmJikpgxO3%2FGVkYxDh%2BH5VWAiEAqF6olh4HihwBaxth02t24skEiFQ%2B5oUDijGaAhBJJt4q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLKpyaKoaFqu5jYi7CrcA7BK99vfJQSwz1R4os7CVixltM48cSIgSLpVax4DkOfptaUgKq94fZsAcl6bAX%2BDimVp3PUURuWETzuUy9pdGNL6BzDDgi5ZdOO6Ty0tHM99HOflYOWWU7diHhzZX4Qij9il6Y809x4%2FcLLpQGmn9lYPRFapuX5cfKuShTUr1YM88OuJ9a9wQxEiVN0GD8OFSDeArpJ6rWGbES%2FyICGIuCIldBnsUOkrGQdtfjtK%2FvYOlX4QCWNHzercNrfFcVGI07%2B09hw9ZeLh07GBreyPovCeQqujD1oW%2FmMPCaAKGaOCzM%2FA0%2BYO7mNxD%2ByK5W1p5WgUpkHlLV5JSsOPNb2AAK5aGPWPz%2BKQkLt%2F5iLXH6vTa14SToA3j0PmGBlHM%2FCRoxqRenzwoX2fZX8Vi9UzgYRp1CEO3csG0X0LDfZMYoI7NC0zm0230euzkxCVMdzYtpRbtPsg0pV63dLfDp%2BHFYYOfr4CfyxV6yuTngBUG3mUy9WzpMbwtDt8mF3UxfYdsuM4T%2BI7Hq57uIgLckgK1OXb4UQZcaT2gao82OieYDPVBZhCPqpWF5JETaxFjGr%2BE0lvtdZ1ehNztAbLn6knTkFkDFJql0VBuLpF%2FHO4LxO%2FguJIyM132Cj1trruMPyimb8GOqUB%2FWgGeYfMXx04tnR7kZuMFLB6t61T3ekn6UdcCBttek29MkkSnkRy474Us9qajApZCDT0kzZ9bWfzwl9bL7jmcFc%2BYKxPd5OVzEuT5juX5vjkyNGNYKSDc%2FxOpZShGaH%2F8HebjALBFVdQ4Sp%2F8RMZ2pZ9Xs%2F1V7ZhldVyLrBRL0UhqE7PolWHApTWjkb0TeHq%2BKEH3OlWERKOiewXhvAHlUgRaEmU&X-Amz-Signature=1fa5c30e4b333cc6fbd3ad8e750f1c24b6b958527e08c1a771889da6bceff6a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAOJYK6X%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPmNnc5JqHvE9Ti9S5g2VmJikpgxO3%2FGVkYxDh%2BH5VWAiEAqF6olh4HihwBaxth02t24skEiFQ%2B5oUDijGaAhBJJt4q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLKpyaKoaFqu5jYi7CrcA7BK99vfJQSwz1R4os7CVixltM48cSIgSLpVax4DkOfptaUgKq94fZsAcl6bAX%2BDimVp3PUURuWETzuUy9pdGNL6BzDDgi5ZdOO6Ty0tHM99HOflYOWWU7diHhzZX4Qij9il6Y809x4%2FcLLpQGmn9lYPRFapuX5cfKuShTUr1YM88OuJ9a9wQxEiVN0GD8OFSDeArpJ6rWGbES%2FyICGIuCIldBnsUOkrGQdtfjtK%2FvYOlX4QCWNHzercNrfFcVGI07%2B09hw9ZeLh07GBreyPovCeQqujD1oW%2FmMPCaAKGaOCzM%2FA0%2BYO7mNxD%2ByK5W1p5WgUpkHlLV5JSsOPNb2AAK5aGPWPz%2BKQkLt%2F5iLXH6vTa14SToA3j0PmGBlHM%2FCRoxqRenzwoX2fZX8Vi9UzgYRp1CEO3csG0X0LDfZMYoI7NC0zm0230euzkxCVMdzYtpRbtPsg0pV63dLfDp%2BHFYYOfr4CfyxV6yuTngBUG3mUy9WzpMbwtDt8mF3UxfYdsuM4T%2BI7Hq57uIgLckgK1OXb4UQZcaT2gao82OieYDPVBZhCPqpWF5JETaxFjGr%2BE0lvtdZ1ehNztAbLn6knTkFkDFJql0VBuLpF%2FHO4LxO%2FguJIyM132Cj1trruMPyimb8GOqUB%2FWgGeYfMXx04tnR7kZuMFLB6t61T3ekn6UdcCBttek29MkkSnkRy474Us9qajApZCDT0kzZ9bWfzwl9bL7jmcFc%2BYKxPd5OVzEuT5juX5vjkyNGNYKSDc%2FxOpZShGaH%2F8HebjALBFVdQ4Sp%2F8RMZ2pZ9Xs%2F1V7ZhldVyLrBRL0UhqE7PolWHApTWjkb0TeHq%2BKEH3OlWERKOiewXhvAHlUgRaEmU&X-Amz-Signature=332700edb21d78b207760207c0760c7a844899a5db861c3d2367fbb43fa29786&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

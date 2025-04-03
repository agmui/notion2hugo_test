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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RWPVKZY%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAYu9JYbLvBEx3pdgWuvAPBseF0IwmpqHru5tXZeu4aAiEAw3ujCQmW9V9vAwE%2FV03wwPEomK25nB5bH01EK%2BZs6GsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBFW5WICP6HTNwerircA5A5jwqH3ruKRgPC3n2HngCa9V%2B3mlaN552izv%2BP5ojix7kgWlhL%2F83WTrBh6o8lw5xclaTLC3eLlGppr%2FvndC1rExzZlJBWadLEWgOEBFViaJNPEVyZFT7xydc7XIxpVUMkl7cX5pg3nCPY%2BKmdcibXPp6U3eGzhAOegGw6PmV80M0PyT98Tn8YM4vjs%2B6%2ByAF0L2dSEV4lrNdBpsHLnskaYYsk7pWQ5FO09Xqa%2BLzTDD9FkPyQjxYT9qPS3zs8ev0XbfPYnYYK7C9N%2FEwm95VUFX%2FkQCcMY8y3q7pzu%2BNY0rSDE1lHx0%2BOiL43Ki7xdawf%2FrE9YlAG8CQhI%2FIbB29%2BVUJ0P7p8tUfmxcpYBqz01jSFb%2Fyj0crou%2Fb5pIKw1I2YyXkdRIVz%2FhQ8aP%2BfI1VTYQ1MkzObm%2F8t9JILlpp%2BeB83SqfevQWNe1VjiJ8x5xXVnix87YhfV7FHHT4Foxa28ep6Asapf8DLVwGCoaCNMriDkzIblEtRx875KnCoiYeiszbBW5UXoGIxwRNRrJQXIExwH%2FjXYcdOTtGc5shMh0B7vPoWvQZhpx0gN2RiN0r2yGZEKW%2FSowu9DDex8x%2B2Y%2BoZ4Se%2BBU5WbCB2rl7TTA%2B5i7zcuZ5f2MASMNCEu78GOqUB2Mz%2FbrW5vNdvPmpFORBPM85%2B7jhZ9nZdV6ViZbRFNv4dSJW3qgC3fmYUiIdP8gYJ1R0ZDTaaFMdKzdlGpjec7qAwdPn8oIR9dLDm%2BVGqzH2h71MfIxt3iY3z%2BzkKzDzYXzTiYhhNV9a7D6Mv8FHXRghoHULlX7b2bgpa9OaYA7IIeX4wECuYo18mHQ5fWhXPzHRL999m2QvF9CzlX7kGJYNP0eT9&X-Amz-Signature=113a82701a6ab28821bed21b73c70eba3a78d10114fb402f04f3c5e53890ff86&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RWPVKZY%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAYu9JYbLvBEx3pdgWuvAPBseF0IwmpqHru5tXZeu4aAiEAw3ujCQmW9V9vAwE%2FV03wwPEomK25nB5bH01EK%2BZs6GsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBFW5WICP6HTNwerircA5A5jwqH3ruKRgPC3n2HngCa9V%2B3mlaN552izv%2BP5ojix7kgWlhL%2F83WTrBh6o8lw5xclaTLC3eLlGppr%2FvndC1rExzZlJBWadLEWgOEBFViaJNPEVyZFT7xydc7XIxpVUMkl7cX5pg3nCPY%2BKmdcibXPp6U3eGzhAOegGw6PmV80M0PyT98Tn8YM4vjs%2B6%2ByAF0L2dSEV4lrNdBpsHLnskaYYsk7pWQ5FO09Xqa%2BLzTDD9FkPyQjxYT9qPS3zs8ev0XbfPYnYYK7C9N%2FEwm95VUFX%2FkQCcMY8y3q7pzu%2BNY0rSDE1lHx0%2BOiL43Ki7xdawf%2FrE9YlAG8CQhI%2FIbB29%2BVUJ0P7p8tUfmxcpYBqz01jSFb%2Fyj0crou%2Fb5pIKw1I2YyXkdRIVz%2FhQ8aP%2BfI1VTYQ1MkzObm%2F8t9JILlpp%2BeB83SqfevQWNe1VjiJ8x5xXVnix87YhfV7FHHT4Foxa28ep6Asapf8DLVwGCoaCNMriDkzIblEtRx875KnCoiYeiszbBW5UXoGIxwRNRrJQXIExwH%2FjXYcdOTtGc5shMh0B7vPoWvQZhpx0gN2RiN0r2yGZEKW%2FSowu9DDex8x%2B2Y%2BoZ4Se%2BBU5WbCB2rl7TTA%2B5i7zcuZ5f2MASMNCEu78GOqUB2Mz%2FbrW5vNdvPmpFORBPM85%2B7jhZ9nZdV6ViZbRFNv4dSJW3qgC3fmYUiIdP8gYJ1R0ZDTaaFMdKzdlGpjec7qAwdPn8oIR9dLDm%2BVGqzH2h71MfIxt3iY3z%2BzkKzDzYXzTiYhhNV9a7D6Mv8FHXRghoHULlX7b2bgpa9OaYA7IIeX4wECuYo18mHQ5fWhXPzHRL999m2QvF9CzlX7kGJYNP0eT9&X-Amz-Signature=6bb7d9e4494b7a39abb24a73d5a66f28c1fb973e8493d9d7a2f39889a845b50d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RWPVKZY%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAYu9JYbLvBEx3pdgWuvAPBseF0IwmpqHru5tXZeu4aAiEAw3ujCQmW9V9vAwE%2FV03wwPEomK25nB5bH01EK%2BZs6GsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBFW5WICP6HTNwerircA5A5jwqH3ruKRgPC3n2HngCa9V%2B3mlaN552izv%2BP5ojix7kgWlhL%2F83WTrBh6o8lw5xclaTLC3eLlGppr%2FvndC1rExzZlJBWadLEWgOEBFViaJNPEVyZFT7xydc7XIxpVUMkl7cX5pg3nCPY%2BKmdcibXPp6U3eGzhAOegGw6PmV80M0PyT98Tn8YM4vjs%2B6%2ByAF0L2dSEV4lrNdBpsHLnskaYYsk7pWQ5FO09Xqa%2BLzTDD9FkPyQjxYT9qPS3zs8ev0XbfPYnYYK7C9N%2FEwm95VUFX%2FkQCcMY8y3q7pzu%2BNY0rSDE1lHx0%2BOiL43Ki7xdawf%2FrE9YlAG8CQhI%2FIbB29%2BVUJ0P7p8tUfmxcpYBqz01jSFb%2Fyj0crou%2Fb5pIKw1I2YyXkdRIVz%2FhQ8aP%2BfI1VTYQ1MkzObm%2F8t9JILlpp%2BeB83SqfevQWNe1VjiJ8x5xXVnix87YhfV7FHHT4Foxa28ep6Asapf8DLVwGCoaCNMriDkzIblEtRx875KnCoiYeiszbBW5UXoGIxwRNRrJQXIExwH%2FjXYcdOTtGc5shMh0B7vPoWvQZhpx0gN2RiN0r2yGZEKW%2FSowu9DDex8x%2B2Y%2BoZ4Se%2BBU5WbCB2rl7TTA%2B5i7zcuZ5f2MASMNCEu78GOqUB2Mz%2FbrW5vNdvPmpFORBPM85%2B7jhZ9nZdV6ViZbRFNv4dSJW3qgC3fmYUiIdP8gYJ1R0ZDTaaFMdKzdlGpjec7qAwdPn8oIR9dLDm%2BVGqzH2h71MfIxt3iY3z%2BzkKzDzYXzTiYhhNV9a7D6Mv8FHXRghoHULlX7b2bgpa9OaYA7IIeX4wECuYo18mHQ5fWhXPzHRL999m2QvF9CzlX7kGJYNP0eT9&X-Amz-Signature=d02f59ff05b95a16485b1d5c31a0929f18c250c8bcf4720c27dafc232f10438f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RWPVKZY%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAYu9JYbLvBEx3pdgWuvAPBseF0IwmpqHru5tXZeu4aAiEAw3ujCQmW9V9vAwE%2FV03wwPEomK25nB5bH01EK%2BZs6GsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBFW5WICP6HTNwerircA5A5jwqH3ruKRgPC3n2HngCa9V%2B3mlaN552izv%2BP5ojix7kgWlhL%2F83WTrBh6o8lw5xclaTLC3eLlGppr%2FvndC1rExzZlJBWadLEWgOEBFViaJNPEVyZFT7xydc7XIxpVUMkl7cX5pg3nCPY%2BKmdcibXPp6U3eGzhAOegGw6PmV80M0PyT98Tn8YM4vjs%2B6%2ByAF0L2dSEV4lrNdBpsHLnskaYYsk7pWQ5FO09Xqa%2BLzTDD9FkPyQjxYT9qPS3zs8ev0XbfPYnYYK7C9N%2FEwm95VUFX%2FkQCcMY8y3q7pzu%2BNY0rSDE1lHx0%2BOiL43Ki7xdawf%2FrE9YlAG8CQhI%2FIbB29%2BVUJ0P7p8tUfmxcpYBqz01jSFb%2Fyj0crou%2Fb5pIKw1I2YyXkdRIVz%2FhQ8aP%2BfI1VTYQ1MkzObm%2F8t9JILlpp%2BeB83SqfevQWNe1VjiJ8x5xXVnix87YhfV7FHHT4Foxa28ep6Asapf8DLVwGCoaCNMriDkzIblEtRx875KnCoiYeiszbBW5UXoGIxwRNRrJQXIExwH%2FjXYcdOTtGc5shMh0B7vPoWvQZhpx0gN2RiN0r2yGZEKW%2FSowu9DDex8x%2B2Y%2BoZ4Se%2BBU5WbCB2rl7TTA%2B5i7zcuZ5f2MASMNCEu78GOqUB2Mz%2FbrW5vNdvPmpFORBPM85%2B7jhZ9nZdV6ViZbRFNv4dSJW3qgC3fmYUiIdP8gYJ1R0ZDTaaFMdKzdlGpjec7qAwdPn8oIR9dLDm%2BVGqzH2h71MfIxt3iY3z%2BzkKzDzYXzTiYhhNV9a7D6Mv8FHXRghoHULlX7b2bgpa9OaYA7IIeX4wECuYo18mHQ5fWhXPzHRL999m2QvF9CzlX7kGJYNP0eT9&X-Amz-Signature=a8dff2657734bc29b95b6c13be1ccd5f51c0dfb1b055a5bd047b2be8f4a0ea41&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RWPVKZY%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAYu9JYbLvBEx3pdgWuvAPBseF0IwmpqHru5tXZeu4aAiEAw3ujCQmW9V9vAwE%2FV03wwPEomK25nB5bH01EK%2BZs6GsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBFW5WICP6HTNwerircA5A5jwqH3ruKRgPC3n2HngCa9V%2B3mlaN552izv%2BP5ojix7kgWlhL%2F83WTrBh6o8lw5xclaTLC3eLlGppr%2FvndC1rExzZlJBWadLEWgOEBFViaJNPEVyZFT7xydc7XIxpVUMkl7cX5pg3nCPY%2BKmdcibXPp6U3eGzhAOegGw6PmV80M0PyT98Tn8YM4vjs%2B6%2ByAF0L2dSEV4lrNdBpsHLnskaYYsk7pWQ5FO09Xqa%2BLzTDD9FkPyQjxYT9qPS3zs8ev0XbfPYnYYK7C9N%2FEwm95VUFX%2FkQCcMY8y3q7pzu%2BNY0rSDE1lHx0%2BOiL43Ki7xdawf%2FrE9YlAG8CQhI%2FIbB29%2BVUJ0P7p8tUfmxcpYBqz01jSFb%2Fyj0crou%2Fb5pIKw1I2YyXkdRIVz%2FhQ8aP%2BfI1VTYQ1MkzObm%2F8t9JILlpp%2BeB83SqfevQWNe1VjiJ8x5xXVnix87YhfV7FHHT4Foxa28ep6Asapf8DLVwGCoaCNMriDkzIblEtRx875KnCoiYeiszbBW5UXoGIxwRNRrJQXIExwH%2FjXYcdOTtGc5shMh0B7vPoWvQZhpx0gN2RiN0r2yGZEKW%2FSowu9DDex8x%2B2Y%2BoZ4Se%2BBU5WbCB2rl7TTA%2B5i7zcuZ5f2MASMNCEu78GOqUB2Mz%2FbrW5vNdvPmpFORBPM85%2B7jhZ9nZdV6ViZbRFNv4dSJW3qgC3fmYUiIdP8gYJ1R0ZDTaaFMdKzdlGpjec7qAwdPn8oIR9dLDm%2BVGqzH2h71MfIxt3iY3z%2BzkKzDzYXzTiYhhNV9a7D6Mv8FHXRghoHULlX7b2bgpa9OaYA7IIeX4wECuYo18mHQ5fWhXPzHRL999m2QvF9CzlX7kGJYNP0eT9&X-Amz-Signature=b82e79fa7b124b009204781e17d29e1cc1201fe7f5db18ea0a2131fa4ca03e91&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

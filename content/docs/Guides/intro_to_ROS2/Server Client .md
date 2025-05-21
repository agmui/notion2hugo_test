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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJO6E2RS%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGO808tPEibbsoJoHNYXAD%2F9O31MQDT7QVCsfomCD%2Bw1AiB8REd%2B%2Bpm4ZGD6JOVnXotbPvMPkit56RBNKOQ3GfDPsCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJw9ZRF2NvnoPh5y1KtwDSDqCrbIMF%2FBv2be%2Fn7wkVBcyOXEB0dmSK4y8mRcIjKw2oR1Y3PMSBJtBF1oolkZ2S88GX5JI0RgeBXcwaX5Uaq1Itcd9WsH1w1Jyqm9xJb4I71EUOcANELMum2yCZMq70xEF6yDrHSjBE1lFO2TemMcJTlCuII7rS1%2BcC9EEXeMHvJu2QZJ7ZoDuFFJEE61pr9XPes5kY3UrTR5lap9Mf%2B%2F3oN8mNTzzQM0%2FenHJx5YUVbpKdDkJ8WX0EdRRmM2LSqjgaqDSHLfSz5L5UhDx0heebqHyKjKH5Vm60nAxKTQ5qTrOUnalhQOMWJUUQfKbyHjLmf5%2BRO9lVBDtt%2FyupnolOvHTmdT%2F20ty%2FvrDIcwephv7dZNRcSsmOOyyYOnjl%2BDBgOFDyf0NJM6zLU5mJEI4KBcmcddmOznfWlwre1Iq9jrpGz5iVLBpL3UNJZqJnYp8GOl4gNvdwME3vohVPG82xK1oROxPdft6o8xF9xwz0%2Be8XmQlrQPrWEL9GXIIy6KnvbDo3iYyFuCEXFo0C4ehUpYqF9joQmi42GFTJoL%2FKjHa8LKXy2wH6hJMgmlDnXVM1b6BsGwm4GSs9QZs%2Bu6GgO0QTq93EGzJ50gc37e%2Bg6Z0Kac1ceiIAWYw7u21wQY6pgE9GQxu%2BShvcxz9cQEg%2FK%2F16duPAw2TazdfTqeVMxt3itW4EnLTaIRpX2On24qi0ykgzPnocRhhjAXSve7VWaK%2FX9IILXX5OFFnJGYlFMqOxFqDVQFYmPBHyHFIAVQfx4veNIsWBDLJta7oG9et%2BkJ0d6L%2FDBkfN%2FeZCsdWLkLYgyWWOpdU%2B9M0tI2FtzqUVs8lYdc%2BO122vjOTRJkZ9Neqjg7A0%2B29&X-Amz-Signature=1d792ce048879a321d6d1e4b86c4a80431d5f4ad349c5fe8f36857c49c437d74&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJO6E2RS%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGO808tPEibbsoJoHNYXAD%2F9O31MQDT7QVCsfomCD%2Bw1AiB8REd%2B%2Bpm4ZGD6JOVnXotbPvMPkit56RBNKOQ3GfDPsCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJw9ZRF2NvnoPh5y1KtwDSDqCrbIMF%2FBv2be%2Fn7wkVBcyOXEB0dmSK4y8mRcIjKw2oR1Y3PMSBJtBF1oolkZ2S88GX5JI0RgeBXcwaX5Uaq1Itcd9WsH1w1Jyqm9xJb4I71EUOcANELMum2yCZMq70xEF6yDrHSjBE1lFO2TemMcJTlCuII7rS1%2BcC9EEXeMHvJu2QZJ7ZoDuFFJEE61pr9XPes5kY3UrTR5lap9Mf%2B%2F3oN8mNTzzQM0%2FenHJx5YUVbpKdDkJ8WX0EdRRmM2LSqjgaqDSHLfSz5L5UhDx0heebqHyKjKH5Vm60nAxKTQ5qTrOUnalhQOMWJUUQfKbyHjLmf5%2BRO9lVBDtt%2FyupnolOvHTmdT%2F20ty%2FvrDIcwephv7dZNRcSsmOOyyYOnjl%2BDBgOFDyf0NJM6zLU5mJEI4KBcmcddmOznfWlwre1Iq9jrpGz5iVLBpL3UNJZqJnYp8GOl4gNvdwME3vohVPG82xK1oROxPdft6o8xF9xwz0%2Be8XmQlrQPrWEL9GXIIy6KnvbDo3iYyFuCEXFo0C4ehUpYqF9joQmi42GFTJoL%2FKjHa8LKXy2wH6hJMgmlDnXVM1b6BsGwm4GSs9QZs%2Bu6GgO0QTq93EGzJ50gc37e%2Bg6Z0Kac1ceiIAWYw7u21wQY6pgE9GQxu%2BShvcxz9cQEg%2FK%2F16duPAw2TazdfTqeVMxt3itW4EnLTaIRpX2On24qi0ykgzPnocRhhjAXSve7VWaK%2FX9IILXX5OFFnJGYlFMqOxFqDVQFYmPBHyHFIAVQfx4veNIsWBDLJta7oG9et%2BkJ0d6L%2FDBkfN%2FeZCsdWLkLYgyWWOpdU%2B9M0tI2FtzqUVs8lYdc%2BO122vjOTRJkZ9Neqjg7A0%2B29&X-Amz-Signature=0336bf12a07360059100aa5a70e99b76f7aed313df1ac87f415ebf2b059de369&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJO6E2RS%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGO808tPEibbsoJoHNYXAD%2F9O31MQDT7QVCsfomCD%2Bw1AiB8REd%2B%2Bpm4ZGD6JOVnXotbPvMPkit56RBNKOQ3GfDPsCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJw9ZRF2NvnoPh5y1KtwDSDqCrbIMF%2FBv2be%2Fn7wkVBcyOXEB0dmSK4y8mRcIjKw2oR1Y3PMSBJtBF1oolkZ2S88GX5JI0RgeBXcwaX5Uaq1Itcd9WsH1w1Jyqm9xJb4I71EUOcANELMum2yCZMq70xEF6yDrHSjBE1lFO2TemMcJTlCuII7rS1%2BcC9EEXeMHvJu2QZJ7ZoDuFFJEE61pr9XPes5kY3UrTR5lap9Mf%2B%2F3oN8mNTzzQM0%2FenHJx5YUVbpKdDkJ8WX0EdRRmM2LSqjgaqDSHLfSz5L5UhDx0heebqHyKjKH5Vm60nAxKTQ5qTrOUnalhQOMWJUUQfKbyHjLmf5%2BRO9lVBDtt%2FyupnolOvHTmdT%2F20ty%2FvrDIcwephv7dZNRcSsmOOyyYOnjl%2BDBgOFDyf0NJM6zLU5mJEI4KBcmcddmOznfWlwre1Iq9jrpGz5iVLBpL3UNJZqJnYp8GOl4gNvdwME3vohVPG82xK1oROxPdft6o8xF9xwz0%2Be8XmQlrQPrWEL9GXIIy6KnvbDo3iYyFuCEXFo0C4ehUpYqF9joQmi42GFTJoL%2FKjHa8LKXy2wH6hJMgmlDnXVM1b6BsGwm4GSs9QZs%2Bu6GgO0QTq93EGzJ50gc37e%2Bg6Z0Kac1ceiIAWYw7u21wQY6pgE9GQxu%2BShvcxz9cQEg%2FK%2F16duPAw2TazdfTqeVMxt3itW4EnLTaIRpX2On24qi0ykgzPnocRhhjAXSve7VWaK%2FX9IILXX5OFFnJGYlFMqOxFqDVQFYmPBHyHFIAVQfx4veNIsWBDLJta7oG9et%2BkJ0d6L%2FDBkfN%2FeZCsdWLkLYgyWWOpdU%2B9M0tI2FtzqUVs8lYdc%2BO122vjOTRJkZ9Neqjg7A0%2B29&X-Amz-Signature=1665e88b289c5ef8d3800ae8d30f823c8509e2b3d594ba10a81c4a7343d71c7e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJO6E2RS%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGO808tPEibbsoJoHNYXAD%2F9O31MQDT7QVCsfomCD%2Bw1AiB8REd%2B%2Bpm4ZGD6JOVnXotbPvMPkit56RBNKOQ3GfDPsCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJw9ZRF2NvnoPh5y1KtwDSDqCrbIMF%2FBv2be%2Fn7wkVBcyOXEB0dmSK4y8mRcIjKw2oR1Y3PMSBJtBF1oolkZ2S88GX5JI0RgeBXcwaX5Uaq1Itcd9WsH1w1Jyqm9xJb4I71EUOcANELMum2yCZMq70xEF6yDrHSjBE1lFO2TemMcJTlCuII7rS1%2BcC9EEXeMHvJu2QZJ7ZoDuFFJEE61pr9XPes5kY3UrTR5lap9Mf%2B%2F3oN8mNTzzQM0%2FenHJx5YUVbpKdDkJ8WX0EdRRmM2LSqjgaqDSHLfSz5L5UhDx0heebqHyKjKH5Vm60nAxKTQ5qTrOUnalhQOMWJUUQfKbyHjLmf5%2BRO9lVBDtt%2FyupnolOvHTmdT%2F20ty%2FvrDIcwephv7dZNRcSsmOOyyYOnjl%2BDBgOFDyf0NJM6zLU5mJEI4KBcmcddmOznfWlwre1Iq9jrpGz5iVLBpL3UNJZqJnYp8GOl4gNvdwME3vohVPG82xK1oROxPdft6o8xF9xwz0%2Be8XmQlrQPrWEL9GXIIy6KnvbDo3iYyFuCEXFo0C4ehUpYqF9joQmi42GFTJoL%2FKjHa8LKXy2wH6hJMgmlDnXVM1b6BsGwm4GSs9QZs%2Bu6GgO0QTq93EGzJ50gc37e%2Bg6Z0Kac1ceiIAWYw7u21wQY6pgE9GQxu%2BShvcxz9cQEg%2FK%2F16duPAw2TazdfTqeVMxt3itW4EnLTaIRpX2On24qi0ykgzPnocRhhjAXSve7VWaK%2FX9IILXX5OFFnJGYlFMqOxFqDVQFYmPBHyHFIAVQfx4veNIsWBDLJta7oG9et%2BkJ0d6L%2FDBkfN%2FeZCsdWLkLYgyWWOpdU%2B9M0tI2FtzqUVs8lYdc%2BO122vjOTRJkZ9Neqjg7A0%2B29&X-Amz-Signature=f5b612724e3e583e9826af514efc2d84eb5fe3a5b5dd39c3e6615f9d89ceea28&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJO6E2RS%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGO808tPEibbsoJoHNYXAD%2F9O31MQDT7QVCsfomCD%2Bw1AiB8REd%2B%2Bpm4ZGD6JOVnXotbPvMPkit56RBNKOQ3GfDPsCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJw9ZRF2NvnoPh5y1KtwDSDqCrbIMF%2FBv2be%2Fn7wkVBcyOXEB0dmSK4y8mRcIjKw2oR1Y3PMSBJtBF1oolkZ2S88GX5JI0RgeBXcwaX5Uaq1Itcd9WsH1w1Jyqm9xJb4I71EUOcANELMum2yCZMq70xEF6yDrHSjBE1lFO2TemMcJTlCuII7rS1%2BcC9EEXeMHvJu2QZJ7ZoDuFFJEE61pr9XPes5kY3UrTR5lap9Mf%2B%2F3oN8mNTzzQM0%2FenHJx5YUVbpKdDkJ8WX0EdRRmM2LSqjgaqDSHLfSz5L5UhDx0heebqHyKjKH5Vm60nAxKTQ5qTrOUnalhQOMWJUUQfKbyHjLmf5%2BRO9lVBDtt%2FyupnolOvHTmdT%2F20ty%2FvrDIcwephv7dZNRcSsmOOyyYOnjl%2BDBgOFDyf0NJM6zLU5mJEI4KBcmcddmOznfWlwre1Iq9jrpGz5iVLBpL3UNJZqJnYp8GOl4gNvdwME3vohVPG82xK1oROxPdft6o8xF9xwz0%2Be8XmQlrQPrWEL9GXIIy6KnvbDo3iYyFuCEXFo0C4ehUpYqF9joQmi42GFTJoL%2FKjHa8LKXy2wH6hJMgmlDnXVM1b6BsGwm4GSs9QZs%2Bu6GgO0QTq93EGzJ50gc37e%2Bg6Z0Kac1ceiIAWYw7u21wQY6pgE9GQxu%2BShvcxz9cQEg%2FK%2F16duPAw2TazdfTqeVMxt3itW4EnLTaIRpX2On24qi0ykgzPnocRhhjAXSve7VWaK%2FX9IILXX5OFFnJGYlFMqOxFqDVQFYmPBHyHFIAVQfx4veNIsWBDLJta7oG9et%2BkJ0d6L%2FDBkfN%2FeZCsdWLkLYgyWWOpdU%2B9M0tI2FtzqUVs8lYdc%2BO122vjOTRJkZ9Neqjg7A0%2B29&X-Amz-Signature=0c35c61fbf1b603f452cdfb3c206f53a1cb535f8122fbd55d85d4243db5fe020&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

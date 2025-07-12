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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MEAED3D%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClbeWXTc4v5BKZdXqkosrcPa6WAO%2FWdP74GRZylPotLwIhAKIVQWfafJ%2FCWX5GCsYrXOm6AaF5lDUc%2FEgllMNfDWdxKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySNEf3%2FVqOF7UmFEQq3AOmH%2F11Zwy%2Bb4TMOsOvWf3pnj2AmqulLKXOwU1aMUqLvPeIoCYUr%2FnaFusb2LhodgdSDeiMGoFcVsZp4OWqz1k9bvxGDb7qUiItZCPqmuqLPUaccpVFCCtfzN7oezhlp0%2FxkdNEAjJcrmMx7pZcShjuYelhW%2FpjeF3BgX1Urt6zHpas0Joe4HLFjm3p0sxJd%2F2dx5Nxl%2BKH0N5Eofy2k%2F0PXWuGHIuNpsMtU30eY22HkAyznsy%2BLzZp7gYFjJlHkpTQI9mU%2FV4aQjf8Cd26398wbO1msaBMK9TFIW%2FWgUg8z9ehxXMXgjMTXt9nlESIXuhrFKVZ%2FwzBnoJvLWHhcy9l3hbbmR4hO8U2%2FasCjMgri9CKuqZRC9GveogJ8XsxfJomDC3xHvWQJvYwveW%2Bl1hh0gv9L1SiA1mloLxcsWAfttWOL4Sxf4Usw8MNDNj58u9PuKX8%2BF7QCX2f8a6pUBuBqxBo3PXpSDoMN3DCM6ggblf6%2Bxk7wqdHCIHlloCo%2FGLcQFpTeeEzEYAi%2BIOHLJ9bv6Zm1DQBstHhbjOVRPpbg0wfGHu2rnNBi3FUHdw7kSORvrJItQ6dCVW5FIFEybgXMJ1jz1InAuAUWnp0jKTH%2B2C%2BflF%2FUsmP%2BXK3mTCPzMjDBjqkAWQ75EoLqTV4FevZj9pFBzBwjtEuOZ4G0yiVuqInoNgxe5Rc4EhUjWtArQE89OOdhVK5ibbd46bVnTysSyfw02wZKtYMnw22YqPKYMDwW%2FFl520aqtUsD%2Bpd906cVQ%2BG6kUG1JsWD89hUZ1WtVuuhkE7m5ngHo%2FW%2FOT%2FHHnybZhuec09uiX9y%2FmlbbPlh%2FQKVeBnizc%2FQjxYwGR%2BiktwczZiDr8O&X-Amz-Signature=31877fe99903ffc09428f2a4a5196c076d6ae626e0409fe1c892884663fda463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MEAED3D%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClbeWXTc4v5BKZdXqkosrcPa6WAO%2FWdP74GRZylPotLwIhAKIVQWfafJ%2FCWX5GCsYrXOm6AaF5lDUc%2FEgllMNfDWdxKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySNEf3%2FVqOF7UmFEQq3AOmH%2F11Zwy%2Bb4TMOsOvWf3pnj2AmqulLKXOwU1aMUqLvPeIoCYUr%2FnaFusb2LhodgdSDeiMGoFcVsZp4OWqz1k9bvxGDb7qUiItZCPqmuqLPUaccpVFCCtfzN7oezhlp0%2FxkdNEAjJcrmMx7pZcShjuYelhW%2FpjeF3BgX1Urt6zHpas0Joe4HLFjm3p0sxJd%2F2dx5Nxl%2BKH0N5Eofy2k%2F0PXWuGHIuNpsMtU30eY22HkAyznsy%2BLzZp7gYFjJlHkpTQI9mU%2FV4aQjf8Cd26398wbO1msaBMK9TFIW%2FWgUg8z9ehxXMXgjMTXt9nlESIXuhrFKVZ%2FwzBnoJvLWHhcy9l3hbbmR4hO8U2%2FasCjMgri9CKuqZRC9GveogJ8XsxfJomDC3xHvWQJvYwveW%2Bl1hh0gv9L1SiA1mloLxcsWAfttWOL4Sxf4Usw8MNDNj58u9PuKX8%2BF7QCX2f8a6pUBuBqxBo3PXpSDoMN3DCM6ggblf6%2Bxk7wqdHCIHlloCo%2FGLcQFpTeeEzEYAi%2BIOHLJ9bv6Zm1DQBstHhbjOVRPpbg0wfGHu2rnNBi3FUHdw7kSORvrJItQ6dCVW5FIFEybgXMJ1jz1InAuAUWnp0jKTH%2B2C%2BflF%2FUsmP%2BXK3mTCPzMjDBjqkAWQ75EoLqTV4FevZj9pFBzBwjtEuOZ4G0yiVuqInoNgxe5Rc4EhUjWtArQE89OOdhVK5ibbd46bVnTysSyfw02wZKtYMnw22YqPKYMDwW%2FFl520aqtUsD%2Bpd906cVQ%2BG6kUG1JsWD89hUZ1WtVuuhkE7m5ngHo%2FW%2FOT%2FHHnybZhuec09uiX9y%2FmlbbPlh%2FQKVeBnizc%2FQjxYwGR%2BiktwczZiDr8O&X-Amz-Signature=0d06f438eeb8ff298338f346f58dc23df1eda10c8f657e5a8aacbe394dfccd3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MEAED3D%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClbeWXTc4v5BKZdXqkosrcPa6WAO%2FWdP74GRZylPotLwIhAKIVQWfafJ%2FCWX5GCsYrXOm6AaF5lDUc%2FEgllMNfDWdxKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySNEf3%2FVqOF7UmFEQq3AOmH%2F11Zwy%2Bb4TMOsOvWf3pnj2AmqulLKXOwU1aMUqLvPeIoCYUr%2FnaFusb2LhodgdSDeiMGoFcVsZp4OWqz1k9bvxGDb7qUiItZCPqmuqLPUaccpVFCCtfzN7oezhlp0%2FxkdNEAjJcrmMx7pZcShjuYelhW%2FpjeF3BgX1Urt6zHpas0Joe4HLFjm3p0sxJd%2F2dx5Nxl%2BKH0N5Eofy2k%2F0PXWuGHIuNpsMtU30eY22HkAyznsy%2BLzZp7gYFjJlHkpTQI9mU%2FV4aQjf8Cd26398wbO1msaBMK9TFIW%2FWgUg8z9ehxXMXgjMTXt9nlESIXuhrFKVZ%2FwzBnoJvLWHhcy9l3hbbmR4hO8U2%2FasCjMgri9CKuqZRC9GveogJ8XsxfJomDC3xHvWQJvYwveW%2Bl1hh0gv9L1SiA1mloLxcsWAfttWOL4Sxf4Usw8MNDNj58u9PuKX8%2BF7QCX2f8a6pUBuBqxBo3PXpSDoMN3DCM6ggblf6%2Bxk7wqdHCIHlloCo%2FGLcQFpTeeEzEYAi%2BIOHLJ9bv6Zm1DQBstHhbjOVRPpbg0wfGHu2rnNBi3FUHdw7kSORvrJItQ6dCVW5FIFEybgXMJ1jz1InAuAUWnp0jKTH%2B2C%2BflF%2FUsmP%2BXK3mTCPzMjDBjqkAWQ75EoLqTV4FevZj9pFBzBwjtEuOZ4G0yiVuqInoNgxe5Rc4EhUjWtArQE89OOdhVK5ibbd46bVnTysSyfw02wZKtYMnw22YqPKYMDwW%2FFl520aqtUsD%2Bpd906cVQ%2BG6kUG1JsWD89hUZ1WtVuuhkE7m5ngHo%2FW%2FOT%2FHHnybZhuec09uiX9y%2FmlbbPlh%2FQKVeBnizc%2FQjxYwGR%2BiktwczZiDr8O&X-Amz-Signature=ec5e88bcbaf74d9446aa576317a66d1ee629d60eac274b23c11c40b5df401b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MEAED3D%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClbeWXTc4v5BKZdXqkosrcPa6WAO%2FWdP74GRZylPotLwIhAKIVQWfafJ%2FCWX5GCsYrXOm6AaF5lDUc%2FEgllMNfDWdxKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySNEf3%2FVqOF7UmFEQq3AOmH%2F11Zwy%2Bb4TMOsOvWf3pnj2AmqulLKXOwU1aMUqLvPeIoCYUr%2FnaFusb2LhodgdSDeiMGoFcVsZp4OWqz1k9bvxGDb7qUiItZCPqmuqLPUaccpVFCCtfzN7oezhlp0%2FxkdNEAjJcrmMx7pZcShjuYelhW%2FpjeF3BgX1Urt6zHpas0Joe4HLFjm3p0sxJd%2F2dx5Nxl%2BKH0N5Eofy2k%2F0PXWuGHIuNpsMtU30eY22HkAyznsy%2BLzZp7gYFjJlHkpTQI9mU%2FV4aQjf8Cd26398wbO1msaBMK9TFIW%2FWgUg8z9ehxXMXgjMTXt9nlESIXuhrFKVZ%2FwzBnoJvLWHhcy9l3hbbmR4hO8U2%2FasCjMgri9CKuqZRC9GveogJ8XsxfJomDC3xHvWQJvYwveW%2Bl1hh0gv9L1SiA1mloLxcsWAfttWOL4Sxf4Usw8MNDNj58u9PuKX8%2BF7QCX2f8a6pUBuBqxBo3PXpSDoMN3DCM6ggblf6%2Bxk7wqdHCIHlloCo%2FGLcQFpTeeEzEYAi%2BIOHLJ9bv6Zm1DQBstHhbjOVRPpbg0wfGHu2rnNBi3FUHdw7kSORvrJItQ6dCVW5FIFEybgXMJ1jz1InAuAUWnp0jKTH%2B2C%2BflF%2FUsmP%2BXK3mTCPzMjDBjqkAWQ75EoLqTV4FevZj9pFBzBwjtEuOZ4G0yiVuqInoNgxe5Rc4EhUjWtArQE89OOdhVK5ibbd46bVnTysSyfw02wZKtYMnw22YqPKYMDwW%2FFl520aqtUsD%2Bpd906cVQ%2BG6kUG1JsWD89hUZ1WtVuuhkE7m5ngHo%2FW%2FOT%2FHHnybZhuec09uiX9y%2FmlbbPlh%2FQKVeBnizc%2FQjxYwGR%2BiktwczZiDr8O&X-Amz-Signature=2ca648135a2f4357e8ce14c706c6427a6bb5803ebed4c6880fd7b0bd279c0cbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MEAED3D%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClbeWXTc4v5BKZdXqkosrcPa6WAO%2FWdP74GRZylPotLwIhAKIVQWfafJ%2FCWX5GCsYrXOm6AaF5lDUc%2FEgllMNfDWdxKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySNEf3%2FVqOF7UmFEQq3AOmH%2F11Zwy%2Bb4TMOsOvWf3pnj2AmqulLKXOwU1aMUqLvPeIoCYUr%2FnaFusb2LhodgdSDeiMGoFcVsZp4OWqz1k9bvxGDb7qUiItZCPqmuqLPUaccpVFCCtfzN7oezhlp0%2FxkdNEAjJcrmMx7pZcShjuYelhW%2FpjeF3BgX1Urt6zHpas0Joe4HLFjm3p0sxJd%2F2dx5Nxl%2BKH0N5Eofy2k%2F0PXWuGHIuNpsMtU30eY22HkAyznsy%2BLzZp7gYFjJlHkpTQI9mU%2FV4aQjf8Cd26398wbO1msaBMK9TFIW%2FWgUg8z9ehxXMXgjMTXt9nlESIXuhrFKVZ%2FwzBnoJvLWHhcy9l3hbbmR4hO8U2%2FasCjMgri9CKuqZRC9GveogJ8XsxfJomDC3xHvWQJvYwveW%2Bl1hh0gv9L1SiA1mloLxcsWAfttWOL4Sxf4Usw8MNDNj58u9PuKX8%2BF7QCX2f8a6pUBuBqxBo3PXpSDoMN3DCM6ggblf6%2Bxk7wqdHCIHlloCo%2FGLcQFpTeeEzEYAi%2BIOHLJ9bv6Zm1DQBstHhbjOVRPpbg0wfGHu2rnNBi3FUHdw7kSORvrJItQ6dCVW5FIFEybgXMJ1jz1InAuAUWnp0jKTH%2B2C%2BflF%2FUsmP%2BXK3mTCPzMjDBjqkAWQ75EoLqTV4FevZj9pFBzBwjtEuOZ4G0yiVuqInoNgxe5Rc4EhUjWtArQE89OOdhVK5ibbd46bVnTysSyfw02wZKtYMnw22YqPKYMDwW%2FFl520aqtUsD%2Bpd906cVQ%2BG6kUG1JsWD89hUZ1WtVuuhkE7m5ngHo%2FW%2FOT%2FHHnybZhuec09uiX9y%2FmlbbPlh%2FQKVeBnizc%2FQjxYwGR%2BiktwczZiDr8O&X-Amz-Signature=1b385fd22e644dca46cf0ef158a9a1f619a8dd70d2285bc068dbf1e8a9c9f152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

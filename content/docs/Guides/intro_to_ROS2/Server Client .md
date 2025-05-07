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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIXXTP6A%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5QEJjiD%2BwJmzKhMed9Sg2YcSaW0ToD6YRiE9nUXDZ9AiEA6mCjfKKr%2F7PsMCmv9O8T1jWA4hfd5KrfzL6izvNAb6Mq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPBaS2TBz3A0i3qCvircA7xLPIFsjAWmxXH2giwWHzbH9z7cUNZSsiWiJy4Jy8RbwO9FltEqnqQgn%2Flp%2FInKktTHQKAQj9KJnLOhTUjhdt5ASt2s4HbdxKqfhF0QjXePdjACGIZGjm37zrCqzXzj9JbiZ8p32BXT%2BUz753K17i7RSb5qYr622kBDjYXdkCb52C0iQKALIWK00iSJ5jn3PJnWPdSAbFwGzvP8QzT3VumTnnrfGKPrVx35MsnWYAWcfyhxACjHFPH7xrregRXpVRyT2UMsPwouqhJn3xPszb5ltHBSmATLrUD3gz05c4dXVPgUKWNs%2BuRJKHUh9uv2ZNGp1BbBiYeCJXPOwGs5Mmahw09USIvWEd0%2FQ8%2BCTcK0MwI3nHT%2B8rOecrJMx1awVW5GNPX1PxCdzIhA8ixn1bCnH5kFR7R%2BvAQ4X7iZxFusdRNYl0ddaAa%2BFNUFbnRfloh2%2F3tyn9%2B0FcXnUPw9KZbdFUZ1d207zhKydFwjMdnflQoG4yve2KyIyZlo%2FVkUh9z%2FTz3kUKvHTE7D%2FMVIK2c6U%2FtsvNL5aDsBfh14MfssETu1YYE8KaEDqukN%2FJpJeR82KB3thhM89RGZuNrlbdnIzz5CVEND9xvvwfVMNUB0CNIVsxemZH2bcZOAMIe57sAGOqUB1EtZoPA4as6NFWQyNvdNadfTQ%2B%2BBRxWI62Wv2LheCmOvy6teYJjQnup8FbB8dfT%2FxNNIq7NVhYOsF3ioEewO2w3SMw0jaJQ4dSJzj4vEEyTLtbay4qj0QgxTjn8Ro2FRvTMYdwGCuq8ZeJJdFOHBWv%2BrEbj0fdGJf6mLf%2BrSwSm%2BfuaxPio9iss6li1SCba8jVK9xSlLi4sAboVqrDq0rgrtkMkS&X-Amz-Signature=870088265e9afa2eabaf536c9e7100a41066d4539b41fd12e80a26b040251120&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIXXTP6A%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5QEJjiD%2BwJmzKhMed9Sg2YcSaW0ToD6YRiE9nUXDZ9AiEA6mCjfKKr%2F7PsMCmv9O8T1jWA4hfd5KrfzL6izvNAb6Mq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPBaS2TBz3A0i3qCvircA7xLPIFsjAWmxXH2giwWHzbH9z7cUNZSsiWiJy4Jy8RbwO9FltEqnqQgn%2Flp%2FInKktTHQKAQj9KJnLOhTUjhdt5ASt2s4HbdxKqfhF0QjXePdjACGIZGjm37zrCqzXzj9JbiZ8p32BXT%2BUz753K17i7RSb5qYr622kBDjYXdkCb52C0iQKALIWK00iSJ5jn3PJnWPdSAbFwGzvP8QzT3VumTnnrfGKPrVx35MsnWYAWcfyhxACjHFPH7xrregRXpVRyT2UMsPwouqhJn3xPszb5ltHBSmATLrUD3gz05c4dXVPgUKWNs%2BuRJKHUh9uv2ZNGp1BbBiYeCJXPOwGs5Mmahw09USIvWEd0%2FQ8%2BCTcK0MwI3nHT%2B8rOecrJMx1awVW5GNPX1PxCdzIhA8ixn1bCnH5kFR7R%2BvAQ4X7iZxFusdRNYl0ddaAa%2BFNUFbnRfloh2%2F3tyn9%2B0FcXnUPw9KZbdFUZ1d207zhKydFwjMdnflQoG4yve2KyIyZlo%2FVkUh9z%2FTz3kUKvHTE7D%2FMVIK2c6U%2FtsvNL5aDsBfh14MfssETu1YYE8KaEDqukN%2FJpJeR82KB3thhM89RGZuNrlbdnIzz5CVEND9xvvwfVMNUB0CNIVsxemZH2bcZOAMIe57sAGOqUB1EtZoPA4as6NFWQyNvdNadfTQ%2B%2BBRxWI62Wv2LheCmOvy6teYJjQnup8FbB8dfT%2FxNNIq7NVhYOsF3ioEewO2w3SMw0jaJQ4dSJzj4vEEyTLtbay4qj0QgxTjn8Ro2FRvTMYdwGCuq8ZeJJdFOHBWv%2BrEbj0fdGJf6mLf%2BrSwSm%2BfuaxPio9iss6li1SCba8jVK9xSlLi4sAboVqrDq0rgrtkMkS&X-Amz-Signature=a97f4bdee3f2770970d03219570d600558359dd66655e4e54b436c69fca16e5f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIXXTP6A%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5QEJjiD%2BwJmzKhMed9Sg2YcSaW0ToD6YRiE9nUXDZ9AiEA6mCjfKKr%2F7PsMCmv9O8T1jWA4hfd5KrfzL6izvNAb6Mq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPBaS2TBz3A0i3qCvircA7xLPIFsjAWmxXH2giwWHzbH9z7cUNZSsiWiJy4Jy8RbwO9FltEqnqQgn%2Flp%2FInKktTHQKAQj9KJnLOhTUjhdt5ASt2s4HbdxKqfhF0QjXePdjACGIZGjm37zrCqzXzj9JbiZ8p32BXT%2BUz753K17i7RSb5qYr622kBDjYXdkCb52C0iQKALIWK00iSJ5jn3PJnWPdSAbFwGzvP8QzT3VumTnnrfGKPrVx35MsnWYAWcfyhxACjHFPH7xrregRXpVRyT2UMsPwouqhJn3xPszb5ltHBSmATLrUD3gz05c4dXVPgUKWNs%2BuRJKHUh9uv2ZNGp1BbBiYeCJXPOwGs5Mmahw09USIvWEd0%2FQ8%2BCTcK0MwI3nHT%2B8rOecrJMx1awVW5GNPX1PxCdzIhA8ixn1bCnH5kFR7R%2BvAQ4X7iZxFusdRNYl0ddaAa%2BFNUFbnRfloh2%2F3tyn9%2B0FcXnUPw9KZbdFUZ1d207zhKydFwjMdnflQoG4yve2KyIyZlo%2FVkUh9z%2FTz3kUKvHTE7D%2FMVIK2c6U%2FtsvNL5aDsBfh14MfssETu1YYE8KaEDqukN%2FJpJeR82KB3thhM89RGZuNrlbdnIzz5CVEND9xvvwfVMNUB0CNIVsxemZH2bcZOAMIe57sAGOqUB1EtZoPA4as6NFWQyNvdNadfTQ%2B%2BBRxWI62Wv2LheCmOvy6teYJjQnup8FbB8dfT%2FxNNIq7NVhYOsF3ioEewO2w3SMw0jaJQ4dSJzj4vEEyTLtbay4qj0QgxTjn8Ro2FRvTMYdwGCuq8ZeJJdFOHBWv%2BrEbj0fdGJf6mLf%2BrSwSm%2BfuaxPio9iss6li1SCba8jVK9xSlLi4sAboVqrDq0rgrtkMkS&X-Amz-Signature=b3615d7c00f474e1edb0c062f4b6265d17fa19a9ff7c903e2f2d9f39f244ec23&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIXXTP6A%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5QEJjiD%2BwJmzKhMed9Sg2YcSaW0ToD6YRiE9nUXDZ9AiEA6mCjfKKr%2F7PsMCmv9O8T1jWA4hfd5KrfzL6izvNAb6Mq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPBaS2TBz3A0i3qCvircA7xLPIFsjAWmxXH2giwWHzbH9z7cUNZSsiWiJy4Jy8RbwO9FltEqnqQgn%2Flp%2FInKktTHQKAQj9KJnLOhTUjhdt5ASt2s4HbdxKqfhF0QjXePdjACGIZGjm37zrCqzXzj9JbiZ8p32BXT%2BUz753K17i7RSb5qYr622kBDjYXdkCb52C0iQKALIWK00iSJ5jn3PJnWPdSAbFwGzvP8QzT3VumTnnrfGKPrVx35MsnWYAWcfyhxACjHFPH7xrregRXpVRyT2UMsPwouqhJn3xPszb5ltHBSmATLrUD3gz05c4dXVPgUKWNs%2BuRJKHUh9uv2ZNGp1BbBiYeCJXPOwGs5Mmahw09USIvWEd0%2FQ8%2BCTcK0MwI3nHT%2B8rOecrJMx1awVW5GNPX1PxCdzIhA8ixn1bCnH5kFR7R%2BvAQ4X7iZxFusdRNYl0ddaAa%2BFNUFbnRfloh2%2F3tyn9%2B0FcXnUPw9KZbdFUZ1d207zhKydFwjMdnflQoG4yve2KyIyZlo%2FVkUh9z%2FTz3kUKvHTE7D%2FMVIK2c6U%2FtsvNL5aDsBfh14MfssETu1YYE8KaEDqukN%2FJpJeR82KB3thhM89RGZuNrlbdnIzz5CVEND9xvvwfVMNUB0CNIVsxemZH2bcZOAMIe57sAGOqUB1EtZoPA4as6NFWQyNvdNadfTQ%2B%2BBRxWI62Wv2LheCmOvy6teYJjQnup8FbB8dfT%2FxNNIq7NVhYOsF3ioEewO2w3SMw0jaJQ4dSJzj4vEEyTLtbay4qj0QgxTjn8Ro2FRvTMYdwGCuq8ZeJJdFOHBWv%2BrEbj0fdGJf6mLf%2BrSwSm%2BfuaxPio9iss6li1SCba8jVK9xSlLi4sAboVqrDq0rgrtkMkS&X-Amz-Signature=7cd3defa84c7b379533e29f59e8328b0eeb05a2e5a9125d4b491daf0c6a5dc2a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIXXTP6A%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5QEJjiD%2BwJmzKhMed9Sg2YcSaW0ToD6YRiE9nUXDZ9AiEA6mCjfKKr%2F7PsMCmv9O8T1jWA4hfd5KrfzL6izvNAb6Mq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPBaS2TBz3A0i3qCvircA7xLPIFsjAWmxXH2giwWHzbH9z7cUNZSsiWiJy4Jy8RbwO9FltEqnqQgn%2Flp%2FInKktTHQKAQj9KJnLOhTUjhdt5ASt2s4HbdxKqfhF0QjXePdjACGIZGjm37zrCqzXzj9JbiZ8p32BXT%2BUz753K17i7RSb5qYr622kBDjYXdkCb52C0iQKALIWK00iSJ5jn3PJnWPdSAbFwGzvP8QzT3VumTnnrfGKPrVx35MsnWYAWcfyhxACjHFPH7xrregRXpVRyT2UMsPwouqhJn3xPszb5ltHBSmATLrUD3gz05c4dXVPgUKWNs%2BuRJKHUh9uv2ZNGp1BbBiYeCJXPOwGs5Mmahw09USIvWEd0%2FQ8%2BCTcK0MwI3nHT%2B8rOecrJMx1awVW5GNPX1PxCdzIhA8ixn1bCnH5kFR7R%2BvAQ4X7iZxFusdRNYl0ddaAa%2BFNUFbnRfloh2%2F3tyn9%2B0FcXnUPw9KZbdFUZ1d207zhKydFwjMdnflQoG4yve2KyIyZlo%2FVkUh9z%2FTz3kUKvHTE7D%2FMVIK2c6U%2FtsvNL5aDsBfh14MfssETu1YYE8KaEDqukN%2FJpJeR82KB3thhM89RGZuNrlbdnIzz5CVEND9xvvwfVMNUB0CNIVsxemZH2bcZOAMIe57sAGOqUB1EtZoPA4as6NFWQyNvdNadfTQ%2B%2BBRxWI62Wv2LheCmOvy6teYJjQnup8FbB8dfT%2FxNNIq7NVhYOsF3ioEewO2w3SMw0jaJQ4dSJzj4vEEyTLtbay4qj0QgxTjn8Ro2FRvTMYdwGCuq8ZeJJdFOHBWv%2BrEbj0fdGJf6mLf%2BrSwSm%2BfuaxPio9iss6li1SCba8jVK9xSlLi4sAboVqrDq0rgrtkMkS&X-Amz-Signature=214d8b2a05ac46017c8e4fd8d89c22680be493b6bce828182056cf277ddaddc9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2HYFXVC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCID283h%2BOY5mWPzQq8u4enHdDwpklW0OKFijWrOfGEl5XAiEAg%2FyzU3YYjXNrmOkOV3%2F3cl14uifQdFFQSTTl%2BDIKMiIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwPej%2BqhvQqiSXvLCrcA8O1%2BRt4L3EyRq3oh3dOs3oeCKDygsBzXz%2B6Xh8QzQjoAQW%2B6eBfaZJTSwq62PEoPL355mmz6jQTMHqJNR%2BI7dbjMm%2F12TRMHtZGG99sAJRgKoPZhKqGbkpv3QH6eqS5s8DXjOqI9F0v9RpHrHIRt2UpT6Ll4KNJJ3yP8IthGfoIzY0RM7WgnY7rgPGKyWcbM991o19griSb8QkeJom%2BFLlU36BjIFiU%2F6E%2FxdDyEygnVcycZpnVqHcaBRs95aYJZiDcAUaRPo%2BkTZIBJeO6y1J0Y%2FvUtOAx%2BTmc%2FFm3erWwJdV6KNRoBFU%2Bo6yJvZGXvjMkUnFfdF5d9G9wraqxbHHaE1FapaXkXC7ewvbCCr0LxVLNGDVqJmQFJhbl0Z5n5xaiLUmlCEETOd27q5tc01GJf%2F0G%2BAwPEF7fjvfO31xtJH58%2F%2FYytJdG2z%2F0%2FmnxgxGx%2BQv0XJvJ%2F2xwG6yStALLyE1VOe299hAbMrvvFscTx4s8Hpz%2Fy95I9tN9FzoSEm3vaRIZSwTeS5wkPzReekceXN5ZWgdMv%2B5AVQSF5fMwono5j4SYM3MUtWXR9LuohQMCjiDJlizNl4JJKeBwdGYifHwEa6nqN5N0N%2F%2BY%2F5d2ZWFU6Pj2DbthoVPzMIr%2F0L0GOqUBGTpQyOLsICNvg2FFM8zTu0%2FZQGju9lIxB%2FrUfr4y4YQMFA7nxlHl6tIYauNEVJ6ZWfTgpwQykiwtnZHah6ZoLx6zvvW0ziV06SxlG6hzUHsQwB2quQytM8mhx6t9dVo0529fYZ6Z4aa1iExihizyn77EpRLbZeENUi%2BBu%2F3iua5uv%2FqtCRZYwZx0A7IV%2BG4YV9AGp5I%2BZHj6icps8nQDKT0Z%2By%2BU&X-Amz-Signature=8c83df610425cd0d85f4ea733a430f37baf0ceb928697f0283ef190dbaac8fcb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2HYFXVC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCID283h%2BOY5mWPzQq8u4enHdDwpklW0OKFijWrOfGEl5XAiEAg%2FyzU3YYjXNrmOkOV3%2F3cl14uifQdFFQSTTl%2BDIKMiIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwPej%2BqhvQqiSXvLCrcA8O1%2BRt4L3EyRq3oh3dOs3oeCKDygsBzXz%2B6Xh8QzQjoAQW%2B6eBfaZJTSwq62PEoPL355mmz6jQTMHqJNR%2BI7dbjMm%2F12TRMHtZGG99sAJRgKoPZhKqGbkpv3QH6eqS5s8DXjOqI9F0v9RpHrHIRt2UpT6Ll4KNJJ3yP8IthGfoIzY0RM7WgnY7rgPGKyWcbM991o19griSb8QkeJom%2BFLlU36BjIFiU%2F6E%2FxdDyEygnVcycZpnVqHcaBRs95aYJZiDcAUaRPo%2BkTZIBJeO6y1J0Y%2FvUtOAx%2BTmc%2FFm3erWwJdV6KNRoBFU%2Bo6yJvZGXvjMkUnFfdF5d9G9wraqxbHHaE1FapaXkXC7ewvbCCr0LxVLNGDVqJmQFJhbl0Z5n5xaiLUmlCEETOd27q5tc01GJf%2F0G%2BAwPEF7fjvfO31xtJH58%2F%2FYytJdG2z%2F0%2FmnxgxGx%2BQv0XJvJ%2F2xwG6yStALLyE1VOe299hAbMrvvFscTx4s8Hpz%2Fy95I9tN9FzoSEm3vaRIZSwTeS5wkPzReekceXN5ZWgdMv%2B5AVQSF5fMwono5j4SYM3MUtWXR9LuohQMCjiDJlizNl4JJKeBwdGYifHwEa6nqN5N0N%2F%2BY%2F5d2ZWFU6Pj2DbthoVPzMIr%2F0L0GOqUBGTpQyOLsICNvg2FFM8zTu0%2FZQGju9lIxB%2FrUfr4y4YQMFA7nxlHl6tIYauNEVJ6ZWfTgpwQykiwtnZHah6ZoLx6zvvW0ziV06SxlG6hzUHsQwB2quQytM8mhx6t9dVo0529fYZ6Z4aa1iExihizyn77EpRLbZeENUi%2BBu%2F3iua5uv%2FqtCRZYwZx0A7IV%2BG4YV9AGp5I%2BZHj6icps8nQDKT0Z%2By%2BU&X-Amz-Signature=3d06c48b55f40b412b533fe8071c31a434db31a979108b9b3b31080139c765b9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2HYFXVC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCID283h%2BOY5mWPzQq8u4enHdDwpklW0OKFijWrOfGEl5XAiEAg%2FyzU3YYjXNrmOkOV3%2F3cl14uifQdFFQSTTl%2BDIKMiIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwPej%2BqhvQqiSXvLCrcA8O1%2BRt4L3EyRq3oh3dOs3oeCKDygsBzXz%2B6Xh8QzQjoAQW%2B6eBfaZJTSwq62PEoPL355mmz6jQTMHqJNR%2BI7dbjMm%2F12TRMHtZGG99sAJRgKoPZhKqGbkpv3QH6eqS5s8DXjOqI9F0v9RpHrHIRt2UpT6Ll4KNJJ3yP8IthGfoIzY0RM7WgnY7rgPGKyWcbM991o19griSb8QkeJom%2BFLlU36BjIFiU%2F6E%2FxdDyEygnVcycZpnVqHcaBRs95aYJZiDcAUaRPo%2BkTZIBJeO6y1J0Y%2FvUtOAx%2BTmc%2FFm3erWwJdV6KNRoBFU%2Bo6yJvZGXvjMkUnFfdF5d9G9wraqxbHHaE1FapaXkXC7ewvbCCr0LxVLNGDVqJmQFJhbl0Z5n5xaiLUmlCEETOd27q5tc01GJf%2F0G%2BAwPEF7fjvfO31xtJH58%2F%2FYytJdG2z%2F0%2FmnxgxGx%2BQv0XJvJ%2F2xwG6yStALLyE1VOe299hAbMrvvFscTx4s8Hpz%2Fy95I9tN9FzoSEm3vaRIZSwTeS5wkPzReekceXN5ZWgdMv%2B5AVQSF5fMwono5j4SYM3MUtWXR9LuohQMCjiDJlizNl4JJKeBwdGYifHwEa6nqN5N0N%2F%2BY%2F5d2ZWFU6Pj2DbthoVPzMIr%2F0L0GOqUBGTpQyOLsICNvg2FFM8zTu0%2FZQGju9lIxB%2FrUfr4y4YQMFA7nxlHl6tIYauNEVJ6ZWfTgpwQykiwtnZHah6ZoLx6zvvW0ziV06SxlG6hzUHsQwB2quQytM8mhx6t9dVo0529fYZ6Z4aa1iExihizyn77EpRLbZeENUi%2BBu%2F3iua5uv%2FqtCRZYwZx0A7IV%2BG4YV9AGp5I%2BZHj6icps8nQDKT0Z%2By%2BU&X-Amz-Signature=61da6c737b28eabd2272ef6a5c64c14b7da0102ecbb28c117fc9dca940352773&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2HYFXVC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCID283h%2BOY5mWPzQq8u4enHdDwpklW0OKFijWrOfGEl5XAiEAg%2FyzU3YYjXNrmOkOV3%2F3cl14uifQdFFQSTTl%2BDIKMiIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwPej%2BqhvQqiSXvLCrcA8O1%2BRt4L3EyRq3oh3dOs3oeCKDygsBzXz%2B6Xh8QzQjoAQW%2B6eBfaZJTSwq62PEoPL355mmz6jQTMHqJNR%2BI7dbjMm%2F12TRMHtZGG99sAJRgKoPZhKqGbkpv3QH6eqS5s8DXjOqI9F0v9RpHrHIRt2UpT6Ll4KNJJ3yP8IthGfoIzY0RM7WgnY7rgPGKyWcbM991o19griSb8QkeJom%2BFLlU36BjIFiU%2F6E%2FxdDyEygnVcycZpnVqHcaBRs95aYJZiDcAUaRPo%2BkTZIBJeO6y1J0Y%2FvUtOAx%2BTmc%2FFm3erWwJdV6KNRoBFU%2Bo6yJvZGXvjMkUnFfdF5d9G9wraqxbHHaE1FapaXkXC7ewvbCCr0LxVLNGDVqJmQFJhbl0Z5n5xaiLUmlCEETOd27q5tc01GJf%2F0G%2BAwPEF7fjvfO31xtJH58%2F%2FYytJdG2z%2F0%2FmnxgxGx%2BQv0XJvJ%2F2xwG6yStALLyE1VOe299hAbMrvvFscTx4s8Hpz%2Fy95I9tN9FzoSEm3vaRIZSwTeS5wkPzReekceXN5ZWgdMv%2B5AVQSF5fMwono5j4SYM3MUtWXR9LuohQMCjiDJlizNl4JJKeBwdGYifHwEa6nqN5N0N%2F%2BY%2F5d2ZWFU6Pj2DbthoVPzMIr%2F0L0GOqUBGTpQyOLsICNvg2FFM8zTu0%2FZQGju9lIxB%2FrUfr4y4YQMFA7nxlHl6tIYauNEVJ6ZWfTgpwQykiwtnZHah6ZoLx6zvvW0ziV06SxlG6hzUHsQwB2quQytM8mhx6t9dVo0529fYZ6Z4aa1iExihizyn77EpRLbZeENUi%2BBu%2F3iua5uv%2FqtCRZYwZx0A7IV%2BG4YV9AGp5I%2BZHj6icps8nQDKT0Z%2By%2BU&X-Amz-Signature=1fdd27929e4bed7ca7ff77381765a9e6d5231857608728a8c39407335a3e169f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2HYFXVC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCID283h%2BOY5mWPzQq8u4enHdDwpklW0OKFijWrOfGEl5XAiEAg%2FyzU3YYjXNrmOkOV3%2F3cl14uifQdFFQSTTl%2BDIKMiIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwPej%2BqhvQqiSXvLCrcA8O1%2BRt4L3EyRq3oh3dOs3oeCKDygsBzXz%2B6Xh8QzQjoAQW%2B6eBfaZJTSwq62PEoPL355mmz6jQTMHqJNR%2BI7dbjMm%2F12TRMHtZGG99sAJRgKoPZhKqGbkpv3QH6eqS5s8DXjOqI9F0v9RpHrHIRt2UpT6Ll4KNJJ3yP8IthGfoIzY0RM7WgnY7rgPGKyWcbM991o19griSb8QkeJom%2BFLlU36BjIFiU%2F6E%2FxdDyEygnVcycZpnVqHcaBRs95aYJZiDcAUaRPo%2BkTZIBJeO6y1J0Y%2FvUtOAx%2BTmc%2FFm3erWwJdV6KNRoBFU%2Bo6yJvZGXvjMkUnFfdF5d9G9wraqxbHHaE1FapaXkXC7ewvbCCr0LxVLNGDVqJmQFJhbl0Z5n5xaiLUmlCEETOd27q5tc01GJf%2F0G%2BAwPEF7fjvfO31xtJH58%2F%2FYytJdG2z%2F0%2FmnxgxGx%2BQv0XJvJ%2F2xwG6yStALLyE1VOe299hAbMrvvFscTx4s8Hpz%2Fy95I9tN9FzoSEm3vaRIZSwTeS5wkPzReekceXN5ZWgdMv%2B5AVQSF5fMwono5j4SYM3MUtWXR9LuohQMCjiDJlizNl4JJKeBwdGYifHwEa6nqN5N0N%2F%2BY%2F5d2ZWFU6Pj2DbthoVPzMIr%2F0L0GOqUBGTpQyOLsICNvg2FFM8zTu0%2FZQGju9lIxB%2FrUfr4y4YQMFA7nxlHl6tIYauNEVJ6ZWfTgpwQykiwtnZHah6ZoLx6zvvW0ziV06SxlG6hzUHsQwB2quQytM8mhx6t9dVo0529fYZ6Z4aa1iExihizyn77EpRLbZeENUi%2BBu%2F3iua5uv%2FqtCRZYwZx0A7IV%2BG4YV9AGp5I%2BZHj6icps8nQDKT0Z%2By%2BU&X-Amz-Signature=e29dfa469b0704c6510b93520ebce02e3d5d9613a3e0b744e8584c16f1e878d0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman

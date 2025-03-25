---
sys:
  pageId: "43f56b25-3325-48d7-83c7-092220799f37"
  createdTime: "2024-08-21T00:39:00.000Z"
  lastEditedTime: "2024-09-02T12:58:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Parameters.md"
title: "Parameters"
date: "2024-09-02T12:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 144
toc: false
icon: ""
---

Creating ROS nodes is nice but sometimes we want to have configurable settings for our nodes.

This is where Parameters come in.

For example, say we have a camera on our robot and we want to set how zoomed in it is. We would create a ROS node and ideally, we could have that node take a parameter that asks for how zoomed in the camera should be.

Later when we go run the node we can just input it into the command line saving us from manually changing it in the code.

Let's create a simple ROS node that takes in a string as its input:

import the ROS libraries and create a class called `MinimalParam`

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
```

In the constructor, we call the parent classes constructor and create a timer object.

Then to declare a parameter we run `self.declare_parameter()` which takes in the parameter name and a default argument

```python
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)
```

```python
    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

```

```python
rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)

    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()

```

To run:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPA6DDE%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChPEKfGpYLt9ffRDLNBN7xa2d9MD0LLAfaqn9eJ7PyHQIgWZil4fWdYbCz7hWsbvHSmomZqwVziiILVHuPyTuRh3gq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDPnElySZRbRtYfJ9hCrcAyiy%2BPwuGPQ9oPk3TfSislamfQHkWLnOG4y%2FkAgKDYuGgCTlwrOfgJxv8CESl1jG5MFnGkHitQY7BkIsje99MxRqPjU2IiE0sXaEkFm2%2BDH07b9IXEiBUZtheh3Dyg1wcaQdeoRncK5OcperlI9NEaCuHRTzCdBF%2Bg9puIM2bEUZtzwXx67Mi484%2BxFw49VDGRlC9ro6IbBrOVaGxXahtm%2BrcqmGJmQwlKN0jjjpE9heyuthBG8fBVKcqvwy5qQJ0kbgmOEA8lrnyO7mNUUVEJjHSfMk2d5i99Jkwo3Oq0ONMYH%2FfDfFuQ3dE9eSoo4osTvHmYLPyzJDisyOpk57ksx%2Bf7dGaEawMjpTS75%2FH5iSXIl3FPm7KEYj4u6jWoMKktmY4rYcsfpXIXsnN4YyNXY1%2F9Xh7itIqUctMhxsoNsYklYmfBQuCRZY%2Fp4Iu4u%2Bw8n%2BN2aE29I75uQRlkcHEiKwuJ4o9vWplBp4Q3wAnGwmdPYdZS%2B93wV%2Fmb69lATJwqUg4ohWGPAPhYhTsY0gHpsIWgth8NVY5U6ncKDSQquJlYk16%2BRRS4zq3HjGVyaA38kdtIgYQf%2FYdGwT6PcLIMGJ9fGC7T99ayw5q3E3iGclPPPzgnwP44dUrKKJMP6XjL8GOqUBp0PFN6%2FyGm%2F7mDhw%2BcPQttN1IZmE10w%2F0eK7jY8azMslLw4kWZzzRdFOuWZuSQeCyqn%2BT57hc6UqMmFCOL5fAbMrSJFXYHrkJFzg5xvI44Jd2zOfUiVdo5GVqwZ7At0eRZMN%2BkpmrzoCYSaivhFQhaBLrHcPxvFLNVhKfcTWhYOVQnbDFbphX1%2BID9qUo1YtHZRW76ggE30b6mDFCocYcSLyoFEq&X-Amz-Signature=f02ea285c6572686eaf93ccee8374bf92605fb29ce577b7a3d529ac018b65426&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFFR3D56%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEFJPK4cl9v5%2FBBo8VUIsqiThd1OO5O2duE0YuUCkqOAiA1pczbtuUH0rQzN4SZCNZ%2BprzLveeBvTJi0Zgga0LmXyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM0ULIBqAXuOy7izUgKtwDCRNkVTZwqPO5h6qo1gRS3WA1GJWL4dFepUlGvvQqDhEZlDMcdLSu9%2BjHRCOU17GmnORd4fCrazo00LFDoZH9Bb6MkHLHLbrEC6Lq1nUEkJ6d8Vbgmd9gDnZSkAieZYyUnhNlP%2BQUVPVEvlIAwUZYREJ3OZXcLSGpsSMU7CeFHl7H%2BSSBEV%2BFZxq%2FufdN29JPI2inatAZeQ3Z9YDxMQi%2FLGDjRU5MWmVrcWCFR04PlO36pUV%2B%2BYfKWQ%2FqT8NP9viUXorrATgEKxxOutJvXjLPEuGU0NTfUxcK3MCybuUwA%2BU%2BHeGpIfss1xh3SghmISdk4wOAZ7A4Li9vvFQPgR01Xc4y3fyKRDR7IaPTYRDBOxcZ5xEje2HJwoDZaaAGj7y0bAVPGAYSO%2FAkcdQfGm95AFObFBDEKl%2FRRW3uaXIRDDXfoY72sYVQHe%2F0r7TYma4wpvzeEC%2BxK27lY32o09mYa1c0CoRnyGl8ko76STZq0OXwDPOl%2F%2FxP0O%2FEZ2AnEoZ3PFPG7BEuO4kcZ%2Bj0geNCd%2BvAw9pJJ%2BorjNlOo2i7Gg0R8U1wpKNJEc8izy6vI6%2BuWucoPhPPnXBk4RgWnwZUBHhC30HC7A6cDlyVU0VtnFwcu79OczVn23McbdEwrMKHwAY6pgEikdU3FtyodmrI3lHumUvMsyfH70WADe%2F40NWDq5XB7BJpsuWAvHmxz%2F10UViDMrTjVhiuDvXGPb9NHGtPDIQ8OGbGAJcYxT5cccPimk0McZrn7Ysy0vQ1KPYw%2Bxk2VK93tTLSs82H63qcRm1q6bWFPPOcJEyl0TnrfnJtS4B47oVkjBUUhabJTcwCxYXPoftoNGMkJBC3IW2OhOQHaIDdvYWsa31m&X-Amz-Signature=f2c92dc9e758ac177ba96aafcbfb81a2d8e10b4e9276bc65fb5fa1caed0d1ae2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

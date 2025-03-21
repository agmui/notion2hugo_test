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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMDIJWCY%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCuwFPOAG9m%2BtUHcRF8mew6wnZMiI%2FT%2FSLkLSisHRHnSQIgfmY2%2BnqPukoz%2FnnkctzVgB4rWomS71GD5xIGkyYjtCYqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNHafhuHyvkBu281CrcA21miq%2F%2BVdlLHu0hCoSMYhEjHFxfIBxNcVX4qVbiHIbCdRjxM8fMm2TdEjMiU12y5JwfOk%2BE9DwTPi7pTjVPQaqG113bLidjxLAt53xbB1pxxsgNiLpArOA0LcehsAg7I%2B67%2FmXUE5xNCGjVZH%2Fg3zKpqxUWPouXCjRE7RNT7IY%2FqqplB2RobLOEmQVHU31HJJZksSZTyRjiCzZYrHEgBV%2FZDckpBYs0RqOGtgcs9AuSvT3A47Dqe0nOJ2%2BKJRWjy0HzD1fqMGPtJ3%2BWodDyPjcbrchXsGLJndrHjWyim2%2Bv3KcT4mOA2glXor1iJtA3Qk4BeCSEFvOZRrGfgMTDxZfhRsCf4KYxqb2mdPfGDosuIC1YjkLtHFKPA3JJI%2F1plk7TiGhJS4rqJ1v6BinblViDMFd753sHRVK83XWcLGXIB8K6DayxBT%2BBNYQGNpUdn%2BNv%2BbQPmxO9tTHlA5x7C4mP8nlQj0mRDjlJc%2BB7FrwHIehnGIglPShlSCf5dSXcsmI1x90GrcVqL3VUoP9Bdwu4GZzb2koHQ5tjL95uetbsyCjEKmXk1W1ZG6ny25%2B3O3FIT8gwLCKu9YBezlwk9BmOdnXXXg9pvOYBuArSCJ9dD4jelur0eiVR%2FE33MPy59L4GOqUB1ROKvuElWNbLCwkAYDw5e2f%2FHoIcG0PIWw2LWyUCyX1VSmmvA7iA1kpcDfuVyQ1GX01Jpnjf%2FesJ5BIe0CEznnlWZIvmd5e7ZIdbUiwVoUJpqx%2BNkMwgGz6xUFekLhi2hOYl2ngau1EoX3SY3IzFViPEBq%2FWOtD6ag93ZvixQyPXqDZ%2FuDIq9%2BUqJDTmQ%2F%2FsHxkJZ1b7vbFstMBQsWPhpmrwUurd&X-Amz-Signature=302dc9e0e9df2dd170f4ab96f99b6983b1e801d45245e47206034636c695c703&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

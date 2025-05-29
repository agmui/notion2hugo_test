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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWI65PDM%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhfodqPx7MPrrxxAuUeMRF9BAaoQflOqjv2rdqsT0M2AiEA8WuPKIx35Ymq2pBEyDVCEwJtly5mXS%2B4MxDrhE6f088qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCabmNfloL7G96eGuSrcA5LYLEirE0VA%2Bp3MUzvxR8oaBMqPBCtZMAtJLm1gBeJaiF3lD6k6xdPeCJxS0MVh4MbeG1zOzXptOf8ehtT5w%2FOLb4Y9XUVJKUwjRCXL3Gl1ZPpb6cIUzrJrCS8wWuQKZ90FmThPIOSi%2FVzaH11OxfMYM1Xbc2X%2FIuoHNhqJjN93GV4wKbvSQ6Flp07rgJ4KgfOinngfHdIzIcO8UUB8Ql2adxY%2BbgXaoF87yqb%2BOt0UV8nBmtjWhiMneuPA7lGr9y5eMY1AEr90QftbllW96NnW%2BS4rJVE7sEmAhOBBFAO5%2BmKWdCm6ZBkWvl8lPrk28yfd%2BBW56lH%2BGVQgu2HzH0sibz1L3xua7Hsptrhlw17xtGNkPz4UmbNbyyYF%2Fd3VE5dpQ3ssVn9%2BvRKeDC5tUPTFlL6%2BvMToELLC5yjZtiL%2FP07S477BBs15QnBbjp7mj9JNUl5iJf97lyVaK7EDNJMBkxeFmaihqJiAo1EseCyM2oupWvC1v3zpmEl9N9BnZQobZpkv6AcyQ%2BfG28rTMjFIrrRQ48Psz5xk4KSR6F9e13Vgy6Uev1mhpOY%2FgZq74NjltCg3cOAPxAxjz7%2BU9SzhKm6NZYjg1MomDN5ZNv2k%2BhuU5aKOLBqfWpDaMJ%2By4cEGOqUBgO%2FLuo5gYlhz8zaCePCEDglcq9L90%2B0puE3lm68JUyV6SL8cFs4PjNfd7lrPrceiA3eRSCir%2F%2FSgYZ03v9MNnwV9ETLeAiRNOFmBkvWj%2BMpcELtXNcDa8BIm2wrGkDqp%2FprdTXBzv5ynj77yxCWxDV400ukWQKyjFoDTvlSgbHvmkVlLyo9PkOFUt%2BdvX7k9q%2FXcDn7AiYym%2BBVJKXdIoUPeWh7c&X-Amz-Signature=2bef1fff70bb3151c57e80f211684e2d64f02a1110c147df2c65a61cbcd0bd5e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTIKD5QU%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDBbMR64tgdYLKwAr1lswkCgDDgEj%2FDfj35re%2BdBYkZEAIhAOY1%2BCURDpZIL5uhyADTuusz5IJL5MmQ6f4VSPTVX6EEKv8DCBIQABoMNjM3NDIzMTgzODA1IgyrIDZv%2FfPR%2B9qMYAIq3AMnDCXkcIbvmv%2FJo2VJr62Zb2zI01EZd%2FXbKUUdZIxoKVpvJ91ueuAP4cOkEn%2B3wKnfA6enWRYsU%2BLtZNE3urFH1ZwGU1QyaZdQ27cvsw3db9rmK7vHaY6SvJOe3txLJ8Bx0Flxcc2aXx5FwJNV5Nu4xJYs3GXXpmncQM5VK49M3Cfk3%2Fsn1EPoaxooR2dH5q%2BSTovEaJc2Tih3mvOGE5v4CUKn9xUGuEzZ0y3rYIYVY16Wak4%2F%2Fwy61vEzehzGhMClu0cDv7DATYJ33fkcLG6Bx41RDAy%2F5iLgxEi8sCdB1yfNnHrtUI3OTkaaeh%2F7iSQQ%2F9G9Y6fkOy6BdX8P3%2FqfTsoa0ZkRgphCgCe333Qm4NoiV%2BdtM3JurDvA5HHDC2Ugk74paDpGpyRK3td3XvE3sEx77JMu2NEPiVCosWVMrbBZE18HYf1BUpNidafhL4m7zhrLtp9%2FRCXqwVKxyPxUJOnp5MG01%2BbSVY9MMZFVWlHjIUrRs%2BXTdRKYJk4ZCniA%2FDuf8brSDggOpO4JzY7P5DWg8QNXhq%2Bzp9bmA7GTKICs%2Fm0c48G%2F%2FcBo767nTcAVgRhTGYCiQEmZp0vRc6QcPWgDeCO6cZKl9594X2%2BzNZ9ISE845STLHOAYujDeiJnDBjqkAQ%2Bd2QGOl06Z2lrRZPLOPukJkLfSasgTzwKDwGuZD4WdxSjVhp7en2IjT6i62TUV%2FWRIZFMDKuGrzqX399RpPLNN0PMmGZj05YS52dP9QSSq%2BW8tpaTi0isY%2FjFM1i1UryyI4KBEQ2tFXQYBGQsVIqREM6j6bN3FlT6%2FZ5if%2BvsPeCdjVz5M4OLIPcx%2FkwXVp5f0GborjH9ZwK6INYRMU1gLjtrE&X-Amz-Signature=d90961ef9fbdfedee340750d962d16398ef026578ac0c7df16ac9ec81ddb318e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

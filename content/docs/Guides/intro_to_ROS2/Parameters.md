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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6D62MYY%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwwltoB5MNCEbqDsir3pFx0I44F2zBkAy%2Bo%2FyvNI2yTAiEAzW6HEeJGz0H%2BqSoTZvHZuIoBcabxsRjqqLfRo1LZuN8q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDN3qS7LMCF5fmfe4TSrcA6apHAcNPW2LCDl%2F0IIHMAaotIdTou3CAg9wKfeJwhBriNDZrmhasVHJFXTxM5LMWgc2L%2FBNTNm5tH%2Bwch%2BOLFMVSVLwtw2sLwByvKq8HasrJYm6u6tZAEp1SkjRiPWWmtTBXgFBfg3Wcz8yaCNugS2G9eDnMzYH290D%2Bd3j3COF%2FZAXdh0GTKMxaKh4ao2n8Zh%2BbRzBR15Sh1j%2Ff5165RVEc4ZHyGdgpZLLcdwq4g6kl%2Fwuy%2B4XRYEPYjKERgv3wAoTUtHoTEllIYI4Pzsv1mSXpLxKYX4XcfJLJLCxwkRUJIPscvkOBAp7lkLgKXtAQThF1f3%2FtWCYRQE9xPgX62lCrJiC0sArT6LMff8TN3iiRuqWYK85JBUBD%2B7CPXdVk%2FU53Hsixcf0z3VmBDirRxp0NSgs1otda8sKQBoqo1vGwV1fnIco0w6bMHRncETl0wAQNeXdT51IJ9iNstX135bsk83KrWJcAAK8lxvfsEgjREFYqj0n3sppGt44ZG044EviWvYAp6igfb0EpXHnmvu3q29Peo1Mm8ZIf8TNRjF5YgYjgvyBwtxmFIjyWE1xnW2cl38wmEC8Gp5iPly6U%2BOw23OCNrIQQKRJmp4Mfe0r%2FPUMlns2HyeyZMfzMOyi%2Fb8GOqUB4L1qLhq6XDo3yZrG2qXLHSYcxJEHp6S1BEQgq1yYJjvLJmx59KPZsymWCeX1y6pfQsM9Hm91Wi7kMxl2kD%2BEKrb6o5NY%2BpCYVLzRzHASwelwbCnzJ7O8K%2BcChzI1PzjCiCh5EIN26HJWI63WsPgvAzZWpOh5E%2FpdAC%2FxJJcJFRhgM2VjbgYBZtssjh8V%2B3Bf4po9QOa%2F1xDPROEIVI0K2esuTcxw&X-Amz-Signature=3084cf38fcca89999250beabf48a9e4cba2672b9f8bb850b7344a7a405cf8379&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

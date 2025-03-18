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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KAOESRI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIHDMhzdQ%2FdRlhjECKJ0Bxqs0yNvvlBgRI0m9jS99nSXWAiB1pMx%2BRyt4YGajvZQWCYOZT8kxAy4Sb9UQfFuSWggcCir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMW2vHDxSuaMAbYLSbKtwDw0abBNnkHBjbHVvt4PocYE8bkykhu%2B8SRFpan83MPgWIupDxLfAc%2BSD9qplZAIwEGAiORwelyyr9gnX1oCf8i6Sx7XAFmAA1%2BQlLcAufjsNqnVNea3WvFyjuxrZQcWlzIw57lwWhdoeJtrkLDbHRp2tN5uidDoTmM%2Beu08u68CKtFVxXA3Zsof81QIf%2F5wPd74D7CNNsmg0gEaxh5Y1AbAOZufi3ssIsUlJJsNX6IkskIZUEMugJ%2FpYJdeThU1fp3NbFgEHGkJEQbXRa0FvZmZP0MNl1JkMtHuljpWs8YyxNCGIGFSf%2FBlMU8g3ZAPpkuTA3X%2F43oFXU%2BYANyescyuz15BwDMiy1MA183lCxKrkq76iA%2Fo5dDoSTPiSk0B9xnvlD0QZz%2Bxi4JUdZ%2BkbnC%2FFOWXK1DPFaZu%2FHsUtb60d0Pefa4cMljcc0ksRS9FiBlhUlBpObT1T0kyYbBy9SN%2FzRzA6T6O08CW940q78OBI3rfPd8JKr6CwbztvMpoKxe0wy1uem7yc2%2BJMakjSVYnqhJy%2FAPq%2Brnip0nTrHrn6MpZcJUN69VNM5jvwVWbKt4nvjC8BJepQbaEe%2B3zUxNx1Fx2RFCcEIhZPHDWuU6G7Agq6YyNVcCTVArNIwv7TmvgY6pgGmTXdqKk%2B4w%2BiH8BsvIkHb7H3qxCbohOzA%2Bqun58UxeterqH4ZgkF8nrjy5R2uSxlsiuqnkcXaXHyBWc4oHbV2iCE%2BZiB6u5NlqZl3j1WejULYf5aoYylyE%2BrU01lg5kG82FV76NTmMuhP65tYndXc7qpZeJdF2HdgWhVzIgurRWUsYlnufVMZvKsOPZihexamruY0ryBcoS6w0ccPf24SM4uGswTx&X-Amz-Signature=a28dc6153727b9e24b63b3731866e7f8a7bba2e1997afddf44c7f8a0009212be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

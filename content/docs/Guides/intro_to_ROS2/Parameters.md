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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQJ7B5QK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCxFWhQimJVvj5m9nQEINryNlaC4vxBlpF6ICS1XiycwQIgJVaALVPBLxcnjvg%2F8j3za0BDYsE%2F3AZ6PSldlvlnhy8qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsyvoO8p6uIhzLAlyrcAy5u5PxJS03cM58HNt8iC62iryGAsI0f7%2FD4oS%2Fz4zNagybEfvOZRGHBBo0BCk8uOf1Nv043BxxMC%2BluWoZQ3%2FwKi1vFeQNTuCLXIifF1fNc9YA8vbctqjQjVrHqwNenLY4e5IJvf3sQX%2FjTWHGK9FkPMiBTKeaSOkoRCLxfjsWZAQhO5ztJcYQoOK%2BJlXHFZMjZRQ5r3piY5U%2BcFx%2BuaFCby%2BrwSlYv2CvOuqhdDmZ1o8gQ6CYK1MxYOtXJbOvKIXTAAIealR5C7N4dblYQuV0t7jeSzZvmw2v2qGixcNmE9%2FbHJpH7p9mYMk%2FBVpFreY2hZnGX4kLBgxYS5Odfqk5aUzqsszwY8U1eD5HFZV15SC3sVqLKL7Xg2pg7xxN4ssu3ZJHR4JuVnYZMcYQqU57FAkuh%2FSTQIbyBQot%2BhSd3RxXOanxUushBETO003D5xTF6iPvnKG3xVK%2F8o%2BcqiyYBgXNOKa59rlxe%2BQhi8q4PqSuh6GgFXFLGwW87aa1Y1s%2B7EEZAk4JvR6VeAGptR3xsCtgIzKHxVok97dXLRfKz6aRgmVeSbvlKY0eCppfa2SEoKhAVp1uvLHue%2BKuNIh3w8YKMSMM%2F1sRpye3DrVJZqDJvlgd3aRUrIzz4MPu4q78GOqUB2JAddhi%2BVb3SQG1wU9JgloLl94qePw7ryxRmRRWFaF9KH6pW5mArLiYIYM5wk4CrP23LFMk%2FC%2FgMJzf3Nk81oiYTCOiOw5P6wGgFrO4G93fi0Q%2FTKeboLsoZNXHALXgpenYnVWVuDDmiVFm1kX45%2FEixqWMfsGy%2Bqxa8iUDW1A5iA8xqDKP5U1yR3xWZsTvBODWmFgFNxwlpbDEVrBtoM54eoVZZ&X-Amz-Signature=06eac44c149373786f2d84c6ef030b7e9ba17808dc41e4dbc914f3bf7faaec13&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

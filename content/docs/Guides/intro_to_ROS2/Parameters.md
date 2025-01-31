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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N63UTSF%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBFj4W6qk9aTC8YTbWdurqYd636uYNaNmcseDLUsBMSAiAcGED8%2FsK1%2BvdIdO0%2B5oqvB6T0nHM7yzu%2F2J0Gay24rSqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnwFBYXwOweRVFpPrKtwD6T5qtnXe6RQ%2BURzSEyDDyVU%2BvnIFunCnZ1UquVQEtGnqmg%2B7fXvaFtryRuAWC%2BMpE%2BQQgAv763rAbFMay77CLNSn8%2FcKMh7BeEHPUWkXwIYvFFGnGNbbyhZo5L3yAWUYPx059Zo3bOoNYFHUcinryszg%2F3yAmo1WmjlDw8PvzKyICHbcyfdC0ITZUbHC%2FLEt7AwaOPFkFdSZKXe1KX2QKLAsTIWHKkXXFCjg5tkFSMOltmS4oaFBeW2Nqc4ZBFadaeNhX0RdrsSO4Po7XtHm8JGufj5LJ8OyfehS%2BSLB7YmIdcT2k9JejrZlsRwssGbE0E%2BJ6W35cBwF37uaj5dApjr8%2FqY52wkw7giq2ypVvimq1U7aDjy%2Bqh4%2F2xKMK%2FIHIqIbllh1PSrrtaeMnV2hPpLaBLKpgWdRIvdP7hh%2BbXf2fT3Oy7Dfupg1MCv7N7OrJW8TZ1ztn9TDpeCJiBOaTLoPMvkHaBFjU16Hf3N6Ii0E9r8Wg6a1NquYhbwSCgiVCUO6dwEi6Koa7S41KjPwmh%2BjMoCjhhP7jIydDX2Sc1L5aHZZbR9ga0GUSWoci6cbluy7oKgd5l8geOVykcs4yzXswcJIbocyvDGLDzVkznT2zJWhx7W71JYGV9swmcnzvAY6pgHXeFVJ%2FO2R6auYiQHbmOBRT4YLALX0G7hmkemjrzGJIHxovvKSF4aDtHz6epfmqYjvpCCUSP%2FLkFb7yJ4Xs9BSwY4Clwabn1FxNpe4Iiq18Jp72lue6nH%2FlCLUF5wm8WMwNeG%2FGjofmFcZ8%2BLDDusruwlCU3nanisZkq8uvhatLWuxM0gxMviVtw7oUqF0CsvePj6GvW0pYdYBb3KRvRPt1qJVTfVk&X-Amz-Signature=32b618304df1aeada5a4f65159b6409c7613aa6e837c3c905b3d28dd4f39cf08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

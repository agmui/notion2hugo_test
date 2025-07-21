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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THLSPVHP%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQRzzyclQaMDpRONcF7X%2BJ%2B8UY%2Flm4OceDbtGt89W1wAiBBGn5zVJERmzCCtkADk29qvuDqQTm6IwwGaho6jd4ejyqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmRix%2FVJVnXddPauxKtwDt3ft3K4JfwSBCWWnSspJ%2BjkHfYLx6JpfLkRGJ3DPn8QmQxkWgDIptuvhjpU3B1ZSpGZntdCWD6f2lB49WVaE7etqpp5x08dWflQAHIHHWiXRhMwJF4Wn5%2BM5nuQ%2BvStfYladq9dFfeeNZ1qZ2uhyvjRLqmCn0kngQo8PX6%2FMs6P6wh%2Bbc1wdTFadkIeqoiHmFBvxcT0TDWGdkics5XKfWFMZoFTogbsbWdBALh5PpUxUN8f4DTBYWsD8tHkIJaJhaAG2jjZKQgt%2F54KK2bHvGWWx6TRnyNlwJfYmRohcmixwO7jfohsRvZTavNp0wvZvSDVURXhnySQh3MN6VDa6%2F8H%2FjL%2Bo7GjX%2Fcc%2BYLAErqJe5QuvcR6xsV0chEY5LyEBqEZ8e%2BQP1D%2FlJfAusgqzLfnAPVds69lovFRVG4oXKZUVSV8y8X5ecz87b6y3%2Fop9Rme8oIY4XzlbrPixrmayFbHDs75kVptSp1WowuuMwD1o%2BK1Io%2FwlerCEX5q6Hgb17O8qaq%2FwrL5ERejGtLO8%2ByKsQ586hCR8q7nJXUY9wWcBtWAM0a22DLDJYC%2Fr3kwekw3CBYgVMSVGLB2LTOJAv22QLp907qNpXneIlGAS3mTDluD3TX2Vf3Rhot0wkfz6wwY6pgEGmy3ReznQ8Yg3W7oafkX5QQQaVuwMf5VJ6B%2FVabeQ5t47GyPldPK2wBpMbDurAF9BT2N0sGISV%2BrjTY7UYVYg6HRzo1R6zAlReeeOQiLKqAODwJim0xe2DOR%2FFNGbEfcxnE3HeJfFUnAaUWjPgmvFgdRXY2bAffBg9Oq83QHOdfXKBq34e4MwvNxGQlybvshVJHHLaYhp14TuzsKanNhjpIA3MX2s&X-Amz-Signature=74853d690a893a981865ba043a89c84dcd9c149703a5546a4ca54ca4626fb69a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

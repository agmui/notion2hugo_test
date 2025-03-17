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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVOIBBNU%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNT3sEd2C9jsndGgK%2FjkoHJOccBVLvwDQJj4hEYO3nZAiEA2ioFmoshlfFMsSv3Gem6dV375iC%2F3Kk7RxN7vrWgR%2FIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKdad2AbPvwbgc%2FixCrcA%2BPiaCYltreGVz%2FZTAOunwRWoWbe2%2FjticV1A615BV2TU3pLHvLnAgmuJZFuwIGJmW%2FPBYgHCr4Ix2uEVLYskY4UvTArEIvXIeASL66HcEbGYB2cvAVnfpRx6ghVjLFAfW6iwogODoxczTV8HA6SWxZM35PtotlDKl%2BSpDSz%2BKFEsSaq4SuJ5ayym6evCLVNJQh0Kc%2FQTlgbUKM3lx8%2BFL45NAub6Y0HXR%2Bqx9C9S3mZDZjHqkEYojZRUZi%2BIsaVcAD8jOiqX9ktsEteBSrz40izBtVRKfiT3Nuc5DuWvhAXvoS4FrnLpSd0NAKMvi6LztRRmsUOj9pdUJIGIGQoEWRngkRYgUmBAQjumpIHoTJBl9GcW%2F8W%2BCBW7oTqE1mSV2L9ObZj3%2Bq8MWjymxKtX5m1WY8cEuyYX8WTIQ70vZIJss3UWzVIts3WyXH3VmYhA2kijFyzUVsxzcwpsdMMyaDghVyXInckp%2FTzd%2FpOtzOLqXVFHE2rELshvBOJT2rxZkTc%2B%2Bm3d%2FT6cEZi0hIbCNP4A30wqY9p76yq35uikUAeGy2%2Bj3cv6xb9JnEQ6q9VzVEPPWUfYpUc7oaayo90%2FjMpA4cFxpLGSuKhhFAm%2FDZGKLrKeLi1j6PSio1lMP3A4r4GOqUB34CQ2SwfIDZQ30q7O8E1JxfkeBBj37ClBjmqSLEncv6JLtJ1mYFHcw%2BM3P2iVcrlooUeoOVy2ZOXdPV7ycam%2B9jqCOsYX2n1jtz%2FrSrx29kc2yfrK%2B8B5Ff7gUVj4ZTZWJLmV%2B3RCfD3jDcm4F%2BBFUqhRRzVfTPpZxYoYj%2Bdoc7VRbztMAlM70KO2K23zYH9cKZ25ulaoItyoVgdlvZj9yTOsMt4&X-Amz-Signature=67a584666e10e36de919ba2cb66222649c77d191d58c41dc79572d6fbfffc9dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

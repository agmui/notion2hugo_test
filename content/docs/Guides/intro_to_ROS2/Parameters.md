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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDG6Y6FK%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC07TQ92yrmD8G36mcbFlKr%2BvyarnkRJCcee79jJFmH8gIgLf%2B4i8Cu5Y3Rs%2BtS%2F2GtldxImo1%2Fmp6VbRojZKKzFZ4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfhR6qjSfdvOrmZPircA8V688afCXSdrk561%2FK8ObNsp50c48dC9l7NTgb2FRMXJJ5Z0DuS3Que2w9UAzUE3t1HFQfRJ6NaGDJSiBmgGiFVCdbpCSg0P3saoPUI7QVke2efavGIlg0tm8W2x4BsDZBi6XedTUyOLqigFgcyAjrK%2FgLFb3qGp2xTh%2BeVGVhgNLuHrL5GP%2BQg2Y6NgviHoiJ7Jn%2Fx6p1TyPn7WX5E%2FYWOuPod5YRSKrXjQZJgSP3F%2BlrMTXeHZepJOujghxX55zwl2tvzpGJpZTXUGjgshBes%2FrY%2FzjwAv3djm83jHJ3%2B9locc%2BbwjB93pd7oEGe0v%2Bl2cvjJ1HSokvOdQdNDc4QmIulxYHIDOfdAf0notnaB%2BoU3yx0hREaEfgWbQ4rZ0EEQhOR6RY6IPlpxezeCP4QITaQg6EZYZlIEUDtJNRfnvSks7S0VgT0fEJLbJCdt%2BnSWumFln7eu6rmcMDb4gDiNBh1iyoiUdDXT1DQ9ViKyVDzLwBAg8jqpjBsNgbcBk1Z1fl4ZVHvBG6P253Lg5LREmCgjIfOcG7LwgSjaI1KaCFHmYUwTVmb92WXdzYT0Em1EdBUWCJpWLqfA7y762HbrgvmULYM%2BLtmNPNQ0fodNOpAFYUMeIJoNRTSgMOuDr78GOqUBnWiy3hbCx4RiTLHspAd21uJIb04q7HT6VCXbCaZi3gifBozBj%2Bzb5sWy8SLjSgmQoIDPTT3ldf9mKHwX0czbmamqDI4iBrkesy5vN82LXkjR5S0QA0FAK8VyU%2B2cU3CoTPHO0ZeGEvBQ2PMtkBdirZdxAYeUcUJs7EZfdh%2BaYehUYYNLvTSTt4quMyii4i85xFPXdxhjt1IomfFkl%2FDSjwczoAkw&X-Amz-Signature=915017fd923750d52edbb38c122e6903a7e80d0ace6bd092fd06be85042f8af0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

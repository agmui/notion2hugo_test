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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XMEAFA%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAZMvFfHsURGd7uYhlQQpYbbCni0iV2x8crj0vv%2FTXygIgP9WlPFH4xuMp0K%2FCPHOq8imtdfn722YYp6wqV6qxutYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXP%2FrghcQx6ka3%2FRSrcA8%2FDdhIpuT%2Bbw8Icm0alP5hzBubPSJ2Po4wDdt%2B6AXzq2jLreovtxP2luahdGzJ1M16VGf%2BGp0BAYLxoahWkS482%2FnxrOO%2F5WvLFObk3XN5xsArg65ddLlfRMbrYf9tVRjm1ajy1LTrUY2LOzeev%2FSLH4er618ozTEsOKaDHGzz2EmZ28nlIHXkG0HWlsdmy175esRgq%2FMDpyuIUwin%2BIV%2FtQWWF2TbgEgTAHiPoKJ56drSOyMz351FYsSuGFvYj0BuEMa1d9J5Cv4ekhYxlPg64w3igl0bGlRO6WMtbLCI8x8ll61L%2BLh4HIq5alxdifxfp2N20WIXZuG7mYW2bccXajl0vauRkGmwAaQrL2hHkD39P7AkTZCXLql8kshEsderHC65WFFrQlv3n2gqQL0PMR%2BSy56olmMKOgffBnXTJEaOKaw3qPDyE7WOb36U3sy62THkjCh0FzltGFGGkWojBBX8CzT2SOgZXjXcIF6zZyWCD7bsAh%2FN0nYiDMe6BpLgpN%2B0MDU%2FYeyRWloIJxL3htnNGO72kvWgRM%2Fwx9YIQJLzngADt8Ni2lhqecr%2BynMycgdmSl25DO0HBpSGH4CKK7GtorKfeZTQKFkvRTvfWT4Yx7tJs%2F4Evb%2Bj4MKyyn8IGOqUBZJwlkUI16J4J13RkG1j7oBtSq98rQT77%2Fd%2BtnmlPsthL5ojDdRe8t2ESJ6fzYoC0JPauGwgem6DuMII%2FhylOZ5PT1cReuNWBz1idhhMd5%2BsnDC97CXpMIumOy%2FfaT1rQN5uidgIo3nmUxO7viHDdeZU9zD1X3i%2FcHQ%2BkDrV6mbo1fkywiQY1kH3IXAPCuvnAYnqja9j9tOu1sOzM4538FPbwJ1il&X-Amz-Signature=09aec7d89afd67508e2d08face0a7c06c0ea398d00b8ec75c0bfa8ea2b835039&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

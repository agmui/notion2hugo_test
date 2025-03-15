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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYA6ZKFG%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj%2BiYlH0x0ygSWmLpGlSI7fOwHxnLR1LnCTA%2F4h5dY8QIgcd1ST2xjnoY8S7A%2FGFuvtVEgiQvr6tpgtdSQx7BVyqcq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDEMpbjoH0tSyNmVmwircAzIN1pXQqWtZTHb2jB5IHii227o8qnoT3mVKEsiwYn0yzh6%2BQ%2FwHLir%2FgrIjn6aRDchGPJI44a%2BnpNC0j4uoa%2BZaaaCdPrxHxxb%2F62UcgSaGMl1WsGBg3K672w6mdKZJ%2FCyvD5UoM3iqlaKffOQi6qPzaH%2Bdd9uOGVZXTLqjrBKrRvVyyytQDPqHF23AvKF5wjlnMtksiwbnF4k3A%2BLNVCXwqqJqGY7U%2FTlu7mh03SBi%2F7HKa73ltITUjwwbi8CGNILbhtJcR5NuG8tXa9wyHwKEvom5pFRd9pie8EDEA%2B0mYhx8y3bg726kWfjXT92C0KkL0L%2F4m8SBf8yI%2F0wJ5Uwhw1XaU0MUsYuRHosPA4T2KewApYur3l5USKJAKeBTZ%2Fjo7xexZavJgksxnWExPDjQQxW4JPmNI2NSbtTnnmDDlEJJ%2BJXVOeTyNOrC6KYoG99mNIGsY2sry2UdGJblmt5nIAd5mEnAY1UGJ2SCey2wFhSbnu3%2FqzNeMegXsiKfV%2Blhs1ZMGGIC%2BzHx2%2BaJjvkGPv1wHD8GFNnls5M9JzfX6IDPgqS2hck9YqYF%2BF5NHlidcow7G1Ur2gMuGv%2Fsqb2bgLAf30CAbZxu5VTOXYx3OSi2jaNPcnRrNkyPMPbh1L4GOqUB87%2BM3%2F1P0rDxMd0UooXRGFNNp0VPdSuAuu4BGMaq3x2b2LCqvkehdegpqJrdz6WT3u5r%2FS57A7baR7oVJLOoDRkjvdkjdUqeSYOPbg99oa7FpEYg51EuO%2FVnjHvPw8OkOaCvsISl7AGdKZhw55rNljlEjKdVkEke48oXU7TXTeZ%2Bkkbc%2BokS%2BcYzuP3apyPpLhvmhXNCLgMjgnkYoPGaB9%2FJMEO6&X-Amz-Signature=0f26822dff4686b1592500fce47eb03702145239468502fd165c4b70e186b757&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

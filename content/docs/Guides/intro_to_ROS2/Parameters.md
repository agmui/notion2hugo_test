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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WNLZAUM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFy7V5LRskNRLDSkhu%2FAoci%2BmuWwU4%2FVvDvdN5JDYAtEAiAoGMvHIGw5NudiMvA9A7xBhVN0kJuWKvHp5zc3IfU%2FUyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM%2FYvKFF73bKOFm%2BXJKtwDNp6ME2QkZo3%2FXP2Wu03QHlo5Gp6XnMrhHijJC1s4JbDEgrSgCCjYVia%2BlcVCIsD5RPpYFI52h54wznYBQZ5h3tLpD%2FNrJhlDdE3%2FDYAma28gSDTgJwXw8WGP6%2BhrpRFjvASb%2BmxHKSGLUp%2BqqK96ozu0JyvMBkHgrYJ%2B3Q5GYfAA84%2Bz0d3kPqnnw00HsozuRgAiD%2Fd%2FzwohelJturh7tXkweOEt%2BUsvhjoJ8eolnj9gPfO60vGD3ySj39RgaJGmMrwmZ%2FmKr0G5UvExcBYuJxNvIEZ%2F3pybdVqMds3h%2BnUBgfA3T4r2Saz2A5sYczNCP6Kdoa3yGfxxNFWfCPFb%2FcCaR65%2FMaFS2SHMyI90ZHtDixKKSCZlmfyFxy6dfS5dCpZ%2Fpya5iSIWkNIh2F53z4BZjpXI4EFh0JsYEy5PiJb7z3Or9xDkCnVy3e%2FXAb%2BWDzYi43y35Jt3%2BXt%2BFDDezfjfkfkm2Y2sFUat56RHOJQmZkq%2FwpbGU55zViXFyAkULGqD%2Baoc257g%2Bx%2BpaA51ubRn55z45TqYZubPe5Tt7VCR1Xxxj%2FCBnTzke9lCCBOMQ78TsrxQ2NEuK3p6YVehT%2B4u%2FAg4OFf%2FDXQYvVaGs3oX5CpJGLvQWvcBnbow3oOIvQY6pgGOfVg2JkUIRGx%2B8y8U6fe5blgg1zJbta3iQKtrE%2BWZu%2FWQgI6awBnIDl7K5WILLbFQQNBKyam%2FP1IjYuYVL8lsRb2mJJedsiFa4R8g%2FGyyjbSVbxOmY%2FeG0XUgMLGD2KRG4TOEWaNauASdc4ymNGL6TR7jN18LHPXrqiCYyVEA33hNtLDQG0jhbY0WBgwVTuPGsmgXU4LGko4CeUmKlNQw6U6Cs7EF&X-Amz-Signature=4be2e037a4d348bb77852a3ba60030bb803b7a868de835adb2d4d07c804d3e7d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

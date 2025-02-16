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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO7VNR2H%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDSRogrwQihXbLqBAnXw%2FgYrRJtBhioA7S2cZYpq6CqvQIge8ehBfb%2FrA%2Fo7P4%2B%2B6aby7V07hgBZmMefXdlPkwVG9Yq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKV%2B8sJlss2%2FresfvircA5Y2GRuSL7lv47p6TVtB81bvrtFy%2B57qolhbfOwYP3grDvZoCQ1fvUM4hUyk%2B1HEBARLfJOE0tvTFh1vCLzRWfnxeeGuQ7k2dHwHPbH2SxUYlhs4cAHEUC4vnNFXIDvfiygWlMD5VWlTU3PFi5xGHM7GS5Vpof3%2BBlXC5h0Jy928Ib6ONJ452SW5vGY0XppRGVOPVx3Gt2pDbvGXLtV9ATv8csJpk%2BRaeVpA4KMze9kGnvNM7fEwmk3WinIKq502WDbbzq4SfpsR67QQ42%2Buz5LzD0gSPRRmXoTgymFrHzSULDtSMiMbpDWoQtECgqf0vyc3z%2Bh3qLnviAL1rfq%2BVkpOfJWYPmzUYuYD995qF%2FELCDMi%2ByJZCo4ZJUXAbmfvFJXuSuiJhDawEXkB2mACqdPS873VQw3QoQrYiQgrwnNksf23o8zH4V5QHVCSrhZK%2BerNjwCbxjv04YiS%2BwSJ9YuEpnN%2FWVrT%2FgodalEwIkemcryCG46%2FbHOwDjGjmudGowER4OJSshV0Ve6nRKoiTOwGB1IW8L6TbHvPWmcB4UApGfLl0L9FjFXtg2kBEG9JHpa08wbIIYKXNKgY8oAflBZrW0I%2B7ELuvHWmtNXido5%2FDxHvP%2FM9Tb7YKkaAMOz9xb0GOqUBar6cTPoQ9w3EyRzDwFMY9mfqmaYyRfFW3V%2BMubGHG4dKxBRxcUuJQEWc8lGxUo5aeVgTnM1Xy48HpHwI%2FSWbq54QE3pva7qiTUKaqZ8tiiY5yiiIPTAsvUWX5tn9HKxBSfrm9oErVtNy4RfstDgZJoHzSaM5StOE%2Fi%2F3vWv6LN0aQcdTsC9fxyYNZp8KXFn1itD9yXs49w5zNCCPheiDbq%2BjvSXC&X-Amz-Signature=a8051c2fac75407a26305f2b1b58abb87ac0d28cc65f0b6a1e311ef4027d14be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

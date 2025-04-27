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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3OU5WFQ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGv4y97yeKfl%2FYagSH50ILpEUyi86LJYSxy%2B%2FL8vK8DAiEAz9CWL%2F98Vu046wWPrZfJ0AT3Gafg4DdgaGoT41FK%2B4oq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCEMi7eP1iixGUx7mircA1pBtRC4XrQ39MBEBRkwSrtOCKxZQp4NNrYBSxXvGDgr8SSVQkIcPFgoUQsIFBumh4SLMARiqjHXOIIDjz0jHN4cWoeo05zVwnw5PehfwIQ2O%2FIYOeaEIMQgz8z6diOIWlNUzC9i%2BaP%2F75Z%2F2P3Fsamv5q7CvU0MwLr9YpFjBBqdQffTE62sFZ7Xsh26Pc7KtVS4MZixYhA2fpiYi4BlnTCO1X6Re92rCJC%2BhzhgTwUR22xj%2FiDXVMrC%2B35uQ73%2Fii5gstRTpJw5D0oBOHsvFe1Soq9zqWj9kAnoLBEdMj0MSxILdYnixKRIKCAJkAA7D2fL%2BQaMiiBl7TD%2BO7tLjBudnSd7%2BFWgpgQ5P07vj%2BlOQGB794BEPfwWmff0qy8nHRU3O3OZdNdoA4cb2EGlTgGdw2ER7OYQhB1TgrWpgqOLwlbptlZguOP1VsU%2FjFE1FAH0N9ywmDlOgVloYf1wxcnop0Yhk9SwwnE9BVSHUVOCqxRgPKhvHx6EzRZoQYJwOiJwcWMmqbfpBmKQ0refCOMR8gxHiMg3yHgLoI1kJdA9aIMd%2BxvlkJu2Qyt%2BbaLVOTC78XhQizc5%2BhfQL4R2GOPMojAGRv9oT6ttRbAtU5c%2FYbi1CmOBxNNiyYcRMLW%2FtcAGOqUB0TJFycT7xjwr1%2BjoQI3aH88n62JcpaWcozTM8NydYSmgE04ga6miHpzFmZ%2BWtRQW9T7KXMyNKOzdvoE8XM45e%2Bpf2tTGmwlL2s08MlIwOcZtCvQsDe1zRy5h0Y18pxWWkakC83j%2FBRxvL%2Bk64cz33fNixtAHTKuwfMMYNSSB7Squ4hmNvjMNv3O6y5MTyTWRz00iD5yPxQE4fRdh4qmeRwQrzHCn&X-Amz-Signature=dc9f946fe120ffce449fd0f16d2c4c4df677743f067082d1a03897e1936bc215&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

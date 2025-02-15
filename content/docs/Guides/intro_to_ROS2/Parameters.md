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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XI6XC4K%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQD2ZAQ%2BiITA8NL08VQ6A0tL2Fk7CKFTDpzOGwYzqM5uHQIgRfbgbLjqiO3JfUd5T%2BVW3c7C%2Ba3mSpE7V0bFEK2Mp8oq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPMpkrCRU6m0E6ExOircA5YmDZ6hRkBxrmSLKhwYfko6gS9sO21nWNSyVwc6sJ2xvV2iPEokfVMNmql9MjXh8QdXgXV89hpznpPJ7kkuOzsJX%2FP7LDVC1FeBH9aS%2BCK05eyu72CJKl1jO9v%2BNoz2yk2nqns2Xti45jE3TPAaaT8gA1JKRqFzuiJGo%2FKqZp%2FORPswVxFUfF4iTM59cXqnlWUVuePRK66ACm2T2VwocU69c4iLjFXMar4QgKFHjpm6KqpVOC8iv8WbOwJ2QSGJEjJqgwzdlzmU2CLN%2Bp3QBYiTIuK9UtokI5O1yvgY0yLx%2FEYLc5DRQTVjqnCtzWYI17wR7EOsN3AqtUkXiGzFALk%2BbmaZiIDy7tWPu7HB7vCzddieA0x%2BydOJdGuQqi7aoW3Wsv6n2eI9uE9MZDoYk6PArjjw7zquuMbc9o8TI9NB7Mo1m7mjEoonobAPqRHOpd0dBWrdfmIWDjjpquNxiPP95ks0%2FnbwUfOgNLlvDWDX7TpjZXm2HwlSqZq33LmJiYBcUcrfcJUs9e3xMOmefhtNk%2FH7t0YRDCmS3Uh9lnQVLB5H9U7ygdHE63E1EDDqubghqsYQOTzNoWjtTuWrcDrgGX9RE7SSlcJipF8bjSAJLtOtaDu5w2PRk98NMMzHwr0GOqUBPwWM7yC9k7KbxBGjsQhiZDNTtcCupAZBpQqCcUEQWym1WZy4DHqBm4qj7Ie86BWdifG3xzPAGqv51yOS1jvzhmiLkMf59lbVSeWA8xHsZv%2Bvbs27PXYZ2eH3Mw7Yo7sWxCOyErKk7PF3M4%2BeIEMxM4Wrd9PRbOoGx5%2BWjbfXbu%2BuieHosiHEIBcYfRmrp4jIIYmp4fFeBuv2Ct2Sy8MKoYPtIhuV&X-Amz-Signature=8d41574ad69491ccbf3bc5ab97ca022832ebb87155b122fa90022b1b639e2ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

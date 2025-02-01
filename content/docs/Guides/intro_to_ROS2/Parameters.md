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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU5C6DY5%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3Jr4gEDXj8I0Y097MFD%2BUtiZN1h63S2k%2FinddxqxUNwIhAKuUAU8FgGDWhFs3rSSg%2FrtXlp8w6ZiFqNjK4HuMRUBQKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymNnsHsRK1h3uzno8q3ANq75cbIrph8%2FnWAzwNzgHnqKYFjS%2FFntP42vnPIZxLwsuLC6MJYHZynCzYuf07HY4VyO89tgYj63HcXPLMRSZgSUdDf29H%2F6lYhho7rndzNzslKcOPU1cl5fGAXJ8QSQBloLS35fC81O123I7cEoRwcTFR8ecJKGwaDmXjD%2FP6myREekVDjy5lOX2aYKEyfEkfBFFdU33U8Q09cY1d2Px3bVnFvl63c3AwNBqyHO60AqOwpgCtj5AjoDXO1uFDA2sK6MpvjaeLmuh3T%2BCZEX2Qa82a3lanRmKo%2Fx4A2%2B5qnIW0Mir3B%2BsAvXRamX11Lew%2B9Hv6B2Lga8rRXIt5QClaxaMu3ipIPjf0mxp7HLZFRAwatlsZr6Gh%2BISqSuY0%2BYmLlrKflfG%2BZ9GMnCMKSFz%2BrO6vNkMlIoq6ck1373pEh%2F9sJbNIEhLW1tlLQ1j495ToG9m0t67oI3CN61WZHjgxMLn83JiPC%2FlX9fDN3WXjB6HprZtSJajN7yHqoMoF5ztQI20Ij6jCig4RA%2F81vC2lODtJ%2Bp8OKuoogjFRDb%2BS1TVMxus2OG%2Fh76X8mee%2FA6GtumfGP3qWciJ74tLOaRnOE3BhJLHB1HpV4%2BysbH3CKIBLdUOWnGHun5g3BTCH%2BPm8BjqkAXzvGds5sdLlO943mALuW78BwyFVUz%2BgfPHr7aL5qIBAn2uDfX4yUsehqjVsCKfe6eUIuMVZtcaZUMyTCk1SaSrbylhqRoqCGfrsb0UZ9YhhV5SM3J8UHNV5Y1k6j9VKXx3y%2B2JGfw2L0SWiRi4vypwl2B9tmFKEpsr5FvzJvxBwxbeTlU%2FKfjhXPITjfHzZwh3Gdl%2BspvvWREPCX%2BboAt7E%2F67J&X-Amz-Signature=c87815f3710dde06a7e11d731ae34042ca416f002ee6b58fbf158929f1c6f40a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

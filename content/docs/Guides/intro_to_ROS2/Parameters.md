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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S5UCJAW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYaS4vneIWnDrJ8e7uyWTfBxnGPJBg0UCzBIWj6WCQUAIgETaS%2F3pVsipo%2FwtMIVFaKIDD4I0p%2BeYf1lbz1fcClXEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNOb5JrwTpRoEh2pCrcAwT%2BgsUY8UXDpvtzcFhP%2BSscgvbwxt5qGzdnf7L7b52y%2BN8RZBy87QIDpQy5QaTAWV8sFmUOlVRctrOoFVI7xcUephKHYZO3C%2F1tdxOboeFpBt10Gx%2Ftkse7VxR1rWEHrPOP9BB%2B45t5MKuWF7Y5SFT4awgfEpHbgOj79iF5%2FFP8B8l4%2BjIr6lP65g3CDTW0OCfXeTzrBYvc61I%2FDcdlypVw4fH7sDRloqtU65MBGmvScm7H2XKNPc9bSCTMPoFmVukCWSi2wjWd8A56HlCxXy5ucI7GBs5ACeAJSMj0iRethDWXOWlorRRkW4oR6u2MS6I%2B%2B3fKg7y81cntXR9q%2BGXYbrTuPYw7pjdram9W5UKoU%2B%2F5QRscdm%2F40LQgVkSNLKNdqdyoQLwX7i1nmRkeUiMrKVY03DeqWSSAyJ4VrvR%2FmSOHEsatQzInECdft0c%2F7ySDSWhx9l6Cx%2Fhx5u%2FXZBNO68Y5AtsgCDJYY%2BSFUQlyyS3GIk5O9a%2BJuHl%2BH8QFXZhByCPN3bOmhZrddarWFkSLYnzdxkIUPRvb1APEjrs4byI%2FTUGkDE3shs7%2BsEeBYrA1uSAu1DDdH%2BYsKthyX%2B2Grene76Y23k6Es%2B4oqWm4hEhFBxVxuOhA1yCpMJLj4sEGOqUBFalzIDt8DdgDLqiFrszR6RkLaroIZau4KiS3FOyfZ%2BI3rL%2FznMt4aLuA0mh6GyYtX5hBadYWwRWyGlmAKYcfYn7G5Kf82iURo%2FCfR80kkpU1z3%2BTK1isWgszTKuQGNle7tES4Ec%2FeVbscYzK0YgJ%2BjmrwtVtOt6HS0NTGgxSEVuQf86yfUd%2Fv0EGdCAjYlJS57MWWZdSwZmT9PdT1wzo%2BjhRabYe&X-Amz-Signature=2cac19595a8bb5f3f91053bdd1a1ee8277202144d4c123c6eaa5ad21cb7568c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

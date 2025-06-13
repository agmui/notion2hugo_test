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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H56N6IU%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDYEFCGfEGTnY3GYunkUVjPQAVKLPRzrpQz07pEEPAhXQIhAN%2B7H3D2x3rbSFwlX8FErzxihnN62x7z%2FwaFOhvuCG3NKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2l5rdSKO0ByihNUkq3ANjcLxWFEYfnJZtq64IPKI0upm33Fxa8gYX84Dh9IY%2FK%2BkZ1YUe%2BLn4HFpjlpdgaf59JX9LyUNEyETsi5voFN665npnQ4K7PDoG%2FhWBCA%2B7BkdR73D5xl9QoIarA8lS58xgiXTMD283eyBgLRr0FC%2BayjrtzNzqzDt6hxPSWjcFBkUy0%2FafMOKU68GnUNCu9bdpofwmrK2Wqs1mqnQGFadY5gQ2mhpzYLIfYgyS8JT4iK06AAl33QOl5cfm%2F%2B2UvVmgx520c4LZzVC0iWKFVAaZGL2B0slXllVlkaHMkNsd43paPwGvCvgw4SUlMz52RdGqG4zV0NHMlDoOf7rOVvNu2e2TdOqVfDT8qWCoSMM6bHpylNAJ9lmkncFIKefsBJH8Sw8yFi8QXkQuf%2FoqIrSlOqWQyiUZdO34vwY6t6TnMDzt9ym2t6SInNzOT0WRirmbnRj6AFf%2Bz6u4I6fTZ7g9FTY5m2Ok%2By%2Bzskj8LmIaOYujxkVLgX4HxFpk5zQBFQVCm1S5nZisbVsPlOSQdJqcIKPfQ27SgUswW8WxAKbfBkEh7Wundnk9n3DU%2FCg1yHXMABDWlurowrrws4J8YlM%2FR0Sxd3cA4aDDx1gV132tPcZcWYaZgfaCJrV6RDCv2q7CBjqkAbnHaD6HaiFFpAgaAYfe6IXK3JnJlg9cy%2FzmXpJt2aWHkIKDeo9u4gdh%2BoxiPFo9rEMIaLFpZV%2FBJms%2B9gxrSubLylyJEU7vcL7i%2Besa5zBmTt6YCMLeoI3zmCoYJDPUT4zCw6WaDls%2F5sNUA6ZIbdcGocSDq7ch%2BeCARb%2BO4HBt7M3QthEcDU%2BrtuzSoMxypyJvD%2BPl8J%2FmXi01v%2B1wXJVAfNXw&X-Amz-Signature=133775877d4d52596c3b1592c1105b4b764b77031faaa2a858b4a3fc911b601d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKYV6KQQ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrcig34bxpGIHRe32zvco4%2Betvxsog2BE1HjWkPV6tbAiEA1yCFfJkT2X9tN3NXaSG0XOUoDmYzhN8pIJgYCJnkRSoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdzzmOrSrbzIlB5qyrcA8ZAZCo9vYJbvuMMJUhqA0na57XJY9wTHtorN8ETGbTc%2F8RBtT03b0bnO%2FWMPNVXLHdQfeebKZ6CbGhqZly7K7gpiIGJjDU8ejiE%2BHgr%2BaOFCWBIwSfaQL74rWQFB73rKojFOlYeSb1fi1kg%2BimaNReHU4LkgcBg3YH9IojGqIUVQ2jZfinHnITFp2FPT3BRDwfuzyjctKfGivysbS1gMkt74TDTKErCK6cDQKgI0gSfG3ylmoZVE8V91DyehYXEwoAssyI7I1sr2SGD%2Fp7vcBn601vE6RrokMhBFRoLd0K4jNL0CGsJxJLTF1QlXEgS78dZCd0kaLMOIhGwMdDc6MoEKEaaVriZdkgQBsq6%2BLkt47xvmuR6LTIySwhneJt8WeJVLAZmYtbwsxqaQydOV2d%2BqEMHaH0OIDutztu4yjbq7jsYKwzL5Hzs0fyOqUESqehlIOFqLi6N7PcewfYJ1srq5c4YLqjQK3TmNAfeq1Vqzk67P5bb1hDP67d2AYr8sIvoGjC38%2BND0wO3fg7NER12XkFAtp%2FVN8SoO6VQmYr7SdbxgfWnjqcwvOh2962rrNhEm37i3TTF6IJctpgUqzFl%2FPtst6vXMylm2qdHixqnpq5s4LDqktv0az%2FiMKHS8LwGOqUB1laFHXnd2hOD0pX3TU0C5VcB3ckS7JzzRn9C5U%2B%2F0iMTTRswTXSnHj%2B10ZY5s1HmUDf2j7ikbVywoECDFgmKsb3rE9JQqMMn0EshDJ3Sayg77sFasa0V0INe8p6nxXSOs9n27ZJP1ExXI6%2B8kNgU1Ss9znjLSLzzSaNt69ZwteMz3rMtdcWVy4ujSzkISUfhgUpF%2BhccmsAcR7Zlp7d0mMuAY7IF&X-Amz-Signature=bb72c824cdddee631f9a9000ff8cd95ed371573a8a3854ac9e927186fc0529fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

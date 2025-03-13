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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB5V7637%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8nADVfqyGQ4jY9W3lDU7hEAAkJSVSnJ3T%2FpBRlTlnOAiEArH7pCOx6z5uPP0kTJL3EEaBxYkrdxZeGryKiFPtdz0AqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8QHg%2Bep%2FebctcDfircAyfaoZPvbxIXQTRR%2B0z46wKQHlgL5Z6dL4FW9oKWn88p3qU3NdweLXuZRN2I48Yva6zWa2rsjdprhyVIX32jdYImcBL6GqktRXY%2FFDr%2BIBV2%2Fe2BH5BCXW2tDgWcTYL6AbLhNH5bAdePYqTvGWpgYz9ysQtVX0Pie09T4Zp1JCsHCZsdP9EjYR%2FdL90a7Sp7gY6su9Rj8UPYv%2B4EmM03IgzWHE%2FSU1VnRPBSFaJMV%2Bg%2F0UZXRzrAiaSPfxRdhSc2ReRQ99IVdLL0a2UKaAJUUt85OrjkE1TlWHvsNWkzXVh3ToKj9mKZylLRHZEmLt8J%2BpbREODIoMYhgUpt%2FvXcxHkCiXLvx2UGUIM3MTZGTLjVV65OIkycYK5fVGuIyinQiAPUVm%2BZzA7%2F%2Br66Srx6FKXaffWMW1KVFDS4cmuqILADZTykXhqoyhUhNKs1UF4%2ByReKgXPhBgEl871QmGkOCd21hfXVZD%2B8EnowpEaRqnpDneMdSb5SCRVujkO5sr%2FOQ7Z3nsX6M1frKOPlKR5wT6FxPFWvgG%2Fobxzxwb5WGvGl3%2Byoka46y2DxkMupOw9ifcpEKXWbCHbn9sfrOPVjsUmb%2FE92K46MNbu67KVdbfCv7pVMiiCN8PLagb1PMIaHyb4GOqUB4RTzNqjIMkwokBGdw0RfflapAsW5vnpjEjkRIawU49qhJFWxFXb4wotLvh%2BIsA6MviaqMrQP37bfZix7vUZXboI39JcmNJcBy0cCjo0EZB2VNaLdIHsndvSp2GYhTFEFiR%2F9hfy0u62CYK1Oj7MWAylQY6t8lt3%2BOm1RJo8zoKlYFFu63eNL1a1AsTZGv%2FETyj675tmUqLBDTjqw9yBsn9RsjsTq&X-Amz-Signature=d56deeeb305a0644d4533e9e773c2327b1ceba699105cfadfd47f21f67807347&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

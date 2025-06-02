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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655BG7N2J%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIFRLttRBE%2F3mejy7j2aCd8aoB2f4iL7FKd%2BgOr6yNCY5AiBJqmkKpNvyZh1JtBPYSXi5IrC5M2Qx%2BvTG88Zi73N5oiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI4HWKF6VbhPH5k4jKtwD%2FEsb2ln%2BvWVA7JxyXv%2F70KDcSzvD%2FYY1JVQTtTv3G6kxFAfv65MbLSiClWxKf4ZwiJORuagAgL0asvpuNwGxS3QHAEdaancMPaYrGx2cjH9qF%2FMJHrlEUFw%2BS8%2F8MVYuyNv0TDBaaZVm%2FiNr1PhEP2Z1FEG4%2FEt2vqbVQOngPTTrvwZc%2BVHt6FEMRy3xC4BQIfantSoE8G0LOz8L7t5jEGJ2bKPjERg7R%2BfQntwwL5kOgBbLvrZWbJOWZ4kByM%2FGvAHx4oqYfoyuGeRO%2BuiZLait2Osc9yOhzTH5rbhG6ULjWbMwp5MCGdoEUimyyG5w%2FhZhf%2Fo0vCEaDYAM235SuyLapR%2BT2Sa8M1B1j0%2FXqJvkmS4JBBv%2FQqk1%2B4XNtI8pGA4totP6GX9mHgCPSpBK8tlT1XKxPFrFQPBUNqUQk3x0yukpm0TVBursspg28GyuM2MFSm7fiWr6QzzhvZHx2aO0qF89eH8DXY4Pv%2FCafZmrEKTTXNMwlMbn%2BqK8gp%2FgwQqqIy2ez65zUniAiK%2Bfppj6oYlDuQjVEr0G1hLNcp6j1TdXEMEOS%2FBcYE%2F%2B5eAooLsbPLFANp8DrOYN41zVOipjOvNrS%2FQyoE3am2c%2FHab2zNM1QdQtGeCR22owz6%2F0wQY6pgE4srEEH747TUVssmIE3pLSd%2FW3ckBJ8Se5wPjDvAcvNvS7%2FbFkp0pNJk8eT4OptGs8QZbSLkDohWYng4vbzpAS%2FJkjIYKFa4ZQ4DFdFMgM%2Buf8%2BtT%2BrVPeh%2BKjpMZmEtPxslD%2Bwmp15TFQp%2BIlTSNOFrbj5eA0bENMo28QW2B5%2FvmBpxhwwKQEM8dCJGdteDeYdja1BHyV17kNEEcH80lzT5aQvreO&X-Amz-Signature=bfdc253408f0c6dcf8ce4e94f971959f8d6256641a1368f2f61f7754478f82ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

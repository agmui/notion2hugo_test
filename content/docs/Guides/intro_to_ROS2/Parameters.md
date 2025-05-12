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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673WVEKSR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDYHyBekRD10qiXUbHC8Crx7utHMpcpCocCgzzdJCnXwwIhALDueyqFbwRYYtSI75yLvP1XoH7nBx5N5GPq%2BVUSd%2F0hKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGtpR4QLhg%2F0dULAkq3AMn3257v9NIV%2F%2FeS%2Bzr%2BjcQp9NLD0dLJd3hl8l9WD%2FCGjF11nDljvGjqP0CXERgDOJMW4porWvV3pw%2FI8FrVKFUoYXVcOXqC3lPcRfRpgxOMA1wQZwpQ48ykNzmFqj8Z5AHhYzhwGv4KJrVE4Hrs6sxwXiu3EX6gpPBIsHGQzHf0JESccd198Sy2mU%2FHBxUHnCr9VgJaKBOXh%2BQ5njo8CKFFSQx%2FrUBFSu9ouHQ2zrJ6c6ZFywfdWilOM3DUivcFjgETcK7e5bhFWBPDWcvl2e%2FluWwYZckCWYb2t5SBGQhAE7HwLrHFWM%2BKN%2BYOcdPSV2OOJWH005S9HIytILhfPf8cs%2FEdcoeO2j8LRE162NiDewcRTU4ko3MlOsIytbiXkc8ESvhe9jCGfc88itMRQ15V2mpGMUP%2BB0AtjuY4F3dXl5vSEZqkiBrRPJyeTEoE4aNmRjSn8borIf2905cj2edLIFZcKfYu55w6ldZHjiz4WKKon%2B8Ivap%2BO7DCGA2DxafGStF018g3%2FHhFSK39G7nnf94JwiwJPIDSPUuIeVxXNsk2rWnH0u1jkC3Ff5woCxVAb3u3e7piMXQxaRUIHeDGELuGDreI2j%2Fq2fJRtMOxrwGnA9TCbbcNDylbzCm94nBBjqkAduf7i5qAhdW6YdvNkq2ySTgV0IfVs0A2hL9cOmoGiQ9IZJklDfBYPo7U0m%2FjWtH7G%2BIO8ciu7boSeym%2BHGewi7OJKIo4JhVbqfg1axzr%2BvnPRGyhgd0lOgOsdiPEhL1bzv0d543%2BuwaKQbYqdwsMJaBpYXR74qecjvDmtIlZHj7FU3xJ7L4UrdufAu3Ict0%2BJifARBq%2BXA%2BEwOkj1A23BnrhH%2FW&X-Amz-Signature=55ebd324583482899b68f32f8ab6c96f35acb8e8693e771771c4a52d2ad34864&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W573GPEN%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDFC9dtc3fZGkmvNCvOrcoEsR1Fj3gSEzkx7OZR5EeeFAIgOrO8mhuARacafEQz1OmP0NxEIBKWnziG%2BYNgynPgpt8qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH19cMhZbkqiS8U9YSrcA%2F1hJDqF8gZA80coEahMsYTigFEtjgpt10BaTO3FQPKZ3JABBI7QiHwbQ6s29S%2F7VarZ27EI6xGmIQs1E%2BdGRFr1vO4YC2J90mmW%2F9t1nauudfUPdnIKPQp0d2gRSJKNHiI02HaLiJwcLoEO%2Bhgmln9Ymhsz6R05fLuVyXQ%2BlBOWuBQS4l1kAuW0WH7mNvdJiHmS5IqfsLkAvB4cOvKCS1bAvXduFRSIxc5V%2FkFT5SI52mx08OvQzAFFE6eTWdZ0rCPhPmUuOLGjbRL6gVsYs1ez1pFlv50Nfta%2BXC8kLyb9YHJZyT2FR%2BHHV9s44z%2B2fkkqtWFW3gMhfoAFcBBuj6gDpP%2BQSf6owKJlU%2FFCEHBQIP5H3XgXRNv83C32NluLNC4IV5WBbOWRzyVJp%2F76UepHCqpTTWUzGeixcELuRAqzwihO5Ih6oJJLRknzH3pWhaTyjS%2B6wC%2BjA57fBgxvWH4e3aw%2Fz%2F4dG5%2Bx83Krb0AF%2BLujblPxhJyzSY%2ByeY%2BuSdUQ98nwHeAbWscsCmVHKC1DH95cSq05eGwBXsiZoLkpa29iyb6KUeIZLQktELMMUQMS0ezX75XpTBpPO9cRmHskOw42rZ39euG%2FEcuEJjW7%2FFy598uNqoKTZ96IMKWH8L4GOqUBQhBlLpWq5d5Rh2kyc3lVLfsLgn%2F4X6RLlZ9zwbKgpF6BSdblQR%2FF65hNuc%2B7PrkRu7TBMiObD2RuBKTcSHUsY0Jmf7iYpY5tmnddAGvvgIn6iXJ50y76HRbL%2BVilLyVDcVJPe5U31h7pYy5gBvGiiyJswYJSlDfE3u%2F2DSyYfaJlmhbZFjauhoi2kGJyYMW3B6nr%2B%2B6qHQ2LYBA2RPgq6av82Nrm&X-Amz-Signature=f46d820b725b85efe8e1c9775096f38973570d0ad989a937e91398d997cc7d36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

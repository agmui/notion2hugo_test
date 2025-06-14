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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWD45HWM%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCCJyZgxbCTxibI%2F9l1IKx44nAgO0OVnk8ySJV1N34fKAIgDtiNlX%2BDUfKI9hAVsBkMV%2F54LflpENid4gK9Ws%2FUVIUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDA4M94oYC0ePKnxhSyrcA%2BQfvzQI4s34TZpWB7PpuIE5nW3HaNUcdN5Kmd4XgvmH%2FwSJfpz9vZhSlmsvHMC78BcVrJ9JNCYeRuX66ss9rAS%2Fhm6VkG8X9qd7WmyqDi4oUmU0RlJliOrdFC0XKomugjanji2exOhLpzpN6bCuffQibiPf1SobzzuFNo2ssPI1GS2n4IPbenuikH0AreM%2FrPDGkjVIk1KTbn3Xz1S9b2B%2BbZuG3gtnUGrN2fpEQGnI1J44kNrpF9NoS0tj4PqMD58%2FWjOwbaXi%2F%2BpC2M8NOLudsUIOG5DNj%2F989U%2BTVPcNLrhz7yWtQ1n4%2BsEKwmj6dXxwUvYSJwASwUy9nwR9zVvnwvJtl6NBVTE1qQwyVSTOFzwKwuczrfRDps2xxXTfxBAmx6EmNydS147qWYvKKUe%2Fn2Xk2vE0nWU2RlBonbUpozxrhs5vRmjG8LKnxSAVRqN4x9MqZOz3Knik5ZYE%2BG6%2F4x9jBj7VAU6LlOVIVsI6RrkeVr6BmYaayZ31%2FaLD7ncxzlvDHRC8%2Bd2jbHAaVHkQB4wOJJUnGpjH3K8n5YxJS%2Fp3aisKlT6yAB%2FG39vZ6pR5CVXrOZ%2Fkxq6kwvK5G48cYhIs%2FdgNV5ksjlWvgRThCRDRGrNdbbAfg5EaMNeTtcIGOqUB1OT1jtP3IeFqMoWTZA61EHo%2B5AmTHyxOiOA%2B5IJ0mAABhWUoeqLdQ%2B33lvU4Lq9PadWlPko%2Ba%2FAHp3VQlkSdqYme8sPE3MptxewjxDiI9G0Oo7a1NlO4ipk0CIkmkhS%2F9%2Fhii24Z79%2F5CZvqpHR1c9hzcZKuhmo%2Bm0Mv3kep1acRjp5Ucb4IK0XTnZpj4hyU%2Fs8RnNEXr5Vgkpa4nW0x9OpS30i6&X-Amz-Signature=547c86635ccd6f7d89063e3f1fd7446fef662d7dc5c695a733aab0fa2974433e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

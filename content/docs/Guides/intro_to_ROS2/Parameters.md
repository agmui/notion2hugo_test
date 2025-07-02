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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULSU4VDD%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvJ770TGyIx7FOlr%2B7xIvLmNBJIRQpykN1wUlHwEp5wgIgGOlvl5oi4gIAxGO8T4CNMjmUUmHQ0KIhaRAZHP2MHNEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEAK218V5CiwS%2BG6yrcA2KEJDUoSjluEdGR94rq%2BKdc8bgSJ89WqfWjFcUMdIgVai65MKYSOLmfgYUbnuIxJw7pCEs0A2oIY%2Fexjivk%2FbAgCaqlIZFjApJ5a6OF6Fo4psRseougWLl4WI1qZcIF5OJdzc7q5UgT8xkxrvlUL7sNoSKqCNyb0NB1SRr49eoMg2nWf1o%2BTqSnESlebcQGkPwtgZ%2F1sGewkqIOENd8cYOqcfQAPbb7%2Bp6O8qQXqU%2BqPKZmMm%2Fgmg6tgzsPORvPX4Tra0rgdzpOlzRbyQ2lUjz%2BgETjk%2BHMF3K11UIlu6eZ61pJawV89YLmPPNJXPX3Is7p89Qm%2BkG7EfoYuMnB18zHhyYpta8kexfa8sYKfNwz983admv9oht3xA8CCzz93GJXT7QDFvcNaOAFCVuYfW6ISU%2F7Wwsx40QjbAthclxsySKMaBCz1WktPejitKtzzYrAXDOr5oagrr6870K%2Ft%2BfeCFg9HqtEgngk8p7asM5vluHwIgU537hm0u68ICWD%2FHlXMO5QF73OnpRj1%2FT50KOv69Sowf7r3avvogkmPA0JdX1ltj0%2BAVRJVg1YrEWpPoFhZgGssOJTsNZRii0xCjuDhrr4Y6gwPWRaua4BJc1%2BHUXWyOxr69jTQEvqML3ik8MGOqUBHKUVXNlYce3ViZIqfN4Jxt3sB39jmopeOw%2F%2FsyD4Muv6LXKhNR2i4JkGGgFq%2BfTrim27BMNaqKXJhBWnG2KSvztjDL5CGb3dYR1agGxSuPm%2Bdzd6gebsEnocEEcSfQxx6IBQfpCFZplUXBIp9kZArk02ybrNaYPyEEPt8Z%2F1rFr0VrQSWwvbXWIrYMkhrABG2R8rQxnZIxjenTSRkAbIkfKVZRBA&X-Amz-Signature=8a10cf71e24e811d8b5dbf9c5edd0b268b88b22908ef5fc4cbedd8200de3e2a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

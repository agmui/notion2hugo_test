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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CQ4G5XC%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsBbgzI1V%2BRA0YP8MW0EMy%2FBN6vbVgLprX%2FDotOtQfvQIgC5TNpAtscI9o57nqpA76KOH6aP3MvwDZzo18D8tHJOQqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgKRqXGT7MWhKlnoircAxui9QdtVW6MrCCq0Cjpi0rtX%2FlH%2BwKSzQy4qqoU922lOs0PJP6UjgmX6nsZHS8luaM6hvzfmKBSN3USDxYSZSX5qNdmxVLjR2whBaRkk3K2JdbSUDymFO3oEU%2FeqalgPmK8esWx3fhWu75oSEtzo15yernpXTYfC68FXLEykha8gHRWaB5XpDJBFRLi6fU99ElL0gAUyr%2BOQgxvLhMlw9SaP%2Bh%2Bd6AHW%2BoBZqjp8bqeOQoRzts6gNPQtMGupfZ4gWbXbdsj5UfaUqp2tSfg%2FSrEDd0d95gkeP%2Bvd5BPi2qhaeY6iva%2BT2Dmp0nUD4pc9BIWMzlkc8kfx7EnS%2BiQkZouBVVTNqASVE5lFkqS5xzbs0M9XBAYJmO3xw0H9xI%2B19NCISQTuIvHJia0lWtI1BRQxmtMzTjyVyDYNghAHoVX6sx7LhOgxgI8YGz7poosdgtqT5JFE7CWUyzW7Pgz5%2BzyMug6VhuqNoAl5%2BwjUviF5Azrm2BsMrz%2F%2F3wl%2FlVOYfCbx85mp4xUEhKJU9xYZFJF5Bn6a6KJGE7D%2FcUHpfzumFFHJVUsTp%2B4aA1TT8tQ8JIj%2Bhg6HXUvZojBomqtGkfl9L4YgL0H8VpGpP%2BNe47XpeMPzolIYl3PjY4iMMSztsMGOqUB%2Bah6Qo%2FOK2j3iS2lvjqTgIVGlNBHYCYnlAnIIrLpTC0YOCq5iIgNoJQvKmZrZDtPyuRQHm6pvWt4YbPvaHY0Mn7FcRhs%2BowfKh1f43pmG3R7KmCyU%2F3SQ7aPT1YjRjatXJuu5FCTw8XT1Z1TnuPZqmMid1emXTqj%2BkmIUwHwvYybsXff9q9ACBHOUgKl6w6onVT%2FNqxY%2F2Q7uEshlBh%2BUa%2BvWUFO&X-Amz-Signature=f3c05835687d64c95603f52bb791030f40f077a5f6fa31adc558175a6950be9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

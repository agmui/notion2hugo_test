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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6HYKJT%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDkPjqIPSHQnTx1pw5MruASfQHGuwi3UODYU2zDQkfYrAIgIx0hnLOs493iE%2Bt7acXEWAHc%2FE89B%2FLAnlPHac4qzVgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDCDnPB9m6ekbamG4HyrcA%2FecWs06Ygb2ccPLKBRwtTwsvZXfY2dQdJ%2BTQHvB%2FfDpQRKwkdw3Jg6d2wxV70hjyI9CSS7maGzdM%2BJDDTFbHcXFNhR%2B%2FxWxwC3SlrbT1UbW2uzVBTuSB7HHiVpaMAoM%2BGJ6yQCSzs9gFNylR0xQA3VhDgVMi7Eyrc5j1kCzoW8xWqzWqY4NaBknNs0SYaNWS2ZUJSUhAUc%2FOELSeBEsFZ9QTvoyt5syem9UCGipr9AAftPkABvZ2xE2JX7dKbSX%2BxFCovuysZDDxEnfRjuvY4PuamPf9ieX2KWV85RznVYUQP6jWYoT3HKjvrxpKGnlDMzpTIoc49%2BmwaJZLCjb7T%2BIeP3eIqfpq34bumgh1lN88zl%2FYUcOcAdJuT8EK10rB%2Fu3YU0tTWZs0h06vdWhD%2BNHyOtT4kDg141FNdFkVZgZB0MuqTcYuXR%2Be31qzF4KtHmeNG%2FjxGWqW0QItPLrOvnDimgKWAh%2Bta4uwBMuYoJAYF0ToKzEY%2B%2FwsJ6fbP50J%2FfjLK28vBggdyqpqtTA7y01dI1ToZGkEfZ561nJu9g3lp5dY6HFUIrH1znHmI43JJ0wCQS6adBImV4CrmiCq96lTQL16%2FoKozThPdw7MBXuosOtCy0KgqcFQzaLMOj26MIGOqUBXN6sDZMe%2BfzeKhk7krIziGNCtwq9KH7qiKkSJPq4gJ9IzCxh%2F1oMJcK6xLY%2B5LYu%2BZoZNmKWEONpfT%2BeYpDF720kxNfOI7j54yQZXCW5LTy7GV75Ic6pzhfBB2azlKtEI%2Bs2BF1ic%2Baf%2BFiHZarlQbYnemn%2F7d3iCdjIc%2FPcSiv5BpxGIGUCBKjqTvtkk7hlPlaSaS%2FKseQY0wkNoSuokVgbIqbj&X-Amz-Signature=0cccdf46a3b1dc9cf3f7653bc7b604fecbd3209662b1f95abe737c9ba0a6bae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

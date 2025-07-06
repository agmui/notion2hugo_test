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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPIB47ER%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDAasTbJaV0czFZZVSYcJ7IHYcYIHgiOt9v%2BrrJQLp95QIgR9ikHsTNVbNM2jT8IJb5gbMPZ%2F4KXrNHe4vNLawaj7wq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDEUnX8Do9TOqtU2BYircA513S2o7vg3ACdzeOLgBrPe2yJZ1ayM3t5JysQR6riAjh5%2BmQ0nhnPukktvKc9lhnLqhMNyCLGKntEhWc6hgrhN01hPbDYg4i9WmL7yNiV1jJp1plgLh%2FJzbUedviPoKVKwFOrhe48qp%2BMBe0Nbh3mybLkNzW3YVVN41moGQc1lT6OqZl2f6pO3NHPeos07GqhSvCLmspz6b9U5sNHZa1GcqJhkhln9MpB5dO8cQi46UNT4mA1K0U%2FqXr7lce8nMoZ1u3IhYLDM0Mn8COhL%2BKlZ%2FAOrHhh1Aim4dPfzIitOKQ8nR8%2FTkiBl%2Fy6TQ4n%2FYELdwtrA3fTqkp0fvleCHTL5nx6iLBJieBNL18CVVvjsFjedcx%2B50CSyDD0fsnkK41GCSf5UTQVW8O%2BqmQXZaCzOYvP4gW5b9M88s7UR%2BAx8bhl5%2BT%2B0PBoo6H4FbKALFDJuax%2Bet%2F%2BTA1fL%2FJTCCFfhEW%2BC4TyHAzCojdRmlMvJ3ekz%2BUJ6hhZCyz2YDAj65riyuCrrcQRZWPLn2NBs1%2Fy4lsMi%2BJ6%2F236Snepdc7jpb9qht%2F%2Bvju67Pjq0X7jNIkUfRUYgVRyc81wiDRjU4nSkdQz9Sc7bwtWJYmHhm8DMWwEvew5Z8x%2BNagCZ%2BMKbxqsMGOqUBF6%2FMF6qWHng%2BLwbjttKpdRthVNj2exfKyDuzYMnV9i9Hd%2FF8D4bpOJyTZWu19hLwJ0SM27jylPKXUsCS6u2Ho%2Fu5KDgmaBvY1v%2BlmiaUm4NJSGQZ%2B6EjZXuCd2AkdX4Jy8cHcfd01YWUIlnHc%2FTgj4ImLrV3dd2PCFBuxQTh0d4HLUk2aqO%2FoOORsN%2BVEMKHR4%2Fj6zya2Za9%2BOQOj6hjq5v1UbsG&X-Amz-Signature=4526b62bfaa9716b98635d044fd516774ff00b8b82985cd3bd1ea5c9669f503e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

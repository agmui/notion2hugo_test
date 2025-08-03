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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SUF74D7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllIXs4IeAzWMn7Z2sK9jvDl1IfTSpGdDjKdR3GCBzEQIgR6wx6F2vUYFP4zPCcP4f06ZdmSNfp1qzRZU5zwIQY8Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJ4knvAzT55GahLd2yrcA7JR9HwI9xPjjhUbwP9z4GhBdhwpOMp2%2BMAhvZ75Rxn2PGSZXwWkzlIYYk8HQz79y3CbbKH9OUM7YGf78Z6ZnH%2Fft3zJX%2B%2Fl5V6CV4ZfRA46YtdHLL%2FAEmlZbZ1fJ1X44Hsj59b82y5YVFc2aDYjSiX4afe8zPNjlxkwvWeYFppAPJqC3CaQkn7UF2LWxstDCmc7YSg2FCTfKgu4zIj5bi7amdaVVjZzLUQTcg0i3DvWc4cWvM71Bj5tQYeIs2lL%2FerKgIQfSodS3eRX3QIcK0R5%2FxUgG27hBkJpXUlyUkcEandSBlz7DRQpBXxGQUC%2FdXZScIETNz9a2q5J%2Fz9gd3L195GTA0ohinrP0EPnGxUwUKus70U6wu7kHzR7sI%2BBqi965FPiqfBXxVIh2URkykXuS3rszh4RyxzXmKq4FPcLOlgOrLFa%2FpUyEA%2Fn%2F%2Fwb2fmyT85ssiZTHhNrUm99AQ1qi2DKlv8OOSz0spPEX%2BkzY17gKLgRhZBlyBWpQ%2BlZv3CnN119cpYYzfWgw4YeXLQ0t35CrwqvuqPAj2I09xIJvNkkQE9oK%2F3jz%2BIlZE8J1dK6d8bY5gR%2FTWWtumAEGObyfqaSp2gjJTWnnmdlemDuAeke6DetKFSQDgEJMOvZvsQGOqUB57tmg7o0Gv4CRinhCiRN1%2FZ1E7C%2BrNsmXxZGBli2W%2F5HRM6Les51dXechEye0rAzRL8NMarHAR3mPw6EHcuLd2QDPDfvwTtrK%2B5X1evcfxfHyCk3dTdssmcsPJnmQJxWK%2FNbMK8Mporh0c2jnB%2Fgau9g8U3VRvtdJjZGcvlZsctL9KNOTQFuB4savkfW9uK7Dh%2Bsc%2BQy67%2BFjuV7lTe6OqaOgu6z&X-Amz-Signature=99d351133f9913f73804af386e281c68236707a06cd44cb9ce63192e6d23b2df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

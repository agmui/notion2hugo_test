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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOIL7PWS%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY94tmS3LXOK1DdL6TrzPS1JSGA0da3Zu%2F%2BJOnx%2BIRaAIgNBaumLkIb61s0bMZ8T7WvzMaap57SSxUvmec0TA9mFwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzCVexQCvWTghoYYSrcA1XpShOKyyTGcQIrn5MhAdXpbN97yYBUNoOauePmVMWRyUjHSmKL6Moz%2Buw8b9CFWbfonqf%2BxcZOk7A46yApPMxGIOvGS%2Bfn%2BZuczfyV%2BtGNVU9Jh%2FV%2FtXUJh6U1yLAauU9UVATQnoBsxdHUDKrPe1WIfC6W%2ByM8Uko%2BnTV3UxohcjbIlCmcseab3toQlf9xtgFl09fqxwfSXXlgL4HsMkSCz7dnSd3QunJGR9VjTKt361iJQ80JvcuR1EDR0khSm6ze9wgQkndWVrnCCqJSHk8AHO9kyfuXqTY6OVcEqCiGEm7uBR3ft3krxGpIxdLZ9FqSc2Xdc6tQR6jMP85HiAVj7cn8iaxSTD6efJ93RK25W8z%2FvH%2BNkUy1nInaUN%2B8%2FdugAy5UzsY%2B%2FwBilYblTvD0CS27rQPKvDB6vsK6Gt3NOeCeNFvfEYTLuN4dowXCOKPfqzQtVly0r1pOYCMQt%2B6R7jKxdnneaXGtzyDCWLGZjGiLc7L28dF3zHLK%2BoUv35ZhfZK2VS17mGx6vaqcWSMiyVDA5BMZ0%2F4ITVLKHNXMlOVK3A2MuMYx%2Blkrhr19PvD6TBbTkjzzToePjrUfSEFvjFMuAOGcr5lKj6b0vPbsvWq9adDX4UUF5uf0MNa47sMGOqUB14pGUwN11GsJGmT%2Bayk11mZAHYPfAIOiV1bLFpQopGrIWoIMbEtyyubi8xXgBDL9MS59xteukHk5wS5uGDlNz%2FY6VOBgkYrrtLQewb%2BdNx4a53rtP1NKxBB2AVEDDSZAgKIDkpoCf2yDUo8rJVp0NqgK4SWySf73%2BBnltAuTN%2BvAr6nEB6Q1oqbOVvUgQeUHeIprlMnUME%2B2Z0pUnOhJmWNebNlM&X-Amz-Signature=6de4ebfec8dc7e0763db3f382932fee6a21d4c1d6794995bcfe3518bb1b6e3d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

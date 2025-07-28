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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3C3BR3H%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC8y3ELpRYAW95Ro0PyTkEfBjNNu1CdK3G1u4VEkxyBjAIhAN8wi5jKCiu5rPeDatrYgWzErh1l5SHBAI10vkIT1seYKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYzxkuOySiPUWOjDcq3ANj6ji%2BbI8lKzu7igtrUYAk3vtxsvrxaQPaY5mC%2BkrgpbtmBKSLNduK4YsQIffablPnPs%2FShNKh1H5AvXAGFH3bhOh434b%2F1YOZ%2BdR%2FWhObzSdOM4k6BHnBBvsEPZsYEcufi%2BtCWSmaCrtxD77XNPRCriZ6E31mEblViMLgbEMgc2ARvBrrMQnGr0iaDXdlXWyIwdni%2BQ5Xy5bS%2BsVmzAAAAUN0ESGswywLuX0kWVt%2B6VXpRrZmRf7426u8hYIPRJV%2B6VTfZLTyuXWTpbEFd31nTgvwUgSKScauBpXcldiXJpUtB5QnvecEWpx8Oh%2FVLIuY7qjKvpU91%2FH1aWX3JjhN9NfePwBMd7lzyNogjXvyzbVPVjMRg7k1hA%2BhL002b5yvcHw%2By3kC2di7LBGlZoXNF0bnluFvGLBsdDdNp8qnnGIru8%2BYqF7Qk2mcwOEytlU7JbMGsqJw1HTUyj%2Ft%2BMav9vymEFXYS%2BFG9EA%2FZG2O6EIUw4CZ7NkgfrypNXLF6Y8rRHxfKzODWMP6q4V4hPJr6s4EeroaazLd%2FbTJ11YuXxEWXvDHmpCB88AWhxqFRVNNfy3Swk%2Bs9dLBZdZ4%2B0Z4%2BDemDH%2FRke1Dvlan7tDHDLmPQ%2BySHY9qUUrKfjDNk5vEBjqkAbEEZpbt062FqUq5Yjg25Zxyi7BT8RMOrB4Ds6PwgSgqcWvo%2BiFl62pY7%2F3rd4XJH5LFjwf2JThnzFXYUfxZji0cP5hM4a0IoUjewVpNEFqPabdTr4TsxLgjuuJi070TchpKDAChMhya9AL5FNjM2nTETQyx%2Fh7fqVqt6wjkxX5cnExWDAHDuEexpR1F58TPj1yDIaoJ7Wk82mdp%2BsF9zIGT2WPG&X-Amz-Signature=821a647116e0c0b0d5dcd9ffd03f93719d45c39dd60cf195f7ea29fe8da0b3fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

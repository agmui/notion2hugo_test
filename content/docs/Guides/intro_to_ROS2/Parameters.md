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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOS4MDIM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsM%2FNR1aYwIwKZG0PNN3DNyu%2FR9LInN2WkQihlEuBYhAIgJoHZ11dwZxIeVUp9vOdbqVCz2RPcTSKt6GzOVRgeaz8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGWyirVim%2BmadQ7eircAxSom0cykkB3drnEIGxqseOtX4GYUaikzGi9s0pcJtiqeSBHDDWysSWvW1qTtM0xDBH26w4r6r4j7du%2BUjTDNNwE5igOE9qu8qOOXpyhOsQPVWJ9NBmyD1%2BtHtx%2Fym6pkjGQFmmxoKlI2flNITyqyjvVe0tSNwHF1do97jbqA7sWW5%2BI%2F7orGi2brOT8P7b3%2F%2B895%2B8PkmzhujSRa7ebq2ulTZE2Im%2Baocndu3BN4tsY%2BmhOfuJxciZc6AETQcntOzHs72e44pFt2aZJyARBcOfN5B9pn7FMWoVuG2e6d17oeUo1F9GdhMxfNZ8MtCxLu%2BlM8DXYZ1LOWbtHXI%2FSxVs%2BL%2BDFHTzb8Vi5Eq83lfoFbJg660ekr%2FYGp4%2FPO0Po424rZArjRNfos%2BrgUX95fqjqXatIytrHzEw8yrDXkzOFNs%2FGIs0swgGHLO3GAsM%2FTcxuGCvuUvdHzU0EkMLTcC7nXM1GWVpoFebn%2F15KSS6G5tYql15vbfV4snTFi%2FiToyBD%2Fsy6cLjaHMxBjvQcVuLndQ%2Fb3A6C6FiCvPXj8IifxRrk8rVJ1ihOEJUKaF2EKE8vySm5CTEtoz8z1aORojI41yXSkgB%2F8G6oHvAyt%2FZ0bug1ivJW6vKMTufKMLLsscQGOqUBUE8Iq0vasD8mfT%2Bs%2BwpSMvHVVtQCO8yv5YDxJcVpE2ToEHqh18kg%2Fix93I%2FW7AYG6zCmGNKyqYwRzRPpr%2FRAuQr6I9OQx3dHiF9aw%2Bsuv2kJ9rm8IcKmzCraJVMi8VenchMO1IlHuhzOa%2FaEGycKQYRUgJq6chX3EP0vYg3h79jo9MCNlL1Xu0%2Fgbd5USLaw4n9Ru4uanyCB6ThAqyW7xT%2FS9Tc5&X-Amz-Signature=35c75156f0e1e63439c18eee520385b2ebbcd0e813c29b54f770f1c76f351cd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

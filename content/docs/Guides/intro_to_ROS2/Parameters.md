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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A6O2R2T%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGRB2QKhSG%2Bu6ez9lh%2BAc7rTK4dtkRFQxHY5zGHmfQzNAiAGrI4RgL110%2BZ%2BqOX2l413qqcXMtqOR%2FD%2FpfPcBXyCaCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxv%2Bzw4G%2BFRy%2Bnk%2FCKtwDA8fO742xqf8RDm5O5Qh6KGbsZQAP%2BiMcv6YElbCzwfe5x6LaY7MwzCfrZB7MiqLBP0QtkHaNNNRxmRhhQ33TXKScjF6NawWRhO5d6rgmAKS8nDTbGhUdXM89hICtZlHrxWDPi8m%2B6klpw90VywEhTEkzSMxixV9iwqUviRxJr30TbGBZVzaHPWylbuYAUBa2YVZ0U%2FG81MjR2aEMk3Cx3b5Le9KwR4xZYLhfNv2NawLauZVZndThLMtmp6izgZei1hRyAdV9jOgak4WRaXTzJjTXq4IJnOLwt9y1Cd3kVPeN%2FemX2zmShcEwn3uWhk1h3K3bmyNBkIM38%2BzNZyESGtmpROiT%2FHrFjzP9OfQBwR0cuN3pGlesSSNjTMuoffFAf95eW2YLVmcqU6MDM42fIN8z%2FYKnI9q%2FFsdA6iKZq6hkvq2DOwe9RvIfRhOOGng3aKSKEyLgZOFjI14HKDFhqqfgQjY6PX3ujMxyxh1j1c2zFbSv3Wr6DxdWD7HgGEnqNv6TjRgrEAN4izFdBo%2FmocgCRzbm5F7nxG7zzF3qf5u6q9Pk6F74ddH0U%2BM3Iq5cUo6RtqPs0NC5KikMLPGinoyvG9Ssh8a4EM1gbADqqnzetxZwZZHdvQhki14wobmyvwY6pgGE4H78e8l1UFeSJoWshN3NgIQdAdoukfx4Ufeft0B%2FbIJFCOT3cCx1k4ZYSSHJEQq4ALJGT%2FvgeDZFMu%2FxfqS3XFPzvalYoXxwyU1u8oIPnrqJ%2Bs%2FQvfOSkuYz8EK8y1h7zugmvlwk%2FOEbpSp48XXQn6KsowlFeZwFqPB9T70Ytgg3RzfZVBKH0pUWpdkeT4YO5R35W2ZWcleffhkp2mO0BVLgNKR3&X-Amz-Signature=e4a98916fdd32668c42f2296715129e1d28225c44b302fb727b5c47a6f8459d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

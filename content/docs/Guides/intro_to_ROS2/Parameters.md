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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PZOBHMU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJCoLaL5Yd51p04uVPy01nzbtBhlNbGjqiyk4KrSXHcgIgaddMPKq5GfR3KVEt20tfI15K2oDiA3VE58Cf48rX3E4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUNpUB5TwpTx0galCrcAzPiRHunwmpRUvFxJCAxZ%2F4zrBttpzTNEssJZI1hVlkIxcVx3FJ6kVkeAlTN0J8k4o2vRCYPRmirY6lwsQ%2FpxWlNoj1sp5ZP8VurpwU1USyy62HXrEdQSeFA0QpMfH0RFVFMKgwlSKOPTuCkPzsjP6Y%2BSVTj5au4iroNQTqNBph8skOQq%2FBxLrP4r3%2BmlLRrac1shPTmsPRbC6tf6uCmjQp9YoyAe%2FKazrrmbgJin%2BjbfaQjCunr3P3NtWjpPEChiPAc%2Ffq%2BYoJZmT8Gv73jOQ%2FJFRM6pKo5m%2BMh1RIKAV%2Fdtk8E76AnRj6HOwy5Q%2FYoqLTZrslhDRUTxbhXjtygV1QFggAOXoyuDgrhpFD0%2By7RIN8fuG1XxvPKeHcKorxLc%2BXG8opoXnpFK3O3clKDs9vwi5Z9sQFIQYY1vo7gh7k14RO7RtNjczMr%2By7RBP1XYpgjQtnQcxRCqfSf%2BQNtmAPSQtizWogI7SSTgP1Is%2FQvOHe71SWaHe2TdAnAbWMjW0xpGDw8004h014WbTHyTLXEEKwBlIkCzeRJU31j7cXaw9CVma%2BndS15zUEgliR96rVKFvBdhYH%2BdLnZBjHzeOEagWA%2BcHEpuDoBOBjJCYF3Evf43SJ%2BaWNho6oPMKio3MIGOqUB8NjGElj%2BRW4z0Hdy0adziHcq%2BkzDJaMvEbPc8mVkEGjQpalb02oNWl7Q8bWt8QKwocHuNglopDmXktKKnLVbQ3bVbL1tpUbSPJI5TKOSXjr1P39gEb5%2B2%2B48lEPy6CUS2%2BQM%2F%2BBzvXqrIuebHrClG%2F8L8uYz%2FYyTSpiCAHZPjJUnsYGmFXKb%2F6jwH7CqJ8tV5KGY5Tkjkp%2FQoKIESD%2Fauwlbr4mI&X-Amz-Signature=e7e7a0e781ef6f9ad1857d1bac264bbc47491097911ff774188c0960710c474b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TMOATBA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzQYZDuj8Ak0Xyh5jFk9wLImj6wH5vGqm%2F8akDYMLJbAiBX53GKPVjyePnUBrNb9X0vAMQYbThi2i6vQlLeCYKpMSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMZ2LoGWbAD6ZH%2FZapKtwDVam49%2FaVV20GO%2Bas3HNuReeJI1qtmuDLMQC%2FmRoPiEntrEyW4jZGmy06dNDwVSO9qSv%2BDQ2xETx%2FAzrdMtCT2UlZhAinoy1tyuT8axyhVYyWCd4DjgtKITpkFGsJGFM8DgYFjr%2FP%2F7IgMF62ikKupLW0e%2FAoVmfoHlZ1lspqdY8r3n9uiIyb3Z09BKZY7ax7IT6vMKKFwjRQHjXL24FLBBJ2mdaDcuIMaGAGD7xylml3DCczvdNYtWj5TFcqpJDJagzOJjRfXS%2Bg%2Fp%2FmUKViVtYKAMuLchylocZHvOngZLUapj7XIaG8EbegJo3JVhaia3iSMMaP2GbOPjWOK%2B7GgaAkbZAyz82fbcrsPXeUXH3mXT1Ke%2F0qP7p%2Fywr3r1j0SqxKkduuiaaj%2BWq2Gg4FS8XIIjZqXaCQc8ZMtjg%2FLkcjedStYbqYNI9Y9McSU7Zvl%2FGCMkXu2TOL8It%2Ba1Q8hBIQG2jXEbTf58oHhWDpN0LQc3MIIdjGCBkg3HUxJoa7fZPSjjT2Exsk0R%2FpLRDk8W2NVMBRvxfqTTaiTL4Rkq97720lhha1ko%2BN2fBB%2FZHY24JtcOM%2FFhcYnRqn2kYTobzoXj4ocVHY4ZKQohyZb%2FWnbCLCfCC9UJCpns4w9NjUvwY6pgGNKPNDU7dNRETc%2BSPVEkqiY8Mka3JHBWxUZTfeEBCG1B038jhnaU2B0acpPMV7jcq6Fw7EX0n7wMcIoGNWVZBDGqKK6zdh7lB9TnS1PB9YfrIOEddAXbh1m5vvAX8D8NVi6Gz8h1%2FFRtAZhRNAt9qdftNIL9y2bCe9T9CcelVLd2eZ1RiNPdfBR0AERGU%2FhIjSHaUNnreGU2GJV%2FlARTWpaici8qw0&X-Amz-Signature=be162270f495ff3d42421ad13457d1e9fcf2a7ee38e37736bda3441a5132b93f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7LHKXDI%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDbThO4vWVqQvOMDgg1pUOIe8yS6B34pOy44JKXL5k3QIhAIHTFzM%2BrEBGp451Hodpzi6VSWNB%2FcmgEL7WmLNn01MnKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFT34pw%2BmX5GFQVEEq3APZDJLNjToGw2YLHieBe4lnVX5sMLi%2Ft%2FXxT2LH0DBO02J3paYwH0ytVK6gv76XXfAc4bpOhxxlZiKecUOVyj0tcyNrzk7%2F7Jq2Dahq9P2TZqo1FLzt7uwe556W90yehg1GF5zt8JwQiiQ4slzs6FXJvxspr3TxTLXzGpwTnV%2BBwnzE38MO8Nvq4VHeW1d1VtDD6V%2BDj5vQHdA1yvar%2BYxlM%2BXUDa21IkhniXJxQcA3vU3do%2BFnIkraxDwLNDlM8%2B14LSqDh9IHk2UMbwqWBS9LFAIMiak%2FW1dKb%2Ft8HJkQM3oBV%2BndnlafAYA%2BmM%2FfbriB%2FMX1FZdQNDgFxdf8FqUhOq%2FjlsaMZ77bIJ3bjA4M6dhR4W4heb6rzc56h341AHqAXPp5NrfMhoBTfQF4WIETatrCiPUVquPNo1LvEU%2Bx4tFUFxqwFPP37t2lxKBCp8HbwZLXGqVzZMZvbcAnlNDGOZE8EzulN1dYDDCUNRGqaBmzoJ%2FQsGnhZu9Z63y1L0DGoCL%2B2Se%2BkiiaBdn4VPtB8A0Z%2F5zgBxhMzeiO6U1LX0ZV1s4uyBC2Mp2CUKNBmfNT9P97%2Bri4r6xqTXWABu1VaXrGrk%2FzhC3JQNw5xNHp4E0MK2XlgrR8PLT3GzDM6orDBjqkAdvi59zg3TdW6AIwZURqQ2Twd3W6P5%2FpNVfaWW89hVS1nvEBL3vXSpYqy2cD350hpE4v%2FAw0Zij2Cw0eMjuV9GuqkIUyipwSKGVOFLWb4Tb53Tn6fEZCv5Hts9%2BTtXeZoFoALawVDyBPCJZ06FY95wnw%2Bjq2pd5xh7qNbWqm%2FoW8tVMxNvi4IQwYCqXuttx8tvtzV85C7LQVqaXPxEf9AJPO1wUi&X-Amz-Signature=e768f4e1f5e1720bf74a5b916bf7a2c39abcf7e9edf7e5608efff4cb8af3203b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

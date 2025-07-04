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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM7ITXVE%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDeThVaTugjewNYkoR2ukU8G7oTFpzxaBMZbdJMVUGh8gIhAIW%2BS8uhrt%2BL3g2v8PyvRKvHAcia24yKM7lM9vUDPPAEKv8DCDIQABoMNjM3NDIzMTgzODA1IgyOecXvxrBTgwFWXaUq3AMRjFoNCKsb1hmOGMDAaONR%2FjJ5oElC27kuNNxo68uxrV5QDNydwfdxSUD%2Fp0n7r4fC8so6ufJsPD7MqJ%2FyVcn5wbl2uMQ3rWIQOmyvKTcvzoEuoXaIOPVHB8NwVRgQCmQfLb3ZI31Q2PubaVUOM5GRFZaSj7%2FBrbtfqlVXP%2BSRZqjsz165HEaqYkuk3eBi1RaaWzxUzEU9Rlo%2Bb7ONPs3x81YZaoD1ahkiiRbMmY%2FHI2JnfTx8JJrFXn42BlYw52gm4afjAE6vQjxEP9uuZ9EAC6a5a3JP8qLTwlmQm%2FOkCTBo14DwvJM8RxX%2Bhv3k9pVLfIOgjBSy6s1XID1MKOAQ3sM1%2BO8I9zwU4TpzNS%2FC0FP3NN1oEYEOi4kndMAx3I1c%2FUjNdPadNmn%2BsfXhuhJ9wyD4wIksQqKZITZhIZFZIebBY2PFnQ8fbE%2BoRg%2BHoRC9CrUkQGXPuXLZmhwuaLB20i6tZiB9Bou6yBIZajaJQm5WZkKvNNaPhITKPP5DVDPjBEwql4DpMdFCx%2FQ662vul%2BtamKZhgh0i0FTA7RaP1p%2Bmb%2B1xrdUxLQL9HN9UdR116ZMbLohffxgAFUvWU%2BYOR5IGbpJ8IFR0eGKBSkfS8AFy1I1LAZ7QOJnPCTCUlaDDBjqkAaqpwMldpQ0elvM0D3kRyg9WcBrLbDpmuFHt9tWuhBqbJQDnZV0YId7hN9K%2FoYFqmLAOkA%2B0Ek90lDK1bC2r8v6kIF0PqUiPXJOPEjFqltfNuOxNDVa2%2FjmitdOwu9UzotkckvUDA%2F%2BBHX93YkKoigIokWGFpzD31Us1E5kKdVeawTnTsK6yXy3HhK4l36oxOZpvJKZzTUYAPma1UymWDn6Oev%2BO&X-Amz-Signature=21490e47c33a37a84fcd69c63d3dce17a0ab86c7929296f207c29ae8971914ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

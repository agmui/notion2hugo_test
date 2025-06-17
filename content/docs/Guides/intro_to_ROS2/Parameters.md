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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVZRR4DI%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2Bfza1kxWQXvIYmDk%2B44bjiFK6lo7wHmqFq7tFC2ypzAiBbcqt9A7PvUHRzsBfGynG5kmrUyk2PYNa11RtOQaoMzyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMTaJ%2BuXPeUQe3p3pcKtwDI2M48LnRFWSe4lRfeoasdjlwV%2B52TF6nk%2B0fsSC4aPUtx2BbC%2F7l2aLS%2Bp7FhjIdDr0zB48nRZYbTuFHsoN1D7vBZO37xv2Jk39rZWNKpY6mH9Mpu6RDPUm3lPgXgH4prjffv5gohH2Mit5%2Fq7iXJJ9DOGX7EHJmrQN5wlOCYNk74%2BO45ehAZL58kz1kb0oLdLbavBXlVcwzwWFTvlnxtcewc4VMnwXMz8leimDzJVTocoAUEwzeFstGq2LN71hx5O4hfWcVLOBYcIbUNi2Uz113Qpag7vth4E7h5R0Qcdrk3W2D0pSsxXJWIc0pfS%2B5Hp1YSGSp7dW01EeM3xJnatTE097VXoVNISbyRfpOcnvFtERqPmYewbhoaPo4MEaY%2Bs2Ro7eRHLBegMJAgPVwNK2qpu%2FEF0thjyqf%2BrTIuBmeBGb9p%2BuwWoT6uoxY3r7bA24RcMM8f9aIJGDTquejbUvVOUbpGdBQ0TICWKVxdzRFAJAMv%2FzAES6aQoFjexakkfgelrsJw%2BHRpOhl9r0L1b322UprhISH%2FX5m3q3nq%2BC4cIsSZec1JIQzCwvz%2FANgCq6uf3Aa9ezaqWcZpJnsFIs2ZxBfPW7FeocFF06wvzF2Ab5%2FQ19afGXYu7gw3d%2FGwgY6pgE0ZWo%2FvO%2F3cEiomRm2goKNhhAFvUPNs%2BngFWPWaXXZqTbUD5U0ixhIc%2FvAT43TY8Mx6z%2FRax%2Bb5bXhPSbKhTdAjBzgB3SZcNaVzWWapJL3eUdAuZYskl%2Br%2FLYBtmMRGTIOWKqNCZtn5Asa1Lab%2BI9E0BoYUMOyaUb%2FLw2qW5k1JWjWNlHCWZ1Dcw7561O206DI0Py%2FIMcUrUSGu0%2FgzaBXbJcZbIDr&X-Amz-Signature=0152b804ae88860d59ae7be141d65b3f60306b31136694ce853df5c2a117c209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

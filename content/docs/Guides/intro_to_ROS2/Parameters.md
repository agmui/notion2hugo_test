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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644LRQEWG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEP%2B0j08%2BmDXFzx3CDIG%2FTSIbHFIx3RHGUoKSF%2FckCWrAiAgg10YB1fb8k2uhGBuMBwhOBxYZzhvr8FL04FM3qPvbSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHjngzORx1%2BwOHszQKtwDId7kPVCfkwE1JcPtoaspMNKJS3vg2Xk2fIzH3ElF3YtvLapYIGnE%2FMTC05YYCHNDG%2BWo5cH78lL5cnKFrjf89aUzHa6tlsKbQaUrmchXYveTc4oijxqNRjol8kVmgLUibM0IursJl1l03zk1Vb6ePLWdySQeoExiQGH9VWegTN3nGDzVl8aVn0MO8CQcv%2BjxgR2qpyaHTHEGCWFjgqCJt6FJtmTmz1KzWO0fv50ThheKDPEdJK4cKYspeKasLO6meHIgTU%2FQuyjZJipM%2F9PE1fiwP9CMQlXpDf1rrzBoDyF5b06TBUtk74DNxSoJX3IW033EggAqnuiwaLa9YoBFcBARnztqUgNEoQe8Q%2F1cAcqEMFgVa8nGG9hks9fRX8ei7HqVGfdynYJuxhuRdolB%2F1i2KjyybE0I%2BGIuQYxjElCteZBR%2FKE%2FVukGTwXwu4WITTMaolYKZ1cfgeRYvaDdIU3MsNUDoIpm2ZQK8wALtfjnubv%2FdM1FapTTF%2BvbnPEn%2Bvsq2v7Vq01N%2F0F5f98eBUgu%2Ba8xI0oHBMwdM0LADUEV%2BVKX3rcmP4Cf5Nj%2B9s34qQHVAz2%2F8NqgrTJCOIDkEE88Bdr6PN%2F8C2b%2BhW1D1kLr8Ym0rPHbF0YC3OkwsbCzxAY6pgF6Uejw12HK6fR6xXdzh%2FFmMheMHP%2BOqIjUhwmTi2InlMeL5F6yWKi%2Fkte1bdbgMK2Mwi%2BJOJvrSC6yEy8%2BHl1U1BJ3uKLsnFZKV9Df23HcbWYd9thJ1nFroablMnHRB3Nr5BlSldT7%2B4dWyrYLtxD0zNDhzzJfrRB7uPy8O%2FEQZk1kvdtR4ExJWcUBozJ6UXyTHUqCIqxtSzkJCe%2F1LsiSbXmKEwmV&X-Amz-Signature=d4e9978e20011561328960b4bbcb200f3457206c9d6c671285315aca9f65291a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

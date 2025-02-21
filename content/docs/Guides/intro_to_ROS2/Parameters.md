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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNO5BVC%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFc5gnTkStMYn%2F%2FgxcfKeEnhyZoXLUcXXQlppTCDoQp8AiAcm7r1uYb1DBZ6jMQt74%2Bt0QWMY%2FLRUnq4xKMiHhbi3iqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM58IF4pjERhO9LWSrKtwDA8iaK6%2BlQsMVNBRVETGoeHir2nRYUfYMnh7QRKkHJFjN9X9iQlipYsdA4jXH5YACMCtMvFcWayHxdT09Ud8UawJ24JiQzJTNyTVNsVaLK6MBPEupKFO5CrjkFLsJIk55cHtJLwlMvwNlWObGKD%2BoyvzgLNuXPkFzeF3s8EqDldkTlTZ0tSadFoktUVTaCzPnZvmV2PZf0KxfcVDfWt9RQBtbA%2FLtl8XmqQk%2Bi2BiGz3CPOILzfQACgH3RnjiIn%2FBSHyYkuAjvPb%2FCOjzJ2CxkwkDk3kY6icE1U8FbQMn32GVeCtLLSLbNNrmPutC6uhE%2F3nAKdiKbvML1t4VoaKXToEMVxRH89qsZVlMRvbpGseAe3e8F%2BBAshvk4oS0kos86Xk5Zd8%2Bp4uiXYThIlpgp1CJPId4HKQ1goVo54BEgt4owgAlPc%2B%2FFWuMuNkX9Uua%2F6q%2B08w7T6Wne%2FAbj2TDD0VowZveKb658qeQSmY70QOLHCATBAXg371S%2BP4E%2F6mNvf4CnPIe1So2TGMWlW%2BK61V3UccrqdxDhydiBKgY20J24YNmhbSC85OnJt%2BjvEljqIonKJlm22TxXCoL%2BCgSLMEyBj85n1uTGGFlP1h818CZZl09S%2BoRF5VKZZ0w8MDgvQY6pgGJORanzb5K5COWCa2CUvsrpmP959ymDnrUoQU1BNtYdGglPYWzD36zqcJ7A65lyZsGh9ze%2BlGFLs%2F29pccfP9UY41oJc9suj7Oa%2FPSez6M0diYXwLEHhbwVYJx24rigCniS0UBkCNmCy%2BbZqOD6IMOF2A4zKMyASGYl%2BDd9CkhubNMWbTANQB49g44yNzU6oZS3pSeBlntAK8FmhadR6BGmhZZ7m26&X-Amz-Signature=27035e724ad5022df6f138aa1390cc19fe6d437a4ae2c9949842ce431f3f7a57&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

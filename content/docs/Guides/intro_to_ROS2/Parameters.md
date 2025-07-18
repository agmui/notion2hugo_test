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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QZ46JFK%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQChjbhAiOMSPd7mGzrdJ7Gw%2F4GNHlslPHJ%2F52PRcFLcQAIhALUF3BpXns8K5ipFpg%2F2onoHEEo46Hy67vF9QeZ0dZiDKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN3gAYqXP89Iphz1cq3ANAXXEBG3vssw1%2B7vanJZygKYrGiA2SRCJSl2r7nSZezRBV%2BHrQ36loabn7cQUYAg7czB3loEgdxAsaQ%2FaWq0v0J4OeyaufRjkpfhKOms4oLNQy4Y14Fk%2Bnxee72waXfgNJFyHfaDwB4CGbYVWPWNLpuZqIFm%2FUj7oCGpaw1%2BLdHDEAy516Sd7ysmclTwAEWl2tV1bLcWcNpegXPHa3GUd5D6o3KEsgeb%2BXnE02HLLSPIn4Y%2BxPSJCUJ6b6e9HV4l5LU7Y3Ea25xkMv9JbsZGHfr46rXxEeaI2pHjdx4qPHNR%2Bu%2FLCF4%2F3npaobi3TTEdUDFKdp35%2BY%2BNJuCkJ4YKWCVam%2BVJ5IksRIkpWX6utALug4QnyGkrbnnGmfEaqhyJ5cS77NVtTA36blSos7776jDdKuY4dElWx%2FSgFAIZKps9tDD%2BN2nN9Iv6emlwMw2b9SpaGq2cfo70LCVHfhrf%2FfIChWpN8HC4ZEuDFuoGN%2FEGNFmGoeorfjIeO2Ojit%2Bep4YYOd2wKV20M0MQIpiUI1gm66A36yZeeN2o7WBUUpqSwOFuuPWP%2B4Vr51DFu0Hetv1ih2dYpcPI7iGCzqpuJVIsa51lDyz86EPDcx7kcY95%2FX53wv3oPm%2Bi7C7jDiz%2BjDBjqkAT%2Fl8mMoDneJwBJMSR%2F0o%2F6b6HIN2W4kYUhR8jhfuMQXD%2FblavXUDfTmPYP1xMFDyHNbS3HNlpSQHlTpInNI8sbu5f2CjoepclD9TEO7obxKJ1pWvCh47wJAjN6z%2Fquf9yl1Dyy8bGkw7GE%2Fh4vjn91qtYfnTeUSOKtlXU2A4NPwDyxN%2FbbXj9ma3TG70oSWLxc%2BdMdGjoKEI9YNrSZ%2BGXHICnkR&X-Amz-Signature=918cb836d99561505698e162aa5ae7a4165b0b5398bfea21aa00839ef3b28ef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

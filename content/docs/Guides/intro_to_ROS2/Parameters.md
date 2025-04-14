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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PZM2X3D%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoWunPactpH99fFEUydNFpi2SuZNtv1TwSa6qCa9SEtwIgIAlSWn38vRiWXKDt%2FWMC9ciyIF32v3dvhU6mXtr8ylsq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGsGRstKbeB66ZEZiCrcA8S3Lsl3YfdTvNK9FkDfbWAGrDlC7TZ03IAxh6elDSNA8cPobYRPczr0pqloLCELPj3D0%2B86XLUJqG%2Fu5jklpMBzhS46m7su330G4IMzzEvRdFZYLMIeKOyNVECes%2FRjVMpB0m30t7LOZgs5IYESTUOWkuF5qlrbdnLGZanIf7OHBQgZWpaQ4dQhaNgYtpVM9z5sak3%2FIEgEO0Z0zUpDKrP0Qd9LxPZyqupbzw00a3CzIrE%2FEzJCO7fASwx1vw88bCvscFmMhDli0%2B%2FIb5uxkBeghx9avecQXxynIip3bmw37QAkxl3ngZZWW%2BonoN8MgC8jkxQTri3HrZSOj65zmSF1Ne09g8RaDZcpSiLKcDDQcpsAoMQOSM5ptqQWCvmE9trX9xY7PJXK4RPJEl2ilXVFBXE5O1Ltzf11F7O4Ik22o5xeUZg9MbG86OEE5rbjygSxfrIlA0m0wkGi8rv6y9PMWFaewJuP7qSQpyhGZ11ENh4Drx%2FWK%2Bn6R4xfM%2BIWLZct%2BGM1DFXwWmZnR76mgiXmO6mBDOfAdFYZTbfTOk2%2FDnFYK5%2Fh9qY7v1kRGvmdV%2BfYG%2Fxqe7Wr1c%2FGekQe3gBcabd5wUIQYKLWFU4%2FrWGiHhrYKgkPVyxFLprKMIbc9L8GOqUBRG72HjoWEN3Os0Mjsw7P5mkAVn221a%2FKQOrln9WItVYK3ywicVsccvfGYV4gchlLAPe99gExqjipVkRrAo6I4qD3hKESGukTQP3YnP6A2ZxnlwYt3sWIfpWkYgSwpzJ%2B%2Bn5rxepZK5twUf%2FcFeKX83%2F%2B9kYofKGlk5zzm7HsHSEGiBFm5PLWbFuuImzdy9PqLANXGKLnjWscCM33rXW7IUWvsCEj&X-Amz-Signature=0087fe1e12a4cf0273e9f3ddf0629d9703aae8c17af799732f3ab41956a1b777&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663DFCFKH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQtQhGas%2FZ1QitX8CrF7B8pDNjsNmtQ%2FKPgh9OpV2xYwIhAPqeXDlJizqV6skJO7y9crIQU8IDi1aDy0t6ASJ%2FRKDRKv8DCEkQABoMNjM3NDIzMTgzODA1Igyv2fsKiorkzbd8r8Eq3AMwDeU%2FpkpcFOtJDZvmDCKg9icnSESFcqgqqkYoOhjePNqbui852YUvruPmfPqLc3tbQdmKm8zKbOCxQ5rfzopulbUMOHnHZ3p08UMP%2F4ryvHk3biVFLIhLAhwyoL%2BItwd%2B4C8ax8HIvPuBxtG%2FWFkzn7p4P764gTpetWMc5QiRVedwAops4du1%2BDmNwBIHElBO%2Bu8xEQ7W4P9R77%2BhMNwK1jAcEaI9%2Fi2anEe%2FxTHobxEizGTAixuZ%2B2wMelTph7FF0ep7tr5SUzbfkU7GznmD90lytp%2FXcQmVXWCVn1bu7RVThwkIZSwgNiMVvePuL21%2BG3f6r80fU5hvpamm9nsvgvLMJcEHyeT8CGNLbJkGQ5MhdDRQVtp3n0SoCwQw%2FYc28yhFLQ02%2FXdh5ZApf18FA1XB07lDHe0ncKMhtbFdAAAoOpI2J1qUm302nupybHv8IILPqxrc%2FeNLCBdGwIo7iWFuNiSiy9fmSPurb2b0Jjy5z1avA%2FD63iogMIUqDpbnxUKEIyxd3%2B3taYvhXyDc2mxKq6dOQx%2B0%2BNvBD8XqGV1Xipe1RsC6Q3dlDzLf5wyEBQs5StWMmzJ9pcvXXTa%2FTlmKbruGRI7nGRfXsB%2BpIOthIRwrIVFH0pXPSTCLieG%2BBjqkASZbKo%2BJIWh2WZZm35hr4h7O%2FuG5Zf5vjuvpRqfrKdXn7M9Z31JQwiFie1Em%2FykIQbt4JEmqxenLyNmFc9XDwW1E2YcwxG8DAkqBXcHjphopc09YZS9mFsVUS5WbqJ4mZzh4TVFb1Pm6jxahexz6DihoaO6tOzg9Po3DnStLAaBJ7RGDV9iutVBKLLF34CrZyW4zzp2P4rTq9sgtqFgj0VDHz%2FO2&X-Amz-Signature=477cd220de94aaf091034383a89a04031a1af015c260203644f082f4398feb58&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

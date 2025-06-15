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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CYJ4AR4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQClTolTSzrTb1FZoNjR%2BkBCUDum7MEueNZf824%2FW3K3aQIgFObiLjYF4YHnMCYjxDgB2rJTIaQRomM95ILv%2BHU3sRIq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDD4D8PKF8oC3e90jSCrcA0dsCTICkAgX1tQzFi9aNUz09yY5jUgL62xLgrKlDHu9rhxVNGfK%2FMuwh3S3Veo%2BLf8WXx2WHZVf4VVNYomcJ1upU4stcZMH4WPXU4goTe7XuYAVACLIi3LZTDRdwxuxf%2Fnl%2F1wxTw2Ow4XFQxgANH3LgCwvH1Yf6x0O237M%2FC4RkRBfn3ALkm0K%2FSPmM2e9CyZF69yDiSjtSlaO9Sa3hiMdGR0Xv5Itm%2FWLmZ7YRNmdqoWdmAhII6QOd6kJikoLSUUMhPjxfyuzpl1hFeio2vwhZ88L93kr0W%2FN8DrlQfgYu%2BWVYOa3ps3PxqGrkEjHLtXZgIlge2IgTtBw%2FY9NZuqFmEz5FmARZDMXApEKuagtUqW9FX%2BATylsk7nL%2BeObyk80QeS1H1%2BWQWvOdQIQx%2FjKPlncB8pSGRqvPH39VagfZ%2FANUJ%2FhhOBzahaXH8moBflZqapKobak67WPti%2FbuF34YNBLOWixiQQxIc0dlZW6XeB3rWT%2FlwMP%2B06EROLG16iVDjpj%2BTiTx3WLic0ew1TEP5qevfO%2FtY4itSXYBOCGnvhZhQQXZb5fxHb9ZR%2BmMeCZN0KOR43AhlkBAXcvTbJ8f2BWTOj%2BesrLOL0sPnPeEEjFo4npMEkGEe4VMPWhu8IGOqUBMadKrnX6C4V82%2BMghOSeL3P2NFrLuEJ9CxQ6c2PDvmQ85P1M5jlgFi3vlxSGR%2FlSdhmsy5aDmeeHuuYYpZamT1xd7H1noLTbnFSRovBHHZzmMPKRbgVL7fmVCfoZIrFDbYWm0evOlxYeqaYuKhMv%2BpboE4%2BnGcxDJMAPPbFGAGNMGucvZzjc0u98DQIhPPzXneg%2FoTpODYW2AI4cc7BruLASXOgQ&X-Amz-Signature=87786327bae5d23f31decd8cce122c9d5ecfa4c65c717847794c332e9536e277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

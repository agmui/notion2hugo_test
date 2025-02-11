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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBC537EX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnsZ7p6vOAKO2sfcz151U9baGAje5uTZqqjye9UHDtwAiEApMqX%2FweT5T9mrrGKMBiwzTPPiYUHPlkIkvmUDBW3UgcqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqp1I1ep9rCnk2IUSrcA88s0XyKXT9NGPD4XT0EtlMAKttsDsCHNz9gF62QpCA9pPcJe9UvDn4aO9wcwSGkRI49HgDUo7FXfbL7yk70N9%2FmfVbYaEV3GUOW3w879%2BFWTlzkXbD3%2FXMs70xagjCyHrePwf0gSHbM%2BGoCzsAkgvXFXPDMACmc4dEMXC2O85hC5iAbHCw0C0UFBNwvphPEbQKcHNHACAHBjURXPEcGYUiv0o1JliUNnOSpH7o0M00mK5L6mSkbzUL%2BeC5H%2BWWHBjgFm4ypwU4kuaxA7EoanK%2Bij2IGzA34PNd9dmy1i971moJ%2BK4giRA483BDfQUUni%2F8WV%2FUl7J3Aqmt98bvR1ZkJpCR1UPvxuSRX23SfJY%2FFWb3pem9NzxJnT4zsHxbxlZqDvZbj1NELXV5uzD1iX3a%2FYG4fSNWUxssReKDaUciILBh0%2BDaAm%2BXhIkFMcoSJabCPID%2FrQylbpzlZ9h5LYE7GkNiV2zrrRFmobV3hjF6Mc73YR4f0cijqG3Pxt8507XZKbm9xWd%2Bn8faVrv3C8L26XXOLacBISzpYcWilxfy0zRxL8ezkgcpdpGfVXACRwW6GCQH2zBiBFXY6rc7EahU03Mc33F0F3NLvku2KfdzA1Dc%2BRFqMcoXdVtMWMK%2FIrr0GOqUBm5Lap9L39gwPgeeUIsI0orRjyHnHzu0HnL66izvzUBnpXr3ZYfdR7XDgC5uzYm6j4mviEXWb9VDqwtyBXdnyvgKy%2BLSAotWJvosMk6DeTVRyyYQKeob3sIoGoIwMYBf0iUxuLeofAxOwA1K3Y84WA83%2FlNv1GEJMEwhNisq44GJVP1u%2Fkv6V%2BptGWVaIvVDtxrrIO6yOG3dgm%2B4%2Fq0k2oEhAbgNC&X-Amz-Signature=49d1afd65361bc2ecde5ee99309f8335fe587557f738996868f58e8dea2d9af4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

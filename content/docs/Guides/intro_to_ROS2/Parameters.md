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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466375F72EZ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5aW5D0p4%2FlWC%2BrRfm0zOPlttONyw3%2FxuvYJCSxjRdpAIhAN7RPyJOn%2Ffukc3W5YBT7detcSNiwfkXOXZaXRWw%2FkkaKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6ua%2BDg7VG3Qhoywkq3AMyaMwlJ%2BaYPg0iKObNifAFNGpMbbyDYdNBDPOXyta9wwRcdXmUJ%2Bvy7Lnl80sZ%2FjZCzPsRGzzix8RmA4Fs%2BnYei601wO5MGjKDP8AnaGUjgjDxu0I%2B39r6g62I2IZnDjyQ2DDrzr02zlsFKB1XPdhGZZSEQz%2FYbGaXEvxCha2BxFuLWtVw9P8s%2BFD%2Fuk1Rt94iNn%2FvmRT69H0B2%2BSlX4Bx%2BAZlHxDhqY7aIYNijFLVnAfqKFfAY1uSo%2BFaCCLPHMV39yJlFrPALh4r2Uc6XlxMtuHMmU0FSN0lmUDPWxAwd%2FCnfLdgBeUIKp4VbJbI%2BS%2FkulLriDZqYmssjf6EbLZgqZSnWt2EAHB%2FSPs3uDBkgUdrLfjdpL1nW%2FFwYM%2FXVWtBdV0rV0%2BXzoQZ37B5a5YCBsNdBLC2M6QSeGXrDrNdXp1FRzm3el8m8zirkjc9%2FbrSA0u2W%2F2adYhD3eiSHOPgdCkkCp2OvhyHTAXzxkBVxsM2T05jCiyFo4bSkK8xTbtvTn5sS6kda6ls6rP51xkaslCmMLATwaNRu1tppP%2FiAzxIWVleCrSh3UfWUqJEq6%2FF7Fh5vmT9ffTsDORTIcmCo6px2UtC4qdvhOCFOPGlVIgnmoJDVl406r0byzDRuoTDBjqkAcwd3t3AmqvtfyDMAargqVT8mXQCtF8xyO9eGv0H9eTuGiyNhHlBdLvQ4x7FttQ3IcYsOXSAG2PekyfvxPPfiYGTLjcxw5eSuFeC7Z%2BahNHvGPhEBEWD%2Fl%2B3%2BpTQvcl8Nhk6bA2h8%2BUOgvta2Rdvf9LXSA%2F2%2FU72bBOG9bdrHbwEXbf7pNni2mCEuFniEVyUdd7USKt%2B6Un2oKcDUUv7V8%2FBOK6e&X-Amz-Signature=125b80ce4484655b3f31109a5262b36656a92edf7ae6d08ff9d4971dcd2a6a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

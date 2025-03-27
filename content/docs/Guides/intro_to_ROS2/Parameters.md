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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657NHUYON%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFWijFFIFLnT79jjrGa2xa0p4Y3lbysN4lVX1XEGRTzgIgAapAlMsafxrvvs1s07fzo6c%2BC1R9IKq9QGWS3E3NSx0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOGPw7%2FjyjyES0TNlSrcAzEwkCRd%2BZ4N4Y1hrgeC%2B0wgEvCO%2FpW2%2BmDb7lvWxuOnW2OKNrEpi6UxnW%2FJ5q8%2F9sEHj3BNI%2F0ARKD4hjTZxyuXwOaDSFjiCmWwT8VThFkQdsto0iv%2FNQtvpfFXW45MWxeyQA%2FCYA6%2BgZCy27ZLau8tdDzNk1lXyo4BD9AKCWISwPGD3RsuMhcBeFgv3s3ZJcXzDtoovbP5m9NIad%2BvV3kX9nPynv%2FAviFIm1jxAIzjtW5LdC2neWsIIpJS6v5F2V%2Biqg3QCXVRPG5QO8LIGhzb%2BmNY%2FNedL6%2FHqdrWsRHHSGLA1V2rVh6JrggyixrBEXImY6H1zoqhY2lDMZk5uM7mFa%2BcE4vTETQBYw5%2F2aXnuXYC4Ltwqqo6wVQ30c%2BFAESceQRNEGnCBDsD26FPzGex0sE%2FMZ7%2BYiEkRgzbA6Jv5U19nutcTj%2B9Eo8fpNGdPK0Tkur0DURi3R8fiLqHnYVdb6evwaCVm6FZI%2F27Hbww2czphoXjui%2F2dlW2ftgX5%2BDkhaqxThtKqaYeTdfa2vI0LyoRHxDJPiSic1f7vhu1SmyhspGooNTOTSwcyPLs20nELDVgoCJhelNNNaNVuBci3vepN68t%2FZk0Q5cQZKrz9dvKH%2FXatEqdeyYuMLehl78GOqUBkYqA0%2FNduZKAc1WQB1FnEvYKlooDXix03q2BXnauIY6tDj17SPt2TzfJygui%2B5G25NcAeYZWQVOAIoz5O8803VE25wVye%2Bu%2F5Mik9vETwFOdQlffsQ2KTTLIvSX2qWp3hmkQzmhHDCK8haVGsWiOsustbziymJhu0uf5NY%2FBy3IDR%2FBvxoE6%2BFQiZR3XmXm8%2FPvlRDSm4u7a8q7OgONJV%2FQH%2F5jo&X-Amz-Signature=766c579f0b2f0e864e169b4406002227126527fceeb2bb3bdd218956f66cf1d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EZULKL4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIErX5FHrROGAfmRJJc1Ntf42fKcEZ5gKdMXK277P5%2BfRAiApz9Pzm6WaF9e1Sl57qJAcHXCptS06JLFj6dopOaArEir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIML2Vv%2BrCQsoGyuAd1KtwDS3LnhdPArQXYr7Sh%2Fd3Ecei3r8RTjkfEmoMZFlnjuRDbgK8j2v%2BD84%2Fi%2Bnr58JO41dMrTsHvDb2%2Fc5eJIfoXdLVIRQO0Pz3Gw0jRlI2P%2BYAmMXbpXEwpEFfb6Y2tv39zoW4pemBaG0Wvl7uJDde6SjCjcssN7nKAZuEH86hBD3G4yLRsLu%2FEaB7MocS1cXeszklmAoUiyoA6crQczalUuQKBQn114Cd1WH2B1Yc%2BP5sUXN3VU6%2B%2F%2FO6d71Bn%2FgOjC%2FSFL6k1Cz3ucZXV2vAgPIfBqmY9Vhf%2BfRLMRd2bAikesKYa37oVc6obVXnYcHNAFq%2F4D4uZHx0FB%2FjrH%2Fdx8J5Z4ZcTrabCC6nvsXVU4T%2FygBLLnnAIGSUkbECHylszcxMxBSse%2FpkxE9kZ7LEIy30fWpaXtywk6ccIfBDirbuPm10SXNx2fWrdNOYbKZdvtoCOjQJi0AkFIiuQmwlHU8pTJ9Scp7lgqtQfDhxwUnWiHrq5r3lDbTvNK%2Bnt4WhZjc3MBkbze2G1n8T0mFPOww1xKfCurheQm2rLAkhpNNfueeT3ZJsA9Z5X6MaD1ZxtXZZHnPMz2oo4PAMDXMicscoYIgJq8FZi5OiI%2FiyJdy0AlBfj5RKPLg4jrGMwkZjHvQY6pgF%2FS%2BHg%2B8CxAPDyEDMsMo%2FxvZvPi48a3VJocKBLgF31oOIInaWtOQ8ce%2FTPa4FssavuZdyapIZQniDuChQPAnymvsjajE2O0wkIi805bh3FwQO6CRl0vBteoKW3Z4R0KaMaWCXdNZTKeCUPo47PBdEXAOeqXBxTa5WrHjIpyj3vp8AR1dmD%2BA3LqX7coJLW9yR6wiqc7D148eCmRFgOPM8iQELt2u6u&X-Amz-Signature=ef760523f5bf3f4187ca839498c942bcac3654b65bfb9e146d61d0cb5eec9782&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

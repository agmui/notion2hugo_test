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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P5UHBLO%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCl4jbzUiD%2BeeTD93Uv7d1%2B%2FREuzRs7CW2%2F14xU5u5wZgIhAIcOv5eDnpMGfy%2BEqMRi0GZCQ0gO%2FsL%2BpM4wv1eKBUpzKv8DCC0QABoMNjM3NDIzMTgzODA1IgzIFMyq8t3MwzALqXQq3APgb8Y4ZF2BEUwa5DvwbkxyxkLHIYP7xtRL1mJLVxd9ZfCD%2FKs3Zx8H5Ab1HPQuMsA5KmJochw8GuKlnHSIS3nFFCPlShcTbZ7phRfZaOVgxtGQ3TcGD5emFuRlyd0Y0y3H5QcOGK39dgV%2B1wHD%2F9i6ScR6jDNbbmKC9FjFWXbJX8NAyYh76fD76oW%2By2Xwf7uPpY4VV%2BcA5y56Z0J1MA0WwfgCscrNKprmvMuY%2B7hMOwyugkn8fycE8GXd8%2BNv2HO%2FA5%2BrdFZ0tBh8wfS%2BAm3mElZINP2NEqUzViEze%2FVhouTd90kd%2BuKUOjb8VpNDNt3DN4vGQFHl2WzbibYJa%2BGOdeeN7jjBRfAAcyDYP4AdTMBk64GaQBv301%2BG0IvqRbGmc3xsS36eKdXol%2FdWqU4%2FsWt1AKmnMr6vk%2F4kBUtmOeKS5SYm7A5ZbO6xbZFGkQNFXCiAzhSSSXx1NGy75TYV2VjGi%2BTjhQ6d0H4jTpcBq6Uhaw%2FBitSH3n7JNFK041lumKekqOca97ui8iecsJC5K23JMbtU5Oxgwlti3ZjUnpJ1tWAJNplfGfdyXq3XA2FplxUEgCqffnxrAO6yz5TLsiSnnVWURHanyl1SpMjrsI07YZiMemwCfSyEcDCH67y9BjqkAcLEwdFemAh3tfdE8DJ9GvINvG%2BI2ym7%2BjXCRAKLCfQT01efe4zNE32hcCedTzjZoXDC2uIDvvIfKPJ406xZ0eKLhSdkYqZ%2FDZGMpjBWEhV7hJDpmWvhq4u4pK12kzpjS%2BWeFU%2Bv%2B8%2Byi%2FJbot2wRxtfOU6eQ0HybSDRBhpw%2FtCS4YcCKnbRi4CFPE3QMtcUQqq%2FLfcCErlvOwxhcnvQ8ihg2v%2BM&X-Amz-Signature=072f53f0a268ca777558dfe8561da70cb7a0a683bf01ebdd6290aebc6ec9ad4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

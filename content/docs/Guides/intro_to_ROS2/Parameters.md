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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KZ4FWQG%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg2MpZCcupZyDFCi3hD4HxDRAnPQWlg41w2sGtIlV3HAIhAP20BWvQi3p69jVbxRuMk7RSlcY1tW6Rkt5JsTVcksKdKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzFlEdKyFqpsgwSlQq3AMlCYvxuSPAkzXIhH8E6v1aRctfoQGjJgq0tqZ%2BnFmyIAqV62kMUriuD9CXg9sDgwyPPxThT1nZjQOFtS0KdmVwGMVn6Lsm%2FzcB5WElE7ms7Phu%2FSbcp9sMh4eZiHGTSyaXHAG%2BGyAcCZkWZbIC59mLDbfd64tBaziV%2FuCqUe2YGuwS%2By2ZSItxz1gsixKfN5K7eaVOs4D3F%2BCcnK9KqVbG6tRkXslKs2%2FjcQc4RbP2AG9JL0Wfshb0ygqrCJGJjBSdb1PAc4P5SQ4Dp4KWBmuQZoBAFIml7vsakQhzf34TAWdzGqNoGMZyeO9NW1MbrMEJ1UF2J%2BNsYDICs%2BBEPhkiCzBWtLXoTPXITaku%2FgVRKjwrju%2BSqcFcjfMAZdc29wuNa9YmlxsyMl3PSUZ0DEFedIBqAsj%2FygM%2Fp6CdzBzwDgWO%2BxuEP%2F5Tf6e%2FAAjCvSmfSFwMHbHCkBq4Y82YJD9v0irtcv4VuF0u%2BmKH8kMFA75JvL5WiJkK2Cj%2FA92YOWCxLBw9WBJRNEt79KRvJ5PPVXpvgG5lcAcxCkOm5yscswNQ9w1jxXZ%2FPCegK1mbP07UlHyHs9azTqfMCAdEL6ygkymwIoCxBDMrTiuuG6MxcHOLhG2AejWP87oW0jD01YfSBjqkAQ0cvrHupsNX2KTpiEJtLUla4S9z0DO7ff97ID%2BDtb4B33y57YaVZX70ZRCyxtPPHf8hJtbaVrZk5nhbL%2FkfKWUAtU0Kl7IEzTYdvhgwxvKLPiRsHGE7vOrkjVP7LoYUdpSb5XR7hrt%2Fo2GIy%2FPSR33bCcydNujaMOLGL7faOIKm1eC2H9Uv94VXpM1pKPAu3Gz0LxrYw5Ew1eAcg5G%2BHqgvnlDi&X-Amz-Signature=473ffa125a0e4e45465b4eb73f46cf5864313b3ec2c8ea77cc2a2452e0df1b8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

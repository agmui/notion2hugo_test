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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J3N2DLV%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwhu4fNR1E1%2FWeN2p8JFSmQJ8b9yHuMK5U6fEB%2FhHlPAiEAozoQ5ysW02KhzGc%2BoBStnpAwiyzLo0FSGEW%2BVc4BI%2B4q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDLQbMN4enpjTZOHZ5SrcAxOX9UaKja6u4uuwvl6D%2FXpdGF6pOWOW2aTKsvHZLYTOv97wtkyK7osgkbTKmf6NLOew1VtLQggJFHRhUdWpjr4Hp71v8pTVYghluh0WzDYiiMqPU5kDWCDMiAALQANGBgxkJXdJL%2F2sBOlvhrSn36yf1sc%2FsPRWmQp7qjFAf761UufLrcCOCyASqyHEX3p5%2BcKWWpMJiMsjfqdhPw0fBn24M9Xthwkh%2F0sSxmGGCA1HLguO9k1gDi8aOyZOUnBY%2F6IA7ELsYZMJZR5SF3EFCq81R945%2Bjp0Y4O6LFTkwYvBqHVVBktGY%2F7x74B2UH5lRZvNp7buB5IPv1BkI%2BIiboEW3XJvNnZRpDtj9jcfErzC8cSEvI2JYXCoxg5pB5%2FeHq0ouJgRU4cjuE22NeXZzv5RRM14uwAV%2BFEBRuPhClF7P7rMsKMuu%2BAJ8kopBkSyLnkX6KlTaoLWQmcbPK8UiQ4w3y%2Fc8M769LEM8PxuPH1GPiV8o8trCA%2BTEI7JX1R2z48zbQUg7kzc9cVnotjW%2Bxlr50HuxXzCsw7yYu7K%2BGTG0aWC53WSwRsSmMuGRonZroSYZbJxqLDXOFy6wqdhGlOLNwFynkOg8Iizd3RT95b28Mh02H14oGGOUEL%2FMM7PydQGOqUBEwTfEhL8N6FVFF%2FaspMs5PA2RWfsdO5vPHZrmUrWzwbrA3gqBNnAC3uFFdXvK1zTsB%2Fx5%2FvtF2S9bn5kzTSASXTOhfboyKhgkkD1toDvX48n2%2BIipXhiWImLvVmztP52ID1dgVHS1%2FZ192AD1nW4m0t%2BDq3gEYCm6m4L1JGbsb5R9LaleoRw3Xt5Z6UAxGChPzUR4k%2FfDFZ6Hk9DLcqAtAFOy8sk&X-Amz-Signature=447d162266ea25a170e38cd03c711b39d7c72de11d417d911165bb5090a10214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

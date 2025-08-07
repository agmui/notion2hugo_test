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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMYSYIBC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDzhFJ90dJXM4%2FJEs%2FYDS2CrW%2F%2FNYxxAOaUua2OyzeLEgIhAI530DaCNaIcOR4YvLbsJzfJH%2F1%2Ffl5sgqCJhb5NtBKJKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPN4Y4rjnR5SYPDHEq3ANGty7QI3HF%2BCR300HrRHVgOYmGlma%2BMsAphfp7PizcBja5I9kF6wyAfdWBDBLd80EhRE49X7VvWghuLOtvWdsmUVpX96%2F27jH1QH2cjjZJFwXnP9R7haqKs%2BWrE0z1uad%2Ba6G2vpxoYFTQQh5dYMUtiysSIBtv%2F5%2FfyZV23v5VXNu3FOMP3RYYgOaZrIGxkW0k6tMP%2BdMKUjYzOuAKAhK8uwd5roe%2BSXR7GQ0jtLJQGiSAbQvwFu76DIEvCWFL9wv4I35CWU%2BkNVC3vW3eb%2FSvdt9eKxbygt%2FzJDKVAy9CFQaC3Ss%2FLpei2YVCm4qPcMiBNcvzHT4JrZy9m%2FFDrpjQwUJnw4AmK1BYuEjJV1YhU2yg%2B6leWNgnaJqEY0lgkwg1CeVlSVuqwqS4E%2Fg2CMZ7sQB2dtzSQlALo5cw4BURH60wUOXnBw8N0iDC2JEepH0g9zOR5BGTNvWOiZ8A%2FK0PIKzsZS5Sdk4iG5NV8dYMEr1qW1Ul%2BD5nHoZ3S44ixNdGbiAkCMENLvV7%2BjY2xrkWeOPMSUsmY3UIg1mpktYdB8%2F0XGCFVzYRLRkZMXbxBCvG25KSMPtKArx0IyZbu45i0uTRkolD6VSZap8FdtcAHZ%2Bch3japxEFDZEZuTC57NDEBjqkAVVG3lZXZ6WWh8xixVk1zXKyVEMvh2LxhRcCw0fqmNX0PhK06ULujpcTFDF3iIccT5FmOVioLkdKSr3VBynlat%2BKjp%2BzizQ%2FQeemHs4dETrvFAYoeLiFbl3%2FUGcYbp6tdklyFPFlGGaIrwgfMdDSOJ7%2FXOD3a4ow%2FFxp%2BkdcMB%2B4cqfJxHpCl5FuhidZyIclGIZFU%2BAtY6Wfdqv%2FYeakSqYuBK3a&X-Amz-Signature=aa99821dc1230240a1a6384451dc2d208f6429affb6758f47841deca5859d847&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S32ZJB6F%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVcRxJUR9G8FRcaQhwSKYd3VYD5eeAkdT9J7PvAlWcXAIgeQE3a52n%2BUcfG64sZrN3GTSgSAFDo0%2FxUg8I%2BYRq%2BjIqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFm65d0MTCaYDgKETyrcA7qtndpDf%2BxxrNP7j25QDKh13I4ZNXy8rkNPMNxk7BhXwtN5WcJQrO%2Bb%2B7PEmYtd%2FsVaf3DNpPECJ%2FPUlF02txS17v5PzLLDWDIdrCp0YHg%2F9qlPk6iwBa5v2%2FmhNoXmalHp4%2BRIlv7Joxqsq%2BwY8qpRZeJQRhyCzte7k6JkzGiA3uLSh3NWrXHUUCtPAJDYSi2WP7lz2Zi8JnlMqujM29AiNkYBMAF9XJYXMcE%2Bf%2F6T13izrXiodN9yDp73vDB%2F190BqRuAzdkoP1C7uEnEEkT6AQGo5cO9y3nLylyxKSRbQCA24tXlzo0II3r8giZrwROoJ668PjDcFAA8yUcKF6IQyJS3g7b80drdqwesEoMaj%2FflDHmru0a3XNv0ngFhbrZMAU9MpwOiBOGFniKGsnt1uY6nTiOpaXDw4Y%2BhPCFu4srPbEE5EpH2Nu7kUJnF2uHIaFpTSd5y4v7Je8ULhAVL7e%2BN2mFshVofuNOTSmsaT6MvCemDxPz%2FbLgMC6Rx1Th%2Bi1AEtSKSxTCEVQDiVBgTLqLjE1JBX6urELD9C8M%2B42358RmMep0dWnNja64vcf3s%2FNilXBs7yOrW3RSwnTQtn7P3qU49OxYUcUkIBPMrUv%2BIOdWIvnSNtaQaMMC7iMMGOqUBFNqr%2FkSm7QJb0lP3RXQWRh2WCN5CYe8lO3NOv%2FTE8N90ASfyKrEGtyiUqehoTDD0NAY2EKuIZWlLHQ0z1tclnTDiSZmQfUGQOa5ak2WWOnHFVW6V0q1nO6EnXR9TS%2BJMnbCy78%2B%2FUHIHUet0MF5%2FUZGAhguuIF4mDAQm4DvsYU%2B8S3PRNU%2BtXBfH%2F3vjee4v8OY7wr2KmafkZ%2BPg9d5kUYuLVhiW&X-Amz-Signature=16a5a9f36b1bd5b5645e1762390f0487ae4db6b27b1357668cf99de25b3ee9a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

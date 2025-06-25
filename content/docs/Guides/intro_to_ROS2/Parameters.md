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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXHRFAY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGGCLLiAvjrk6PQZ5DfWW4kDXzyNEBu6ODSHsz3lAefwAiA5bNwmwc30CHotSRI71ap2pBSKpo%2BW5dSIGfdbniuzRir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM%2BPW85f3esyWdJmpLKtwDR1PunFwS1qWJDSLFZGuJ0YFnleps6n2pTJF2LJWxeDSIdpNbPZj5Gs7ZrrzFLhnjEtjQN9zPzWSjjVkvd4W9%2FLmjKe6tbzNn8PkqCTgDlcRgWWTnB%2BfYDPENnCrZCWtDaKDQg8Nk8lbGZQGUmx3kSYsmXRLPto7OauYtqDeezegjVtpTpuuSGlpUrFdAcab229Aoz5RFi5erZypFW%2BpdTc5l5ef8NInvdHofZ4SiILiPQbUJBN%2FFBnwwPBI42rucSRUFQsZgSeC9B2D312t83pWQfysD8z4ppVfMiOKN6bOnz21AHUepCC8FPs9mmVT6pCMUYAMtj%2B9CfhQjdHyWatgup0dL15jjya3SfQN78VSKWWH6vyUkj0b3O%2FbSCH297JO1YjRZGEd8pWu%2FsKOKE%2FUN5Ixhs%2FCQaYy5S2gdkaEUaazLFTMTS3dsN%2FmLGC%2BSrfvjBz%2F9ogkb6mIwzxYxSQ7W1SsCXKqtdOK1xwJjraanEugsrhHTIs3mXLPa79%2BTmv%2FqB%2BooMr%2BpiCSXw7XCXnC8GH6yITOAqUKAQDbIft2QLJ%2Bgz%2BWlSW0RWqoh1C%2BR9gOyM719so832K%2FFUGKw0Eo0zxmhHAqQCNFMc2%2FGApmYogpl1L%2Bx3vTaQo0w4YzxwgY6pgGD3mgOwOhMRHWoZjZ8c0c3qX1tfy3GGH9sKEC2Ice4Iy7o%2F7SeSrgMH2lqYxD2RhXXJiB76CLSNMvHekLrahrw%2Bx8PqE%2BW9qPTy86nET85V8tt4M2BKNCTUSA4oZ%2BPdxTwjErMNtQNDF7Ye79JihUD%2FJykF7NuBVDjDikc59vjYWgkmiEni%2FtHjdbAsWmhUqsSHGDPmZ1d782gRTq3rOecj5fnbwLZ&X-Amz-Signature=444bea969aba88ab1654ead0554944b7719c26a478418848ab3302e9180ce34c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK6I4R6S%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIExIy6SYjBQwb%2FqtSk77PUc2pWJSctzglvELf9ducWQIAiEAotb%2Bz2TvzmW86tDQuyVQYz1JvTh0UXg290xxO%2FZ2pPUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObV3sUyN%2FgQRmOIlyrcA5zO4Qrzg3l5Iq3Ev0PYetdgRSraSxS4JigI7b4QpaopNwwHUaxaxihg4ADRriAc6tTZ7O5JuhqRmcyICkgcozBB8LtZCbgMN42jn2aGxT%2BPvEBpf2w40HM4857615qDhia%2Fh%2Bo3JsCbs5Fc4Revrs7hmFAYdjV5p4OQ%2BZndAT075fdrCWppAhg9Ny0US6bAZyKt2Pwo6dHMrdaQrWLZSuaDfvkKPtRX9JuRql%2FZlB%2BbVwR3ttlqVwoE6wAN7NWKB%2BrxmnV%2FsAHuvdCQ18BTfIIAKvjwylfSrwL7rBX2nLXdf19s53jOv5g18B7VjFNMR64HJ0ylOPp%2BcE3I6QdsnDJ3yi4jUBmPocXZpEGs10oFegQB0QCXGCm0TcjWutL4p9mIUKxapFnX7uyTsCPhl2Pa3ps%2FB7QmTI5VKQg7bw2peQA8U%2BY8EE0D7N1hLUtu2ASjnozRDG8Sena26LN5Ck%2BVSzhpA5CVezOIUMMswXou8YZQDyzAiN4dWXj2D0CKRPS1icBBPzDi9K%2FU4oECTRd72eVufWk%2F0xbjPEOL0mu8%2FCxEtKs3mCzAlbpRagaeMFM8%2Bu3IjUURiHogXjs9Zwd8%2Bt%2BaQLkQl3AwizgKhZiDYlGlNSrKWbv5J%2BcgMNvY4tEGOqUB1row%2FaN57TXVSZYKj85lN82%2FjukX%2BQL9UM8DQpNuQ%2F6ceOk61IIiCnLcPfU7AM04JbSBsWeNLT4kQeECGqfCAb1tiLifdwb2ZNHH0FdcSFZbnW%2F9Vdb%2FB9lQcsbgkBNFfPZAdTwVFVctawSK2JrywgVCtRGW%2FTqEWW3snFOELlshKUPLtuLUMq6Ghew7yIwFWeN%2BmcupC1Jey4S4TB2Kw56BRh5L&X-Amz-Signature=f0acd61b1465f5e8bdc5f75b5ca1f2836508a5b1a67f53661d3cb20a3bed78db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

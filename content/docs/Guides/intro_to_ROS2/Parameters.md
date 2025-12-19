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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXSOT7BW%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F2XPm0huLlJdACBIc5QvgenLDo1wA14c7JLOSOaJnZAiA8qQ%2FIjTnMNesghJ0DN2GbMqp0sucWomOK1e6Qy1UPuyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUe2%2FjtDMw1WxcBMAKtwDzCQGRprLfso2rY3FMaKs1Nzj0qcJceGJrSi4Lh13Hv%2Fx9rpXR69yevwIbFDXKnph0S0BUL38yuEiyE683qHG95Uw1k%2FdKqBgTDkBV2r3UF7nM70z9UEy7iaqK9ppxG%2B6vWBB6NxrRcNTY2iNbUWx67ln1BPnBEPNbww1uEvPyXIMh1YGRX2XbyZuUDLSAKTfgZC6%2FlKDeBdlWFoV40Oi1Xt6lJBIyZMgr8tszL51%2Fs6sk9CzraOenzgbxLz5QL2FpDMqpgUftBhZH2qyrdRVCjoKc4aobTdFfyb4LF9SYU8lgl6LnyRJ7qgLL%2B%2BNur7Rypf%2FiebM73RX2Jf7vvIAWPmGD0N8AjAbzoVoRlBUXHX2XspSgae6S0EZUtGgguLB18tPFnQAhXOmQqOfbGP%2B5b%2FzBhtgNQj8gqbx9Y%2F%2Ffepx5DGeAQzVSMGcZK6nu4XDq9JJIGpiA81s6aga2K2PgClKd7MbiX%2BS4uogIL3XS2t%2B0IfAN4l1KoSYymHrtEyBSHJMRUw1M0JvL6HFb1wctx45g8Q89kDgfyPYvXarXEIzGBvnYdb4lS3FZ0QEg3ptWWYNIvSCI0ZsThZ%2Bn3GUGvXnZDt%2BIr2Igr9AwBF9uM%2FKiCA3sahY1oWrPBwwxseSygY6pgFVBD1QC84ZictnXCDXE4Rv3XvxdDxfNRLcWlzS6RYL0YCAbXK4eDxNOmOBBD4UeURZDHn%2ByEq1AEE1meh8sPIxCA4kBRzJG0vRvVedW3WgqXaUENZXZpLKREkrBRTo5Kbdn3CKvHeYfyfasXbzlxnPVzCgua1Zjydas%2BV5nmMECGLwtI3snXvj%2Bh7ruadeYKeDJW34461qElzgJ23c68yHB7hzBF%2BM&X-Amz-Signature=cbbceb7b02df5f6f51bbea5b76a429231ed17ad512ac749d04948720b4a15994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

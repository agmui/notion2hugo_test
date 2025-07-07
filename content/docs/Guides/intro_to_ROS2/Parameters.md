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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYRUHBQ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDsGppeD8uOKJAG%2B9fMpKwhO3IMDH7fckWaimfQqB1W4AiAlYJQdU90zXR6MS3995nLux%2FydwKVQSzsuOQGzBULjmir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMkp%2BBTxvSIbxp%2Bt8zKtwDWFvitAzdCXeAjnGt3G5NVUhmMHjpK7ORvo912EF712MffnEFbWPEn8COrAXtcWw%2BRtU3QkVLLiEAaY2wuMbj0Ore91IbwmsI5oTh4ybLvLr5vkyBS85AZP5%2FKNnsIyerpHHpSp4w2M3O8qDVTLIMksTxdHok3pqYRf0aGqHj4QAaXlnVnLXC4%2BaUfh3Z%2BHeYYJJQq3HUyd8brHqkVJzMuiUqHd1DOwcJBdszpjfsdaNpNype7anSlvFzLtC3c%2F%2BWYGOfV%2F4uhXcX0nvjGkk10nEY2MeBJjLAkxzrFJeVoPRPyhEZpLBss6pty%2FRZswWNG0EysRBdWC44Hisc9ZsvfhGMtoCbl2xNTFwS1pSA301Ne5Q3FA3ma0%2FHKIEYBWy8z1IsntianwDSBrWbSQ6ueTRGcpeN96tBT8CJ2pvLlSsYPBkE%2FYhBaLb32JKoqC%2BGTuYE86S3hTCredNK3SlFDVUfK%2FRMzp7VNp4OCNiWu8FoWxvUlUFRtv%2FaqlVRrSwsB9%2Ba1fhDqjipAc%2FFU%2BgZzRWjHisLfy1r7EbiGXIEn%2BPwEZ7I1hYMPCD2l2eyIl029HPoxjUd0FvynfcE%2F2iuqEcSrsOVarIdDAPPRi4DyrRcXLSB49%2FueU4O6Tswp6StwwY6pgEu2y2zhL9V6%2Bi%2F%2BjHcIFZlJCv6C7P2iQtT6EBHYT0dQDh7%2FxhrYn3jhxMi7P%2BxdUyzvGKQSx2F%2FEnwQiXRO3fs8zXJiWy5%2BuTLGpOcKfJPWKN3KwM%2BQonnXq7JS3jkHEeWs2i0tnDjektwad3w5L9IUIUTkIQBwm6s1Z0FAs2aiOymBxtX2bUtGTUcasXVjZfU0eNRqYaKezvylRjA0DgJloe3S573&X-Amz-Signature=4cc836ad61f92ee0fa197a4d772fc5325603f28eb0ff64bb66837138915e2b20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSENOOL5%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIF68y5dHddwTMA9j8MHjRuAGfg4MQ3BPgApwEUsElQdtAiBp7mh19djINpTUHNOSnHbsJX4YBGOODYqbyEo5Iupt%2FCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM2c5ydgjz9rJIh6SMKtwD6Jl%2BWmIPx33sG%2FsPW5zprQpqa2JvNJp6lvQiwUezJPetj%2FYYIcIAtUBgyg6RW%2FTE89aeruB7mtZuf3m7nUiRKhP1sDZACWhruWs3SSGGM1J1zJNiJa6mffDWv4GX2iCo%2Bdq0iTRSrcsYiJmYg1bRzCWcxCpeqLeJ1vg7JqpAwmx39Q1SIX5W1uQXFfsritkIo80JcFxZ7BYCcwgnCgmWPipT%2FmgmW0WhbpTRWC48VateC1f2AduX5G1fO3ZmpShEDdrqlZzWTY6cdRpHcQ7mtSRtOSPRvbm7cZO3XLhxtAAyo6b8bJ4%2FxvcoKMeZ%2FfnsSmGiZt9xjUSqOLMt8zZCW5SmKD2D2AVvvHPUy6F49QOEMcervDq4OjleWkAo7TaTG1%2BKDAunF9ecAd4R1M6bGgMHH1yODob0uq9NCSWRyBNajcoFTpuP8j%2BUokDGpnDIbnfx2GIluoOGItYJrn6gtXMEjLj7h86sNsOb2t74Ovg2OZQx1XQYosCp0Kg%2BGEt8BkbZWbiB%2F4BIo0MBtosqJDhPPaniqP5idRTEfOp1JmE%2FVxp559Ov2zWOey5sRiEjM226xEFu7W7JNOD21%2F79SWQ4%2FNFNPFpSkmTy50pVZMm7eYPXMxSZk4Ur4LYwu7P3vQY6pgG1krIGHl5S%2Fi%2FUqESDn5Du0OkDGvR9wRdA%2BgUfm0aXfB8gSRYEX1CyvrfWIa5QLvbx57YvwyYgwJCVqUdseb3RN7U7vn7d%2FBUmbAO%2BvnFfH4U8P3CBZmA8C820hyIlA0R963kvA27JNW2YWzcFfsKgYfFrnoyXc%2BumJB7G%2FexHeMpSmgoMMZHVcKXlExJhiiXymfA4iESBsFkci1unLrtmxr3R%2FfDD&X-Amz-Signature=954fe258eef15fa43d7fcbc26d51f43280a537bbcf7ec2f61a3cf96936807a6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

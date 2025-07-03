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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RONERR4X%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCrcMeOycitDEpDjKorqji6zUYt7c3yKavn6ll5zyXimQIhALDzMY%2FdZh7MzmYAernDvfkwGvPMjJL1U02sXVczHsh7Kv8DCBoQABoMNjM3NDIzMTgzODA1IgzIvz6dzatdfGSm31Iq3AMidORCalybiuFFMRCX8dak8H3UA4mJkJTtI1CqA0KhGcOLUBBl8MJezlAIXXY0dFKJTZD37VdnFRqBI%2FHYTiCkBYjrwaEaqL4HemxxtQKCbaTasRPVdgjR3lsjBUW4ScYuEx3j90eMNZ6r4MILog3eIHY%2BfkRsJTRo9S%2F31BKm8KWrgplSLyfxBYFwGE7MaUzLCkI7bQ98aPS2Ojmy52zPTtp%2B%2BXnkSbHwduI22PqogJr47vStTWUgpmS7hgX43BqDzchxfr%2B7lRVGv%2FOdMUXSILGES2SAi1BBVbUjxAw26pATlue28rmICcrjfXNLRexXvoEsXA%2BRdX2V42DNr3q6d9cw%2FMLShoC6HAulSLz7FrsMBIGgBpEBIQBJTxD4uSq7VHKYiUcR93O6hTketNXnnLaRJxf9FLVmDtVeNVDzBS4tJddDUjEIBHaT8ri2fom%2BCDtVEsHr2%2Fjmy9%2BnaLHCn9%2FyAGbWPMvE3BoKhDDoL5oWXPvEqRIELlRinTOjA3O2PA7qu9eosojVe9HO9HFAncpkSVCgxBfn%2F%2FOhKxMMmDcxJJZV%2BGcT%2FJy3pzOYmpEWYklhIy7akneBz4zxRIyWmo%2BiTF8QHDaGy%2Fo6Z3ex0%2Bo1KW4%2BJ5lKlGYkcTDJ5ZrDBjqkAaskC5nbSK9XHK5rlwDI7ygvWdlHlYQvptjJA%2BLT5yiJsDu8isp%2FcdfLxW4HANnzQEfxFfCo%2BFvGYEJoBVnmer2FoO0uhElMii%2BzhsCzdIa6l%2BgERXx7pFalrVw%2F2TPnXVMumdtlvvHyA69EJNfgTCIXPr6gos2W1yT7PamDqfDt7fq44SV%2FEjPeJd4seaKt%2Fmsl4YZSvE5C%2BPYqmFstWZXwoNS6&X-Amz-Signature=174048c210e82b09a53f322c933284d0c46e51fb74363eb1258a48c2da0c4446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

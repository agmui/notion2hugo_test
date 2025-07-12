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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVSCHJOI%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFm2W674MzGGR36DWvIfuUb0tl0I0qMpTpSkGJlHRzJ7AiEA%2BIr5xjwL%2B0%2BbCF5PPqHW2Uc5Gzw4udvg94JpEcYPcIIqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMU3b4j180OjxNdMtyrcA44%2FUKFEdwiIY5y8pk3v44DZ%2FlugYeN56gSqcRT7RCmV1sHuT6QizFLGtwX5Aq%2BUw6H3NAz%2B9OSnt59bQDAoITtiy%2BklFgZxFFS3iEAVvJ0Qn56aqPnlrkvU1kJTzgf%2BtRsJXz3WgPEZpx96RXcnrRiYWq%2F3C9Uepj9AAR1s7jfrdWdC7QHjHMGdqKIJha4OTQyrGO3t%2F2guMb07J33Gk1Nd3jSzrl92JqMrgDXDiss1z6aCnMH3WpkpML051DqYcQzqsMIs9%2B1i2YErlsZJDz1fmdQ6eowI%2BxakLu1LvODQo%2FQc4bdzx65PWPA6IiO6DmZbr2Pl%2BsDJTPbiGhR8W53AeN5BK7Ujjs%2FNGQXk3ggvLQueZs8odsK81FJlO0bnvjS%2BuBgs4rslazVOhw0cipX8papFJ%2Byz%2BfF34mmtawgIPl%2BcFKIxAaXGPBGIVmaW0jDcXFFFWIojrBYDM5P%2FeTwww%2Brkh0S4QuCcDbF4fvpoEleCv7NILqffQcwhZCwH%2Bdfv4467MoXdG9PpLmnHyoI1MmgTYQ816kDLhnFQE2Cu1gZ0huT3XZaKapnWUMjgwjTaHe79atsuCmqsHXMKhTjce7OoJ8I6NdS3W3ExD0pVIT5FaYxNDp4kI0drMIm1xsMGOqUBdxl%2F0QWMvcIQ60%2BPR6ajKAZDhJ8QV1ks%2F8T4WqPP8Tv5nBARm0Ors%2F4ApoSEqWiJPtSFHvbG4tcoeZOONfO04h%2B4%2By%2Bo%2BZvZ4GSYucKazo73o6mVVduDOxdAdt9sqFDp%2BUeHhw6KLfmMiVV3oWrnyaryjzSbd4L9WVB1UczQdD9LKddz3RQ%2FAlZE%2BacYBUt8iPVyLD5zlHofKbC6eMIMBH3By7%2BX&X-Amz-Signature=b519ba106dc7a2e125de66f6f91c30c2f189532eb19e93ef20648aaa0579aad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675QPB7GM%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUdFDHEwHTZ1cNCwYILvHlHyzWrPwCJBrhTbZZRhuElAIhAMzcnY5B6JEiRM4b8uooLEDIMgyDUBPt1Ek2PG8BNfpfKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeDIFPftKqr91BEiQq3AMoE2yfLpOX6SfU1coGtAiCKvElJsoBBQPPTMNF8y85Qzmwz%2Fi2HmqthRipjXThHf0wmbtKSjMhPPvtUyk8o1wm%2FmVzsaZz0ce1lRCmFi5odiG8n368g01sE%2BHx%2BFzG6QFd74CdnCsyO%2F%2FelV%2FT1hFyTtPUd%2FMVdruhgbwaAVspXdglk2hqIHW84fOHWhA1U6IXKKBp1SlPZYbSUaIW8X7QjstrKmahULLbktZlBojytCwimB6pTDGGxN%2Bm8C2mTBX7mkAAfSLmT5iKAtDGLcOBbSrSD7kPMMjclQ7%2FDUlVqJXeZmXSwkDg2yii96DJfOmewn9uTl08h4XSTUEkwuMaFdxmTfjsB3bPbvs3zrnDzSJJ8FZPRVEb6VMI71DtsWhzBmxxH1PtPL1taQr0WvvJjHYDxas4149%2F6yfmIBIHkD1GkdstqibUvyRQL%2FiLGjxjxXrO7EMg85gNjZXwczFW5NoVlTGyun7KJmfih64QCJYg1mafzDGC8u%2FD7i0u2DuVAWzR81vYKzNbVsfyH%2FuIwPG%2FW6%2F%2Bp4cBBh3tQAp3mndBrPZKa7w6Gmrw%2Fbji%2BLNIZVCjsoq8ES%2B4%2FrM4haEwZ9uLOVheVa7crDp4uMvfIHxW%2B%2FDiPTfBKi9osDClsazBBjqkAQdwo%2FME%2BmBCY1LLH661u9AKqj635filROMEmybSqTnpiDLFdGNONPVkyLv73oelXkRDTVLLE1WgypeR7VhiEMxhjjUfdYoRQ4H7u2ZOv5iT9Snz4wbXA1SJDEN7j7J7%2Fb2nrC2LjleUSZXfIbif83avGw4Ty8qPZcjm4Q99qJiUPSdfO0UqOD2WJll%2FFvMyuAQ1A42dLCLk6%2BQpylW8PleXRuBP&X-Amz-Signature=74a355c40b8838eeef9db7ad9cd27b8cdadb6900d749ad6d70845c08838458f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

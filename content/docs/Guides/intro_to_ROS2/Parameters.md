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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2CMEIZB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzRoYzQMNfFfDiAdBID%2B%2FX6JinElWowziUqEZveQr4RAiBln7ZjjPjvnRwDIDlux7l8RPM7BmeNOhU5AOsg14f%2FbyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPo5ECz8sXiJfcJnWKtwD23YmDvYJcWkgksukJViPaZ%2By6PcXXM6JpK%2FGXPay4k0oLdCCeNfL78opVYURL2lGHMCdgMMGQ5HVwYw1r1vTH8jLtMTkGkjE9bKsFOp4GuSfwV3nRFGKzBO8ORwAZRgTMBFkN7Z1DBqYT6jEvQRhD%2BitQ%2BaJF91jgtUGT6JuPSQrhRtfj0Cw3uHHSZyxtNI2RHDsYiHGmaLDAUueEllt4nuMnMmZDnci3IplHqvsXtBjS8Tm0xJBjpUmfVGU%2Flz5juDaH%2FmkFRB6fegQpHDdE6TEXiCYI0kgX8BSIZwkWg7DNQ5MrRccn0gm51bTWVrCc%2BigzCgU6kgjxbHfT6BUb4jz5X3C9TmKajRPmL4IvWpuUKzewtVNPxH9BDqU54d%2F1%2F1ToYvOSsmDUDcYGTs7RvYEeWS%2BKrUpvu0SmcWwVHgkgWENeX4lXCyTWXIT4F6wWEn2UA%2FJq5BpXJ6stDd7FTcQLJw5ISm%2Bx64dQfPaMo041HN0MzghtXkfkNxoAY8hbRm2TA%2FYKWe%2BLMuL%2FfwikRwH2wmBjsre8%2FuaqDWwnIcgWfthbf5RSAwbChnM2J3jfDW1Zg3DVGnV40M94vE2S7mVYOXzqCG5DRxMM55wKYtb95h2rftikfjKYUUw4YCEwwY6pgEcSq04s%2BJGTQSQmCt8SC039x3QbXY56h32MxVhhxkHfYT1wUQ6DfJ%2F0QpaJwJkGbfcdM%2BcbPL6p34Z62mMhbZJfn2nOoN6Y2PyltobxTkeBe6Ip2836RiND1F%2FYFUnGYx9W9V1TsBl5UvZQbLouKuV4yzAs4SovY6YJQo7pcyvdereQ65XcX%2F99Pg45SK6lEM0sinFGwuZb1SuBbmO9ITZqcNm51oQ&X-Amz-Signature=edff0f0c7b9d237efbb6305ea68aff0da58abb24d024285d7bd9edc6bcaed9aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

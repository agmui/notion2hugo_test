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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4VLUAX%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPHEkoRYsTN8SCj1TbT9eH52Vg59G5LKbQP4bWXQyENAiEA0xaCCSX3mbW50H5nS%2B8AKj87uQ0TSqK2ueuTlxnoGvMqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNafNHKXiYyP9FNnqSrcA4EnFVwiNM1%2ByIBlAfnVDrAHETrvhAbO8WnXBfDZ6FcJGxPcDqDr9P26sSG5Hm%2BhpKeM6XyezI4%2F6CiHUCQzeTsapE3PNges9CS3tP5eEw7rTuiEzMCVbO4Oh3a8wVZKT5qMfz7KSHKprNplwCX8Z06kd3u0VJ5aZzsh7vJbX01BU%2BFPk2wz7uD5ZYaXeWwd8aJLLFy69T1jys5CFSNECYE%2BquzmxwE9QgP9PCIH8tnb%2BGGKleKjhepXaFos2qdTC%2Bg%2F6CothMp2dE7IiiK3tVmsYL4slGrJxxr7PmQCrBIhDvIWgJm%2BreL1HfSSCvKnek2jgPIcb5Smb862DDHZHBhbtQMujNMG0fF5dGZk9ePnB1Imn4XhsT7xDCdFy2LLwlSmxn72Bek3Vjgi8w30mgSv8SamOym4Rg9CpD8XSIN7KYNyTED5n9UEoIj6tXeFt%2BVwr94R5cs%2FBoJfBqaZwJ219wTt2MNARxRi%2FQpArtHShUl8ZnM%2F%2BxTjnFrS7A2E9q2UxfwUIZd8kACK7nonMjVezaCsQEE2CTMPyFcgrH7tixDi%2FTjM1dZjOUGA8rJlEptwlCmaDmkwVyj4wRrkBYD8znblagU9l6Sr2qPsii2zOpHwRVfbznUT7XupMID958EGOqUB1PL60mTjqd9hXVxgo5sbvKF7s%2FneR4OOFRShcExxXQJNIeKwcFkaBHpCrujrdI2mwgiCf1HB9VfEgX2FcsirouHfFwBbaKR29GtMCLqJGLv5Y%2Fl2nWoQkJ3qXZE%2FRekY7I7vR9%2FvDBEgfjYXsovQhbD92ccIW%2FEoVRGI4yhsp2IODPE2WTdRCnzhQKI5Uo4AF7xDV5CfX%2FZzNceP4fypc2rfeyns&X-Amz-Signature=882b44b180b1bc586c72629e367ff91f21dccb9b72b4d153f7d329db0b61fc8a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

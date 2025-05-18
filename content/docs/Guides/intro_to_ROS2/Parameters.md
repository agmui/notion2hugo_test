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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VNPOC5V%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpDA3cIcHMkZhwhJ%2Bkj93Jqsolw%2FA%2FqRJMQeFfvgxIhAiArSIELCoMQtpO5nBYRy6hxWAnYQnvB2%2FqQ6MrtXZbB0ir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMNds76iIiMF0e5ZN1KtwD0hU2PofS7gf5gwySlFpipe2iWIuRfeUACXfNjxcxZQMfKFtfrebP3r6yzh%2Fz4sbFbI8yj8ldpqo7pTolSDhGPoUDEFC0Ius4y0IXxuyqYlVgqdjHeimcWrczSVHx7%2FUE%2F%2F8%2BexTm9iMz4%2BOWsQZK17fjEipqEL0WONJtWJy5JwHe0j543ko15tDiA9UIUT5Td8hJxdYrqUumsnIGXlGXDIrGiwHQtvVHj6%2F2RY41iLWCy7WY4cWvXpuguPVs1ICfTCKJiPGJzJx%2BSJ0zORFx9hZ4pl2ZN96mzyrt5e%2BCNb3MCLzpxiHan%2B0CMOLphTn1mFJYaztIr12cpkEn7YgYzAZz8x7cDZrfIzQqeVmOKwI5cMUg%2Bb5JXcKE4ZvZz4p8N9vYVFpFueVTDh7vwQh%2BiB8gPgIDkEhs%2FEnppow%2BHD0IN%2ByqN5HXBPDP2hrUucmKc0sqOK7BCRy27DTrr3rHx1XhrjMEHDbldyTSXl2TVzkJWnLcVhHLz9b8dlB2YZ%2FQadgfsTAYSsptt2x6q5zkHZdOYzHTgBJ7Ip%2FNfwiGuzoDOnTx9S7XZeHYz4Iez67%2FtCaUqPmL%2FkAfZF4f5nrSyRUXKQx0rHkF0bvSM%2FdUFvRsxqBV%2BiCA3MIlqJowieeowQY6pgFWv%2BgoXQSaJGiUefjtZwjCvxSjPeEorHiS3REc9TDg5gIzsyYqm32%2B4eKBCo4rsXPEjp4ngbWOZmlHDlyqaLsdbT9WGuMWXOZdsnOVOuISPN%2FdD0kZ4sCwEfcCO50zbXaqrya3xa1EaHjfA3LiMNrV%2BQE6TiuPrBneJiWGqNmL4qeBiDSBz7xVwMW9CRfSBpcqCpNBWFx6I%2FBdI1EfLyyUW3I44kww&X-Amz-Signature=ea7d351444fabbb6b6dc13acdbbc24365cd60f92da9af6a1212e70a658592261&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

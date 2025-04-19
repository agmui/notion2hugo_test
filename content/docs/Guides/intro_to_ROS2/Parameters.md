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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGFB2NRU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRkytG%2FT9EW5mhAJlSHBcpMLa9l6yiIXDQX%2Bimfn5W9AiEAgTaJext%2FpRxbYZdQULekdZE8WyYiUAlfxwyz0bzBjcMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNWAIHRWxV0Oe8AxSrcA%2FavFDbtt6tRwSgHBdfSRllEN%2BZuRLrMVLwzIN%2F%2FmFMm4%2F5SLTpF3n45Cmj5IRP7M0GXkRRfGvrFNqiE4Se5ufMXqldNbXrnFWqjsBH2VI1Ct4h%2FhErdCpWhdpzjK9knAjHbJRzqEyYfk11AQarEf9J37r9mrJsFxL4gb9BAGRYSlu2%2Bg1Y4ZOkHfSO%2BAOzd1W8iXTQ5cloV1gzUOiaoI09eS%2BmNDzIxiuOjgfK6Oog6m27%2BRgyAV4PNK9C2m%2Bb2z%2BvOJWTRLu613baP%2BnTpenW4s1xdtKR2Anvtbzl8UKfEus%2FowW6p%2Fc%2B09o4Exg0UgWqDbxfmhZoqoPpx7EAy8TOol%2B8STb4clSvq0lplS3TaB3E3SF1vKaTXUjsKAi3uhKTlHpai3UoXlXFYLWVZxEo5WTziuEPRyagNzcnPrwKoxbHHUG66VgkhypMGPcyQga9k60SqXtMFh0HOoVRAxF6egBhLzqvzIu55PepY1MDgf3ICaQHFdjz7qirT1BGuTRsLNpe5OMZp4hF3JbnfdDuhVKXurkMVglAq4jb3GT30OzsczCgrquGidjjSb0QPU%2Bun2v0Cgtdy8%2FRcZq1qBkVcBQ6OhF2fAWGIuth7zlbRpOjdZHvqRzm%2B9UkbMIT8jMAGOqUBiANvCYqeZo%2FDxxrKLjNBbY9tW83s6CCs6ZBui15RCOMI6dhwO5HQv92aRFwSMgaeOu%2FpFHOY%2BNfCsNO%2Fi9W6zv4%2FzM%2FYEqhC8PrXGlUvqZMZrB0grNieUH1emL3g%2FkPo06OGRnHgzDswxYti47lZ4TjZR0xkK8BkHGkUEaJq5buTRt9Y8RjpfF5eCpAKeFhoPc2HP8whnOlnYlyHrZFucJdXu5g5&X-Amz-Signature=34685dfb17e31e121a776714975b70e44a34ccd3c2fd1c66e4f0bcc699a14877&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

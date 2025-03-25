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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUDSEIE7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpUToXMQMQY%2B%2F%2BoNkOcBA2P04OujlmzKcujm2fXyGtuAiATQJRFt%2FZbV7CjKqnDxMVYgq5CFUwnWEq0dZ1GEOWtzyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMtLzfXPWzigNc3BG9KtwDb6nl%2F4Q1HmRh2tO8OLknLQDswvSLouN53hkL6lGw1ZjrablaTGnPsBvhtVu4qIyAUNDA59GUHFhs0Uc95yuF1jS8gmH1beEB2V8VvupbsirMDiYjr2qnvSiXgnGsd4EtQGZJewkWjn63MXo%2B48XoJyfhG0KQwRX7v87TFUCD%2FktZWBOHFeqeX8S3082TInrDsa3WQc%2BISaQgHF1HF4aBcKfL7JrE9PJcSfTRsxIs3TITXS%2FOZirhH0BK90wton%2BPdlsB%2FNwnQx4N0OYNLIXHRRSWrvHiBRCM6ayT4frEHW8M%2FVXF1maVzCiQzh4lZzGdcMCKOjitam%2BZob%2FjRP0%2FTf7b0lncju%2Fwse0qnd10bIgRNdaMiQXVVy0EzVLQK4wEPV2ooc9kb17rJExSkC53U77wkAaK9vCceLrHoOQMMRZRlGchXeGF0zX9Yo9Y96Afk9giiInVztzZOir85CJ%2FeRZH2gGaTwEYaiNPGDl2BRokbuL3KPY945XHB5%2B8yFRjIzggi7jzDQdzbypAMFxmwqC9sh0LFuGxLyUgZT2UfFuWmuduruqOPsvow6RxCKZ2j8EfW1APHU0QJNSjUucVZiXpxFeJdiWdWg2C%2F3yCXDjgKO6A%2BA0dqwZjM38wz5iMvwY6pgG7GDxAsreDxvhnt3VhwBZFoe3fnLVV6JN6GcDR2oOpejJK0r77rwJFOliZbDoVL0qALfJAgkPHqq2qjfJk4wczfq3ubY0mSimjMeKI9pcGI7CtYTg0BbQrjHGxLkTXS5ccZ9YjnXCXy%2FiK6lZkK4iWN4oQyTcO%2FEkYnbRV%2B6cQyqiDYYjZg3HmxbdWfECMT8lc3zSndhNyZJq7qqEP30VNlv6AxxiY&X-Amz-Signature=e5effb93926ff7383251a1f1994407d5c3b6ac84afe5f3bcd186dcc75ffb918b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BQU7MJE%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnQCP6QKWB1wYxHJmarqN7UZgan6ZN1mtyeijywPxlVwIgXb8smFslAszC7gm2%2BWrktw2%2B95aDOhwYHC1yPmLsKl0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGZQylqm14IBjcH7MyrcAzZ7eDXF9XyVr%2BhziPUpEny%2Fu5e2PQgZuTGkyv1wIdlX5XjPWbY%2BATT0Bi6OfxNSAmAuZxesLLyOh2TQxEvXpgCMaYzVaCbvI%2FwIHjFhM05ry9XRaiODcUSpNuzBYYrpPru%2Bz7laOWZrkY7IPpaKrCa5i24fG3JCSS1O7jfPQ4BDlaTeK42YQUuqt5ihZPtub1Xj8%2Fs%2B%2F7Kvx4U4SQhpyZNJmZssnD8T%2B6mImMqQoekrRh9fTYeTii13BkRvFOmqAH5FlphqmNeePUdrS6MsQs7QZyvZTvNgYwvSIXfzUw6t2gmVwmlUFGTruN2MMcZMjZcvUhEj4xBJB7Ur0i9D4yidhpXgXOqYdBSdxY7p6%2BIHb0%2BaAdOw1JPeEYTWhRvPM4S39tTZewg5EiKLcrp8n5RsuCH2HHYsYoRK72V6fxnSPOwv4nbTHeZazNb59%2B7Mjsj%2FaEeTVjlpiU7p1csCoIEoCTwp%2BjJ121Djc3eZ67ORtFLiYTDF0LYHPDoOGdaOauyApTSOsXwXl2jeFQT6QB3GMpWthPXglFvyb5SnQdUTJenm9%2FfkkvBlB82Dk7SIaQAnW5oNq6%2BqrrPwr5OlouH%2F9yD%2BVJrj6m042q8NPnYTsNqS0vv%2FWTOR0DeQMPvs374GOqUBw%2FosVuNVPBLs518Ect3ayO67PFw6Ci%2BTbCbxZ3nuOURd8HNIjP2uZWvOd%2BUJ5JSj4fg0MGXPbInkknCw%2BMHBTjZxElKwrE0iNFJJvAN1ubvyYxQeZxeUdr6STei6%2BxoLx0hgBOxQongEusQph9HxaHCnsmPm%2BVOIqJ%2B2i49OtScf29aP1peieCm%2BFnH8kvAvvUvoQTF7vDM70vDmuncECfFXYuVb&X-Amz-Signature=1a26db90da4d16e362a955176e0ab17c330c7d09d97cd1ff5153353b3dcc7c3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

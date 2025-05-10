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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAJQZICF%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDwtMP6QT7wm0KCanlZHAZBWfnJkBGrJ%2FMQ3D4dYgF9gIhAOky9J9S3egUbZmPPpHPugWt0Vvw0m3QM27EupxkHDVsKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznU9egWWLFGHtnb2Uq3ANboadTdf7WXufCZ9laqUPhzs3mF8JVKwrZ6vQcUCPgpcApAiNzADOoGMwZOkeF91UU9g%2BKRnqm2s1bYFlca8uK1rBAJLCI7Ww7sK8S54htuCg3iReGA0EUoA%2BKmqH0KTfij1ZlXR1CJG5BBjtHjM9VcPjlwigVY2bnbvqf%2BAOLviM40KWo%2FQSZGntgCnR6TfIpqaYSUjszmMps%2BbF%2BUmw25hYNhhx1YWvwkFb8GEkkAK4onSI0B7Iu6Guay8nrCGVFIHXW7YEgnuZnmWHRn6nDKwNnj1RglfXRUbkTDMpzA8oDdIekC49ZYv%2BZeLwa8rpHA%2BmeHdzqXcdDf3hNRABu3PiLvgKchP%2FKFd%2Fz8%2FKL1F66KvKo77FMfsyWp8hI3cLq02gFlrA%2FzMzYS2WfH%2FfDrvRp0KvkyoSDauNuKsL8nIYMT6Epju%2BJvO0%2F8vtXEPaBnl4xw%2B5qJzS8fiLpPNTCireQwnHXmnZQJWC5P%2FjkyTYodLldgpYFS6gfjE5oGrRCmkxQ%2FLLjk46%2FnoTdhJUbBW3WnIJQwr2ZD%2FpmmNm0a1feu42lc6dZs5T4lwOmhmTf2s16rg6QsqeZoCI1Mke907CtYbNXVdSfMay6usRWXRSYKvhgufQugTZwAjD7j%2FzABjqkAaqNY0LbKaiNfCtz8TsD4RFjJ2gHQxsSHhiYYnMxOF%2B0cAo20bOC8y1XZ2Kffqjff%2FmHkts0EgtdD3FzmOXW52FgzHECtwvd8F4AkBYLFZQlWuWFwVDiyYkyDEA1DtZWnZFImgjpxTVg8P%2Fm4oWnsauisoZRZ1scFIdQ2oOg%2FPQMGRCtWel0XJqCE3FMTtgVbPRlH61rtzAPMpBzufyrO8xbSUh3&X-Amz-Signature=5c323b1e9a607e819e94f7cb7ebbc316b4110a9edaeb3a7ff0508f9d055bdef9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

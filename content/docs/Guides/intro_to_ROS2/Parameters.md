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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU2RJN7R%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCICsBurrZ61wopNJmmuFbmlSeRq3xqjYVdkn3bFHMS0GDAiB04ZfSCycb9PQpC3mJv%2FpdLEQ18MWsQCmZUAdIVKHdoCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMFKrJxMl%2Bs291%2Fn1xKtwDK6hqN1LW8oe9unMnboGI8qVXwNNHqGxYg1YpA26%2BJEBDj65LXu8FP%2B920ltw9HX90pxsWEOpBPEJfSqhWgvb1Klq%2FoEIEcW7QwgZyc50CRRR5jbH3so0goIoPKd61YXyPNODJCVl3Z5aRV9YFzx03sL63MGXbTSHhH7eomXP%2BhmKSd28XP8wh9axuB4nG6flF50c8g8XqeiJqEnY5sd4PZFD7U70xnYn%2Fy79bY1L%2FrVmc4kYVoUPv3H%2Fm72e5IZRWrjWwZgsvkeuxLj6mZcERXRVg1Npat86NxyFh%2F0c4OeW%2Feq5YhKK4PsGPul%2BQNDdbHcDiEKAt9uYnk9dNxKTEYF1Q940Wt0zCt101RSBp3U1HxU6eh1hU11ydEvBiVUEvGQ802FypmhGRNPE9Ffqeiszcd62r4E2mnf%2F%2FHXzroKK%2F%2FxcpDeUEHntbwWrSAHE%2F23FWI%2FvEtEtWd4jKFK9MB3desEU2kqg6nB3KQx7ZdY6HreR8IWkdscg1IbOEKEFxqA94JRDHJwJI8lP1g5hWC9BKzDjUWyH09JFI4CHuTozFc1Y1I8gXEuTkvU9pUwRlEhNLuH7%2BweZTGsF3XiNwlD6%2FCImcKlVCDOC%2F1YdFCtCPEplsXi3jV5rXgYwp9blvgY6pgGG0Ywk1lDpZob2XQVVZUt32BNnFwZ0OnbRj1fj1navwgJyWZE9RmZqThgW%2FOdZaX5RiZ9VwqKt1aewcHWoOjx48VFesaHLdPTt%2FVnid79dDpoAdkVbjchdUbefl5N7iHzVX0NMAp2qKIXo359o9qZfTqT0%2BiDlgwYmdR%2Fl14HpFHlLoFxifGJARp5ZcfuGOFSfzl4jsoruXdPylZGrill5et3rkZTS&X-Amz-Signature=9b23f43db6cda264ed2b975d3f5c1be281be30f80fc50f3cba3ef3d809e1cf55&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

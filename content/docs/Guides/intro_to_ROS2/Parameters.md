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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAVDVCOF%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKr4vrC%2FJ1JmnF7lQ27gP18GUHbsC%2BbrN1FWuLNSpkCgIhAIF1C8TZOe6Xzu991%2FPRc3V%2BhQlTjM%2Fse4EoWs0RwgOIKv8DCBAQABoMNjM3NDIzMTgzODA1IgyYJvjPM3pK4PP7zxMq3AMGbe7rRCOOsyG0uGWihi%2BZlIMyRqGeoJcqtqUZbqre7pgES2DKuo0OXgS54aCqsSrnb5z8Bz4%2Fcv%2BtqQj0uDDAHbjdYuG6rMbLd6Enx68Av%2BLUj3wFwPa36kQPWIMO2M9Kg%2B%2By9ldBDuZez8JsPBBrlmucaswkRLPvqdfa3j8HjpC90Yqy5tNmwV99WO7sbj7ReOfjMwq6gNjcgkN25qcrImCz%2FUE4a7k4BVQgp13o8Mal2p7vunmufQP%2BTH2qvlqv54IZcRwyW7NI%2FWdwoRMK3PxVT0bZgYo9oZcqxyf3wZzIohpCI5oZCjig%2BbXJHS9SF6j1kICa3nzgBGxUgLYOSyuGmdCjAQaG51AMsBcfv0LQyroU83qkaPAkm6vf0LY7ABVMx33P5AoBmYh%2BCytPS6%2FQv5Xl3p4vWA5zqLhuk2ajAVfL9b%2BqXQ%2BB6JZg7il3koXqwdQsJ6pL9LHeM8J04L0RlsnVsH8u%2BTcD8tGBf74q7a8Kkk5vVPnqqPZ943f9M3kqFJ%2F7sHM4lYJRfB48wq%2FqWbkdma85pZykYMp7nSHQrW3XTG%2FjQjrEncswbHzKk6YjDjHOjsRZxd3rgeSR97n4KXGAaO%2BQZhIKL5SrzRXe2HDtUqr3fqTBPjDmpM3DBjqkAStsc%2FGkPPDZOTKkIcU7Ns%2BEuvISApdbYlThioFVeCL4zeRdToxM2MMjLxd4o5GxToWPr0wdc8D6EBhq42j2JNTI7JP8OTGMx59sKyyFcpmRdAk1XIEeDvQy6bgO865Jo7IdkXnf60knJsaizMlUdFoYaKOki5lzwcbDZTg%2FoHKvJVE0HXL164UpQHrgDa2RJ%2FnW2MjJ6LNKchnIVImzBnCLGFY4&X-Amz-Signature=5f00415ab2a81ede96973502a218e3c2dbd01d23f92ad56b1dcc53cea43609c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

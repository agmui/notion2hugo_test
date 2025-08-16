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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2BCHMRD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFbDjEcvXwHAUu3uUKpsQKOutKkUlLI1bfCEZbBBurydAiB%2BpuD4PoE%2Bb6%2FT14irZByzhvAOXbiDzQW%2F9Et0AO802yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMeDNd19SGwpwCQkOSKtwDxDXvyVEfmkQTLGxcueOSnhOjrIS9ai32ZZVfdI6E3yx2u06uVGiPp0Y90Ar4jt7Z7EpQrQaIxkkValc5BdpMxviETTEiFahNdSesT5CuAny1F9skhIKRovoBrJXwrhhz233l%2BURErBYi4zzhuXXfaPdzYAHKd%2Bls8E00p9A4G12kdVKPuToQfPqMBunOv8C9Y6IO%2FFS7XnPl%2F0%2BNGhnQYrLHh6mOeCVxYX1FO51uo26xLR61ROpjCp0gBCErKIjz9DCHhs9RRO0FN%2FatzmJr7KRYyhvc8NPfv7bzyefoc%2FVFwm4MjpsfYrRQWpsSSC%2BAs8%2BCsycYcpepIY6mnvIYcrUxwHl5MKVVDBjz0QfEfQfONFL39QQjefoahIURzYrnX6XJuOLgqHLVvQHtQ%2FxtOJcnUhOTJC1icInqyNdVME7pG4Dv5003y1VSzhIF9FKJdQ%2FbpTWhaBCGLRRGPmYu2mAfvZ2%2BQg7x5h2TL2hd1TMv%2FdQ9cLEt5PLjTWjSDJi8lCqjIGBeEOe7saBvmjXxutoAwC5TuWRXA8DFbzpSDpi9HOldqeb8qP43Q1cxt4F5u6rZTHseExyojCgPyX9ux3X%2BldXGKcDdU6FWvBW9uOHxP5m%2FKxXo%2BeSvz%2B8w4PeAxQY6pgHRCPhgbZjtiaGl9RbOeEwlaxAOWkXkv9XojAMVenTOQJqpu0x3yeJyQUd5trnJHt9rsaQa1i7PGFRJoKIS7ZKmwFqcCO278d988%2BONP8mhScOHLIwuafwCUYfudLzoCz0llvEoL5IKvSey8qwBogn7N6F%2FyHanITLlVGJq8pt%2Bjicruz1KteqCsqkiX%2BFaFRLtG%2Bs4l5amGGBxgsc6bzNriGXBqQir&X-Amz-Signature=be4b45accaf5593081326e498ad2c75be95a7e40c8781634a747c90d0b4942d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6VFB4FJ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIAEVacUpVDI2dkr%2FDszcDNnVFv%2FHwyk0TJnTdLUG2T9nAiEA4wkB6Imy0q5GvquHwmKjW2sdbx92V1jrpWv3OHBYi70qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIa%2FJ0dQUKsJvpQiDircAwzICaCFtCzu0uxVDIdeqqJtm3tBFjNDl039PQ8S870AYoWaj0UF27ZVot8LgvyEs5xae91J0vSmoYqWVKPS0EXl2y4eWrS5izN9h9TsXngSIF5atDmLRTkU5Daeu%2FIjqgP9IQYQPQt0Vq%2BtncwaWGLFHmVDUBfNHsuKNrLBLG%2FzOojMiwJS8L5ZYgRGT1cz6ilcLiVYXGyzBX2XHuBJ%2BTIhn0uAM9oDfD1y%2F9b0nt9YLe0XabfVAKd5A5ZRwr2xEc8fOqXRwg1T6sqCKk937sXVdaTxKFB6zjBULIO2JDo6p5IgY66tn%2FwFU81mTy0WoN4NnTz8zMfSlaBq7OTWLl1IbO6h7AA3bdgKDoGyWE4grQiU2TWzSsr8Ny%2BrtBdY7i%2B%2FnOLaDmNv0IRaJ6rgC0NHh16xw2839%2FJ1oTU5YjMe8OnSjHckFGz84HBoIy0aoYK5cZ%2FxngKWMVk0lOn1YZjN%2BTkFeQxpHz2qrlrAsQBWAJS1H5WWyz5k7YBV4k4lLl5IkrIBzl9NWfEN1NKUJ3r%2FhKFM2qIRVuiz5zCry3wQfZPAtW6pVDiQ93WJTjQaPcNimH%2FbGOebS10faqnvqv6Pax9R9By1AHy1Z%2B3bcQrOjVH%2B7ezQtHzeodZTMIXCv8EGOqUB3%2B%2BqYPr9eoUDhZhNnaVHBb43bYwEFKTJGrpvPP5ehg0gXNCVDPkm31UlK6meJml%2BQIvOgqsyWEbmBVQdV5MpcVGiP4DWJPOlBq7op%2Fy4uiBRJayLladQ9x2iI4tKZggGlSmIFyP8%2B46ScG2rIdNBfuV2CNiWYmwOpdYigxeWokoy4nUg4dPEsc0wqZ5HeH2kKxGzGEoJAW6tc2AXNxU%2F0O0JHYec&X-Amz-Signature=f7cb302e24818f6bbc52ba995ee12500d3a25db1fb096f41becb37a786f0a7f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

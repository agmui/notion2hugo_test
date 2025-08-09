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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQNRBNP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFO8ZnjEJRazpqO7Yhb0q5%2FQ0JPeo1Y%2Bq5vWVRRTW0TqAiEAlF2kFWSjQywEkWGboFBYWd08IjMgZmXElCkU4P5TuxoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjnC211xH5JZP%2B9tCrcA3aZcw4NcG3NgdtO%2BvX%2BOAkH7GBTu8RDA76QWiBFjjS37gUhPJbMT63LKsfaCfFc1xgP9QoWtcacz1ytP9jO2BBaOD3qV%2FBUHnAnQLzEPrk9g%2BMfoVUFIhtaVZnn9zyvHB97j1TYzHeC%2FUWBhW2Ab1dfNbFEPuH0jd0ZLPZSR2qvh3N9mcyNrd%2Fj2qjrO3Wm6XH%2BoOorIh1BusalWuVLnNOcqtunZy0PoyZibdBA08L4ApOi0z4L1qI3rLL6CawL%2FwgkEEr2qslEfmj3tdy3m84LyToXSJHRpgGf7EylZKxD00ZvfYUkZCM%2BSS9YHYJ5bQCo54R08mmrs6l776C5gIBZoOxh%2F86eauOHQqo9HL2IDzdl3bXtDlgChP1RAFXne7%2F%2Bgb9exkE0cVLlgnzXuQoU9LGVn1bsPYxZMhIQchW16n7fYe%2FqOge%2FIyLFZ2geb3nDJmMv838Wvc1hcz6GbAZOBstEF%2FR9h%2B3R0Q1lHlEOYWWOEaBoE%2FyalD19C99TObSLAbWvKN3uLN9tBo%2F4hr9kG6571OUnJNGlOjfx5NgXg5dFqWBef5HUADskl6PMbN2JI6%2BIz5bPh5HHxIplwkiSTHb3XXg%2FERJpNoCUoMicw1qUJdM%2FEH%2FTLRcwMO%2BL38QGOqUB%2FfK6nQDNMXrs05YWMSn2lTO7XUJh7rsAV%2FqDPVEPgB1t79B8iZ61fC6YD8T1U8K1Jef1G8%2FQm8cMNddoWNNLmbYOK8IbhExMZ31SuwCOF0qt%2Bc1dH2pHxj%2Fyfl2emePPkZreggbvaBtnVoEf0HJkUCmvmDvd6yWcB%2FbDOBCyILLxg2vyQEi9HV%2FmxgMIZP5QKdHB7g9UYwliXnyidACEd7wrJb8V&X-Amz-Signature=9d1c913c2729ece8beaaa4a98e97f2fd63e66f69a68237ca01f524043690a9b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

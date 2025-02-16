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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZSH7I6B%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIFzhWZG8YjTR%2Foh6LEDCM8iw7KG%2BOVA7bz3GEt6hYR%2FkAiEAyVNkejRkPJJyP4fTTMew43oBohO9b572kUKxlEmWmk8q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHMw0%2Fqv2rkiAtjx%2BSrcAy%2BCagh30zS1PZmJz1iM1gGqsQIB%2FfYqA8FdahQhBfoM3qABqmUE1LITU2yNXSh5XY1DNgQ%2F34a5j6zBYwJP0N9uzY9yPlgjjdRlWbIICCTrxXOKbvVjbA%2Bbd12lK0AAtCKHzWr6vG8pZkmKT7jjCS%2B%2BekyLqd43olPBEErhAB8XtfzOyGP%2FPKz4d6%2B3mzVA9gi%2FVZyCFgkkE87lFXV4Vtys2jcLY5Ng7kNu9%2BxczDo4btovU9ErrSp3hHIfXDvAyxQ%2FyOMIAShjba%2FgZYBZuaUv8PNpGs6TMhglnOYSsBEO9uTSm5a81QOx8sdYWKroOtVIuMg0ZCFQjSRxrrkXt1XA19GVa5w0dsGMSFXm4zMG0z4SdF8dVuwTIoVExJT3TAS1vu3x6bPoM6sa0dZn9boez7qgmHMMZQIQI%2FjihfavzVvUeGlN9gGinzNjQKVK%2FWcC%2BY9QGQ0sO7GLz0Yl0FCGM2Sl%2BMh3GdnHgpVqeZYDqnonjkLp87%2FaCqbOJngP3x1vUXcV2D74CCu0vjjDLvlFtb9ukPrJc6%2Fm1kV9Ljhk8nI8qTHOsuX1jRNtGBPjL%2Bg9vvkQquA1xK1FaqSY3ODRJ5nDhllCzb%2Fs%2F40MwDtwTaiblE62SkmxxNeXMJ%2F%2Bxb0GOqUBLHhQmBA2neLBZqNlUNIgo0tejexv6CJGvp%2BZ39u%2B57kmNilvp2Arz0H7ZKL76dmg6F8vk4tWe2p6xO9H3tCLmlvYtMvZ7fMjfhGw%2BHJhYFXIBxMumkS1aGSy4CgA7bqow0Cc5aPhJjO4wyICWMZMsK1JFu3kGWmAlvoThGLdeU3UVrN1aMAIZk%2Fg7YMwrUew9oXL7GX%2FG1Qxmr9QOl7sPi4HLikT&X-Amz-Signature=14790162f4b32aef1a7e4e949bb9837c47f997c87488866ed634b44edbc13881&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

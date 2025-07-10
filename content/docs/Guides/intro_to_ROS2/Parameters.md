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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OSMH2WN%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID98XmeirvrNsjuIybK93LoG3rv3XjWR1ab0x38cyDQcAiEAnDt7jrQK%2BdyymmaAI%2FOS5D7Vh%2Baqh8jQIdUH41FgmdwqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrGaNZxWvIU2gUe0yrcA8HrKPOkswFoehFWLa38s3zfjt%2FTicDEsdWFl7LhLw7tRkbVmmzDypHUGNCBV8u5ngtDn0%2BXiIOXvSAssCFWK2823R3KZLxrRhgsc588%2FYdzZivoTggMrtua4a04jsTFYT%2Fn9N7ZU3MkWYQ7DyR1UlJ9JYhPozgOgJZno6BZ%2FNRfwIMO4qkUkbOpuufc%2FBm6of42iv51LRLG8fFdXC6WXFhaw4zKWlaQ2bW8sJLaXcBn16Zy0QhblrjeNd5Hy8jXtZ6mxcOkJDRi04b5laY%2BiWD5zBYuy6dDvCvWI99oBDcVcsojlHvORXRQLfxmDkJhe0T%2FtsHHvDDM2HJHaZr0q2vhY6bwUrnVLAFhjn%2BSvcdK0alnAGJLkvkqDhWdMlT%2FKBemap7DROjly1i3uK4yh8K8LC4CEAEFP9eaCOAPLKOFjy61PUnT6OX6fjtFgKgvnZIpAtnO05Iab%2FcLeNWCYU4Fh%2F7gFT%2FdoL%2FWWwxT1M0SZzv%2Fwna9TMRdxxsUmf3K8L7fYSMapseUPAmqPhdkxFvxOhBFgcuiU%2Fy0sfyXVChMmwPDF2oShvaeE2%2Fm8DHTGm3OiE6P7D4wv9eMLr9J%2BAU4baat%2BAjsm%2B%2FiHuduMHhNJhatIPae2xL%2BsciaMIHOwMMGOqUBiZIYqB6ZwRh4Fm7oKZ8ANHPlAkkYeix8upe%2BvA2KIqd97AV7xZoBU6TlnETI7sWM2ZvUFX1GCXmGfeaoZRWcqWLI6klo1FUcB%2FvOrPfVn7Jpd3Xsj6RvnLPrUs0sbgV5y3UFkObKDr3Tn7%2Fq5Y%2B8gHRBqz%2FQxULaf5FoKdDt%2BGeHA09b5wNCd51c92Hr6P%2BNX49rZ6BzGVwjXkjTO633n7%2FakSmn&X-Amz-Signature=2a4fbb81a02a5439c99194fa1902795f33ec36cd175ffdf632dc64dad3d918a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

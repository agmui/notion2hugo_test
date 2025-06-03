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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDQ5BQ5X%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIDb1yjmL9JohmFWhvsYHb8llRT1WV6L6T%2FPZ8U7lHNJXAiBHc7VGJaol4VvUfxYSrbCDAn781T814PKD6NVlGpeSlyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMvaXRhK0CkJxzKDHQKtwDQuHzLhKQDnwUvZCd13Ioj23lMJn9MFtrWVWbDN%2BjKi4IJnExvVZ6gAtSG4Tq3vnRdCuHlOAViEg9Kux9PFFCJbP%2BA6fgyKMo5YnhjtNK%2Bq%2BBubt92KIZNeVGUWjhW7mS%2FppqNB%2FIodyDFGj%2FkCsNfmkG1T3igaRY5V39lfIAL%2FzAsfASYrDRXTU0zqmfW3WNdo7JnywO%2F9R9aW%2B2pxLpxR6IYx5ITFGn99UEoZAXLR%2FysIyLmx1ixg0Xbs9Dw%2Fo3Ta2C%2FsFvn0hX4QIqMzevK4OtkV0czr6pb5CINkONnNQFXeNA6G7knLnW6gp4dKQ7aBCDDjxKYi4YNKw9sF1ZJCnB5qkwd5%2BXXf%2F3y4QescUsmO70cIU%2FX6a33JEnIzk3UWCemY4thcs1waJSc4KYQWKDJtsMJ5odLK9xdDye6nRksvQB%2FXD1D3EA5veu2xQdbyqAG90BuOz16Y1WHRQu6SKXZr4ki8a5niUaZPC6kV%2F%2FI6o%2Fau2%2BKrD1HCH6Ehq3B%2FmEsObSFWGOISNRTl0%2Bcf8K%2FYritfXdMZJFkf6UM8YTRyEloByd2Y1aBs7AbCc2yDANfX2LB%2F%2Fq4%2BTGx5xcpzMNurYfjwwdOQ2nih1X96Jn6rdmWhbGf52QqMUw%2B8T6wQY6pgHB14VC%2Flcx1tAsER2R%2BDslaAL6w2f03MSuNQH9DEEp8MGFrLUUaS2y%2BxESc7MM1gfXSbkuNEbPLFH5coBzVJ8d7b4JFOslX7iuiSvEQ6RhIONmwEan4nYEXIu6UE07IykhEDhmBMjYjWoQZn2N7LmY9jpb9kSlmJrOo3idcTEDASCZz%2BTcElXLzHJtnYNuah2EYgDIxAiUTZ3dL1dvIh1I3JoSRIsk&X-Amz-Signature=2bd9606e104e478fc6f30f46d83117ddb8d3ad0bca015af4c40354b4b5982ea2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643X372EQ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCo2DiaJLGXV954ziBvM9ZtIo1M1WaD6407bYYCDLhbhgIhAMxVc10kzTW%2BiK6kl0dY5Kw5Sf26HMqWFXhGblrH%2FV5jKv8DCEcQABoMNjM3NDIzMTgzODA1IgyD7tQtM3Dq94PLU8wq3ANltFaZL3JP85CIqkIDsf2UCatE7JUy3Jf8fRVcWW8CAUgDG09EdBaKdDCqTy3IZx9oAhfatTXT1cJ05atrjymiMativ6OGNHdZSmgvSF6r38%2Bn3a%2Fb2AjcHo5iUJDWMdja4Y5r%2BbAiHkNXifZiJRmTDEweYCmwHxABjB8S9Sb54%2Fys9tHZlvUPCNYSoCII5R2%2Fl51ek0zh2qMp2CZhzsNSbm8fpAwaFlbkqmofZ2XbxG%2BohDL34INcYCUgwuhJqx5i5qQXDP5gQRnACBshoTNEkZ5cNVvYbSJ9wA58zTI0G7jBBbFaNECfd4YLLkoGphjqUO1tgx0YJQsod0lRmDAjvuu1yZpbouV7ixoU2yMfafGDVIyrm18hQd6rQocWHDJrTGsUevm9Oq6XnMPczBfotbQ3x9Q9jx10JKiJbUgZl6MRXtQX%2BC9CHi%2B4RQMhHERMG31B1CIqo%2B87hMZ1jCZyBJKgEJfZzymcVkRMmSgSGa%2FnWZs8yOuyK8z3WBGlJuIFOW3FBINVt87hh9MT8uQ1aegzNQx%2BrLKCsTD96Se%2BhbhZG2JQnTwpYB6AUmiNoVTvF8ieP9uWcmnBohYMoPLQklUy7wDyg4y3Bj7N3n%2F3bL8PyoFhFAR%2BuR8twDCf5tHBBjqkAZP2WYPioQd1Z%2FXAnIvq6UXggaO%2BOjizAZufVbvFL3XcYOqRuZyP39mNXrugBrc%2FFKEI3J%2BTNIcd94QclPLTZEYrWipqlQGG%2BGMmQ7aFaP8QhVNbUpT3CGJFf7zokaiTyVhFnNOxZ2%2Fa96TtCBiE78fsbw5VIcJMm5Yq%2FDSLr8hRBXJ7ptwau%2FHX992iI1Tjfl7PD1z3Y64D8wYXGYKwhCbEDkm%2B&X-Amz-Signature=4a90f26eb7abfb1d001b5f196141f7e92ff295651dd3222ed2930f95092f6112&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

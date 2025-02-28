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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655MHT6CJ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBLC85UtQAYkYYy1A3TrGvDD%2F%2FHL1tWLe1iS93o5UnHjAiEAo9IALRcg0OCVuf76v68piUJH7hRLBDp4TNFEKcCVDCwqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5hwhyv8Y7442OcNSrcA48YjPyKUkJLm%2BZiEO06AZS4DE6O%2Bo0cffeJJNnzbJpwgm9y3dSdz%2By%2BtKo318bUd6cyZRmuoc7EFoROwUV0V%2B5Q78zFyYAtW%2F5Gwuzw9bfmTvhvlQq9wWqQOGh4lT7RS2dfCNC3E%2BNImSM9FoL8T%2BCAFblVmu%2BVhEpo6YWvD%2Bza6IHMHLmExXOSIOk6NC6uUcZOGhk2U3RN9FAOOL7hoqSGVZ2cqIv9M3eUelJZ1FvovFY3MYVVDuciCkR7YUAuFhCeBISJO45kdg3mgdQOTX9o9sDV48D2gBoVgDu%2FVQ8O9sgtQN6OqSnKefSe99Sp0KJSePlBKp48KWf2NoltfZ6rSlBjM%2F55IehEppxUK6hzRet3zetW7j2CzgsMipEYtglWc%2BTZew04pPmVFrEd65Y4qWo9ypz%2FnhnCzzIbxPdBq%2BmW1ddE%2BllE51YA7iu99XLoNBgt3wLy6MTPs%2FSKydYkredoJswvxhXqalf%2F8O6EIrENPZb9qWedcNbkTE6HEE7kYXHGaXPoIcg%2B2Jo2YX21VWiZ94FMPzJkuuL39NsSz%2FliHFt6VMz5rDRuIL5psud9Tsc0Bhb43WMk6itX0BQ4XH858vkfR2z5I06uVNJGqX7SsVHVTzUjEVVnMOevhb4GOqUBYOjJ0bhAKnp4prYDlMtJnuACxpPX0uG71ELQwYGaEMORfFWhiB8LlFsEY8DU21gK%2B1DOzoPAVjLlCgFHYpG7cam5jaXvVPzdDHVQ4XkUXpXGgyX6mvGwzoAVtYHizWwSEQcoImEVnTenU%2FRYYZn5qfvptjejeNaUnwoyUSqJk%2F62wheT%2FU34yGT06AjOM6M6mhHWjnU98xgF8Ymr4Zd26VrHwzSN&X-Amz-Signature=268ccd8166efa2be603443a7a35044d6dd5b07b2688ce8726c6a7c9b2e5d3664&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

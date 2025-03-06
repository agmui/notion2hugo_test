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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZJ7DMCA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7FIoPqvghvm%2BY07o97WT13%2FnfhlxIjCAKfiidSPlHmAiEAoFeWYqhmtZl9U6e8Z5S3Edxycr1IewhYHmbhVyGQv04q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDFyoHawvFtB1OJtMzircA0ee3mjCGaFsS2mG2C2wzjdlJ%2FB8RE2AkYjRJw89AFHhl79iuWjK1f7z00Hh5vyVWLpgcrCxYGZQqCjFD72PO9tOgviMkicdGJZwfCeilXcLbWu05%2B5TwOv3ahw9QbPZ4tEQEvXIKwLYETk%2BXbsva5OssZPAuvhMJVR5EhdqmLkfQHc9TNKEXvq7uLb3AaNI4ihYM%2FA3E8HXBfTB3o%2FbHwgqeTawXw8REENci6aU7POTay%2B%2BOzVQHZtUbuuueC5vD%2F3icosnDEp0NsxRFOV1%2BHSNhKqnb%2Bb2EL0OtiP9ycvtYdFcPv8pHy0T3cG4vfQ7py9BwSe%2F1KcVnVal36lXW%2FMNjxg3S5plCFdXGrnCB5mgxizuVLjkdh%2FNUw9SmIOAZg7euYXMNlSCf7xtFuVw6ndDMVTjkchU5LOud5cRTmqZRYkiTIc%2BIRc%2FzDCG5RwCKDrqWdAPNkt2o37P5PMfLsFPT%2BKlBrH3P4t4cLk1eotBWeasUthVtmk5WRTfDeoeGsS8f4DG0SAlpgotIwAihi62LUDLjsiKkI4Hnxx5rxmWAcL5f%2B9zrdPcGjw%2B2LVh3uRa7C%2BTMl6QFfjH4VZH1bCDLLs%2FckKCnEnSeKI7wF6Wuebrj0iTRBZNt1zTMOf2pL4GOqUBwn%2FcyG4%2BCM7pc3qukgkvPoBJkL34B9RP0lRUnNvHHmxi3AaQZ4qey0HRZ%2F2sQCZ87PsxLtWerkPxFJfsqAtoF8MkMY49VznimMLA8dKFz%2Bwsq1BDjER0TVgeggUArzUJNxIsAbc1CRwcEmx0HobjpmYaPvG1DD%2BAWnKFZbf0DOlgk35bhwst%2BVrbagAx4KzwTJafDMemulnqwSzirkVnOAVXWIr8&X-Amz-Signature=cf7d852fb9b5c3be9a4e139082e2e43b11e70c80da8d34ff9d102fe700771dbc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

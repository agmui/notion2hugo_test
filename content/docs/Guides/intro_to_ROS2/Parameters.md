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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FAQMS4C%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC9lrUZUgH8WtTxmSEaFKvcWugpLTPQCKZbo7cTkWYCxQIgQ77%2FA7leRKgz3WEmIzg3uqYnnskqzCWi2ceeTM8VNegq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJYqlMpeRWO5%2FOqTjSrcA4lfL43d9EtebhzEtJa%2Fv%2BFabtZMQvDWzMSLKrnpFlzBzANQA2fIgas5V5GvabM2mBXJvPWm0t8TkMIipj4%2B5SUKulFQjnJtWuhNjTfdJIdqGNxNZnsmo45HDNo7DefOxf4u75FDt6feuvNvZQEiMieLEDn3T%2Bgp2OvvPBaKcmRGetyHxzkbzMlr5wsdqfaMr56mUpKu8W48Q9JgHiQqLvRLaay2aOjyk8w7J3Kj84R6hEDnyxjp6z%2Fko%2BVdO6eIL2KM8NjuUjlEAaPiwFgjMQtqNtMjVcUS5aVfeovud9SsbxmN%2FcZf0lNvefFdN4IcJ2Gxp%2Bq%2FGrdlhQBH%2B2s9I7t541e8AQH3VImO8JBl0nkhNzQXcxaYH%2BGbzFWjYBXOhRF0r95UIqgfw9F%2FOAbZxkMjMPBF3j0e13QPpHWEcfq4eLrsWaciAACpvgZRbKRyXNGbEEOP9xOos7KkaME5myll8P4%2Bf65pQlNA%2BR9KK9moa8nGQOF%2B42gSf7KuI9TXgtlOZdMbBi1uS11XaPwlZtuY3iYqAIWj6WVLIjryXTHN3Zt4q%2BXcTKMPfj135YkWKFathPY5b6l48MQdTbld4eg49mc%2B4%2BAJFG5cjAhVmc%2FqROiQjOX11HtBHPeKMP7M%2BsIGOqUBP%2FBh%2BIe4nLhM5gfn69bk%2Fz7rrajoGrBZFVOsqtSgqWKmSJm5c%2BCyozf9rJbPhYGWleOasn6VMwmWcvR0ihtAXNZaktuu8UevlrbE4YZ%2BEGPRVajhZi1VrVCSeE02AFHwc%2FS818mR3HNZE75sP%2Bda94%2BKBiZOFe7eYPU9ADRPLebqNO44OHVyx9bC%2FBSrwy3HtDMtu9%2BG7CddjvZhQzWAR8ZJ%2Bb7c&X-Amz-Signature=553ddf33ffbfa3323e6fc815bba1cf8ba8d2c18b6ca8c979107de24554255897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

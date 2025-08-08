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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677DN6ZP7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDnGvWwfMdXg4zTgBl1UU92TrZJTcn12bKcGXNUw2TCJQIgCu3jMVYFijdyukOcTt84AllhdE0NX37HI4skMth4QEoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNl7PXksj1HwrCB0KCrcAzH2YaO7oHMF%2FtzXWZ%2Bj0lyFANiKzjFwrfxZr6otzs1iqvpaJanpJcGWQ3ZHhDGbGIvfqO2YDzf2BxFnm%2FDFXuljd9haD3uQXP%2BRVMrX5Gw6k4%2F1mflp5XN1xRAAelikF9H69ljUUzD%2BANmf5fjykScNBhKQCCOsJF6dUTTKTT3M1owMlO8Izd0zQR%2B0DUN7RKrAJOpT1hkcJ4wTOl2n6iIpvKv5wwqXENplocgSoKNwqhtgiLXqmjtgZIZDN%2FRZg1q%2BJDuDrNvMToqNRa2Skwx%2BDU9817gu4FkCjMds2jIIiaLIpAG0N3a%2B03nqxkrDXNAOWzh83tV3LtKhkejMz3jsfnlpl2Ti0kKIfpnQtg83GqRJcKMrElQDbYCNlkMRVo1Fv5EocpPF8zKmXhvXP12lrwOUb2fN1HSwkBJO%2FuiThZcoGoZcfOkRKzFJIgsj0Pa1zWYv79oMLPiPDJBiif%2Bvp5dbRpypxmyQpgVR9QhIG7QSL16nKQ0kKpkWUeJN0F%2B%2BrGhsln0d70rO6ZrnycpVUbrO4IM6TpJLlZJeFgRF416aYZsRq0DSjcqPK28Bp1IldjEcgsbDQrZrwTwec%2FBXno7POnTyHk%2B10V%2FX9NKmpXPqNCEKrGQIHzNsMJ%2B72cQGOqUBc5IjqxA9aJtICjexfnNGF1Cll8wTkZaqKtg4HyUsbMDA%2B43pDD0eRehxQDJgJrKEuz6W1fxE%2Bv39wxTRYQP2HeWM7MLEA4TT5XaGP8SAj7VF182Q0cNAZscZ2x5OFtOxurr7FVkDFwb8g46sBuQcJLyWmiY%2Ff9pHkccTTwWsbFCi%2BS4xiP1fPwVi6zpt5khFU9%2Fgkl5U7VyvBlxXQHUCRN2YCq5t&X-Amz-Signature=9da36c71559299511992c40587dbd388ef095135c26737d57eb82d85e115712f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

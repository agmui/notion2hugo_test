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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z5N2ZLO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCGP4KzSKk4VHDTBbl%2BaQDyw%2FYxtqJPJNdELaoqaD0trgIgOMDUxT9KTwjApBr0Tq8pHiouMw90VEF1hItMm4H%2FpM0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQK5cGxQbGWSyw2GircA8EcLpjOfo4fZtzKQ1qUou8yeuHU4HwVnNmweL2GZpiyOB%2FN%2FyblCM%2BX80KNiabDzqtkSsLg60N%2BgFYEjO7p20Xzo2T3q0hxLQYjR0Uo%2B1gG37PFjY99IdyFy22l1UXhchGjokhywE7JM7S9UfVNJwcVAL%2FBItogRK51SoSx6qY3WP1%2FnSBr7VAuzXgZM4QljIa68tyJ1kLpyalUiSQ8J1FAxCA%2FPJ%2Fu8OKMR3PKbL0vsuLEkZTlRA7qdkBm5idM1l%2BVGASlYtjTQXEdE6Z1dHi1AshRksUOPr76R3aA2KEQfT43VMq4XRbAKfVZNcLyeGeP3m5wsTMBuKfoSsEHkKZaDSJsL0NKYwJ5iGZEmHsAP6pwsS%2FmlklafcLdM3ESVRU8zhLehAIP5KCESoklYpA8CPU0F12k2PqjTW7ZO3Op2gOSXihlBeGtUPovUorvklpHalJ7T0Qx%2Bf8RqnJhMAYdXGUXOUvm0%2BG4U9wDBhWuLYWTfz8v6vXim%2B4gZ1eZOd62y8Cz6dJ6M75u2A0lfpsUge4y%2Fs7Rk2FI7M4F3gsRnn5u1yoQg8%2Bifdxr2mKW8%2FZjc4DsJx62CxJdO1udkaG2foV1roqvnNZ0ahYibeePIyBPl5b7xYC%2F9DpMMLHi1b0GOqUBPX2uReTq%2BYWATtwQljhMoza4cfcQsZOaDm3c4tezLDEH%2BkSSxrE4XjhnE1Fv8QiPYD6O%2BteNV2qDvkBMR6hCq77koAb%2F%2FPrw%2F5o%2FjCcoQoa4elqA5tK%2FSljPh4oYiXx6%2F0uLNmbBuAHDrdb0AJu57xlY2iNtMiVEpYdsWn3%2Bk2QrrHYtVw5oNXsit15%2FT9OEie1%2FqRFxZGrvlxWihwY5PPk4k0sI&X-Amz-Signature=d743e65b059dc521ff3891f8534e65c81395e7b07ebc2c6075e36b596462d899&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYJKZ3C%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC2aUahYC6s5TGWp3v%2BeFuZBwHqLmR6QW0lqLknZ6tumgIhAK5%2FCSLcR8Ag%2BJp96Q5qSwkWwJ0jogXtTR49YEFGXyP1KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjcFGv%2FzwGdGNktpUq3APK7iucvGSKaik%2FTku6nXYundhW4aoGmNpLBJMxhn7ExBjGuMOAlAhyUlAoScA9j5boDcQgrB5rQLRYxBqgMWWqNB8Z8LXZQYISCyGsY6YZXuO7Ql6OELESCST80KMvvg50uFlxfjmZnC17WjnfZPOJW1UT2UumL0C2EUsHGALaFGTk6pcKoIM7sZb%2B7Oq5GAsHek%2FF3QnmOhO2BE4tvv50qsrEvUMvgVw1PmkzkJ8WtrV9XMjyClMI%2FWtTkb1HlC%2BR9auQNU3SV2ApCZSOrFJ03qQ4eoLj8Y594w4k4AEerCZB7hUwSbZQ8j7GbrSnH2wDs3GmvAJPAPBEqA1dKs%2B%2BcpPFjQY576NFd9XDGDi69JxqtQyaPNHw%2BoYV1ImajABg2zXK12hhyO6EDusWHSgFz8S24ExRhpRgCGJrVL35VWjS0LxyVDoTIuk7bzQYy6EaMvBD39CgQczk851haUoXOt%2FAdNJTWl%2FOx5V4Di7edyjQy4NpUg4D98HRbM0X4yu4UMrSaLDyKyaK2RZLA%2BgtrE0QRxh5PxbxzyUqaz9e3%2B%2FYox0xeASchVuJKXN%2Fs7edof2gw8QnOA1wQHTK9j8RI8gi5wPmZ69s7hgku%2BjcAc1TJOJKln0MMv50uTD58Ju9BjqkAWJF4b9yI46KMXmimRlKnqQt%2FipdkrCGNphDly5I6YLrkrcMccz7P1d9gKdRahDw%2BMHzOeh6SVKZm3oEsd63SWVHuArRrVuzogw7Jd%2FMfu9lP%2F8UfKubgI1zDVtguTcjWL6lxERoYZx%2FvGsTfP8OT0lB2MQoqRrjiLxhwutOra01%2Fjj4pERwNLRAc%2FIhd0xB1hQCpnNjZdLYzxhMzVCKDgkSUhSn&X-Amz-Signature=07a1bd26b534be98e9c9d3c0c12458c3050bdbfc60dbd82163c8fcd0f7ad4b93&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

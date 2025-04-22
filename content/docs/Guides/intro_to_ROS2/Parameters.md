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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664FKCZVX%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIHD0KsjdPc4XyFT6tVr2WbRM2Pejc11YBXcHRvuz0WVoAiEAiTZXRShDSyh3lLnuEh4Hm0N5cOWdxYM9KTG6rsvsqSoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAC5X7P5uFJuEwd2%2BSrcAzqJivpwdm1n81czvDjB9OwHM7fhrloxVP5g3Tx8UuducSXNkvZnrkX%2Fct5nDijuzfSnWedd3j7Ittms2txRkYG4SDc3POBhxbbQgKxZMUsFwK27RAqY5heo514qsoH0KeItenii8YWW0Kbd3k2Mb9cbPAdFG2RcWOOSc3n%2FtzxbQ324vVW5gewNK%2BqOdsT0wDzRxGN%2Fj85IAHjFAIcCrWbptr770yKbHf3BNYuW4lEGwvGZ4Z7W%2B9oLFCu4RX5QNG%2Ftizq%2B%2BXsOL2hwyhKUOSmIjsKjG%2FLIV8AooaThQGMpvWLlkVJTBTimaTobcI4dohMrFuXtQ1Dvn8sgQjeupR8sN9QWBzgH9z0e%2Bh0jbbAko8v%2B4kaI5DUgxhYuOY%2F%2FHlqMi7AJHtCChAPfotJE4jnyK6e%2BGY8hFBzEfp5sZw0WJGAu0o7J3miUaW6IgCSgd8kDr5EdVW0NEAIUabsE%2BpdyXwjlw2hqwGAsCTOXtxvzicelZSWJMlzYZoCNBUdhDUZtBsJl7Nw%2BCfWKb62OwGbLYD1rsiT5mByFU4JLwhmYqSYWjGApv%2B%2BvrAxA7dcQJyxzlSwDwFKsxG1a0zmtJUtUOP9goDw4Y8jLAiEBY5hhXblNq4Djikq3iBLqMI%2BkoMAGOqUBNe2IgUXV3NStSHJpCVJY8SJd1pdoMNpgueovfpM%2B544zIinwbMw7MkadiGDcS1r7Tf0%2FV5%2B3%2BwbwdVVVPzqrHlIbvlkJb4nEZvifm2nsNZrJ9nBrZUI%2Br2PObdWTE0ldpXGDuOiq3OBMzAkDKRsszNv%2BrbZyu6959Xm86J5c%2BwaRHg0A0okwfHTjkQl53Ipo7%2BsSGj%2F2VSHW%2F3GplChInAfVDm0C&X-Amz-Signature=15be2b2d571c6713b84fa9cfa6fd89ac1fb647216230c8ca76f99dcb14c9147f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

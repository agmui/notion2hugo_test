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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FKXU22N%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIE21OIRhlfpqh0VmzohVJ8XF7hSZSaygW9TLxmfPVkzcAiEA%2FY0KdQ4VfKlbPAjlGH2pXbp4pE0jI7BpAxy3%2BVSpujgqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXTqlbUbBDyRYGJ%2BircA4FpcTYMWfn8gp3fBPbYfM%2BuHQYGZ5g0HjG01BrS0NaZzlFIJIoy5BLg1%2B%2FCjNUBGMx8da%2B3ksH0RvC5WZCqvEv16nPvgB%2F%2FQKLSShd%2FFKQWK9bUMFJCZYDj1TaHZ8uaa6jxNGcarLigWjjGAsrLYanYv3ZQqnOs4ls4wQDpYqXFwhp1sCjwhHuNj7BtDQQ%2FA9yA%2Bi69nhRe4%2FwC4uowaw6ZFNCFEGkKIn6o4nFRETBAyxTZeOwHbXiHqkzGiuhNWoZlorbPFr3r9lVfUpCv4%2FPWmH23CV8EiWOyHcHKEGR%2FHhcRzvvP26G9EGnmLup6R%2Fvyf988DLa83AFCWrORGIiRl870frjf7N2VvKIHY1iTETL%2FWA04jQ4e%2FqKuRELMdceERHdyZG4qADfpU8qFzKkNimyf04otFlXbvoz0%2BwFCW8IMraXwLs4scfdFXP1iVl3AWQsP%2FZIdqahtbmibHabvhh7OIGjEKYYHMXd653goyTGUJUkLZhPsTnjy0I1j3Khz8V0G7OdDZcLfFcaUOoS5A8L9wNj1gT7Yb4qvGq%2BAHKEuteKsUHo7sgn4P2OrBiwBR4I6GQRSljQaDln6lL4WpJ7uLAgkgj5RkhXf24NRz3XUKVgGQQhKVwsCMK6S3L8GOqUB0LSTT4JN5TErHOd4eJX7rJOuOjk9CD6mKmzzPCDM7lNfRZkrAlDDrNHVP%2FGU5SSFgWQ8z66ChqfXRIJ%2FpLf7EN%2FzP9UQzBCLmfCpFP17wa%2FIKk8PfsIHXZ7fr3uj8SCbtJd9iFCEv3Jt7cpAO34rg19WbQWcXlA2otiDJ1%2Bcn15Jb0tBBej4uCqGcmlslWN9U8hjamVwh%2F7HWSUemoX%2BdB565KWT&X-Amz-Signature=6acc015b032ab3e5a7c8a36324429f0ef39d754d107172100a8551bc12b6b7ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

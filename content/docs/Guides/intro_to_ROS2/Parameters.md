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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q55RHHVJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC%2FhzxE97D%2BfkFgm2T%2F42yef%2FMNjaOpiTztaq%2Fl75K%2BwQIhAL1H6RlewE909QwvK%2FqFrrzkUQ1zz%2Fsf0nytcPI3F%2BIWKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4X5o6QlNhNo2s9HEq3AMD3vuBOnIud8r%2FRRSzSYGr0zFioA%2BcpfbxP56XssjQfqiehWUOPdTX%2BhZvakE0yXy2L%2FSDODDDzmkdRjvz53DffXJ4wmvj4Qy3ZpY4BZmW3dwePLF1%2FnREue8Kbgv6fXhczcuwum6qd6rcfA0mb%2FCZqVRQkAmYG30WLPte5D%2Bb3x2Ds4bECREuLjyj%2B7eept4Y0dErVnw6vN5XHcTHrq696SzTYQs2WfIeDLy9eiUvK3zBdTtXPSHJB0tNDhhS9oF27AsvSDYTXTLu3znSipJ9HPqlN5zMZbxm7S4MUASN0xzToZ0OgyW5LljCqrsqqLrv4uW2lg0m5RIpEW%2BnBJ%2FB%2B2MgSyRu6VUWBp9QcyUj7FFCeEBX9p6hsatWxb6lNn3wAjbCkSK6Vgi7RpXn9aokhTQTVlGMq0sXa%2BwxkUd%2BOP%2BCEEUhGuTPjAfuinCaSpB3Ctw5ZkcOB4azOb%2FlFKs2ZsU2yXCaADW%2BUrseh%2Bg6nzZK5GAq8FwoaqHhrPlWtIMk%2Fpvu3Kt6TeCgMlwLdFUQco1J8zZXTGdg5RuLGNUGCEetktqr4m51OVppLoGOKstU0A5Mmkfgnm%2BiI1svmsH0kbc1uuH55ERKwrwRfsSE9QGZVvvi3GK9K6HQ0zDA3P2%2BBjqkAYInGHoLBnraPZdyUJRbAEbZjmW1Ft9saxKoZLQdgneGBZoylepYRN5UAM%2BBuF3tZ3SfcZj3EdODgqJno%2BL4oYQIynJxSwD7r9RHcjBZz5X0HASOoyASlVb47lKk4d916nESvmmGe3XtkKoDGhid2vew8p2E2H0L1iysjVn8mofEmjO7HoL6BDEO%2BDo5Qstk%2Fab2WLTN1WRDdjvRt3SmZyIw7SIg&X-Amz-Signature=261b8f4b0c32d56d3a21e6107f3e01918899493a94cad32f3f27ed225b271dd3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

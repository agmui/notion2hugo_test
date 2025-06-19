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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666USF3CIG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYynrD1ZR5KOaqWhVKv91CwrGvXxfpnH%2FJZuDI4%2BiCcAiEA4Gj6XCyw4ZQzBdY1ey0s7EstgXPzBAd1Us%2FGxueZt2sqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjO2ogR0KMB4CZ%2BmircAx8fVm8%2Bc2pCKCaR0uMFLy3j0ohp2PyA0Q%2Fs2IJf3W7KCuGEIg1uT3uhbG60cEUek8vjR7i5NokjudqcS2BeW5%2FUYvnrJIjrcNHPTmcBVZK7BSrIfbGOtJ89lkf43NsNReFmDRUm4DJzVHQOLdu2FPhZ0ZIucwdgSl%2B20beiEE6XqjA12R5x%2Bj%2FXih%2BQzGTeYaGF%2FjqbtVJBkeSaEFh4uXKU%2Bf7Yc0b4lZCTQYwMPEzgxuLQExfZRhuiUsF4H3Lt78v3EauHq9bDC4JKnkc%2BUcQsH86N5Pyni%2F3%2BFezjmQmp4Xeu5dOQoxHs1if8Rrb9it2skGGp35pdkq%2B3VYnsTPHsOKS%2F7zkudWnSwgawYnXqGPU51BVsoY9zTUwp5h6qLmPfqwRY3oWq6rkYl93OaM9VcyyHDTydGgiuJuLaaSwxWNcXW%2BWgktZhQSF3vT3IXH7MQduVh3PobpTdxGNBO9Ct5h3ebaNTM3WpJTVuCshCbwb99YeKxk57vuVpG2YHy26N%2F%2Ft%2FOlvzJck06gsSlW%2BXCy%2BE%2BEv8Y%2FJaf1XMDz5pSwI%2BosQ5%2BhZMgXRaSgj3TMkYVNDmoXengH1CvdNxnIpVLQ5fxCBOY23t8k7%2BBsQTlnDvH%2FBkeqKP3EzzMNqz0MIGOqUBA4zsOANrIpPGVM7vfWnoG6jDORe%2BBkSVn9t0dQtCXeb0xhiNn1nNhw%2FFst%2B9q6CjBpwOdfOXV2lJ0snjWm%2F0H4wSzadQ3gL9BQYOXofS2OaYbx0ZZvleZw9RyXPrKHbkzcpVnZctDOYfzRYvNisCEbodyfKfPw5TelLgXTv%2BSVBIS1T2J7ElNhdRHye6Am9KPJTwrXpd%2FkM6%2B4AG07yJRwAtc9wm&X-Amz-Signature=7128a0ab9de1478ad3647b9319281dd422925fa7a183d91f75b02500f47a368e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

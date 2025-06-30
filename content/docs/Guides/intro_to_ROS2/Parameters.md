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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM5BISMJ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd%2BhJAm5GPpH11DlUV4fy2F6NCbs01WpBr9oTQPhAjSwIgS15diGsYhV3arzITiWNjadOwYL%2Bvrv8HBTG5o88Th%2FIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzsJZidIgUp764S5ircA%2FonYFdGqlh%2B%2BhpiQ%2Fjsh2gr8aDZlYtg4YJLHSfEzV3dpUKJEI0V%2FAq4hTlSmNd099f7pgDBV1n%2F4OEKCB%2BNHGwp2V8ib8MuTQCvrlygQzS%2FP90dnFPs9gQ63cfGvFIhgKD%2F6MsIBWvQgIyjZAJeeB5QMzSi5n%2B54udCvwUxoUcxUKlo5C9%2FbZGG46e8vEsEyUGFYKcNE73fgrayAUydvJZTOSY7AbKhA7Gew5MUYVgSE9CsM3j6J7%2FVdWG1H0o1VZSDl7B8HCJxhZfaMt6dSEW%2Fr5vYCYdHeW5G%2BMXjnNpt%2F1q1m3EwmL3YjVYDRxxdeer1QESmieYhbTbdPQvUk1eMq%2BAPAiBpNzROcy%2Brhgseghb%2BFItXqhcx%2BKPQQaokKOBKGjieXL0wD5gSXFuzrHSy6%2FAmH3CTnjX%2FnudlkX2Of5rENTz4%2FrPieKGS6fOKema7hqlYDC4Ex7OI3h2kkZBjHof1waIA2tZWdElo1zO8TYnBUjGpq7JsF7BhGE%2B2tRoDwN0K9qn34wiqxygmXWamOksDncQR8tnw9BnSa6lgHtXHRSbWoI6WOd03INF%2BOZSNgHZ5SeZxBMC%2FSjo%2Bv%2BxVkpp1E%2Fo1eK6VUkHXi8Gb%2B3eTwqBvYunZljrMMKaji8MGOqUBwh7T7Oz7JR5feLQKd0Ij8RF5459HzaUgEX4OT1vdwXD498CULSrN26ruC6%2B7nMZSFwFOZDBMGYi8QLXr93KwHAqs%2BI1F03uSkZW3hiUq4i4NX7%2BcPnYsuEu%2F%2FZBo1%2BB2kYJ%2FgWCnNSiWO8v%2FZ21O6ruVysHRQI0glIpxkbGzhHZmEQ5oErRgLF%2FA4D7O%2FQ0sUy6EBgTRBWbu%2BLpVdQ8bXtuEdmUA&X-Amz-Signature=662a8d1a2c36ffe96b94bdba67dee5ac143c3bba90f135f4db122bbc44bf3031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

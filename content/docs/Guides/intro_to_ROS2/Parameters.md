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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635PKKM6Q%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIE5qNaVWlcbSldKp8utZJ6n4bhNPOtyh7Wbow34g4NmUAiEA3i2Ie5i4mMHW7I%2FEW41vU5pi1ghe1EhXQikvhGhEcKsqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIaDOsWkXN%2BeDbPgpSrcA6nWkqYpPGndchmDKMGZdRcyJjwzYz7q0NsYgjLskxNDZrF2%2BpIY%2Be%2FjOlMR%2B6JhkV0LGtIyRYwB8Ylh2hj2HYJ7D2kGMgrjIMtNGY%2B9J7Jo2tCU5SRO9EwthfafbnQpNDsDn5mQkmtIsSskQlaXAmR7ExmO9aGERZT63tgu8Mc%2F9DHBP6Pzb2ZsXF1e%2FkV0TWOwfnFxuMdvfPhfDPFlPhIMyfX0WyHVTI406TUtaaK2XpO14czzJzdXwdK9yZ5jd6h058ZHPaHPv%2FcJjbSxdJ1aZ0ufrcVcjwMO%2Fz7r%2BY7wGkDX4pXYs%2F9l1pUMQ5b%2F8BRzobw7IWoUlLhg54%2FSkLoC2cq18WGWiSpyN8ifE2VrrgX6L4nYYBv8B7xvXbRk1WwpY90OojaMod6uav6HVvsNKTt1GlDV24JDlehg5NFRiu7kMPiBnVUUgx3I8a8SP%2FI7Fnl6OfXBkQF9d3jVrzNuHV6XT75tZvYi0Mh9bD0vFt5WEQZorZJxQ8%2Fj3I%2Bg017GD57jKIYUsw0eNdxlE%2BsAiIIBnjLeuDWoKyb32oSTVAnS1L5i75BhQgzguRxOBRVHcsjM2LpkuAFmpw4xVMKKwjgIlLQroC4K58%2FamwTWbABz6ggR52Gd31XwMMjD9cEGOqUBGpeiqdyZc0Ct0syufXYKyAdt2yRym%2FHm687KF2byJ%2FweTt5j0SBE04Th1UYEDCxUHyFtEmQwv978QFBiZRQ9ZUHaQtJwNYWYpRjwXsKnsCk%2Bv8k%2BUPsTEr80KRlyNODvAGlVNGekf%2BM6eJvCvpMO0g%2BxGnY8VDwH5Uc6D57VRixYzC9QwegRXmeOMnmQ9xB8Xu5jbljgmdmE5MKjJSDxhkEE7EcZ&X-Amz-Signature=761153cc76b815bf3e57bf31372f25af132d8149bffd3408b984e7270368607a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

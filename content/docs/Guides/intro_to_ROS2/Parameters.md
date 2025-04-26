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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJJH4ZFZ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF32oZ5oenfK0O%2BXTOqnDlLfFCahePTUJYTwBnQrJLltAiAhU%2FipkEmtzBqq9jra2Jy4FyQN4ew8qb1y4kpbyIW7zSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMlKzHcMSCktGt45HfKtwDabfbTB3ZauQMDOg2oF0QSRddDOo1T1KJ7Rhy3FBre2kJ31jjcdvvSB9fpA99RjrQRc0145DmpG5S7iPdjGvvSUK7s8DOoHr4oBcW3iFVqNMssuYLlbOOAFtn8OfEKtdtVvzcoqUnjZHKABT%2BUFOQjRHDbPfSJrQNLlngKxyGWsdksDVt0LieBoCyva15zEabEQH3LtQQDdGazLE84DUi0UeO8OvBdvG%2FRkd2BQ1YnUDXUYXWlbw4bmrLyy3nHSss9Fsc1xdpfpb5eoQfrWbXCs3jn7lMLA4jNxuetzzXlqnCUY3gdLA%2Fr7iNd%2Fz53nu5pNLPNck5%2BWyMx2MTzj12ZxqUgCK3FIr9oVyblM1exYNJWRi0V17PvvisHrfE2Bu5lAkUlV9wrdocZGTgQN3qWKklaqcsKsat7%2B9FqWYC8ZFC18WmQaMIvrKIbM%2FGDpg9SQDxAQqIUjLwALHVazg9sL7aKo1nP7pwoahU9FEM9HSjr3RSgHZ8NiNOX0k7f%2FPC%2Bdv9TPDEs9NsHffjR5Ew%2BikPpkQr3p9W628hVjc4OaguEMBGzXwhB%2Fsm4R9rZTgk%2BtJ97HFLWbQ8A08AbXaetJJDxuKMqScneYNL7W61tSjHMP3KwFIghhu5qvgwuaqxwAY6pgH8UfpPbI2tkevI3KLSrIlpuPQiMonl4ha7RevRUUf2J5tSx5nRH4RLT4x0%2Bp6lmP%2FM%2FFVSprn%2FSIOpk2ki0x0h3glBVedXfuOwjFC96MV3DwaFLl7vdxZTe8vWq7IIdc%2F2tj8xh90kjodtTLEdbBKZTLFs8X8nXnsfJpowGNVQVkyS1TSWBzXwE9TceGjJjt0PPJlESpMdTv052TmlvY0Iu12wVZhP&X-Amz-Signature=34cc3ca99d31c92b9a7544a1e3cc349a62b439a34931cc1f57b6e97888394629&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

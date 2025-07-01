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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F7UM5UU%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT381%2F2mFpjM2q7E%2FjipvsAip7KF%2BrwHBtV5TuUcGzHwIhAPYhOauGA1u7jbElfNnjVlxJeK7hj9s5%2BGtwvNZpAJlfKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwI8v6kBd%2F8BUCTSy0q3AOBaRDW8lSuFsgJuxaOyWr7qNhc06QLkAxX1t1wRlBd3C7goDLwBmw6fj4rchW8UiRPRrVGzzrpJuRTbldik13JMTht7aR9R9ps0Bk7q5JSgmBYwctMxCfwURTe%2FFESi4pNi5tRw7f0fylDi3QUP7JT36bmIqgnV7L0HDgnYyC%2Bl5YlNkuSwu8a5Un5eo04%2FsJry7f8pCa2WzxyuU%2FBw9SpYzQ%2BqyRlCf3wSWIqWYstxUIu2B4786WWnaMEfONBp%2FG3FjAKHRYJSab%2BAKtSemeTQEUqe4gEIyZDmrIGm78dbz5SCFS69sTMWm6kSBtlkD81NqlkBhyE0p9IybkJsIywG%2BLz82RZqAmQZk%2FnH0ROXH9GA0vI%2FD7co3%2BImqbtmYU4LhtIh730Tf0YSqCkxnHAKN91jOAPXZ13oipBw%2FWI0oF3zweavhz5F6R7mcR0IJ%2FibckDRd%2Bfnc4X7F79HwFDxdttfShfg%2B791nQIw1wzdlR4iBJwLpXIujuk8f%2F2JMjuot%2Byi7SE2GBNs2TMF42fc1lJhT7RqQQommehhy7SiTjjQi0dhQm6K7duWTj0CnTU7KWrU3Pa7l9IuVf%2FUODdZ9fTeW1ogOEN3jTrcD%2BICh7yxvjSpXFgBYYu6TDLhY7DBjqkAXtrJgOguNzUNnCEw9fsPPStLHWa1Y3mVV67moLd22Wl3DYdtjdFvZIPUkTqdfBfirgCfVZCeEqvFM1t7CeGVysSkfgYBkYcWMNxglvMG31aMFbi7glmZNuCI643fv60hO%2B4DwucK300EZ7ahC36nzyL40syAwFV0JBhCTgatlfmHGeCxqLHWUXrWxpjeziW057Bkr12%2B7iEXOiUUzG8q1fw8cZg&X-Amz-Signature=f79e54e11afd75f1925e57d7960e6a0af4cb5ed16cf5f62bacd6506ad958f713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

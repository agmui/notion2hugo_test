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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIPQWW2Q%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICOXqrR2mqQooObJbhv2e84z0XSEXREn4Om90UYlylf1AiEA2yuGsX5kbs7h%2FMnwCvPbMUX0O3G6ckW8gmTNfpOUdfkq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDIFISh%2FPJbj6Q5R6NircA%2F1GZ8r5NFO%2F2UhqEg03UjvWKqi208Jjlt0gKe4qJ1eDfxL2KJuFmpClJ2S%2FpWWG4JBtbd3S3yRAtcEZiTIHXFZlmdAHvSRtWZdXABvCvGf8a2cJtksuP0ag9mRAzCNYnseH6bZy6er9b51WC7fmXqlDYxOvHKMT%2BcMadQf6H%2Fgew7ll9YBvXJOF1w7wNl6wO%2BHr3p1iMCc9mlKiWvwWWsMx33n141gLIrRyyfoP1ekVo4uc0ICVj9wq%2FT57iS9cAi0GI0%2BkPOZ4cPAwO2fuXk1ahHywWDtcJx0lNmTT1ADoP7%2F6higEYzXFcokorh2Aj8%2F5qcTfwZuZmQ%2FpC1Dxb2uqT84aKYu3eNgWgELFIYR9SmZCihOXyZpHcWMp6pSbpgGDhU7rtK6I%2FrfxEU7yvzUbyT1s42HYSk0OBitzI2rTQGzd8EzovPTcTjZt8v7OBQ%2BRImQntK5ldqy2zKGzOA5NUdBrb%2F9g%2FJDqyuflJiQmMCi9O1q%2BlqmndEX7bw%2BFWwOwfw8G3PHqhKipt6uVnsQ%2BLk2xjI7d4qQtATMli0YSUCW35tHNuKBuPcfE%2BBGXfEdPKM7xGd6QNXtZcQHOLqbAIzAyuxmydmFG%2FvKzEs1Xz9Rw4hGw26fAfgLjMN2oh8IGOqUBq%2FhZ5zCY8w72ZNDQsWXurCqDKCnMPkZssYZhpY5O60C4JoMMa5oc7ub7%2BiJel2MUfIkQbRXQQi4n8wuJuBit1Ms3elrN1TxQ%2BxUWdkI4T%2BUaflXRoyxgjXz%2FsErX0gGpy%2F4cpyGlC74u%2Fk15QH%2FCwWdA1j98qfH2AuHbem7c2u1nf3qaRIyZ4DyYfemqEKkw86WwGiQcaoqLoefBO5qDn2eJrWOs&X-Amz-Signature=3cb647c86e4b6ad64603af2307c8325d18779c97b6a5fd559de22eb5a63f5fd4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

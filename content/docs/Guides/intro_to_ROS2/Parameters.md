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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MAZOG4%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDD3uKicd84QERWAM%2FdYydtTwxiFp7ykKIG4TUDDp6txAiEAqq2ecdS5zG8U%2BAx%2BneNGTw8TnTb5QgvBPACG3zhlCpkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFw4ZKfrcboxJ%2BEqCrcA8ad104TSL7Sx7pttv8NYm%2FZqgjol10BJf5VP%2FvNhYam8cIiqHFfnZTa%2FMAW7yg3Jj1U6t7BioDV%2FRQM64F%2FosUW5J2es2pP%2BW%2F8IfRqWiTeqfz%2FgrDsLQjps%2Fnm0pfWsbFwEJuNYfBUaSdNXXGDzko7XJCAlPOqS8ay7MdzijJ2lcOE5IN3WQotUBvimGptvasfNC79n7hLMLuk9%2Bgbr1cedmauHfsobGoa25Bo0USExCaTOSst9UmdZmDY7q8H087uOhrqz5bnoFFnUjMl6lKXCYWGgNbIqalp2%2FMSK0hhTah5uDM3D5eELvY%2BTXeg6MiCk1jqtMtXlntvV6e5vx4K1y5i%2FcMZQQnCp14RBfSga%2BAnsv%2FdDab3wyciBTAGg74bCDK0Z9KeMdZagHp%2FLHmhVE4cu3J9Rs1B4OhjcPyzETs1EQXI9e2vhKq3mH4XPOh5gOE9x9d%2B6zkQ7nIHHtbg%2Fv%2FBa1YvUHH00xp27i6zKiK6yjsZqoruhP5YG7SlT5mxS0pusg2eSaDm5quOf58HBzWBDaVnfBkC2xllwWkoEUBBW4hJrmAliJOUoz9kMCfhOZadAgGxyQGTqUbIf9c1Z2HPsxZ0yMdBO57RKKvv46F%2BfZVawKizWl7TMLiiuMEGOqUB23H8547LZNwdS4z3ze8O1BqKm4Oxf9KNTcut7QVXAEOHM%2Fu6iMN3d31qGqKDyV9x1kJAIbm0K0Tep9FMaTSjCF23lN1MCBRWvBQ%2Bts3NMl%2FSiABFLP8jkh4DKVCGLQAgL7SILPOWKHl4f4xS499S%2FvKjM4QWUCE9XCwHWhuqWQVndgbJ5k4O15r9Zx3VipZu8o0a8tQ3tYoW7kUwR39Hp42q6HhB&X-Amz-Signature=56639a4581c365987321ae0ba2de09e152651291b8f472373b0b1cbc49d93ce1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

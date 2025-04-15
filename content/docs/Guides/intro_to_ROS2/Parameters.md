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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VN5KMW7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEiVGktPGUziBGtc1CFr8ly8qMYOkiR80Ur%2B%2FLFuwUwtAiEAnjpZePUUiCVE3CFluddnajLeswcc0hLGHojxItkzRd8q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJwuqMxtzOUlexnnrSrcA52JyMlQEh6SyYE2k1pwbLiYwkKHO37VN4fBUTpLiJRfotoeYD9zfEqTG8hCt1VZKbUJUffHDTQt03fF4iErbCj%2F%2BPAEkI9h1DQJWL19ARY8uGbjX97JE8H5g3%2FbrIAWIM04dXNHWNBprNKX0UI6AGG2eK3kaUHvcvvn2z6DiGucMLvvy0r4J0KwyvERnCtmIPpOPUZRASFQAcf5FtR07xWUwER8IW1eE3NoBv2gwyEyRSJr%2FBK3AsWk%2BfA8rlsSZcKZNKTzD8fD5LqFYbt9l6W0oUN4fwo2drRK33dR8RfNVUgXMIZMg2CmeNCm8tjtiIAAO19sg5JtgslA6jmjD7kaX52oats8qtpW8iXHmDGZ0Ub95Tt6UdTk80tLgCSRr%2BFTz7G1yoAh%2BcjX2pydd277kea4amlGowRY2bD8TOZ2Y3sQYQEurVDPv4QnSw0bIlwUiHD8NsTgVv0AEpVMZzwwjTtNmeEiqZQymb05g9tlREj4NrgB7pghx58YS%2FDF0OmdrSl4xDyT9BgEtjhN8YgaejGHKtdjxY1Y%2FeLHTV7GzOKpHCYpXc5Yav3sRByAaNSarBwyl1bzHANyI8ZM6JK7OSTMMsBXGopxUm7H1Cy%2F1tUwA%2BtXpZvaPTy4MMqe978GOqUBH87W2K1Unf92UBz59dgbZ7I%2FJ5pkH97MkrAg7yCgHILTk2q6mlBI3dNuwPY3%2FpkpMchxpcKXzfY8fQkB%2BmbQs6kDY0guc8YguEKS7%2F%2BnMydyw%2BT6%2Fn99RuYsSzaBz62BB0EJKP3%2FjnVCl57YbziRJGfRB%2BOW%2FuT0Np5qpR1hlRZoftPZ59IcJHoqB5DWAeMg%2BIeLuzn1NlXt47wR0HYwLnMt4xcU&X-Amz-Signature=6cfcf065926d040e751dd46bac118ebfd0f103faa23d8101b0ec4eda4718905f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

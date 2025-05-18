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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z34TUGLV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXOynaU5DsgR%2FdUGHMa6qOKkndQQ0Kc1PXvDft%2FQlv%2BAiEAxmoRnpUt%2Bu3bD%2B0N4OXIZKQ6wvrSIp3HP3ZQyUbcfp0q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDK%2Fl6G%2FdVjTgd5mOySrcAyiO%2FFINU84vrE65VoUkMrd1B4qs96zcmyK5VzRu%2Fcfty9B3%2B28pH7lxEpwUkGYtlhSj5LW9B21b86gvI%2BGC%2FXEvjnp5MgzIqnF3d%2BxnPu3qetzBly4ZuF9HDPEOqjuJDIBNQiyhV8LcS5iCGQ7i04wjIo1fR1kT7LtOE1LVyUIb9cl1ifHnto6oIGK9gvDKmvoRzaVU7y5wzxGWLpaW4DpwsF9ibQwsgg9CaRTQ7hGkZRmaL6akcm5714ndZcjFtso1ykfYYBjg5ZHpMlH%2FzIkCrF14hA7jxTYeixM3ccvqvXXMYbaI6UZlwAfftuPtDie8U4DYoQ6%2BE9UMZNu9ivT0SrEZHbsBWqPrq%2FvDLuePXXoMQwgJFIeX9D4u1CvRFEZWk6nvDoIKlbHMGu7WP3qWoavk92IJa54sUjZBg0EW6toeXX%2FDj3eCBiIcl0jyxhh4SZ5v4cSYLxp%2FSSPH5OgKG9NeOwjo%2FgpTGQ4g310ZLGDraxLfk0xTMW0X%2B2%2F9kjQu6yVEamfyoglzsA03h87ZVbilIQID0TcJLHAIHeLAby444l5JzhYFvWPAk9kRg4rN67pI2XDTRBV9dpWjj%2FbSa3GOcdRlrhthz8XdyfcXiPPnRyFbafAXG%2FmDMIn9pcEGOqUB2g8KSsNtBagrYiDubT85dvuq9jXXQlCEgGP15s%2FFHvQRG%2FhqrnrlNNknH%2Bb96iCiJdGtD4cQoFmjJCDFSqVZPP2nxTHs60jjwNp4UOpoBaei%2FH4MLLi2qj9xyTZ7mNLwL6QicpGLU5nKXQTK3d1x0r9iB4KLxcOMhKEHoADGSCR782L5%2FGgwF1%2FVXNOhgQSILSB7YOaLmSdyhQ4v%2F1Rvd9VY9wv6&X-Amz-Signature=d5baf88e4a15dc395344aa47937837c5ff64194526da01f151394c1cc61f5891&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

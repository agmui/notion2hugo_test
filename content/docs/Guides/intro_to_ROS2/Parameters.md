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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQY3454N%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIF1Pr20oTp2gXRQlYDyPzmKxPgBSWY8m9kxBG%2FNM43SWAiA1Vq3mZguK8txi2ugviTqapSx5t%2FWVk64fzJ37OhfyTiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAko4zL5J3EBRQHFGKtwDocnlTy7XUkjaeHEuNwrKjR3NvDoOPeZkd%2FH0OZ1%2Fe3Mq1X%2F3WxqwDV%2FRdRMC9IRLoPgsrZia15SR1pR2ivBAmiRpFdMwvnv5wxXZzil1kXQ0%2FTsBgY%2BzYkU3YfHK4vRgx6YYpJbTJRbo5HvIQZExy%2FBgmOXPTebOxVgj43%2BT8AyiiX8S6AqrRW7mizW5aG4cYJj%2B0N6ff5rQ%2Ftq7esHfrWB40DZVG%2BqSIMeESskUA57AEgM4WQnyXnrSPtuVDLkYYR4s3SXP0n5qpA8JZLWCh0bBfMBdug00I6r5NJJOiKF8Yvht2ZO6%2F2CL9jyMrDNUzER5JpZ7R7tA8BgrYoOj9xnFGH8JbfC6BZu6qLKM%2FYEaNPQPkZOlg%2FH%2BIlkgD1wqh%2B0sXJHqPz%2F%2BnxKs5Ymx6X4YTMGgxZbOQwIUJYv%2FcP0Kf8n%2FWoDHFVwYmM8yW%2FqiUy8cCKGEAXnsAVdwj75KP5Q9I0pIlDlgHcLtzkjnrWv1Ty9gJSf%2Fm5bPMzDhBOYDH9Xl2UORTxbJhYh1oNg9YnuDZ4Aoyrd%2B2liAquq1EYDM6Q0vPpzSyHbapqM%2BxwWbdifu9fciP83Dz2Afxmgpvm8XPaDEoylLbuSq8RwfOVKlzzuhEskF8UrBOr4wi6LDwQY6pgHUecIWKsClx7mm%2BxPtISxcEo%2Bw7Qz3OFXc5qwv8ASIrN7298hwzuMRhw%2BjDeWl9XVwXHzeA%2Fggk4hvwQrigsv0tp47SCSFL%2BO9c3SS1OuHHPgGv6c%2Bi6eQgTfvHkSNb5SlEufN%2Bb6CL7TaJ%2FOPRUnc4Jwi7kunJC5iXRz5qQBH5hIvtW65XVqFGtcJ7rB2sNNfqH3hmX1dynmbBZJjTwM8Ih76Zi8K&X-Amz-Signature=2a3d8af42cfafe0d4186718782bf37f54ea62e29ac58b0102c9da4f9b6d40a75&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

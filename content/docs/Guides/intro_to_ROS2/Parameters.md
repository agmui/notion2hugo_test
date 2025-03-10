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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRRCKHJX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQC53aXWgl7ewOBs0aNdARAqvE3Fp2vg%2FCQyiG1zyPlWfwIhAIcYfvu33N9OyEAIqOofLbcyqvKbrO%2FHLokWvcaTvZ2oKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjyOqKob%2Foc4LV5dIq3APIkuE424w2BJNPoTJx7LCEKmu%2BdAuSXrP7pONvnkEnLorQhPRE1mjkDlbIgVIos4Aur5Fj%2Fv3%2BbHCc5qm9t63rnF2W4ZagVjD%2F%2FV3KKxbsiw5Ilwn3aHOJrgCepSkh4W7zAuChT%2FHQtHXRKKrAxk9ETCI9qBX7dt7IkOIiP6jJhFrCCboa2EQLB7Yb%2BbBojYhTjzEyX7gOYRVgTEVujAXjsU3UGQFFvw12pbzKtagg%2FYHYuu37Nq1%2F1cjYPYLZ6PRiZq4VyOLw6uv6dTlIpMl%2FSJ6QYD2X2jsaiVKTXgEDA3Lrc4U2kBye8N7AMf30FLmaJAaSVGkrszG6hDN83CV3aWSjYq7PngGR701ONuhvdXbjYxLT6bgTk889Rz5aMVbiOCH9AvHZ49oelCVP%2BK7DGNb4%2FG7lQcZLW8TBlvSLGD%2FAqXoRijf7z8SojsBx3FsDjgYVC6xKfGFbDBTjGxCiXhyL7Mof9pxwa0oPULL2e84MxznCRecFvRXzGeM6Fb4MBQLvVMOwp9ZJenvZJT5M8iMN3vNhUefN%2FRJ%2Bto%2BS2ZsJ%2BKYG%2BOsDL%2FHc5kdDtGkBgIGYnD%2Bddz%2FV4w2FVUDAZ5RUpslp0gC5ubd53ZXap8AKTEmkukZz%2Fc5TWDCbrb2%2BBjqkAfqhiKEd71SKxCeoBRnSLzLr%2Bja%2FElrGQ%2FlEuR3XxS8PhcTvX78Jsuoc5S3GvkSGIEq8nDAzk28pCRv4Ao%2BnhwXvPlDHCkXnA5BKMmsfaEjIUzIfndiX7Sf82m0MVJcxq1ttsvzNsrROuGt0QoMXXmqsRNpRcmVhLsN%2BzjOvuGwZ1CxrzMxj1zz6AvQwk1onmF9MhppBtPzVlMpFZgt%2F%2F%2FQ3U68Z&X-Amz-Signature=e4ede356b7945f976e73e1119cfdb750ffbff122267146724b551e29101e28c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

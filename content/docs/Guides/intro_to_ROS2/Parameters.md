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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AXOCGQS%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQC2Dp0%2Bnbdu7eyQ1OvXFBrAN8s7pcTMO1eK1ayPR6afmAIhAOUFgb7h7yFvF1zM5ceGAnMXUO1GZYYJPJWHsdVkpQKdKv8DCEQQABoMNjM3NDIzMTgzODA1IgzUUm9r3Sh%2B4Iju3O8q3APYKGy2ceqb4N04M0jVk9bIbpILKFF5DzRbWZB4W%2FHzoly6nHbV%2Fv7xDHRavzYkvhrj5Y%2Bd2tDGhbbPZpP1uy6DyCMsXNJ0%2BDhq0eDUcURCBT1w873XaEu1GS5h41AZEgxtHJ0hwKzASJOxd2AnKaPktuGrByPSl0ieeD9YLp2GxPotyVxZ2Fg541uIpC6jts9%2Bw3NGPgZTedtJgRmRn7b1jFukqQqAsLCXcMRgXxZ4TA%2BxhbbhhkFZ3u0F%2Bf86QhHcVaigiQ9IfOL7rAlMw0UfoFEuapcZppal9d%2FHzMpbuDg0fbzlbw71Q4NIkl5jwDpeabarKYK6%2FzwCQCOq%2Bb7B2X4%2FneQFGL5eEeUFU%2B7PBKZJP%2FyiQdky8Wsswfqb9n87OqwY%2BAZtX9mXpj5nr80jTLhaCJ9KQ5RmOmZiu7UiogD5oghU5O9h6POFTocFB7SOvT5tIo%2B%2BWfIDEYXi3texAtyRAWhK8n9JavvTj9KMcVwbzi5FK30dTPAgHtlbWa4KjdnzjAGkHwWz7ru8%2BIW2Pfm%2Bavw7541ctuZLKxUoJgGoOpxZPaJHhzXpczDA0RVvptQgNSO7YMhQC5oFc4VgKF%2FuPe3xuE7eSuogk6dc7BjescToU3OnBjmW3DD02djDBjqkAWJ8C4NTQzK7ETYnTIX5GQ7Mk%2Bm6Z77XRBd5dFNtBQ5CVr3ZMvbtYvT3pTXIDgRT5YK9Q4FF%2FaHn3Z730eHrZxyEnOw%2BekRfgnj7IsiJSQqE7iiQXqykGQyA2XGa15HYnK%2BANcHAKmN%2BEbZDpSBVPY0mDp9U4JxmEshMSGmstLOd3IN2vTmjK8rck78RMgjdnbIIevTW8o22fyAtQ7IEG9BbAJ4P&X-Amz-Signature=ad15b2d6767558f04dd8b53ab0e01ab72e3e7f58d252ac40e4d941f2e6e63d4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

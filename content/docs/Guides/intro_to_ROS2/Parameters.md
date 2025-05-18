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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUW5XRNG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR%2BCHeGAjyJkpvbf9YmNNZjj%2FM7J0%2F1oi6boQg7kRLOAiAtMLPsHB%2FwPyBLgAxHiiGSxF1%2FrSlCsDvhsuY9aHqYSyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM810pnouYpBqp186BKtwDR%2BBv8YK4Bz9JgMuuNJoIAni9BAo1JwOkyEcnJITR4r6GEhHU4Ip9t1siPIXHztDtRrTXGcSL%2FNCdkBsiGCm9QGtfkvbmx35AAnVTj9pGlOcUyGzCoI%2BbCAUL3rfFUQKcLPx6jYp%2F%2BnVGJSC1yt9P%2BEePlv8pFnDkw0mfwYkf67GAvvjA%2F%2B58KRHOUPGWflrsqH0R6DyLmUmsbm1a9xDu%2Fud387OsQZGw92FHfEodTqFdaYZDmb7aOsrko%2F984mn%2Bd%2FMjsSFgxHg6o0VsfpExOySfPPE6YoWrFA4OpNwOlvdAIJHyUx%2BLfV4QTT2FrpVe9emPFNqyHbOHj%2B7mFjBpVBUqJxqnAAlCM4fti89FFxLa6miA%2FkMz2hLXr4nBwsIf%2F2sjwM0zNjXa%2FnYj85syelIIT9Si4O%2BjWich0orr469BkELPMyTtcm%2B6FzdxzQhdSNWt%2BT%2F%2B83m4YJ0u2y8hywUG%2BJR8FkdCLoVXBngCUlaV7BiRyeFAVfs2ldJmvQiEhTm78iJI4RjWAEMzs8KyC2yFYl8HJm0j99g10kMTs4nLCmP8YYH%2FoGAAij2Zb4P%2Fjq1fzuV%2FtMRAP01tKRgNZLPtWfqQyODfV7nQ0oJWDTuGakSFQCi86qO96qswiOeowQY6pgEiEezq%2BvjwGYKU8YkrFPSLOpn%2ByrBbYEAr0K%2FCrTpEiwRDnhMhX%2FNbUy0GGbHI6vjDh4MEzKFGxLgICycn%2Fp1qOU4xkDjaDcYk1GZyu7vC1iCROU2pxQJuOGzZYLh%2BO2RJWPyTo6VxAGe%2FB3a5rJQULKVMSRHLnXUE%2BsVISP4l92fMzU8rARGKq5FVpBJLPpopF1bkfeszbqqm4ERxAKFljEk%2B%2BGUq&X-Amz-Signature=9edad4132dbac0bb6e87dd82b00f733fee1d8a7188af299cb9f8a5b5a5b3a19b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

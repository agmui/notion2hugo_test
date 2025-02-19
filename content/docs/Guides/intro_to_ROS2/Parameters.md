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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WFR2O6B%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEvxU9IPuAgiRa12bTkZWcgixncn7dAmMi3OHw18D0MIAiBcp6muSAf5eKEFbIo%2BeM2nccpBT6Y3RDdox0d3%2B8BomCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6hgRmT1e6WBBfRQZKtwDn21gW1%2B98xjduXqfvYyUXoWylVl2jr7fEyFJM9kuotmoQgDiMpuCOn9a2KQs5LzPED0oCNznYhClqeZ8%2BRiNnJTtoIA%2FGvF%2BtE%2BQWhTMXVejqlYRMzxm12DZEjTuHIg29rGcVk%2BXmeBx9uYslmBCrjA6pS0Q%2BneThMyZ6u0DmolGe2wC8LciYC740VprTUTQ5Yf3MFCJ5Wv25orJe%2Fc09VD4AXGJvC2umlXu6ZAjvNVtcJp0oxlDjsrXJCasXnnQkIK0a%2Bcq8imPsqAcCOtIIkEg3EbP6Rt0cnR9qwOjAo3BUIcnodRtAj94eKqOcoOUaiNvOniKFvpUhEKedB%2F7avkl25EYh5AeIz3L94pfRjhe1uemop7tdOaZ0SRNfzrZcBKQH2Oen6ctoqkYLleec21HVSazaSR1Hx5GycLpVNWiBannPvY5MW7yl%2Bu0QwCSNALw5HWIiXhQ3gr%2Fh5i1peQqxYRo7dKdYwc364LxyIyDkU6Usjx8bbul0bfDkCjyTqHbjt%2BBDpnZynRRZ2hQCbPq8hHqf5iRJKc5ywkTC5YfH3nVAjJLjM6awhdxv5eU8w9XJBwWnOC81QGQod2GmTnwWdZT6nSBU5xODQDtJ7uMhEgakwSVa3k8ayMw5vrWvQY6pgESgXnrJJembCjSwK0KerIgOY8M6xLX%2BvVCBMPXIt2h90I050%2BLbYz8CgOkmmiYi0SRD8GHw1kLVPfk3bwM9Ll0vIQ%2Ftwv90sulo2%2FTnXOF4KvNvQ1oUPMvPH3Df7YTv6l16jJv5lsNTP2%2FkYnryVdGSuo2ikps3GLENvf8gssc%2BNnEm6sGI34jEvDgScDSNw9ECUjNd%2FglFs6Q%2F%2Br3EeR%2BSXbpjnSG&X-Amz-Signature=cb70c9aa47b6929b3ccba5ca82281fcf5ff2b4e5e57feef9636b83bea5a3126c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

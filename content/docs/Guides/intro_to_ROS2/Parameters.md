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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6DL5NGR%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5Rfd8MQ%2BHbKZvDLKyh8bzLMcVd%2FP8HI0qLfmAoXorkAIhAMxHuw0r60Yy4%2B4%2BqjQpMHjhLCf7MNTbIvfzqt790pceKv8DCHcQABoMNjM3NDIzMTgzODA1IgwHCayxNf0ACPKu8kAq3APmxJ6rwxxKuYgUbJ%2FSGFvTSiG2h3MhZLku%2Bqmu3jDcI6K1QSD2D7lD7uOALXxwUgGsw0%2FIYoH%2FDNQfpJwdH7W%2BJGL0BEJFL0rzpbB44Ybl83Mt7iZnEFJ34wt8Ltbf0UbclYrZDZUW6KNwXtIG0OzC4XFQvmvfEF%2BVljRFn2Jnn1AQUP4r0QPN9tbJ0N7%2BDjUT4KlrdbhBJ5AmUQQld6hZcujBLTLtEJkNgPktOi7j49nSWE6nIJcAEJLIyfQvzfz6B7MOdibidspYOyPu%2FSmLRIDEqD%2F%2FSP9KvGPMhtA3OEzjt3iia2%2FyATh5AahOdqB4tIG7m6FVd25ZrYGt13yDyRyr4yUPlGmR9l2Z6Gii%2FYn1HCEwwcP0hb4hfZUTkRQ1TCGtfXEjPN2PvKkePicYijs%2FoZq81SP2ERUFLR02TX0HsWY0DnJbZ3Uqj71lmLbP9K5kkcsaMtorK%2FtPkPCGaEcsQjBjqWpI0P7aWmKuBXPn2RHFVlViX5QTgsVxvIs3z7ig%2F0IpQo16eCcBeW6wKvfJl9uVQhvgH4GP4Ho2rfrSAYWXKlin%2FboLg%2BtXQWM7bbqJ4gle89St8TSZp94U%2FxwzRgK1aOSc0v8le7RNOjt8dXWMN4Cm1KBFcjD62NS%2FBjqkAVdWDxc6pMsok%2BteyF5ek8ztr0jAVWBG763vO3MmVl6ZOhzUCNjJOgkPkrw3a2HN4P4CEo38D3J4ZyqGVEYO%2FaH7lSQ9DaXQbNcMTRF2Yq0VFpDXFf%2BRDt90vVc6InJevOFrJ0Cw9hTqRkHtVmoK1z8TxdBOzu6tv7YKlwKGIiHvKPf%2F5WtCBfyQIj297wPqJAsmmSrDSd75DTr7JMtHKUGrw4Nm&X-Amz-Signature=c4d0339242d81c9c21bd84281e6d55321935253b2ad61c7849cf2b8475b7bc77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

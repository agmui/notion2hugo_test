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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIALFSO6%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhk%2BAQYFJ%2BPmKVbc6LcMO%2BIc98yg8AyiAJ4GrCEA3zgwIgIZ0UCYZZW1PxbtN4rR6tCmi7R%2BOgceo7yikfUFjLDN8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdpTkcxFEG2uDNOYyrcA8xYV0sKvSIvcOvSCCOMXFAi8yBH61m4X7cNN9KjlTE6VWGde%2FHpHpESGU4J9ExXF7ZT1mBX3rsdCzUzhYe25aH8NOcAv9LPlJkWtM1bLSPUxAD%2Ffw8DL3ZDVldRzquJ9l%2BdHAM96bRsWeYJolexnlvpgltvbb8p6dO7P41WVQFKg79ZUTEgBhefeFHcLWgfFrQg4oxeBlKHXbnKUD01l3Yyql1xELoXn0bUKCCh9ZuSEKcvL%2BXIzt8Tb3NhbFFqI5y0Fxvv3li%2F7d1nSGs4Sa%2FSytZbg0qqq9Bhe6nxCQ640KCAPqJSNIw6VM9gZwamdtAHWGpDkwW2tLWsCo6F0Xmt9VKNtY4Fde6rYC9lSVK5mtd4TBf6t%2BLTYzC5wOMXVQPw0zlsR1PfhmMDMHOdtCuRl2m4olZidvfs%2BewOw%2FihabnPnx87YAtPrGCiZLeCny%2BS1vyicURy08kOoxG2tFZT%2BHdZW2bv22KUKkHKqEGlTa%2Bq5pcCkz7dEc3aTCVCv1BMlEVjGM1sLBOTLD7moj%2B9sPqTAcm2v%2Fq3IkchaaB1DRnh2T%2F4G9nAe%2F44wcI%2F1%2FWmwbVxuBubmmnd8xgPWpq306tV5KOVQFkDl2nYJpccMwJcTNURDdTKJWRpMJKy1sIGOqUBGArrVR9IPiM7vGS5Xu1g7Df35c6fVbOANKBLGd7Dr7n%2FF36gMZ8KATyvpDMaT5blhMjTtPhlQbtCoAZxvbZCiGjr1vqJinv6qc8noUn7II%2FUboxXUUlBZsayVxKzBnWXH3L8vewTbVIz03PCiHkyb7IVMFqQ30LPZLLODbZS%2FrQ1BSPTy3gS3oVNmDyrAPqpPKP71Oh4W8eBvovhCye7ou64QJ%2F0&X-Amz-Signature=7d72deb1f4e187b5acac0658c17203cbe8bfdb28e44590df4f9ca0160e58d6f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

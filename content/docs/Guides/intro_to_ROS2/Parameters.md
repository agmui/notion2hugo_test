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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLEINNND%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHS0KcaEI5muWDm%2B4tA0L2l%2Fx7T4PvfAvKUCBVfGYSSaAiEA4srgVIFZbj%2FWeGwD8JHDCkCD51pezW%2BVFiTor98qWREqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIogX6H5NASbAWipircA0twxFM1A0dW2bKIC7kZp6GpTudFJPmPF4AM1WKsi10s5he4ExlrP7iHFccgdLd9WdGMXunw605QFBdpKA1IBZqNS%2Balvmcg5JNBBw6tY1DHemnq6BwzaYXM%2BQnN7tGAMWZFinHaLgKI%2FWMsRaksUJ%2FABZ1ZLefTlR4p%2Fi99btDUgnCJXHKVzRIhyr2y5OvTMcqZl8aIHbGupAsdMaKvbJ0N%2BVzyMA%2Fa0FTy8%2FyL%2FfloWXISs7YTJ6OV5dhRMIvhFsB8PlKeuQLIqwAfJTKoHxt94jvT5CHQNT%2BNOIw%2BLYgAHoePivjZW3nTyexDygA2qa3sdaspcALeMlkjU6DaTFSgOwSDDKCTS2GB2AH7odKolANF9MvY7hJIH2sq6lN%2BmYcmIH7SRgcwYQsNwrZiaeqE5egKWHDb1pRrn%2BCSvqgz%2FoZbkgD6%2BOrHOelb0X6BKAXnIbHtzCjPI%2FCT0%2FEjxRXfzmDiCW1Vmf8acULz0jAcmN92gCf2AnEyrf%2F8nnCFCu0vAdCXTsC%2FGpJm%2BewSsBirxGzs6pA4bDFQj3%2BUGnyWGyuwEK6ZhH8glkv%2Faw9%2F4LY%2BtiEhEWQHKGEMW%2FwCU9E6cM4um0eYzhNhOE652OPfPzq3pUMVzakByEQ6MLbsh8EGOqUBKYhMam4fZpHuDi%2Fy4krIZI681vFjd2zxIHx5RU%2FlrzXZwq347q0BnnCQJLwffgvcvai%2F%2BP1fj%2FFqji3bu7oh5p2X4DwsJ22P%2BgDX3Gsj6SQPFn58ebpvW9sh0mBBz0vx71eeiP055vzg%2Fe4T907LZk9jax8XMWo9TxbjHaiDPT4koX0mDOgEg8t093poFtv0KHe%2BIIfd9c4n%2Bk6ILmjE1TMMGJW5&X-Amz-Signature=28d98df5b80d284e9e49b53aa786a910711d4e5ff87abe01ce418f1af6acd7cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

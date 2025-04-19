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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT5F3VSH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7q4RYJ82ZBYepEohgT7tCKME6LpSRSwoX7xwt0mkknAiBO46lUfIdNUAuUqqKJ9cjugwI0Sl8MT1jC9ExBVAl8uCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeuBJ14VKmVlFU18LKtwDHuN%2F5bQkn%2FsudN%2B7Ay64g%2FfJlyRGZg9ofYbPVUy3ngpMFyBefNujBSKvCMmCnkFCaqiIHKJ1MTlhAhxkD5K1pvJRaIiXb7OkjzOGgvonaOEafOatSPABmfUA%2BDK1aAfD%2B3G%2F0WOizZ5OeguHuksTqCltjLw3rRaNkgoydAxYT4xd5PRsbbWh%2BLg6hElxldiny2iaD7KtotdjfX1v2YD5ziVNihxAagtBtug4zVMWgoSd4lmbnqcfyQVDS7WgMyM6nxNAypMEGQCvQpscVLDx0UreoIU%2F1057rqX30df3%2FLFsIKABamzuFzba4ZpvTFvlJB6XXsqJwDyvd5HOrovTfRF7OwNUcKzDWLKIhDbu6srvDJNXrFXKcVWlXTLwH5c7AW2vLQmgc2JM59FSgwzGG%2BWiWj3ZF2Iyz5Zn0nONEptDuu8iymuGqhs0aoURAVY1tr7wt2N0UIX4WJ%2BBoX795O9j%2BvOvHXHQPS7aox5yGDETpPZOjRfQ9z1FFsW6TYq5NC7DaugGB5BH6s2reQyWgMmjmnH0os5VXCBeEkPA%2BwqmRI9Mzb0GztJ5yN%2F6ounzplGrqpAVNCCWE3y2Pqi8CgtGqxVZK%2FgNeWxHRHMrgtRf0fALqWlGCLCIwlIwj7yMwAY6pgFb8eYrCRvIPcCcWyuIaIXUEqTN2wmuvIDmAXucFrRtBd%2FIPyls11z0SS80AkpwrXv25pvTyPmlhTm2u279jA%2Bq8%2F34e6kRB3c%2FD9aYXuQX9zJREzpz198wN%2BKaMCG8yA%2BzEuEqqtP%2FKusZcHI30gygPSVZ%2FyyCiSzh0yS0StngWCdUHZUFUq2CQFQJ9E%2BHvwlW6ECT%2B8a6cekfppBJyfWWfxfjJtxM&X-Amz-Signature=5ac5fb8f6844990b23d06d5a377e6ac4acdc1554a763fae64ae03abc979449e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

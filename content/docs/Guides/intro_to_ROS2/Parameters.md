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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLAX3M2G%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCICkj8bwC%2FLPsYnlpDe8TycHRU7KKdJxKzqWtZWuYdr%2BvAiBfF%2Ftb3JaCYV4%2FV6e%2FswVR%2FQC7IZY3Oxv77Ka4KHCUFir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMdG8MxzDgC64Zy7N4KtwDXnX6IpYVSmWtZ8YquUzHzZOBVFHBGxUen%2BngIAXgWFKL9WGNvAetCowxbLLCJEn3X4JKrye%2FNUmIpJN9HzAAWF6i4XTG52u2at6oeOGeVBA4fiRipR1puFr0iHeOw%2FOT09K%2FTwI2yP3%2Flx49QSpyB3G2E%2F%2BUyJ6TP0wJt6aCXRNzpncJhIqEIEN7Fv27hTOLob1%2FW59QrvnPElLm%2FJfGYRKTELGVElQw8t0UD7OsnEt3eAmAXXtnoaZnKI4%2F%2Bu6dKOdJCaQPQ%2FlxNO8HOE%2FuQXMFp7x4xdcD0WCab5C6XX9fXcYq0%2Fd2HZcZcY5iMc41nvNR8HcnjOIWyFQPSNtKW2awlE%2FffoaMKEI8DrCCAe1zqSgJNEMpdgNc%2ByAZkVcVT0xPmPFhW9aysWkqKVqm52N3lCLxPZMklTaflhKlXVWrG6mLtNYvtKUS9pEz0y2cWNMZEwLAAAz9f9noYYT5AGqEp4M2djCy%2FDrs69GHx1XeOAlZoG8by%2F%2FzWIuYOO0Iy2qfOoG6mM%2FtcYK3mC0%2BPtyWRAYje8hHRKJzztW1c8KeJzIaut%2B11X%2B9DN1r0PH7YwwKP%2B3V7lRUm25x2Jiz9Klr4gSJBMiuyK7KysT4c4xWl027mvM9DgOAxtIwgNWyvgY6pgHch4BIjuAJIQETLCn9p2btEdfgnMDWCSffLLFI%2FzO8WHIY%2FfFMk%2FrVOEII3GUW2c0xdvN6rG7PC4o5fZH%2Fr%2FTmhrqxVDjJc7ztXhUIFzxuObM7orGDGtENLB6DfvAPsDizJOxm22wE4G4UgXXP6njN9DMMmfIs6kJHFuT2PoWvNPT0HSlYbRVEwNPYSBKHDorN9aul79si9KyISmeHf8yb7fMjvQ0A&X-Amz-Signature=5d0ee3f7d29db77a57e8d17953335f49d04dbb214343a83f6ec00b3f81c4d597&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TKY3SX5%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDORcG00NS4U4P0OX2PyB0tXGjz1f1LzizaAfOO0tedBAIhAL%2Fge3lLvTMPYyRH0HJNeFXj%2F84JNJAYmRnY%2BlvTFMUQKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKfEH%2FAg%2BFODQc6zUq3ANmCIB9HXZRH5XkelVpNTbnf4wlMVNHnP8628aXYR6aBrTa9sOT%2Bb0b2CGslduySmjy0husCluLEHkcQcCxS3LCP6l5010n4TA8pYsLIV5YpoLPkRppDWddCiZDmqVR1zVAgJ8CLdnw2%2B%2BgCrw1Vu9GDo1C0zY8jOrOPfSPjCRCyXJJJGWKD6dYVAAgonhscrOff724qJo2CAbSZIXiKzln0NqRuIDBF%2BB90keAeg4aGfyQfXbhpFUTOPSe5BwBN4EEbmKRD595cVJCOZ2Ny3egeD8irrO1b57VyFARchsKzKS%2FkEctqforYDGECX0XdIX9%2FZ7o0KDsI%2F%2BdPeZCpmkF8%2BCX6yO3yoww%2FRz9mc0D8zj7dTW4NRGPD6pWna0MMg7BuJAF8iu5Anwxc8vm1gGOEdyDbjJwMcm4CzgW%2FrF%2FL%2FACXpfrt7yIzSE358gpjfnhkw1YPy0T12WbEBj%2B6aZ%2Bu2nf8TNBVDYpZThV2ltPDCfoaQDKgG%2FxzE%2BUUqCcSyz1oy2BsPz2OF6pzqB0ce2fVO39XrZGUDo9lAQ01VIo%2FhHtamXrdyH9zXRUgKpFEHex7aUAfX1qoZXMZkdnI%2BXEV2BOjhOcnW0fbYR676hkpze38%2BTQ5wHlyJei9DCai72%2BBjqkAUP%2F8UnXLbnJr86%2F3WvAZtAxEONMwIoANiKtw0v78s8O6EtTgFArEkDvfUAQTMap7ZZvVed9KghUuyncS73dOcm6l4UZoBUWMO9c5LjNtpvBlJtGNJV%2FtF5j7hEqgEpK5HnFjSUus3aAVIKKAzTNu2nSzf4aQ8NmYccSDNI2Y6rW7%2BPV4XJiAxQFvwUCyvRuvLsr7rlirXLcJZl0EgZm7Y7049Lc&X-Amz-Signature=4da3cb72972058d900e835f17e1e6eb5d19151f9a0b4cbf581bcd6f27d2ef8ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

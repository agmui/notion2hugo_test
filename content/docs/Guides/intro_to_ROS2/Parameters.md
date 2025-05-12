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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DOEGZXY%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIGMS%2B8V9xNw1xsFi1CHseFwXip9wCvW1LOtFY32EqSPuAiBgXoXdEalf%2FUKfcbiLVvbrdXJIPrehj18uir%2B8Mi8ePCqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtaxJUHuHwFfRlKxvKtwDXXFozW%2B%2B7hvJ43kdzdqZr7y5Dg6zZu%2BTxK6CqXlJKkXCZUxd%2F9NXZNYjgYZ4puFMVl4LO%2FYFu6U2torjzNMOyj2qkGppnjvjocWg0FkYyV0DJvxQRKxzVZOTPuz2QEqqNdhhXMJdtLLUxFXE%2FeMhuEOhM%2BLWU5H6ebc7daojCWZ30coMbxvpagpEGWl9VxSk7WnSjQOz4zOnYwrMcev7HlSK1SvA83QHMUpgBU%2FuE9I4VQgScIaxfj4Iifo6fPL6JVOwlVR8%2FkJwbWtLXqj4NAvnGBu8EyTS5n%2BC%2B9EeKHfQUQtvB4O9KdrMmEy3g4JBEOlHVImLhYryl9bhHJ6gZv6z4DSUfU%2FzeT6mnRFg4ffPFWGHF%2FnIwAN8mjxnuZLdtdpuAn8ubReVlKSSxz8OaA4dk6gJhWaPA2cf7m7nuw9Td8%2BW5jYHZjDZN2BMnNxa%2FW8LB6Sf3WX8XtCx5Z4M65hrR6FCD8eZydc5jYD5tXKK45M1YikpldpJRM%2BO6jyi%2FYj4uyrhlFNV3Jdhaio8SphgvFA%2BQMI90AKw%2BViLwpZFmcaQCiSdVLzTu04MmqtEhqv2AM9pnvMioEbLonUqs%2FuNFamLGcWJthmorfU01a4xqpKuLTxWsDTTP7kwo4%2BJwQY6pgEOxycVRP1WJWeKYJZzokF5nPMNw3I6qmanq4sjz3%2FxrPXqfX%2B2VDVtjMOwNBIg7hBJwXbGJdxbvvWM%2FAXg7all5jIs%2BW%2FocVsitUYPLbfbzkPNDcXXUJJTFH2pM0bgj4fJMyvRz5XpmDdz%2B9kcgpSTyTz%2BWeZLZbjhLQfiKFHfQ%2BZeTNvBZmp%2FQ3XEfLgLqaIVxkzENnABqOv%2F9m%2B%2FlY4sHMoybNUq&X-Amz-Signature=d6d5d1f76f778936b23794704b3b01bcf9f513df28f0f1b340f5150ebbd2c3de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

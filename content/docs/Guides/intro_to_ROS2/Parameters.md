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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZFCQNU%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESp7zXGPLpw5Lm03SSSg7w96VSKjxd55%2BFIBo1xBUJcAiEAveJLRKnSgzWedzBSYEA162HuHZuywOEJgHjiH3TH7fcqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnsoQkh2H%2BkqZ22yCrcA3agx71hhup4vdxYjiKGiSOH5o%2FmmMxeqAuOQlpUDoE9157Q7f%2FGnj8SQyQAdDxrsGMCa0OiN%2FXht74Z77OGeWRYrCoD4htA05c0ADYQX9qXARxxjVlCKvhB9ZWxQ%2BgDdR9nP4eIkGW3JyVmd%2F%2FL5Yvd7RjZLxELB02uBv93rqgInZCJkXwUBOmLMN9Ij7TS3qrc9pxh7d4LAX864uFAVrHe6BVfMzEmiVH742Zc%2Fz1E%2B6wjjqQTd7SPubSiNky8qvLAy1fzQf5gqNyxvU80%2BolzRU7j6n%2FZ7ehmySsa%2F0EnZJhUahwKSloMM1uVZs8U8GY2DRpaFlN2RPvd0uhZIJA1hWkPGtDvUm7AJHsY9GkItvrqA6OEnUA1zYALn0OJJp8RfJZBqLQq64Ar%2FQkK5DGdzbJOgxc72bdj4Dsgpu9jJPwD0cHpnukdarVcJdOFnFCP5F7OjZtcFwOSiY4iab8txt4lIZiUKMPIgefBfrLXantKVIWxMPz%2Fb5G0CRHQtkCtqZUkQrlqlcFFcRCCF2LcPWy%2FiBlGO1BtQ5tmT873jxKPLCflMdEU%2BiQhT%2BBDH3MwkVr3F2p%2BCRiIy4gvNsPm9Fdl4te9UvgouDtecQ7mcz4su2oPOXjmtMbWMKy8%2B7wGOqUBFInOvfS0KSjH8%2BSq3QKU9woKW7jJwQA22o0TJtrXs8zprK%2FusTGR%2B4mUvOREV7Qk5wp6zQQNYymTKmcYoOPAevIVIHV4Bvk8QS1rKM519k0Ia%2BuLyT1nv11%2BB%2BLMJge9D7r6L7gE39gjvcC7ww3UQ3GkY9cMTfT%2BYBwy89t%2F%2BXQAyZOvICnF63VdlNhhPXa5cbMNDLCxvlrMnF0Tm7QSnKpHS7Gj&X-Amz-Signature=903ba1df04ee7fbce59465f4b55bbab12d10558e8c7b46ead61ca87af570be47&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

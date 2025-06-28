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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCGKH46Z%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVmsXKVIVrd7Suxq7VagfWnJ%2BJQf0sCD26yqntRh03DAiEA2Z4vkrVs67ePrlZengkyr11SkiIPV%2F57Poc9AkPv3nQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHknxigBXQRNe2IOtSrcAyXKkc468Rgvk2y6HBI1A8LxkPmedC38x3hFxhqDGlqhYDMOx9CQ%2Bia7GOmLG0D44zsgI%2F007Tn0JGFHKLhdCUIFLH9zCccJT%2FCT%2BMphaVxiuN18p1HH6SRRq0S0eZXEAIUAy%2F5eY%2FNyd0%2BG2VSmgXGwVjxK5xHv3mBffR9i%2BBvGXeYifgcgtmmlA7oRD2M833ICuL42%2F5S2fVG%2BmYLBxgRAokSUw4jhIco5UvXLnrJwRw900fqBs2KtWes4o85DTQG5yZbSGRhJgl8Ki2%2Fn7dwVgeONDW%2F3DW3WVGnb52h19judqyZPZVqv%2B5H5f90SnMlYD4j94rHPxx6ixHRZQKPe5yS4zG30jPpPUezseB6cMISpF6crXz%2Ff%2BPHBaGKdjIPfzThuO1B1ccDL3m8iyoiZT%2FQhWectIFOfE2th0ym191srNntFAFBjp0OmGXLMBvKhfIJaNkig5iV3R%2Bm3SP8KSUntXdVUoegKJOfwXQIpDaeWmiRXIk0hGtFOHVUtUDXXQmDlPOD3RU%2FXSOaiKT8IEjUc1Oinu4r5tg7bZIC7ICU%2Fm5UaH1OHEm4%2BXHv5IAU4U3itdlypFkKZ4uXIvjJYuRQDNZPqdYS5Mw%2FZCPrnQ9aQZ8%2F7JH7kLPL9MPGP%2F8IGOqUBeb24QUfvEghweAb88Hj1UxOW5A9ilfb8fHGj9A%2BCE%2FlMjuJH5500cy%2FvUqFmxyXv%2FFZ42ZahdZdtOxbYoqy2ZfOXRN6Gicoa1WOcUFTVsJbPXBExbM%2BXhjDlYZJ8l1rJGCiu0eE4CLN%2F8oei9lqYlSUJE%2B9YqkqaxYtX%2FGK6DSUpwycTFsInGz1DYhg5HUY20Wl1qNGyxk36A5zlySLqOiZoCwl%2F&X-Amz-Signature=d84c8debb32b5d58d3e961c4427cb965551595aba240980819514e28fe353d9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

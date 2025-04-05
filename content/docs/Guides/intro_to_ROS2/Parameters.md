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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSR7QBNC%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEeP%2FcO6YfbZPVEgw9sUm5N2ynJhenZlTdoUB%2F4OpECAiEA44W1Fiv%2BXPvkN1qLJtcBfZ9A8RLnNjPATJq2CT2aD5kq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDHjDTK5dvF9BpWbSYircA5VSl67o2ZBwhLhMeLkT0hisQ%2Fd4awMfeYdhnQ%2F26Gp3%2Bc7vnnjkE03tDLpXan2Hmg1qp9B5%2BldrMeZFM1x4x%2FojB5NwBe15k7ndTSc5HkEpNkNYz6SgEsTCRgO5Ih1bXQBA34X7wnZHndkBjQbXdegCIEJyz115z0girqHtTibfXXjCOsML4C7Bm0nKCTdr0V2%2BwroK9t7jukle5PwxxlMpvbbGzvl0iOh%2FddsqavjawIIOHMHWWDLJTuzstJTZxRL8XMTC6QatTFnecogSLZewx2c08q9wRrX%2FxX5eDfOnsfPM0vmYTXVS%2B%2F6E0Zi0PkPiVhnVOgxrdiUiq6UF0VG%2BxiBpM4Ntb57ytwIfeLEHqPEGx5yqAGjWoU0A3fkVAJF3uRGMUxJ0SNq1GzVZNBYLg6vIM0n2S19RayrKkooJOlZO58KPNU6jYo4vUu3pDRGIVXoZtIUjeTsBZTIucVPg7fylWCH3cqXbTJJWyyT%2B6tWRrzGLnmGetCENbHJ0WrxZ%2BoKD4Z0nwgeOWvDtrqcgk96UVrezmodwCHXQVt8aRpH0tSwkWYJIdsW7YD0U3ZYXua%2Fw2CHJGh9Vv3MO6cqfbr8tf2DyBh5eJQhPIF7%2F5CKt1%2BgipCLoVcNKMK6Dxb8GOqUBxbOuu0OBdJK35p8cc5XRNiHldgnGpoG5CqVHLrhpMKUXpN2FDD6fi8vVN%2FTTckaUqZvawrSs492Wi9orLFulAX12DYJmruDcGhwR2fZ0CFX%2BHvIP%2Fse5x%2BPF5azjoU8c2PM6s6Z0oraZSrHEvm782pbbz2GUde2U9vHM4mY8nO3XMNnfBv5g6sz6Hrd6XaaYTr%2BydFAYBrKrz3vIKl4N49xORzNV&X-Amz-Signature=401cf3759a390330f34bb2ff232a41fbe5bf894052f34520687d91d36c7ed59a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLA46WH%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8d2%2Bx2UWiDGjaYBLyk7M9t6d2eOo3O1IlsKTQ9lasuAiEA83SpOA2LgLUwkAuuGq4uP7yvxjC2EU5cgoPHX5a4WaIqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlInGOQ7%2BZIowJziircA0DjbwdZP5%2F0Y7cAd8bNj3qmqVNrk1mjlkIZ3ctbCd2tT5puH34iocFY1YKdlVmwR%2F3pDif%2F77sr2gFF1ywQlaCs58quxsAwMCFv4P0lUlhNrvFCFbvuGUgQdPu0ig5dUqYZWvPYk%2B5QKDNtxpDlGAV2vt0gow6McGxGfQdJXVVHIXKpE6dU8Vih2ZmSJVLRcFo6jklTUcCEoInNMpS940EOfqv1M2A8kCOUumiYsy%2BFfhqBrDTUSNxEGY%2BxQaxcCuYJG9BM%2FbcZ93aSZDtvV9f4MlwEV7c7cy9R%2FPVdjbpzuwDhbGD5cg%2Bt9s9%2B%2BZdf5PSgZPDQkviV%2Fxwu1lFPswK1hLQMW%2BPKF0CuFNhwYGE%2FSVBdaj6bFTPRpLjwN4k5DVh4aHYzK4eBNm7jSIzp7hiGvAEpXkL1XmcqWHpiWi%2BYjjMaEsJpJ76YXWiYlVl4ggjyYAKg2QIhOqJuTAXNxeFQaPYdcmvV%2FQfFZQTbLZWqjuRkwx3HpqWXtTUFr1LOQgb56tqdr4beNKC9LOUNWG4EuwPbuLlM%2FpUS8W6vaO%2FR%2BLd7yh9YXAE9YurfBX%2FWHZEnJ3I20zv3Nx6zY%2BOIxj7bylLfn5v32TlaiMJszNkDNt6jAk55Hgaj5zizMNqfqL0GOqUBxG%2B5HjVpHgAaOJZaPnG229qHrJYD1mANKkBecHQbX1I1Kp3WiQETLOoXqbVHFU7D%2BX%2FWnEqKTcA8%2FX9%2F069YuRjmgVTT%2B4oT1hmhgAOJdMacVSn0vamkKtt2bWUBK8sNHLx05b9qS3bR%2Bwi58Swm5BfaxoP9TU6MQwLDayleA0La5AmDkBZHDm%2F0Pl9w9ZeDX0nthruX%2BDeE%2BCQZ6XfncESeFSV5&X-Amz-Signature=c6f0b238776f7f1a6f175b436db5d7a403795597e718a2837e2266751c549d32&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

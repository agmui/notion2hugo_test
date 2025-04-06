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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2CXX2R7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMMoUvb6x06k3BOjdI%2B%2B4xeCi%2F5%2BXgwVKj%2BleOS35RmQIgDte5hf82mebjt%2FC%2Br0C50lnvrVPXUMsWIEBwPuQTfFsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDK0TuvXjihk8a1jjZSrcAze5o%2BKC%2FCGU2goZ%2FGSgWmL299ps2sC2L3SnX%2Fu2E%2Bq1jqKyjfn%2BDeID2rviYA3xXQ5EhgMo1%2BhbcquJFn63pVed1%2F3taE9C5G4EB8ET0tiOdBlROpUJfLZgT6ppAVnmYEfxxfHTsFLA0wH6A1eXP0i0wfGEyG4forAJENRR%2FK1eyTv0H42duL%2B1QNJ%2FCjeyhFgpsuBr57VA3R9HG5cC%2Bs06xscTpNZ7EE04NmL%2BIYCGjb9Oo27iLXy75PmBX5xeZoo2ShhaXkq6qYhwSj%2Fo1WV89dL%2FHqrAD82evGfBOaBuijUYwrRC2aGhSPouYFLFcNxWBJB%2FrCOCP38xz5guRgs3ANKXLuKWe3pZx5WcSeXbHIL8Wg6YKm0qqpLaHDl7%2BU1v9w8RGrxnUWBJLcEGOmUvgLmtlOkKy3qiHU8NWwb10FB3W0b2H5G5IqRCLP7xjyrGDw6A72os0eeUJYISTj1%2BVYf5zDdUu%2FEofD7hgMca%2BikJ7TgXfpg7M8KB4wsRac8JLepBRW3DbgjA7IC5w%2F2CEgbxt7e8VLDNYct4%2BjsXmOzSD8pU%2FeVzqqnNavZujm8W7rpAJ3KRnbS5pjxuNEC%2BmVjAuygmnQJ85vQRz6PlyzT2L1cad9MPEplaMIWgyr8GOqUBe2T6vMfJTscWREVc9x79PTtCebzOeIyFKKJvzES62shrV5NSzX3sl7WK7sL6IcxHH%2BqGjmVpnYbt0f1w2NY3rd54VIV%2BMkW03CKfcfuVrnzNI8Nx0BLFcTpCkBaN0Xu2BNvBCkfe0npAyH4Tq1WJZcISRVxcLoVg%2FhzFS5RSZtf6kumzUanyczGu2c%2FKKrcEhriHzlnnOGolbytn0FstbEFrJyAo&X-Amz-Signature=fac6f479deb0f5cf4c74b94be8c2c6fb0f562d610b9c8d65e5bf1593092a731c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSKZ76EJ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9NjgcLameTsDw7Hwtj47hOLlCDEM%2B%2FWdawknx4vXHrAiADKwOhvuI9B7u9uB%2FsrTTYTNJEzXZs6gPnEVlcWwklOiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUgb9nS6TOOt%2FPTarKtwDziDztH1Bq2Rc0XodfhgAdqHtmtxwasBVH21%2FvMMEFFRrGT4kN6DU4wgfILqNxHLavm8S24q3jV%2FmmK9A5WPXuRN0Iw5MvBzBBakwpq1IiZbHpLz7E6H%2FjvsReID4tiySySRkwZnAqVYBAIU9sVqCwSk4vCe8RaeBHAGfOCHPNJ181J3lw6vEkU7NoqG6RC2yz11JkQhzH6uWAkMvDBHk1Zf5R2QzXMbNArD82e2HQQwy%2FUmb0OyusHq7C7tGXHQxktC00sRMpaRr5bILuatGpuUZzzMs306RkUOsCATkd4d8Vr2QZWL9vKvcWASrlLZUwIW18nZEfS8SSB86yYyVld5Py8Fc9wOdWJGq45EfJ6bG%2BwRnslS3d0onRDbmeFg9xTYSft1NRRSk6rhNcIp9ev7eIWS7X9IgYOODcUlr2UZ3HbIpRhUj%2ByKpaJoTdTs%2FsY8khyDRLQS5NuXwkOxIZ28bE9C1I%2BZtmETBhurL22EZWmxNVfOjt1Ta9DymaV%2F3o3QbFFVa%2FDjAUFntW%2BQXXpnx273NmFW9RfGV106e3hfa8ajAi9p%2BLKsbURsZirGkpwnrxRwjp6erE7F7SAHoutg5x%2FRyf3FfpqWLv%2BNYuQECTllACEBMvQ%2Fq%2Fe8wkJeCwwY6pgGo4GAi5tKophsqQheF%2FlCTevULMKEvla%2ByX9A332Kn75PQKJUR%2B2COL%2F8urt9wzjLDyaEAmfvbqPZEzbKNO6YGC2tkPEW%2FefsjnOD%2FEvbKyHkoXI2CQsNibpHmkTh7xT6lWDOZsK7uosnnuTGUDv3amXlSTf67VcxEOFsEXtSjtRE6%2BCKEqr%2F%2B8GoVNEsiSBoloJQ4gx9h2BI0RYZo1PnkN2INx7RF&X-Amz-Signature=52a2fd71affb89eeadb59e6c5700ac40be22046ea915d799dfd728f39873e27a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

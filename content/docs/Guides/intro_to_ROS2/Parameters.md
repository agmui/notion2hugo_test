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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T37FQPE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrZI6snvB0Aw4Kw0CZMgNJ7eWHixJTbImmkeqVrMev0AiEAsPL1GXrm0B9zLcSoIeNcMQVemThmPhxpA9d8n1OCIJEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6tXnUysNXr0nqQByrcA4gSvT4WlvcnG131si1ieJkZGXfTc4JA4jRVIX7HgLTSStmaHex21gMaWuM3oXu0TqV8%2FXh19Hi52uPVotYZ1CMIsFpk2jkOcBpLY1lq2yCq1gUWJ0X1%2FuMPq%2BVD1Mf4LoBr0OStj3h3JqNdMzbewQulvmqBxD%2FzsM%2BhhUxu4rOJkTmEF9nrs36tYn%2BAxBzuWpGB55TSfBGx775BwpDxPc%2F2kA1cSWBboIxf4DJRywJOpsNRfCGb0O11b081R2NgaOfpp7Hz7%2FSJbbc%2FtAnA6HFvX7zlJzUL4TNdsVVMzFvUU2OkvBXJa6w4zC0XUPimTua8r6IeVkhOfkkB%2BGKy7KClLhTMzSd58hvxA6N8mVflA3%2FLyBGz48HlxMloUvXiS53ICZwZ6Ghus6W%2BDI3L%2B0f1au2YnD1Itx7X8fXFPE8YPnTV%2BFvXeyV9Uanm1jgqPouNSZoe4JgES48KNO3XYcc9YnXMK2Tfl8WdMA2QDs2QWY1aYLd4UN8FcMo1FHGjYIXNq4%2BtjY0S4mMcmABPzKCVpNSRkltLYAIgTnQpMRr1Xa5gyicTBlmte%2BrWhIvIT0BpFXFa5%2FdPHdj1AU%2FDKDATlOLkQdxl5VnuYTh%2FwdjWPz77pmkaECg3xzJqMJb2q8QGOqUBvvcxhJi7vFB%2FJnYC8jpXytRaI8GYOIYTyJbHWPtrGdox38LdYRV%2BU70Se0f15mcdLtz6jhx77iaC1gOs4ORimcSSQ9G4EWnb2yVkOlrgbmUHBSmjGxfxe%2FfecMUy2MVOLEWrDCvc71cevlk9rhPDo2xG%2FLR%2F3G5caSVmjRxvAOSnfci6gcVelgyj9bfOQCGX5OPs%2F37nwUys4rPQ%2BRgDzKIV%2BW14&X-Amz-Signature=5ec0d4e59f5037922b11193be31e5b1fc52651211af552687f55835f236144de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

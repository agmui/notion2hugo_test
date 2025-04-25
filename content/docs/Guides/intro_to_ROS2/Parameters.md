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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGH4FHC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdRuioYWYXCyD0oAGWjj2vG7s14r5vqqZ0siNWWQmaLAiEA%2Bv%2Fpo%2FaQNJiELDR%2BVBGsBKw5ZQQhlTMPc9bZ%2BVUeldQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDDoWeeY61%2BaCihNdwircA3XQczvjtpoZiYTp%2Fy3Tqvn1E6hglIHvWmVy%2FCY0v2rlsyo26GGvwFsg9%2FSjEbHoZ9p%2FrERw3io5VYK1sEf2svh0AtcHu3SAFB04auOODXWCG%2BHawFFKITPvoXi4%2BJnSulLVvi%2FsttqK2SPRgcHBBYbP0Vq31dpHoU9fSgTCbdBK%2B7XJLgPWAfgBQ3L8x6ucARkrR5j5uJRu4OUwng9PNCu%2FDlyGyYDYlGE%2BpXDmx%2FbSkZ5dmrSLPBSEZ1NpepadOMxW5vRsdPOA2s7JONMJXt8QcqhMl%2B0z55TtD69PV98S8H9CYy6etA1ITCSmYCZyGBFCWanRN7spYkbfQDO53HGo9uhQtjz71fDKyQsOBJdlhPht6XgIGcxc06F1Zx4w4fVu3yfE0MOAFAwQNVuYuMgxibHfOApuE%2BG9v7vDbbG9qaydcQSkvk4g3KxPq6m9gg%2Fhb7SWsq%2BXTd15Pp62lRJsRwH%2BRPrgpu6NMCGW%2BSGJcwp1wSL5qi51wCiKCQrXKh2fZMLK641RbBddxIC%2BCjsck02S3IdvBLb1HLg7tJTTU%2BhZExqBc01LMDuO4u8kEJhxkgF6LqSS2KvziF8tvHoPDftJYh5m%2F6UTU9%2B0EwdsXud2kJUAGmbSoktuMM7rr8AGOqUB%2Fn9FcLFarEMI7d2wA5b4%2BhgKBWWwXlTsp48vaM0stMluAMWh9s1g%2FmuzA8nDEMqtxSOl3ZLyUPfHtDxQEmnjW2wcLc3M5%2B%2B41Y7ZplpuTKQtLV%2BHYDJPjkrbGPYwkrXTQoUe8iCw4fQ2y45Na7pUh2n%2Bk0Ke%2F6lFpLTVrMxOnS%2B1JAh%2Fnco44flimPDCGHf8VtKMsf09Z%2BEZd8kaGzMFXeuPp28t&X-Amz-Signature=e6d4a4c12caa38cc01de000c192d690fae53549814fd54d29645fee2e21325dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

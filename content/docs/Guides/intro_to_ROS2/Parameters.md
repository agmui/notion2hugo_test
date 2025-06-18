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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6G2DKW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdIM4YmDUHQg8bGeD2OCC%2B9uEsYAMhrTd4Z4Y4fX1IDAiEA1c993slaW7FwLy7CussVaBxk4busbvb0826xtH9j88kqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ07FF%2Bi2Z3zwxni1CrcA2Bmn1UD7bWE42OTl%2BY9hZzNQEXGwqH6fQdZP%2Bhpl%2B5lRauQDAA116TYsEKVexf7a07y2NWtAo0CH7nLmTKOebJjYSkb%2FvWbwiHMjKGR2EVTqlttPQZE94lZhOQY2f9fY2Kn5wdFddGMKIOxVrrZZx2XpunNlHuYmMWMWJJpRBBulSVMR9wP9WlnRFh05gL0qQ7jWsepnowfvQEwm%2BSoNswHdJnG4vV4P30vrwVOFmS%2B%2FhalyV0PWpsU4n03Xm3qLy%2F%2BTepwynzwN4RQ9M2WxcyKzwroaaRiBXsxVHCnlJp0VOe9PIkJa9bvigUDfU2muDT1X6WQHm0AlSWHHuuaWri4QQTiLObRrnIu%2B6db%2FtKPhCuKUKqCW9x6vW4WSNhvnuOb2om5FbHUHVUqewxfMQu8gDK0zfDk2S3xkFgloeT4Ub9xDdU2qFOs8OEr%2BrY7%2FiQI2uSoQc%2F3sgFJUVvMN7V94yNXSZlBfxOeft1U36huxcL5988tlVA0keII8Kx5HRNS0lL8pmNBCnEZS0O6NK%2Fb1qWv2cvIck2XehZ57KThdmnkn8k94mgYDKsRapOydKbN2QkVBUHBKSzcFm5HSg%2F1iFHIaZoiBBtFdwQiqaJUWaS%2BbwiJ4y3jRapyMN35yMIGOqUBGCF1yDfi3VkD96KOv3DR9x9bj2T0AvytalpAmpAiZMVuVKFFSM%2Bf%2BZSOZj6MHq4wqpdOkWTVMBlosGqf%2FgheeUXtbqmQIQKf0vWadKmtRIMGkYFA83pHUNjHWi8z2dBVEkuB9Xy8avTbMEJThxlsYruIowzIND33Ye5dCXjVpggKJvMJONe9iG3ZZo%2BpiEFEwc7t5DmpqveNfuaEJjmHKH0M4pPH&X-Amz-Signature=bf459bf51ace19230f7ba06dd089e435003ae3e84472cda92468956ef36cb70a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

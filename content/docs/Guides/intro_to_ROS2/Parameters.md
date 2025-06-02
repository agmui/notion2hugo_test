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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOH4KAUO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDmxt%2Bq3q71eIdFMeFZ1WprFKLVtZtOLKWSMVIGVYlvfQIgLZNqpkTQI6D10%2FsnjlVd2VA3SeyM%2ByKeGhTTDYGwdskqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7DHoWf%2BK6dKAIArircAyEnLh8QqNcTPWlXm3Oa1ExJ5GAUfd%2F1d8U12keisweRDQ1UFHYzDCPqSyKqjz8GIapuPXPR8lph5NJyTvH8zAtg95Zc%2BROz3o3qTBT%2F3VRSbrpYlPesxZF33SKroVz0zTEg3tbfbzw4lVWoipFpbZJSct6IbHkzv71eJCTtp16%2ByOseiZx8As4q4GZHaVmzdyaGZzC80%2FVaWBbHsf4GH%2F0IMimg2X73EzWvJbNuNQF%2BB6gBhNVr60jbx4w3%2BGpU83rJ2eoCBMJYOxAXxS12q6jNXtBmK3jNuM2OJDjkrK3NH5W0Uydpntb4N4eYXI4G5rE2oEudsY41JUU6gRduag%2FLrdGPoW7IwFoKBwDXK8KTfSTnrcebYUAO9CBGlIHCsmVGUBK7axkViA0WzLfnv8btu4b48MqGuvw488VIXb3qkmYYRPzuEgucbBf3unnLqLiT8dDU4C9yUsVxOOl6N0Jkn1XjRtjZQ1Bbdjhh8yEYrftMIF2oUjLIrwULEnTdY%2FCnE9RNrgoozTBdPNmQdZ9TyK2zNDfr2buO5JtYiMVQ%2B0bYIrhqD6JwkTyGO9LsGrINWLutLwi1MatsrXivPxWOovgShRfpMaUMaGrO8vFZlOUJQepdmDgWw%2FDtMJXi98EGOqUB3GEn2HyA%2BkQpKkADkfIOtJr4Nb%2B3oPVrIWL%2BtdKsrRZRQfr5l%2BkbSlXuE8etQumjLk13uC1al6rdo%2Bqs4LAuv%2FfIKggg%2B0xb3R3t6ckzZ%2Ffs8a7vsRnmiMy9IE0iD1T47VzH53G7Rl3pRCfHZvP59M4jNXqyv6zdDY93HrQOIOTCewOTpq4SW0cY6q4oj72zQaUxMeZpQnpMQ87MG8ikDD3ryEpA&X-Amz-Signature=8c7b71002c5276e17903d2d361854565ce077b201ccfdbf2f604da146ee7b5d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

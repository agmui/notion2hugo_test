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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ4JME6W%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDzADQGM9dU8iri%2BKMmzNRKLmo1f7vsMl8e5I3pbTQ5ZwIgJxu7nrl%2Bi9WPg2XKLLppUwpSxQkdh0ZZyIAk0O67X%2B4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7vAV32WYqS667KCircA65drOxyHt%2BJL%2B7p31X26w240hYQ%2BIT5HVuJaCAkasylqpOOflZNiiupRzTa9NORp1o7OFFsoUUUsdY%2BrioDPaj4c%2BC1XMt7sRvEYxk5xa65h0FDm8%2FWuVGD14o699JYS3%2BH1toa%2B9L1hzXVnJrCuPiuVkiSIYXw6gGuHVpJsBgIIgzdchpB8VQ2if%2FFKhjbToWIuSynvOSFeAF2MAoIe19C0JQ564GZhY3Bup4Uhtu0eZkV67hY26H1Ym7OETzUfN9rU3YFUiWRn5MflnLlp0t2rHkMMsMEpGw0302OvG4C9U9xJhYH%2Bw27IOA7hMIVeg4eYfh4Mtom8J5otPAPCH6pA1xgspoccyuaGO03f%2BdpCNmmnUkpFRHoQoqUV1ZSpexzRQJuetrs7aqhS%2FLZxfGaPb%2FKYb1QKZjpLIXNAMjda%2F955TC%2FGnB5JhjwtUBRu0P0OJ9Gyj%2BlHiGPcIS4GD6fzNgdc1nHhTfTp7t8YD%2FF8sId03wsV30wgKR9I7x3tFTeQBtEq5sOlzf4VD%2B0614Ko7gJPTpN6i%2BGzDl%2FBxgDgkTfiCY82hVEPOgGX2T3YRN%2BG1BFXSrEYxrH%2BsRzOU0oKO3%2B4PqZJZoIPy49YOIvB9kv1ms7t5RQQCh8MM%2Bgj8AGOqUBi3D5jU967llju47aO5lKpkNzHjQlrGhrihE%2BrvxIQldLXeMMZlS%2Bi6HZEViGEr6huFtlBOF4MdRtgO2WVCdvM3JVFEZndmyZlSRp2jsG2owfhYjKoGCZ45tmsSMYZ0Vm%2BjhhafUVjV%2FAEpzLcdLtbV0pft8uG%2BT1L3ycAsLl5jA3eFR8pszo3aQHUnS%2BS2LGu1ElpafDyWMy1D0SLd3us%2FhPgaxF&X-Amz-Signature=fb9346361d490e7d097677e173b91588cd1d9471939e6650551fb17ddabd0ec9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

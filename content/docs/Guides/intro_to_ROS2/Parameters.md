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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP5DBFDN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCcX4hyEGlJT%2BnSp1YplZ4rG9VZN%2B5cl5I4XGzYxTj6XwIhAN0lePLMBM73LWkkpE42rdD5B798tSphUo5d%2BXr6nVqnKv8DCCsQABoMNjM3NDIzMTgzODA1Igy3antX8E60Nw4rAKcq3AOyDMbpiGrehU0JGMz7nWsIamanUytV7RIrXeXsqSr0NhY8My%2FMV%2B%2BHanaj%2FafXSQrOIvOR6dBimQRtdoDVCvS7BWZaiQk6YPo5xIFHUF%2FCe2FFRanTL7%2B4GpRZqRpzkQk74u7Y8ye%2FiVQ%2BKKU4LL6IL3YDgU1u4doxnSwjeL2fRd0V4ircyTVGH8gGRYVtGwKCAC0zm%2FFvN9u2xSSJvGkPA114PlNggO0IHdISXuFGqXJGL95%2FwTaKeItIH4n1t9saVntRhwLB8yvqnyBgYnI4K5O%2BadpXJwbuhdL3nEAzRac49%2BASPkYIFxk4XxJnUWVR%2F2lToZxXl6Mg0CDQ85EEOsvC%2F7QSx0iPHj3O81dVW%2B0HlC6ka9zZIJuAGQ0eYBAAdCoY7pu2cHC0FWoIaeqigUq2a55bSQpUV1GDI5wUumtbSPsaeJ1oYMZRE8wQhXEi0JIXJ%2F4brljjrhl9UgFAHSmuwlIpvbSzbAOSI6YipUmlDjDye3bKm%2BTOpCOWsVtZZZJWWgCHn9rxPf5jwUBguMa%2F%2BDETdnYwbg7yHQi0DNS%2Bk9WtnuPHtGRyuqupvSUMs0Lqg2vEANCzYHXI02gXK4EHMvbh7x8EKhe%2BnEBja3GbjKU6oGUHbL49yzDZsby9BjqkATIvMAl302RtM7dsmivXB%2FJFJop8wX1n3BLJHDfY7RY3%2B3Uv2GJJAbKHQh6zuGJvxIrQC9pKyccP0C1Wj1%2B1TR5UCS3N1wwp2N7O5XWBL0vywy0xEue9nQ%2BlmLEG7tvBElJtT6DLLCW8MbxUslnAizuxo1nFJOAbAOX3ZoWYeo83RuqY1djJfw%2BoDgXJC6rug%2FBfFw9H2sHFbrxgP1D0fYit58d5&X-Amz-Signature=e19cd31331843c34a32dd2d5f1e5547c98166fe5265f0e7c7fa9953df127bc38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

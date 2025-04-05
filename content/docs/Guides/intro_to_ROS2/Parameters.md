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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PBWWH6Q%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuJyy4apM5OUgdLPNFe3Si03ds65%2BWyi41pm8xqF%2BiqAiEA0nj7dYOHT240suOTSimHiNuubCqNbF4eSF7YqMNkX2Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKeKmYvFBOT3miXQcyrcA20A7ftAflGwRrUPclz0%2FjK07KfyXs%2FGtgaKPCmF6SbpMGAdksxYc6MvLNYhcot1UzZoKGghitbWKI4Z4R60xXPwMHiG3y2Tp%2FD9HkJZA%2FRqCc2l3TwxH6AseCB4svlXZaZaHuc0apHGGu8kWqFNLccp4WaRvd6F6%2F%2BflIroGuciwltBzDVN8ZBAty8UTjoxi5%2FEH0LNPE06rq5%2FvSMzf%2BiXoXTFx%2FzLHoAXWPAjb9nF%2FVmgZfPdjVOfwiHFXb5fSZ2Gdvx4mNqyCXElc6FDiq5hhBUrk4V9ulK9qa5J%2BIlK66UkPHQxUv7j0ictMQvr6JzcfrjlVc%2B%2B%2BkgP2jj3hKGaTOW%2BWF%2FrKCkcTzTldazHoDxv7HBSZ4Rb3GKdYtaD4aVvjtGvryecilMfq4YROZsrxNXp8k1h5ynymbnIh2a7q0G8DqpLljgloI%2FUwXOLLCBTy4ruQ8mXF75BEQzRbGA0tg5UeFmJ%2BSLvy59639przGfK%2FixtkElYDb%2FyJQ0qZGpYd%2FrbWPFi%2F%2FnQgVra3I4cGyfLlh%2FPlMhsZCIVNwyeF3etKwyd4UcttOE1YPbh3joyeAf43l9gEIylFnvDDVJ%2FiGFFv7pdYjNLHrOyBl8SJcIwsu8sfDC%2FA9eLMMDkw78GOqUBwtbfKCvjBYKfsiq%2BP0I3inbB6caRtNpJYbjZ0wZSh%2FhXbdTflheE8lLNWXUvCeEdP4nc8%2BDwStzb78lEaued6Zy4moatBWg%2FfXwL6EQHDeFXktOPgIPgJDjI3LnJi33oACrk4yRQf5GD6iZaU9FGrlj5wjdRGkrf0B2MJjPGN%2F6b%2FCVpsGG2bpuo0wRFr9UYhrIIfTp%2F%2FiTZ2J9T7a7IGSnuH2u8&X-Amz-Signature=83227244828547a9e1eb6d36ed3685fd0e382e67f6ffec0a0dfb8795f101e8ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

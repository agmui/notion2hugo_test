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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X6SC7FG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICWWDQ4gytdQENSyEev8Il3rgvJ9bBYTVMSQpEfCG%2FnRAiEApNYI%2BRLq6xOGBQ7%2FCq0igJQ1HlWkTKCuu8wXRD%2F%2BS7Eq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDP%2BoWU73Fv3%2FzmlgrCrcA%2F0853HtLiBgnQquwFMhkbVWQ4vHr%2FSlQs3OJrg1WPf0Ny8RRpAQf%2BSAwBhRIEXIHqPq4F6tKIXDQ2UAJG3anZ96u6QdpdiMqaa5dKsFd6ecTWbdFll7yYXFKyDbWAdP0psNMqljiU6dImjAagjCHj6ywgvlPQzXO3YzB2yiMtVqmjviOY%2BkJY%2F4dzdBOdYYFOmqyp70dNh8dS1Gks02ZVbxIkZv5rUgpONl9TmU%2F6l8zGmVa%2BhZVNKy7lJgGzAK6ia2rdsAiljVltKydSu5W8U4JvgabMzS64GNFxB3HSg0mPk3HAGN1PMJF%2BSbysWBtQB2A978jwZErtnr5h8DyETn7WLo4TmUsOC%2B0Zrfvm1iFuG9p51X2Jpw5yHyctt6JMb8eE9Fxg7xb05m1lDpYKD1nNPYUX8jHlWAShlZKnCpkIWx66aubhLfKC0AVDl9dVOIwSnIqnuFtkDkVsty0MY4yhDhOjgN5TCXDN0gPL0J9ehFPSXB8qMIUa96lN3rmfQOlL%2FNDVk9Z%2BuxCza1F5S4oRHVLEYmSwfwTng36D%2Bt7M22SafULA2NAyvdC4sbsy8ZgdFtFjoRnnkztkVTOSLMX5y%2F8MBKTlJgsJbTvwEMC%2BufYL2%2Ban1fsw4SMO2DyMQGOqUB7ZM6ATYdH%2FmAQdxJWGWPLaC%2BAt3%2F4U7%2FphX1Hb%2Bm3ZjFFyObjAwaqUEx%2B0zOmDvplq87nNtZXNSJqXgq3x4Y%2FXWxV2IhSP58%2Fem0pM8%2Bjs6vUtD8l4BnJ2m5VbugcsOMic0Wa4jWIC86mUho0D1316q0CbbVIr7PkEyELs7Dg8FEQFl3NTDwuoNBL%2BIH%2Ba4tk%2BJIaaas7A2z%2Ffb33lW9oeyZ1GTs&X-Amz-Signature=ac55054f875b7463352d5b85403e200e2804785194d679b01e00486e0aa3b057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

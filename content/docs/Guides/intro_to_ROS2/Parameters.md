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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XG4A7V%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4AvuO66cPMwrmVIw3rVjDt9viscUSEp5jpp6y8jQ5VwIgIOjOhvnJMnVJ89xoErkxlCmX3CxS%2FSgPL556t9gQ9bMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2Cmu1GCSpu1I%2F2eSrcA46amqrp0gS4YfokAmQXZxY7J2C2qgIEyzFzmK%2FZfYLfVIiF0%2FAEIk7WB4BEGiJ5CtJeGDlpyREJmT5INn0aFaSKHLK21RZL1W3Rl0VT1F604%2BvtKjFjeVBS4LOy%2BYv%2F7myAEzFRJIPf4Ad%2BeiRqSDS7gDIxRlFAi01V1RUT5YYHzm5kr9drRUAcORSiegqWehFzWrjZ1vjTKzu%2FYMl5sAxN%2Fkb7X%2BIzTmsX9wR%2Fa6DOnozHRETevOt03K%2BaX5f13cSMHD9aLxxRizAQiHXGgyuofuhi0F%2BK9uXrS520DR%2B9SJv2NKotRd9rZPNKHym3V9Tg3DB1rRFkvqbdYs3PDlZVWL%2BVGEPg5A9haouL%2Bx4%2BgyHl0LLQnOppTZtccGk81Asn6sYdywvfmvvk74n2oh6GBJWMuJ7JualJNhyNnoUlS74VDGJEfm6939DabFLOeDy6RVKehX3Pus3TxY7p60JjcBEPerImvtdUCNeAZtj3lwBibtRFycqQVzBGgO3JmXrwMxMEcOGfp7Y8XYtTfKfjPvON91J4zcuPKLMIX4yCkTK9RHXAETxOEVnxP%2FCYiBTuh1augH4gCizYyiJzw9CgeotMLuKiOGl5x4Z5IJUHLOFxP8jIXS9x3SRNMI3Oi8MGOqUBUJflBmIOCl1hIfp08g4D87X99vrc9bge2R2srV%2FdKVY3%2FKQNJVOw4znHveZ6AQQ94wxtQjDUnKzV0kb3oxYb4DMe81hnUQCX2RiAqLvl2IYOk3FafN608xmTJD0woo0%2BUvUnNcLXMmwbuAdW3tck8JSLpA37q8fzol2M5nQQ%2FwY6M8YIFfVSSH4D1fEBtfFWL47CJTWrsC4B%2Fem113YDp66kHoAV&X-Amz-Signature=30c915cd736ea2174a244d9d09910527b7ef1cc7ae040f53e7dd3ab2053221f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

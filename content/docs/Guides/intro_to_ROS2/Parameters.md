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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z75CGWQX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDNTECAGtdnWtPLHUw4OKisnzjt9R%2B4yGEFbYI51PCT6wIgOZSey5vDkVf2rmxLTmrYP9ZF8%2BBrP3v9wdKyAWxhz8Uq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDNr6TyWjT0cSB68s8SrcA6skuipsa5JdurTOAsAJ5n2YEa5PnD6GTBrfeaKZBalbt80JHDl8ZZfzOEM1alSnQjI02YGpnUrUghYqgUNM68CElsv8L2bOWG5leeuYbN4ihgkTjP4OEOV1IEWl64N1zXBsEI6KIRnmp5BkqgVT%2Fa3muA7zNmL%2Fvn8OqNwtGejf3AcpjT1hrPzA3Hdd7OKJtYslEuGTvg809arxKccsMpoR%2FTuiaRyiHbTRzXBWXeZQZjGToiykEdWTONNhGfGQNIHlFFtfcmt4QsABZLIbOSp721zty%2FXfg2%2BI5RPZ7ibjAMxW5uPNMoDitsWgoNZybO3A1w6Qjib0cKO8eyzSYRTmb7%2FWPlDUuHkrBDfAwPL7CBOjxg%2FDHwCpXWctqFFnbv7zmLH%2FtvUIwqfIZ5Gkml7WG7qQN6vWeaCsrL6vmgEyOMZj0NZoL3qTqN1DWLbgzBT7Wv55JB%2FG58ix4PZV5aBi46NsC6ypN7hGh9sG5396mRiNPi4DInLBXP3xn33XJxdACuhG%2BeP%2B4wN%2ByP7TWoknWeTe4USMJ5igZSvQfNoqdLDP3g2otsC7akQTTwcaYom8aOWQ5t4vtcuK1SQl%2FfkTPE7sWrqMuS5kQvWwLrJJZrb0WGJBYtsuDTvOMO%2Fc0sMGOqUBqqdtH5GO9BoXgWN5%2BO5HmEKcUWNOXifaGM09FT8qh0FTJEzvdDK6P4JfH9aZapRGEiXxrEy0xrboOPxiVeBHcMNkXbCZBEkR%2FxIXjLbTSLHGioD8IG9IIrKrJ4TUqbNuQkB1utVg54eoukArK%2FRI9B8cn5GYU7imKRgnrHbPV4O%2FOsDPJPIHxhUMQIaLVOjonVgiu404bskcUmoBrJ07Mb467HVk&X-Amz-Signature=89a48348a496cebb4eb58fef014c1e864b96f6527448aca190895c0ae28bcf74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

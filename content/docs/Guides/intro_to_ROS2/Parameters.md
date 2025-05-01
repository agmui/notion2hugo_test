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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664N7FX57%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCnjtj3sniZ4kgoUC17iD7FBLygcQ3VpXRXKUfKJBfutwIgTct4EKYkAWPNe2ICqWip8afM4y4WaHP4aje%2FfOdB%2BakqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BePfg8q6zbypmSmyrcAx4WMqR%2FPAQs2ofg4uNEpwReSlnZzHXjzwdHntyUjXcPKQQmMXYx0%2FNThPudVMWkOoYfFFwtHVeZc6QQvMOQvWpDA1GAUm1PrjYB3h6wFNOGw6klWaHw%2FIVohN2v%2BAXCe3KHOEAN29L4RFmZR7D%2FdgBmsPOsZ61q%2B3nMr8MOQN%2FV6H87n0MXD6i6MMzMQTimHvwB5csptgY%2BLG5jSkoCNwUWaq0Q58ZNRersCuwyFf4jlitVnEi6AqqNh9kIox5nG9fVl56Ne8Ei3V8KU%2B0C9aDCI0zsixBSLhIP%2FSGz%2BCEVIczHW5Mt0C%2BhSiqm8TkMBwIdfe3uFKI3m5gEiTG3oIEMbzVzlafwj3MAWcvkR33w4f9%2FliVdi7LpWzMAxN4UYTNbh8aQqQ9uyaGwrBJlWhqnJ%2Fi8yZQ4QCD078R0seyno%2FK9Jo%2FlysscXYgfdGLb6ppWNSdyhtVYhGVhO9Pa1snWcTQYTPkluqI0ziA5rjsitbTuIXoqgQC55NmhNZUKfrbG7708i64IoT%2BXg6xu7qURYGv949rKR6pOH4oiECykvD7RaJEz7uFezumGI6MZ4IBiASwNRE4LulwXNATMr7XcFpZa7%2BQBdNUElAkP50aMU0cYNY6FohJEHt3FMMTjz8AGOqUBnZw2ikpsNBCrC%2FlMPPfNibgLrZsbP8bNBILhww5MwIBh%2B4pn8XdWnkZvo3Isqauwl%2F5iRQVkU09l%2FVSy%2FpoThGNq%2FXKuWa6LFDY7N%2FmDEGnozK2vYzsPSENogFCss%2FhX7Rn9Xvg2rFHJczR%2BjvuAiMGz%2FLNB7TL3nGkBAZ%2B2DeozWRM0H9loFi4rzzinGp4HMp9jkZWewx5epXe2QZ%2FdwduMDNu7&X-Amz-Signature=218a3ca859e4444910fd564380d8fd5d03111f505bb100a83121e7742df9c1d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X2P2SKL%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDhrFqUXTlvG%2FOiv7D7gwt04%2BQu%2B%2FkGeYps38VFeIvyXQIgFmz4ncDJNADN0btGM%2FZbM4Qa7qzZJEcRcXhIVfBsGsoq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDK5Apg48AKt1UZ9yQircA%2BIOr4JfxvM%2FzYXV8JGB6yKSeAfI5om12AkuvhIbPwP5Vy%2BSedr23YgXuMYK8e0ygr4%2BUG%2FIARx6Hhk63xqM0ugjPs1bksp8Kc8xDgPiL57AzokdTkloFrtej9bJUAcDUuBfXLuasZW3a6i%2FbsT0ZIPMCBcvvww2NGjfOx7T3wc5hS9wgLoYkBqa6lxBfN0Z%2FDFWIyIVleaB2ZXjslrDgK3HXhMT13JsyJCTW4qWIvZsztxF3XQEZC2ipUnSRwdY5ey8vlP6I9MeHIq19EvdgqAwVj0H3PC6vZuPRetZf0WdyaLGJ9ZyLo22Dod5SsEkaQoEUgq77ZVxWsUQ0jnbpyTg9CW2Kdfct%2F8LtOrbu3Cgqm2HjSgWp8Zv9CtyApp24sjGGYcM03%2FYGSYNAwr0KqbkG4aC5GT6xG2VdGUuzMb70PeYILY0IjyhvbvjTBX%2BwJ0Sa3CiKdLfINIAdHfkyuuBgpKMdWPpdJrcoSYxYewPYGRMDAnsyOhU4wRhCgTxVDqLpg3XwqDwNg2rAP%2B9d1bE50HbhTLt9Fhy2578aBzmFNWzwifCtKIimteqHyA9BtMxTYSr5PCHwb%2BOa2ySAEviokx35b018iHnDrrzH0grlCksGRdVE7JCv6q%2BMOGs38AGOqUBmeKcVrdMtpJgIMmbiYmOPbh6LGWY7jYBy91ugTBnAuX9uETh3vJFEoqCRy9iVhQa6mSOVUW7XLprKB1VB95gUNpILKQESzgmiWiNNYoIeJ8TfHMkIVNKn4lgXPHsqORSGPW1P9I7l9qZppX3UDS%2FJFf5%2FbAqA0vOelLBdQYmoc81AZkpTV3zdA2bXzUPTxCxccLZVTtbqzBdRTXMWiZZxi2iXbsV&X-Amz-Signature=a766a2930a7b29d7e3429d56f9bfef6eb3f58e7496e5134a3d2c8cae9af321c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

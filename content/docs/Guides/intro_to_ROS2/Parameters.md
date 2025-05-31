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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E3LISAY%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFxZWfTsNAU33%2Bs5eEi7S%2FLGkuxeT6zb1poU0xu4H%2F9QIhANRp15ByNH7iW%2BRcML45ETWN8zeVdz4EpQPERZ5HONKtKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8L%2F8x%2B%2BLzb4e%2FNqMq3APFx5YWbjvSdK1CPJE2MxpfRZmBGX%2FJ3MVPm5Y5rvBeyegHb8trioiMywRBHUmsHhrgf%2BeTM9NfX0bg4zVarjNt86PA0ITQta8%2BYQJuFCTQtlcfm%2By8GlKjWlTTcJZ9mgAndlDMmwMrMNXlbfJnGmJOr3s9U8AWjtC9OAWWPMMtBtSAhqR4KgK3xyzC6UxSeA7tPDfJEg2QD51OU4hlG9GJyM7NgEZCmLHc%2BFFLsUM%2FPJPYQ%2F9kU384qpth3f7JH%2Bw%2FtY5D7UhASzHwqOBxe1R2xV%2Fs58ZTBxlgHXhOALX%2BawokpiGqBwo93kkDC%2FxsP%2FUgUbO7OKDo6W7xpWHCEa%2BiKvnl%2Fth5ak3sX4Z5PAXfeYRojn4uFAKbXcc7Tp%2F98WbPTJz1qvCzeZKf7lEVWfgwXvUCdaP8dHUajuS6K2e3v82u8IrBr4o5wDw7mjbMbvKGgOSc8MH9xkv8auru%2Bkoj4ob75J16%2FxLisEaN5Eem3ccWaD81%2FQxMrTYbTLdOvqO4smO0UoH%2FU3fbgzj8kXL8Pg%2FZKgC0AkX71F5OSauup7VIway5mrF0lPeFlS6zBiEG44bwzVZtlHvB%2B749rhoRNzwV%2F3fWK%2BxQwSWtdcOeNNEh61ydjtjcLemciTDYg%2BvBBjqkAUxMRP41PcWGmz%2Fp97bBeGocMVc3TxWBOfdBpJDKKHGg8ckCRWwIEVZmnp3%2BBvecMfhK2BnIdcajEkZBZ7FRZxghcyQNxZFHXegjJoEB2CMHsA%2Fl9E%2B7xbAZGi0iO7zdYDv23Ff42h48hGNr1RtqfKu9lnPtxfdFQs79fTG6heALlOxraJT20NOXWJWGGOtuY1ZGw%2BVz%2FWMIHEVrmfrIv30idf5h&X-Amz-Signature=0bda4a8b3587ac5c5c484d5c10fe8074fac72dcb17b0a7ea25eeadf07356df04&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

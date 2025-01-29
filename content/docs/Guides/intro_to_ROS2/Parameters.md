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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBMN6DWI%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYxPCSmgaelGtuEEFOGn0IHUjNA42lGeUurrjFU35LOQIgAs9%2FRlM%2Fap5aWQZiwkLox8vKaBgWLo8TGjaXLYqC%2BFwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIWNgPPmLLnjVxI2yrcAwOeOZrKGn%2BcvLlvqFRlrSYyOYu28T0gcoCoJekAGa4avgHOjRZtgqANLIaugzS8SZorwND9CawTyLiWSv8wydekAEXsL01QXI8%2FZzUopWLbmZghmkJ7Z1%2FWRIl6DWwKeN7YzdRKdY4cJ59yU3qqZGXRZNLbOzd3s%2FptYmLbNUCadp1wAsIUUAFg2YvAYVMMnKHgREtGLQPtFehK0pdwWXDvDcPGerR8DhlmBTjBPpnK2y3bY9NsYJ6n94N8X00FA9Pi61tHgYFHUT9V%2B3sejKO75nA8QVnn4darnEVTMM4d%2FXZb%2BPteNFNZRQakgP%2BN2t4fOT0bKlXeg1Yewn3CIKdTaUDpEtWSJuu5KzfDDqbf07zcJlTyMNWYNkeiKSc2QRzyS6nJ96KkCZX6NOSyVU58llytzD09AK%2FtJAy0VwrhJyrtRMbrvSCOtHaJp85OUvBU3PbSGyAidSki6KKVymfkL2BevGd1EtkP5uE85ElSWU4oumNyE5LdbbvR2EQ9DH0Aoo3wMcoCF8RRKymQBitNuXJtdm3HEtExzx%2BxZm0q%2FewzmSLkIyPCYPs114Ad4ohSzpfxoTcpa3%2FRWeZ824vRWdIcEAuA9F4oivvsw6rIGSGRaKPmTuXlNkKtMLXl57wGOqUBqeGehesV5U0YvL3w%2FFflnR2W1sD1vPuH4lzd9IBatCUrz3nZ9C%2BEOVChtiCZ10Kyp2ZkGGQ%2FzG5BWydfdk6ME8Le%2BMK3vj%2Bf%2BNfqfkbDQU4jHKFSWcUiOvfM3GySPI8oihubnyDmmVxn78QV9Dm%2BB1gCZQI9Ei59YxiipKm1nHHZxaBxw67q00Y0g86QpSPtCrF9IBrk0wMEAgaV2x9EvHdzzfuq&X-Amz-Signature=31746f9c6fc269c3708a416402d3c42a3fcf6b699d44e201559cd56799fb7a3a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

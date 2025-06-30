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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STGYILRD%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuTfkw1JBWMaGks0k2ZpxBc1vxwtEX09GZIvIw8eEabgIgFLgQMk0DT%2F6%2Blphf7YI12QU3VFvpycLFJxW77L2sXp8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUf9nc16m18kttBdircA1OErj9PWoizRcw7AqIIs68bjTQEtvwSayRNfDoLYFlX%2FfsdE6A%2FC%2F0L96RvakiorSg%2FA6nR9iSaTWjdi9uj9K%2BD%2BecJ%2FWcNxaHMQfNBDmbsgv2Yjzef1o4v1C%2FI9heyOvsNBc5LQs%2FX8O7kdecweVE4DxIoIpbUDEFUhMuTG36SpTrR5LDCFOAfLAurEE2GHVEOq8jpEKftws0iC8fZMymCQyMJeMjGEbbH2Cxxv%2BzA0%2FSF2qpTKTev9eUIbTbBPvHnuoEcaKSG5Tym5hlNYWyYxXPMQcNILdmgs1MFQ2d2VjTrS18Pm%2BKzXef%2BEOE36aQw%2B8ZmnqGrd2wKYmH125u%2BZjOeHxNHuMXqybat6xKZDbiyvmU2wkqVomAvKRy7bhxFv5eyq1H3D1TRjQv9cL37fAHsO1fmK%2Bn8pyswM6CKdVtpzzNnVvz5SbKSEeRTGUtUtIntEmANrtca8BtkHbqwERFLFzmbpEV%2BtCtNGazBREjwmCU5n9mvrDqojo%2FRmSjLoLCcvbb67FIqfrdK2k%2BEcx4%2FQ3d%2BQvg0jJFCKx0UKqUg9R3vJG2J%2FTxXbVq43u2AlUR2FngCz5kFLH6Gko2VVpQYxvQYgJFcCu0ejmcIonzZZaTa3WBKSFO1MPmEisMGOqUBX1xuWFnNkHslBO%2Fy9Yt6oGS2hAoKIyVAJ%2BgeivN2SByJnLTUyfipcHBYTbuGNsXhZgt6Crxol9yjJNkCWklV6lx7N7Ki50ISx4sN4ODqYJ74W10yw9YaqFdVMPa8DkchRwaNTvmcCybNEcmYYe5G5k0dK1nJqZ0XfajXCj93EFK388QBa%2FLZ0h%2FEt4KAu7moE73FEtnwdnHqllV8MRoOEyl9IkrJ&X-Amz-Signature=4f510303114df98c3214445fdf7dd96a38f232a610097c79b3d3963e0696c903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYGLGXQB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIEX5wg0BCDcnxuZOykqUl%2BE0zFW02VqteygQReeCTteCAiEAvmrT%2FU2WFK7TSlAKPCfO8ShOhD2IcQWWZWiMtaPay2gqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxbcrO8bKofUDbtcyrcA1Jl%2Fd41ujLkanElZy8bB%2FHbgIVM1uL%2B77gtApCSBZpL9ZvZhdVoDGYRSsmaCUYWO%2FGMZi3ttSGJRH7AB%2Bjtkh7m%2Fjlekx6QiNI%2BIGQS8H1Ob7SA9NKvPHgUsLQygJloTdkhX9cwuivuscWoUxo5Vrt%2F0teLs%2FgXZ8i1rNiKB3eiWuGvJzO%2FW66YFaUQpzOJ6GLTxTirP2Z%2Fl5VcSsnXIrF34eu2iq3phboA%2FiQZ8cSSyJrSbUwMNxSIBKi2MPA116GHuUXv%2FWm8Cq89qb70TaR81iFzkyAmLzQFbYttP0Ey8EQXjKKnpwFsPOD3igqRJMuLJQ%2BlUNWo5xitIkCrryqV86pp%2BGNTr6DLWlZvh%2BAXqnPeiWSYVUisdscUmtD9ySU9yh%2B%2BhQcB%2B%2FNA3MiDDlulz%2BcnR1r7FgeudkPnajYWSkwmxLAPv4Xbs1R5k71VWdc1P1jy1coVdmoOKfLuSo8Dfv6riuDIrrpxRceEP6tWBExCyryX4hscfl58YzNk%2F3r9%2BFYDAFtOXmi1PN5WbAkixlEmuLq8vEgUZTH36ibA5DtgCRKlkPB0%2B7aL9SdfRfowHXZiNreu1ixXrOu%2FOms2T3yu5XM7on5WqENJniTDFOV6n8utHTBhLgq7MIjyn8QGOqUB2aWCCYDgJyh3DJ46e79RNLqTX0be%2BNv%2FcBZfaS2kqW0Bxvpuwrp7pLrreddFpGflPJfQrrPy76czvAJsqLpHG3WMVfOkW2LqBh16lZRtmfryeY8CWeJbgJvHCuj7WYiPWfU3Z8ze1whU2m3HqSFEC4KF1D7vespC8d27%2FWzcv3XLYNvMO1hmWHeKKMKzKPHuzosA6Hm2n7EVYwqBo%2BcOYFh144R4&X-Amz-Signature=3107723a24e7aab870d28cbab7212713538790f8c00ef0239b58307bfca93c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

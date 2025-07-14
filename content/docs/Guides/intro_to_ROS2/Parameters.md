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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFBIDGF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICEJv%2Fru1CjGlo8whUPILL44TRQ5m0DxBxRpu4nrsGSZAiEAs%2B78hzG%2Fg4NE8D3cXXOBayvKoDsdDnTUPGSz19UGaMsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLqbV%2BvFya1UuZc86SrcA5pAWjyNdo39z3i1FblWfp0PeJxLi3x0T5cWv69vK13zJG%2BLEW12fZRT%2FaEFHWuSA8OOW6TB1NjEX7q5HnA9SdsWyr0Qj0fFPiRFBIAh547pdGD8quA0zckGarqFTPAs2dhp2oW77NKtUAciQ7LXAHWBDXsZ8SPcR1GxpdeXsZO2cbzOsrVcAjGzLh89O8xfTNklVr1w%2BH8wYIe8DBlNPfVyrxXSshuvIoZc6d44z11D7VsL5boeYxIH6hQS3vxS8g1IhcoSA96EeyYThYVNvszyXuUFRh%2BKQZy1gDWlWuYKVbO7qb1M0l02B%2B8x5lBDQsmMtUMVy2z07t0u2Ub93EhOwxE7odmf4byZYT86lfMQti9UiXX%2BD2Dg7BzrSW6krvS3QKQ%2FcdDr0LpXLRaiZ%2BYt9qsZm1j4NrjxqXnYAqMl%2BgcuZC8gXczG3SX8ap60dIxVcHhS%2Fn7jtVIFwh1I1rM5BFU%2FlWvp7LtI3%2BBp96sT9OCk1t98%2FXN4vNrsxrZ6bTi051upn0PKn0zvbra1tpJl5elpbP6uhZXEHHhlbFkkWt55Ka5rFGUQUlc6U5o7IEGpa6XZhEZurff%2FiYfotd5%2Ff27W2EQPw8L8sqRnQLYrlw9bZcG3UEM6mN34MM6k1cMGOqUBWD5NRDkYRbGgX5bIoGbdlxBwk%2FKQnfPPeEwWz4ZG7PpqVh%2Brl67HnR7Uw%2BKHy83jF%2BQe5npCmMzpPWXRy6rW6IWAiWjdZspO4lpyDzvfoU775%2Fs%2BstZgBc%2BQoe%2BFAOpHwut4wY6FFtJaOihXciEJmlh1%2Fq76bmcDj0Cp6pGfmywvX0kZhvIbq6UtVwMCBKNlu0cf1lKvoHmGTvv9wy%2Fvt048jYeY&X-Amz-Signature=9e14be973c52aca3868b437f732e972cc6fdeb835af28b7998b8fe2730dfd2db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

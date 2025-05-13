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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNIOKL4Z%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCd9eCsuOvwXR97C1DAnEt5C8Z5k8RBowRBNgRZ59Lh5gIgWTEBywk749tcpfZ6etoDjL%2F7M4LuWQR8qy4JvH0yhEgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIiPQi20lX2JfpFJTSrcAzsMkLO0xct%2Bo%2FdGRncT0lTUSqpdO%2F01RhoVWJMpgxqEh1AmV3OO0yeh4NugnDDsklAXxQMvLtcyHSbIEcesTI0zHJA7XSnRNMMWI%2FaXwI4zW%2F0pHoqYpSRbbcsJ5AJljCKN%2BMp6D2JuWNRq4Ml15vbFl4OqDseWtsSgVN5rX1ShiScQSte9MAq34j3VTYaFX8mYQcsIjr2PBWHsLFyR9qoaWVTynKIQ7ijXRWV4awxv0EQ0Re4xVKGDKmyRKfPIwbO8uVtG0dN64ozC%2BPg8FCJPsc023tJbqBGjE5wqF3iaZoDs%2B96azX0gLJvsWZ6Wtq25dZpnkeVlW6PSBMM706Zm4Jc%2BqAbELbWtTWY%2FGuE5DBPVCTcl0R7KYmniQeKHUYxvQQoRiQPzYVkLYC%2B3Y6z0blpEgTqLbfXkYsZdI3A7DBPVByygFkHtGBEcgK%2BUH02st1f1X7ESfzLLfsMPp4%2BZ1VCvqJKiOKqke%2FKah46rl%2Bz3cBpb8aG7%2FUGUhEIRJtPJAp1ncvTALTazSxJYdBTysrpDeG0WoKyB6JGGd1RMo%2Ba3Q%2FYTLifRBCGtdA0SqowEGkTv7cKQlB4CbgtL8DseljxjZ58tU0hKU0mvzc%2B%2BaECuEDDKdGhOqwgOMPCpjsEGOqUBdT27f4KA5vDUIY9aoZpPr6dieDDmmel4zdSZ3s9GjcyAcPUVnLFXsZPPm%2BZtxfO4uVWuq61ZEgnppJVYVFqaVDg%2FZLDbIGNWd%2BrsIqZbwrYLT%2FyzU%2FX9x0mHzXzBZfFTvXLe%2BWXkInFT1VhqYSA8%2BExKwfacGilcq1d8d6Wp2wQXpAWUSHIRQA7RHjE6KmEqRfv%2BBOES0EF1LgOditXKJ9z390eu&X-Amz-Signature=abf9a373e68281679f2c8113c7bcfb017a3b47a826a7f13bef4e71ca78935a9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCPTB4ZM%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFn8qrd0WWxCvqv8rPzC7By4TMcwVS%2BL%2BWR2kJvnp1yVAiEA5iAcjZTWEPxChcd6EnC%2Fo35XL1WG4oo%2BdYd0HJAGejUqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhUtpis0rjldwov3CrcA%2F21bgUT76HWIEesFxBrQerjEgWxC6OdQunI%2BbtWKvFub4cPFGZKOFPATabV9OsBRZlo9y8Uwnm4UtB9nPvnLgn6Cso4UNVRvi8CZVZPnPVK4EKlvZ5GMnSpFA8oFxYn%2F%2FEFwWiK3ob9TfsyEpEJH5pGMUwgwH4Im%2FHb%2Bygjt1ixNvbMNeae6ah56w9JFCUnsiPvU3Z6LQ6qfNn2sSVb0EjhpgqPf3p7O1FEu0%2FGnzvMzaWYr0%2FuXX%2FSdsbXRwIszbvwz9QVUg1AULelcHyKt0mnbB1llkXlH24FJZkm1M27I2YQdZurm59ORCHaDTGQWJ%2Fiwb736BMT8RXxoWWUp4sBh8q1cVmJosl6PMxuNLAGpKLhWBHzk5R4jD0jdgFbRE14fyHPOb%2By9tptlfB%2FkcLIqRxd6%2FahGijaZsblgxqvXLlpOT9qUmi1ykmIxaz0O7ZxCPAp6wB3lnRgX1oZjAocvuMhzlF7bTNYCJCr3rfLlESz5%2BylMj7XQdgCu0mJCxIXokGTI%2F8nCK2KS81zeSbQf%2FVmiDkeeeb5cb49MyaAwSTDHi42QH9BsaTF7%2FQ3pVnLV47%2BE%2FbLP4AaYpw6BK1zQLRjy98u9xuhCvTA16b1jf65SHtc2R%2BofFwxMN%2F%2FpsAGOqUBt9EvGJoupV9oI8sobVuU9wWDun%2BDU77WGJOHGYszCqGiMTI06h4HfAIi52XH12mtELdj1mytdJmqLfde2bqm4eL%2Bt18ZI2RCauoJzmzV5fQ41hZAmMHw5RY70a7VAqpA9YEiRKgsCCBqHa7lEOeKuX1M0fV62QVTo8nPo5jTSRpFJIRaGiD7pBArs%2B2HjXEC%2FguE%2BW%2BEv%2Fc0N5tqJVISqMImEU9y&X-Amz-Signature=0a9bae87e81688cac5af841c84fbc24c1125910abef0779466d5b7209f0173ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

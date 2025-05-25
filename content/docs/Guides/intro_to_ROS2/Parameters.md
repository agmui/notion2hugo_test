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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSZ5CM7L%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIAdL24ZpdUM6PrIvDTUdhkvjqnT6AR1OcfCnJWVh%2F7c5AiBTuFRh1Dnd8MVQW3cbY6yHEVmmaHguyuMZ0HY7x8pBUir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMon%2F53SPqvkrHsa1tKtwDikUdnVayj1Hpza8sKvwvmonRPOoNS15%2Bbs47lkEbQBLl%2Fwx2TTYhJjRO6G7t7vrZLDJFhwYgsATJHwn%2BVvVh9L%2FqwmtJkP67uoy2sGXzFdBh4WwXihV2KzxWEMKuXbp6mA2VWlaSjEwMAvkceAhWjGI5MgR5ab09%2FWdaEJ2E1SlPLGH11tVVGuIDQx1USvTHGJGrAHd3gaSs5bl26%2FUsLDBOAVaKJHuBnkQC8B0Re5emG3spnSQg21BURXpaJ9neNBKt41fN%2FpniYhlKT1FLmij2y9dpV%2BF1J2jFX9dKHEOazO2nCwklupCfhBYCcsM%2Beq94V1jwU%2Ff9g7dL1B%2BTKESmh4YwW7OUXSe3jBeizh%2By5oLItIMHnlFrqLu%2FZ0EOO436Z7GmG%2BzATPsHUlgYq3rIZe6utZQMP3hp%2BxAfsEEdsT9sWNKcbCPNj7n4YFfndAmkU%2FxPyUXgzb5hOJ%2B4pIWyhlvjT8aWMVZ3Nm1ZQezRzHX28s9qxTbG1T5TDH018maR8oIo7iYjA2LocObNZuZPmn6je8w7snyfGj7U%2BjzNgegBWNCVnHMa8GYXuGzBgct73OpELtOuUUa%2Bl0yzs48B9BnBNIZL0eI5Fs%2BmOiib%2B%2F5y57Co5j8n9lYwqd%2FMwQY6pgEcAEnD00mU%2BaqFtgb5uV4zPglMhbplj%2Blq6AltLVovp7NISyaiTT%2FoHdTpMO8uaqYV1ZpQ%2B%2FMtOgWXlDpk%2FXOlwJUvXKleY7JsdcMEYvcg7NR9yUNUIZOekP1VZHkL%2FBLz9Oaw0rch0hV00CuqsS82ZOnHjX56k6mZePigMqVZWG9Bmp1KSq2bfosWnJA2q2iw6jT97nNwuuMqAZKVzFvszbn1ISN3&X-Amz-Signature=7bb21e6804264b1ab6d616a98dade6abe63543f63d3d2fe06f9401965f7038bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

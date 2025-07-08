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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ADUXH5J%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvw8CvOJeFCkDC8DvqiTBBnVDRzKNLpONgw9Pb9SNLRAiAnwtfQaOJrjg8lrnclKaaaZvSL7pLvili1b1sZs5qXgSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4fcNapGHtJxd5nHJKtwDmp1MJ4Sn2Lclj%2FNGiBCiTdEfLUFpXxQFbFza5b6jIBoU4eYHkXE1xNX1C2ZYrrjI9Z5Fwo4BMKYUDhpECCHaGmmCEfgF2DiIDHd9NqK%2Fx0k408uXaBsS1V%2Fp0JDrKOTZtyEuG%2FQVHINLmHiEJZ6%2B2rRAu1CH2SkGK8n8er%2Fnig9vBjkUFQrg80WtJjW988r5e0S9bM1G2LzUfGpLWfHbdWV5QFKLj3fzgB4igMRyKpCDq%2BddCHBXDWTXqrIu7blj1DUWVZyEXtZjTaTMRhjNwk7ZIkuU1x7Ic8v9zhsF4SAFDcOdoKT4de0Ihd6S2C%2BtFwrpVBVljtfeIZkqvptqwtXO%2FHsazjcmniNwl1gRNjQ5VTqx%2FPdW%2Fn3kAhkEw9LSuEojUB6gfeHU9ioIcgucIvO7WC0ft%2F0QPOCgED6Z0GjSSBHTj8MBpnvHrl0lH5mLq7D8tv9H%2FsW8%2BYv8L0loAPC9vudCBdUXZwRCjp5RMODn8%2FQZfPJRrH4fgFDsRwUQUz3sjT9uuLP3xr9f7%2FY%2FwsQaLYJwiVm9XovaLDotbMyrj4K%2B0dUAoAlxnS7JrelwSCdAxZU3UVjCcOfCLmWEz36NFqSU6PaA0JOhakgcQhFX3LScxjcKznJBH%2FEwtNS0wwY6pgEf%2BObhi4XJGh0MJ0ybi0xbtDzAsabcJeaC%2BQRrOLN%2F51AxUbgdPNsk2Jo5UC7CRqaCXntnazixi4TxwR804ctc3HOaorMT1ELvPfMsoMpaR4Q9KS2tV4KwZJdRSqmt%2Bh1Ea4dxCk2wxpq6D8pHm%2BBpgOy96Hy6pgOC3ZuxzxOi4EWVvJaLrlN58pOgHqrFn%2BhJNcL8VmNcJeBxv0ygLTRNxTqbz9OF&X-Amz-Signature=b15f1eaca5204223af4eab33e8660ab6aa40c49e534a124a913a580eda552079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

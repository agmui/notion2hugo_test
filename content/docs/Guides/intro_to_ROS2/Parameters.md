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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKKIVIDH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDUCVqC3PfBLHgSXQMOeNRFQmHkDXySh3kZGUNJ1NBsAiAVOWbvVTTaBKaKCDvx4UO8lBIBLv9mRtJFeLHWmxSTRiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRlxSeWrl9WFboKjXKtwDAmia8l2JNkAWF%2BikbpsRruniCmPKbCuP%2FpmsMd7IpxceqczNm1iiJ7sTJz8Zt7OhE%2F52KoUp8%2ByMnbfUyhtTJApO3JlZFeDSEewniTitgkfoAJYgds16IHv60bD%2FKLF%2BbUfypmLcNUdpH6DVr%2FKcAvRHXm4H7WkfjAhx6gHm3MZwKJ%2FZGt1zWUL%2B3pBCi6Gm5TNuPgFh6Z3cOxL1rFg0aoLo59xQxt1iPyvl8Qvv%2BMrxe0y4WSA5YynL4Z0sBbOjMvV%2BXqnEH6RsDJq2trMGJizux3fvYRwcv59Q5NljUJvHl5LNLIeeKEoOsRfSr0%2FXXwxCYCJGXf5gwD%2BVNaewKnG52WCdgN9yjb2C7RKIeISWwlzA3GZeq1kIoSEqm4xo2agKr517YxqrUwA6nOm7VuyG1QPAOm8UnTdbjdg%2FtOEAkjmrGCPXSE5GlM%2B9OYe3YB947aRhjx%2BPQ%2Ftzjt7XPGmhw1Uw7AnFouyNOGRf9cJrsCLZJ8ZofD5x4wPBNiD7WZ3EO0Gy9KFWtW%2FmM0r8q5c2uIMtHG3PQ%2BdI4JRjLs%2BQLg%2Bto3DX8hdB1Sb7UWiwCYqkAT7CasTpAEJdCJqWdfdAYJaWoZFQYecHyySPPxnpL71FsOLAbyf9d4UwmIqtvQY6pgEVZWL1QxHeEg32QNoSrcdkju7G2gd1Mw69KleqSpRU%2BiptzelIixrnXM6C3PHwIY2c4oRflzfaYASgR21HX1XorBOBv3SBVY1XwlpJv%2FGHgXlDG2xypyPzfy4Z9tZLMaG9n29EM4EzA1j2Ax71Z7yW4YHaBXyR9qrDjUaFp1bHV0FgEbvKOP0WJ%2BQ5wqOrRInFyEUIiH6jbGt6jd0Pi8UErMV5i9GN&X-Amz-Signature=89533109fc3738a7e409ce6a728744737a33dc182b44a88e79db6cbba59ca4d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5R66BI2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqLicV37hD2K0UrdB%2BSxPZSGQOWm6wmntX2O6oD91Z0AiBN5eiwE4pozKwie2t%2FGr2DuFsO75H%2BgxRqw1Lb%2FgW4qSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM%2FbiR3ccuERCP%2FKWBKtwDxZJyRx6WA8xWuZV8N3vGUdw6tE%2Fq2dJ8kUiAxCRv0kOrS2sT05SZW8orJTmYxT1xBTZZshzQp2mu0MbsPNKJxwgv%2FeGFDTFJOrtb6%2F%2FLwjBcwy5Wse28c8Ne%2FZPeaQKSuntLI3rQ6HxeybtH4WMQGWZKTYJlPXEvHAizyGXcNtJc7k5vJ8Uc%2FOL%2FtG7IStkQwF9im3ClXExLjm0ulRBYWkfqC%2FiKtKgo%2BcQrhqEMmFc5e4dXOUkB%2F%2FA494eXaaRLXUt%2FpdyKZ8VaP3ueEx91uDzxEr69GCI4BPjbPR4Wf%2Fa%2Fn6oal2rbgyZPi%2BLBIbeyK8s8QoWwdi1Q3y5vtI3pjE4xtnEeFBxgepAA2vFobQLfa0y%2FJcg7lVNLUpMe5H2%2Fx8VsvI12%2FUqro14PYxqr385636kWz8wXoj0gSKQwjw1aYLArxjm%2Bk5Ng5VWQqqKN%2BnHSqN4Z7YCAlnoFyOGECFsa%2FqvpwGmDfqqAH%2BPUkXltR81ZmpWrDNICwmgIWVH6fr1jeiMFXps6Hkdzqa1QesgonVsHMXsOsBw3uMlMCjyog6RLj6pIvo%2BQQabtvfMOxnQnl3LjjrI5RK0mrxPaQ4PoZqlpvcqqhYc7BQ7VfXjd%2B3NiKRXPsYNhozwwuMnjwAY6pgE%2BE1B2a9tepQ8h9VexUHSBUa6lluymDActClRVCapvigwMn0wu7oIciOefa7Dv5E0YXjWcroXUNmpiwSX7sN8%2FbmPbHhGTXTATm5jZcdVXvuTGvqn4otv1qGhIgGJ4r1cVrKZAd82lcMTqsWR%2BwL2MG0%2FmQ29tIzyM3vhcJrbXPjUhEg3idp3vHEtQPD0gInoVQ5mF74u7iiLiqMFxkui2F%2FhPRZ8I&X-Amz-Signature=491c48c172f8f9553464d13b88a318f020465cef1af85c83919e102bf84701a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

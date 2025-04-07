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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V5NLTCR%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuqQproP4xz1Z1g2j7sVeZsoZNtBrjs2WyYyaEeIfhJAiEA0viuzmShJ44gcGzng%2F5bJVV%2FSmiqVH8TfTaZccOZnzMq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKk50gIiEiBbvGsFZCrcA1Jbore%2BUydIEellq43XzfayWHcg2rU%2B3fWTylqZbyve5DwUsi7i8R1GNNw4IC%2FrQr3t%2FzK5wCOqSOL82hR4iWmzbS4S1oDtYUdDlCDKAK2Iie1jrQ6ca9GzYVyGa02lqInHC1in6yIcPgXrNtVgpGdaZINhdFWslzNsGv9g7Vqd7NduyA4xZnURDm7ed%2FSxP69DMFnSJppr9RCocr3wwl6sYPpplwXyx%2BlbUOuVYy01JKyGQH0F5z1NHtSLOSjTWfBCUHdFIoVO%2FziE9%2Br3Yji3k9ZGiWXlAcKSP6XJLjylXykFrU%2FuUQgicIWnH%2F3Or6zBkx056vUFWupdMvXU2%2BbrQ48WcGN9enI70YveNMheV6BQCHQSAFmY%2FbjPSkmU2omkbgMlPfi5W9g7y7mdn8NZeOjCRiRENzvEbvLAknPrU8L3hDUlVI5W2OrOzgeOHZzrQWg24uiTZCYwtofBocsgq8MDjlWkpAESZggHVz7GTC5jZiLCt0y6OQf0K3ZNHGAIkj5HvJk4Jz1hdcwZVcXO3Yq0eLIYE%2BAE27WhO5bJ1WY8xym2FdlnmAg0vM9Dna37En91w%2Fd9bv2IIMPLHZYfNBngB%2BKgOJaRidgrbeSOEbxkyXZ14o5l%2B4zWMKSJ0L8GOqUBkGBu9RWfpUL8I76ty7SDSueywy5oVtuRBSg6QFlw07TQuuPUYlwVGsFrDuzArX8IFvAq9bxUSq9z13xmIEKLTNXlZfmMnBdPLS8mbsbyU%2BDlBHUQ5nZvyC1zyEN0LAoup5Qi1j2cZ0Lg0Wmnis1n8Km5v%2BC4lu1pRkg5LfrY2dcgnWdHbjazajnjBlmVZrLuYjLDOznEYyftiTnzk1YHnG70mPiB&X-Amz-Signature=a0e3ba73b91ac9cfd5f36fd754e5edecfe922a614e94d246da7708fb194322fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

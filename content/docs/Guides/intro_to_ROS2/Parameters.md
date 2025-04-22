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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDWI4JAE%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIFeE1ZykjclZ4Arjo1xb0wdAqATVvisBmKQnVF9gBM%2FOAiBjzOucvC8XdsQZFesqvydtdJOMzEpslK6jzyvITQOsqiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG4JK0qDlw9pHneNjKtwD5DU7wYC8XCk4Td2ciijSSmZWnDZSaIWUcUWzC5JdTru%2BKR8%2FtRQKxN74XhE9nDd3tpXw7x%2BrU1RGmGENK%2BWJV7GJwxkfrcX453aqrdMIBFxCm6RD%2Fc7iOlOCQME0egJYpvF3dZktyGihv6q7NcgOdzXoINNHP1AY4SRZuHHf7cJesCmX37vX8IiOMBdEUK66x2%2Fm1P8sAKwxUe8PV81b2%2BeH4WMR16JmBEzJ%2BSf9BzNC8eLJ50DGqOkqRUDMXZuKh4qsjXiR5t3BkSjKJYOwTud5AxrVJpAhmTy7ZFAd7i1LXSeYdVDfRG3UcmPTzpCPqIhBYJlp34eKspxM8B1SQJMyvHUtzjyyknCUU3435d2ULb1%2BSPhdvwGbcMsrWfiwTdPjS44EoU%2BaGyXvNSayQolSyZRbgN7ui1qincgvO6lcHLbqZZVZcwCjNDDuKObN2xd8rVVBwF6kpb3v0rmXZkUS1micFwALa8F2KFBCLNpy4lXyYlL%2BDKjflukTbK200QuCAEVjY3Uf%2B8CLT1keDIAMfbwfKVduLInELdde%2Bw3FjHOAYzyXLhAZWU6murQQnq%2FixBDhFiR86kRfjwJTgbQFTOvUrIp9EKGAg7tdIEPQcs9d0XOB2fCRCLEwjbufwAY6pgEOVMVcPqROu7YfnSMHNPZ6cemGbDRfmIbtkhXDvz%2BSPnPQublrmicqE6Dfi4M3dxap%2F8aI%2BqQbnj1rCWKHJ3rsODna2yVhp9KvGd9QOV65eWi8eb%2F3R8u7%2FIuRic5QCGJlBi45CnUTtQNgQ9lT6u82D97tcq40AqTWAG2tYnKnbXkQk5CzBFJDfmU0gIDJ1RSAl8x87J%2BXfUeW8LZPQ2ItQbD2nasZ&X-Amz-Signature=fcf7937de096f2868e5bd47bdd39fccccacf4525588ea458f4ceaa7d77518746&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

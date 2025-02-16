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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HECBTNI%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDWudvg0Xh%2FkNJgcmSItXi%2BZRNEvoTWGvNAl7kCyYxB4gIgdmTKOoj%2FScoSKfUViNnGpetSaFrykIbGiRHcZJYS9hAq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJM96gB%2FhFQZ8S2leircA3pPyY8BSBTrXmroBUAYnHgVT565zd8rQgxVtPaXU6lP7P4dYtHPl%2BgM6g5BtIcaPPwsPYjGBgx779AM4qq4uu9Yac%2Bt53Z3Dy5cFw4E2iKm14UWdj6MKlVU4tpdbfTHW3D7v509FUnCYBZi%2BxAILovjd8HRZXPppT7tSdjEpZNeMcBFpwrVxiH%2FJ%2Bm1w4GKnNMkw%2Fsf1nbTBYeDNuCTF6%2FPtswK3Qh1WjS10bNpDeifidtSSITsOzjxabWkLPNQ9rdKeVVmExtYKoTvfnd%2FH0xY9rO1lOa1m0KoI0MTGFzMHRmeGAy1SBH4e0zKfLnrKwdo3XvKFFHXj7xOefDmB0oZszCf5YC%2FdwOVvvtPzUSbNVX357Nr5mrOmeBGQqygSOktK5vsFRSEvy8Xkb8YloKu%2BTAM1YIMqbZTxGYnB9VA9DB4n54QD4%2BdYCogVMc%2FrqYhQGKg2nx2oZTboNeMyZvdPXVxS0A1di2fB2lRL%2FLEST99goDe93ifzDCCDdUqDNqM2XldlWZR5rTaVvOPqAxBPQ3apWyHj%2B4fYmvvf6SHJh8y6zry9Duc3EjP94PGAPxkzTRLp%2FvERieiEgwV4ztUUBIKKZLR6Ef0bpAqkp73lWdstMBKrDbfIHWIMOblxL0GOqUBXwcqUabDiHbhWEpsmiKWk99HQootA3Rd3dS5Pl4%2F9LgMRaJD0v84C8DhhndetR5fvukrHaAaZvcyeAOYgD%2FkQxgtm8VfUFvJ16jjTE94DX8zMPAOLczDEt2PGJyyoUN%2FP%2FajOkq1ofmuxteASy3eqUC063DhtaOSKqvA45SJJ1ldgjgFrwh2sa9F6SBHOTlZj9NBh1RWCYHY%2BbCKEa39I0WTcK4C&X-Amz-Signature=34540ef6df2b3584da964a8de94948ef542ee7281dc156a9e1f8d4ab0b781d45&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3UDCGQ7%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIA2mbJNZxbn%2FmowdGWGR71cClAgVHOuan8n3jHdjTS7BAiEAsLB4nI4RWc%2Fou%2FSHolPbBpRBK%2Fm94MOOsbHEaVbeoYoqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0fe9RTTk7QEtDuKCrcA4sgl5%2BajvT9G%2FednfTzBq553g2fC1JcE8OzIwOotGjpKByGfi%2Bvkt7IyXkIq3iGR32B%2FjcuCcog9S6LE0l7QUrLnasGd8jllopFgi2rOldH%2Bml9mjFF8dCc6H91i4khhw%2Bt81kXe%2Fc0E8RvA9A3%2FGL60X33K4oJlN%2Bavlvw4Rd29%2BDhf2NN5KTW6kH3bN3RfHqZWp6r3nIUxyovSWfS9b%2F75TaAugo4cG155U0NreHyoxrZP5hZfNMYKXkfikxLr5Kk%2FbcbO%2B%2Bo2s3LmSY6DOxxL3TEXXQL0JAehUvikoBeuSOHB43Yp3UATG96xh0J8yn0PDKcukbBT%2BYaWqjFu1iWGxKqaILln2fGMuaez32Jfpkd60hEfQq81jF399Eah00KGnNtVAn0dZHMJGFAhK9HZs8aNh8N806I8wGRIwVwMC3%2FKuSp3vmKirzY7Ae%2BH%2BBPiLqUQ17fuIKT%2FDmWQhggHSYZ5q%2F4Dsosp5ZJ5HgXiwBFOeuisAWCHf5Qemv0HVuNHdbRl%2BgrSngsNqctYu4oEE4QkmUSJCjSzC6O03WAFskp2u1s5sFzRKClllDJtq2OiXg687q5idVh31YKhurD%2BL3KQOrfPKxmSHNOoLdpC0FU7fDFapjyBF5cMOOuysAGOqUBih2%2B4YyPMAUnV0Ekc1QldDe5bKzNu%2FL7UtmILg1q4pMrn61Gnt9vQ81IsLC3h1i2O6QczEW4g%2F9qgAA2X5wBjc%2FMfAh4HMzRwcP22kajlst2VHG44VjJralj5P3C8REq5fRhCLHcSUSG8Cgsl62730DoFNuWmpatXpJPA2Bc%2F%2F%2FJKUlH3ejf%2F87L1Wzc27f0%2FK7S6nXWdmUmAhRUAkd61iIdf9%2F6&X-Amz-Signature=d3e02d9b8244684b4ef1b8a487c9386681e055d43373bf7b5ca373a78389396a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QZIBES%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQC0BMkFbxchmuTWKM4QUjIyg3TV%2B5y5xV99PJ1NiYp5rAIgT6xkfyZe9dSsLpNfrYte8khiuoS2HiI01v3LYyC5GYkqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBz7EmL%2BKlTtbdG%2FrircA99WC7zyweg8ZFEgc30VJC5%2BXQ3UCrU8sGA%2FJi4P%2BJ2fkSXKwOESfnBMyABYXxyl%2Fl4Uk3M1QxFOrwq9n2D8UZiEk2nKgRPw4nlGFlcZjih%2BFW38%2BD0CS1WeH2O%2BbgM%2BPAPNTjQFhFzXPx7nZVhX%2F2TggYj2tyL1sAEdJXuryTuxuj2yLaedNvRiJMFEgN1cIdyiN6YdPTaUo1%2F7QvtZwYp1XLXT8E1rkhFBCl4bjDq%2FIBWTLggGEH7K32hPFqJXdNZpLb0Vl2VOkpjDEEcYec7xLfDAPHftL2MlvkopL1zQBnBal4zS0TtLXJhrJnKCDZMEhIoliEsZXLQPu3FoPvgv1EcC3P5inW%2BV5bAw2diXrv%2FT1CufirukL8ieALUfrH1Oe2DGEGSHwJlq4csyZNH5o1fcYyJH2FvC6MXFI%2Fg%2BFwtk7HnUDvywrLJvmvO35%2FMGDgW4ezbsvbCZj1YN7XvNKuR1KzJUAfmvrb56mBGPVR1jU4hDcB2Mjcq9VmmCsUyf2IBqbr6LRHhEGreqNYLDBpLsXkfLOheoyeX%2BDiApGDsK5gWsu6ObTuJGVxjDACzplGlMfPmfYI52hpCUs47uzGB2bacKaqw18SuOhFVx6gPsec22lydxdCCWMNOjksAGOqUBMlkAFf1i%2FS%2FPF9Q3UuVB08O%2FNUYPOPGl16PyjOeFhuTfVJuy8GwnYMRWarDbKx2AbzAPG7DDHitPmdTPCLA0%2FPPWKcw9H3tC%2BfOnP%2FyGtzTp9YcCXTL3C%2F2Wpr%2BO1oIoI479Q5dcwIZev%2FUIsLl%2FVgfSUReG6u1UjG57mqY%2FZHVcJj%2FvJeaPc6BGmy7tVMNy5cfltskuDftIa9rw7bGdIG3cYiob&X-Amz-Signature=1ee6a53123f85012f0620dfb6ad1b79692d4bea1adb8e75eb47a8baa68707d8f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNVAJUFJ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIGfN%2Bqf8yg1lqEcFBit4PfdBjmC8lxZTuSUMOSdvB2fmAiBMv3%2F7UZEQb1m946iSh0B1Gf15FeCdxOFUQ7wjmuVnGiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNwPDfmFpV3Vt1CptKtwDNjBDCkIzrwS%2FLmxTW6h7ZGOLifcB1u1yO8KTRTB4UH7yOQ%2FanKFP149Bmxs3Z3D9iiRzgs4BuXoyaB5pMM96pRNl84B%2Fkt3UDOhfshzj24hmXirjsTKM34o04plzqFQqbRYVehM1CBoEX6Bu0N%2BoLwGeK7l1vq%2F%2F%2FgcrkmHj3R01%2FtA3nIfUS3YB%2Bh4FEsJeizf50g8hgxo0CMCF9tgn4KYXr4wUzCq1BzCl3SU61EGTEbM7mgOgn%2FE9Ay75i6t3l0Vvt%2BwHF%2BX%2Fx935xyUCto9jYQ%2Bu29hrT8mbAAnJm5viPg71QZWUcwP0%2BZQkm3%2BBKanryB%2FR8HrqHy4DaAvyvBlsSAa0UxpvuPQbu7gi%2FH3MNa3%2BKOpxwOoviJCoQij9bzhKCoKxxHCU2DEbmw%2BmduoJMSwJ4E%2BhxC8OuuZ3deJOi%2BEG1uDkKjeiYwo5fFQY13aMwId7gzwbgeCXwNwFs23cXBMu2X%2B6wAGqECN%2F55fkP%2Ba%2FCVf%2BJwKg6ppZdSbw%2By6UDfmBy0BnH19BKUaK8JJhrdg7IvE8uPm%2FnsFgy1lm9vXMjNR8%2FK%2BatzLssgn2o%2F9bpFBiR8fkJBxFN2ATCOAPmG%2FiPbEIFqPa%2FgHkR8Bo%2BDRFFfcagnWP%2Fwgwl9nBwQY6pgHNjXi7Sjmn%2B%2BK4PtW3px6hc1JFYz7U1LiB%2FgYvTXyAGws2q9j03cx1syimVkBopBlMcf5hOpNeiepxKMy81oB7G6oWyehKCxC1cM94uB9%2Ffr4MCI8WkrgSq6vodo5bSqR3ETIVnzM73m2BT75HPDBJMOa7Ux0YhnoByu7FUoZCErJpBw0DC9is6hwXABOtwRRJqA3U397mfsC6Rkz1HIIielz810Us&X-Amz-Signature=807bc5ba234f9f39dbdaab2fb75c11a063c225b7138c0b5051481a3d9e8042e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FNKNK2K%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHNOG1SYEqQFX9%2Fw1fnGjdxaEOiUTEBrTmm3HAGJ0MYAiEAnzmVYfCjvH%2Fzo6Jyp%2FirCMA6RFbyWOE9gakfI%2B4uZU4qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbCanhOcYn3vJ1zHircA71a4x6%2FJt9k2eKgNHXcvnE0hPpSdrmwr2r7E%2BpBuGnHjELHiGZS3ujZxTAt4dle4OhE8DBpy2J10%2FdFIxOBwLRk3IkJlb942VyG2yHVOxftuzfu7uXve0i0IcW7gjPg3bHRlt%2BcGG0GXiD2%2F1ay5n0u%2ByO5ZW8rwi62pWwQ%2BLfB2jJIboAux9Hd9VRoYn%2FcHmmkebWdP6yHf26W%2FnDhmkrgNP%2BfrUlu%2BWCeADTsVtH2fJuc8ur9KB0M4WjvGE1dJt6%2Btz56%2BDSiIzDqNtqJI8%2Fq2eDdZwndbbBmLZmWrv%2Bbpb%2FZCOTSmhiolKsyvNVeBJQ9buY6glhY%2F3FVh5pJmInmdd23rhrzpKhN5ZUmZOjBrx01bIRxS%2BEeNHA9eVFIj6Nb77vJkL4Vu0LRjR9y6111OPy0sl%2BMOQSZGJUO2eoXiIO5pB%2ByagsXR%2BigdeSVHmHSfvXoCKvjdG%2BCJJ0UXl7Lzs%2FrS3p8iWrk9Vo%2BsCOL0CKmdAUrKc7GtEsZslqB%2Bja4Xw4xiBLVCDNALhnm5IYZAb33tmNJ5M3ILT33%2BJxpuhYEArBm08gWbZc97R25fQqEsxwrdK0mj7oi5QjZ%2FwmXcdWTK9d5F5LhW0qQB%2BnAD1uo9hrD4Q2A5gl1MMWF370GOqUBVYvEhCYULmGodR%2Bx77lp7iC23%2Bj6OlrXnn5T5ySB%2FWOeQ2J0kOO%2FAExL5GLXPVdm9g%2FoLqDprE%2BiHdCmPKk%2FNc3Pv2%2BXlnc%2FMtTpEOblV4zGX2Cm6Ydp4Kb5jBNwH7zXFOafsGq7ZEwyKDYymUrUehN8HvyxgDHYvD17IZ%2BMNfDlrknmT4NI84EkkbqRwCEbWOfbw3gjJEJzPtuZWIuSSw3jSEjq&X-Amz-Signature=81b9b173d1baa649627ad5b0cf9ec15dc333e4e3a60526540699f0ca61ebd7ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FM3H73N%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCunJa3IVNOxtwX7FPA9qZpVsHXrvNsI1Gk7LaZE0EkyAIgIx29HwCKefaQ9hBgQXMxFhWQjT1tUaBDYbOwyefN17oq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMunb0Xyio33ALL6oyrcA8nYxvXIokc0IRlNkbGlZEH9qa9w2ItPaQN4Oc5ctra2K2dWmnULoOO3DoI8TFobXuFRZyT3UothrZwS3%2Fk4XoYWyItJaxUhyhAHGxjK97n0m3S6UnVjaQbUMJRWk%2FNfK5At3o96zRNBuDkpcO192PnCjAIbjdC2srAFKKY46udgPgEg7Uqu5TNJNyXnaiAdnOpekol8okcAhESaE6i5cyyAVybVKBdw3o%2BweRw2vzQGfhEX4wGhVpn6TAiFxD7LUVN5qMVQG3x%2FtFI4mOFnPEDtv%2Bf315uuBnI5K7fJxi9IBm3jB1Itm0QVg4XPh7opYpL7nC48WsSI80m7pYeAf7lfyrDauyMmV5CTdjcDQ%2B1chyq9B5uT7tHGv2%2F1%2Fsp142X10zQnSxqjo0GSpkjQxaFSoU84i60LybprEKPD%2F4ThCPmh%2BpJFxIS0Dl%2BUF%2BdMi%2FbvDBT%2Fhx7qKoePSBrcBQ23CbcZffTraPKhY5USsS%2BZGlafMfOx%2BvZSN7RuaHgifBDh%2BMEGlCqoe9O%2FWNS3PdYvJHzNBBlUar1iWMf6gZbzgIrUll5IIdT%2BppCV73k4Uq%2FzPBvUahskXrLk2xIhpU%2BFQb3BrAfLHzZui2XInq7SFmHWNOtg8RsRutaEMOzdrb4GOqUBK5LPJpny1P92Rt6bmwH0ZygKvbh%2Bd1CmQBCBG3XsQBL0qcVKpP0%2BrBOTz4Sf%2BlCp2ikpAKg5gIx04pAjU5f4IDw%2Bs3gYvgxu4YwVWWVmCrs%2F2danYrZ2g%2Bfncy8r%2F0X3DKGd8%2FUK9W%2BK%2BKPsAWtBPLbTGdy35j370l1ljuXwFxlH08vjMr2I14oQ0KaPeZs6GJ4SjmNgjoLJhp%2F3HlR75mhLkb4t&X-Amz-Signature=c521affdfa3908863cc1ef9a973039fb9b0f462edb9c337debf9806910389764&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

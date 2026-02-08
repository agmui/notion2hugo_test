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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNR4E3CK%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgVdQuT9hpa9wGrvIbh90GAowU3vNwhFnt7gQ7fCtt2AIhANyHbr1JnZE%2BzKqjb%2FyoJLflHUgayTk2VCSRsDKnirpSKv8DCGwQABoMNjM3NDIzMTgzODA1IgyUKpVh%2BaZrzXhNMEEq3AOalqJBUE0s7iMbDwIqNeYXVk1Hi38tyhyeP%2BONSNM0jgpfI99ZJuL%2FzzsMAXWK1yGHsp%2FVzeAvNodXVbxKKtBYSBpEx2zWP%2BI082Rk69uMdqSmpoJc5fRDZOSaUMRahRPenJj1uSqrDxr4SB9l5U%2Fiol9mC9pOLpQBZHQb%2FHpVNRuKOWyDlGafgL8r%2BKE62%2FjJzPkl8c1w8jjYGw4oammVyDB3lmCTdVec%2FiliXIqkvKILxk5DGBkHZAvWTwOgMiqm%2BvSWNRQTTu%2BFKqAqL9%2FEe3tQOpm6%2F%2BjkoGaLWP9w1lCdG966vfNHs3HRt1zLDU2Ucehxp%2BhqrTBqZVi5oXUjaAG2sGDZ%2FLHRBA2Q4yYiTybu1J9%2FB84BNhOsdgdV%2F3B14EXF%2FMMCQvexomyG%2FZgMWRW9bTM3NpI9LWuZoagtKDaztkfhWGONQFxFeQJAJug36QiUjDk5hL1o7XZCXXDpSWlpIbQItFuwd32NkQ%2FjqRzgvuNex6cKRO0NwIQ2f%2FK6l%2BefflCfWEu780wNxU5vm0dlDm3UQRLeW6u5DWEhqwYm6TBUI64uDAnYU3JvhpZq4WnenSvT4cG6akGr17TZxJehgxUw%2FJ6UncUc%2Fk9SKVkKipD4S3Ibd3w2eTC36p%2FMBjqkAbZc4Ktpsw58DbmUjWgFl85qZ2WlpRA%2BVNDySm3h4Va92JPL8BA6U6wTHqqNHz4az42QYnyrjaZoJgE7DjRFowW5UMAaN4SYn%2FLb2CIJHrPMnnl8vh7h8T%2BYA9xVt0Su1Pt8Cjq7n4smId0Nemlikbl96Dg091%2Bl%2BNgu0%2BZi5jkBgnMbeyo4wWRU58lg%2B5sH8I0XchoasahODeqm2z1yHgSkusMW&X-Amz-Signature=8bd2cc7dc45fa087b55287631cbe7b6999415733e195202597a730262ec60b96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

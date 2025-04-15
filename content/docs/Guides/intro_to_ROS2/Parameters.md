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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W253RCXE%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnOjOjRgFUXNwb5gReTCRnZ2RLiNNlOkGvVS3cls8rpAiEAk21BzdhpemNhnlOJEBGznmDDnlaQUojGZZyItXpi6jEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDK4Ew6pFob%2FetBB8aSrcA3bqPCUNNb1NWO1KOuphkpd%2FG7DkT75W%2BlScs42TmBcxjtG%2BgN7EyHeQUbv5fKGQ6WuWHpgbk8gyaZXyx9r3zDO%2B0zebhKbDnkIc1%2FrSEzuLSVmdOXMV2g7ZJuQRbkylXvVxL7E%2FFvubFmUhGeZ47xo7hsx4R7GfL1P%2FlptfJHrljRhBrgMXHr61xJBupSS%2BxVDrysQEzaoYEeIXFoZ0pcO2eWEPDUy6oVT0GdjLtvflh%2FeD5FfzgWQiO3B6aCxddyFe0y%2BhFLDqdOhOZupgx80uos4nPylbEe66R48QbMm6YP1FEXsag6xNb8qThSZFtS7rhT1X9uxIeSVv9H3Tw2YYVxNYTsnLkDzq71V34lfNjrbbul5Om3R8eh0KZwqRRJsxVu2RTEdGeDJ0n4bYtLQO9HVx8z%2BVn5B3WbezdUQdzXpSZIi0fAG5RLJ3wMBZQybErx8yofVTAnXkmGCMyqgYITtMKAbK20fVlKv6nIydB46tjjwW1KlF7v35wuVZnR%2FqImaFfQKy5k9%2B3SwvYiAbCyhbgVsWVCzNFeLq1JrlQl0kbMVweHHGtkj2gb3QHRHuJrx5%2FVXvAG2DRKxWDIAWjqgZKQX%2F%2BU8VfCIFyfOwhsiJZFicED78z6gnMJDS9r8GOqUBoiLeqP96b%2B0bHYwO3YJ8zg2CgFdbI8sHyUczLpNRJqxqEqZWoqYhaB2DHpA1eRzs5FWc4IVx8dMX6sIO7p3pbsRj3MLGrir7TMhx3f2KPzpFdEKAg1NICL7Jl1YbYWjE%2BxyfzYu5LNqb98xTvSRoYjnvxZ3WcfvKhYxg%2Bz4Gkjt1ym9H%2FxhFKgHqF6YihYWv99OJWYiL%2FWoJjdHnMwgdwSeQ3Ez0&X-Amz-Signature=67c5fde60b2f3334af34998d0d5bb5d2767e67fe7266b9126cb70698240ab20f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

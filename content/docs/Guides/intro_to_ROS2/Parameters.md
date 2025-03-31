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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYK3BXM7%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGLtNTMttpjc4%2BFj2qGd6bA6gFfPXXlVWugZtpBeEl0xAiEAyVmWzjJt3%2BGT6hz%2B2xVmihL9zWAX3N6IshDjugUaGToqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFBha9T%2FOnO9SjBzCrcAz7joVlQYOZIjTG%2FNjBtJ6zgGMpe78%2FxnhpEeJTa38PzaI2h1IKEc5ipDJG%2BiKMhaZCdCSjHb0BnxgGh%2FBRBePMhVSv5Kpb4Fbl1%2FeEjHNmgJA2DCk3B1VIU8MhYgus6PxX4Mpoy3EdIW3348DwbWXGtFqwvIDIs9DsAdlbmtWNFzLG1roQ1WODCZ0Hl2BEvNyuk5SRetxcgQ4nzGKT%2BmYQ%2FrOEDbFqbp%2BrQVPcakNIkoOUPuUftKO%2BZinLDoJoYPyszEwI1wUzztavpD6hgEXh8f5MLcjHkWPyxRxpoCemaTJiiXpB3HQ0rVh91JYX6z0rWQuB7UBQhYz29UBInaUgq9K6POiRI4aodZsf1D6GXz6qBrgiioArFStOd62hihxnDGBpRf%2Bfb%2BB8oAPF91lEOmH3TQqcYnFiyb7qD3%2FqwwFSf7rle0NVlsstWY5lKeQvsTF1Z%2FHHEN4L6CUARTjMSPedNAJgqGoUQRQfznVZmXjYa3QbsDlRbCBKWn2%2FQZmJqEqLpkScRKWtVnHj206adA6TE4PZDQlpobd8paY%2Bv%2BGk4kSry3T9wQQNnvu2JYtfGhnwsTtr9fWuGqT316rin8mnmpFvOPJpl2Td1BqIs81eWz3Fu8Eacc3WQMNe4q78GOqUBeJQO9qxOEGaSn2tcrXUuZuHZpOEb%2ByXs930LAVprc%2FWqWezF8fAczm1JD0SiegZbufWizCNHAE0TKMdNV%2Ftk4zDhWlu3sOv4cSWJLu8t1lqsLHexh0E%2FVsIEBoWjaEJEkJ%2FgztP%2FWpwL5yGdqRzjBv4YsIDlA2V%2Btk8X5nhwog4ZcNiYuS3KAccCOq5%2FqLdzcdhOIami1NH%2F8iUbSabfDCcKbyIm&X-Amz-Signature=1168562165c4391f52e3c63e945bf383715f2068e50cd8057582ca5e57d3885b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

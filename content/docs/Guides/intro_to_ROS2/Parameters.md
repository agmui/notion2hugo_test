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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6GDKIVS%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8Ey%2BIGjva33UrdArO7LzI3Rym3K58Lhq4y28xcobNlAiEAm%2FLK8AliipM5Zo9sl00ElHpKiiH8IqWpEwn2wqG16cQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6SFxZ5%2BlkrCrxxxyrcA3ZPG5mfAsCFSl45%2BgDSO6T0dIq5M6rMl95SU98jHVL5jJ%2BHk2HI%2Fg7Uxpyd5UG7qNg7LM55BLpI%2BCqEvqGBrZEAqXZC0PkAe7HZojgnX11F2cElfI7xZEFsjYR5qCu9WlvilL3y4n5Go0GAt9OrSuNYQYv2j2ix0ZJL%2Bxg14hLmeeMpkOPtLNkFxobhzi0Sq7TeYyLVlnioKAGFStgjqwY5YbJcXUIG5IEcrXil2feWEWQHP1QTqBRdJi4YfSpEkYBZ6R09TAUtDmoF40lJpi%2F8%2BjA%2FBs6NplCwl3g7yFkP%2BFPCtvXTn50A8ztanoLHV0l6cOqQKXhEpVQ5T1IGFBee%2FEhDIcg4GrxByohWFKvw08ximqYI6c8UIx4%2FqV2n00t2AuX9RwHNovnml7OdgR%2FmAnfROTXAiKSh%2FFxAew%2B1SHHqIdvoQqRh7twK85az0xwuvHNgLpMP%2BX%2B69g06YdlV7BtMWmHT1pIe6rr66zCXczUv%2FJlzjGwOV22vdFq7urQrevvG5A9ash0%2FQTwjkZ%2FWh5uP0Vs6s3BWLPPk9%2B2RaWIYqnRGjaY3CA%2BBe1%2F4ZyF6W2LnlmylByfpsr7%2F%2BJJYgR8W6BWAavD6nLzY0TYRMivTxCuM5eRWUwsxMPXR8LwGOqUBH6EyzA%2BssGnKK8INKQGcZvIic%2F01IV%2FH9nc97Yqw8aaMZbx6fgKsdbRkD3kbSwo0uuypyoYPgbkJbUIPNDCRwt2IYjIqhtU%2B28qG%2BeDmFajPDQzRshJAjAr77ZxXqfaCvgbSSsM9ffdOhsvL5nDPVh3CvhvbAQbcwzOks60GZF7QMZXm84qN9EoJ6nk1bdYSUbQVIwR0dV8SryjeBlC2kv%2B9Nk2z&X-Amz-Signature=6e21fcff63b813f190b76db5016961e2b990c40eb998b34499920de3e458ede9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

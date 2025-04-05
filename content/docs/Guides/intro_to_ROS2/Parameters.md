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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S75TCCT%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUl0aeo66yBRlFOkgIB3zLYovz36NXW6m51kcS0mPJVAiEAjldAUGEEn80wkiF6T1rRDqNOnURrC9z1WLXx%2F9W2770q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDAcnw2CV%2B8T7fL2ZyircA4VidW8K0e6M44FALGmlMhgPEFIcDSfPSGb8iH%2FWkqYbeJYV73pLi9qaa3C4%2F4zdh%2BVUIYhlL4%2FponZJuyccuGIKo9kCkGHQvXvZ0oWef1zKt0LOa%2BjUluweS5EatowXlbNEixs4IU9vDORuMO8gEFcaBDK9wHo3Qo%2BWQ2e%2Ffhyp7dPIxJ9WLNmvjNYwxKtwUeM82XB9yFl%2BQC3TbjqDlpuGcY0W0apAYFUoa3siB3bChS2gnmWJ%2B2Du8XGCgrl4iH5tSlKRAwbn5rYv1HPluWkdrzd7cXID97%2B%2FczVpOgSoYys3IKNpdvBflsd2ictD5l1UjTpUyAi0WrypoIPKqzqU7Q4%2F4jn2srn0pYIKWeyoYOFS6fW7CR8bTw8w7oJD2Fcpy8zSeWChRymdnjbAtIcsCCekV3qdxSOpGtxxNNgy0HIiEhCZSKj0oR9p3gnxS%2BbIB0TcoK%2Fj2uow4k76zPm3kJ8b6i%2FDvNYZMD34B0%2BLhRt2aw5ggxVJCWZXXe8df%2BMpiFL69oZWa2%2B2K4EH4Ur64one0grJO2qPfXoVcLvqacwGHd9GHY4E6tZoD2L4tfJ0VSEfjLZXZ%2BFJrM5Wvu7RxOzVeAFFKiHuPbLKWOYzBy84Bidcn50i9EMiMMS8wr8GOqUB0AEmGhWXM0A40LpH5OIBpIMZGbnsvyPF2DXX0txqM4%2BzfUcpJCekwrmBzl4eCOr7pn8LFuHlnWPA7ZkSnKcPy%2F2XtHm4W3B2td16acujTfo5s2yf9749%2F6ICd4Ul8%2Bi50wzeje36uUV5S2Lt8EVYTHzZ22uUiQDD4YBZ8x9s3U%2BZpps88bAV11LyxcQlW9wDoMSKtmfZtaFs%2Bf2V4DOpcorZtdyq&X-Amz-Signature=a7e73c1a73d4192ef19a20bc79f5fc7c1dfe3eb15670f02eed0aabb782cf3819&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDHTHOOW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeUjGhHJzOqln17OZCOLYRQfVaMp9MoBZivBwxVscCYgIgDCR%2F388ond2QH2PBhEQcqgTPplvnAS9FIgsm1%2F12iagqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxXE%2BSysy%2BG27m3qyrcA%2BjdoaIDtElxBTvOdAV9FXsd%2F8S85mrMKFLmrVPXrv5dElAdudyJI1vrtgNW%2FeIjSkAYVO%2FiSYniUl7dSrG89kogWQR1G5%2FJO%2F725TcO%2FYHO7L9Xl9aV8sRyySqA%2BSqPeDiQk2FgZX2DZSWLhp7k7%2BMdE4uX1Mp71maselT62Za0R0%2B%2BdeiqV%2F5DHaAtE3zNXtRn91OmRU3xPYHtgG2NpYB1s4HQe4%2BFJmo%2BPwxL9TQChmdgnPxgIaSmXU0fCwylblOGCUDRL0xC8fW7h15JdVkQhLzyZuLlbNBqz6gbt%2FMQxwo0sVA5hXdLPAKuUUimye%2FpGwdSzDn7u7hT3mR7UDaJUOPyIa%2FxCLHu3gWSJcavvYh58vV08Uu2Mwbb0Px%2BLJiwRI0ADbksj1ZF9tDWQ10HyIfqC5Q0LhEVI%2FSZ1MoZRTRUC%2BWpQzWaBXrt60UrdmpslH1%2FN1w2xKU5owaJGd3%2BDBQscnLRn4%2BoLs1FgJQbMf%2BD93%2BYU2QiEHt3oDslo3RRPzx3jOTxnE3QtaGGZUr6%2FXI4NAKVzqLvBYEsZKsNp%2BFt5tTkp%2BVEosl7azrbOfWSPJQyLPAPezGwh7%2F%2FALeocFmrz653JnssYocZes2PU9Dcdtc%2F2yiFFSZuMIm50L4GOqUBGzUDrMFGmza9AzwniKTR%2FRJt2TDeK1yJtZtu0%2F%2FTQxSIPq8qsrKWkgvaypM9Wt4%2BNihO%2FJzRRuEwgtAaMMwZgdLBpKHpChlTNhaV2I7hxbBqNL%2BIwkaiVGFhM5TzKhc5%2BYGJY34f2N0F%2F4pmmycZ%2FQW7462QWKMlvqKDDwZ0DyUEzcGkL6zAdhN8pQ2rHeZF8TUEvzAiulG%2FG2dz030HhuWemCnH&X-Amz-Signature=1ee7e2ffef70a915dc5b3dc4e62c1c9310cebf30620cfe10cdf354cb90977534&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

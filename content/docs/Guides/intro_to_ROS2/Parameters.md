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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA3X5SUQ%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6JB8OGW5mvIS6DwxSQQB6p%2B7PEqghLoSLM%2FX3BGEamAiEAw7RN4wHf6GzEeRhf1FhUFbGb8RP8NLSilgCiFmo9Yk8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHByUfGSpKxoHNZk%2BircAw6JdKlUxHJ5Aq0JPiexvspiIF8SYwFzAnQmG0ltm5njs1SrjGK7mvQtjcAKlE5wsSdJ6adIlugbidtztmwSShm%2FpfOpOhRhym7RTpw9wb3mrNveUiHQVBuUtJgb%2BLGE6C9BlxFILNE1BA32CLW2oj2FUwqAlhBpQAW58hJ%2FY2pwvf5%2BTklqymBo6zqYaax0KcakA6FcDnMbezrP2koiRRSmq58OCtRIiXVzeWi%2FMiHQXAGOic9YhyJIgnf7jJ3wvI13TaqU9jSv%2Fbty7EXiHb5lvMj0XR0w23vRQ%2B0am7FkL0g6rRO4OeKfqm63R%2BxJ%2B7HWyrlEObsOtm4hwau0jYlJjoSa3hCGIaH4o3lwrOeELDYesAazGoPdi7WcRu9nnYk0fTlsO7U2UEEKZl9XEKI0H20EKSyCZB7lch822%2FZNibP9G1VyJJpG9GNJ30EgQbiOfnL9wY4OFB11BhI84QSsDrqbIfxNO0c75QQDMtUN0nnFoOh%2BJW9gt%2FEDJs0i7vMrFVOTvyS%2BZr0Bd9fJfYkQb8M2VIwWVQvNKFE2wRiNmlromV52C6iW%2FJws6et2PUDqrYvFUZi%2Bkju63kRFLKVi4qjQbH4RCzwvtOpEodXo453n%2FJHh%2FdXMP83iMMCzxscGOqUBh98E2fT%2FBj4BDKv9qZE%2B7iBwfEHqXjUusfiuOuiLkuGgcnbLdhAfEUp3a05vBDL1x2VXrvuTxdmBTQou1yR9%2F0e2C4iU1PY5ueWTW1W7IlvdjgQPjGG3b5YrDqi71w7IaepLRYPiUfAJLjQ8Yli5tkAwHxnxKcoiUMqH7yW0yFBru31WIbhhHsyy9zEmnhmypqYWk9eozBPO55jPN7z689Kg9jby&X-Amz-Signature=9ba927b25c768baf20a2288fb9c7ac93da93846cbb53e594e52f142534371bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

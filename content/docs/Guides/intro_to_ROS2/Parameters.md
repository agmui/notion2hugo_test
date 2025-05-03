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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXVRT7AB%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCAVHcVtOTFc1pyDwXhQoOSM2FBwVgmBuNDaOip22BmYQIgRHyRqCQDmJJb1BGLUhvZ1ZLU4nKX02z58AGM0R1Gp%2B0qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNW%2FNlULU8yS7BcTXircA92nSV0y4mm3bIGSXkVqxhedA%2FUZRrwk4wOqGGRqFzOJPLE6HntRm7QxnyJHvXH4oD%2FoRdO0u3qodeHtQ72odsJWABlBVVX%2F3F3KUHEK7u5lF%2B1iEnl6ItpZ1a1apJzIbAOQ3lPSrKmsuhpDxUFDYiYcbBw4MwciG4bfE7%2FOcwAGAsRuklo6Ic6B9n4z0rJw1k38Zanki0MOb5sEm23jN7IzrZM7cx6uiOWCIJQgVv5Fomnpz6E89WnSXRjjWUJjISAPWDodU99LUW0eIBCyAoRpJUpCN9nz0gKxlr%2B2nPYV7MMfflJmXk%2BvzNi%2FR67%2FhAkZ9ofTWhApP1aAKUo3HLDbqYvp%2BiCMjomhrcDOB5dHaHhFn0%2F83A4vPvvfU4wFlm26YHFQGC8rEhIVxcdLyB8BdeSPUqPiClJvsvwWMSOwxH2szYGPfKUz4xRAT66tU8%2Bpz%2Bw4C3F%2FufSj%2BK2Kx9GkpdDSSL0SXWDVfbO%2BhLaBuSd7O0jAfEqBQfgdP5PpOXSOKqR1TIn%2Ff7PgfAvd16Wyqi8b0yok5xfmz5tMwOKqno89ZHoH%2FVgrV6xfaBFiNo6wwpONKCcHJWwFYOXvIPs24PrmRZdKjxxc7KyNjXJjDBerDSit816EHny3MIiB2cAGOqUBtbBf3GOdXMvt7zSu%2BKl0lDnf86htZ5u1EF62y4KNoGuskJeyNIe1Adod9P5Trj94Bxtfmkt7ch61i2%2B4yOpG%2Bojqw6usL5rM2sijxI2q4ZskTdF378O2No7h32sk5oKJOcz%2B%2FKpsbrYvNhpAnDGgq8wA0xsPNo4%2FgIYMgrukROkLFGJEbKmtwZzq1cH7rWs6HBHmo2ulmPOojzP3Qo%2FlKHMduDZn&X-Amz-Signature=df7e742591145cef2d74be40858f25b6f48764a32e219872bd1cc68c1e6f239b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

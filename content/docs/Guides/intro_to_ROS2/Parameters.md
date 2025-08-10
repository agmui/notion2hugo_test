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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FC6GE5J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1sD%2BPhLC8j0hqisAEn6zAwvv0GZt0KyX1GSRwpG%2BazAiEAnLaTO4xGxSXePSvpIhBGVEgksXUUB5s7gKrVXtFdh18qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDID29LnQXO2bd3113ircAywUwX39osWfp89q7hch0SjZ%2Fm6Z1c1%2BuPdOcrEhx3LQePhbCPvARcEYPq3NcMemqOes%2Fo2hQxu9U%2FErfiLBbPnsoMMKOMOHU7dlrfhyufnYzMuRIvJYmv8G5mfrYEdXpERxRl4elHyWJeH2F%2FoGu0oT0PhilGD0LJDqLIEqIJxcLzFX8quJfhcoPNi%2BGUvGqbhYAh2f%2FM1eb9wZfq1I3tTMjyzMNajYbgDQFNYf7nCZjPRgEUebTPxJm5uJeGaEt4YT3BQsawHMrjfOn1ItYoOAJ0IayWxubVTBEiOvb%2BjcWGlTTBHIrJRgsbr2jHiNg7BkrDUhQNyHjbab0PnoD449uNL5QlmGE9zwZvlCntT8CE%2B69Kze3oQnMOaRwUm46GWG6%2BzLeNKrrhYlquiaoF3YRsY7yUOvZioJGroch4LM0qMGvVUjDPLwrAof%2FiO9elUmfWxs%2FCs24I4MFDJNX9mURL0r7O6H7C3Wlr%2BcdrQifKE97Fch96L9FChOPwJ%2F1Jh4VcUb0fnlS0wPVWa%2F8hEhEAq2WcGiQHyaGSMnv5p5wLk0UP%2FNR8PjDVOJy6fvrKVzSg0AWTtS5T12n1YGI2%2FlpZuYJKfcuBc79LCLf%2FAWipUz%2BRKQPmPn4MdtMKaY4sQGOqUBTNsnixwSB8CR4F5Fd22aKOb4%2FEdpo9Xxz8Qni0NJndv793oJy%2BagwJEcSsAPp0lwYVlvDHhO9x5SjNrC5KlbEm4JvYDF6B9iG34Td4mUh24ye%2FqxrhdKe%2Boa2TTkHKCqZki6hOy%2FMZG1MPUUeplkB%2FyrWQwV2GV%2F%2By%2FZA8CZpI%2FohZDkm%2Bkpe0k68OmeKHfn41zBi7JpJPZ09owCXCHQ5CSKmxf3&X-Amz-Signature=c666445f5b93dd5a29f1bce6ab9d2a4615c8a5f657104435238165a222ffeea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

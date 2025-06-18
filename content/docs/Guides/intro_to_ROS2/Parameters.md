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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQQEP3ZQ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHQDqawAcIGyN4UkjnJD158Mizx9%2Fen0rFZZAFAhzX%2FwIgGw36oUoZ8k6%2BSDkR0JPGl7eoKn1UVFNchVWViV1gaiAqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlL9cTz%2FW5PUsp05ircA61EMH45YLCzjeo93HDg2ut%2FHoMRbMWwf9kpnBZZzaO4GLvZk%2BzewFga%2BO6SAhRKxkatvv%2FbdrpzOvZeJufpnbg9HT1LDvpVHFVeSvsUX8Q%2F0mwslrNjH1q5azGZMZ6QUvlDvsjnDn3U8VFqxRIW50fXmz3xBx9REpISU1UI1j6jqzESN4H91VoqFIK1vedWRN3nPuWeoKc7PUEYBBUSdZOmoO3XqAEvUTGG83u0Bx0elX4r4CeNSDXu%2FqDfZ%2BYGDf6DZX3k9KnuPEaTXDAWtzn8q1joifmHvpc5tCutW3BeG0EpI%2FKK13Wti6PpHNv%2B%2BN0BAGkd5h%2FAyRS5M7wWPA%2BFr%2Bzmz1H7QYCkJo0mgjUaL3Sanb7hjR9SvtLaXOI%2Ffg%2FhjQocEi%2FuLeE%2FNbIlGNrQQ%2F5cviuqaU3tKX9DyaczjLPgAwnbeYfYunFcR%2BM7XcDhh7tXbjchEE%2BuYqv0IDvZQI6bw5aEWIKXo15%2FRpVy7f%2BkLOiTWM47bVs2XaIRZ3%2FC7vfRLRojSpfIAmojQfmOGExy3QWP5tC9SjZwWwd208usnuZyrIOZIJzA3I4%2BhBG%2FEskMmy2hqlgdV3sN06U6RUMlR5QlkKlODIcy%2Be7f42YWEFa60DRnQfIFMN70ysIGOqUB4OJZDl0IpZA1zOrv29XeBng2FKcvmv1AUYYZLlocQYqFC8TQtibQL%2BUixrZGwTZM7srM0mDwr%2FFgWogy9VzqPAQuuHmKN2b2lautkijWJmx9PGOcqQx5SSnTquKsRznNBhcxQ4peuA55jRr3vSknUa60XJfzJ8Tw3i4Ji8Ndgl2G%2FE531Hp9nnoo748Ww26Ckhzq6ThwLTa3hUpLMFr5xQ5Q0rHx&X-Amz-Signature=47f92141615b412c9163b8d7d76c96bc4062cff453a589a244fac289f05f5e14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5XTNH7U%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxH%2F7nMfuiWqAKSaR9EGm%2BJCNbcmKY79utiHpqZIw2BAiEA7XK99wvdQD9jbjEd5fZiTQEdsYV9rP9H9TzM5uTL3JsqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlW6OObjenI5i5BASrcA4KbUJrJO9RVs0YT4e6rFLpD%2B3omZaCJImo%2FT78%2BkwI3b1DP1i5OFffoLeihXinJ8c%2BkaMGAtd6ePbkDTot5ndN5JftyCKALyqm3hI%2B4sGb6VwxPFENdwQk0IXNUqt%2FVTwr%2FZUb3BPU9og%2B2MQpblFqa563qKxIV08cFVABs89xxPC1rANP6MHOrnWgGGR%2B%2FJioFF7sLitYr8i7plyABZmUwuhgRJAsdKXc7GB4w54%2BgZKHVgQB8xeZfdRK0FQ8XiitmXRlJeHvoe6YmDqtGGnKwFNMufKQ2RXMy05EWKbSDw9ddMuvlGn4BL1uFtEpJKix9mb%2BOrx%2BPrfhHtj99M%2BBoPzwurEjenO%2FlHbezZVSFv9RQRl4z8df6TaSwoSaCkFvkp1ryOFSpEqqTqtX0JhHbt7DaGNNuGTbFkWnnpF0e0HPhJb9CJ3T64%2FROZllhaEfyL3regeIuYuVbVJVSoMsko0fuasAaQeXJMVsVdPuz9i%2BfkCrMwWFRQs5lVqMPyAqUDkfvNWRYxpH8%2F%2BT53txs%2BeORRFxfw6xGBz4cI9g1tgJLZM4e4%2BY2jB1IqlK6Zl0T7eXKoVKMVD4P12JgwShzAeL4JqvqpFL58I332zMyhaK0T3dNZt6ezFiLMO%2BV%2BrwGOqUB77rbJHBFgkwyJBgmR9RCR95EPRo%2BKMzC9uT9JNQ5us1RQKizib9KG6bxvF5E8U5Ms59PoKTGAYYyVXN%2BGHxhBBcCgTqoJ085zzudnwowR9NGLptZAFjVH0slee%2B%2BKPLNo42XiJSRRoYULMnqVpB7LtSz1u13HoxFR8YX3tMlRDwGKv6KdkzMIJXPqwmtPCgLQdk8TSNw9DK6dTRVeTJ01mUdNY4F&X-Amz-Signature=59e81fa83daeddd2359ff5e20d81e96afb77f87c61112eecbab689320710ed67&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

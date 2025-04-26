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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DYG2MYN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEd71g5wp8htvpN8LMDuapDy9oYVaLQA6%2Baagn6wlCDWAiBjuAwOqIer2iTH8RQtFrekBVMRwiM7UySawWWF2Hy6dir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMZcjEnrt%2B%2Bdo9U6SXKtwDBfLCdtDMwjR%2BgvbKapXqT3SDCEsMFrHslJQzWfAa3U%2BLzaXDn4ZQzgP4NhRetJMB%2BH4PqNzFTeK1zqQbhfyMgHorEiSYR%2Bp1WZ6ZXaSt5f26XLZDeGNttO7%2B%2FmpfIULlt%2BVL3AI10OOqY%2FfjTOQkzvjZZZvuXJe3Llw7bq%2FFkYkLA4Ef0cDgjNdkj5hOcWI49We5t8EimLGpn3%2BAO6siDTczvC6ox1iAZ%2B3SyVg62%2BdioNbzrubXA2j4uvW%2BMVq%2FP0qF9ErLEb28rxngVEIiw55atpuvX7k%2F9hgf7v1NlOPmdV%2FJh%2B2d1UDSPOP0vDYTWeNPAxCAwE0MMYYD4p9Ax0f8EEKdp8k0CCQvWaKW5PJVQW2LC0eWZyLZwTVPxKGUgy%2FhRTYk2bRjrQv0Uh6VvfzTt%2BikDQvvGr%2FwNe6p3DDNDDJ5p1RsAQ0NZHtgvTNSDFvtucMFuqqmP0RbIstqf473AUgKaEaOF1fwuoROoAa0nI08%2BhUiDyFkT7kEWzkaFCnfeuo%2B8tsIumlmF2QGfmF5cQceL9ua6Vp0EH6kdZqzekw1jfb59RXh95Sk7nOZT2pnwa%2F9KHiJJDaBE5ef9MWlMT96ocM3wFeTT3%2FTIunkB9RAx3UP394ykVIw5uazwAY6pgH4dciECbI8g%2BMkWMngwrKHKhDwJCLxolIn6dY93G7PzqbX5NJtR%2B95WnA4P3qjv4g4TmH0q6WxMq%2B9MKC%2BT82TTLo3oqfJnslxDjo%2FVEcUB2LafYH%2FMy4pd%2B%2B2%2FIGAAvbEXlJfElb%2FBQcutVIJpNbJ8XRfg6uqsr6dBv7v6I5aTNS8X79Q53bDCAPuNvQlyJyXxuUjz%2BeqaTKfvfdywEiTMWx8Q0bJ&X-Amz-Signature=6a9378d62e7f8112322dcbbdd1c2fff1c24c9c9836311a1b284134c2ce5b8d4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

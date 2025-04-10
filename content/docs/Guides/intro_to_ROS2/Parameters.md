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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPBQQJPD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCVlpct2jLtSZxo1yfD0ca6A2P47gicTGsRViy2p0iEAwIgA1I04ASUVq12WoFQJf4VG0h%2BcFckQnd8hgoEevXxcrcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeNV7sPadsMSVy4vCrcA15lT2l%2BlW5rcqiw2c1hZiFNQRyKBE7MBkgP9NQpYeuzG4WnEQWSehjeS8EOWyQQuihTYKIFFEYZzolEkudQQp5HCTDL48XEc44CSypd2KPDTQxHavlegedyfy%2BtHJR2SVeTBd3bWSI0yMkM56rdJ8k8zyK8VlXcxNyCefodtsO2cBFYNDHs7pWiwDEXktioo9A6hJC0nurumcQqOuGDVEOMI4By8ERyBJ0SdxemGdLGwemi4ob4iIgCu7fmzqjlpvfQFG7AXQ%2BXCeR4FIX5zp9Oi1lR%2FRQHM9yzNPU9TLX%2FFNewrLjlWb4EWLXkc%2B4CCZdZ7uulNpV4QojW94PIQT%2FTbrVuw2XOtVdqR2fV6Z0LREpunmKtx8594sVYxxZWQ0IIlcBDmO0c2GysuaxK8Z7vnsB4knDGKrIEZ9ptETQhp1OMsPRBBbyeU7rjsjaueQwOuO7Nn%2BlrzBqWWjxRdg%2FiMQxvOtuFT73IExwxYiEB2qYLFTljxUEZkP%2BaZcCW3EoooNp5H6SopvLn8gJQrsa9XX8%2B9wgGXrZkHcrPh3u7lBUSNd5XwXJn9v9zk0TvCDkq3o2vw8M5bVCDUcNbtIcEoUMU6cB9FAMZO%2BpwLSwiqxrK1jJLCyrvObcDMICP3b8GOqUB0r8kNlJKwzQ2q%2Fhzac5Zd3aqkYlPb2oZ2wuIaRwbQc2o9lBcwcnmlesyUXtN4Etm5%2FtItZFhzFzpBhW7XSzgxC%2BsAfkcz5H0iqoPXuLTntO580lOwHzxev2x9OxuFJwwyDwab%2BfO1vW9bVu0R%2BVVtMj7HNuJWp%2FLSbGLHzdve%2BO2HhGQUddWU4Rivg63RYs%2F159OpjbzTuFO6XLFGYBJI2POPwCX&X-Amz-Signature=341d0d0d39f6cb436458b6bf17d72fbfbc8b34e8c5af0bdf3fe053fdc57ecf72&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

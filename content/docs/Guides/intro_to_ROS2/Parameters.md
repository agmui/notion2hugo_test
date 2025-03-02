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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F4DJCDI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGU07oK3ssXViIEM81kHSUDiVy2%2BkOlcvNnbZ1Ht5x0%2FAiBUlhsFOE%2B0HMopb4UGzRNZFe2hCxPl7I0kVtkb%2FsS8SyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIi3lUOtczu%2FJynVLKtwDbuKQW8TLP8md7Q%2B%2BH2VnTlw8baEP5fGB8wXfKzp0QoGZzYVYA9XO%2FuYq7jGg998377DW1d%2FKuHz0Pe8ZT0XvWv89xcOLxxvYunaY4wIfxxBD7SZw3Vi%2FuadhyJ8mz6a4LazLaNavVtzAlUNjDpb%2FUXkDnfVkWQudtvkLpdQV8knMypahyLHabYuYiuRgaI0jX8V9b45985H%2Bfwv254%2BRt5eUJ8tebTvgON2%2Fj17tI3wNbDajCWpPrjhQXGPFx3MpTgeWGygQGShN%2B%2Bf3skNVKDAgVBgoqM%2Bdz55x%2Fdc8W2Tw8%2FUwHlwMo%2BVSbAQm84%2F1H3laJHIo3sfzw7Lgt%2FgbI24CcWJ50G9UkY%2FrM49FcrVVj5D1VKRKCuEWUNaGy5K1XUaZwWhXHGLl%2BO2bWJzMl4t%2B9tkHnwSsiXW5Te828l7EyUtFbZ8Lo6XoM0D1dBq%2FYue6czkSV623EoLYqEsj5fvkP5lxRXEJlhAK%2BUVZe8uGcohld%2B58tzZA90ravWNgjVzp00qTep6fYEz7iZhId5GievbxWpfo3WRfvQ%2BEBYdDFiSXSn8InPxUNUOP0BGLwRff%2F6ie9e%2FMjx06K0X5MvbYHaaiIhTraRrVbXkaq%2FLv3kgKvGN7pOmCX3Yw39ePvgY6pgFT63kqRTWxvQ7aoXNmBdivoZ4SkgL7q1JBtmhobG%2BNBpaKk%2BdK%2Fm4ZA%2Beii3uOlhsUwQBAHFsNQHVLwWWaFUSepBbZOdJz2Lm4hTOQT2yQ96qhPugY2REpEIV0%2Fvx53zUmspu6MHU6DDQvXm6RoolwGZQS8ERYB9GnjLmCH5Cnyk0BXFp4Q9KyXMR6HNBfOw%2F1U%2FjI1GV5h%2F%2FhsNlGNk7LOa%2BtD10J&X-Amz-Signature=2a023ecbfcfad3ae4c18f670326c480f496c66edd6f9bc03282cb8fc9290f482&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

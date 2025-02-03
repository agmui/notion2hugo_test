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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR5HMD2Y%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnm4qWse1EWTKY2i%2BZPoY3X8hFdawj9FXPz5Xlw%2B9raAiBsky0ckdpgHHDWu5lGm4ibmAtgCeNL%2BiauHgSH1WhvmyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCbEIXXyJKia7D0hfKtwDDln%2F0hUKhsmmgOR%2BYE02VFcxJwLDuKpKH%2FEUUzAnV6s5yw34GDqs5DtVGJVW1mINFb6FyaPJLuegcGlEmFRPMMJenIysAgfH7JbioiYZUXbxevxnpOZyOlR%2BQmjL1fVUh7lLtcSA19reVdch%2FiCkucd19tJfOTDfozfFcZEX%2BoJoPPdCwnB4WbNZjxO0ZS1C%2FBNgTgGl4e3ZkKFgb%2FLzQwzsu3MuY0eCMMa8O1jAQE7nDXjdS8nEgDylUpdkwpyIkzGN9gCkRkbQ7vXumlXLgcPNU3VEyewIj%2FWfTdRVfsJnx1d2MZpSwJnenlHR2niylubhJdb9qvgY%2B06iUof4XtbAu0lVjcnsdUbyoEF0bhQtaOTWB0MEzsAhhKu%2FUvzrAJJEaw0hjeRMGvkZ10SnXiirqiPjPVprTxKKTgx3imPvHamotynZsVlvw2%2B%2Fx7qRpVHZ7II%2B4Jmc5taZuGFU9lYcimUKMQVr%2FfzFfq1SZ%2BdsthOV%2ByAz8g%2Fm2vOy8LJfH8KQnwKZZGyvPFjUFAIWx1W1PEpcBW9iF%2FTC%2FXNVnvsqw1irT1Fl36Pfv8Xa9st2oaivxFhzWH2qVx3MZqQAeMou6MZS2krZXrjquK%2BfjohUkYPoshvYKQqV89swrLuBvQY6pgFyzrpRuwvuoBK2VnJsqh3DL0dD6Yld9%2F6PHUhOS0BmFQqFlrFnjbmOppU3emT7zOM8T2l%2BWKIf22A8GLV7Pb18PI%2BOg1VKvBiPBuGa3ZRupNDl4cYM7QrqFJ7yAwFWDZnW736MnO59geF0HGmUKCR3MnDlIH%2BcebECIHSVr5X2Dd4X4Wz%2BP1leKxR6PJ0v2Fl0lrXvo9G9sVIM8PuDVfR4eheSR6LG&X-Amz-Signature=331861a34442dbfcf54c0ff15c0c447d17ef7c0f2904990aad383e585fb87cb9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

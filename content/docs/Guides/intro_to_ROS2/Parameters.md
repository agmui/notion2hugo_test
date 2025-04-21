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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTDRYL2E%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD7v1p3IzjFduDwbIa%2BvZDuvc7kME5967qTANx839r%2BggIgNnXAsYd603BzPpJXG0OAMLgFBLgLfir0V7Qhr%2BNu9CAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEx4nxetI5hlFx3xCrcA5fncBNwjIIYzol%2B0U9o7keXOahyUmFlvMQIeYlYhOtPaAzcQ8IzEPNrFv8AGUkf3lYRvwQU%2FoWyTXlcSJBkFf6G886AdQe8xZ%2FvWnbNEyl577KsgWRyQEBZw3wVlifxSbJjIgg%2Fw6ia1dhT0h1gTedaLUEKBQp%2BSZUQs5riHz2cCrbCM9dhZ1NsfEhyzMN%2BRnT5rlrKhJT60trqsE8ebcmWlMSbkRMriyWJlGJ%2FeBdIHjPioarWZG9W4xDP%2FcaJILSx3XHK20ycawyXyNdmb35NIBbSrkee%2BY%2Bng6z9FkfYI%2BA6iIss9p%2B15CnxndgNYmbcZQJT0EhT3jeV0KKj0%2BTbAVEG6WLGzqOsF%2FcPwKGCQzL%2F6OpoeYd2MIp0NadNorxzuxCT%2For45NruDEDCzXYsQHQYSrh6OycL7IaqXoN%2FCctZQ%2Bb0qkeY%2BSAD%2F5VJXMNtsOwuE1h%2FbOv8PvwhTRbmCPANbZSm8oQtGQL4x%2BLBOgiUcLXi%2FREcdZQXVc%2B4r7tH54vJCElZ%2BrXGLNsLwaDqGEePqRytyAhd6x0%2F7F8WMBw02lu0eIXWXLbMC2PrCV3e7C4XyWYOJk94iER%2Fyn3LCo6cZXlOt2yxe1x3p9XaajUuAIXt5Q66koqXMK%2BJmMAGOqUBwaP99%2Fq0Uk57Gqyu2qbkZ5MgZ594kpj2YmWxbLmGINGOaDnlS8ZWTk2g7F%2F24CtUBV4P9APEI8yUJeml04KCqjRR0JvJQJy7SP2kpLPVtY81J42f80cqMFb3L7m5Hxn5KHh0RmX6pl0X0rThsPN9fuy5znDOLJBmMeujoRJsGDm8mmIO8l9Th6yH1W8VatlsaA4xWseQL09DRNjg9n%2FyiYTh4Ao0&X-Amz-Signature=799852ab9ab94bfe76194b463fb1d8c8e48a7504c69c448de09c2386a9af88d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

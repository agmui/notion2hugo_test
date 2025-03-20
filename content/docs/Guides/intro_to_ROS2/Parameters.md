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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCVWCYDB%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDAxPmQv9ctv47emzEo7AtXRkRmGevLQsYNZqwlILvVNgIgaEOUJX85IPcHl%2BbACeivDa14sR4OarPx4%2FJIe%2F7zutMqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG72Y1jjpIe0wCinRyrcA2TEp3Drq%2Ff9lXd7K75%2FyTFRaRb1cG4hVVr8ecIkLjEEmGzItnhCUu5qdb8tqCnv6u9KTsH4BIkiv6GX4CK2O%2Be7s0MZFex0sv0hFEyqGqrHxN3qhjqhzfy0iYZjpy7nZi2o3wTgckKlDLC5A6VbHSnHva6B4MK%2BE5Oc83U6ZWFp4R08RLG9XFBpxwCt5XOdMfsIs6HFEUeG1yULRiRv5j90Cd6IPWWfoShcTprtJIsYcSwos5KXPtBzy8Mz7Lht0ILb%2BrccPm168oOtPk1BjA%2BfldYpWNfPHirNnQ5yjqlypbdt7YxeFeuTk7lB5kRmHe1ZMGaoR3kmwDzCWF%2BpTTMksBAKoofpDOEhA8DhqXpPI6akMslZOFniPYdn7i0CO%2Fg%2FhC7s%2Bu7vik%2F2rmvyOrt2rew1chqZYrdsd2OBjKm3m%2BKHXV7PCZZQ0bmaYdBXAc6fAHQFE%2FyspLT5%2BXkeXydWrQ07lMEXzNPz%2FVOZ1cMo9UVTSrsrwJ5Y%2BtVM3m3ApLwapUP0H104839b5Ek7ANonVte75LVBax%2B%2Fl5sblsc6Gskgpwl0WFhCc7r%2FqTKGlJKURH4LFtdL1wSxU0HGM9zLpty1vfWK13KCQDbJdS2Qx5jrVEvAiBONHORzMO2j8b4GOqUB5Wk9GTZVtqP2WXDv3KbtTBe86MRLhFkNzz4qnwjjxW8lZ%2FZsVubJoLVm1IN%2FF8CzzKIOCefJQ%2FKjozN%2FtKDmSlq075sHPiHCUZ12P%2FqX35fs6DqLyqkGX0Hc3uxUkGo81u38klZBxg1tYkHLUUGAwUA4mGlxnkb00oFp5A6tPGKFHRK%2FRy2gdcwHBFPA2ublcEI3IgMF013muKQ7hufT%2Bv9A2zI%2B&X-Amz-Signature=261ab4f55d6190812e9f887e21042702b66b615faeb81acf7492d388dc4ae406&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLSWLWLS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjdwt34WS29ZGZi4S0EIxEUauG8IEW57A6SSzeiopJrAiEAhuk0VusjvUTEQzzE3R2iFDgHwN9jFVZSVi5IkwNkbiIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDBZkf0fp%2BhnZSIfDsircA6nu6DQpaK08SLDP%2FnMcrXt0GBk%2BH%2FdImvzb5c0NlI8u1f%2B3UxWfVbvzm9yQS067Mifu82Wpn6NH9E2jm9P%2F5HWunfx%2BwTRUlT%2FZHLrFEN416wQyG01fAg46KQ7YfKpGi2OIB6jAcWlwC0YuB2KXMR0HmsP9R%2FN7U4pBHcn0vFUwYNSxgg7i79UcKiuI%2ByL0lbJprq1V8f9WcAKbi7RQUc%2BEWn%2FurEun0kGW4k9u3Fs%2BvdQPpoahgDD6lEZRG3BKaDDLl8S5Y%2BXNzCTr4JLHNKQnuT4%2FSp2xCa71fIjbKV9B%2BB7Qg%2FcYp1NPnKaTeQ6W%2BcRGORL1tH4os9evsslLcjVKeho3rf%2BQ8XGy0unHMDNMWeTe3lJ%2BQRvByrgmrsS18AUf5eWj%2Fv6gyL2Ijxg92lrfGSmPSnCKCnYw6bCtX%2F7Lxw1a43RwYXfF5SjjVQEYqc%2FUvFbuHcPplsHu2H75YdOR00sH8WOpkxoPfYYpm9d6c%2BBWnaNY1i3NjAaK7wki1N53PxCFSsXlOLN6ldz9CZWUQ0hXLAr%2Ft1JryYjUPebnqe8lksAZKC9msixqXfF0CsDuZ3SuRk37uwwjhZBDkm0DsqOP2Ghmzjze4I2Q1V1y14kIRWrd9hUahIQ2MN6X7b0GOqUB%2FntyziCRF37TBBWUtmaAMZUDPMAo7Tma3hWHwfL6Eh8WmEczWwrUJ5eoLEgXK67RSFu6xbTsGSYFR2iXhIb6iTfTtBonqiUEsCQGiB2Zv4Cv5xTMBHKOtLBrzOj44D3zdQA5GCl9TX1o3ZoPt7aTT46tW0vg3OlFwg5KzMvj7QnLxBmGyIUg4pWPLjL9gQLZd2J0qvrf0Kf9AqDhLoD9xeY9MERq&X-Amz-Signature=f247762334aafecb6c43d3e7484844ba8c6438fdbe9e53a097e36241dca0aafd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

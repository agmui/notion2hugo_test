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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZEKXGN3%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCRItQNgN%2B7b6jdToq279BxzHu99XBMprDri4uelRl1%2BgIgOfIUKGFZktCvs2QyABL6i96YIBpmuQW%2FehMpZGoWpJcqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDED7q4EMmPHXZzBjfyrcAxhHJBhhc82hlRP%2BJvab3fiJye%2FJPgWsVhCeCUEyd%2Fb%2BkLIzlxPsM8nWb%2Bc90h6pSBNNvOqQ4o0ow%2BzgV5bS3d97Niebezm3Ybgv9X0ND2Q5qBbdhyhCz2hDF%2BQKxNoQ%2BFUMcL7PKC7k4kk1xEvSJAQ91glUPoPXzaWMKaKTm8cUdhhPYtYr6V%2FurJnkriO%2B3pZ8DLFfZr0L%2FNMvOVGWSLBlIzU4Hh8GMjcf78jbW8zAfg6cTETCnlAzb8wLO%2FVDuxezyJZvBVHnOwFnk3Y0bzoJ69%2BuUIfra9T2nMFNO6ApwCotjxXnHVdoby15gVCRkCZ4rcwyIm%2F7iNqAb2goYWQk9GtOMO7WOViq%2BYQz5RGwOAGOONZLV%2FCRtwP1SegfWk1ZkxO1Vd4Lzo%2Fwciz3wQtApPoybBmVyJeAIqAyRKrw7ipZLAfh%2Fd9hk%2BeardyOPZ1f%2BA6eFa%2Fx7eM%2BYBw0G25xS7i79qYPgRl%2FyHf81%2BWawJxrJkZ8w3ibQ9ek8Q2cnk2j7XnfRHKNh1a72CR3Gj4un6CncQDRHKhPfFXcN%2FjqxNZ2fiMNArU2O7Q6oWcTYGzPrWV2uPJ6bZIBCJhDEfWX%2Be8l%2Bu7wdrkpm6YPOjCPZ9dxBnU%2FgB4zX7IoMPSTusEGOqUBDkoC9FVCNMEWqIQ8%2FCWYiv078U66w1LjO0crbY5LK1mTU%2FqMsXZ2WD9Wdk3CW9DzaaCSD9Gq0kgw%2FavOLp9ZZSoHfrITnxQtB7ebaqsN23aX6PPMskZhc8PBHDEW0dhCbJko7lGmN42FqdoHg2q16zlK%2BE12qrB9dtK44KofVchwWwzM0dpBuIZmrwts8Thw7HebYRqJ%2BJhaUsmi%2FD3AHpwKk4tX&X-Amz-Signature=23182b4ebd560973914b57f77640d6d2f4844cace0f74d3a26d34058ffe12813&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

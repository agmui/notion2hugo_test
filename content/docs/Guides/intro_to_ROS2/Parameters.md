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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644MHV7A7%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDFw9csgByL%2BnGZUWXj7aR2b9ekIEj8673IE1xEYKNFFwIgLW1jjE%2BrdzvNkQFzVqLEn0v0e3gP2qzldR%2BDFVvyWkkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETnFhQr52tOlDtTfyrcA7F90CFY0W24dK3%2FL5IMEgdAc%2B0GNTrGVxioE0BwqHSdkZC%2FKp2WB65B1Aa8iTytjkqq%2F8Or5qAorH1KBCZwsQXECpW%2FJXJF6o1hIgQYXsKz7EPpf%2BGWpfuXCIldlO1FHzJ4p7yVxs23KpBfpfVDk0KhG7NJ%2Fgn0OjuN9AjTVusYhusa51d11AW1yPP087C12CT6Rz0NLu99DwSAozKfON7bbUZdh4D%2BP1sVBGO0tVG67TQDNAA9Q1mDoz48ph5INiGE%2BUmYWAIh2opplA6gjMqLLFWkxSkMncLJ6C%2Fd45d%2FsGx%2BDOo%2FnNs1ApjfEnl%2FWtuL0%2B6QB9YJ1XB%2FveT7Lm5p7uQ6GAd2WmwX7VYCT2glcR6n6H3D%2F6Bzae%2FprN3n4xAqJ5Jrc6l%2BQNCqYH3bEEtbpmqCLkgp8qPDjIqGoo6iMmYqXikozWVHaTiRB7gdW1atEcLh7S%2BaX4K6GJCkpE90KayEuF%2BBsXeOfShTD3VzqcJ%2Bjs8IL0nCZlc%2B9zU%2BomQU5JGpjLM6jqZhjfVMhqg0OoFlQQWXeqFb7k%2B5CGjQY2Gnr3%2FEQ90B0E4saxJZDs20xMQmyH3LKC%2FwwGIWM8MRTrv%2B42aA3T2LpNCTYw1AuO3SQdLkh7eItO1PMJem6dAGOqUB0hRqkUco9NwP42Kz%2FJIZjRbKFNZM%2FQ%2Fdi%2FUZdKbzggV1VXrIphxlEyp4jZjhm%2BfYYdFs4W3nS0BsVlzJFRmydyasake8bZn31qf56LQ%2BI4hg4Cu%2Ba5RvUO%2FsRnO0TBd%2FpUJTvrou0x7T7nwzwxp4j2WOeWH4hBS10SMWumgISB9C3TAM4uuBHRq5scuDWiwLvMOh2Myxr%2FIdI%2FB%2BaPZlDwxbaWKJ&X-Amz-Signature=7999a8b5b60458f614377f876422fbf79afb74164da4bf9b3dd8ab5174bec212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

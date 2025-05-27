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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VERVZLKE%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNp1hIV00Svnn5ic98bqVOHcakHx9BocknUshtBuLKyAiEAy8eD%2F9benMk5qMd92cwr5I7KqsNY0WtREwnE1eJt6yUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBI6y8I06duDWQRiwyrcA8%2ByYp6OC5l2Tt6UO3wO0i53yY6OOAn7wQr9Pbw20LJZpX5kzdisxH0ybsvlIxNuF3E4BQ6OnPQaGab4Fx6J%2BvpGdYaTYceQPxcPJSLlgZxdrT4ck99ZTqRPLSgf8NRj0453Rh299ZHEnjlVucW1b%2FrIwERUi5f1DIaDMnlik0bQ1D4TPYrzybSWR5%2FHLNx%2BUP66eZ8xRUcaMjkjqVvLL1FFf8xEVz8qzZryzYBSzQTJc6P0VXcbBELhUGRPtYVF2E8wLyoBMEgtl%2FuYjo6MY8lJ52OFeQfVAimw45Ve4wqvPSIO4goDilQ%2BPBBjXbsoGfzBgCj2VfhUWmnYo%2BQRRJlTGGD27SNE3EGtaBWRL3%2F3Lan3AkK%2FNwoO6Qnhjfv3GRf2G5W5i0uKST3wl2T3Y0pR4HCy0ylbAJB9eBUGJycBaXXvuZb%2BeWemKAdofaoiK9IS581L%2BMRhmUiCe7n1abV4tdtPbeZpeoWTqovsbCE2LXCziostUUcdQ4kEyDugzKbt4r8QPFlWB4Q2vKlrWJcwtnTm56Gl6iv2Um5bYKTQDEe%2BvwOBUMxzcLA9u%2Bmx%2FfMJfYV1Mo5As2bgdnNu4htqXMpnaMqGpF9f%2B0UvQba1iL%2FZUOxNL8n8Q3d4MIHU1sEGOqUBg4xAgPN8jIAcQFnOiif1yZBug%2Bh%2Fa3UwTfzGyN8QDS%2B495Ta4pZ6b7mrYSK5DIJR0R75MQVu9q%2FqJZWgYHH8GDMguINPa9m%2B9yj6W1qlMK72EV1yzEPNo%2FRSh14r0zh2nR84BdwfvmpyAxwPLFnRgrxiN7ArxLvaoouaLTQVv0UgQToPKfnCAHoSuQ3IJuwyPYFgvzdzReKKh8tPq28Q86aJbVK6&X-Amz-Signature=5f43e8dc2517dacc7c714c0277c539fef5cfceef1f207cdb3e5c6f975ba06d3d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

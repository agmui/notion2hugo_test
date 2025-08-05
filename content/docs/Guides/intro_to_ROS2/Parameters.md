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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XG4MB3G%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDzpx2jfb%2F2s6xAVjWqCerv8aqxqo6C6xpaCDagiBItnwIhAO5YqsLH%2BHrmdMBQiitubttR1OigiPPz1%2F1BsXOx1LYkKv8DCFAQABoMNjM3NDIzMTgzODA1Igx7eFJj7Ll45SmaxAAq3AMnfq5GMQAorjHoIPY0du7b32o4rg8lc%2FCaie0vX14opuDkRqMZkNZjye2cCoPlOPVgR8wmUNQbMJMP2E%2BYyJi4OIufZM2FM3nSkZjz9PFzkwL9zxkjEjeWVh3Xf80KypQGqsqBxKpwgcWp3clRIrwhEQRlSkY22XOSCF80YPY751dbq1VYuT9nT1KGMXQgJb8yQ1iyEejg1hEXJ6yz1WMGtd8mxGl1%2BxLBxMUAucz8SOk0lMBvsGanG6hyhxeXqUm5KKa0Wiq13xZJNHS7zmQceB0TGEBcKC3mGc725O3IiUv4knP8vVtSmdlnguL1kIyEsaCHI3nRYmhgRyUkfAXJAe9jWFwbqJGvIrjkCE2d8GAsnfDMfJcU3CotIkRoNaI83Rr2CfNZGT%2BO35jW9K0O9qPJnggiAM6ln9DYMSoaUk12gr3eefynJijwLHAU5K%2BhVtd2GvcPZdRIaVIUBvVzJspTHIluBGpoeINyKbd2hM%2FypdL%2BQZxt2pgS9bIMhebXCn%2B0DEe5HIZNY%2BpEQSghYmWtRCtoz3B4E3mXvjTd%2BUurtZg0rXvXMkdHEdmnPsb%2FTV7vm0Htd5IDcyTq6YJGIytzeDGp8%2FJ%2BlyII6LGIxKMWAa59M2uzXonKxDCz9MTEBjqkAUE%2F8EUqTwvThmpNlP1%2FxyOMefu9aWFUtpIPuDI19tnBQ%2BzaJw%2FcGEhsC5HpjTk6RLDgLzT3ZqQjfvJyAaTK8na4ieRKLhzk8qYIW%2FZnx8ruAJeKrZ4vNmCZx41rFB4p%2BAJPHJXuk3Dptfg7MVf2II%2FqhGzmEkRnn%2FJiLKxon5uKgY5xkVFtl9yH9ymFU9iWcdN7JqPy86FgMvLssqp4fGWplTg1&X-Amz-Signature=c14f63f4551d04744b0b9e9de907dd9922834a37d60c4baaeee86af117801b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UEWN4KB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCumHtHTHnedxJuYR2aXcU8PXu%2Bby5Q0j1sbXsHCsniBwIhAMse7RKoaHVuIE7RSxDhqUMPlXQzuUw703M9RH1SfwdVKv8DCGIQABoMNjM3NDIzMTgzODA1IgzkOQoKPIQliOqheQ4q3APOwv%2Bk2rVdZfASI1zufs%2FgkSWuwcnHVKEYqwglt1pLePY22x4ODCvjYZJ37DTTAjYq6N8AXyniTcZy6i%2B%2BTGXLlRHDlNidiy9tbrlncxGeMNNIK9t4mcpwXQ1MWSlCNBbJrMSeILUqFoO84mLF9McsRgfWdDsMHCN9yAyo13oNZzaQQEDQP5e3A2icKsar%2BNuWnhA2MySZe4pcHlCS2d1uU0o7YTK%2FDTke02J5dtDnXeWhEOOCCRxaI4G86cX51HQWWLr38TEJzZcW2JILRDEugDMsJomUcCSL7vSsFqf9qfpgJnNBwWztMveqU7JywbEi04rISv32eqXGDf7LaNGUZkA%2BZQoEAQYwEmyfmjEGcB4LxeyCCAH31Qa9dQXfuho1cld2FghLfaM4Dz05ix6F8a5t%2Bkj7meHW75P3n6yINOQ%2Bw%2FZKEhSOXespYi8oHpRFMHTi5BAfhLKUeW0ZIzKwILghKW3f1%2BYyYkU1VEShTpBa7UmBflLYfkczpdxdyaW93p89MEd2iAwS9%2F5ExnrXGRJfXr1WFEJrT3AidSCyo4FkgGVK2dszUF7fTXbh%2FFob2lskDOtyn490Fj7wSWdOvCfHQ%2Fnt8ZHMgpRJkSWLNLohHPDAiVWkj3OfQTC15NfBBjqkAQyL3u3aQJgvisqIzikow1I7PMCOkNbHTjZsHZP%2FAvYWizEnSrtUaLV2M88HmUbQfNZmwnVPVjzp9apf2kjVRdQp1qc58HL%2BALFucudChvNs7GFA3dxaBmPPTWWS2kkLUfbUHet8wd7%2BYIkYIRaxXwyctYe9lwThv0fna%2B5JIJmY%2Bqw%2FR%2B2zgLTcjC8sIta8d9u38k%2BUuxPbhzyGv%2BvVWF7RxQGy&X-Amz-Signature=5610c2007c16bf891f8f8a6c7b4c6556e09b9b149f7d02f573adb1068e58b981&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

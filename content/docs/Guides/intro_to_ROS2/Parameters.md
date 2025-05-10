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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTOBKXY3%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgH7xj32CPBSzC32PqDVs14E20bW8mk9OTZEgX0kku7AiEA2xR%2F9u1511wj4PGopTfSQh9kg%2Fei3vN8BV95ktOWahMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMe5Vw7w5PAXm82JircAwLR759JqR7NqAqA1tbgLI2WBVKCCs5jrHel4RPVOTxdcpMVhOm%2BNoiHOHpNFIc4naM1yS7YlxNjVmITTNfaP1sju%2FU%2B5%2FXGwuJ1PGoCvL7HP1hxRHev7rzNMJdUyuyih%2FCPheGbx38zL4Zgzv6mT5vtqBQgLgOWvt8WgCcntnYYgIWXKCPUKKRixeUfIl8e8QAgfFvrW1NM0mX8CGbzVsBWcUvS%2FQm0mjBnAu3WsEsUtUmKiyVPXdcDaSgJ4KpaHIY56ou18nKmrJll3fx%2Fd2EohjU3OqVdwn5BGuvP8UV9UOlWeQu7vRgTQ6uBjCnqvmM5mwgoc1cfurVxmGXXFPmUzqyG0IQLawxIop3%2FS5rMuMjoRBW28oc0J%2Buqb0chfN1TIvpIISpdaspY9IcoKK%2FGm8xiXXpaz2voYSyQECcWVy%2BER8nf157EkiL7sBFLj6F0Ui8%2FYP%2B17Y6079kg7%2FBIizA%2BCFUf0JImkntL7S%2Bg9a8Ev1c%2BAWue4OpSY2cGuPdRHBzGnv6lkI1G6tFXJKwhqoJY9Hn3EttqhO%2FdkVvBKkmZhmxjLPh4GuKnJhDqy0V0WZchmOv6eZ%2BZgLbR3wVxbjtFW1nOOEkAUJnlEtYXRuC%2BGTKfHpAKeVQgMPfO%2FMAGOqUB7w96A2i4pWxridP9yglvXHSFgzwh1fs0wxcHQ7UCAMFAOPlqhuWGFIPEJzKjWkq4Qzjhg%2FK6Q4Lk0xBuxRenSvxbBKs9rLfILx4Yn8tNmFxl0LCfwKJpK%2FRcMcjUm4KJKtZ6i6LnZaDo1DJEu3khhkNlG3m4EqeKxSavWnQYUUcv57XY2tUw1kgTqbMHv7Ew5tHa6u1ndGSYp2ITWQBhmSe4wqB2&X-Amz-Signature=657bb355e4f8f4aaca49170fea17617ad2902c5f954bdecdd93a18899c10cec2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

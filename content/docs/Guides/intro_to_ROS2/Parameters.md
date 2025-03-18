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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PN4QWL4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQChGFeFYAsAkRniN%2F4V64havf8E5TcOEbLPUTxvot2HRgIhAKOv5VlwMQ%2FWmsz60DshFjwPEnXY8P0UVh9sfBkKE3Z%2FKv8DCFkQABoMNjM3NDIzMTgzODA1IgyC6LkIYuJSaQny%2BNMq3AO%2Fj%2FC3kUFluAfX01C2P0y9%2Bop73YP15mKEMDhpFQZHu5PttpLODf%2BjOYbKjz2NAcz4u3w2feV3FXGnlG3u7dthMYa9Xh1pr2T%2Byn%2BZCY%2Bs4WQkALJxiBS3WGtZ14MQj3cSXvwD9pVwlz8Y4IyJiWpAOxqKOKhuofu%2FPZQFq4mIBY9FlEMdheSTnYKYHOLK2fplgunn%2BMC1BBcso65%2Fnox5vryhm8N4H9gU%2Bo3ewwdwEcAWktZaN1pu4rTYmNTdnOyCPEbhABJTNHVVsn%2FbJlALYTelW6wxbuLWFt6cP3N%2F5gOKmjvt%2BDh3DRo29flTs4DF6VIFBQdpvat%2ByBOp8XDq%2FmH5MHNBo%2FU%2Bj1DaiSznyHfomjcO81uX7%2FH5Qz8ptkZCslNWHv3WijJaLcOktNJ37nXpWbS33IsZC6DwX9PbqlC1j6DshgMmfQVRPy2wSIuPDVIhdDMTOIm1Hsgh9KxK%2FCAVW3k%2BRgKAh1JuOmg%2B%2Fh%2BmX%2BSpQrwPoQCM4z%2BzdmFzqjl0QlbeVtr8dA9iNAZvI70%2FZLkaVS%2BjuO8jFboXWAuFMpZJC3Nrj46TpJ6X1VEqvI9v%2Blt3o%2B1JZyp4Lq9RH22hV4oIRmj%2BLAMU2XS79ASGmzQwl6D%2FeXa3zjC31uS%2BBjqkAc%2FIJtqTOXJ%2FCHhTvhxeQ6CdIRh1blNtIG0ti1Ab8x7blKmtxWQuVfDSlcZwv40pZcC4Z8yLng8mZMQHGs2daKtAIU%2Fe9By8fcPKrNheC%2BwsbLSNJmcVtq4bqKuIwj88tcxRnHzEoJ0X65QJ1ffsmv6l28Yr8d5%2B9FH8lgyAUsuuH901hfqOU8%2BZwG3chBUoGCeNq316KqNaYXp9WkX9e2RI3HGX&X-Amz-Signature=1b56800cfc3c84c70df11da76caa93845a3419939522d3af452dea7eb8d60b5c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

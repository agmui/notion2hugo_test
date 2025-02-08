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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A543GKW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGdGQqNhSGZiYURPDZtAhHssPnAKYrn4WLBwXdSrLQH7AiEA8A5Yghsi7DcNKsAOrCpcbFEyV5xvDqz0kCxXru1eJ0EqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiPbkyGV08cSLMC7SrcA5Ji6MgoE3KRtwwycBapEAnd8LwXT%2FVVlreKhmbaa%2BGagCBdYnF%2BM%2BbZSfVpTgtnSbgnZQlyIS%2FeiGn3W%2BL0Trydo%2FmnaXYHmQM5dFZbWzPa%2FMYmaya9zc3WJGENnT8uf7t6SkwxQ9OFAP%2FfTiQDyaQJTt9tjITKGZSOKEmxLZsIGZfg3sKPYmwDVuZs2I5oz7wZqXX9PpiChI6C3p2gTZ%2BcyeuaS6xLjB47vZ8D245voLnfn6HRBPVGxhXa8973tk7hkz9hgQf5vavMskQKexGTa4Wj4d5WuETXun0IlN9KdLRaAfBPr%2F1B5bPoyswRkYwzrZ59OQmOEcFxNTrsTc3dJG3N3DnPJZZy%2BwYEF4zkx%2BTt5aJuFfs%2BTuKBpzgcl5SI7A14UcfKKqyxgIE%2BRPWIVYpFVQnoU6R0NA0jdIAMU97u2ifHuy8Mxa7U8883R0GjbamRYNUMEWsNjNSaexGZlGkN8z%2BvUnrVih%2BPIesyjbijFszdp5u3DazET9w0RSvOEN8%2FWXADf8zogoF5097tlzYUmKZb%2B%2FG1SFKGUfTSxxQabZVX9qJkz7eWDZdYPNQKytrDZaSR6q0rGlSdYl5jVzRPZXXdonGvi%2B5YS0DuVJy8UTxxKoY7AuRXMMqzm70GOqUBZRml%2B%2B2WvISNgxEAKgBs4k9fsjS8NMAR5xl7QR8H35ms5S9nfPgx6%2BumgwfVwUwBqyQkwl5e8zbhZ9AJThtrKEcjw8dhQ0bJNrHHLYamI0ktl80DbepSiApBdRuJufRn5rI1MW4ZfURTKoCALJX7W0tVwBRIFDKXmdsHuZJTHFj5ybRJMHFTUhvucM8VAmnAhTqyx8iiZHBQO7d7GJPgO9nNkfgD&X-Amz-Signature=3582ae71aa0d7006f2201b16df271124afba16c766d4d541b49452676825fb14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

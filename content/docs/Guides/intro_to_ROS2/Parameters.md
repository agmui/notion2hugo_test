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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S35LBHU%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDa%2FvIfC0TnPeJMZSNWdv2lQJxG2DVD13RGWAN2BDnTJAiBrCXIu3Ahp%2FUonZWCXk6sDSYmrdE7hoqTeW2A1kRm0%2Fyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMmdjTnMT5WjtSvClgKtwDf4rzJyVtPejOy0%2B88p6pGMcl9%2BrIBI9C1WZeD3ZSnOM%2BEVh%2B%2Bh4vZCDN63xpLolC4PO%2BdfmRGsg40brIfFUe6NBYf4UN4VA2h1CLtWzkyl2bjsTxKEiSzifdd3u1l4FD353G6%2FQKrh%2BmlTqr%2F6%2Bd2Jzsvacwkcz0gbqymwUO2JBZmXAck0%2F3UuM5iMiKlnp%2FnTecnC4iJHNb6ue6b6G2%2Fo0jMBW6RL35G4tIaik5vQpFyLECqPYLwaWnz7KFFIVzQekvQ%2BEn%2BcioGBmgLJrhO16BSAvVVd51ikxfjGp3N4HoRbmPKOOvd4cQlrlzuI6vgbGiakor%2FELgHWzcXWSqCrBLv6IMXYMYNZNe3sWQYTBeQHOLY8mh%2Bexv6R9eJlGhwNxGYZCtzWcdOfy7CTZNh%2Fw44%2BqEnCtCsRJuNnkJmubBEprawIFw8y9aPtch0tj%2BtvQGcRGNlyXJJ%2BbeLPdlSg1YK%2BQX%2FZCmG0e7eXaB2Nkqv8Lxz2Mdm%2BETvrV4bMTFABZzVtgAIl1hCCAbomnqeQW%2BUtOmcOOlvj8ENiFkF4j5hRhLHzS%2BONefhEqFelspQFMagRsyB7lpX%2BbQyJI3F1MCMzRAfttw%2FfwGdogG8goKuN%2FD2rMtS%2FOR9Fow8L%2BIvQY6pgG54bI7ZHRiD0BH90KEVgJh0m6I%2F5VjhQ3kMsGoUHqC0SkUrUVyBB4fbH%2Fbn9gAS2UqIQsXvUQnQn%2FRcqZjo5OcVfJIoE3rbFd5K%2FxCK0GMJ5b4%2Bj9wRZWHoOqvoD75AMGpGMZZi4lueyR3IA6uPbdlUxHAojLJ4n7bUOKcKfV4YXHXOBDop8YzJCqtt3hJNnI%2FdNHArUYBwD1JkW33nSdBcfVVPrw6&X-Amz-Signature=b2709ab5f38fa04f6ec51804b9b5717d7fc96b34e897545dc52591871f85cdff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

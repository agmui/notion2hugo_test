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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L7GOZXT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQY9O6%2FIhf3Ur8QWFSz%2BQp2I1tyvQpCO8r6j6afils2AiAUXO7MLIUKPQMw3HWvKAGpgo8UmWkOrAUQ6DIqR%2BFq7yqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXC6Idjw%2BXvISosotKtwDyR3WLqtVqXShsuMhtLOIdY8io7UtYYhPPOCfUU4%2BDizwKGW8oSayZQ42pfUeg%2FJsr3xj39PEp9Ge69Tu6fAosMj4GCjPsvxbvt5tIlm5BbAAm%2F82%2BN%2FCMXZHv0W9fS0aisLf7ukQUPRPnyNPHngksyuxcUFdFt66pgMXjFaXxq%2F5l1CzPJZnNKV7qrG%2FxV1KhR0iuhpotRrym21C0P71%2F%2ButSr5b3N57YyNO%2BtzSTQwrUzruvXZW3MUWriELzIHuu3vtP4zpy8QpAFiB8w6e1cUGvaQkHcqT8CtPKHJm8LcvpweaMZ72%2Fj4FEvxtAwJz6r57AB2X2dUguyhrwoq0Dp41e3WBs02HtEum1PcyhiwuFB%2B1rKlFyq%2B8AAq%2FV2K2hqbeIThV3b61q8%2BhCWTWaVtkjzJS5cBr6R8p0YI%2B%2BKysP0fEkYf88XkTavIHfoh1dfzfNLudDCOu9KTnkcJTLb5EBpStC7J%2F0jxwtuuoOaNAf3f%2FWMmEiTZY66hhwxNlLHPuvAZ8PM7xKu3hKoytxUYOpObwwrBKHbhYC7adO8xWp8BzoEa3UEk%2BQaGy%2BfZ7bXvod%2FYtyhXgYoWdJgF0m8M0bsbKGiWcFtwGwVufIeiIOd4pLQBajfTH8hYw%2FYG9vwY6pgFZgMOhGNINTRj4AHv2ogqwM6XVUYfk28o6jtCRnSM%2B6b6ANk%2FobAt4A8rXz5fxnrGjYWq4Gy%2BPdglcPB6wAOHK6AHUCCjsXk1NuAvYraYeCwMkXRoElN0%2F3FzWIcyMKjcVtWr1rJniRH5LQsJw8czU1gF5gvYEToATL%2BzL5e%2BxXACD%2BdZjyynH6HmqNNLMucrxYM0uiF8APM743Pm2kMAlYWYFe%2BrK&X-Amz-Signature=8073be08668137cf22c816513a7d0dfded22427755d77423c87cd3ea135d3447&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

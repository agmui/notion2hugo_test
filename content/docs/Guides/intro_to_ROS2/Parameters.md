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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q46MXEUB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDIOkNOqoKMwpQsb9ZoZ8%2FK2W2OF1A4ElRysp3wVhZhsAIhAJ0l%2BctkMSYb%2BKntmoT3sU0xIUJGciKtqAQYo5h0JNokKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPMGeT%2FIQz8IDLpIwq3AM04LrPJVS9GuanvgrpOttn6IjOi8d68CX6%2F7zTXzJBocFpl3fNoUG5gr9P%2F%2BP4PH%2BJwurAD8Dg4Zn%2BZ7OcdvexbqM7TubE4o7nVBgJq6GN7GjGRghDMWNkZL5zB%2BysAZaOr%2BsZ5zrpRsGwSrcdPBKWKeL1wWrif7G98AFPmMExN%2BDQSvC8AkqpuPAzq5K275nB%2BEeazIssSO7XLB6%2F%2B%2B9ACMR4HISehD6i4rTfJ0sixiGcPQpZqad7WDNB7CuSxSvNqFWI2OTckeVTSryPdpOsCZS%2Bw9fewZqelL0MR8cLCKACyL49Fd4%2BTEG3qrJqG1LuTAat4HMl8tIcClnfV%2BdkcFT%2FeCu42ujV3NqL1T8RhxPOB3HsCFgzTxpakLpRNusaQgaBKqzz2i7apEuAI1I0dKkoc01ihB69eO27ChesT1XIlsHaW97kVrmM7hHzx9J5MiXAotDUZ8IU1mE4O091ncnnEfTDJspe2RtCvLZf0YxOP%2BP3TEbKtyfWS3KHX7wb8whPtyHYBbBLh0C78HYEds1gpV2%2FTAJSF%2BjyAfxmviQyvr8gVq9f6N3uhJyVEZKXmW4cqgWG1z2weethQko4tZyoqacnAxrVLJ7yvavIEaIHmDRZpai%2FBxMEKDDtqdC9BjqkAe5MeCzAUzLtH73nH1%2BfP%2FWITBpnHxGTMieo5ZKuTcQDfkf41jIX%2FaNaUM5r6Y%2BDhm7Eggc9BT4SzzgiqqRGEPKIH%2BXjJNId2ApswnP23C40gdMzQuRcsLrCT%2BuGZU5VsGiofAGyZKUjOlqDj5m5u%2B7Y5zciNwZ5acAPE3zrSaiV9vUchyqKWppt5%2Bf%2FmCx9jYWepPBgt1v21qvJcJ1XQQn1OPOZ&X-Amz-Signature=6450db9e3bed3a3ae155ac94786e4ae2e863e21b49879b4c47e5a46fcbd05fce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

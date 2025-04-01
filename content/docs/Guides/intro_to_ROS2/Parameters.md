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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BPBVKJ6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC7IsX04W5WBrZuw6fFn6Dl%2FWDK40vs2CrYwtwgow4khwIgau2yuHHkgILQxVh0wFvU%2BZT4CfvCJJ9QOTGoogEKMQsqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhyibFUQNhfJllcFyrcAxjWR6NxYawSNMmylu0x8tQHoawMiZJ3IWuiox28TZnOGqcLaPjDu6WAeDzewNeiXPw4ctwrsR4LvL4z9gAriE7RLcb%2Fc25I0IXO51uhknlbLZIW7Q01LwLSg%2BPru0dICfJ2HlKB1mJl%2F%2BYm6uzxzTg6GKyb6XJQSAYIEYqNMdjWIBEKwZpMVEXw4PAISMouBkahHtVWUo61HY1K0Ox7ZK8mGqlpRD9I9MDbAAqyV%2BxcMhonjcLBdNYY%2Bg4hJ0HCKZHm%2BTFJDyssTtXHAqZ8aQ3Dn9IX0qhI1Xkq8%2Flq%2BOOISVpY6KWpzIjItAWN%2BEzvF%2BD31GAlvleBgJDdxmhhhccexbDcStMkMlaojz45pIKcfoK%2B3DTBULkYFkrq4B4Vpr4D%2F0BnjQyzS4T5%2FW%2BWUy5Etp6jFUFzsiXAT0s8UvVrT0ZcdJYMk%2Bq2u1l8mXlJCemgHSdEx77P3vSRlGjIVnJRRBn1RZAWJepz%2BFD%2BzG4xSFNoI6p8HDAY%2FA9HEAnS4qkcFiOmpiVC2MTj8NV%2F05Gjqv8xy0K1i2sXOutpY6Sz4uJ%2BkZdzd3rfEHAxfUxtMOpnsp6UUeODAAX%2BELYCk7QJ72qwUH9YFn7%2Bcq%2Byih4WRjqgYfWX1%2Bb%2BY6icMLSpsb8GOqUBFO6VLo2mvnaIzuDaaMqrE1Z6ZMEsNeOPrU7M1yDrqX5AZujJyGNqOqV7x3CojQsNhNV4blpT8fvFs877RVwwsDLq46mfXiIZoGtrezgw83FKEXMO3k676Vjq%2FJXHLoiUGaJmTU%2B%2ButbYqPJl%2BlYw7avFjt7I8evJWzzinMZeMN3Kn9wLsEXZMhlzzY%2BPlFh6pCKaM3dNHsqtMUr3AYg6rTgN%2FpNM&X-Amz-Signature=0f786336ff670a2e9a79cc4668e2c5981426625d26e0de966652823021557aa7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

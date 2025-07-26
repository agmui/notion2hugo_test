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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVM4SZEY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBcX1m6kTD%2BfJrhv6XeSjJjmmoK8ctLoIIs0%2FLur%2BkF4AiEAsuhSeoS1ZT%2Be3bIYc4hriT5c2RfNxz%2F6R5lh5Boa4WIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJrHeReRNif07zh23CrcA13o1zN%2BggZVVk7Nk0jvouauLztdmn4O5FzkwUlNJfazH0D%2FeMsCzzcsFGWUL6%2BREGH9Dm9EreFt8Ar%2BZUg%2BLLJ8yP0slxNLoTouI1TJPs8XTHF1hegaT%2BX9gN6McuStyFxeS4rptE6ukZ8xXgZIzZBhsOp%2B3YcrKMqf8%2FndxxdubcYZ9AL%2FlSN8kVtxPwBBWR8GPq876Gkf0UyWgTlHF4yMMHvJMJyrHYbzYHZ8Qp9M%2FMyt4o8LAoi00FUl5qyzpz11YierxP415SMvbPxEZXA4FxjEl57wE4p9736ynBh%2BwB6Q9FFulBNQa8zNPhNyFXdHaCqP8MweMLguB9hX0TaC60R83nLY3PP1Vgj7B%2BQp4RPt6l2BM0%2FV2DDOmpYc8pLLRdLiGjgWY3KPEQcrM6yxFnMWQbCXafxl%2Bzf5ZwASoA04V08yMQeYbp02coTgQFA1sNyotZjDQ8bbCMinuQ4W7hngqWcutjO3B2JPZS26DCgHc3hZd%2FFH91XOL8saKPb6wOL7sCZF0EnEwo%2B0%2FzTWK7vrcdsiGcjdn2nLU48al8rEcBhMjmCYer9kl7Jz4KbJyrPoMlS3EJi9DxEVhrf%2FUMoKuQJfohLHSetF60MJmnO8j1EB1PgNXMQDMMLikcQGOqUBrM6bdi7D0E%2B7QvI5k4upqPlJpAznIp9cOKkvKd1dm8PCKRaPm4h4%2B9nDOKOQ1Nx89f0YzEyGEygJBcsKAYCuXToJjS1i11O5AkZ2gInAAQvjOWCrBe6uyZoCCrkvBwe5yPmKlhDWiTohhYu7PpNeZNbrcKeIe7ku%2BLBgnWJdNwjjtZfk3qp9eAYbYbKPGibdvKqqNSFHuAre%2Fh%2FvQl%2FA6OALRMC0&X-Amz-Signature=09b73db48895cff0f502274ef5d28db299d1f7a57c33b303610d718b144978b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

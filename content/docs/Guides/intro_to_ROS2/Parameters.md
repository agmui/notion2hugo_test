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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOI7ZHBC%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETQ7cJZM0LW8egMsiHzjRcB0vtaGQnJMbUlCesaUZ7wAiAB1Jbein05gWnAhngYp8mYm7EUiQn1hwho3oTjbInbJCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMWJE8OQYhUbIOwfYRKtwDqSSpA28E1UzYGJeOK4MYrsCLsriMKtxbG1MomJPIs3RjUdI5auNBkEvDzZFHVgavHuQXF63demESvAajBiYP8aXM9suPBSLtz2m13LABhYquxB1CSX%2FyF9CA6bcTeplu%2BTl2ZhGwQn3yLhMEjXWSJ%2BQTw92lMwITWTo5C48KhdQbD77IbMpAO2M8hAHQxUPmOrbkIhcFGgTwB08MLjG4h4J5ZQKRZzNcOWE0YDlyY9TPXwpFkr8vnlnvEc36aDRiAWj%2Bon1%2FxHIjUOTN48HwRMaiqMDThShnGyfOtLVFN8vPKstlqRu6v7qUE5YEMoF0eZy%2B3cB5b1Z8HC%2Bnq%2BHeNYGCofplh3F3juTKFEPuka7IGW5TC4rMSJhxZWfM7AEKOSgn6gMLPN9q2xJRLsFD1i4MSQwU2HBH6iSUKqmyU2mq28MjobPGD28S3TjS7Eamot9Mr69WeBLhV%2BwJp1z6CPwVVY2lCANPgBlS%2BNkot8e6NNa%2B20OPSYE78gJ3selAB2jCsuc4JzzyxWN1Z8LTUEK8YydMIW66a6OQut0Twc28489OOFL11XS3y5EySoOEw0QQjG5lEBMerer0b6dxFpJMN7kBfge5ywCwIIbKW80DZKm6v4vLx0z30KgwosD9vwY6pgEYPQccvO5KEtCRBxqJzNAQlvDGChHwr0ZDzBZgoC1v2INEqle1ryn2PpLTw2jHp1uV4p7F9gRbKrWIJSudFPC8rinmpN%2BVvaA2Fh1CiWNGW1wcNLJCnS9t0GbcHTf4eCJ7eoQUq3YU%2FzQyue2rhLsloQ4m1l1URVMN155XuKCToXji%2BBouF9X8uroW%2FY0dy2IuoOkjx8BJCXkQhEKENfoX3R%2Bn8Ta9&X-Amz-Signature=7dcb720f855d22b1e32c746e647e1294551d0a4ad14d662bf94e1f1c257719af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

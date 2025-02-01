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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ZEUPLI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAG7w6kLsg8SaKqRKbEF56kcd5rJNJatNZAaorw8cA%2ByAiA%2B6y9IOWmropzduIZYF7%2FbEp0ATVg2cxPH5GonhZtjOiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FtWp5yoyiL7jIWyuKtwDeG28Uiu2TTom99VyzWiFBdINT8S7tzb4%2FginXYcjykXnGBZ0WyJ%2F%2FXj6zUltKb657MB9V3DFf7QLFfCYrdO1YtjqRFQfUJiNKoJVrQ4%2B0FEWkI3uDFgVLabR%2F4L3PBn6q497zBXIcSnvHKNFMjwUAiLpq0mRV6zUoXipemmc5HttjdmUaoJaX7GwYywrQ9bUZcm1pho1sfO0R1dgwa8TB3zdllyx1cHn8odxKDSrh%2FE%2Bb6YN6VigSvz26flaR41m%2Fbh2S9diKx%2F1ED4xPOaXH3M2On9S31pKAxI3vc7O3IzwbLQKs08XPWGQrpNPSzrF6qRrND24gepep3heHfsBcdtPij3guHlcgDjoOdjUJbcANJUZsKBDLmBZbp35ZqFXDTgSNUf6YQ3yuw8r2B%2BtySBwxyW2O%2Bv%2F6ncVBqVxEN8PL%2FLU6tGwO0sNj6yDtOMZevjO%2BdHqJURRWD8Rs3rJgpzUHH0vnctIr2jaO3BrhQ2wYhDiruOE7coLx6YExboQTjQWqMOCBOA7ojTpxdAMpKP0p%2BUX8Loa%2F78dazhLZBmEBeo2ShPgBHEU9Q3cAmiDNdYoPnHm5r3V0iE6V3khZieSf3xC%2BxcSLq5dno7U1TWPNdx9NNuXYfgnE6wwvqX3vAY6pgHJpeVP9Z5Y1CekNmTG093wNyW08l1w2CuUZEhdrnvOYrFvVl1XcAbHleAIllL0BwzHoEqPDfCj1Hzx4STE%2Fg9azijbJrpQ57fA9pa1UayqmGVGOgoq0Nb%2FO2J8n4BzsG9kZPfKuGgPFoUFjdd13L%2B%2BxLVUyIna8BTQ6ZbxKxbiZG50GSpKES67q9c1E%2B3%2BlGSL%2BlhZZGjD3MV63KPfe%2B%2BS7phvApTE&X-Amz-Signature=b5ab10100a7ffefe21b74e212744fe73f897560e27262e1a81053ff83416a808&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

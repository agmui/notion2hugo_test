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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR62TJCM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIEowDggt7efFNklXxtHU96Wje7AH7JoIeNoWGc6ea4UFAiBKkWHiv6kawuA9Tjzvvpc6MPqGFsLUIzrQWNBJi%2Bk2Wyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMF4e2BfhH%2BDfX0lLZKtwDRt492p8FhDcCqV90Li%2BCWwIqIxdlklL%2F65967FarGuCMnZuxHaSmMuVTgmwtbvVulaj%2BNM7p5kLA%2BzkyvgCcMbcs6TRfhjTNd2nV5hJxsw3qPP%2FNMGTx%2BoGkqepGFPNRzkXwbQ4qFgFn6aaVkdpOaRsSd%2BnD72wxnt3twiqsDjb4fR%2Fxl6GlQlnGpknNVn63r70yt4fhKGcEHrG0FHmZB57aZZEP0Koe5JQleGIUk1JJALaBjBCC%2FSvGgWXzkujnHh%2B3NB%2F7XirMVaX9RW1APwlHkkP4IGqVfuIFHzVBoR%2FU%2BCSK4PVtVZkTrWZYGwUgDCq5xjGLv0OktWOhL%2BGt4k7sAYlRyzrk4%2B9LWwThU38Ypr8B16BExSVRhT70tyraniGIqhKq%2Fu3g40%2BjW1wd3PMbu59EgAisMTJmVxvCSEQLb5iC3uR26hTxEBVNJyQmW8TdQg5OPOnC1m2CPf2lNXUDAbCrrQVFCF3s3y8b6FRQw%2FpVTiZtcD18xBYq2yvOSyL54UurKdJ94S%2BOsZ0dR%2B7WZrz9ng8m9IfUyC6DZthVMpcSr6kXQQVB1Xp2Dk1Y4m%2Fr%2BUzz5Y2yVglEDFcDK4LCwzyxBsOYb7qxmNKiG%2FNAp1OZdH0w0NCkb08wiaKJvQY6pgHeFADw%2Bri4SwMx1xytu%2FxSt26gEoJjmArD%2Fjw2aKkZjzBoh6OwpmlqWO82qE%2F2CG5T%2BtMu524gR0O7Tgx572qeOLPyDaey3vv4IK5tCDLDhKAqvLrYEiNLepAWnWqWcUGRPmc7Hy6Feu5PzrlTcaVGjMF3WwadeaXfOEN14AXgmHL8455IYfyUZ6NVdYNKJ2n93Ff8veM9dSYNidWed2eOuGl80qKg&X-Amz-Signature=8aedc2199a5a17fe71bf04b45cb74c067e02fb7399b7e9b3a25e1deffa7aef96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

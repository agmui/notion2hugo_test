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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5MAZ24Y%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDyb7odfIYL8kcMY43HXtMWpuFYN27el5OK9I05jzEqBAiBuWY1FFYr%2BjQ1q2O1%2FARasoGPjvOXobv5L5IKXLw47zSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMwQfAU8ZgdGAaIPRTKtwDe6%2BRoei%2BY%2Fcm9yO0xCio7qr%2BONmVNPCqpe9JnYE9PWZWzyZ3lZ2HtepKou20o92WpoZIEubUDrlvDKsARqYwaYOLP7bPckPStNotmRdC2IXd4AL3uSefMZbeWJUE%2FcTCJGa%2F5GL93%2BMz38ElTtvNSZ1QQXSvVbiz37xQ6IVWMFwNHfz8b1iRb7A9%2FsQuLhkqU%2B1dtSPKZSeam5x21NDRe2wpvbk5PG61uv40npnw6MF9DG3AQ5%2F842p9zPZENV%2F42pBE%2FnG4p0WB1X%2FQ868EQ8kImmMS4v%2FxdAC8JDlv1pVXOfJsyDJzZ36oE3ZypuycKilqZGnk8rTDqXDfSut7LxMiovvxyHgMWrq7rISaC9bBBjJSMaBMcRj1VGNN9hGAHFgALivNcOmKk96ySrLEHqPl%2BY1KxOO34H661XbW1JGqp3QVCWjeMU%2BRgymncAvrbwwbccR4w5WZcrOgyiwucLFyZ6y55FDeE3l%2F6oul3ktiPZ9snuz98EsjbH1oVbjjFBLj9qlhgu%2Fa0P%2BcU%2BABC0qtNm99CGXmjnUg6fVpk92rk3gNKRE3fvKPmyUfVgJ1EAzX9Yf4JIRZ71GfTtfZggVX72DV1G%2BUJq%2B0p1OTD40A4DEfCrdQkpH%2FW9cwpOnLvQY6pgEwUDlRho97vHJEKTgEAsPjZ8gW0gk0qayGpiiQT7H2mOXk1TuVeB4pWEL2EeA4%2BZssMl3241NRAXFdrrAobvqoW6R2GFXQf3KBw%2FRjWzegnNuCYORZhbTqJm5aQwiRC3Fo01dtet0GAkKFqKjJYEYCLUmCoZTOe4hg5tq4bJQ8x59I753DPQP8fYqhpjie0zqu924RzAMJYkjJc63jo6D9bJ%2FytLAD&X-Amz-Signature=6455df2f1014dce2b84bedda583706ac6e3b453f355b791951cd5c9350d553c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

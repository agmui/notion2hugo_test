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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3JXEF2R%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbYppmjO0%2F8vrS0zC0lkof5NpN234fQ9F721AhHBrLjAiAeo9EpiI81%2B3IpxETYTTY1ogWSOsCLLjrnHL9X7UZjVCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMzF4ipoftrKJNaIwPKtwDSZBOs8FlY7LZANWqJHAEsXXx%2BR5AVcntBieKj1FJvQ3W9IYU2Jrjm%2F%2BsqxL4fnVYrjXhRHlZW9EqXM17vixI%2F9WZNw8kWtmHSCUd0bGEesPCsieqL%2B8Vvmyf09mYysWmNsgNiOf2yB4kOb1Wf%2BMB8nh1zbN5%2BUlxOt5cDIgdRTZfDcBITQ3AKHXN%2F%2FCugCz6GqftxRprqaHnuTZwg0RXMAjOTEFAC2otumjmcBuykwZu2EtpTYUb399%2F3tvQlZxgk%2FylomQnVF7jASOMVw6Ikb8zTkhX3uzvy0vTLnRKdmZk627acmPwPG2gJG7aTWaiusb6Qh0QKyppau1h0cPh5Yc3XN2qpsFKdPYSIHhNmkUd%2BHu1Umx5EG1ulUn2Ue%2BsF%2B7JzfjWVyxwO0zwQBzHVSt%2BqkSmiFgshPdaAYnzj2M8ppq6ejK%2B0P8Ofr03JlaAfeC2xgnuQBXlocL88EUpJFYAyczr%2BCJ1HagoIjm6GIXUg%2FOOfmjtUMcX7iihS9x%2BBrl8Aaw3Uuw5pJ8y6hWazqpBi6LXlP3qvm5pXTpiGrR%2FeTiFIQgY8oEnXMqn8Q%2F6gaX1rqfCPHpFpdZCyOjrLejuq30SifrZupTWG3IaszAgfZEDAdRP06mALDcwj8qEwAY6pgGpP6IjsC0tUPoWJAkef3Urmv3MtCIOxHfT9eROZMZFxH25Twgan%2B%2Fol2MsBSlhIaCx8ph3Z9DC%2Bh7Ph0ngpD1yQtGM1c4K2OLo0TnQzVpox%2BBo73rJua2cKylS%2BgFsuGq3A2RPFvdgycPeaFIvx9ZjpVrtqO%2Fcsf82AZKJzfjtBDGe1Ekrq3GdEvFMUhpeniNg6c4kCF3T0Ofqz%2FgIBA5AAZ8AblCE&X-Amz-Signature=070833f59f34e8ce4e3e38209abc7211a980fb778d53e57907aa794b077efb68&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

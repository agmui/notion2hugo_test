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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBOOHJ2S%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIC%2FUo7Q5AjhLEknxS6ilv3xGM1IpTe01UfIVAw1YfQ3wAiA2IatbZlocps2sQ%2BDSYTxF3Pd8gZJmKQpscsXZrUAe4Sr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMvkDlrPp98GBpckjsKtwDf7mKq2OPV4ry43dlDFfDN95PlFLTxBVpx%2BIqbGkBRf2SJALT0O36GdHCWACNQngPpmm4eCAlh2MKkl3s7Ydu3wqIjPZHnVV9GOBNVBd9XpQwcM8lrNrmphAHpicrIy2w4ve%2FQHWHSee1A5wy63LTkGywKcBvUT2rMp%2FfscWwu8M7Ft8ffmTn3ClShPL%2FwQYZG5eW6kIq6xwNWK8xIBUz0aDZaV35RcggOYOYEq2oKmAsthJjb40cKXf%2BT0sWZ7juKsk563uW1EqN7zgO4t%2B76GBII2wP42UOkaAgtAwUPcW7ugp1fFmxoU%2BkcZkQtG2VBGcgH%2BDymztgxYnTQz7lIKwGa0uoZDDZEwMhTaT2sNGwnziCTNUIaT%2B2fU%2BNFPQIeF4H3jW2qrRptF3DFeHl6CDLKw3QKUALJBeLpFIaK%2BxabWYufm%2F9R0v9RwR%2BQ5hcuXREE%2BXveeDE%2FcEZe3OVk08igEDmD5bixZtEQwLXyDAo2BcTSROfPzoldSKkGNim9VPSqq%2F5rXhLfjdoDe%2F3QYXsP4amfwg%2Fbqzejo9C%2BEKzz0vopPdTQh%2FdxcErLIeoMojUXYanWOFyIV6MaZSS5hzMjGDlXM8S32HVHfIsbzwTB%2FzhuXjWcoYD4qUw6J3HvQY6pgHmfUfbtujs7mhfzajAIzJwbYHkvk6jyFJL0IeSls4334J7ab4Vzfz0%2FovigrnwV5rSkkD9aXDw85sAjYXqRhm3a4UjZo6sf6npLEhwrf%2FXRCerN79nRIK23R83gDbV898HxsVQWRR84hHuT3eny87F3TwsvjMIapxwVx6FFL53fSx8aWtY7A3QPAlvQReL%2Fdh%2FOw8j0U30D8Xx242JFhLRZLQ8G8BL&X-Amz-Signature=84df666ec01cdc0931d2ed20f4f3c4d0a21ee4fccc00179a9e09680a6e0c0359&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPTGBP6A%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMfdgZFCaomwN9jWUjSNvzJL1kTtUUf6YPhpvCeUvVIAiBlodcctEjBRb8uNTYQFIWZQDJbRTmK3z5MWBuEPcYYXCr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM4uAOVtmxHCQtDr9uKtwDJph%2B4NYxJeBbMnQq0lTDH8jEEDUYHI5cvEZA5hcdEI%2Bu4i%2Fp8wy5TEr4WxqRF0V0ymNwm6nfBWFwMuXmqXuo83pMiWKUTMWL8suSqfhob5UVzRshMJJvKlFAUPfaJABLdgJEB%2BQL%2BLirHMj2uY%2FmV3mDWXc8n2sfjCz9ImCdzG%2Bv9mdzEP8g%2FoZSvCDXw33HmVcyljVD73L1NRJGTRzO1NWpWpreQTKdH05dRiY9NhU6aDep%2FjVgzajQpgYd1Zf5nNLJVl4hmPrdolF23I8cP8vBoljiep9G%2Fat3EBEq0G4IHLGkzm4wyAHSP5Tof3bSMRVfG9Jwn1POFl0wErJZ76hyj9E5x7wo4IbY9zQwLdiY9tav2shQDke7N2DnEt1qfvOTkkotLu5ltzpOnWvhGFazP%2FWIOqVQ0eE%2BcMcUnfF9revUZ7eRTP5R%2F1%2BMuv%2BnprgaTaEDNFzQVja8eiJ7qn%2BlLIn9GkAPm5m6XdtyoKIbQtfNUHw36%2FLtq6pcyGxqty7n6XaejyhNT9lzWuT5GzYKn%2FI05NySLguYznD9MLdQUJTdX7%2FYu%2FcfZ9LxCI8eAuGUAUn%2FvM9WJspNsmVA16ONl1gRbAzWZu6BceRzNZxgpxDnAxrVQcusef4w5bihvgY6pgHV5pZZ%2BC6%2Fhvuh2ZCw9wGBm64heXZ%2BmpNXaQG7h8OYG1aSGbS9AOz7dza0q8UeV7YbcGf7bxtKU17Acplu%2BGArchTAhcaB6MSOFKtLNBGs%2BTV4caj75jWHUX8zJkZmPV381sx4LvFWykaUIVx1%2FXv65y47suWjf4KDtfBr158OuxrLmYsSynP%2BLKpQvMkVj1tv9OyS3nOXgZ2NGKA77VyUunFXO9uC&X-Amz-Signature=a21c03b577959411197d72486f78c7a7e96ce05be2c34be0513e058aa791b434&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

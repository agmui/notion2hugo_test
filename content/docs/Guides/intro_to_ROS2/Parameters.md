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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLFLGP4T%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDA4%2BeG4JfTdn4MSOzTKHBliizaOyLBrku09nNX%2FjdliAiBRxAcCapfc7cUCmi0AjvRBvsYz4GqNh3F4rcZgu4%2BYByr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMWfONQTbH%2BXZsLDzxKtwDLYAFOBPB1WhVhtLna2tK7K%2FmisY6EJhQ6B3t2Vx3UENgKO2vHcMmoB0Hizjx4TfMlgwjMtTD98AKeu8fMfyNMDa5n%2ByxmcoAreTyJjLGr9Y62WSjdwbCTykatl9jE7WchCquG%2FBcycBEnsgUenr%2Fzx7KnFYKV%2FuIDlzDNqWmdoqcaeK2Bn9w0FDSvFrJ5bOmITxTN1D%2BS5UgwEsusdiBDpY0Jzy0pY%2BtUNitGInMPLqzRv2gkb8l0r3Cy6ms5c%2FOUEGvD1n2srbmCocAfyiIP%2BR7jXCaXLfqbwsBv3WIQu5FZP32SlCBiv94lWsq1nEaQSKPOdi044kGl00NxVl%2FaMg5sORCzTeEK6OL668Ns%2F8h1dV5pxsvK3sh%2BPc8ZC%2F%2Bz7M93e508P6TkkxyU06%2FBuSau40r9uMSFXl4J0MH2nuEYeT5TKcoL6K6PD%2F8wfUhKpkdGpDopCTsfNYfNx%2FKyTbE%2BdqxAxgFWTbQOyfCQ6J4F%2BhTqLZxzhhfeBkw4bIhacJaRFYTAwcs8fbyw%2BZ4ppv7DWyfUTV7mQwDK%2Fw0sog0NWNOix6IM0FPAZKKqO7N%2FHoKbQcFONqZzVy%2BlNyBO5OSBpHEWMtfBOaQGPB0gK2kAOsCade6zDTwIyIwyZahvgY6pgHY3uK0ubPn%2FCGTiEmMlELUJGy8OV2sLeOYlk7xvp6j5ydjFJYac2rzCfjC0eookD4yUOFIklR0eryDaUt2MwcZjIkBI%2Bxxkb8y9IqwRi6EofIpsF5V2u8Em9VhN3j2BAGJYZq3GxV0XakRFyl108FsaHd7ESPxfw5Y6Ntno6VmOuoSpV3Kf8oPFLb6M%2BQSMoXKK36FKvi8fgnuRlZlca7oTnahV6CM&X-Amz-Signature=be2493368a0b5d34dba85a9f27351a1cf222601b0e6e79c5f07a9b4e495546a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

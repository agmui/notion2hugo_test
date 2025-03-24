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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W3QILLY%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDS0VS796lunkr9CNnIK%2BVwJQYp9DbgboPZc4YTCx8qFAiBQwYy3Ww6nTWHjHn%2BABxHmZFHuld44KGWD5j11NqwMdCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXL1rG0QQ9YRme6bVKtwDJGRSKg2dVJRTCw%2BSrcOhUrsvPJ3rq5dVZ8RQQDfnttJJiXJXqvEo%2FjljwCbHgCJOGuKBzHN0xS5qMXA4UrTrw081OvXCX57DpoIR4rXg%2F8Ynx8ecqdB0iUP08B7GMaRMLFWvEjyV3nfzhJugtX2ZrWSctTTn%2FCcqk8VLmT4WQ7K5LDVzdJblF1aztmulQT6NEZ0GMT%2Bc%2BhFN9bXnMSqbMAMnrMNliAxymD2tf9wFEBgQvGH3LBoHLsAGv%2BcYc92x3Ni4ZibIkpuekoDA38DtSYf1JChw3K9CaeRDg3uxDR4ijPO9%2FwXUsgP2AUDil0Kb6S4qC9n%2FgYUfNM3VqLtC4WAuLo2i%2FmqunQ1Gn43cLM9qsD5%2Bnaz6Crx0iiCBNr48%2Boa1JcHKzfSKQ%2FtTVzWXEZTleYDOHPVDvrUB6ValLBNVgL9nnu3LSG6rcRhJMEzEGkR0nNUHMlOxBcUyVZwJaLPlpB%2Fwt8sK%2BfMme9S9fqPOjFBfRUO0hxV4IVSi0mrCoUo6H0ovrz1NXc63dC%2FsyTT%2FwITNJsGJcvIzDpkspyB28hcFnwCYIZyFpVGsB5PrFWAt1SfmLRmOWQ%2BFK25OP4Fcd5q2EI3jMC1mSD%2BnBRzefTWlobvlq9j3X2cw6r6FvwY6pgGOf4bgCxc%2F4JFY9uou9CNPf2HMhmPnswvi3IP7d6xCW8YgTZth7ebgP6NTDANHuBQLvNDYA%2BN5fS289OW46BDZgIO1FD4L3GtGm0UFjuee8hsyYs1fQJYCUlRzyEi2%2B3q0oIqLLiwsngaTiNLEOsKutKfd90QlScuFyPVCVUe7N5LiobtmzOTllGoMYNFevMci8mhGZpa5jfeQFdya5Fgn3FZprCq0&X-Amz-Signature=e932d8a13968d664bd1254a07e84a1c4812ef2008a4cc187382521c2af47c0fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAFR37ZC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEe%2BDvlzijJscVKsFZqXNGe9NK9ApuQWRaFmWBG0G4HuAiAQByyUf%2Bhen%2BFCy9GPi0vNG%2BZzceQ%2F5sSa4ekccZgP5iqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKLASc0KguQG8nEBbKtwDYkhieKUuIz5yHOgi69VKGH1ofNWKjtXoSf%2BbqyzWvl4Xzlb4W6xqQh04avmG6hMvl7ie5gb72jnBst0VuY831s%2FbrCIvxLEoxuRsCX0kMdJLUi0PNwWm%2FjIYzpfXJ4nOfj%2FyburNauQra6rKYSvE2iAtvHnw75q6GHf0uw8tQ1Lz1w2Wq5qsyaeEF%2BnDcFb7VNMu%2FDSyvvde%2FbAhy7jRRhb0PrbH%2BwGAf8iXO%2BPHaS2txyz%2BasHOz8D1p61Rc9QAXCcg3KN1%2BvqBs8sjLsFQ0lz%2FqG3ciK17cxvn%2F6LzYFc3jMlQp2m6LiIFZXlvJKtEobgvh8o5K6AvNJodCyT8JsFAKG%2B4927%2FRJzotVAVSrSIGfhSAH0rPmwSS6TGnv5vuszTOmMDB8duDZqg1%2B8HaNi1VPAhW7BXwYa7pTL2coJQYp7WHOR3qxHtJm%2Ba8sZ4ZCgg3Ik%2FwrWmx8XErc7IiDHfXLEfiM7VpfjvWhhgjP%2BgMerXLz9ObQUX3IkJ53xQsU0fbvn6x7SnlzeM04WqBTCA4ml6ztXrmeF6nemHa7MF%2BLMZcjUf9itiTK7pi7MU7TCPaeKsgvvP2CRcmM2d%2Fy6RY7im179T5OlHtzq0oJJHBpN%2FPmRypyz3BT4wm9iXwgY6pgG19Y%2FwycMhnZzacdWF7VaZtARwZSQdCUOcUWAff%2Ff2E91zNhJ%2F0vGlfqRP7Eusx%2FvOJFKqpnpGALSEmuONbVl3Ya9LK9uh8argWoDUB04575my5%2Fyf5YoU%2BhsSNIeprub1xtiUsTAnN00Cavp2lwl3YirG0dIhknKO%2BXOkPGP83EMo2mIRdePgwYXJgtsFT0BaRR%2B71%2F%2BaaFIV1aJSl%2Bm7VCrxyhLa&X-Amz-Signature=bc33ee81477f58b67d1982ea2315d0ee4f782707299d99ee781e931e82f3b695&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

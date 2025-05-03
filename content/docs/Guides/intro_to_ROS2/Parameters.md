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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU66ZYKQ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIEc04fFxLioa4SSYLjLYfStXp%2FovFMtWqTkT%2Fk6XRPkbAiEA1tnl0AQTirsDjgNkZiAD6Un6yYMYBeV3H0SlT8oYmfsqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsaKGrnArj%2FixErFircA%2FExboLlMWC2qEFv%2BQ7XxKLIN9sZZ5vJh69jSDs0peX0eEEg66QpLTbTwZ33mTs8aeS1AIfEnb06AOiTv26352oUvwS%2BUFpKyU0krd08b5RjnBx7pi9IUnD1oi8dIn%2FStOzsYI59ghdm%2B4QQ4yLnj6caDVEGt5dmYRcTlEe69wb4oCJF2XKdr5jjFoGtVWq8AjyeFXanFiIF8iAfl1pv59%2BMzhCHJ68d9LZJy4uaVbXclk7suMdJzpIfJznJj28vGAFxDBBIRvXqz%2BHJH6Cp3CI4Oi2zYlAtGokRG6p%2FtnUEsjK37cRjt9hICpIxNUMAhuypC2WtBSkD8ZNZ88peUgfAmduV4rVKK2o3HjYz%2BJZq3zEm6969N4V7KXgMkRFxJPmDo0Twud5HdP0kp2LY7C2dKNb5y0fM8aa7osNAO7G14FGtY5lgvLWnlQtLDpSkK7EtsmVH6A66GCh67j6sp7Ikc89SSvXWeNOBxOr9E7qGNCZpwpmAkYhodBNF2gCtvmb0kAXxMJgxrnbKVb7jGc5gxd89sMn1Idqofjd8FKBwElvcdScKDwgQ%2BYDzgffvUDqXiZlzLt3FfR%2BwqAMW9siGSp%2FGsaD1hyCn8vqnEmkwf5dzfbxNq9iR987uMI3u1cAGOqUBQtWMfqYyKM7xnK3Jfw388vQhDb3gP1wGIhx4yfacN9r0djTowgHhNvem0ZKML9Q4WeSSw%2BpQsjCqzaiDFyjF6zWNQ%2Bql%2F17727eecc2Fl6kUCAog2UNgXBgrWZJ0EcyP2V9UcQGORCmtQs83t1Tf5bXXUxqzG%2FTmfX2j9N4GH%2FSIkGN6c7u741mPgN7rvn1MLCS8h7XFE1eCtrWhsuRDIyiq2%2Bvw&X-Amz-Signature=8666646911b4d37ea08a05ea1be2320f8039f09649d57c74b73259bf8cda3023&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

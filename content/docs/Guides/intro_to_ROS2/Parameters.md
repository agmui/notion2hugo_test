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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KFIF347%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIEL8gGaT1UW0R%2FQZsi5XhWCU%2BYFt8jUsGuaPH%2FkP4N3wAiACTBQMZ%2BeeMTq0uN0RDtqLByR1YsBeQQg3JpdMS29TKSr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMtRjU7bIGjJqc4Y%2BwKtwDZRlSDZOMBL1%2FI80YCYfnFreZXZOSukOpI16tSxH6PDYxy5jlKj7O297GlnEdHXIWPFMpRvSsNFiz2xw5JOKSJF10rR%2BgCB%2BdJeKdJjNvNmCyA0CTapQkadqYmvq%2FYfD6bZf7PVAnpHM12VyiOZ9fLcW8OM4sLaah1uSzHd3Ea3xWwqFZm2FqXkzKzzqqCE8lbngk4%2FXKF23WzDJP8ZsvFr4fzoKFBVkBDsifY24NFGRYLn4nF1FwVCmZVRFjN5di0QqgZam1RK3kWJ7Q8aSQH6ZEkb0yzp16f2yN9d4z9Pr8rm9AKHFz7p%2B%2B2Q5FduXKHnUerxXV1xq4034aIVL%2F1iv8grx6f7cv6fHaTKc0n51%2BChdSMyet1LdzcEcUogbCm%2Bf%2B%2FWRVyfyisoxVXMnZoFokN5owdUbXiK7ukl7bt6FDbvguZSEE0plFevNaGnIlx7JoY%2BwzMCprp2dVcKItSSKDbJTtR4d6xWvxF9ZDwmMsCIwwg0LUl0oERyejm7CS63Av9WWU0aoJYNuh6s39kwZTu8QIaAfQzNtBkLXdWyZtYcQLsY7g3UjyXkyZAS1wGQRQdtzozGOHT5YLCB%2BULQ8rubhz2tOEyO4kTdGGhbVmvAlMLCwyCnfkGDowmsuzvgY6pgF19MwfQs74j0M8luEQ5mFjfZd3qMleYlqtoLIwbtEskRgobXFRqLOvAqpJQKuTFpiyXj0%2BhA7J50%2BSlvsZt6HTOlRaSQugW61dW2Qmw2EN3IGCOsKh78mnozHcYQ9bb7sWi72GIUl1ss%2FRKMoQ8Q%2BLYAIcnAdPloAUuko5Y8ZzbPUdLOXVvgMG8GLFbRarwo%2FbTe9wU8UwVkiuvrbz3dHvWtniZECV&X-Amz-Signature=7365a82b93c64f94504983884ae8f8039855975305b8ef7a8260683aacd6daf8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

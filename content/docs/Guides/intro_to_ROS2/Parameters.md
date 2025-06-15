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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB3ZFQIX%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEy7QFOlTpI%2FgAwne1jXdTVB4o9XtqkIFWugF1snyorcAiEAxOkgGWzBuGaMvJytz0%2B23qeJp7Z7lorobzKpk1lr6PIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIA1aZaYiLlE%2Fz1bayrcA3n1sS3XofHtIaz6U9Q8J%2BN%2Fwt%2FRSefOmnNagmvXMVADrhGjVkxRUJQCHmXzYTfBWu0Kg6syLULGcOnHTTgXlyS92vTUdKkFHkrwp5cKf3oRyWQDthwmOGNC7JZF4g1qnV%2BASgz9aaHlMfyBBsMm49ismAfCEX1QYhIzTUHOizdV03gkOYznsPyvQQOABeozLZsHcZxr7bXecYrGOOP43EKucFuWlccD7liAWyenJdYaCNRxuTeAo%2FLGvxlRFp7FEqcQvJJtPv3LAEVKYFkjjscLwL67n3QIOu2hcEKjxf4sJKBpJnWAbHibS7NznhW33zmmpBcu8DjWgtu3LWDrcI%2Fjqm052t5Xh4R%2FDRYDOp9bBHopVJe3Xhjv%2FaOHdQ%2F49LoeweqBHwRuBar6DJA1rUxWzdq45E2WOT1vWMe8c2FU4MjAEmDvbUBW7zfcNIMQnRMykq6BTAXIn88m28yivS4xLKl9zBtuGgLnWzOd5gpMhirHzFCGCCSD2hg3mecV8KZLrTnIsMEh9z%2BPqsOCGBhyiLP7i%2FPqSL0%2Bt5H1M09WDdKmUDQbYimKck50Dx%2FGIPbbzSuFpbcHa0A6D2FFUPSm1pp3f43aMtM%2BTdeqYvDk4h5LTUlQMj9ThcSuMNWFusIGOqUBf82si47rNhVhw0Edpt%2Be%2BYAgPJcoGj1npfi%2B9plVcYxvY%2FfWIFRXBYTXMFxeZIgmlDFyFrfUyUhtCxFcrumF7G94LGuH1ji5R0yfu8srmierP0RZe3D1OF0g6w1W73TmTNuk2YIg51PDqjncQzIGXFUWmwde%2Bxt6xEKYFG5%2FWKGeZmKKDfGaua%2F01W4it2GEwEhQvlpR1ZWoRXgW40MUGbf3TpaH&X-Amz-Signature=f321368b4cd3147ff03625e8f8f0ac3c7d1371733d8fefb0f05359d6c38bfb6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

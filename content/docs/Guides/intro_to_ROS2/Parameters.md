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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X637QJYC%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIEH%2B2z3pJzJiCF0h9ncrBlNpWGIfmMbi6M4MgoUl0hnlAiEAkyzWKu%2Bul8h1FAWWGTw3vsH0QSpECt3LwhahFUCqGusq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHglNtU293IWwwn%2F2ircAxMfdV2wVbd9c17BrXfXh0F25kBva8AueZ0Gm92OGUU%2BSo2jE36zJiK1SigoWG55bpKDf1BcehxEO0DGpyr2JbzwPtHQ1%2FFkCfvt3jO0olxQQLIDdiSXriagpWxJRSXinlzvAWVq9%2BnFT2xxbaCUX48VqkjY23jWx%2BSs015Ys7fl9KhQt5ZNqJ5TDIYc4qFJ3Gmo05J7zxjIzTgbss8JO5tZgfDGNf190fJV%2F607aAGcfI8ltRGy1BoaKcC26i8k5zONHhP5pfl3RCb2lpyGWsi5yHcZQpgqrMoMh9rTcWwLx0Jg1Wih7NYUUpV0Qgni5Qg0wnbPA%2BT7gPL%2BfVWJXkt3UVSpjtXH%2F7hvSF3IVCCd42BXQ2jEmYB9Jcj1lUFU1iHJWXqUzXQAQ8LtO7E0emiKuLwWD2pthy6xxJpbXTzKy%2B%2BLrfvlJhP88va15pvDbSVGfxLGbDERMilxhn9JdtJvHVm4J3TaHDAhoQNcuwnd4Qwt5H1SciIxqkOS8c5zEMF1FzgyrjBmV1iTG6yvWuevKhPvUBOmTqPPNOBF3qrZj7tLEQoSt3vqqgsr1BBepS4DghdvroLkDcGs7TWJzBcNFgvFAmArsVczbXDbsjlaajeHw1uhX1P%2FzDo2MKia4cAGOqUBl6QTZthab9qmndXpMrYt8aFcePks%2FuCgdbIm4ytpBKVma7MUaFP5wEvGenXJBESkQf2zUNOfsBUxNRJd8DIYRLJQff42IF4jkM11VqTHtv87N%2F64dtrVQ05WlrDZcssGU%2ButtPZFqp4FM5ijfvzxz5KYU3BhGvvDh0jGqr4Ny751wjJqpQPGhg0kHzCea%2F65utuLr4q%2F6nHJxD2qEC5EY27bAKHN&X-Amz-Signature=40234a1ba29d1b757bfb8290d01ce3251b7c14f06ffc261b0bae96b86115284d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

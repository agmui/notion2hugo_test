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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HSYY46Y%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWkzKcIhrhdyCjogCgLKip2kNocUXfYXHN%2Fo21fOUPVAiEAxBfiRTnvxwj2mFGeUMqBUivdiMQrcLoRw2hochQ%2BnDsq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDIn2fNYZciY57pZmRCrcA%2B3Qya1vP6jO%2F2ext3IkbXMjhDHP4y1clpAlNnIbL95wwRozpwHjOEtO2vJKalSPJW1JAvm8jPN5V2Z5gqdoB0uFMYD0hdHtKO0c%2BxcRZCjzgjhv2EOhP8YS%2BZ2qpjcBmxjsQuCJMER9HVtA4Ch7UEqVqOyuXvXm4PAIqQvpmuU0Sp6mrVXx8ZZ7rbuRLFfBvwVZbeaFqiQQ96yz3tQFw81vY%2Fdu%2FzHyeqNb9FVxh%2FCTOFLdxFx3bRxSwTBpxCK8ugfymQAWsqGPHsaaZ2pn%2BP%2BJbBeh9QJwDtjSZdddv9Q5NCGm%2BJK0V3mo87fmjpfR2wz7ShfAg%2Ftusc1dxiz2%2FbAxMPonlmnpi62k%2Fln1u4gZk%2BmXQXjoFkYFU9Q64%2F2msfTwgB0uGiplPzM9uJTeRQfZgX3hQRkevPBsjNchXFCKoBjn6d2564tPsCbooh503C28GeR3gO4lzX4HB2OxSS9d4dccPO9LiujIuJ2zKBd5340s1STbgUv1tAoEFMS%2BRaD7W%2B%2FHPLpI3PNQasWXGKHVVYz2oqVOEQc45QvHmvWgNQGzlDuqrlTNjPoY6RjU7aSYp44nOHDUqxXbJFNUv8X0H2sUlq7Ag8Kh4wERyN4MhPzqnTNZv8VwqF%2FBMOGiwr8GOqUBdKmNWnZCodTANKQeAU03yTq5q02KCFok2%2FPDBJkTrTFxpDh9OQuQh7z1ChR75qiBqmwP2UJEEgALLamAv%2BNOPX4NdoqcddIWujr4L6oPdxRx8PcYlTG%2F%2FENZsWHZlASOnad4LpZN6XyGllT%2FBwOEOdZe6zNoWQ6alPXa842RBOksfZLkQhZV4WtMaLSLZCaJ3ExRaxd17skAPogI3M5KqMLUXK1H&X-Amz-Signature=ed666e324185faa3c83def9e5345f9b1de8c8ab49d2d86524e8c12836b157507&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

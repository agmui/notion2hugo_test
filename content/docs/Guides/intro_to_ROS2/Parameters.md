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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALQ6FTE%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQC52pcbJsmjS7SBEHTxt37QpchZPVZ%2Ftc06dT3tXNQddgIhAK30ateqAsymc9yHPATDjCdpWRVGF%2BpjxIoLzbaM3ui5Kv8DCHgQABoMNjM3NDIzMTgzODA1Igz%2Fbb6XQf9G2BAFtUoq3AMHX3yCCNGGUWhG9KwFsgSzPt%2F9cQRnqZIWJvtHd5o96%2Bt1%2Fl3EplgRBjfa%2FewghsBlKtD9mWSU62%2BjTZS52ewaXJajl5EBnwuz2z3dvUeqj8bzKech1x6tvcRi2TStZ6r%2FpjcF3uenFOTnB7K5MCNsWmjmXDUwt68fbPnLLDl6bBbDjt0AOYbBAxsEewxqCrABrKmYomqFhVR%2BncligKoSJ9%2BlLy%2FK%2BAKyOgiMnWJ6kFb8ENtIZdJg0jLunZJuFx5fqLitPXSeUeFN%2BIHEmIRLIqrzxrpLoRuzGWKqrJLtnpL%2BmAHhSNINwxAOC613y%2BDM6ETOJNThsJSm3BAFuz5pZpjet6uqfvTqqZdHkwl4FfXMQzg51B6PI%2BKZR1SgpJ%2BZC4LG%2FOU5TpezMECFBXLrGcYcHI4LM51JQgHyUKXTRpQfa717vry%2F%2BObrnoe8lKppDaTr1jJvZ151bVQDUl4z1IzTOQsMdh67IqvwWwQPKcTMXaQ2zcvO1Pg1JeAj1slZp6j5NuEyQd09CUKvAF%2BWsfkOIrryHiPLxbTR0wHUks97t5Q9QgZCm1z80acio%2FUwlvCKIw27m4k9%2Be7LYNt9fQ%2FKomr8%2Bk1NrJOL36Uc1aGL1rNrK%2BMPF1nepzCOveu%2BBjqkAW%2BVUrKZxwAM7U5IaUkta5uCtiGhKUCuLXrTdSb%2BQr2Ra5wXMDycYrzv0VjYeMNmfskkP3ZMYPjHORAW5oOt1vLXZxvRdCUAEnJQ8EPAQT2wNyJ6cQ2y2Z3hriVp5qScMyv6T0FGn%2BFZoqQBPZnvXufvOB1%2Ft326VYT1w3Nfxy2t%2FK5twWEYr%2BEqR8XInybnFACic9b2aLJ9k8lYYJyHeVxJlOCV&X-Amz-Signature=63998d3f035e8ad3478573e73ad4a83c630f4eeb873e22b7bd09b70b037895b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

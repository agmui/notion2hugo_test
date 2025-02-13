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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N3RD435%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcSAmaweA9mllFMHq9OlTIghnmdTkpUoRGKTA25GQ%2FQAiA37%2FZ4tDCoOq7Oah%2Bx6WOtQ1Ogafqi3%2Bo58MtPs7roTSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM1WJoS2BbcWlhmmhWKtwDRHN6z4UgOdwUWR1KafrHYvgHAv181fUm9V2Yft4Q413%2FkXtlucDwSPcn3eeODDaRcGF3707sLFCGTZU9hqAEI4RxRf44m%2FKG3tDQVyg41uZQorzNNVlz8XAbhBWiLYwDdhFIovM5VaexmSParofUdf5J%2FlEHM2VGPhNegu8Ob5m1N0FjuPLX%2FEQRDo6ICpExpbMm2gF0s%2FTIweCT7jfOHTsY0WoHDJPO01vJWz%2BnIqJtUjH4hc9UmXzehj03zNgcZ0tJenoIFctDDGc%2FDqUS029Mn1F7eDQf6vsiJWyEVt2AsqXi8rvOiU6kz2VOctHwVu9lWTKDAX4Ehe%2FWko9gd7p%2B7%2FFoEJJVzKWAwVW66sLnHbeIwInYUi0iQJnue%2B%2B%2FsqqHcAMvusCLL%2Fh6u59MOiTa9CNSIGfRy42GvFd7F1uMIjsjZNa884QvGAJNwoizAdJF3VScvJ1kiTxfFjSY%2Bj06C38021IeTUWd60JsWbGefV1wSjGVy49MkjIEIo3c5AO%2B0%2B91qngiJAudy7IZ3RJchjJOcP63gQPMiytkV%2FHntUnqXcDMxDoPxBEaxyaFh2lMKAeALEo4IZNQW2lg%2BxgtHR%2BzvKndzQErPG2MwRu6s0Ay3CWq6P1a0dIwrqy5vQY6pgFyXu52Tjb9L0DcawzzyNf%2Fex4bk8y9qHy4KY29y0XLde93clO4H9WBkpDxNS%2FFfOJsJ1LW4PQbjElajlrzR5gDqNLc3l%2BUdHqqsUO%2BF0P6VdFj09KNPAd7nztyec7y3W%2BTVxDPY5ZFHZfFEvHI3vMc64zOhjZklshK81PzwVtHcNPsrXid6iQrc2K3peFOyQO5ZqbOc614f6k%2Bs8vw06WWbT88ACYn&X-Amz-Signature=60377c99921ae42f78133d0fa9384ca48f9a1d5a652f6779ed8ee464d86b2258&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

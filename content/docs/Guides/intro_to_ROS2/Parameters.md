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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3HG4KG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuTUZG5hhwLr918uZVYVQ1R9QaJg2vOz4gY9bBM%2Bs6eAiBL6YbWsdwk1o3tDzwzQtu8jm3ygkK7tTQ43HaJdj3rEir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMTI19IOSuUp0i5EkrKtwDwyQ1o0NbffpZ7uOoZ8CbCTDziq%2FnAs2Bq%2FX%2B7EoUx4f%2BlIEMwrprozmWUwCn4FWKoIKLDlJsBO4dEi4FYwQ7%2Fnz3MhUZto8q6STaIIkh%2FsU%2BOKmZatgnYHA6UBwk%2B%2BCBeP4kT%2BOIPitS3RYRJSY7flCJzdlaj2jm62%2FHIqfOAr5IhZpEP2MA1U%2Bd616UFXjceVRXGcgosfMAgpfv%2FInfF4vFEIpPFmPtvntZnccHQMTaOC0dhAza6Mc3YxpuJgAl6SXSTDWhsXmBMaF0MW%2ByzuxGxpzH%2BX50VHZH%2B0lJxua%2FSYFTYxvn81FfQk%2BTyIDAJ1hwas8fTS%2B3wn6LZZFoiyVdrn34O7%2Fd%2FwnTLNvXDD6Lc9VsZWvdwn549B93qX%2FPpg%2FB80YDP4t2FRNVPUWdiuJ%2FrY%2FDknDutmdwmcVyLXYySuC%2BrcdaJA8%2BKWB7ByPuSa0FM3KyI48xOm%2BDjVu3wGlgQIQB0g6foTiCy3tFah0J9U%2BaTyarbqOelUVJWMKlTSUoLsEZAsjdMCFPbabsS0073WteenByaqsM%2Bs%2F30g3sfPwMLb8u%2FDg37bxUh7yD9JlFt26IWHZ0Cu84beYQFoKTnyYr%2F8AGxysYUuia9RayATJE8G%2FePyvEOdgw44jHwgY6pgGs%2F2l86WH2jJezwM7Hx10eW8TeNQmL3QbT4jEhJfG13cSLba5ByEsdfPwYihIRbWRhrTuffE8l6ya1OSCFYik0Uc6zXpczPDKOPdtkmm9g%2FJxDRdsvJXXwsxNlOplM%2Bw%2BtDLMLAd0ZY6%2FRG3aQcuq6bftwO8tHaJelJemvvXj11%2FzxQxaCvilsTY%2FMQ3Ow71a9saifYfHpaWpnmb1JdPGE1DFeCWt7&X-Amz-Signature=5ec832f8cdf8aaaa21942ee5a10c78fe782d2565a4d691d3d655ce5c64f570c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

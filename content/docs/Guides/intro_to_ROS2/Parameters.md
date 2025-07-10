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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PTUSAH6%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCW8Ea9p3tFQ5QtdCbEc3To8E6NJxZzTMkg03yJ392UrgIhALrVC4Kk0BFJ%2FQXfEkvTGar5qn%2B5sv9UQ%2Bfq2mRyFpW4KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrIi9DLCrRaLrMg%2FMq3APeKx0vbTd%2FKH9j4Dc0rp7Y23VR5h70kT%2B8zVtnQVtM3geOCOkRS58tfLk%2FGvW74Lbisd4clmqsGB%2BYbsGfGcPDp9hDFoNSXl7gGITwMKKV6J6h3V0nGazq9zBHfR0DDjCj1X5eRDrE%2F9XY43ug3qVzqOQJC3D31r9%2FAsqCxoEvV95jqFQBjyQn%2BIytFHRmqLTy80vl7WKyMVT%2F%2BEhJM3cZ04SB1s0M%2FpeYf3JGEoJ%2Bgk%2B8eM%2BRVA8a5hmZB%2FstCT5OeLkZaIVTeX%2BbCelvDJOS72Dphj7VM0hi7HPPe1TaaSUHFIk36ZcaEl%2Ffx8PS835BfMDcyx5QboSVtNL6WORgcl3%2Fl%2FiDT6wtoL1keMK7qcJFfUho0mJCkeigqiBUkeaPdzsjS7f0Hnr6xB5xXVUxtgwQWLYlNKWDw2k%2BXxIzP%2FZ50HPQXE5xvQdu3LecJcGze31Y1uxX1IAGrzaffrhzDPgTOdaCWI1ul2hnXktuAD3cTjDVGqxPJn257Vet9T8jzfczeuBiu8U70GTLuaUIsLn0QLeg%2B85Cl6c7DeJGOsMR%2FzOy6LYdITCpTYVUt3QoqED4QcMN0c9Iljst48m16MifpS8ZNHfNhjmM%2FJtvpLUdleHsydfK9TmeezCE%2Bb%2FDBjqkAS911TJibA4JbO4CwAzWlZ0%2Bz8YyBxcE%2FuUt8ZK7xlgoiF7C3kIYi2Iuua%2FYdaDfpF490nuUpg9T5GNbk1s5IKufXt%2FXk9IfeAFIHCrTLcLdklleIZiwfLYGb%2B6Ouqddsb5ULPxBAkbZO9mZ1RcAmnwq%2BVYduqvIEKQ6nKf1T3bg%2BYeK%2FEJ4rc6Tdsez3w0Q5XBHwrDJGuvf9sq3lVPBR8EGfg5C&X-Amz-Signature=586b0c440c3d387b1826c1d89712326a559cb4833e8286afbaa631052a63642c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

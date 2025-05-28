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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6XZ77NA%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj%2FtWDasulg80mhBvBIiLdVYwAMVViSrKj1ZH3iy1DuAIgWvjuVd2SdHtWaHAqlx4K5FyJ6Nx9VbJVZbAdLSFVnE0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJFKIRv6RInA12snLCrcAxCWbtvtyU4pschQBxXjiHOWk5oXvaTdW4LUz0eOQL8mYznnBVI1Cy0%2Bi1Wm%2BYTi2ohjXIJSKOr%2FCntRQixkKS4XlzqmZmZyim9tY7Y0udtGWEX48MYUj%2BwXpi5%2B9oQX8q5jx%2Fl20RfrsN%2F8eOzL9txYqEfIltqdKTlDbSmzkX0JOuJBKZZN4arRl%2FvqbE6TrBrzuZ77LC2Pq35foxLIn6kypYfCCxKYOhqKKXF69hUsHTSBIdKPlMim77MlMF5SJlJ1ypyqvquqSW5D5We4HPDNA4cuJbcUuNOOY%2BrrzRT%2B62skXSl7fc83JAUBfoN5t1fZlnLmzkA9jdYO%2BJmEmP%2FdzDvyvDl3C7eSdOTHSE2Rmv0%2BGOkSNTNS2q1nrLsx7tE%2FkyHsov2olJfy6hX6HUFpoAXx1dQyCCfiTuGkQPUmeGXnBkHglehBr1ofYCETaxDnK4hiELT4SHvioVo9Nr1uUW3k6Hik5XTT86O7YvTa0FVB90qCR5KoaRJ%2BeiXnmJIEdnYG7ipBLFuvOdBCVaxfN9A%2FM53r7VR5DHD8h7T1pA62BuejGPsM%2BuZE6m4tEQWBGk7MHsJPUVSKVGlFOkS2iGAcUpNz1WGT2plqzczqB1FbJtGT83HWNo0LMOWX2sEGOqUBEOcLEb%2BT68dEA%2FkJgRGDhBm%2F5GsO08sUrKJDrxhX0f81T3Xxumm7fS3y%2Fmq2q%2FtKQRTCiw9qXTNiR%2BmX33OwX4lTrNJIXAr6IHvIDpweeOOrsL3BhQCGfohJH%2F15DRBf5GRjcEOppXb30JPlxkSeENm5e1oD%2BaOChyO2ekUwto3zes2dR6NydMLZD2EsoDcDObmYXfN7fpMIFLwXSGSwZeB1j5ry&X-Amz-Signature=9f4d6b6bce6df3ebf400be9e7842cb1dcdab672cef69192ed7eba9494d02f5bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

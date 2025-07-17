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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QCQZRD6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIFITeoUQ10RzGzNUR4gX9p8%2BvwAaOambsedP43%2BcJSLlAiBrOmY1kGlACJsME58g9GNNzjzHKGIH%2BVz2oZ1T8FxulSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMix6x157w%2FnA3IW2pKtwD42TQHReTKznQm7vOIpCb9gnkEsIiN8I4T8GMknZOdUkYYyxzyrbxjisd4ShSk0pfiF4wLelaafgjTnl9Va004fT0ozn5Q825MeMf9FsVp53e6wPH5ZZQIkT%2BEMWn1ce3htCVUJ1zoG1W48Vz4KZ2Vls3L2kbKK9f8x%2BBtF%2FRDT1y7ZMaUJVW2G3XBzT4jsEJFKBjpgAwWtoAD8AuAE660vBUWB6Zs7Qr1U096CVXxVukThUgXsD9sYxBcpJKQgZPU575wz2u9ZI3nCZPU%2B%2B%2BJwwDRQp%2FDVbfDpSuONdsNGjPhWZU4mmEb3KzCj%2FkieAUX6EwJyVM%2BrcMIZHrQQ8gGXhTH%2BHdWRAr%2BNq72H%2FIobSJQZTWcyy4il6nJfLju7N%2FIAZ%2Ff4TYNI89qZlFs81VIeIZYrfK%2BptfEzrs2LFLjJhd1L4oZCJALUrRHdxyv6ZXyd0725cU0YLd3vNQnoqukxinfoMdnB9mwu2uDWRigBFvQRGtJBnn6dr34tKNDOijcu2ckVB8QuiI5JZ8N%2BqHzTh5Zh3oviPpmO77gTOMXw1sV0pI68Wxis5i2D5tu06YLGJP4huHU9Mz0W2MT34wIM3nxaKGc1wiRQDMxuEd9uFeHyl4YZIGPOS%2BZKsw777kwwY6pgFx2nGNn99pscCyjPhe2D6aKnERisP1IQb%2BUgAhFWaN4%2BYYUw0pBG4fgJKGBqEilhGi0cznF%2Bo%2FZqBMRrqO%2B3MGn87eiO5IgVtPkYWPOLgy9sUjZ8XavGMMbVT%2ByFRhjvBeHHaDsnLf6IwVrJK6uFJ2LyHsrhAuU8DbCY8y514Y6gKADCS86s3d3BSg9ZLLLgWzXRbaD86vN9gIy77hOyQg7DNUnAuH&X-Amz-Signature=00ca0e222b552201bd89ad0349631609729ab1dbfc04a47018b3e3a569579e45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

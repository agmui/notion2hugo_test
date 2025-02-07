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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUBNVFP2%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIFu7naXwORMwBvVP4I5F5EbHuQ%2F3IhErfylyt0k5I3umAiEA86w4p%2BvYzr%2F16SUG7aDyNlBfgb3KeQAFr1z5TEjBUkAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKuA1DugwPypyaig%2FircA5ohUkDBY6e%2Bvybuy9kkuJ%2B53CCfwSC%2BrtZiMtGX8zSGGOcUCwHz%2FyxRoQN5UIL%2FrdYCwYUUG8%2BbOENnAkfgXWjK8C4xVexBSATSZEyxfFoSSHrpQ3UTqwX9fikukChvOZRAKlwPlHYTZlOFDBxP0VShq2zS%2F6CmPgx8nY0gQBo0euHtCCZYJiOvYZDQ3giERLkiYJvLbs7Q%2B62O6dhezNHx5C4SQhR90WzMjReD9Dyv%2FxrBX%2FoW0qODLmXj829h6BNevjLKd%2Fs5k%2F04uHDFiH%2FisLIfhwCb%2B3mxNlHwgWE2Rmm4WUIzppc2gNoeBnTB7e3l2hybNa%2Fjn%2FWi0THwGh7EABu75J9%2By6ejAkrllhIOeWx%2BUEAwt5arziyQI2Go%2Fgdwjgp%2F2MzZDgdHuGNze341eXtNCUflkXkkZSuc2jtM5Pa1fS6gFornxe%2Fd%2BYaq6Oa12RWTumq0qOd%2FcXkccNFQtxTjswiU0Z%2B5e6ELp6N9sku2usfw9gtkTtzhHAeMsxJ1wdo2wjkzGvazRX6HsEE5gwoMOqGCivWvP%2B8kzA78PbZArI8%2Fj0320jQrd8vv4SYjmI5YFBysnzgNg6qUP4k%2BlZwLy1qnru4iHJugEY35Vv9%2F9z5S5Y4Ws4k0MIKbmb0GOqUBv5QY3dqGGpTv1HbRfCocEajx5oKxEEbFYoKaP7nLPlqBTZTFNXGbVAz420nXIXwJb8L1N%2BK8iq1R%2BDOe6sk%2FAbESYDbW2kI5ZgY%2BZP6YRlZSOmsX3srj4XvyqE0FZEiKQEWPZ5JjGn6mf4EHumEhXMU%2BiFFdDRaPT3ZYfy%2BYXk%2BBGAIMTi3Nbp6300uZ%2FFt%2BZddk247FRkMgKJsQrCTpHLmcgMOK&X-Amz-Signature=728b0a2c1e7e1cea4f518c991e8a8ae60d36a0ed4aab7fc7d357bb5291834f02&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

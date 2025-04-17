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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DCX6X7D%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8Yo9NwwaOLo4RWJrH3H1mGs7OdtcEkSqUH%2BGdmT9OnAiEAysI%2Fd2Y4UDUgwv3Z0sNvsE6ivgOXGNKUPEWApfCiiRYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB1shSNgMSUOEVfLwircA1h5u3vM7S7nQKo0EBpBt1kn5%2FruiTqNEP%2B05DM87ZnCI7dVKaZ1xvWqplCJVsHfxNum6Z6VO4Lbm5qrVQkXLcN%2FsIR27t%2Btmc3UWpcJGOv5AFLaGXwIoEwiU%2BHSpJwyU5kN2JbIT%2FkxlIwxO2sEGdbnR25QrIL8jn%2FsLejsYcPKRgrrVGlwvbDJzJBp1P18I7Y8%2Fav3z3ElxVx5C8XX2x%2BJA7kn0JEWV3VHuuOuyXqH8fiNy0xIO4mfrBjos6wCOkOMBJJXjESfprGAMLn6we%2FJAB5fWCGC8%2FirdfRe2nzZSoCv9HPIudqdnrSuvbLwtTXvYZs4FPsBbuP%2Bvt1iDq97N%2FAFc7Jop0lYajpHoHfsnywYyFIbCIEqCFicnPiMiNeLBkCQLjGUmZaKJcc1rfCNM1joj1d4iUT0huxAC%2FQ2a3g6I2Kj%2F4T0bCRRvipOhVJBautck81XEkrMsxGLkbbherempjsCQCOhMqrgdD0K2Ywf7eVTJ7fKvha4zW%2FKS7K045ex%2F5LMUtZ3kTeyr3TVtZ88k3Zm4JZ%2FL9K4MexR4gGrvvCd6Svy5TZre3bnTRczHjYbCQtu3e1xKcqlRSlWP1VMBlmTQpDOu9bxzs9YhLioQZ5onoonoTIgMJjHgcAGOqUBVGbwxo8%2FRVsqwK4LmcZjokdDIPQki7fosdMjw8f25QLmZ810cJVdBYzLmt9qCyRlj4shBKOVxJeZ%2By%2FzTHgyYH%2BMFyE%2FOhlH8K%2BXjDyCQmKVly%2FVsupoGDnsSdSe2jSlvgTa2TCnhJ%2Fl%2B23mwfqZkqdBKSGQB1BoEkgQ30MRO6qWt4dZIbU5pP0ZtfwwTe3g3Z9gEMk6FazfHVGhWODLd26owmY6&X-Amz-Signature=3a081ae3ec549aabe9e006bf4f220c9e1b7339429bf70db167f2bdd6c05e8372&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

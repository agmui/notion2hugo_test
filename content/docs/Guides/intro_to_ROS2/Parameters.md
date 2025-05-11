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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYFIAB55%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC0pWQo1cjQlsFNQhfe1hkb3RG1fsDGBHFgkcVAjMIHXwIhANwb3Q%2BgheMr1b1U%2FOsW7wWXk7z60vnbRmXIlnudIxcaKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRMAj6wixndmfN9sUq3APRC%2FYR49TkaNJUe0FkuSzktglmdSFC6b56osbRKUqGKGesNKvp0g6bjbPMd6FA0Ptrc4Iw8e11vQraUQT7JSYyS9HhYjj1dIlSkk3hLKNU1PQ6x5VwhFaBHrBNuQ8uuHxrHRGMPB%2FtSXQ7hoPhVKRJCKTuThtDE5raB%2F8mNMK8er%2BkXrdocqkxx1wOZtaoDaS1ygr9Q4Zg1ztyb8zoc4xsxZQQbjPJMc4VTq3c7MnCpuo3TY%2B9vSDGNTn65PQiP46r%2FZDkPt39hL7i32WKTW3TlROg%2BmkW9woS8BScFklGMbIecYTPk4SrGAxUMQy4t%2FkN2K6slRTnmwPMkI5zngqM%2F6gO4xM21teXQeVUZD%2FVM0mXcuSiOQfSwHMot2A0kQbw1u8hENEHe8dDTIzbiw7l6LfL%2Bp2YNvP6MyV2iQPurdssVSdaZhw37e0Tfp5e3%2FjdDJbTmu4oOcpgAlHdSUyFJJ8iQ26fIQ7lxk97KpoSxLhLSOMQ1wCivPBg3kz2YNYKtlUELR%2FU2yFXHml1E4RlekiRwM39I%2Fh9mGU%2FMIHzrzV2zsnkJypT7LbvTMbpjGM%2BFCpTdj1w5g6e%2B6WWB3u%2Bm%2FZmnRHiQnToHBQS5x5qsIIZWtPPPgj72ejgWTCl3oDBBjqkAa%2BnzU3FCwfT1EKJuXG5QW1S%2BPTrazBfkYR6yyxzHSLv1e2M4Kj%2FRs5KEhgLS61WmMsKSfdz0Tt7ThPapEMdDSATxpaDMhwPnY0fZ3aDdDImJiV5GCseOlAGLNo6enXuRKQcl8g6SVDCKWJrGJADdg3jEsBbpU2ivlvZld3CTEkft4xJBInsHHEGD9WfmqdUvtM4thWoYnEw%2FYl1qH3J91gsQZWP&X-Amz-Signature=fb05728c03b69ae8a3ff7b6a3c70716e78ceef25865ac4eae88fdfecb17713c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

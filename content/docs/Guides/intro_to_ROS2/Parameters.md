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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R2BPQDD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDsvMdCiCB2JnhTWo6bYO5ZSR9mKMEPc3p39KKp8lk4EwIhAOvbS%2Fm8o62dz1OUIViePQj0gu2Jw%2BhDK%2FB4UdOD5zCfKv8DCFoQABoMNjM3NDIzMTgzODA1IgzDft1DwC5GIZtWnwMq3AMb%2F3sW3ldgJkVgtgosKZaZ%2FGJRjpS3%2BFKBfSqX6dDSXjnkb8fjTAfYAKfj%2BPoxPJ6FtH24imEORjAyqwiqO4gFZmLd9PCJvVyTROpY2yTONJ%2FZmCkjBDVbus1WSwGmAknqDtyAAYA5u206czG8x%2FFREvMYeGs%2B88k%2F%2B8bPZ4QRBGFl3olnUczHGRxNbvncs60b12CqgoGisELXF1%2Fn0TcLhwP1HtanihPw%2F1V13srJrl2YimyoM6SMIRScRv8%2FCNlFYR7rNWrZG2HGqDWhtMkbnzGtI6iZFExH5bod6gX1lH05Fe72PBVxRtQeOME5Qb2TDKQShVeCtZmCCd3QLD1mVJhGlxuPeH50ZpKFlQCMOv3N35LBgw5tMSnDD3aU0nT2FVtnRKlmRWM%2Fts1lqmoVpUIUOXayfqA%2Fh5Dkb4M0KqBXXC6RZyBuXNmDeOYLK3dO2snognKztINRM5ncZ3ODx%2Fi%2BerUD8TRQKLc4pnw%2BCKZcLrr%2BNbuoFVue5wbzrkaKsdnaSWGgCRleXgV7AI1NjOK1Y5mNraMub9GAuj1QsRuC4NT28G%2FOPIPekbO8%2BF6cLhOehrfRR78%2BfxHe9AD3H13tGuSzt%2BOqi8VZ6XDn3HcCzTJM%2Fo7VS%2FCKHjCQkbC%2BBjqkAfpOEapap2FxWcgalI3Kwyng0CWFO2JqGMhFVITAaAVcbVFXU2HzL7O3QdBhRWm58OpdAOJqB8UWCHB4MeQzJ0zi7kdXosw%2Fyq0WUmlOMW9k%2FjaYfSrF9wrbAnu62wgqDisXJMpMfbBvp863qNjl6RZNf4R2IzHo1asIzucQEAEH%2F1pp27E3JW3QvtllI7afjGofK682lPEhFf9pemTdfjiZI607&X-Amz-Signature=041d801d941326e33ab03877f09038c5e172586117f3cfd65fcc64ca1c8f3883&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

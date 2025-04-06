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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNP3N43M%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVk3uYVPAfeml%2FaFZOdx8TpFWIgkiAjFgIG%2Fs09pFsgwIhAMcMOcH%2FdZcMdbks%2Bohb%2BmGt0Swg2DOw8sLYXLYpfW71Kv8DCEcQABoMNjM3NDIzMTgzODA1IgyVvUO3pbHkgcvKok0q3AN1WYbhpi%2F7aOZI315iB%2BEnp3D6QB%2FT4tTHCvjFaQAXBtd8lPx9i5h10yjEXTPaNNtXG9VTxqEGKfDwEpTjJ4RdG984qVN%2BRXYf9P0ldM2rx4TLdEiARiGjvZ8j6yDEJ%2FWqB4dfDqb%2Ft9PNHl0D8jp4R3aGm6j14PNIbtDnR9kuDrlqdTdx2ixzy1wxUgispWy6IUCm1Gkt%2B4oiELQ2Ji5AnYacwH3gQ4BTi4BSC6uNOApJVq6dM1jyi2hTzBSVX%2Fz%2Fxk6H07eWUXSyNDJ%2BfYl4ROGInjSZAu1%2FnHE94dz4%2FgRLcUeCvgzSWmhbWvmoaWfV8RMjH3FimJeDThOK1%2FTHhPWicYATXHcGRCEhjZhnSP5bmTa9PcshKIXSZS1fvOqXW09Gi%2BRisL7mI1cQ7SxEGJoGGu70kJBzpbnbrK%2FDL6r9ugbQFaJisqF4DAW0h2qZeICW1uvbip3XkxQqFgsrUrDo3Y3ZNdHmnuH3lcRzkWmPgI5MXn3I6syWQUYt064G4x0aH0wS%2BcTepd21UMtmH28apzXAAjTa3%2FNeemiUBGwBs7grytpEKzkF08AxDzVNaVuXFTGZdzmHZ2DxZvfGTZ%2F8pDAJBCouHL1OwEOoWp%2Fol65ewyGG6uNaPzDwmMq%2FBjqkAdJFF9tqjlEF1M1PS25sPj7zlHUZXlyFGBWZEfxrzfCgNzA%2BomK4JerPkEr7WqoEABEmUw19SuolEqs5kysicWbv1%2FEC%2B25KoF%2FZ8PwPWQJb1TN2QXrfeeu7o3kbUdxBLh%2FIC2JrAznxmIJvhOwcqEEFRJQw7f2K7MTKASCZzUBctz1TKt0tqXpZuxRcX8ivNT5DPkTOArsDoj9E6LyDilou3PZ0&X-Amz-Signature=a6d0c36c7900028aad82f80dd42410d3efee6c0eaecf33b260c83e8d6019d5de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

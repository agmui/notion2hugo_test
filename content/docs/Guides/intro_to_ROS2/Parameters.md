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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKGWBYYL%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBF6T%2FEykmgzHMF2qk%2B50mXxMm8AxTiV%2BeS9bC08BPZ%2BAiAmfcQ2Qwj9z%2BNWVIWyCeio7f6ug7YFQVuTX8IyluAlayr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMlxQYUnOoDT6FH%2FPZKtwDolr5M1ieP7TxltM7zjGwAhwBKp9wP0QTQEraxT3hrRw6r2xZSscz1lj%2BbzOie5IgZn5QRXsAOEkZKBzBWfmxPUkNbFsytuJsYPdqHv0ZgJNLEQQd%2FdIB%2F8A%2BSJCD79go7aCEsm9ES0DgJTQsqORgep0KgEekWiHw6Kg3wKz%2F9y%2FUlLjg1M9vflgd%2FmcUzz3a6%2BGs%2BFbQSfBYABG%2BpEDTKtNMQyo621QK%2FEZgWf%2F80rxVhqZYyErUcIs89rq5VzR3CwOafBW8Ph4wRFOGUD2IMeUI6UeVOBi2Gi3dpMHsp5WovISjRNsLftWez1oYKqLiz4V4G3TGeG05%2F7YwDngzdIpap0BPhNzkm5VdHU8U2dY5s%2F9Rg2zere2i9Q024Boo1Di4K4QhBDEwVudvAIXatTSkftLrh0pt8Csf62fsSbCVCcK5e9nWj3KAtX%2FZY4g3FjtN%2BAl16ga3gGRbg1INYAM7CC%2FchO13yzcdUcWvm%2F%2FAJo3Xf0dSlMnSY3bLnIKTsbbldZ1hwMdJ66MO1Oo6LM9QHYe6cANGoPcAvV82VBdoG%2F0iwzr%2Bht9MUp5yYJaBeoauBJDs84b%2FShvVSdWfUP3s9We8PAsa3vYMM7VT1TfsIUX7a9Sqbmf8B1wwm5PewwY6pgFlAwGKcXIEiEF0ZNbD9WDOJg6%2BHwtY9ZhghJBHewgt1ltfGYo8C3R24PHgGjxHcmxafQcAR5exc6GjX6%2FTuJLdxmJC64rBGxUzZak4sExFlGLBbEdoD6BuAbOME6ER4ZvaQL3NKQZL0YQISkakr54NVhH57okDiIWcMuGjtFt%2Bzi8ZSTrElw8c1R3FuWMsFk0K0XyI5evbx2dYadnU7rzCDDI5gGsp&X-Amz-Signature=8e6d730287e0e81afea38fcc60ad91d62f58358b44bbae3dcda0d07302375760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

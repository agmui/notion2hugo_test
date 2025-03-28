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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624CHMO4G%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIForjJNY%2BP6BFBoSUE4mblWcC1fzON%2BhkvNQVa%2BHFOFxAiEAssB6xGsqdsGzE4qWRJh0%2FOqvvg8Idbxtodp1OVhpX%2F8q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCVQhesvF7gC9WQDMSrcA6EDrXPhH2BDUBPyMTZUs06fGvDJ548RNUTlTC%2B%2FIbPfFdh3X6bCkgIIIuu039dDmzYIZ2PLNYV6rKVRst0Jp8%2FH1sd5KGrBp574dzY0IiB%2F328DE%2FFfOv4BHhFGXVPWc07OP4iGMGgRDHCZHHkMSfejrWJ0RNIKPSSm%2FRO%2FxgyMAlWFFcvzg6UMH1nDdYASspshMHEnJtJQ4lfV1hcFRrCjdJ8pyoxlE6oFnPiipX4D2QGuLBZcwaVO2kTQssRTqN6DN4r4Dlk0BZa1bWKlltFB4yKAeffxru5VkuganKMzykC1fEi70xvywtgVUHclXZJAredvdCEGbqpd0xLqON0Ug%2Fxpb%2BeIuuEfC6cUFXQb3C7glgd42Jjybu%2FsBDFj8sPaw23RhbpTBJ58Usf8Ak8NfOadBpnDf91jOyC%2Fp7Txc149%2F1LRQprj9nmReURQdOWlX2rYX20PsjRpOB73C6sliMvhC0pSk7FbCeyaW6QAxZqIO%2BJ9xbZHAgl6VS2bl1LSWoWX9douc6afL%2BexDNxD1MmmkdmkfSlxtz8MO4GMtdYA49YvZNRHEqBPzaEDoijYQ2kv7DpyOEm54uMs60%2BcwoL4Cjy1gRn2UzhidN3bDZXgbXYRJVFnPSwiMJ%2Fbmb8GOqUBIfQOgSZ1%2BE6TOcq8dZf6PUF5wOY1Fu%2BSw1Ry3XETt2TdMU0jCPWU6TXYde5qQCqreJTW8yyZ5e5KzMEbyN%2B%2FxBGbNuOEsb8Uejb9cKY6%2BTRIVEnSvU1qMSyKR8Xvu%2Far3E%2FspyeFIH1T80UZ3TUPyljCZpQ9If9OfEITTazU%2F1vm%2F53WLaCp0K4btxJ22fj5o21nEsNE%2BF6ObDDDNsXXPhAt2VJx&X-Amz-Signature=3c994c010bb6c4a059ff6db9b73d6222c70fa79c94774d3d4dbf6f26f04e5066&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

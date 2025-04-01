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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QSGGYMN%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCHwQNvSAl6dvsvjEYYBuAmv0Wpy7gRFLQ2GdoaTsyoJwCIQD0Zfmk0ZgOpjY%2BamwiTQUmQAf81UdAZBx79Vun5%2Fx5ryqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtMCHh%2FPsEnPm48bFKtwDAOfwOpBQDDjpf5jmnPjQglTAomBw4KkOZAy%2FMn3pz6PCYvKWCs3rUwBU1g%2By0GcRMnXzXqYGW%2B7qdTDxRozy7Oj4OZ3cfQRHiOAbHowcawmEr%2FWWB2s6X618fUlnwEL7h7Y%2B0uJXCbXMoIMI%2FTQq9lP7fnpW08PvbVFx1tDkeR5eF0TlktCeJ7Ofo4flNG8VC2u2CzGk6xM26yDrW57qJpnmVwyWrY93%2F4UXd4MWWiUQwGDU1eAM1RlOpN%2Bd9lHeA7Ff%2BkMK1RpLZj%2FlCON6TnJ%2F8iAbE%2BiZhdzONY2U2vSwV%2BipTd71Ax6akaZHyd3uffK%2FvBXiUDOz8IUvnqcWRkWwCuAv6BshMJ3tfw1iX5U71qGBNAc5%2BTXd%2F%2Bz%2FQ64Jwa%2FYIMTyCOPL85NxJXUzZ3QEiZBpzDopsbmrhwti%2BPfaP1fNVL5bqi%2BCql6UAgZTjvOSNDVS0kPOzulR5Wi5Nob8x5%2BmmklizV0seefxVeR3TaVWc339GoNGt8LHyHd0aNjkc8FI4G%2BgB4Ju6jEI3Dt0DeQTIX6uAWcVm4AdlNaVncv4swh%2BR2ZKibmWZoFLIDSupxdAUrB4x6UIkumVqmKuPgQWOqTtlBias4qq0IccSoFFszW3lhaZYGEw%2B9awvwY6pgFW1qwoeDB8lLv5Id7jfq%2BwVQA8eAatn%2B%2BzwHFY40kwWQIBJeDvhRX%2BoYU0fmQ7KY4gTJxYJQca3jYMNJ3drXmF0yI5hEiKnbnYp3d%2B5KOEGmYMnQ2dgzQgD8ERZxfxckyOcFuIu5%2BvQWVAgr%2FGCHeBSjsNqtKzu0jJGYQuKtZMu5FjHJ5VLeu%2BPrKRefTJjL7VNyjC7CNC90Gay7UTxAukVaxV8KOD&X-Amz-Signature=d6f03862e21a1a1b94e46a0b2e3d7b6b5a9eb2d83da7e5358293041237935577&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOAMPF3I%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEkmcco9oHLOXohYvvB1Ea63r3x1z7J2M%2FF6iczw44ZfAiBvLQcFkP7BwdaOQrx4gY9iBJVTip4xzo5PIz1L9e%2B90Sr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM8f9VTD4xDyut50AgKtwDhWDY25nt9J%2FERanyPqNUxVwNNdKWh4mA%2BN31we5bEGrrr%2BcXlx2uCXVAiZS%2FMyzkmSMVWRKPzRH0Pdga9QOXvA0XwvaDIdRXQzzOfnIyxCv4SufjPCIgKyrHUvKZFdeDfSF%2F6A1Ykua4J1k%2ByHhn4DtLKC0mVCACr93vGRTdXs8Gc5Gf8iby3bPmsla0p%2Ft%2BV%2B7lZbdJQqgxCd2SP%2FuNHIWPL4m%2FYOO326DY3FcUR22lXT%2FDLeCOxsfQDYhERBG4Qh%2FzXdza%2B4SrdCuXHhRPBR6SoKkRaJiQW3Tc%2FPzNeFD2MdPCak6pVk1uXmi7Nja17SuTHOovu9qtMvtW1v%2BfJuCJ1Gr1Xml9biJp9NF0drn7NSGuWLWHGaGVld14uDMcbnLVNmUu6sQsf5zS0BLqHZL56Q5qTixmlrNt%2BQm4jalk5vY9KRdF72yy9Ju6oILjWC93DAnKfPhnS6XELp6ieQfGxhUWvO2PmQLhKGzZxspIioL23KIqEL6vCDEhSEWcfvFLr25irAP3G4GKvWDikY7ULdiMRGvS8yvanMHKI3cKO02mEEXyio9H4qOGwWxJsz37mlYjgBJOJAuh2XpWqirNLauCax68MQ3Cblp%2FSlSdjBrRE4lHKlGkpV4wyNfnwgY6pgGkiRVSpZpQX%2BFYjFfMTYBZScHNAuEobq1QcIB87T6%2Bh%2B6Q0Zl0odSwUxqlvZA4ohn8R0X565AoeJAxr7xU0FX0iIVIKthxI17YazQqqkNtvr8nQFWN9Lc7XvuUqbVycz4Kx2Xmc%2F6jw6QV3KpGpZpiYv%2Fz1%2FQuztV3lXgCOSRaNFFsc31gTcFnRs55tqSXhDdLEHVp1QlYvJIPOw6HnswuhJxEq4ep&X-Amz-Signature=86f942ce5aa1a02d31ea6ec5eed412bbd3e75705521b95d6c04365d12f80122d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

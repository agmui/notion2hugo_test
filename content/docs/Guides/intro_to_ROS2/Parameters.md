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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U62RW7UK%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCID5ouv8iqyTrJpXeCgHJGZTxRWyMkV4ye30MBvEA8XXOAiAYmKC9r6VRjnTGq76ZuCAWsBLahP%2BntwcmTnlT0bYxGSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMxEMt0MnQYzQho7BiKtwDXSoRyfzq58Op4YsX%2BmqCbscWNFLUHT%2Blud02Gk6s613Ch4c4WRQNCfdRx28oH3%2FKkweWXHIOG8b%2BkeQy5FEDhAL84uxbXPwBxzaycvDUuZi0lOXyi1LR4g3l4yt1qguKLEPlNIelM6RpDM%2BD%2F2WiykBp5G44840MMKsCmI8nOgHmRU%2BGqAIB%2BD5w%2BKqYyAwDC2rhB24ipkVs8XgCmashpKwYW2sj4Eu4x4FLkcsRmk%2BcZh3uvCJmYIzE1O2fF70UjkpH92a5BFwXEmdAE%2FLYM4o6NT1fdB%2Flr87aYZr4rdeZX9n8r8pRlakrOZORwwY1HwpOqJSWG63Ek1Ob9E6kZwTkXVENX%2BINOnk0hdc5SSWp41oICSAvIoPEUt3yrvf8KKkWKrN8LLtwKfQrbWwJIImFrpZf8yP%2F6srOcVSw372Grse%2B9gAlXTSGiT6K2EIyslJVR9w4OO4ThG7ZxHKLwFr0lfvHM%2BqoOX%2FHQBopi1AFr3HffqEVrbZtGD2hu7jAX9OV09Il6RneUak2Ocq5rXTNP5O1cat9YQRKXTOjfrSecS52dXHcJSH6NXDK4omui9boQzwF%2BcjFpa72K%2FdzzQpHcfka9NxIoo7QgVT%2Fa2L4r0zDoLEqdYWn0Ggwh5uVvQY6pgEmj9TIGpiLKP7pcBmPt%2Bwesy%2FnRH8fBRxuLP%2Bi9Fkkf%2Bh%2FLJmFAGR%2BK%2BigqJNnDpOpVbD3n4tytHIrngWbwFYwHE6slEQHAMBe%2Fsk1FzJ4vrtKSvmx463TeGwFU0i%2FZ2UvvrZSpGza%2FDkMhhJqOy89LSYO8l5gZh%2FV%2BkRiswwaKh43AniUkEMAs7z1TkPHS2IpYPx40yoS6MfVjkNliXBTeipfz%2FYm&X-Amz-Signature=79c6cbab31f9fd2b34a555bca4695c26b5ea37d204b8bcc0b17d0a788c79283c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

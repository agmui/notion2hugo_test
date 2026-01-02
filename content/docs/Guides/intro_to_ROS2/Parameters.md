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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJ2SPFC%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIBg7rFqErxDtx3d3iNqKpV7YHRqLU%2BFAQy7d5OAvp6LnAiAkLhh4a1aGaxIUwoy30c4768YnlgfGlz6kZWfShywUwiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhUFCjlmW5mNXKu6uKtwDCIOI1OgdJ%2FKMWkok0A3DdmQnPO676h72iIT9P%2B6NjiCPZARr%2BXtoKAOAJE64waZYXLEd0Co5rzcIndmD5BdLJG%2B4Jc4IiH%2B%2Bib4xcpWDFyzx1gzy4lERejUGt3NyBQ4458XcTeoOvIMfx2eCuaviLXv2Pjaon1r0qMqlzZe%2BlA9eHZa9KHnyMHpwWv5%2F2Zdi4UwCmjK%2B%2BCJlkqLde9b4TuDWK6OzTB6IoaDA9GaOnTzl%2BROd86tIRu0TtI8ILtiIonPWlXSEMrOxC1t6N2UWOPTggXUCC5qtS3hEAEabKV5L6aYD28XB0SCxUZ1pJUv8%2FhUegTFtE7b4sa42z%2BakuzGXZ5GCt9RXdrQLF5i1d6SUWdzLY1gbSoDHlolDO8XoTC3ItfZXB8eP5o7zcsvVhJb00JfPo0lDRuQXGqepr%2F%2BJtZxZxamJ%2BLVgOHGlr1edQqk%2B0qQPm%2FoqgAA5ost%2FuDw7FuE7oRK6IepYcgJxuQPjEhaIxGha%2BXmFLax9rM1urz95BpGU1vtQjQg24vFNLJn0xAEZnEfEPy7phHca67u0%2FW%2BxoFCjLJDPAJiF2Bzz%2F5YoxcHgqvjnG0F%2B14TggKR%2FoKEpDL7UCtBl%2FzGWfR%2BNW0FYu0%2F4ARDfHwwwm7ncygY6pgHMbT1oxeKy%2BBSc8ZQofTZC7QvwO6QR2YBBGkFQyyRGu3T4EA1qpEtzdI5qHN8CITJJzr67qlIYpTlyuvCLkkDuaGiJmCsspTmSD7Gho5uDgGsOEPMloGE8edcMIbtxT67E%2FFwlFepgASleZeVVMTU%2BtPn3XpKl%2FcF645Hi3JdkPcJmq4OA56yJN8OUX%2BxWWzAhiNAYMD4VC0drIdt2EXFcoF6LJ1HY&X-Amz-Signature=8d240cc1d661fe8b2c9ce84a176a9668cdb03b69bc9fe77135b3252875334b69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5PEVOZ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDADq3er7UqBsdT3Yc%2BW3nvY7oijM%2FjiP%2Fo6D4L8EoHiAIga5fpFGaK2XqzI%2BUqGvSUFFX%2Bz06ZacQO5fi6G6Bb1%2FQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpamkr6DIpd9NCQPircA1650zeBqADC7Hn3IzUkg%2F3RRtTOchHZiGRzD3oc9%2FkEbyovjQcPaZeUIbduF2%2BFlBQKXgt2k%2FE6XNicxSZ1Wz9rFVLNU74fFmB4jZ%2BZRAfZzNfLVdi1vmaMFO6kDiOiJAnmb0kemX39ubLv2vNVDe57VRjjEzE5cV6fI8vNyobKb6FS3FLl%2BcnhXQPxBCjw3NchlVWPRytnuZc9MGzzB5m05%2BvA7SH0FZStc5e6Kvvm%2B1BsrMLsX7%2Fh80wHvm7FAMmpyiMlQ4z%2FlmXHWUoTj79wKdmbmbMtGQxzP1iLmZ0p8%2BQe9kzaenfLZOVAFeYiTjo4g%2Fmn%2B3zz%2BxK0YuTLEwdfTRhegWoFHK2mmY9j32r0%2FfETNgTUTxT5Axxj7PIKeytavkKfYKcFCuXF6avdcB1TAq6XqDFOpvHs3%2FGH7ihYgXF2JVEnlQG5M1V35I1pWsmfR9lQk8RGArMgXHIivXPWUIAUd8VhYW%2FtBXQWeUTEe4Z%2B%2FSkA8SMJIqxjeepaLmr5T%2FynR0pzOia0tMottL0Is%2FlzjJj%2FQsI%2BcJlzMV8lrzX99hYPwERxDtR4hEaevIT%2BRK%2Bp1JKm5zwuC5GzWsOcAl1qghvop24lOw%2Bcy%2FBV3%2BVaSEwTkwhbn%2F2NMI%2F4mL4GOqUBUevAreAYkWP6eSoZbpGENxcDy2pPlE8x2rbOc04U5eh3fEQm6K6bYkBQkGenH5qKsCoDmYmZEliwYhOA7lGRiupfa%2FtU4pWRxQZS68Fz5xD0nA8VP9NJqFkRQsPxn3zTl%2Bx8fyEX0I5n4TIh05EcZoB470vvuSharpOflTPga6U9fvuFyDin1OdK9OOl3P3LEdgx%2FKbCFLh7sdB1cH5b95uWlxmr&X-Amz-Signature=963949376ab0f5ad24bdb90254216de489e1b8ef6a4be4fde62ebfd34da27679&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

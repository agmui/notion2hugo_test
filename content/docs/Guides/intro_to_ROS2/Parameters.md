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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XTGNCVP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCBf7KUtSO3mcuwP5tCsj2kfo0yv8zxprZPObm8SlXOowIhAMNodabqPEayN%2F8Swzm2hTOHHvZBcnSW2xzqrlVh%2FubTKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxACFZBP23GZc2NbdEq3APwX4Y60RHyiOqoohcugnkEpCAoRx3ovUKHt74Dv%2BxRHy9PSmeBtnd7u4UwhwcRFrSGCCmDLVzvC46Ya%2B%2BEui%2B5rG17yj%2FZ5DY%2Bx7y1gnM4RsIutuy7t8n%2FtbIcVoFSyNpXsRIZdxGYUaikekM0%2BWHlm8Tl7sJtKq5vg0OU0vDynAzi1%2BqBdJsWgD9r5iCy9yi9n3MH4nJ5GyHZumDQOY%2F7SaWXz7nIulS91AAdi1rc8M2ePwntdNykdzys9XhZdvUiI3Pb239mQuRjokupyNs%2BjuCtG3UHhfTu121y9KOKCY40mcOKJOQ43%2F%2FyZ5B9SYg3KWXrMHlE4GObjOnNcEMNfuUtZwaUHOHMRTAryjYhn%2FwJOCbgM5P7dHhYA2UZiceZGheGG0BffQF3NlAG5ppttFUgci7v4euRL7VDDYHjfcop4lJ%2Bi84jyjZ070VTRCkF7KmQxa%2FLYQqnYYPv5YlKPInheJLDE92nKIivUvSUImCydn04Z9iNGuNtgSL1Irnw5PBF3Cw9siEh9eVNXTd3Kr1fCMM1C0G5KrtPjTIZWZA2Wg5IfZoCbVn1iuKPh5JsqPqOY8wQ7BMWfbTjqz7sEMv9oiPeO1ts6JyitNLkO%2FABqu4OL5EgOWdULTDD4J69BjqkATql0yyY7pFrcNKLE02FUQp8Er5NXWOH8KAa%2FMVIqdyZoynT8mS7f3d19JJdtmqIJu8KrrWLNZIIeOPaALq4cLTPJI4OCp6A%2FsT9NFOHR7JZ%2BuEAnDmxq67%2Fy%2B8mDZh3oEb%2BQMSFy8X78z74GhEBn73DCme88h7DAxiA%2FGKNdBBb3kcYs59wnwrsRXADJ1OZ10kJJgWksg0QmThiZ0uRkozrwfzm&X-Amz-Signature=35ad40189ea2cf0e04e4354d535b801c17fb2a131e38865b1355c4acad7089a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

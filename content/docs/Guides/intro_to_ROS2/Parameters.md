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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3XVZYG%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCu1nOaPkiIssyRyL3dATqdJjOkLqK%2B%2BEWJmQvoAhOKTgIgVIk6gIka17AkddaM1hmk2kkITeWL3WAVR8kdScjbfYwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLpTLJVpxr0rUMM7kSrcA8yIIET%2Bjbnoxx%2BASRTRkaTJgYAjvkuWIft7DAovgkm8eypBZnu887ohsGf89%2FuGjcdl%2FbrgpB7UzOWtbvgndJFED2YO9Nac3ZzPG4CeeqjCf2%2BpLr4zsWDCaZmvh2GYnhcKzxZ8Zi6mTtEvD%2FGXZZGI%2BjqTh1iFFq1dLXyssS6wyIzdZT2g7FUj9nYai26iTjQz4P7vcyHtKLKK%2FU8Ogy3ZcTVsDyHlExbxWXXMb2ByuJ5m6Xyg8vE5UabAEl45ak%2FjVTldzvc3Js0jANZCVSaqNciM6qrvFPstHaZ2%2Baity%2FGbvfWJGKsZipmziVbVKIwbwuzUOd8o08VCfOvs9ZXh9%2BOT3HXr2b81cA6V%2FIQqtaf7AuVPpxNlnW2d%2FnlY25cR%2BjgFa1%2FQrNcPvJDjIt4Z7qvJJuPBU543Kjmo6DLojAgPbZS455XbAYdgeuM4cJTYJGnVO5uHoH2twQ%2BFbWhsoy5fb0D5ZBJVJZOw%2B6J5fTJD7da5cd4ThlohTFlrmTc2xV4x0Mpj9CY9f2uoBq6u%2F6KapDtLbJEXiqhDQp7QeRRlqb8oZ%2B16HM8zbc4rs74N09H1UM87u9%2BHSvoPeCZWL0ut0%2BFs879kACBJYHj1egrrrPFbdR5pjE88MK3QgL4GOqUB9yDTF5bNWYKlakgWKRjAW4Vov176ZXXac%2FZhcRaPuSUhS%2FJjdlDyIWqVaH2ujOaaOZuyRQI%2B6dIydYKn5bo0wNxXEwj2nFtObepUaZOrQJCb83zkU2DXplOzflfCYOQKn5iD3mngJbxP5WKrTtFVvJjFmWaVP7yNoYfSuYKl4bEgyaIAXoXnIYGemXPj9yxUjATjqlvbWj2BPMB%2B3DK6onh%2Bzckz&X-Amz-Signature=be5a7f42492d8184fb7654526e011207f62183394193b1103bc0afb4bb5fcbba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664QJP6BA%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDN%2Fz46iFxnw60gfyaj2HQdV0vtSZw8451N7xK1T9a4vAIhAKPIH%2FD%2FBUCrSgzHWDmr4TSZXI%2BSpHxmbjtx8ANu8hA2KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy25rf%2Bk8nPAZOGvIMq3AMlwZbIOLF7epe4hzhuxt7QpJRpNPgxaRHYWqJD3RUSIUWv0pUgcTZwK27rK6quO%2BmW5mvwW4lZ1M1rfL7uBFgQwSf1v8Ox10FkqoF%2BHg76lAmwq3IIS%2FNfBzi52v61SsWAn%2FYvO8MdkLLiiQFsu3gWuS%2BPWVi75jLWbsiJrkAuuwxUvAA8GE6St8xvY4wfeVecU4N1b2HcLoiWo%2FhmMc43brzDYVVLYvCmT86VsFwfT6N1M0Y7hhzUl4kra0og1AxVMlAVaZRYoFBjRwgLax%2B%2Br3ptAa5ZecQE82%2BCjGfPI0rwJ8sf3OcFNvyexH7OGc2YwygPK%2BkkhSU%2BeQgiHAF6Qj0mOY6F6tbC6UFz4F1V%2BDr9Y1lUYEj5cKMh7dnFpruIRKTztMGQ0Mw7Dx%2Fp%2BZGxG3IdmbSAwWWt8CYAqEl7k1DdcXzVLKn%2Fi40gLVbqXRPx%2BUiiTaO7iIrfG0SaL1bSkTer3ZRYpM0P0rJUIV7PYDMqm%2Fk8LgdpBF1S17sC8XYeo3SNHK3Pj5RLVawt70DBxTstSZEmOa%2FfQdQlXVduS70lYbkjuFxOyJAHIsqpQ4D6SF1tRgZUgW2z8%2BpKCLD70CakysnkmfPO%2F5v4iIT6%2Bpv%2BNWepC%2FApo34ABjCqjei%2FBjqkAZGWbPo091etiCQLSSPvCgu2DCtNyqPRdsZIfwcWVhOWbA3mTEOD0dOiJKVmvvp3FbBLtP%2F8rWcoIyfVmkW3aUEsjXbSHyTvaXLfbBpPODjcRLK9oEjNqmOGCCIWY3g24W3KGO3aqb1TAXZgkeIQiQWexpQfcQ3xUPjGo8LLeMQ69iAvMEMTqYkMG%2BupnakvT%2BBo%2FAdTAjXt8rgeVd3H4CNH8cux&X-Amz-Signature=dc4037f81bbffbe6bd598fba15c4f51088cbddd8173ec10dcf914c2cdcb82152&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWLVHFPY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDpNU784gCsAa1uHaj%2FV8IKKXX10%2FRNIsGsUZwjhc0XFAIgOIvFGgTCf4%2By8Z035BweIqQEd%2BKG95BsXgBMcrn6Cxgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJ%2FoEQVmoy9RwRuT7SrcA5WVjpjS3hqTgTDZESbiETvCjzvelRqfT9AgQs8izK2IVwse5xxD6j39qkZWfqA1e1uTNBzCUZ62qM48IDkuV%2B524JbbW5QXIwRlTukU0wzLTW2ATu%2Fg%2FlMFtPajZaud8FZjUEtIRPCoaOHgH9Gzod0cMUij6KTr6%2FhPOBPlbw0O44w3o7x6j1r%2FYPya89eT2Gwe%2BOfw6b8c%2FmsIhrkH4eyI3rZZgg%2BQjiXLOHGfWA2D4EuWyw2IzSeQO%2F19OMGeOR7Nv5Ee%2BT6%2BcXJJzzo6ft6gCjdzcqBxYjXSijzWmKK3EWeI5ta89IEN66J%2BlwnRzsgGB7fj2g4FyYrMcxDqNUln4nqYsGO%2B3mtD%2FYftuWp99IabefwjcqFtgPSj7wgRGTA6EvgRXdwAoeYHv8rQ%2FKAnOxTVOoP9Nd%2BcaE%2Bxtq%2BBiD7mLsIJiVkPvUWV9c9HQl%2Fqm5xoIdPyT9L161l7L%2BYXfEP2qPk0o4C9ZnLXx3NIBH5y6talPsyw7%2B7P9jpnvg0lGyYQoB6aLGib%2Bt3wtOIaSDLha2FWyzjEzX%2BoQMLwyiAltMOMrLM%2FRPWkoc7FSX4IXEt00NTuI6UVvbNoVuXACTtB6k%2Br5jS7z0rfN2AfTMEDYFb40j1MKFsEMI3Ukb0GOqUB3MJhAMtCK2e2MVx6fhMXr0atgddhFKxOWdoLeCud3LI5%2BK0hc50PUyT9HBveSlAGc1QfVkmvOFpfYB1p1KZh2SVR4ho4jPJilyCE2F0%2BlIDh6ZQUjGlh0a4nstM4d6jpyCYRi0jC01bTNfEm6GjCHYp9hnstv4tVDBq2qHatXnqq%2BVQ%2BUAb1CdLciEQoHTLZuEEHL4GMhFFM8gliQrHDL3BMcAcf&X-Amz-Signature=7aaf19db19121d85577ec64919c0f6aa5b9846c650973f10106595a36f405d5c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDXQM5GV%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjkEoBMzCp35fYl8zrLn4qeK3iEd2jHojKfm%2FjzcNINAiEAxXH3whRlbGf%2BpoSaR6Ah0%2F5I5q6PuU640WBu3hdKU7sqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKacuzHdO7I%2BnbW%2B2ircA4sNF4XYObNdUHX%2BSjwzVlBYarBr4U6ip3nro7R0IVXOQt3a5BPlfaV%2BRUhv%2BkgFg4t073%2BCeGmQq6htaMHh4c38L%2FcIUZMhlxyAAEpULJiv%2Fc0k%2FUfUwrGjCGHLA7YSAjZJwznPumNSCVBqxYsCukarUsDJkaPAigSf0L49UI%2BcB9FqUMTiddtEJdNJSODwYPWxHa3Ds8h7ZmI%2F4wM2L9dJJIk%2BiLIgSD4%2F9yu0j91Uyhr2DsCX9ISYOPDx9Nvi9Y2ZvDauLKqs%2Fh04pdX9AANOjJ1Cl%2B2vNFC3rmd8hlcxYU132pAkBztZgJFGJLPwTETCpPDqspMmFH7ynzzv9KFIf9rKgejTnF2DsAelcEEM0aCTV9C55wtgGWuvKnmlzGFegGLgAxvASzlO4tBL0jfqZNXcYINRibfW0YV5GEyLOOAXQk9igl86Uxr1VMRbq%2BPymoVdrSsFIEHEc5a7Cx29lVK69wfDSA0ZpXoFviVw5i8T%2BDHAJvtAhdWzHPJ9fij2eJsMvn3AacPeAVnviCDYG9Jvp2yb09qxBSHDo%2FNgsWo9SDrZdhlXSNdf%2F53dSH3tOglKdwRuBnN8eZZnIsFEDps2LGh7tANc1%2FSE%2Blfjsos82s2ijjn4ELcGMOyP%2F8IGOqUB2934wNSmsHv3pH8fRhTwIIXHE%2B7yZM3sqDjE9Wfz9czk2loKFdngCVFMuF91n7oawKEFa0wbNDX2YB6CL8O7QMl%2FMzkYp84ObIknw3VikrQhWeS3UAI%2FRSkR0jnX%2BpHN8zXppiYZMomR74YhZxz6StXm9iXQq6wH76nNFCx7rIvWazg91JzuLIrvQZaKMQ2%2F%2BjCoKixDSIdNoohGKhs5jXBikpIw&X-Amz-Signature=957248c755e6ebeaece2404174f7219440bf35553c35a751896bdeab6b113704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2GT4IE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFv8B%2BIwrpEmpLxmVQAg%2FxgIWR8UDLWv9oSx9iB6iaYJAiEA%2BJlJSQQYyalQ5%2FSYxPYSPPJV4jYwDQW0mdTxztUeoOYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BfuEZHMdMhS6olhSrcA3tbiMsezs4djJrb9XH9kFA3BWJ4LengQzDhgbehW0B610%2Fb3%2BhCxeg8uU2SiqjOhfuXdrNtmezcWIP86VwAoyqoWnTqfupHsRVfBVM6vAsbvbJunKbPkDl%2FCGt82icp6W%2B1GNmOKyTqvLQSc3zCURX03%2BKZKl3QSzPYBgtLihW7yHYzmxpWB8PBbnIguUVh63vgIVyYD4Nvmz7EV3extHIS4ohkyZyqFbm7EUwLDjXXzx3jrCb3mbTUGQg8VHswH81J2CKUnWyN9BoPFFLXnc4bZmPe0gpgzUR%2BoojLnqlMU6RcdzXjbedFS2IjadZSPWTjWcKd0wNSJMW4q48KXn0lh%2F5nkURMGgAHiVNsAjX11PTn%2FQXusYWIwqy8t88JAZszdv4%2B7ZlVU6o0xhQJiUpP0jdds%2F3QHFzqgivJ5JQOB0eeR06pPdYO75NdUSaAqbvpH8JA05kauG%2BgSTy1Koeq5epIciouLMu%2FzWfGhrra265gqj3ANTEEQClIba4ThkLabq4DtZp4h1c%2BF9vUO9d413z7zuCFid1EgNxVDeoDa9QscfpS9fk%2F0Mx3S%2B6KKE1WOdUUvTwtedYDWLz%2FX%2BNpLvsy%2BCNA73fSUqzvqwwVa4z395kb5M6fpxlCMOfd6sEGOqUBWYO6gluZ%2F1Dk2kezmhBAbqraJkvzcMnW7YEV%2FtzRMUTOlGizJCSvBaDej5O5eBTVrYbI31znJsHhC8n6CBr9qDsExykarmBXtbm0OK%2FOoEbudra3V2pmsEGu39RTKrDR3j2uCaAAQa3%2BGOmHYXh3IHxXjB5z0iNXCKyj%2FoG6zyT0BBoUDWDg6Br7%2FJ0vbvTZaWHz0K%2B3dpCRM0M1aHdNXiB%2Fr%2BDE&X-Amz-Signature=6368a215267574fd0c548fa5e0596db8c7eb90d896b1cc2538ae39942b45f1e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

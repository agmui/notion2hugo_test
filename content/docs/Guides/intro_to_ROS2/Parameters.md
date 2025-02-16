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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WII32IVR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIBIZgKOB8%2BHa1ldbTbESWydFjHGYgwNeC0uR7fA1eEBwAiAuBFy6soGmLEvB18B6qh8cncU0G%2Fdx28%2FNLSAzlKCpDyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIML9NVJFHqrLhdLpmcKtwDzCuhxUSYPDbSEKYX0Jo9LxMbRWpraXfPsB%2Fxki4aQ8Q8LaWg9efKyfwIgMaBsdCa1difLkTup9UIVUFhKGc7%2FgyQ2zFgmw7c4%2Bk2drSR%2FZDAQdWBr9LQ4DgMKp%2BCVEAjVhoIf5CxUSSSZNZA%2FVkI7mbNi%2B3JJCMjnePlDx4LKs9h6XO%2BZLaXOY4RVrvgYpWOpZUm1OngD9cb4Sn5Pg3RSfG%2B0x6jTUxmeS%2BBna6GRuf46itf2oiPJNlxB5Esmqyan5WUCXPjynBVPUDJYfuGcOLMpWHmU4JnrZbt%2BHEiJ03cUBhitvUlYTeS9%2FruWGMGoxtb5f0SmQLaEWFdeF%2FUyCSOJ8Hp3%2BBoKMrC0PLsFtuIy7SOfZ%2BSGgb5bGxS%2BfLi2n4YkIMpgMHAvUvUEVBsB40oHSf4Yifq7AG0xVL4hcsSmUWmzLghUvHecydzDwGurXCA4EQlmv7ZG%2B7bZETio0YbPxIQUhfSvUA5ACUScUVZF4TbTK3NeK24gRLi2iJtPJcpkSQtWgh8xXysxDWRH3FdRy4D5BZ69aPTIBvtP2m6jhuDunm%2Bs9PJ7arHgH4QGuyOLNwXBZnsnC%2B5w%2Fti0NVOpfXbXUXrGbMVnWlfmxS%2B48cQBZmONnLXCfYwlqLHvQY6pgG%2BMOUyoLh1hh0AzVJJAiE9wULZwAJekuFwZHs1nJr2nE99AWA1YIWsLBFxfEhfI%2BPy7JguYaKogt1C5Lg0P%2FgEDuyxhN8ItQu76oYnr7rSU0g66ovcVoBTPtv9u1tH7WwjouT1NMuFH8VnZwqjaPFQenUjOTi1hdeSUHknE2XNPYAngOLB%2B6rlqylXPCub9oTNmDF352Hp7FmOsxR5QCsN0JYkeF7R&X-Amz-Signature=428483157fdd16e74e6b3d720d14f159f9dcf798fe3121a3c7573ac27539789a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

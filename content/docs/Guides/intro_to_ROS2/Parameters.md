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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK4OPSQ3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBMf%2BiHHqzuK%2BEgCtvuvnsB97gPOuubHm3u6ktMQnsaVAiEApqsOhLhHDGgKCFMh1uVIJa5B8sYoY%2BrzwT9QGzGXcxcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDP6KplIaXDFoUB%2FGOyrcA8eJAC7YA2VHVrlvSU4EmDhAMzdZmQK%2BZXDPiQ%2BZc7DlFE0iySt4yAdQSJwFBcHmYCdF8mfJwSzLS1or5Kd%2FwWh7gCXpiHi554YUri0wUtYxEUo4jhFcWGXzwzxyHw8AlWUbEFWdZAFG8EoKoHczSKHQ%2FSzfnWN2rmIXBWNHTOVboE%2BnWt7pQu5U4sAkl1NOG9P4Tgq69S2ozUYPNS1Ea1EfcIjB%2FdQdU2BxJHjLkjpDqtz0BSlv0LMdjKzC7WIWVhASRj1b4HTuiCHaBxy8To5I66jSnz4br0mHsEToqwgBh2zfed%2FekJdbHzAYuSXueQQiEX5yK2tRkMIWyxH5%2FjwijU5bzsdXzdnuiBem223oCVvf1NhKnBY006u3%2BKKuSSxaRf6e%2BAnn4PcWQl4SghGlXx7tk%2For96Tgnk7rAGqJKkMpHV4yDvZxyxW7Mlf1T%2BP9G0vGp7NB31jtM5v9XZ8kAxor1CYhjtalBoWVCVPPjVUuzdRZmwbDG4dieiqt%2B8iCbH%2BltuYWqdxx3RDs4wU0c9Wt%2BY9nHmiIKIGwaf4Cu9xCHTbWOmglaETXruZpLRtdMmyF7CcWcjS9jicK%2FEkF3XjxHZqi6QVxMQHizhq0aPYXBEPXP0NWM7B%2BMLrsn8MGOqUBpRC8fm2KHMhKWUlsXhO%2F%2BGpiScY%2BJDUVzNpUSvHPMDcTiJNzXQUO1%2Fw%2FP3qRLzpsdCt%2BoZI%2FmPxsZXa7IWNQdtW7vD8HZ5e0YmYBtP7%2FlbuC3msn2Ma8xX0mCDv1WQK2xi7lMPCyHRlLQ%2B5LfSLOB0m6S%2BD%2B%2FkIVUPn%2Fy3pQ%2Bq1SZBuIF2Ch3LkG1LFSyVC%2BkUiRGgFv2Y9xW9gFNU43DH4NjIQj&X-Amz-Signature=7b57580ebcab01230d89c2f01d0dc81f7a7a9bcb4c93ee5359de2eafe288e4df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

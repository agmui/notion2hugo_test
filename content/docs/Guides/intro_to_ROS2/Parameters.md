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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IDIKQNO%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWatCd%2BF25aHQ4Tip%2FE%2FwrFmyu0KgGzU7hGG1GnQpjTAiEA17Fx6Su7BjpWGZkTOq%2BVMkFrJdrBhFaDPnYB0BCW%2BKAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDES0pDS%2Fjj1si7EkHSrcAxjgUTTuLbbz1mdkNV71pCwdb8nGnwRXxdAE7On4OZkiZZdy6SqD3zLG8RAOl%2FTCt9zMefif39JWcaUoQE7QxdEgAgCE9in1VIdNX4tXRUyAPnY1trvK8zX1M5%2FdnmZrQ7qhBZMQz7avurJLkAOH74WbPnj6fRQQLk0iT%2Bw3HK3glObO4O7g7uRwAIRyXD2wdapCQxzazXzvIJ4uBo6V3sSnNcNJymmVK%2FKBnZcr%2Fuz5h1I2wi97eFdjLlTSdj39cE2U8YKAjIgFiUqKmM4ELMX1sAIj1piiCJROgierNA2xNvI%2FSsSPDHypcc56J2NB3mUvbMsJ9RO8cQH%2F0VBq%2FrjkVSZ455kIbNUVkggfnNMBA8eTlUw9tknxmmsudZ3TejCI9CWnWTvZAbMdfpq7OhZTkFMwHgljJUmBdcBiq%2BqEkzMt2pPqxf3hhKpSXd64dyyFBTAq1Svq%2BfI0GzCWu2m2nF70XLF4saBaeoOgQ%2BBFr1gq%2BIPwtoke1frLUFGFOsZhf2CSeDixxMYIm1%2F0FEUVuSIvJqALHXPrNdqiIbHee3PgKSPQ%2BqbO%2FQ%2BlSpLy%2FK0Nv%2FrhY1P63IoqnRrVmVh3L%2BHzu8K%2FCgWRPWackj7ACBE8Db4AMawA2ZOPMMv9kL4GOqUBa37Mhwf82iOiw7mn%2FiBqqMZwcxJSMPPzkET%2BrNM1mUHKi6H6AeYywfP8hCpbxy%2B1kFvky36VZfmzZBgmfH0JDGpmlk%2FBPyKiCs%2F55S2Zy9cjxlV2LXrBIwJVqyosKCpL51vR70qsU%2FkT%2BJVP%2FuXhX7lOefQM0VH3ZleE2sHJUB316gMe5SP6kvpo0G3FBlBQw%2BvPQuyJRR5loSksNVxO%2B8KOPg07&X-Amz-Signature=14f359bc10dca90afcdced8d0d9dae867f3b1a7298a7d03dd09f1da8bcf77a0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

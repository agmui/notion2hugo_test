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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ABAJXER%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQD3E7PEUsl6V5TS5iLWb3RFY9k2kvLwrpojndAIqHor5gIgPduAlVPSYqPORZ0mWX9r8Ulb5EeACEeOKpmPddqlpZsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqDLa5pQ7G9icXUuCrcA9eD5uViON93jTldqQ4lv2a2Tgf9seYlAV63RvPpyYo7c1dUPuxcjAeBgqQv91sDAV%2BNb88RWVUt%2FNR%2Bo8WWqeBmQVriWN0bYw8XgMtPjMsh9WE1lHdJHw75SC%2FaXvK65S%2BLqwWJuw32cOcCMS3aOrxd2OTLoPMLeCv%2BNbLBiDYTuDIv1UX%2FnJA9%2FK7M0i1kQEWFi%2BXX%2BQkw2dwDmVd5%2BZao2vsVRKtA2MWgD02gK1V0gEiLQ1eDQOPmQwFRmZn7EkLI87Jhy6dGjkLoNXQrHW6%2F5sH58%2BiomJn6zx1qXjMpckpKjc6q2E7UnLKnOk%2FODqBBB4WBB7KA3wvexSBowz4fbPY0IJT05dTwmpqDizt01iQOwAxsGF9Rg2H7hHpSJDsv%2Fsg2%2FG2p5mZPsCZr5NFYtlAfiDtJBoIPsw9Sc0cNg3jZbqqkZ%2BX2Day7VQxp3KaATJfTuVN32M7EI4jN0xWLLF77Tjlrd5fhOkQcqT98lyi7AzZRv69%2BCSJffaH3L63fWdQptdz7CI%2F8K6abinimdRmq78i1TsWIi%2BjXR0jUq9fO6ZuoE3u5821xlXT8klFtSOvI3HKpe6XpbAR60mlj3VJYSnZ5t1KPRIDkXcwico9e0KhNkTH3DQdnMOaEssMGOqUBbdspgw%2BBDSxmLAlcPlhUhxN3tLqrCOkmrqa1fWjwjpMVOEbQATznThntEA9%2Fe2tnDk%2B6SsHIkF1SwhAUODv3awOCiz5tkU740750LRYsmM56C8BHVkQdJZ0MrnZPO9N%2F6P4RxoA3TbzCHZVPylbbBIMnVBeRpcD3sHzFgB8hek%2FgMrwic2L2VBU1E0w%2FyUhabKPvrEoVVt2jiphEjAvN19hifzcd&X-Amz-Signature=ec051baab3a1d4c5ad750c60e3ba0cde96bf4b9aaa2a37e1e658d518c579cf94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

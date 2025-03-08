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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JWNLXA3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCLwOBM7WJpO34mhBdAXheGsMqPFuCMtrQ5iTCZQGrmFgIgLRvAeaibR7AaXWCYJA%2Fr6H2rrX%2Fp1CWy7tvTuVf5Choq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDNRR%2BDHL%2BGiFgVr3wircA5eaq%2BftpA6hQmdOQ09LlD4dRvwG2TiPwuvmABRRv%2FnKi3a2YD0tF0LbRyZzDCjmzPEkgb3LCRXGcaSFmtQ0CfEj97%2BLvYr6XmWtydgvex%2B%2FBqKqHxlxjjG1N1WOf3qZILuIhWeTf3dvlzFDUiId7LcPzkFPheFy%2BfHB5Kd%2Fn1Cna00xGaMYdeQTlmjH55wORycyMQmOx16ndEdvobfqVCG8Kv4zXra%2BwvBAV8wfuaIQL2vAXUe8Uo31hFXqP5L8DezFPwlSpiF0GaVD2nvpRQnqDWbm84IgK2kLyaUfrt7xt3eGcgzdfRfGpuFEzb%2BrasyuS%2FnCB2aMbflPB86rq5Q3QLRuCl4bIBYkxRfsT62krNS051x9XQYJjNXA%2Bqcwq0T4XAdfvb9O7xL%2FG6deWmTUqrzTXs5b%2Fag6xQD8OQbNpwoxQm9XtbUq26V6vP54j%2B%2FQ2fFcsqX8%2B08wVBNjPHV5PT9NnxS%2BV39f3Cq%2FCNJvnCcaFzXQYBis8jUKrTreHYl5D2t6yXiRM1M833P2VqD2BU6mfaUr34efo42zpqL5pnaS8yjuC%2F5uPSvqP3UhQPN3FLKqhHO3o6xhKyHVJTT26xuFw9sO18U7zzIPhU6to5e4ZVKCz9dl1XT4MLmer74GOqUBD1IvRDybmVAP7hg9Y5XbCjqTAlLDNoGJuSgAz0yyfnj%2F%2Bi26r15xbkdKXPC5qceu23TzsKwPnj3rjadJZdxn0rlk3TPMkMGAGK4ejYiU%2F2nwIvilR5lMJ6VxLeWJLXMs5Jf%2FnZcuAeNDlMtuGtQxJvEEemIKsKwwp0vTvLMRbTxXdA6Usc%2BTSZfqVIpyXiZ0whmr%2FukBFQ51s%2BhRDXFFRiKNc1He&X-Amz-Signature=3e7a9a15fddc05f5d4a19fa1d57a1f4ea3128766b6c396a481146d777e24610d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

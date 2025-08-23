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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHOWVZ2%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAx%2BijFGnMNaaFYah7hHERrMXt0lOLsdx9Xu3VYmS0Y6AiEAjqK10nvyACVND0bC65S4yJ0i61a2K1mRXBT0%2B7FtzaUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDL7Ow0k2vgl6EDus6SrcA2o%2B092LHcBoPzByVZ1%2FOCrzXKWpPo8w4vNWZDr0kpaleS3uwEab%2B2AmSu4DH0UGXev%2BWGlPm2XRTQgqFeRcd8cYYyRsVau2nPhRm5Z%2FlZn%2BRA7wtCkl1nl7aal3V1qRjw7P49%2FIsb9%2B8i3F3mE1ytdca99mf%2FH6uW8D5zJg4KZp%2FTEueegi58DruutAOFaHHGcBxF1BNqo4dEIDaryIf5MVyT5IvQAwy3RTr3rlBKc2Irx%2FEIuJdOYGRUIPXUzeD3YgfVZe%2BFooMj9%2BVTL5ugHSJcVo5ZJg9gR1A5zV2XC7qtg2cpghJIRggR%2B3pdjMsEdbh7CTEtPJJmtdZJIvXVS193hBtZlNMpNC%2BHkCAXhK2mLGm%2FnseFw92hogMmIM4I0ro9R%2FdMvQPsojclN%2BFGgdb0VWXAJefJgRMZec8UBbejmXmux8SW%2Fno0mb3ka3Z9BaI3yJyXkEQuZAMVN5ZqJMxPaYS8GdfJpuCWLsKomv0ndSUIV0%2Fr1QNE3rxyflSknnBxkORpS51AHiG7c7ZnNqEVIEeTMfcaGX2bRCFfAxBpZ%2BEl1ZnVorWnYg%2FjUyqifzBw%2B7pgWlcAw52uCLl3QcVlm%2Biij8vX6IICshnYdQPde48GeTwZOA%2BkDgMIuOpMUGOqUB0weE%2BhuY%2F30DzDrt%2FXJbJkR9VBTgg0hSVQjk16XTiC0ZHlbZnTyYaXE1w1uIbAkCIuZ9r3ByVClt4NyKIdOTespre8S%2Bp0UndJDgYEeLLkfpaMRrm3F%2B79cPae2v1eDwowwLtyJFjKHRstxiaw4b2iH719ZfUctWBE2hUbwBcdlCoQzpMdwP8ByjdHDDN2r3quz9qI2WD%2F83lyfSboqlqxD6A8Dt&X-Amz-Signature=25331bfb88171cb46ad242566e8813cc90cb3e606db821440322213bf5dd2b86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY5TOLW3%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrpnz6M0yyMHqSpmQ7vpeMDIRnYm463S4yMPO5uq6VzwIgOoJVhiBPB5Zinj4PKrL1gtjYeXQUroIUTvDPtiRwseQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrtci%2BwCcFaO8251SrcA8rS73bFZZAcaMAWzsJbONraI7P9kHRYpHL0Gc0pKuopufO%2FiGx1Xr3a1KAL6o5UwQL1elfeDIEmw0IMEfIjbmgcwUT4dKtM7twk2uNF5mMIrWUA6mwh1ITivRNJXhTAs8Q7CEGNvT6YEw7B9A3voE%2B0KSBc2xVsDJVH70RVJhKP%2BP9h%2BAdBKAV4Gg%2FZNNqevg%2BJaCHUskyoYZfZphbHnNx4L04vfyNjJqSdfiit2kmkOlEZjitBnIL%2B9ia3nFbX%2BD9PQTNQ9iiwSgLNUpO4tWben9u5dfj4%2BPG8VAGOCa9MaHlB%2FfvJvRxjonLGHKnyRVPGpfb5Ms6YhNStMpWeEoCdzkXjmA4KxtEt1y2MF4lsSmbsfvpY4%2FLCjGGBPw0m7xnrG%2F%2F52UjYxt3WnvsLYF8kHGpkN4dqz0FOQ%2BjmWWiUIizv9q3S9l5A%2FtmHhR0qNMDq9vYMYn9CrEs8x9OvtAz%2BhXYyLVuAGvicQwMnZ9efBC4obRwQg%2FzoazwonTBottfv6ktfhg7tmWiqgOfmbrAjUKQErHsfLmJud%2F%2FtFjtZQlB6H2wQCjbvtDKEkvMxQ4ZZVK4EVxBrZ2bh2SU%2B8ZbW5fNJ9IWcKaCBq2FCEiGAhvqjtbUR8KNRFh0NMIOQpL0GOqUB%2BXNYrGyKnC4kShGzuhrcXnQiDAk6XH3Ke0KEjZca%2BVMxKYKB0nzSfWZHzGXSJWaMzqyujQirwe8gNPLW%2BNDnQMBmeBl8%2Bsq6iD1F96z%2FAZWmuddH2dXKxjg6Q32Z5R0JZGGl00kBBBjsnkB15uGyP7sQ%2BEnRxlqfcr6cg8KRLmXzYWsNtkftVCeMhfFRyb9oHRjkKe1vinK3PdlawE9FA3dG4alW&X-Amz-Signature=cc4a51b31510659db6f4b8426bcba7c0aadc213eff05ba8ccb9cc7e3b72d580b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

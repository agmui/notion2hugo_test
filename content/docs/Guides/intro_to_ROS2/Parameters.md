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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU4ZULV5%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYj4GdWwtmDbOQjjQzW%2Br2lmDPavT8CZ8OHMVSkFseeAiEA9JyCYdUswo%2BNLw5Hr2Sk2VnPgXN1vwa7Xp178LHvMtIqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeCSyl%2ByIE%2BhCPyNCrcA0cAiNPX%2FBTsBdKMGkyiy6UaXLLvIWCeCh2ipgPset070JO13P8PgmZT6zCBvpwYR1%2FQSpQP%2BcJ1dg%2FPQB4Sps2Q%2Bc4NWEExjUEaCaQ17VeHKkzTPqODuwngjpyjBxO9O49Lnv8%2B7PJa7waKNSF41BvfBGVcn6slBd1GQfGKC8ob6AslAaOGqhk%2F4xkVc%2FRolCGyM3xNMLLW8MuO3RB%2Fj6YhUGbT4Udf246SP3XjUUiykzCX8OdjMWXriFTr38UZTX736GJppJ0HQGzJreZdpiti7qXJh6SN3fNZdLTJgwCdOTj87xwUvmEslxn%2BqaSUKpk4ErG6aYk4JXMWtaG3ULB4NkDP%2B8gsvUmI%2FST3UwCnm0ID7TUmRNz8CxwkMxjfW0QDObraa3BPS47xRg7DBQNoyqRhbn3k3s2YU01Wjcr6dpnAX%2BU9lDq0pWnCMi0EPn%2FMlWWoo8J0b049Gg3%2BSquqvRuFjfJ9KBf1c1s43Mxra6onrEmI%2BbU1WOcyhDK7coMcFCyl%2BQ3Npr5TuXpV5wH9QJbHpGXjQR44xSC8Q%2B%2F2sBhioiEDL61BTPdVsZ7msWg13K%2BfQP%2BeXwpsh9h7d63VSc3aC42cbDTn59xSBqMlctvDCyVa6nw9bRHVMOXK3L0GOqUB6ht96JrMl1Sx5X4CDJiSO8ZVj7l7dgeP6nvwAl74q5BXfC%2BGezZYYbhX6l5MgI4Tk5k7%2BsithSHyJCnzGP7Wu7NpgNqQEwUSZytoRthnCGBCdvi7fqtS%2BCaJYwtvj0AJr8LkBqnuxB3Z5VDjQCnz%2BMfQSp7Qu36x%2FD%2BjyA%2BXk112OV1yGAS%2BIxZx2StbfS4xKzB6fvAA6BW%2BJaF5lDHMnDEI4WYP&X-Amz-Signature=8f27a04a29fd87b0394f5f3b8f1dcbbed717d8dedd1e5554e6ec71f2b6b9d76a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

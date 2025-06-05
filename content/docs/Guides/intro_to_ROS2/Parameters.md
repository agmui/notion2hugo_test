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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EYAEEG2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCl0%2BoVietiIjS9MqnIX%2FXaDJZJIevyqBkAoJxymjM3nwIhAJ9Ix6vuYgJKQmqOwfXBTz%2FpHpYXLyym4uz9Z9awsHZHKv8DCEIQABoMNjM3NDIzMTgzODA1IgzbjpcSD%2FgInnfiTxQq3AOzZEUA6pH9nnyXUkx%2FXRIuMO2v1gjM6Wd%2BFaMlGK8xhDNmMw1YRlu6Oul%2B1RokYWYiC34Sx2Dd9ae8dtexySJXMFusH5HFJkgiAjzAc0LZ0uko07BE5PXchktqVy75tJ229CsuAHaOkMuELpQumKq4oq%2FieRmICCH1qJ68gm4Bbjr5Fc5qK%2Bk8kH8HodDjbBczOUAT7LRy9%2Fp7vrZ9csvNpcIGAn%2FbzfG6hIbg7G4u17AweL1YNNGEVsPpW1C2I1zAubeKDnvCZldLsLkPXphYijtPKC7OL0aGQ93YdSV96wmLn4N%2BWkH5vZBWMDzScoXIPlaElcPOWH4KZxiNvJEvTaJzcYZqPaxmcUNm1bYWaohPJT7zRto7q4bM4EfYWLzn8jzb6DGeAZrO1YCCYst3RHsRtEQgEuJQFNzH%2FIlF5XWC22v5%2BHcEyycLdRe0PAGulSMZDYCpaOY%2BuGNV71Kj5%2BqA0MniCi9%2B1gnKiZMNE5DDUDZVh4KphepjyxlqFrbZqxxokXftlU%2BVv4hrBe5JYGPPwNULPYXTPfZYPKA%2FflUR3YStwKe5aZZ%2FAUe4laJ3G3WvvQ77VKIi10v2zRzEqSnMkvd9tOPfNlflYnrCiiX05EYRuI0f%2BccypjCwwoXCBjqkAX57jjm0y5mwdPvBcOISig43c%2BvVpBMOGxwIxMKWrxD6zzvd8FKR1jmU%2F89Zv7FLyo3cqq8Kkii7%2FmQ4oqxQ%2FKUuDRksreaIqfIZFSsSCK4R9qjBPUEkqNZ0OvTbCFBop2%2FNTo%2BZYXNzz1TmxdrZcQI%2BC0a8vd3IUc8F6f2vD9DpwJXoBNqEch%2Fd3XP%2FZMVNnoMg%2FyXdfs85DFUbvkGHB9ZknL7r&X-Amz-Signature=e9a60b000990fdfb664521d3db925461764d457bfc8169b268793308249923cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

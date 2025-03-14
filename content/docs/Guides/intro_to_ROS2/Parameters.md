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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XECG2Y7J%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4GbZHKT6dbdn3TVdofvMBwtrskyRvlJ%2FBvovALns9BQIgHCm0LvVw1LKmSwrL5hrzXLCG4C87uDpCLn82o2t3vrgqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJJNeldpcBCc4b%2BaCrcA0iXDh1zfVnr7H5%2BBX%2BXY1amvviRBv6lYGeidkZve5Y9GOupNlxA6HfttGKsaOGajuMgJ4s1adMGlXeZtsgC%2BJTb9LJMS7weMfinUY8mE%2FDDEn92R0bmeaC4gMI6M%2BjfDPxtgsMbhw0DIJCBo9gucyif%2Fk541M1VUCCYbHFRD6j6HnuIavqZVJJXPZVCP%2F%2BbkgMfh5%2Fn2E%2FA47g6lpUE9vfCb8bu8v%2BGL0VTuqNZqeQGrMYcIYiZHlkZGshsjm9vZlcE9ggoa0DYXRw8SsTUFkt%2Fi1gLaSqx6VcnPJPUVg5ZQpIcid%2FdDc0Onc8JqxXwkiPqBe1dHGZAt97b0BM5ok8UKOPe79Qaut8Vnw0Ugd0rHJ%2BbSs38qL3JCArYuGOBlRb1hT6prZzuoONDGLYspcWQT%2B5dc7gIHwQrNRd%2FGUdj2PRo%2Bx7lJIhEO2JOMJNuLxZQmiOdNrCAEIHW8dEgezeSGEJZCk4yWT%2BnywC8Pqf2fL1nMuk7nCsIyiXQCdjDnQl19jqe3QdVG8Sg4danj8O%2FhFgUFJZ9%2BPVtnw2%2BTdERCdjdLms67yLlPiOg3a0326kWTuiqfVUaUUoEiEX9Ky950LYVE1x85TNYZWgT9OZGA3mzqTpvo%2Bg02EXxMIzpz74GOqUBJ7RmVLoIQuiK%2BzEW%2FDtHyEQzxSSpr1JGQ%2FFu9WOdksNs6RTYkCSerFGEqfgdPfgBOHOrBCZESMlLYcnQXBfGRMtltCYZETw0dXlm0meR8cfJpAv1sHgKnOtdmz3as1PpVdqWxqKY9cl2YXdLBZPOQW9BD30HTFyTWhPO4ErVt5V1sv0d5o6wMJRNLoKigbDS2ol0%2FIzH9rOy3OE4Fgcaz7d4qfGV&X-Amz-Signature=e37ece2fd61c59805a521b27b86beba440f6c76d1be1aa7a9744c363aa79f42f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

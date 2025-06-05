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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466462VCVPX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCuhZMg%2B7yU%2F93gDdO9jIS3mrmQGeoA9OaDmd6%2BGWTnUQIhAL86lqXLfwB19%2F2e9gwto%2Bc17zqkfU6QlfO0t%2FHhNXqlKv8DCEgQABoMNjM3NDIzMTgzODA1IgxwYZO1kMrODyNwBHwq3AMYNaJi3hPglX%2FCIpw84scaI7fykkp4tsLuU2bGmzxshirTzO2HfUQXiCKCeyRLLzWkV35ajfpa%2Fhe4F0USfU8nolF2cHW1lYQzTRsVwH%2Fc8WFbaQsL0d0uN9RnckjREwLVo8lRJxi8%2FTJL3YqyYxyzBz6fR2otZCVbijme4VRN9rT5I9AXTSe5Az6AlrKG0YZ%2F18KZEZ3xcpHQ2iZty4BR1djpwgrMNJs%2B7ZmwKYvlBHgX0HLBuEobCTUJMAR7uBXSPv563jvieMZa39juAqpmIdd05lrj9I%2F1DAWGMjw450G97C88pM9ZviK8lnIgnm%2FTbTNrwoI2tWKwWDLbwHw3%2BH33eXp1V7kfHMA685muxJvWjsbJZX2Dyd5BioUeLcZuZohhufTy4zUugdWCUAZuDKTBJ0rL9lJ5hy7cgtNSIoylXr0HrXl8xB7xN30WwIDGsoJgo3Bu65CLqdREX2fCfI6%2ByY3Spkjtp0Etc7PY4%2BV7YyuSE7b%2F9%2FmM1vz3v8RB5tX8e3Mx7oABNm59aDxofHAsAyWLb7O9AEIyNhiU3aAL4dZfLjuAwIWxksZ4vV%2BSQJ%2BisEmOp%2B9TueYfOJFsDFCZxqZFPO3IoENJZ2wMD81%2Bnnq51LXFbPjhtTDT54bCBjqkAebS%2FmvQQRRyyXTfqv%2BQaTK%2BU0wlEBBl4wfq7TaNd2%2BnGfUE7Sflavw2%2F1ITdXYprZQaZW20yW7RZdHoqRpD64jPiM43xwlGbeiLyDsH7Ox0STG%2B8NtiehvcB%2BI90Jdpeq9x0xpN4bMJAhMBM6zhPjLfkmOqDUGCf%2BYU9HAmz9n4QUMAoel9ZlGlsZDxEdJGsHqeLUer%2FD3yaAdvcA46d66cUV%2FI&X-Amz-Signature=a994f656e0e52726b47b423b71719d55b437a799541b17c6be7b6de027e221b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

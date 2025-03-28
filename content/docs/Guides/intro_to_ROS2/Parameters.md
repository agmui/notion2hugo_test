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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4E7SCJE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoKXTp5ORKOeNkD712PZ7ehBc%2BPI%2Bk%2BdowL2lbSLkWjAIhAL4Xs5c3Zb0CnNaA1ZZPwQQzjZ7tZTumxWtj2y3pW1mSKv8DCGIQABoMNjM3NDIzMTgzODA1IgwwwkYcaCNE2XNhY58q3AM5aX4IWbQ%2Bw%2Bo1pI2%2FS6dwbLR0IqmZ08dgNOQx8Pg6Jl9M0tSxM82jEPFqm5JK8DU8kp9mshpxjjB4La%2FSjOErhA8YehjYJGPFIUljW7lBIKY2%2BMCDw0e3N9nb1lEO56MFLhRUP%2FGoNipsUOiDBSKvMTgB351YJvwu0AIcispYhaHAvvb4A1ipj6bCRX3Z395Zu8WeRgVt36vfwZhbAgPT54qb8pD2lgJMTCujX%2FNqHtTYYQcCLFwyyY3M4TXBugDt5tBeSutYrEJ5kDj8BgNXfeIaMl6lEOKiQW2Vf5yj%2FO6fnveWcntPqzikERvonVC70XTSeerluwGISPM07hHu7SmmFrWooSplygIKdNEPiwi8vUnHHyVb6UavQt2Iuk5EoPtTNUSr03SzyprxD%2FHA2ev17MBK1i%2FLE%2FrOBlDUgwmcHVu4VkmxYcGPjxYyRAWUzTjPnGus3qNYGj6UI3KtLIKCSfkfsub6HX8TUoDtrNTbRbEcrQCQVvQNqHrQ2usSUe97fXZAQrSxtwB8mZtlHTdej%2FBHFgkojX2kAFqCgIPu017Mm%2FYKXNqZQx6w6pi16mEvHYAdRdYOTF%2FmRw3FQKztbl%2F3kDQA0NzcD4DATAXxabCz1BtU20E38TD6pZu%2FBjqkAVjXhAbKYyhUCeZ0inbWOcYrxUhJBhXBJSFGVPklmhsof4JM6PPUP4lhOkSSkAG7XjC554HObAK2pJTkhNOtGf5Dr4F1J6ExNyo96bMgLKGr6ONx3w3FSO7SgutPADTgwxf6OnG%2FWIc6fCvLLemNBdEFG%2FFNOAf7eN5fCjcMFoznGMaEicrCY0GOMcrE%2FOYsybGuawPs4ek4lFfPSkKGscaNDZDa&X-Amz-Signature=658d2b1b9ad471ced342754b2ad905636de1e1e1836f42bd6ba27c85ecd9aba9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

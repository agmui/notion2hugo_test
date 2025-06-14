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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ORUTYHV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIA7f119IAuZUkYWbhNoeUznfHnAWacd%2FNQh009PDvl9iAiAYV3QM7LnZLqCvuln2DnHbOYal%2F06iv%2FPPE8nLUmbocSr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMykm3FGKSzS2Uw0OdKtwDAYocZWuE1I%2Bcf%2BQbXMl10dwy35cfdXi5cBwSlkl%2B9CHmq9ekDyh91%2F16XL7tt9NePpErbW1U7H4o0HB7FNhrOmc0nTfGFmmVdtdLir0DJhotzjEaKaRDCeOoZgl0o4aYD9J8%2B6RceDJyD5PgJVr1CqOsYf4YZBHx8pSeaRXMyG6OOegbTnTrIMo5Gxi2YX4wBMw1mZZJMbwyeVknl0%2BQLyckwh7HZzuN6QLGft2rfDKI2%2FfLgxkK5oQP8ELkzEjTlotvwSx1zFXOgqayVmk%2FfapyjsRvHoe0jBIVB6eipwJ8XjDsfl%2FBF8qH6rydolmskQol0CTQwoBg0wDK5%2B5Nes6VBJuN1DJx1zYR78khL5Epq3KTpAcJlHFE%2FNKxgK0okMxTsyyN6W1PpVdiL3tMBpeoYBjopRV0iwneLLO9uoCEbtqeQxMm65C3vHqbuPN%2BuUNb%2ByPQ1q7M9mwO579Wl3lYiFz%2BkzEZ1z2Yv0MHbxEaJykyvHfh1LmfJGKCa2VVPXiLhOicM2qzRLG7lIa38agYvuh1CW7cV4TY5fP8xm3ht6dkHFWAr8harc4o1nuN1RKscnVhdg74lLNVS%2FDEgI0ysi4EEY4T2MDnnPfVGLFuAhK6UU8lh6uq1Ggw9ZK2wgY6pgG73mUrOMUzsw658n5oNSgrQNpCZNn1CQlWFhx0MbMS%2FBulTh81gQUUceFyWZrogokCttin0NupiVmlWfTek3EdQjF7kMAD2G25pAQ9my9MMh9yJrFlaqkXKp1Ip5cFBEtSZe8fII73CxhuIMwvKTCdkWZLUYznmmfh1WS0m%2Fzs6asVa65SvQeC5JYKwJC7iYT2ZVh91k8cEfwS%2BHBLXNEwniooWmwu&X-Amz-Signature=4e34e6bc1c7a97fca8617bcfda1d6dc74fab4ff53f0a31e523eeb19d6f93274b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AGT6RXZ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAU5Lczy4rs4a1hxFbo%2FIs071t9OO%2B%2Ftos1eBIeS0H2AIgYX7D9%2BIQI%2FgcUABoXCikuH0cd8dVPfJQjU7XXZzxkycq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIARhexRtV45rjSvmSrcAyvOhA3MLHJ1kgkH0LpbGTWxuUl%2BYCVeGy4rOHyWX7BvhRFUwh0wosP2RSwZZ2q2T3zMwyJjVEBkcHBu6C%2B%2Br8lnxJFlYqsTT5ECdg7AYaazwGcpMdDihiQOOjWn%2B2vtA0iSNxGPlzwDHSrCWJqcPcBYKK9OUQKkXUDGmkKdzU1W%2FKxqEglcnjNFAH6Y%2F3fcfTtzQhHd6S5vih8Kr9YUu2CkI1htVLCn7cNDdgvoneX6O8WuOYkVEhdhiV9KDIfAcsTgkISWmy5lIeyUZGFBBUISEs%2FFIzcWAtjW4Hq2da1F1qttIdUdVHUV0iScysGT7xGz8%2FU84iubw6wglTSqn5mFu5IhzFx199rgWqj2R7oa5n67sxM6SM2OMYioXRct41RD0UGDAz%2BzO5UkYxeAqzoQIleE%2FVHib1MMqIniYGxQ%2B8xPyXTE%2BQc3jVu3NxsOPHQaBh%2B9TFS71R29wOiI4ASLFYlJ9oSnNESb1YDK1oDNjbf5behSskXQAk8hHdiZjwjHhX4g63QTmFIx0iGfMbIeK%2FiloPjv0er16tnrJjbADppIw3vQc0kJceYjq4VAVmMLyngxMJlIoupLR5WM23yNatB96QJnJXzVazKPUAnj6fc3IvBK8i3MrKl%2BMOe7078GOqUB45%2FKfpCB20uE6oTo5hx9YIJS%2B66Zi%2FemJIhU41sOaiMSs9pJNf5Dq5s%2FF5UiM0YKWkuJe16DBIRqjMQ7%2Fn%2F%2Bh7N%2Fr1394uDVrI5nl91SeeXtDFbcfUCkEYSq9dCqyeY%2FV5rIpLsmtO1IPY8vSo5u9kFNVYV1iqJ0lmok%2Bj32u%2FMB4cRmWeV7ubbOj5ya%2FuHVMlCxQHpi7jm%2B4DA8plKKF%2FhAre5G&X-Amz-Signature=7fb8f539458ba767c45271136c5807ef27aa4646567a2789897546bddff784af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

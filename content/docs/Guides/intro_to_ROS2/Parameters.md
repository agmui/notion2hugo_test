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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNXQ4OLC%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBCFeIiqaapu%2FeCEvQV9hGxumjGT%2FEuuEiRsA2jEY3REAiBf8y8Sqc8H%2BR5z36qp987GzgiEu%2F5CcX8cJyfy3gRxBSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4bUpReEVT6fOtJ%2FMKtwDQAbNVFjtZjnV756AMQz97mFbFEmm6lm4cOi0a2TW%2BCeQLagAYgpUsLSsUl0XONQ52vxWsNHbWHne%2FL0a998s%2B5npKHhIp93HvMtbqOy7%2FE8T1b78cMyMzm4izYRQEMTHL1AbLZcJ5Nu1T4QSgxgRcfMgxDrkwnV6qtDZOq9HEGnMZVGf6l6GetQakOvGKJcTfwaJZ9DDHB0%2Be8KQKFKKQyshdvjtM5%2BLrsvK6%2Fgs%2BGGwKN0pPVrvBrhzu057K%2BhJyZwQuE34JyKOJJ6%2FBlGw6sYh4S28Qy73dmqMERQV5lucbqA6PyGdaxrkpv%2FNndbP42kCMkm3met8HrvoC6ltDN%2FMDmNWFdd%2BWpzGfMNGrKHxEbL4%2FkUODXOkX944Vc2taeRVXl3OFJktPD75m3ge1uTWjGEqkcZNzBhLSXDnSDyJJ62Y94AkRPvZHOOHWycWOxoK2YTu5T2bFBFu%2BVU71pGI4o6JJqxqerpAsPBebaYO%2FDahD78ZJVDEkYS2sr5XXEkoHsLsoFTvweCjiM0%2BlAGcR4qrvMNOIZMftLt1Pr%2BlRnSXqH4roOgFE3s3VfvOiRTpPQv7HHH4wDU6%2BqL%2FiX4Oigi5SFmYYsyoxM2IbvwPZSxJ9Y3R0JprLf4woJCswgY6pgHu%2BU7uAfIreYC9HNEKYTJ3TN3kPbYH5WNvDOgwyr2W51%2FBYZVWElLgBNauWVqkryltbhjG7ZmZkdNzHwH%2F9HGd5f7APX%2FiwxwkC3RZtzSiw2vkcBGbyfVi07qozciyUwfdvuG7zY0LmzV6ys%2BFy5qSfFdexBqa39TcCbKhy25sWOLdQ4LHPHPjN3GYZI4QmJdvnbOkKbwY8t8aoZe9UoaN51wSyOKG&X-Amz-Signature=3b9e234d98f151832eb952d49298d2e9ad551acefe0c86cc75e3edf3ad289eeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

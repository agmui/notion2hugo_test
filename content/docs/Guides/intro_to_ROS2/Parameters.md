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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J2EKLSE%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1am6WCnSmtFeIhlSjpScEoYCUUHs5CQCsHchSGOmfNAiAWXhr6jMZuYFjHLW9XgKbXk6Hh5TuQHen6G2JbTY1KGyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWWxR70DDTi3gEW6yKtwD4epElmEp5RkfLDbrp%2FvEXtNfSDeQkcEX3gQVy5bvZdPGIc1Ao4BODYAKqS%2BKEcK4hqia%2BoOGFBuRUV%2Fcgr1mMll821X%2BlbVtz5JnWaRP7fH5sfwqM5yNmSCeXrslUCnzHp7L1MCkP0m5Psi4qB%2BxC9aje%2BAOOpf7zQ6%2FHlWAWDIl9ydYOnXyH4LvS5QDvvPRauC7IhZXF48PZ118Lh4UaTUGgBBFi0NOqKHDlUQO3SCrTrAVc0zGkNian1tLUP%2Fo%2FWeRyiIRBRIgB9fMB7UtJ1mxGSQz%2B8VoO40uKBz9EzZAxU3sPMkz%2F8R9iCdiMCXgT9y1cRqNPeDQldHrgNnZQp4emRggvAo32caJ4JkwyNx8eXV7bGYHnyiI2hzWvh02tgUBtdlJWaR%2Fpst%2FFKkynL1Eh7eFyYwJOsaCb2HSVWeAnckyoW8VtRJrasGBCQSadEoPYGsAN3vOShN378coLkvKXrMo2fNib6dfCNbNSGERS4XFbNAq1peGWLD%2Fp3hvFUL8EKwmPKLlzA7LenbD5NHXGPxZxlUvUcEmT%2BGKbSK%2Bbs9EdY3Ioqgxdboc3DR036P7ISKCyOpG0qnDhLfu8coUeVMZJh0QqWeui2gCsWVhMIx4kyCdjokfGuAwk%2BOq0wY6pgHhCr7vI52xe3U3XlKa3PR58cj%2B4kNBGi7gTrroZB2TEzl85g8fcrOJQ6YVbuQVaihaKZ5HRxcYYwhWPtkl%2F7FC5Bv2tDJ0UjjPDs%2FFBoqu%2BbK5r4EtZPYke7dBkA0sv0KclM%2FgRVPUVIoTuAjae0oMlIRoXqhjIp1L7zdKVrvqfhg%2FCE0zOPmeeFMsPIOFQ%2BoaJCgMNFIBewNsblj1n%2Frd2zGXyd9B&X-Amz-Signature=a2c0e57ded740a8a3a2bcfea7378632617a161ae37e0ce17a5adc5c6a3dd359f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

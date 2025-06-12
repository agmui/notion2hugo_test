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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI5QBLLS%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDTgZw00sq2oGwlwlklmUqQ4MUKoQrXu8WjS2oQC50EEAIgA0TyuJ62JY4MjvvD2EnpPwKDTorzvhgy4d03qP1V0MIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBj1FYQmARIcKKpddSrcA0ibBX2IbLCeHk33tT%2FbHbqEk%2FUBIMCS2lJa9U8htfs4fsq%2FY6gJMoc7R9%2FCksmp1FlxcSlmO6Aq6DEbU%2BgAsvKM939ZuJ5%2BGWxUWpoyWLaquO7IGA3HYaYHKnPcVHYq7HbsTt2uL0%2B3Ya2CzwsQaMpTi5Pb1DZRpB2M0PkiOb%2Bhg0weJuTiCJhk0zgc8i2MzNsykAkvwny7zUsGM80FJ1mn4MNt%2FfB8AdU4oBXVbiYqVPIc8fGIagvfOaVgnLTcOA3uXb8BfKMNCSF%2Fs9lu6I3IyezZYQ%2BbvLYVcO9XglJP4yLjhB2c0JVhnztE2PBk%2FBq7SREvRs5yW8XzrvqdQe97WJT%2BhfSj7Cll%2BTGnBx5tv5Q81Qq5PHIhrw2xoK%2BxtrkCEOS5KZMaD%2FD5F5uc1aV%2FBNDJIj8sXH4d7b8x4RuS6PSKGrSbaxR1h1YnLSd22kCrwjUwTWZrSov4GNrge4e9z9NG5MbN7KKLYA1gyc5MNe3nY3PQSUnPindNnHdWIJW16g7Fryw%2FA3yTXIWzrwB69t4ndwzX6WXhNcwmdITEOuP9RkK%2B7XWKdkQERT9hFyLQvdN83MReXjY3M1kLPpsExpMZZe7FyNpeAdjve9RyCbxFFlQgggg2k1dCMKGIqsIGOqUBm7XWXavvkiwYJ%2FpTm2O%2BuShO0fBVlJhuyVO5w8ZB%2B5sy9OEZOBQExFIBvA68YfLWKiUqeffiMJs59pEw8lMeDdJFeva%2Bo7L8HEf%2FMsgvHMypQpqEBtqIOzzGAgVaqXGkxK%2B0vTDkFfLGA2HQCq9J0rtbTzx2twcYUVwV9XkerxIPFFBK%2F31Gv7rJ5yLU7fBW%2FEcnoFtaeNIULVynDYGgZqtMzEVI&X-Amz-Signature=3d3a736aa2d2079a1b34c16e0c1120ba398856cc3e91f0adf80e44f20f7595f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

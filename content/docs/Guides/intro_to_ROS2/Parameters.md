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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5YOKAI4%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDykmd88M94X9Kh5gBCQtvyz2%2BOvsIW2sVHMdPhUyluqwIhAO%2BRMknWo2Mabj9BMp4SZX%2FpnqJ6lnlDlg%2Fu1EM%2Bcj9NKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrvp8Qfsco3APWl48q3AO7QSfeyVBe6vzS452pE7rBV8BwbIJRcQZM4KjkARUk24PA119ILpbQpAWEkJ9tFE%2FJrsKRhROqOW%2BshJch%2BBz6rwt3XeyJLS%2F0jRnXNOCa5k8JAOStOIAviet4MJT7Ys1d1he8cK7CZ9pa4jXXpcZo%2FmUraZfVPaGtYVTu4yffWLJCczRFY7vsQlDK9H38ZpCbbkAdxLOvBkKvAvr2jy%2FXOoGZMLyPVTXOvu8v5Q3M%2FaR0wfnfgrE%2BKnMM%2FeD4eUDjIlgG9p3R62Qp%2F2ecuMiR%2FYEpkqMNIUOV%2BFOFCxGDf8FXgqxuZVoBDuQu3hCHN8hP5NjrkjmcFWH6nxyHDDDW%2B%2F%2FQ2yR41Q4z95cESwOK8iUHjibO2uAjsPcQKgJUiWADpjQHPFzCgo2ui3mcM2v5RG135DrdSLTMMUV53HKlgjXCcYv%2FKrote%2Fycb5H33yyvMdPzZH8tZEzInffOnXV%2BtPFWcBv%2BGvFsn9KNbjz27UYo2JbRFhOEptZlUtXLTBPmtg1T7qlt4NmtK6kBVW51sAMuOUsI%2B2sh6rp5MFKtJPmwhI78We5Vzsvdgzujih80ahxjtKKKu9HE1YVYUp6pwzQXOcpXX1Z10uuqrK03h6geL7ftEySrFdT%2BKzDSra69BjqkAY1xjX%2FxqNmV0ibQvTWiQYJ4GIs6lyqNEftpeBhP8hgYRivT1T61%2F7itcePD9kJY5yx2BExgnKDyqvOnmAQ1w9PobKST418LB5wO%2F%2Breny3eBrXoE4YbQkI3UJdJLYsvSrM1n9Z%2Bau55JtzaJy0aHyxaE6aaLW6ZL9KrsxONlePKS2yGUZTWtsGhD6Hirv3szoNtfuPTWlN51OgFPrKUb5%2BtcYjD&X-Amz-Signature=efeee7615f825e3edf08ade49cde0f64b46f0895823a8ebb6761bdbc2758868e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

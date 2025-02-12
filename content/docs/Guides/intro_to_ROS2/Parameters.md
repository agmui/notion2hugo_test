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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y4HMJCA%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBe9Fs6Pwe0n1mvBVhkadVnfWOeqPi5p3Bv5bUNA%2Fv%2FwIhAKlmh8UmLcgK4c8OzGNso7R5xjQK1VKmWQbd0NZcDugkKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSWYzi8kJvCtW57Isq3AMb4mYUnUEafwaXaApJ7jcz5h5aNjf9XnToaKRwHDgbpGK%2BYJeo0z4689BE%2Bypi9MKLyACdrrImoiAo%2Fepu8W0i5b4AyX98AyrIRMwR3WNRc5ZU5UspiFUGqcDXIO8RCtWQjOmLDMEmLEAxHagl9gWToDffpF08Per2YFRIR1toWAKo54nXDFokgso2W%2FrNqxVK%2BM94jYOI%2FdvH%2FfCC3arwLb2PF1wsRSKEsQ30Q60J56UiJS5trsvv%2BjLhAXFuJIGD6fS11nQxbUCsEaX2%2FhpwbZMi1dfiXrvAivRSZybPcrWNmejNbkA0pC7wD3cEGGRvMv28Pz3rz0Grz0jVHBh8rgoLkZrrxUQPEKjj5nqSjNo8541fcMgY4muAPFqkzmEeaf0%2B8UVJiEfz%2BBZg0BWt3cFGHFTTkf2N4eNaJ5k%2Fk9t%2BUD5l3i%2FqugOFz95NccGFBbo1FF9wSvKNojcGqu8tj2qoAEFx7NdODOutvknYsnzr2HTEwY16YFw5oWeQ4%2FZeyNFEhj8LTW8C8FIlsIEG6xGKFHlbCyzc15aBTNJ48FiO6z7DWMG8lAot1vN6VOy%2FLpx%2FfQH4NfAA2ACs%2F1OWUZEI6PBLSbAYtWkblSGykO0HvrzTB7Rr4p4ObDCmkrG9BjqkAYTExE2VSwnw8%2Fgb6aJQ%2BNhHqX1TH%2F5vbNfrAbgA6kePV77kpwRYbrVIh1D0fuzwvsVsC0IaGg5rTmKpevj5GVppvhs4oMb84rAVhymQi9NdedokERM%2FNoiZKBMg0NFCtw1pTzNyzrZIlOtywgBo3sSdxtc7p%2BUo9nXk4qcNfWDS1iOFtJXJ6w9Vz%2FBdMblgpmfgyNGTU2rUmJc1bRxrpQeiLcIJ&X-Amz-Signature=b3ccae202bb08815cf3c4117502318aee4fb5a0fdc8afaa6037bcd050e9b7caf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

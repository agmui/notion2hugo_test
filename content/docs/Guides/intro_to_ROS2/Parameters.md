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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSRP56AP%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGz1iunKNzQNsHEwTR39pgQnA1F5ZdTyqvol%2B5Jizfr8AiBoW%2FgCfpCQ2Q%2BhR1mATLGsNfc6ZwAzX3gaQkuzhEH%2BxiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3FLOTZm%2BBEw2%2Bj6vKtwDm6%2F696z8W35p9z5tb%2BI3KbKa9b9EX9tvBMQ3GQ0PJgQaRJ%2BSdbi6bvpMXPlIIOZaSEVovez05EE6R7%2BvhW%2BpfsU0cFhwjTZKp7dCSydwzjOCX3ecZImgruu53Rz38WQFd7uBB5AMOioOoXUHtuPCxYCQ6HPfLSp9PbzOnGFo2mEBPN541GDzqwsqHHM5C3TtSHlg4YrL9ImjZxwytEgt7YrbgRAOuKoGVRu75anUkWicrNX0FCNbu4cZaLc%2Bh9GG79Xh1BrcHaL8eypcqKFEfCcm5jn2ihu75HSdW35KDmWTpaWPFTs02Tz49IXYoZugHLbdKQKBYV%2F9hpTzQBExWd7wD26Q0mF0Kpu5gwshSNYxc0W0RFdTVEjmGaFfh4rF2hs6kkd2BcRUkIIJDDDVkkwcarCsqtg8%2BA%2Bt0QhmGEbyC6vFtXsO8Jqs2CplBZD6yC0Ev7tKkFUp5EdXBqP%2B6A%2BjVMf41COZTllX6j%2FSho%2FExQKmWvqrKb%2F7uCxvNc88zp6IFOYnCBdPxjl016VgXgYee1enBsdZ5Q62HBB4uCYMzhS8Ib%2F39P5tIQVqc8L7yilwTRMF61yx2C84cNzPWSaKc6M9gX4LHfTZxcNtpHDdkC207GxIOzHf0%2BMw%2BqfXxgY6pgFEWJ2P1DV2vbrXCfx7%2BEwbv0pF8%2BeCr3AkLVFxF00cD225PEXmaF0zb7hmYPe5ljP7pyo9bJa1UC9tdQCVF7%2F83Mhd4YRAh50VD5Hj%2BfxtILDdgXfXlNWS9WF2yzywDhtn%2Fhlxj%2FxsQ1G1hTSlekrHAEtwenuPNNE3I4v6GfFceub97WDVoe7Va2qPAK%2FzcgIz2QzDlGSR00TA9e6523LGHKPTcEtG&X-Amz-Signature=c85fe70bfccb2c5bc58f9707398317fa3a0186c6f2717de53fe3dec3b8b0c103&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

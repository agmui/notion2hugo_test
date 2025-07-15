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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642AAJC45%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDH3264BfTb8P61WoSPkTM58B6Y4MRS68RjW1utCz9KngIgOv86NiSOU%2FmSWMWnIyeb5jwu%2FskeVQmoUc4dLA4ghcIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDH33AiS7vooRslBVQSrcAwS0FXkexFezScqKJH428XCtw7MG5cyXMoxambUuDThDjyqhXtdbgCoTvGAHNWnIg00NU442Pta43XTVCj6ZucnAqjDZj%2FznWSioPZd8hixBAgFTsS3O3LUxFp5iGA9KM84jwgHWl0WUAX3H28jagm%2FAi5jW8gZ0BDHOLxpVqwl38IFEHL0veBLea2ww5b%2FwcNbkK4eX%2BRLhPSg1k%2BN0Os8%2BBItaHE0IqkADGQ5EOhJcreT%2BBQYCIHPGdgTcmyBnOoTmO99ArMjCcuDZnb%2F5zeufCUGHxR1D3rKb1ViRqOYnW0yWIP5eAn3rrHU56tGuYz3eMopIUc6FG2FGdjRIK0TU2OFa6f6H1IKcfCOYzXlGGRTDEEpMzYHux5l1SoQph%2BPBu9OxpwUjxmMn9t249g3ZLT7GzjtJ1vH3Rhnbywu%2FlNuODNMvLLOToqapB44vM%2FQvEGNTesHQCfaUj8KdzefeSbDhRuv6GCbNsO8rBHsAnqjwXGj9uteNDH5lr6FpmRSDbhXuYxDtotvHqSctFF%2F3%2F%2BKJj76uNoFtWlHmQw3CV6QcZF8uRIZBwohN2BNFovItNnQFERfXtR9tukE5CCF9jK0fTKlfMGKnR9y6YbRe6ueAvPw4zwSn1tSIMOiq18MGOqUBQc%2BmHs23iXL%2FWH9oj015gRlqwP8%2BKunKv9Qfq03hWxptWeZomwi6DpvB2Ode8iCHx57%2BTqAJHuWp18ZzUab0dGk6SZl3ACYe8R4OiPzjDiic2PENGzNhTpT4pB96jS7FEMpZnNrwrvsJAn%2Fboj2CkHkNP3FpuJZAnhJb7ti9QdFfiwPSH4DPegs2CKh%2FtoyQnsxT7JlSzMh%2BZU2UwwdMzpZjKfeT&X-Amz-Signature=435f6918e4a10cc5f699ed49ee2cfae69f418e36a07d866cebe2ed045b6ef77c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

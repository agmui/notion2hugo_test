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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VNHPA75%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCu4abLzKmiPRMxs6mzqYS5BEdlgiOCNprOklNO95qpGAIhAKu1ctwYz2IpWhk1Qazdv6kkLB0DBNY%2F4AlXrhnfoVWbKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMGSVciWPzms5irt0q3ANN0FJdG2M%2BWPAQJSb9TzhBhYbNRVelMwRgYOGlxtkUtpkOqoEKXq2uyG9tz%2BLGs6vho4sWeTAYQ0%2FTKhPmCywXVjn6uUEivN96jVmUTn9cZGMPwuf%2BqYJDRS7PlvH3MR%2FHPiqkmB2%2F9efildo18Jy866QqRGiSoxOFNb8M9XADKk%2B4doPrlHlu2F4VMJNd8ROok4tR7zLVzWGkOXyTjk9FHkBJXdnVXTnseVV50v%2FBciKT8k%2FNDIimTtisqjo%2BrX4fLd00RV0NKZdA4JVi4KkZUnRGZ4VT6XdUocto1bJMKqQpL8fBdOCJ1KlIOE2lkJfmzBpVPTT0rGfru22ulkf9riWjGN5W%2FEHH9I6HDlCq7pIhkFRhiDhMogjNVCkR13byXJ11LoyH3L6aVebq5qwC6hv23nrwMhvtBGhg4Nf0kdRQKc42npfxQQoISAz5G3fyBLeOcJUs83ioli%2FO6JNHv4bim5cMMWEWlGvi9IG1g5tm1it9UqmdxSb2wW5oHGfe3y3xw0RT0UIh02%2FaTYO3BbPqmCvp%2BEqQ%2FJNeYXu4QhLAnTgQCBQO9TmDH2eYipAav3WqDZafY6ygl7tdoEtpBc5VtDSi9pwj5%2FB8ipjiiGosGKq5niGdxC9d8jCfx42%2BBjqkARsKUTxSqUZUjgTN5WYlc2x1mr0zbfNw1vfEVYUpREfxlrgcype0I2hTTygEKAqd369Pkavl%2FZUd2j2BftWcA%2BbNGbakkwWGsr1CchJk7ItiSn%2FrkPyq8GE0LZOmsWJpIN%2BWQP8Se%2FFfDnOCuamx%2BTvNNX57CoEy0hrCG0n58g1PTFfoR7r2ZYgHxLFrRjedtLirFsGSFRpq8%2B453APpHIB7n9Kb&X-Amz-Signature=0b7d03812b337c81a8f78f95484ee353342d952e6dcb0b93aa32aef8a6277d4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVJL35QT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdzSc6tX%2Fdd2gzQG%2FuFIKyCR8qrD4IGXz9LXFwCcgEmgIhAI9DP%2BWkkJmq9Sop84Trk39zegYmWglqey%2F2s5tc2jEIKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxI7lkxzCGcBlMTBWoq3APVlFHs2XLgw1FwkuVIz47ikjdmL1IUxCdwkyP6fkSgMsBxJVJ9bWx8zshNU84hH2xWWKwivdV6%2Fhdp5Q8N5bGcSEFoSn4jUFJ14wmfVmpGPKKRGLK%2BqIlnNGGakxZeVvZf6%2BEfZnpJaOt%2FU%2FSh1mxneidRMeN6reYUw3WxBG0BVI3cqmKxVH3OPJfPPHg6pnESbWHJVhkXdbtOKETcXBV5qAhTgFzr9Ku7HwaCykv9Njd3WCd4tyz%2FtwoJnzVKU3dCNlASyb6QNOa0YoiaChyeF1n68uOnoahyObNTtBbGLk45MUJfcBOTj6Gq2K0QyLIwnVRpd9Zq80PUGE1eZUY00mRmaQGDJXDhZWA7ulrnM8KHdc9Oag60GSTmJXDoLHCmx1Kx0Mp8LfFLuPT91%2B44dbP2vMoAtYJbnySYRzB8LRnZ1vDHtanRg6JEP9qZe8Kd2krqBW2PJJPpW1IbzP1naAFmuctAJi7XwbnSyue6O5t8nh7eW%2FU4QO88ZlaXrdaCIfNJwN3wv7FGP4d6SYFxq1MYao3tgflNHTMlUxrtIJYqGPLFCEAIZDurlWE24R4OyOXOjkXbbiZcX0Wh%2BBUN8ZhBhnAq4HCIXZXlsLegGZbVVkcFeWdhPggXajDekfzABjqkAaY5atg5IefoWhWa49nguCh6MOVIJAHT8hk86ggYPt1ZdX6wtRxdwaH%2Fzvb6pNSP34fPiok%2Fx20Jzl2Jkl9RxX85ND6agEMjdERfxfaNDCnpjJoEHtZc%2BkC6i%2B5R%2FCnfWllmff%2BTx0Na%2BF8zmJh0kidOQgi8%2Fz%2FQK4%2FHxfEqDZfSV29%2BiEZtr3XVqT4lsvgDcIcFDYVjtQQ2gjJ5OXsk9u%2F4bgbK&X-Amz-Signature=33fdb2893c64fdb62d34e3fc403473a857fd3e530ddeb1ec9b02befc7e9df694&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVB6USAH%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCPxb80RTVIpCrTEVPsicHqryZTcXiW%2FPBIToMGOngO5QIhAPv5i2FraghGbQ9rINyJGlHaZiZYfQUEWjdi1hv%2Bsx0MKv8DCBoQABoMNjM3NDIzMTgzODA1IgyonDT%2FIhkSvri5HJkq3AO%2BBk7njqnK9C5M9H5F6jUXKUyfAjey9AGr%2BoCGjH7CPUYSEy%2FPOEAHo%2FsW%2Bku0ymEHChrqacoLBdPurQrY9uxKud5H4v2bz86H%2FO42tsZjlMnsUJ6YFCAauEnYK5IBcmvTa37DeoEAViFVryCJaiep98W4ZqrLlHxySZa%2Fj0FX3PtxkJvWtDz2CSfexMgi3KZgzOEV49CZ3f0JbXNKpjUY70GSMdwNS23kWCFpuYWzuyPyfqgXwLR2dmon7UjStt79PwmrWTyfLSL5%2Bk3cuTLG7Osmhud%2FQIe8GBSp67eerr926ohcGJKtwYEvUIarcBdEIeHoQ4teXgHY85vyJc9j%2FRGSYVVJ6eLh4oubOA3dtndPPPWwMFfsAEDoF514vgvMnlI0Y6plYY%2BgmoySQLdrVKR9qS37v%2BMvbQQR7mmVp74S0f4bafto4MNQ37TMywTuZHn%2BY6DfWa06ZJ88cyxaMI0T6FhiQ32S%2BnBabzeymEe%2FV7n0ckOXOax7FKaxoyrM3%2Fi9Dj4QV57wuvzy%2Bo9jw8FhhFbKvi3vNndvGifHf692tmrsxo%2BO1SoSkcTtd2%2BgldTc1nYGFeFiOVVWW18EnsFEY4qHkHf8hmIzfT1hKTZsSoFsbFbuyJfOcjDqut7ABjqkATYeJH9qZ6CR9BcSniaFC9nb0EPBU8YCFH6ivn%2FuszsZk4RuwdhS9n%2Fgdw7%2F5%2BizB306sHmawVQfyAdpSSDXjmSZZ%2FSrp12XShdhm%2B4EvhuNmaaeWPzCV1eN2HgMFZrsr4KFc5z79PhE8eI4Lsedsk7PVX2HVJdQYUGPfaKtzz6ny%2BtPpPpbGcZUrSnUIw5n95Aiq%2FVIQ4Yg%2BIocuNDJ2MIb42RH&X-Amz-Signature=56a0f658c9cfdbc1a46c39aad48be6e94d18b2a101795b21e2f5dfbc7185acf0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

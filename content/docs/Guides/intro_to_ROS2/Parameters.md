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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q23UTFMG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T181005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDM%2FHNwXxLGzq4y90wyTDOw3mRxnyejPHuu53fc8hCynwIhANBjPGwwC6jXinUCfzfBf4xtS%2FiMAj49LaCaTaO7iiNcKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmEQzlT%2FyOxrXVr5wq3AN%2BPqMPCzgiDm41O3hFmg5KzbkwY1uNVHNySuPmIDLREVe%2BjwLTTotXaLD3UzcREkb2bqMDDl1vyTnQjUnZY%2FB7Fvsn99qnEukgY%2BuAbC9XKgpp8vGuHYzbDNPxI3Kdump6ZwdD0yseBGoW7DWGpwR9VA5U%2BFuiCw%2BfSE6W07%2FaI%2B%2BqXvxgvwcX41Be%2F5rYPaHU58LpAu3JWaz9c%2BfSmCXVCr4nwwCwATIp4baEQ9CecZsKSl3HiBxysdpOva3nGX1vcUrvpTMQmIQzlO4szGmUnfKot17T3EJpYCkS2LRShkyuGI6%2BC%2B9AZQIli30XBDDvAPECNvruMz1C9g4NZUzUM%2FVO3%2FYlWJXfxxBRMCv6WkRRSQaUZhfESuP3SsCjuR4jVzQdsR9UqJ27L7fbCRx%2Fsrm5qPkYiG6%2FkvO96nMv7X5ViV7y4L9oJ0W2E4O3RSRUEM76V%2BdbbOn44y1nbdP20XEof569NFbOgWZ85OmFTuKF6JN8EFHX48qQQ45C%2BOzHwsSx1AErjxQ4P1V3ZAGwl4NY%2FBLnspWHRM5ekKUQlJ%2B1Brvzc3rVnDSq8%2Fz792no7v1PYVY1t90IwKLnrcHASKY9Pi4P5W5p3AEbsVD0TXY8yTerXiue2DmkATC%2By7y%2BBjqkAbBjt5d0KHkEfoTutfHdEyjIDA5pLKa8lfn7yX0RgVhXSJW%2Fis0%2BWCD9iCepVaWC6NSdpDmfu6fqyTfb8bcDfCAotTTfPYoUKegkYxMCdR1THkaK2nrvFIcDNpKt68GfCDecmyTYEL6Xvgi9qaj5nhAep4zStGczlm2RY1xwdSyf7GpJYI%2BdSzb5nIMT171fvJmCqzMo5xGnPEolhLNEpxR90wj2&X-Amz-Signature=6bc2cc3e5329fc330ebc9637a24922849f62f5f606ad199317bfdd868afcece6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

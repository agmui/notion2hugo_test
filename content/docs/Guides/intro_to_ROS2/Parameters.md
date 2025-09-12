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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLQ6GGWC%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfgejeJBVwRkpiBNX%2FBNFMPSCEPFVgU%2BN8%2FuWTiYWxGgIhAPnDIo82qH7RHb5XXSBtkVrGHdc4OK85cRpeRetf8F18Kv8DCCIQABoMNjM3NDIzMTgzODA1IgwFYuiKaud7pYm2yOgq3AOe4muKZ2hvYtxQF25Ocm%2BbJk%2FUkpz%2BJM9ZepygGBQTVfgdo9PXsC8P1V%2BYkOWbhz1%2BqBn3ztHT1bQglR1nr2nYub8ujDKBBO2CTDlyogx1XJ%2FbLvB0Crzd73lUXZjbf3RzTMn09M0E64GxfTacEBvR8GvoIfNw%2FhPtI9r%2B%2FUvhGBmyVBKDK9sZXY%2BAB1Zn5WYJLLxhC9jVCaBJwm1%2B3WtyZMS49RdknbMDkPYPpLc3HszpgzC5Qf%2Fs5sskwek%2FJAPbpBOGy8ufljg23YF%2FEjRyBQbqAMVRFa%2BhmRSVtm7%2Bo%2BmBSO4%2BTp42Lm1VkmY6j3u2YYk%2FuS2fs1o2XkdkbgLtEUjQr4ivz3VUMoHxeetqBpnZyW%2B9DHvdUSur4eUkF3uqEo%2B3HcDO3rCgdLBQWAbpPmUC2UUuaO0%2B1LtQJ%2By6AaBUjMig1dwhfZanC3dxkx07MKUzwO0KNtmerMXZGxEBxqpBphShy8kffYBXpMn69x0uwoDWQQFBWxfkfH7ZAhbH%2BmbIEpluWZ%2FVsPsYqyEkMIklnfQbxcKAIBcV2DUZnlrxCawnOy57YFBxpQkYiGv6zkTwwOI9hRfVFnt8OJADw9E%2BaFX5%2FAkKgpeKocCoTsbo0IpJChbgn1L7wjCZ0Y3GBjqkAS7yYc4Dx8h6IdLlW4OnM6GnpmYVjS5TmnakvrZQlxJNEojkm4Yzvc0HZEGs85Gl%2FIbCy0s3LIxltcs4yQGmmm1bdekLzqYrLwZ4FwonoZBxDO6%2FGxSD2Bv3eX80NUMt%2FyjAkZyBcyzXQgua1M3sIUvbYkvm%2BtSAkkRgK8N4qGN2lp%2FK2NYIVg4yhOktmhGD%2FmJn7aplbc0VCX8FB0J4lZYy6giS&X-Amz-Signature=0f77665f4437e707afe946c040c3bda5cdf114df9a96f546842ff999420b64b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

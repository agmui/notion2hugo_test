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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGJ5R53A%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBCVBlP8wizfgetpPf2PiMuyhSBO5uxJV6J%2FAiyh1bPAiAv0mranl2qV2qWhKotiJFC7Ywi69KKaosqJuSgm27%2BgyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF1jvdZX54BiNFWFIKtwDtIXpszptAuPO7XjI%2FsE%2F5chYT7ZRgKfyrQE3nfpB5IfTe6%2FSQZ%2BkGgl5aPve4kpLQFw0tHyU3iLfvI4ihUJxpBpDoUZN48VNpTM5WCr7%2BHCN7wTBE%2FBcwDlDDZpPYP43uKHyQ6UFhJ2stOao9uJZrbp%2BaPAWmM8DQbQz7AmJSvN3jFuwASnMnfnIgxRP0EvmF2TJjuaArlLTMuAg3pRWXYiev31KZzs3sOSx%2B%2FBuUVvoGi2OpnTxEvwTAEG2oCs0397X%2FxW3AJDBVkMPaxzfzLVB6PKSQL0GpsuPRcomqIZLk%2FT77qnhwf%2F8YUDLQSsq2sM21fuTvl%2BZ1EfaHBTZKuWuMsYfkoKyEn3Bc%2BC3LTJbekRzpTe6fTcuXQ8yHsb00lYNQpIDhTw0CTR%2F%2BU0rG8n%2BqsuYhbJmxtIGg03ii%2BHdo7NGB0uCG2EeE2iElyVpkFHW9tifuQgAxa1Y84qs2p7rYJtYm60y3PP5FAuXPSFqtltCyHt4g6Su9WzaOvZD8gRRPr%2B%2BXXNJuXAaY%2Bzg5Y9u0%2FmigYcImNiP%2FIHMoeqzdcYG%2FYpZbhmMEsjifuGE5FSSzds4sF7E5l%2B5DOo0nm8kVv%2FYftNh1xBrV1eTVybJGbMkomMwtRJcmhQwtvfMwgY6pgFKo52loeEWVWJBUlt1PgRLCAzcd6UDFk81KaLHoJwG%2BmR1T73LFeheoRa9jy7UyGKOLpUNJVQzpu0BZIBT64cUsqAT4T4h2i7x%2Bemvt1R6ZaYWhINELyyQUV198Bki8pctG8B6xjuPkd9wgYGsbR%2B8wDYMBBMnrytnn7wSVgZ8sVzdz44doa0L0PhFCt8Qod9NuFgSZDncP7u5xNsgiRLwm7xm23wV&X-Amz-Signature=29bf44059c9478244de0637baac7c853ea567a67d0da3270e6199b8d082915ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

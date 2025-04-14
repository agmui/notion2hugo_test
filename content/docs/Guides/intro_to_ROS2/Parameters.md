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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BIXVDXV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFITLgY2rW6BtmPUIM47gaIqE16mESm8YV2qxWFX6s6kAiBpGt%2B4Z4QcqfO8WTpik864XCgxRld7pdEkOLbTd7rrxyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMc8Sfb%2BEH2mdR7PMIKtwDg34VwLF3fGxVLpxMvOJxoH2F2TWOxxM15waZRlsYNyhv3JKVakwnTgS769Yo6HINHoo29ufsgShgGKwzx23P3TdhpE6zSrEhIxiY6%2FcXU9Hms%2BAlH3mHUQqLLCOIktBusid1rnMZKZ5sB%2F4q5JVth94kcuaeQFbtGarnrrTtBSRnrh8j9Jqbds3ewyfKvHWVbEZ22a6eI4nAyhAfUg1lrsFWp3EpRuLxv7iXioNHu43Njlvsvw%2FzbR7qoqeZ9ZaEj7V3QGFvp3raT%2FP4Ym9IMJWyEJbyEV370KDd4CbiBIXnTM8sSKJn07R7eXHdLdWudJgoPnTbQRH388%2B4q6ZnUqRAmgzzWwC6AL9h0Z8a3G%2BpUnxYudahVAkrUxjB7vfw7UmYvtI0LT6%2F7WGqyxjJywCoMyCFYhZZJN%2BpfeMtLaKU3kHPhS7TZa5faQOvTKAEYe1oXND68SlchMRlPrDEkeedNm30oUwmpGxATsbOflIybVoW7UzTlZAh2nF3wJkfxoHyl0Xw%2FZNDuJw2jCDeGrTbBmUUwWA348mCJTI0lniS%2FWkq9pgbenWgOCpB02MldH2E5PGlrTyOYte101naMSNDfB2XiMZuoLr7qeuioYRb69K1JkS%2FzD7c3JIwt5v2vwY6pgGwUGiI3DLFFR%2Bkas3Yk5SthLHwdCH8%2BrRHXdcHwOOtQHXFG6%2B419FH4vca%2FPLzJcDRFL4Q2%2Fr7EMqMXMeeYm%2BlRXSI5lJeIJA8g7nDwaTFXe13XSC3%2FNuiw4C6pvhFIqp9Fu0OPa6FATlM%2BCSE67P%2FJoys%2F7v%2FTBpDVxuQTF3tUDQBEgoyqAdlZ6gL1rqgWCmur79b2SPryns3D3MoiKoDJtOYTBgZ&X-Amz-Signature=862913cb4faedf4a45111c2c437158d1271f693362f9358303d815c29c6477f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

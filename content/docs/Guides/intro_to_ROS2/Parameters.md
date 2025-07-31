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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJOLPLK2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFrLssct6Q%2B4dNeENYOAB%2FG6ZVb6iaJbZeosYpJ3YC%2FAiEA9t%2FonrHkUT14A%2FgzAKiHpC22baganMIxXWUgjmj7kCUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqf77fTJZE91WlkNyrcAx7C2lmh2ex41JC1i7c9nl6NGyulegsybUrLvUSZKBOx3Sw3E3ERhReEY80aJwj9%2BUB5K9cWldYbWtcVzNe4to%2BpU22RShC9qFtatXRcaw3zyoZzhqEKcTz8%2ByJ%2BAHTuIDC5ffxVDC15JZSaJjy1hbubqRll6FzUpQBERkvHk2bf0qLKDS33iE%2BhT8rvahL0XFY85EeloVrPlrLJYF0DOVhR1wTerqC7y%2BaQzYZrLCqM2OO%2F9UrUGIMr3ZkLjm8xExCcZ4rnAS8AluhJRU3vycRGlIACuHe4ryc8v8LJaCC61Q9uOukethR1zGxm5pNO3e%2Bq9fX98l0H8BGZCx0EHSeUE4a038gSogrETxXNVbrfe2RrDV%2FoXoINTsvMZKCVjAHJCqUkrxVh52jXfYUFflJ6R%2FdkyR5z6oTvRyQRJhYbgNGMPIA30HcKaPmEhvJGcOhKIDzfiVBiHDPnkE9RXDozzIhcYVgQaVMv%2BiaFEh9RakZ7s%2B3WiGU%2B7eiA%2FWOhkP67aupok7FpSgvAM%2FqjQzkpp7NKiHFSX3xum3%2BK0yXDle7GMq7KHxgBLtLw%2B1LOM0W0Msx88NknQfAtMgfyaRtpv28UvQJ8CDUz1GAWhI5RQsPqkD48g5CUSk2VMMT1q8QGOqUBgKvNHu3vF6P6yTbHvzVpFltMt6sNDoFbSrfeNKwBbygxjJBrTM9eRCffKW03SP%2F8IlhJQ4AfaeAZSsrc2H7wYdloT9KKErazg1Zi7ySWYiuAbyjSNg6E7Ome09bLZm0Kp2b%2FRu0a9D%2FWyg7LKTNRQBIPpLo5kONyNE9%2FjxJMqs15%2BOCt4NGNLHblljRo6NOsr7fc%2BF4tbB4drnwlcC%2FA1UbX2d%2Ba&X-Amz-Signature=8eceb0491c755ba816431f72b518149ccdcbc5707549910ede91cfeaf953277e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

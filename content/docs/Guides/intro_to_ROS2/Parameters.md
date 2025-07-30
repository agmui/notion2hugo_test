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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP7EOQX6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfEQ53sE8UNKG8xh9qYHrJ5iFLNv3bnxsTq6y%2BpOKWMgIgB2WWNyZYnvb0dchI4ZwYw6U8gEplbEAPP3IrfYCl1pMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfTDuDn2hdCB3YfRCrcA3KPuFOtwNwCgNjmVjy%2BNNNRTGr%2BRYDUcjWRYu2Z%2B%2F5qKzLsEnyYmOrsxMrftY1Gw2vuQM62yme%2Fs%2BzP8gpDuFayXJ94BvgS7VsIhIq461Q266wj3ZQ8%2F1T%2BkFE8Y7%2FMskyGEunIKx5PMe44ikAo923GINqvoMh0f2RxBErNOCUS%2FElZTwf1j%2BtCx%2F539oC3KCJcMW8YcyswYRFIUXDDFcUM4z0DuB6rt9tGC93Yt1dKvvXwVzPE4A7c90BOIWCiMqW2lvmZqDotv8QRJH8i%2BjuNJlauAwl6DmaBnZFGeOeYqmX1jHU7dWOmWncYS%2BOc1KvwdsU%2FfLSSb%2BuTpMTxcPjCm%2FYJhGNOMRWMUy4OlnumtPtioreXPvkpg69yMhnocd4e9q%2BwaOS%2B%2FuHi5GQiHf%2F%2BKhZBUxjgM4HmzNt3qCMjxEQP5PRlJyNJkq8YVMz9P2k9hcSsTdDo40YB2dWTXNacs%2BJE%2BYWCOSQ1tULrYrW0SqjueAu85ljOMuL9B3Dqs%2FAV3QTn8tAxkVmIVNG2fM8U9H31PFoDM9sdNq06InOTDIeyvSITf7jwDSu0GShu8wPRwoBvzDfGC199m4DzLTcw3PcjSU0SDu1Ebr%2F26ArLv8%2BfTQKRQbyvFjUmMKroqcQGOqUBctD9wa4eCJ3rMStSm0EL8k30BdHV1bTvvh8SUBM4qirnD5YbdzAWo1h13dZF9MZQkm8dcV1sl5O4KHQQbl5rYTRTwqSC12g56jvsQnlwiyMWS%2FPUl%2BvaWTVMi1sUFvetoKunKVBtQUQ57PJ6BXakN7XQOpN0uU7XZoUKpQoqv2Ello4rzFgt9teBXrBqS98lfJV%2BZn7YkWzIsyfYGTiLo6DOhBJd&X-Amz-Signature=77fc18bf46c74f6204cfeadc7d49ffb5573a52a6cc885f913ec0d69d3c988855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBMR6LIH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIAoUfuzE3BXbnVqt%2FoUKnARbjA56eMZmUlGVJw3m2u%2BtAiAL%2FfPJn6CEUNr4P9aog4i0q3x8Y5cEePkdNLiKXI2lXir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMR10xMyjGUcokubXwKtwDW8N9rmp6cvAjUNnbLv6PtqyjSxULkNiSAA1%2BRL1EaDD0FRFRcV7L9QtJ5lVLJ5IpAWEIWgt3m6IEz0c2Od2mGK7wofCQMPLNspn2XEmdng4BtvaOKmfydie343SnnLdhc6WMMNpWQzu3gUzqGC1N3k059804CUmJdsIPdWOg4VTTDtTExFYffJcU4rCTCBjR7ZdvS3JhPcaThiVS%2FocDvqoPe%2Bpmywe9gGXi6H2JJ9gWCmuCgvwvCmtSYBAnHL%2Bp%2BxmS11cLPhf46XuYxdhppZoWxORPH8nmeRkdFODkbUGMgC05nhrJ4TNlSVlKZvKzvZnD73HA7BdXwJtjSlnO4LxVbUph761kyB2ldS6hw%2F0Kmyoy1zK%2Fs86s0hM8KSOMQ08uNbEEUypS0mq4X2cmjrmmPGAwySBHUj2MGonxsQmL2F%2F6D579nLaq%2FsL3M%2BMBaabxfscsYUGIG6WQBmuTA495tKtA3Bty4BHpQ%2FsKZfmWqr9UYv7RTWcvaz2EH3jgox%2FGCJyuw%2F2YDrJpwv3TB3quNYW8VMns8KjTfLLcbLUF6%2FZR%2BWD%2BPpe878PnIhJYur4zeeegq8%2F8vTExwEmUz47XOcAsnB1lgcXIzV6rEaFcq2XzKnhiJbDKK%2BYwzr2zwgY6pgHJDD9KAxr4%2FmKQV9qQkFw4C8GqVngMl0T3%2FTvKKv58jS%2FSj0jNqQ%2BC%2FsgH9zIAg2BfnRH7T0JAP%2FUXELpNWeyS8fp7zx4A23jPgfLVPh8iHv7baeP12Ui%2BLbrPml0MnuaoPB9yixM80XKoMeQha2dz3rBqSgSPbeZc9WIbDjdDeudD3fP0KwkdlAn5niNEcm3s0ZTRWPze%2Fy5y6JUOqrCA%2Fnh%2FBoD1&X-Amz-Signature=6a9cf4c17a94a0fafa3fbe05aad0b496dd2c705d83c00f8d976b4edda4ff3054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

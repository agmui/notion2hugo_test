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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5BME6JV%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T100807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFK0aOnpKasY2LcjB5BnNTxYjL0HxiD9OlihIvHrknJ0AiEA2vgyaUI1gjhbnWul4fW0PY6RgxPcMpZRxQgWC0IeXGcq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDLX0K0UlP0fDZHygTircA20zz70Nb8ZkDGT2TWtFO7nvM5vhmVAjSXtWh680UCLHQEIlaaCRCVlL%2FQb5JitfRVl2GXgGqFZXfKMCgqUzkJrfljTtMaRcctyrP4Z3LNAtfHVGlmtKcY%2BF9r879HUkCFik2qPRGlWGIZxBDAMeWYj%2BvbsslmrbCP96zHsvX94q6mTNyLweuSObEPnVTaSgxnhOQJtAdnFv1f3RQxiEouce55Du0acGr6Ed12RhRd4SGmWYGpVUa7enMMy9l2D8FVauhJknaa98AaFDu6o7KZPICQCXuQ5b9f4pEZ92DLfDd%2Bp%2Beq5rN2MGoj6WkS4oWHzjzw6aNFHTsfjUWmKyYpyq%2FwaQ1h1Z7yPjT1bVYL0nAePcpKA3lH0QWyzHJvxPMzAaEQ0%2BbUvS3E7%2FaMZeGGCjbbXlxqEuSDklZhnbfxRw9x2D%2BdRpjaWfrKITJP%2BwNFqKthKLnW8aLwKoZp5BmfCTRiRd6Lid%2FYgNWN7z4BBp0V%2BoPa3Xal%2BT41%2B3oDZJRijeHIy7gpqPpHjZu6HyHrBV3PpgZMi5M5vwLD3GtZENs8R0T0M8P%2FuysHxjv0VLPjCBkVU8Gk1BSLkb20qEimMzl80T9fr4wnmnsiWtt7wVGc4w5hhK%2BoisfI8IMKS5ysEGOqUBhfzToAatpvCYcznSDtYpAGkXjPScY%2FQJ1hzTvKod7JYzUVQ%2BMz7qjBtgG99gRAExxW%2Bp87sSOymUFrdoYJ%2BrESCjaIZkm7IBlmjY32duE9CpZjmhbpAXFpIMY3t7WCLTGTx58oNVY4H6D5FUARQdbA7%2FYgjxLVKgizK0pmtT7jxPBlL2GV8Vp6U7ht90n08fSFrj%2F6oDlSogBcVZK1aT2nnoNq%2FA&X-Amz-Signature=c726d7af930a673fdf1739fda4350a2104ac4be96b1531991e48b83f2a5e2794&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KKFJ53D%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh9a5EbQFAz6XXsxHGUowSMFH7t9ucK%2BHRznUdkQauCwIgIkN%2B1I13MAmJ6FZl3znOwFvQ%2F4JfV9IOaV9OtTTB7%2BgqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhAO6xoFlgIb2e4pCrcA5mdhNYY9eVcQI4i2zpoTmobsw838cnUMX5NGP7ypj%2BdAr5zuINV8PdyAUgGDXCV0z5fwXhotO8OB5dXorWLnzi%2FekzJ9VUswhkbFB0X%2B%2Fxmgdn2AbS9%2FiYnS4tuL3IcZeN806o4FpWHcf2eEYEh1woQXd%2FeQfNoAJxLEkM6AhgdpvD5GI%2BBcfJqAlQPp9lH7bQ6Rd%2Fg6x7tyIA1Fo2mZ4%2BA9JotZuDfZdry6pzqVuhGyc6%2BIptJu5dxtzsBtt7Jc8iCNey%2BRODSpJ%2BXT%2By2W7TSKKljCKdN1HZI3ZLiypllcK3HMr%2FNNiFpTKTQ5L2x8mTcqYiV%2Bwc6LZks2ZMMFqZSWHjzwpq%2BKqUVf8yD5EoP47p4mTKnJN%2FU65r%2FNAf6JFin0U1hyQLdIU4D34qjZegvqwpHrssdUDzQ7mis20Z3b4r50KLXCP3pXtvlyrbeDrB3HHT9%2BQv0LaDSKacpjfoF%2FjhzvNoK2c%2BnF7nGiSRFOuBHjIRTw%2BpBxh0fLjOAkpfiUG2coKxXxswpQX%2BoRLEVA5xB1WPTl5zAC9SsI6lvpbAFQKMt2DnL4AUglhoQaz8GwSLYV29rAnTlsR9xcJyYpglwE8yNqP0H3763qWlCw%2FXsz4GNRI2d1HwkMIm7lMMGOqUB1ibpFe8PurbcJRuoFmj%2BPd3QdSC2I%2FyJJWCEex5Rb9v9X%2FSRH6%2BGzTxo%2FkK42b4X81QeLmKn%2BRYxa%2Bu8cEXRT%2B4SvXEFvU3aycIN3HqRTv2ltXAZX4dJ%2BXAOgDYgPf38L9gayYXBShJfZy%2FrY3dnQ3s0Hb0NsOmd6tV1jq%2FOHwKa9ToxNXN7nmyWRaY2v%2BQ7zxcxAGCOXhRIsD2vHOp36p8VQGRx&X-Amz-Signature=b443fe70fdb6082d5f996b90a4776668d09bf4040f278210c84b79d3c19a6884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

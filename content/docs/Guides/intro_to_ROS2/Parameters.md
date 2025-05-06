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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZQUKFYT%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDitJx%2BjNNgncfixK7XdyvxylYHBFTs9pSZc1XvwIO0cgIgaq%2F3TviCRAU%2FIcHJGzF%2BFtojjqygEgFO8PP9ADHN%2Bq8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEnF%2FGmvzjaE5o49GircA2I5JmHWNLcKTpUHfEkShFzHwOmcXo%2F%2BHJN%2Fksdps7W6kg1gfHRvP2TlRlbky2LmK9r7oNgZY0ee0d%2BU1SLCqNWlZRFME0qcNLjUoP1Rgg59SolQ3OSffvkNNH5jb%2Blp1dtx5BmgPlccbPHR7Sx5nB2%2FdbARBM6DDxT1Og7erM44gGBZ%2BBH2Y6eSuTGMmVTNrkGSA07hUGUKN4BD3wc45SrSc2ECd0lEzNAAXrgu5%2BLWJUwSTBAOVXGwWm4PlyrHf7o8xF6%2FPjuuaIeLF2Hs27op33unqie1hA4qqwWnp5s47of1EIq7H4fGsjH3NPcWid0hdzwAsiPwzn07CxSHQry6EAznIknkM1GVBVP9sAOAQf4ravh5WtOARva5Sc6UhlFnHlbQ6IxRtlSdc1HOGxMLKo7cB6cwisUXejB3KR985RecGv7EBI9lxMg49Z5747yemUjfBD9LyX1ci2cpr0jNn1AvLOXbSFI%2F5Hkp4%2F369IkWloBNRa3laFplPsY0Dv0aXZA1zualjxfSsOsvBmNZz%2B0VfsUBOShgdCSMLlZWSKwEzWojQOV902kqQVmLGVDgPC%2Fk9QrgnVs67fIpJqwlR9NAJudG9T4dfhG2V2lgXGEgNOLpxivxhRGRMJXM6MAGOqUBIJw3xWPX3LF2hpLlaexE51yuSDvmW%2BZ6PufrT6W2fr0K745NXixjNGYRY0fHW9fT6%2BlcnHjWc1njcqs9oynoxXkNQvVweP2ku1dbS5JmFSsAfG63uBoaUN%2FHr7NpEAI0xyGOIa%2BMQn1xxnjkQm63yGuI9lAAF0XUXFYaxgwFFZo0i0uH07eNnpexlRU1n8zV1Rl5gUbDdjETt5Tq1IU3%2B4NAuXXT&X-Amz-Signature=f01a556c3551f194df8270f586993ed565b823a2174dbd680298028779609e40&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

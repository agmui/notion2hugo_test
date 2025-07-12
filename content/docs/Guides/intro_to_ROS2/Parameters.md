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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6CAIEMB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBxSXXPwKdKl0HTc%2B8pFzZZRCn8IZx4ZebTBpXlFOIxgIgCoL%2FkLbd2sxoxn7ioIJbL%2BKv6fwFhz8JGKbxmJdf%2FpAqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHS6Mw5Ago8VnIwStyrcA5BlonbiqveLeLuP7LOge43rEw%2Fox1zWB%2B%2FGIEN9wbmpuAmJbBC9pdKuma7WFJy01dNCTRi6I2FB2QXCOvQmMvpMK0WaoIVKiI9ZfziVfZxKqG3gwnokzfFmrbTGtNVq9scu0h3fFeFMzlPzP64Wh7Winlnn4a6a8dCdPpQVoI1Zzqlkgn6uT%2FtGdw6DnF7RAOCoftmgvRXTe3EK5Vm%2BK7yLCbDGMZFdkFe5V4rQorMwoThAR%2FeTM6uKZWJn%2FjvDocsqOo8%2FJattBcR5K9Tpn2XmjT3ImergksCG1S0PY0xjKUul26a%2FtFc5JdArqo%2Fhc9652ca8hKiHMwnoU97r%2BvX%2Fc83aQ%2BQjRMMe59e53jWM4g%2BO2E77QuKgPfpOjgd5wLezLotJCkgQBUeu6V95VImvvhfOosiDqAOwZ4DkhOBM8FHE6TMT1TmKz2aWafRrL%2BpEyy3MpZKBadNqgmpaJt4wwwkkcbqYkPhPgAywjUSGg0l2g1yZv67UBMDrB99gXf6aa5D0gDE27g8i%2FBs9eW6zUMlF1bCIdeT73hgPHP9830x06ow5MHAxfjXRsDy%2FBxvnTST0%2BxwsG%2FXcI3ZqkDIwt9S5hejgSCHreMmBd%2FvE%2F3KkEKYtlXgxkl%2FdMJS1xsMGOqUBQOYFHCEa7f9a5O4rGJnj8cUT3tucekd04%2Bx7QhxMvPP3yQxOtSAbNPIojcN0i6JdGQGVVYbgqENSAPTVe1472HfuePIe9NYqVJJnV%2FfncsINZSI4yU5RPNlglvio%2FrSgoDtMHIcimAzpuyYuocPrPXZfcUc9%2FoRGVLYii2Jn38kuBpRwVhU%2BNdPNlKK9%2FGxMjBjFWei%2FQt5ag0OofgX%2B8P7J6vTZ&X-Amz-Signature=6720f666c3db337ed9a1a0d39e0a09bff56b385bbdb44c345edb9e68ac6f35db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

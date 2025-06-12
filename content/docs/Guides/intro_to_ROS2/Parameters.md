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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3O5NGYC%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIE5eKa0NvLx%2ByW1ziULxYzI9Kilc4KXTNcWGTb%2B0%2Fiy9AiAKCxMel2X2%2FHByKtzZRd%2FT4BgT9yN0yqoSXA5zl6TmqiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcsPPmsZkRZnFpo8zKtwDb%2ByCtVxpNNb510ec3eAG%2B6%2BewqC5VdCsjIeN5h2D5GiBNWTYqVb0X53rPHXQOjwV2FNy%2FHBxJJTSToGc4zh3f7Tg2EF0QCGeYQgBHNGz3Gv086S4Q26e3S0OTLEnlcKEh7d%2B%2F36vHVfEz1b%2F0voHeNI0C13AzeCpCR3OF2F0oQ7XG%2F%2FEgX7rMoyDCRHOgsppGD3O%2BcRAjqh6xRNpnG02FkfPCZHwZ2jmgrG7hzGeHf%2FoPiZcmT0xf6tO4dlk48cFVcitW6rYZf4sxv9slmTuQzzY%2FLpAd2pftVVm6O2qrDo0lyoQQPtsTFfnGUg1J2eJsY6UQnuUzz%2BbPnwD61scRfkl72vDg7orSY0ifMSlDT8bIPmR4To0HlBKRwWPWbcS6CnRuS96v703ZRVIWEKfRid%2Bqqq81n0gdTnItCViKZ527ahUaHlL6n4zLIv%2BxKPL%2BnXVr4bpryP%2BZc3ec6z5gmcKt%2FRE%2Fk7daYgrGAqr15sGB%2BIztWB6Q5zKHfzYbRjgq4BzdCsS1tp80KBJcwVLwtNeWnHTSnqao%2FaFVafnvUtRiT78nacPja%2FNl5okDcjVg6sckiiOM4g5YdfxcbwBT%2BUc4r1nK9vi6MJl%2FWTYP5hhNhl3PaoQwGyAUxAw5ZCswgY6pgEp0JxjiDfBXLv8wHREeZuRCivKYdxU9e7V8I6rcvkDvaANQ9ENfagrNJrf42lnzfrlJoaXIhkdh2gp8HEsyM3o6T%2F74jsK96vCaI%2B3dH7AUVSw%2Fis6%2BWgLN153SbVyWRFxf0YTI9zvtere6x9AQrEuziS64%2BkMg%2BniBHrsI%2F8gFbZUrNyB6LxgTM88cWUqjcy5A5UKz45j0uyyHDva5tXj1xCZpR1%2B&X-Amz-Signature=76394430c8fd25858025c1d0645f6a83204aba9fdeee128eeaec7e35166deeb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDLKF774%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC6FWWohtuLZLlf3Q5bYCgU6pyjmG5v7ypLpZTkqnvlZQIhAMe38zz6l70pmpOZe%2FV7vdSfuFXaFf9kB4YaAzVTkGB%2BKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfrObtWIseVaMHI0Uq3ANZA9A%2F8trNDXxUZCTGv%2FfUc2UgbgHJfqC9NkvsWf9je7IhIMziS4T%2B5hV%2F%2BnWT3ADoWbglBGhGzIcby%2F95ShhHeCj2JpLKInqyS6G5UNGAeMbOSwf0UiXS4ARlhY2pZg2U75aGivor9px2aWpR%2BnHfuK3FMkmsDa5Ke4tGKVaAVndAvv4FvgCnCcO6CN8GOt%2BKVvGu%2FXZ2MVLKK0%2BLrMwt7nubboTeOdlchly9%2Bu%2BSDEvZeSvOf4tdZYFTEuO67K4tYjQ%2F%2BnDJK4Qf32FZhWE%2Fv2BwHs0A8FaWL%2B4ltYBlX%2Fuub4VKNvJGKyL6kBr6inHZMZV0Ia5XrmY15VnXokIEWli19xsOA1IP8gkmTH7KYmat2hd%2FlsDZ6RQKBnTY4CWUwrjr71b7JLj8V5JeERU4IrLLkue8UFCUroos%2FNGjPggD%2FB%2FKO5Ra94j5ZqaQWRDCoPDBpI8QnktcEiorlmJfjQUew5JXddfbojzRruCk%2BtaUDheCB1v6Kgv5hKN0mtngWhL3I8DJvKAG6PqpP3OsWd6Y89WayEM0iLm7EsCkD3X0mgvHwTpzZgExGY0bQsfxkIIokdds8bl1FVo%2Fv6Ydj%2FkKIzV%2B31qZz64x8QM9J0QbWS5TkW0XfQkQODCs4%2F2%2BBjqkAYkPWnDhRT6Gadm0zkUoZ1iJt1MoYkW9haFNihUWf7DcMgX7Fv0RxZb0Lh%2FDWEk%2B%2FrO4KLpqz%2Fl71grH6DltXryfZG4PiYS6Y9nVamwecMoF9ac4Py7pM%2BIH5G7p7HkUTpvb4yxw17j4Miqmq00cOYTbsEgdtBPibr0qS5ilOztRPaeHtjyhsuMj7MuHPtdd2H0xqXRQUV1cpJD7h5dRxlqm7hml&X-Amz-Signature=56878c63f506229041bf8b30a6a0849822a8a3b8189b3a7a2ddd8a4e0208fe53&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

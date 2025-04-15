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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX3SSNQD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3nkneRUSVvB%2FX3NKb3jlv26txaRAl7d88Xd6Co9DYbAiBuW2OQUEW6pLgjzHJOmWwJmgABOgk0O9oXvB1OLunSAyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMRxhg0GLtucHkG3cbKtwDxDrfgIshi6tbFqtRSWQ9v9IfbFLiBm%2Fmhu93i8oUA0Evsx8fbAU3wvIGQZSIBuUkTkcVQHaIS4oAAO19vLMOUigbYZunxG92T4qxer99tl5Q30yQTLwGBgCdZ%2BAatOLyigUPjbNqx%2Fz2QL4R7UJy3JHQ%2Bb%2F2zP1bbo8j7usBjoDL5HXG9uB3ZcGAWT%2Fy1C%2BvSnKCW5IABH%2BqN4QzZ8WBENumkIM2pJrPDeKs%2BDJyCtqLHw2CUt479VkH31a5RGAK9rXq1oWfDbb%2FSboaaB8mRgBYLQ%2FsifEexfBLBEp3geePQ0Hio%2BXGHbI2wPRH00d6qVYJb7LJg4DWZzk%2FhwVdj9Wq27QbpJmoo%2FLhH6Gi6BuKw%2Fhu2IvwYobtDWYqW9ngzdyqcUfEXRwVHITDDSJH0Nv7wIQAeL7aacLo74OSuh6BZ0wYNzFWQFO1YQLXnl7Lu3YwnyJH9zCl6539g%2BKHko38ikTUPFWn%2FdwfjhMm5M05UiJJRhtqO4gMxFlzJv55%2BUigtc8pPxJCg3mfNb2C70Y7kcp%2FDXYODu5Ft1v5g39%2BSKvGSIzmIiCK972SkQE3tOQzmysG7N5jsUvWu6XmNDbTcPG1o5ekTqyiGouthbsT9qeLbrzuXlF7btQwsIL4vwY6pgEJQrcmEEP0VFzzcm4rch9tKMtW6r%2BMuDaWk%2FdXyOv42AEwczGRxJRubw3DTnfjSGepXOno%2BFnwoIVPKo%2B7ZbZ%2Fc0hBHV3ZR7WjalFa4BMqi%2BB8hnaPxkN7h3soSK3rOPqs0rqoQ0O%2FMltFizI%2FkhCqObRZEo1LsUFWmrsfv5WnkSfJNKkiT19Guv2z7STP2lUL9W8FBcuiL6EmbgBKqbBIUvMlLI62&X-Amz-Signature=e801603d6adbc85874e838ac607e02a5d8cc65723113023ce8486791549c5653&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

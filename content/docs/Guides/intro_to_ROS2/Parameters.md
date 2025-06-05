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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZPZWVBD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDSVhTBSwmiv1BgO8iA1ojPsq0Zcs4JajZ5WQxFpFCikwIhALUvooD2niVs%2BpgaF5Aew2J%2BUDYGUSVUt19SdRd7dhWGKv8DCEcQABoMNjM3NDIzMTgzODA1IgwqaIVlBEGB%2BMtXE%2F8q3ANEaFsC9r%2F6HlAZB8FgRTeJLevlb%2F26IfgUiVuOEgqPHFpC4271YhPmKtpBt6exaBlHIDxkr7oxWTC02nusnR9KHasZh3fbgJ81IuGHiDYuoC4MR7%2Fl0HsdDznKxSq2c2ghddDiln8vDY7v6GFf20qX4wzoZC95TtjiK1nBLGHZN8ecWSj7IhnnHK2XrIrfxtHRvchdOHOnkylkOsZQXTae9mi%2FUCrfWY%2BIGXgEb3ykuchiBTQgv%2FgXKfyf1z6CdSrasv2I1B6pkoQZDbEtsPb8HfJE0N1h7z%2FHb1f1VVwpqLxuX6aq5axhF2f%2F8jx1KGDi7pfnj1iY8pdrrCriZ%2B99R3%2BGDG2DNsKaIQLf6CO3wSSzwrUyVnm7e93E1F1EgmNgX1LlsDBxL%2FACMPDnbHkCCLFczVBAm5LrJEWSX40DIP7IOZyMW%2FZVzdfnzXDN4tDG4bRLpfyDEcbir64MLHXUJi77w3i4dJC8FQyL6rZ4SUDc12Iefpp64V2XI13eY%2B0L%2FewdTsYGHJw5bgI%2FE2qOPr0i8AdhWiJCw854E%2B2VhTujSx%2FvzCy5P%2BbVHd%2Bl3IqOJ6Rn%2BhliHxXGp%2BGz7EKArnrgPvvtMsZmkrbWGTVYpFuM35ZXd5ysGS3wgzDjxIbCBjqkATpr%2FvAOEdhAMa74cqyrvL6c%2FTNPrRRebUT7I8hv%2FHgoaUzy3vTB%2BICHRgfD5lILx690RxPfhIadZwCjL1PLJiQ9ry%2Flb6nlMj9jQ6gyj%2FMVYez%2B%2Fp4jJVTcn6aAcIAr2xhuRTKoZIcBVYce9cXWhv%2FngOE8CUgFBNee2O7yYN85Y78O%2F0%2Fb%2FI89z6Tw0Dvk2jPnJN8wSeAaY%2BviWrw2HASzPubb&X-Amz-Signature=4c2aa51593a566da342e3cb5d9bd4c46f1d1d7bfe67c075e989e70ce7c0e014b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSCDJZS5%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUpDp5x1kKrXZJALuafPIYmnVy713YiMdwR7yywHnBZAiEAsLMCbClC6pidorm0OjtPQ%2FXn%2BX6jrT68V2eAobCG7lYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHLsmnJ6z%2BDl45ddFyrcAw85UtjQ0t6z%2FOv8LsQ1hZwvaH%2Fp03WADA8fKLNA2evxxIGbuY4m0P%2FEaXmjjP0%2FygJbqA5Km6r7zRm9cbgtHe7ndX8TP%2FSN9QtadlROXoWWitTpchbHX0oGC0I0VxrVA2M3sjOA7FoyRVZ7VJDP9cYX%2Bz7KnJKe59uIOZrTARR0TQIxtESkNqKShCnNGsgqeO%2FiSJgRJQ%2F5aOn4kG1WMMzWrPQrrLmVz0fRmc3%2FtPN3k1sKKrso3xYNcizwK4a49p1lfiMTin%2FI8EBB4WWs%2Fbtj05YQ59WuLkwS%2B9ZXmh1tF5HcAtkOiiGJmts4Vx1hXucgCPTp%2FmU%2Bn8kxHmrUA400cGxbyo09IZ5GjEGuz0J%2F212YtcQtkKVKaSKxi86%2F38MlO6F2%2Fhh2uxB35Z6NtL466avOom6ggt6yeEt%2FPVTnCb6Gd2uq3zZZ1%2FuZx7Xp4YGCEhz3qsPMwmX8aKYhMtB3dmFIDux2zFkUop5olVtiqymmBY4wpl5XXDewXWH7PTkXOIHPlMDVwpeMayq8wW%2FbtMPiwTvPkJsvaOdj2G10p6qhgJzJ38CHsE%2B1Wcfx0X5QUuX12IY9RBwTXS02muSqzt7QnwV%2FgALHeFZSGEPLyiU7nnI44oHtrCjWMKbIxb8GOqUBE1buD%2B2Rzd1DEk3DCmcF%2FSZZQf3GMPPipop4FsClDX6j30%2Fr2Wq30obN%2BYo8qy7U9KaBcZ5J1gyawve5VtfIjxWJ355z%2F6aGKlqyvjs2t2eDvWFPjjMiZhBIA15vDUj7bfUu5WcHZWLoc0XWjHHZcGHzCSsYHo4PSLudmSEAe5RFJXjEHX2V7t6jCHRmuzFBt00I5muW%2B8GeYqaRH5lWhjFkCEkS&X-Amz-Signature=d0001a7644f6e864c9c34e4bb92c98aae03194e9fa5d289a48145e2e23d2d9dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSG4YUSS%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYi0C%2FXh64MSkmXm%2FkNiXHZiNuuW5x08Q9LbjIOT6IwAiEAk1fVo0Q0EhiGOahQf420wxD%2FvCAFT2lrm%2B%2BzbGuweCMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBWlUxh97zmwHZhgtircA13hiVOFC3KHYypQPfz6zZQVm3Wcj0T%2FLspihbsgY1EqXakf8NvJksUF%2BeCPWimJMeS7qILMNFHX6rX5HOgBT%2FTufJPUMeyzWEDaCmiuipH4yuWr0CPqr8Ut5C%2FnwvgqbVChnKVDtHFIOqev%2FmzAi13fY7aQ9tXXEeTAI0fXEYaW1SkYQWDVoMGL9CAdGxnY%2BUXAWnPW2ZEg9YLAIa3RzymcfuqLhKnb4CWeMAYmwkfzOeXDj730A9tUQoSV%2Fzq0HvKwL%2FoNKmBYjACpodVk2Cw1QXboj%2B6wLAVRUtGsxM8B78YU8OFQhQz%2Baz141%2BcoLKrrIXblDjWvcrRjD%2B11jTWIbZHL%2B%2FpoMs05LoNWqtyjqzhZnrW7IJfsQMdp8LsyDM7wmzQbGpWOxl3ZQ1nwG1qrMYmcevOQG7cgplRrVd95Xvck%2FTL99PS4CClExXYgOAnAgEaoYUQaQhRQVmG10u%2BX2JwAaU2GtYmUobfPU1GTsHd%2FLZiwPe78fNlZ2ArTKsgpmdYVom6SYVl%2BdcbzY1wUYMcO8pzdtUejyrSXoTB7A7ZVKTUF9ltIU1lXjR7HarjREND8%2FtkKqC9PTgMhtw09ILNf%2F%2FudYE7iFhOvGck%2B6iF2VRDNfk3sByqmMLjXkL8GOqUBhDl%2FmF61rl%2FZq8la03RlScMF2A1nYETA72E4oDijSsPdttZi9S9Y%2BxA4TzS4sdb09Dym1i3aNOZX8EwBWRXNkNIV7ipC0vPDMPPBoBZG9ewbxm6nz3dvtgeGmghd6I1i%2F5FwC2P8RlZG%2FB4G0Cl5MNemWb2q8fcU8s6sHrl5KNiHaKyqlGLHAUk5Rp0xh2HFvdEwABO505lPjiby9kQZoEIdQvQ%2B&X-Amz-Signature=469663d66b5dc20c63a7eace47d799bafc9669c13e0b62de35eae25322762961&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

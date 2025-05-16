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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THPU4AMM%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwvUaDKM%2F%2Fyc5HGZm%2FhPoCMSbnhkNiKS2TGU%2B342EqHAiA8f8B9B3PZlJeE%2BHGWEz0%2FRkQJEV7s1VKhgxIHgn%2Fopyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMAnMwPjrYfFOmGy9oKtwDRF9t98gTMePQp0IEcMZIuE4Hi5RuDU3hiTpBSwc8%2ByTyK%2BnzdYFTmCtk22JFIoiMGTwfgS2LthTVpS%2FBMGFtKfD0joZkNAJy5cPBJI7OGBqpriKKjCxMF8IMcOagngvH4ZtMmw1ROobG2cRru%2BGfMbC6OxKsyAAj4Rmec2qKNnOJJlX2JLRFLEr8BYzYN61Cm%2FfgP%2FK8%2FREGmijR%2F%2FvuqI3S1FzFDqxD2vw9gyBrnFlCB%2B7oCs3Bn5Xy%2FCXYJ4M5H0ALJz9sKlhfn3X%2B9OcgHHUoOQJ2LBQhB3RErzlB%2B%2B5iv%2FrhDbVxkvdDRSc5PGgJZZWZXrlCS5cTOdY2bH4qjK%2BtNe7b%2BfCiv3CRIqw2eA0u6D0E2ZMD9F9r%2Fosxtnnn8ywCh7XhBakixKHjAGrkZm65gk%2B2Qjyr2h5Sr8BzciheQsQqWHkcUVtX5hTAH5vxiEQTkho6pFThiFgBKhH2sQO%2BDDcOpYkMbldyaMgFeGdNOnx7v29ydpE2iYfo%2F6boEZa5EdZm3Sjm2DSYU%2FGHT385DcIMc8waLcjL5NlVdGLUq6aTfzVdI16M3UisxR0890WRdqTMfeetQK4x3%2BMy3wF3oA7EwdhEMdYnkmMrFvAXww%2FVxCfdK89uOIYwkrmbwQY6pgFZD7xlNbUm5khDPHNztgA60OCZ%2FdogOf5Xf4ADzRqimek728qo1rLmc5kPxxkCkSLLm2P97iJqVRm0I8THrZT%2B1v3n9ZD6J9yALrA522eWNzPTUawJvt59YI3yPBgWfo3deO69BerVvrkZ57bF1HAKVPkpknrbkE4nrgvtoeRS3rocLQAmpLcq37owOPX3ozcYApEd85PiDadCPEIEV9z9Sd1Az68k&X-Amz-Signature=1c05650fcb74acff417e2e3ab29298001beca9e4f08382deaff2e863f09501ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

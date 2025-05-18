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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RCEMLW3%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1149%2F%2B7zB2KEBZQ8iZcz3JjMVcI5sZ%2BKS4bfaNKv2OAiEA3g9zklJlcoINHQs8U5uxdrTkjZTluF52yRExrBC8LCcq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDIqmecsGFtfdLywOircAzzqutZyIXeEB%2FcdXj84IZ4ZC9%2Bjukd9m0wKst2PIT4QQ2knmAH6j6PYf09vcgTigscoRpqRfdQfY5zJiKgwzxT6p3k5Ui0DIpJFKNUMV78AaJdiQHzTvpwqJe4A2x9TP1ZONGH2goULEIqPjUsltHv3U%2FfpLGpD2uMKCD9RgAUraX%2Bp6R9b6iO1EFvC8YjpIJOCf8Ue8PEHrdPLpNIbR920Sq7cBbJbM1cTpMG3MIQHdp5t3kQzfC1FxnXV31mS0WZNhm2pKLVTOG8h9QSDYkW6a5f%2B%2BdhTsF6lxcps5vsKNEZ13tJNbpHB3r044hAdI%2FR7XvZvxmvSB3YHdfuSIY8KK9okDRb8iHkNBWKNU%2FQMz3cBhEUAiibwcXq2DUr%2FxWSFhh7cuIIQUboEvFZO%2B1RzlQtm0tPsT%2BFaFtzMN56ZhXlVIznPQ33JfDWRHpfsqVzR9TzQU1Z7KoSzfuV0r1ulxZ8XJiG4BtRPTTr8ksLdYDAHY%2FvWTa30cIfNckIfvSYYATsunxiQj7gncHCL6RsHsvkrKvyEyC7McYuwOQvX2BSrzRzENnMStXOUoWpVlZYuFmEsZYrmhqaJ7cZLStmsHqqif%2F%2FFUfxsSCLJelN5bPSWMp%2Bc81msNNXSMPHXpMEGOqUBGuP68QvSu49gs%2BBTsabek3HoV%2FAxTmI97Lh6%2BDk1vJfzfV3PF7HS2Iv4m2iuxvaxEaBhg8QC1noHXYEaolCm3uWgq2hrlCxZeD5yafGbOIAIuoSdcUe%2Bga3m%2F7zHehlo9f%2B4Q7rc1zNJcALLi6CmcwOp4dmc5WMODfjeS%2Bb%2BsJQxPOqsA7%2BAsq43Tz1HMldF8faxWqRq1sjK2gBIipopHQVpGx7E&X-Amz-Signature=296d4f9df5a00899565589de77d32f1ccd946f2e12c39642cbff269f5d242ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

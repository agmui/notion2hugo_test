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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UAY76IJ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ0c78NtmYv2tCQoNjVSS%2Bi4d5zdzd%2BFpP1y4AbAv4gQIhAMwtI9gQ4Kpj2WTFqGG%2BXQo%2FCYD54d31Udt9HB6uy7OOKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzr8y3j%2FwT9CCTH%2B1Iq3ANzCuRhI1%2FnDxi3CyOan%2FRV4f99RhTz0YfrMvYIk6kb1k%2BrlI422lHakkVMLye5cjGkYoVRfXAk8%2FpJ4r%2BZxa1498Jjg08fSiqi62iMavqJJbbSNlTDr9lIQ%2FgqgXRfxMKM3BrfquKNfy3r3c0ZD6CDiZRi%2BSt1u%2FnY2nvOD4qc22cd%2BpubvcQ%2FT9drmZNeC2f08yFquPjLrflicbWrBtM0oWbYOEYIT5MzTLFZl3zG%2BjBd%2BA1HuaCtKyFpPfW9WNGskGtpxxlg993d5kDU5gtiYhpHdep19N%2F%2BC%2FvxQLgsEgVdfXkWUCsTH%2B15vM7rcFeKb4%2FskBxlsh3oIZzWLo5R1xmbzIpU23OmZzSyg6830HbMG6LAIo0IHnaSZ3CEjIovbXlW926W6WfBucT9%2FoUCHxYd8sDQIyWCIkVcyqG%2FxrbFNZLTF49S8mZhVqAXt16l8lWnyM%2BvRy7cwjsj98P4R67Fxc9P3053NE2cE%2FT5H%2Frk9CvznFfRcEqLdAHj15l8ryDh74tg4lW84UdQlrk7Yit9%2FQObBbe7GOUOJZiLZF28ZuUEggeE2l8DxqykKlaAlj34XCsI%2BGJWAAD8sef8eLukEAZ%2BTPfnYBmpzMh%2F6AiXl5LAksfi2ECFMzCq3Je%2BBjqkAQS4xctSi8rLhUZcqSnNH07vgb2OApdBij1eT2M%2FDRUdBfwQr8WvxBOl4uRITVV%2FQMhJGIm61fTZZxVJgo%2FBFcDAeZBHFLyPWocYRuv%2BzLFiF8ADafWYrll%2FKUsRU5g5dY2ohDPrjmyh2UycdlRdyF09hixDILkWN9z4SsvWBjmwNnBzm8mwQVnwE%2FFceeF9hfd6w%2BQdLy0%2FTEaJeg5c5v18Qu4q&X-Amz-Signature=cafcbe88226f28f7e180ac8766e92f7faa22ac94a79b1de12fab9bcd9bb18c9f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

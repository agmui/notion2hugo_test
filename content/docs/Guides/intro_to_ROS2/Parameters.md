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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643LYEMXG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcuIRJ8Jvrb8enOmMEAPAsBUTPctq%2BCwLBXwqIp867VgIgNADDLLTRYAfK4D3YxKlto4VXRmJ3wtLgCv5AbCmFzboqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoE%2BIU8fWJdCW7C0ircA8w8fBK%2FhnQ68i04JZ8gPjPV21%2FzqqEzH6DNCr5x4%2BpkcRVmHdZLDTwIK0rNNBtH68lC2%2B4z8pgVITZ7OP4io6CFmO%2BXy8bbyyp7ukrZXGNT%2FnGa6ANW5zkcKBJlMF7Vo%2BCmh5Oj4D1RjcjTR59R%2B0dx%2FfIJwGaSmQus3AzPLXprfx%2B2yoqA0Cas9IRXf91pVSFDBGmpLK6Rg404uT%2F%2F83EEug9gcoHNx08jBPllCLuueRCIP5KuBacIC4HuSRpduTYP9jPjXz4Czu4c%2BExAk%2F7BmRjA39kXjiudIoAtVgtwOF2g6P8WDZXpqot1lcWJpp3vmbPi%2FoI3Pc54Ee6KoX6UgKiYGVdaeQjt9BQ5M9YLtsKaJfAnjc%2B8lSzf%2F0MZM3ua0l%2B4Fo10YRvCGsWSHJJDMO4AQTgxSFppf8VuAOVTwO1Tmr2uWVBbtPtiY%2FSh37cdra4sTSuLTA0WDAXjnTwWv56HcAeLn91I7A9jkD4JKemi0JP4%2Bx9QLbmbse%2BMfYYJP1WYqLSYETz12GFYagsfRgx48AmoKb7qXXFNvUFMUgZUDdli8qdpYN4%2FfhbSpWtI9uDrDuCzN6VJx4avCwYsjp1tBzWSnCRQOku1wsDdUAhfuZ0BfFkYcn53MI208sMGOqUB%2BbUkKAj8lTEN1Qg0ZGQy4C7BKebo3KlE5BYntBwUc3EsQwAmcEh3gwAKDCot3HDNJVDVmNEOjDHq4vhB8oOTPoF6VcOzhPzDM6piHWIMFW0UcEGIl3PwNtOO00XAcG2kbFyiHae9dnZ13ZzQoy6OuAVfz0M2fQOBMCkyUBTlN7r62bP%2FiB%2BDdkBbXpYchvwLcoucBYEH1xnYXFuE4knGR6BDj%2FR7&X-Amz-Signature=ccc4e42b68a7e05a2c576e1e478a342e69e5eb9c66c3b84fbeaaecc64580dec2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

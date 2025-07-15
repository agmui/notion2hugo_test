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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL2FDPON%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICNAgLDjZXrgBWykY92lG2ImaYGqt6ThyNnreDsWtYQKAiEAz5q0rOlx8udp0kX%2FvMtepKJyYXmclErrcBqVUmCSidwq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDIQnkQstVTSckAJ8uyrcA5ZCDWHrEm7X522NL7hRR7ugRy6QW33%2BiVyyYg3zIy1QC3aW9hOArCa5MtZI3ii4jmh06%2BKnfSaes2CI3abv6XxMuztMWNqeNbfKqmumGsf%2FY8YjFhrY1QdBm8ZweWEfeGsVBsrRU39lBHzit1kcigIXRp62VAlifPxAx%2BY3xFrfNEVKX2vZDllDdNKPdWVvKEEju1CaVWOt4Gg6rSSpCA1URxeEVxcQE6F8Pv9ikTgKa5bGEkfQHp7hUUW9V%2FPaUD7rGtxSQtBUNZh2SkC9WsWzF%2FHWaWkJQqJ1qGHa4KEUQQmIitE2mqbOXhxt%2FYBsIdxh0UjjeZ%2B3ua%2Fm6gMoK6fLDMslsxfJOY8g7y3VrEyU4kDosk2nw0fOHlWiSYNOS1Bw%2FjBgG%2F%2FSuQI08BdKOKXVzgij7MIT6tVHQr1aFnbBIoaVRbwqTfBpiESukj41NNYLrR3wO66Zw3j%2BbxPuH1IZhRowgUfHvHEIc4yiQtILH1RG8B4foZs01T3Sji%2BWuJrekqwvCOMYtFxK9L9bYFJhkQ%2FLhY3vkSqN9I81Vpw9l5xBwnxrtZTvuN6xVsXLMn1t5XFLd4SsLVvdUXyOrG3FUQq%2BBCR93geD7iGo1y6HdynlWS5p8ItXLNWHML2u2cMGOqUBSO5a9pyxbaAafugROhdWhPGGvwXKSR8qvSBcxyUPzWomS0VB3REj3XqGK6CwdS6tImT%2FO1r%2Bwz3ZWTlFg%2BGztxW09F8n3DNsMFwPyxR8vSCr0KGpLbtw4FipfqON4zskUoojSoUKEG4IupR%2FM0%2FTxaZycIoLONEHOhUsXPJ9B4tbDW%2F7guYG494bkkaLv%2F%2FUkKTo7LoKkGIEzQNxOnwKX96pDmfn&X-Amz-Signature=019fd947a9a50da591aa2902a36bceaa71d489b2130cf2a27009f52a0e033255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

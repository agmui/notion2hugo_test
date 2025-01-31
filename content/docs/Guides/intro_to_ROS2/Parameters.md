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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3JPUBEA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTR2zXoHBtP%2F0l1VHgRcBbK64IbwlEMb88Y5P%2BDveP9QIhAPYYoUdWajZBT%2FjtdZ%2BpAtCuIpZHmPDoTDIuBXEpm38FKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4yKAq9gX5Fvlk10Mq3APsVqrg3rqhwoYSsWoWqUoF59dlN8etFSlqmrz96TUh8nq3U%2Bt2vo6KsXXi%2BQvKgxWs7GjQKKd9sgr8wGRJPtw5BU7cy%2BKLW%2BGTqmdLvevMOYZ7UW%2BPhjI6TDNBCEABW2vDIQhxaofCqZpW%2Bf2N%2FR1lVY1OT0Of0S6g30Irxd1o60xqnMA3tmh1RmpUFKw%2By7XBteQ%2FUz9sh4IescEW1P1D5gZeoF6Ulv51fFD1rky9OXxAKd7oIa1GOE%2BaKv9pzD%2Fe%2B6HDOwsD%2FUskNbARDBz4yNG7pCENndznX0HZWyof7vUADpuV0Ejag47A%2F1vk2StT2B4Vx%2FS480neJ7DpvesV1bC60fJ5rz7jYldhjyh91hc3KkgqaxLNt6oXCG5Rc6KAo3ctwa6EM517pVbwpebhl92zHdFwHNNVU7myCC0lz6bxRbwSpdkjIzJswexEEh1%2Bd524%2Blb7xRQFgJmVjTDoenCs%2Fnw90%2Bm6k58hd7qHeeiqqrA%2BVq%2B2EpDdpoDeNbeACoFp5hTu%2BDAVlFAE43u5FlmQsD%2B99RtxzP5l6ArgpJvXBziF93pFWrqpZ1SnpZM4%2BceBe2nID0BhE9q1Jcfl3ROQpeoPqK1cGyHc8KW6MYIo4HTeUKpS3PLBRTC6pfS8BjqkAXGpnevDroFb%2B6PKLvtf3rEKV5%2BWRllMkXdNXN85Sj33RkSroYkz42BdNawifvYpKp8Jc2V1NRnLOEsW4AJSEw48Rgv%2FH30FsBKo5P47ZLH1b00x8X68%2B9clXAAarcB3P%2BgslLrHnTDrPVDqrudbyK5GM%2BSW5%2B6Y%2F7OMYzHRLOg1bwW9p8791mMD%2B6BcbBWPN8vwZjNcjyzbYI0ba08yom7RlugX&X-Amz-Signature=cf894a4b310385394e72d0781e11780e9cf45a6712c57c78fc62bbbb321b7d80&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY2DVSGA%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBX7Trbt%2BgxwCx194jjeD2JENDVN3kneZ%2FLgnw2BfQN7AiBMA7o4dFm8DvZZOVqdVm56tFYoghYvDxgs2w7iAAaWTyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMBljOiQXDLOT9sMeSKtwDHo34lmS98Jlaj57Y8CqjNTyV7xTHqBIDMNQIQHg8ukMpezmYU2yCfVefvChCBXP9x%2FgZ6Tlx7%2BkLUM%2FDEgLqBfSTBDdlgNdRFSVL8m7Y%2FMP29OEH1kWU%2FeDC92joa1WN24Dpqn6YV8PSsrykHE2RdmFHP%2F3moQJOTUWg8sJ0B2Ut1GB1ELa7Jn399oEmI0ylSLFEfuA4U1Nm2ubw21pC0yTc62m7n4Y8HQx4oYTcBQn6Od6H3msmBzxc07Q6QfLE4GBA2vzIu%2Fg4lPugNBJYvZAjbah9bBibIOepUIDCC0FOaapbkdW%2F2wi1PEh50K1lvumKjM5N4vvrw6RLkRgYGngXV724ZkV7DZRsaM6E8XmAUCTjJGxQRPcvfbvIxgcZ7IiURHLvH%2FfGPKURuowmAI3xr7BN2nhDkB%2FeccfzRhbvOSpRZbpjQWm5I0Rqxt8j10sFMd%2BEi0hLvI52gSybABzHsPHen0%2FXora%2BmzcgztPe6T%2Fi5u%2BM1Yw5m50y41elto8nHbWjW%2BxcB13O0Ynlf4n47k3tf5Dax8Wm6OIov9yYW%2FSX3cZ%2FbD76Nc9tuq3RPjoW972EcKFOPmE5zdooW2Irtg1vjMgGKDWZlTB9NefIsZIPVwks9hJmrxkwmYrZxQY6pgHTDj3QHCipfqfa3cp3hvMxvO9yQMHvfuB%2BAaKlnNlQjL808SHokwbWxisNef1Ci5%2B7vO0COmZ5r3au2wiPM%2FHLIZ69rc5iUOSbou%2Bfdxk%2BLrM32PpgW8ZLTtbqWNylLhPdpt69RlxWDaxSVhsWuEY%2BE9NVuCHmIWhICGhiQh5FIjcOUSRdIMqk7iDBT5HSNa98M3JLvVd9VzvNaVImMyfdfqHOc0zy&X-Amz-Signature=d984e212d76a5ed7729712aeed4ce1fcc8f1acea7129188b9d6f51994002b113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

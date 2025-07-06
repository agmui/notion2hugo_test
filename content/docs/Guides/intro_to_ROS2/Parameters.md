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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OOTWMHE%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQC7db409ymnnB40FCz76rvt%2B4LLgDepcIbFGHMBvF%2BNggIgPbI10WQZSliyRLo%2Fd5iKPWQwlAi%2BdzFjxiFzDsTcRU0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDAPa4a7xuS4cr19YMSrcA1WUnmtIDILPYload%2BCDWvX7mtc0S6lEDwFiLaUVCodDbcY%2FPxqJVlxpOSOLOKngH2%2Be4gTpuLvavNUvxdZcGgG8TpW%2FueiqgcepECjxqIaKlPBEkYDLqh%2Bb5sqivOgL5SKPmkBolv9FWfDWq%2FdPuzZ8iOhu6u7rw5PFpNqrEpCBW75HG%2BhXgUJqsBjnNgUGt1McGOxoRWYlaTts4MYUm70j9qA47r160r5GrNK1c5ctRfFP0Og5hz%2FTLgoU4i7HjJShSN%2FZeeVYaUxv1uo2T9hyxaYuStDCiTaz09nnAJcAofW9pqAdNhoUGkOjc%2BxvlUqMjq0BPu62ZvSRpzISVqBZ%2BThqVJpuyetn0d6%2BfVDnw8amO%2FJV8LalL2lrQZyR0AZZ26JEq%2FxtiNBAXvRapbBMhivDt5FpqgXqWrbYfzME8yNHHCCZom9H8zOA26ffX4NmRbwM8BbzM4Xf8seftEynEsIqpsKgcMV7T9prgQV8G5LNqOnfwTbCe5PIImIHfYUVSOAN0xIhHogBP8zEz2vhT%2Fz77XeF1gAMWGhgrC1NDU5IU1em1SBWTLLA%2BDf8Vy33o7asNk42u%2FfsuYsv3cVOmt1JC2yYR5zJtWCR6608VZsV7jrrbabO9E%2B%2BMJ7sqsMGOqUB72dCv4S53khOWvT8fcBNrEVjGtYUt%2BQXAmcpSVaTcwQz3QL7belwnvocvQea%2F7yJjdLvbPqtxnYwc2v5Hj8Kha0A4trmVEwzVU9ZqqqB33fVeaJblp9h72Hsz%2FlMoOPl%2FkToIm%2BrJ9NGhHwVYNqw4PLpbmXhobDhF%2BrxVCHH7xb9qkx%2BdI9sVTtEXFuSbZUuwvrKES5yqjMzreZFKdcEPHFZnMsV&X-Amz-Signature=d77a57a258eb81ca61932cf820d48c44b4da808004b281b99448304af12f143f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQYGPGB%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMIncgiljqC7A3RO%2FsxswJoN4CEh%2Fybuo4PRzNPj2eVAiEA9O01fpr0WvoJWKRs8YXcXftYb6CzcsVvGHBrLxWPA5Uq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDA7gHUaePwQseN9XlSrcA5sj10fPWYX7GhNixP%2B64wE2T5n6FGueLeKL22CoSdyMQaDC%2F3OhTpHVLFuVFfbq9qcob%2BbwiCH%2BLdQv95C6CkM%2FALupynRm23RDaRWXOrlsnOEgikwTqR1VqSTYGkcHHfA1qKbXKNghQY%2FNCGh6LdPQ8BKIUWkjW79ONFfo1MJJ6ToIIH%2BhLsdizwbUml4TTVuu4F6sb25YApr5eIrtVM6cvpN4kxLJPs0%2Fz0LX%2BzBf7llLrpf%2BuO6uYVNUJbZwlML1gENx4rZ898U33rRIoNiv%2FyQowFaHQOVJ5tFsBDynC%2BdfWh0fMxnQMjws1J808ypRdL82BaIFOmwSYzSZL1tsHJpgbrNsbkKlnX%2Bp%2F67vZQ04VcGGe%2Bb4vWfyEcMspRH%2BOZA3UwdC7WUnz4HuBwvO8eGMLknjQLOWhYwkOER7Ykf6h21hyOYquXwkiZnLkcq3uOEywTs4LuJbx65Aq37KejvExjHg7gD%2FEIbC6qibTQk7p0yj6eWRTAyuf3rl85n5rqOCFpHnf5NvCJ8EfmNncBkXUozrluDGBIlpzKxVZcOEqidlepnAbpKvHRJt87wGirMXhxS5IPDkhgsDszVlxGrr93KkZrMWq2POAPaa4vcR3CiXCpbZZCEWML71iMAGOqUBPV75vGFWxFeIFnbJLM1KP3EUms%2F%2FZA6OYW5%2F%2BvyipVgMr%2FWsCTWc9sJQjzkE9C4RiZCUVVbF%2BJ%2BenrYk0%2Bde0Hwqxc2o2%2Fy%2FpGv69CupMSQM2ZmTrBPmTUVij%2FMwhwoYJVJRNiLIp6PqOB3tZF%2FsVt3SIdqXgxDNFHFNg1n0CAY%2B5fiHlqXp6vuv8lqnxVzV76y4MLWw7IEGeto38lbVENxeZw4S&X-Amz-Signature=a53b2a55a1f7a8324bf28f300ea313b4847259b679e04553ef16996b5c75d100&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

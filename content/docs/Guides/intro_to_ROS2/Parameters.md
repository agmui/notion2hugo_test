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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ANW4WIM%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIB4OMimZHnWmxQhmZoVGwNmU3MTITrJdWNsqMBSPhhLMAiEA7gjHg4Rq23k2Eb3VDMJzvCQ5nXbKjX0Zz8I0TKPzcDIqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZpidLkg4AlJzAetCrcA%2FrvHx6DxGv2tCWRdXKrYbj2803LHykx6zLZOSSI7QrlcdPpIkiZR4kCDKYKtDtQHLar3DzsTWXfvtR1d8aWrVlPGVawHjByNQ%2BDkzGL1nMV4WyplCxw2MqC2fYi1qtCZ%2BWRKPqtIQY0rr9Nav3U0nF%2B1ddo25WjHrMph%2FNl3kdhFPQjBTPDceDG4%2FTeFQoGVEQupXUgzPMCuzCV2FMw6uFHuIIHJgxOynqk3PHsWwLZA%2F%2Bdse7CmV%2FYM65dXVSTQv32u6Tcap%2BdbRtYJ9t1l1vKEPPVabDuQdI%2BKlYhtOgaqDZEguTT40bnUEaJODgTL7DyeQyUcrVnCLEGlraTLiHxpxH3LQry6HzYI1RZMfBZlKBYLmwJwwekh1XX0Pe%2BYBSopT6r4sXV16rlWOa45ak5bXIT03djYX5kvl0aXBar4prcy5IdKXfnAllgIkbW9zP4ZyZBpFHhCdBp%2FK9tBiHeOtJoMhvY3J1dPegEyop8K8rV7WT4qQfkssUZW3jQo1KT9H7Up4uPiU0TWZLn70seXxoUlFwk5WTc%2BnVCiT9YgbCSSya8Di6s9L5BnOl4HBlVfMrQLiHZOsVUcFCuupBf6cdE8N8qluCHMCgWS1MzY4vceOd%2Fssf5ItenMMSQ9cEGOqUB3eMnTMch%2F2HQer%2B%2Fhft9CKqxHE40kkQ07PeO5BC27OVf3Sa9aVMLrnBVs1XzmojWMkC84ESLIMB2HU5MxTMD6Jz3BjoS61EGWcSNuOivxNHtxr%2FXqbmBPCyvaOerh217LLdPbEQqdkNJXTf2VUZwp%2BlDUW0dUXdLx5fM31lsu5y2KUTkQx0nNVKTLVThP0ySjXA4qm4VGVugvoQO%2FooWxMX7l3LC&X-Amz-Signature=03c5fba7d9e80f5f79aed4776290ac6ac095fedf8d429cae611279479d73d375&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

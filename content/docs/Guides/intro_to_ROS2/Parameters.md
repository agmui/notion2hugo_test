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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R462BXBV%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIEX42Y6%2Bz1me750SRxgqZ1ZPSe4zrVBaeU3U%2Fe%2FMdxS7AiEAsNg78xf0JlmPbHxwbMPR2PjLwQKg1QFN6BBwZScgpiQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHy152sOfalIVc7c%2ByrcAxpro5bYotjloI%2BEsLtNoOOh2InbFUcq3CPRkXXsHjcbQ2dSafoh4wLMVKcOamkPW36lxg4WH0AwD043Yq5nqsGPqzipGMJg5FvMMyCIFl8ogFCk7IQI1oj8NmoI5top7cD8ctrlGEmsZBlN8bjTdEAXLLuQweXuWpsbPPtNpOIpOECP50Xza%2BFcQcFmfV1wUjNjpLztRDlmR8GKiXqsLY4yLgKW%2Fi25p4Vlmz51Kq3a8Yl1W3hMdyT1LDVLSR2%2FDvfpLnjXQ7D65pPPmPlVt7dJZCVBhDL1jyt1tHU6tZ2jpDg2JIkGcajpPtlTgn3Z5NIlM5WPX7KZ%2BReJ8oObKGWpA3RjEah15aPWSZcpMhrk%2FfDCHWDZhc61dFNP%2BZvt%2BpHivFjVtPMeffHg9AxNHse9sn%2Bndmw4pMPukKJ5N%2BKXbS1vUDRZWy%2BAKBlCBgJ%2BpPG1X%2BAdDTTFe7nxvh4sh9o174HfyqJOQ9Ecom3NiC0LQvflNK5HCc2Dqlela14Q8eKbUQKKCMdojDX%2B45tC%2B0MlPljexgYoaMeHIAXGL71vvaIBahcKKPFZxVK7xkMrbBRphvUs%2FHHWDdrmwIxyx7aYwmq88WRz447mjrWBZVCaG%2FLf%2FjbLl3U55xoFMKH00cAGOqUBuME4yYCD6w%2BMt4g8lNSdLu8M%2Bni04Ck%2B1nvP8RwLoxSWWFjZDjAp5nVfQ%2Bb%2F8uI9LLvWDqHVQWbtWdM9hXZjOrNeMeIBcuk4cQ%2Ffnhh%2BWe52T2NR8DW5QYjhywWPtapJIG8Iy22FrDQ0gIAGudonS5szT%2FgaY7jxJmtK0aSbZg8VX2Gw9fFc2nKIXd4AVN3B4tMU6VWVWjtsvL%2FZbNnf3nv5oJw3&X-Amz-Signature=531fbf546733b4d6bb32b071d641a1ddbadb8714d245f1e92b27305a8a81978d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

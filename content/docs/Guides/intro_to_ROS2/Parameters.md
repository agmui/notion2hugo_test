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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PROBGGW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEiHx3X%2BUqNBBrbk%2FSghV7fba6NkRUvOT9SLvQIgjlCkAiEA%2FY%2Fsl5D%2BOJoLrxJuS1CU60ImRq7JfR0aXeW2MR61u%2FoqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2BOLGjnLX1hd6aXQSrcA2yeMAQPa7EZvOUtcY47SyHib756DJl%2Bame2RHqlpCbbNgKMIdOhVXhAgdZyGfl90r9ef6HIpQ2fBdNbNK%2FKDJhrL32mPXMFmZCXjjQU%2B90KoF4eF%2F%2BpCymA7cgTW8R3OespxFqK0lIeFS2DXgBXWlDVhVlS3SykfuyR1ZXQugiz93QZ01XPVzRc%2B8t8P1amLlru5cEy6q2VM4Ct9fp2MLM5TMKezBkAHZLogOJlLkOkd6URKKBN9Ia2eqbBQkRnoha1NLfEgaYemZpV%2B0GNe%2FzySqJ7GDahAVa4k5u7WOc7u4inRcnOxaVzyfNMovIDaa9pUcfh1iFfsfuun2L6OjCU6TABDEqtycQ0%2B5NalGkTSGg2x7CN9oo0v3wwZhsssbx4Cb6aEbZrrfiOpJm0C%2FlfWGJ57Zyv5T8WSCXw7qKVfreX1upKiv%2F3GPi5Un3MzhvKcMC6Gt%2FGA7QxR2MX2YpUlxE2XSjlTvAvf240DRskzo8VikPYMHCxLl3UvBxfkPWjV1WgsxUjY0svw%2FaJrv0K%2Fj1%2FDJXbUWPHA5sAsFy7nixUX%2BMhliugl54mmmHflNOLbCKXU9w7kjc6pY1nFwyiBGpIL609w1zGNXDgGktTHzQUKNZ0aKMut5AHMPehqMQGOqUBFLRI73i9BZ%2BDSbb6cHwzHRyJN3HhgkSJ%2BMibOEIVaRtVXJLRGsaHNlYwtDcOrzImBTFOQTeW6BI3VqeDGAqDiychBpil2etNRB0%2Bw8%2FA3cx53f%2BOa1qcaz8FkVDRg0B%2F%2BdyIgckd7983J%2F1MpGAKa16QrssC9zY4ZJF0dGpTOfW%2BURpLu%2FfOMFtrylKdm5XqQTUPdKWFHzmDhmL3FCVPkYYAO06x&X-Amz-Signature=5acf724ea03577bb57e4c334588f8482f106d77b422cc6989059ef88bb6b26e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

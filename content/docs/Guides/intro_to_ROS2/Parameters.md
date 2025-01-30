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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2SXIYKJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FF0p7tm1ft2yaIbG52mzN%2Fmx71%2BbfWlbDN7na2XfGEQIgJnb%2BNDNFD3P1oPraWNGEDnMrV80OwGZtDs94EuXOXmEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxR%2BPSE3mJ9HANboyrcA0Jd16Mc3iG2yNXJWLLlIPm5BvHvF74O31Do2hDqouq1WwTFnxWriGAJOfKUa6m9Q%2F3xsxMihC65LzeYCUYCfD7F0WPIYylHwDPrxcg%2FV4u6Wz3ZHP4YmAnOJFNxKWP6DJ3hPHp0e2Xuf5LkpLAmYY4gQpZywj6CMvFeK0te1Rgz08FJjKz4xeczldkcwtFtj700Zuhe2gO7JaLGz258lQ1gOId2jgy5utsNh9SrP07D2KZDuoVmvcuR7jIOTDhta2LeIp0lsiaU4GztDzKSg04xouDmHPLIqDtosFvuDj2jlstUMyL2R21AIfW2X2R9COEurJOYnAXec%2Fu15K0%2B%2B35zXcr%2B1XWj4AHkD%2B7b3XioqU7jKBjTqWGBiRz6474S%2BmaQG7CWTkBYixvnPZLnb9p2qxoV1p7kXHPSGosrdoASeQ%2FwbgHeoZtMjKJOvHP2AhJjhKLevro4b9Kj7jp4eMLUyF5yWqWAyEa824nxYd0Ew5KdNBcHsiM0PBecJcjOISFB3uSfwHQFxD%2FImyVnZahXn0GQ8qeRosdeEukq6ny24k2zTkp0LXkFfbQ5fkgyPGcegzMCRr7xCCcEaLurSdWD1sWoRAyOOkGPHdSKdU%2BlHoG1HbSQWYQ%2FMIyIMN3r67wGOqUBxhR2mQya58BPLbyNmqhPl2iOUiZ6YQoXxgBWmt2Jz7xs8ko%2F73HD595ofaA9DchBUPdROvk7YHNKo28LiCNMrgpZGERgyvJa%2Bg2gsvcXmhMcr7k3dKDBUoEEwtURXRp8fYjchaSd6ImsqBpBYHxAlbc3Wysp8jBTMg6zV8sSD2aWptmftgF6eU5wyYoW9OzSJk4hsxrZy7U%2Funyl8ldi%2BxJbMnzf&X-Amz-Signature=a90edba89f48ea9ac12e455afdde2f2e1aba00f92a5ee1d9c7ee61bcfb34ef41&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQWH7ST%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP8P6sTls2g1V7ItYj2mFePffCjY0ntpMzLElS%2BiSoPgIgb2gNAAbpNxN1Sz0kbQC2U0Sd9j2QJuhsQGWI1WLRvHAqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4gz%2BBis66vDoOG7CrcA2WRj8SbQpXovmAIf%2BVhQaZ3iV7oy7kPMyIzP8zRJLEnqOshZei%2FhWBGJC5GdHAZSdWwUAUH310oMOMK%2ByQnmcPgDnqOireAo3x4FVIVNKJZK%2BPBVupAO8G5A9S37S1PQmP9asWaugOBJA29foqo21puBXarPopn6L2MdPWdbrk21jQSx%2FHphojoxjz74awBn7vBXEWcFCyjtFtc0Mh5%2BWS2vetrGTEOVNNxMbBJyIAEG1NhV5GlJJs6UUS7BgLkx4WuWMZgQqoZQPsODwVKsDMPHdQ8YDL09Krar3zevSYWhcAz6mK%2FXn4Ydcg31KEVrb7IAmTJVSwzgj7hXKmaJTM9jxd0EiyUchmSxJmTHXqE0lz5DV2fvBeK38r2L5YQ2AHTEHNjegX2%2FIg6oZhNtGwAUcodsGOAJ8CBOyMsP8nGj%2FEkJyVx3i0XN%2FzRTHJZtjCOVodRMgf62ZChFsF1CHZ2FmDBlzanJx0Bh7A53C%2FQq9LEwi72oKxowjnyhj%2Fr%2F5Kzj3Hm%2FauFHotyxRkmi%2FGV%2FUpCJFW8KPEHPlXf7ppWzxeHcYlQlbSEMCsx0z2IQ8DuawfvQ6y%2BNFSh%2BRKHZia1Ut%2FjCMIWMMglDVjg0CebbHkwxmBT%2FJtKdG9CMLD7wcMGOqUBFOmopdE3uUoNc8kNrBHF1NriHY2s59dOmjalSjjvoPBMWagYt789hI9AeMvT3KoneqxTjXA%2BoJw6kXPDaIVUMM9Gb%2B9JPnhK8BMvYS2efdZxqEx4Dnsadw3LqHuOw1VeMcS9zWOZB707tA3%2BQOHD98dKZjeZCrgfbtTxqj9CxEHhY4NwVS9LBHKWAn0%2BlVYy%2BUu%2FMKX2YGJU%2FQB58QFyC0%2BWUPsm&X-Amz-Signature=4bb324367c6426add9798e7796a39d5bf13996c69d36c3d4d832e7424c015ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

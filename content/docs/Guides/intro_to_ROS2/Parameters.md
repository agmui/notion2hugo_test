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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STHBEYMG%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T181044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFH%2FOS5TIpbqKhSncgL%2BIl4GrqYq78wDJ18O8Ex0D881AiEAjg1935VIvsfQg3dhAx8sfcbzEYhWm5%2FAs5tGxZNphWQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHxXAcHJOcVw096gzSrcA2Y7bGz5YfDL4tDkyZFZqPqZtdQO0Ftel4FuI6J2%2FEZjq4HYJdj9hgXVp2lBMkIwHfBriZn6vUq7pxeaL7kIUp27Dlw%2FLqmFc2rqQmIpxhltwTIWFLT13WKj4BTv0BDp2fSWxSJa27qDyg1R1leCzgoiYMcqILo7wcvLCn0RBUC0ix%2FlH1Eyql2GJuN6npa1pUQIoqTkfIWHdZGW8loeVPQ9X83RNi6ks4%2BJvMprt2SXcfMoh1nfRcRrPsX5m09gHXRWJy%2FRwHpbNmSITPhXkzyHLLIkxaaf1h%2FrW%2F6zu2erM7yRrfimTgdfPKSSPaguURY6AR%2BZoa7jiPMu9Y3fyyj%2BCmkMm95TnvqKL7NX7P049%2BmuYxZYIgEphFDfbaNFwMs13qD47g2hoRhZmW%2Fi9WsgqPQ9%2FdO5EluGYmFA7BTFxs8xCfF2l4lbVc4F6TJQYFvSQlo7KCfsi9TedSgWMpbP6IIWIdJ4CCDj4wwqlLBLDiBtgneGCt3pzXhTfOlSTYkLZL45BLENx%2FnzMEy99QNp06YoAD%2FGcN0B1vJXWoK0hhapwQvElym2IyUGijAqzuVdSYvKTTcIDo5CZZKIFBwyg4FUFhxq2iblpbzik7ZSe%2Bj5VirbTaaxRipUMO22osEGOqUB%2FqdQrvh7J8iR4FcgGGNHnqa9hY9ysksn952mAUY2J3oQzg0D%2BVnR%2FWSoGM%2FU5%2BziCGkF3Q0Oz2dDeWt7NrwjanY9M%2FEZu%2B%2FggoiZ4hk5doam9W069l1C5LUp0zdIcOVsBvA83KQkszKX7%2F6QJkzysac7d6RoK0A9xWKW%2F%2FK8NMSgRY279NSBwl0BUMGQ19hbyVMwTfKtKfmw%2B1NFyLjXbi9qatIM&X-Amz-Signature=7b5f6d9212b6a57f8b57ebd1b48267cfd83241aac2eb64d8c904c55fd225ef78&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

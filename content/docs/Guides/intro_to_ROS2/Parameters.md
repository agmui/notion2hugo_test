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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRXVWMK2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWBsgXTNqeNcqOC9hOh91tcEV6hdfo10WJiTrP%2BwdbiAiEAu6dKTT9wEki9S7GlzB8GLjwfYbmyCSsGOEJua9ijOJwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPQ9yHDWl4Hq1HHVircA9kJUunYZAsb8MhjH2jEpW79AlpTevCfHJPIZPu6WuLsw1%2BAyNwtjmrS%2FJ4xHHNFLz9NuUd8mnrca2eQbZP%2Bnh6PyBPyhyPoyKsh4kw7xnDKZqdFXQw4GRJUo6UybwhQ3k3feTNbnS22ycWyTJ7zjAPIwEFLA43HbZsajT0m1IxXfwUM%2BLRRNzmTlCKyTcv6RELUpzAR8DeMjG1gr7pyfxKW6WRsu%2BaGcH3YVUkv7RMF4FOlQTXr0F8hkl%2FyBpWJGvyEhwkDZ9AOMGqfjeRTb9lChz4Gp6pIqShih47C4X9a3CNu%2FUV4ZdYmi672LkF6haKKfwOyHugeMi%2FoB3K2GAAVvBUEMmJ0a4Ae1K6b17iEidKB6G9keKyFVFM8tamDQADcmWGbp%2Fr8PFXI%2BxgjkIPFGayeChBTKNuvzlxBvzkxdenmQIUiw%2Bpl1YQh4S%2BgMgZS6snt%2BZ%2BdKlMDDYBB0%2B2GJIhzubKgF2Z491G64UtXUyfpGV%2BeYVI%2Bp5COW8Zs85I8njyijtPs9aL0ZvPB5UitXZXdIxnGp%2BWW4hlX052wnz8D6TYgycx6IuztIcCT6y%2Fug7PhoWjZV9VzI0ZM%2B0X68PMa4%2FluTBSCaGkZh%2BmS%2BDTMYFteW1GGlPnjMOmd%2FLwGOqUBw5ACV7nKaXJWpcTsDVY9LIa1FY8Q7QDcSisyZQSsStBmS0XN05a7Kc9hQqTdyT5%2BKX8LYr5J7p5cUtXB%2Bt%2BK%2Bxg5Ruc%2FiJRiVV5%2BCXbQHD1CtRKmaehfH7KWyDY6p8vfkmDD%2FSs63snXozJVSJv0AbZ%2BQEKxU1pD0XOS7u4mq9r8LgvkJc53N0sA0dCb%2FJMi4Fnk%2BfwefxP1X2K2fLWzD2EUnYmX&X-Amz-Signature=29d191ad86ef3f418403aa855002cd3741406794e7f9b47b0948b23fb0e47391&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

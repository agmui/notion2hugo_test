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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKKVLOKC%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjrQ136NBr2gvDjhKwDAq8fdtJ1Ml21rYOFabs%2ByKdDAiBwEJyO6cT1LkCREzkRz5mzfqW6TpUZvptOA6%2B0nQZQXiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM43dVWeFdmWAX1MMbKtwDv0Na0%2B%2FsR8LcaqmH7Qjqb5Pv5rWpRD73m1972EwEZyuiwPuUCan5%2FWm%2BBrHvCakvayUVVA9TSI%2BpZ%2BvLfQE8BArUcUhS0MqK9%2FCkL651xPoAiJgJGNQgrrdSDU0%2FFRdxsTc5YPC3x0WhKfUuZM3yAxVz4dRu%2BiPsSvlQzxQP3LBFo43XveFi2vBWvslIuyB3vYZfSn9P4%2BroOMCfpXD5X9%2BUq2Xz6BPjcffjl6Q6vzcd2Ebj22B1Nx9xXxmlkVwASB58i3P2hJJUXOrA1eywj%2B8k%2BqVAHs%2FnyEaBnsNirIryllpu%2Bi5oxMrXnf3y%2BR%2FIEoIkfJWmgKqQI9%2Bi%2B2walwRGOOZU34%2B%2FfEa1iGwf286A7M8mUUDClqp8uOXQobC0HZH%2FSd%2BAGWbxIxs82SY2re9Tx%2BOEzrGKbVOTo8iU9dccMnC6pYcahBt47vjrC8NRombwZuJ31NlgbiP34bcwAYS4xEbteLVR%2BurirmZAb%2BXYeCmqKG4%2Fbpj%2BXRuEGfu2dFWVL7UPxuhfd%2BmYstwHhSygSS4lwXwua3CsQC%2BytXfE6bhcOIUs1yUqGpmotKskQpM%2BB5Pgjy0A4m5Ts18eIS11NltLJ4sVivjtOnQJ8MFIMcn2cL2WI0hN%2BIEwrqLSwgY6pgHCJLxpm%2F1oSs50rBT5WjuLe6hsUhM9uVFmiZVwn%2FEMl2FDg4QfNBN81LMwAHZJPH5YOHq9qbEE6rt61GuFKYvVJu4p3paEUz9G5dYaCvoFx70bWFbFJbaPWUBXE0pHM76qtkyqjctiwK%2BdMdCSePFoQ83yiVcfo2tAe4Rle3yeYu6o7wKEClzPhBisS6ysKr3P6ifRiZuKjpEHR7nGCDRW05%2B%2FGt%2FK&X-Amz-Signature=e5d567ca53fc5bbddba7c21d0470691ef63a30699bf38735d5e2a16f8929c0ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

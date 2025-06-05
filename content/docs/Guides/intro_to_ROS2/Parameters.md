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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BPJATQG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDgBbcEM%2BHXFoWxCdYmatC3erJxR4ceuOUHNJzP1iBwDAiBVesuw%2BkkEgfsjUeDtxxHuWerOpLqyIymRmIjSVHyCoCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMMA5CCnLQq9uNz729KtwDPElvbHaVRgZA1BpNtexmDJF4NbcIt2jx9b2nqOplas6XsCfJQsUbxzbo7W1RZnwGEnLFwBzfluSlGJ1RUTqvqyfjp%2BJ8S9QTD4u6x8XBWe3qbV1mqlGZhaKvFtgqUDNIg4qTxPhMgEoqGd5YfwP8aU%2BrF1kn29mNahBaLPLr1CCU9ISwRpRbse0irh6lr1t%2Fn5eiq2v4q%2B8zfI2T1BdPGwTOb4nVCBS34Ftqu%2Fd0%2FJ3A4MTGg7U6XpQT95EHWJYZ5zGa6uOn2rrKw2VwI4E3Zn9fBuazz4ALxaVT9eZPYbLknyJGyZrM%2FqFY3ysxqef0CknWbv%2FPMqzRMPZRg1zFU9GC1YFPUJGWIbFoapk8Jw1qTEY3XPoaD4DCnyNxsY3w6nwZ3eJlX1jPs%2Bm21LhcXTWWCvn4OLaBJq1cdoDhelRc6mPMlwKhdYGyWvV1WeOBkuX4aG1PCxPa0yvDtGqze1DBDreqIL%2B9vUAyUvxd4rEH%2F86Anzus8llJhtOVoMfbPa6KEojW9J5beoSliwNVThJSUj5rs78e95ByBcCOeDqJTmStb%2F14LKWOre66yyhMWymQBT49W7GhHT9U7yq%2BIWBKiRILLRNrZFRiDc%2Fp3x1p27m2LwtjeqNv1gswoaeGwgY6pgHTIjNXDz9CWxXY8GhGdjzygoVM5nLGd5v7o%2FMtaNBHPUP1yUhlHdj5fmcOatW%2By8xvsT8G6N%2FlvWghabRJJxy%2FMfHs0X7jkj4MpHyrGFIJDQYsalK1OxBZPMddMU%2B98uw%2FLU99o%2Bv7yWloZzcLovoRSsxBja4gHezy5EP4Pgsj1TB1SgexVJjdgeIyCVCKqPaoQhoHn8odtM9dczU9khNx81CbogPD&X-Amz-Signature=6a152022424db5c61924d0ceea22f903a5d92dc0c5f2db823be48f68905dae08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

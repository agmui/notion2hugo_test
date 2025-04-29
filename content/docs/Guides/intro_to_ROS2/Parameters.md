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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI3IHVYQ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BuiRy86zyo7PUFgiijqDQZud0Za8DHMPVdcxjNo8bNAiAomLjSkvJTJUJOKvCr0qZKEZJE84VcQuWCeIzKjH0FqCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0LxvZZuac3ZpsS%2FOKtwD5lKMxg9FP7m5nnsXks1PJUjGFylTxjwpbjfBrYtZcR1WKnpdvlYLmQWj5jgFxd%2BSTXoCqSk9GNLoivZ%2FlHQTUX6zQSMT6X1jNEq19BisIx%2FssmnyGQUJfmYI4fozagDEKYnT8S8vAx8Erd%2B5DwUeEPhDSWDxpgwC%2FRbnv5nGyM8kRwe2mrxb6hfUZ27f%2BOnCRnkWIWMVd4XpT%2BvH0RIb0OML4lTNPH7ZyX5HbMs56x6W95OdWXd6e6f4pGmyPPYY6twmaiWSoV7loaUsGRddLxe3o503rhWQPgn4uYkgx23B4VKr7SSNPHdogE0EkDu4vRtOo%2FCM2JV9zsUJTIOULzPhpdhidZq5q%2FPALJ9QAUbokIKHCBmal1cEiC9taEWX6aCf2oNK6Zdunl5TVEv5HM4Lbyjm32o2cn239Y335MNopcfQmMPbV%2FGqwhXMkL7nKU2R3vvquTjefW17ed9H3Ntk5jP48qaN7LXNZjoD4%2B0oobgnxEMpcJE8k5SglToVrwCSayKcuBAGZRgtuEAnRT9GG9t3wkyyBb3%2FZPctSIBl6JQvY0%2Fm%2FWmsfkypmSWA6UD5tTh0a9AllsLfi9T4p7mUiwuN79o3gfOOW6wpV3tnvWudw%2BJUBCRdUeowsovCwAY6pgEcN9J93jSBuKxcsIKyT46RSbFB2ArGIw0grp8iZz2RN5vtws33fN0M2NNR5jTpbhcILXJojCdabKSXOaqviacs6V%2FbHRKxwG1fWk50xUa%2FQyOS298j6wrcCSUG7YNieXPk9Rt4TqZwxxdZKV8151RorFcrjb2Ku1jJIU0pY7pBBgmwEOY7MlR3tZMPYfWpfstitMj4UbJdyuH6pDC9%2FJWuOJfzRFqD&X-Amz-Signature=a4c2752f0cd573c9301b041b5d8c32f9601cf10763d4e90dbf0fed6647636d80&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

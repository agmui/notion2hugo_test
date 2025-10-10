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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYTGAES7%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFA80eFDN2Hn2YSviMI44xRbeFpaucW8qSDx7wGEUXYQAiEA%2FwmVBiUUKY8n8AcDfvEZRW75dJ5yTQ9VG837AXCF0NIqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbhbu06l58db78ETSrcA7s458IdtUvsgQIDraSnQS4Xqf2N%2BHmlllldKcF9J1zwl8LGkDF84TlDQJRgMcNm639HzHet9NH2vziKL8uMvt4R%2FjF7kKmuthnfDH3evKT0NMfEcpF1ewYuVoKImGtQYpjXrqwm%2B3yCRLjz%2BlA%2BxXA%2BmuYLS3RwSkjl463qG6Ane%2FJ4dQ%2FBJtgaORBm%2BkBJMPR8wJ%2Fsi63j4O5PwMEEWuC9gBllZSEzheDAKMdLqVwmhL8r7ll4QRuVDEwsHZBsnVu90ecCE6w0WLiTU4ztzcBGg2klEjmOFzMG26AmKUGEIqXDGw0Y0ouVLIVwOIgtrlO6gbudOZvENDOnweTds1Pu4A2DQI51ITjWnn2zdjmtJnXroMqNgzjnY89SLS0P4yDWSLjZSIeLp8mFgZZgz2ZUyQm15S7Ewo1lz9n90zIcxgvtvD2hpT%2FqSbMTJ14ip8Ga4aDtI3glohrJBWKVladVcBOV5FNSdfMQDkKtkWBp3oyJXNcaJuVC3IhtCgEnbRz6Di4%2B6OK9nUBk40bErdCMFDZtXbGnq%2BysKiNQUwwio59qcESz5xx6OnCffYw%2B0mB0klNsTstYMPSjtN7sTVNx9zRA3HwzjF0NHMJGZqZye1ihFWOZhG7tc%2B9sMNiooccGOqUBdNLPTZ3hCYCoOi3xfCpLjoZxkVIT67ml3z123sRsQVXtHPsB%2BaS3ySI0CNs9w8VAhXV%2B3Bg4RvADjwzVyVvobwoEWBxoJk2pM6barG6dqU%2FfiLNM1enEmJWIgXIOBAH9kRWsmQgvwFPvvTqVjoW8XDsJs7Z2A9LRyMSp8ELm4EJY9plOkIdyo1LYZzsFAuHWzAiis7K2w5ZV3drlkNY9cr0%2F2plj&X-Amz-Signature=848912f00d4fb845d9b23ce26006dc60fd594967d37412d67908805e74c8f126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

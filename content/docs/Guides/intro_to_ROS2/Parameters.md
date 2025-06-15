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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627TB3EBW%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDavehEE1ed45bBhbzHHhyRLZqJ35cP2WUSn0Fy4TpFHAIgZ3J3lfhlYXt4erREkdCRfMxZ4aPrhOl17jmXmgb4u8Uq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLjdYbOTBTdWTWV63yrcA%2B7x0xwOVEgIvS8%2F7p72hOHitbEsl1iAir5bigMDNN7%2FS2%2B0I03iPCXNl5jHBSWLs5b2lveRXV2VZ9dWeemQpDi25lXo0dJCs5pDIalCc%2Fpj3fRC58ZQFkr7mTyE73hH7DQP07U8RhONgxcELJn6XvF7vXbzK%2BGwq%2BjQanqJHiMt8hvo4myit%2FoJuarXdd%2B%2BtRvaZvpxAa6Nxsxj%2B%2BiqM21JO33eD%2B1ZA9iiNQxKFF9X%2FljjuYaRl3vzcquqUaeEhkUNIeQeGJAMXTcRMtRBXyvfOt5KhDS66SRqvEsrshAIn45uBsrUiWrVhSlFay50YgoIuHheYHpHKy6yWrseiSSTwiKXFYFlyTrGg6YlZGftK4q2F6gyJ6AMwqN4oMuUd7EqQYW6Z0XcmloGGMhvFM%2FnZ9dQ52jORiL%2BO19zinjaJzlUldS8V4US%2BdeUZN%2B%2FPtuk2DFpFoU9oKumfECGnCnx6KSW65%2BuDYKrmEv330zmuH8Wp94hpKh%2FqHD38fMUI47ELRrCoWexhuNabtFlcJymthkuLwu3vkAyYFKYXtr6K25BbTatSoTTlg4RBPe3UaJk31e2jp%2FqWBV1K0CeOORL6I4wYJR3ReBUT1ecu%2FJKgZHPFjnuXhHZz2muML%2BsucIGOqUBiGgFaZm5QunJlNPgG0AOxif5iY6jN4A0Q1%2Bkf6emJdKsDDd4Qu%2Bn9HcLCP7MCk7WGyliJvk42TflJtiXffi8qXZa2KNmkCY%2B2w6o0APFuEOb%2F7%2BkYt9dFrgRPOhPpjzyILjkcSKuJl1YxuWymvPWThoPT%2F2%2BruJWHW9saUcMQ4Mhj0NDUUN%2F1lXYdmbCXX2KV0Z25s5OzBUZ2fliJYWB%2FWT5PQt2&X-Amz-Signature=7fda35836c130987d507f7af52be3fea4118835bac08588355dce8a73032f811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

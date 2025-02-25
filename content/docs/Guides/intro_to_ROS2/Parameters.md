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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAKVL2GK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBzjnJjGMYciDE2%2BClNdmRQq4tP6LjYXhT8uNn04P%2BLCAiEAmvv9hX837WqPpR8JnrJUhL1OLp0u63xIo6D0aqeBlgIq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDClhsZGbfaCG%2BxCdjSrcAwek%2B41mZGtcw9YCA%2FTzgdtpen8hyZAvUNNm1RbQYPK3IwxY00FXLxdq79t%2FJj2tlkiNUrazT9bndl046jeNZyQcDHFBDd4FecN%2BNmlgYiEJoL3%2FN6cikp0Z1a068ZViRx49%2FYAn4duSlX9lclaE7BVruZH78%2FQl2EUtbGqv5XWyQakBTMA10B2Yv2adLRcJA6NIaefYwq83ohVSdnuWgZof56LQJKfQV6CSjEPqUkEowgj8FjLBPubBFfdzwO%2BJch4ZrZR4SirJcuso%2FZoTu8mNAWLxHP87XDw%2BCzHMZ6yhxyHk07miKZ00jkHIaBWVWBy7OZ7us%2Bh%2BmS1M1G5G3Es1Ojn%2FZIN9SiEkMnBmiCEqG51LmthmfoxC0P869jhaN6RzTH89kstJjC1mZD5xLn4sINR1FsclpfOEUEv3JEWUse9t%2Bo6ri4%2FYl3lNoH9pe9xIJBdkWE9BxSJ33hv6kuCcJBdAy46hJbezPRPPeBDCBKm%2BN%2Bcw%2Bp2qm%2BBz0hulml3q%2BlHbxDTNh732nA8bCel8CoB00cj5%2Bvz3kunTiOqY6IR0rqvmoyECF9qJdB8DtwfdYssToKpMPsBMPTn5toQTD5VWS9X7SuDgNAUzgkVl0EytnSPKk95s2dm1MK2Q9b0GOqUBy3B7RpgTehRmZ5SyKMRpjF4MHgVgHCIzYXsAEze9KsQ3puhmTTrOe65FrYn1FUdk2pdS2%2FLkBFhrtbW8ucSiubws%2BQrTb%2FoklaDn%2F9YSBV%2F%2BJZrIS1EBr3oqVHUOMstxEmG5GNOJtEdzsHDFWmM14u62QDVZ3giOg%2Bn4WMppP%2Fwl1bS9UjB2tHMGdwXnEiNsdgUXk%2BmI90560TV1tKuw9V7Nn1rZ&X-Amz-Signature=16977bd394f7ede22b7692984c36f30ac291e777a916ae665ba9448f2cefb00f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663QZMJY3%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNIrcKaA5V7QRc9mwS3FqLrxtJrXFdfbeTCI0zvTP2WAiBeh%2B7e9IvVotQwBuscsVpdyWFmJXLl27qCWVwquwR4giqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwtTbSKTbZhod01S8KtwD0qXsx0tZUmAk7nDNKWoYvMjDwIvP9Rk%2FtypNJZmOFQqInRmfvx3%2FPsjgGTS22cLR8NDZOdNdq8Ky8IqzQXPyp2EzvU3wNx3aqB%2BeZa2z5UyrFtLe%2F3cMGd%2Fi%2Bx5NsJ0dJKqJFcqa9tZWBQmcJtpjNRmMsGFHNR4p%2FmdPtwShC%2FZ1VTmOqAMXNPB%2Boe6Syi4NlDfHim5o%2FEhRxXFU1Mgzdc1QU4KGGgKEhifyC1s254jqp36wlglLbfLcRxZJy5tZm%2B%2Blk7ispBYpDEZOAqgfVPnIgJpOQthHGn21pHajeOyS%2BCUxPiMT3UEJh2ddROr6du1Wt3Ez4oLl4gJALHRLUQC5cJiKmM4TxSAb3BLK754Pr0ZN6c5m6nYDfgzahTucYPG%2BabA%2BbWFyxpoP4kGL7GntIkgCWabSF2pM6nttH2Nxg%2BoTJo%2BnMVn0NGrqF3eCYKeEaioFsbTsnc3krNhUHJIDdtdkYhs9AXj237FPgt9CSJbYF%2FEmI96%2FfIJs%2Fonshcr7%2BsfWGmbUIKssU7zbwN5QSLvPUT4GnAAHXvpJxmDDIEdmQDaNGBL42dzn1jns2WTxnv1cOSmbjXcfhTicw4yAvqkaPhMeFKTehOmP%2B%2BLOJSmwlfZM%2BHn%2Bvmww4cflvQY6pgEGuH9kY0skd2kiQ6ijcrH%2Bj2PV1rfzj8%2FWmZYy0m3GVFVLddaQYMIKpViI%2FCBhFotnbmiWDs4WGDbj%2B0IaOMhEgdAEuw5GM%2FDn5tdZg7J02%2FycfttX9tOAVOw7J20gjZZiTPU%2FlUUvJujIY5Fv7IUq5ClBELrlOKEZfkv2a%2BUadqfmBSoAE%2B5cIcvi6RAxDRlTzdq2Z9Mq7rPe%2B10wQRawVoWOOHyz&X-Amz-Signature=2398fdcd37f6da5a1bf56cabd8c335627c298e44fbdcf841b70654c7c98363ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTNIYX7W%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDx4%2B4vMuNxgplIta%2BVk596nHp9yJtKJpbdWztreOCLgAiA4hw37Q6rMDnP24J3YiatKAJiPpXfGiIEHTsqrFuO2dyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM8rl5L%2BufplQF5zMEKtwDABM8WLar68cIo9%2BuDgshuHx46PD4gShvxipx0LAyGYFznlNASivByi3j5u0wb47NV0m4DsHQnUp3%2BGBNYpAT5g5DKccpOb3FXuljkHTB%2BANIIv6CfvE8gAviNzCKISVHP7P1KRym8hLg%2BYRSBEGiR2O6yRfceKsqsrMwPViGspY8pKQbK7ecgv1qBim9MAow5frMT0MrVeoVpO6Sno9zrTLwYcIqGGVRutDq6OEGgz4VBxd4CvGvwngnjhWRlfS0Dl1Nq8VvAPntQCAeqyqSKwablfmTC7Qw4M03YKGud91YDWxmgazBWgD421DvIFkoQS2IeSClexzPZ0BixCk9Fh1vWPG81a3oFx6nQnfpHprNFSKPYcN2DzQskGHxXRwypk%2B1XmeUurQKCYdEklcxm8sP8NhVW%2BX6p0PDxy%2BaWJHAknAvJByDrE9Ji3c4VEV7cfVHEDzICY6267Pm4xb9SEIBTr%2Bxp4rG0Z%2F9tcZ4tSIWo5jMfLeUqVXswIztU3YNv4BDIkyL7V1aGDDpMECXZQY5PZt5y9Z45q2SzsOh1NMyTnID01I%2Bpg5cfIqYkjf95AZSG%2BZaSkS22K7FLtqur7x3lRMwWaLbzGRELqqZ70UyCJe5LYfNa5%2FhZpEw4LHyxAY6pgEhxswEptAWY8Y6DYtCQrbFQYHEcfTxfN%2Bsw2Avr2Im%2BY1oUTLu53kIDbWevSChGuKg0m5AHiiMCqi1aYMGbjTo1FJkJpZtiD%2BshoAUUW9RSVX2sGDUmShcrixSpNXVbtJYMRt0fWcCb%2Fc53Rm1AfQ1YZBF48sMguCyf4FE9PKKD1%2FBRNFtRebPm0aeiq210tzm4nkmH%2B0yA3bHYYWUuqSoeWueuRLn&X-Amz-Signature=a2449690da5ae00611b49bc46f408f68cc266e815123bb2b3c96db4ab65f4f14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

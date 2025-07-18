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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B2TJSBQ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFXpeBhtLeH5BKTw%2FUvT9CDr%2BclZt39mDDuWroSkJY0rAiA8QrVx%2Bp%2FsFl0m2hj04exg3fN1bo6He2w%2F7YtNYO%2B1iyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGkyk6LpxNyJs1j8oKtwD0i02o%2BPcWa2Lk7EyaTdqeAKwZV%2BthzXJ0mgZyNUXJTkFUhjhRuBRl2bjTxpjoxcnYL2rgtKySerjmd3kz9X%2BK%2FJUmxjkBHsb0gmAKrUwVX3OJHanAAfcgs3u8DSlAhxdnMeD5DXkrNu2fSpspV%2FAJ2MWMUOWdRbA6u%2FHgLmESz3dQbPgnEN1sbyqr7uzdBSaPpxtCS87ksCAVlI%2F9f7YHGMSCahqoovDdEIWJ6I0Pvi13WhWlGG7G1LS0XS88m9IQvbF16tdQ0sizKjOPP4HRCo7kNV9k%2FaUEltrmQKJPJrG0vqlHbxuYLyUTBQRnq7pg2h%2B5YY0BON1Abwa2pDLq20meSu4Iby0eZbsNI0opZcavqvxg2jbLgU%2BIWdIKBHL1Zv%2FB%2B%2FxeNJbgnEgFHMPa%2Fa6poZsAAL5cArXxyUgAsWDvbdz28Z21KX%2Bzhaa%2Fzr2VvLulBUtQOyH6D0P5Q0bH9CmzU8C2kQ%2FW%2FV9U%2BNpZh8HoFQnXH%2B%2FpzS3WBg%2BjUJroYzyT%2BUbIYC7YSz%2BqKaLeD%2FczbNoIck3qGTn%2F%2BfZOhZrprHRkj1pxbkyzX2ufGY6p94eMnT9EhG%2FtK4V5umYUNh50s%2BLeRTTj52AfW2Vs2tjiPtJOb%2BGCVCNvNww3c%2FowwY6pgFWBgyR8NOQY7linZocsrqmBnV1yeQ%2BySLeoZuDTykVNOU0u7k9b2pOxKZ6gLJc%2FPAisWW0Dma%2FlFKEBROi7n56ZDLGP8pSUNd%2B2Y1Mg6W7P%2FdOjZNiGKevDwx0R92rMkWIpZMLemrTNGiHsrw0DBdIIeLUZadoW5Y8NlJ4leia5nmyzqDGuOrVMnhVc8%2BTe9ZNbG%2Bo%2BbkObGWI0%2BU9wx8EXfrcycQx&X-Amz-Signature=0844ce8dcddfa8fbeeed07b61447a419e332a57660a96eb3f668fce77537ef1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

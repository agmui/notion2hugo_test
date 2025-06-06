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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXSPFNQZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIEjlPh1POuYPsAAXiDQqB3rNo1p%2B9V7YbcvG212LBmpwAiEAus4ALh%2BuCU49mWwcjrKAXX%2FE%2B5c4ibC9Se5bhLAnLQoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEcrbb0BagaGoaQN6SrcA2yTgEXZy0Lxea9KveieFrdBrkiPzbOVK1C3NsFrEWZAYtekxfAm5GA5OdcB6wxdLnr1NzhKFrNd89k%2BjzhOQazoOKMjNaghwyVZDZL%2BxImIQ%2BDdlC4YGzQMNy5UQEE10jwKARHfLif%2FXBScyjo3ddn32Hmlateld3ANlPtp58Bud%2FdoBkTcpnv5tgdzEQGsBSwfkq8%2FBB9lGty6TyKDG5sfM6mmB%2BemIFtB2IKALGJFz26hbgauiA2xRo12UTUEhN%2Fh4iL7VVHtdKFyO6RnY1eK%2BSDhE4q1aFWn7nsjqrY12pUabS0pvC%2FQnYBqpwca%2BwhOM3AXuYqFN%2BcpcehXaFITnZn8hGdcu2i7MvsKYo8%2BaDLURA9amzhRvnWzvF2b3PTvvDa8JYvKZPNn%2F9147zOkCCE%2FCP99YHYl2AcU102bnOaUdKv4coIp5odeOr0Ygpk9nl565rwgZq9E2fupA2LY4wSUcAnnEBvTx38RsZf2s5q7VMOHR5%2BwqnW6hZ5a%2BEM%2Fwqt1jyIjzYpoZiDpYSY2o0xchRU0B8%2FYfTfU67SOnVcJYYKEhBkHxJjNv1dMthVgyy%2FkNIgiMigjxu0nAbKSNp4eruwDPYUkdFStqs1nyokosi8LVqi%2FWal6MLOYisIGOqUBumnHFEdVysWoG%2BtMXgJ9b5l7DTREc6cVX8oMQEgXNn63Euvo4BxWZ20x4JKWfvbKwPU1XpQLCh0laT8vaSusbq%2FgVORxA%2F8Wm9SA8WsvEFrdNlmub42QuCX0GGzIOpODNSmDr5vTURdplOHneyRBqJtBZOZ3b7THn9e%2BCnByPsiEb%2B4XJLRZnGtMxZz%2Bz%2BKvsVHsAujJzdxUgrnYXS4IPd83%2FKAR&X-Amz-Signature=e4a140ecc66834008a09a94eae8932671db1db933fa7512295b9ba227743c77a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7YOLBLN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIAeWBDIx2bs8hiX%2B6CEdpG7lo6w1Hsf3Zcyq7tCn7sfAAiAEEaBnCwj0Xwpmxdt0pNh2uZzfVV2yhCAbI6%2FP6SsJaCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKb4dSCDfPyscrcToKtwDnZJ8h7inOGwhMrJWmYqc1HiYPrWWvWaryvldOOzK69rg7g5KL6vwG923jkBwj33HDV4pUv%2FOzRx6zan9RFhGP6AQtRt8qDeW2qxXYv9dspzdO73INd9cblxfuYpf4o8Ke96nfnoWEv2wy2BG7wP1HV%2BUJ3S%2F6ZxFg0g1uIQh7Rml873PW672WyhZSPKUhNXWkoDyHjbJ42jn%2FDKqEJt%2BJ8pGKW9hcsCyqxuYQbAXudD6F%2B8S5jMloZBtGmswX9JKzFV%2F6nS6JuU5riWYMq3Q6fByflZBxMGy9G%2F5%2BmCymKoyFU5iNISZR0LsnhNaTZAKUgTn%2FZRD2qNLVTtkTIb93c8JXlm53L2iu5SBbDc6cqVOhpuv6RfcYV0FPQqA5c8AwthlzzYSanAc8a%2FRM%2Fnab9FTkupjY3a0XySm0ws4CirzjvlL9int1H2cIz6kzGuJj4ZwLZ7fWsUdbJSi2vMlSGfqSFNMvqpPCZn2zslFhDG9gi3mRROYrfsdKRpyWfXQHPCphigukZrKrTTYsa10Ok3gPDc4Xa5x1I%2Bd5ucFP4OzfqgABNrMKIC9hYcu6NS53tYhwACLXba5MGPYK9jOuup%2FF%2BFtwTNtAw72zsl8kPK7tR2Fz8DfkikLNhYwqoTIvgY6pgFhcsIRZaPdMJ2QAThQ%2BhuNA%2F0obmgMvagVx9OzQz2GH6V9NQzy6QHNajVw%2B3QJ5celRwze6MYbL6qDC0%2Fr1Qn7fBqyvTWCG1wGvJ368aqNPiZoBJo%2Bqwtt6kbTo9uZDv7LA%2FSvBFpvPPdEKgyPKe8Gsf0oLcrbRe6AAJRQK5qn7NzLvE%2BVOxGq%2F%2BSiLaTzdgEFFeh%2BLdMmFB8lJxPOFvEoS3qVydEd&X-Amz-Signature=7cf4285e9c05121420647deb38099b337d694f4e430c864705d009b66af272c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

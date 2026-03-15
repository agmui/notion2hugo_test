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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEIMFNCR%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcgcptT10DciZkBdXdz3rPp7Nv07kZN7XDTUTcqOcu3AiEA3TLo6wk39xjqqjKnfLAtlj8BAaw%2FcTQbm1TRrXcYT%2FEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnqn5TXVvQXp66qfCrcA5tb6ZhQZwvHmlWfo%2B4k6HbIVgDspvyIWBsTouG9vx70Xyg0a1LbQG8U2w1iqAlyEgz1FwjjtDzsI8JhDx98sw%2F6kU5R6zaMPQzME%2FgTeBeUdkhmZYHMt4bJhHYcCyMA2ycsEmjG8K1tmQnamKfKBlmmHkRNDc6Kdrqp3oYKtcV1TufsbYUG9HKipv1bJArLsFZVdx%2B1LS%2FX3VnpHb9YYLS%2FXjLne9VU73jXg1TWajqrbqcQ6RhwVzEs4y8e7VwQFlc2a4L0Q9H%2F74rOMrZqYHpEr2JfH9%2BVjqs1Z4s5MLlmw7q2DBe4y7drcvb6hFC9%2FKuSw3S9AEfNUL8fjFy8OR89xXVNcvjj1RWdJA%2FxoEKuPyeZxz2xaTXASH7Ti%2Fa%2BuqkYChBNhvk%2F9qeSrg8eZfqoOneg089D%2Bi6S46hf73ltY8HqvhpAiMZnNReR5sMZR87IcnwQjuflCa19NasPpg%2FQA7Lo4GzEwHuiayjdA9BAbjFlIIF0O0ocZtGlAZf5QbmnxZ0K%2FRa2a%2BQGKSY8IMf59LuZBw4q4zHHVT9pBAVuLWqC4CfkOvQ3OCFjZm%2FhF87yrr5BEM5cJQKpQHysr9K2BtUbQp2zMYKkP53oPNQ5MrkfdpmeV%2FkjXyzgMPWQ2M0GOqUBqQkCnBVHNds9dqKK3fbjl70rjaJsvVmUvbRXZOj8kl5GhSImcsINYDks1Za9NwgM05kh1%2F6hGygkXncoZaS2%2BnDxCXKxDZBwwmaNGu1C7q%2B2kNwHvmPInd0NGZp23d59QuHrbSFsjKueo0CrRo2zdBja0jU%2F56jNuZdgzwvANN2DrGT%2F42dv4rcWb1UmsDz8LsWnEGA985zLQpU4vZFIfwHLHImU&X-Amz-Signature=69f1a3e3cc26ffa3be822f8139fa4a2098e3e0face51e4e1bc0af343e01be535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XTYAGS%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPw5xbjNBdCGH5hc6HHzs5ycj9GLDrUuKbSioLoBeEAAIgVuBwR%2F8bkM49WO3lyybkxu3NReN8Npta2JY%2BPfh04L8qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FmP%2Bt4Hp42DRJHsSrcA40h4Y7HGTWy1k4C%2FJC827xbiMkJ%2F5XGRoWxscxQZO41uTBBbJIVsXxkmqWzghpcBw%2FFZtiOb9sgsAfCPRQjIPxINA0he6NCHJG5GbOqMRAajECsWYkJrM9PrOYQZCfsWJTaypSH%2Fffmc6gUQQgkU%2FJA1G%2BNtAKqn3bXxc2NIeKFtmyyXW7gLnEZ0MfhhxFJSV3YZ6uZdwuV2YnicNlWV3S88PuB8p1mBpLq6OaJlnzh%2BbHeA2wWf7MU%2FjYYI8Gp1HKuSBJW6eCCPS2pV9xxWtkJyEU4ZXgFWoBE504e7yk8w%2FxucyHWGwq2fMy4UAVaLkgG08viNis8wO6SMbpwghSB1QGQX9YXKCOZuNGjt68RTaTpdu42jQQ1wiiGluItxFUCvNlXOqxhj6gnBaj%2Fw0Wxh7jEfcQ35sfYWskDIjNSpfU7nU5bSrzSPNRzgL9NlO%2F4ScJntzJJxcEa1HOWNxybysQRYTdPstm6wboMfCCXYxvDaURMNterX4J6TdZxXWnPCftRhLxU%2BSRwghN%2Bpw4eomNdAt151jAYWTK5gtlcpir7DlVXDf8ePqdqjzCuG10pzfeVe%2FPYx8e9R1PvV7GKK3tpqQWFDEByCE44Xp9lhbflkr6bNNcSWGNoMJy9lsMGOqUBG%2F%2Br8guVwL1z0fcX5Gi5tL%2Fr5oOJU6El3LWnLVFWFeWvelE31l%2FUHvE2p6QnCyJnGwJohYZ5jDy1TwnBQVfPjVdEcLHDZYrooBXu4qKtQD%2FBYSSmcnCTlivHkeZ4sbW%2FaByZt%2BVMF1RcTaiZwO7kb2bNyqyAtpedagGvobAX5ioyVm8wSvb0H%2B0tlzJVPn3MdVkq4hjelSSTBkMSyeffdLK3Hb7%2B&X-Amz-Signature=4586bcd5fe670586d05e33d239965f9377b203717189cc7f4b1ffcc3be084de2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

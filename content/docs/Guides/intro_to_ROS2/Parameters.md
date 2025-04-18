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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YOCJNM6%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQVi302dWLE5eh6jg1rM4RZpbnx0%2BGYJgvgbqnL6KKpAiEAkr7zn4LBsgQel%2FA01yua3O1PysiHLzRA8qzPZRcDM4sq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDDJzG9pKVaAjwx9WCSrcA9Kz59tHOLrR663AwYlVFmaNDe%2FkLNV8uMBQTQ8mCA7r6KLatwN8jwplp2oLUXN6fyOmi2Nrx29q0nsBu%2BROVaFlKsDo4vJqNLUoKjOILt7GGjOOA9ZYnCKMnlecmKbY%2BiYjl52hdPQ%2FH9blxYGmJ598pVj4tigoIP4ygL1cMvWZuKGGxA243dy91zk59m37OUZytLUUl%2FDDz6G2eVg8HedOupeYLQmB68bq3%2F4ujv5Pd6Wlu7hjmwLPtNUpsqsQ2er1cwg8OrB4%2BhBbtFqGJvrC30Ox58KWa57QeNckCF%2FhUxt%2FYlkfCAwcRd5t3EkWRzgpNgxWXtPUAmQC3ulzXIbehuyimtc5KrAN%2BHCnxa1dFodqKFc%2FlZYi%2Fjsu2NQW7BVuBWHi8crA8obhLwB0uvmvR2IRuVLKOj20oX60LxxxhYL5tz2XKxHYnPswyTkDZLwu5vgMfbhoy3Lza51YhWcqpcaqQmG1mf0yoUxS3ecZ3SM2W3FwiqszknrMthaYVK12rFxwbNs%2BBytvXaxxJMVOyzEVTf32hDNxRPFEqqEUoZUDwsqaDv2k1YAzUrHu%2BJ3ZQMibbQprN4%2By7oHnxF2FTkUS%2F84sJC6iWIaSD8DIcj%2Fs5rKJU3rdXVCbMJqOicAGOqUB1gnGnmTUU7Fs4kgpUkDHEVync3X0KtWK7As9CUKgMM1%2F0Sr4YW0EOJlOkbKuKF%2F3Jv8SwcHG40%2F%2Bo4xMAXuhmBodiYztTGJ0opA%2FyaZuqRm5Ypm8HN93zZEFKlKBKeT%2BFhgoo5mH0xpFa0mjEbpdoAKeI%2FFMdU3%2FUYWK3ZEs4%2BRmsmlGmcAnU45x0X9txIs4G0WtEhXMR9B4yuAHi4std4Tc4SZD&X-Amz-Signature=a506e81a6cd0533107a0aa18fe89352cbd662a0a09b1e859639afc95a8143a1f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

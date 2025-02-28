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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXC33BK5%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQC95z7ccjodURcR6d%2BphUJyv6r8F45eeU9mFqVSCOTkcwIhAOeGUl%2BopQd9EN5l3ZNiGlLdQQjQPZfDx17nCXIl%2FYq6KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxrfn%2FUtuGq0H7U4%2FEq3AMl0XiwoQrG4a7pEx9IKeGW69yAxV8vigQVD8RNaK4DaaRLFX7Z82ph6pmpoCH97Zzaw%2BocU8uZYl7O0g2ia1gtN2nlGI%2BGlyIEYC14hqbJdJdvUL8ryhjO6kzLfLFVxi%2BzaYkdRHKK6dwrSspAnnJ6XCcmgUTeXICkaf6ldb6PxG%2B6RxKMQoMPa9rcWlgEXsAp6T8rISYgAMwu2PvTy5EVsmVR292As3mkUC%2FAmQsV4xBDEBBVkG3NzZ7LZCBgAhPLtQdEYkFruaxwJ4q7Y9JMGCO68Db89orQT9FMCxGy0z%2BQZdbzFrRM%2B62Hgr1m73pYUK7uBLvIhC0d7xKq8Bh3NfB68IVaatOnC98AWV5MXJ3%2BM%2BZxjUPUs%2FlXGDJcpbJ%2FSs0G003j85iLYqKGcxhhbFqecvLkHgDfrukYPu%2BwLMkO5NN7XcxgWPv5C%2FuCy8mJwxYdw84kPjBCt36V66GD5ID23qkp9T8aj8iVou7wMLtmh6SHw9bNApRY9xWGua8OvgE1rnW%2BvwqtLO6wxYZEtDEIfxBlcJTbsQJYWQqmV9tyDdI7r%2BeOmvCJ9Uh7RIqe8ymkxmUYuCkiqDlX8aQrhbARs6B3p4hO%2B88dbDwwyLl56SCFTlzwtN0l5zDq0YS%2BBjqkASd1MGkAhE%2BI9LlOS1RWX%2BmGqsh6hxY80p8k7rCQEY3Zpd0%2F6CoBiC7jT8supbf%2Bm%2FfEfr%2BTkTdg%2BkvulMBVMiZ6IeNr95eloGYbr5n6rT5mtRLz6p4RR3p54nS1yI68wzbAmSrr1%2Bi6xT2Lqip7ArZeIU3dwyqC6UCXU9mW4zDt4GhIcfXDRQk2MXnehOkfDheG%2FvKTe%2BXzRc6tQWiv1NiNFmUg&X-Amz-Signature=07d87f1282e58c54b989516e30fad1da4182715530844303d95450a5d478ed25&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

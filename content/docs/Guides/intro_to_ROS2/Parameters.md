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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPVKTDQT%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDoZ6BlA6mB5bwJtw%2FmhnsS8PpyBTrPFfia0Gl0c8EfqAiEA7GkOBLeekgKm4QC7mvolEvJEnS9AuN6VHQjkVJH%2Bs7Eq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHGuQ5g4rStKm56QjSrcA9Y8k%2FoV4gJcRtQLYRl%2FeRhitcqTTwiF3qRykMwm3k5Gcf7oBS0zokNaq%2BtSmLrG%2Ffnc058mTlb%2BjJ4FilS8cZO164zw9E7Q4eLxaqJJF%2BalS5d0YpAR31Bh6wJSwm4y7%2FUDwL9LYerZvke367bfqBbQC4fL1hVh80rXCk%2FSyz3bBSBVQsvZgeNUWc8RMEYQJAE5nyEOkn1c8%2F76eIP27s0jcbHbnPBkUVK8iVny7vD7L1i4Pk9zbCM9wB2ec9kN1nedyRCwh503v%2B40jTubKRkBI0ZciVjRnRYr2aaRCxQXK2Wp25D5nKhQIORgHb%2FRJd92FWlFd6PFqDof%2FDBrJi0fJMtCqNH6FAZiHTYiAlLD%2F88sWP0jQQmYYwnFuULTbgFR6lBAbFY1dkPgw4gsIt0BTI3g6fuso1NkxaFQRTxqW69szaWAc3NYpd%2F%2FJYFrmhcPHs20wEMZgtgGf%2Fq3hZtrZVUAxQAt7p49Hzp4twXD9%2FjDQoxxMrKsfUgF4tLyglq5lEE8EM95hUszGlvJjWzVQ1B8LGHIS4DqAvs1ZwfSXwBPI0E4kpfGFiEqle2B%2FIp4wFLOLg8tneiJYnPW6Wkmp0AntCpGR5Nlu4TSXy3su8RU1T4fDS2WsImGMJG9%2Bb0GOqUB4uvFygfaONKDipLkveMa2cduPHTuUfjwKzhwunYaRyyfr2XUTyxa%2FNpIYHaChoedrRA3h6X%2FCk%2BBknSdxsaWKoW7TvXwWMvhPkojDRe3iSut6Ak7aNrMyA4Nn5rT9jAG3KCwWyNdV6MB5%2B0aYcK1J7re%2BqHRNDk3F7kk84FIsa7WekvK8J2TJ09qfPDt8CoywnAuzof993g678ZXA2XJWsvIXyTi&X-Amz-Signature=ee5c57f84b38fc493104dc9ab1a9fd69fbccaf4e0ded35793016164829f16b83&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

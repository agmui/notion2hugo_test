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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5QSZXC%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIADIZUONaEl0pbuWECZa1vERGqigP7L258YVE8NSqyhMAiEAvDiwqS0ABt%2BV%2Bap7ZZ%2BqhVkDhUeAD49eXlh5Wl6HRoYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHP5QbLG5hk0o6zrBCrcA2Yl585TOTWkVqnqe2vP6yOqeBJYr%2FpbIgZRUQgxY111MTUp1EtE8CT9Feo7L%2FrJoRYBwMiZ3cNI%2Fu5rcUq5UUMfze11ZrdtfjYTelprTU%2Fb4cDQpuo1zeIMumpdkiQK2o3AZcG%2F6lsxwZODZQJwXIDKKH3yeFffXxRmmUeISYnfilC2MjKnvLGOE9CW%2BXPEinyPXAcScsS4BMKAcSOvrai0qoYNeOJLLcxhLV1HZ71EiJWz7%2Bg15HSOGX3cFjpVZrK7X3rQDYozqyVs2iNxpZRj8QqG0aq2MLdAg%2FMn9iW3dMZpUL48iNAyK3D8yUrjYHxNP9pn5rdSOcRmuYddvEwswAfamxrUa5%2BDyW8f6kmSeHylWhU5wLW0LDw%2BII0BXy551sgCdmmyr8vRoPhAOAOp8OaAm2oYxCY6%2BEbIbuyyB1RnrxpwaQMpEP0cykoFEq5I6G6j246gVH6NptjD2HA03nZ1mi5ePd6WdSAguCHtg%2BaRWTSiKbh3Xplwt8k9NPpuAb1HZA8D8ErrQso%2FFI8KmtMor3ZOrKH68FMjNxi00YlDiiNNTwZrl3Yqo0gOfKOGefjNubkt92cbOkjSMSyjfZQaLaxvmuX17rrA5WrP2edrDooY%2BGyganATMKi47MIGOqUBrlkqHzBUs7i5xJ8fgfNA%2Bdj0Pj6aa3Jb1kos6wVK6DV5VQu0yH3jmUSJkLPmN3kcbA8b1i76SE%2FiW1rlrD3Nm0qdkmHWzLUxmwOAK781%2BBBp9PszYygjohwrYP6JX1LY0%2FGqePyJGZ%2FczreUAGyNSAfF57DW%2FLNGLFtntqxDIbLOcaivt%2FJUGus0qV7Y%2FuhxNwkZeFwagudhx9kI5%2Bfz3nNpiaDL&X-Amz-Signature=880509dc0b268e37bec05a53fc09e3c3bc45b5f565581a64edb103ae55c0c269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

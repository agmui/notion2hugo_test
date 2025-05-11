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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKQQELY6%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIF%2BvvazI10ooY%2BybV5ApU9guuVeq%2B2dgDXY7qBSPKGo%2BAiEA3%2BPg0rndPo4jQYHgVZJUFRnk%2BILRUrav9b1xhLtLQqEqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaZ5RPfkBa%2B9r6hoyrcAyyYYQZKKrhtnHpGHmHBZw7BT8ZB4AOIoMrV4ACOn%2F9jAmN6VzPcESshWiDAjUiFk82f%2FRDvTujM1C0TR%2F4JXcckpj0ytnCuhPRjQNJALyzNGWSsn99C1qvCrwyIo08MAxIDL41MVxATizGAOGGeLDTv38cPbjZnX5o6gKeXuPRBGXBvNkYmVp0kuyCdQ77qK6SCtRZaeMy4uPkpoYZ2efTSl%2Bq9mPfa%2FpD0pBkKjP3Tea6o%2FCyI2DWsMrn9mO11slczPMbtt0E8b5fI9nC26VEltVKaSacmylv%2BiCZMOacYMVq7Nn3D6MkNcsF3EqJkt3Gd7zOuchfdDsKjKN%2BoPc8dCKSVnLGL76ZWsL%2BT4nGTD5CaumP556gem0udmWauyefOSiwT3h2fRL85oYHoKtwc%2FzQHUpHWxEJeb8VqyQqmZ6VRlE%2F%2FQmJ7%2FnOLrAb2uqPR26CpHw3dyXbQJoQK%2FW3ouo1M7pX5eCbHzDSHv%2FkMybyaF7tI0Ie3CVSBSFCcp8049nInvLXnKppNDxYJ9C8SbjhlCG4J%2Bq2p7s4occpYQrPUlbj88qWbjAAm69aQm1JAPHNm9yiQDRQQbDGk2Oph%2BJWWYEJqiH6Q6hp0R6Bfep8TQE%2FXXO8eQDSKMIS5gcEGOqUBrOlbHtIjkad1SQ2gCZD0T5QmxZE%2BR5E3LJWnz%2FKmsPW5Xn5RX%2FZGONJmqsp5DsI423kDRdPo34y34ZmmVvjqvjqirN%2BMot9uXg3iEGbD3lnnE5jr%2Ft86iE%2Bdyr3KVIcW0F48bOQGXFs5eo03zDpqkqwHZEETwqspdYyYfhoIOJFNcHf%2FS1QHVejaDsFeG%2FLfEDokGpKdDEwN9U5LLO%2B%2BXjiz3ucS&X-Amz-Signature=5e034f97157a59bf2f3a827a59db23088aaa70769f9753cf09e93d32d244c182&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

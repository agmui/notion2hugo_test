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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YQYD3TD%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQC3aDhMHcQ5cJtE038GqO%2BNoKGBTtbxUbPodGDhGc9omAIgdnLOg3iodCUA5UC1BMbHcs4BxXqTsWYygW0FpYFNzdAqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHE%2B3gVA6EqpVk4WyrcAxVGxg6%2BAYpMlgECBTsVRTCVAWBhYARvGrolr4RjTO5BM5%2F3j%2FgDZOiCwge48InWDItCdMXrfZhP1xErjvx%2BbbnnXdaTusdGhJCMzU2x4W79bU%2F1UHMEgORid0c%2BEvPBBckizjuSSkl2gsFf9EqSilvMWkhQqM7u%2FrfufqIDZNPSLV0PSxWxnx5zsfxDwz9BfKzA9QdpNXEotzlCThZIB5SI6ykfy5Q3X7gnm210yuhwoNUzd19VBQBsrmmCWv34WF%2BzthqfUP%2FaaI9XgtzFs%2BYd0Smd7hoULahLvQ6m7gMMb47B2CCemWczCy6jmf24%2BvkaqrNseoufKerAcrCcFsCoW73tsmlEpKGaDEfFXqCSvwYdml2pQk1C%2Ff5VtsKeoh1oPOa4VhfBfM8VVCv3yrqrs7QEmnALBU%2F%2BPZTupcK1jlVQYERl7iIMslMDmWrsGN3p8CsuQgmXqqxo9grLksKt0c56RssSLrvwQNgfErJ3786njTIC3g7rHTxkAsRKEFKq%2FWE7RZbFk0KEpxf6%2F3T3CAY17StmD2FugxjL4tIjKweUNYGbT7vTed38bc7JfZxr1h4n%2FgzgFXr7dnMFSOB0wex2qYzrhpUaUrCZAh%2FWwY6AhIXs3OAi8A1rMIC8rMIGOqUBhYqnzJbF1ORHZhjgNdZWJw%2B2d14EUNi87v%2B0FL8%2BpqzQ7vTlzKXYhZ4q8%2BpvnNZxTChqwgS7Qufo7uSvf2wp420ubeFC0QfgZjb5V0OyPgBqikvQckK%2FKhcZkxJn8jcQwuQYkiqMPJt6LIEAZrmSvO6P5AQIgZLI92PuM1W14ntVw%2BWNS%2B5%2FqW2wKPulLhAKBtSC4zo9QehoaupDYrOiIeuOkkuL&X-Amz-Signature=bb0643c77f604156b63b7154e392f20b11b412c7adba70f93a51eddfbc445f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

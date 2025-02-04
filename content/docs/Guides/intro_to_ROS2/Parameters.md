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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX5EWQL7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCt4RYZ6hLMRs6SX7pGiEz5em9vv0djWpdlQ6KAuO89ygIgL9tm3myZuDHgRWd8RIFDx3EEbR7qSiapLWR0M5fgCdkq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHMTJ2HN2ZMi9sRJfyrcA%2FNno4NbJwyr%2B1iu0%2B91Yh5ZfG6%2Fgu8Ma5e6qw%2BZ%2F0n%2F%2BYlpgGdlOSdzMNorMRMIDMGvmst8Sse%2BTevoVkW6bN5bS6U33fFDcZzJlbMq7L6qZC5kLKFT5mhH9bldgO2MxlQuQqUSQ042mkbct0Jkd62vJJFKJbop8d8qKkdkhLyaUuDjD2FUs%2BAOcRlG0wOycK6gYzW4pgko7Nwt2baJJpSZAoLaoo%2BdVYeRvUufGRALfaC%2FKgZS0E96913Z79pP1QhvC4Bnu3nFaW0hrJJfq6ZJfq5%2Bh9D9dHqDUputW4LE75g%2B9P81QiEm7Tv9IPtxnFu8%2Bow6Q3B3QQfqWzlCW29RDtuDOKEPdaNXD6kka2OyhT4yGcYeAniAubPJLxmdvHZeZ1ogsVW8jlSw7s21mV2FK1EbS8oel0j5bGwskgb052P25Bmua6hmSHTFbY4OhVSUFECvT2LF9NF16OpLs7wWab3OSz8Dw3YMwPnhNbxhoKV9njF8rrIrPh8aCLsMlJzNEEofJa1maMUxP3hJkDZvKIgRXAzzqmJiysOC3e2%2BWyArd%2B1isrxaKf9i8%2FCbTu9%2FFHwx82b56jxYTmbRC%2BjxzFzxge0%2FCtJ6vD1jkZs7GqyS83z5L%2BcibB1oMOa%2Fhr0GOqUBwL8TIicaoG0i%2BMFHrLcJBalioOcrXDW9Hz0Ny0Bm9tZqgjnYIy9AbTCasZ00JP2p%2BjsN67WlFecQCVqOAC%2FsMOAgc49gy%2Bf8Z0eBSfRqNw7HtzIr%2BYb6Vg3XoYcI%2BOelezdgEINPZseoApbQW5Z5G4Sra%2BoUYAy1JhKo9gC2MCg6B0mtv5dQE%2Bk6rC4VTV3oeoTTmmWEaZQWiXTS98mV%2Fdrdidox&X-Amz-Signature=621838070b71dce0004dfaaa3d31cfcfbd2e764052fffc28d2e30c2e0f3c0ae7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVOLSOLW%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDtZzVWX55vYc6A5vlsVR5ptGMp%2FofGqmqPcQ3l8jdHAiEAtwxYRWkS10%2FoBE5pZdpy0SEEd8TV%2BplbreZ4AbdP4ioq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCe%2Fw6DaaTn23Iev3ircA0TzEnscXqe%2Bf%2FQy3phV3VlfTxG%2BK0K5JdodufGwlZ1Fo6bqBlw8vnqaPpuLGFIsXHKouEw1yuhhVAkEiEesp1wOYy0ucILqnn3oikBR4JxO098KNzl6LWPivKigHcGVHUThL1oL%2FoccNPYMGZmlqLSZ9eNaI92Gjt0vBKKTZZQTyvv0otUlTUA8cTcgaoNJlCchhmw6Swu597iFocc3jkKOlXpzweRLGSWz04U2ORDXEOaiRDOBIPjRP%2FqWrbfJCt1Z%2FrI%2F%2BXZYVjIGpWWRtOcbrE7Mvpk5Wogfq1llm6Z9wO3VTi2rksCDpuR8fvEc9JGg4ICmtO%2BTC5mvKpwobyXyF20ZZqdJBaon48snjRV8NzLzfaId5fw7hUNcHnB34NEjjafODQI6%2FIo7QGcWEyrRmfz6UWeuntUYoomj%2BRW8VKs0yyEuu%2BtwLFjGLlzRr9eQd5bXZ82F5MUXy8EEC1q%2F4a8s%2BLbjZx5gjX7LF1Homw75C21UVziIWmjW83yVaI3lHgELAtFpwrJoI9p3X2TirjbIrJsYMiAzwCjVB9eih9Y6htM5zjwgS51gDUqZAwMXEoREwiFyjs8Jzk6W9z57HIPkmQG98PsgwTPpv%2BGthiGEggMFeGKob7seMI3h2L4GOqUBoqn7dXb77vgU2H7a9dkf2MLjULzj4x8DRj3OeGaQD5hS2Eo%2F5qoLx6qTDHiwwVVurLK73g5KI1y%2BPi0em3rro6zo32nDR29Fq5wb0GwvOzjnwYCTK2Lro8Pm5Ut%2FiTdGNAFHvjVP%2BLeSd5QqF6jSqEQrqA%2F8c%2BA3RZWosqcC8F2YfZEZ5adZ3CoIMs2Uh9%2Fnol%2BoefigRocGycAy0wCwXb%2FWfgPx&X-Amz-Signature=08e45b8fe3997710d21cb053d04e213a0a0958e0c7a0c4ff59d9fb8aa05f26d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRGRY6RP%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCY8tsXdYY%2F84uJq0AnAoi4ukhGoPTbz4ye%2BibnuxGGhgIhAOXAXkYW0r8wExqIdLU56nEYmeGYoSAPJu%2BkitJdNfabKv8DCC8QABoMNjM3NDIzMTgzODA1IgxQdn1Gt37fNQEB%2Besq3ANZnYVRq%2FOxqCCNly96gGz0coaPnlkqnyiPk7tVvfKQF4Dfikz0Qsj4Dww6TRMqJ3ailzjflvTErNq%2FGe0vnc2mmXHZp8tFK6IJU7aL%2BfzWl8dQbJVjzdLoKhmhhkkNyBwcNDtF3rzklQFm%2BZhQo50qdL5oj9R1TaxExJSZtkUEcnt%2FE3LctGjycGk6139Eb4h%2FMlzQvfg7T4HTVRrK8Ak88KPG6DHf7tG8IN7rW6Awj1BITMR5yVUdr95HypMpmE%2BZ8zq4dNkmLMKHfja2tN1SYVOV78wrXoBgYpsWQmZgJXjwDaHcCnUr0XhUrxwPPpQeWAhSptsLfxoh%2Bv%2BM3NR5jGiuFZNa9Qg8GkeXlntApkEd5RD0ZfCQJu5dmoJSZjNSBxsD%2FAr%2F8yaQZXoR8yu%2BdYbqCYjapCszVakdrVwwJCBLkJZOMLLFwyxxr9d%2BJzxHxD3CoafdVOrDojZ8uB92Xa%2FHm5WjIiQU6wzBLw69oX3BZRtT5R%2BQnMzSZzaEkjagWUTh%2FTrozWnEj%2FDQC03h18F%2FzMos4Jf%2BTY3IVgg%2BRwHt0unWMgt%2F%2BMMC4BFp5%2F6YuVYnpRdoo2b8ich063kvANkyZJdElpRKvlfYgzJ1rQ3B4x%2B2L%2F73MYtgAjD4xJ%2FDBjqkAVbscXpzO4CB%2F66IQIGiwCGPLh4UTPBct1VWzbRU75o3FTayTbhLhndjXqiFAjt3f2tPYgqTMsbi%2FVDo1NORE4AWvkDdJlsAIJ2L7f9PR5jcehIEDFwzZ92q8q79ydMwzkQF3eVoQyUwPvwRUWFybQbbgv7y%2F9CuB%2FlTcg58gvXv00uwOB7Lb%2BuUGCMTu0cfJMJedJ7p0jQXbe%2BlBKDBxCCksDUK&X-Amz-Signature=58527826b242e999244ec988f9fedf4f56945d88d6e0d132a68592e414c63785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

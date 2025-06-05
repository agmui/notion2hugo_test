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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMPKGLVL%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIA%2Fgurn1y1FatqkuHeWo8lhnbDWRb0FdInCBbe2EkjJWAiEAm0i5Hs%2ByeM7HDrk88aOFe2WlRBU65%2BOolf8EwYA1L9sq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEm1zzOUEDZni2b0LSrcA%2BBNp35VQNUEI3Gi0IGI%2BT4qyagvfyga8tVRAdwXcLZUv4IlLUVPxSUWNpSkYqQDAQNKffhrBjgRtkenH06Byj2hEqE8yi%2FBMtMLgq9VxETojiIz3HPkEtf2MlE5ps2AoO1lO7lVO%2FWw0Pb6kwdY8OHcudD%2BIJviOpyMcZ%2B4oBPKwATlnSOgSe3aFF3ST5JNthFKWRgA2pgX5qWvK2xj9gDOrx0Nz03%2FLdYkupyNmF0YqMnAgB2kEqrFVB6jc9D0IFdN3fg2Rh%2Bh%2Bdl5T800YOBnAgc2rCJFqONmea%2BuxgSoeQ55fVbaSdKEQxzDTWdlVWmI7MAvg65w2JnPhJcB7a9oIyUXx7itkZ7pv0htOm9LNCjbqjaScgldM%2B%2FcFRfkztoZTOykY0rljrQjhvJZatRU4joT92CSi1hjsP3uyeuwalc8umbjTF3NEGiTAozzXaLwjOOl87mlw3MzJStyH6Owjkb6f8789WvxMQp7W%2BweGnj9x1MCWcDfJ0h%2F8SGf%2F1vdZMYk1TJwRJ%2F5fc%2BOkKDpKrp2P4C%2FTrKFHM%2F5bOpAoCSwkZ8%2FOLwkHxZtLEfmDHBmfWnf27%2BOcUAUR8mjuiZ5F5cuRsq8QhQ5szBpFsgren1n%2Fj4Bbkh00n88MMnYh8IGOqUB3wsSNkbbjBVWJQO97YLfM1gd%2FeB9HQgJ3J8k5S6VBxTyDz5VaGlDIQISbwGtUDdpWeOtfjlF6Oveu%2FyztcK6ea4xU00EmLxefKGsSmJupK1SQgo%2FuJ2yambTS0uciqC0V8wSw0eNiJnwp4tnhR4xRKcJ4iXH618A28ZTwIcT4fyS0jRmxfJksjyNdTJ9qBh4fVsBtyOaYur%2FORkrOQ1QzF4wuLrI&X-Amz-Signature=c97b44413e3cc280e617094c5d09671d1ccb6ccedcead33a79353aa6d5c61a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

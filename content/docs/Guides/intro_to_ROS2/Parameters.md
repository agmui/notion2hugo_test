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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL2OKSWU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo315k%2BqjPfmUj6olbvftXnFg7yrdijRz6cZb7nLAGlgIgeYduELD3MwwMOM9d63LGPphcr8zhEYQiHsq3Et%2F4bkUq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDO53aC43MU2m6LyMxircA72Suc06%2Bf2KdAO3IGf%2FEVySc%2BPRGb9ywJnrnG2JOfUCnTEZcRJIbxYTpoWLdHbZGoDNMhoPQNf7v24Xi%2FpZ3zMMA%2BOdU9gpwHeD3JVZ3ZiFg%2FAgxmlAXvHLot51EJU883cQTwfVQGdC%2B2BXchI37Ogz8UsTTVomenIsNMBulPd4nyQ9xyeu6Ps0rejuImdpcW1t6%2FMqNYitYkIxPhaj2qdzgiXlntwmZcCA5mJS7z%2FZNVowif6vYHwZ71PdPBRgI%2FQQ15MnjOfmVFy5W7P3aSvoI5I2IPw2eNCeFAbb2Zp6HPZ2vGFw9Wysvu5optXrQAH6una4Y4LE%2FGtnLfYfNJQ4MtB3kjJCG6Y1%2FZ7Xgv29bmUrRdnx1iEvRKg6%2ByZhbsay6cke09hcOTY4pkQhH5VXVyFv9ypdMoET8bAZhCoxB7%2FE%2Fm5PnpypKbYmUcTqLiK4uepsSQijL2Mok01bGWZeOZ3s8WjKS7aPilyVP9Ee2Df5Z%2BXx87Rw4Id8viXQJGhRmti%2BoFXhpGDz9DEcpFo%2FdPxutJDmfkbMerhLn8vkI4%2BQl2Ao70JOUv81Ozng8eIJWugU1DXykwDrSnSxUXFS4UnVUSyOci7bk9fqFECeo%2F3acdwn1hk01IsPMNOsgMAGOqUBaIf0oKOPdN6iyrJY6YGHQ0aaVtJxoDF%2F1BPlKHR%2Bp8KmuEZAWoWQxWkLaOTsFnEHq63qcZbKdTVaGhqstktDFyw9fZlF4ZI1SltZ1SkY7jmGgoB5lv0O3jwVxbvw8g9Nkh1WHa4%2B8M8W37TKqdboDdxjATE0j1RQ4voEPcNgtQnmKZgcqLkfUgYWQ9eWrea5ECyTiKrmOK13XIccvUttZgtcXRul&X-Amz-Signature=c85bbea8beb0e01c9ee31649179b84176e68f6ca2fe41e4ac6975c98034fd3e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

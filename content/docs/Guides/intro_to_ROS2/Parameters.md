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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN273EJY%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGaYu7qzfUDZYrgBGeYAdmQtMFxpFy5RLO%2FeivQO9GjkAiBmfjUA%2BVyaqmh%2BC9aWQZseUodSs3JdqT3QuWeGo6pNbSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMIb0NCrxyNt7Js7mAKtwDM0jAD%2BFQ%2FoUHbrA9eIRru9GVZbnFWE6NGn5GYrfQHUlujcrwFZ%2BF8PunaTYRoU9xXVuwziTefERQjUN8dMWLIDARGeAPsaW3zA%2Bzch6M4oY2Y3QeFzBkbH%2Fl%2BPq7fytKgwOKLqiDtTE68vG2Ft9Q9xfhxDrYbwyzAv1agGmCHtcrPOEGQXCr1QDgtve7vQMGf3jZeFpzEJqoCuyWSj7AKZc8Ws7v1UbyTT9r8mBOI0i%2FEsOxzlTPMW1UYA7Kz%2FMjuLWZbdfV0OwA36dS%2FrwTv4Y1OM0p%2BOSGXgdSLz01nghlGJ0BBP3NHZFQkWvCI3bAIk%2BAFdmOZ1S84TZ77k6V4kXI%2BdtKLttyna3POg7xB%2FM9nmSvRssaqlzlU8xqk3AdyOhfg6e2CkgwR5INgeuGLNecwtrZgrHeoErxuq8fNn%2BxiLJDUT0FlMiNQfuKgB6PklZty%2BQ5M2DgPCj2hgJZkrUL2GVJEGOTn7VRAbD0eX3Bk6ZJfdUDOkogeS1RylgUT2o8Db3V8FI08L%2F4p5lNNQU3L3Hp9BMg0pUhFt3HB%2FDF2t2n2nbVcmFP2LDHTiGh45gzb8jw2nfd10xeuQYkGZNMQDESjUyVkqLEcvG2dH6j6UmY2hX0xLfFFlowyNv8yQY6pgGxWpyskd%2FlzMAR6Yec7Ru5VrxZGtVrGWnYfraK8SF3OiikDjg7fsnKt0p%2B8f%2BpaAE01y%2BJzTIi%2BX2e8WXPC5j0QHL8KtIoyHsYHcCPTfilJFqO4Ih8eeVe7uK2ybLtI1K8rfEImlGlgRbAgtkMCs%2BsKTKbEE7tgIxKdnzKMTZ0SocVbdj0B96ERMW%2Bv%2FV6kDp14Lzl6q%2BgXQON8YWbeF8mm%2FKPa1e3&X-Amz-Signature=40a5be8a446d3569ccc6fbeb377dc036267b5461dcd6a7ccc89ef0a1f0a39948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

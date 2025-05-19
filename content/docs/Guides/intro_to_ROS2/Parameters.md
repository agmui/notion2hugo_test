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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5Q4V3V%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BhiUNgrmsW87sYfnBH%2F8ytqHh%2BRux4muZp4cDdi1dxwIgeDUxlGTSsuJcXZ1OAukhRAQUfqlJupDNnrmfDZlhZzcqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7xtlZXJB44xgZpJCrcA1aLBFYa8ouCuJVB84sC4y70WEYWD48s%2F6wYqUxy8cQEi6%2BdUOxzCTfQjem60To5K4WpMJrhBJvVQplKozpu1Ee5GLO0K8OFb%2Fc%2BBe%2BTGVechNxyWNQHx9DESP9ygoVlDv11AK2skqCA60BQTXto6iVDGEw7k7AI%2Fi%2FmFDVUT6A5iUywDIwnfWwiUSbuFn4yFOq8bsW0t2P3omPr7hWDv1loIk4Nfu39xhFoy9XVWKvEr9aQ0BUYkpL0VAGvKZSZtHRQCLspgGxRHe2CG%2FLDkeRsQihA2wwbBkPEioMk6uqXll5lpTL6aUj1%2FNXck461WsKbReNp%2B2FRUHSQrb6vhHShZGlfl88E5kbXfl4ON%2B66X5p97RplSy9QMA1VUCXsj9UHlxNap3pw7L%2FBMV3tKawWG1zJYwBECMgicww2yyboBgXHh2J7iiLH5NrzPR%2B7oAIyTyg5u44%2FpslPzSt0UjUecBvKbVCxn2xdq6Y01h1JQT%2B9Nwt46Ngrt3MkNtsaOQ2HVCm05G5%2BqmoH4uAlCfQNyDZVgZGFFtw6SQykK8Bn0aTLXaOxXZGLZ8iUv9Sd%2FiGrK%2BHlQpwipdVtOj2O7Yywjkmh%2F4uUyhJfjcKx%2B1XR%2FVh9tl1kLF0mlWs6MOefq8EGOqUBGR%2Bu%2Bzox%2FvLpBDPqCrzcQXlVlO1sQHxweT75tGzWUj3OytWFzFEDTMeHATk4xOFPcUl84vIStn83y2GaqqAPB2Gs9wsLBk5n9lbA57tpHdVzxZjz51Ntn%2BdAcZmGP6pfCGuKGpnwtVXTd%2B0eJkWArcfi%2BHu0ujhw%2BtzJYqmLc8Kml1ToCLZTP6A4E%2BFZugFnmYd3KvvQLNezezs6AXmhvQ9GFeec&X-Amz-Signature=6f131e713bb9856e4dcde48436ae815218161412782e4237e5fc992b55763984&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

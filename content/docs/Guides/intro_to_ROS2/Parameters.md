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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H5VGRNL%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDij%2BnkmjLPZWqsQf7p5Adk82gtXOKbl2PaarvIURbqCQIgH2nG0lvPOvCBr%2BWEcrlYtq1n%2BybJsc1HDQJFSk7AAmkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIZnpCFBwNamv0CWAircA3semCTLbt7BQTTgyJfA66Tvb55AqWWyN4ErqnKls8EBUeMJE0YgXjVk%2FFIiaDhuQqCTgvWsZDu7vV%2FfxeaZgD%2F8a5ZYeEmXdN3o7ipYCaso%2BI0uv7jrYtgUHua6P7O7bGBboBAmur87aM8URJfrBVXLBHOr%2FIFLHyCyM0fEaV3FHWOW%2Bshlhpf7R4c2NonI66xABja0iDskJSHClQRJyeBcZ4YkEvYno%2FshAXiVPxqu17LXdzUlJOHMdPZMbV1PTpdYJSHihpxLjGa%2Bq08hzMbMZYj9%2FOXE8sFQR1okYOMtwXr%2BViL27EBzBGK3i9nZnmbSN%2F1cCTGP1wfpGL5p5uzswIhngWLTz1hoMxaagN6MAHDagTQPQKnFK3nH69%2FLQc1RbIr45vEW3U3p4zNYlPaSi0J3WQHz4YzhlhIZPJWF8pzttfIcUVAreB4TP5D4yWw98%2FNXq5V74BjUfUyQhahuW%2FGx4MqxMOzb%2B9VQejiGRzTBQAY1WTo8Tgr7NVmlfXAC6NjUPAat8qQqYfBj13FH5KU3g4U8l6%2Byh65CryR%2F1ErJy4dBmBECAWxN3H8sO6yXfG4WCiyB9A4%2F%2BCks7j7QclQ7wSD4BfbkPO3%2BqkBrPmRqwrsgiHqf85nCMLPkw78GOqUBrrBZPrhTRodJERqFid2C2bsTecV3SkggsLvP8jZ8dav%2F94VxUjRLeDAVxxsU4RRRnJVFmiVH7AcgchDS0oeYbbgHKxzy2V4nXzgKZ%2BYxKp6m84OuLwFhaPFxGYrRznVZVo%2BacOV93jtbUUTZwFXccK5rNBF2yeaahEWQSWwyzk5%2BaTMMcBx9M2TWviyZEfP%2FHAg5Gzeo4s9qYy6lgp0i20twzRKs&X-Amz-Signature=81c874fede843791c11dfbcbf1102caa442cef2172c83dd6b9a722e007d55e9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

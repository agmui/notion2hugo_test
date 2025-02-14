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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X2CRODK%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH97HSXQhiRHs81hj%2BWC9PD8EuZmeEh2IAl6mrXm8XbtAiEA8leO0HCvaF4j4ulII0jYKbAtWfPr2eRKyrInWGLwxDQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIERX58EzQfkuOigTircA6HcazTB8Kf9z1cUCrVfveSRH3%2F2sunVsZgsnM5APepV3iz6Bs2gDo0espoRviVSvZWBJJC5VV4tZq2J8EX%2BjUuy8%2BZxlxwgcvD%2FmLq0%2FZgCTD%2B%2F%2BjeYQzJvKCqp%2BcbEMpCjebAnZO6kfCwgJFelFuQexWIsZPoWelxdZiOK6UmPUciXAx5bTf2B4URk5XWOJlRYY0cp%2B2xrE6BiUw4VBeBuGDNvrxHPkWtVRPw474C6ftSEy1MZRM%2BLSKrQomMZgxv2Y4hWeCVTxcG2pIo9T7n1MzT6aSgbkD77zub6BGgFxlvueXF2iQ0y17B1INiHsRlGNqAatHeKEN1RhkndowTHFzFXkjbcoTwcPbV6zLyQTqDwBt73JO1VidDgPITOmCEcKW7Ljl7dJMKlNMg4hsro7izvFs9Wm0yfHSRvKTz9K9cXX7JvjMa1B7slskiBzXJtZZiOFTfTu8XDW9L2QqDV8y27A0P5NYpGz5nY6e1bDRqhLo10z%2FCWj5VKiVn47was2JOSSy75Bzzz23B6DrN%2FUX7f8PLlOXxpQqbC5uBL2O7qV5uf3LhmlWRRYbf6WupqzMSolVWkqxLsFDm8jfzivF2j5qavWSQkIfc0%2FXfdoMjXG3K7QqNrO9t1MM3qur0GOqUBl4VIIoGl1nyCJPOcfvXr83nicKfPE7mvnQCGSEXzOeBsPQ2RLxjiAp%2F8I3%2BQJAuS7cyHiH6bwc%2FYm6AyXFLpvyzFJTFKTQdVzOWgx7p3nQlizehWPNJEwLifuoKNnrbv0N8JVJ3ByVT0MJ6C0DeyVFPddDWYESXhqqp7IcTKhpzhVjS9eZm9ob3BARI7JGts9rY9n6jtmXcXjUxRIGtt43PK6%2B8Z&X-Amz-Signature=afd5f758ee17b4e7dd9ea5fced3d0688dba104da5da2edb50a9b2f0f83a71e26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

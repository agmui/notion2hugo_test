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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFNEV7GV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfsjX2HfQAMPX4lGta4ANimofBU1kSzurzDS4I2CdFtQIgYZlG7dXhzmaMz%2BNGizqe3zerpGXk2qPABY5bpYzw%2FkEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIc7ernRtkl1i59hDircA2j2Lb7SjTmlNuHIu7lAyUy04pTtp%2B17qxi%2BeGbP3DPjq54lmpUJlH5iJsH18C5aBSpxscuK5R2vxAIkgJ3HHnrgECJRqP02Weh%2BAHp2SdjpOPo%2FjXdEncZ%2FSvpz9c8SJaxu%2ByHAkIMXcg0WKzygWfkL3KR2r3NCQN7qi3GTCCKBM8TgCveuC9Oo6mdFctN3saTMbvKURLtHqEQ0JHLZ%2BEBJrqUQjdfHdM0ixAW3mI1pO%2Fqg7IC5%2FpsnftA00dfgRK6QKpLI4Zen9EYBf%2FTiOtiO5ID%2B5JdCAySij7MHNttrfD5LbewtmVZAmDihkg13YMQXW67Q82xQAFYwcceboRNgEBlZ60JIMyhY%2F5kJpBLaSx4L2N7qbZNRv1Mer047xJtwTgHZr%2FZHFjVXxGuWURpiJDHtNRWcuE0fVqEQEdjZCnuDb%2FHTPc7DNp%2B6Tk%2BK2GsnPdk2YhYCQ%2BmxNA7cf%2B0gfgUwlzqDAGmRZb%2BYWctD7XyXF4AW0Pw0vRtECtJKfjpPGEDoYJUHh4IPtH%2FvZYwe5gyRSP0AoU8wPmRNiG%2BElLLgTzm922S%2BlDG4i7LtfRwfi53KFiysCE2P6ntnP%2B%2Bo%2BQiIht8bJOZhJeL61QdeDzGDYNPV6FwxImlMMNrc1sIGOqUBvGKB4KqdlU9M7L88WimEME5Yninj%2FhLZMWQ48WWBQ9FvE04mtG6OUqWTBD2dZE3At92v3H7gr14SWQWNLieASnmH4jHae87o9UrPOFGTa4wmq5dvndwlgl5hUya2hH0CzLfxBLjyJf4do9AwBdO3rQXCOVubpPE6sA%2BS93NnmZxkBjqMoEDJFQ1UZ28nV%2F4IOv2eGUtWYZc8sCchFoiDi7X5n9ui&X-Amz-Signature=df26fc0a5ba5de658851d3c73d2b2745f73f3937d9a00e33e8a34db9d942f0a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

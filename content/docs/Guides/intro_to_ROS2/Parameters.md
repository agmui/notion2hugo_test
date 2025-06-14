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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS4XAWPD%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD%2FO82Wrd77yQ33kIeWim7%2Fz7t92rNhBF7wk9e%2BYdbR1gIhAO3dXJkWum3CpTsD0E%2BUds8DXld3ZZqWgIP9BGi2%2ButAKv8DCC0QABoMNjM3NDIzMTgzODA1IgwGlIHcDSeVMRzD05cq3AP%2BJpjfBnz31PWuuS%2FjaTrjFdVZ7CTVG0tmfLGtxgSzLRq49B%2FqGNsL6yTPGTmttn5X9ofulnemD0ZA6TBcbkJF2zvvJnPnKYELLqHkkBcC6rxxdsPeunA3Elm1VnRPMy4URpPeP0OQrZ0iObY0JpS9UI0FNsHdSOhaEzPiZks9YiWRa%2Fv%2BXqsA2DP5qPt1ow6%2FSul6WIcw4ZnY%2FUfNFVsojA%2FjSz9W9tj2ChuvacxS5%2F5VIy2KLSV4UhaUCIhAa3NhV9Bgc%2BqpeNZF2tFOwh1nWeuZTEAbd25VrmOx6%2BfVkn1Q0h9Hvcx33xaQA%2FOsWElEModnASttuFpE2qrYXBOJSs1apJLVWcp%2Fet%2FJZScxX4ylTRyx4z9QBSlG1gXNaGuYSxBZkOstMtBHOuLff0Qx3WAAbIpt9K1u6Sd72fcHlqQCombMtlUQnNKPUXC1r2OpD7OU%2BYF0nX64WmiGaFsEjakkBTU8Telg4ZsZsbjg4DVHhDX8GJfz9u8Vuz3XlR0GSqDuh0DLEvO2b4xHunt7ocXJTLGn5%2Ftl4pbe6X5zjHCMJyaMSorEAoj9zCZn2pYlCVLrFZtzpLASsuJDWFZbdqv8yiIzukEsHN%2B1q2rfBbO80Kexxki0m6kSiTCEwrXCBjqkAazteG1PNmyqdSFirAkE4JRpXSCw96GSyrk%2FoPRAPoItwgqmYTYYekazJCRTSCtTN3k5vD1UX8mFOr95%2B3eqKgcPamR2UJfylTdVWmFVbGZgkERE06wmpXoWgE0gdJqFHJOGaS3%2BBg%2FC%2Bo%2FzTBsA3hLU6Lihc5%2BctxIqPffmmtM1L3GU%2FwIYQdACs9T0gVW8jmtV7H3Q5Go6fC65M%2FpaJSwFpHbf&X-Amz-Signature=b4fcb8712b143ae8710cef045f928fad06731107f2b32c2e50232a060c032ac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

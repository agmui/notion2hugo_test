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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVOGRIQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCJTn6yU4OK1kByuvxG7%2F8h1D9%2FHSrTSlMqPMK1wlfFCwIgBHLpmXcyObyNqya82mzuToemIcS8DfMFmElwuseJY90q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDC6OtgvNYWiOD0jNFircA6niCp%2Bee41IA6EfDRX5q8%2BR0lAV2M7RkHCPQDjcw1ZfQ2c%2F0W6lxPDwi3BNm%2Fa1oXyIKJRs8XoGh3zuishZ6oI6eWAYxnaZCPfwXBHkCPfTHF1gWc6Ex1RIN9WNh3FqK%2BpfspeiJ3dG%2FB2F5MZ8sAJM%2FiuVUb6uT6sR%2BhfGN%2B6Yui6I7udmwYhgWrKMYvYQ3RvsnJ0JWkFlWGZGG%2F6iviEfaKlp6ag9HurxXffLOZAnydJGmYK9ojiXRBmcEF5jBuRZPE2%2FmHaXTyHbGk7pu4wCuq8NVV6VO4Gb90VdHlVO6PZmznwJ4aiN%2BhmtTpyOxxyHwmVWpCWaUlCTf%2FKGunPd64YP0fMMJ7gB%2FPwozuAZ6hTWjqLSc2mhQFKhLuq5R4AJQ7WFGdncghTBkLSsT18D9wOtLfsUSVKYrsAf43GJbAkYLDH86Qx1rlPpdJ4giOMwzZNiLU1qFS2N1UynvpA7Vox6gno3TmW6krroXtViKkFmlh7dI77Py9kMqH0RQXnkbxZHB7mwWK%2B2WFRaFyQLfF5thZlYKQd7XXfRQ%2FF3afp3TYsOhY9r9O%2BXjyla74h8ZipM%2BOu8YDNdVvC4jtKnG1ut3l4918AGaoRblbq5ZEi75RVwmzRggubQML3%2BlL0GOqUBUBLT7uzZ1JwkpY3N4cmhnHJMBys9aWJUBADznPBOwbYdZQ%2B6lTek8DnyJq96NSbE5um5OpsfxV3hYELCG2IrU%2BKRJUt6ufxHunFHqjAeBDNw31KJwhnHiuxlL7AkiJ%2FGxxp0J0V%2FS7MBcZiY1hQijOVfrFCuxcJl7rAS1BrQG9x7itMnBM8fVAa3PQpXijHa9yL55mNWu1b%2BLVuXmK3JYthFzVQ%2F&X-Amz-Signature=8141d075f949aae2fe1cbefe00bed33b884f6db4be23fcd62830d69ba2602ec0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPTXXZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAPsL%2Brtz6N7X0x91EsJkrp%2B%2FALuGI43Yxi5xAQdfYljAiEA%2B7TkmLSZI9Sie%2BQO0DBKSi%2BU2yb%2F9lwjV9t3KwcWveIq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDBCLZWjLInxmgnYkwCrcAyVNcoqCr5u9Xn3piRuiJI4A3A0N2E5CyOYhDoC%2BgkMVoRn17sQZJhxaCsWibAVxUBxSd%2FueHPuVeA6SFz8yio48ZXQX2L7ZbTvgWeL4xTA%2BzOTI8io8UFtBvALc%2FvJzKQC%2FaN%2B4vMc00sbazJ9L6e%2BhdYc6nxAW5GNyi9ncP%2FDFan%2Bs5EQeJ2dd%2FXO8nzUu%2BZJmSyo3cinj2Ktt0y7mZn4yZPWkBFyzXMGNXpFA%2Fbi%2F0eEPr%2FKg8Huj86VBv3Rr9hS6LOznQykRzKjlQy%2F7CBuoQN%2FLZjXRBESPsh5kkCsZnvbmOE5qaLDDIHrt76C1eIb3sPBM8l4D3R4Nq07IVYAnetvSh%2Blvm49z12ZAa%2Fyomg5dYoDeK5T466GLfGjwWDxgbg2OzOEZ9hLj6%2B36%2BDQRa27kzuU8ALzlRMBDHXDjMObfWIElPfACdXOVkUoOWL5zELtsZtOHxeKB1HLO4vReZ%2F9X04PNpFefFhbvyfZgtrnWwXWvpY1ZF5RRsQOIJ8Woe1mCj90AMKE08aEl%2Forec7kqzkl0pLvuuBeuO9%2BFVFvw0CMjvr71tkQiqJSti4k19ugJFq4zGn%2FPhScVTx5x8tey4%2BoHgoHka8XDU7eyr%2BAsIoXk8ZYOflJjML%2FY%2FsQGOqUBFin05EF18FSlyWPlCPnhEEHHMYusk9UwEZSMJ5wbPWq2ynYm9csXQGtHFCuN9TpBiNtZySey8fEu3kpPw15ZwPlHR1o9fYnh3LO6aqCbpgpTAAHSfl7rVrKOU5NTZJjSdW21Ble0%2FIqQGWR4z1pcw9s988iSofy5QeYbXthn959BxFWOD00TFByhF%2FEgx%2FzansIrsHQ9Gh11mK0QWXOeXLI9nkxA&X-Amz-Signature=fa661a9e418cd8eaba12ecbefb83eef521518fef547311e1fcfc6cae9f739ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

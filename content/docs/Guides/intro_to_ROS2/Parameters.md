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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKVHCO4N%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk%2BWfNiGiXOuVsSHTSp9EjhL1vsAeAiWaDTshbxSBkIgIhAJxN61S9DEDuie70LmAydNkUj1w7UXOp42rrOCgCsqr5KogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9GpoEDNTf6Q%2FQw%2BYq3AMAfK9yrkPoSBZfd%2Bztf3yG%2BDw8rlVXIxz21ghvOdIPSvU3d0t%2BGFDQ2hDVSGcpw7DxuEFwGpac9Cv%2Bw8s27c2ip6yNGMh2y7EuGg0J7v7uuJL%2Bia6CkidaybdsahL3ijpUyZLPU0fFGZFF%2F6kcwgGlvIEdxcSBZKxDPji%2FEygTdiZPtFXvE4WVRq%2FwkfmzpRIe%2B9NDYAfEtp5npzggzbPKN%2BBCsbcG84mRodAupD9QxQ5UuU5kVQ2%2BZtlTJj5NqCBTLiGBkXrJZKBY98o2vckucPorzGEl7xhNHBMtk88Vt6nbgLdk%2Fwr618bURYji4sfzmqo6WN0YRDxAptWM0YgwM2%2B5aZQet4jmHB7OHO2zrvuVuORAq%2FPH3WQJl19%2BC%2BG4Qfa5tQHbUXGx58jpq5lxO%2BP4HX93I%2FI6k1PmtEo%2BLONdkLvKLUmklFV2ATvz68fikJSrIa83T0nFkYGceyDNrJsBJodDaYgikOPSAboMjtsJHiTD8C89es9scaqnS%2BD%2BqaT7F%2BiCGXttjUSn4XiBQQCAHMBTkaZRgU8IrOOkMzwt8G3KyNyLxV9Plwa9yhn77fdBaxSjMup%2FdZ6sjRZhBfsBdBt88CG9yChUrI8DkXnTOJ46kPdddf3rYDDgpum9BjqkASw%2BS%2F9yhv93eYRI%2BtgQ7Dp66%2FNwN2ArTJjrrTxl%2B0qSYS3hy%2F9bXe0Wu4hNybGJg4FID5fI00DWt9SxRASg3KpSkFgBcB2KyZOKzo4tg38Ux%2FcIGJtpotvfFNrLLmiH2UvfwAxDAdxDFs9uGdkhxKEMyrifjBhFBi4j6FWNbMFioVcaLOxNyOW4MhnIA8ZFs9i5WE4RzHPgHPyyhZguicwfWQl%2B&X-Amz-Signature=6950f5e8327ad3af6445148c7448f463315db89108196e2ce7ae423840e8c0c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

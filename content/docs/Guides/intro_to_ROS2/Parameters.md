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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHZOYO4B%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDdWfHwhFFeCh62%2FyS3Gk1EGZxPupV%2Fvaf%2FH38vdwzZ5AIgfY2Cy3%2Bre%2FaeHXbCT3%2FZsGKxTCG5koRm8CR3fh2Z8S8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BmQ7jTinPTtgzyOSrcA5yev56g7aeZHZ5xyM5Ohs%2BbIMhgBwfDbQM%2BEOhZNuMkZShWL1zHYE6gPX1G4AIAcMtsg8gS98f0gyKnjyV3VYMXymGpfijuQlYeKt%2FbA0Q2Uf7HVvGp8w4oFVx1mXacT9tuUuu%2BLcPN6dLCKJu7ao6kXZHpvsdtoKChrzj%2Fy05BD2PX2uCrYvrTY4SfD%2FtkChbtQOMFRtE3aBMZnKMQc3Mg%2FSccb%2FbUX2I%2FypXxsRZCaUO5BIA80PMwD2WZx7oGIO6C22HSEwRYdGn68Dze81GM3Vsb%2Fp8GrHt9vllwCLY4CfSo6yY1s9X8ymp0OAb5pDv39Wyq9q1ptM8zIn7mhEYWt8uOtGBh4GRxo94Nu7BHCZ4kJj6g65bO6Rx851xFm5%2BWQQl74MtYTzOKVmohP%2B5IeWhduP1J8ZlVi%2FEcnWGpqjJLqRIYrwy9uT8v5DyMJRc8c0LmuvsVlzHasCu0oMI5kjWWgsezCclBW5OL2bIO1V2%2BJik7LhTgQldsrRBulqQg44RW%2FK5bp26mTdXy5dgHh9JifNzCbspJsD2LwM4bbYoV0iW20Ga6MP2hf2Vud1dtAyPibEKwE8wwg69OU7s1zhBgMeUxYInM5DbLLxu5AofYlYDqz0amRUHhMLe97r8GOqUBy9jR%2Bpm8z%2FfFosw9u8T1Q83TfCme%2B%2Bz%2BnAlQ2KgvukvPC3a6WVc9BBcCnsBmFhIy1Enpogc9%2FkV%2FVM8BFg4exFGy37KoDRohafJF9mnvFtGo05j3epg9e2FZtBmZbz1YhddEuGSJ0%2FpJj3ktH%2FxmhahMxchOcTCK9b4ms29Hjee6RX7FrEkInbQUNLYcCMKm17UxdD%2BFDxmk%2BnJtxbXTB%2FR%2Fbkxt&X-Amz-Signature=861b72e03ce78e02c978278f003cd1b00ecdb831b690fa9424b998dd4bc09ac7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

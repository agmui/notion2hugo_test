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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2RXDAMS%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCqgZooy%2B%2B8lMwROgutNA24BfjTNYaqKdCq1l%2FFIfcyfwIgSZT7BPqkCpZacoxYSsaoEyPlVxPrTXL4E8TQK2MgeyQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL6hx%2FfzABJF6QrKGSrcA3r4uMtx5aGg%2BYb8mgYMFeYwJN09p3QIYnhnyGsshbOSxm%2B2nGzMO0y7Ni0FjUqcWaBFMsy9ZsktQ%2BiZUIWMKPcESDJVaP67ESQSssYzSp9omfaj%2FbKdXqmfACbEoCesENa%2FxjUpDSXLZDNaRoNyl6HbSBlqokGTRW%2Fw%2Bz%2F2mh%2FyG4iKGwZ5Qb0Hu8qco9oKy7xYA3msiKchZ0q7wMA%2FrqGgafV7UP3tgRS%2F6QrBYyKUGzeihC9y7lNdygkqKWxyVpk%2BxpvgtUYqj6fJhLTdu1W9NCrSjJ%2FMn7WQTXLUwtEq5NsQsE5M37kxQLVIuQkPLTIK25%2BRq3f%2FWEKcGZvIXn3GxFGAV0rlCJAQsw12Dz1%2FY1%2FSCE%2B2w9QMdd1enbLtjhPVG6tZzj2CTZA%2Bi1nj3UkRNI6Yb12S3PWZ%2BivlIc%2F%2F2CurTUl6%2BRO2b%2FtFDv%2Fk1dOUgEKZ7r6tK3yDUYUgwnnqjFZViGIjjzGas3HJ%2Fo7uooD%2BlBU5vDo8YyAOGOYqfGuYL4c%2BWk1C074iJuLanom7m%2BcqTQP%2FRhmFGhZV2g5mVVwDIWJP6wGv95Wz4XpzyK1H3a%2FoNSelY3Nf3LzrZQP2UbKKRHCd0noOqLwiSSHeooMO89baLWLAhx%2BcMLy6w70GOqUBxS2wgY9HoATDW4MCqaVqbDRf7Hrkd3yCO%2FG%2FBoQ3%2B%2FxOQe7l%2BsHnq%2BT2SaMQKma0TFdhloPGa3vg81xE8xgEDj0UjTu1yzM1yTDFOahQddFUqxE%2FHN4R64iC9RbfALP68%2FiLB%2FvQTsugvs9dGbs6h%2BUOBfwTH0fS9MwEgbz0CpjM5DXXG0B0AJcwmWJl3mo5ZK1H5c40kQdZr0EscJ0aT5j0BpHV&X-Amz-Signature=0af32de30962f97951db1999d4ba78a4b734e77ca8590656e2930781ec44e195&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

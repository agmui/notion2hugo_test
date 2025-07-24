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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKKL6XN7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCrfBQwt3Mm0SbYNyW5fR8CQw8SyZW4YvPJeQG8petZtgIhAPcvqbfxN0K0eb9xUAshGaKOKyesl4AHtQGQEOEVp9nHKv8DCDcQABoMNjM3NDIzMTgzODA1Igx%2BHgAMgNVrO%2FAI7fIq3ANC%2Fq%2BUD7bPVR0S8CQwSqjxQh2eOd12VGuDamQcq1McIzY3iHuF66bP6%2B%2BHpPVPeK82YVYbvpoaq%2FLgnnvULgnJ2%2FvMdWWQXF7BjdIXty3RWU6D%2Fuhm%2BnmLQRg2L1IT5ZDeTivQD7ImTDouq87KJ%2F%2F7mR1V3JIDtJJq%2BE5RhsPsE6MAKhegZUYRbetT%2BYRgbLs3gLE%2BErBcxh9HNyw3NHCwN9HQdxC3kIKEu25KZdBAVggbKfQxOJd9OpWhRomL2493Dcgt4B8Z4n5qQ5cH%2FOnbNgvgKiJpdZXScIucpGI6ZFbywycJY7JKfwxtn9%2BxXvE1G%2FriwvhVcT8Z8O63Y1%2F5BtEp6lh6jWiCmMgulAYZifHJxB54YCeGsF227Dz%2F6vtfjyRMAYm8w6m4qtjR%2F4mJryGcAJqh7gFLfhf2LremFbY8rC4caI1OaGpxvExRxNwb29%2B9%2Bwt7F6CV8eNy%2FkA05ykOmJO596obnvtDV01uisK84oMSPKZPM67dynXkkdC9T329EzIuFhkBTpyeLVjzNw8ino%2BhvBnwlOOejcTill2wEhqw%2B%2Be0SwgVFG1zrEe3OWxzV%2FPpGvc6EG%2Bb26th5hT7H2KrZY3kQSzLi8il%2FW%2BVurSx4e3wCh%2BENTCj2IrEBjqkAe44FWl3RJbNvWHUmebB4Wv62wyO7jGlgQVrhxEUqRulWFMNgFHJWtyjYcRspwXozzlbPYdeWQ1fMvOacbwvWCjWECmb4bV78wABZfWfNreQr%2FwkuC2JQpGOD66r021ESKr8tU2n6goX5z%2BHpoRncGa5bK1kpp2HKZ36P8BigKcaPXdO%2BvDTtc1g%2FuGB8tzLCw3G9zshPOzbMp91r%2BZtH1GqHqOF&X-Amz-Signature=60dd3e123b8e0104ad8925f0be34b43bb32b3ff640cb53622dfc0615905173df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

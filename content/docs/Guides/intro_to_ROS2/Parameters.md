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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7APVOC%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxAJExZFpVHyTYMuXaMi0jSWNnp0N%2FCFwLBJJ0sJ4PkAiEAsZH5rZUu6G%2FmbCWWyUHFXYEROQsEjh2YA26eg45EYeYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChvT55e%2FNWo1szJfyrcA%2B1P8y%2BCqVLyztUNgzJxQ0%2FiOPM5cv3DdtCTZkom%2FQFr6RX9jCDCY6PpnT6tT1R11bNtZoRqv6A0Nubwr3IPJ4encPQhz5739q7FTbeUTxM6TRPLftYl8UU5w8PN2vIpODuDPGrvW7DIUwkY%2FAm55lW23bslGcQwY7AJmDdt7mvgJxiCh4cQBRjkmWNPAJIk%2FVKqpVxxg08s3%2F9oxBOVR25oTKNHxymuiPCTcgUa3lyzGt8o2NT2T8ZBZGOzsYPkwCdL4ivssPsU10WJWYjAy8LY%2BpCxHmWHtx0emqa9%2BTsbS0iwhInHeyGO9c1m8Xwv7tvGAYq%2FBJXX3L3buqfQe%2FxbncBBtQMiVBnv%2B6oNQzjYs4VonKjC1CIwp7p3KYVztLO1jSmhghKD7w%2Bm70ujyjyajBzO%2BLTS%2FVuj%2BMWj61XqTkDt5RfQgZCt1q%2FVNaadzVvR4ZRZUnu8CRWWFIfikWjfEfie52bqIwiMasyc9ReJNTRzD3TC8cplsJhNlejZONj3D%2B%2BcRBQCYpMx4MO2V3EDXXA58nenWwGSG0YQCoFrzX1AzGr4xSJrgWL0NhA2qGNaLe7dX9Q8zwFZQOm5VoDcPDtIahOvxWsib%2FGUf5x5mCP8KM1v2%2FDP7c9EMMPF%2BLwGOqUBN%2B%2FrstEhDiZcvJ0w%2BcQS3D7%2BfnZArqqA7Tb3vRwNnygfeMI6bmLh5r0Ax7tPbILLijCVoCbQjZdfoU6SpQwhmI%2BHe5EIEiorDuKkQMF1mUGvuSV1xIKUitqI4X%2BxkGUmgPupX3lsVXddQw6bfGfBrR0s77mUCbGHHE1AqrddD%2BR91zFPOcrN3TQqbWqMXa9ySHE04T14sIKJezEqVKvEtUXMr1Ef&X-Amz-Signature=1ec114c511ff90d5d8d25f83d6240729b9be9d631afd8e8471f657b1dfaa7557&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677UXWFFK%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDL3T5raFRK5bE5r6RezV%2BDIrwQmgGe7TZMMo%2BsAXVvsAIgcTk550dwT%2F%2BCqMh16Cqk685UG1%2BdVeEdMsDfpe1a3%2Bcq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIaWI3WZ80hFX3bhUSrcA3T%2FcOWRe%2BZpnRZ7PifYQgKXgg1zYu5zQtHMtSYc%2FFK8nCM2kOzGJzxtBi8BykEXdixvaIhl4c069WZ9hxDqLEonVpkn8d9%2FlK9GrF45g3dlwCrOzP46fHtfJJKTrfwbWGPcU3jr2W8STWNWzkX6TBYVuuXJp5IYI2NTZzuGohEnDxdc8yupS%2F6l8LsripJgd1hKWWMj8EaN1NWsqQ0qp0wGBWohCfUb8d4mUcuNHYnwkw3eD6FzI4GYzIsYsj4R0xvwLC8zSW%2FxUBvwZgJV%2BQSFyuJg4kEl6pwK9C8T9ePzX0C49s5DAABf8EItpLN%2FLGQp7kJkdaTVBtJdjMQRBLo%2BeySnja9mmSh2euFnQkFcq%2BiIcE6s4Q9M5igf5Smxxunjun5n5M8J%2FklAtrIq1QcsMLMdBSQmGiYgr4y1z5j4R%2BQu2enp7sc9SoIni4cjjqmCZX8%2F74OdAjqz2CcOXOkT34Z9hkHSZ%2F1TCxeg0Vrl1s0eJuxYTTiIXQ27wlFBXNEUMeVRlG8vgbNuDwmwpSR1KXEK1bQPXXcbfz0PFKvijhWSXasbuziWX1eaQfIa6UbmM86fec7VeHoivhSyKr6P2Fy9hrTwYMNrcGm7DtOhhqTnUR0hBEiQci%2B%2FMKmg%2BMIGOqUB4Ah5CT9Rl8Ae0pihPusf26njx850QrpoD4WcFznfrNkyrxioPBvw81tW9%2BByULxPc45EHt2%2BiNklXzR5UOF9CoIjnytDo051Pm%2FJ6hAqHq5YhJSPTK3gLMDWu09kJFrDyi9Nt3pWJ0c44Pjx6aMGW5t6dcpaAdEqGaQ72H4BWtrsFN2QDC085WBeVu4r5KevfOFd80iT2czGuHdImrarkqlproZM&X-Amz-Signature=1750c2ddbb768a03d872be4f93bae80d7428bd69db4fc6ae203131a317f0f0ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

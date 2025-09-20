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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYQ6BNYJ%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGR4%2B0R1sL4eQfpG63pb2qJ5S569jfnU9Yfq9PzBoleQAiEA4IyCCe3FWhckwNIvtG8awAr3ZdyyxGJnh11lVY4mTYoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOggzmTuBZdI3Rsc7yrcA4uQB96YvpnNPaj8etlhuC2TbCL4MuosjaJl%2Boiacc3N9vRcax%2FO20UbHomBoDW6w8AcPuF9X1Cw8GF%2BqSFL5%2BEKdEExtP96R0IFigDoaRVkLxLAK6M1vyUOQ1V7wUDgRaB69PylFPhP%2F5%2BziR4LlDRDIny8sDLHgK0XYGRkXuRm%2BRY6Liqa2hfZ1roKlMFQenXkJbZ52CBT28sE6KbYZ6rbzrJlzx617MXWLPiUbyfYymUrIrBSjk9sxqoQUgzCMXvHbAASzK%2BwEG0b9%2BLux0ifk9%2FIxGotGfOTYUtpsZHacrI5h3zvMJsPJFQJplbhDA2VtdS0pg%2FGcX5%2BkB3TwGlxAg5mQik1If7IJzES2R9rvF%2BMIMm%2FoMyUWXe2yZzrHRkDyfYrpBNgdLe25SiZRSnTEUjsV12OIJ4bBMm34MlQqMuZWCZP%2BeWSSy7AIJoOgYi3gpYUENv9YbT8%2FdcLXE2EVK%2BSVSRabqOgBQ8rmfPUOu45lCzZs9WjxlMJQmarBpfSM%2BjPwX%2BT9oCeeNMaMqo5Lltiio%2B4obtAH4Wmln1ss7z18pA%2FmmUhRJHgQ9El6%2Bi4vza02Y3OjrrPUXcqz2VV5NQCX7EN8VNqfXlRaiWuBXIhPJgIo8lgrClqMPz%2Ft8YGOqUBG7TYauEySOhIdDn6z%2B2VoQK5GaO2kmJIK3g9Fuv1PnBllXRcA7fJU5vweodGpQWr5kZhWZ4oBa8eJke905jZvsrHkXzci%2FPf3E%2BxXR%2BByLmrUIigBp0hUXJSt4VEcbjyE%2BsIbH8lQOwXEzPyDlhrbIZBdfS%2B7tmH8rrvz9z1%2Fh%2F%2Flj3yln1IYiyPNmvGqYc4UAeM21Wh3vGw%2BLj%2F4ojI%2BHjnw5oD&X-Amz-Signature=c87f30cda34f8031e7a55dc6f46e42a137014c58b42e0f13f917347d9ff588b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

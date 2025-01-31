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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG4S5SGP%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4mnvCVhBDq5%2FiHJAZ9bMLSbHBTMf1W5wFDauHayFb%2BAIgCm0DJQa6qAQv0Cm0ZwbLFIM9O1ZUQQ88eREWU%2FxedzgqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNESQI5nxLgsYmNfsyrcAxo6E0rZulPy7MUTwIgCELBJNC8UJa0vgKnXKtpa6xXb3XFnl14JlcH3ghlYN%2BP%2BvQn50qpMBAWet6nokOJ2eOisSKdDCFKUCziwb22iw3Anl3Y5MC%2FG%2F32ewFs51An05o%2BrnnQCBQ89OdTMPrFskokbHNY4ER4dkL30Z9uQfW2zFbUymv%2BfqIA1IfEx32lnwZxxyMBXPbEu4OHcWPRNWChWrZ7lThrnFmAlRNbvU1Gx2GGsfvJU9d1OR71SdZJngyod11s1zQFv4kTNoloz6mCrglWeRZhgcG9i6p7H6FiYEN3pFeqKj%2B7AOKC4RrMCIgyYftGj%2Bm925iwILXb7uIkA%2B1OYX667gc2Sj4dMuqAOKbMaQJCttAQu9niuGpIiWZaNy2GTyWrBoNXRT9HpLHt7O9KRPAg%2F3M4lDOyiABzXJhxgInGQY39Jy8vrAJYdxTJsUL%2FumgDkf5sGXYq9NDgFYhGHdSvUZDb2gcq1mY9FgeaAqqCsqOe4dETzBWC9DrvAz0qlVigqhyWNsYNNYFONB9ZUMI6O0LDmH3LiHSxVci4WQVD3CJXuElkn7I07DV%2FGp3pdChes7YsFhKNjuoMsTcpODAdEIdg1gm%2FBvm7AIfyzQKKKD9MIeO7FMO6I9LwGOqUBuzEVq0Y6AWJtuwhdH6w8BQAyJ589dgHc1vLcwaAR7LZ%2BKx%2F2%2FsVatGDR20lsZTT8DSbi7oSO65RDzOGplu%2BU1oz%2F86Ut6PtyWZwtDWYjzg5GDB0gGotFFCCK6gWTexWhKah6W6eop%2BucGBm5M5i%2FM6KnIcyfXykWXkPb4poA4onLJ0YP7N4pkRsxMWYgWjC5OLj8aYrPO3E3y%2FGdlh%2BfPPUZOJWX&X-Amz-Signature=17f61b0b476fc3bbacf56c57624ac1c775b80e4f3dcfcc37a2fc5808615de3d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR72K7OC%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhGEZE5Z1a5d1PRwm2kz2ANZOpmJtm1aAxfAuSkYICUgIgT%2FgqyMy%2BH4hChvQqoW%2BHZUmE7g8KsTEb8vv4cYC6Fmwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLaWTLUz7d3XhAljMCrcAxiZXEHuWoFIBF6M31Q8hl7bicjgFYh06YC4AhSLoAc1yGphm6ooVZID2BiEtDOKWq1RN%2FVMynof5XQHVKCv66CJd7ZoOaBLi4ZWZVzpk%2FdLnm3taWqqC2iJub%2Fsxofm65a%2F2BTEM2QdjmRZoiDXXU23EOUWlRvAvqB8DeSgJGQB6bwgqHmKk%2Fc4qlfOcj1S8WZPRs%2BEeY6EsBj1goeh0Lq03E0H57tWMB%2BbbURe8kIJjuwAicmrPpbf%2BkSpq34I0a8IXJzIJFB00rg75vg1M28WVVo27fSfXN9vLAgVffxQNuW%2B7UsXrjS3VetV9iuzuCCrrHE35kTFU0bETsqHnrJ75fjaykyKpiqzhVOaSx9KeqFATM9VWkn85PpxqsxA40eF0h%2F9gHkEFMcfbncbhGYYivbpE%2BxQuiZTFMIt9NcimL%2BS9xA%2BU68LZr80iqvtv1yL9iiZEGP8BFm47yJBOSrQrlQ%2BA7cSoxD1wtz%2BTt5q2yZORnw7jnUb7KaywUhmUHFMgoeEUMomqO0MWL6MHxeyFrSPqqVqI5%2BqNBJ4XECdIt5gOlvKTFYxQsJmqfnnp0LoW%2FaNEvDJ3qteCfBuUxF881s%2BOq4%2FSsM2VAQsItqNyY8guPuB6j9bN7fMMKjdtMAGOqUB8s%2Fce9mA5g0epHr4nwVj4E5AWBdHRUZtu5mXnaSmW91YFYN%2BnQYM6V1K8JZjMHpe5Xz2lROf%2Beekvx3X%2FLnCRfXIQvcLbLdV1UNdhCh21E1S4JpCdygchtfuNC3HE%2Bd6OgqShBq8Vx3FP4JJOFhyDCsaYzq%2FGVgM5CD3RqMR2Zun7xuvzsnoB04ZiJz6zS511TgL%2F4i664xGJCaTCEultHFw%2BWPK&X-Amz-Signature=7a69b596a5238f0bef4e0ddd097fe38da26c7712d6ea2619964adbb3f509c8ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

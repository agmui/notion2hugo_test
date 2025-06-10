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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDOTCTB%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfAoUc7dJbQA9lUZ8S%2B%2FrrAacdoL24bxhUi9ay7kldCAiEA%2F8GVEMb1ZW9G2gJIBETsltvYH0wooS2qj0ByNJ80tlUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKKKIfH96vNAT7lWASrcAyPpW%2BcE8GObED9CMi4j3WktPMnfc7nP9SoKPXXfm5d1H6nK%2BwKyi5anX1qHxBFcK3h9oTUD5wSXCrTHdx2vqqHvCi2cZIrOIinSViv6CB4j4UsyoAeircioOPygpIApEilYequkNZzQGYvJzVwlwu%2BDsP0fuGEARX%2BAyOrpj%2BneD9zOgrFhJI8RAFcImGlbTy4dM8j3rcdXf5NeENFEbuHGCCRec2iZRnF3Uvaatx1AITqtlXCdcXvYJlYJA2MqqWnDpF%2FEBL1w47zjlmLPtu84vKf6%2B1iGMLj8d%2FSdXNekVrXJmzmORDA0J9z2YV6KZcFBMhT4ZWLuJ83pT6ct%2FBX4flfARsm3OZIvtNx2ZO6tucLpXk%2FeDCsscS0Z87Eht84I%2BoFfEEEX7SgZNoAw%2FXkfPVRwkeXZjZt0fTMm2wVEm%2FJ%2Bs8jIEK5MyNZA0P1CV9Ha%2BJ5gYo2jisoqRlF%2Bg6jcPZElkJr1EwdzFQ6k1JsDAwXk7ityOb%2BwEiqnnbXn6YPEks%2BVBa14G%2B2ML40TEn57djczGipj2AyJxWUlSdqCAj3uVncf1dGLiW8OZept%2BcL7xH5wNQb297RxBo4HXkEkAkTGOrJ6NjcVRcHgGmDpqxzTs7Gqaw82No6rMNHfn8IGOqUBLp5oeiloqz4UFi1QhAk5gaeJvVLPQd5KpaIT1VFfUz08b9eDXJZj%2FvCwLmHrJKbFzwwfvSMr%2Fi6RTtv7TYXUounjbSoK0oDVkb5Y7CyOijXdfDtpUXY0PHM9DRL%2BB0FkWUEfxb%2FEfM83yhn7wn4%2Bzf0LNtx08oJIGcdshHBNLvPE%2BdceZn1PPakPU4aY6aELphD%2FVxRJT%2FpBwbUoOgeuvR2jIUva&X-Amz-Signature=ea8fc040d750b0ed2f24e70590780f2b684198be9ddf1d406ff749ecfb6f6373&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

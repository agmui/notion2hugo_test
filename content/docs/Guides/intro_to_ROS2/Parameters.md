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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHCQX7G3%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDqhLbCdHegPWsodw712uCRR6lL%2BcXXGc78K%2BHquYid2AiEAw%2Fwo3pWDb7JfHh4VFi07gZ0iOTFRvqN23ofm0ZMi6mEqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSlPRBgSeLARRgkrCrcA5tSyXPR3K0VxbVW%2FKu%2B0Jjbw8NVDj1CIwBe0GZ4m0G9Iz2cED%2FYsflcEUPZ0LHAtZ5dgWRk32ODEG19cE%2BR44wOikzAqFekwZmkhP6g2%2FAtSTYDrSMjEhyigMBBtpmNbY%2BM9W%2BUJGRKnWliu2it19a%2FYuoCE53MxbFUzHRnXkQcspGJcuDL%2BevxX%2FMBVEDklzQrLv1mnI%2Fo52EFEAd69GVJu7bg3CHhR99Pum6YYpqJQy3nMgRYGmeRPndgyUAr0fuJjPiVgjdH5OjcgUC2HyDxL3be2Gn2%2F84uSLzR11X4ieGK0sfAZoGpsrgcg40iYaOKowss6LKVyu9IiNZOAC4Vgvs1jd7vQa97RrVmS%2B2EnFZufrsNIwC0fk5CbHYAGUe6NgtUPob1IEtlDBG69aAi6ki3eBdMqFGnipGdLtRjj6MUdZFF5lWznG4A3O4LQ48UFhNq1WbBHkQkewCtgGobzZsgUW2R4F%2BJ6FS5k4zsvu4BU4p%2FNNOJVpDKvwjzbDWLsxa3Oi1PiVoOAj0GDeqa3LzZiWha4lqDg%2BaKgFi0jJnLtVPYOsWEQhtZVu1D9P49OF5mpSAHSzfhmkZsEEwVdyhjTsEt048Ni50SN30P1f%2FFERstUt6ixGGAMIXPwb4GOqUBr7olM6DrG%2FES9MVPDJ1aNQWAr3X3yFTgMjNlsaXAWBtyxHqFnkYGL%2FgVGENr3z8wX%2FUttAdmbwxA12TC7GIWlroPopm3GBVlUal1%2FZE8FsgFrjBDTvpfK1%2F3lwupBgrCpUbDHCUUGrYqEydpNMPlgQL6LRvjWaxshi61OhUvwbhH%2BN81EmqL%2FvEFar8ns%2FmYklhSftbuvd%2FpL2G6prJY38YmF8xh&X-Amz-Signature=688683093ab6ac16436553b3c16d3c235b7cce752af93af460b8174d7d84e679&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

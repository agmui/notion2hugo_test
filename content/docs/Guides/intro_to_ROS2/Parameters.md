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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK6FQI63%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCEW%2BL6GBTOHglppU4hSt4lo5Gyng%2BMVU6LKON19656GwIgel31xnRIYtMeNxxRbm5%2FvFDeJxVrzUM1eKb9k%2B%2Bnf8oq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDE6WQZGQrikJhTd6PircA3bRZa4MAnB%2BU6SyiU9BPCRsUkqoFaGQVRCThh%2BVyVwTRKRqBbHiNFz3%2BuN%2BOgVMs79xQgnR9YADPuikcYZ0AZBZ2J7feAFvzY4yPvIfRacJssVYStSGjBRLalodw79PKrrZDqgMKmkg2fkP5Ds0FCzZXUdQP%2FNpwbV3gh2H9qMTRljTibjfDDyCSILc7VotRjGkElFGVHwkdYNxNKOmWKLP57Nwvd4ONobRyL2kHxV8XCM65WXmQFYLvf2a7P4zDmZwA6MrlCooRdRborcm6OS21DV3DqN8svnZDzbVBtB7Iv7O1Cwnssl0qUFBr%2BxpVLDPMPJvWDImKDepXMyU%2BF5Vp1no4l7SLW7R59vDyC5Oes4aeOissx%2BgMikFu%2FTkxO4Zeq42TyCiM7yOnCAhAnWxsoFHJnZC%2FeSwlkO0EnD5kxgAGvEBGVee3dui5cMl%2BqtmVoSMKOvL9FbL8tgeI0GLrVVYeRBCG1QFDuA0ENSR3Oof73bWqe5oJspJfbDdH%2FxTAx9AfgorE6kggkXxXO8B3hmV6GPCbUUBgkWpOtUjqNJu9siIN0GSEGp9gkuXxmHfNsugplCJbgLjwZiuK1FHRPwTBsA37nJ091nvdLIOK09LtVf5wT2%2Fq1c1MImSw8QGOqUBkjaK57zOZ5DupHToVDpBCIIDHp%2FshmmQaAMVKFj4paIo81EO%2Bhm9fOMfPPiJbFau7OWRz558CtWHrV90LgLsD5Jb1oHS4IPiwjsOmYAcp%2Bk1zNz2QhrBldBXSSvh09FFfSfUfmrYVcebYrpAn9vmQgROqeyp3tmDs5J%2FiB7ksLqXYVS7mjhXXYnvu0ijzjNUPGQmxWjoJQy9uahxh5Qhx%2FjKEQ74&X-Amz-Signature=38bd3a0ec6995e76f12ecf0dffeae9142cbc15f1e84c0ce66ce51c2d912ec69f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

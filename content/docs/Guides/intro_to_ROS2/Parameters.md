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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YMA3A7D%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCWwD0NZVYFwyzMHuPVUr9mLvb%2FFlHYIEgjJfVuDZQflgIgRkxU4pMW5xcf4Ui%2FKCMVHrwuKB4UjOhrw7tgWjOchX8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvD%2FCUot0RR%2BPFPyCrcA08HjZSbLHVpQ6JxwE7FtJ740GUVMAmJ50s5gdVL22Amjn3WF2pLyzSiin%2FORYW8zrthm8HoG8C5Pecfo%2BNlrUCCz37LobwYEwURiWFFXddjp3HU%2Fm314JISv3waOlvfuW8SP%2BmVlcm7mBXuj8D4%2BxG%2FHALOUSqJ0Vm2GrrlyplZJonQT3ugFFMKiie9EIntaXJpPCnaQnbw3foAgx1Vix7Gb9GKOgEnNDuL3od4SfKyqwinLJPr1ip8IXipS2FzaOsbQMYGjqP6KrnXewpWEieuezXNQad5wwSKfM9fSsp4bwj7O5OWp1VB8%2F4dhbAqgMgPwfnvys31wcNTFDRzbM22faBxeyxjmwXbmgGok%2BhQ0qx5op7LG5%2B%2FzQvos92vTuvGZkApdLd2EzTSyZ%2BcWMUuNUGdf0YnWs3yiO8wRVcyEer1TOsZfL73yff8yQuWi0Pzz73x2lMVH3OFUWRTL0ZlluikawR9fzZxLhvij1DFpCoZQVH4bu7hBkiYk%2Fqb8guyYb%2BoU%2BhhFSkxqykTyydw3AzPhR%2BMXwtcjw4HNpvZXPl4FkT1FFtrGMEOpUJR36zHPFDzToAmMi8zigT%2FUu0TyKKmORnvwrpB3%2BLshIZ8KzY2KOt%2FKjDjvpdNMKi7%2BL4GOqUBvcoXBQ6i%2Bnnx5WHjVx2VVMRTIzWuTQwQ39whsWQpab%2FgUWpk%2BT0%2BW9sWKncbZlSe6L5pmQkAPDY0Ot9kgZBJwkYUbPi0w5uIMD3ciLDQSBoTIFTvjumdvdvAvL6DPkwYG1gVD8Xtv5IVOEwY8GEs5l5MEkUDSe4WV%2Bqi9yNwUSJ%2F7fp0bmJGaGWh5hBuPDBcnta67iNA4zPKAYReCYbMW3LQ2C3V&X-Amz-Signature=2368199677cc7c8d01349617f43fc15b194e90e810c8b953ed422ac8f5516c72&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

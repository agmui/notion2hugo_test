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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7DLWSQK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T030821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCJXlYEd%2FGDgcksFM6u%2B39Ge%2FgkjVMK%2B9CdgnlvsV0NKgIgOVzVrpSIGXntDol3mZibbiFXtwm7YDG8VLiSEiUjrwQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDFU5ND8aq2L%2B4cewSCrcAzx5v4pxG96G5NifwzGFvOheL40yu1TPTgamFTZh81BavhkYGm1SZE%2B4T88DgV7kGIRgYFqXesAL05ZJXs6YjSIZD6g1Btgk3XHwG2JFDpujoJOr1YlSRYzyM1rjv53b56BnB7HUqqiO%2B0CcuqMcWneB41wCVdbHvxuyGKWRFvtkV5Wa2V352hkxc4II4v8EW6R5GHHIB6Ad31waqaxqqBAkZWWCQJNSFs%2B%2FeUXD4V5vHUmCmsZmPMhejrSEKztThRtjGPerxDWP73qSM2eYWQaUrZ4ajl283h0jPHWKbPPgXGqCH4iaOuiQMW%2FgLwhDPJenuGhpodHT3S4fz%2BRGEysGPmmxM9COdY5ZWc8XrrlutyAJqcz5oyNzxdvNeHWPGRjvP%2Fy2pQJoFj3mQP7D5lFD0xBJvwHffV%2BN1k9jaPxjUyUdozVlNdACnJi0yWc8%2BHetFjIhX%2F4RR3imHzWU4Bi235rzihKxIyThtO%2BBfNZ7rJlHU4rU4p%2FWsUVH%2BIHLY4%2BkLLrVJFuYkzbKdlfihVvAPedQoG%2FMLLXaSc%2BX%2Bg%2FwBHQSW%2B0RQUimEMFyHiNjk1FcKc7LWBjmRzKk1LutjpEROAf6OVMf9mbl4dClli7wx%2Fsth80zWl4v5TE%2BMIeLtL4GOqUBKzWO0gKGiJUIDRCLFVIqaEeI7Apw34fnMZgr0ycPGXriFm2I%2F%2F79DZM13BMVzlDYYN4PfhHGHMdXx2VCQjWZJamy1otSloRnowNB7Tv7qm%2FjhaTVxLZs0rINKCNiVcWxbIYn5ezb7ZF74W1yy9fFtJI%2F4oydaAe%2BAZKJW04cVMGP%2BUCVaFbocwql3BLRqXzcrUDrq2GgmWB2Ie7Sb7YLSMKvM9Op&X-Amz-Signature=ce3b576edb2a16c99fc7d5e9f9a0d4409a56d633025ca5b00bce991164342493&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

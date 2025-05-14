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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNCBUO4T%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQC6%2FG2XiokY3RlNUtdU0g%2BSNjcQz2YU4kduVMG6N90ZSwIgSHQgpaioOXPmz4sQNGSs8tFf4Ur1s2WBlF6Hv4XMzysqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1LaMsVN0tlSVxVIircA9Pi%2B6P1XEziwhwr8R7aPCDjUbU8DV849FA54eP75vPKClduO1QJTrUC5fWW5lOeAYE8toF315jptu4%2Bu78WT0prV94Nhi5hQkXDdgkoRv1DV%2B8r%2FEH2f3RU3GhNFH8OQ%2FMaGoLyeL7Sjo0lHz0x4JCZI8pK%2FBtSltAePRJdrvG5XItrWdWBe%2BK0qZtxU73fj%2FvUwZ5uJcVM3MwWFKEhSwIqtsELVB8CP1yNLWng4HKs67bDlcywGlxr7R4nPFSZHx%2F3e5SdxopmsjL5Y%2FbCPNyDyBRSoIVDn1mS5c84MRTUoKFuQP8iL1MxunZweIkGr1stpvl2zGNnIKczQObizkthf6i3MvBzNM15wWdMqXfhyFaobG%2Fj7eHlArcvqS6cUAUgURKAEsQADP6t9UQdQ7klJV8gyBzs7bguucKOQHGEIyacfywbPOyixMdGDRGciwYm3Wj7g5%2F534IiMhBPOsl8%2F8hBgqrbP6UKY%2FGxl7FMdjLtCstpdm%2FxLqI5vIsCUQ6LcsFdGL58%2Fz%2FMdVf8L3ClwkSkN0VL4myRzo7xAWzEjYOQO7FKASRMOMeUYh48xBNeGpy82KF%2BRwtohIuVLkc9sxSZ14PZGXFeBwU0HFUrUri7X2pI2DoIe3xCMI25kMEGOqUBR7w1AfXrSD8Pkaz2BvBox%2BQ7%2FGHxM%2BGy%2Bh6twktOj1zG1sZsDiDfzOfOKEFTV7KrnC%2BdmucduZ%2Bu6EgtofcJ0zH7G%2FfP4tZOPhWFEAl8OphADk%2F7IJWjZvumV69jzTJi3CxJ69%2BjJKaB1Pqxya2Xgfuu3kWkNZUEYLvgn1NI3YzCVO%2FqQVpGUAjCGHAzebOQV1Z1vdJXkLfNMro%2Fnif2DZhCUXaI&X-Amz-Signature=6994c27b118c961096f4d1e171fe50b75941277df3f28ced1320635887788241&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

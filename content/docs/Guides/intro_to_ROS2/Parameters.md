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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKY77UCT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIHGJKY8lSOzotTWii0mwXaJbFOTfppiz1C91G8UuehraAiEAlKoctnkrkb3dqtbFjA7lKAgSsMFVp9qTXHPqAhZtK3Iq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGq%2Bh1sUpSLecSXtFSrcA1wiBqFFLjJWz2pYpqTxEO3GSrcbPihPwPTBqMf5mX7%2B79Md507ew6bwms%2FJCCcW3PML%2BrxEFl%2FG4%2BdunespxgtCl0a9rdUIcEVKKH%2Ffn9jt%2B%2Fhafk3YG%2BykhzCrNwhNckQhXfrPEJzWHqOPoAkbCzD5CGGLhXggphcK5UxOBoDPfK%2B%2Bt4tFz1yXkVBOQOHwTe3C569%2Fl%2Fk%2Bymv0wUZ4TXBdxa7XVkfXDHxSyDsVhzzmdAfLsMCFRsL4%2F33mgSXDi%2BhCM1Rgj%2FuUnYaY%2BywzhzkQZaau6FNA4MCnW3unENg3kR5jNfEPO0WDaw0imjFP%2F30qQqOUwBCeY%2BOcs%2BpPp50fI3cdL1krLwfhfZqat8BaPOCrlApIV8GtFxL%2FDihLoxVuCiBtn0%2BLCj%2BW7tJ52A2Rp1MwpmNyr4OunlEjfdoSfL1bOOy3gS9oNvryzSZ%2FxWOr%2FjI51nLHT3tsOa6wt3HbmFpI6X%2FyreyhwkdLqovvMR8xcXdL0V0mEd%2BGMhA1bZFw5JCrOqHMSY2Bzexb4chZ1YOKIx63YT8j9ecepYmQBo1NlZhQF352xESOBQ4uje7YU7EJBcFMGaaLFD1EDXW6Xtl2gU9CYJkus7Q%2Bwj%2BzrMxpanUiABoASRm0MNeFg8IGOqUBR0JLoVmUvV43%2F31%2F44cUFLpYTJE3whuFK0%2FO6Cve1L5z5pNYmcGa4kWc7NEcDplZFvu6W9r2AgGseb%2FEL1nfK%2BuVkw%2FwzoICpvO4FsKQmbjxCONY7oUOZkMjnJwBN4X0xcDRgn1BzUxkkAoP2VxlpQdql%2B93qfmVYYDJXbegBoNwuA7x1CKkkNVpoDOAXnts1ucr6Hstt93G9UX%2BAS6r%2FGMoyN7W&X-Amz-Signature=b6e3bbec04fbd8bad5494f06e2e5497278e6852e7cf4344f4b356f0c9faa1e26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYEJQZOU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLkQrIXqKYwo%2FIOuUzzQwwB1NzejgFMbjwLFn0ivnI3AIgSJ1vPfrOaidy01dzup2Lx8nkZBw8nFAQZSIGCIqg9soq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFjK36NMs6p7ZGfrYircA%2BuHQn7%2FFoTiyu%2BVfjDKe6%2BSKUkSoDw%2Fi1u3pExlRb%2Bo33zCn18brNNEHQm0s7lb3rXaqUOobKwybbaKP6EcVBCC7dwd51T%2FXPVUb2yUMC9pnE5%2Bgc%2BF7120WtsyrrWGowm7nDQwrZVCEUfhwiiB%2BK4T4H994Nzr1SlmMvWcFY9VRxuhLnkibbFgOVbYgz13LAobvzScijROBco8xEYdjnLSGdnKy%2FxgG8soE4ichKmt6OlQirupBjynL811NO6%2B9I3ERBI6MKPCM2xeRT1Wk8O8uq7Ve8oxT%2Bi2Dt0mEISGf5DtoEoWKfoao6y5X83aKqqxXmYlDWxiWZD7z0gQOusZYVqvYXfccbQlBtw3XSUIgNJKUToLHX4Qspu7L1mU9qRQVz7M5zmiprQu2W9qHrciOL2hgUFH9oIRq5Wov4T7y5kOCoRhKBmFTq2inPaOI%2BEKr9fOQBhgIAMXwGo8gCR31OcnU%2BCoWmZ3bsE7%2FN46F5OcTRGbfjZW9fqINWUf5lZpFXkOBduEG8C%2FkVNJTf27VS74VIYmgwB5HQvIfzqRC5GXF37ntL2poMgutzJGqt0F05sPpOfpGb7a88R%2BnKw6xS2sNfVhKlwmkqblegg6k0dVzNdG1jLQo%2BuUMLvl5MAGOqUBp2qT52W8uSG7EgWZnKtKhYLbkI%2FjHvmMOJIr7Di3WypiT9af8lTL938fy2Hak34yCgJ7CZ9ZguBG4fof3APwXCLfPSpY93e2FCRIx18oqQ9cVPc55t50hJ%2Bq79uoLZZGH1%2FnsN5g5OYgSlA4gxOHelLGwA3%2B5GNSRUKwtoJw8Lk6znHEJq9VOdZY9lnJ3GsLLf8Ote7bd6m%2BC9Z5TUZZrYzzX1lw&X-Amz-Signature=6829750193614ce83df1db78b99c698c3ee10ef419326e1c824ed4600432c30e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

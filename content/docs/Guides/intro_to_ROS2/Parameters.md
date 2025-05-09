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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGD5NIEB%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDtTE%2FeGbf8JZe1gbshXLelGpfPeIbCZLnRVmXQrJxMAiEA%2FIdvJkxlyzdQsBczhtxleqejjUD7PzyrLuQac0UL%2B7sqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BTOnSelhPxDHFNiSrcA3IRTkFLdNTE5N0tA97ZWSYFE4JzG4zW4ROJnYRmiYzf29HontDp%2F6J3%2B44wZRLQcBIr2W7iZRir38HcTh32kU63BITFpBjMeoG5sr4PipW%2BIv8vbFVaNnCWkq2aNVAO%2BVggGLqLiZ%2F%2Ftone1PA1yWNZLtSmiILE%2B3dGWmIdDvk5BAVnUMlX6j28VRdLAhLiLrZ9lbfQ0LzCoJXVdJyKJSRXlYrCNAcwDROggEd39Ch%2FDpRKyCq9sUQmeV3iU8YyUSobIim6oVja3PuWrtvzqVMkdxD35VrBBcMs0hp2%2Bu3iaS76UGFmSnSzWovjn%2Bkzj2Cfb7%2FIcBTXlPc2TJxDYnVJ1WdaW7Z1O%2F4fxP%2BmXuA4OUwqS58pPcjnDiOhtsXPr1aVoEkvCBKMSmXZDkC2g9KEWOG2FNDkhYwrAEZUexHjWZtkhKgrBm4zzrfSFVUsne3Ct2USAgJqAwNUrnqHgRoCrhVyoLDFnOoF3eCrMGHtEpDyLOxC6cngnXBfVz2%2FJLB1AQnmdg6fv5aMX9jjJZ7SPL%2B%2F6m9xYt9P1q42FvZX0G0P4rctUDTUZq6xK3n4F4wrDSca9eyuFYqs0d1LuAGcUpmtaDa%2Bu9GhhKR%2FoGKG6qy2%2BxZbBRS3OsBwMJLY%2BMAGOqUBmspWGtCSccVWC9e6eHFQmiwKmPYhjyZHR3wufsxpmP%2BZNzKTJsiGe0c%2FfwrkJxXaQu7OR6dJqE0g77U%2BwYcrKiyQCsWRiZYgXuICoGJCpEolnHuQLfhYqFdprBL8%2FKDdKp3vngL22mHCaIy1aetB8o3WQ1FCwgs2qTBP8DGfRlJbVqItWXetH%2FNNlP6jNJc3tcHS8R3KJyC4HVDLXLAJ%2BjVTUS8h&X-Amz-Signature=11d7f45811e0b8198ec0e657bd4b470d6af9ff34014d481912da8281bf9416fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JY6CQON%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCHQX3mbxKQwwFMV2nPYIIGp0GNsr8SUsJ4HXjdsykPMgIgZ3YpdCUocxfRWScype9OrkWkjCWGptUQFnMQYxr4XMgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQWpujO7rFlDQVWNyrcAy0KZjIchrwsOAVrNMp9d3sTfyUI111kUH26CfK5aFPw%2B%2BpiiKzI%2F0ywQL1PvWQoWIlsIR4PIiWt76XDiLI%2FahhXSR5wg6b4b8T8Rh03Kh2qRvzqU1QU00EMwtqx83Tn0UyuXLixu%2BD1HDdNNAVx2VRVJEuafxkKpS8xLHBk3GBKg4ZHrodtfXdZHWMapJsTwvUKQGl4wqHao0OVL7Z2Eqtf5hxmDxCAJcemxLiZ1yG6NpskI0S%2F1jlgXq6nZ4EKbeyruew2E%2BLD2R9LjjYW6Ca0CvcDK6VVSFJ4BhB9NlRnAfPZo9Z0wE8cDheBuV2kI%2BfGkz0zzoNaesqKjRqFnG00EdrbZ6xpBpUkcicL7MIM%2FRYvnan6AMTmdtfT5SXCTKJW%2Bl8xI%2FcR%2FpX2%2F%2BRYdbvLDuRSwEY6MEQh%2FEwps6UAS70oUn8MKzlAwOSM3p7L5AqNMtlz%2FRQ3hy4msbrnSnZYYokBx4%2Bvq%2F%2FTzxBHjxgnH3ZC6csdAdKlPjabUQ4ZMyJRVrtoV3%2BN4FyIjPQ%2FnpZyPovbokapRoxs5JCbolLzZoHs2cBu8XL57zP2BgrQmhEoyhzfi9%2FOxeQpe47HJ9IkCD2OAE7cWHBvgI3N50xZag77RPkUjtUCByMGMM7a3b8GOqUBZsuq2j8UHERn3TqwL88DFg%2BBCcTvmRPIBhHXdCZGqR2STxLIAYBCpP9IndZJM77JSrZMpi%2B6O55gAzJiR57S8jCFJEh2JXGbOWtS%2BVkQmDiFjDek0fmkzGxaHIQkgAVX40Gxa%2B31ItV%2Fxx0DC%2BGQTaU%2FwPtDTV8nSeZwbRYYmkdI1KDG57crIlhLHBAPpXHygppbtd4sYmm%2BP1LPEexVZwf5xEU5&X-Amz-Signature=9fdae671f53543f8f84f56903fc2a34f1d3d6856d429ae5beecae0e55c7a2af3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

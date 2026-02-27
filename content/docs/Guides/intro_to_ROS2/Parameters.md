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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REOPORTF%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCG8BIqKizQro0kLUQIl%2F3y%2B2R4%2F3xkgHbtEjOdgovktwIgQgGNuZWW2GsKcwqjF2iIrKpstxuJyOcAnw6rENFGfFQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLR%2Bx0xexBu%2BDQZXBCrcAzB3bJC7m9KvKNJshuZAKOKlwFrRDyU28xPlfu74yjF3rbqNqXW9jZ9FEZQbuo8YGD3WITyizBtexVAcBQt16T2w3BEej7KVN5F5XAqgnu4JK%2BhxuyLSqEnnaUY3NsnQGiMGrv4Ul9NYrDgYetZ7F8EGaNNal7tVHesPK5tgZquHfkM1ScHaG6XqNqpCgjaPU%2FnSwxgTkWcLlDcmi%2B8amgy0EBKkDrqQkAiNOy0sVXG7B71ZmwclSoS808cMJ8%2FJBpx6zeeaOkiX8z5n7bCAUFGmmk2HJHYywPkwZtvfehlmZsoDmElBp6OWWGzNWySRZOCR2YOao94WIiO9Is%2BX%2B7LcE6xruxJJ3BQe83qZYhlamWAob8jiV8YwrW30PXrmt3NiJA%2B6J%2BxBvi6rsq%2F8rDZlbdCCUHgCW6FpbzLGwTVjJAnDmuotW%2BT41PFDMrlU0lD0Lk7S%2BPUbEPHEa5Njqg1AbJpPRZLw%2FmZnnbqhd%2FfubIjnWj6xbG%2Fz10M%2Bg6pIFzPHSMzsUQVicXnS0IsqrSmtk%2Fz5f9POyWqIDXwSbjWaA%2FREybyuJuY9bGTvgGDemPCvRgZaBDJNejc6J5oiia6zfwMpOSL9mDjpN9N45BbpN%2F%2BWPSK0Lfjn8wZRMKvbg80GOqUBsk5uEdNXXkQCs9TyTFESG6avPnhITZnO88olN0zUceVzqnQY6JuwHllu1eeoaCxTYPQsM%2Fl2jX8miY7pWxFi3PKvPcAqSVRRYoNEEVYxvHeKN2nx09UwAGfnVECY1tvtkVfaUI12vaWthlGB%2BSDDZvPUX43xtwN6neGVoVWtuk2G%2BWKaI%2Fd3jED5fYt1QKgpdFZrKvbKdYGvVHt2SvkmfR1%2FSIKJ&X-Amz-Signature=983936a23bf3a08c0d1aa15881dde2875ec057a4394b3261b1974a1b4ac226e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

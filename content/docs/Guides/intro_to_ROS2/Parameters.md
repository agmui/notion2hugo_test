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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BPRBCGS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIB8Oxezn3RbDEQDmDZAlk10pW5aClfQkOGZjsNK9NZffAiEAlWsO%2Buxmb7rbMg7%2FyJuDoAMp%2F9XyNGXNLQD9c7kFXXsq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDD4r%2FReuODx6uRBJkSrcAxS96hMuoUsdJKqpAXc4NGXg%2B6PMS1Q8gZDFoMGmbyesv9QaH%2BY0b6F1J838vj3tdbbQwQ0yvQrNdHgGPubzSFSL8kcf57FZPgUuNNJIfMkX4ucuD4rkhumx6HDv3j89U91oqYmWsXS0KPJ%2Ba5ktrHAOCEQFUZZJLGtbWtTitBi6P82a8N0P62VnDFFtFFwOsps%2BhRsBeKBw%2BXzh8i0QWFfH7IVmc8MoTzH%2BrJalCuU69QkcNdvRBner7Q9r6hIbjSQeT2Bu%2BTsHsdmMyg9PHE%2BW9zkq6APW53NHDHS%2FK3DGZYEQ%2BIENuHabqKZGp9uHXiWbAgWi%2FdTjZL2SenHUNF%2Fblg3qfmVSUfnJZ0lxZ5uf50d3Ia2JRuv4uppYga1A8pFhnhN0IqKy76lr19oK5uoVdYp3pbcIHrybqu9xWQPeQ1r2lEEEJN2jC2Ugoe1pBsCMYuARLayFnBo06TTedN0Qlr9WFKHcGWXvJ7nsCXdlBkl4avQG7%2FNq7nTe9jpYdd3Xcknr1tr92tIMy%2F2C%2Bsyfcovmg%2FMFyXIi8CRZmrDFJEwfdGPbLmHWD0uJgDMNJwLx1FFlGFsguvn5XS6%2BF5GlCoEr5LcsDujIjw6MQhtZWk7WAFAbKCQ4xiZ0MJvq88IGOqUBrwYG4dPpEte59A95ATDIE2Gh%2F0Mf1v23tmdq8y19IA%2F5vpx%2BHmwMdnQF1u2na45Pw35fGYXppHVeGXeTnTDmDWeEmSHdqvUIpZFH42kyFToKHD7nmnb5xtcJX99LACUiK9iW6py5GSQrt6KwIPch8DJP7wRcvPmcDMxjaEPC7hBEo6saqrFGXV3j0Tbl51Gkbmi03MjJ3nJFMnTMC%2BKB93DU89vG&X-Amz-Signature=bf8ce254fb10373d70c83002fc55ba986ae536f5f17a5c7acb5ca29cc002d9be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEC3I6ZW%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIHznbV%2FhplbvzX8V%2BfgW9fejn7gBsWjmdXNOsHFo67V%2FAiEAhehFwBEiZBRRPNHRb7iBmkhcgCFKdmxFbJmDLgT9q6Aq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMh%2Fb76TeHCcnFP6dyrcA2NzOEUJiNx%2F8xAZ%2FmAymiLqaUMqRGssppjVBNxhtRkoxZptdEUwnbdb4%2BWWauBF7HCLy0k2Tpp%2FHVMwUTIx9URWGbVPk2BRO4weC%2BTBmqdcOQAKNvyfvYjKrRaWU4P6yyaZaRVWs55t0oulHZ%2BiLoipunnDd4akefBpmwqCmvV43a0HokHAT8zI1wMRg7LysMWY7qzqLZH7zn%2B%2FqI%2FmMFndXnBtWF0UMJkvF32Q69zzSgQQQ7ZV5aJRtT3AuVjXvQc7jNvShJLbyw6lnM%2Fj4eMb8x2Gq5kxYdaYBs6EdBOSgwawGKZH%2BVs45VxCluyq8W6fLRQVbi83FK1HXvZr%2BNtCNUB0iZSl3yGG%2FBI2ddHpsblcQFaWKzEl4oQlj6kxbQwzVJFizuQ9DRUr3ZpfCiwl%2ByVdRHYW17kYptdtaq6cbxPgpVDHXKyXYHkKjrCnqghrxP5clPde5Uk7g6CZ9WsMw0FH2Z0NdTnPC8T2x6WL%2Ba2%2BG95ZbkikcqGtwsI1scyhuT3uCTJMAEu2P5FtUQNYoXikSx6ue5qQGbFlNN7oF262H6B%2Fjgpms0V89IqUxdbitc671Rex%2F2pu0Lg48r81PnoU2ZyG2K4TMazEEHHIdiAoTAGsOaBrJ9DcMNm%2Bwb0GOqUBXNocFzASKZgJ%2Fgwgz0ooPvqVpXwj6aNpu9%2F7S%2BMP3vPynNa3baAEfDwsFNSmDL2cfed%2Fwbs9cZo18B9jWn%2FBPJxwIvPVw%2FF4BM6czR2dMjhjmOA7fSgXdUc4%2FeBGMqENi6WzKW4EcETl3OAHNLMPcL84hmLHfApG2uzvzF6IXhZGf2JbTRbogubzfT%2B71lZLNtfGn2BldJShWZphbkZMkpVoB%2B45&X-Amz-Signature=fb217f0bef911bffab2580952a2690c66eb83a832b076f1c186066dcb09eb864&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

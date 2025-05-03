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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675URTVY4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBm9Vz56dOmVSbsCCNOPaycSQBV4pVNOQlNhYsVP7BvhAiAoaBmV6OT04ot3YDvaA5YJCb3zpB%2FMShvd2nWRUo19sSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDG4X5dWNcXxFhy7kKtwDeyQ0I5nK%2Bf5rlkQBdo1x9DW%2Bd8q%2FEDDSlZ99JJ673ew61Lciphn6kmFjMvwkAAdVp8Id5PeBSRjEh0mr3iNWaVgxKhDaygIF6u94sv4MaajQfm0VJaN6SpBkzTZQrqEw4fKicMhmxpc0dqlveu9AXH1yU2fFhClzB8A9dIpzis8fZjL%2F7FLr%2B9NKMiUTOOAfG4UrORy99vljGnLJmAxNAYuyluvjXgOszfAZ5VEBN7Dimt71%2FdXEaC%2F%2FUu5veKygBfJdUTyJw2gZaD%2BQwdUsq3ET8%2BfEVURURYE8yT8O7Ps4PbDljDZCr%2FdAP%2FWlfQriFh0lqD1X8%2BcJXv6741q6whCCKB7a58aHcN3tMISEZOBMvQdw71%2BZH7h4WHh%2FJ%2BHQSZDhzTBxxeZPelH%2B7jWc2iXD6qO6lhEyjA8HdHjcDFrhBdlYeEQs%2BaKU20mp9pI2Q0P54363rAEXcSpK88j6KcCHVmzg6Ihd5T3u8vVJZZidiTccYAggSFghL4zHur9He%2FrLA9Cnyan2Ph0a4XSEs70NRILA5JbQn2Ka0B1SOwJ1qgedgoZM6FLK%2FCq%2F8Y7A3YudhXqyozzM2v8UYnt7aG9A5zxikF3Z5enjSZYw2em9E8CN2mtEwGPv2qYwkYfWwAY6pgEaedbR1BJuEz4fBKvKNPcHifShcGj1KcPrm7FYrC7vnJa2zI%2F19K%2FNnWlEnTt17pVOEapUIno%2BHETwvzbIDAmzNBX2U26idLfWa%2B0QdDikslutaN6injvs9OPdIuMD5gFCm12N5I%2B4fxsuC16pjd%2BkloNdZt4WfZ2SGcbCSA2FT4nfjrCZTWrIv41HP4uol7SgRGaeSHUGi%2FWlRXQT3WP9VD4U%2B9IB&X-Amz-Signature=dbf6e399c81c5f6a9d4bd557f3bcdbfc7cb07a15c45d1576e5b0ce701a2593d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SILLW46%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGsszCqfACBWGMed2rahcviuIwAU2qBLXPp46HsoVlHtAiEAz62qwhxf9PU%2FzyzdQtvYawSxHzhYVtyg6eRu%2FHcgG2cqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsLB4716rNcEa8GYircAxRUOm7pe8O0F%2BLwU%2Fw%2Bhjkqz%2FhQAvwvGpGdaTmtDF84GnfZz4FJzyN6q5njLpeJ%2BgQGEvAMl0DbueeMsVtedzeWfCnWAjNoVWThxxQGxDY0JM791fNOrrqfmrXIMyTGJenwSk2QLGHMCSoJxj8Spm%2BUdOf%2BJk%2Be6ESpNQnnTezkHL3FTE98d05Oaat286WEXP%2Bh6AzVwcDrrSYgiSJ2k%2FsGu5%2FlO59c80iUvLCyFWH5qcVUKlzXFmYropCMrv5%2F3xdWp66avKv35Inylzvy%2FT6DT4Xa7ht%2BNkeGtWzF15%2Fwk%2FNOAvQwY5G%2FLlb2FEpv0NKHgweRUpNWSBcSdGzg%2Bsn1s4qKYRaV5WyUcsEfwqTAELhexr57x30rWTwZEEnXCohR7khBmBITgx8%2BLrF9NFmsm5Xg%2FWREHMKnES62moMW1JJxDA9WuEdjbIFC2sKamY2oejvmLvmwJjqN6Y5MRHAvoGmIhrL71srIETPiPfy9Jh6JpQklGphcLQ%2ByC7kUJHEAPQmxfDh24HqAPa3GLKOwws6IV5RvwWQMDshWK6MIa9zdSRmUzf7Vg6az%2FQtvvSDEpaXgUoFUFBX7cT589Dt5AhZ%2FS9t7Y6AFzoqlRLFUta2Bay2K08sUYVz5MLO0ocQGOqUBMaeSjriM%2Be9SZFuyzLpJ4mgecG0Bg7NjciX%2Fm%2Fs3tUUhaETGFMUL0oeHzPpT5HpDb%2Fpcb03BxhWohNfX4XkM%2BnBEs7sQsiAl9QyzoS1Zm4Or8HFnB5ocCD4kNijAC5gcNItsagiZ%2BBLJmm%2Bws1miH6oDuO4obRGDTddjSPQDEkEBp9swesYGkcgchFHC7lDpW2mUOM6VJVZN0rU%2FeBP%2FxZyzCT%2FQ&X-Amz-Signature=39cb3442b24cf3c7c23e0c4607c313fd0343bddddc8d69a6ba87fceafa2afbc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

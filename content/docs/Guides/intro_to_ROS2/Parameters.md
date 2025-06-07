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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRAD6TIL%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEmnqh4rc07tsijaaJL8imvDjzWTVSyf8iCzSJjphkgAiB7D05cgjVw9ZRS9DwSoWNfV%2FJPf2tq2cXURJ1LFhlthCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMqa0c%2BYV4OPG0xKYjKtwDfaxZfCW7olEctjbSzmUVGdOgeuUnheX5coVZBPkqa0O2R7jAg59dQ6XPgyo6FHgk8a0i4raCIeDXU%2FrMxlmBnMxOdhAysyJN8M9RoVjPccLCv8zI80%2B92Js7VdI2xbqfbScsLDKyLzon2PiFidFjNSGiwhCjnr0XeK1UYFHu%2FMEEUab3QrpHu8mKN5t0eM%2B69Cqy0sb3R9tZL4qIiFDNmSfQvxUWQ5DpXDKfypwshjQIjU9eGS6vwvav4UEmWDZJBZNOdZoClWezjlp7Cz1iAIOR5mAg3MXDwxMsDHydOFxAcBrkZnn91W7fz%2Bj%2ByMUStocT5FxDWXlBUqpEox4H0QtpLfstO8AWcv%2BL9DBcm37ji35IJ1i8tIXcCCL7LOquZLRZ7kfuyF4E8U7toImd4n5yr3fQ3sGwfTlZMT5Y7B4UJNbzgNX6DgO6Ekj28MLIAMLPjgzmHCIxtdQVqfYaiflRm8LrvnozRwSC4KRJUQ1%2B90Duvb9nbESBwdUmphgIiPgqrSl2ZEkcEYCRFR7uZ9icqf9LmgcDij5MTniCRJUhpOzWz%2FWC1bpJ3M3%2BeE0sevNH4Q7ncNmPsHwWWYhmrAU3sCxh2KKXegp1dP9bElRZmmM4Gcbuh3AzE0YwlYGRwgY6pgHcIa5FOktEazAo0%2BGYcie20rby2KDgtCwvj%2Blr4DzkGTJcWJaWGNJBLJb5s2wY6hLsuvZE36EfYACfWMLzNfjzwew4JyTAr1Uvcxlw%2B9GwFyNMcI9Y%2BLVOXpx2xSgo0cwjsQbqnai9zMuy%2BwAcocp0eJfKlYe%2BTgnw98qpcm05IKIDz2XQLDedQlM9d4koWoiWu3EDQ%2BDL0twf%2B%2FOFchVHLzECcGAQ&X-Amz-Signature=945ba4ea1aa144ee4550661976309bfc5e4b31d2fb3d3c151e21d6e7ee3ff8a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

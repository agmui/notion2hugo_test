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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDTQNAF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDh%2FIA3tzPi9ck5OfRnh%2Fd%2FlcE5s81WTv7%2Bcge9Eoc1kAIgA0ztsWbM%2B%2Fhnnmk92FcGMOnjB8%2BEAA%2FJfG8lu5v4mIQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAr%2FriG7EYmiVxTb7ircA6v0Wota4aw4z0LlbLL4JhchVwz37MWTgTPKM6JN5l%2B90mCuykXNBOg%2B8nafhjizV%2BkLHxTfdu4e0gIHWYqFnFw65VaCIRHcLLJYhqYb2j96JwtLaokRKmtm7kxdNcMP4%2BT3UTF03aLzmZa6Yex22QJ6eOdolvO9fQoypFBfClcxynzpy8D1DK2HuYZhuO6MAwVjVW8PWGQDrMvh8S983qRXxogf9Hq%2BAiW35d3Q20AufNb6UAMXT%2FHBDB1gTG2Nag7q%2FmxO1XxUgxlgIeVJiY0n5K84VjMhNY38iZlUGfdYFDENSfowvXVaqOnwq%2Bqok24ansreOQHRyGR7QE3ezHDbqFdmdwYK5aWnId4HkQID1rFH3jcCVQ2rC%2BFb0qEy%2F7wOsY%2BypfMjKZBEj%2FYBOOd6hZW8QXBfDDIiuIwXPuu%2FljPLJwEEGB8F8rNCtE9hJnSoVfIywkLQw33kCe4FdETOF21B3lZ%2BDqzCCJikDQMhMZ0%2BBjvRKPEJ3TeQPqQ%2FDO3mVL4p1G4M0msj5QcOr6zGuSRMOaP454bIUd%2BXT%2FSuP6Oiii%2F5uCFQB2WxccEhUunsAbDaUULKfzDJhoAwy4yv82vIviyels3X4t%2FIy9wpJKqpk5L%2FYI8oucj%2FMICQk8AGOqUBNXAAfZZOZFnc7yO%2BifJOhSDlVim6BlMX%2BqIrvteLTm96N%2BtSy3itdQptRova89d1xlBHnrbSWng0aqfsfZe5wF1llt9%2FZkRfCVjsbe3W3jcP0HeUU6SQoS1aGicLd924sSHZzTBfJYoEhGMM%2B5T7VIZNSBJy4Qc44fx9szu5Is3UenUizZSOm3JXzFvij%2BYs7%2FKTSJJil9FGy0xDqlIVuCYTziY%2B&X-Amz-Signature=0037c74abd54c74fb3c4a3029cf8e29d2c594924401fc9220dd9ea90de2fdaba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

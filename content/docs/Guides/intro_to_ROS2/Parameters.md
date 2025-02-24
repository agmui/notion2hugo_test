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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS64WTJR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCat0rOR2Pq5NBB6iwGbfjhE6dbYeJZJsKzMvRoHMg8VwIgIKZUc9wbb5MFdAzOFDnPBrle11osJGNUzB8a95rOp6gq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDK3TGpp9NENT4OSFRCrcA3aPur5KzRBsy%2BzpYbWy1V1G5YGjOSVyv7%2Bn1%2Fv17z1nXG1gQXNPDxAq%2FWJaVIn6ca67aDp90NYJmPN%2BOzR%2FJ9MXveVuCgTWp2dN5XOXRRvGDcsqdlvwtevSTjmuNEy5k1HlpBMaitVIuIclnPkpb8WtbMxtZfXdWNvIZ2JUAS3%2BSeWgT7Vs%2FixV09wzFSYyGJvnCGVQ%2BVRMmdJY7rNv7fVe76pUElwQiiuNCpt5yG8gl2PSa%2BYGCuRUqPLV2GRQ4dkQXkjwQoM0LKSzL7VrrbjjYT8XeZkcZYB7bC8CCs5UCjuuogyrTmLdnQjjsd%2F0d8hUqRVZXt69dLemLpi%2F3y0y67q9EiyJ%2FZ6dJYbfinc5DtU9DltpKJ8yE4nob3Nt5obbZrXg6O174MJaDgLzlH6QaDyoystMF%2FJpcliJFHzzVtrvkTKAv3Do1MH7XlAR8Op2jNW%2Bjq9bxv7bOCxydZcZGQoXbBOLFVUekictapFCAnKBmMa6hqdpwv2QchdDCfkkhSuclufqDNQzIHtg3YgKhkIFAF3BPuMKaZxe%2FJcpS7Khiuot8K2yYYVRox8l71wyKGCXbZSX4ZBKdfIuXdmzkro9dpOMkQ0bdyKkLawxBXDzN866MEx8M9i%2BMOLw7r0GOqUB%2B80mBhIAaYLcPlT9BMNdblKVga3HxE1%2Bhcu03n%2FFoSPH%2B8axWVomBGsLXtm5sS3VPuD02tX0qeOx10GQFwyxwUyiEzn6cGoDHIGnPVsMmFXS%2F3DkbIlSL3PH9tAcl9%2F7Rc%2FCCBU8EQqqPO8AzMgZHIfxBtSF4%2BggjzyQimx4wYw4dPq8mLtVuZKUcYrJHKyHeLn21GrWOl94LhlcXuTZcRQjcI9t&X-Amz-Signature=e5ac11e92024684729675fdf1fe7561a34c3349855e1c35a8bf2ac69f197dec9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WHDYOGG%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIF2TKWezrjuVvyzWiQrNdbAaSS3a6yzAtvE25ZSRiQddAiEAwGk320vI%2FbPD2%2BlKuEpL%2FEdZZejeXm%2FsdzwXXSKifkMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCF3HQnWT1ZXY0RQUCrcA3BmMjjL2SYLbO9OihNxv2qPlD4kNhKoqRq0lSY0ITpCzRG%2F5lRkM0kiv8LmKnBBD6dLPS1u2pocdoNavjntDt16%2FaiuaaOpaCk42NsJbmht1XYtgvBTAisLnHnOSgpv6ebuYGnm%2F4CMNx5cMlqbMzKNsSLeswNlxpxaiiYn%2BxzyxhOXNWVIOyXBLr0L2kPnIwc3cIsANfWYmUns%2FYZ7I0SVcbcY4ha%2F%2BwLW7CcxD5FpmFoRTMndnjG%2FlxfMO0f4GS8%2BNpVkQ67qCQx7r%2FLrZzVaW5BKB8tgHx4lZ03iQgASRhMwNgMI1Kgwfp8Hw2jZbq%2BqKULIoXdBeQCo4n%2F%2Bw9Vhkjyb%2B70VOfRyB9acJyMjm6%2FCj3xPAkexZUg8yEVEoW9rQu7fVclHWUv94g18F11gVkE6BLbh122IyLn%2BZrO7Mz196ugMFAcRtLUcNriivvQ%2Fri7%2ByhBGQ5ioGBrwN5kolkqDNzU4HIG2%2BNsVD7QN5g8zBV9rK3E%2BEwsJlOsPZ8SiNOecRd7RUo3ldTfdg5xynf1ax0c4YeWW9awo7PDdk42F2EJyc6YhY7sTo9cTHfHmRsEHqSB9la0dfqiLfnDz7SSRN3csxfiXzyxJxujwznMMPnnT7Bcs7iqGMIWMwb4GOqUB5F%2Bsjwf%2FVtBNUwpPCVYll8927nbUYAdAFEzmRoZ8nTDzCDZUG4r8CuVJSXasQLmkmvX5a5tTtgu9J2hePHB7PxtXJWJWfLVCaSXZvyTX38HDAes%2FQXCcquOs0r%2BgmSZjl%2B0N1u4myg0Rkol%2B6x3RoQx4PrUV6aT3MrfayzPg9BvMQXIjulANs4iugeSg8UPCVdCRLVIeByYGYKXaTNvi3%2FGhh1XM&X-Amz-Signature=f454b5818b26cd9aa63e0fd70aff919435ae26a7ff6d359fefefd7c7f5657e4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

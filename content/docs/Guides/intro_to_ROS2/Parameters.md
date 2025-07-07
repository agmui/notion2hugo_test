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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XIACBDZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC2%2FHSzGT4WTffbxRm3WVk2pi1WT8%2FH%2BRbVQpZqCXG%2BCQIgEBC7KET%2FhoKkA5d5GiHmpqwqFLZZ5RfWr8hCzyPEbdoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAljyqN38DFwFqjCYircA%2FBEmeoXNoo%2FyMf58l79dFyRVfWqeVjaHz2oSkyRpJ8Gt7ccXqBF0fe6DCPknc5onRmrVuRrymULh8%2BoMMqoz9keOaIaqT8cwua6gIqrSM%2Bb6SeVSCwgfHIvMhQEHtaDyihrtJCA2v8SiRWZbgbJkcQtMBmMtTFLbM3GUsYJ0PzvYxdTvLBarUYTjtnIRwTtrh71bwnblNtcewjqBPQBvSvaR%2BuZI%2BEncvECsXU5S7hfaSFXA4aIKjMjapmE8rh%2F5jsf3F5K5GwsFoMxSwjjCTLOWfDGMcENdFly%2BBeC5TFkcybhVLCZfiMyrYEoV7o8BuYhVGRcqZNIF30gwEonojnrJ5esF23Awo7ECyLHSq2Y2ggHhotKGxk79gJ3mzNs%2FlnX5TSoMQPHsz%2BtQUSRu%2FU4Fg3A8gMGMy3JxzVcLuG1Mpzka%2FaMndpQAqcJqER5Q7pBmxgswcHx5LJTd8W4zib8qv62%2BLZksN98K8l4tJpWRMY8fx34T8bQPV%2B7OSxs6rIa%2BkL4v1Pa3URvEq5xsWdVZBKWO0cP4YJgk12U6ciV%2Bp9teFnYz12Wy1RlL0LHIO3FIe7eRQtbnXJjBS6siRH3TngrAxp82pRAJHRzB94DVrO%2BMhUzPbaC54bVMKaMr8MGOqUBGjYXje1mX%2FLEB3WlkyqUUes8Fhjb0JlvwHzlbepynoH3PQAkuO70MVTizqL6nDNQIQMxpgj8E7p6GguBy0bv62zzLsyENmarSVVVbFg%2FytN%2BStPUwkvidQjRnm%2FhvEu2PHwGvBDH%2B9%2BasC%2Bw%2Bgr9rwcwu%2Fqw7nRS4KqKYCbJ0F5DlfQwnz%2B%2F4J02jAPMOZb5ttsSW3GeSfbfGu%2Bj7M8XoqYpTYl%2B&X-Amz-Signature=33aabd3479d543eecfe817b6aee1665275827b6a3e80cf8ccbac76c045ec3a29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

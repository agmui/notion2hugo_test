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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQI2SBKH%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIE4lU939ipRyMSoAZ69jxzsEUia%2BssnUNvyqiqD6d7QcAiEA70eyD%2BwQnSa8%2FHb6cp066kG96CDrS1dJQJUlBdb%2B2ywq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDPvLj9b7h5Bb4eaUyCrcAxOUgloNFwznmrEROu5SGCouqjcSub%2FsZkDFxxW0UpXTDMr6NCbVIDEL%2BImzaMmMcmn0dRMX5XVdlpJDuISFsPIjnCx0ZYPZp1x7aDkY%2BG70Qnh32RBMWviyFrdr4OluAcxWVEer04CmK3jLvfP99wT26fHmh1hRGivNkLvmDOTKOGlp9gAFqyx3pH1eZesObKYOe47jND01KZjMB3aiU5ij9HdPczmIeWYB49kR6bJhqPz3YshkGSpyVZdRkMRjjOho%2FSbs9Z7EY8nhwCbKnEDo%2BB8SJhtctNI5ee782gV47WiZXF586W9MYaS2YdXO7zQX8S75NkNKpk1McY6qK0klipnGn32hvhzIEQgC%2B4obAxKgcCLK24jL%2F7WQRl4zlApTYh89eyS%2FxsY3q%2FnESYM2jaHWSvT3pTu6Ij5QdCKRT6q9jMtkotROw189XX3WUFVg2Z4iVBXw7bsYWmK8HwzwY1h7dXXDXu%2BlQSdWwsKcfkf7296FoOzKG0l%2BgFuEITembd9mnNKjM%2Bfv6pkHE78dScc%2F4KNJlsMXAlx2QegywoueUqTD2WJaA%2Bi%2BGatJrPqfY7xsje4tpFh%2B%2F258V1wMDy8hsxaxCr6aU2Mi7c4ruJGRD5YJFres12oZMPKQ3cMGOqUB5UJmoYWoi1jliLw%2BtCCOTkfXyiws2qzteMtob%2FONDGvWGonVZFggvzUwZUOTFkIXnb34juSs1YMec1at7JOUxLO0uEJ8OrQQMUV%2FPw35iF72I%2BBfUk0iv8NkU5twf7pJjZHs%2B7HA0TsAAG1A9DUhPPLmMOdH0fzzBD1Z49l98yW5UO6mvTyHIX7hNIec02J2YlSZm%2BxyN7pfISErbZbeapp92qYC&X-Amz-Signature=6d1a94f453474862877a8f96d2249b736d8115952dbbfb8519f45dec59b36044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

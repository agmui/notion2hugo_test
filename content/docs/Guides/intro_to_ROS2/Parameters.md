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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QICCZTM%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDMNkeXShf%2FnqepGxUI0RxrQL3HyiMiKWAVbLUDTgdjZAiA%2BLlXkLeo0j0omh3JeZGSj9EHKeGucuX8PBnU5rvOzAyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqHzccpIO3KtwSE7PKtwDWcVdLWeaRe3k6WzPt%2FtVmMG554UVmU1OrA9wyLoL46LoR%2FJg59tCDYZfixAtSU5EMWJNAY9u75DXgf8C2lHcSbNc8njkl2yXyKw67DZa0sr8mYN834SuaStBXWl4rw8kuKq2n%2FH1G6TwZbu3hFHGFvg27gdlUyModJemV9XpOhNfvKpY%2B0pLx%2FBxhNwFl4PDV5vsePrdPqJCMt3%2BbM7flvTlKBkjTVm3eFKM56fGo%2B8%2BwtPc4t6z2BPvm4pD1q52ePKXIc%2FeLcNRoqzd9EWJqxm70S1cJe4kW5PwpM1bbSqm3oZifveRqa2EC1YdUrkUKCSCg8A%2FbRXsg1cy9VPLfn8zrM7hMABu3tPCwlmsIz1uks6o3W3dL7fldYXEnnJ9k72sessKoynyPdLS7J3SDS%2Ffq3XhkdRbVzlGWSxdNr6fsabgXw3z3asp%2FOOs6usoxJMZoRiAG9hlUDLJsffA%2BaM%2FWQjK71tjWP8nMTMGhyDrTkV1KL1wGeYsxGxbniXK5G7Jf%2BNr23hHB7fxay9Cm9B%2FWGbPuielHcPHpb6rW0BZ9CCFyiwAXqrM5o2Ld%2F0PeVH0aDCkCKspf5vEAdDdgaQvNCU26QyUZpedUbG7DtK7WuFox4eiTv3aK%2BQwwonuvwY6pgG0atQ%2B5SV0lsjQTnBgV96M2DnEMsvImHb7A7ydcNmKGog16Mo7o5QTte2V2TGIkNN%2Fn5DV8OZOa3H2akcEf6w478h7JaAvgjzUuo3VSFtAxXP7qVnomk%2BxtxWDNCjlq7Anscgz1qH%2BiZNLQYz%2BrOcfplALX%2BFWalLBCwiC5S0vSUtO4BBEIxLJw23%2FMWGiZhtvX%2BpuvOQoD2wU9KYUx8KxYhiNJpQj&X-Amz-Signature=3b53fad5b85dfeb2f013f949e50544991682141761fa652a51e189bf245be05e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

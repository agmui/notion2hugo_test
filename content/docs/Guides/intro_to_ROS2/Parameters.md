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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC7FDCMO%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjZ7J72XRS0%2F03OsS4FKoopGNBzbdA4YpyJ00jCUUFlwIhAMdtpsQNxRgvC5HTLpNo9hZjCYpWWVq86ZujmjoXGrbAKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziCP5RIr%2Bjh4NWrgYq3AMX4Je4bdtuLH8Mzkn5GerJSdRae3gQP6Dh5OYn%2Fk7vUq%2FZCqulPFA0m%2FbJWtQ9cZeL4q8bVzCb2Y%2B6YBehnE4R4Nnt%2BesYWFlQnW8nSkwMD%2FqjKZ7yPyG8A3VqrccOxs82N%2Fhkatuz4HaLKjsi%2Frrw%2FACMw0Pv7O5p9Hov1Y1BZQePiTlGOILZLyGlb0Po28qFfhGGlC8XsgIgkoNmng21uPtB5dIpGOXh%2BQb7%2FxhE%2BhRA2SuWI%2FMSCJBOkGj8FDh5XiAxxtwYtDngiMyhgbQBRVXseg2zjhm9vXSGlg8rfDCAKXrmb1tpdLaUfiN142WClB2U5Uum7WPiUz2zhROi2SYAzKl%2B9%2F68NeJU8M97HZU7yxNfpjPC0LidkHkbktwrlMDgKpVvZKD4Hcnrb%2FLpI%2FLQ6BG1WVxl62ehLbUYvdVpu%2BTUSchasZIhgGFUaeCGKMgSv7vZ38MsM6Lp1Ncnu9FXBiRkvtXwv%2FH6Az69fOFvuIxrVG4Ao3EjHJGR%2Fe7KwUn%2BDuEyE6QCpCjGIRipiFOS3Hip6Kc2WZBmTkg%2F%2BIe%2FkJW8RC1eSIZFBxdQqZLRd%2F9GUH7szlri1AgwObRvgfkkfa3EHN7gtZi786JLqeftmW1J5o95cpr%2BZzCwxrTEBjqkAWKIGRbGJjY%2FNrMoB6nwVwzTrORC8D%2BBInhEZvRhXTqOaYFjUL71VFa%2Bka%2BU63NLKZNw79FXEyf%2Fp01Z%2BQggl3iBtp2BbB5XrcikYDaCOCJ0Thhca%2FnxmUud8WigbhvXlQFG%2BRssaXaNv086pqCkZXWoiH2pOOGSnqyZ6frIvYwiPdu74kluWhL5ZStal%2FmEDoKnWh2ut%2BHNjky2COfy4XOrS6w0&X-Amz-Signature=685d8e42ea69d1cbbcbdc1befb0bec9ec0e463317d84add47b154a0f1dcdca5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

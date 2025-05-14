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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KFIQS65%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDOlPJkk9YnTif0%2BxIun8d9cgxqvsTw0dlIgFcYugjZkwIhAKJwlGoEOAKwp5r4co5G%2BAZ%2FJKwEe7X23YXwei3kIxyCKv8DCBUQABoMNjM3NDIzMTgzODA1IgxDHxN3NyUGeCZLcoAq3AMC1UaxMxpqfFp%2FWOjjK5FvxsnmehXsex8zON646GurrlaDw6qiTbM1uAvz1AEluc7AEekgQ1UWRPTQLNPfxMycFfFGXbjtqKNn%2F%2FoVOfYGpi8JZpmDpPk8mGyefx8ItBTeAz4L7e7jNaFyrDoq1y8n%2FRshO7IggO3W0CXT6ffKpKTvDTixhwHaqjaxy694x2fuxOHFSttYI68r2q9PKLicMz0LHZUl086F142nszVtf5NHtH3jY9Y2fGG4PdvpQ5hu5ea%2BGmVvohtXy%2B9PyYaxV2OFWPaXaP1pKbygcyy05jaXWg9zwbECiEU9rYYxus3tQL1I9bXGwhWNHhF8cEq7n6%2Br67fip9oMgf1dulZNXMhcBcUewMmmYdyHMcI8BpPKS0j2WDvylHIYa35zX3nKFp%2FiUau9ch4OxWtzHaZxZBm3pMkNu6YdobASmt7xPYQ55hOxuBKKqiiYX78a7rKsfvi0r9Px0rMfC9DtizpJIXHo4gKNHB6LP2G2Xit4RkCRLrXE7h%2BpUEGGTyMsJ8%2FG3di6xsORacNfLVsyOFFTbXiAMGMdKvxR%2F90GrIyBbUS7L8De1F3Q1L4fottS2BwKFvZaAdQ4Xf2FiXat0hBUHsPI2kI0AuS3cL0fCzClhpLBBjqkAdfW17jOjCkFTXEKf7E02Zs9QTcmdXk872l3zjLYy8tjXe99vV7pKZwhVPEvvQjQ%2Bh%2BEw5z3JHH1r7i1lr1HY9nmq9An5mmlcWTBIQ%2B2zZd%2FReDQcO2BYzwBdiIGmajPkqXetJ%2B1nk8Z2zG6Q4HUf5VSINSBdL8C66MlxnmFhKiqnD9oae23FZbdcDbeQrghLSwIL3db64UR9QJkzQi8TeoYt%2Frn&X-Amz-Signature=2e535b5bdca42eb4f820378102c2a53981de35e9b6ae2530feb40ab4897568e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

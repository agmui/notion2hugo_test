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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643KUQKHO%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICzkw9o%2BqvuxeDJDOvshkK5xDQmBgUIQd77IB34O7XlDAiEA9YODfQUh%2Fvk9tr3o5%2By6Ha4LUcmi%2FIfWmgLYNaBJHbYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDKVl%2BpjQ03xhqhMp2yrcA2KC66e%2B%2FlB%2BRpO1rDWdbAfJcrfolo84AkUz5KaY9gYyP%2Fz59GuCDtFa6KyMxvuXbH98NEQV69PsFNofaZ6jVW8uYKpNUhycg8NApkyQNcnSieeD%2FZq3ejZT7eNS6XUTsAoqqk%2FOSlsPgfvcSjG3SuUTGoyL5VhBj2vCPx4sRgJ0nYiyiEcyAUFwHI%2BeP2t%2BAHzrXKmiP9KmpIXbsL7M%2BqpLmRT17X%2BMcdZVgJg7l2Fw7LnUwBAThNoWamSS5OyNAvakuc%2BRdUK0oDXYmSBUjNSaBTLw7zy2VAtSIZgG9uRZjmv1eHs0EkB%2FDr4IMRXZMNufTdQg7vfo700LRZIYDS748tD0KivbZ531b1TdJ2G9MDG7aGaZHiiNb0KphMJUkM0h46F%2FXZDinF8e6nVPTNZst9gMIh5R4AvsKZFtKHdw4898UxGXupJ8Xi9pIigF4i1VdIEjR5MShwqueCJQ8s6GUO3EtEnAdaqW7c3%2B0DNMAbIAM5I%2FVZkML9oFwKsxK0t0RQ6EK1wlXlcBW5TA%2FFkW5W%2Fhu80S22500oX94G5lFOtLXfFDjrLbUT4e9uBrM7OUEdFo%2FscjfDo9aCkyNJ4lGRnuydCs0Q07QaoyAfTlV%2FtMBhVgXWlecP9eMIPIvsIGOqUBm%2BsaanPt%2BmKzhlGg5ISMVBe2tiMcV5sQsRIVRi8mJluM4sCMpz9QmQudec2U1h8hGttua773b5ED8J5w%2BDHTx823vBsZDjBqtMA%2BHywRaND6QeI52st1EyQcTKJ5GlnraYb2a2ZUt03N1blYlrJhJzJHRRMCn5aOCd3e0V2Imbf8ctm2UNrCJngfzcpFSTHdRHI1%2B%2Fa7aR9rzXnQdu7Ak9hHsV4l&X-Amz-Signature=0fb50a9aab1fbf16ff73d522e803b7c2b09acc7b42ef3829a68d37f6c8dfd757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

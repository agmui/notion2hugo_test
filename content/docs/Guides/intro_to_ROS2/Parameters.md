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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NTVDXUI%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC396UHukfLxQienW7Qk9mMq6mdCNOaRbK9r8wqP7YlSgIhALLVjZB9T%2FR5W0s5wWqGODJYrUzjYNKNtCuDVjcG212WKv8DCB8QABoMNjM3NDIzMTgzODA1IgyWCMUDs7LggZKTBUgq3AM8A1dLHyiNnVWlZXC6YWLCLgePUxRo%2FJQ3kZrX%2BeO4pTvSCYUOQFrrRXjnk1sbG4TSPcGBfTQ11Cm6QRTLUPbbdDF%2FypBwmZav%2FjVYTvOm12x7lZQ3upwWV1vHSGEZMmOzyWGR22a%2FYfjmgkAxZPw7Pe4%2FG2JFV2SXRjVgbduUHrIbKC1vP3QdD%2Bsc3CcDKkPLElh3UBKCZL93M1R02o%2ByzNQXq%2FW27MH2Js7YMXQ1%2BvETCLtxEBn9ZV8wjm6fuJno3gQv%2B4BvZNf%2FGW%2F9H6KOej1kFxe604SAcXM4pZi77pkCvXBZMh2s1%2Bs0EXEkBfdXUxqoBOExfmbItFHw0GYpLUtl9WucVl7auZk87Viojq7U6pOr7ibYnwH63ea70ca%2BmWo30A5Qd%2FwY9PctrXeEedX0VjbwTYXv6ZeFL0OBN1w6GFsYTYGevxLk3L8HYHEfDbYGIVjo7wwhQBoMdJHndK4vqm5RBVXDSPToSVTYR9Zyq9K1VOmWLLaf%2BdWQT%2Bk95j01Zu%2BBLuH6XNB4kU%2FEv7jlSVGESCAT3tewr8csBEhs7wc%2FXawpG%2BGTj3lLv%2BCd5sFu9329eFa6AOBN67qH2GBR1ZwzG9w%2Bdtq0wkdIahJHMWm%2BGXrkZPzh6DCC2rm9BjqkAVz8JhKzeUibPrh7MN9ywgU9M4rEDZhUOxsuJgtZXZlyl4DWzBjtusegGMPiudsdYV60mP3W5ZmWud6NhAjmmgom33Z0ZKJ67Li93f6zIJ8aEr5PSHohW68NSVPpLKbR2G4wcTOsD3pi%2FBFB5mvwf510ErpaM5%2BSxaCd5nxxg%2FxNCEE%2Fx6opVW6aFeU%2FXk2mUOvi3wPVAZB48nkP7X2LVy3K6RGI&X-Amz-Signature=463ea6c375cfefe2d3de76f73b917be4d47ae361b7f5161765e5ad068e86bb08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

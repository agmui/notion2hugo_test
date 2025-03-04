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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPLQSIL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEl0hqw7WKLpnpaqp5thTu1y1v5NWCDq697Wo3rS8NnqAiEA6d37B7P3pwEyBitICasYQfim0tiIxbQSi81N6Vp5fMYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGT%2BpXJTtoe3RYTPySrcA6zyyjKkdI41qPmuF%2BVjTBvQl9xehNAWTD03b4Tgiybadg61YSX5%2FfYEYE3fMdtrXxyyJt1J%2F4odKHdWBU%2BRzk8a5j1W5JaVZyGjF4xcIH5wAi3zC8rC%2FJP%2FdQ1lh9GGCWvC9daix7UNQWmGE%2BJ3pk0HT%2Bl4zImwphtad0Y8ey6mEwn%2F8nzMrq6N7QnYLDlcFrrKaoWwe4x6bMF6uUty95LMpfLCv8z1wzey8mCmhidag6w%2BYqVNHOPLb4EPy84Prl5BspxqdxaCvUuEoRrJIcyJZWStmX5gpAbovzxCmNLhswBmTyVjwtSHOhcyG%2BPm1czujWCc5aHKpG%2FImnlKhI%2BO6ypy%2BwG9fp3yVOaSbAhgdGLVwYN1hIv5MHe%2B3G88JOb2SZmldatx902XmtWgLxof4pUY2Duq%2BBbs%2FZabnTLX%2Bms1CoD%2BkwBoxKR61MmQMywr75omzIyym7WiDVIM09SRjBcxWdYWnYJIC%2B3vuCOuTroZHZg3s1Dsie12%2BcxcH8aGndlR2MaoiUi%2FuTWo36ljAV5vzguP9WR0IAxMqIks%2Bl5y3gqgSrVZQFdf%2Fshbjn34bTZXsvWfY5h2u1cfAZaymoPpeH4E0Jr1QSPDMBt9f57I4X8sxaQLfVsRMOmKnL4GOqUBuB0XWO1wM5GgETQTeHyW8q25G2czwOIZK%2BUo%2BPMKO%2Fm0Aav5uW0DTNy75PYzmo9uFPsEu6PCDXCv6G4LJ7ILpzT4DYzmqHt%2FjJ9n5OPsxtuMTLpnoNeI%2Fl6YBalOl6eVEgZ5CT9jIrXEAVkuxyodmzID2W6rXXrn%2B%2B7ioEKRKrQpvC5wJk9OBGFeUiCpEmAOvtAhGV8i9Yji3%2B%2By1lpoYmwdEbHC&X-Amz-Signature=b3f75112c49ce6b2fea5a3537d9078d32397cdb31934ae8cab53ce1c2dd78ca9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

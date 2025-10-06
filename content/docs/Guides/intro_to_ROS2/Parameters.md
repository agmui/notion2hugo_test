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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA2FM7G4%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCAVcp%2B9fd7HuLo%2BL6FlYXSM9nVQxZMOoWb3lFgKalHwIgX%2B3%2F3kKu8zbfYVqPMjNJYcJ%2FZ4U%2B%2Fj%2BsgvQaiFqyCY4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDh7gLxj2wUYO9pklCrcAwwdxk1%2FoG8ZDiQQl7ZkcWrzF6n7dLnYCNRRoYVOLqN3m7SOW6CxpNbQVVv3LuVRRMkGY845OG3SPKdQvoEdH5Mxf%2BLzoNTOUnBG8s1a73b0ffMMZB7GTXEFfZGzx%2FIyW%2FAaeg7fKW62k7joGggHPlTzROOyX94OY57qa96d6mCXChdFCTzwQLz3ZxtpmdBbcmQZLN7Yn6Bye0UnWi%2BZpFIVC7tGwL8aJ1XGfYZLP3hCfcKOThkDYYLlS9VYVtd0fVp%2FfsS41LM6Oj4vrlZVEJbrUM5XQMdBVVdkUO2FxZuCQxH9z4FnO3Q0kIAYajjS5zur9z8bQqSG4aa8BzvjTmj2mZghybi4CdO9DAYqxukUWbhfgMZbenWz%2FQRfYEpTNiteR%2BUuOrnok%2BpSGTRfCdbwoSgN5oxbwTJ5WGioWfblT6%2FWiYmKnpNG%2BEqq1%2FJkChgmDSYKbRuxXz9xB%2F6kROEWkAeZD1R6P7DcREsENhVtCHHg9k785rRugJZK%2FzQQ17U5IjP75CWDaRBkE89bikwYnMHnYw7Y7ju2xwh2kvpng%2FIgU8M7H1bmcQ7OfNhKPq70ETlpX9roFLM2EMqrq5ORLkNfOeZJKprb%2FmxdNoL2EoXIMi2J%2Blf8Yv%2BiMOiVjMcGOqUB%2B%2B7DGNoIlPlOa5Sngk0DJaSI90eAyNKX1oPWrS1kNHht9N6eTx3918YJ4No4tqLFrePlDtuyT4dc6sMT7qkx97vikCGgBRltYpOtjSm4ArY4Si72wW3iF20WCCZvKdbK9ecOS8NzU9MIru6%2FWrA8RJPTeO1%2FqWpfBuG2SDemmc%2FU7NgswdqYiXhbIO3OdWppgeQA%2BShNhFb4y2itVJM4%2F%2FMGEnRK&X-Amz-Signature=d6d16beda9829ad7a9f7bb58dbf0dfa5b3a5fe0b4af9d0cd744457a3c699e441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

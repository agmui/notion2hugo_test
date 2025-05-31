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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTXGWRA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FTA9zg0xS%2BOW68f5pIptcjczoPshh%2Fgsg7GEYjwWJugIgeY%2B%2Fv535bu5kUG6UklOffShPJYbSItY2HzobvKlx48kqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMK3eA2BXbIEMiAwSrcAweab1VTcgTq5qasAYb2j94gks6fL9YNytIsur5Yv%2BO2MtxtsLU%2F1WWrKrdGzA%2B8EpemTJV%2FZ0XEY9fE65vc8Xo4pC2Ib78UPLdEt%2Bef0WFDHjrlcjPdWhsRefEY9HYM%2Bkdg6hXZRUfDIi8fK5nfmYcyCLq0fI16ETdhjT0Y4AnklbbxO4rgnQKMDuwTqAndDp5fBZFXVX%2BlW6MM1OtTbLC3mEO56UpFH9WD%2F8wpogW8jv3LGMowfNKQ5PuuSBbbCLDY7OeL5JMeV4z9SZNl%2FgjjAY9Ua%2FALZ40Zq386V81fQdK7xPGya0ne%2Bgk60fby48dFZrsbNeMv5TiULnJzv%2BYCMkB6M1ZSb0xR8cHdOUeiqJKASTkwQJJEnHIi9INKd1vy5u6OgjsxuiR6pI%2BkADvuz9452%2BxZYAanai4Nm1%2FDb3IUVT6Yn0JsfYJTGGCQuLLPDRLExji9qFK4LNgsZ8ZgbPNcEUc9841YC0FkD89NLqZj0obn2Q0of7fUQi%2BoWk0D%2BjzwfnWgMKVpF9kmSkbsdh0P1%2FmHgfMGQBZIP2d1aVuyaeNodRiMgVFikFndxQ7%2Fv7fZ7qs6mtdP%2BbEIRH7qKsm7LCat5C4ypTrt5h%2B0G4uUrj1l0lUnafekMKDv7MEGOqUBQLApHsE%2FlJnTpNjvdiYawfpK9Q4D0nvyn6LrDogaUakqcGCnKrGWEAHVyzc9zuG9RFmZcOpvfbPsyBXKzoVNB3N04d8A%2FbQcV3qBBuXCxl3IlTgJDRVS4yJoVpZiN%2BgiRGWoWYZpwRl76DCiWwjAZ5i%2FNzgcnX8D0xdjQO5SH8XA2XiZ0wp5QaKYbfH22kTXuwcL8I85gQTardVSzaMqDMRvtYeH&X-Amz-Signature=c9ea0659967dbf11a0432a8ad84615aa589a2f33cc5df1e7ed588ba6241f5356&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFPKHKA3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGysh0B6lPKWM%2Byat0OcrGXW%2BOPxsrFmL%2Brjs42norq%2BAiEAoEb8EGd%2BCJ49P7Ow0YPDo%2FxXpWEuTr8V3eGF8V%2FGERUq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDCDg%2BQ4Vn8FAjxwrLSrcA70RR3fE%2BRsBX4svXza2FNMcGQM%2F2%2ByGhsCF13pP%2BvD5scyxVU8C%2FgNKk%2BaJf7ZbKz8U7fp4LOvRH907KbcO3sxIM%2FmQ1N2WkmEVNsi59j79gmjRlqLvvyDIcsDF0tk9u6f4kerm1DreW9%2BHEpBpXCk3VwysjH09QboSZwCK1PPSQGE91q3mYIGihtN8DK%2FMUGUGatpfk3niOkIMBE8GT9Hr4tTXzqfHWL3OCY5teuZ%2FOhU0x4EKsOtsaByqHD8Uf3GgNooWp3a4wgTWQIb5hfE2RVQK8D5K1uNFugDihJ5xiWuTkuFVB2EtaSDSk%2BII%2Bx9JzW4MUbzi7i8DfqismfF8ERe6%2F%2FtDdqIrGxBdSFf2v2Xq5yXyxHMIKh59HC3L%2FKt6LqA4dqeP3oICphqH8WrNUkL6k3E68o62R5qoLMKvRC2w%2FkEDCkEUEpC4Sw5pKJXtPM6hCFiu4Fnh5HQHu1opfLJrXs57n9oVfh87cDkLKXvt9mqqUryuunr2lCkBM3J56ForGynBgy%2FnvFtS0is6hIX9f%2BhjZ5aQglbpkxUGvrMgAOnJrPBkKtyFmX92I45mu41z%2FEWkRVLpQ0MDXG%2BoravoAGbqGnMROa8qlxJGU2nHXoExUciWdKk7MIjYhsAGOqUBt5uli%2BOEDqVoHswwdfCtKymnsCD6Ykthkgd1OxkewOPyNw5IfYL%2BSJO37rRiwT4FVAnyqGfnm3%2B2U8DvMr36TGSAf6oyR9%2FNLgXHGV7RycC4ETgpYLZW99FRSad1L%2F%2B01O%2BSHDd%2BZC0cOK%2ByJ8EPU4Pn%2FsqSMEyAEIijq1gWWitqKKE5o9Mu6KCnIwcXstTzHtJKtPpyh1505qtJnac%2BmxhrrTzh&X-Amz-Signature=c057fcf281e18e1c783d56b2bbed0a48ce7aa85ec064f845de72aa6f048270c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

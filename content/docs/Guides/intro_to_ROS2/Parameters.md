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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFL7LGKX%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHech5Fe8ERXXw4W%2BR3MJp%2FW0wGA81KOj1Cgc%2FDopVqyAiEA1huGSJShxmRKN1EUB6uAHdlfYLk%2FaqkNj6uT7osZDC8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7wRTFAmyYWyAKOgCrcA6q7DjnGwjnhS%2FINW7M6zLoiJ04r14kEUeDnNk2U0EJ80xFg3LD6om1FltxVJqmWcnKYP7Atm3yZekIAbNLfMH6qcQ%2B4M%2FYlklipnIdumO%2FTg8qh3NiNWSzE3AZjFKBUVq2OVl9mWrerU6EuVfwlrPEXgvnZRzMtcjbPv9VJl%2FOtgIpA9Gly5YrcvD%2FdGUI4HlUiKOO8ca1cytbguDnI2cH4UySDuAuB1PlI7fhGqckbehofskQhvjbEBL7DZds5KLMRKiSA%2B9V1JQTm5mqBRU0yJNrStKG1ldAiWmpDH7B1ayLo473BvCQJMeqnGoh2UMmU%2FIyi%2Fw8N6xIUnbSX5tqHVb37gSd99jOLdfP44GliNhDBAsiRLMA03Is9QMK5murpD7w%2Bi0yttjoi6Ks10FZ1TnvV0d0YOdDgXJxzF7%2F9LvuTLyhqiwEt7BiDJQxneWr8ae7umXRfpAIkx0P0j16XW1Fo8jBsCNYCPNcWcHayaYFyCYSi2LRHjJqpaUEyoM%2Bu2QPr4%2BE4Vx4MQK5KyYNyg%2FXFX4AsuXw9GssgXG5x7V3cDeYf6%2F0sa%2Frb5AigWAWU0zB3AdHroDLCw1lB4wX3aMcqHEJ9xoKWXmlvia22yWlN1K7Ar4hSXIGOMISw6r0GOqUBH5%2B4jGW23p%2BM3IrXtt8jyg5rCHGcYOpGVajfwtURZIKwTJQ2bA7nA5EVz%2BUqATdfTmSTDp9JuoI0%2FhZQRC2UzkE7y27UIXh4Up5gTMGFlsJzDc6u6B3H8ziivLcxzcKz%2Bicj6es1ViU%2FerHKLjtdNMzlRDCh1Q%2FspnyftdHkFHh4DfZmN0ZwZanxRw85dWP3LEJvq3RxoXqqh4k1XBUG2kpV%2BRKP&X-Amz-Signature=0531b29cacc230da923eb154bc39415b463914509bc75e77c51bf7b105e3a246&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

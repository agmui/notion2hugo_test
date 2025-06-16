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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3E7FVL3%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIEf46Ii3D4S9opB4XSY9ghkrJ8pOZ3kwaQAXJWCOPCDwAiBJ5TJJm2phA%2FRc4eJjWhcrLrL29HU5Hne7Uo%2BXkz2dbSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMiVEL%2Fxzi8AbHHG7lKtwDUjHwEkpZAV1DEzmQ1mSdlcYlE4UdLCitJi3YuWfVTiryOT1NHPox9VGrMzSyC6rU1JLNhRg6oeSo1Ob%2B6vnt855NamORHrDpZSeJkk80LwA8hLOhz9FGd0jPk%2Bcx7tS6jFiw8V0tg4dC6FyS8SV4Fw7mIAPOnTzbb90YG5MwVmYxet8YqdPHVZOl1bADn6Jc%2FWefpna%2FwsyfMyc9OHXYwuj5EsKMRN%2BMbjHHBhEakCQ8%2BMpj1jymc3pA4d3rGBShudxuWIjQ9D2KthYlOeB1BgcIEXdGXYDyYCOzY9GSy0SdzfwtjKh%2FujRzgGeXrRVN30fePVdpvdWtunhWFC4z7vZkpEbFIB5ZktS6BqF7n43UHdZMIO%2BVk8IQHJ9g1%2FHsU6kFp7Ooy7dOpxtyi%2FX0KqU%2Bm1nbdxFAjHb%2BXLEiWbjJ8PKS%2FG2qMExbpUIqBQEcwnHFGBqvkhKLWWI%2BjzhdbgxhF7u%2FohWs4OyZo4%2BjiulsVNCrGHZ5%2FxQ933tA80y9I%2FMrBtvxmgnMkCAYpTSuPAv82pr%2FEY8MCKH06kjpRnz%2F0A30BYWevdWtKe22GUMrReI2I50rT2fCY8JT%2FbcoQoVo8r%2FCmbPgXO1AjBFQLD5XYHJlFnOGtU39L04wsa%2FBwgY6pgFpfpQ4NSphwc%2Bh6Wb9KPmNn7J4JUPPXKOQNcFpRCCEikC5J1BEONODi12jwjABPdZzXYRmAxEHKKZ8Qn7PU%2F1FQJeMbSNCQpePdwz9JdWIzFH%2BdnOcOCZ84gIKsqX4WmhVS5KIR7FHAGjdR%2Fw%2F7B4TBs5FWaymSsGnAhUCTn3yy7U41OUjzxloN%2FBHgreKJi0hYHqOD3%2BuWR0XMjUy0lPc%2FgkAI0IC&X-Amz-Signature=1a4061a71f9eefc71bc54ca41af7bc49a23f585f4641b809c6b16ceae483989d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QAEI46U%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWEuaqmMbSGr2hSHcBOZ9vhm7fTnZ1d59FVWVAcj5s5AiBOO3N8nM7sZKUzwEZhggOuBJLax5pYuY4ojs30UsVJpSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMaUmV60gHXQDA4Kp0KtwDoGFvFCEvPoz94H36Klj9Tccz0YAg9APgAnMSOXFxRwYQM3R%2FlSlkqB8LSjJWDblSRCjKcTXAbFvMnqMTJGlitM%2B4fiBJH07eWXdE4ZaghVcoyWYBIb3PtrzvU40%2FlM%2BzAtUlseSsgId5Z9aPHQ7roxyksKuW5PSpepo%2BcesUf8RO2xP4u9iE16I1XbrGitxjU23SLIKgM6Lai8bt3TSJbmkrzpVWqNAWGwVTl3ugFrPNOvUgNbkw6vLj2e40xahZy0BCU6J2j1qHMKmkKWpJDCLl0OyujGfm2w1RYuKj4iXu5GDpimNUjyxZqALnWWVfAIBWqGRBX1HtI3pbvx7D2Eq3ETakZiKf1kszHnAUDxz1IrnmTMx8m%2BVgxxVBa1ipcvMBDclJ%2BssN%2BIlJXD0%2Bo0qK36y%2BlHv0y0d9g0HtimIgKV9Lg04rJQhm1uTl0naTfCh7PMRXQ%2BaEAa7e75ppVmYnyVE1jk1NT5QlOteJwN03zdJCOGbzyn8rNCsQ0Ie3s5I7qsTrmmasWoZ%2BnpZ8dZvvhZkeXXSMklpk2fakmrL%2FIlaEP%2B0RQ%2BNn8CTFsILh4V7U4NauapKdbzdnhbcfgmNd5n5woA3FR9SpCCUtRyt4g22eH34ZKAchi%2Fkw6ofsvQY6pgGJ%2BCNLWu4pczpRiiVkfdIVd0ZwR4zm3k6tFIJ5Mk8AFg%2BKZ7MQZBQk5ES3LhLJVbjdhJRV45VgT70AYM3AwxZn%2BlQX9Jd3AUpaR5l4%2BqtS8U5m3dTr%2B99xqxpEhmw4%2FOhJXhCyaxWglEMS8SckIwctGFeZjvPwPidS6jbiRPcMkOhGtzeeVNQQjNvc%2F25cSsxMR3vqZkxuikmCSYKQuQwye%2FAJjeW5&X-Amz-Signature=a79623c9736d3e93e712e150cdf93e05dcfc58fc8ddc4eaf3cd9763200c8fd78&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

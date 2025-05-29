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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UKMUBG%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBg3RKBr7ClJ97x9q%2FW2cQXaCrZajCr2WLSawcISTITXAiBlRJTjr1crEYOBON%2FT5kKetvjv%2B4L9MuE1jXVFabTG1SqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0sdlam1yPwsrRXlXKtwD8bxmk9gFfYR9pCYCRR03rgmCPEJHCs0RaDPQnW9hldInNNbcGSpeH1WCLlrOezbAJASIdDmQC%2Fqr1XZrnQaEg%2FAIKHSNOqiLl3fnpLsm16lGUevRk9ab%2B%2BI3km6xmyei8OmI6R4NzTiUBuggwumWBRmi12YnJZica8dpsKR2XjQGQCdzAWeeQoI%2B1i%2ByKCsB5Zw4sOTqq2iELmbr7MCBHCerj2%2BwuWb9dbVQ8u%2Fgnh1UTliCpsJSXZixJ41yXG4FcaruXq4A4fzLWZBKlSspRHPxDm66V6ee59npcYXt1FPc7e8Knkbxy5ogqPLUeyifMkvc1bhlNValaWDnkGhZm%2FGB548ZlUjx3U3dZnOrqPj46U4RiWGSVbglxyTs%2F%2BsGO4ST72vRTmCQoirGK1633PcQv%2BkM58bws4J0Z16zZJD4evKqHtNFohJEduNFdIu0Q%2Bbm1wxQCwwtWoBIRWIfjTdj6DC90%2FzUW4D0%2B1vwA0ufJFBzVyC2ucCreUxpag1OV2sEVwA4XmD%2BJu3xBZwR4kR4J8TeXjIIyzfvV8sassO7qM3ekIzsFmj1o%2FVvdxDC4Lyf%2B1YKeibyfqCArRBHU%2B72Z9R3vomTdig6XIBu4GMTgaqmrbja5bLwD5Ew%2BczjwQY6pgE1KNEAwWDe9Rd8cBw%2FfcbcrxLI8sda1nVN7y6TplLtTgnCYiQBHMwMh3o6UNMSgShVE7tLup3iqBOkZ96tCT0ZDZbhqGjmxgTiFqXhNSdnH6vDy4XlX1UvcCYyeo6gx7flE%2BcNWfqC4teJIA0eLO3tjrVzMDkAyWk%2BOzpcXaplUqqadzlWaDhjgz%2BTGPAbsII944zV0tzNsLhTcojBrJ88GIoADq99&X-Amz-Signature=8fe5356301999fc827196b959c3267f47dcb174d3df1424f4f045214c764d2d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

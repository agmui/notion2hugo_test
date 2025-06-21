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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBN4MJUT%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyl1LlyKSdOaPwgnhTQLkEeK8iH4Cs%2Bz%2B%2BNdymls4S4AiA07KRuuAXBy6oTpJ%2B7LAmLuX089o%2F2kb%2BOzHCTB3qJGCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKkeoa4DQXdOcdQz0KtwDiMWvKH%2BEDUT%2B2LYHaNziuTlgR6JMUJkBESh7qn13fYMXLmOLu%2F1jBCyPM%2FgTR2QSKj6pSP2DnOkbOxeW%2FM33PNLtfkj1FcbNa7Ji4HXjhDGEbr5WPS%2FzQkrIzCx%2Bd3sezoB7CR8zCEvyTI2v1fUk%2FTRR1R6xFYkE7cvjljcxTGIRIWAx11Tu5i1tq85V9D1ByJY6wGmAw7sUJBHHxhyWH47c5OGaIKOj9PS4JiD%2BTI4y5HZwEHqBd0D%2FWA0xhiiXDqA9OA%2Fgal%2B2bNpnrIw3P891Hie8L64oK6YC2c5IsGjFm8U6uWUj6EGEeQTLO4v9FkdLMIZcgfPRXOOoN86BOUmAQAX9fRBDdba7TgUWdarFLcQYBsT2NOIbYLTtBkX9Akjm66SySPN1Q918EbfynjCEH4hAPzM6SbRXgMsuIpLCgpaCV1CMsGJFXHHhOxNboOtBqcC9YVp4hkYMICa44w%2BXP%2Bbi8xiKIBizj5EePpIu7sGpAMSSjLn4Elc41Rvm6axdL%2BFf21S7BmQQ7AzxaxYW3zAtrpj6Uh0tXBHakZYYNrKWeeL26hrJnC4OYUshAxeH0zE8gCuUVtiyd5P0HgNK06LbHIdIQyE7mBemfnDHRvo%2FRpFnOm8AfoUw5o%2FbwgY6pgGOELs4gIHizpjaG1r%2FNzpIG5oV9WETjUJXazzzLREHWZiBl%2BueVc%2BkLKpUc1c2FSxeZ2vq37sqqTCjOletOYvtZWj3RwURkYsyGCk7xumL0ntiQh%2ByEnHYSAt%2BUcOGdbV%2FruSSVN1ICLu2MFXKaDo%2B%2FtPaQCq4UZNVt0DxnmpZTw1QQkSPMVeVO6LV02rELRMT30HvNBx7JV5U3aUP3T784yWbV47M&X-Amz-Signature=6bf78d8482ccb0901d5bca25bc171dabf1cb9cf45ed8c668014e541e84cc9137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

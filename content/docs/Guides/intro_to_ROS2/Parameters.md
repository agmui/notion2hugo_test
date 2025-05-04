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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS3IBDJZ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIG40tpDvSBSntQjifWSY9OV4tKZdS8YiN5bn4pZejo8EAiEAuUxqJB2pCEZXwn4MTN3jad1%2BIQHAmbTyxX3iRipjgLAq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDBsrjSn1HuTI6LMSMyrcA5boHujyCTXFEmTQkAeqNWCzGVBXTmWZnUOFEjjJOCx%2BY8IkHFuTAYfKKoK%2F%2Ba%2BjWuUtoh5BFahvE%2FuDrZRHWoMNgJnCnJNPcPeI224%2B%2FK%2BjVMhGxxx3h06Iu9GT%2FAZtQXbKTEXAo8pZ6TDBQ45fqnmKxdPMmog7OVUbaORUDhE6elRREBpG8aCTuz0Ry4vbQCnKWhp7%2B%2B2Qx%2BP%2B3C1F6xNKynXCKbasruYIqKov3IRnu8PpO9hnizVFvg9pIaIbusbgRrkH07FJfSsyND8cPnHlTXzly97jvIDGjBS8lKathZEeTvoo%2FkDK9oIGFWBp8fedSWz6VawfYtXR55T%2FQHDzjsJbErLS87ujiyaIPFitMGop%2BVJ36lLfhtbxkyiM7kdJnYXdoXVm0gS42SsFocEvc5%2FOrXl6D1O095uPxzvA96628wAzuovImVTEehA2aIxgOUdovpde%2B0RI2aKb7YYKC5C06CCla9n9Rht2odzMqPRDInZx%2BWh6AHQ6q09%2BLzEKVuOY85PPV3%2FrU%2FPmLw3smU4%2BpX0lvK0dhruoGdU%2FXvDCfGoZm0CI8ud5aKBnI1jePF0OidmO80mImKRcmyB5ZzML9WPkeMEQ7ztlG4%2FmaJSI%2Fq6THy%2BS5HQeMOus38AGOqUB8atOsnKfNO0nuvlxzGCpmBc%2F9LrWFzusn8indFD%2BXHOqG7jvnB6EyBMfSxPbE4qOyvH77Ai7IdZKDGNz0TnLzx9PLp7pH02XtVIdUthqbw8xE89grTQWxCDroqQZOei4sb9CjL2C1PEIhau4gNcBxffub9myIQLv9giiEztzWwwZf4ylQti08HifhFk8esjX2TP3TICM9rrq3nVxByhbtr9F8Dr8&X-Amz-Signature=55c3216690dc90c960852a8f8e1a5f174a782b15cfa242266d13b9dd72a1c9c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

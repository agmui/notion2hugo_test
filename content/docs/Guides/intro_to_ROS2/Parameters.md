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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GED4Z6D%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIF0TTKcUrs6JO2s1GGlLwORmtT4%2Bo3QkGP%2B3uWGYn7NqAiEA34beQKN7rweCq0Qgwnd4HVJbPqR6zqOVkXem8NO%2BmAIqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvwRnuWMyCqhv7mjCrcA8R4AVP4FdsjyKwq89An%2BMcwPxYKtxwkEid15dT%2BwUVdy2NAILBULD3uQLm3B5Tk2i4wUOru%2FFXBdykEAvwEQiBltQfLuwvI4tQomnA3uScQA32dRKdMJQpceCR%2FSxMFbNcHjxXRo4SGOy2K68dbalj%2BRGZSGT4cKsG3KAIl3vk%2FuH1R0Ogj2XGj8Qi9xEMMpL0v6EDL6OeTm5vhC4eCI4pYcOwita8hyKfaDa%2B%2BqEq%2FLsws%2BprcL%2FRgP%2BXSNp2pAJYVVUCNhK9hrvdjGm2E%2FEql5pr4bTH41HdCStOPBFqUFQ7S1XB%2FX10fVLVAMlCmQPYu0u4X6J%2B23KSQ2go52roL4m7YwCsqnpO8vKk7Y%2FMQgqd%2BM6zGrdI19m%2BY0PYDPlhvZmXFAbmhTVuR9yorDSG9nhdBR2by6ClsUORyWJ9AyZsKdKUOYKrmiuF4Lzu977B2mjHjiyysbwhIXUdpXrL9PqxVtmkwdWTyqJphY%2F3Rc%2BtDK0zOGC2OCjDmMpsnD6EnBxC5jNL1eTOE2yrrjtgY944%2B3Q%2FkRFnwCKG4a0ra2rQsaBYlAOSH%2FBpGiIpdZdfXPK12xQIxyb9RPxQLcScs9qNuONZoCg89btGdNS8IYAPXTmcU%2FrwtskH1MKbuo8AGOqUBPuW6yF0PYyCkTdoYgCcXho6ZQn%2F8clZpwwbDQT7T6Ft9CF9sT859Es77MQl9vxnhr13HFigfTtOcBHC6jVCjuhGG4BQSGNpc3EX2E4cThodjW%2B8OgEMzmQsA4JRJjDY53FLvQ%2BTQCXJMCoDPmtxKvA4m36d4Wao%2FH%2FXvxbEoHXbdv5dC9YC0bFmoyv8oFG7nIj%2FbcpCd9rxlDozLUxEzJqwsoUy2&X-Amz-Signature=a8484918d7990d924ea5ab7b5112c3308093ea070aef50a2f8ec196bcf0ef1a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ3DH2QG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF06O%2BwrGcuQZZhZGGszxZ%2FuYeoQIs0S%2BdykYsjYZj2pAiBuioZ5lR4isnBPH1lH0JWViLjnRg%2ByW5Pw1hhXwaE1qyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNbcl6HYaSotV7kexKtwDqqFKao7A94VkYcRXj63TPkKy6kP2fYB8K6kIhO%2BneF8VWuCeZjObiPJSl6PuVVtGyFbJdq3WasRLHZODhd2UgikD9TjhuZmqJTYMu%2Blt5v5H4LVnS0mJF48ZIsXe6libkKA%2FV3IhRuL8Fw%2FYRjL%2FdC69KV5sGs81Oo5CJOmsapYnea3TVqOCjZSs4hwPnzuuOuG1cFYpaMb0Dqx%2FiH2zJx8ma%2FrbjhIsI%2Fmjcd%2FCdjlXksZOpfpDlcURPl4jLwYM97heEdG6ObqJe0mPpUr4RoXPOfHlGM3%2BpiHsKfOWFXPXtBGkyfyM4KQbVWhfhZMIMCSSX1naMPC8guVW%2BfUOrUOdv%2FcF613Ckkm1c45KnDTGMbXgNC7GKWQQCeFNDJKpXvoHlTI6B98aeXnRV2v3A62KoPKkUqGMrwFktmBEu4o7v1o6ZaNnNWYB8IP8yo3kimKWXqoj%2FKgyH2WLNN5NNiPePu1CU6vslxzwerYNzOXwh7zfnmcvP%2FXsg%2BT7oRMiccGpUDpbb0YXMoopWjfGTJ7QpUoAWSak%2BEf75lJOB%2BexaHLgGY8HDu26JuO1K4zK9sX81OfowfR46c2TyFkL4WqGt24KytTE9EaNuCVyoBPu2vZTGhr6%2F9KMjqUwu97QwgY6pgF2koZCuH2DtRS6wST00GLWNK169Ma11fJgtC7Kj4llD1J7aIXA2Iz%2BTnb5QZ9R90zP4nEreSPVA8%2BBfFwT8n3NESMZWokBtrG2EoHGt4DUkr0j9CBjdDEso%2BwO0o0rj9OurJ5XlgXZ7dEwpdbE2PCmgbdpRxZY8GFdyLlFDR2iWO3eB7aTg9LKJc62C2vnmKKcZoz1dP2BUy4M0nhP097Dw5KmClzQ&X-Amz-Signature=2b60b0e5919daf1d01d6c595d55a24add8ca9b0d5db736cf612f3745c1328e07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

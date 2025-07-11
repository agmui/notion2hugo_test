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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXEYZFIW%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDN%2BS7E7MrNXrG6a3tH3WY6TxOxhshKLfvVqEwAisMcbAiEAxba%2FcQLHLzcdofsDDucLVbCwfonKKqAufcnkUKekphIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsie%2Feq8k77kjBxUircA0jm45KlsDG6XWUoEqrysk2me7kNUmIhsRNKPOAH1T83C5dopHsVSxsLCM7OS3O90%2F18vARQg3lNKevcUc8RSqtNXEhGAwLdbKKF8ATf1hBiYBmGsA2miU5snruTY70xvN2VX0IV3qks7Mtl7Wz7LE0NyIQl61jJV7sWv51RKzqT06dYjfQkiYN9EZlHxL6FuuEtVkAyRvYbQWv%2FE2B2mUKVzi%2FbUPhDUzZ7GMeqp2lET3FZwfWF9uaH1saQJynzYZYBDZVyPS%2F6xmiBef0Jex0MwgGiH3lC5RJ7tPl51TIYyW9TgE%2FPfK3ndcWzdr91gtGnzsRuEf8nmroUDeCbwcHoIUCFasBgqFuMD4ph7Kbf%2B47sdK3WqVCogZ28x%2BUwaVdr0KlscA23E7Wi63Mh5Wkb6UGH%2F2OsHILajJieUFzw6Bz4rnG2pcizT7ye7Gwy7NAYiXLiShF8gmXPeJ5a02qAFuyQ%2FSx2k8A45FaYe69mFDYjFdk1fijWs6xoGNmyUFcW94VVLaVgNYf4kMhvVzLvOOhNdAJeMRoyCrnsMV%2FojSA8Vhhemik1tZ11W8BmjCe8OEzfPoWo8f4jRVXLDczfcObO17L0U7tYPsoljDw5VY2cfo7SYtv3PIrsMLj%2FxMMGOqUBfVnnrGPQL%2B3htHN5W99t738NHzAcIWQu7P4o18u%2FWydA2AaaiAQcA3LLazYAVzWr%2BEtS9ea%2BUuQbP%2BBl1MxJM0QUxcZXHHp5Vt%2ByHdT5wB6drHst6X1wbrIOF6vA21iW56OSxTo7qQHWlzCO4asvrzRACVBEzCMndexV5jiSLMwSJ8BJ%2FTpIxKWxLeBXeF%2BH9kiKjovyDFOR1t60sp1Ye7rvRxYD&X-Amz-Signature=a468c2f1a26e3c9f210e08add15ed9b45cb4905682a6a6597bc8e11343ffd12d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

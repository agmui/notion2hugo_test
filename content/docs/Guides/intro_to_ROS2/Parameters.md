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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEN5I4SA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIHBcMv4dOYTKSAnXdwcpt7yvQnd4Y1xVmkebNPf4cRFwAiAFu4m67FPybl%2BY8L3HL6W2W6eFWcY7nFhyrLRnsI1ntiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiu3BNApwEN2m63ubKtwD2gOUa1GfPIyV1XVM47bvs2WH8Nj1dNXDQaZ%2F5oKx6KiWLoLHAqochq20%2Fc5jJUJh0QUl9a%2F4s%2BuaACZsDTe9FeEmjc1CtNY2OhYfp8YayaCOJGuy8YG6YMREhAYBbsg6lESFQftEz0LTAfNpe7JktfNPTkoh2EhoNKeOcQHCyFPhKNn3kvuO2sClcgLOdqD10PoybzzBqysvdK00dBIBEZMhp0BI7ax7inFyanWy3eYfH04eUCrW7LatnkGk50pAtqaybAkNOJsDwFmyCKmuOMxRQdAdanr7dBkJuiGZSadJe%2BXHCQ1co0UtrWMbQxRhrHiRn1w03wXujB8ljMscfzgr1v8lj3ow90B7j8Qr2NzmcDQrBFThmwVNiFghRH9kB4LvfmW2Ra1KyE3GPeCucyooHUldA00jii3K4iTS8xWeidYNVHOOGx3B4bt8Zhd4FsM1t60Ni6%2FlvvwVVSGsavDaeRkqwz9tIm8JRzkHH4hzK1kYHn%2FUObefaYB0fX7HsOgBVEX1edTLOsWlebG6pKBFtiRByGsGo7uf7nT8%2BixnOid6rpimMUooDstz9vZD60gbq01pVbX8m%2F2N%2Bs6Duw8bLf6GhXkflTN3Ry43w7B%2FVeIrapyDwk1p1ykw5vrDvgY6pgF7kWS7g%2Bo44IFXs5bbYHy5a9hZA135xckseUxowO1OkeVVZEo5RZNDEyat751SQ5InlOdtN8m9kKf3mugFAmsAPaxeOTjrZMVvMfvfSZL5MIrkYtaAKabUAuxKzaCZ%2Bzvrxj6%2B4MjppVLmj0KVSLVzkQcweS4Rcsy9ljDBV8ovHkzYMt82cCg8n0xEFXiryefCGYsXwsD9lNkNs7tebvpypJxJR2AH&X-Amz-Signature=5ce5a4b0f58195bb947ecfbee8d15cb9928b5b19a09de484316d756001bd8d7c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

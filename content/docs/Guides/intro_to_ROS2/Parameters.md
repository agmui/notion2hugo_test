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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623IBT76A%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh26ubMnZJCDRLwSPZcGVgZGoi7TxS9HQ7ZMVd25ZsmAIhAN%2FXbHb2Y1ERgk8XP61%2BqFGp40x7ZfeV5NQ30ASK4LGtKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytZk2LW65hA5Eio2oq3ANG7FEG4RwUcUuuBp1m2Eunrg1B%2BEgAIJ%2FLdLAsvS2mJ6%2FBGFgUfs0AuMgaRTsjH0WoaBLSSslMPwmFrrSWqBw38lett%2Fw8SAzPSMnsfOwaiGI4fzdNpXwVXKHAKs1EjS8XyBJa6ITEdwbOBCAuDaq2xHbClOopQP0%2FFjCq5LvJos9PB6kY93r%2ByV20iJCkiWXk7WLVTTNblotjpafgHTJvvPfltKMaYgMvY4UkyA231j57BGMVU6uGVT3FWNOxoQenzX3Cl91g0FbBdyygQS3xWs%2BdSEzEK4%2Fzt4dHpWZ2xWjAswP6kiSnoOF57uorrJeye0xxg3Gh3xLdbbF4GfiwTim0KzdALa%2FEh3ODUbcM9cBRI4eGQZ9%2BXSojE41mXPvGc%2FqxfYeS67zmSjzJVLJskZezRc766CmFOKo2dYkqeQvt4rHBqFgC9vVJsj2DqbDMW1lg8lV2qk9XXAXl4EsSb%2FmlnS%2FwOr%2F1%2F9l%2BVnBzhG%2FyvRYSRAXdR2%2BjFV%2FnQXSWgRywlFcV8kZ0Z7BKlQlrs3UH92kH%2FMHQ5dijTrfdRWM7OqDAJwkITQw8vLIZA0chr4vn7ooY49z%2BApierihz86q8Pp0XgNegy15lnsgYbRjU3uPZ0vjRNp8pzzDo5Oa9BjqkAel7JDUWd9w0YDGo72aF%2Bll3ktf9SPDwB9flJA5wSO94nvjWmX9QPbe%2BjDmKbI%2FbbXsT%2FNvEh4QrmtJTIOrAOkCRVP0Fp4qlYeoX7eCdsAd6fDoqbAXaHjDQvehBrWBLUDLf3%2F9R8BXNPUogYgfevPBjYL06vLOgB2JJIbx6%2Fv8QhI18wXx2YdJzBLyWzNuzXK7%2BpcGJsY1JuDJYRiNqGbbqcAGU&X-Amz-Signature=4c2864c13c414ed4344d0355579b11ec1f5fdca511494716fee6c67c4b7e543a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

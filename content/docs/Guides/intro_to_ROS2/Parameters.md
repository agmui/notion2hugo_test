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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FX3KLDM%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyNq8tD0EJaCHYpEmjbjreTi31VoH%2F4zNLk4d35w3ppAiAa7n9GSwma46UR0n%2BAh9XWAoqBkV6fBKeX4OPInWRoGyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMG7riyh5OYD4McJSdKtwDbIrHuoGL9mqc%2BfyIwpIgSE5UAiUZARrjJcdr9i9Tmi5NI8KflVfQ38JqodcisxuR45z7JDEggId7DJVorKkctW1Me5ldAOLM64Y10BoMrPb%2FvjPJdyqW0uGOA0ulKMGTQwufXKoK1UguqQqoKVZu4993bzvoSAAMri%2FU5rnCaar83AOKR1QRbvfgba%2Ba4ZYIbI6qHPhmZqWVGstLryi7p80NLNMlDcz0dvH1QQcVrELK3ciXewRM3GmQEt7jwsYDOxH5OaQOVC23uueaqmunIlpLZC0b%2BFYfDTEI5SsTvQ3sPdFdC654E5mALt2P3VjPgeYpu1uKDHrhlX5jUD8SBcC%2Bda%2FdFM26BZoGUZbdr2QbZgN6Jp1YQhk6lN%2B%2FUNZYUXUDT8o40lAx6y3FSNOjt0z6nEn3AcHPDNL8QC4qivIPhGxiiSX4IEDlZ1RivZ0hn0XeL%2FcTliGsV1luHd7xiCViAf01j%2FUBSbX%2BodsN1DF3vZz9leu7oyM6Q7r1jQIZrM85uoWiPI4XQLmCSsCmylZufTskqjyk2fstAx1dZ%2FivfpvoQbwQyw2c1wavhdnHGWOyxJcj2IUlr5DZEtr6ckx8J1lW2faJV0Fgl21cGky7BjdV1FI8FdFDAFAw6cWKvwY6pgHjVBr17ZSgdsic6C1vO8IWOfmByGU8uwctZBQMsJoVhqLl8wSMVj%2Bs%2BrKTVRy4HAyF%2BmUopHPsKNwSHJJ%2F1SgQ43Z9JjH9A947TVxLB9KaO7B8GOUlejrIzUn6L38YadfHwIPQZE3GYXFqzdCFH7F%2F4gTlhrX4VYxL%2Fje1%2FKC6gHvWSmoaJMvk1FQYTQDCatme4baQINTLlxAJEmYtgo%2Fk2F0VMb8D&X-Amz-Signature=729a3df7deed0f1cacd07b66bf24a91ae91d15e2a973b8ba3090394d3d25d228&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

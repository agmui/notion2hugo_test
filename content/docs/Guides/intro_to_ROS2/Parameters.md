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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBLVZEAP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjG3qrE7n4fHbi7wNtn5v3kBOUhgJHi1hJjI%2FssktzyAiANhO%2FY22SloSXdkmbkgC6mfXTIOCXds6tnmmU1oAeTHSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbNy02MND3TCQ%2FIytKtwDhZVgyRIXvPNPOf0G%2BodDVKEgCnwxrxPjmzKnHOur6e4%2Bd6d2V9FkYb5mB%2F5%2Fcq5tHmT9sB8YKaiIk%2FJas5o6%2BRYsD9EWriIXgzdnU36Zcn%2FlwcTGuW%2F5db78qKe5FaqV9hUsxmBC2eOt3KodUxanUFMJ83lbDFe4yuDSWPZhVJ3jEolSEJTK05DrO1yeSKTWYrKwgt7jafWUj52nZXWHj43RlMZMQjGjUgks8uM9%2BtrwiTaXTGy2nUgv3fUXDQvA%2FD1a1hT6hltfwy0yypWFkNo4wzttYjwN3FTJwg4xpLTq1UDLsmnKufkjmiQ3hEvfHcJ8x67kjZMkbQetgwbo8eTwkJ%2FKVFdAwS%2F7HnOgwVcwKm7X17sIYXKiUdc04%2BciFbwR7bdbr3bG63VmGiduTnY%2FMGRlJXFwX9yWk3fDWJ%2FOPmqAPfg4v2Ww42vpDd2EYCsvLk5HH0RNP8mzPxS%2Bcl2y2fwUPxT85WEYY49arR9C%2BBgsPWs2ejPQjI8FwOwkNGPSzjMQCuFHC1ueM0Ag5AkUarvvX4EEwzXEPx4dfYXEyuTQrwpdjw8sGnr0cTP3Ig4i0mRZVLJGeRjb6WJttcf7Zmt5%2BSDKJyJsJkc4kV7aS9xiaKblb2NEGpgwxZbMvgY6pgFzXOvIj6NAhlFC0xn7q%2BPopkvkaoZFPICppvSluGV0SoNBgciF%2BlWIVFQ8WcVzKaO8VBW9j6BZwkFWam%2B2ZvF8IDkNE1K0mUFJmPaLn5R38sAvHiyiDQX79WdtXio66GNFlq5QjCLDp%2B1rMyMvJtWcQu6LMwWRRw2SCsQCvE5qy%2FBUHsODs39Aq2VNPmLZyZajnCtb9%2Fkfob6b4t07ovd9Op4Qg12r&X-Amz-Signature=603654d881e9a190a323e3f369ecd216b92011d3dd720e24f538c4da7c7c31ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

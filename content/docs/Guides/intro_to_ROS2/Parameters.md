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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MTGGQEO%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCKwmxDa3avSiPIHB4k3Ia3y3GWIAohFbPQ%2BtXvVTzm%2FwIhALbLEUAn1feZFLk8XUnwVpqddZTwyiUIOQm0QX7y2QtVKv8DCGUQABoMNjM3NDIzMTgzODA1Igz5ouwbW3vnaVRKIRkq3ANsF5yP9zYrOU1DoF2BbJvU9hPU1S5ZcdzKA7joUiOSrL%2FvAMBkVsGEH5SplINOMbzA9jx03OTnm2kgCshTFsja%2BTXsX1o5hdF3MFJ6Ci5olHYNZjnkWDrX%2FVL3tPveWbdEorsfRk3P%2B89FmgSqcmlygyOS1MjWr7WdjKM8YU7%2FndArYNUxfDKVQ%2Bdn%2FW8DtVtESQE%2BAgDRPf88GrXlbw4TmqdJUZ5kwPXj9GHzOV0I7nTYYqmU0LA%2FUJDEhM9LWLQxEIcNIJmvVVDf2ZlW4GllKdEzIpelaJq7oJC4fpKv8VAJrR7Isvp2TVx9KU30%2F%2Bibkm3FVOmVH20UXuLn4kGJ2jsAt4zTBn%2Fwyi9ZDMW62RvIks82qdLhu1krS5iWGn%2Fx9BcSOoOyM0KjMLnyOubVm2YpQEvp4WbJZOGuc9lBCvTdPdZxgZxVevO%2FZaApBvCb1hHOpzqEihUMfEes6%2BtUfStpVyhuKFja8VS8R7VXW%2BGD4vAiv8eV8RF89qnikDQtd%2BD1%2Bk1bzAUoJBC4JZGAymjX8U3pjd2t0DhnPG55P2gjOwkEyeK6Bzczs137AKw4My5sQF6XlV9YGzcURasYT%2BW6nWUar5npifK9CsRWneTt8TN6CPf%2BefVLqDC8y%2FbCBjqkATBNE3ChCja2IiwQGoo1duScjEFdyiwmGH1VdJ%2FgF2C6bof6aZd5xGGJaExQXxPD6Q1ViIf0pgpEYtTo7PYW15RcL49LLXpqP9MTzaM%2BwGPr0imXn1QJ%2Fn9tyKJ4iedOKUXCx%2FxFq0mFmG8NGbIzCvss%2F6kfzaKOCCBTGsylTT504%2FSetmf%2BvT734UxAPv6dbms9hu1oW7LiMLgypZ%2BjGsXI%2BUi4&X-Amz-Signature=48f779d5ee1c570ba0c3f582000ce95b4ee0724e42505c7ed08b390a6f04841b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

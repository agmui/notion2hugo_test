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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2SDTZP4%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCqenF8Pe0ZaMDXPb6ZAjUlU9GwLPp3Oot3pRWzl7ORXQIhAISpJp6dEcjm%2Fntrbow2448ucDnZ1zWHj%2BkOPiOrd2m9Kv8DCBEQABoMNjM3NDIzMTgzODA1Igyh0fjVDkRW%2Fxyf25Eq3APjoB%2FZzXUr0IpY3jCrpXzzoypZI%2BpOyXtU7AtnTnHna2aCC9oaK33U36oXekQrwTRp3ThdQIwOoS491v4ke3VZYtbdpOlFPEk2%2BUAwGZmOHi8QrGHZlx6CWZK2loBPC%2BAQ7lFtLpVFpw4W91FdGCfGbOJLw9alkxTXO%2FBmn6k7yF9s5UlntuMQPHSLrvvwtuSmdlvOZrR10eAh%2B4ll5uxc62vh9PSsUeS2e5btBPLivq6CzqE94YHFVEM%2BUWM%2FvpJ3W%2F%2FMoG4CVZ2CbCiViVms9GzKFl8PoX%2FAMDu0PGZ3pYyB%2BLwlQL8YIqauEpAOoDldBDOCH8F1xVLo6Yn6vBECyeLWyg90owSZnMGcFc%2Bb8jkf7cFilX7axyiagxAkGFaty1ZKk7VN%2Frv%2FReKS4KFn4xEJ43r8WS6qJOvHXUQV3QqokN5CBnD7Hs5Z3ba3sLaZV5jh1e8a2bntTW72R%2B598Vc6zcvegTFr3mBg29IXdzjKxkD5D6U6nhC9ESR4X%2B7bGaS824D5Joj%2B%2BMPmf4zDom9MTttFm8gc8YOVcO73OkvpwLnx6sveUJLyb3GdG8hg5Yetz6OzQmsQ2uPBhDlq8sU5p5h01ARJ0rXp6ZpXnMw5Z64Rfr7Td9hjqTC3iuTCBjqkAfbatPaceBwFxhv68i0mV1peBY1saR3pmhFsgiFW9sWJ7ij%2Fb6QVcMe6l6C1QKdFYieyk9d31ez%2BDI2JXkYiaFn2WTjUi7riyxOW%2FSqaBvQuJ7n2kS2zTuCfnG7kNHdwuwgaXjR5dHRSr0QqGmeBE8vhOrAydLAuVPZyXpqjz5n8XjXymV6XbOPltEISRexcBWJEb%2FrdSwq0SOUfPVywUnPXATGo&X-Amz-Signature=e7d2c8370127dcd34b5de570793c1b703576527a84f822000b5a7b4fd181f1da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

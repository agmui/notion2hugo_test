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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LT3HWC%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIEopSDcj4x%2Bw1GnXcqN3735NfYfup0tSOWWPooH99h7XAiAM4izomlH9ZgqqR9ymukaBjAJoucktHYhadMqUT%2F3ztSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMT7sjIFOXZMktXIYRKtwD7Bbv21tsIv%2BzoIz7f1zGzYsAXlQfOfMHrs%2Blg0EBueSUmZl3YB9R1D7V1F8EBAKVyyBNnHFhZ05brdgrGtGS6d9t6v9H8ZkZ607Up1%2FdnvuEYn%2BP8vBvGuL97dHAaUfBh8Yz3U2x7G25gT6fKvhQ7K5IfJHBCG2gyBDtxJTYxsRX2gTGCbJlqoxoCVEVLWYFq9mqdeyBRwfo4IASAenk8jBk8Xz9lMszwJtmwJEf9NIlWGDweTRGmXFTR6IuVexP3BCM4gcwKqm%2BsihVPz9%2FZMzWu%2FCKum8x6kgoqDFK6q4ZttLC%2Fqw9zAHMVsf0Jy62%2BBcsRHdSWdMiiuMKHy2i24HYKqla1IZ%2B8aUle%2FhsLK7uFSwOgysW3nf0%2BaF06ig%2BQaETGFmORZlQ8AhzKSiY19glZrJpXrGQtZbCHjBKLcWtn6ag3MNpa6KISVFY5ViNKA5gdowbCyQ2s4JtyZsgkYIvRyzmemZqG%2FXvXgbqhr75D7VT4So4BmooxdnAt7exHYg%2BwziKhxSDKlrzioTC0TZrIpsLRRmJcTHu9kb5gDYYiLkoEUR4mSzXn7lQh8BUJgEj5KTuY%2BBcpj2ildRuiQFxXDQwhj3UpwtlJTwXyY%2BYAa4vliyYa3GuKEAw6oi%2FwgY6pgHdT%2BtfYpDZoA7maF3pMSe4Tjj7QtNYl4Fd%2BdCgtgOc9fRSpD9%2F9Qvor8v%2Bax658qddmClqeHIqmC%2F63nn%2F3icPHt3LNhVUkxbI7N15ZZjDidng%2F0macPDNI8OKBGTG5yxjj%2FeY9sbi0pLC19m%2BDDgmZrbiBrg%2BaCsL6CCdvrM4sQryCZBG718qhIr5C2qLg3iNpYAsZJSaeZfHKI06rwDNG61UeTYD&X-Amz-Signature=a8083664ae9be0b61429495bd65b0c0a1a7c5d975b7c8c013d0c43a758ec4f20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

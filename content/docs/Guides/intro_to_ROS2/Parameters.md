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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I4636HV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BzKz4VYBkma9w8txQ5dQSYaKplldu1of%2BPObSX8TS4AIhAPKSVWfpdxsjpDlJGb6bJ7FJspu1CX%2F4mfH2o7mvo4BOKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNZH6X2eYZDMNHJ3Iq3APPN2Tl3W5rKwStOBdiKpJ8Q15%2BkkJ2kLFKmoir3GyCQAW%2BFHLsa0qBN9aNAyYnZFeFx5e8Vdx1EuM0ZZKJg0SmAtHxToNTeog%2FUZ%2BC9dyECbBYolY1pWg%2Bqk%2B%2FR2sZPod%2FDX%2BF%2BzJlMPycTVW2HBUb9J1HNv1FirUnREbWwoIflj9weHQHULwb8hNpoZhEhEfRRSwR4qTJ%2FSqYC2z%2FIiFZFhRONR90XN9mQWuYe5ZErQAQuqv2vCfW7oV9t0DUYoB%2BZln7HQYEU%2BBt74nBOtZpsdYNLKUWEXzOJmQvGW0FZdtVvT3bf9pH9OO50wkeJcGOn3Xj7twYiVb4Z8XfS1xNz7NDxpU6rMr3bdMroZH1G1REH3PP8qkPXBadAuLR3HAn4sGFJNsziuqf7cJTSu%2Fmi3yOYF5UpWzQZpbsH5%2BYbo4GAZgX7wAG5Wsr%2FJ55UgmhuqWEw%2BLudzsSuE6ma0LfmiMV5yVe4OkThHoWqkh%2FWrFe2ntn3gb8jivtMQZaa7tht%2FNnjLvVeja9VCQQwPpMgLimtb%2BVVZpL5cM1EAjE4or7bnGaL3SW4NG2iTgWjGKEQpIUqQWsLf6fR2nTD3C%2BIJfpdoEPoskr46fKQEO%2BPbPOgE9PRFibvC5TizD99e%2FDBjqkAY2Adl%2F2xEhnkmueD80p41OFy3miCT4roeWwJqDfjhtkXVESiJT3OArahJuZsTiEHTEK%2Flab0hqsYNxOpbYA3Sk%2FMJ8eC15vRwJB%2FMYYy3FXx3nujz7hFm5Y8hg58RR5CAHhJpy4R2%2FAL21NljLCjlNvrzRGLQML8wmYbi4AEoClpwgc7onl%2BR2KIovBVyU%2B0Q37v5tcK9W2bhT4mO5e8zfeDJCj&X-Amz-Signature=ede361372d6148d44f6022b7fb56a8169bbcf485636f3f6d47fc56c62f56d5e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

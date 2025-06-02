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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV32QSGF%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCXni6BA7xjcHwoqP32CjL1gaHhlU96rW%2BNvWDkNmn8eQIhAMKYnBElfs3uUrZ50wubud1jLBrShfUd%2FOMSj6Fc5GIcKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBsuAG5B4nAtwlrrMq3APh0etaeTa%2FDXtgcBVPZTIbcmijhg7NirwWRxZlpX0D2fvgX81Rdmpzzf2BkBDcZRSX2EzOfTxE0JXeEQ5nBUrR3JkIxbelBtqLjXDh0yknxhWeQ96feLD%2BLBCDTRRmG5SLcqMtCXCfQIo2HkdQ3hc1k3kXS%2BqevWitbeJOEH1QDYrAIiPFrjTIS%2BvQFaiOi2t%2FBBuWOszbnFnvHIBzchBRGXYk4PMYl5Hl46R0fz%2FRpDLW%2BQ2nmvHtb%2BHsbvLnXqIPWNMww%2BBIt%2F8hCT7s6Am7k2rWNc0hQv64YQATljwpRNN6nCqKrECOpF40lwohK2xYb6LYD9mPtf6I6ypg28CRJ54iC0jiLLTWU5%2F0f8Wj7tuyPCk7vfrtUWk%2BymJ%2Bo3hul8H%2BjXzAuAHW766otdgoBDri31hfB0BvYTughuC4hluOdAn948e0Ysjyhpemq86oM%2FGS6ajUGzj46O0udgbdZm1XgDU6hrOaDZiTbPKFaRFYT2uk1ylxFjC8tMNtdkjFgMQ3fG4Qtn5oLMVN58kxj6BMx1uH6O8c1VBZEYl7JvBuwFxXoqgXW0HNJp8YXGLaScZoXKES%2Frp9fuS6gRfbsgVO9jQf7LuG307gITZYdyZDzQyFLnbRlwXtwDDYkPXBBjqkASPWoxHmHRr0jXqY%2FYoSXZcH3RfPYMx%2F8aYHxkb%2BBeBaRvT12Z5wWONrVi%2F9%2FttD1yLv5et23ncPOPamjA5Fk1MdkVIFom2icTzPSgNo7OOQuyyTQDzq5kdiXoDJqJyXrhJ9unEWa2N7UuKIcD899GkZNLA0lLsco9rix%2B8bVON4hvfbv6%2FsEtN5IW6lf8J3bAiZCbQjXCQJTk9qwZ193ahBpz02&X-Amz-Signature=c912b3be912b6fd738d4bd05a922e698634ab0367d5b1e309ebe47665b5fa396&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

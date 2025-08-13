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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OVLDH7Q%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAL5ch951ikpjmSz8U79x3TGe5NM20agqQs8n%2BnwyVuAiEA2jKPgICrhM%2FHsKdl6Z1ieF13fawuFgf3lZFEPzRBKoUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDEDA4piVDfaCrNKUOircA5lI%2BeCKnBexYzswIACcGKg2RNdoRdt4WYjcQHE6nOW33EbgGx%2ByAfspZ8tNR6ji%2BOnbTth90ClwJNI%2B3SKmVaIF47tMzvHRrp4W7dvZXsxyt5NRNrhy2kkFPwbNAqvlNlY30%2BN85OwHDlXJXhcnW5uwdk2ASBZyRRhCtIToscWLjnlzUR%2FPfuL%2FJWZVFzGkIL7JeBsDGzbGCQoTArfraBL7pAcqx7R139St1bwybPytH%2Ff4dPVzAMMM7XXVeJrTMdt3su8iz5y1dQbl1QrKYinD1y9vMWhaOh%2F30lDdiwk9YyPNf6wI7oYsZ%2BxJs6Soak0YKSqC0rd0v4teiHjLOlXUOj9TKu1yvT4IbkDiE5cZUpDzYZqR4tvt7wlgD3KKjCEpDF9zYLjeTWEz4SXVWnEBngeLTZPbBr%2F4Y0kDaTcCbKhqU69hczkYt11f5flde8JYbKxdtY49Ue8f2GRK8DTd5oqRpe86U7NhgjEpafpcr1%2Bc8ZW5DwNb%2BK1izKO7Zu3Y2q1ZBKc7Hyl4h0LqYQc5MGRI54hxCCdZZEVvfbkVbbwElnaXBYzV3kNKU6kwxXKXzLtBn17eyAaRjAPVr3K%2BBNNxT2GyEf59OIx%2F12LMsj9xMN91x5s1JXJ2MNGg88QGOqUBKcqAvaLZ4LutS85XNUxWKOUy9Slm7ElKGSkfdDtJTQbLzDLLaKkeT9u6naEKngPaSgBrplbkvo1xVUabc4TFEVP%2Fl%2BP%2BbBrKYGIGaoGGzRA%2FMM552l7RvKyYRTHN%2Bc0MYXGT3fBMAYSaNq8DNvYyxAksKHdtnGGBDmOcifdxOPH%2ByTzkRIPS1eUv%2F95mf6eEHjVoilpYRgGESFy03kQ339fYuBZ%2B&X-Amz-Signature=c1bd7f5ace36ce9ec345fdfd6e34535c4a195f74acc4f1658daa9cc47b8e93ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

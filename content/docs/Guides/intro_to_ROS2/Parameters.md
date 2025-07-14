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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646T4X6WM%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCedlRcIMeZF0sFhgxgsFxYb6dsvkaI%2Flr6CVwS%2FtVp%2BgIhAPlPvT7RUPpm3rhv%2FldGcM0Lz9unZjy0C3IdFuNWP7O4Kv8DCC4QABoMNjM3NDIzMTgzODA1Igz9yhO9VBFznRh9ez4q3AM3U91pWs5Jv6uMA3T0RnEKCN40bry6mVvVxOqxqu1FvfhwBJvfjmRS2VqS6nWMF51epDZI7DTLOkFcjLDvp3CBD%2FCNb2NzA6bxEBxEmzGsQLlwlR1Lv5aFQoJC3X3fmJDiJ3d5U0CgPCUCKoQLx5JAGjDfjsmmcvyQvGPmw3NicHWiyg8ghnrvlLBA9BAa3SK%2FoC1UAGhw8ZHXOqVPeZ%2BzOswMBx5Kh6toU8VJHJd9piKVcJSPMmb0FxqzrYMesQ%2FmNBjJW2pSAz6HVN9iWg19tyI0yT3pmZfhsS%2BA5brp1eB%2FLv1yePqFZydTtcaDmPXv7PpN7tWRRT1Q%2FwFdhSyO36RtBliMt06h01D%2Bx8HtnblbSVCiLhABdZGi0cSsVx2Cpk%2F670oJLiDA7lD41ocBklrzJjWamd%2BIXF2fudINsmQPCDinI020EilvB1ZxRNn3qj5tgP290q2SF2nlidhLW%2F529UWOCvIgojjkYd9rMGPS9vt%2BjArptpjWBuIqDWxBh5i%2Fj%2BPNxb0PBmkyVYwNZVl9YY9Uv8vJClFwev2i8SdVX%2BNurAoFjdnHIa7XFeJd8P9zaHjavktdS1c39yTCq28hW2XS4xs%2Fym4hha8S3fhwasS%2F5pAMAizvKzCfhdTDBjqkAeLjLcwkMtWuNm2TOQjZ%2FOfM3%2FUn2zMXSW8YBIOUyFoauggIrIQEOl8xvJ2%2Bm%2B%2BCfyJq6ttKat0xV79Cy8bmfYnX7Otib4TlHvpMKwVZB455sWETxjYbIvuhi5YDv4R1k58JzfntlTxGFB3WdtJrKza0PoYZm%2BvSBTqAtJnX78k6o9j4MuP0FfI1wDHOjG0xBqsyb1Cbu6D7m8CRG4q7QfQEAG6O&X-Amz-Signature=7d6c21f65921c950ce61eb8404ac74747cb6c4ca6719388c12e4787418fc5113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHHKDSJW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIGpjp%2FLF60fi6GRPYJOW4kZgY5D%2FYSIAN8q7yV8KFmVHAiBG3YKJ0uGx0Tzq7no6KD4ze%2BF80AEBzJxxzOgcKlRsjiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTmGn2wyhFhLQ2hrUKtwDv0pCiRTH9p2G4M7swT7CSk4ap8ibF%2BpNhd8iqOB04TKBgcUvV6f5h5DQGVPzeCCtHkvX5oMWfqL%2BIsxKA%2FVpI9SnwZwBxEHeDrYnrkdIx%2FRCWnoMxXyDpb%2FWHvmQoWc5VVRsWpGrAhWJ9w47BsGtFhZJnI9P684t5zZAMTAf8YIQMFJeSxq3JycfD6ZnQmVyocZHO02TrBWsW6r9rToJSORoT%2FUEoziTlsx3kHU%2BAAVHkNRX6sCcm2lb%2FDGqMB9Aw410cbg9wk5rgucDO0B7Kw3n%2B82BYpefIFSz4fA3QpavhQRewX%2BZOihxe6y%2BpKI2v5K0iatjZMe41JX8ovRrReaExfQo%2FGjLTZO%2Fd4DNFRf5QjcsL4Ocb9mm5rWtkKZt3AArQhXRxyStawcpEDkQHrb%2BW1Neur56njTLXmwTqaIJi%2BCw2iEVb5Y9nQePiBytNauYesJFvqXXPD68BbMKEzdyeYXcXipaeRAGUDD2fcuRJdQOJ4n8k8VnGzm61rCXEKjrMhYJZ%2BOvH9SIPh1kSO5WLxrM4I1NdV95FYrYKqkkQfJ4l6tSjK6OPkiL41sSjEzuCZcbuDHU1HWnqu5Mh6wErSghtHe40VWt%2BPw552CcuTJP6FTU4e%2BS%2F8Aw1%2BvbwAY6pgFEDDwkDiTj9yu6zdiWuf136kJw55GQwtaiSZcRqtELLvArW9LVPEXaK5jD9xHfTbPrFYKn3kNCpOS2OKL%2BauTnNO9GWkEXjPXUvsMWdktR4XqDyiWq7%2Fq%2F%2FbbmbDLb0FEIz4PqSJtQCRItrpj0iJ544SUO8%2BdjX5sByBkPgAvZnBRWw0UDMkY4INrW7SCab5fIlGjk4CpnIT1NqVxGSVo7g%2F7y0ucW&X-Amz-Signature=6f67e7cb3e1d9f1ec859cf426c4c1574045a3b6c0ecf4625eaca9e18697b7886&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

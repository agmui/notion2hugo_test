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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O7MLBLZ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuJ9svjDeAQtnM7nBJGjA4GWlisRRhBWc8hdjPAZCPdAIhAMgzfo%2BSYnmmwU9T37ERXzPb73k8VvVIPUImR5LNPXvyKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvHQ8yaC69WHDYTDIq3AMvkPWWze14K%2BtYeEM2Cik%2F7hlLpV0aHAKGVOzsURhTp%2BU4GCI3vctWoDG9W%2FBiWsTvZZ2tEpXWPKn%2FZXuBAwnPHfyR4W1W2kiysh0i%2BZY%2BN9ipN5R24CDeG4%2FBZ3PaOdngpdzABiltdCIABfmEwnKBBDMW6%2BXlTQc9yh9ASk7o4LszdQo9LO7pzM1x4Uurno7hVZiQv47jw%2Fnc4l96iArGgrnfCUVLjqiQG36jIkStg8xEjG3AxoPTD8VLnuBepjRiwpykXjjqb3rQcuswfIGZfBE6brWQGFeI65kxq4P8fTGuojcDbAa%2FTosVvDQO2sImH4jXSUhSo4%2Bzh7hrBKC5Y26dqBgTOiRkGVPUR2JhomJlAhZOtBgDZGARmmutMp0jjyeGnAlFCw%2FiweIoJemlcN65zw76beOrB78o9x1dKQpBEs7ofr%2B5uAYPCC1RUud0I%2BCb2w6l1%2FrK4XSLWVReUSD57zYPEdf2ANQWWRcGrih%2BwYeoU%2FeYpouHC6i9uQZz23AHlakxMjAvyyxWkaPZQrHwjwaZgXqRTBsAWmVwA5YL%2FYDb%2Bxxvob87q%2F%2F8SN5R2qn5ZF6nBgrjrIbo44KbGEK65vw4oqGRYxl6RC45XdIjJTllgISppvMpcTDK3J2%2BBjqkAbzD4KnIDd0jMN9NTn7TnJWqOjQnorIPFwwaWFERpEdccZYux5ZSHvAnXl%2B%2B16DrggeIPtdH0ep%2BAJUQVSkbCe%2FN09I1ETnSfIGZXDAOxScIj6%2Frpag2mGB1uaGi%2F3HuTyTtdbq34VmU0DK7PzcaUYjuKXKQuxQe7mqe3nslCDur2WRij4fTtM13NWHkXCU3neKpgmumoRe6c5pAylyEYMM74PEs&X-Amz-Signature=2c6aaf82593821f514706b8833e8cdce9bb74a28884d75c728e69132186f6cfe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXQS5AJ5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIGArPbIRMK6ffKGPtFCIpTwkPwRaDdoIhrgLFu%2BHQNhvAiBhRUZ2jW4IRmXLm3u8aZbpI%2FCxiAc%2FTuvc6fTofndzriqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMioHxZF5rkud2XLqqKtwDtKjGjh3gxcK3y1U59JAD63S9a2qGhlJOWP5rDGashyrxhqbKng2NauKQzqiu7HxfVcMgwLCIgo%2FYfwPsda5hwe6k9y092cCm7V81SBbaNIj86ixlm%2BHi9MVoY2qWlsU%2B%2BTMAZdWiCw5Af6RTqxbSRv%2FRW17IOlIU0aeCvAP0MrHqWGVfeU6VghWjef%2Bcl8P8txuRmlHziWSya%2BcuznuSnEcjLrfh%2B59ek2IT%2FcRwI9Lap7%2B0oo2LdD48ce4zZye%2FVFnWK4nvxptVZE4TR4Pb%2FY6URifaslwAlwSikRQS29VqkuwvwBt3bw3F3MDfSymcIwK0haGxhMp7PMwvQCDGzAtjSoDPZ%2BwobKe25x%2BVvI8vVtHv6ANVz%2BevgWUOD3P3xiAM5%2Fln%2F3u55L3G09VPke2dV1MiSE0Gox%2FK9cXdxUgBdMnh%2FuHlFVFuGxfok3jB5GN2819S%2FWervlLchWPtgBYxryoM9pkXkpJUqm9FEcEVybCSHuSkdYYV5wAPl3aVtRo54kH9%2FttXijXEHJPy1nrKTeFKKxzVG58usp9uGOjNapP%2BASppkIYMVwJVcO1iqGZp715DKGy3AdbKMxUWFh2vJy4BUdKHHLAdfrdkatACnBDJD0vK9VKI1VMw39TSxAY6pgFjBxQSHVAJDnMSMxpcOmiZAuEt0eAy6jzaZtAj4fpkW%2Fq%2FOw2n3NU9pVm5RQN2WCAaE0pYpa%2BzqxS3%2FZpVVxsbqOtomojnPdCKIuNdZKc29SQWIN7SR%2B9KZexsaKkqUhu8g3lW9UULBSUO2i2k3oSdHg5AIll0sXUw5ulNZE11M3YvMkaHRiH4cJIEmJSrwcFCJ%2FDPIzDSuNu4YwDALQvP%2BRXkqdxp&X-Amz-Signature=645464c80e39256113d348ebeae1a5cdcbb92c3921dc7548b47e6eb607ad2df3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

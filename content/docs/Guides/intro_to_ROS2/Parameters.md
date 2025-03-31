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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UIXTJ54%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD0pNdE9OHj5rZe9%2FsT0cObdLiaQXFkc7PekPnmYP6siwIhAKujxa5JxYLVnmqzE8NPOeg2FRugwmGRbN94zy2i7hYdKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYwG19menum%2Bkgw9oq3AOaND99B%2BvLF6kQEtXooPBgg67xmEQW%2B3ZkNNu8lEgVqaSNyFzvxMp%2FE6gWmm7sVKmaE9qMBVO%2FVDQw%2B6%2BP6Laof1sbfRFzAl5Gg0wh55WsEZOHCMeE2xsQ6VZV27T9yb94p1ytBa4O3yOF39mQkcUMYQJLUtvk1uy%2FRigQViOpKHcTfxNKlmKmJvdYbz3V6hGBrJq9QRUAkhObJys55m7FjhZV1YfRZzBEA0JzOkNgIZjsbunLANDWFfC0opeT7D3rYiUgihH6k9pHKK9lDN%2BuBdJSXObDRfUw5XRbyTeWt5s8yiS2sEu4v9BvZqcRx9sTefAlmz0Fy5V723ON7QXjAcp6rDghspa%2FkYTMjdK8QEcjggWZ8rkHv5TxUpWxwtTtNG%2B%2FrM8BUoEex2tyrd1dBXL8YrbVTe7iAb6UW4L9MM%2Bm44rAVPl97Y48Rudm0oAawT8vcgCsc1pNAlHIL9WeDunTaRHSLBoBo3jMzwDHDfVWHI6zVanUXTibV1VAmHDSEjRD6zglv5rZyg0XdE%2BqZZjYb1coY6rAfx1KUnrX0hFUrCdJLdt9DpqBVwSAOPcOqTSjmU2jsZ2vPHHALRepI47hLGeUnrv%2ByGNuSNhyF9lxxnHqahCqh4%2BFsDDouKu%2FBjqkAaptfCIxqhc42FDgG88hS%2FrYbU%2Bh5y%2Bu5FiuBQY%2BgyG3rrDGe6v572ZqiOd8W7hhsMtYECv7iGZmxZ8g45vpkX6JIfjYC11oIGDRN5wEWmnwEG0bbOEok1zFpqwrEjmnX2fsfZ6nL5BOINvB0%2FRJXb3uYhAcQvO%2F5OhR9nN6WfGSPIgch7IySfNb57shKM%2B9VUE0scmslKfm7OU96GMpOH39Gzhd&X-Amz-Signature=158946ca6c6d85949acf2bec15f28f3f8333467df27ffebc93e2b761e7997a43&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

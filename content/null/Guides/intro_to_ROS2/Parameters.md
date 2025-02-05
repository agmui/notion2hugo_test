---
sys:
  pageId: "43f56b25-3325-48d7-83c7-092220799f37"
  createdTime: "2024-08-21T00:39:00.000Z"
  lastEditedTime: "2024-09-02T12:58:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Parameters.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HJONCHT%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIEES89K4hxGHgoqY3MIMfUdvH80qrz6FUvCPSYdH5yDjAiEA8zbWwr%2FfrQQvGfI0vIEj2P%2FLgf6YBDbbyakVjgvFfO4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOTC9m7iCb2%2FDWZaAircAyJEYGCfA%2FQ3akpykhICKwO215pkbL4yprUjDOLOL3BNC001epzAWBZuSa7%2Fe%2Bhct6UjXIC9FO2sCg%2FeW2yMgQascoRGQJhQJa%2FcIpjx1MWCPS9%2FZ2oJKQ2g0MbNMKMKxJoDiehH40n7m2U6trB5CdsgTvtL%2FoEnv0qN3I74ickNWvmqYv9%2FEAZQHSP%2B%2FoiyDSxwZUcy4LkgXhA4tMxpoTx8jtZ%2BWtnUNSeiU3pM4kXzDOLqVbi84pHM%2Bq8eEmcP%2Bay8ZsnJEGy1mJuiT%2FoZCIRrPm1w4kO2jmfRzMHu79eLRJJn3l99AG%2BVP1IipO0WXduBbvW5dQFID%2F58oFtT92tWXPquIZYKN8NUCkdk3%2BRBOaHh4wd%2BFydCJr%2F9m0HT0TEmfappv45LB6VIFPcNjsmeVVxvV0zJO1vc06df4BYgzGIRryvk2ryvDvy6n1qwZK1HNTTn0633opVXisbmxIZnUWu6denVR8%2BCrTCZO9Br0OuJgazoujJQVOrm2vMvJq7vSlRvYizytSUqUZeGgL5hFTDGae%2BZfuybtBlryzURzMeGopzvllCx1zLV6be8CQ8CUGxLpTA%2BtRXTy26TWR7dp0hj76QVOpiEjJLtO7tgvEaHuZZ9UoiLip5BMO%2FPir0GOqUB%2FldOoGa2fcsOk502P6u%2BgalMI2yrKeLNwjS164vwuS7WW7xKKhwDR1W5B5WWKrZZPyetJ1JHbz4U5C0PKMT7N3LVDPEV%2BXE5GBuRj1DPv9hg3grTDYaAYlGGJrRp2evMdiyo7Z77LIQi0eQySWikE%2FLG1PKjBUQFWGDLd3iAd2gKSWhgo3c67wj3BvlF5c8f58uxpKrQ%2B0oSRhc0LfSxRqVg%2FfWz&X-Amz-Signature=d17d14cb8923d674e985c538bc57df1f28a14ca0126b9f56677d33d6176219cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

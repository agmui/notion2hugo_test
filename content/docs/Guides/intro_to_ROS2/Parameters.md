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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCTIQVFA%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHTlc5qjx0bj9zeNoqdC5Eg%2FEpI68OoHpZIssErd02igIhAJ4fCKy%2BtMkJDbi9Mlg4po67tQhvBVIiVNrO%2FacnhbUhKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjkgEPwXIyd6u66s8q3APfd7SXrrwgWNf4sw3eoa1ekwuiPIs4V7h5fXVi%2FCsFhwGLTsMCZzpvVNy3rXlebmDVJpQ1MwXMZhwN3HqFBHB4EWHq2jdQDItLQY2FQhQOziPFRzHLSCyQD52%2FZq0sUWNcQOdiZ6ftm1RQMjmdD72kKX6z%2F11A%2FUNj0TJ%2B9u%2Fj4Pm0v6ycm%2FAn77hNjT141Jsok46iWZBIM0EQCA6O0huPvEgKNQ6aDDEwkaaJell00FQLhBizbcUQAU5yt4rP2pmDdEqHSRnWsupMOgrmp%2F3Hq0zADz5p0jrEjQyhGYVeXCavrhH71FAwLqmOg1Nt4r90tzqZodQVbjOjsrRRMVtlrB5DkTqQjtqh83qI1Xra22yny%2B614ywUVZan9qwuAngnhrkrMODirfGsvTmXREtgO%2FfsxKmkhK7tAR97xJ%2FVqM4JL83stX3zJAEF23D0bIUKuV0xVDjSFEujJQvIziVQ39L2CzyNfPEm6q1HtE9FLWp1AjlRGPE8rucahW6PzL93KR9c5h7sTGPiU5ZUv97OhLeYE6%2B4hLf09mDPc%2FVGBZhkNWZYTta%2B6TjsQFu5l1L2Zvnoe8Iab5VK6VHzHQyMuvzGotz4GvKPnuPmJ4FzABqOA0uZAc6ztg1jADCFyOW9BjqkAcW1%2Btk9HhbtBfrhw%2BmQf%2Bv5aL0A2RYt1rxXNqzCIkbmhGchRDlOyAVA5E6c30Ne5SonzyDYvhbd%2BJetNqirbKr8dE%2F%2Fynv2pDmBRb2Y17opCEnZzsf%2FB67M0GmkijEqN114DS9oLSRiVd%2FD6sTkuiRTpgrmEpGX4hUaK37DErQwrQE2Npx7lToepC8ZW1IlBnIjZoeK3JNixCx%2Bzmhljx9y%2F3Vj&X-Amz-Signature=a8dbba2a8ebf7a5d92bbd6cc8e1f8a0e06762b364f9db0a5cefb96553ede2f17&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

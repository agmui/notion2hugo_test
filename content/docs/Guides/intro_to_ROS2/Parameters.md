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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC4QUPI2%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDbrrtlQ2ZaUc0JvShUxy7GBupGlu0zP96Q8%2Fa820fXhwIhAMj%2FH6TdYqz1sqQoPTJsjdVPGZOao2%2BgkKARRJtEaDPOKv8DCDkQABoMNjM3NDIzMTgzODA1Igym0nPnWgIKKmCzxckq3APfonRN0t2hTdEk4xFJ4pHmOqX2HHc0MDeGY7iXJBs1aTAw4IzBwu%2F0ZrbpQZUUAJtEg%2BWG7Y5IL%2Fdv9VOcsCwwTYJXFBj5VIhp%2BRdn6hG%2BKc5ZhbYBanOfggan%2BHMtm5OwoulLVvHEVm3klsc88qFiXa8cStx76qscDzw%2F1JnVslzlJKFf0D%2BhrCx3FlreMjtsv0l6663WKBMTsZhl2IUc2%2Fllfj%2FCyp6ZRQuB%2BHZ7TinyltpU32MZ3IgfGIYRlyXdDkaS6sNUeV4go38FKf0PhkhdFQxDwDh8pKRut30QRYFWx1AqEtlpMPHgnNCMcW%2BFUzPKmcFrBK1TcOhV7%2BL0%2BlxukropNQQjZOs3WfHYAc4mhMFQ3p83KrYUH0gn0Ih2H73OH2HsXEywvYAiF%2FfTqxXAJ7mQndqwV%2FZVZUrF31nwK1kUyrnOE0Qwvfus4r3LnFI%2B0Hz29hocxVAnirhX2eS33NDUyqmBTKeRR0MVMuonkQSlQcWAlD5ilvSP2JWWs5jtlbmnrlf6CB7oieYNSLlmd%2FXCIwqQN3CKBBW9%2FFpi5N8%2FRGjTVLJJLy7Ipi9J%2F%2BEvIHIQmRGt9s8kKgRid4S4NVGpnjoW07jUsM%2FuPxv53asZX1UN3J9ipjDms7%2B9BjqkASOIG%2B2rE9WZZpZ38C8YMNpTj5gMhQ6Tl7DWVPlcRCcuzBcISdr8CyWMNS%2BGU3mSL5NRVB%2FG7R1ZCSfNkQ7GnUgoSymZErVCSu%2FmBoUcbKQUNiaPdzjxBdJAfRKKT5vhw9ZYF0E84TiS8GVavx4Z3i0GV4MD2yXYgwtZn%2FJf%2FTf5TflkxWVzLByJ%2FHFbKILPXLOoNChK%2BHB8e2OQezC0HluKzvJf&X-Amz-Signature=e8d51c1ff7062a6549227d7e3e5eaf5ab63a923d3b7af94ed2ea67eb71b81f7a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

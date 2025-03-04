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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XNSL6KC%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T200915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDox9uTlDCaODfaTb9iFzccXwmGmXjeQi1qBUZ6RAfNcAIhAPTHjf46IFJ8YC9yOys1FvOGgk6mCpC9wf6l1Y84Cnw5KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZss6b58F7EOo9hhkq3AM7SzeENB3U5Gbuoo02wQi9D6xK6zoPw1UtmEiykYJ8RmT2izsyuZoWP9HaoAr%2BhHNcuakJPVTZna7HcDip4i%2B%2B1HiE%2FZ5rta5cqC%2BC2vP9LGDaa4lp1wF6RlMAPnmwangA%2FdEppsITGg%2BnNtvuge%2FM4n3aEwuC2V95f5zQFKMgyEH7PfL%2FDui%2BlFpOSHGSckWVAX%2Fj343kC9wawIW8Eiens1Ym1fTxbidCGQaBEiMMR3A0xrnAJbjYv0XoyDOUnDPik2TwWtUvioY8wts0cJpDENZAmNJfBUkrrZc14FPdbfTGPUuibkg1OTBK8WqBqH3M%2BBREenjdu2VpziCaAiecRnFyn1RdyaFHxQF4G7H1U3i%2BlUP9tT6HsH6XLdtQf1DUrA1j5eg4zEB8wVtz9CbwiQ5zNf3aRMfjEo4FZGBe%2BK54PXt1RUxIj0aAWA34j4sqto%2B4QfF%2Fhas5r2aPvQfhzHpz7aopsYuO%2F%2BPJMVbWs4YBfY%2FkKbYrFejG7GEWXKPBMCYYnSapuUdHBprBdz6NFlUfxbWaHpCQK8gtVD38qRWHP2Ro%2BnvfFRYUyfUPoQmFOEMh0pViVapb1VE9GteIaU0k1uNIRM6SEaPE%2BeN0TQDvP6UzJm68YINjUjDiuZ2%2BBjqkATArlRIe8Wt9V0th%2Byk09SFptq1OFblx6DrbgYj%2BZ5NsnIDp0ViCIURAqQZ0o9V83tjhM9AmpvLwmZj4mUne0%2FncMP%2B%2FJkxVjew4swfgMNvWUSuZ1Ze%2BqnFuib1CM758dwd5nRZtrQf97lQ2WYYDsjmYtva0KVswsdXKS07eAZIl3qfbQKZvdaJMwjNW7PohgQwHXe%2BX0rTL107nfk0HZKBR%2B5OV&X-Amz-Signature=ea3b8f1c08134b54ef570f8a3f174f098a8a7aa50aa1f0d8770d40382e4cdb09&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

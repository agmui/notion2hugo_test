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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AMO24RM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWfWBGF9nX5tIEiSVeikRjR29%2B8vfMfRD16YLnARwoxAIgC7GU2IT9qulF%2FSvOftisRvC6vxo6T6iVJTlJdmWR258qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXUHbTYPBeV43gdYyrcA3pEQEPavjwjYO8NfhKq3ljEyI0kHIs%2Bj0wbPF3BFBvnugWEOd%2FSLRYsy9y8Oalz1%2BAsNzXTPMjyKy71vihwY%2BqtbosT%2BvYZKA18j0HNvP9JDyotSbArVommp%2BuxQZ%2FuClUalqB1tZWISj5vwDBt%2BUoxesuSl8%2Fd32Qo%2Bf6CmMwM818Ilpgrz39dI3I%2FGLtxW9yIR7lja8oLjX5WzYztr1J3oJUHp5M6ZPdDI7SHt%2B51Lr4Gam0%2BTUnQn3j3BSTfujkiB9RdhF7FN6xBnBIvnkBhvy7mrU4nUE7xWqhj%2Fx8SQ44ApwSyZF4yRK9cQUM7zZNkq2I%2BOguC%2BzxS65m10cgrOD7g18A3XoCH6PwkGcDA2e2HKaYfwrOVYB84jUp5u6snX8KgwQTvlD%2Ft4ERXwX1sUowoZqzKiiGovHp6E8SAic1FpyS2TY5vyA2A%2Bp0TmQky7KXFzJfG19tz8LDHoiOLn67DeK4BYHDDrTLZCAc5Yl1ItkQM4AX60kYCWrh1h1LznqEl8GnkfxdxsqiMwGZTszz86f3MbF8%2BNgTl9u1MmAghE%2BAko9Lh2VVPudvpoiSlnMol4GlBrWmWwiac9BtiDsnmjVGaYZ9rBFrDb6reUnzLgX9yaKhd7XthMIKX6cEGOqUBBWpYOLH2qvFPRS7iEhj9GoTGZMhMbNYTTiKKCrAu83hAkpu5UAl8qD8L2ZqVvBGRynM9haAy8N9Q%2Bxg6mkDL00PZxrOLQOTQudhCIq9j8VCNFcWaB0yIRrAJxNO9i9IeVnKEbudnH%2BBdfb%2BC0JeMmd0M0i8%2BY72%2BbFS0PftUZict9iBP%2FdWzdi672U1JLotOfoBf9%2F4jhzmuZEE6vADiLrfWfLOy&X-Amz-Signature=eecc0e297745466f1187cb48dc51508fd22ed81fdff5df331860b1e6b4334824&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

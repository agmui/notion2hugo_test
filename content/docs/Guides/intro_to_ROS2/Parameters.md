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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HOJ467Z%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCCdQEckjja936sVDeZniixk8tfJHabFm%2BMdd%2Bp0ra2PAIhAK6lUxlj0sXz9H%2FkE%2FNoNj1nEdskAKawpUqFVIOP7KCbKv8DCH0QABoMNjM3NDIzMTgzODA1Igz5HWbG7i0qdeUfOxUq3ANej3SS2T4WsWHVHvjeVd7JQBWnsbrcUcJuG4HBpg7fasmklS16j5A7OAHhRXEeINiM9CQX1ySFIS1L1c2pY5lKjfBARbzwu0t7Sgr%2FIDOVQNQRn%2BUrlmFm%2FnhHdw3RPX90dVvKeRDjivoS%2BBIBR9hoy%2FuYPHK%2Br3sdCqBM2kbj0ho66bx43cmw4FpFOj3ozTjQLvE%2BFYCCnPSgF0bpGZwsuzra%2FpsajEephttU74nQSNCmfHBn2aUSRyQH8sVgwA5lt7UB1oOCRK5tv3rkp2l4Tq%2BUS%2F5tw7e2WzFk3c6MjS9NFUni3B%2FdpDixCma2CBw5C6W6a%2Fu3Ujgt17p%2BZx2GlC%2B4Nx8fObOYBbGRoUTvCam%2B3I5o0zUEtIF3Vl%2BqE3SJQ159o1CB3lRwylk8rLpM5xNsU%2BeZcZSVxF6CqNzLcjDo%2Fngh9EyjBhECsFPDLpFdSfvaaoNgcLzAU6zMZ8cgFTNFIbwOfmayqlJ1l%2B5dVksewuRGBzGlkOYlXb9KE%2FvgfvkRzDtERUNKQkfGagV060WsGAX7H0pwcgTdAG4SruN%2BUulIhIdRhPrU7F3%2BmJzmGWiq3kmcvAqJ66ft%2FxMOWO8ITINZxqMnney39t8RpiCu%2BlprYXbXU%2F2RgTCNqKG%2FBjqkAeJ5Xlv1pcbOYaFFlOThMTBqN0BQIuotY9WNiRi89rYyBA20B4tx99TS037aTly1nzbScSEI82HeWXxQZBtcNpWV3z%2FySLKzA2wYWvJPXd9Kc8H2%2BzsetAFUW%2BLuNaop%2FFnlHZqS39G2uhkjLQvTmSMoWf9AV%2FjiLCYkscozO%2BiWAdfkBeN5Hrtgd%2Fknu%2Fy%2FyTFt8Sp6XfCtk9XA0IEwrZaiRR0x&X-Amz-Signature=bd15f65105bbd5850c0ede62f648f228d01db32e0c7b8c351b97b9565c95ea53&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

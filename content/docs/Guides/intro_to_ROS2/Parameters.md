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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE6PZWQF%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw1bQDPevoSjv95iWIhZn31mKOqgcCM024cpmN%2BYklPAIhAIB7WGUJrYw4gOI4TAS7P7zyW%2FbnzKPP1CQeQDdS%2B%2BsSKv8DCCwQABoMNjM3NDIzMTgzODA1IgwEEvz9ITrrLHK8hq0q3AOv7hwEiJGPGsAGd4%2FOg4VVL3tupRxCl%2FLD8wm3WUOFRBO7WW9QkXGQG93AZdIoZxABi%2FXK0cjuKFv24NV1uDeHQ6KdwUQKhSUuN%2F0Cz0xo%2FTeL004EtTqpgyWSdcfpyV4xqJ60zAEBG8SvhTcILQlUkmlkrK1M50pWGxVMkJ9%2FBt8cjxusnQ%2B6vS96jUNmsr5H16Z0QS8kurY3HJKOypxYZJ6NowGq5Z7tGNig1zFS4r4UsHmKkZWQDWi9Rbj7v%2Bk%2Ftt8emu2AhEBa%2FHVQ6sLAK2Raok95ZEeKlctW2tAgdG9aZPwafmWAsyR0rJ230gw%2FOMQfmwcIvLW71wxI7RG5tUFULBbKr%2Fm506EkozaC0mLCucw0I5lOuxaLCr7I1iO4c2h9CRdOydVOhOIp%2F9hQ2faMK3nAGjfob1AK6b5I3kIkkQ8kTLS4R53NeJ7ijKnaYk4SAi%2BT1v2GWDGlGYdyFSEVc0mjledEP5TyCvJEYd%2BzHowtDiDUZim9JMlKw4rgwA1z17zaLgDpHCFURmaZwP%2BT60jWR9O7r4GMceSCTN883x1rgx6dpDpOtyEmo6DkNdS0TvyYefK0RHeofqO3ZgTvUS4%2FsFI9IOnGweBT8ngS%2FcHzaPUIyrqiezCVjsS%2FBjqkAb4TK%2BoIdfIJ9EuSIQ0ygZlAP%2FtOnNTEv4Dg6mzxKPL71UJFiEZrkGTWmQ%2B0SGY5EuqlQ%2BZxeDvgKUt9pYa4n38MRkRI69w3xJCRPAppmnuh2jjXx2uqBsgf4bvXG7kq1reFxaGlWyQ%2BuhcVB3jdI23LN%2Bg1zhHIZ%2F8QyOhGf3b96Gw1YBAdz01wOFgWNpwQyxStM2z%2F5l6BIia%2F9fZEZI%2FIkwS5&X-Amz-Signature=653b2cc696b06e2cbce8ed39beda58de94c2701ba839bc53d08c36392bc6df12&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

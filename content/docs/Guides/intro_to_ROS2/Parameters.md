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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS7HPUUY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDSVxRK3bkMsUNxebHQ1AB4qfouxe2jv5gcwjTk3kk8ugIhAKpZxkti3dgsgig1ZBcEsnOXAAQ7jrFFGzOdb9iHLR7DKv8DCDsQABoMNjM3NDIzMTgzODA1Igz2ufkxbskaEWwwS4Eq3ANJ3qjQF2ZoIvLj%2Bc%2FM%2BGsS7yLSh70mPWt2JegbbU8BQiHvP3E40guboGjAFfn%2FYl5Pod363k6uksDI5Z6aL7ZU82mKFNuUR%2BVSDdJpjn5RWom8T2Cw4VsS4PTUREBt49F15PuRfj8uClh1CHhBNei4WIYcL1RmLBbCAdM4Gm8j6qxvH3i7uDvhBfy7OGlDtV4YK7oH9RZbJDp5KXWcyWcygAS7IYiLAOcrETGQb3rigT7Jk0xYS8c%2FDVmg9BU8fFkiw2C03omKNdwYzFBuus97FOdGjWZrTjVOjEyNBj5%2B4SCjovYwQigR3IWID0Mk4jTMAypIEw8jNEdHg83cDoFBU4cFqOh%2FTr0hj59Dqtpb5B3tJ4taPknYSRHTnNausreruY%2B%2FczA5BVes1TS8de8KzRk4hw3R8vo8dwBklqlj6krlU6oixhdOIcRzQvehMFAuaoiW%2BW%2FAdSBIajxx5%2BiN4VT%2BAoCGSao0DnbbC4XO%2FJIts%2FfsKsBYRWKlMwcp7sAkT9iSmOCZ0wuOdYVdIzCssCT6rqlpM5DiRB9%2BseUWnjmEDHk8IiLYP91KxmrfdE4RrQYpDJAqQSmi5sYo4dRdl%2Foojt9LW5yje6Gv2RPoUa7pMKu7g4%2FXfyJRSzCx04vEBjqkAaUPBTTAIdj5OL958iW91l8uZIqy1vVf9dv%2B5xR85c8dGeTaTeBBDZut18F2ZVbcBfxRHTXOgDedkLODK6i%2FkS4C1IjgwQztnh98ED5aKe1VYFIiReJyZadokyJUs2EzgByiR4BOT6oXmCw5IGgZDNi0lUVfiBIDY0BbtIlwfhTutwY2zp6f9uTqqL9k8x4NNCyoEAilM3zzx%2F7VzFkJwUh0E8pf&X-Amz-Signature=8f76c0ecba4393f9f635e4261f05d20ef9bfce52702697a570513fbfd7e30e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

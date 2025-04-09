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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRGD7C27%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDW84fO3vJpJ5wWSqspit%2BD%2B1%2FNuU%2B%2FWj%2BBy%2FgIDi3vEAiBONAUJE8B5yCi9uZ%2B1gQg%2FeDpJY1%2FXSoickCga8H2AZCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9Pqa2mwwM5omkJYUKtwDrwJpMM9Gh79ofcUjVrnZS5%2B5wZcRJbfHt5YJ4%2FVBha7ZtnSQQ7vnTiyYVIG8GiJ%2FYgTx%2FWeKG2t4ZAA2R%2FttoUW%2BqKq0F%2F%2B8%2FRo8veaTVs8p6rOr5QkPuDqUD3OTa7%2BzghlPIgZyGWMQ%2BaBc4Cj7VwixhV7xODDw6w04HzQ1AvP8i5VAIyUuDZDSHlVpdUMFESyTiXVlDoNquImjaMBLWAxAh1vr0vWxQuHaFjmMwGTosYtnUB2Jn%2F5tyvtE8iW2JAW9uZhkTUDtghJ%2BQl0tKtwImPU3fHFPOiZi4KdFz1oT4m835uxrtt1Hnwvxisu7kQhRTyVMo%2FZ4QzVYM4RHKzlFm%2F3IqlCuEITUOx%2BA0ib7BsB%2BTRkmS3L%2Bum5TGJMb1L8GFcFQyY920x%2F6QGiVj3F3Cerq9r29kcxlTDxP%2F4rRszTuQ2rdiW2XeG6WH4Q03fZzniaTXQL82Ie8NpVUubU9D%2BiLNDlrfDsBJ3g7zSmGWArYN8lxIrb5UtpuJFV9b288urO3kW2jAa%2Fa%2Br%2FXJiBipYmjnUgofJdcp%2FigGsKUhZulgYB5%2B%2Fl4hAxX4afMb7jP7hW7RgXibDi7T%2FUdldh7xJNNEJbSsDgkYum%2Fb7syFNxT10ZjqpqCkDcw7NbXvwY6pgH6B4hD9M%2Bxaelh8b7779OT%2F9snSDsbII7c3YQB97qCEnP7JZhGuuHoHv2fvyVHJK%2BcUSWynY6zRYoBpJ6SlxTwH0U8xa6cxbfLqXv4I2fpq%2BogCJDEXQmXBGLxwcVvZpk69VlKjCPbcpQfXNzhll%2B%2FEwaEz5gyQWEFiV%2F0CG8ZlLbdXSYHtsW8b6ylJekZxWH4cShWjXKYq26efsy3jPRupBlGxSza&X-Amz-Signature=5c470403fe84aa5c2b7a4bfb84d59033b32874b75476fc4f21460487e7207054&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

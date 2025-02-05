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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL4QSP5W%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCQnZuEdZ8QA7GxyoxOIT85PgHX8Ml1MfSvoeWizWjlcQIhAPhy3rFz636cFMNRrJdCeaNqEaj0iGNesC49yCJiPIBoKv8DCEoQABoMNjM3NDIzMTgzODA1IgzZlEpdgOzE%2FIr0HBUq3AM7gROkYd4lZ7ydxKQEKiNvQCzmvoeU%2FvShRCoitBBMjrH1QmVdHxpZdJGJwitbcT%2BHkF3fs1d%2FHzSDwvCCDBvARNt62g2i%2BEkdy3jCTBbodaLO0htlC24pUsJ817w1vZ2ihZsYRmE6%2FSLx%2BxyHzKAMIfd%2BosCTnENYsEtYV5t5rIpx8nUfSDVFGItEi98HOlk8dqQkp8hMmdci%2Bg3Pe5DaPs4QDDNO0LUi1gzytTO8YAkF9TbplexRUu2ZI3bvLvBnKwdEZusBKHr8T77j99tL9g1JgvBpOF%2BM%2BON6pdaJrStypOAVDhQKq%2F7aoardHcvWZYBqjEYolxGl0BoIgdXzfKi07gcPKxoWfjMe2HcwAWkWds1A8vJGSHf4JGIJVjECMdrPJ5fkHvkrUhRanJahHsPnald5Jd2mvWV06AVSAuL4L0x8AnAJETShOF6yMu0VTzctXlZ7myyyB5DO0UsyUux%2FGRSfcgr4qrpI3Git2SwoK0xvb%2FqHL%2FWID79g4K3K%2BnNeALLwA0ceuNfXdvBIizlkzAl3hg47B0XxG4NLc9b7uDiW21Kf03noQ8Tvveawvyq8uIUgsN17pRAQoFb2wAg1E7upZnyP0eU9l5i%2BOMTL%2FioousIz0vh40TDmu469BjqkAW%2BA0sKWHVk0hPNT1G78eOeaFuxD3CYwxq1LIpy9uybmAT%2FsnWpyE%2FVhri8NuN9Zii8MQgl7eX44iJMjfDrxQVo%2FS2FC%2FU7YxR7IA1d4P%2BZCOtsh7o0ySwttFWaWLv%2B0Xc1uAGCr87482FVII3AeJCIB8VrzzG27uIGcsesjAhStZvz9LY9%2FhCKrND0m9Ne7%2F5GU3HrDEaCplb5Res70FSGQrhDG&X-Amz-Signature=d483cb65f14d2acc67c71b0f95c6c9c1fce64c4d3fb046672cb67c2312314c78&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

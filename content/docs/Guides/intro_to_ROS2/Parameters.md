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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGHSZHD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGfPM0whG93w0ut3wxu1lBZ3%2FokmMxPHG06V4FBlJzF3AiEA%2BlqmW0hNqTRaPW%2B1RRSJGrEA6A1heFkzdcXEDa1jCpQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjK675BZzQOJVZJfyrcAybvGTjGJ5YUhXVqda%2F1wwtNn3%2B2i1twnvfxehfn4Hv8xohwK%2BQF05uV056zQPZQKL54a5icN4eDx6cUyaTuRbvR3iUviP%2FLR%2BTQ1AjAhFLnv62RvQowGqPrw83ZzNvmRCyGUbrUMeHqJy%2FjMGRAwcRt%2Bg2LEfwGNwFlZHruIQB8BlbNRGhlmj8FuqaG0%2BGeWbkZUW8Z9YLQ4vhlGDqIogQ0nHzhyCXIGPKs6WqdjQP45O63xIgHXn5l7OKCrL3MpNDDcHVYU8%2Fuh%2BKpmI%2B9vCn9310fRDqUOQKShEJPlfPK%2FyoO7T40nEkrAAwcMnLUBOC61Q8elQlUurFB0EYfUlGCoxqLsNRYfmzt3vUfBrSAx7vhFsk6%2FpiZEzKF8cV3LEKQqS3Z4eOlGYENNgiGN7XiYpBWdRBecnqInS%2BzM1D4zCyIZJKZsN3KmoilmybSIsP6bq%2BTQbNg88fwCjnUSefh1PVnYQsOGQZ66CVsKC%2FnHre9m5epkRsHKDejdP9cNGQ56ONjiA%2Bo2S2W0TE5iWJ6xRdlfx9OHgo2Y2xfcvocxl7WYENmNjkt6jzufuCU0DsdH%2FQnsg%2BTrs1NqKdPmaIvgezp%2BPWuaJqH6Cl43pkNS1LNAAenoxnH2f7TMIjy38IGOqUBlyfJoas4sPO9XRFs8X%2FdD6VhQuqwBGgvl3hy%2FNnpPQbS%2F3Kys4M3nNerVGFqIlJ91og7Eh2ZbxtWArf5K754KuuOzTp%2BV3%2Bb2%2FYiQHYad%2Bx0FNo15negxWgiDVzDUqECtjTr04fnabP5SDReYoGlYCQMg1kc0wh0FFC3Hvn7cOIV491WbtsQrXQ09pdKmfTylkvObhe03%2FMFBTRDm0fChvn1kLut&X-Amz-Signature=fa1bd53381299b9cad2dd88603b7cac02bdd833fbd49ff0f0ca938ca7cd12219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

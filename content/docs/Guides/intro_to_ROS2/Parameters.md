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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QSEVGRD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCyngamgByDKzow9re3g0QpIxI6gI0jabNLvHig%2BlQa0wIgPdWEclY1OTYq3TKDGigWiwsmgtgkrogP1oVtrPe%2B3XcqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6%2FiG%2F7hd%2BpqFtPByrcAxSlaN5lowH3wtrgmzpNufWFGVwbmNM6FIpk%2ByBfID%2B0538khUB%2FNGojchP%2FBdDFGiuDdsaKxb1LypF3saXfpIIFTKkX5jkEi2cTaa6RqQ2IJ%2B9Zz7cSioLOqz3rjaGGuG%2Bi2HZTciFq%2BRrw5sdoipNJfaUf7gwDpVxewbZXBratbL7eK22hq2xUj7tSjd5ReG6eE1%2B0B94Kwn%2Fwd0ESpYLqQkqXtZEiAeXY6jZssiHNfVSx0EmMBDZ9RLULVgABymippOWUuB1nMwBnGHs3pz31sgDGIXFW6n8VnUkBybo3QqGs0RMLeNcTapI3%2BQGadl17Jfu%2F587VNKvS8h%2FQlzmuVmA6ZJtm9tjfjCNFX6kUDzT%2B47B8qESRgQE0L1Wuw1GnwnLjbf4lCQX6ZyXR8RR297wX7dddEki4HPKsQLjlCnwMG4AOvPdQKWkjNlTR%2FUkwTl7gErFEq6d6sIInoQ6W5TILcrZZH3Im0LJApWwE%2FXIhJH2mcO8HYoHvIW7PId3%2F87uMiyJKHgGGzhS%2FvDaI1MGpibEYKztYksTBwsdS60%2BqT7VJEKARucW8hJfJxifKVXcvGhlPraODPrrm5qkU3%2Bkp2fRQvazK4mhzlwqcKihsj8ANUSTN5jcKMMnegMEGOqUBCZVa9PnC%2FBFzh0Llsxv7qA7Youy7CMqU8HhDhuT2Tyu1hxBPhLnqpUNd83t8WpFDTVMpK19juWifzQQbu2a4Ihd6xcaOn6agEQKNJGJrUosSsyNYqNdjak0eCu1teP9%2BnWA2IWy%2BmAWZG4PCjaKHD0jhf7VdEL8QfVNcsTEimjxDMYjkXKCxIUG3kRJyYJgHfsw1W1WziMIH44EFvnA9G6WgG4Jq&X-Amz-Signature=4f4eed21e93a3b36f606fc6a5613e0301458d8d13e29ece4698b688449e60106&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

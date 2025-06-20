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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB3TDACI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWwam891ZNKY0B2lKuX%2FBjbUauVXBLVIpLShQ8cCnj4QIhAOedCVc3ZAp3qdgRlz4dK%2B6QzO1mOLKgNw6in0b%2FuApqKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCEvSFrd%2FCNLJm7V8q3AMmfYMSBN6n8wUEWz5kiro8od24ebwFSR6gX4YAu9MLxxfsXLZeGjuRK5vTycJbqEHJ9OZM2NMDDAu2ExHmf9jLIBtRxTDoULyuU%2Fzkw9CENikOkQVUDq0idX7oHkKZekS%2FqNKtyJb3S8QSYhoeDAl8ISjjzRKAlfL8KtOkIk3ZbAH7kHFnMDKW3PjI5h%2Bbj5h%2FCgy5WYL1JPS7qW7JLFMVFFwCjqrbkATwbOEIgeRNMmVibeA2%2Fl4Y0b8kDy1Oe3ShD7MvlZWcB0P45LuusdzV9UJ3WE83iBWIgIJ3O9W8DQLpXUyf6JU0i5Gb1j3i3XZMKyQ%2FsJro%2FOk8Q01DNoeYUrEqsl4ktTuuR%2FotntG9KsboZ%2BhMYiRegiIea7CeRL8wT3qmAnHgKCU7r%2Bqj9JdnyspKyMs1OeZ8HXVYAfzy2V2DbBcCg2mV7yzeS0XZEXsA5nSOBcvo%2BCykaMkAf%2BcqV8u6%2F7wqgQbe%2BenQ3FtjipmV6Lna5hYG23%2Fh4zNgXweEm3Hh9swpP5jLqwsvm2JoO32OvnBNE5sptkBHtceprxhtJoE%2FHmMWUR8ax8MA%2BWxUDiIQ2Z%2FzWBe1gw54S6EgJxQpRGZ0jRl%2FVnJfuDKC7zgTEkEUSnFblH7FjzDxvNbCBjqkAd2JQJ%2FKx6La860p4fPiDlwrk%2BEzsd7Q9XmApim6RA3nNr1Le3TegRtHQd6KAnThBcJoGnR%2F7QGrdUAnbcTnIICgBeu75QHzT7J%2FQ3OOoREaW2zKSW%2FavuA6PtkuDSJJLr65UflGffXO8FzpTdp4BP7MWLnLBi5VVh7q5ev6Ci8g1QrhGTRlZ0MY%2BTloTBgcIRtPor8bvuwHd5NYh0Hr77eQ%2BWEc&X-Amz-Signature=a2eb9228a7602fb082e64e773732856ede28898fd6df7b06460941c86cbe0538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

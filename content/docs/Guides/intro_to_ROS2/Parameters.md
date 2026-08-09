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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GEAWXVB%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1mf%2BT3x9CDuzSPIwxVn9PsfI0Mkf%2B0dEpDS5k91uQsAiAhwgdid3bfChWx3IzzMCp8CIVGToRQwDRzSNX5Kfh5pSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMC4oewNLvPhyC8eqqKtwDACPThBS11t11JtWRj%2FQK0Z1zsrNXpXTETkIkiaYpMZzJZ7sHGCt30nxdZKGt2KqpZ%2F0WZhHoCud3y1iyrRqRZVaIF2lL9N8lLmmMk43T4O%2FCBiIqK4xpguU%2BSa2WvuZrsSUmtwFe%2FseU24GExlM97TCQ70myd7xUJPgmHhM5xKjU%2BI%2B0E53wzLY2PtAY7Tq4%2BkD3bOejpWFx%2BjifCAKfK2mHPQBR6d9jFG1dl%2FoYFirPQDdYMyK02w02jK1Z%2Bj7KGGyWfYySSbDi%2BEGi4esH9jZ9pm1uESDv33P4QyLmhB73duVPZLYlL6Y%2FBxowttnpV7XGg2jB4Oz98z43X5gVRcQrMxhw00hm6hgrbMS%2BMIXIdHsEgSwrwe0ragxN5zB8i2RyVeBjNOhEZ2bSElVlG4oewbPFuef95lcmrdjo8OEVEw3VqVoqhv9e1P7PhabvxoyWf6gU9f8%2FtmHphleQmunmihr5Wd4ds38OcKkzMBdbsKYiAP%2FdnzGJBJ%2FqKoFp4IpZaJObsM6uHYs9adwUHDDaDYTWUTQimE1s%2Fv4LxzfQarkV3EDmWygItLCQA674DL398SvEv7LNevp6qIAG98f6eSu4Gu07i3HIXmq6%2FCfQjK3MDtPLY51M3now2dTe0wY6pgHZzmm9%2FsoDNto7qHfs4A08fNYt%2B4XGNZG0EIepx8Pxg%2B0Jd1ADg9JyyngdF9cuX7TsqQv9o5ovxWuGQ9q8zm2plt%2B9gRP%2FYmDM52Sc2mJLxq8%2BErY0DDTRDaBzYUjWxlQU662aixiSUD2MJEB1XcSauWxz8x3Der1HY3HEWts9nBOi3gyE8WgKJUlmPc0pFR9VStgQ0rx7nht6iLMsCGYeMleHkc3g&X-Amz-Signature=b6b6998926db26708999a8ecffadb048693d9632f249115e1aad067a50a75294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

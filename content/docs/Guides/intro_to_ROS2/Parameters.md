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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7POVSN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BiDyh7uHx%2FUSvsxmeavPbbcxmKeijufez5IZuWjOlbQIhANMbfzaFfo9lvGDJ9IhdpAarbIABwHwbLRe7K26rn6LkKv8DCD8QABoMNjM3NDIzMTgzODA1IgxaqKQfU0ZCbmT4w90q3AN2QWtn54%2FV3wYMWOAkK0awJzePsYeFIbujJ4i2Rpi2rg6dnEBUGFA7VmH7EP%2B2XJ%2BY2fWYPLVLWK%2FXnWfujxJokPWhaZcWnB4xNbnNZFyZQT63KIxeOSvcYlSsU53j7PJKRkZS27Pd8IMNyVDUwuqZV0dY4sEN5rUuvGJ5PA%2FiZbrMPHtQ6eahiiMDa6jXWQd9CCNj5CMRzdSTf9mdNB%2Bqb73NQPanOS1Pxu86iJ0kUEXYpQiyriqXKiEtOCd2crXAf7ZXDFfwT4BwrF%2BN28VfnzyG2UT038umQfBImCKb%2BWeMXi5zpCh8aMAZYydosLiy6FBOuAjw8MR7nnSxt8vwv2CakYQfo2ktwK9TyjpAgU%2Fr2rzEp4MAeGEYJRW1kGLNh0MM%2BXhDCmeW8D3p5dbc5bkaOpCgYz9B4lgyO6vq5SaSLYPPg8tiGq0m1becQ3XTmL%2FHa7X2HGerdaUUN8eNh76eynlDN%2F200txtZo2U%2FkAgYrigCa3ytIuQKJT3hSGa%2BXcBjgTP5Twwn9jMyioQLuVOlVgyPRzKVIwLPhQwhyAHwO8LQdvNeogdgpBfFBIPkgOu2rCckJEVLx8yoD4K6wnb6jtIy8D%2Bp7pgTOv142tKeOeQWNZS%2B5qJyzCn%2BfXEBjqkAetKzV2WfYe9IwkSml%2BaLhps1RKP762bvjqBfy5EgvdU9Vm%2B2X0sGx3W%2BTB7pGylfjYq3iTGlR2BIKubkhGxZt%2BuXKfbl9WxaySEbX6dPfFjNM03tMzdF3KSwm2cg0INeszuemYQ%2FUt9CQ7IMZNHanlCw6dg5no7vUHYBUS2ZA4HjG4vgkO43zAENSnLAODRBVFJWW2fsPkcM3XzVq39ZKMcq5q1&X-Amz-Signature=d2320cba30399170576971703a2857fd57620f156e88b3318f7d6a7beac5d394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

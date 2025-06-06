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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KAXI7HT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCGT24Xd9YTTlmDxBSDGsI6eAq3e7Xz6v6Mw65tlMknEQIhAIuxj1JK5z5Dl3eByoWRqQAgJYyWvURX2%2BPwX3wJru%2B0Kv8DCFcQABoMNjM3NDIzMTgzODA1IgwQ4mSgBB%2BuEOFGt00q3ANSNrcIJqvri2SGC9uYe59ZmPnORPIq93lpfQEwwLrx7rysEVvnqKBz4QV3r%2FYbMbToMaXo2d1iCflLxwEdORL5MCpaVg12iH%2Fe456VfRLXVfHYa7us8REAWR19SlAaV4p9mzd2pgkmki5tbWm0affDXb3REumzROtC%2FRA0qw%2BmqUqH5Hq%2FHNikrEDAt%2BBDJiDMR8aesGCZt4JJJUZMKzY7dzkNd8XMokaIkRKLLNvqYnz6hQ3qAJr7tee5CODsnnrM%2F7KNJaobSKAAaLNWzwvjsKLB7YQ2TkouMKHKFFoE%2ByD4plYlI2eN%2F38HDH5xmm98FwXHSCxtrLqx3MCHzeR65VSGJhZhNVRipStcXHGi3R817bK2T14IA7XDDDTwOYznwuzqbvMcXLJD1ekxZHfwpTWQ9OImamZx0vAL60e3XLYmtd1nxjU%2B2G0sY7kYB88lBt%2BOEg8cbuDf78qa0iYI8J7uLqN%2BF5GcV7qG4R1ITUGNTIGNoDcbJKU8oEXrj8qqbtcEhxoi9ECackxSA4kGgF9XnSHeCsyYeDjmk%2F%2BYj1wxD3tESN3FZsepbUrLy5Q1qS%2FtbJnlSRRgoIoPhfjOaNCink245PTxJtNnswXGx%2BUgnuotW7b4TkoK%2FzDJ%2BonCBjqkAdIcE9J7iBk2f5z49nwNjcQ3Q5TcTJlPBIOHiJf7noh1swN2qYCSmuo3MWN1m05%2FGRWBvW%2FQ%2BAPXXP%2FwpKjlgPkAwgJR6m4eROiNG%2FGMBUxyLXYv5tZXldR2OvKL43Cxg18nHxJiYhFShoNnUALAp6V27ElVELntVddkVpKhSoF0UvL4y3g5zvSMaHCUipek7yNxGmTin59DmZID82XohAUnHT3B&X-Amz-Signature=54ab885b17f23a2b07f8c80bdd66c5e592ee9515f31ffaadc22ceb2e490c6f5d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

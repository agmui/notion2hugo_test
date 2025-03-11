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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2ZNKC4D%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIBTgWf6tkhVzoeVzPIvdgjDyUhyJNDrrfPayIVqxiBU9AiEA07HrNazNUzQeDweDCfmlxkRsKEzrh06ORXjBZ40CHvsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhqpE9Tes6QmzG0ASrcA4KAugPHAo5F%2Br0%2F4rrKnbMPR8M33mWVGZh2JewYJCaFjnTbufI9qM9BkAIwITfPM9U60OoSWzT6qZyTkkM6PRrBCrssXk35hNkzIhliMCdPW1pfTMwm74jbPOfzqGYrSLYuJnBbkMMVXLZOQgDPJpfu9siy2cm6zLxZGtr6D7v3PwJXqniiWQyqWJd32cisjxxrC6V05VOUlsvRcN%2BBl%2BsmZZFHL0nYnKupjiDtT2UjKVN77YXx1SQXeFRsuxtxDvpbZRxDdLeuPk0mHrM7uu5MAH5G6LjuB5SUJkdT1H3uKZur4%2Br%2B9H8X82eRsqO%2FIzKLdpbHV7UknjZ0MUE7%2BywmbsZQdyQlqoggvbBzxb9Yz2I5h5V4PoZd6qlX3dwpEabOFDbEyyMFmfBTcZ7NpkRVfd0%2BCMHJU21IGeila7rZRtx%2Bikhya0G1TDvSn%2FRMwwDz%2FK5k6ycnYYj6CpLezjK0psDKC5MRjgD02ThaZMwzfrwsb3RU%2F8yZO87nllML4ABxRXRt0kEqiROWuNtMOdvyEpx4bUZj1fpPSpl6CIYPkqgVvgdKn5GD%2FZS6KvxnO%2FTmuRNRT8rzqGQ9gzQyhvCfqQZ%2BuckjW7ghBi7BjFldA%2BpCeEV3jySEkYPpMKzzwb4GOqUB0GkfFJ1q0vtWmIFvWEJ6Im4vniB3DCPN6m%2BekAoQVEcnHG9e%2BftYlcWsZ2cVEwHHrI0dSaP8%2BM1O2JE%2FN9qa%2FVYt7rDx7TWayXusaVVakQ5Fnb6o5UzHX3xpjsSQTxwH0vmSdXQ%2Bdsa8TVxfs1nKJnY%2Fa8udHJDI3Rw%2BUF078iK1gzBLh6sNURrLJZa6m1tKNKvJjXR1iam2K30GfF5ZZu7bdAAu&X-Amz-Signature=a8f4b8546a58aea3d0b189c4961458c38c92f705aa37981ecc328b377bd0bd51&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

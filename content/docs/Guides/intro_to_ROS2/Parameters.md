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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJ4IYT4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2hsCxKirYJVwCs7s9AOzeU%2B8pTAPgbYE1C1UefVii8AiEAwoBcOxun1AEy%2BS8b%2F%2FzUlN1LVo9XCS6oXhtplRWpzZEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgmg%2FYOWXq6tDXJkyrcA%2FXqnBHAzWLrXysMfdK5gQDu46%2B8W4h8pEWcT%2BZ%2BtlB%2Fspem5uF4Ggsj4aMeQrBlEhSCQ7dpe8x32e1x3ahfvs8Dki%2BcW3nZqUlXFHdVWl47dBHWuPDyalf5BIsZRNckf2AEULsm1IhiuCADRmeK4vyeqfi9PX1Pz8cvmTd5tO9two2ffQbT3jfO7KkU5HDvELC2hxUwJjoWeAlgmGtu15bcJLcQtFAZZqi36T7n7K7elogCgSKZ16e9TPeg8vJaZKzpEY3v39MnhCdNbeYEy5BVd0cDrneDTaKzaWCpW%2FK7w9LXrT2nu%2Fhi%2FbWcLwSJWwCGzTZy%2F0IOipp2j7NOyNEOH7xe0GAkqFXdpAamQYFSdcvhjq1ctuxvPtlAkoVhM%2FEwz96qYzrGbVRYR%2BGoKrKP%2Ff%2BmugctO5kih7%2Bx%2Bsop0QV01%2BYzod7EFuIlMNcNY333Vk50zaPJh%2BPF2KVbJ6h6yE8VoClC13vSB9rrCgsQ9VuXmu5oY11TLuRS4W%2F%2BxY4joiCm3q%2B4Qwp%2Bap2XvZc0xCJX9Eer0HsQhW71tqjcZF1o%2FVGYgOkss0qcUmdtm2gcIvNyn5QUNeVh3o5AsRv5ZH5nlC23MXDyGq5sLND2aYtZkc8KJ6g6K9TvMNul97wGOqUBeSoossoOFByJvLVvbOfLNGG6iYUbWyV9x3kXz6JZZnvr5zay%2F6WXQ6fJc1ndCI%2FRkbkJ%2BGwXKSlMgBJZ6LosbgPfTw9qn2NSAno87rujnYPZO7HWwftQ21wiWOkAOZGC5BkXOurWiUCVq8XuveB0Xu11IagbbT8Uchfi8%2FAdQTRM2NWXtHeWh%2B5r6D6L9qK9FWJINVix7ol6ZQuoh88WI1I5XBJK&X-Amz-Signature=1ffc19c8b6fc9578ea5ee5ee9f13517b7df8b8c181d058724d9665ca3813f97a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BYKISHY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4cHDGK%2BeoCWEGd1M9E7dZ48hVNQzCuueMy%2FWQ4BOcoAiEAp5x6eEkTBplFscA%2BLtgCpOIx8e%2Bt35eK0OyJvE52ROUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDNiSQvJj13ndvD%2BLlSrcA9BEWZ1NARfnl9tcmmmonYbwx%2Fm7nuY%2FKr0JfwikKDg1JuCAW6aJp7tjKTEywqsovIP2E3QUR450BFXv5S9%2BT5wAkBqzjYSIqB8OevbbltsePEH%2B9OelIRJgirCAIEBxKO%2BFCod1d1kk8%2FpOjUONbjAsY%2Fo6b36Kk2M7Nu0%2F9Q87WOXURzgqncYyFXCM1eIzqO6i80iNXgWycCZgnGoyUUYPvrqTYq%2F2QylTGjXRJx6pbMkMsCdXQJ%2BO6ZfYli20uhhVC8MQ92wiNh7B%2BwOqO53s301tKS2aJt8nPHXknmJUJSUEYM%2FWzkvQzStasbDB39%2Fm7VXWAFUUnQTR7iv2Mwc0gNQL18Pjo7MWOTRPpTeJGfHlpmOEBt8qb2THIkpaqsUscI2SNdG3oqC6lm5b2%2BQ524k2y9o9RPqSNnUun%2FGsTBsiHxKTPNvnhuU3UDc%2FWJ5jVJlJo8upsRzbhqUyhEIsAJmMp%2FZO8HyV3aBilu5nhrrHh4Lv86zk5Of5FHCZ0E5614Jd%2FO504qtYq5ZORwAdhLe%2BYQHbALJ%2BwfeXn2gro%2FOlRTxzsLdkWD8wzJYM10GHyxBWvMBYHHAbb0G7403FixcWpmfOWLaMQJhsXtWZSA1nGil5gfm5kYOzMK2uib8GOqUBGxjMGXIAbRhhlZe%2F59zc74JqSa1AuvjE0rUGr8plVTgtE9RUa%2BBNSznlqP08c62YDIHvQejUfhmeTyaHu%2FGGinYlBU50LkB1mAwTfsar2TKQv3MqHBt8u3Q9cJIH%2F8X5Q7H8AKo70LFhMSjOEJiYWRtBSmY969pWZqD70mfY5cVHPL2vBafh9GvVsvAeWQrpvkFcXZQ1r%2BK46FcmQPjGEYJFr%2Bts&X-Amz-Signature=6145026dd615e47728922eb8644490509c44e319cf6d0a9d641070c9932bc717&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`

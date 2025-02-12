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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZISASAO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVjfQTgLErFU5dpY%2BfzVR3GGL7ak5%2BJTdKn4HZ0rquMAiEAy9o9hlLZ9eBFLASegDkwk64q0uB6ful3WjsFwOQXATkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2Brp4X8MiadlxfQkCrcA%2BvUvFtVZzQlZ3taut%2FTTdF%2FMWSEeHUgG7p%2Bq6aO7tt0VBR304vbSf7Us9fK02NcKmurd9%2BawAna2D20aLUXi%2FRhAX%2FsP6aoArkiIvWoR86JbCRYLviKxRqQSHymzevCW7G7rAaJ0OSO3Jatqq5Rc9siosHg7UWfQBWR3nSdG4cTTVUy41DOBSOrq8naYoGGt5zHkRAyNkZtMzsry18NNub5Eb4BnzyJvnsQuXi9mpYMvzdI2i4v6eyI9ANAQgCnpk1UCwlLJ8Uh%2FQdgMh8xxIFnaD2%2BPmTB839E6NSajAk0bYIdXr02ti1O1kXiWMMCH6yueiYISnjKUXRrizXAd3lnt8F%2B5dhGQ%2B5CbSbkIKj8ujm5Qc7XibQ3MAmUAK5BqntrTBaoGLwM6t%2Bn24MuBPjEyf%2Fnu8ixrNM9ODf%2B%2FAy4%2FlFjbM06dTFd9s8ge%2Ba%2Bhy8in8Lk5kpryxvS8obTCox1RTw0%2Bgd73Gf6u%2FSEoalZeBHr4V7zk81xfThkLDrAVJQ9UGG36PuMSjmlEIGPAfOzfVjDxdVikdxTctA7AwSkCtct%2B%2F%2ByhYJDUwwx9CS%2BkvjWhE61kiKIilgZo%2B3Wyv45qdsZ7DeUFSI6%2BQpu25spZtrLPfHMwRqAbOL2MISQsb0GOqUBfMqeMGFQ6twGSTQximUNirElw4rKET3js%2FTxooYCCZzKnh9kuOuVrQtNADjZak6CXDEsYgWReqEIq1xk4AkN898jeygQLUypu%2BQInBppNEpjG2vLpfewOeO3IV6QbUtfvtz1BKcrS35f7DahbkW8RNYFfb2Ry%2BJXKal2H9aD7K7OW%2BrTQWXTX1y7Lv9kf1hrIsbx7JiZHsudAiszNlpamaqJ9u6r&X-Amz-Signature=362a7cba2750c3f3d02199aac30eb7272752b366beea5cb2bfde6aedbdca06eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
